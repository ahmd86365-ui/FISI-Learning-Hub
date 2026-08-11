/**
 * Data model for the IT AP1 / AP2 exam-preparation area. Deliberately
 * separate from `wisoExam.ts`: AP1 and AP2 (Systemintegration) exam papers
 * are free-response/essay questions graded against a model-answer rubric
 * ("Lösungshinweise") that explicitly permits other correct alternatives —
 * not discrete multiple-choice with one fixed correct option like WISO.
 * There is therefore no honest way to auto-grade an answer here; scoring is
 * self-assessed by the learner against the revealed model answer, exactly
 * like working through a real IHK exam-prep workbook.
 *
 * Source: `/Pruefung/AP1` and `/Pruefung/AP2_SI` (Teil1 + Teil2) on the
 * author's machine, not part of this repo. AP2_AE, Katalog, and Wiso are
 * out of scope and never referenced here.
 */

export type ApArea = 'AP1' | 'AP2_SI_T1' | 'AP2_SI_T2'

/** How the model solution for an exam/question was sourced. */
export type ApAnswerStatus =
  /** From an official, publisher-branded Lösungshinweise PDF (ZPA / u-form Verlag). */
  | 'confirmed'
  /** From a "Kommentiert" file — someone's own filled-in answers on the blank exam form, not officially branded or verified. Must always be visibly labeled as such in the UI. */
  | 'unofficial'
  /** No solution source at all exists for this sitting; question text only. */
  | 'unclear'

/** One IHK exam paper (a "Termin"), e.g. "Herbst 2024" for AP1. */
export interface ApExamMeta {
  /** e.g. 'ap1-2024-herbst' */
  id: string
  area: ApArea
  year: number
  /** 'Frühjahr' | 'Herbst' for AP1; 'Sommer' | 'Winter' for AP2_SI. */
  period: string
  /** Display label, e.g. "Herbst 2024" or "Winter 2024/25". */
  label: string
  /** Printed exam date, if legible on the cover page. */
  examDate?: string
  /** Fixed Prüfungsbereich title, e.g. "Einrichten eines IT-gestützten Arbeitsplatzes". */
  examTitle?: string
  /** Ausbildungsberuf-Kennziffer printed on the cover, e.g. "1201". */
  courseCode?: string
  sourceExamPdf: string
  sourceSolutionPdf?: string
  /** Overall status of this exam's solution source — matches its questions' answerStatus. */
  solutionSource: ApAnswerStatus
  /** Number of top-level "Aufgabe" tasks, usually 4. */
  taskCount: number
  durationMinutes?: number
  totalPoints?: number
}

/**
 * One answerable item from an AP exam. A single printed "Aufgabe" becomes
 * several `ApExamQuestion`s when it has nested sub-parts (a, aa, ab, b, …)
 * — each keeps the shared `questionNumber` plus its own `subPart`, exactly
 * as printed (German exams nest up to two levels: "a" then "aa"/"ab").
 */
export interface ApExamQuestion {
  /** e.g. 'ap1-2024-herbst-q1-aa' */
  id: string
  examId: string
  /** The original "Aufgabe Nr." (1–4). */
  questionNumber: number
  /** Sub-part label as printed: 'a', 'aa', 'ab', 'b', … */
  subPart?: string
  /** Best-effort thematic label (e.g. "IT-Sicherheit", "VLAN"); omitted when not clearly identifiable. */
  topic?: string
  /** Shared "Situation"/"Ausgangssituation" scenario text this Aufgabe (or the whole exam) belongs to, if any. */
  scenario?: string
  /** Tables/diagrams/reference material printed alongside the question, needed to answer it. */
  referenceText?: string
  /** The question text itself (including the sub-part's specific wording). */
  question: string
  /** Points available for this specific sub-part, as printed. */
  maxPoints?: number
  /**
   * The official (or, when `answerStatus === 'unofficial'`, unverified)
   * model-answer text — transcribed faithfully, never invented. Undefined
   * when `answerStatus === 'unclear'`.
   */
  modelSolution?: string
  answerStatus: ApAnswerStatus
  /** Page number in the source exam PDF. */
  sourcePage?: number
}
