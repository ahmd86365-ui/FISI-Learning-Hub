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
    <div className={`mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${align === 'center' ? 'sm:flex-col sm:items-center' : ''}`}>
      <div className={`flex max-w-2xl flex-col ${alignCls}`}>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 text-base leading-relaxed text-ink-500 dark:text-ink-400">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}
