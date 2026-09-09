import { ButtonLink } from '../components/Button'
import { PageHeader } from '../components/PageHeader'
import { SectionHeader } from '../components/SectionHeader'
import { ExamPreparationCard } from '../components/ExamPreparationCard'
import { examSections } from '../data/examSections'
import { getSubjectBySlug } from '../data/subjects'

export default function Pruefungsvorbereitung() {
  const subject = getSubjectBySlug('pruefung')!

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="Prüfungsvorbereitung"
        description="Bereite dich gezielt auf deine Prüfungen vor."
        icon={subject.icon}
        accent={subject.accent}
      />

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8"><ButtonLink to="/exams">Prüfungsmodus & Verlauf öffnen</ButtonLink></div>
        <SectionHeader
          title="Prüfungsbereiche"
          description="Diese Bereiche werden nach und nach mit Übungen und Prüfungsmaterial gefüllt."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {examSections.map((section, i) => (
            <ExamPreparationCard key={section.id} section={section} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
