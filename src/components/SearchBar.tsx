import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, type FormEvent } from 'react'

interface SearchBarProps {
  size?: 'md' | 'lg'
  autoFocus?: boolean
  initialValue?: string
  onSubmitQuery?: (query: string) => void
  className?: string
  placeholder?: string
}

const DEFAULT_PLACEHOLDER = 'Suche nach Themen, Begriffen und Lerninhalten...'

export function SearchBar({
  size = 'md',
  autoFocus = false,
  initialValue = '',
  onSubmitQuery,
  className = '',
  placeholder = DEFAULT_PLACEHOLDER,
}: SearchBarProps) {
  const [value, setValue] = useState(initialValue)
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (onSubmitQuery) {
      onSubmitQuery(value)
    } else {
      navigate(`/suche${value.trim() ? `?q=${encodeURIComponent(value.trim())}` : ''}`)
    }
  }

  const isLg = size === 'lg'

  return (
    <form onSubmit={handleSubmit} role="search" className={`relative w-full ${className}`}>
      <label htmlFor="global-search-input" className="sr-only">
        Lerninhalte durchsuchen
      </label>
      <Search
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-ink-400 dark:text-ink-500 ${isLg ? 'left-5 h-5 w-5' : 'left-4 h-4 w-4'}`}
        aria-hidden="true"
      />
      <input
        id="global-search-input"
        type="search"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={`w-full border border-ink-200 bg-white text-ink-900 placeholder:text-ink-400 shadow-soft outline-none transition-all duration-200 hover:border-ink-300 focus:border-brand-400 focus:shadow-glow focus:ring-4 focus:ring-brand-500/10 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500 dark:hover:border-ink-600 dark:focus:border-brand-500 ${
          isLg ? 'h-14 rounded-2xl pl-12 pr-5 text-base' : 'h-11 rounded-full pl-10 pr-4 text-sm'
        }`}
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue('')}
          aria-label="Suche leeren"
          className={`absolute top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700 dark:hover:bg-ink-800 dark:hover:text-white ${isLg ? 'right-4' : 'right-3'}`}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </form>
  )
}

export { DEFAULT_PLACEHOLDER as searchPlaceholder }
