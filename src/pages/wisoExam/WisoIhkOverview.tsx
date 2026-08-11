import { Dumbbell, Info, Timer } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { ButtonLink } from '../../components/Button'
import { WisoExamMetaCard } from '../../components/wisoExam/WisoExamMetaCard'
import { getSubjectBySlug } from '../../data/subjects'
import { getAllWisoExams, getWisoExamQuestions } from '../../data/wisoExam'

export default function WisoIhkOverview() {
  const subject = getSubjectBySlug('pruefung')!
  const exams = getAllWisoExams()

  const years = Array.from(new Set(exams.map((e) => e.year))).sort((a, b) => a - b)
  const totalQuestions = exams.reduce((sum, e) => sum + getWisoExamQuestions(e.id).length, 0)
  const totalConfirmed = exams.reduce(
    (sum, e) => sum + getWisoExamQuestions(e.id).filter((q) => q.answerStatus === 'confirmed').length,
    0,
  )

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="WISO IHK Prüfungen"
        description="Echte, unveränderte IHK-Abschlussprüfungen im Fach Wirtschafts- und Sozialkunde (Quelle: ZPA Nord-West) – zum gezielten Üben oder als realistische Prüfungssimulation mit Zeitlimit."
        accent="amber"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'Wirtschaft & Gesellschaft', to: '/pruefungsvorbereitung/wirtschaft-gesellschaft' },
              { label: 'WISO IHK Prüfungen' },
            ]}
          />
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/uebung" icon={<Dumbbell />}>
            Übungsmodus starten
          </ButtonLink>
          <ButtonLink
            to="/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/simulation"
            variant="secondary"
            icon={<Timer />}
          >
            Prüfungssimulation starten
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-500/30 dark:bg-brand-500/10">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            Alle {totalQuestions} Aufgaben stammen unverändert aus echten IHK-Prüfungen und werden getrennt von den
            normalen WISO-Lektionen geführt. {totalConfirmed} davon haben eine amtliche Musterlösung; die restlichen{' '}
            {totalQuestions - totalConfirmed} stammen aus einer Prüfung, für die noch kein Lösungsblatt
            veröffentlicht wurde – sie sind im Übungsmodus deutlich als „ohne amtliche Lösung" gekennzeichnet und
            fließen in keine Auswertung ein.
          </p>
        </div>

        {years.map((year) => (
          <div key={year} className="mb-10 last:mb-0">
            <SectionHeader title={String(year)} />
            <div className="-mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {exams
                .filter((e) => e.year === year)
                .map((exam, i) => (
                  <WisoExamMetaCard
                    key={exam.id}
                    exam={exam}
                    questionCount={getWisoExamQuestions(exam.id).length}
                    confirmedCount={getWisoExamQuestions(exam.id).filter((q) => q.answerStatus === 'confirmed').length}
                    index={i}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
