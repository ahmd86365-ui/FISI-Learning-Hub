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
import { FlashcardLessonAction } from '../components/flashcards/FlashcardLessonAction'
import { practicalExercises } from '../lib/exerciseConsolidation'
import { LessonLabAction } from '../components/labs/LessonLabAction'
import { SmartBackButton } from '../components/navigation/SmartBackButton'
import { MobileQuickActions, type QuickAction } from '../components/navigation/MobileQuickActions'
import { BackToTop } from '../components/navigation/BackToTop'
import { getLessonLabs, labHref } from '../data/labs'
import { LinuxCheatSheetAction } from '../components/linux/LinuxCheatSheetAction'
import { linuxCheatSheetSectionForTag } from '../data/linux/cheatSheet'

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
  const appliedExercises = practicalExercises(topic.exercises)
  const lessonPath = `${subject.path}/${mod.slug}/${topic.slug}`
  const topicIndex = mod.topics.findIndex((entry) => entry.id === topic.id)
  const nextTopic = mod.topics[topicIndex + 1]
  const quickActions: QuickAction[] = [{ to: `/lernkarten/${encodeURIComponent(topic.id)}?source=${encodeURIComponent(lessonPath)}`, label: 'Lernkarten', kind: 'cards' }]
  const linuxCheatSheetTag = topic.slug === 'uebungsskript-und-ablauf-der-klausur' ? 14 : topic.order
  const linuxCheatSheet = mod.slug === 'linux' && topic.slug !== 'extra-linux-als-server' ? linuxCheatSheetSectionForTag(linuxCheatSheetTag) : undefined
  if (linuxCheatSheet) quickActions.push({ to: `/it/linux/spickzettel?tag=${linuxCheatSheetTag}&source=${encodeURIComponent(lessonPath)}`, label: 'Spickzettel', kind: 'reference' })
  const firstLab = getLessonLabs(topic.id)[0]
  if (firstLab) quickActions.push({ to: labHref(firstLab.lab, firstLab.mapping, lessonPath), label: 'Lab', kind: 'lab' })
  if (nextTopic) quickActions.push({ to: `${subject.path}/${mod.slug}/${nextTopic.slug}`, label: 'Weiter', kind: 'next' })

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
        <SmartBackButton fallback={`${subject.path}/${mod.slug}`} className="mb-4 -ml-3" />
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

            <FlashcardLessonAction lessonId={topic.id} lessonPath={lessonPath} />

            {linuxCheatSheet && <LinuxCheatSheetAction tag={linuxCheatSheetTag} lessonPath={lessonPath} />}

            {appliedExercises.length > 0 && (
              <section className="mt-14">
                <SectionHeader
                  title={appliedExercises.length === 1 ? 'Praxisübung' : 'Praktische Übungen'}
                  description="Wende das Gelernte in Aufgaben, Berechnungen und realistischen Szenarien an."
                />
                <ExercisesSection exercises={appliedExercises} />
              </section>
            )}

            <LessonLabAction lessonId={topic.id} lessonPath={lessonPath} />

            {topic.test && (
              <section className="mt-14">
                <SectionHeader title="Test" description="Prüfe dein Verständnis zu diesem Thema." />
                <TestRunner test={topic.test} />
              </section>
            )}
          </>
        )}
      </div>
      <MobileQuickActions actions={quickActions} fallback={`${subject.path}/${mod.slug}`} />
      <BackToTop aboveMobileBar />
    </div>
  )
}
