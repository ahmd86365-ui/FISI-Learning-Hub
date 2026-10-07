import { isSafeInternalPath } from './navigation'

export const RECENT_PAGES_KEY = 'fisi_recent_pages'
export const RECENT_PAGES_EVENT = 'fisi:recent-pages'
export const RECENT_PAGES_LIMIT = 10
export type RecentPagesScope = 'guest' | `user:${string}`
export type RecentPageType = 'lesson' | 'reference' | 'lab' | 'flashcards' | 'glossary' | 'exam' | 'review' | 'errors'
export interface RecentPage { path: string; title: string; type: RecentPageType; visitedAt: string }
type RecentPagesStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

export function recentPagesScope(userId: string | null | undefined, isGuest: boolean): RecentPagesScope | null {
  if (userId?.trim()) return `user:${encodeURIComponent(userId.trim())}`
  return isGuest ? 'guest' : null
}

export function recentPagesStorageKey(scope: RecentPagesScope) {
  return `${RECENT_PAGES_KEY}:${scope}`
}

export function recentPageType(pathname: string): RecentPageType | undefined {
  if (pathname === '/it/linux/spickzettel') return 'reference'
  if (/^\/(it|it-english|wirtschaft-gesellschaft)\/[^/]+\/[^/]+/.test(pathname) || /^\/it\/it-technical\/[^/]+\/[^/]+/.test(pathname)) return 'lesson'
  if (pathname.startsWith('/lernkarten/') && pathname !== '/lernkarten/review') return 'flashcards'
  if (pathname === '/labs' || pathname.startsWith('/practice/') || pathname === '/it/linux/lab') return 'lab'
  if (pathname === '/glossary') return 'glossary'
  if (/^\/pruefungsvorbereitung\/it-ap\/[^/]+$/.test(pathname)) return 'exam'
  if (pathname === '/review' || pathname === '/lernkarten/review') return 'review'
  if (pathname === '/errors') return 'errors'
}

export function canonicalRecentPath(pathname: string, search = '') {
  const type = recentPageType(pathname)
  if (!type) return undefined
  const params = new URLSearchParams(search)
  const safe = new URLSearchParams()
  if (pathname === '/glossary') for (const key of ['q', 'category']) { const value = params.get(key); if (value) safe.set(key, value) }
  if (pathname === '/it/linux/spickzettel') { const tag = params.get('tag'); if (tag) safe.set('tag', tag) }
  const path = `${pathname}${safe.size ? `?${safe}` : ''}`
  return isSafeInternalPath(path) ? path : undefined
}

export function parseRecentPages(raw: string | null): RecentPage[] {
  try {
    const value = JSON.parse(raw ?? '[]')
    if (!Array.isArray(value)) return []
    return value.filter((item): item is RecentPage => Boolean(item && isSafeInternalPath(item.path) && typeof item.title === 'string' && recentPageType(new URL(item.path, 'https://fisi.local').pathname) === item.type && !Number.isNaN(Date.parse(item.visitedAt)))).slice(0, RECENT_PAGES_LIMIT)
  } catch { return [] }
}

export function addRecentPage(current: RecentPage[], item: RecentPage) {
  if (!isSafeInternalPath(item.path) || !recentPageType(new URL(item.path, 'https://fisi.local').pathname)) return current
  return [item, ...current.filter((entry) => entry.path !== item.path)].slice(0, RECENT_PAGES_LIMIT)
}

export function readRecentPages(scope: RecentPagesScope, storage: RecentPagesStorage = localStorage) {
  const scopedKey = recentPagesStorageKey(scope)
  const scopedRaw = storage.getItem(scopedKey)
  if (scope === 'guest' && storage.getItem(RECENT_PAGES_KEY) !== null) {
    if (scopedRaw === null) storage.setItem(scopedKey, JSON.stringify(parseRecentPages(storage.getItem(RECENT_PAGES_KEY))))
    storage.removeItem(RECENT_PAGES_KEY)
    return parseRecentPages(storage.getItem(scopedKey))
  }
  return parseRecentPages(scopedRaw)
}

export function recordRecentPage(scope: RecentPagesScope, item: RecentPage, storage: RecentPagesStorage = localStorage) {
  const next = addRecentPage(readRecentPages(scope, storage), item)
  storage.setItem(recentPagesStorageKey(scope), JSON.stringify(next))
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent(RECENT_PAGES_EVENT, { detail: { scope } }))
  return next
}

export const recentTypeLabel: Record<RecentPageType, string> = { lesson: 'Lektion', reference: 'Spickzettel', lab: 'Lab', flashcards: 'Lernkarten', glossary: 'Glossar', exam: 'Prüfung', review: 'Review', errors: 'Fehlertraining' }
