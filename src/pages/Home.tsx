import { ArrowRight, TerminalSquare } from 'lucide-react'
import { SearchBar } from '../components/SearchBar'
import { SubjectCard } from '../components/SubjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { ButtonLink } from '../components/Button'
import { StudentDashboard } from '../components/dashboard/StudentDashboard'
import { useAuth } from '../contexts/AuthContext'
import { subjects } from '../data/subjects'

const itSubject = subjects.find((s) => s.slug === 'it')!
const otherSubjects = subjects.filter((s) => s.slug !== 'it')

export default function Home() {
  const { session, isGuest } = useAuth()
  const firstName = session?.user.user_metadata.first_name
  const greeting = isGuest ? 'Willkommen, Gast.' : (typeof firstName === 'string' && firstName.trim() ? `Willkommen zurück, ${firstName.trim()}.` : 'Willkommen zurück.')

  return (
    <div>
      <section className="border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
        <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-md bg-brand-50 px-2.5 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
              <TerminalSquare className="h-3.5 w-3.5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
              Fachinformatiker für Systemintegration
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-ink-950 dark:text-white sm:text-4xl">
              {greeting} <span className="text-brand-600 dark:text-brand-400">Üben. Bestehen.</span>
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
              Die zentrale Lernplattform für deine Ausbildung zum Fachinformatiker für
              Systemintegration – klar strukturiert und auf das Wesentliche fokussiert.
            </p>

            <div className="mt-6 max-w-xl">
              <SearchBar size="lg" />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ButtonLink to="/pruefungsvorbereitung" icon={<ArrowRight />} iconPosition="right">
                Prüfungsvorbereitung ansehen
              </ButtonLink>
              <ButtonLink to="/it" variant="secondary">
                Lernbereiche entdecken
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <StudentDashboard />

      <section className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <SectionHeader
          title="Deine Lernbereiche"
          description="Vier Bereiche, die dich durch deine Ausbildung begleiten."
        />
        <div className="flex flex-col gap-5">
          <SubjectCard subject={itSubject} index={0} featured />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherSubjects.map((subject, i) => (
              <SubjectCard key={subject.slug} subject={subject} index={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
