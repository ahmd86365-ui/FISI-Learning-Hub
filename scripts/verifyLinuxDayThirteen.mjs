import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { build } from 'esbuild'

async function load(entry) {
  const bundle = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
}

const { linuxTopics } = await load('src/data/linux/course.ts')
const { linuxCheatSheetSections, linuxCheatSheetEntryCount } = await load('src/data/linux/cheatSheet.ts')
const { lessonLabMap } = await load('src/data/labs.ts')
const { search } = await load('src/lib/search.ts')
const main = linuxTopics.find((topic) => topic.id === 'topic-linux-13-dein-werkzeugkasten')
const extra = linuxTopics.find((topic) => topic.id === 'topic-linux-13-extra-linux-als-server')
assert.ok(main)
assert.ok(extra)
assert.equal(main.title, 'Dein Werkzeugkasten')
assert.equal(extra.title, 'Extra: Linux als Server')
assert.equal(main.order, 13)
assert.equal(extra.order, 14)
assert.equal(main.exercises.length, 14)
assert.equal(extra.exercises.length, 14)
assert.equal(main.flashcards.length, 28)
assert.equal(extra.flashcards.length, 48)
assert.equal(new Set([...main.flashcards, ...extra.flashcards].map((card) => card.id)).size, 76)
for (const [topic, phrases] of [
  [main, ['hostname', 'uptime -p', 'free -h', 'date +%Y-%m-%d_%H-%M-%S', 'cp -r', 'source ~/.bashrc', '2>&1', '/usr/local/bin/rechner-info']],
  [extra, ['systemd', 'PID 1', 'systemctl status nginx', 'enable --now', '/var/www/html', 'www-data', 'curl -I localhost', ' 404 ', 'journalctl -u nginx']],
]) {
  const value = JSON.stringify(topic)
  for (const phrase of phrases) assert.ok(value.includes(phrase), `${topic.title}: missing ${phrase}`)
}
const extraText = JSON.stringify(extra).toLowerCase()
for (const required of ['ip -br a', 'ping -c 3', 'sudo ss -tlnp', 'openssh-server', 'ssh-copy-id', '/etc/hosts', 'scp ']) assert.ok(extraText.includes(required), `Complete source material missing: ${required}`)
assert.equal(lessonLabMap[main.id], undefined)
assert.equal(lessonLabMap[extra.id], undefined)
const tag13 = linuxCheatSheetSections.find((section) => section.tag === 13)
assert.equal(tag13?.title, 'Dein Werkzeugkasten')
assert.equal(tag13.entries.length, 11)
assert.equal(linuxCheatSheetEntryCount, 218)
assert.ok(tag13.entries.some((entry) => entry.commands.includes('source ~/.bashrc')))
assert.ok(tag13.entries.some((entry) => entry.commands.some((command) => command.includes('2>&1'))))
assert.ok((await search('Werkzeugkasten')).some((result) => result.path === '/it/linux/dein-werkzeugkasten'))
assert.ok((await search('nginx')).some((result) => result.path === '/it/linux/extra-linux-als-server'))
assert.ok((await search('hostname')).some((result) => result.path === '/it/linux/spickzettel?tag=13'))
const sidebar = readFileSync('src/components/LearningSidebar.tsx', 'utf8')
assert.match(sidebar, /module\.topics/)
assert.deepEqual(linuxTopics.map((topic) => topic.title).slice(-3), ['Dein Werkzeugkasten', 'Extra: Linux als Server', 'Übungsskript und Ablauf der Klausur'])
assert.match(readFileSync('src/pages/LinuxCheatSheet.tsx', 'utf8'), /Linux-Tagen 2 bis 14/)
console.log('Linux Tag 13 verified: Extra complete with 14 practical exercises, 48 preserved/extended cards, source quiz and no unsupported Lab mapping.')
