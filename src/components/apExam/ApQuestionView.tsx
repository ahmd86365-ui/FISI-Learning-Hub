import { AlertTriangle, Check, ChevronDown, FileText, HelpCircle, Minus, ScrollText, X } from 'lucide-react'
import type { ApExamQuestion } from '../../types/apExam'
import { apQuestionLabel, hasApSolution, type ApSelfAssessment } from '../../lib/apExamHelpers'
import { ContentActions } from '../saved/ContentActions'

interface ApQuestionViewProps {
  question: ApExamQuestion
  /** The learner's own free-text answer for this question (never graded automatically). */
  answerValue: string
  onAnswerChange?: (value: string) => void
  answerDisabled?: boolean
  revealed: boolean
  /** Omit to hide the reveal toggle entirely (e.g. during a timed simulation run). */
  onToggleReveal?: () => void
  assessment?: ApSelfAssessment
  onAssessmentChange?: (assessment: ApSelfAssessment) => void
}

const assessmentOptions: { value: ApSelfAssessment; label: string; icon: typeof Check; cls: string }[] = [
  {
    value: 'correct',
    label: 'Richtig',
    icon: Check,
    cls: 'border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300',
  },
  {
    value: 'partial',
    label: 'Teilweise',
    icon: Minus,
    cls: 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-300',
  },
  {
    value: 'incorrect',
    label: 'Falsch',
    icon: X,
    cls: 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300',
  },
]

export function ApQuestionView({
  question,
  answerValue,
  onAnswerChange,
  answerDisabled,
  revealed,
  onToggleReveal,
  assessment,
  onAssessmentChange,
}: ApQuestionViewProps) {
  const hasSolution = hasApSolution(question)

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
          {apQuestionLabel(question)}
          {question.topic && <span className="ml-2 normal-case text-ink-500 dark:text-ink-400">· {question.topic}</span>}
        </span>
        <div className="flex items-center gap-2">
          {question.maxPoints !== undefined && (
            <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
              {question.maxPoints} {question.maxPoints === 1 ? 'Punkt' : 'Punkte'}
            </span>
          )}
          {question.sourcePage && (
            <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
              S. {question.sourcePage}
            </span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <ContentActions
          contentType="exercise"
          contentId={question.id}
          title={`${apQuestionLabel(question)}: ${question.question}`}
          compact
        />
      </div>

      {question.scenario && (
        <div className="mb-4 rounded-lg border border-dashed border-ink-300 bg-ink-50/60 p-3.5 dark:border-ink-700 dark:bg-ink-900/40">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-ink-600 dark:text-ink-300">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Ausgangssituation
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {question.scenario}
          </p>
        </div>
      )}

      {question.referenceText && (
        <div className="mb-4 rounded-lg border border-brand-200 bg-brand-50/60 p-3.5 dark:border-brand-500/30 dark:bg-brand-500/10">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-brand-800 dark:text-brand-300">
            <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
            Referenzmaterial
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            {question.referenceText}
          </p>
        </div>
      )}

      <p className="whitespace-pre-line text-base font-medium leading-relaxed text-ink-900 dark:text-white">
        {question.question}
      </p>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
          Deine Antwort
        </label>
        <textarea
          value={answerValue}
          onChange={(e) => onAnswerChange?.(e.target.value)}
          disabled={answerDisabled || !onAnswerChange}
          rows={4}
          placeholder="Antwort formulieren – wie in der echten Prüfung, in ganzen Sätzen oder stichwortartig..."
          className="w-full resize-y rounded-lg border border-ink-200 bg-white p-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 disabled:cursor-default disabled:opacity-70 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:focus:border-brand-500"
        />
      </div>

      <div className="mt-4">
        {!hasSolution ? (
          <div className="flex items-start gap-2 rounded-lg bg-ink-100 p-3 text-sm text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
            <HelpCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Für diese Aufgabe liegt keine Lösung vor (kein Lösungsblatt veröffentlicht). Nutze die Frage zum freien
              Üben.
            </span>
          </div>
        ) : (
          <>
            {onToggleReveal && (
              <button
                type="button"
                onClick={onToggleReveal}
                aria-expanded={revealed}
                className="inline-flex items-center gap-1.5 rounded-full bg-ink-100 px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${revealed ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
                {revealed ? 'Musterlösung ausblenden' : 'Musterlösung anzeigen'}
              </button>
            )}

            {revealed && (
              <div className="mt-3 space-y-3">
                {question.answerStatus === 'unofficial' && (
                  <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>
                      Inoffizielle, unverifizierte Lösung aus einem handschriftlich kommentierten Exemplar – keine
                      amtliche Musterlösung.
                    </span>
                  </div>
                )}
                <p className="whitespace-pre-line rounded-lg bg-ink-50 p-3.5 text-sm leading-relaxed text-ink-700 dark:bg-ink-800/60 dark:text-ink-200">
                  {question.modelSolution}
                </p>

                {onAssessmentChange && (
                  <div>
                    <p className="mb-1.5 text-xs font-medium text-ink-500 dark:text-ink-400">
                      Vergleiche deine Antwort mit der Musterlösung – wie hättest du abgeschnitten?
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {assessmentOptions.map((opt) => {
                        const Icon = opt.icon
                        const isSelected = assessment === opt.value
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => onAssessmentChange(opt.value)}
                            aria-pressed={isSelected}
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                              isSelected
                                ? opt.cls
                                : 'border-ink-200 text-ink-600 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:border-ink-600 dark:hover:bg-ink-800'
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
