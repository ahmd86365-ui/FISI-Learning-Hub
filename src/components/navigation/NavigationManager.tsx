import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { consumePathScrollRestoration, readInternalHistory, SCROLL_POSITIONS_KEY, writeInternalHistory } from '../../lib/navigation'
import { canonicalRecentPath, recentPagesScope, recentPageType, recordRecentPage } from '../../lib/recentPages'
import { useAuth } from '../../contexts/AuthContext'

function readPositions(): Record<string, number> { try { return JSON.parse(sessionStorage.getItem(SCROLL_POSITIONS_KEY) ?? '{}') } catch { return {} } }
function savePosition(key: string, y: number) { const values = readPositions(); values[key] = y; sessionStorage.setItem(SCROLL_POSITIONS_KEY, JSON.stringify(values)) }

export function NavigationManager() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const { session, isGuest, loading: authLoading } = useAuth()
  const recentScope = authLoading ? null : recentPagesScope(session?.user.id, isGuest)
  const active = useRef({ key: location.key, path: `${location.pathname}${location.search}${location.hash}` })
  const recentVisit = useRef<{ scope: typeof recentScope; route: string } | null>(null)

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const previous = active.current
    const browserPath = `${window.location.pathname}${window.location.search}${window.location.hash}`
    if (previous.key !== location.key && browserPath === previous.path) {
      savePosition(previous.key, window.scrollY)
      savePosition(`path:${previous.path}`, window.scrollY)
    }
    const path = `${location.pathname}${location.search}${location.hash}`
    const rememberCurrent = () => {
      if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== path) return
      savePosition(location.key, window.scrollY)
      savePosition(`path:${path}`, window.scrollY)
    }
    window.addEventListener('scroll', rememberCurrent, { passive: true })
    const entries = readInternalHistory()
    const existing = entries.findIndex((entry) => entry.key === location.key)
    if (navigationType === 'POP' && existing >= 0) writeInternalHistory(entries.slice(0, existing + 1))
    else if (existing < 0) writeInternalHistory([...entries, { key: location.key, path }])
    active.current = { key: location.key, path }
    const positions = readPositions()
    const restoreByPath = consumePathScrollRestoration(path)
    const y = restoreByPath ? positions[`path:${path}`] ?? 0 : navigationType === 'POP' ? positions[location.key] ?? 0 : 0
    let secondFrame = 0
    let resizeFrame = 0
    let stopped = false
    const restore = () => {
      if (stopped) return
      window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior })
      if (Math.abs(window.scrollY - y) <= 2) stopWatching()
    }
    const observer = navigationType === 'POP' && y > 0 && typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(restore) })
      : null
    const stopWatching = () => {
      if (stopped) return
      stopped = true
      observer?.disconnect()
      window.clearTimeout(timeout)
      for (const event of ['wheel', 'touchstart', 'keydown']) window.removeEventListener(event, stopWatching)
    }
    const timeout = window.setTimeout(stopWatching, 2000)
    if (observer) observer.observe(document.getElementById('main-content') ?? document.documentElement)
    for (const event of ['wheel', 'touchstart', 'keydown']) window.addEventListener(event, stopWatching, { passive: true, once: true })
    const firstFrame = requestAnimationFrame(() => { secondFrame = requestAnimationFrame(restore) })
    return () => {
      stopWatching()
      cancelAnimationFrame(firstFrame)
      cancelAnimationFrame(secondFrame)
      cancelAnimationFrame(resizeFrame)
      window.removeEventListener('scroll', rememberCurrent)
    }
  }, [location.hash, location.key, location.pathname, location.search, navigationType])
  useEffect(() => {
    const route = `${location.pathname}${location.search}`
    const previousVisit = recentVisit.current
    recentVisit.current = { scope: recentScope, route }
    if (previousVisit?.scope && recentScope !== previousVisit.scope && route === previousVisit.route) return
    const path = canonicalRecentPath(location.pathname, location.search)
    const type = recentPageType(location.pathname)
    if (!path || !type || !recentScope) return
    const timer = window.setTimeout(() => {
      const title = document.querySelector('h1')?.textContent?.trim() || document.title.split('|')[0]?.trim() || path
      recordRecentPage(recentScope, { path, title, type, visitedAt: new Date().toISOString() })
    }, 250)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.search, recentScope])
  return null
}
