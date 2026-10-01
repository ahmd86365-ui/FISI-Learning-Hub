import { motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { BarChart3, BookmarkCheck, CircleAlert, Flame, FlaskConical, X, Home, Languages, Search, UserRound, UserRoundX } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Logo } from './Logo'
import { subjects } from '../data/subjects'
import { useAuth } from '../contexts/AuthContext'
import { usePreferences } from '../contexts/PreferencesContext'

interface MobileNavigationProps {
  open: boolean
  onClose: () => void
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const { signOut } = useAuth()
  const { translationEnabled, toggleTranslation } = usePreferences()
  const location = useLocation()
  const previousLocationKey = useRef(location.key)

  useEffect(() => {
    if (previousLocationKey.current !== location.key) {
      previousLocationKey.current = location.key
      if (open) onClose()
    }
  }, [location.key, onClose, open])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return open ? (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink-950/55 dark:bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 left-0 z-10 flex w-[min(88vw,20rem)] flex-col border-r border-ink-200 bg-white shadow-xl dark:border-ink-800 dark:bg-ink-950"
          >
            <div className="flex h-14 items-center justify-between border-b border-ink-200 bg-ink-950 px-4 dark:border-ink-800">
              <Logo inverse />
              <button
                type="button"
                onClick={onClose}
                aria-label="Menü schließen"
                className="rounded-md p-2 text-ink-300 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
              <NavLink
                to="/"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <Home className="h-5 w-5" aria-hidden="true" />
                Home
              </NavLink>

              {subjects.map((s) => {
                const Icon = s.icon
                return (
                  <NavLink
                    key={s.slug}
                    to={s.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                          : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {s.name}
                  </NavLink>
                )
              })}

              <NavLink to="/labs" onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400' : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'}`}>
                <FlaskConical className="h-5 w-5" aria-hidden="true" />
                Labs
              </NavLink>

              <NavLink to="/exams" onClick={onClose} className="rounded-md px-3 py-2.5 text-sm font-medium text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10">Prüfungsmodus & Verlauf</NavLink>

              <NavLink
                to="/suche"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <Search className="h-5 w-5" aria-hidden="true" />
                Suche
              </NavLink>

              <NavLink
                to="/saved"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <BookmarkCheck className="h-5 w-5" aria-hidden="true" />
                Gespeichert
              </NavLink>

              <NavLink
                to="/progress"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
                Lernfortschritt
              </NavLink>

              <NavLink
                to="/stats"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                Lernstatistik
              </NavLink>

              <NavLink
                to="/errors"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <CircleAlert className="h-5 w-5" aria-hidden="true" />
                Fehlertraining
              </NavLink>

              <NavLink
                to="/profile"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <UserRound className="h-5 w-5" aria-hidden="true" />
                Mein Profil
              </NavLink>

              <div className="mt-2 border-t border-ink-200 pt-2 dark:border-ink-800">
                <button
                  type="button"
                  onClick={toggleTranslation}
                  aria-label={`Arabische Wortübersetzung ${translationEnabled ? 'deaktivieren' : 'aktivieren'}`}
                  aria-pressed={translationEnabled}
                  className="flex min-h-11 w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 dark:text-ink-200 dark:hover:bg-ink-800 dark:focus-visible:ring-brand-400 dark:focus-visible:ring-offset-ink-950"
                >
                  <Languages className="h-5 w-5" aria-hidden="true" />
                  <span>Übersetzung</span>
                  <span
                    className={`ml-auto min-w-10 rounded-full px-2 py-1 text-center text-[0.65rem] font-bold uppercase tracking-wide ${
                      translationEnabled
                        ? 'bg-brand-600 text-white'
                        : 'bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300'
                    }`}
                    aria-hidden="true"
                  >
                    {translationEnabled ? 'An' : 'Aus'}
                  </span>
                </button>
              </div>
            </div>

            <div className="border-t border-ink-200 p-3 dark:border-ink-800">
              <button
                type="button"
                onClick={() => {
                  onClose()
                  void signOut().catch((error: unknown) => console.error('Abmeldung fehlgeschlagen.', error))
                }}
                className="mb-3 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
              >
                <UserRoundX className="h-5 w-5" aria-hidden="true" />
                Benutzerkonto abmelden
              </button>
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Fachinformatiker für Systemintegration
              </p>
            </div>
          </motion.nav>
        </div>
  ) : null
}
