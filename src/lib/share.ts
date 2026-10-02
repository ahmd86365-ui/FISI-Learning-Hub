import { isSafeInternalPath } from './navigation'

const shareableParams: Record<string, string[]> = { '/suche': ['q'], '/glossary': ['q', 'category'] }

export function canonicalSharePath(pathname: string, search = '') {
  if (!isSafeInternalPath(pathname)) return undefined
  if (pathname.startsWith('/auth') || pathname.startsWith('/profile') || pathname.startsWith('/exams')) return undefined
  const params = new URLSearchParams(search)
  const safe = new URLSearchParams()
  for (const key of shareableParams[pathname] ?? []) { const value = params.get(key); if (value) safe.set(key, value) }
  const path = `${pathname}${safe.size ? `?${safe}` : ''}`
  return isSafeInternalPath(path) ? path : undefined
}

export function canonicalShareUrl(origin: string, pathname: string, search = '') {
  const path = canonicalSharePath(pathname, search)
  return path ? new URL(path, origin).toString() : undefined
}
