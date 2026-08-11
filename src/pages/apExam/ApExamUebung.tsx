import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ClipboardCheck, FileQuestion, Gauge } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { EmptyState } from '../../components/EmptyState'
import { ButtonLink, Button } from '../../components/Button'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { ApQuestionView } from '../../components/apExam/ApQuestionView'
import { getSubjectBySlug } from '../../data/subjects'
import { getApExamMeta, getApExamQuestions } from '../../data/apExam'
import { apPointsEarned, apTotalScorablePoints, hasApSolution, type ApSelfAssessment } from '../../lib/apExamHelpers'
import type { ApArea } from '../../types/apExam'

const areaLabel: Record<ApArea, string> = {
  AP1: 'AP1',
  AP2_SI_T1: 'AP2 – Teil 1',
  AP2_SI_T2: 'AP2 – Teil 2',
}

export default function ApExamUebung() {
  const { examId } = useParams<{ examId: string }>()
  const subject = getSubjectBySlug('pruefung')!
  const exam = examId ? getApExamMeta(examId) : undefined
  const questions = useMemo(() => (examId ? getApExamQuestions(examId) : []), [examId])

  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set())
  const [assessments, setAssessments] = useState<Record<string, ApSelfAssessment>>({})

  const questionsByNumber = useMemo(() => {
    const map = new Map<number, typeof questions>()
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

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const revealableIds = questions.filter(hasApSolution).map((q) => q.id)
  const allRevealed = revealableIds.length > 0 && revealableIds.every((id) => revealedIds.has(id))
  const toggleAll = () => setRevealedIds(allRevealed ? new Set() : new Set(revealableIds))

  const scorableQuestions = questions.filter(hasApSolution)
  const totalPoints = apTotalScorablePoints(questions)
  const earnedPoints = questions.reduce((sum, q) => sum + apPointsEarned(q, assessments[q.id]), 0)
  const assessedCount = scorableQuestions.filter((q) => assessments[q.id]).length
  const scorePercent = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0

  return (
    <div>
      <PageHeader
        eyebrow={areaLabel[exam.area]}
        title="Übungsmodus"
        description={`${exam.label} – ohne Zeitlimit, alle Teilaufgaben untereinander. Schreibe deine Antwort, decke die Musterlösung auf und bewerte dich selbst.`}
        accent="brand"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'IT – AP1 / AP2', to: '/pruefungsvorbereitung/it-ap' },
              { label: exam.label, to: `/pruefungsvorbereitung/it-ap/${exam.id}` },
              { label: 'Übungsmodus' },
            ]}
          />
        }
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {questions.length === 0 ? (
          <EmptyState
            icon={FileQuestion}
            title="Keine Aufgaben vorhanden"
            description="Für diese Prüfung sind noch keine Aufgaben hinterlegt."
          />
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
              <div className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-300">
                <Gauge className="h-4 w-4 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                {totalPoints > 0 ? (
                  <span>
                    <span className="font-semibold text-ink-900 dark:text-white">
                      {earnedPoints} / {totalPoints} Punkte
                    </span>{' '}
                    {assessedCount > 0 && `(${scorePercent}%)`} · {assessedCount}/{scorableQuestions.length} bewertet
                  </span>
                ) : (
                  <span>Für diese Prüfung liegt keine Lösung zur Selbstbewertung vor.</span>
                )}
              </div>
              <Button variant="secondary" size="sm" onClick={toggleAll} disabled={revealableIds.length === 0}>
                {allRevealed ? 'Alle Musterlösungen ausblenden' : 'Alle Musterlösungen anzeigen'}
              </Button>
            </div>

            {questionsByNumber.map(([number, group]) => (
              <div key={number} className="mb-10 last:mb-0">
                <h2 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                  Aufgabe {number}
                </h2>
                <div className="space-y-4">
                  {group.map((question) => (
                    <ApQuestionView
                      key={question.id}
                      question={question}
                      answerValue={answers[question.id] ?? ''}
                      onAnswerChange={(v) => setAnswers((prev) => ({ ...prev, [question.id]: v }))}
                      revealed={revealedIds.has(question.id)}
                      onToggleReveal={() => toggleReveal(question.id)}
                      assessment={assessments[question.id]}
                      onAssessmentChange={(a) => setAssessments((prev) => ({ ...prev, [question.id]: a }))}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-10 flex items-center gap-2 text-xs text-ink-400 dark:text-ink-500">
              <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Deine Antworten und Bewertungen werden nur für diese Sitzung gespeichert.
            </div>
          </>
        )}
      </section>
    </div>
  )
}
