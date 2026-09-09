import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import vm from 'node:vm'
import { spawn } from 'node:child_process'

const manifest = JSON.parse(await fs.readFile('dist/manifest.webmanifest', 'utf8'))
assert.equal(manifest.name, 'FISI Learning Hub')
for (const key of ['id', 'scope', 'start_url']) assert.equal(manifest[key], '/')
assert.equal(manifest.display, 'standalone')
for (const icon of [...manifest.icons, { src: '/icons/apple-touch-icon.png', sizes: '180x180' }]) {
  const png = await fs.readFile(`dist${icon.src}`)
  assert.equal(png.subarray(1, 4).toString(), 'PNG')
  assert.equal(`${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`, icon.sizes)
}
const html = await fs.readFile('dist/index.html', 'utf8')
assert.match(html, /rel="manifest"/)
assert.match(html, /apple-touch-icon/)
assert.match(html, /apple-mobile-web-app-capable/)

const handlers = {}
const entries = new Map()
const deleted = []
let offline = false
const cache = {
  async addAll(requests) {
    for (const request of requests) {
      assert.equal(request.credentials, 'omit')
      entries.set(new URL(request.url).pathname, new Response('public fallback'))
    }
  },
  async match(key) { return entries.get(key)?.clone() },
}
vm.runInNewContext(await fs.readFile('dist/sw.js', 'utf8'), {
  self: { location: { origin: 'https://fisi.test' }, addEventListener: (name, fn) => { handlers[name] = fn } },
  caches: {
    open: async () => cache,
    keys: async () => ['fisi-public-offline-v0', 'fisi-public-offline-v1', 'other-app'],
    delete: async (key) => { deleted.push(key) },
  },
  Request: class extends Request { constructor(url, options) { super(new URL(url, 'https://fisi.test'), options) } },
  Response, URL,
  fetch: async () => { if (offline) throw new Error('offline'); return new Response('network') },
})
let pending
handlers.install({ waitUntil: (p) => { pending = p } })
await pending
assert.equal(entries.size, 7)
assert.ok(!entries.has('/'))
assert.ok(!entries.has('/index.html'))
handlers.activate({ waitUntil: (p) => { pending = p } })
await pending
assert.deepEqual(deleted, ['fisi-public-offline-v0'])
function request(path, { method = 'GET', mode = 'cors', headers = {} } = {}) {
  let response
  handlers.fetch({
    request: { url: new URL(path, 'https://fisi.test').href, method, mode, headers: new Headers(headers) },
    respondWith: (p) => { response = p },
  })
  return response
}
for (const path of ['https://example.supabase.co/auth/v1/token', 'https://example.supabase.co/rest/v1/profiles', 'https://example.supabase.co/storage/v1/object/avatar', '/api/profile', '/assets/app.js', '/favicon.svg?user=1']) {
  assert.equal(request(path), undefined, `${path} must bypass service worker`)
}
assert.equal(request('/favicon.svg', { method: 'POST' }), undefined)
assert.equal(request('/favicon.svg', { headers: { authorization: 'Bearer test' } }), undefined)
assert.equal(await (await request('/auth?code=test', { mode: 'navigate' })).text(), 'network')
offline = true
for (const path of ['/', '/profile', '/review', '/auth?code=test']) {
  assert.equal(await (await request(path, { mode: 'navigate' })).text(), 'public fallback')
}
assert.equal(entries.size, 7, 'No runtime or callback caching')
assert.equal(await (await request('/favicon.svg')).text(), 'public fallback')
entries.delete('/offline.html')
assert.equal((await request('/stats', { mode: 'navigate' })).status, 503)

// Exercise the actual Render-compatible Express entry point with built files.
const port = 4319
const server = spawn(process.execPath, ['server/index.js'], { env: { ...process.env, PORT: String(port) }, stdio: 'pipe' })
try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Server startup timed out')), 10000)
    server.stdout.once('data', () => { clearTimeout(timer); resolve() })
    server.once('error', reject)
    server.once('exit', (code) => { if (code) reject(new Error(`Server exited: ${code}`)) })
  })
  for (const route of ['/', '/profile', '/review', '/exams', '/it/test/lesson', '/auth?code=test']) {
    const response = await fetch(`http://localhost:${port}${route}`)
    assert.equal(response.status, 200)
    assert.equal(response.headers.get('cache-control'), 'no-cache')
    assert.equal(await response.text(), html)
  }
  for (const [route, type] of [['/sw.js', 'javascript'], ['/manifest.webmanifest', 'manifest'], ['/offline.html', 'text/html'], ['/icons/icon-192.png', 'image/png']]) {
    const response = await fetch(`http://localhost:${port}${route}`)
    assert.equal(response.status, 200)
    assert.ok(response.headers.get('content-type').includes(type))
    if (route === '/sw.js') assert.equal(response.headers.get('cache-control'), 'no-cache')
  }
} finally { server.kill() }
console.log('PWA checks passed: manifest, PNG sizes, cache isolation, offline fallback, lifecycle, production MIME types and SPA routing.')
