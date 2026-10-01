import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BarChart3, BookmarkCheck, LogIn, Menu, Search, UserRound, UserRoundX } from 'lucide-react'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { SearchOverlay } from './SearchOverlay'
import { MobileNavigation } from './MobileNavigation'
import { useAuth } from '../contexts/AuthContext'

const navigation = [
  { to: '/', label: 'Startseite', end: true },
  { to: '/it', label: 'IT Lernen' },
  { to: '/wirtschaft-gesellschaft', label: 'Wirtschaft' },
  { to: '/it-english', label: 'IT English' },
  { to: '/pruefungsvorbereitung', label: 'Prüfung' },
]
const navLink = 'flex h-9 items-center rounded-lg px-3 text-xs font-semibold transition-colors'
const iconLink = 'inline-flex h-9 w-9 items-center justify-center rounded-lg text-blue-100 transition-colors hover:bg-white/10 hover:text-white'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { signOut, isGuest } = useAuth()

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-700">Zum Inhalt springen</a>
    <header className="sticky top-0 z-40 border-b border-blue-950 bg-[#0f1d35] text-white shadow-sm">
      <div className="flex h-14 w-full items-center gap-4 px-3 sm:px-5">
        <Logo inverse compactOnMobile className="shrink-0 xl:w-56" />
        <nav aria-label="Hauptnavigation" className="hidden h-full items-center gap-1 xl:flex">
          {navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `${navLink} ${isActive ? 'bg-brand-600 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}>{item.label}</NavLink>)}
        </nav>
        <div className="ml-auto flex items-center gap-1.5">
          <button type="button" onClick={() => setSearchOpen(true)} className="hidden h-9 w-48 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-xs text-blue-200 transition-colors hover:border-white/20 hover:bg-white/10 lg:flex" aria-label="Suche öffnen">
            <Search className="h-3.5 w-3.5" aria-hidden="true" /><span>Suche...</span><kbd className="ml-auto rounded border border-white/10 px-1.5 py-0.5 font-mono text-[0.6rem]">Ctrl K</kbd>
          </button>
          <button type="button" onClick={() => setSearchOpen(true)} className={`${iconLink} lg:hidden`} aria-label="Suche öffnen"><Search className="h-4 w-4" /></button>
          <ThemeToggle className="border-white/10 bg-white/5 text-blue-100 hover:bg-white/10 hover:text-white" />
          <NavLink to="/saved" className={({ isActive }) => `${iconLink} hidden lg:inline-flex ${isActive ? 'bg-brand-600 text-white' : ''}`} aria-label="Gespeicherte Inhalte öffnen"><BookmarkCheck className="h-4 w-4" /></NavLink>
          <NavLink to="/progress" className={({ isActive }) => `${iconLink} hidden lg:inline-flex ${isActive ? 'bg-brand-600 text-white' : ''}`} aria-label="Lernfortschritt öffnen"><BarChart3 className="h-4 w-4" /></NavLink>
          {isGuest ? <NavLink to="/auth" className={`${iconLink} hidden lg:inline-flex`} aria-label="Anmelden"><LogIn className="h-4 w-4" /></NavLink> : <button type="button" onClick={() => void signOut().catch((error: unknown) => console.error('Abmeldung fehlgeschlagen.', error))} className={`${iconLink} hidden lg:inline-flex`} aria-label="Benutzerkonto abmelden"><UserRoundX className="h-4 w-4" /></button>}
          <NavLink to="/profile" className={({ isActive }) => `hidden h-8 w-8 items-center justify-center rounded-full border border-white/15 lg:inline-flex ${isActive ? 'bg-brand-600' : 'bg-brand-500/80 hover:bg-brand-500'}`} aria-label="Profil öffnen"><UserRound className="h-4 w-4" /></NavLink>
          <button type="button" onClick={() => setMobileOpen(true)} className={iconLink} aria-label="Menü öffnen" aria-expanded={mobileOpen}><Menu className="h-5 w-5" aria-hidden="true" /></button>
        </div>
      </div>
    </header>
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
  </>
}
