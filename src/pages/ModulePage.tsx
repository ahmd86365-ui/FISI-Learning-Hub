import { useParams } from 'react-router-dom'
import { PackageSearch, ShieldCheck, TerminalSquare } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { SectionHeader } from '../components/SectionHeader'
import { EmptyState } from '../components/EmptyState'
import { ButtonLink } from '../components/Button'
import { Breadcrumb } from '../components/content/Breadcrumb'
import { TopicCard } from '../components/content/TopicCard'
import { TestRunner } from '../components/content/TestRunner'
import { getSubjectBySlug } from '../data/subjects'
import { getModuleBySlug } from '../data/modules'
import { sortedTopics } from '../lib/content'
import type { SubjectSlug } from '../types/content'

export default function ModulePage({ subjectSlug }: { subjectSlug: SubjectSlug }) {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()
  const subject = getSubjectBySlug(subjectSlug)!
  const mod = moduleSlug ? getModuleBySlug(subjectSlug, moduleSlug) : undefined

  if (!mod) {
    return (
      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <EmptyState
          icon={PackageSearch}
          title="Modul nicht gefunden"
          description="Dieses Modul existiert nicht oder ist noch nicht verfügbar."
          className="max-w-md"
        >
          <ButtonLink to={subject.path} size="sm">
            Zurück zu {subject.name}
          </ButtonLink>
        </EmptyState>
      </div>
    )
  }

  const topics = sortedTopics(mod)

  return (
    <div>
      <PageHeader
        eyebrow={subject.name}
        title={mod.title}
        description={mod.description}
        icon={mod.icon}
        accent={subject.accent}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: subject.path },
              { label: mod.title },
            ]}
          />
        }
      />

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {subjectSlug === 'it' && mod.slug === 'linux' && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-card dark:border-brand-500/20 dark:bg-ink-900">
            <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300"><TerminalSquare className="h-4 w-4" aria-hidden="true" /> Praktische Ergänzung</p>
                <h2 className="mt-2 text-2xl font-bold text-ink-950 dark:text-white">Linux Lab · Terminal Praxis</h2>
                <p className="mt-2 max-w-2xl leading-7 text-ink-600 dark:text-ink-300">Wende die Lektionen in einem sicheren simulierten Terminal an – mit Dateisystem, Aufgaben, Git-Grundlagen und gespeichertem Fortschritt.</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300"><ShieldCheck className="h-4 w-4" aria-hidden="true" /> Keine echten Systembefehle werden ausgeführt.</p>
              </div>
              <ButtonLink to="/it/linux/lab" size="lg" icon={<TerminalSquare />}>Linux Lab öffnen</ButtonLink>
            </div>
          </div>
        )}
        <SectionHeader title="Themen" description="Die Themen dieses Moduls im Überblick." />
        {topics.length === 0 ? (
          <EmptyState
            icon={PackageSearch}
            title="Noch keine Themen verfügbar"
            description="Die Inhalte für dieses Modul werden Schritt für Schritt hinzugefügt."
            hint="Bald verfügbar"
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topics.map((topic, i) => (
              <TopicCard
                key={topic.slug}
                topic={topic}
                to={`${subject.path}/${mod.slug}/${topic.slug}`}
                accent={subject.accent}
                index={i}
              />
            ))}
          </div>
        )}
      </section>

      {mod.test && (
        <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <SectionHeader title="Modultest" description="Prüfe dein Wissen über alle Themen dieses Moduls." />
          <TestRunner test={mod.test} />
        </section>
      )}
    </div>
  )
}
