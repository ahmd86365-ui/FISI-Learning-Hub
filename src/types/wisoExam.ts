import type { AnswerOption } from './content'

/**
 * Data model for the WISO IHK exam-preparation area. Deliberately separate
 * from the `Topic`/`Exercise`/`Test` model in `content.ts`: these are real,
 * unaltered IHK exam questions sourced from scanned ZPA exam PDFs
 * (`/Wiso_Prüfungvorbereitung` on the author's machine, not part of this
 * repo), not lesson content, and must never be mixed with or silently
 * "corrected" against the normal WISO lessons. Every question keeps a
 * traceable link back to its source PDF/page so material can be verified
 * against the original at any time.
 */

export type ExamPeriod = 'Sommer' | 'Winter'

/** One IHK WISO exam paper (a "Termin"), e.g. "Sommer 2020". */
export interface WisoExamMeta {
  /** e.g. 'wiso-2020-sommer' */
  id: string
  year: number
  period: ExamPeriod
  /** Display label, e.g. "Sommer 2020". */
  label: string
  /** Printed exam date, if legible on the cover page. */
  examDate?: string
  /** Ausbildungsberuf-Kennziffern printed on the cover/solution page. */
  courseCodes?: string
  /** Filename of the source exam PDF (question paper). */
  sourceExamPdf: string
  /** Filename of the source solution PDF, if one exists for this exam. */
  sourceSolutionPdf?: string
  /** False when no official solution PDF was available at all (e.g. a very recent exam). */
  hasOfficialSolution: boolean
  /** Number of top-level "Aufgabe" tasks in the exam (usually 30). */
  taskCount: number
  durationMinutes?: number
  totalPoints?: number
}

export type WisoAnswerStatus = 'confirmed' | 'unclear'
export type WisoQuestionType = 'single-choice' | 'multiple-choice' | 'open-answer'

/**
 * One answerable item from a WISO exam. A single printed "Aufgabe" becomes
 * several `WisoExamQuestion`s when it has lettered sub-parts (a, b, c, …) —
 * each sub-part keeps the shared `questionNumber` plus its own `subPart`.
 */
export interface WisoExamQuestion {
  /** e.g. 'wiso-2024-winter-q10' or 'wiso-2024-winter-q17-c' */
  id: string
  examId: string
  /** The original "Aufgabe Nr." from the exam paper. */
  questionNumber: number
  /** Letter of the sub-part (a, b, c, …), if this Aufgabe has lettered sub-questions. */
  subPart?: string
  /** Best-effort thematic label (e.g. "Berufsbildungsgesetz"); omitted when not clearly identifiable. */
  topic?: string
  /** Shared "Situation"/"Ausgangssituation" scenario text this question belongs to, if any. */
  scenario?: string
  /** Quoted law excerpt/reference table printed alongside the question, if needed to answer it. */
  referenceText?: string
  /** The question text itself (including the sub-part's specific wording, if any). */
  question: string
  type: WisoQuestionType
  /** Present for single-choice/multiple-choice; option id is the printed digit, e.g. '1'. */
  options?: AnswerOption[]
  /**
   * Option id(s) for choice questions, or the raw expected value for
   * open-answer questions (e.g. "244,80", "06:00"). Left `undefined` when
   * `answerStatus` is 'unclear' — never a guessed value.
   */
  correctAnswer?: string | string[]
  /** 'confirmed' = taken directly from the official ZPA solution. 'unclear' = no reliable source answer exists; must be shown as such in the UI, never silently guessed. */
  answerStatus: WisoAnswerStatus
  /** Only set when directly grounded in printed reference material (e.g. a quoted law paragraph); never fabricated reasoning. */
  explanation?: string
  /** Page number in the source exam PDF. */
  sourcePage?: number
}
