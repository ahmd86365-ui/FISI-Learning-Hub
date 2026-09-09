import { modules } from '../data/modules'
import { getSubjectBySlug } from '../data/subjects'

export interface CatalogLesson {
  id: string
  title: string
  path: string
}

export interface CatalogModule {
  id: string
  title: string
  subjectSlug: string
  subjectTitle: string
  lessons: CatalogLesson[]
}

export const lessonCatalog: CatalogModule[] = modules
  .map((module) => {
    const subject = getSubjectBySlug(module.subjectSlug)!
    return {
      id: module.id,
      title: module.title,
      subjectSlug: module.subjectSlug,
      subjectTitle: subject.name,
      lessons: module.topics.map((topic) => ({
        id: topic.id,
        title: topic.title,
        path:
          module.slug === 'it-technical'
            ? `/it/it-technical/${topic.slug}`
            : `${subject.path}/${module.slug}/${topic.slug}`,
      })),
    }
  })
  .filter((module) => module.lessons.length > 0)
