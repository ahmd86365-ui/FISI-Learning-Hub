import { build } from 'esbuild'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

const result = await build({
  entryPoints: ['src/lib/flashcards.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
})

const module = { exports: {} }
vm.runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})(require,module,module.exports)`, {
  require,
  module,
  console,
  process,
})

const { flashcardBanks } = module.exports
const failures = []
const globalIds = new Set()
const typeCounts = {}

for (const bank of flashcardBanks) {
  if (bank.questions.length === 0) failures.push(`${bank.lessonId}: empty question bank`)
  const prompts = new Set()
  for (const question of bank.questions) {
    if (question.lessonId !== bank.lessonId) failures.push(`${question.id}: wrong lessonId`)
    if (globalIds.has(question.id)) failures.push(`${question.id}: duplicate global id`)
    globalIds.add(question.id)
    const prompt = question.question.trim().toLocaleLowerCase('de-DE')
    if (!prompt || prompts.has(prompt)) failures.push(`${question.id}: empty or duplicate prompt`)
    prompts.add(prompt)
    if (!question.explanation.trim()) failures.push(`${question.id}: missing explanation`)
    if (!['easy', 'medium', 'hard'].includes(question.difficulty)) failures.push(`${question.id}: invalid difficulty`)
    typeCounts[question.type] = (typeCounts[question.type] ?? 0) + 1

    if (question.type !== 'short-answer' && question.type !== 'self-assessment') {
      if (!question.answers || question.answers.length < 2) failures.push(`${question.id}: fewer than two answers`)
      const optionIds = new Set(question.answers?.map((answer) => answer.id))
      const correct = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer]
      if (optionIds.size !== question.answers?.length) failures.push(`${question.id}: duplicate option id`)
      if (correct.some((answer) => !optionIds.has(answer))) failures.push(`${question.id}: correct answer is not an option`)
    }
  }
}

if (globalIds.size !== 2929) failures.push(`expected 2929 globally unique card ids, received ${globalIds.size}`)

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

const counts = flashcardBanks.map((bank) => bank.questions.length)
const byModule = Object.values(flashcardBanks.reduce((summary, bank) => {
  summary[bank.moduleSlug] ??= { module: bank.moduleSlug, lessons: 0, questions: 0 }
  summary[bank.moduleSlug].lessons += 1
  summary[bank.moduleSlug].questions += bank.questions.length
  return summary
}, {}))

console.log(JSON.stringify({
  lessons: flashcardBanks.length,
  lessonsWithFlashcards: counts.filter(Boolean).length,
  questions: counts.reduce((sum, count) => sum + count, 0),
  minimum: Math.min(...counts),
  average: Number((counts.reduce((sum, count) => sum + count, 0) / counts.length).toFixed(1)),
  maximum: Math.max(...counts),
  questionTypes: typeCounts,
  byModule,
  newLinuxLessons: flashcardBanks
    .filter((bank) => ['topic-linux-09-prozesse-und-pakete', 'topic-linux-10-wiederholung-woche-2-support', 'topic-linux-11-suchen-aliase-und-variablen', 'topic-linux-12-cronjobs'].includes(bank.lessonId))
    .map((bank) => ({ lessonId: bank.lessonId, questions: bank.questions.length })),
  belowTarget: flashcardBanks.filter((bank) => bank.questions.length < 10).map((bank) => ({
    lesson: bank.lessonTitle,
    module: bank.moduleSlug,
    questions: bank.questions.length,
  })),
}, null, 2))
