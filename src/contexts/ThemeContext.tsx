import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'
interface ThemeContextValue { theme: Theme; resolvedTheme: ResolvedTheme; toggleTheme: () => void; setTheme: (theme: Theme) => void }
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)
const STORAGE_KEY = 'fisi-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  const stored = window.sessionStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}
function systemTheme(): ResolvedTheme { return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' }

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [systemPreference, setSystemPreference] = useState<ResolvedTheme>(() => typeof window === 'undefined' ? 'light' : systemTheme())
  const resolvedTheme = theme === 'system' ? systemPreference : theme

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const update = () => setSystemPreference(query.matches ? 'dark' : 'light')
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', resolvedTheme === 'dark')
    root.style.colorScheme = resolvedTheme
    root.dataset.theme = theme
    window.sessionStorage.setItem(STORAGE_KEY, theme)
  }, [resolvedTheme, theme])

  const value = useMemo<ThemeContextValue>(() => ({
    theme, resolvedTheme,
    toggleTheme: () => setThemeState((current) => current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system'),
    setTheme: setThemeState,
  }), [resolvedTheme, theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
