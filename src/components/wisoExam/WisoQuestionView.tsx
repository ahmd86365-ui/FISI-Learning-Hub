import { Check, FileText, Info, ScrollText, X } from 'lucide-react'
import type { WisoExamQuestion } from '../../types/wisoExam'
import { isWisoAnswerCorrect, questionLabel } from '../../lib/wisoExamHelpers'
import { ContentActions } from '../saved/ContentActions'

interface WisoQuestionViewProps {
  question: WisoExamQuestion
  examLabel: string
  value: string[]
  onChange: (value: string[]) => void
  revealed: boolean
  disabled?: boolean
}

export function WisoQuestionView({ question, examLabel, value, onChange, revealed, disabled }: WisoQuestionViewProps) {
  const isMulti = question.type === 'multiple-choice'
  const isChoice = question.type === 'single-choice' || isMulti
  const correct = revealed ? isWisoAnswerCorrect(question, value) : null
  const correctSet = new Set(
    question.answerStatus === 'confirmed' && question.correctAnswer !== undefined
      ? Array.isArray(question.correctAnswer)
        ? question.correctAnswer
        : [question.correctAnswer]
      : [],
  )

  const toggleOption = (optionId: string) => {
    if (disabled) return
    if (isMulti) {
      onChange(value.includes(optionId) ? value.filter((id) => id !== optionId) : [...value, optionId])
    } else {
      onChange([optionId])
    }
  }

  return (
    <div id={question.id} className="scroll-mt-24 rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
          {questionLabel(question)}
        </span>
        <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
          Quelle: {examLabel}
          {question.sourcePage ? ` · S. ${question.sourcePage}` : ''}
        </span>
      </div>

      <div className="mb-4">
        <ContentActions
          contentType="exercise"
          contentId={question.id}
          title={`${questionLabel(question)}: ${question.question}`}
          compact
        />
      </div>

      {question.scenario && (
        <div className="mb-4 rounded-lg border border-dashed border-ink-300 bg-ink-50/60 p-3.5 dark:border-ink-700 dark:bg-ink-900/40">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-ink-600 dark:text-ink-300">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Ausgangssituation
          </p>
          <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">{question.scenario}</p>
        </div>
      )}

      {question.referenceText && (
        <div className="mb-4 rounded-lg border border-brand-200 bg-brand-50/60 p-3.5 dark:border-brand-500/30 dark:bg-brand-500/10">
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-brand-800 dark:text-brand-300">
            <ScrollText className="h-3.5 w-3.5" aria-hidden="true" />
            Referenztext
          </p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            {question.referenceText}
          </p>
        </div>
      )}

      <p className="text-base font-medium leading-relaxed text-ink-900 dark:text-white">{question.question}</p>

      {isChoice && question.options && (
        <div className="mt-4 space-y-2">
          {question.options.map((option) => {
            const isSelected = value.includes(option.id)
            const showCorrect = revealed && correctSet.has(option.id)
            const showWrong = revealed && isSelected && question.answerStatus === 'confirmed' && !correctSet.has(option.id)
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleOption(option.id)}
                disabled={disabled}
                aria-pressed={isSelected}
                className={`flex w-full items-center justify-between gap-2 rounded-lg border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${
                  showCorrect
                    ? 'border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-300'
                    : showWrong
                      ? 'border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-500/40 dark:bg-rose-500/10 dark:text-rose-300'
                      : isSelected
                        ? 'border-brand-400 bg-brand-50 text-brand-800 dark:border-brand-500/50 dark:bg-brand-500/10 dark:text-brand-300'
                        : 'border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ink-600 dark:hover:bg-ink-800'
                }`}
              >
                <span>
                  <span className="mr-2 font-mono text-xs text-ink-400 dark:text-ink-500">{option.id}</span>
                  {option.text}
                </span>
                {showCorrect && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                {showWrong && <X className="h-4 w-4 shrink-0" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'open-answer' && (
        <input
          type="text"
          value={value[0] ?? ''}
          onChange={(e) => onChange([e.target.value])}
          disabled={disabled}
          placeholder="Antwort eingeben..."
          className="mt-4 w-full rounded-lg border border-ink-200 bg-white p-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 disabled:opacity-70 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:focus:border-brand-500"
        />
      )}

      {revealed && question.answerStatus === 'unclear' && (
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-ink-100 p-3 text-sm text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Für diese Aufgabe liegt keine amtliche Musterlösung vor (kein Lösungsblatt verfügbar). Diese Frage
            fließt nicht in die Auswertung ein.
          </span>
        </div>
      )}

      {revealed && question.answerStatus === 'confirmed' && (
        <>
          <p
            className={`mt-4 text-sm font-medium ${correct ? 'text-teal-600 dark:text-teal-400' : 'text-rose-600 dark:text-rose-400'}`}
          >
            {correct ? 'Richtig!' : 'Nicht ganz richtig.'}
          </p>
          {question.type === 'open-answer' && (
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-300">
              Richtige Antwort:{' '}
              <span className="font-medium text-ink-900 dark:text-white">
                {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}
              </span>
            </p>
          )}
          {question.explanation && (
            <p className="mt-2 rounded-lg bg-ink-50 p-3 text-sm leading-relaxed text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
              {question.explanation}
            </p>
          )}
        </>
      )}
    </div>
  )
}
