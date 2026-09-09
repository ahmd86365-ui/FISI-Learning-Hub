import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BarChart3, BookmarkCheck, Flame, Menu, Search, UserRound, UserRoundX } from 'lucide-react'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { IconButton } from './IconButton'
import { SearchOverlay } from './SearchOverlay'
import { MobileNavigation } from './MobileNavigation'
import { subjects } from '../data/subjects'
import { useAuth } from '../contexts/AuthContext'

const navLinkBase =
  'relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-200'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { signOut } = useAuth()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Zum Inhalt springen
      </a>

      <header className="sticky top-0 z-40 border-b border-ink-200/80 bg-white/80 backdrop-blur-lg dark:border-ink-800/80 dark:bg-ink-950/80">
        <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'}`
              }
            >
              Home
            </NavLink>
            {subjects.map((s) => (
              <NavLink
                key={s.slug}
                to={s.path}
                className={({ isActive }) =>
                  `${navLinkBase} ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'}`
                }
              >
                {s.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-2 text-sm text-ink-400 transition-colors hover:border-ink-300 hover:bg-white dark:border-ink-700 dark:bg-ink-900 dark:text-ink-500 dark:hover:border-ink-600 dark:hover:bg-ink-800 sm:flex"
              aria-label="Suche öffnen"
            >
              <Search className="h-4 w-4" />
              <span className="text-ink-400 dark:text-ink-500">Suchen...</span>
              <kbd className="ml-4 rounded border border-ink-200 bg-white px-1.5 py-0.5 font-mono text-[0.65rem] text-ink-400 dark:border-ink-700 dark:bg-ink-950 dark:text-ink-500">
                Ctrl K
              </kbd>
            </button>

            <IconButton
              icon={<Search className="h-[1.15rem] w-[1.15rem]" />}
              label="Suche öffnen"
              onClick={() => setSearchOpen(true)}
              className="sm:hidden"
            />

            <ThemeToggle />

            <NavLink
              to="/saved"
              className={({ isActive }) =>
                `hidden h-10 w-10 items-center justify-center rounded-full transition-colors lg:inline-flex ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                    : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white'
                }`
              }
              aria-label="Gespeicherte Inhalte öffnen"
            >
              <BookmarkCheck className="h-[1.15rem] w-[1.15rem]" />
            </NavLink>

            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `hidden h-10 w-10 items-center justify-center rounded-full transition-colors lg:inline-flex ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                    : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white'
                }`
              }
              aria-label="Lernfortschritt öffnen"
            >
              <BarChart3 className="h-[1.15rem] w-[1.15rem]" />
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hidden h-10 w-10 items-center justify-center rounded-full transition-colors lg:inline-flex ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                    : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white'
                }`
              }
              aria-label="Profil öffnen"
            >
              <UserRound className="h-[1.15rem] w-[1.15rem]" />
            </NavLink>

            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `hidden h-10 w-10 items-center justify-center rounded-full transition-colors lg:inline-flex ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400'
                    : 'text-ink-500 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-white'
                }`
              }
              aria-label="Lernstatistik öffnen"
            >
              <Flame className="h-[1.15rem] w-[1.15rem]" />
            </NavLink>

            <IconButton
              icon={<UserRoundX className="h-[1.15rem] w-[1.15rem]" />}
              label="Benutzerkonto abmelden"
              onClick={() => void signOut()}
              className="hidden lg:inline-flex"
            />

            <IconButton
              icon={<Menu className="h-5 w-5" />}
              label="Menü öffnen"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden"
            />
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
