import { ArrowRight, TerminalSquare } from 'lucide-react'
import { SearchBar } from '../components/SearchBar'
import { SubjectCard } from '../components/SubjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { ButtonLink } from '../components/Button'
import { HeroPattern } from '../components/HeroPattern'
import { StudentDashboard } from '../components/dashboard/StudentDashboard'
import { useAuth } from '../contexts/AuthContext'
import { subjects } from '../data/subjects'

const itSubject = subjects.find((s) => s.slug === 'it')!
const otherSubjects = subjects.filter((s) => s.slug !== 'it')

export default function Home() {
  const { session } = useAuth()
  const firstName = session?.user.user_metadata.first_name
  const greeting = typeof firstName === 'string' && firstName.trim() ? `Willkommen zurück, ${firstName.trim()}.` : 'Willkommen zurück.'

  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950">
        <HeroPattern />
        <div
          className="absolute left-1/2 top-[-10rem] h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-500/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fadeIn mb-5 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/80 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-ink-500 shadow-soft backdrop-blur dark:border-ink-700 dark:bg-ink-900/80 dark:text-ink-400">
              <TerminalSquare className="h-3.5 w-3.5 text-brand-500 dark:text-brand-400" aria-hidden="true" />
              Fachinformatiker für Systemintegration
            </p>

            <h1
              className="animate-fadeIn text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 opacity-0 [animation-delay:80ms] [animation-fill-mode:forwards] dark:text-white sm:text-5xl lg:text-6xl"
            >
              {greeting}
              <br />
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent dark:from-brand-400 dark:to-brand-200">
                Üben. Bestehen.
              </span>
            </h1>

            <p className="animate-fadeIn mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-500 opacity-0 [animation-delay:160ms] [animation-fill-mode:forwards] dark:text-ink-400">
              Die zentrale Lernplattform für deine Ausbildung zum Fachinformatiker für
              Systemintegration – klar strukturiert und auf das Wesentliche fokussiert.
            </p>

            <div className="animate-fadeIn mx-auto mt-10 max-w-xl opacity-0 [animation-delay:240ms] [animation-fill-mode:forwards]">
              <SearchBar size="lg" />
            </div>

            <div className="animate-fadeIn mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
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

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
