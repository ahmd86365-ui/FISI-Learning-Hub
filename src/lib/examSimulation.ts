import { getAllWisoQuestions } from '../data/wisoExam'
import { modules } from '../data/modules'
import { getSubjectBySlug } from '../data/subjects'
import { lessonExerciseAttempt } from './questionTracking'
import type { ExamMode, SimulationQuestion } from './examSimulationCore'

export * from './examSimulationCore'

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
