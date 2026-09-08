import { useParams } from 'react-router-dom'
import { PageHeader } from '../../components/PageHeader'
import { SectionHeader } from '../../components/SectionHeader'
import { Breadcrumb } from '../../components/content/Breadcrumb'
import { TopicCard } from '../../components/content/TopicCard'
import { LessonContent } from '../../components/content/LessonContent'
import { ExercisesSection } from '../../components/content/ExercisesSection'
import { ButtonLink } from '../../components/Button'
import { itTechnicalChapters, itTechnicalModule as mod } from '../../data/itTechnical'
import { getSubjectBySlug } from '../../data/subjects'
import type { Topic } from '../../types/content'
import NotFound from '../NotFound'

const base = '/it/it-technical'
const subject = getSubjectBySlug('it')!

export default function ItTechnicalPage() {
  const { chapterSlug, lessonSlug } = useParams<{ chapterSlug: string; lessonSlug: string }>()
  const chapter = itTechnicalChapters.find((entry) => entry.slug === chapterSlug)
  const lesson = mod.topics.find((entry) => entry.slug === `${chapterSlug}/${lessonSlug}`)
  if ((chapterSlug && !chapter) || (lessonSlug && !lesson)) return <NotFound />

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: subject.name, to: subject.path },
    { label: mod.title, ...(chapter ? { to: base } : {}) },
    ...(chapter ? [{ label: chapter.title, ...(lesson ? { to: `${base}/${chapter.slug}` } : {}) }] : []),
    ...(lesson ? [{ label: lesson.title }] : []),
  ]
  const topics: Topic[] = chapter
    ? mod.topics.filter((entry) => entry.slug.startsWith(`${chapter.slug}/`))
    : itTechnicalChapters.map((entry, index) => ({
        id: `itt-chapter-${entry.slug}`, slug: entry.slug, moduleSlug: mod.slug,
        title: entry.title, shortIntro: entry.description, order: index + 1,
        content: [], exercises: [],
      }))
  const lessonIndex = lesson ? topics.findIndex((entry) => entry.id === lesson.id) : -1

  return (
    <div>
      <PageHeader
        eyebrow={lesson ? chapter!.title : chapter ? mod.title : subject.name}
        title={lesson?.title ?? chapter?.title ?? mod.title}
        description={lesson?.shortIntro ?? chapter?.description ?? mod.description}
        icon={lesson ? undefined : mod.icon}
        accent={subject.accent}
        breadcrumb={<Breadcrumb items={breadcrumbs} />}
      />
      {lesson ? (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <LessonContent blocks={lesson.content} />
          {lesson.exercises.length > 0 && (
            <section className="mt-14">
              <SectionHeader title="Übungen / Kontrollfragen" description="Formuliere deine Antwort und vergleiche sie anschließend mit der Quellenlösung oder dem Quellenhinweis." />
              <ExercisesSection key={lesson.id} exercises={lesson.exercises} />
            </section>
          )}
          <nav aria-label="Lektionsnavigation" className="mt-14 flex flex-wrap gap-3">
            {lessonIndex > 0 && <ButtonLink to={`${base}/${topics[lessonIndex - 1].slug}`} size="sm">Vorherige Lektion</ButtonLink>}
            <ButtonLink to={`${base}/${chapter!.slug}`} size="sm">Kapitelübersicht</ButtonLink>
            {lessonIndex < topics.length - 1 && <ButtonLink to={`${base}/${topics[lessonIndex + 1].slug}`} size="sm">Nächste Lektion</ButtonLink>}
          </nav>
        </div>
      ) : (
        <section className="mx-auto max-w-content px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeader title={chapter ? 'Lektionen' : 'Kapitel'} description={chapter ? 'Die Lektionen dieses Kapitels im Überblick.' : 'Der Unterricht ist in sieben zusammenhängende Kapitel gegliedert.'} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => <TopicCard key={topic.id} topic={topic} to={`${base}/${topic.slug}`} accent={subject.accent} index={index} />)}
          </div>
        </section>
      )}
    </div>
  )
}
