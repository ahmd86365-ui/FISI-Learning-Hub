export const INTERNAL_HISTORY_KEY = 'fisi_internal_navigation_v1'
export const SCROLL_POSITIONS_KEY = 'fisi_scroll_positions_v1'
export const SCROLL_RETURN_PATH_KEY = 'fisi_scroll_return_path_v1'

export interface InternalHistoryEntry { key: string; path: string }

export function requestPathScrollRestoration(path: string) {
  if (isSafeInternalPath(path)) sessionStorage.setItem(SCROLL_RETURN_PATH_KEY, path)
}

export function consumePathScrollRestoration(path: string) {
  const requested = sessionStorage.getItem(SCROLL_RETURN_PATH_KEY)
  if (requested !== path) return false
  sessionStorage.removeItem(SCROLL_RETURN_PATH_KEY)
  return true
}

export function isSafeInternalPath(value: unknown): value is string {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return false
  if (/^[\s\u0000-\u001f]/.test(value) || /[\\]/.test(value)) return false
  try {
    const decoded = decodeURIComponent(value)
    if (!decoded.startsWith('/') || decoded.startsWith('//') || decoded.includes('\\') || /^[a-z][a-z\d+.-]*:/i.test(decoded.slice(1))) return false
    const url = new URL(value, 'https://fisi.local')
    return url.origin === 'https://fisi.local' && url.pathname.startsWith('/')
  } catch { return false }
}

export function safeInternalPath(value: unknown) { return isSafeInternalPath(value) ? value : undefined }

export function getReturnDestination(search: string, state?: unknown) {
  const params = new URLSearchParams(search)
  for (const key of ['returnTo', 'return', 'source']) {
    const path = safeInternalPath(params.get(key))
    if (path) return path
  }
  if (state && typeof state === 'object') {
    const candidate = state as { returnTo?: unknown; source?: unknown; from?: { pathname?: unknown; search?: unknown; hash?: unknown } }
    const direct = safeInternalPath(candidate.returnTo) ?? safeInternalPath(candidate.source)
    if (direct) return direct
    if (candidate.from) {
      const path = `${candidate.from.pathname ?? ''}${candidate.from.search ?? ''}${candidate.from.hash ?? ''}`
      return safeInternalPath(path)
    }
  }
}

export function withReturnPath(path: string, returnPath: string, parameter = 'source') {
  if (!isSafeInternalPath(path) || !isSafeInternalPath(returnPath)) return path
  const url = new URL(path, 'https://fisi.local')
  url.searchParams.set(parameter, returnPath)
  return `${url.pathname}${url.search}${url.hash}`
}

export function readInternalHistory(): InternalHistoryEntry[] {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(INTERNAL_HISTORY_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed.filter((entry): entry is InternalHistoryEntry =>
      Boolean(entry && typeof entry.key === 'string' && isSafeInternalPath(entry.path))) : []
  } catch { return [] }
}

export function writeInternalHistory(entries: InternalHistoryEntry[]) {
  sessionStorage.setItem(INTERNAL_HISTORY_KEY, JSON.stringify(entries.slice(-50)))
}

export function getPreviousInternalPath(currentKey: string, allowLatestEntry = false) {
  const entries = readInternalHistory()
  const index = entries.findIndex((entry) => entry.key === currentKey)
  if (index > 0) return entries[index - 1].path
  return index < 0 && allowLatestEntry ? entries[entries.length - 1]?.path : undefined
}

export function fallbackForPath(pathname: string) {
  if (pathname.startsWith('/lernkarten/review')) return '/review'
  if (pathname.startsWith('/lernkarten/')) return '/'
  if (pathname.startsWith('/practice/') || pathname === '/it/linux/lab') return '/labs'
  if (pathname === '/it/linux/spickzettel') return '/it/linux'
  if (pathname.startsWith('/pruefungsvorbereitung/it-ap/')) return '/pruefungsvorbereitung/it-ap'
  if (pathname.includes('/wiso-ihk/')) return '/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk'
  if (pathname.startsWith('/exams/')) return '/exams'
  if (pathname === '/glossary' || pathname === '/suche' || ['/profile','/stats','/saved','/errors','/review'].includes(pathname)) return '/'
  const lessonMatch = pathname.match(/^\/(it|it-english|wirtschaft-gesellschaft)\/([^/]+)\/[^/]+/)
  if (lessonMatch) return `/${lessonMatch[1]}/${lessonMatch[2]}`
  if (pathname.startsWith('/it/it-technical/')) return '/it/it-technical'
  return '/'
}
