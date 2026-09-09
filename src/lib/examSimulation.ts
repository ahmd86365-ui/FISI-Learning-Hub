import { getAllWisoQuestions } from '../data/wisoExam'
import { modules } from '../data/modules'
import { getSubjectBySlug } from '../data/subjects'
import { lessonExerciseAttempt } from './questionTracking'
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

const lessonQuestions = (): SimulationQuestion[] => modules.flatMap((mod) => {
  const subject = getSubjectBySlug(mod.subjectSlug)
  const tests = [mod.test, ...mod.topics.map((topic) => topic.test)].filter(Boolean)
  const testQuestions = tests.flatMap((test) => {
    const sourcePath = test!.topicSlug
      ? `${subject!.path}/${mod.slug}/${test!.topicSlug}`
      : `${subject!.path}/${mod.slug}`
    return test!.questions.map((question) => ({
    questionKey: `lesson_test:${sourcePath}:${test!.id}:${question.id}`,
    questionId: question.id,
    questionType: 'lesson_test' as const,
    sourceId: test!.id,
    title: question.question,
    subjectLabel: subject?.name,
    moduleLabel: mod.title,
    contentPath: `${sourcePath}#test-${test!.id}`,
    type: question.type,
    options: question.options,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
  }))})
  const exercises = mod.topics.flatMap((topic) => {
    const path = `${subject!.path}/${mod.slug}/${topic.slug}`
    return topic.exercises
      .filter((exercise) => exercise.correctAnswer !== undefined && (
        ['single-choice', 'multiple-choice', 'true-false'].includes(exercise.type) && !!exercise.options?.length
        || exercise.type === 'text' && typeof exercise.correctAnswer === 'string'
      ))
      .map((exercise): SimulationQuestion => {
        const attempt = lessonExerciseAttempt(exercise, path, false)
        return {
          questionKey: attempt.questionKey, questionId: exercise.id, questionType: 'lesson_exercise',
          sourceId: attempt.sourceId, title: exercise.question, subjectLabel: subject?.name,
          moduleLabel: mod.title, contentPath: attempt.contentPath, type: exercise.type,
          options: exercise.options, correctAnswer: exercise.correctAnswer!, explanation: exercise.explanation,
        }
      })
  })
  return [...testQuestions, ...exercises]
})

const wisoQuestions = (): SimulationQuestion[] => getAllWisoQuestions()
  .filter((question) => question.answerStatus === 'confirmed' && question.correctAnswer !== undefined)
  .map((question) => ({
    questionKey: `wiso_exam:${question.examId}:${question.id}`,
    questionId: question.id,
    questionType: 'wiso_exam',
    sourceId: question.examId,
    title: question.question,
    subjectLabel: 'Wirtschaft & Gesellschaft',
    moduleLabel: question.topic,
    contentPath: `/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/uebung?exam=${encodeURIComponent(question.examId)}&question=${encodeURIComponent(question.id)}#${question.id}`,
    type: question.type,
    options: question.options,
    correctAnswer: question.correctAnswer!,
    explanation: question.explanation,
    scenario: question.scenario,
    referenceText: question.referenceText,
  }))

export const getExamPool = (mode: ExamMode) => mode === 'wiso_mixed' ? wisoQuestions() : lessonQuestions()

export function chooseQuestions(mode: ExamMode, count: number) {
  const pool = [...getExamPool(mode)]
  for (let index = pool.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1))
    ;[pool[index], pool[target]] = [pool[target], pool[index]]
  }
  return pool.slice(0, Math.min(count, pool.length))
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
