import type { LucideIcon } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description: string
  hint?: string
  children?: ReactNode
  className?: string
}

export function EmptyState({
  icon: Icon = Sparkles,
  title,
  description,
  hint,
  children,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`relative flex animate-fadeIn flex-col items-center rounded-2xl border border-dashed border-ink-200 bg-ink-50/60 px-6 py-16 text-center dark:border-ink-800 dark:bg-ink-900/40 sm:py-20 ${className}`}
    >
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-ink-100 dark:bg-ink-900 dark:ring-ink-800">
        <Icon className="h-7 w-7 text-brand-500 dark:text-brand-400" strokeWidth={1.5} aria-hidden="true" />
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-2 ring-ink-50 dark:ring-ink-900">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </div>

      <h3 className="text-base font-semibold text-ink-900 dark:text-white sm:text-lg">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
      {hint && (
        <p className="mt-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-400 ring-1 ring-ink-200 dark:bg-ink-900 dark:text-ink-500 dark:ring-ink-800">
          {hint}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
