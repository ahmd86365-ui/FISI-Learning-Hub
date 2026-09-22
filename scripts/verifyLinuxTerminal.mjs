import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync('src/lib/linuxTerminal.ts', 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
const simulator = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
const expected = ['whoami', 'pwd', 'date', 'uname -r', 'cat /etc/os-release', 'ls', 'exit']
assert.deepEqual(Object.keys(simulator.simulatedCommands), expected)
for (const command of expected) {
  const result = simulator.evaluateCommand(`  ${command.replaceAll(' ', '   ')}  `, command)
  assert.equal(result.correct, true, command)
  assert.equal(result.output, simulator.simulatedCommands[command])
  assert.equal(simulator.evaluateCommand('pwd', command).correct, command === 'pwd')
}
for (const command of ['rm -rf /', 'sudo whoami', 'whoami; date', 'uname -a', 'cat /etc/passwd', 'ls | cat', '']) {
  assert.equal(simulator.evaluateCommand(command, 'whoami').correct, false, command)
  assert.equal(simulator.evaluateCommand(command, 'whoami').output, null)
}
assert.equal(simulator.evaluateCommand('date', 'date').output, simulator.evaluateCommand('date', 'date').output)
for (const file of ['src/lib/linuxTerminal.ts', 'src/data/linux/terminalExercises.ts', 'src/pages/LinuxTerminalTrainer.tsx']) {
  const text = readFileSync(file, 'utf8')
  assert.doesNotMatch(text, /\b(child_process|execSync|execFile|spawn|fetch|XMLHttpRequest|supabase)\b/, file)
}
const definitions = readFileSync('src/data/linux/terminalExercises.ts', 'utf8')
assert.equal((definitions.match(/id: '/g) ?? []).length, 7)
console.log('Linux Terminal Trainer: 7 commands, 7 exercises, normalization, rejection, fixed output and shell safety verified.')
