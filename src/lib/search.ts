import type { SearchResultItem } from '../types/content'
import { subjects, getSubjectBySlug } from '../data/subjects'
import { modules } from '../data/modules'
import { linuxCheatSheetSections } from '../data/linux/cheatSheet'

function matches(query: string, ...fields: string[]): boolean {
  return fields.some((field) => field.toLowerCase().includes(query))
}

/**
 * Walks the real content hierarchy: subjects (always present) -> modules ->
 * topics (both empty until real material is imported). Nothing here is
 * fabricated — modules/topics simply contribute zero results until they
 * exist, at which point they become searchable automatically with no
 * further changes to this function or to any caller.
 */
export async function search(query: string): Promise<SearchResultItem[]> {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const results: SearchResultItem[] = []

  for (const subject of subjects) {
    if (matches(q, subject.name, subject.description)) {
      results.push({
        id: `subject-${subject.slug}`,
        title: subject.name,
        excerpt: subject.description,
        type: 'subject',
        subject: subject.slug,
        path: subject.path,
      })
    }
  }

  for (const mod of modules) {
    const subjectName = getSubjectBySlug(mod.subjectSlug)?.name ?? ''
    const subjectPath = getSubjectBySlug(mod.subjectSlug)?.path ?? ''

    if (matches(q, mod.title, mod.description)) {
      results.push({
        id: `module-${mod.id}`,
        title: mod.title,
        excerpt: mod.description,
        type: 'module',
        subject: mod.subjectSlug,
        path: `${subjectPath}/${mod.slug}`,
        breadcrumb: [subjectName],
      })
    }

    for (const topic of mod.topics) {
      const topicPath = `${subjectPath}/${mod.slug}/${topic.slug}`

      if (matches(q, topic.title, topic.shortIntro ?? '')) {
        results.push({
          id: `topic-${topic.id}`,
          title: topic.title,
          excerpt: topic.shortIntro ?? '',
          type: 'topic',
          subject: mod.subjectSlug,
          path: topicPath,
          breadcrumb: [subjectName, mod.title],
        })
      }

      for (const exercise of topic.exercises) {
        if (matches(q, exercise.question)) {
          results.push({
            id: `exercise-${exercise.id}`,
            title: exercise.question,
            excerpt: topic.title,
            type: 'exercise',
            subject: mod.subjectSlug,
            path: topicPath,
            breadcrumb: [subjectName, mod.title, topic.title],
          })
        }
      }

      for (const question of topic.test?.questions ?? []) {
        if (matches(q, question.question)) {
          results.push({
            id: `question-${question.id}`,
            title: question.question,
            excerpt: topic.title,
            type: 'question',
            subject: mod.subjectSlug,
            path: topicPath,
            breadcrumb: [subjectName, mod.title, topic.title],
          })
        }
      }
    }

    for (const question of mod.test?.questions ?? []) {
      if (matches(q, question.question)) {
        results.push({
          id: `question-${question.id}`,
          title: question.question,
          excerpt: mod.title,
          type: 'question',
          subject: mod.subjectSlug,
          path: `${subjectPath}/${mod.slug}`,
          breadcrumb: [subjectName, mod.title],
        })
      }
    }
  }

  for (const section of linuxCheatSheetSections) {
    const matchingEntries = section.entries.filter((entry) => matches(q, entry.purpose, ...entry.commands))
    if (matches(q, 'Linux Spickzettel', `Tag ${section.tag}`, section.title) || matchingEntries.length > 0) {
      const preview = matchingEntries.slice(0, 2).map((entry) => `${entry.purpose}: ${entry.commands.join(', ')}`).join(' · ')
      results.push({
        id: `linux-spickzettel-${section.tag}`,
        title: `Linux Spickzettel · Tag ${section.tag}`,
        excerpt: preview || section.title,
        type: 'reference',
        subject: 'it',
        path: `/it/linux/spickzettel?tag=${section.tag}`,
        breadcrumb: ['IT', 'Linux', 'Spickzettel'],
      })
    }
  }

  return results.slice(0, 20)
}
