import { Bookmark, RotateCcw } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useSavedItems, type SavedContentType, type SavedItemKind } from '../../contexts/SavedItemsContext'

interface ContentActionsProps {
  contentType: SavedContentType
  contentId: string
  title: string
  path?: string
  compact?: boolean
}

const actions: { kind: SavedItemKind; label: string; icon: typeof Bookmark }[] = [
  { kind: 'favorite', label: 'Favorit', icon: Bookmark },
  { kind: 'review', label: 'Wiederholen', icon: RotateCcw },
]

export function ContentActions({ contentType, contentId, title, path, compact = false }: ContentActionsProps) {
  const location = useLocation()
  const { isSaved, isPending, toggle } = useSavedItems()
  const contentPath = path ?? `${location.pathname}${location.search}`

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="In persönlichen Listen speichern">
      {actions.map(({ kind, label, icon: Icon }) => {
        const active = isSaved(kind, contentType, contentId)
        const pending = isPending(kind, contentType, contentId)
        return (
          <button
            key={kind}
            type="button"
            onClick={() => void toggle(kind, { contentType, contentId, title, path: contentPath })}
            disabled={pending}
            aria-pressed={active}
            className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors disabled:opacity-60 ${
              compact ? 'h-8 px-2.5 text-xs' : 'h-9 px-3.5 text-sm'
            } ${
              active
                ? kind === 'favorite'
                  ? 'border-amber-300 bg-amber-50 text-amber-700 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300'
                  : 'border-brand-300 bg-brand-50 text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-300'
                : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:border-ink-600 dark:hover:bg-ink-800'
            }`}
          >
            <Icon className={`h-3.5 w-3.5 ${active && kind === 'favorite' ? 'fill-current' : ''}`} aria-hidden="true" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
