import { ArrowRight } from 'lucide-react'

const stages = [
  { title: 'Primärer Sektor', subtitle: 'Rohstoffe gewinnen' },
  { title: 'Sekundärer Sektor', subtitle: 'Rohstoffe verarbeiten' },
  { title: 'Tertiärer Sektor', subtitle: 'Dienstleistungen' },
]

export function WirtschaftssektorenFlow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {stages.map((stage, i) => (
        <div key={stage.title} className="flex items-center gap-2">
          <div className="rounded-lg border border-ink-200 bg-ink-50 px-4 py-2.5 text-center dark:border-ink-700 dark:bg-ink-800">
            <p className="text-xs font-semibold text-ink-800 dark:text-ink-100">{stage.title}</p>
            <p className="text-[0.65rem] text-ink-500 dark:text-ink-400">{stage.subtitle}</p>
          </div>
          {i < stages.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-300 dark:text-ink-600" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}
