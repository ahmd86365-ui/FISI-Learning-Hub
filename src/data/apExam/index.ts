import type { ApArea, ApExamMeta, ApExamQuestion } from '../../types/apExam'

import { ap1_2021HerbstMeta, ap1_2021HerbstQuestions } from './ap1_2021Herbst'
import { ap1_2022FruehjahrMeta, ap1_2022FruehjahrQuestions } from './ap1_2022Fruehjahr'
import { ap1_2022HerbstMeta, ap1_2022HerbstQuestions } from './ap1_2022Herbst'
import { ap1_2023FruehjahrMeta, ap1_2023FruehjahrQuestions } from './ap1_2023Fruehjahr'
import { ap1_2023HerbstMeta, ap1_2023HerbstQuestions } from './ap1_2023Herbst'
import { ap1_2024FruehjahrMeta, ap1_2024FruehjahrQuestions } from './ap1_2024Fruehjahr'
import { ap1_2024HerbstMeta, ap1_2024HerbstQuestions } from './ap1_2024Herbst'
import { ap1_2025HerbstMeta, ap1_2025HerbstQuestions } from './ap1_2025Herbst'

import { ap2SiT1_2021WinterMeta, ap2SiT1_2021WinterQuestions } from './ap2SiT1_2021Winter'
import { ap2SiT1_2022SommerMeta, ap2SiT1_2022SommerQuestions } from './ap2SiT1_2022Sommer'
import { ap2SiT1_2023SommerMeta, ap2SiT1_2023SommerQuestions } from './ap2SiT1_2023Sommer'
import { ap2SiT1_2023WinterMeta, ap2SiT1_2023WinterQuestions } from './ap2SiT1_2023Winter'
import { ap2SiT1_2024SommerMeta, ap2SiT1_2024SommerQuestions } from './ap2SiT1_2024Sommer'
import { ap2SiT1_2024WinterMeta, ap2SiT1_2024WinterQuestions } from './ap2SiT1_2024Winter'
import { ap2SiT1_2025SommerMeta, ap2SiT1_2025SommerQuestions } from './ap2SiT1_2025Sommer'
import { ap2SiT1_2025WinterMeta, ap2SiT1_2025WinterQuestions } from './ap2SiT1_2025Winter'
import { ap2SiT1_2026SommerMeta, ap2SiT1_2026SommerQuestions } from './ap2SiT1_2026Sommer'

import { ap2SiT2_2021WinterMeta, ap2SiT2_2021WinterQuestions } from './ap2SiT2_2021Winter'
import { ap2SiT2_2022SommerMeta, ap2SiT2_2022SommerQuestions } from './ap2SiT2_2022Sommer'
import { ap2SiT2_2023SommerMeta, ap2SiT2_2023SommerQuestions } from './ap2SiT2_2023Sommer'
import { ap2SiT2_2023WinterMeta, ap2SiT2_2023WinterQuestions } from './ap2SiT2_2023Winter'
import { ap2SiT2_2024SommerMeta, ap2SiT2_2024SommerQuestions } from './ap2SiT2_2024Sommer'
import { ap2SiT2_2024WinterMeta, ap2SiT2_2024WinterQuestions } from './ap2SiT2_2024Winter'
import { ap2SiT2_2025SommerMeta, ap2SiT2_2025SommerQuestions } from './ap2SiT2_2025Sommer'
import { ap2SiT2_2025WinterMeta, ap2SiT2_2025WinterQuestions } from './ap2SiT2_2025Winter'
import { ap2SiT2_2026SommerMeta, ap2SiT2_2026SommerQuestions } from './ap2SiT2_2026Sommer'

/**
 * AP1 / AP2 (Systemintegration) exam-preparation data. Every question here
 * is transcribed verbatim from real IHK exam papers (see
 * `src/types/apExam.ts`) — kept entirely separate from the ordinary IT
 * lesson content in `src/data/itGrundlagen/` etc. To add a newly released
 * exam PDF: create a file following the existing ones as a template, then
 * add its meta/questions to the two lists below — nothing else in the app
 * needs to change.
 */
const examMetas: ApExamMeta[] = [
  ap1_2021HerbstMeta,
  ap1_2022FruehjahrMeta,
  ap1_2022HerbstMeta,
  ap1_2023FruehjahrMeta,
  ap1_2023HerbstMeta,
  ap1_2024FruehjahrMeta,
  ap1_2024HerbstMeta,
  ap1_2025HerbstMeta,

  ap2SiT1_2021WinterMeta,
  ap2SiT1_2022SommerMeta,
  ap2SiT1_2023SommerMeta,
  ap2SiT1_2023WinterMeta,
  ap2SiT1_2024SommerMeta,
  ap2SiT1_2024WinterMeta,
  ap2SiT1_2025SommerMeta,
  ap2SiT1_2025WinterMeta,
  ap2SiT1_2026SommerMeta,

  ap2SiT2_2021WinterMeta,
  ap2SiT2_2022SommerMeta,
  ap2SiT2_2023SommerMeta,
  ap2SiT2_2023WinterMeta,
  ap2SiT2_2024SommerMeta,
  ap2SiT2_2024WinterMeta,
  ap2SiT2_2025SommerMeta,
  ap2SiT2_2025WinterMeta,
  ap2SiT2_2026SommerMeta,
]

const questionsByExam: Record<string, ApExamQuestion[]> = {
  [ap1_2021HerbstMeta.id]: ap1_2021HerbstQuestions,
  [ap1_2022FruehjahrMeta.id]: ap1_2022FruehjahrQuestions,
  [ap1_2022HerbstMeta.id]: ap1_2022HerbstQuestions,
  [ap1_2023FruehjahrMeta.id]: ap1_2023FruehjahrQuestions,
  [ap1_2023HerbstMeta.id]: ap1_2023HerbstQuestions,
  [ap1_2024FruehjahrMeta.id]: ap1_2024FruehjahrQuestions,
  [ap1_2024HerbstMeta.id]: ap1_2024HerbstQuestions,
  [ap1_2025HerbstMeta.id]: ap1_2025HerbstQuestions,

  [ap2SiT1_2021WinterMeta.id]: ap2SiT1_2021WinterQuestions,
  [ap2SiT1_2022SommerMeta.id]: ap2SiT1_2022SommerQuestions,
  [ap2SiT1_2023SommerMeta.id]: ap2SiT1_2023SommerQuestions,
  [ap2SiT1_2023WinterMeta.id]: ap2SiT1_2023WinterQuestions,
  [ap2SiT1_2024SommerMeta.id]: ap2SiT1_2024SommerQuestions,
  [ap2SiT1_2024WinterMeta.id]: ap2SiT1_2024WinterQuestions,
  [ap2SiT1_2025SommerMeta.id]: ap2SiT1_2025SommerQuestions,
  [ap2SiT1_2025WinterMeta.id]: ap2SiT1_2025WinterQuestions,
  [ap2SiT1_2026SommerMeta.id]: ap2SiT1_2026SommerQuestions,

  [ap2SiT2_2021WinterMeta.id]: ap2SiT2_2021WinterQuestions,
  [ap2SiT2_2022SommerMeta.id]: ap2SiT2_2022SommerQuestions,
  [ap2SiT2_2023SommerMeta.id]: ap2SiT2_2023SommerQuestions,
  [ap2SiT2_2023WinterMeta.id]: ap2SiT2_2023WinterQuestions,
  [ap2SiT2_2024SommerMeta.id]: ap2SiT2_2024SommerQuestions,
  [ap2SiT2_2024WinterMeta.id]: ap2SiT2_2024WinterQuestions,
  [ap2SiT2_2025SommerMeta.id]: ap2SiT2_2025SommerQuestions,
  [ap2SiT2_2025WinterMeta.id]: ap2SiT2_2025WinterQuestions,
  [ap2SiT2_2026SommerMeta.id]: ap2SiT2_2026SommerQuestions,
}

/** Chronological ordering within a year — covers both AP1's and AP2's period vocabularies. */
const periodOrder: Record<string, number> = { Frühjahr: 0, Sommer: 0, Herbst: 1, Winter: 1 }

function sortExams(exams: ApExamMeta[]): ApExamMeta[] {
  return [...exams].sort(
    (a, b) => a.year - b.year || (periodOrder[a.period] ?? 0) - (periodOrder[b.period] ?? 0),
  )
}

/** All exams, optionally filtered to one area (`AP1`, `AP2_SI_T1`, `AP2_SI_T2`), sorted chronologically. */
export function getAllApExams(area?: ApArea): ApExamMeta[] {
  const filtered = area ? examMetas.filter((e) => e.area === area) : examMetas
  return sortExams(filtered)
}

export function getApExamMeta(examId: string): ApExamMeta | undefined {
  return examMetas.find((e) => e.id === examId)
}

export function getApExamQuestions(examId: string): ApExamQuestion[] {
  return questionsByExam[examId] ?? []
}
