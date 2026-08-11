import { Link } from 'react-router-dom'
import { ArrowRight, FileCheck2 } from 'lucide-react'
import { PageHeader } from '../../components/PageHeader'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { getSubjectBySlug } from '../../data/subjects'
import { accentClasses } from '../../lib/accent'

export default function PruefungWirtschaftGesellschaft() {
  const subject = getSubjectBySlug('pruefung')!
  const accent = accentClasses.amber

  return (
    <div>
      <PageHeader
        eyebrow={subject.tagline}
        title="Wirtschaft & Gesellschaft"
        description="Prüfungsrelevante Themen aus Wirtschafts- und Sozialkunde – als eigener Prüfungsbereich, getrennt von den normalen WISO-Lektionen."
        accent="amber"
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: '/pruefungsvorbereitung' },
              { label: 'Wirtschaft & Gesellschaft' },
            ]}
          />
        }
      />

      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeader title="Prüfungsbereiche" description="Wähle einen Bereich, um zu starten." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk"
            className="group relative flex animate-fadeIn flex-col rounded-2xl border border-ink-200 bg-white p-6 opacity-0 shadow-card transition-all duration-300 ease-out [animation-fill-mode:forwards] hover:-translate-y-1 hover:shadow-card-hover dark:border-ink-800 dark:bg-ink-900 dark:shadow-card-dark dark:hover:shadow-card-hover-dark sm:p-7"
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${accent.iconBg} ${accent.iconText}`}
            >
              <FileCheck2 className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </div>

            <h3 className="text-lg font-semibold tracking-tight text-ink-900 dark:text-white">WISO IHK Prüfungen</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Echte IHK-Abschlussprüfungen (Wirtschafts- und Sozialkunde) zum Üben und für eine realistische
              Prüfungssimulation mit Zeitlimit.
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text}`}>
                Öffnen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>

            <div
              className={`pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 ${accent.ring} ${accent.glowShadow}`}
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
