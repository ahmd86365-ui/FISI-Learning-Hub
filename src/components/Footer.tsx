import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { subjects } from '../data/subjects'

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Fachinformatiker für Systemintegration – Learning Platform. Lernen. Verstehen. Üben. Bestehen.
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-1 sm:gap-2">
            <div>
              <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Lernbereiche
              </h3>
              <ul className="space-y-2.5">
                {subjects.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={s.path}
                      className="text-sm text-ink-600 transition-colors hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-400"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 text-xs text-ink-400 dark:border-ink-800 dark:text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} FISI Learning Hub</p>
          <p className="font-mono">Fachinformatiker für Systemintegration</p>
        </div>
      </div>
    </footer>
  )
}
