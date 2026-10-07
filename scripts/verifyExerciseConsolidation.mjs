import { build } from 'esbuild'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const result = await build({
  stdin: {
    contents: `
      import { modules } from './src/data/modules'
      import { flashcardBanks } from './src/lib/flashcards'
      import { classifyExercise } from './src/lib/exerciseConsolidation'
      export { modules, flashcardBanks, classifyExercise }
    `,
    resolveDir: process.cwd(),
    sourcefile: 'exercise-consolidation-audit.ts',
    loader: 'ts',
  },
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
})

const module = { exports: {} }
vm.runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})(require,module,module.exports)`, {
  require, module, console, process,
})

const { modules, flashcardBanks, classifyExercise } = module.exports
const banks = new Map(flashcardBanks.map((bank) => [bank.lessonId, bank]))
const lessons = modules.flatMap((courseModule) => courseModule.topics.map((topic) => ({ courseModule, topic })))
const failures = []
const report = {
  lessonsAudited: lessons.length,
  totalExercisesFound: 0,
  exercisesAlreadyCoveredByLernkarten: 0,
  exercisesNewlyMigratedIntoLernkarten: 0,
  practicalExercisesKept: 0,
  lessonsWhereUebungenSectionWasRemoved: 0,
  lessonsWherePracticalExercisesRemain: 0,
  newTotalLernkartenQuestionCount: flashcardBanks.reduce((sum, bank) => sum + bank.questions.length, 0),
}

for (const { topic } of lessons) {
  const bank = banks.get(topic.id)
  let practicalCount = 0
  for (const exercise of topic.exercises) {
    report.totalExercisesFound += 1
    const classification = classifyExercise(exercise)
    const migratedCardId = `fc-${topic.id}-exercise-${exercise.id}`
    const appearsInCards = bank?.questions.some((question) => question.id === migratedCardId)
    if (classification === 'practical') {
      report.practicalExercisesKept += 1
      practicalCount += 1
      if (appearsInCards) failures.push(`${exercise.id}: practical exercise duplicated in Lernkarten`)
    } else if (classification === 'knowledge-covered') {
      report.exercisesAlreadyCoveredByLernkarten += 1
      if (!appearsInCards) failures.push(`${exercise.id}: covered knowledge missing from Lernkarten`)
    } else {
      report.exercisesNewlyMigratedIntoLernkarten += 1
      if (!appearsInCards) failures.push(`${exercise.id}: migrated knowledge missing from Lernkarten`)
    }
  }
  if (practicalCount > 0) report.lessonsWherePracticalExercisesRemain += 1
  if (topic.exercises.length > 0 && practicalCount === 0) report.lessonsWhereUebungenSectionWasRemoved += 1
}

if (report.lessonsAudited !== 108) failures.push(`Expected 108 lessons, found ${report.lessonsAudited}`)
if (report.totalExercisesFound !== report.exercisesAlreadyCoveredByLernkarten + report.exercisesNewlyMigratedIntoLernkarten + report.practicalExercisesKept) {
  failures.push('Exercise classification totals do not add up')
}
if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(JSON.stringify(report, null, 2))
