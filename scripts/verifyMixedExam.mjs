import assert from 'node:assert/strict'
import { build } from 'esbuild'

const bundle = await build({ entryPoints: ['src/lib/mixedExam.ts'], bundle: true, write: false, platform: 'node', format: 'esm' })
const mixed = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
const coreBundle = await build({ entryPoints: ['src/lib/examSimulationCore.ts'], bundle: true, write: false, platform: 'node', format: 'esm' })
const core = await import(`data:text/javascript;base64,${Buffer.from(coreBundle.outputFiles[0].text).toString('base64')}`)
const pool = mixed.getMixedPool()
const available = mixed.mixedAvailability()
assert.equal(new Set(pool.map((question) => question.questionKey)).size, pool.length)
assert.equal(new Set(pool.map((question) => question.questionId)).size, pool.length)
assert.equal(available.reduce((sum, subject) => sum + subject.count, 0), pool.length)
for (const question of pool) {
  assert.ok(mixed.isEligibleMixedQuestion(question))
  assert.ok(question.questionId && question.sourceId && question.moduleLabel && question.contentPath)
  assert.ok(['single-choice', 'multiple-choice', 'true-false'].includes(question.type))
}
for (const count of [10, 20, 30]) {
  if (pool.length < count) continue
  const subjects = available.filter((subject) => subject.count).map((subject) => subject.id)
  const first = mixed.selectMixedQuestions(subjects, count, 1234, pool)
  assert.deepEqual(first, mixed.selectMixedQuestions(subjects, count, 1234, pool))
  assert.equal(first.length, count)
  assert.equal(new Set(first.map((question) => question.questionKey)).size, count)
  assert.equal(new Set(first.map((question) => question.questionId)).size, count)
  assert.ok(first.every((question) => subjects.includes(mixed.mixedSubjectOf(question))))
  const distribution = mixed.mixedBreakdown(first, {})
  assert.equal(distribution.reduce((sum, subject) => sum + subject.total, 0), count)
  const answers = Object.fromEntries(first.map((question) => [question.questionKey, Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]]))
  const score = core.examScore(first, answers)
  assert.equal(score.correct, count)
  assert.equal(score.percentage, 100)
  assert.equal(mixed.mixedBreakdown(first, answers).reduce((sum, subject) => sum + subject.correct, 0), score.correct)
  const noAnswers = core.examScore(first, {})
  assert.equal(noAnswers.correct, 0)
  assert.equal(noAnswers.unanswered, count)
  console.log(`${count} Fragen: ${distribution.map((subject) => `${subject.label} ${subject.total}`).join(', ')}`)
}
const small = pool.filter((question) => ['linux', 'network'].includes(mixed.mixedSubjectOf(question)))
if (small.length >= 10) {
  const selection = mixed.selectMixedQuestions(['linux', 'network'], 10, 7, small)
  const breakdown = mixed.mixedBreakdown(selection, {})
  assert.ok(Math.max(...breakdown.map((subject) => subject.total)) - Math.min(...breakdown.map((subject) => subject.total)) <= 1 || breakdown.some((subject) => subject.total === available.find((item) => item.id === subject.id).count))
}
const shortage = pool.filter((question) => ['linux', 'wiso'].includes(mixed.mixedSubjectOf(question)))
const linux = shortage.filter((question) => mixed.mixedSubjectOf(question) === 'linux').slice(0, 2)
const wiso = shortage.filter((question) => mixed.mixedSubjectOf(question) === 'wiso').slice(0, 12)
const redistributed = mixed.selectMixedQuestions(['linux', 'wiso'], 10, 1, [...linux, ...wiso])
assert.equal(mixed.mixedBreakdown(redistributed, {}).find((subject) => subject.id === 'linux')?.total, 2)
assert.throws(() => mixed.selectMixedQuestions(['linux'], 10, 1, linux))
assert.throws(() => mixed.selectMixedQuestions([], 10, 1, pool))
assert.throws(() => mixed.selectMixedQuestions(['wiso'], 30, 1, wiso))
console.log(`Eligible: ${available.map((subject) => `${subject.label} ${subject.count}`).join(', ')}`)
console.log('Stable IDs, graded types, balance, shortage, rejection, seeded selection, scoring and breakdown verified.')
