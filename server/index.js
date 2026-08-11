import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.join(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

/**
 * Minimal built-in .env loader (KEY=value per line, '#' comments) so the
 * project doesn't need a `dotenv` dependency. Only fills vars that aren't
 * already set in the environment, so real deployment env vars always win.
 */
function loadDotEnv(envPath) {
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    if (!(key in process.env)) process.env[key] = value
  }
}

loadDotEnv(path.join(rootDir, '.env'))

const APP_PASSWORD = process.env.APP_PASSWORD
if (!APP_PASSWORD) {
  console.error(
    'APP_PASSWORD is not set. Create a .env file (see .env.example) or set the environment variable before starting the server.',
  )
  process.exit(1)
}

// Derived server-only secret used to sign session cookies. Can be overridden
// with an explicit SESSION_SECRET env var; otherwise it's derived from the
// password so a single env var is enough to get started.
const SESSION_SECRET =
  process.env.SESSION_SECRET || crypto.createHash('sha256').update(`fisi-session-salt:${APP_PASSWORD}`).digest('hex')

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000
const COOKIE_SECURE = process.env.COOKIE_SECURE === 'true'
const SESSION_COOKIE = 'fisi_session'
const SESSION_MAX_AGE_SEC = 7 * 24 * 60 * 60 // 7 days

function sign(value) {
  return crypto.createHmac('sha256', SESSION_SECRET).update(value).digest('hex')
}

function safeCompare(a, b) {
  const ah = crypto.createHash('sha256').update(a).digest()
  const bh = crypto.createHash('sha256').update(b).digest()
  return crypto.timingSafeEqual(ah, bh)
}

function buildSessionCookie() {
  const expiresAt = String(Date.now() + SESSION_MAX_AGE_SEC * 1000)
  const value = `${expiresAt}.${sign(expiresAt)}`
  const attrs = [`${SESSION_COOKIE}=${value}`, 'HttpOnly', 'Path=/', 'SameSite=Lax', `Max-Age=${SESSION_MAX_AGE_SEC}`]
  if (COOKIE_SECURE) attrs.push('Secure')
  return attrs.join('; ')
}

function buildLogoutCookie() {
  const attrs = [`${SESSION_COOKIE}=`, 'HttpOnly', 'Path=/', 'SameSite=Lax', 'Max-Age=0']
  if (COOKIE_SECURE) attrs.push('Secure')
  return attrs.join('; ')
}

function verifySessionValue(raw) {
  if (!raw) return false
  const sepIndex = raw.lastIndexOf('.')
  if (sepIndex === -1) return false
  const expiresAt = raw.slice(0, sepIndex)
  const signature = raw.slice(sepIndex + 1)
  const expected = sign(expiresAt)
  const sigBuf = Buffer.from(signature, 'hex')
  const expectedBuf = Buffer.from(expected, 'hex')
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) return false
  const expiresAtNum = Number(expiresAt)
  return Number.isFinite(expiresAtNum) && Date.now() < expiresAtNum
}

function parseCookies(header) {
  const out = {}
  if (!header) return out
  for (const pair of header.split(';')) {
    const idx = pair.indexOf('=')
    if (idx === -1) continue
    const key = pair.slice(0, idx).trim()
    const value = pair.slice(idx + 1).trim()
    if (key) out[key] = decodeURIComponent(value)
  }
  return out
}

function isAuthed(req) {
  const cookies = parseCookies(req.headers.cookie)
  return verifySessionValue(cookies[SESSION_COOKIE])
}

const app = express()
app.disable('x-powered-by')

app.post('/api/login', express.json(), (req, res) => {
  const password = req.body && typeof req.body.password === 'string' ? req.body.password : ''
  if (!password || !safeCompare(password, APP_PASSWORD)) {
    return res.status(401).json({ ok: false, error: 'Falsches Passwort.' })
  }
  res.setHeader('Set-Cookie', buildSessionCookie())
  res.json({ ok: true })
})

app.post('/api/logout', (req, res) => {
  res.setHeader('Set-Cookie', buildLogoutCookie())
  res.json({ ok: true })
})

app.get('/api/session', (req, res) => {
  res.json({ authenticated: isAuthed(req) })
})

// Everything below this point requires a valid session, except the
// standalone login page itself.
const PUBLIC_PATHS = new Set(['/login.html'])

app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next()
  if (PUBLIC_PATHS.has(req.path)) return next()
  if (isAuthed(req)) return next()

  const wantsHtml = (req.headers.accept || '').includes('text/html')
  if (wantsHtml) {
    const redirectTo = encodeURIComponent(req.originalUrl || '/')
    return res.redirect(302, `/login.html?redirect=${redirectTo}`)
  }
  return res.status(401).end()
})

if (!fs.existsSync(distDir)) {
  console.error(`Build output not found at ${distDir}. Run "npm run build" before starting the server.`)
  process.exit(1)
}

app.use(express.static(distDir, { index: false }))

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`FISI Learning Hub (protected) läuft auf http://localhost:${PORT}`)
})
