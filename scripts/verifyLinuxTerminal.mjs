import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync('src/lib/linuxTerminal.ts', 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
const simulator = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
let session = simulator.createLinuxLabSession()
const run = (command) => { const result = simulator.runLinuxCommand(session, command); session = result.session; return result }

// Baseline and filesystem mutations.
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
assert.match(run('stat archiv.txt').output, /750/)
assert.match(run('file archiv.txt').output, /UTF-8 text/)
assert.match(run('tree ..').output, /linux-lab\//)
assert.match(run('head -n 1 notizen.txt').output, /Linux macht Spaß/)
assert.match(run('wc -l notizen.txt').output, /^1$/)

// Search, users, permissions, processes, services, logs and network.
assert.match(run('find ~ -name "*.log"').output, /system\.log/)
assert.match(run('grep WARN ~\/logs\/system.log').output, /WARN Speicher fast voll/)
assert.match(run('id').output, /uid=1000/)
assert.match(run('groups').output, /sudo/)
run('sudo useradd -m alex')
assert.ok(session.users.alex)
run('sudo usermod -aG shared alex')
assert.ok(session.users.alex.groups.includes('shared'))
run('sudo chown student:shared ~/shared/report.txt')
assert.equal(session.nodes['/home/student/shared/report.txt'].owner, 'student')
assert.match(run('ps').output, /sshd/)
run('kill 312')
assert.equal(session.processes.some(({ pid }) => pid === 312), false)
assert.match(run('systemctl status nginx').output, /inactive/)
run('systemctl start nginx')
assert.equal(session.services.nginx, 'running')
assert.match(run('journalctl -u nginx').output, /nginx/)
assert.match(run('ip addr').output, /192\.168\.56\.10/)
assert.match(run('ip route').output, /default via/)
assert.match(run('ping 192.168.56.1').output, /0% packet loss/)
assert.match(run('ss').output, /LISTEN/)
assert.match(run('curl http://localhost').output, /FISI Lab/)
assert.match(run('apt update').output, /Fertig/)
assert.match(run('man chmod').output, /Rechte ändern/)
assert.match(run('help').output, /Unterstützte Befehle/)
assert.equal(simulator.completeLinuxCommand(session, 'pw'), 'pwd')

// Editors, Git flow, cleanup, reset-friendly determinism and safe syntax.
assert.match(run('nano neu.txt').output, /vereinfachter Editor/)
assert.match(run('sudo').output, /keine echten Administratorrechte/)
assert.match(run('git init').output, /initialisiert/)
run('git add .')
assert.match(run('git commit -m "Erster Stand"').output, /Erster Stand/)
assert.match(run('git log').output, /commit fisi001/)
run('rm archiv.txt')
assert.equal(session.nodes['/home/student/Dokumente/linux-lab/archiv.txt'], undefined)
assert.equal(run('clear').clear, true)
const fresh = simulator.createLinuxLabSession()
assert.equal(fresh.cwd, '/home/student')
assert.equal(fresh.services.nginx, 'stopped')

for (const unsafe of ['rm -rf /', 'whoami; cat /etc/passwd', 'ls | cat', 'echo `whoami`', 'echo $(whoami)']) {
  assert.equal(simulator.runLinuxCommand(session, unsafe).error, true, unsafe)
}
assert.equal(run('unknown-command').error, true)

// Curriculum mapping, state validators, modes, hints and scenario architecture.
const challenges = readFileSync('src/data/linux/terminalExercises.ts', 'utf8')
const scenarios = readFileSync('src/data/linux/labContent.ts', 'utf8')
const challengeCount = (challenges.match(/\bid:\s*'/g) ?? []).length
const scenarioCount = (scenarios.match(/\bid:\s*'/g) ?? []).length
assert.ok(challengeCount >= 25, `expected >=25 challenges, got ${challengeCount}`)
assert.equal(scenarioCount, 5)
assert.ok((challenges.match(/lessonSlug:/g) ?? []).length >= challengeCount)
assert.ok((challenges.match(/hints:\s*\[/g) ?? []).length >= challengeCount)
assert.ok((challenges.match(/isComplete:/g) ?? []).length >= challengeCount)
assert.match(scenarios, /webserver-down/)
assert.match(scenarios, /network-diagnosis/)

const page = readFileSync('src/pages/LinuxTerminalTrainer.tsx', 'utf8')
const consoleSource = readFileSync('src/components/linuxLab/TerminalConsole.tsx', 'utf8')
const toolPanel = readFileSync('src/components/linuxLab/LabToolPanel.tsx', 'utf8')
const lessonPage = readFileSync('src/pages/LessonPage.tsx', 'utf8')
const app = readFileSync('src/App.tsx', 'utf8')
const modulePage = readFileSync('src/pages/ModulePage.tsx', 'utf8')
const translator = readFileSync('src/components/HoverTranslator.tsx', 'utf8')
assert.ok(app.includes('path="it/linux/lab"'))
assert.ok(app.includes('path="practice/linux-terminal"'))
assert.ok(modulePage.includes('to="/it/linux/lab"'))
assert.match(page, /Guided Lab/)
assert.match(page, /Freies Terminal/)
assert.match(page, /Szenarien/)
assert.match(page, /Fokusmodus/)
assert.match(page, /useLearningProgress/)
assert.match(page, /window\.confirm/)
assert.match(page, /lg:grid-cols/)
assert.match(consoleSource, /data-no-translate/)
assert.match(consoleSource, /ArrowUp/)
assert.match(consoleSource, /ArrowDown/)
assert.match(consoleSource, /event\.key === 'Tab'/)
assert.match(consoleSource, /event\.ctrlKey && event\.key\.toLowerCase\(\) === 'l'/)
assert.match(toolPanel, /Dateien/)
assert.match(toolPanel, /In Terminal einfügen/)
const linuxLabMappings = readFileSync('src/data/labs.ts', 'utf8').match(/'topic-linux-01-was-ist-linux':\s*\[([\s\S]*?)\n\s*\],/)?.[1] ?? ''
assert.match(linuxLabMappings, /labId:'linux-lab'/)
assert.match(translator, /'INPUT'.*'CODE'.*'PRE'/)
for (const file of ['src/lib/linuxTerminal.ts', 'src/data/linux/terminalExercises.ts', 'src/pages/LinuxTerminalTrainer.tsx']) {
  assert.doesNotMatch(readFileSync(file, 'utf8'), /\b(child_process|execSync|execFile|spawn|fetch|XMLHttpRequest)\b/, file)
}

console.log(`Linux Lab verified: ${simulator.supportedLinuxCommands.length} simulated commands, ${challengeCount} curriculum challenges, ${scenarioCount} scenarios, state mutations, services, processes, networking, Git, modes, hints, reset behavior, responsive UI and translation exclusions.`)
