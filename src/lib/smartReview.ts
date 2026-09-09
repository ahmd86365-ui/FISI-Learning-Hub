import type { ExamAttempt } from '../contexts/ExamAttemptsContext'
import type { QuestionPerformance } from '../contexts/QuestionPerformanceContext'
import type { SavedItem } from '../contexts/SavedItemsContext'
import type { StudyActivity } from '../contexts/StudyActivityContext'
import { isSimulationAnswerCorrect } from './examSimulationCore'
import { lessonCatalog } from './lessonCatalog'

export type ReviewPriority = 'Sehr hoch' | 'Hoch' | 'Mittel' | 'Niedrig'
export type ReviewKind = 'repeated-error' | 'exam-error' | 'active-error' | 'saved-review' | 'weak-lesson' | 'next-lesson'

export interface SmartReviewRecommendation {
  id: string
  kind: ReviewKind
  title: string
  reason: string
  subject?: string
  module?: string
  path: string
  actionLabel: string
  priority: ReviewPriority
  score: number
}

export interface WeakArea {
  key: string
  subject?: string
  module?: string
  attempts: number
  accuracy: number
  activeErrors: number
}

export interface SmartReviewPlan {
  recommendations: SmartReviewRecommendation[]
  highestPriority?: SmartReviewRecommendation
  nextIncompleteLesson?: SmartReviewRecommendation
  weakAreas: WeakArea[]
  activeErrors: number
  reviewItems: number
  recommendedLessons: number
  urgentItems: number
}

interface ProgressLike { lesson_id: string; completed: boolean }
interface SmartReviewInput {
  performance: QuestionPerformance[]
  savedItems: SavedItem[]
  progress: ProgressLike[]
  activities: StudyActivity[]
  examAttempts: ExamAttempt[]
  now?: Date
  limit?: number
}

const priorityFor = (score: number): ReviewPriority => score >= 500 ? 'Sehr hoch' : score >= 350 ? 'Hoch' : score >= 200 ? 'Mittel' : 'Niedrig'
const compareRecommendations = (a: SmartReviewRecommendation, b: SmartReviewRecommendation) => b.score - a.score || a.id.localeCompare(b.id, 'de')
const activeError = (entry: QuestionPerformance) => entry.incorrect_answers > 0 && entry.consecutive_correct < 2

function deriveWeakAreas(performance: QuestionPerformance[]) {
  const groups = new Map<string, { subject?: string; module?: string; attempts: number; correct: number; activeErrors: number }>()
  for (const entry of performance) {
    if (!entry.subject_label && !entry.module_label) continue
    const key = `${entry.subject_label ?? ''}\u0000${entry.module_label ?? ''}`
    const group = groups.get(key) ?? { subject: entry.subject_label ?? undefined, module: entry.module_label ?? undefined, attempts: 0, correct: 0, activeErrors: 0 }
    group.attempts += entry.attempts
    group.correct += entry.correct_answers
    if (activeError(entry)) group.activeErrors += 1
    groups.set(key, group)
  }
  return [...groups.entries()].map(([key, group]) => ({
    key, subject: group.subject, module: group.module, attempts: group.attempts,
    accuracy: group.attempts ? Math.round(group.correct / group.attempts * 100) : 0,
    activeErrors: group.activeErrors,
  })).filter((area) => area.activeErrors > 0 || area.attempts >= 3 && area.accuracy < 70)
    .sort((a, b) => b.activeErrors - a.activeErrors || a.accuracy - b.accuracy || a.key.localeCompare(b.key, 'de'))
}

export function buildSmartReviewPlan({ performance, savedItems, progress, activities, examAttempts, now = new Date(), limit = 10 }: SmartReviewInput): SmartReviewPlan {
  const completed = new Set(progress.filter((entry) => entry.completed).map((entry) => entry.lesson_id))
  const lessons = lessonCatalog.flatMap((module) => module.lessons.map((lesson) => ({ ...lesson, module: module.title, subject: module.subjectTitle })))
  const incomplete = lessons.filter((lesson) => !completed.has(lesson.id))
  const weakAreas = deriveWeakAreas(performance)
  const candidates: SmartReviewRecommendation[] = []

  for (const entry of performance.filter(activeError)) {
    const repeated = entry.incorrect_answers >= 2
    const accuracy = entry.attempts ? entry.correct_answers / entry.attempts : 0
    const score = (repeated ? 500 : 350) + Math.min(entry.incorrect_answers, 9) * 10 + Math.round((1 - accuracy) * 9)
    candidates.push({ id: `question:${entry.question_key}`, kind: repeated ? 'repeated-error' : 'active-error', title: entry.title,
      reason: repeated ? 'Mehrfach falsch beantwortet' : 'Im Fehlertraining aktiv', subject: entry.subject_label ?? undefined,
      module: entry.module_label ?? undefined, path: entry.content_path, actionLabel: 'Frage üben', priority: priorityFor(score), score })
  }

  const recentCutoff = now.getTime() - 30 * 86_400_000
  const failed = [...examAttempts].filter((attempt) => !attempt.passed && Date.parse(attempt.submitted_at) >= recentCutoff)
    .sort((a, b) => Date.parse(b.submitted_at) - Date.parse(a.submitted_at) || a.id.localeCompare(b.id)).slice(0, 3)
  failed.forEach((attempt, attemptIndex) => attempt.result_data.questions.forEach((question) => {
    const answer = attempt.result_data.answers[question.questionKey] ?? []
    if (!answer.some((value) => value.trim()) || isSimulationAnswerCorrect(question, answer)) return
    const score = 400 - attemptIndex * 10
    candidates.push({ id: `question:${question.questionKey}`, kind: 'exam-error', title: question.title,
      reason: attemptIndex === 0 ? 'Aus deiner letzten nicht bestandenen Prüfung' : 'Aus einer kürzlich nicht bestandenen Prüfung',
      subject: question.subjectLabel, module: question.moduleLabel, path: question.contentPath, actionLabel: 'Frage üben', priority: priorityFor(score), score })
  }))

  savedItems.filter((item) => item.item_kind === 'review').forEach((item) => {
    const lesson = lessons.find((candidate) => candidate.path === item.content_path || candidate.id === item.content_id)
    const score = 300
    candidates.push({ id: `saved:${item.content_type}:${item.content_id}`, kind: 'saved-review', title: item.content_title,
      reason: 'Zum Wiederholen markiert', subject: lesson?.subject, module: lesson?.module, path: item.content_path,
      actionLabel: item.content_type === 'exercise' ? 'Aufgabe öffnen' : 'Lektion öffnen', priority: priorityFor(score), score })
  })

  for (const lesson of incomplete) {
    const areaIndex = weakAreas.findIndex((area) => area.subject === lesson.subject && (!area.module || area.module === lesson.module))
    if (areaIndex < 0) continue
    const area = weakAreas[areaIndex]
    const score = 200 + Math.min(area.activeErrors, 9) * 3 + Math.max(0, 69 - area.accuracy) - areaIndex
    candidates.push({ id: `lesson:${lesson.id}`, kind: 'weak-lesson', title: lesson.title, reason: 'Noch nicht abgeschlossen · Schwacher Lernbereich',
      subject: lesson.subject, module: lesson.module, path: lesson.path, actionLabel: 'Lektion lernen', priority: priorityFor(score), score })
  }

  const recentLessonIds = activities.slice().sort((a, b) => Date.parse(b.occurred_at) - Date.parse(a.occurred_at)).map((activity) => activity.lesson_id)
  const recentIndex = recentLessonIds.length ? lessons.findIndex((lesson) => lesson.id === recentLessonIds[0]) : -1
  const orderedIncomplete = recentIndex < 0 ? incomplete : [...lessons.slice(recentIndex + 1), ...lessons.slice(0, recentIndex + 1)].filter((lesson) => !completed.has(lesson.id))
  const next = orderedIncomplete[0]
  const nextIncompleteLesson = next ? { id: `lesson:${next.id}`, kind: 'next-lesson' as const, title: next.title, reason: 'Noch nicht abgeschlossen',
    subject: next.subject, module: next.module, path: next.path, actionLabel: 'Lektion starten', priority: 'Niedrig' as const, score: 100 } : undefined
  if (nextIncompleteLesson) candidates.push(nextIncompleteLesson)

  const deduplicated = new Map<string, SmartReviewRecommendation>()
  for (const candidate of candidates.sort(compareRecommendations)) {
    const existing = deduplicated.get(candidate.path)
    if (!existing || candidate.score > existing.score) deduplicated.set(candidate.path, candidate)
  }
  const recommendations = [...deduplicated.values()].sort(compareRecommendations).slice(0, limit)
  return {
    recommendations, highestPriority: recommendations[0], nextIncompleteLesson, weakAreas,
    activeErrors: performance.filter(activeError).length,
    reviewItems: savedItems.filter((item) => item.item_kind === 'review').length,
    recommendedLessons: recommendations.filter((item) => item.kind === 'weak-lesson' || item.kind === 'next-lesson').length,
    urgentItems: recommendations.filter((item) => item.kind !== 'next-lesson').length,
  }
}
