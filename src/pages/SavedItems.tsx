import { Bookmark, BookOpen, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EmptyState } from '../components/EmptyState'
import { useSavedItems, type SavedItem, type SavedItemKind } from '../contexts/SavedItemsContext'

export default function SavedItems() {
  const { items, loading, error } = useSavedItems()

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Persönliche Listen
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">Gespeichert</h1>
        <p className="mt-3 max-w-2xl text-ink-600 dark:text-ink-400">
          Deine Favoriten und Inhalte, die du später noch einmal wiederholen möchtest.
        </p>
      </header>

      {error && (
        <p className="mb-6 rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300" role="alert">
          Die Listen konnten nicht geladen werden: {error}
        </p>
      )}

      {loading ? (
        <div className="rounded-2xl border border-ink-200 bg-white p-10 text-center text-sm text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400" role="status">
          Persönliche Listen werden geladen …
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          <SavedSection kind="favorite" title="Meine Favoriten" items={items} />
          <SavedSection kind="review" title="Wiederholen" items={items} />
        </div>
      )}
    </div>
  )
}

function SavedSection({ kind, title, items }: { kind: SavedItemKind; title: string; items: SavedItem[] }) {
  const sectionItems = items.filter((item) => item.item_kind === kind)
  const Icon = kind === 'favorite' ? Bookmark : RotateCcw

  return (
    <section className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-card dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark">
      <div className="flex items-center gap-3 border-b border-ink-200 px-5 py-4 dark:border-ink-800">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${kind === 'favorite' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300' : 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300'}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-semibold text-ink-900 dark:text-white">{title}</h2>
          <p className="text-xs text-ink-500 dark:text-ink-400">{sectionItems.length} gespeichert</p>
        </div>
      </div>

      {sectionItems.length === 0 ? (
        <EmptyState
          icon={Icon}
          title={kind === 'favorite' ? 'Noch keine Favoriten' : 'Nichts zum Wiederholen'}
          description={kind === 'favorite' ? 'Markiere Lektionen oder Aufgaben als Favorit.' : 'Markiere Inhalte, die du später noch einmal ansehen möchtest.'}
          className="py-10"
        />
      ) : (
        <ul className="divide-y divide-ink-100 dark:divide-ink-800">
          {sectionItems.map((item) => (
            <li key={`${item.content_type}:${item.content_id}`}>
              <Link to={item.content_path} className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-ink-50 dark:hover:bg-ink-800/50">
                <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium leading-snug text-ink-800 dark:text-ink-100">{item.content_title}</span>
                  <span className="mt-1 block text-xs text-ink-400 dark:text-ink-500">
                    {item.content_type === 'lesson' ? 'Lektion' : 'Aufgabe'}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
