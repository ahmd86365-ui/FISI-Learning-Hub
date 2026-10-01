import type { FlashcardQuestion } from '../types/content'

export const FLASHCARD_SRS_VERSION = 1
export const DEFAULT_EASE_FACTOR = 2.4
export const MIN_EASE_FACTOR = 1.3
export const MAX_EASE_FACTOR = 2.6
export const MAX_INTERVAL_DAYS = 120
export const CARD_PROGRESS_STORAGE_KEY = 'fisi_flashcard_card_progress'

export interface FlashcardCardProgress {
  user_id: string
  card_id: string
  lesson_id: string
  subject_id: string
  module_id: string
  attempts: number
  correct_count: number
  incorrect_count: number
  consecutive_correct: number
  repetitions: number
  interval_days: number
  ease_factor: number
  last_result: boolean
  last_reviewed_at: string
  due_at: string
  created_at: string
  updated_at: string
}

export interface SrsSchedule {
  repetitions: number
  intervalDays: number
  easeFactor: number
  consecutiveCorrect: number
  dueAt: string
}

interface StoredCardProgress { version: number; cards: Record<string, FlashcardCardProgress> }

export function serializeGuestCardProgress(progress: FlashcardCardProgress[]) {
  const cards = Object.fromEntries(progress.map((entry) => [entry.card_id, entry]))
  return JSON.stringify({ version: FLASHCARD_SRS_VERSION, cards } satisfies StoredCardProgress)
}

export function parseGuestCardProgress(value: string | null, validCardIds?: Set<string>) {
  if (!value) return []
  try {
    const stored = JSON.parse(value) as StoredCardProgress
    if (stored.version !== FLASHCARD_SRS_VERSION || !stored.cards || typeof stored.cards !== 'object') return []
    return Object.values(stored.cards).filter((entry) => entry?.card_id && (!validCardIds || validCardIds.has(entry.card_id)))
  } catch {
    return []
  }
}

const berlinDateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit',
})

export function berlinDateKey(date: Date) {
  const parts = berlinDateFormatter.formatToParts(date)
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ''
  return `${value('year')}-${value('month')}-${value('day')}`
}

function addCalendarDays(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split('-').map(Number)
  const result = new Date(Date.UTC(year, month - 1, day + days, 12))
  return `${result.toISOString().slice(0, 10)}T12:00:00.000Z`
}

export function scheduleFlashcardReview(previous: Partial<FlashcardCardProgress> | undefined, correct: boolean, reviewedAt = new Date()): SrsSchedule {
  const oldEase = Number(previous?.ease_factor ?? DEFAULT_EASE_FACTOR)
  const oldInterval = Math.max(0, Number(previous?.interval_days ?? 0))
  const oldConsecutive = Math.max(0, Number(previous?.consecutive_correct ?? 0))
  const consecutiveCorrect = correct ? oldConsecutive + 1 : 0
  const repetitions = correct ? Math.max(0, Number(previous?.repetitions ?? 0)) + 1 : 0
  const easeFactor = Math.min(MAX_EASE_FACTOR, Math.max(MIN_EASE_FACTOR, oldEase + (correct ? 0.05 : -0.2)))
  const intervalDays = !correct ? 1
    : consecutiveCorrect === 1 ? 1
      : consecutiveCorrect === 2 ? 3
        : consecutiveCorrect === 3 ? 7
          : Math.min(MAX_INTERVAL_DAYS, Math.max(8, Math.round(oldInterval * easeFactor)))
  return {
    repetitions,
    intervalDays,
    easeFactor: Number(easeFactor.toFixed(2)),
    consecutiveCorrect,
    dueAt: addCalendarDays(berlinDateKey(reviewedAt), intervalDays),
  }
}

export type DueStatus = 'overdue' | 'today' | 'future'

export function getDueStatus(progress: Pick<FlashcardCardProgress, 'due_at'>, now = new Date()): DueStatus {
  const due = berlinDateKey(new Date(progress.due_at))
  const today = berlinDateKey(now)
  return due < today ? 'overdue' : due === today ? 'today' : 'future'
}

export function isDue(progress: Pick<FlashcardCardProgress, 'due_at'>, now = new Date()) {
  return getDueStatus(progress, now) !== 'future'
}

export function isWeak(progress: Pick<FlashcardCardProgress, 'last_result' | 'correct_count' | 'incorrect_count' | 'consecutive_correct'>) {
  return !progress.last_result || progress.incorrect_count > progress.correct_count || progress.consecutive_correct < 2
}

export function orderFlashcardsForLesson(cards: FlashcardQuestion[], progress: FlashcardCardProgress[], now = new Date(), random = Math.random) {
  const byId = new Map(progress.map((entry) => [entry.card_id, entry]))
  const priority = (card: FlashcardQuestion) => {
    const entry = byId.get(card.id)
    if (!entry) return 3
    const due = getDueStatus(entry, now)
    if (due === 'overdue') return 0
    if (due === 'today') return 1
    if (isWeak(entry)) return 2
    return 4
  }
  return cards.map((card) => ({ card, priority: priority(card), random: random() }))
    .sort((a, b) => a.priority - b.priority || a.random - b.random)
    .map(({ card }) => card)
}

export function dueFlashcards(cards: FlashcardQuestion[], progress: FlashcardCardProgress[], now = new Date()) {
  const catalog = new Map(cards.map((card) => [card.id, card]))
  return progress.filter((entry) => catalog.has(entry.card_id) && isDue(entry, now))
    .sort((a, b) => a.due_at.localeCompare(b.due_at) || a.card_id.localeCompare(b.card_id))
    .map((entry) => catalog.get(entry.card_id)!)
}

export function formatDueLabel(dueAt: string, now = new Date()) {
  const today = berlinDateKey(now)
  const due = berlinDateKey(new Date(dueAt))
  const days = Math.round((Date.parse(`${due}T12:00:00Z`) - Date.parse(`${today}T12:00:00Z`)) / 86_400_000)
  if (days < 0) return 'Überfällig'
  if (days === 0) return 'Heute fällig'
  if (days === 1) return 'Morgen'
  return `In ${days} Tagen`
}
