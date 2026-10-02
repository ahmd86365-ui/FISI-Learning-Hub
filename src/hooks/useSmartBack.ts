import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { fallbackForPath, getPreviousInternalPath, getReturnDestination, isSafeInternalPath, requestPathScrollRestoration } from '../lib/navigation'

export function useSmartBack(options: { fallback?: string } = {}) {
  const location = useLocation()
  const navigate = useNavigate()
  const trustedReturn = useMemo(() => getReturnDestination(location.search, location.state), [location.search, location.state])
  const fallback = isSafeInternalPath(options.fallback) ? options.fallback : fallbackForPath(location.pathname)
  const routerIndex = typeof window.history.state?.idx === 'number' ? window.history.state.idx : 0
  const previous = getPreviousInternalPath(location.key, routerIndex > 0)
  const destination = trustedReturn ?? previous ?? fallback
  const goBack = useCallback(() => {
    if (trustedReturn) requestPathScrollRestoration(trustedReturn)
    if (trustedReturn && previous === trustedReturn) { navigate(-1); return }
    if (trustedReturn) { navigate(trustedReturn, { replace: true }); return }
    if (previous) { navigate(-1); return }
    navigate(fallback, { replace: true })
  }, [fallback, navigate, previous, trustedReturn])
  return { goBack, destination, hasInternalHistory: Boolean(previous), trustedReturn }
}
