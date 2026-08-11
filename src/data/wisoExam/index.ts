import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'
import { wisoExam2020SommerMeta, wisoExam2020SommerQuestions } from './wiso2020Sommer'
import { wisoExam2020WinterMeta, wisoExam2020WinterQuestions } from './wiso2020Winter'
import { wisoExam2021SommerMeta, wisoExam2021SommerQuestions } from './wiso2021Sommer'
import { wisoExam2021WinterMeta, wisoExam2021WinterQuestions } from './wiso2021Winter'
import { wisoExam2022SommerMeta, wisoExam2022SommerQuestions } from './wiso2022Sommer'
import { wisoExam2024SommerMeta, wisoExam2024SommerQuestions } from './wiso2024Sommer'
import { wisoExam2024WinterMeta, wisoExam2024WinterQuestions } from './wiso2024Winter'
import { wisoExam2025WinterMeta, wisoExam2025WinterQuestions } from './wiso2025Winter'

/**
 * WISO IHK exam-preparation data. Every question here is transcribed
 * verbatim from real ZPA Nord-West IHK exam papers (see
 * `src/types/wisoExam.ts`) — kept entirely separate from the ordinary WISO
 * lesson content in `src/data/wiso/`. To add a newly released exam PDF:
 * create `wisoYYYY{Sommer,Winter}.ts` following the existing files as a
 * template, then add its meta/questions to the two arrays below — nothing
 * else in the app needs to change.
 */
const examMetas: WisoExamMeta[] = [
  wisoExam2020SommerMeta,
  wisoExam2020WinterMeta,
  wisoExam2021SommerMeta,
  wisoExam2021WinterMeta,
  wisoExam2022SommerMeta,
  wisoExam2024SommerMeta,
  wisoExam2024WinterMeta,
  wisoExam2025WinterMeta,
]

const questionsByExam: Record<string, WisoExamQuestion[]> = {
  [wisoExam2020SommerMeta.id]: wisoExam2020SommerQuestions,
  [wisoExam2020WinterMeta.id]: wisoExam2020WinterQuestions,
  [wisoExam2021SommerMeta.id]: wisoExam2021SommerQuestions,
  [wisoExam2021WinterMeta.id]: wisoExam2021WinterQuestions,
  [wisoExam2022SommerMeta.id]: wisoExam2022SommerQuestions,
  [wisoExam2024SommerMeta.id]: wisoExam2024SommerQuestions,
  [wisoExam2024WinterMeta.id]: wisoExam2024WinterQuestions,
  [wisoExam2025WinterMeta.id]: wisoExam2025WinterQuestions,
}

const periodOrder: Record<WisoExamMeta['period'], number> = { Sommer: 0, Winter: 1 }

export function getAllWisoExams(): WisoExamMeta[] {
  return [...examMetas].sort((a, b) => a.year - b.year || periodOrder[a.period] - periodOrder[b.period])
}

export function getWisoExamMeta(examId: string): WisoExamMeta | undefined {
  return examMetas.find((e) => e.id === examId)
}

export function getWisoExamQuestions(examId: string): WisoExamQuestion[] {
  return questionsByExam[examId] ?? []
}

export function getAllWisoQuestions(): WisoExamQuestion[] {
  return examMetas.flatMap((e) => questionsByExam[e.id] ?? [])
}

export function getWisoTopics(): string[] {
  const topics = new Set<string>()
  for (const q of getAllWisoQuestions()) {
    if (q.topic) topics.add(q.topic)
  }
  return Array.from(topics).sort((a, b) => a.localeCompare(b, 'de'))
}
