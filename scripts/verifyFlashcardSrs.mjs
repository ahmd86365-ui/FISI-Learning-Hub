import assert from 'node:assert/strict'
import { build } from 'esbuild'
import { readFile } from 'node:fs/promises'

const bundle = await build({ entryPoints: ['src/lib/flashcardSrs.ts'], bundle: true, write: false, platform: 'node', format: 'esm' })
const srs = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
const reviewedAt = new Date('2026-10-01T10:00:00Z')
const firstWrong = srs.scheduleFlashcardReview(undefined, false, reviewedAt)
assert.equal(firstWrong.intervalDays, 1)
assert.equal(firstWrong.repetitions, 0)
const first = srs.scheduleFlashcardReview(undefined, true, reviewedAt)
const second = srs.scheduleFlashcardReview({ consecutive_correct: 1, repetitions: 1, interval_days: 1, ease_factor: first.easeFactor }, true, reviewedAt)
const third = srs.scheduleFlashcardReview({ consecutive_correct: 2, repetitions: 2, interval_days: 3, ease_factor: second.easeFactor }, true, reviewedAt)
const fourth = srs.scheduleFlashcardReview({ consecutive_correct: 3, repetitions: 3, interval_days: 7, ease_factor: third.easeFactor }, true, reviewedAt)
assert.deepEqual([first.intervalDays, second.intervalDays, third.intervalDays], [1, 3, 7])
assert.ok(fourth.intervalDays > third.intervalDays)
assert.ok(firstWrong.easeFactor >= srs.MIN_EASE_FACTOR)
let bounded = { ease_factor: srs.MIN_EASE_FACTOR }
for (let index = 0; index < 20; index += 1) bounded = { ease_factor: srs.scheduleFlashcardReview(bounded, false, reviewedAt).easeFactor }
assert.equal(bounded.ease_factor, srs.MIN_EASE_FACTOR)
assert.equal(srs.getDueStatus({ due_at: '2026-09-30T12:00:00Z' }, reviewedAt), 'overdue')
assert.equal(srs.getDueStatus({ due_at: '2026-10-01T12:00:00Z' }, reviewedAt), 'today')
assert.equal(srs.getDueStatus({ due_at: '2026-10-02T12:00:00Z' }, reviewedAt), 'future')

const card = (id, dueAt, overrides = {}) => ({
  user_id: 'guest', card_id: id, lesson_id: 'lesson', subject_id: 'it', module_id: 'linux', attempts: 1,
  correct_count: 0, incorrect_count: 1, consecutive_correct: 0, repetitions: 0, interval_days: 1,
  ease_factor: 2.2, last_result: false, last_reviewed_at: reviewedAt.toISOString(), due_at: dueAt,
  created_at: reviewedAt.toISOString(), updated_at: reviewedAt.toISOString(), ...overrides,
})
const serialized = srs.serializeGuestCardProgress([card('a', firstWrong.dueAt), card('a', firstWrong.dueAt, { attempts: 2 })])
const parsed = srs.parseGuestCardProgress(serialized)
assert.equal(parsed.length, 1)
assert.equal(parsed[0].attempts, 2)
assert.deepEqual(srs.parseGuestCardProgress(serialized, new Set(['different'])), [])
assert.deepEqual(srs.parseGuestCardProgress('{broken'), [])

const catalog = [{ id: 'a', lessonId: 'lesson' }, { id: 'b', lessonId: 'lesson' }, { id: 'c', lessonId: 'lesson' }]
const progress = [card('a', '2026-09-30T12:00:00Z'), card('b', '2026-10-02T12:00:00Z', { last_result: true, correct_count: 3, incorrect_count: 0, consecutive_correct: 3 })]
assert.deepEqual(srs.dueFlashcards(catalog, [...progress, card('orphan', '2026-09-01T12:00:00Z')], reviewedAt).map((item) => item.id), ['a'])
assert.deepEqual(srs.orderFlashcardsForLesson(catalog, progress, reviewedAt, () => 0.5).map((item) => item.id), ['a', 'c', 'b'])
const migration = await readFile('supabase/migrations/20261001204126_create_flashcard_card_progress.sql', 'utf8')
for (const required of [
  'enable row level security', 'to authenticated', '(select auth.uid()) = user_id', "security invoker",
  "set search_path = ''", 'revoke all on table public.flashcard_card_progress from public, anon, authenticated',
  'revoke all on function public.record_flashcard_card_review', 'grant execute on function public.record_flashcard_card_review',
]) assert.ok(migration.toLowerCase().includes(required.toLowerCase()), `missing migration security requirement: ${required}`)
assert.equal(/grant\s+.+\s+to\s+(anon|public)/i.test(migration), false)
assert.equal(/\b(delete|truncate)\b/i.test(migration.replace(/on delete cascade/ig, '')), false)
const context = await readFile('src/contexts/FlashcardProgressContext.tsx', 'utf8')
for (const aggregateField of ['completed_sessions', 'best_score', 'last_score', 'last_total', "record_flashcard_result"]) assert.ok(context.includes(aggregateField))
console.log('SRS scheduling, bounds, due detection, guest persistence, deduplication, orphan filtering, ordering, aggregate compatibility and migration security verified.')
