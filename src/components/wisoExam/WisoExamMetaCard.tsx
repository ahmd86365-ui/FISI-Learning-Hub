import { Link } from 'react-router-dom'
import { CheckCircle2, HelpCircle } from 'lucide-react'
import type { WisoExamMeta } from '../../types/wisoExam'

interface WisoExamMetaCardProps {
  exam: WisoExamMeta
  questionCount: number
  confirmedCount: number
  index?: number
}

export function WisoExamMetaCard({ exam, questionCount, confirmedCount, index = 0 }: WisoExamMetaCardProps) {
  return (
    <Link
      to={`/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/uebung?exam=${exam.id}`}
      className="group flex animate-fadeIn flex-col rounded-xl border border-ink-200 bg-white p-5 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-0.5 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-ink-900 dark:text-white">{exam.label}</h3>
        {exam.hasOfficialSolution ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-teal-700 dark:bg-teal-500/10 dark:text-teal-300">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            Lösung verfügbar
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[0.7rem] font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
            <HelpCircle className="h-3 w-3" aria-hidden="true" />
            Keine Lösung
          </span>
        )}
      </div>

      {exam.courseCodes && (
        <p className="mt-1.5 font-mono text-[0.7rem] text-ink-400 dark:text-ink-500">{exam.courseCodes}</p>
      )}

      <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">
        {questionCount} {questionCount === 1 ? 'Aufgabe' : 'Aufgaben'}
        {confirmedCount < questionCount && ` · ${confirmedCount} mit amtlicher Lösung`}
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
