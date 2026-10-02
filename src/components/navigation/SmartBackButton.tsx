import { ArrowLeft } from 'lucide-react'
import { useSmartBack } from '../../hooks/useSmartBack'

export function SmartBackButton({ label = 'Zurück', fallback, className = '' }: { label?: string; fallback?: string; className?: string }) {
  const { goBack } = useSmartBack({ fallback })
  return <button type="button" onClick={goBack} className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 dark:text-brand-300 dark:hover:bg-brand-500/10 dark:focus-visible:ring-brand-400 dark:focus-visible:ring-offset-ink-950 ${className}`} aria-label={label}>
    <ArrowLeft className="h-4 w-4" aria-hidden="true" />{label}
  </button>
}
