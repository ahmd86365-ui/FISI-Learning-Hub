import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { BarChart3, BookmarkCheck, Flame, X, Home, Search, UserRound, UserRoundX } from 'lucide-react'
import { useEffect } from 'react'
import { Logo } from './Logo'
import { subjects } from '../data/subjects'
import { useAuth } from '../contexts/AuthContext'

interface MobileNavigationProps {
  open: boolean
  onClose: () => void
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const { signOut } = useAuth()
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink-950/50 backdrop-blur-sm dark:bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.nav
            aria-label="Mobile Navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed inset-y-0 right-0 z-10 flex w-full max-w-xs flex-col bg-white shadow-card-hover dark:bg-ink-950"
          >
            <div className="flex h-16 items-center justify-between border-b border-ink-200 px-5 dark:border-ink-800">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Menü schließen"
                className="rounded-full p-2 text-ink-500 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              <NavLink
                to="/"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
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
                      `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
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

              <NavLink
                to="/suche"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
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
                to="/profile"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <UserRound className="h-5 w-5" aria-hidden="true" />
                Mein Profil
              </NavLink>

              <NavLink
                to="/saved"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
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
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
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
                  `flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800'
                  }`
                }
              >
                <Flame className="h-5 w-5" aria-hidden="true" />
                Lernstatistik
              </NavLink>
            </div>

            <div className="border-t border-ink-200 p-5 dark:border-ink-800">
              <button
                type="button"
                onClick={() => void signOut()}
                className="mb-4 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
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
      )}
    </AnimatePresence>
  )
}
