import type { ApExamQuestion } from '../types/apExam'

/**
 * AP1/AP2 questions are free-response essay answers graded against a
 * model-answer rubric, not multiple-choice — there is no honest way to
 * auto-grade them (see `types/apExam.ts`). Self-assessment lets the learner
 * compare their own written answer against the revealed model solution and
 * rate themselves, which then feeds into an accumulated points score.
 */
export type ApSelfAssessment = 'correct' | 'partial' | 'incorrect'

export function apQuestionLabel(question: ApExamQuestion): string {
  return question.subPart
    ? `Aufgabe ${question.questionNumber}${question.subPart}`
    : `Aufgabe ${question.questionNumber}`
}

/** Whether a question has any solution to compare against (official or unofficial) — 'unclear' never does. */
export function hasApSolution(question: ApExamQuestion): boolean {
  return question.answerStatus !== 'unclear'
}

/** Points earned for a question given a self-assessment. 0 until the learner has assessed it. */
export function apPointsEarned(question: ApExamQuestion, assessment: ApSelfAssessment | undefined): number {
  if (!assessment || question.maxPoints === undefined) return 0
  if (assessment === 'correct') return question.maxPoints
  if (assessment === 'partial') return question.maxPoints / 2
  return 0
}

/** Total achievable points across scorable (non-'unclear') questions that carry a known point value. */
export function apTotalScorablePoints(questions: ApExamQuestion[]): number {
  return questions.filter(hasApSolution).reduce((sum, q) => sum + (q.maxPoints ?? 0), 0)
}

export function sortApQuestionsByOriginalOrder(questions: ApExamQuestion[]): ApExamQuestion[] {
  return [...questions].sort((a, b) => {
    if (a.questionNumber !== b.questionNumber) return a.questionNumber - b.questionNumber
    return (a.subPart ?? '').localeCompare(b.subPart ?? '')
  })
}
