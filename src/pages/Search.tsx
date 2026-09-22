import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, BookOpen, SearchX } from 'lucide-react'
import { SearchBar } from '../components/SearchBar'
import { EmptyState } from '../components/EmptyState'
import { SectionHeader } from '../components/SectionHeader'
import { search } from '../lib/search'
import type { SearchResultItem } from '../types/content'

export default function Search() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const [results, setResults] = useState<SearchResultItem[]>([])
  const [hasSearched, setHasSearched] = useState(Boolean(query))

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }
    setHasSearched(true)
    search(query).then(setResults)
  }, [query])

  const handleSubmit = (value: string) => {
    setHasSearched(true)
    if (value.trim()) {
      setParams({ q: value.trim() })
    } else {
      setParams({})
    }
  }

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <SectionHeader
        title="Suche"
        description="Durchsuche Themen, Begriffe und Lerninhalte der gesamten Plattform."
      />

      <SearchBar size="lg" initialValue={query} onSubmitQuery={handleSubmit} className="max-w-2xl" />

      <Link to="/glossary" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-ink-700 dark:text-brand-300 dark:hover:bg-ink-900">
        <BookOpen className="h-4 w-4" aria-hidden="true" /> FISI Glossar: Fachbegriffe nachschlagen
      </Link>

      <div className="mt-10">
        {results.length > 0 ? (
          <ul className="space-y-3">
            {results.map((r) => (
              <li key={r.id}>
                <Link
                  to={r.path}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-ink-200 p-4 transition-colors hover:border-ink-300 hover:bg-ink-50 dark:border-ink-800 dark:hover:border-ink-700 dark:hover:bg-ink-900"
                >
                  <div>
                    {r.breadcrumb && r.breadcrumb.length > 0 && (
                      <p className="text-xs text-ink-400 dark:text-ink-500">{r.breadcrumb.join(' · ')}</p>
                    )}
                    <p className="font-medium text-ink-900 dark:text-white">{r.title}</p>
                    {r.excerpt && (
                      <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{r.excerpt}</p>
                    )}
                  </div>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-ink-600"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            icon={SearchX}
            title={hasSearched && query ? 'Keine Inhalte gefunden' : 'Womit möchtest du starten?'}
            description="Die Lerninhalte werden Schritt für Schritt hinzugefügt. Sobald neue Themen verfügbar sind, findest du sie hier."
            hint={query ? `Suche: "${query}"` : undefined}
          />
        )}
      </div>
    </div>
  )
}
