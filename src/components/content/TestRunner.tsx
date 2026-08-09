import { useState } from 'react'
import { CheckCircle2, ClipboardCheck, RotateCcw, XCircle } from 'lucide-react'
import type { Question, Test } from '../../types/content'
import { EmptyState } from '../EmptyState'

function isAnswerCorrect(given: string[], correctAnswer: string | string[]): boolean {
  const correctSet = new Set(Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer])
  return given.length === correctSet.size && given.every((a) => correctSet.has(a))
}

function drawRandomSubset(pool: Question[], size: number): Question[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, size)
}

/**
 * Generic test-taking shell used for both topic-level and module-wide
 * tests (`test.scope`). Renders an empty state until real questions exist —
 * never fabricates content. When `test.questionPoolSize` is set below the
 * pool size, a fresh random subset is drawn on every "Test starten" click,
 * so the same pool can back a module-wide "Gesamtprüfung" without always
 * showing every question.
 */
export function TestRunner({ test }: { test?: Test }) {
  const [started, setStarted] = useState(false)
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [finished, setFinished] = useState(false)

  if (!test || test.questions.length === 0) {
    return (
      <EmptyState
        icon={ClipboardCheck}
        title="Test noch nicht verfügbar"
        description="Der Test zu diesem Thema wird vorbereitet, sobald die Lerninhalte vollständig sind."
        className="py-12 sm:py-14"
      />
    )
  }

  const pool = test.questions
  const drawsSubset = Boolean(test.questionPoolSize && test.questionPoolSize < pool.length)

  const start = () => {
    setActiveQuestions(drawsSubset ? drawRandomSubset(pool, test.questionPoolSize!) : pool)
    setCurrent(0)
    setAnswers({})
    setFinished(false)
    setStarted(true)
  }

  const restart = () => {
    setAnswers({})
    setCurrent(0)
    setFinished(false)
    setStarted(false)
  }

  if (!started) {
    return (
      <div className="rounded-2xl border border-ink-200 bg-white p-8 text-center dark:border-ink-800 dark:bg-ink-900">
        <ClipboardCheck className="mx-auto h-8 w-8 text-brand-500 dark:text-brand-400" aria-hidden="true" />
        <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">{test.title}</h3>
        <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
          {drawsSubset
            ? `${test.questionPoolSize} von ${pool.length} Fragen (zufällig ausgewählt)`
            : `${pool.length} ${pool.length === 1 ? 'Frage' : 'Fragen'}`}
        </p>
        <button
          type="button"
          onClick={start}
          className="mt-5 inline-flex h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400"
        >
          Test starten
        </button>
      </div>
    )
  }

  const questions = activeQuestions

  if (finished) {
    const correctCount = questions.filter((q) => isAnswerCorrect(answers[q.id] ?? [], q.correctAnswer)).length
    const score = Math.round((correctCount / questions.length) * 100)

    return (
      <div className="rounded-2xl border border-ink-200 bg-white p-8 dark:border-ink-800 dark:bg-ink-900">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-8 w-8 text-brand-500 dark:text-brand-400" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">Test abgeschlossen</h3>
          <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
            {correctCount} von {questions.length} richtig ({score}%)
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-ink-100 px-5 text-sm font-medium text-ink-800 transition-colors hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-100 dark:hover:bg-ink-700"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Erneut versuchen
          </button>
        </div>

        <div className="mt-8 space-y-3 border-t border-ink-200 pt-6 text-left dark:border-ink-800">
          {questions.map((q, i) => {
            const given = answers[q.id] ?? []
            const isRight = isAnswerCorrect(given, q.correctAnswer)
            return (
              <div key={q.id} className="rounded-lg border border-ink-200 p-3 dark:border-ink-800">
                <div className="flex items-start gap-2">
                  {isRight ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" aria-hidden="true" />
                  ) : (
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" aria-hidden="true" />
                  )}
                  <div>
                    <p className="text-sm font-medium text-ink-800 dark:text-ink-100">
                      {i + 1}. {q.question}
                    </p>
                    {q.explanation && (
                      <p className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">{q.explanation}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const question = questions[current]
  const selected = answers[question.id] ?? []
  const isMulti = question.type === 'multiple-choice'

  const toggle = (optionId: string) => {
    setAnswers((prev) => {
      const prevSelected = prev[question.id] ?? []
      if (isMulti) {
        return {
          ...prev,
          [question.id]: prevSelected.includes(optionId)
            ? prevSelected.filter((id) => id !== optionId)
            : [...prevSelected, optionId],
        }
      }
      return { ...prev, [question.id]: [optionId] }
    })
  }

  const goNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
    } else {
      setFinished(true)
    }
  }

  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-8">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
          Frage {current + 1} / {questions.length}
        </span>
      </div>

      <p className="text-base font-medium leading-relaxed text-ink-900 dark:text-white">{question.question}</p>

      {question.options && (
        <div className="mt-4 space-y-2">
          {question.options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => toggle(option.id)}
              aria-pressed={selected.includes(option.id)}
              className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                selected.includes(option.id)
                  ? 'border-brand-400 bg-brand-50 text-brand-800 dark:border-brand-500/50 dark:bg-brand-500/10 dark:text-brand-300'
                  : 'border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ink-600 dark:hover:bg-ink-800'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={goNext}
          disabled={selected.length === 0}
          className="inline-flex h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:pointer-events-none disabled:opacity-40 dark:bg-brand-500 dark:hover:bg-brand-400"
        >
          {current < questions.length - 1 ? 'Weiter' : 'Test abschließen'}
        </button>
      </div>
    </div>
  )
}
