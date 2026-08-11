import type { WisoExamQuestion } from '../types/wisoExam'

export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function pickRandomQuestions(pool: WisoExamQuestion[], count: number): WisoExamQuestion[] {
  return shuffleArray(pool).slice(0, Math.min(count, pool.length))
}

function normalizeOpenAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '')
}

/**
 * Returns `null` when the question has no reliable official answer
 * (`answerStatus !== 'confirmed'`) — such questions are never silently
 * scored as right or wrong, only shown as "no official solution available".
 */
export function isWisoAnswerCorrect(question: WisoExamQuestion, given: string[]): boolean | null {
  if (question.answerStatus !== 'confirmed' || question.correctAnswer === undefined) return null
  if (given.length === 0) return false

  const correctArr = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]

  if (question.type === 'open-answer') {
    return normalizeOpenAnswer(given[0] ?? '') === normalizeOpenAnswer(correctArr[0] ?? '')
  }

  const givenSet = new Set(given)
  return given.length === correctArr.length && correctArr.every((c) => givenSet.has(c))
}

export function formatCountdown(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds)
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function questionLabel(question: WisoExamQuestion): string {
  return question.subPart ? `Aufgabe ${question.questionNumber}${question.subPart}` : `Aufgabe ${question.questionNumber}`
}
