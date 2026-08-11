import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CheckCircle2, ChevronLeft, ChevronRight, FileQuestion, RotateCcw, Send, Timer } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { EmptyState } from '../../components/EmptyState'
import { ButtonLink, Button } from '../../components/Button'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { ApQuestionView } from '../../components/apExam/ApQuestionView'
import { getSubjectBySlug } from '../../data/subjects'
import { getApExamMeta, getApExamQuestions } from '../../data/apExam'
import { formatCountdown } from '../../lib/wisoExamHelpers'
import {
  apPointsEarned,
  apTotalScorablePoints,
  hasApSolution,
  sortApQuestionsByOriginalOrder,
  type ApSelfAssessment,
} from '../../lib/apExamHelpers'
import type { ApArea, ApExamQuestion } from '../../types/apExam'

const areaLabel: Record<ApArea, string> = {
  AP1: 'AP1',
  AP2_SI_T1: 'AP2 – Teil 1',
  AP2_SI_T2: 'AP2 – Teil 2',
}

const DEFAULT_DURATION_MINUTES = 90

export default function ApExamSimulation() {
  const { examId } = useParams<{ examId: string }>()
  const subject = getSubjectBySlug('pruefung')!
  const exam = examId ? getApExamMeta(examId) : undefined

  const [phase, setPhase] = useState<'running' | 'review'>('running')
  const [questions, setQuestions] = useState<ApExamQuestion[]>([])
  const [durationMinutes, setDurationMinutes] = useState(DEFAULT_DURATION_MINUTES)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [assessments, setAssessments] = useState<Record<string, ApSelfAssessment>>({})
  const [confirmingSubmit, setConfirmingSubmit] = useState(false)
  const submittedRef = useRef(false)

  const startSimulation = useCallback(() => {
    if (!examId) return
    const meta = getApExamMeta(examId)
    const qs = sortApQuestionsByOriginalOrder(getApExamQuestions(examId))
    const minutes = meta?.durationMinutes ?? DEFAULT_DURATION_MINUTES

    submittedRef.current = false
    setQuestions(qs)
    setDurationMinutes(minutes)
    setSecondsLeft(minutes * 60)
    setCurrent(0)
    setAnswers({})
    setAssessments({})
    setConfirmingSubmit(false)
    setPhase('running')
  }, [examId])

  useEffect(() => {
    startSimulation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId])

  const submit = useCallback(() => {
    if (submittedRef.current) return
    submittedRef.current = true
    setPhase('review')
  }, [])

  useEffect(() => {
    if (phase !== 'running' || questions.length === 0) return
    if (secondsLeft <= 0) {
      submit()
      return
    }
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearInterval(timer)
  }, [phase, secondsLeft, submit, questions.length])

  const questionsByNumber = useMemo(() => {
    const map = new Map<number, ApExamQuestion[]>()
    for (const q of questions) {
      const list = map.get(q.questionNumber) ?? []
      list.push(q)
      map.set(q.questionNumber, list)
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0])
  }, [questions])

  if (!exam) {
    return (
      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <EmptyState
          icon={FileQuestion}
          title="Prüfung nicht gefunden"
          description="Diese Prüfung existiert nicht oder ist noch nicht verfügbar."
          className="max-w-md"
        >
          <ButtonLink to="/pruefungsvorbereitung/it-ap" size="sm">
            Zurück zur Übersicht
          </ButtonLink>
        </EmptyState>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <EmptyState
          icon={FileQuestion}
          title="Keine Aufgaben vorhanden"
          description="Für diese Prüfung sind noch keine Aufgaben hinterlegt."
        />
      </div>
    )
  }

  const question = questions[current]
  const answeredCount = questions.filter((q) => (answers[q.id] ?? '').trim().length > 0).length

  const scorableQuestions = questions.filter(hasApSolution)
  const totalPoints = apTotalScorablePoints(questions)
  const earnedPoints = questions.reduce((sum, q) => sum + apPointsEarned(q, assessments[q.id]), 0)
  const assessedCount = scorableQuestions.filter((q) => assessments[q.id]).length
  const scorePercent = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0
  const unclearCount = questions.length - scorableQuestions.length

  const timeLow = secondsLeft <= 5 * 60
  const timeCritical = secondsLeft <= 60

  const breadcrumb = (
    <Breadcrumb
      items={[
        { label: 'Home', to: '/' },
        { label: subject.name, to: '/pruefungsvorbereitung' },
        { label: 'IT – AP1 / AP2', to: '/pruefungsvorbereitung/it-ap' },
        { label: exam.label, to: `/pruefungsvorbereitung/it-ap/${exam.id}` },
        { label: 'Prüfungssimulation' },
      ]}
    />
  )

  return (
    <div>
      <PageHeader
        eyebrow={areaLabel[exam.area]}
        title="Prüfungssimulation"
        description={`${exam.label} – Original-Zeitlimit und -Reihenfolge. Musterlösungen bleiben bis zur Abgabe verborgen.`}
        accent="brand"
        breadcrumb={breadcrumb}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
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
                const isAnswered = (answers[q.id] ?? '').trim().length > 0
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

            <ApQuestionView
              question={question}
              answerValue={answers[question.id] ?? ''}
              onAnswerChange={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
              revealed={false}
            />

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  icon={<ChevronLeft />}
                >
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
              <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">Prüfung abgegeben</h3>
              <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
                {answeredCount} von {questions.length} Teilaufgaben beantwortet
                {unclearCount > 0 && ` · ${unclearCount} ohne Lösung (nicht bewertbar)`}
              </p>

              {totalPoints > 0 ? (
                <div className="mx-auto mt-5 max-w-xs rounded-xl bg-ink-50 p-4 dark:bg-ink-800/60">
                  <p className="text-2xl font-bold text-ink-900 dark:text-white">
                    {earnedPoints} / {totalPoints} Punkte
                  </p>
                  <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">
                    {assessedCount > 0 ? `${scorePercent}%` : 'noch nicht bewertet'} · {assessedCount}/
                    {scorableQuestions.length} Aufgaben selbst eingeschätzt
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-400 dark:text-ink-500">
                    Decke unten jede Aufgabe auf, vergleiche mit deiner Antwort und schätze dich mit „Richtig",
                    „Teilweise" oder „Falsch" ein – die Punktzahl aktualisiert sich live.
                  </p>
                </div>
              ) : (
                <p className="mt-4 text-sm text-ink-500 dark:text-ink-400">
                  Für diese Prüfung liegt keine Lösung zur Selbstbewertung vor.
                </p>
              )}

              <Button onClick={startSimulation} variant="secondary" className="mt-6" icon={<RotateCcw />}>
                Erneut versuchen
              </Button>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Aufgabenübersicht
              </h4>
              {questionsByNumber.map(([number, group]) => (
                <div key={number} className="mb-8 last:mb-0">
                  <h5 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                    Aufgabe {number}
                  </h5>
                  <div className="space-y-4">
                    {group.map((q) => (
                      <ApQuestionView
                        key={q.id}
                        question={q}
                        answerValue={answers[q.id] ?? ''}
                        revealed
                        assessment={assessments[q.id]}
                        onAssessmentChange={(a) => setAssessments((prev) => ({ ...prev, [q.id]: a }))}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
