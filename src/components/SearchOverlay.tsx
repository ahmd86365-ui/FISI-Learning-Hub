import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X, CornerDownLeft, Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { search } from '../lib/search'
import type { SearchResultItem } from '../types/content'

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResultItem[]>([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) {
      setQuery('')
      setResults([])
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    let active = true
    setLoading(true)
    const timeout = setTimeout(() => {
      search(query).then((res) => {
        if (active) {
          setResults(res)
          setLoading(false)
        }
      })
    }, 150)
    return () => {
      active = false
      clearTimeout(timeout)
    }
  }, [query, open])

  const goToSearchPage = () => {
    navigate(`/suche${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 sm:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-ink-950/40 backdrop-blur-sm dark:bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Globale Suche"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-hover-dark"
          >
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-brand-400/60 to-transparent dark:via-brand-500/50"
              aria-hidden="true"
            />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                goToSearchPage()
              }}
              className="flex items-center gap-3 border-b border-ink-200 px-5 py-4 dark:border-ink-800"
            >
              <Search className="h-5 w-5 shrink-0 text-ink-400 dark:text-ink-500" aria-hidden="true" />
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Suche nach Themen, Begriffen und Lerninhalten..."
                className="w-full bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400 dark:text-white dark:placeholder:text-ink-500"
                aria-label="Lerninhalte durchsuchen"
              />
              {loading && <Loader2 className="h-4 w-4 shrink-0 animate-spin text-ink-300" aria-hidden="true" />}
              <kbd className="hidden shrink-0 rounded border border-ink-200 px-1.5 py-0.5 font-mono text-[0.65rem] text-ink-400 dark:border-ink-700 dark:text-ink-500 sm:inline-block">
                Esc
              </kbd>
              <button
                type="button"
                onClick={onClose}
                aria-label="Suche schließen"
                className="shrink-0 rounded-md p-1 text-ink-400 hover:bg-ink-100 hover:text-ink-700 dark:hover:bg-ink-800 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </form>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="flex flex-col items-center px-6 py-10 text-center">
                  <p className="text-sm font-medium text-ink-700 dark:text-ink-200">
                    {query ? 'Keine Inhalte gefunden' : 'Beginne mit der Eingabe, um zu suchen'}
                  </p>
                  <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-ink-400 dark:text-ink-500">
                    Die Lerninhalte werden Schritt für Schritt hinzugefügt.
                  </p>
                </div>
              ) : (
                <ul className="space-y-1">
                  {results.map((r) => (
                    <li key={r.id}>
                      <button
                        type="button"
                        onClick={() => {
                          navigate(r.path)
                          onClose()
                        }}
                        className="flex w-full flex-col rounded-lg px-3 py-2 text-left hover:bg-ink-100 dark:hover:bg-ink-800"
                      >
                        {r.breadcrumb && r.breadcrumb.length > 0 && (
                          <span className="text-xs text-ink-400 dark:text-ink-500">{r.breadcrumb.join(' · ')}</span>
                        )}
                        <span className="text-sm text-ink-900 dark:text-white">{r.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-ink-200 bg-ink-50/60 px-5 py-3 dark:border-ink-800 dark:bg-ink-900/60">
              <span className="text-xs text-ink-400 dark:text-ink-500">Suche im gesamten Lernbereich</span>
              <button
                type="button"
                onClick={goToSearchPage}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Alle Ergebnisse
                <CornerDownLeft className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
