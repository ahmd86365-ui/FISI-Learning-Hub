import { useParams } from 'react-router-dom'
import { PackageSearch } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { SectionHeader } from '../components/SectionHeader'
import { EmptyState } from '../components/EmptyState'
import { ButtonLink } from '../components/Button'
import { Breadcrumb } from '../components/content/Breadcrumb'
import { LessonContent } from '../components/content/LessonContent'
import { ExercisesSection } from '../components/content/ExercisesSection'
import { ContentActions } from '../components/saved/ContentActions'
import { LessonCompletionButton } from '../components/progress/LessonCompletionButton'
import { TestRunner } from '../components/content/TestRunner'
import { getSubjectBySlug } from '../data/subjects'
import { getModuleBySlug } from '../data/modules'
import { getTopicBySlug } from '../lib/content'
import type { SubjectSlug } from '../types/content'

export default function LessonPage({ subjectSlug }: { subjectSlug: SubjectSlug }) {
  const { moduleSlug, topicSlug } = useParams<{ moduleSlug: string; topicSlug: string }>()
  const subject = getSubjectBySlug(subjectSlug)!
  const mod = moduleSlug ? getModuleBySlug(subjectSlug, moduleSlug) : undefined
  const topic = topicSlug ? getTopicBySlug(mod, topicSlug) : undefined

  if (!mod || !topic) {
    return (
      <div className="mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
        <EmptyState
          icon={PackageSearch}
          title="Lektion nicht gefunden"
          description="Diese Lektion existiert nicht oder ist noch nicht verfügbar."
          className="max-w-md"
        >
          <ButtonLink to={subject.path} size="sm">
            Zurück zu {subject.name}
          </ButtonLink>
        </EmptyState>
      </div>
    )
  }

  const hasNothing = topic.content.length === 0 && topic.exercises.length === 0 && !topic.test

  return (
    <div>
      <PageHeader
        eyebrow={mod.title}
        title={topic.title}
        description={topic.shortIntro}
        accent={subject.accent}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: 'Home', to: '/' },
              { label: subject.name, to: subject.path },
              { label: mod.title, to: `${subject.path}/${mod.slug}` },
              { label: topic.title },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          <ContentActions contentType="lesson" contentId={topic.id} title={topic.title} />
          <LessonCompletionButton lessonId={topic.id} />
        </div>
        {hasNothing ? (
          <EmptyState
            icon={PackageSearch}
            title="Für dieses Thema liegt noch kein Inhalt vor"
            description="Erklärung, Übungen und Test werden hinzugefügt, sobald die Materialien verfügbar sind."
          />
        ) : (
          <>
            <LessonContent blocks={topic.content} />

            {topic.exercises.length > 0 && (
              <section className="mt-14">
                <SectionHeader title="Übungen" description="Wende das Gelernte direkt an." />
                <ExercisesSection exercises={topic.exercises} />
              </section>
            )}

            {topic.test && (
              <section className="mt-14">
                <SectionHeader title="Test" description="Prüfe dein Verständnis zu diesem Thema." />
                <TestRunner test={topic.test} />
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}
