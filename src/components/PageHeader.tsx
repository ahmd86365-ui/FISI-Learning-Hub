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
    <header className="animate-fadeIn border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
      <div className="mx-auto max-w-content px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        {breadcrumb && <div className="mb-4">{breadcrumb}</div>}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow && (
              <p
                className={`mb-2 inline-flex items-center rounded-md px-2 py-1 text-[0.68rem] font-bold uppercase tracking-wider ${accentCls.chipBg} ${accentCls.chipText}`}
              >
                {eyebrow}
              </p>
            )}
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-ink-950 dark:text-white sm:text-[1.75rem]">
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-2 text-sm font-medium ${accentCls.text}`}>{subtitle}</p>
            )}
            {description && (
              <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-500 dark:text-ink-400">{description}</p>
            )}
          </div>

          {Icon && (
            <div
              className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:flex ${accentCls.iconBg} ${accentCls.iconText}`}
              aria-hidden="true"
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </div>
          )}
        </div>

        {children && <div className="mt-5">{children}</div>}
      </div>
    </header>
  )
}
