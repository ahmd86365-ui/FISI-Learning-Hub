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
        className={`group relative flex animate-fadeIn flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-8 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-1 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark sm:flex-row sm:items-center sm:gap-10 sm:p-10 ${className}`}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-400/10 blur-3xl transition-opacity duration-300 group-hover:opacity-80 dark:bg-brand-500/10"
          aria-hidden="true"
        />

        <div
          className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${accent.iconBg} ${accent.iconText}`}
        >
          <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
        </div>

        <div className="relative mt-6 flex-1 sm:mt-0">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] font-medium uppercase tracking-wider ${accent.chipBg} ${accent.chipText}`}
          >
            Kernbereich
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink-900 dark:text-white">{subject.name}</h3>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-400">
            {subject.description}
          </p>
        </div>

        <div
          className={`relative mt-6 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold sm:mt-0 ${accent.text}`}
        >
          Entdecken
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>

        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 ${accent.ring} ${accent.glowShadow}`}
          aria-hidden="true"
        />
      </Link>
    )
  }

  return (
    <Link
      to={subject.path}
      className={`group relative flex animate-fadeIn flex-col rounded-2xl border border-ink-200 bg-white p-6 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-1 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark sm:p-7 ${className}`}
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
        className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 ${accent.ring}`}
        aria-hidden="true"
      />
    </Link>
  )
}
