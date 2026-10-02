import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { readRecentPages, recentPagesScope, RECENT_PAGES_EVENT, type RecentPage } from '../lib/recentPages'

export function useRecentPages() {
  const { session, isGuest, loading } = useAuth()
  const scope = loading ? null : recentPagesScope(session?.user.id, isGuest)
  const [snapshot, setSnapshot] = useState<{ scope: typeof scope; pages: RecentPage[] }>({ scope: null, pages: [] })
  useEffect(() => {
    const update = () => setSnapshot({ scope, pages: scope ? readRecentPages(scope) : [] })
    update()
    window.addEventListener(RECENT_PAGES_EVENT, update)
    window.addEventListener('storage', update)
    return () => { window.removeEventListener(RECENT_PAGES_EVENT, update); window.removeEventListener('storage', update) }
  }, [scope])
  return snapshot.scope === scope ? snapshot.pages : []
}
