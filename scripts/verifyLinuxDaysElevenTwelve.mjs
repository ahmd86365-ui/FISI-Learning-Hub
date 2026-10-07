import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { build } from 'esbuild'

async function load(entry) {
  const bundle = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
}

const { linuxTopics } = await load('src/data/linux/course.ts')
const { linuxCheatSheetSections, linuxCheatSheetEntryCount } = await load('src/data/linux/cheatSheet.ts')
const tag11 = linuxTopics.find((topic) => topic.order === 11)
const tag12 = linuxTopics.find((topic) => topic.order === 12)
assert.equal(linuxTopics.length, 12)
assert.equal(tag11?.id, 'topic-linux-11-suchen-aliase-und-variablen')
assert.equal(tag12?.id, 'topic-linux-12-cronjobs')
assert.equal(tag11.exercises.length, 14)
assert.equal(tag12.exercises.length, 14)
assert.equal(tag11.flashcards.length, 32)
assert.equal(tag12.flashcards.length, 32)
for (const [topic, phrases] of [[tag11, ['2> /dev/null', 'grep -ri', 'unalias kurs', 'source ~/.bashrc', '/home/elena/.bashrc']], [tag12, ['@midnight', 'crontab -r', '%H', 'grep -v', '/var/spool/cron/crontabs']]]) {
  const value = JSON.stringify(topic)
  for (const phrase of phrases) assert.ok(value.includes(phrase), `${topic.title}: missing ${phrase}`)
}
assert.match(readFileSync('src/data/linux/dayTwelveLesson.ts', 'utf8'), /date \+\\\\%H:\\\\%M/, 'Cron percent signs must remain escaped in the runtime command')
assert.deepEqual(linuxCheatSheetSections.map((section) => section.tag), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
assert.equal(linuxCheatSheetEntryCount, 198)
const purposes = linuxCheatSheetSections.flatMap((section) => section.entries.map((entry) => `${section.tag}:${entry.purpose}`))
assert.equal(purposes.length, 198)
const app = readFileSync('src/App.tsx', 'utf8')
const lesson = readFileSync('src/pages/LessonPage.tsx', 'utf8')
const page = readFileSync('src/pages/LinuxCheatSheet.tsx', 'utf8')
const action = readFileSync('src/components/linux/LinuxCheatSheetAction.tsx', 'utf8')
assert.match(app, /path="it\/linux\/spickzettel"/)
assert.match(lesson, /LinuxCheatSheetAction/)
assert.match(page, /item\.purpose.*item\.commands\.join/)
assert.match(action, /source=/)
assert.match(page, /<pre[^>]*>\s*<code/)
console.log('Linux Tags 11/12 and Spickzettel verified: 12 lessons, 28 practical tasks, 64 curated cards, 11 source sections and 198 reference rows.')
