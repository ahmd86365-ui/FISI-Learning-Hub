import { useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { CheckCircle2, ClipboardCheck, Dumbbell, RotateCcw } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { Button } from '../../components/Button'
import { WisoQuestionView } from '../../components/wisoExam/WisoQuestionView'
import { getSubjectBySlug } from '../../data/subjects'
import { getAllWisoExams, getAllWisoQuestions, getWisoExamMeta, getWisoTopics } from '../../data/wisoExam'
import { isWisoAnswerCorrect, pickRandomQuestions } from '../../lib/wisoExamHelpers'
import type { WisoExamQuestion } from '../../types/wisoExam'
import { useQuestionPerformance } from '../../contexts/QuestionPerformanceContext'
import { wisoExamAttempt } from '../../lib/questionTracking'

const COUNT_OPTIONS = [10, 20, 30] as const

export default function WisoIhkUebung() {
  const subject = getSubjectBySlug('pruefung')!
  const location = useLocation()
  const { recordAttempt } = useQuestionPerformance()
  const [searchParams] = useSearchParams()
  const preselectedExamId = searchParams.get('exam')

  const exams = getAllWisoExams()
  const topics = getWisoTopics()
  const allQuestions = getAllWisoQuestions()
  const requestedQuestion = allQuestions.find((question) => question.id === searchParams.get('question'))

  const [examFilter, setExamFilter] = useState(preselectedExamId ?? 'all')
  const [topicFilter, setTopicFilter] = useState('all')
  const [count, setCount] = useState<number>(20)

  const [phase, setPhase] = useState<'setup' | 'running' | 'done'>(requestedQuestion ? 'running' : 'setup')
  const [questions, setQuestions] = useState<WisoExamQuestion[]>(requestedQuestion ? [requestedQuestion] : [])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const [revealed, setRevealed] = useState(false)

  const pool = useMemo(() => {
    let p = allQuestions
    if (examFilter !== 'all') p = p.filter((q) => q.examId === examFilter)
    if (topicFilter !== 'all') p = p.filter((q) => q.topic === topicFilter)
    return p
  }, [allQuestions, examFilter, topicFilter])

  const examLabel = (examId: string) => getWisoExamMeta(examId)?.label ?? examId

  const start = () => {
    setQuestions(pickRandomQuestions(pool, Math.min(count, pool.length)))
    setCurrent(0)
    setAnswers({})
    setRevealed(false)
    setPhase('running')
  }

  const restart = () => setPhase('setup')

  const question = questions[current]
  const value = question ? (answers[question.id] ?? []) : []
  const canCheck = value.length > 0 && value.some((v) => v.trim().length > 0)
  const checkAnswer = () => {
    setRevealed(true)
    const correct = isWisoAnswerCorrect(question, value)
    if (correct !== null) {
      void recordAttempt(wisoExamAttempt(question, examLabel(question.examId), `${location.pathname}${location.search}`, correct))
    }
  }

  const goNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setRevealed(false)
    } else {
      setPhase('done')
    }
  }

  const scoredQuestions = questions.filter((q) => q.answerStatus === 'confirmed')
  const correctCount = scoredQuestions.filter((q) => isWisoAnswerCorrect(q, answers[q.id] ?? []) === true).length
  const unclearCount = questions.length - scoredQuestions.length

  const mistakesByTopic = useMemo(() => {
    const map = new Map<string, number>()
    for (const q of scoredQuestions) {
      if (isWisoAnswerCorrect(q, answers[q.id] ?? []) === false && q.topic) {
        map.set(q.topic, (map.get(q.topic) ?? 0) + 1)
      }
    }
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1])
  }, [scoredQuestions, answers])

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="Übungsmodus"
        description="Übe WISO-IHK-Prüfungsfragen nach Thema oder gemischt – mit sofortigem Feedback nach jeder Frage."
        accent="amber"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'Wirtschaft & Gesellschaft', to: '/pruefungsvorbereitung/wirtschaft-gesellschaft' },
              { label: 'WISO IHK Prüfungen', to: '/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk' },
              { label: 'Übungsmodus' },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {phase === 'setup' && (
          <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                <Dumbbell className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink-900 dark:text-white">Übung konfigurieren</h2>
                <p className="text-sm text-ink-500 dark:text-ink-400">{pool.length} Aufgaben verfügbar</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">Prüfung</span>
                <select
                  value={examFilter}
                  onChange={(e) => setExamFilter(e.target.value)}
                  className="h-10 w-full rounded-lg border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
                >
                  <option value="all">Alle Prüfungen (gemischt)</option>
                  {exams.map((exam) => (
                    <option key={exam.id} value={exam.id}>
                      {exam.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">Thema</span>
                <select
                  value={topicFilter}
                  onChange={(e) => setTopicFilter(e.target.value)}
                  className="h-10 w-full rounded-lg border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
                >
                  <option value="all">Alle Themen</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-200">Anzahl der Fragen</span>
                <div className="flex flex-wrap gap-2">
                  {COUNT_OPTIONS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCount(c)}
                      className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                        count === c
                          ? 'bg-brand-600 text-white dark:bg-brand-500'
                          : 'bg-ink-100 text-ink-700 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setCount(pool.length)}
                    className={`h-9 rounded-full px-4 text-sm font-medium transition-colors ${
                      count >= pool.length && pool.length > 0
                        ? 'bg-brand-600 text-white dark:bg-brand-500'
                        : 'bg-ink-100 text-ink-700 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-200 dark:hover:bg-ink-700'
                    }`}
                  >
                    Alle ({pool.length})
                  </button>
                </div>
              </label>
            </div>

            <Button className="mt-8" onClick={start} disabled={pool.length === 0} icon={<Dumbbell />}>
              Übung starten
            </Button>
          </div>
        )}

        {phase === 'running' && question && (
          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-400 dark:text-ink-500">
                Frage {current + 1} / {questions.length}
              </span>
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                <div
                  className="h-full rounded-full bg-brand-500 transition-all dark:bg-brand-400"
                  style={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <WisoQuestionView
              question={question}
              examLabel={examLabel(question.examId)}
              value={value}
              onChange={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
              revealed={revealed}
              disabled={revealed}
            />

            <div className="mt-5 flex justify-end gap-3">
              {!revealed ? (
                <Button onClick={checkAnswer} disabled={!canCheck}>
                  Antwort prüfen
                </Button>
              ) : (
                <Button onClick={goNext}>{current < questions.length - 1 ? 'Weiter' : 'Ergebnis anzeigen'}</Button>
              )}
            </div>
          </div>
        )}

        {phase === 'done' && (
          <div className="rounded-2xl border border-ink-200 bg-white p-8 text-center dark:border-ink-800 dark:bg-ink-900">
            <CheckCircle2 className="mx-auto h-8 w-8 text-brand-500 dark:text-brand-400" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">Übung abgeschlossen</h3>
            <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-400">
              {correctCount} von {scoredQuestions.length} bewerteten Fragen richtig (
              {scoredQuestions.length > 0 ? Math.round((correctCount / scoredQuestions.length) * 100) : 0}%)
              {unclearCount > 0 && ` · ${unclearCount} ohne amtliche Lösung (nicht bewertet)`}
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
              Neue Übung starten
            </Button>
          </div>
        )}

        {phase === 'setup' && pool.length === 0 && (
          <p className="mt-4 flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            Für diese Auswahl sind keine Fragen verfügbar.
          </p>
        )}
      </div>
    </div>
  )
}
