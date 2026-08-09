import { Cpu } from 'lucide-react'
import type { Module, SubjectSlug } from '../types/content'
import { vonNeumannTopic } from './itGrundlagen/vonNeumann'
import { zahlensystemeTopic } from './itGrundlagen/zahlensysteme'
import { informationseinheitenTopic } from './itGrundlagen/informationseinheiten'
import { codesystemeTopic } from './itGrundlagen/codesysteme'
import { digitaltechnikTopic } from './itGrundlagen/digitaltechnik'
import { elektrotechnikTopic } from './itGrundlagen/elektrotechnik'
import { bildgroesseTopic } from './itGrundlagen/bildgroesse'
import { audiogroesseTopic } from './itGrundlagen/audiogroesse'

/**
 * IT Grundlagen — the first real content module, built from the school's
 * "1_IT_Grundlagen" source files (Von-Neumann-Architektur, Zahlensysteme,
 * Informationseinheiten, Codesysteme, Digitaltechnik) plus the
 * Elektrotechnik / Bildgröße / Audiogröße material supplied directly for
 * this platform.
 *
 * `test` is the module-wide "Gesamtprüfung": the architecture (scoped test,
 * random-subset drawing via `questionPoolSize`) is wired up, but its
 * `questions` pool starts empty on purpose — combining real questions from
 * across all eight topics is future work, and nothing here should be
 * fabricated to fill the interface. Populate `questions` here once topic
 * question pools exist; no other file needs to change.
 */
const itGrundlagenModule: Module = {
  id: 'mod-it-grundlagen',
  slug: 'it-grundlagen',
  subjectSlug: 'it',
  title: 'IT Grundlagen',
  description:
    'Rechnerarchitektur, Zahlensysteme, Codesysteme, Digitaltechnik und Elektrotechnik – die technischen Grundlagen der Fachinformatiker-Ausbildung.',
  icon: Cpu,
  order: 1,
  topics: [
    vonNeumannTopic,
    zahlensystemeTopic,
    informationseinheitenTopic,
    codesystemeTopic,
    digitaltechnikTopic,
    elektrotechnikTopic,
    bildgroesseTopic,
    audiogroesseTopic,
  ],
  test: {
    id: 'test-it-grundlagen-gesamtpruefung',
    scope: 'module',
    subjectSlug: 'it',
    moduleSlug: 'it-grundlagen',
    title: 'IT Grundlagen – Gesamtprüfung',
    questions: [],
    questionPoolSize: 20,
  },
}

export const modules: Module[] = [itGrundlagenModule]

export function getModulesBySubject(subjectSlug: SubjectSlug): Module[] {
  return modules.filter((m) => m.subjectSlug === subjectSlug).sort((a, b) => a.order - b.order)
}

export function getModuleBySlug(subjectSlug: SubjectSlug, moduleSlug: string): Module | undefined {
  return modules.find((m) => m.subjectSlug === subjectSlug && m.slug === moduleSlug)
}
