import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
      title={isDark ? 'Helles Design' : 'Dunkles Design'}
      className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-ink-200 bg-ink-100 transition-colors duration-300 dark:border-ink-700 dark:bg-ink-800 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink-700 shadow-soft dark:bg-ink-950 dark:text-brand-300"
        style={{ marginLeft: isDark ? 'calc(100% - 1.75rem - 4px)' : '4px' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ opacity: 0, rotate: -60, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
