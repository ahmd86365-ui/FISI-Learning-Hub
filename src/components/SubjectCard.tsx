import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Subject } from '../types/content'
import { accentClasses } from '../lib/accent'

interface SubjectCardProps {
  subject: Subject
  index?: number
  featured?: boolean
  className?: string
}

export function SubjectCard({ subject, index = 0, featured = false, className = '' }: SubjectCardProps) {
  const accent = accentClasses[subject.accent]
  const Icon = subject.icon

  if (featured) {
    return (
      <Link
        to={subject.path}
        className={`group relative flex animate-fadeIn flex-col rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-colors duration-200 [animation-fill-mode:forwards] hover:border-brand-300 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-brand-500/50 sm:flex-row sm:items-center sm:gap-6 sm:p-6 ${className}`}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div
          className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${accent.iconBg} ${accent.iconText}`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </div>

        <div className="relative mt-6 flex-1 sm:mt-0">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider ${accent.chipBg} ${accent.chipText}`}
          >
            Kernbereich
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink-900 dark:text-white">{subject.name}</h3>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            {subject.description}
          </p>
        </div>

        <div
          className={`relative mt-5 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold sm:mt-0 ${accent.text}`}
        >
          Entdecken
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>

        <div
          className={`pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition-colors ${accent.ring}`}
          aria-hidden="true"
        />
      </Link>
    )
  }

  return (
    <Link
      to={subject.path}
      className={`group relative flex animate-fadeIn flex-col rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-colors duration-200 [animation-fill-mode:forwards] hover:border-brand-300 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-brand-500/50 ${className}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${accent.iconBg} ${accent.iconText}`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{subject.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{subject.description}</p>

      <div
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${accent.text}`}
      >
        Entdecken
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>

      <div
        className={`pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition-colors ${accent.ring}`}
        aria-hidden="true"
      />
    </Link>
  )
}
