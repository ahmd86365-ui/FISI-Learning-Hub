import assert from 'node:assert/strict'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..'), require = createRequire(import.meta.url), cache = new Map()
function load(relativePath) {
  const path = resolve(root, relativePath)
  if (cache.has(path)) return cache.get(path).exports
  const module = { exports: {} }; cache.set(path, module)
  const code = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText
  const localRequire = name => { if (!name.startsWith('.')) return require(name); const target = resolve(dirname(path), name); const file = [target, `${target}.ts`, `${target}.tsx`, resolve(target, 'index.ts')].find(candidate => existsSync(candidate) && statSync(candidate).isFile()); assert.ok(file, `Unresolved import ${name}`); return load(file) }
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports); return module.exports
}

const { modules, getModuleBySlug } = load('src/data/modules.ts')
const { linuxDayThreeTasks, linuxDayThreeExam } = load('src/data/linux/dayThreeExercises.ts')
const { createDayThreeSession, runDayThreeCommand, saveNanoFile, isBrokenLink } = load('src/lib/linuxDayThreeSimulator.ts')
const linux = getModuleBySlug('it', 'linux')
assert.deepEqual(linux.topics.map(topic => [topic.title, topic.order]), [['Was ist Linux?', 1], ['Terminal und erste Befehle', 2], ['Das Dateisystem', 3]])
const topic = linux.topics[2]
assert.equal(topic.id, 'topic-linux-03-das-dateisystem'); assert.equal(topic.slug, 'das-dateisystem')
assert.match(readFileSync('src/App.tsx', 'utf8'), /path="practice\/linux-tag-3"/)
assert.match(readFileSync('src/pages/LessonPage.tsx', 'utf8'), /Linux Campus · Tag 3 üben/)
const topicIds = modules.flatMap(module => module.topics.map(item => item.id)), exerciseIds = modules.flatMap(module => module.topics.flatMap(item => item.exercises.map(exercise => exercise.id))), taskIds = linuxDayThreeTasks.map(task => task.id)
for (const [label, ids] of [['topic', topicIds], ['exercise', exerciseIds], ['trainer', taskIds]]) assert.equal(new Set(ids).size, ids.length, `Duplicate ${label} ID`)
assert.ok(topic.exercises.every(exercise => exercise.topicSlug === topic.slug))
const curriculum = JSON.stringify([topic.content, linuxDayThreeTasks, linuxDayThreeExam])
for (const phrase of ['Filesystem Hierarchy Standard', '/root', '/dev/sda', '/dev/vda', '/dev/sdb', '/etc/hostname', '/etc/hosts', '/etc/os-release', '/etc/passwd', '/etc/shadow', 'UID', 'GID', '.bashrc', 'ls -lh', 'ls -lt', 'ls -ld', 'ln -s', 'Strg+O', 'Strg+K', 'Strg+U', 'Strg+W', 'Alt+U', 'Strg+G', 'wc -l']) assert.ok(curriculum.includes(phrase), `Coverage: ${phrase}`)
for (const unsupported of ['sort ', 'less ', 'df ', 'du ', '| ', '2>']) assert.ok(!linuxDayThreeTasks.some(task => task.answers.some(answer => answer.includes(unsupported))), `Locked content: ${unsupported}`)

const initial = createDayThreeSession(); assert.ok(initial.nodes['/']); assert.ok(initial.nodes['/etc']); assert.ok(initial.nodes['/proc/cpuinfo'])
for (const path of ['/etc/hostname', '/etc/hosts', '/etc/os-release', '/etc/passwd']) assert.equal(initial.nodes[path].type, 'file')
for (const line of initial.nodes['/etc/passwd'].content.split('\n')) assert.equal(line.split(':').length, 7, `passwd fields: ${line}`)
assert.doesNotMatch(initial.nodes['/etc/passwd'].content, /password|secret/i)
assert.doesNotMatch(runDayThreeCommand(initial, 'ls').output, /\.bashrc/); assert.match(runDayThreeCommand(initial, 'ls -a').output, /\.bashrc/)
assert.match(runDayThreeCommand(initial, 'ls -l /etc/passwd').output, /^-/); assert.match(runDayThreeCommand(initial, 'ls -ld /etc').output, /^d/)
assert.equal(runDayThreeCommand(initial, 'wc -l /etc/passwd').output, '7 /etc/passwd')

let state = runDayThreeCommand(initial, 'mkdir -p ~/linux-kurs/tag03').session
state = runDayThreeCommand(state, 'cd ~/linux-kurs/tag03').session
state = saveNanoFile(state, 'notizen.txt', 'Hallo Linux\nStudent')
assert.equal(runDayThreeCommand(state, 'cat notizen.txt').output, 'Hallo Linux\nStudent')
assert.equal(runDayThreeCommand(state, 'wc -l notizen.txt').output, '2 notizen.txt')
state = runDayThreeCommand(state, 'ln -s notizen.txt verweis.txt').session
assert.match(runDayThreeCommand(state, 'ls -l verweis.txt').output, /^l.* -> notizen\.txt$/)
assert.equal(runDayThreeCommand(state, 'cat verweis.txt').output, 'Hallo Linux\nStudent')
let linkOnly = runDayThreeCommand(state, 'rm verweis.txt').session
assert.ok(linkOnly.nodes['/home/andre/linux-kurs/tag03/notizen.txt'])
let broken = runDayThreeCommand(state, 'rm notizen.txt').session
assert.ok(isBrokenLink(broken, '/home/andre/linux-kurs/tag03/verweis.txt')); assert.match(runDayThreeCommand(broken, 'cat verweis.txt').error, /Linkziel/)
state = saveNanoFile(state, 'notizen.txt', 'Geändert\nStudent'); assert.equal(runDayThreeCommand(state, 'cat notizen.txt').output, 'Geändert\nStudent')
assert.deepEqual(createDayThreeSession(), initial, 'Reset deterministic')

for (const wanted of ['cd /', 'ls -l /bin/ls /bin/cp', 'ls /var/log', 'tail -n 3 /etc/passwd', 'head -n 5 /proc/cpuinfo', 'mkdir -p ~/linux-kurs/tag03', 'nano ~/linux-kurs/tag03/fhs.txt', 'nano ~/linux-kurs/tag03/meinuser.txt', 'nano ~/linux-kurs/tag03/notiz.txt']) assert.ok(linuxDayThreeTasks.some(task => task.answers.includes(wanted)), `Connected sequence: ${wanted}`)
assert.ok(linuxDayThreeTasks.length >= 30); assert.equal(linuxDayThreeExam.length, 20); assert.equal(new Set(linuxDayThreeExam.map(question => question.id)).size, 20)
const trainer = readFileSync('src/pages/LinuxDayThreeTrainer.tsx', 'utf8'), simulator = readFileSync('src/lib/linuxDayThreeSimulator.ts', 'utf8')
for (const source of [trainer, simulator, readFileSync('src/data/linux/dayThreeExercises.ts', 'utf8')]) assert.doesNotMatch(source, /child_process|execSync|execFile|\bspawn\s*\(|\bfetch\s*\(/)
assert.match(trainer, /Während der Prüfung werden keine Hinweise oder Lösungen angezeigt/); assert.match(trainer, /!correct &&/); assert.match(trainer, /attempts >= 2/)
const glossary = load('src/data/glossary.ts').glossaryEntries
for (const id of ['fhs', 'root-verzeichnis', 'symbolischer-link', 'uid-gid', 'nano']) assert.ok(glossary.find(entry => entry.id === id)?.lessons.some(lesson => lesson.topic === topic.slug))
console.log(`Linux Tag 3: official topic, ${linuxDayThreeTasks.length} connected tasks, 20-question assessment, virtual FHS, passwd, hidden files, metadata, symlinks, nano persistence, reset, glossary and repository IDs verified.`)
