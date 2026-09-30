import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import type { AccentKey, Module } from '../../types/content'
import { accentClasses } from '../../lib/accent'

interface ModuleCardProps {
  module: Module
  subjectPath: string
  accent: AccentKey
  index?: number
}

export function ModuleCard({ module, subjectPath, accent, index = 0 }: ModuleCardProps) {
  const accentCls = accentClasses[accent]
  const Icon = module.icon ?? BookOpen
  const topicCount = module.topics.length

  return (
    <Link
      to={`${subjectPath}/${module.slug}`}
      className="group relative flex animate-fadeIn flex-col rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-colors duration-200 [animation-fill-mode:forwards] hover:border-brand-300 hover:bg-brand-50/30 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-brand-500/50 dark:hover:bg-brand-500/5"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 ${accentCls.iconBg} ${accentCls.iconText}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">{module.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{module.description}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${accentCls.text}`}>
          Öffnen
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
        {topicCount > 0 && (
          <span className="text-xs font-medium text-ink-400 dark:text-ink-500">
            {topicCount} {topicCount === 1 ? 'Thema' : 'Themen'}
          </span>
        )}
      </div>

      <div
        className={`pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition-all duration-200 ${accentCls.ring}`}
        aria-hidden="true"
      />
    </Link>
  )
}
