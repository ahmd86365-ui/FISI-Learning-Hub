import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

/** Shared frame for interactive lesson widgets — icon, title, description, then the widget's own fields/result. */
export function CalculatorShell({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: LucideIcon
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
          <p className="text-xs leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export function NumberField({
  label,
  unit,
  value,
  onChange,
}: {
  label: string
  unit?: string
  value: number
  onChange: (value: number) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-600 dark:text-ink-300">
        {label}
        {unit ? ` (${unit})` : ''}
      </span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : ''}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:focus:border-brand-500"
      />
    </label>
  )
}

export function roundTo(n: number, decimals = 2): string {
  if (!Number.isFinite(n)) return '–'
  const factor = 10 ** decimals
  return (Math.round(n * factor) / factor).toString()
}
