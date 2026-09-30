import { Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const Icon = theme === 'system' ? Laptop : theme === 'dark' ? Moon : Sun
  const next = theme === 'system' ? 'hell' : theme === 'light' ? 'dunkel' : 'System'
  return <button type="button" onClick={toggleTheme} aria-label={`Designmodus: ${theme}. Zu ${next} wechseln`} title={`Designmodus: ${theme}`} className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white ${className}`}>
    <Icon className="h-4 w-4" aria-hidden="true" />
  </button>
}
