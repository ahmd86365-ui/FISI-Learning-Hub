import type { LucideIcon } from 'lucide-react'

export type AccentKey = 'brand' | 'amber' | 'teal' | 'rose'

export type SubjectSlug = 'it' | 'wirtschaft' | 'english' | 'pruefung'

/**
 * A top-level learning area. Phase 1 ships exactly four of these, all empty.
 * Phase 2 adds `Module`/`Topic` underneath — this shape is untouched so
 * nothing that already consumes `Subject` needs to change.
 */
export interface Subject {
  slug: SubjectSlug
  name: string
  tagline: string
  description: string
  path: string
  accent: AccentKey
  icon: LucideIcon
}

/**
 * A structural placeholder for a future exam-preparation section.
 * No exam content, questions, or modules exist yet — `status` communicates
 * that to the user until real content is wired in.
 */
export interface ExamSection {
  id: string
  title: string
  description: string
  accent: AccentKey
  icon: LucideIcon
  status: 'coming-soon'
}

/* -------------------------------------------------------------------------- */
/* Content hierarchy: Subject -> Module -> Topic (Lesson) -> content/exercises/test */
/* -------------------------------------------------------------------------- */

/**
 * Free-form, presentation-agnostic metadata a module may carry later (e.g.
 * an estimated scope or a source reference). Never rendered as progress or
 * statistics — purely descriptive, and entirely optional.
 */
export type ModuleMetadata = Record<string, string | number>

export interface Module {
  id: string
  slug: string
  subjectSlug: SubjectSlug
  title: string
  description: string
  icon?: LucideIcon
  order: number
  topics: Topic[]
  /** Module-wide test combining questions from multiple topics. */
  test?: Test
  metadata?: ModuleMetadata
}

export interface Topic {
  id: string
  slug: string
  moduleSlug: string
  title: string
  shortIntro?: string
  order: number
  content: ContentBlock[]
  keyPoints?: string[]
  exercises: Exercise[]
  test?: Test
}

/* Lesson content blocks ------------------------------------------------------ */

export interface HeadingBlock {
  type: 'heading'
  level: 2 | 3 | 4
  text: string
}

export interface ParagraphBlock {
  type: 'paragraph'
  text: string
}

export interface ListBlock {
  type: 'list'
  style: 'bullet' | 'numbered'
  items: string[]
}

export interface TableBlock {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export interface CodeBlock {
  type: 'code'
  language?: string
  code: string
}

export interface ImageBlock {
  type: 'image'
  src: string
  alt: string
  caption?: string
}

export interface DiagramBlock {
  type: 'diagram'
  src: string
  alt: string
  caption?: string
}

export interface ExampleBlock {
  type: 'example'
  title?: string
  text: string
}

export interface NoteBlock {
  type: 'note'
  text: string
}

export interface WarningBlock {
  type: 'warning'
  text: string
}

export interface KeyPointsBlock {
  type: 'key-points'
  items: string[]
}

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | TableBlock
  | CodeBlock
  | ImageBlock
  | DiagramBlock
  | ExampleBlock
  | NoteBlock
  | WarningBlock
  | KeyPointsBlock

/* Exercises & tests ----------------------------------------------------------- */

export type ExerciseType =
  | 'single-choice'
  | 'multiple-choice'
  | 'true-false'
  | 'text'
  | 'matching'
  | 'calculation'
  | 'technical-problem'

export type Difficulty = 'easy' | 'medium' | 'hard'

export interface AnswerOption {
  id: string
  text: string
}

/**
 * A practice exercise embedded directly in a topic/lesson — answered
 * inline with immediate feedback. Distinct from `Question`, which belongs
 * to a scored `Test` and can be pooled across topics.
 */
export interface Exercise {
  id: string
  topicSlug: string
  type: ExerciseType
  difficulty: Difficulty
  question: string
  options?: AnswerOption[]
  correctAnswer: string | string[]
  explanation?: string
}

/** A scored question belonging to a `Test`. */
export interface Question {
  id: string
  topicSlug: string
  type: ExerciseType
  difficulty: Difficulty
  question: string
  options?: AnswerOption[]
  correctAnswer: string | string[]
  explanation?: string
}

export type TestScope = 'topic' | 'module'

export interface Test {
  id: string
  scope: TestScope
  subjectSlug: SubjectSlug
  moduleSlug: string
  /** Present when `scope === 'topic'`. */
  topicSlug?: string
  title: string
  /** The full question pool this test draws from. */
  questions: Question[]
  /**
   * When set and smaller than `questions.length`, a fresh random subset of
   * this size is drawn from the pool each time the test is started, instead
   * of always showing every question — e.g. a module-wide "Gesamtprüfung"
   * combining topics can present a different 20-question selection each
   * attempt without needing a separate `Test` per combination.
   */
  questionPoolSize?: number
}

/** Client-side result of a completed test attempt — never persisted. */
export interface TestResult {
  testId: string
  totalQuestions: number
  correctCount: number
  scorePercent: number
  answers: Record<string, string[]>
}

/* Search ------------------------------------------------------------------------ */

/**
 * Placeholder shape for the search index. Walks the real content hierarchy
 * (subjects, modules, topics); results only ever reflect content that
 * actually exists — modules/topics are empty until real material is
 * imported, so `search()` returns nothing for them until then.
 */
export interface SearchResultItem {
  id: string
  title: string
  excerpt: string
  type: 'subject' | 'module' | 'lesson' | 'topic' | 'glossary' | 'exercise' | 'question' | 'exam'
  subject: SubjectSlug
  path: string
  /** Ancestor labels for display, e.g. ["IT", "Netzwerktechnik"]. */
  breadcrumb?: string[]
}
