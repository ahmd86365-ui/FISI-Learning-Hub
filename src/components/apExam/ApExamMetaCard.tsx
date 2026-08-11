import { Link } from 'react-router-dom'
import { AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react'
import type { ApExamMeta } from '../../types/apExam'

interface ApExamMetaCardProps {
  exam: ApExamMeta
  questionCount: number
  confirmedCount: number
  index?: number
}

const solutionBadge = {
  confirmed: {
    icon: CheckCircle2,
    label: 'Musterlösung verfügbar',
    cls: 'bg-teal-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300',
  },
  unofficial: {
    icon: AlertTriangle,
    label: 'Inoffizielle Lösung',
    cls: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
  },
  unclear: {
    icon: HelpCircle,
    label: 'Keine Lösung',
    cls: 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400',
  },
} as const

export function ApExamMetaCard({ exam, questionCount, confirmedCount, index = 0 }: ApExamMetaCardProps) {
  const badge = solutionBadge[exam.solutionSource]
  const BadgeIcon = badge.icon

  return (
    <Link
      to={`/pruefungsvorbereitung/it-ap/${exam.id}`}
      className="group flex animate-fadeIn flex-col rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-0.5 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-ink-900 dark:text-white">{exam.label}</h3>
        <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${badge.cls}`}>
          <BadgeIcon className="h-3 w-3" aria-hidden="true" />
          {badge.label}
        </span>
      </div>

      {exam.courseCode && (
        <p className="mt-1.5 font-mono text-[0.7rem] text-ink-400 dark:text-ink-500">{exam.courseCode}</p>
      )}

      <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
        {exam.taskCount} {exam.taskCount === 1 ? 'Aufgabe' : 'Aufgaben'} · {questionCount}{' '}
        {questionCount === 1 ? 'Teilaufgabe' : 'Teilaufgaben'}
        {confirmedCount < questionCount && confirmedCount > 0 && ` · ${confirmedCount} mit amtlicher Lösung`}
      </p>

      {(exam.durationMinutes || exam.totalPoints) && (
        <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">
          {exam.durationMinutes && `${exam.durationMinutes} Min.`}
          {exam.durationMinutes && exam.totalPoints && ' · '}
          {exam.totalPoints && `${exam.totalPoints} Punkte`}
        </p>
      )}
    </Link>
  )
}
