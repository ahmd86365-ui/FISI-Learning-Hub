import assert from 'node:assert/strict'
import { build } from 'esbuild'

const bundle = await build({ entryPoints: ['src/lib/smartReview.ts'], bundle: true, write: false, platform: 'node', format: 'esm' })
const { buildSmartReviewPlan } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
const question = (key, incorrect, overrides = {}) => ({
  user_id: 'u', question_key: key, question_id: key, question_type: 'wiso_exam', source_id: 'exam',
  title: key, subject_label: 'IT', module_label: 'IT Grundlagen', content_path: `/question/${key}`,
  question_data: { prompt: key }, attempts: incorrect + 1, correct_answers: 1, incorrect_answers: incorrect,
  consecutive_correct: 0, last_result: false, last_answered_at: '2026-09-08T10:00:00Z', ...overrides,
})
const examQuestion = { questionKey: 'exam-only', questionId: 'exam-only', questionType: 'wiso_exam', sourceId: 'exam', title: 'exam-only', contentPath: '/question/exam-only', type: 'single-choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }], correctAnswer: 'a' }
const repeatedExamQuestion = { ...examQuestion, questionKey: 'repeated', questionId: 'repeated', title: 'repeated', contentPath: '/question/repeated' }
const input = {
  performance: [question('repeated', 3), question('single', 1)],
  savedItems: [{ user_id: 'u', item_kind: 'review', content_type: 'lesson', content_id: 'saved', content_title: 'Saved', content_path: '/saved', created_at: '2026-09-08T00:00:00Z' }],
  progress: [], activities: [], now: new Date('2026-09-09T00:00:00Z'),
  examAttempts: [{ id: 'attempt', user_id: 'u', exam_mode: 'wiso_mixed', exam_label: 'WISO', started_at: '2026-09-08T09:00:00Z', submitted_at: '2026-09-08T10:00:00Z', duration_seconds: 600, used_seconds: 500, total_questions: 2, correct_answers: 0, incorrect_answers: 2, unanswered_questions: 0, percentage: 0, passed: false, result_data: { questions: [examQuestion, repeatedExamQuestion], answers: { 'exam-only': ['b'], repeated: ['b'] } } }],
}
const plan = buildSmartReviewPlan(input)
assert.deepEqual(plan.recommendations.slice(0, 4).map((item) => item.kind), ['repeated-error', 'exam-error', 'active-error', 'saved-review'])
assert.equal(plan.activeErrors, 2)
assert.equal(plan.recommendations.filter((item) => item.id === 'question:repeated').length, 1)
assert.ok(plan.weakAreas.some((area) => area.module === 'IT Grundlagen'))
assert.ok(plan.recommendedLessons > 0)
assert.deepEqual(buildSmartReviewPlan(input), plan)
const empty = buildSmartReviewPlan({ performance: [], savedItems: [], progress: [], activities: [], examAttempts: [], now: input.now })
assert.equal(empty.urgentItems, 0)
assert.equal(empty.recommendations[0]?.kind, 'next-lesson')
const oldExam = buildSmartReviewPlan({ ...input, performance: [], savedItems: [], examAttempts: input.examAttempts.map((attempt) => ({ ...attempt, submitted_at: '2026-01-01T00:00:00Z' })) })
assert.equal(oldExam.recommendations.some((item) => item.kind === 'exam-error'), false)
console.log('Smart Review ranking, weak areas, deduplication, empty fallback, recency and determinism verified.')
