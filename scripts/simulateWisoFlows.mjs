// Exercises the exact helper functions + data the UI uses, to verify
// practice-mode / simulation-mode logic end-to-end without a browser.
// (Imports each exam file directly with explicit extensions and replicates
// index.ts's trivial aggregation inline, since Node's ESM loader — unlike
// Vite's resolver, which the real app uses — requires explicit extensions.)
import { wisoExam2020SommerMeta, wisoExam2020SommerQuestions } from '../src/data/wisoExam/wiso2020Sommer.ts'
import { wisoExam2020WinterMeta, wisoExam2020WinterQuestions } from '../src/data/wisoExam/wiso2020Winter.ts'
import { wisoExam2021SommerMeta, wisoExam2021SommerQuestions } from '../src/data/wisoExam/wiso2021Sommer.ts'
import { wisoExam2021WinterMeta, wisoExam2021WinterQuestions } from '../src/data/wisoExam/wiso2021Winter.ts'
import { wisoExam2022SommerMeta, wisoExam2022SommerQuestions } from '../src/data/wisoExam/wiso2022Sommer.ts'
import { wisoExam2024SommerMeta, wisoExam2024SommerQuestions } from '../src/data/wisoExam/wiso2024Sommer.ts'
import { wisoExam2024WinterMeta, wisoExam2024WinterQuestions } from '../src/data/wisoExam/wiso2024Winter.ts'
import { wisoExam2025WinterMeta, wisoExam2025WinterQuestions } from '../src/data/wisoExam/wiso2025Winter.ts'
import { isWisoAnswerCorrect, pickRandomQuestions, formatCountdown } from '../src/lib/wisoExamHelpers.ts'

const examMetas = [
  wisoExam2020SommerMeta, wisoExam2020WinterMeta, wisoExam2021SommerMeta, wisoExam2021WinterMeta,
  wisoExam2022SommerMeta, wisoExam2024SommerMeta, wisoExam2024WinterMeta, wisoExam2025WinterMeta,
]
const questionsByExam = {
  [wisoExam2020SommerMeta.id]: wisoExam2020SommerQuestions,
  [wisoExam2020WinterMeta.id]: wisoExam2020WinterQuestions,
  [wisoExam2021SommerMeta.id]: wisoExam2021SommerQuestions,
  [wisoExam2021WinterMeta.id]: wisoExam2021WinterQuestions,
  [wisoExam2022SommerMeta.id]: wisoExam2022SommerQuestions,
  [wisoExam2024SommerMeta.id]: wisoExam2024SommerQuestions,
  [wisoExam2024WinterMeta.id]: wisoExam2024WinterQuestions,
  [wisoExam2025WinterMeta.id]: wisoExam2025WinterQuestions,
}
const getAllWisoExams = () => examMetas
const getWisoExamQuestions = (id) => questionsByExam[id] ?? []
const getAllWisoQuestions = () => examMetas.flatMap((e) => questionsByExam[e.id] ?? [])
const getWisoTopics = () => {
  const s = new Set()
  for (const q of getAllWisoQuestions()) if (q.topic) s.add(q.topic)
  return Array.from(s)
}

function assert(cond, msg) {
  if (!cond) throw new Error('ASSERTION FAILED: ' + msg)
  console.log('  OK:', msg)
}

console.log('=== Exam overview ===')
const exams = getAllWisoExams()
assert(exams.length === 8, `8 exams registered (got ${exams.length})`)
console.log(exams.map((e) => `${e.label} (${getWisoExamQuestions(e.id).length}q, solution=${e.hasOfficialSolution})`).join('\n  '))

console.log('\n=== Topics ===')
const topics = getWisoTopics()
assert(topics.length > 10, `plenty of distinct topics extracted (${topics.length})`)
console.log(' sample:', topics.slice(0, 8).join(', '), '...')

console.log('\n=== Randomization (Übungsmodus) ===')
const allQuestions = getAllWisoQuestions()
assert(allQuestions.length === 296, `296 total questions (got ${allQuestions.length})`)
const draw1 = pickRandomQuestions(allQuestions, 20).map((q) => q.id)
const draw2 = pickRandomQuestions(allQuestions, 20).map((q) => q.id)
assert(new Set(draw1).size === 20, 'no duplicate questions within a single draw (no repetition)')
assert(JSON.stringify(draw1) !== JSON.stringify(draw2), 'two consecutive draws produce different orders/selections (mixed practice is randomized)')

console.log('\n=== Practice-mode scoring (simulate answering) ===')
const practiceSet = pickRandomQuestions(allQuestions.filter((q) => q.answerStatus === 'confirmed'), 10)
let correct = 0
for (const q of practiceSet) {
  const correctArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]
  const result = isWisoAnswerCorrect(q, correctArr) // simulate a user who always answers correctly
  assert(result === true, `answering with the official correctAnswer scores as correct (${q.id})`)
  if (result) correct++
}
assert(correct === practiceSet.length, 'full-correct run scores 100%')
const wrongResult = isWisoAnswerCorrect(practiceSet[0], ['__definitely_wrong__'])
assert(wrongResult === false, 'a wrong answer scores as incorrect')

console.log('\n=== Unclear questions are never silently scored ===')
const unclearQ = allQuestions.find((q) => q.answerStatus === 'unclear')
assert(unclearQ !== undefined, 'at least one unclear question exists in the pool')
assert(isWisoAnswerCorrect(unclearQ, ['1']) === null, 'unclear question returns null (not true/false) regardless of answer — UI shows "no official solution" instead of grading it')

console.log('\n=== Simulation-mode: confirmed-only pool per exam ===')
for (const exam of exams.filter((e) => e.hasOfficialSolution)) {
  const qs = getWisoExamQuestions(exam.id)
  const confirmed = qs.filter((q) => q.answerStatus === 'confirmed')
  assert(confirmed.length > 0, `${exam.label} has at least one confirmed question available for simulation`)
}
const noSolutionExam = exams.find((e) => !e.hasOfficialSolution)
assert(noSolutionExam.id === 'wiso-2025-winter', 'the exam without a solution PDF (25w) is correctly excluded from simulation-eligible exams')

console.log('\n=== Mixed simulation draw (30 questions, confirmed-only) ===')
const confirmedPool = allQuestions.filter((q) => q.answerStatus === 'confirmed')
const simDraw = pickRandomQuestions(confirmedPool, 30)
assert(simDraw.length === 30, 'mixed simulation draws exactly 30 questions')
assert(simDraw.every((q) => q.answerStatus === 'confirmed'), 'every question in a simulation draw is scoreable (confirmed)')
assert(new Set(simDraw.map((q) => q.id)).size === 30, 'no repeated questions within one simulation')

console.log('\n=== Full simulation run + review (simulate a mixed-performance attempt) ===')
const answers = {}
simDraw.forEach((q, i) => {
  const correctArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer]
  answers[q.id] = i % 3 === 0 ? ['__wrong__'] : correctArr // ~1/3 wrong, rest correct
})
const correctCount = simDraw.filter((q) => isWisoAnswerCorrect(q, answers[q.id]) === true).length
const scorePercent = Math.round((correctCount / simDraw.length) * 100)
assert(correctCount > 0 && correctCount < simDraw.length, `mixed result produced a partial score (${correctCount}/${simDraw.length} = ${scorePercent}%)`)
const mistakesByTopic = new Map()
for (const q of simDraw) {
  if (isWisoAnswerCorrect(q, answers[q.id]) === false && q.topic) {
    mistakesByTopic.set(q.topic, (mistakesByTopic.get(q.topic) ?? 0) + 1)
  }
}
assert(mistakesByTopic.size > 0, `topic-level mistake breakdown is non-empty (${mistakesByTopic.size} topics with mistakes)`)

console.log('\n=== Timer formatting ===')
assert(formatCountdown(3600) === '60:00', '60 minutes formats as 60:00')
assert(formatCountdown(65) === '1:05', '65 seconds formats as 1:05')
assert(formatCountdown(0) === '0:00', '0 seconds formats as 0:00')
assert(formatCountdown(-5) === '0:00', 'negative seconds clamp to 0:00 (guards against auto-submit race)')

console.log('\n\nALL CHECKS PASSED')
