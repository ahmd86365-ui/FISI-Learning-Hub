import { modules } from '../data/modules'
import type {
  AnswerOption,
  Difficulty,
  Exercise,
  FlashcardQuestion,
  LessonFlashcardBank,
  TableBlock,
  Topic,
} from '../types/content'
import { classifyExercise, modelAnswerFromExplanation } from './exerciseConsolidation'

const MAX_QUESTIONS_PER_LESSON = 40

const clean = (value: string) => value.replace(/\s+/g, ' ').trim()
const unique = <T,>(values: T[]) => [...new Set(values)]

function stableContentKey(value: string) {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function exerciseQuestion(lesson: Topic, exercise: Exercise): FlashcardQuestion | null {
  if (classifyExercise(exercise) === 'practical') return null
  if (exercise.correctAnswer === undefined) {
    const modelAnswer = modelAnswerFromExplanation(exercise)
    if (!modelAnswer) return null
    return {
      id: `fc-${lesson.id}-exercise-${exercise.id}`,
      lessonId: lesson.id,
      type: 'self-assessment',
      question: exercise.question,
      correctAnswer: modelAnswer,
      explanation: modelAnswer,
      difficulty: exercise.difficulty,
      tags: ['Migrierte Wissensfrage'],
    }
  }
  const supported = ['single-choice', 'multiple-choice', 'true-false', 'text'].includes(exercise.type)
  if (!supported) return null

  const type = exercise.type === 'text'
    ? 'short-answer'
    : exercise.type === 'true-false'
      ? 'true-false'
      : 'multiple-choice'

  return {
    id: `fc-${lesson.id}-exercise-${exercise.id}`,
    lessonId: lesson.id,
    type,
    question: exercise.question,
    answers: exercise.options,
    correctAnswer: exercise.correctAnswer,
    explanation: exercise.explanation ?? `Die in der Lektion hinterlegte richtige Antwort lautet: ${Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer.join(', ') : exercise.options?.find((option) => option.id === exercise.correctAnswer)?.text ?? exercise.correctAnswer}.`,
    difficulty: exercise.difficulty,
    tags: ['Lektionsübung'],
    fixedAnswerOrder: type === 'true-false',
  }
}

function tableQuestions(lesson: Topic, table: TableBlock): FlashcardQuestion[] {
  if (table.headers.length < 2 || table.rows.length < 2) return []
  const result: FlashcardQuestion[] = []
  const rowLabels = table.rows.map((row) => clean(row[0] ?? '')).filter(Boolean)

  for (let column = 1; column < table.headers.length; column += 1) {
    const columnValues = table.rows.map((row) => clean(row[column] ?? '')).filter(Boolean)
    if (unique(columnValues).length < 2) continue

    table.rows.forEach((row) => {
      const label = clean(row[0] ?? '')
      const correct = clean(row[column] ?? '')
      if (!label || !correct) return
      const distractors = unique(columnValues.filter((value) => value !== correct)).slice(0, 3)
      if (distractors.length === 0) return
      const answers = [correct, ...distractors].map((text, index): AnswerOption => ({
        id: `a${index}`,
        text,
      }))
      result.push({
        id: `fc-${lesson.id}-table-${stableContentKey(`${table.headers[column]}\u0000${label}\u0000${correct}`)}`,
        lessonId: lesson.id,
        type: 'multiple-choice',
        question: `Welche Angabe gehört bei „${label}“ zur Kategorie „${clean(table.headers[column])}“?`,
        answers,
        correctAnswer: 'a0',
        explanation: `In der Lektion wird „${label}“ in der Kategorie „${clean(table.headers[column])}“ mit „${correct}“ beschrieben.`,
        difficulty: column === 1 ? 'easy' : 'medium',
        tags: [clean(table.headers[0]), clean(table.headers[column])],
      })
    })

    if (unique(rowLabels).length >= 3) {
      table.rows.forEach((row) => {
        const label = clean(row[0] ?? '')
        const value = clean(row[column] ?? '')
        if (!label || !value || columnValues.filter((entry) => entry === value).length !== 1) return
        const answers = [label, ...unique(rowLabels.filter((entry) => entry !== label)).slice(0, 3)]
          .map((text, index): AnswerOption => ({ id: `a${index}`, text }))
        result.push({
          id: `fc-${lesson.id}-table-reverse-${stableContentKey(`${table.headers[column]}\u0000${value}\u0000${label}`)}`,
          lessonId: lesson.id,
          type: 'multiple-choice',
          question: `Welcher Eintrag gehört in der Lektion zu „${value}“?`,
          answers,
          correctAnswer: 'a0',
          explanation: `„${value}“ ist in der Tabelle dem Eintrag „${label}“ zugeordnet.`,
          difficulty: 'medium',
          tags: [clean(table.headers[0]), clean(table.headers[column])],
        })
      })
    }
  }
  return result
}

function statementQuestions(lesson: Topic): FlashcardQuestion[] {
  const statements = lesson.content.flatMap((block) => {
    if (block.type === 'key-points') return block.items
    if (block.type === 'list') return block.items
    if (block.type === 'paragraph' || block.type === 'note' || block.type === 'warning' || block.type === 'exam-tip') {
      return block.text.split(/(?<=[.!?])\s+/)
    }
    if (block.type === 'example' || block.type === 'insight') return block.text.split(/(?<=[.!?])\s+/)
    if (block.type === 'code') {
      return block.code.split('\n')
        .map((line) => line.match(/^\s*\/\/\s*(.+)$/)?.[1] ?? '')
        .filter((line) => /[A-Za-zÄÖÜäöüß]/.test(line) && !/^[-=]+$/.test(line))
    }
    return []
  }).map(clean).filter((text) => text.length >= 20 && text.length <= 260)

  return unique(statements).slice(0, 15).map((statement) => ({
    id: `fc-${lesson.id}-statement-${stableContentKey(statement)}`,
    lessonId: lesson.id,
    type: 'true-false',
    question: statement,
    answers: [{ id: 'true', text: 'Richtig' }, { id: 'false', text: 'Falsch' }],
    correctAnswer: 'true',
    explanation: `Diese Aussage entspricht dem Merksatz der Lektion: ${statement}`,
    difficulty: 'easy' as Difficulty,
    tags: ['Merksatz'],
    fixedAnswerOrder: true,
  }))
}

function deduplicate(questions: FlashcardQuestion[]) {
  const prompts = new Set<string>()
  const ids = new Set<string>()
  return questions.filter((question) => {
    const prompt = clean(question.question).toLocaleLowerCase('de-DE')
    if (ids.has(question.id) || prompts.has(prompt)) return false
    ids.add(question.id)
    prompts.add(prompt)
    return true
  })
}

export function createFlashcardBank(topic: Topic, subjectSlug: LessonFlashcardBank['subjectSlug']): LessonFlashcardBank {
  const fromExercises = topic.exercises.map((exercise) => exerciseQuestion(topic, exercise)).filter(Boolean) as FlashcardQuestion[]
  const fromTables = topic.content.flatMap((block) => block.type === 'table' ? tableQuestions(topic, block) : [])
  const combined = deduplicate([...fromExercises, ...fromTables])
  const withStatements = combined.length >= 10 ? combined : deduplicate([...combined, ...statementQuestions(topic)])
  return {
    lessonId: topic.id,
    lessonTitle: topic.title,
    moduleSlug: topic.moduleSlug,
    subjectSlug,
    questions: withStatements.slice(0, MAX_QUESTIONS_PER_LESSON),
  }
}

export const flashcardBanks: LessonFlashcardBank[] = modules.flatMap((module) =>
  module.topics.map((topic) => createFlashcardBank(topic, module.subjectSlug)),
)

export const getFlashcardBank = (lessonId: string | undefined) =>
  flashcardBanks.find((bank) => bank.lessonId === lessonId)

export const getLessonForFlashcards = (lessonId: string | undefined) => {
  for (const module of modules) {
    const topic = module.topics.find((candidate) => candidate.id === lessonId)
    if (topic) return { module, topic }
  }
  return undefined
}

export function lessonPath(subjectPath: string, moduleSlug: string, topicSlug: string) {
  return moduleSlug === 'it-technical'
    ? `/it/it-technical/${topicSlug}`
    : `${subjectPath}/${moduleSlug}/${topicSlug}`
}

export function shuffle<T>(items: T[], random = Math.random): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1))
    ;[copy[index], copy[target]] = [copy[target], copy[index]]
  }
  return copy
}

export function prepareQuestion(question: FlashcardQuestion): FlashcardQuestion {
  if (!question.answers || question.fixedAnswerOrder) return question
  return { ...question, answers: shuffle(question.answers) }
}

export function normalizeShortAnswer(value: string) {
  return value.trim().toLocaleLowerCase('de-DE').replace(/\s+/g, ' ')
}

export function isFlashcardAnswerCorrect(question: FlashcardQuestion, answer: string | string[]) {
  const given = Array.isArray(answer) ? answer : [answer]
  if (question.type === 'self-assessment') return given[0] === 'known'
  const correct = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
  if (question.type === 'short-answer') {
    return correct.some((entry) => normalizeShortAnswer(entry) === normalizeShortAnswer(given[0] ?? ''))
  }
  const expected = new Set(correct)
  return given.length === expected.size && given.every((entry) => expected.has(entry))
}
