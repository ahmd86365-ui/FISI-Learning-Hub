import { useParams } from 'react-router-dom'
import { CheckCircle2, Dumbbell, FileQuestion, HelpCircle, Info, Timer } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { EmptyState } from '../../components/EmptyState'
import { ButtonLink } from '../../components/Button'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { getSubjectBySlug } from '../../data/subjects'
import { getApExamMeta, getApExamQuestions } from '../../data/apExam'
import type { ApArea } from '../../types/apExam'

const areaLabel: Record<ApArea, string> = {
  AP1: 'AP1',
  AP2_SI_T1: 'AP2 – Teil 1',
  AP2_SI_T2: 'AP2 – Teil 2',
}

const solutionInfo = {
  confirmed: {
    icon: CheckCircle2,
    cls: 'border-teal-200 bg-teal-50/60 text-teal-800 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-200',
    text: 'Alle Aufgaben haben eine amtliche Musterlösung.',
  },
  unofficial: {
    icon: HelpCircle,
    cls: 'border-amber-200 bg-amber-50/60 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200',
    text: 'Für diesen Termin liegt (noch) keine amtliche Musterlösung vor. Gezeigte Lösungen stammen aus einem handschriftlich kommentierten Exemplar und sind nicht verifiziert.',
  },
  unclear: {
    icon: HelpCircle,
    cls: 'border-ink-200 bg-ink-50 text-ink-600 dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-300',
    text: 'Für diesen Termin ist keine Lösung veröffentlicht. Die Aufgaben eignen sich nur zum freien Üben, nicht zur Selbstbewertung.',
  },
} as const

export default function ApExamDetail() {
  const { examId } = useParams<{ examId: string }>()
  const subject = getSubjectBySlug('pruefung')!
  const exam = examId ? getApExamMeta(examId) : undefined
  const questions = examId ? getApExamQuestions(examId) : []

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

  const info = solutionInfo[exam.solutionSource]
  const InfoIcon = info.icon

  return (
    <div>
      <PageHeader
        eyebrow={areaLabel[exam.area]}
        title={exam.label}
        description={
          exam.examTitle ? `${exam.examTitle}${exam.examDate ? ` · ${exam.examDate}` : ''}` : exam.examDate
        }
        accent="brand"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'IT – AP1 / AP2', to: '/pruefungsvorbereitung/it-ap' },
              { label: exam.label },
            ]}
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to={`/pruefungsvorbereitung/it-ap/${exam.id}/uebung`} icon={<Dumbbell />}>
            Übungsmodus starten
          </ButtonLink>
          <ButtonLink
            to={`/pruefungsvorbereitung/it-ap/${exam.id}/simulation`}
            variant="secondary"
            icon={<Timer />}
          >
            Prüfungssimulation starten
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-ink-200 bg-white p-4 text-center dark:border-ink-800 dark:bg-ink-900">
            <p className="text-2xl font-bold text-ink-900 dark:text-white">{exam.taskCount}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">Aufgaben</p>
          </div>
          <div className="rounded-xl border border-ink-200 bg-white p-4 text-center dark:border-ink-800 dark:bg-ink-900">
            <p className="text-2xl font-bold text-ink-900 dark:text-white">{questions.length}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">Teilaufgaben</p>
          </div>
          <div className="rounded-xl border border-ink-200 bg-white p-4 text-center dark:border-ink-800 dark:bg-ink-900">
            <p className="text-2xl font-bold text-ink-900 dark:text-white">{exam.durationMinutes ?? '–'}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">Minuten</p>
          </div>
          <div className="rounded-xl border border-ink-200 bg-white p-4 text-center dark:border-ink-800 dark:bg-ink-900">
            <p className="text-2xl font-bold text-ink-900 dark:text-white">{exam.totalPoints ?? '–'}</p>
            <p className="text-xs text-ink-500 dark:text-ink-400">Punkte</p>
          </div>
        </div>

        <div className={`mb-8 flex items-start gap-3 rounded-xl border p-4 ${info.cls}`}>
          <InfoIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-sm leading-relaxed">{info.text}</p>
        </div>

        <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-7">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink-900 dark:text-white">
            <Info className="h-4 w-4 text-brand-500 dark:text-brand-400" aria-hidden="true" />
            Bearbeitungshinweise
          </h2>
          <ul className="space-y-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            <li>
              <strong className="font-medium text-ink-900 dark:text-white">Übungsmodus:</strong> Alle Teilaufgaben
              sind untereinander sichtbar, ohne Zeitlimit. Du schreibst deine Antwort, blendest die Musterlösung pro
              Aufgabe ein und bewertest dich selbst.
            </li>
            <li>
              <strong className="font-medium text-ink-900 dark:text-white">Prüfungssimulation:</strong> Original-
              {exam.durationMinutes ? ` ${exam.durationMinutes}-minütiges` : ''} Zeitlimit, Aufgabe für Aufgabe in der
              originalen Reihenfolge, Musterlösungen bleiben bis zur Abgabe verborgen.
            </li>
            <li>
              Da AP1/AP2-Aufgaben frei formulierte Fachantworten sind (keine Multiple-Choice-Aufgaben), gibt es keine
              automatische Bewertung – vergleiche deine Antwort nach dem Aufdecken der Musterlösung selbst und
              schätze dich als „Richtig", „Teilweise" oder „Falsch" ein.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
