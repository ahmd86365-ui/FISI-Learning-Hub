import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomeShortcut({ label = true }: { label?: boolean }) {
  return <Link to="/" aria-label="Startseite" className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-ink-600 hover:bg-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 dark:text-ink-300 dark:hover:bg-ink-800"><Home className="h-4 w-4" aria-hidden="true" />{label && <span>Startseite</span>}</Link>
}
