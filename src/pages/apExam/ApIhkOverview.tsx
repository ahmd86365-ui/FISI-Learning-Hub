import { Info } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { ApExamMetaCard } from '../../components/apExam/ApExamMetaCard'
import { getSubjectBySlug } from '../../data/subjects'
import { getAllApExams, getApExamQuestions } from '../../data/apExam'
import type { ApArea } from '../../types/apExam'

const areaGroups: { area: ApArea; title: string; description: string }[] = [
  {
    area: 'AP1',
    title: 'AP1',
    description: 'Gestreckte Abschlussprüfung, Teil 1 – „Einrichten eines IT-gestützten Arbeitsplatzes".',
  },
  {
    area: 'AP2_SI_T1',
    title: 'AP2 – Teil 1',
    description: 'Abschlussprüfung Teil 2, 1. Aufgabensatz – „Konzeption und Administration von IT-Systemen".',
  },
  {
    area: 'AP2_SI_T2',
    title: 'AP2 – Teil 2',
    description: 'Abschlussprüfung Teil 2, 2. Aufgabensatz – „Analyse und Entwicklung von Netzwerken".',
  },
]

export default function ApIhkOverview() {
  const subject = getSubjectBySlug('pruefung')!
  const totalQuestions = getAllApExams().reduce((sum, e) => sum + getApExamQuestions(e.id).length, 0)
  const totalExams = getAllApExams().length

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="IT – AP1 / AP2"
        description="Echte, unveränderte IHK-Abschlussprüfungen für Fachinformatiker für Systemintegration (AP1 sowie AP2 Teil 1 und Teil 2). Die Aufgaben sind frei formulierte Fachfragen, keine Multiple-Choice-Aufgaben – bewerte deine Antwort daher selbst anhand der angezeigten Musterlösung, genau wie beim Üben mit einem echten Prüfungs-Workbook."
        accent="brand"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'IT – AP1 / AP2' },
            ]}
          />
        }
      />

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-500/30 dark:bg-brand-500/10">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
            Insgesamt {totalExams} Prüfungstermine mit {totalQuestions} Teilaufgaben, unverändert aus echten
            IHK-Prüfungen transkribiert. Manche jüngeren Termine haben noch keine amtliche Musterlösung – diese sind
            als „Inoffizielle Lösung" (aus einem handschriftlich kommentierten Exemplar) oder „Keine Lösung"
            gekennzeichnet.
          </p>
        </div>

        {areaGroups.map(({ area, title, description }) => {
          const exams = getAllApExams(area)
          if (exams.length === 0) return null

          return (
            <div key={area} className="mb-12 last:mb-0">
              <SectionHeader title={title} description={description} />
              <div className="-mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {exams.map((exam, i) => {
                  const questions = getApExamQuestions(exam.id)
                  return (
                    <ApExamMetaCard
                      key={exam.id}
                      exam={exam}
                      questionCount={questions.length}
                      confirmedCount={questions.filter((q) => q.answerStatus === 'confirmed').length}
                      index={i}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
