import { Link } from 'react-router-dom'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { ExamSection } from '../types/content'
import { accentClasses } from '../lib/accent'

export function ExamPreparationCard({ section, index = 0 }: { section: ExamSection; index?: number }) {
  const accent = accentClasses[section.accent]
  const Icon = section.icon
  const isAvailable = section.status === 'available' && section.path

  const cardCls =
    'group relative flex animate-fadeIn flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:border-ink-300 dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:border-ink-700 sm:p-7' +
    (isAvailable ? ' hover:-translate-y-0.5 hover:shadow-card-hover dark:hover:shadow-card-hover-dark' : '')

  const content = (
    <>
      <div className="flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.iconBg} ${accent.iconText}`}>
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </div>
        {isAvailable ? (
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-medium ${accent.chipBg} ${accent.chipText}`}>
            Verfügbar
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-2.5 py-1 text-[0.7rem] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
            <Clock3 className="h-3 w-3" aria-hidden="true" />
            Bald verfügbar
          </span>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
        {section.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{section.description}</p>

      <div className="mt-6 flex items-center justify-between gap-2 border-t border-dashed border-ink-200 pt-4 dark:border-ink-800">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} aria-hidden="true" />
          <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-400 dark:text-ink-500">
            {isAvailable ? 'Jetzt starten' : 'Inhalte folgen'}
          </p>
        </div>
        {isAvailable && (
          <ArrowRight
            className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-ink-600"
            aria-hidden="true"
          />
        )}
      </div>
    </>
  )

  if (isAvailable) {
    return (
      <Link to={section.path!} className={cardCls} style={{ animationDelay: `${index * 90}ms` }}>
        {content}
      </Link>
    )
  }

  return (
    <div className={cardCls} style={{ animationDelay: `${index * 90}ms` }}>
      {content}
    </div>
  )
}
