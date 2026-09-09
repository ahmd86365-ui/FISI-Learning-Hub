import assert from 'node:assert/strict'
import { build } from 'esbuild'

const bundle = await build({ entryPoints: ['src/lib/examSimulation.ts'], bundle: true, write: false, platform: 'node', format: 'esm' })
const exam = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
for (const [mode, preset] of Object.entries(exam.examPresets)) {
  const pool = exam.getExamPool(mode)
  assert.ok(pool.length >= Math.max(...preset.counts))
  assert.equal(new Set(pool.map((question) => question.questionKey)).size, pool.length)
  for (const count of preset.counts) {
    const questions = exam.chooseQuestions(mode, count)
    assert.equal(questions.length, count)
    assert.equal(new Set(questions.map((question) => question.questionKey)).size, count)
    for (const question of questions) {
      const expected = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
      assert.ok(exam.isSimulationAnswerCorrect(question, expected), question.questionKey)
      assert.equal(exam.isSimulationAnswerCorrect(question, []), false, question.questionKey)
      assert.equal(exam.toPerformanceAttempt(question, false).questionKey, question.questionKey)
    }
  }
  console.log(`${mode}: ${pool.length} questions; presets ${preset.counts.join(', ')} verified`)
}
const multiple = { type: 'multiple-choice', options: [{ id: 'a' }, { id: 'b' }], correctAnswer: ['a', 'b'] }
assert.ok(exam.isSimulationAnswerCorrect(multiple, ['b', 'a']))
assert.equal(exam.isSimulationAnswerCorrect(multiple, ['a']), false)
assert.equal(exam.isSimulationAnswerCorrect(multiple, ['a', 'a']), false)
assert.equal(exam.isSimulationAnswerCorrect(multiple, ['a', 'b', 'c']), false)
assert.ok(exam.isSimulationAnswerCorrect({ type: 'text', correctAnswer: 'Netzwerk' }, [' NETZWERK ']))
assert.equal(exam.isSimulationAnswerCorrect({ type: 'open-answer', correctAnswer: '244,80' }, ['244']), false)
const contextual = exam.getExamPool('wiso_mixed').find((question) => question.scenario)
assert.ok(contextual)
assert.equal(exam.toPerformanceAttempt(contextual, false).questionData.scenario, contextual.scenario)
console.log('Scoring, duplicate rejection, context snapshots and performance keys verified.')
const start = Date.parse('2026-09-09T10:00:00Z')
const session = { id: 'test', startedAt: new Date(start).toISOString(), endAt: new Date(start + 1200000).toISOString(), answers: { a: ['b'] } }
assert.equal(exam.remainingExamSeconds(session, start), 1200)
assert.equal(exam.remainingExamSeconds(JSON.parse(JSON.stringify(session)), start + 600000), 600)
assert.equal(exam.remainingExamSeconds(session, start + 1200001), 0)
const frozen = exam.freezeExam(session, 'manual', start + 10000)
assert.equal(frozen.submittedAt, new Date(start + 10000).toISOString())
assert.equal(exam.freezeExam(frozen, 'timeout', start + 2000000), frozen)
const expired = exam.freezeExam(session, 'manual', start + 2000000)
assert.equal(expired.submissionReason, 'timeout')
assert.equal(expired.submittedAt, session.endAt)
assert.deepEqual(expired.answers, session.answers)
console.log('Deadline, refresh elapsed time, frozen retries and timeout clamping verified.')
