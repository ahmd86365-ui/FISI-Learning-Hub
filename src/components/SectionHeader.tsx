import type { ReactNode } from 'react'

interface SectionHeaderProps {
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeader({ title, description, align = 'left', children }: SectionHeaderProps) {
  const alignCls = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${align === 'center' ? 'sm:flex-col sm:items-center' : ''}`}>
      <div className={`flex max-w-2xl flex-col ${alignCls}`}>
        <h2 className="text-xl font-bold leading-tight tracking-tight text-ink-950 dark:text-white sm:text-2xl">{title}</h2>
        {description && (
          <p className="mt-1.5 text-sm leading-6 text-ink-500 dark:text-ink-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}
