import { PackageOpen } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { EmptyState } from '../components/EmptyState'
import { ButtonLink } from '../components/Button'
import { SectionHeader } from '../components/SectionHeader'
import { ModuleCard } from '../components/content/ModuleCard'
import type { Module, Subject } from '../types/content'

interface SubjectPageTemplateProps {
  subject: Subject
  pageSubtitle?: string
  intro: string
  modules?: Module[]
}

/**
 * Shared shell for the four top-level learning areas. Renders the subject's
 * modules once they exist; falls back to the empty state until then — no
 * other change is needed when `modules` (src/data/modules.ts) is populated.
 */
export function SubjectPageTemplate({ subject, pageSubtitle, intro, modules = [] }: SubjectPageTemplateProps) {
  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title={subject.name}
        subtitle={pageSubtitle}
        description={intro}
        icon={subject.icon}
        accent={subject.accent}
      />

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {modules.length === 0 ? (
          <EmptyState
            icon={PackageOpen}
            title="Noch keine Inhalte verfügbar."
            description="Die Lerninhalte für diesen Bereich werden Schritt für Schritt hinzugefügt."
            hint="Bald verfügbar"
          >
            <ButtonLink to="/" variant="secondary" size="sm">
              Zur Startseite
            </ButtonLink>
          </EmptyState>
        ) : (
          <>
            <SectionHeader title="Module" description="Wähle ein Modul, um loszulegen." />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, i) => (
                <ModuleCard
                  key={mod.slug}
                  module={mod}
                  subjectPath={subject.path}
                  accent={subject.accent}
                  index={i}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
