import type { QuestionAttempt } from '../contexts/QuestionPerformanceContext'
import { modules } from '../data/modules'
import { getSubjectBySlug } from '../data/subjects'
import type { ApExamMeta, ApExamQuestion } from '../types/apExam'
import type { Exercise, Question, Test } from '../types/content'
import type { WisoExamQuestion } from '../types/wisoExam'

const withAnchor = (path: string, id: string) => `${path.split('#')[0]}#${id}`

const catalogLabels = (path: string) => {
  const mod = modules.find((candidate) =>
    candidate.topics.some((topic) => {
      const subject = getSubjectBySlug(candidate.subjectSlug)
      const topicPath = candidate.slug === 'it-technical'
        ? `/it/it-technical/${topic.slug}`
        : `${subject?.path}/${candidate.slug}/${topic.slug}`
      return topicPath === path
    }),
  )
  return {
    subjectLabel: mod ? getSubjectBySlug(mod.subjectSlug)?.name : undefined,
    moduleLabel: mod?.title,
  }
}

export function lessonExerciseAttempt(exercise: Exercise, path: string, correct: boolean): QuestionAttempt {
  const labels = catalogLabels(path)
  return {
    questionKey: `lesson_exercise:${path}:${exercise.id}`,
    questionId: exercise.id,
    questionType: 'lesson_exercise',
    sourceId: exercise.topicSlug,
    title: exercise.question,
    ...labels,
    contentPath: withAnchor(path, `exercise-${exercise.id}`),
    questionData: {
      prompt: exercise.question,
      type: exercise.type,
      options: exercise.options,
      correctAnswer: exercise.correctAnswer,
      explanation: exercise.explanation,
    },
    correct,
  }
}

export function lessonTestAttempt(question: Question, test: Test, path: string, correct: boolean): QuestionAttempt {
  const mod = modules.find((candidate) => candidate.slug === test.moduleSlug && candidate.subjectSlug === test.subjectSlug)
  return {
    questionKey: `lesson_test:${path}:${test.id}:${question.id}`,
    questionId: question.id,
    questionType: 'lesson_test',
    sourceId: test.id,
    title: question.question,
    subjectLabel: getSubjectBySlug(test.subjectSlug)?.name,
    moduleLabel: mod?.title,
    contentPath: withAnchor(path, `test-${test.id}`),
    questionData: {
      prompt: question.question,
      type: question.type,
      options: question.options,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation,
    },
    correct,
  }
}

export function apExamAttempt(question: ApExamQuestion, exam: ApExamMeta, _path: string, correct: boolean): QuestionAttempt {
  return {
    questionKey: `ap_exam:${question.examId}:${question.id}`,
    questionId: question.id,
    questionType: 'ap_exam',
    sourceId: question.examId,
    title: question.question,
    subjectLabel: 'Prüfungsvorbereitung',
    moduleLabel: `${exam.area} · ${exam.label}`,
    contentPath: `/pruefungsvorbereitung/it-ap/${exam.id}/uebung#${question.id}`,
    questionData: {
      prompt: question.question,
      type: 'self-assessment',
      modelSolution: question.modelSolution,
      scenario: question.scenario,
      referenceText: question.referenceText,
    },
    correct,
  }
}

export function wisoExamAttempt(question: WisoExamQuestion, examLabel: string, _path: string, correct: boolean): QuestionAttempt {
  return {
    questionKey: `wiso_exam:${question.examId}:${question.id}`,
    questionId: question.id,
    questionType: 'wiso_exam',
    sourceId: question.examId,
    title: question.question,
    subjectLabel: 'Wirtschaft & Gesellschaft',
    moduleLabel: examLabel,
    contentPath: `/pruefungsvorbereitung/wirtschaft-gesellschaft/wiso-ihk/uebung?exam=${encodeURIComponent(question.examId)}&question=${encodeURIComponent(question.id)}#${question.id}`,
    questionData: {
      prompt: question.question,
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
