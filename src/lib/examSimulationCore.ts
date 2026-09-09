import type { QuestionAttempt, TrackedQuestionType } from '../contexts/QuestionPerformanceContext'

export type ExamMode = 'wiso_mixed' | 'lesson_tests'

export interface SimulationQuestion {
  questionKey: string
  questionId: string
  questionType: TrackedQuestionType
  sourceId: string
  title: string
  subjectLabel?: string
  moduleLabel?: string
  contentPath: string
  type: string
  options?: { id: string; text: string }[]
  correctAnswer: string | string[]
  explanation?: string
  scenario?: string
  referenceText?: string
}

export interface ActiveExamSession {
  id: string
  userId: string
  mode: ExamMode
  label: string
  questions: SimulationQuestion[]
  answers: Record<string, string[]>
  startedAt: string
  endAt: string
  durationSeconds: number
  submittedAt?: string
  submissionReason?: 'manual' | 'timeout'
}

export interface ExamResultData {
  questions: SimulationQuestion[]
  answers: Record<string, string[]>
}

export function remainingExamSeconds(session: ActiveExamSession, now = Date.now()) {
  return Math.max(0, Math.ceil((Date.parse(session.endAt) - now) / 1000))
}

export function freezeExam(session: ActiveExamSession, reason: 'manual' | 'timeout', now = Date.now()): ActiveExamSession {
  if (session.submittedAt) return session
  return {
    ...session,
    submittedAt: new Date(Math.min(now, Date.parse(session.endAt))).toISOString(),
    submissionReason: now >= Date.parse(session.endAt) ? 'timeout' : reason,
  }
}

export const examPresets: Record<ExamMode, { label: string; description: string; counts: number[]; secondsPerQuestion: number }> = {
  wiso_mixed: {
    label: 'WISO Prüfungsmix',
    description: 'Automatisch bewertbare Fragen aus vorhandenen WISO-Prüfungen.',
    counts: [10, 20, 30],
    secondsPerQuestion: 120,
  },
  lesson_tests: {
    label: 'Lernbereich-Testmix',
    description: 'Automatisch bewertbare Übungen und Testfragen aus vorhandenen Lernbereichen.',
    counts: [10, 20],
    secondsPerQuestion: 90,
  },
}

export function isSimulationAnswerCorrect(question: SimulationQuestion, answer: string[]) {
  const expected = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
  if (!question.options?.length) {
    return (answer[0] ?? '').trim().toLocaleLowerCase('de-DE') === (expected[0] ?? '').trim().toLocaleLowerCase('de-DE')
  }
  const expectedSet = new Set(expected)
  return new Set(answer).size === expectedSet.size && answer.length === expectedSet.size && answer.every((value) => expectedSet.has(value))
}

export function toPerformanceAttempt(question: SimulationQuestion, correct: boolean): QuestionAttempt {
  return {
    questionKey: question.questionKey,
    questionId: question.questionId,
    questionType: question.questionType,
    sourceId: question.sourceId,
    title: question.title,
    subjectLabel: question.subjectLabel,
    moduleLabel: question.moduleLabel,
    contentPath: question.contentPath,
    questionData: {
      prompt: question.title,
      type: question.type,
      options: question.options,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
      scenario: question.scenario,
      referenceText: question.referenceText,
    },
    correct,
  }
}
