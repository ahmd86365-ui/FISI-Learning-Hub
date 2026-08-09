import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import type { AccentKey } from '../types/content'
import { accentClasses } from '../lib/accent'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  description?: string
  icon?: LucideIcon
  accent?: AccentKey
  breadcrumb?: ReactNode
  children?: ReactNode
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  description,
  icon: Icon,
  accent = 'brand',
  breadcrumb,
  children,
}: PageHeaderProps) {
  const accentCls = accentClasses[accent]

  return (
    <header className="animate-fadeIn border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {breadcrumb && <div className="mb-6">{breadcrumb}</div>}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <p
                className={`mb-3 inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider ${accentCls.chipBg} ${accentCls.chipText}`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-2 text-sm font-medium ${accentCls.text}`}>{subtitle}</p>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
            )}
          </div>

          {Icon && (
            <div
              className={`hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:flex ${accentCls.iconBg} ${accentCls.iconText}`}
              aria-hidden="true"
            >
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  )
}
