import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { build } from 'esbuild'

const bundle = await build({ entryPoints: ['src/lib/labs.ts'], bundle: true, platform: 'node', format: 'esm', write: false })
const { labs, gradeLabStep, validateLabDefinitions, newLabSession, submitLabAnswer, revealLabSolution, nextLabStep } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
const networkSource = readFileSync('src/data/netzwerktechnik/course.ts', 'utf8')
const linuxSource = readFileSync('src/data/linux/course.ts', 'utf8')
const lessons = new Set([
  ...[...networkSource.matchAll(/^const \w+ = '([^']+)'$/gm)].map((match) => `/it/netzwerktechnik/${match[1]}`),
  ...[...linuxSource.matchAll(/^const slug = '([^']+)'$/gm)].map((match) => `/it/linux/${match[1]}`),
])
assert.deepEqual(validateLabDefinitions(lessons), [])
assert.equal(labs.length, 4)
for (const lab of labs) {
  assert.ok(lab.steps.length >= 2)
  for (const step of lab.steps) {
    assert.ok(gradeLabStep(step, String(step.answer.expected)), `${lab.id}/${step.id}`)
    assert.ok(!gradeLabStep(step, 'definitely wrong'), `${lab.id}/${step.id} rejects invalid input`)
  }
}
const subnet = labs.find((lab) => lab.id === 'workstation-ipv4')
assert.equal(subnet.steps[0].answer.expected, '192.168.40.64')
assert.equal(subnet.steps[1].answer.expected, '192.168.40.95')
assert.equal(subnet.steps[2].answer.expected, 'remote')
assert.equal(subnet.steps[3].answer.expected, 'yes')
let state = newLabSession()
state = submitLabAnswer(state, false)
assert.equal(revealLabSolution(state).resolved, false)
state = submitLabAnswer(state, false)
state = revealLabSolution(state)
assert.equal(state.solutionsShown, 1)
state = nextLabStep(state)
assert.equal(state.stepIndex, 1)
assert.equal(state.attempts, 0)
assert.equal(state.hintVisible, false)
assert.deepEqual(newLabSession(), { stepIndex: 0, attempts: 0, hintVisible: false, revealed: false, resolved: false, independentlySolved: 0, solutionsShown: 0 })
const source = readFileSync('src/lib/labs.ts', 'utf8')
assert.ok(source.includes("from './subnetting'"))
assert.ok(source.includes("from './linuxTerminal'"))
assert.ok(!/child_process|\bexec\s*\(|\bspawn\s*\(/.test(source))
console.log(`Praktische Labs: ${labs.length} Labs, ${labs.reduce((sum, lab) => sum + lab.steps.length, 0)} Schritte, Definitionen und Reset geprüft.`)
