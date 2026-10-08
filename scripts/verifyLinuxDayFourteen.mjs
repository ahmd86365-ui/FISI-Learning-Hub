import assert from 'node:assert/strict'
import { build } from 'esbuild'
import { readFileSync } from 'node:fs'

async function load(entry) {
  const bundle = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
}

const { linuxTopics } = await load('src/data/linux/course.ts')
const { linuxCheatSheetSections } = await load('src/data/linux/cheatSheet.ts')
const { lessonLabMap } = await load('src/data/labs.ts')
const { search } = await load('src/lib/search.ts')
const topic = linuxTopics.find((item) => item.id === 'topic-linux-14-uebungsskript-und-ablauf-der-klausur')
assert.ok(topic)
assert.equal(topic.slug, 'uebungsskript-und-ablauf-der-klausur')
assert.equal(topic.order, 15)
assert.equal(topic.exercises.length, 4)
assert.equal(topic.flashcards.length, 18)
assert.equal(topic.test.questions.length, 6)
const serialized = JSON.stringify(topic)
for (const phrase of ['#!/bin/bash', 'sudo ./firma.sh', 'sleep 2', 'nicht-idempotent', 'VMware-VM mit Snapshot', 'apt install -y', 'useradd -m', 'chpasswd', 'usermod -aG', 'chmod 770', 'COMPANY_NAME', 'alle 20 Minuten', 'alle 8 Stunden', 'Add readme', 'Add setup script', 'Document script steps', 'git log --oneline']) assert.ok(serialized.includes(phrase), `Missing Tag 14 source fact: ${phrase}`)
assert.equal(lessonLabMap[topic.id], undefined)
const tag14 = linuxCheatSheetSections.find((section) => section.tag === 14)
assert.equal(tag14?.entries.length, 9)
assert.ok((await search('COMPANY_NAME')).some((result) => result.path === '/it/linux/uebungsskript-und-ablauf-der-klausur'))
assert.ok((await search('ssh-copy-id')).some((result) => result.path === '/it/linux/extra-linux-als-server'))
const lessonPage = readFileSync('src/pages/LessonPage.tsx', 'utf8')
assert.match(lessonPage, /uebungsskript-und-ablauf-der-klausur' \? 14/)
assert.match(lessonPage, /topic\.slug !== 'extra-linux-als-server'/)
console.log('Linux Tag 14 verified: stable route, 18 curated cards, 4 practical tasks including the three-phase firma.sh exercise, exact 6-question source quiz, 9 reference rows and no fake Lab mapping.')
