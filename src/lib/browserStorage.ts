export type BrowserStorageKind = 'local' | 'session'
export type StorageLike = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

function browserStorage(kind: BrowserStorageKind): StorageLike | null {
  if (typeof window === 'undefined') return null
  try {
    return kind === 'local' ? window.localStorage : window.sessionStorage
  } catch {
    return null
  }
}

export function safeStorageGet(kind: BrowserStorageKind, key: string, storage?: StorageLike | null) {
  try {
    return (storage ?? browserStorage(kind))?.getItem(key) ?? null
  } catch {
    return null
  }
}

export function safeStorageSet(kind: BrowserStorageKind, key: string, value: string, storage?: StorageLike | null) {
  try {
    const target = storage ?? browserStorage(kind)
    if (!target) return false
    target.setItem(key, value)
    return true
  } catch {
    return false
  }
}

export function safeStorageRemove(kind: BrowserStorageKind, key: string, storage?: StorageLike | null) {
  try {
    const target = storage ?? browserStorage(kind)
    if (!target) return false
    target.removeItem(key)
    return true
  } catch {
    return false
  }
}

export function readValidatedJson<T>(
  kind: BrowserStorageKind,
  key: string,
  validate: (value: unknown) => value is T,
  fallback: T,
  storage?: StorageLike | null,
): T {
  const raw = safeStorageGet(kind, key, storage)
  if (raw === null) return fallback
  try {
    const parsed: unknown = JSON.parse(raw)
    if (validate(parsed)) return parsed
  } catch {
    // The invalid key is isolated below; other application storage is preserved.
  }
  safeStorageRemove(kind, key, storage)
  return fallback
}

export function readValidatedArray<T>(
  kind: BrowserStorageKind,
  key: string,
  validateItem: (value: unknown) => value is T,
  storage?: StorageLike | null,
): T[] {
  const raw = safeStorageGet(kind, key, storage)
  if (raw === null) return []
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) throw new TypeError('Stored value is not an array')
    const valid = parsed.filter(validateItem)
    if (valid.length !== parsed.length) safeStorageSet(kind, key, JSON.stringify(valid), storage)
    return valid
  } catch {
    safeStorageRemove(kind, key, storage)
    return []
  }
}

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

export const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value)

export const isIsoDate = (value: unknown): value is string =>
  typeof value === 'string' && !Number.isNaN(Date.parse(value))
