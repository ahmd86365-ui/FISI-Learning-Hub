function Dots({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-brand-400 dark:bg-brand-500" />
      ))}
    </div>
  )
}

const forms = [
  { title: 'Polypol', anbieter: 5, nachfrager: 5 },
  { title: 'Oligopol', anbieter: 2, nachfrager: 5 },
  { title: 'Monopol', anbieter: 1, nachfrager: 5 },
]

export function MarketFormsDiagram() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {forms.map((form) => (
        <div key={form.title} className="rounded-lg border border-ink-200 p-4 text-center dark:border-ink-700">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Anbieter
          </p>
          <Dots count={form.anbieter} />
          <div className="my-3 h-px bg-ink-200 dark:bg-ink-700" />
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Nachfrager
          </p>
          <Dots count={form.nachfrager} />
          <p className="mt-4 text-sm font-semibold text-ink-900 dark:text-white">{form.title}</p>
        </div>
      ))}
    </div>
  )
}
