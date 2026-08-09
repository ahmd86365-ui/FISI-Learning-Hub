import { useState } from 'react'
import { Check, X } from 'lucide-react'
import type { Exercise } from '../../types/content'

const difficultyLabel: Record<Exercise['difficulty'], string> = {
  easy: 'Leicht',
  medium: 'Mittel',
  hard: 'Anspruchsvoll',
}

function firstCorrectAnswer(correctAnswer: string | string[]): string {
  return Array.isArray(correctAnswer) ? (correctAnswer[0] ?? '') : correctAnswer
}

export function ExerciseItem({ exercise, index }: { exercise: Exercise; index: number }) {
  const [selected, setSelected] = useState<string[]>([])
  const [textAnswer, setTextAnswer] = useState('')
  const [checked, setChecked] = useState(false)

  const isMultiChoice = exercise.type === 'multiple-choice'
  const isChoiceBased = isMultiChoice || exercise.type === 'single-choice' || exercise.type === 'true-false'
  const isFreeform = !isChoiceBased

  const correctSet = new Set(
    Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer : [exercise.correctAnswer],
  )

  const isCorrect = isFreeform
    ? textAnswer.trim().toLowerCase() === firstCorrectAnswer(exercise.correctAnswer).trim().toLowerCase()
    : selected.length === correctSet.size && selected.every((s) => correctSet.has(s))

  const toggleOption = (optionId: string) => {
    if (checked) return
    if (isMultiChoice) {
      setSelected((prev) => (prev.includes(optionId) ? prev.filter((id) => id !== optionId) : [...prev, optionId]))
    } else {
      setSelected([optionId])
    }
  }

  const reset = () => {
    setChecked(false)
    setSelected([])
    setTextAnswer('')
  }

  const canCheck = isFreeform ? textAnswer.trim().length > 0 : selected.length > 0

  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
          Übung {index + 1}
        </span>
        <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-ink-500 dark:bg-ink-800 dark:text-ink-400">
          {difficultyLabel[exercise.difficulty]}
        </span>
      </div>

      <p className="text-base font-medium leading-relaxed text-ink-900 dark:text-white">{exercise.question}</p>

      {isChoiceBased && exercise.options && (
        <div className="mt-4 space-y-2">
          {exercise.options.map((option) => {
            const isSelected = selected.includes(option.id)
            const showCorrect = checked && correctSet.has(option.id)
            const showWrong = checked && isSelected && !correctSet.has(option.id)
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleOption(option.id)}
                disabled={checked}
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
                {option.text}
                {showCorrect && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                {showWrong && <X className="h-4 w-4 shrink-0" aria-hidden="true" />}
              </button>
            )
          })}
        </div>
      )}

      {isFreeform && (
        <textarea
          value={textAnswer}
          onChange={(e) => setTextAnswer(e.target.value)}
          disabled={checked}
          rows={exercise.type === 'text' ? 2 : 3}
          placeholder="Deine Antwort..."
          className="mt-4 w-full rounded-lg border border-ink-200 bg-white p-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 disabled:opacity-70 dark:border-ink-700 dark:bg-ink-950 dark:text-white dark:focus:border-brand-500"
        />
      )}

      <div className="mt-4 flex items-center gap-3">
        {!checked ? (
          <button
            type="button"
            onClick={() => setChecked(true)}
            disabled={!canCheck}
            className="inline-flex h-9 items-center rounded-full bg-brand-600 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:pointer-events-none disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-400"
          >
            Antwort prüfen
          </button>
        ) : (
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-9 items-center rounded-full bg-ink-100 px-4 text-sm font-medium text-ink-800 transition-colors hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-100 dark:hover:bg-ink-700"
          >
            Erneut versuchen
          </button>
        )}
      </div>

      {checked && (
        <p
          className={`mt-4 text-sm font-medium ${
            isCorrect ? 'text-teal-600 dark:text-teal-400' : 'text-rose-600 dark:text-rose-400'
          }`}
        >
          {isCorrect ? 'Richtig!' : 'Nicht ganz richtig.'}
        </p>
      )}

      {checked && exercise.explanation && (
        <p className="mt-2 rounded-lg bg-ink-50 p-3 text-sm leading-relaxed text-ink-600 dark:bg-ink-800/60 dark:text-ink-300">
          {exercise.explanation}
        </p>
      )}
    </div>
  )
}
