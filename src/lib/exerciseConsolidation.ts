import type { Exercise } from '../types/content'

export type ExerciseClassification = 'knowledge-covered' | 'knowledge-migrated' | 'practical'

/**
 * Older IT-technical imports used `text` for both review questions and applied
 * worksheets. These IDs are the applied subset found during the 102-lesson
 * consolidation audit; keeping the list explicit prevents wording heuristics
 * from silently moving a future scenario into Lernkarten.
 */
const practicalTextExerciseIds = new Set([
  'ex-java-2-11', 'ex-java-2-19',
  'itt-mainboard-q16',
  'itt-speicher-rechnen-q1', 'itt-speicher-rechnen-q2', 'itt-speicher-rechnen-q3',
  'itt-raid-q1', 'itt-raid-q2',
  'itt-netzteil-kuehlung-q7',
  'itt-usv-auswahl-q3', 'itt-usv-auswahl-q6', 'itt-usv-auswahl-q7',
  'itt-usv-laufzeit-q3', 'itt-usv-laufzeit-q4',
  'itt-fehlersuche-q1', 'itt-fehlersuche-q4', 'itt-fehlersuche-q6',
  'itt-werkstatt-q1', 'itt-werkstatt-q2', 'itt-werkstatt-q3',
  'itt-werkstatt-q4', 'itt-werkstatt-q5', 'itt-werkstatt-q6',
  'itt-windows-vm-q3', 'itt-windows-vm-q4', 'itt-windows-vm-q5',
  'itt-kommandozeile-q11', 'itt-kommandozeile-q12',
  'itt-lernkontrolle-q6',
])

export function classifyExercise(exercise: Exercise): ExerciseClassification {
  if (exercise.type === 'calculation' || exercise.type === 'technical-problem' || practicalTextExerciseIds.has(exercise.id)) {
    return 'practical'
  }
  return exercise.correctAnswer === undefined ? 'knowledge-migrated' : 'knowledge-covered'
}

export const practicalExercises = (exercises: Exercise[]) =>
  exercises.filter((exercise) => classifyExercise(exercise) === 'practical')

export function modelAnswerFromExplanation(exercise: Exercise): string | undefined {
  if (!exercise.explanation) return undefined
  const withoutPrefix = exercise.explanation.replace(/^Musterlösung aus der Quelle:\s*/i, '')
  const withoutSource = withoutPrefix.replace(/\s*Quelle:\s*.+$/i, '').trim()
  return withoutSource || undefined
}
