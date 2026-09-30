import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync('src/lib/linuxTerminal.ts', 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
const simulator = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
let session = simulator.createLinuxLabSession()
const run = (command) => { const result = simulator.runLinuxCommand(session, command); session = result.session; return result }

assert.equal(run('whoami').output, 'student')
assert.equal(run('pwd').output, '/home/student')
assert.match(run('uname -a').output, /fisi-lab/)
assert.match(run('ls -la').output, /Dokumente/)
assert.equal(run('cd Dokumente').error, false)
run('mkdir linux-lab'); run('cd linux-lab'); run('touch notizen.txt')
run('echo "Linux macht Spaß" > notizen.txt')
assert.equal(run('cat notizen.txt').output, 'Linux macht Spaß')
run('cp notizen.txt kopie.txt'); run('mv kopie.txt archiv.txt')
assert.ok(session.nodes['/home/student/Dokumente/linux-lab/archiv.txt'])
run('chmod 750 archiv.txt')
assert.equal(session.nodes['/home/student/Dokumente/linux-lab/archiv.txt'].mode, '750')
assert.match(run('find ~ -name "*.log"').output, /system\.log/)
assert.match(run('grep WARN ~\/logs\/system.log').output, /WARN Speicher fast voll/)
assert.match(run('nano neu.txt').output, /vereinfachter Editor/)
assert.match(run('sudo').output, /keine echten Administratorrechte/)
assert.match(run('git init').output, /initialisiert/)
run('git add .')
assert.match(run('git commit -m "Erster Stand"').output, /Erster Stand/)
assert.match(run('git log').output, /commit fisi001/)
run('rm archiv.txt')
assert.equal(session.nodes['/home/student/Dokumente/linux-lab/archiv.txt'], undefined)
assert.equal(run('clear').clear, true)

for (const unsafe of ['rm -rf /', 'whoami; cat /etc/passwd', 'ls | cat', 'echo `whoami`']) assert.equal(simulator.runLinuxCommand(session, unsafe).error, true, unsafe)

const challenges = readFileSync('src/data/linux/terminalExercises.ts', 'utf8')
assert.equal((challenges.match(/id: '/g) ?? []).length, 10)
for (const command of ['pwd', 'ls -la', 'cd', 'mkdir', 'touch', 'cp', 'mv', 'rm', 'cat', 'echo', 'clear', 'whoami', 'uname', 'chmod', 'sudo', 'grep', 'find', 'nano', 'vim', 'git init']) assert.ok(source.includes(`'${command.split(' ')[0]}'`) || challenges.includes(command), command)

const page = readFileSync('src/pages/LinuxTerminalTrainer.tsx', 'utf8')
const consoleSource = readFileSync('src/components/linuxLab/TerminalConsole.tsx', 'utf8')
const app = readFileSync('src/App.tsx', 'utf8')
const modulePage = readFileSync('src/pages/ModulePage.tsx', 'utf8')
const translator = readFileSync('src/components/HoverTranslator.tsx', 'utf8')
assert.ok(app.includes('path="it/linux/lab"'))
assert.ok(app.includes('path="practice/linux-terminal"'))
assert.ok(modulePage.includes('to="/it/linux/lab"'))
assert.match(page, /useLearningProgress/)
assert.match(page, /lg:grid-cols/)
assert.match(consoleSource, /<pre/)
assert.match(consoleSource, /<input/)
assert.match(consoleSource, /ArrowUp/)
assert.match(translator, /'INPUT'.*'CODE'.*'PRE'/)
for (const file of ['src/lib/linuxTerminal.ts', 'src/data/linux/terminalExercises.ts', 'src/pages/LinuxTerminalTrainer.tsx']) assert.doesNotMatch(readFileSync(file, 'utf8'), /\b(child_process|execSync|execFile|spawn|fetch|XMLHttpRequest)\b/, file)

console.log('Linux Lab verified: 20+ simulated commands, filesystem mutations, Git flow, 10 challenges, routes, responsive UI, progress integration and terminal translation exclusions.')
