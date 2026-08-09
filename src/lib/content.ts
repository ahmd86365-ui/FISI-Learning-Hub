import type { Module, Topic } from '../types/content'

export function sortedTopics(mod: Module): Topic[] {
  return [...mod.topics].sort((a, b) => a.order - b.order)
}

export function getTopicBySlug(mod: Module | undefined, topicSlug: string): Topic | undefined {
  return mod?.topics.find((t) => t.slug === topicSlug)
}
