import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw, Send, Shuffle, Timer, XCircle } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { Button } from '../../components/Button'
import { WisoQuestionView } from '../../components/wisoExam/WisoQuestionView'
import { getSubjectBySlug } from '../../data/subjects'
import { getAllWisoExams, getAllWisoQuestions, getWisoExamMeta, getWisoExamQuestions } from '../../data/wisoExam'
import { formatCountdown, isWisoAnswerCorrect, pickRandomQuestions } from '../../lib/wisoExamHelpers'
import type { WisoExamQuestion } from '../../types/wisoExam'

const MIXED_QUESTION_COUNT = 30
const MIXED_DURATION_MINUTES = 60

function sortByOriginalOrder(questions: WisoExamQuestion[]): WisoExamQuestion[] {
  return [...questions].sort((a, b) => {
    if (a.questionNumber !== b.questionNumber) return a.questionNumber - b.questionNumber
    return (a.subPart ?? '').localeCompare(b.subPart ?? '')
  })
}

export default function WisoIhkSimulation() {
  const subject = getSubjectBySlug('pruefung')!
  const exams = getAllWisoExams().filter((e) => e.hasOfficialSolution)

  const [source, setSource] = useState<'mixed' | string>('mixed')
  const [phase, setPhase] = useState<'setup' | 'running' | 'review'>('setup')
  const [questions, setQuestions] = useState<WisoExamQuestion[]>([])
  const [durationMinutes, setDurationMinutes] = useState(MIXED_DURATION_MINUTES)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [confirmingSubmit, setConfirmingSubmit] = useState(false)
  const submittedRef = useRef(false)

  const examLabel = (examId: string) => getWisoExamMeta(examId)?.label ?? examId

  const submit = useCallback(() => {
    if (submittedRef.current) return
    submittedRef.current = true
    setPhase('review')
  }, [])

  useEffect(() => {
    if (phase !== 'running') return
    if (secondsLeft <= 0) {
      submit()
      return
    }
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(timer)
  }, [phase, secondsLeft, submit])

  const start = () => {
    let picked: WisoExamQuestion[]
    let minutes: number

    if (source === 'mixed') {
      const pool = getAllWisoQuestions().filter((q) => q.answerStatus === 'confirmed')
      picked = pickRandomQuestions(pool, Math.min(MIXED_QUESTION_COUNT, pool.length))
      minutes = MIXED_DURATION_MINUTES
    } else {
      const meta = getWisoExamMeta(source)
      const pool = getWisoExamQuestions(source).filter((q) => q.answerStatus === 'confirmed')
      picked = sortByOriginalOrder(pool)
      minutes = meta?.durationMinutes ?? MIXED_DURATION_MINUTES
    }

    submittedRef.current = false
    setQuestions(picked)
    setDurationMinutes(minutes)
    setSecondsLeft(minutes * 60)
    setCurrent(0)
    setAnswers({})
    setConfirmingSubmit(false)
    setPhase('running')
  }

  const restart = () => setPhase('setup')

  const question = questions[current]
  const answeredCount = questions.filter((q) => (answers[q.id] ?? []).length > 0).length

  const correctCount = questions.filter((q) => isWisoAnswerCorrect(q, answers[q.id] ?? []) === true).length
  const scorePercent = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0

  const mistakesByTopic = useMemo(() => {
    const map = new Map<string, number>()
    for (const q of questions) {
      if (isWisoAnswerCorrect(q, answers[q.id] ?? []) === false && q.topic) {
        map.set(q.topic, (map.get(q.topic) ?? 0) + 1)
      }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  }, [questions, answers])

  const timeLow = secondsLeft <= 5 * 60
  const timeCritical = secondsLeft <= 60

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="Prüfungssimulation"
        description="Simuliere eine echte WISO-IHK-Prüfung mit Zeitlimit, Navigation zwischen den Aufgaben und Auswertung erst nach Abgabe."
        accent="amber"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'Wirtschaft & Gesellschaft', to: '/pruefungsvorbereitung/wirtschaft-gesellschaft' },
              { label: 'WISO IHK Prüfungen', to: '/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk' },
              { label: 'Prüfungssimulation' },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {phase === 'setup' && (
          <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                <Timer className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink-900 dark:text-white">Simulation konfigurieren</h2>
                <p className="text-sm text-ink-500 dark:text-ink-400">Nur Aufgaben mit amtlicher Musterlösung werden bewertet.</p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setSource('mixed')}
                className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                  source === 'mixed'
                    ? 'border-brand-400 bg-brand-50 dark:border-brand-500/50 dark:bg-brand-500/10'
                    : 'border-ink-200 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:hover:border-ink-600 dark:hover:bg-ink-800'
                }`}
              >
                <Shuffle className="mt-0.5 h-4 w-4 shrink-0 text-ink-500 dark:text-ink-400" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-ink-900 dark:text-white">
                    Gemischte Prüfung ({MIXED_QUESTION_COUNT} Fragen, zufällig aus allen Jahrgängen)
                  </span>
                  <span className="block text-xs text-ink-500 dark:text-ink-400">{MIXED_DURATION_MINUTES} Minuten Prüfungszeit</span>
                </span>
              </button>

              {exams.map((exam) => (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => setSource(exam.id)}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                    source === exam.id
                      ? 'border-brand-400 bg-brand-50 dark:border-brand-500/50 dark:bg-brand-500/10'
                      : 'border-ink-200 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:hover:border-ink-600 dark:hover:bg-ink-800'
                  }`}
                >
                  <Timer className="mt-0.5 h-4 w-4 shrink-0 text-ink-500 dark:text-ink-400" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-medium text-ink-900 dark:text-white">
                      Original-Prüfung: {exam.label}
                    </span>
                    <span className="block text-xs text-ink-500 dark:text-ink-400">
                      {exam.taskCount} Aufgaben{exam.durationMinutes ? ` · ${exam.durationMinutes} Minuten` : ''}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <Button className="mt-8" onClick={start} icon={<Timer />}>
              Simulation starten
            </Button>
          </div>
        )}

        {phase === 'running' && question && (
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
              <div>
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  Aufgabe {current + 1} / {questions.length}
                </span>
                <p className="text-xs text-ink-400 dark:text-ink-500">{answeredCount} beantwortet</p>
              </div>
              <div className="text-right">
                <div
                  className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-sm font-semibold ${
                    timeCritical
                      ? 'animate-pulse bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300'
                      : timeLow
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300'
                        : 'bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200'
                  }`}
                >
                  <Timer className="h-4 w-4" aria-hidden="true" />
                  {formatCountdown(secondsLeft)}
                </div>
                <p className="mt-1 text-[0.65rem] text-ink-400 dark:text-ink-500">von {durationMinutes} Min.</p>
              </div>
            </div>

            <div className="mb-5 flex flex-wrap gap-1.5">
              {questions.map((q, i) => {
                const isAnswered = (answers[q.id] ?? []).length > 0
                const isCurrent = i === current
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-current={isCurrent}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-medium transition-colors ${
                      isCurrent
                        ? 'bg-brand-600 text-white dark:bg-brand-500'
                        : isAnswered
                          ? 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300'
                          : 'bg-ink-100 text-ink-500 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-400 dark:hover:bg-ink-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>

            <WisoQuestionView
              question={question}
              examLabel={examLabel(question.examId)}
              value={answers[question.id] ?? []}
              onChange={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
              revealed={false}
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0} icon={<ChevronLeft />}>
                  Zurück
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                  disabled={current === questions.length - 1}
                  icon={<ChevronRight />}
                  iconPosition="right"
                >
                  Weiter
                </Button>
              </div>

              {!confirmingSubmit ? (
                <Button variant="primary" onClick={() => setConfirmingSubmit(true)} icon={<Send />}>
                  Abgeben
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-ink-500 dark:text-ink-400">Wirklich abgeben?</span>
                  <Button variant="ghost" size="sm" onClick={() => setConfirmingSubmit(false)}>
                    Abbrechen
                  </Button>
                  <Button size="sm" onClick={submit} icon={<Send />}>
                    Ja, abgeben
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {phase === 'review' && (
          <div>
            <div className="rounded-2xl border border-ink-200 bg-white p-8 text-center dark:border-ink-800 dark:bg-ink-900">
              <CheckCircle2 className="mx-auto h-8 w-8 text-brand-500 dark:text-brand-400" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">Prüfung abgeschlossen</h3>
              <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                {correctCount} von {questions.length} richtig ({scorePercent}%)
              </p>
              <p className="mt-1 text-xs text-ink-400 dark:text-ink-500">
                {questions.length - correctCount} falsch beantwortet · {questions.length - answeredCount} nicht beantwortet
              </p>

              {mistakesByTopic.length > 0 && (
                <div className="mx-auto mt-6 max-w-sm text-left">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    Themen mit Fehlern
                  </p>
                  <ul className="space-y-1.5">
                    {mistakesByTopic.map(([topic, n]) => (
                      <li key={topic} className="flex items-center justify-between text-sm text-ink-600 dark:text-ink-300">
                        <span>{topic}</span>
                        <span className="font-mono text-ink-400 dark:text-ink-500">{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button onClick={restart} variant="secondary" className="mt-6" icon={<RotateCcw />}>
                Neue Simulation starten
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Aufgabenübersicht
              </h4>
              {questions.map((q) => {
                const isCorrect = isWisoAnswerCorrect(q, answers[q.id] ?? [])
                return (
                  <div key={q.id} className="relative">
                    <div className="absolute -left-2 top-5 z-10">
                      {isCorrect === true && <CheckCircle2 className="h-5 w-5 text-teal-500" aria-hidden="true" />}
                      {isCorrect === false && <XCircle className="h-5 w-5 text-rose-500" aria-hidden="true" />}
                    </div>
                    <WisoQuestionView
                      question={q}
                      examLabel={examLabel(q.examId)}
                      value={answers[q.id] ?? []}
                      onChange={() => {}}
                      revealed
                      disabled
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
