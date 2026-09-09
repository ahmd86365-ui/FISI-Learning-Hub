// Bump this version whenever a cached public file changes.
const CACHE_PREFIX = 'fisi-public-offline-'
const CACHE_NAME = `${CACHE_PREFIX}v1`
const OFFLINE_URL = '/offline.html'
const PUBLIC_ASSETS = [
  OFFLINE_URL,
  '/favicon.svg',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/icon-maskable-512.png',
  '/icons/apple-touch-icon.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME)
    await cache.addAll(PUBLIC_ASSETS.map((url) => new Request(url, {
      cache: 'reload', credentials: 'omit',
    })))
  })())
  // No skipWaiting: updates wait until all existing app windows are closed.
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys()
    await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)))
  })())
  // No clients.claim or forced reload: leave current sessions undisturbed.
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== self.location.origin ||
      request.headers.has('authorization')) return

  if (request.mode === 'navigate') {
    // Do not cache navigation, OAuth callback URLs, or the authenticated React app.
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(CACHE_NAME)
      return (await cache.match(OFFLINE_URL)) || new Response('Offline. Bitte erneut verbinden.', {
        status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    }))
    return
  }

  // Exact allowlist; no API, avatars, fonts, runtime data, or query-bearing URLs.
  if (!url.search && PUBLIC_ASSETS.includes(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME)
      return (await cache.match(url.pathname)) || fetch(request)
    })())
  }
})
