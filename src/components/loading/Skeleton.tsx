export function SkeletonText({ className = 'w-2/3' }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-3 animate-pulse rounded bg-ink-200 motion-reduce:animate-none dark:bg-ink-700 ${className}`} />
}

export function SkeletonCard({ rows = 3, className = '' }: { rows?: number; className?: string }) {
  return <div aria-hidden="true" className={`rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900 ${className}`}><div className="h-5 w-2/5 animate-pulse rounded bg-ink-200 motion-reduce:animate-none dark:bg-ink-700" /><div className="mt-5 space-y-3">{Array.from({ length: rows }, (_, index) => <SkeletonText key={index} className={index === rows - 1 ? 'w-1/2' : 'w-full'} />)}</div></div>
}

export function PageLoadingState({ label = 'Inhalte werden geladen …', cards = 2 }: { label?: string; cards?: number }) {
  return <div role="status" aria-label={label}><span className="sr-only">{label}</span><div className="grid gap-4 sm:grid-cols-2">{Array.from({ length: cards }, (_, index) => <SkeletonCard key={index} />)}</div></div>
}
