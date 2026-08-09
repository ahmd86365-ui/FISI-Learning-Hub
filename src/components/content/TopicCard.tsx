import { Link } from 'react-router-dom'
import { ArrowRight, FileText } from 'lucide-react'
import type { AccentKey, Topic } from '../../types/content'
import { accentClasses } from '../../lib/accent'

interface TopicCardProps {
  topic: Topic
  to: string
  accent: AccentKey
  index?: number
}

export function TopicCard({ topic, to, accent, index = 0 }: TopicCardProps) {
  const accentCls = accentClasses[accent]
  const exerciseCount = topic.exercises.length

  return (
    <Link
      to={to}
      className="group relative flex animate-fadeIn items-start gap-4 rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-0.5 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accentCls.iconBg} ${accentCls.iconText}`}>
        <FileText className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-ink-900 dark:text-white">{topic.title}</h3>
        {topic.shortIntro && (
          <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{topic.shortIntro}</p>
        )}
        {exerciseCount > 0 && (
          <p className="mt-2 text-xs font-medium text-ink-400 dark:text-ink-500">
            {exerciseCount} {exerciseCount === 1 ? 'Übung' : 'Übungen'}
          </p>
        )}
      </div>
      <ArrowRight
        className="mt-1 h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 group-hover:translate-x-1 dark:text-ink-600"
        aria-hidden="true"
      />
    </Link>
  )
}
