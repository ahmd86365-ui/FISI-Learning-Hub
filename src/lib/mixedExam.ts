import { getExamPool, isSimulationAnswerCorrect, type SimulationQuestion } from './examSimulation'

export const mixedSubjects = [
  { id: 'it', label: 'IT' },
  { id: 'network', label: 'Netzwerktechnik' },
  { id: 'linux', label: 'Linux' },
  { id: 'wiso', label: 'Wirtschaft & Gesellschaft' },
] as const
export type MixedSubject = typeof mixedSubjects[number]['id']
export const mixedCounts = [10, 20, 30]
export const mixedSecondsPerQuestion = 90

export function mixedSubjectOf(question: SimulationQuestion): MixedSubject | null {
  if (question.questionType === 'wiso_exam') return 'wiso'
  if (question.moduleLabel === 'Netzwerktechnik') return 'network'
  if (question.moduleLabel === 'Linux') return 'linux'
  if (question.subjectLabel === 'IT') return 'it'
  return null
}

export function isEligibleMixedQuestion(question: SimulationQuestion) {
  if (!mixedSubjectOf(question) || !question.questionId || !question.questionKey || !question.contentPath) return false
  if (!['single-choice', 'multiple-choice', 'true-false'].includes(question.type)) return false
  if (!question.options?.length) return false
  const expected = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
  return expected.length > 0 && expected.every((value) => question.options!.some((option) => option.id === value))
    && isSimulationAnswerCorrect(question, expected)
}

export function getMixedPool(): SimulationQuestion[] {
  const seenKeys = new Set<string>()
  const seenIds = new Set<string>()
  return [...getExamPool('lesson_tests'), ...getExamPool('wiso_mixed')]
    .filter((question) => {
      if (!isEligibleMixedQuestion(question) || seenKeys.has(question.questionKey) || seenIds.has(question.questionId)) return false
      seenKeys.add(question.questionKey)
      seenIds.add(question.questionId)
      return true
    })
}

export function mixedAvailability(pool = getMixedPool()) {
  return mixedSubjects.map((subject) => ({ ...subject, count: pool.filter((question) => mixedSubjectOf(question) === subject.id).length }))
}

function seededRandom(seed: number) {
  let state = seed >>> 0
  return () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 0x100000000 }
}

function shuffle<T>(items: T[], random: () => number) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const target = Math.floor(random() * (index + 1))
    ;[result[index], result[target]] = [result[target], result[index]]
  }
  return result
}

export function selectMixedQuestions(subjects: MixedSubject[], count: number, seed = Math.floor(Math.random() * 0x100000000), pool = getMixedPool()) {
  const selected = mixedSubjects.map((subject) => subject.id).filter((id) => subjects.includes(id))
  if (!selected.length || !Number.isInteger(count) || count <= 0) throw new Error('Bitte Lernbereiche und eine gültige Fragenzahl wählen.')
  const random = seededRandom(seed)
  const buckets = selected.map((id) => shuffle(pool.filter((question) => mixedSubjectOf(question) === id), random))
  const unique = new Set(buckets.flat().map((question) => question.questionKey))
  if (unique.size < count) throw new Error('Für diese Auswahl sind nicht genügend bewertbare Fragen vorhanden.')
  const result: SimulationQuestion[] = []
  while (result.length < count) {
    let progressed = false
    for (const bucket of buckets) {
      if (result.length === count) break
      const question = bucket.shift()
      if (question) { result.push(question); progressed = true }
    }
    if (!progressed) throw new Error('Für diese Auswahl sind nicht genügend eindeutige Fragen vorhanden.')
  }
  return shuffle(result, random)
}

export function mixedBreakdown(questions: SimulationQuestion[], answers: Record<string, string[]>) {
  return mixedSubjects.map((subject) => {
    const items = questions.filter((question) => mixedSubjectOf(question) === subject.id)
    return { ...subject, total: items.length, correct: items.filter((question) => (answers[question.questionKey] ?? []).some((value) => value.trim()) && isSimulationAnswerCorrect(question, answers[question.questionKey])).length }
  }).filter((item) => item.total > 0)
}
