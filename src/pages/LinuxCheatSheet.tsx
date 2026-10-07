import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Search, TerminalSquare } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { Breadcrumb } from '../components/content/Breadcrumb'
import { PageHeader } from '../components/PageHeader'
import { SmartBackButton } from '../components/navigation/SmartBackButton'
import { BackToTop } from '../components/navigation/BackToTop'
import { linuxCheatSheetSections } from '../data/linux/cheatSheet'

const normalize = (value: string) => value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function LinuxCheatSheet() {
  const [params, setParams] = useSearchParams()
  const requestedTag = Number(params.get('tag'))
  const initialTag = linuxCheatSheetSections.some((section) => section.tag === requestedTag) ? requestedTag : linuxCheatSheetSections[0].tag
  const [openTag, setOpenTag] = useState(initialTag)
  const [query, setQuery] = useState('')
  const focusedRef = useRef<HTMLElement | null>(null)
  const normalizedQuery = normalize(query.trim())

  useEffect(() => {
    if (!linuxCheatSheetSections.some((section) => section.tag === requestedTag)) return
    setOpenTag(requestedTag)
    const frame = requestAnimationFrame(() => focusedRef.current?.scrollIntoView({ block: 'start' }))
    return () => cancelAnimationFrame(frame)
  }, [requestedTag])

  const filtered = useMemo(() => linuxCheatSheetSections.map((section) => ({
    ...section,
    entries: normalizedQuery
      ? section.entries.filter((item) => normalize(`${item.purpose} ${item.commands.join(' ')}`).includes(normalizedQuery))
      : section.entries,
  })).filter((section) => section.entries.length > 0), [normalizedQuery])

  const chooseTag = (tag: number) => {
    const closing = openTag === tag
    setOpenTag(closing ? 0 : tag)
    const next = new URLSearchParams(params)
    if (closing) next.delete('tag')
    else next.set('tag', String(tag))
    setParams(next, { replace: true })
  }

  return (
    <div>
      <PageHeader
        eyebrow="Linux"
        title="Linux Spickzettel"
        description="Befehle und Fehlerhilfen aus den Linux-Tagen 2 bis 13 – kompakt, durchsuchbar und direkt bei der passenden Lektion erreichbar."
        accent="brand"
        breadcrumb={<Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'IT', to: '/it' }, { label: 'Linux', to: '/it/linux' }, { label: 'Spickzettel' }]} />}
      />

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <SmartBackButton label="Zurück" fallback="/it/linux" className="mb-5 -ml-3" />

        <div className="relative mb-7">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" aria-hidden="true" />
          <label htmlFor="linux-cheat-sheet-search" className="sr-only">Spickzettel durchsuchen</label>
          <input
            id="linux-cheat-sheet-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Aufgabe oder Befehl suchen, z. B. chmod, grep, Cron …"
            className="min-h-12 w-full rounded-xl border border-ink-200 bg-white py-3 pl-11 pr-4 text-sm text-ink-900 shadow-soft outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-500"
          />
        </div>

        {normalizedQuery && (
          <p className="mb-4 text-sm text-ink-500 dark:text-ink-400" aria-live="polite">
            {filtered.reduce((sum, section) => sum + section.entries.length, 0)} Treffer in {filtered.length} {filtered.length === 1 ? 'Tag' : 'Tags'}
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink-300 px-5 py-12 text-center dark:border-ink-700">
            <TerminalSquare className="mx-auto h-8 w-8 text-ink-400" aria-hidden="true" />
            <p className="mt-3 font-semibold text-ink-800 dark:text-ink-100">Kein Eintrag gefunden</p>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Suche nach einer Aufgabe oder einem Teil des Befehls.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((section) => {
              const isOpen = normalizedQuery ? true : openTag === section.tag
              const sectionId = `spickzettel-tag-${section.tag}`
              return (
                <section
                  key={section.tag}
                  id={`tag-${section.tag}`}
                  ref={(node) => { if (section.tag === requestedTag) focusedRef.current = node }}
                  className="scroll-mt-20 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-soft dark:border-ink-800 dark:bg-ink-900"
                >
                  <h2>
                    <button
                      type="button"
                      onClick={() => chooseTag(section.tag)}
                      aria-expanded={isOpen}
                      aria-controls={sectionId}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600 sm:px-5"
                    >
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-400">Tag {section.tag}</span>
                        <span className="mt-0.5 block font-semibold text-ink-900 dark:text-white">{section.title}</span>
                      </span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-ink-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  </h2>

                  {isOpen && (
                    <div id={sectionId} className="border-t border-ink-100 dark:border-ink-800">
                      <div className="hidden grid-cols-[minmax(12rem,0.9fr)_minmax(0,1.4fr)] gap-5 bg-ink-50 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-ink-500 dark:bg-ink-950/40 dark:text-ink-400 sm:grid">
                        <span>{section.kind === 'troubleshooting' ? 'Du siehst' : 'Aufgabe'}</span>
                        <span>{section.kind === 'troubleshooting' ? 'Das hilft' : 'Befehl'}</span>
                      </div>
                      <ul className="divide-y divide-ink-100 dark:divide-ink-800">
                        {section.entries.map((item, index) => (
                          <li key={`${item.purpose}-${index}`} className="grid gap-2 px-4 py-4 sm:grid-cols-[minmax(12rem,0.9fr)_minmax(0,1.4fr)] sm:gap-5 sm:px-5">
                            <p className="text-sm font-medium leading-relaxed text-ink-800 dark:text-ink-100">{item.purpose}</p>
                            <div className="min-w-0 space-y-1.5" data-no-translate>
                              {item.commands.map((command) => (
                                <pre key={command} className="max-w-full overflow-x-auto rounded-lg bg-ink-950 px-3 py-2 text-ink-100 dark:bg-black/40"><code className="font-mono text-xs leading-relaxed sm:text-sm">{command}</code></pre>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )
            })}
          </div>
        )}
      </main>
      <BackToTop />
    </div>
  )
}
