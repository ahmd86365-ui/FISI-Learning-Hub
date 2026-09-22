import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Search } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { glossaryCategories, glossaryEntries, glossaryLessonPath, searchGlossary } from '../data/glossary'
import type { GlossaryCategory } from '../data/glossary'
import { getModuleBySlug } from '../data/modules'

const sortedEntries = [...glossaryEntries].sort((a, b) => a.term.localeCompare(b.term, 'de-DE'))

export default function Glossary() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<GlossaryCategory | undefined>()
  const { hash } = useLocation()
  const entries = useMemo(() => searchGlossary(sortedEntries, query, category), [query, category])

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    if (!glossaryEntries.some((entry) => entry.id === id)) return
    setQuery('')
    setCategory(undefined)
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [hash])

  return (
    <div>
      <PageHeader title="FISI Glossar" description="Fachbegriffe aus deinen Lerninhalten kurz erklärt." />
      <section aria-label="Glossareinträge" className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <label htmlFor="glossary-search" className="mb-2 block text-sm font-semibold text-ink-800 dark:text-ink-100">Begriff suchen</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" aria-hidden="true" />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Begriff suchen ..."
            autoComplete="off"
            className="w-full rounded-xl border border-ink-300 bg-white py-3 pl-12 pr-4 text-base text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
          />
        </div>

        <fieldset className="mt-6">
          <legend className="mb-2 text-sm font-semibold text-ink-700 dark:text-ink-200">Kategorie</legend>
          <div className="flex flex-wrap gap-2">
            {[undefined, ...glossaryCategories].map((value) => (
              <button
                key={value ?? 'alle'}
                type="button"
                onClick={() => setCategory(value)}
                aria-pressed={category === value}
                className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${category === value ? 'border-brand-600 bg-brand-600 text-white' : 'border-ink-200 text-ink-700 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900'}`}
              >
                {value ?? 'Alle'}
              </button>
            ))}
          </div>
        </fieldset>

        <p className="mt-8 text-sm text-ink-500 dark:text-ink-400" role="status" aria-live="polite">
          {entries.length} {entries.length === 1 ? 'Begriff' : 'Begriffe'}
        </p>
        {entries.length ? (
          <ul className="mt-3 space-y-4">
            {entries.map((entry) => (
              <li key={entry.id} id={entry.id} className="scroll-mt-6 rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900 sm:p-6">
                <article aria-labelledby={`${entry.id}-title`}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 id={`${entry.id}-title`} className="text-xl font-bold text-ink-900 dark:text-white">{entry.term}</h2>
                    <span className="text-xs font-medium text-ink-500 dark:text-ink-400">{entry.category}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-700 dark:text-ink-200">{entry.definition}</p>
                  {entry.lessons.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-sm text-ink-500 dark:text-ink-400">Im Lernstoff ansehen:</span>
                      {entry.lessons.map((lesson) => (
                        <Link
                          key={`${lesson.subject}/${lesson.module}/${lesson.topic}`}
                          to={glossaryLessonPath(lesson)}
                          className="inline-flex min-h-11 items-center gap-1 rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-brand-700 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 dark:border-ink-700 dark:text-brand-300 dark:hover:bg-ink-800"
                        >
                          {getModuleBySlug(lesson.subject, lesson.module)?.topics.find((topic) => topic.slug === lesson.topic)?.title} <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 rounded-xl border border-ink-200 p-6 text-ink-600 dark:border-ink-800 dark:text-ink-300">Keine passenden Begriffe gefunden.</p>
        )}
      </section>
    </div>
  )
}
