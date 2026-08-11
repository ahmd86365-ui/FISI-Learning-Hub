import type { ReactNode } from 'react'

export function IllustrationFrame({ caption, children }: { caption?: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      {children}
      {caption && (
        <figcaption className="mt-4 border-t border-ink-200 pt-3 text-center text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
