import { Link2 } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useToast } from '../contexts/ToastContext'
import { canonicalShareUrl } from '../lib/share'

export function ShareLinkButton({ path, label = 'Link kopieren', compact = false }: { path?: string; label?: string; compact?: boolean }) {
  const location = useLocation()
  const { showToast } = useToast()
  const copy = async () => {
    const target = path ? new URL(path, window.location.origin) : new URL(window.location.href)
    const url = canonicalShareUrl(window.location.origin, target.pathname, target.search)
    if (!url) { showToast('Dieser Link kann nicht geteilt werden.', 'warning'); return }
    try { await navigator.clipboard.writeText(url); showToast('Link kopiert', 'success') }
    catch { showToast('Link konnte nicht kopiert werden.', 'error') }
  }
  if (!path && !canonicalShareUrl(window.location.origin, location.pathname, location.search)) return null
  return <button type="button" onClick={() => void copy()} className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-brand-700 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 dark:text-brand-300 dark:hover:bg-brand-500/10 ${compact ? 'px-2.5' : 'px-3'}`}><Link2 className="h-4 w-4" aria-hidden="true" />{label}</button>
}
