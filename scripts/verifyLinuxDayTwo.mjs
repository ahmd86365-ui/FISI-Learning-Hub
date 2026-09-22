import assert from 'node:assert/strict'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
const require = createRequire(import.meta.url)
const cache = new Map()
function load(relativePath) {
  const path = resolve(root, relativePath)
  if (cache.has(path)) return cache.get(path).exports
  const module = { exports: {} }
  cache.set(path, module)
  const code = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText
  const localRequire = (name) => {
    if (!name.startsWith('.')) return require(name)
    const target = resolve(dirname(path), name)
    const file = [target, `${target}.ts`, `${target}.tsx`, resolve(target, 'index.ts')].find(candidate => existsSync(candidate) && statSync(candidate).isFile())
    assert.ok(file, `Unresolved import ${name} from ${path}`)
    return load(file)
  }
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports)
  return module.exports
}

const { modules, getModuleBySlug } = load('src/data/modules.ts')
const { linuxDayTwoTasks, examTaskIds } = load('src/data/linux/dayTwoExercises.ts')
const { createDayTwoSession, createTaskFixture, deletionTargets, expandPaths, runDayTwoCommand } = load('src/lib/linuxDayTwoSimulator.ts')
const linux = getModuleBySlug('it', 'linux')
assert.ok(linux)
assert.deepEqual(linux.topics.map(topic => [topic.title, topic.order]), [['Was ist Linux?', 1], ['Terminal und erste Befehle', 2]])
const topic = linux.topics[1]
assert.equal(topic.id, 'topic-linux-02-terminal-und-erste-befehle')
assert.equal(topic.slug, 'terminal-und-erste-befehle')
assert.ok(readFileSync('src/App.tsx', 'utf8').includes('path="it/:moduleSlug/:topicSlug"'))
assert.ok(readFileSync('src/pages/LessonPage.tsx', 'utf8').includes('to="/practice/linux-tag-2"'))
assert.ok(readFileSync('src/App.tsx', 'utf8').includes('path="practice/linux-tag-2"'))

const topicIds = modules.flatMap(module => module.topics.map(topic => topic.id))
const exerciseIds = modules.flatMap(module => module.topics.flatMap(topic => topic.exercises.map(exercise => exercise.id)))
for (const [label, ids] of [['topic', topicIds], ['exercise', exerciseIds], ['trainer task', linuxDayTwoTasks.map(task => task.id)]]) {
  assert.equal(new Set(ids).size, ids.length, `Duplicate ${label} ID`)
}
assert.ok(topic.exercises.every(exercise => exercise.topicSlug === topic.slug))
assert.ok(linuxDayTwoTasks.length >= 60)
assert.equal(examTaskIds.length, 20)
assert.equal(new Set(examTaskIds).size, 20)
assert.ok(examTaskIds.every(id => linuxDayTwoTasks.some(task => task.id === id)))
assert.ok(examTaskIds.some(id => id === 'linux-02-train-064'), 'Case-sensitivity question in exam')
for (const phrase of ['Terminal', 'Shell', 'Prompt', 'ls -la', 'cd -', 'mkdir -p', 'cp -r', 'rm -r', 'head', 'tail', 'echo', 'history', 'man -k kopieren', '/sort', 'Strg+Umschalt+C', 'Strg+Umschalt+V']) {
  assert.ok(JSON.stringify(topic.content).includes(phrase) || JSON.stringify(linuxDayTwoTasks).includes(phrase), `Coverage: ${phrase}`)
}
assert.ok(!linuxDayTwoTasks.some(task => task.answers.some(answer => /^less(?:\s|$)/.test(answer))))

function execute(session, input) {
  const preview = deletionTargets(session, input)
  if (preview?.length) {
    const blocked = runDayTwoCommand(session, input)
    assert.deepEqual(blocked.session, session, `Deletion blocked until confirmation: ${input}`)
    assert.deepEqual(blocked.deletion, preview)
  }
  const result = runDayTwoCommand(session, input, !!preview?.length)
  assert.equal(result.error, undefined, `${input}: ${result.error}`)
  return result.session
}

const initial = createDayTwoSession('files')
assert.equal(initial.cwd, '/home/andre')
assert.ok(initial.nodes['/home/andre/linux-kurs'])
let state = execute(initial, 'mkdir uebung')
state = execute(state, 'cd uebung')
state = execute(state, 'touch a.txt b.txt c.txt')
assert.equal(state.cwd, '/home/andre/uebung')
assert.match(runDayTwoCommand(state, 'ls').output, /a\.txt/)
assert.equal(runDayTwoCommand(state, 'pwd').output, state.cwd)
state = execute(state, 'cd ..')
assert.equal(state.cwd, '/home/andre')
state = execute(state, 'cd -')
assert.equal(state.cwd, '/home/andre/uebung')
state = execute(state, 'cp a.txt kopie.txt')
assert.ok(state.nodes['/home/andre/uebung/kopie.txt'])
state = execute(state, 'mv kopie.txt neu.txt')
assert.ok(!state.nodes['/home/andre/uebung/kopie.txt'])
assert.ok(state.nodes['/home/andre/uebung/neu.txt'])
state = execute(state, 'rm neu.txt')
assert.ok(!state.nodes['/home/andre/uebung/neu.txt'])
assert.match(runDayTwoCommand(state, 'history').output, /mkdir uebung/)
assert.deepEqual(createDayTwoSession('files'), initial, 'Reset restores initial state')

state = execute(state, 'mkdir -p a/b/c')
assert.ok(state.nodes['/home/andre/uebung/a/b/c'])
state = execute(state, 'touch a/b/c/test.txt')
state = execute(state, 'cp -r a backup')
assert.ok(state.nodes['/home/andre/uebung/backup/b/c/test.txt'])
const treePreview = deletionTargets(state, 'rm -r backup')
assert.ok(treePreview.includes('/home/andre/uebung/backup/b/c/test.txt'))
state = execute(state, 'rm -r backup')
assert.ok(!state.nodes['/home/andre/uebung/backup/b/c/test.txt'])

state = createDayTwoSession('glob')
state = execute(state, 'mkdir -p ~/linux-kurs/tag02-glob')
state = execute(state, 'cd ~/linux-kurs/tag02-glob')
state = execute(state, 'touch bild1.png bild2.png bild3.png notiz.txt liste.txt')
assert.deepEqual(expandPaths(state, '*.txt').map(path => path.split('/').pop()), ['liste.txt', 'notiz.txt'])
assert.deepEqual(expandPaths(state, 'bild?.png').map(path => path.split('/').pop()), ['bild1.png', 'bild2.png', 'bild3.png'])
assert.deepEqual(expandPaths(state, 'bild[12].png').map(path => path.split('/').pop()), ['bild1.png', 'bild2.png'])
assert.equal(deletionTargets(state, 'rm bild?.png').length, 3)

// Complete every connected scene with the teaching answers, then check the challenge result.
let scene = '', completed = 0
for (const task of linuxDayTwoTasks) {
  if (task.scene !== scene) { scene = task.scene; state = createDayTwoSession(scene) }
  if (task.kind === 'shortcut') continue
  const answer = task.answers[0]
  const result = runDayTwoCommand(state, answer, !!deletionTargets(state, answer)?.length)
  assert.equal(result.error, undefined, `${task.id}: ${answer}: ${result.error}`)
  assert.equal(result.deletion, undefined, `${task.id}: deletion not confirmed`)
  state = result.session
  completed++
  if (task.id === 'linux-02-train-055') assert.ok(state.nodes['/home/andre/linux-kurs/projekt/Alte Dateien/titel.md'])
}
assert.ok(completed >= 50)
const fixture = createTaskFixture('/home/andre/linux-kurs/tag02', ['alt-backup/ (b.txt)'])
assert.ok(deletionTargets(fixture, 'rm -r alt-backup').includes('/home/andre/linux-kurs/tag02/alt-backup/b.txt'))

const trainer = readFileSync('src/pages/LinuxDayTwoTrainer.tsx', 'utf8')
const simulator = readFileSync('src/lib/linuxDayTwoSimulator.ts', 'utf8')
for (const source of [trainer, simulator, readFileSync('src/data/linux/dayTwoExercises.ts', 'utf8')]) assert.doesNotMatch(source, /child_process|execSync|execFile|\bspawn\s*\(|\bexec\s*\(|\bfetch\s*\(/)
assert.match(trainer, /mode === 'learn' \? linuxDayTwoTasks : examTasks/)
assert.match(trainer, /examFinished/)
assert.match(trainer, /mode === 'learn' && attempts >= 2/)
assert.match(trainer, /!item\.correct && <p/)
console.log(`Linux Tag 2: official lesson, repository IDs, ${linuxDayTwoTasks.length} tasks, 20 exam references, ${completed} connected commands, deletion safety, reset and shell isolation verified.`)
