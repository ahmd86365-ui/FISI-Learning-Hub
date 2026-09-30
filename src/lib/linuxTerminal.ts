// Deterministic in-memory Linux lab. No input is ever passed to the host shell or network.
export type LinuxNode = { type: 'dir' | 'file'; content: string; mode: string; owner?: string; group?: string }
export interface GitState { initialized: boolean; staged: string[]; commits: { hash: string; message: string }[]; modified?: string[] }
export interface LinuxLabSession { cwd: string; user: string; hostname: string; nodes: Record<string, LinuxNode>; commandHistory: string[]; git: GitState; services: Record<string, 'running' | 'stopped' | 'failed'>; processes: { pid: number; user: string; command: string }[]; users: Record<string, { uid: number; groups: string[] }> }
export interface LinuxCommandResult { session: LinuxLabSession; output: string; error?: boolean; clear?: boolean }

export const LINUX_HOME = '/home/student'
const directory = (mode = '755', owner = 'student', group = 'student'): LinuxNode => ({ type: 'dir', content: '', mode, owner, group })
const file = (content = '', mode = '644', owner = 'student', group = 'student'): LinuxNode => ({ type: 'file', content, mode, owner, group })

export function createLinuxLabSession(): LinuxLabSession {
  return {
    cwd: LINUX_HOME, user: 'student', hostname: 'fisi-lab', commandHistory: [],
    git: { initialized: false, staged: [], commits: [], modified: [] },
    services: { ssh: 'running', nginx: 'stopped', cron: 'running' },
    processes: [{ pid: 1, user: 'root', command: '/sbin/init' }, { pid: 312, user: 'root', command: 'sshd' }, { pid: 488, user: 'student', command: 'bash' }],
    users: { root: { uid: 0, groups: ['root'] }, student: { uid: 1000, groups: ['student', 'sudo', 'shared'] }, trainee: { uid: 1001, groups: ['trainee', 'shared'] } },
    nodes: {
      '/': directory('755', 'root', 'root'), '/etc': directory('755', 'root', 'root'),
      '/etc/os-release': file('PRETTY_NAME="Ubuntu 24.04 LTS (Simulation)"\nNAME="Ubuntu"\nVERSION_ID="24.04"', '644', 'root', 'root'),
      '/etc/passwd': file('root:x:0:0:root:/root:/bin/bash\nstudent:x:1000:1000:FISI Student:/home/student:/bin/bash\ntrainee:x:1001:1001:Trainee:/home/trainee:/bin/bash', '644', 'root', 'root'),
      '/etc/group': file('root:x:0:root\nstudent:x:1000:student\nsudo:x:27:student\nshared:x:1100:student,trainee', '644', 'root', 'root'),
      '/etc/hosts': file('127.0.0.1 localhost\n192.168.56.10 fisi-lab', '644', 'root', 'root'), '/etc/ssh': directory('755', 'root', 'root'),
      '/home': directory('755', 'root', 'root'), [LINUX_HOME]: directory('750'), '/home/trainee': directory('750', 'trainee', 'trainee'),
      [`${LINUX_HOME}/Dokumente`]: directory(), [`${LINUX_HOME}/Downloads`]: directory(), [`${LINUX_HOME}/projects`]: directory(),
      [`${LINUX_HOME}/willkommen.txt`]: file('Willkommen im sicheren FISI Linux Lab.\nHier werden keine echten Systembefehle ausgeführt.'),
      [`${LINUX_HOME}/scripts`]: directory(), [`${LINUX_HOME}/scripts/backup.sh`]: file('#!/bin/bash\necho "Backup gestartet"'),
      [`${LINUX_HOME}/logs`]: directory(), [`${LINUX_HOME}/logs/system.log`]: file('INFO Netzwerk bereit\nWARN Speicher fast voll\nINFO Dienst gestartet'),
      [`${LINUX_HOME}/shared`]: directory('770', 'student', 'shared'), [`${LINUX_HOME}/shared/report.txt`]: file('Interner Bericht', '600', 'root', 'shared'),
      '/var': directory('755', 'root', 'root'), '/var/log': directory('755', 'root', 'adm'), '/var/log/syslog': file('INFO Network ready\nERROR backup target unavailable\nINFO cron finished', '640', 'root', 'adm'),
      '/var/log/auth.log': file('sshd: Accepted publickey for student', '640', 'root', 'adm'), '/var/log/nginx': directory('755', 'root', 'adm'), '/var/log/nginx/error.log': file('ERROR connect() failed', '640', 'www-data', 'adm'),
      '/var/www': directory('755', 'root', 'root'), '/var/www/html': directory('755', 'www-data', 'www-data'), '/var/www/html/index.html': file('<h1>FISI Lab</h1>', '644', 'www-data', 'www-data'),
      '/tmp': directory('1777', 'root', 'root'), '/opt': directory('755', 'root', 'root'), '/usr': directory('755', 'root', 'root'),
    },
  }
}

export function normalizeCommand(input: string): string { return input.trim().replace(/\s+/g, ' ') }

function tokenize(input: string): string[] | null {
  const tokens: string[] = []; let current = ''; let quote = ''
  for (let index = 0; index < input.length; index++) {
    const character = input[index]
    if (quote) { if (character === quote) quote = ''; else current += character }
    else if (character === '"' || character === "'") quote = character
    else if (/\s/.test(character)) { if (current) { tokens.push(current); current = '' } }
    else current += character
  }
  if (quote) return null
  if (current) tokens.push(current)
  return tokens
}

function parent(path: string) { return path.slice(0, path.lastIndexOf('/')) || '/' }
function basename(path: string) { return path.split('/').pop() || '/' }
export function resolveLinuxPath(cwd: string, raw = ''): string {
  const expanded = raw === '~' || raw === '' ? LINUX_HOME : raw.startsWith('~/') ? LINUX_HOME + raw.slice(1) : raw
  const parts = (expanded.startsWith('/') ? expanded : `${cwd}/${expanded}`).split('/'); const resolved: string[] = []
  for (const part of parts) { if (!part || part === '.') continue; if (part === '..') resolved.pop(); else resolved.push(part) }
  return '/' + resolved.join('/')
}
function cloneSession(session: LinuxLabSession): LinuxLabSession {
  return { ...session, nodes: Object.fromEntries(Object.entries(session.nodes).map(([path, node]) => [path, { ...node }])), commandHistory: [...session.commandHistory], git: { ...session.git, staged: [...session.git.staged], commits: session.git.commits.map((commit) => ({ ...commit })), modified: [...(session.git.modified ?? [])] }, services: { ...session.services }, processes: session.processes.map((process) => ({ ...process })), users: Object.fromEntries(Object.entries(session.users).map(([name, user]) => [name, { ...user, groups: [...user.groups] }])) }
}
function children(session: LinuxLabSession, path: string, includeHidden = false) {
  return Object.keys(session.nodes).filter((candidate) => candidate !== path && parent(candidate) === path && (includeHidden || !basename(candidate).startsWith('.'))).sort((a, b) => basename(a).localeCompare(basename(b)))
}
function modeLabel(node: LinuxNode) {
  const triplet = (value: number) => `${value & 4 ? 'r' : '-'}${value & 2 ? 'w' : '-'}${value & 1 ? 'x' : '-'}`
  return `${node.type === 'dir' ? 'd' : '-'}${[...node.mode.slice(-3)].map(Number).map(triplet).join('')}`
}
function copyTree(session: LinuxLabSession, source: string, destination: string) {
  for (const path of Object.keys(session.nodes).filter((path) => path === source || path.startsWith(source + '/'))) session.nodes[destination + path.slice(source.length)] = { ...session.nodes[path] }
}
function result(session: LinuxLabSession, input: string, output = '', error = false, clear = false): LinuxCommandResult { session.commandHistory.push(input); return { session, output, error, clear } }
function fail(before: LinuxLabSession, input: string, output: string): LinuxCommandResult { return result(cloneSession(before), input, output, true) }
function wildcard(pattern: string) { return new RegExp(`^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.')}$`) }

function runCoreLinuxCommand(before: LinuxLabSession, rawInput: string): LinuxCommandResult {
  const input = rawInput.trim(); const tokens = tokenize(input)
  if (!tokens?.length) return fail(before, input, 'Gib einen Befehl ein.')
  if (/[;&|`]/.test(input)) return fail(before, input, 'Verkettung, Pipes und Shell-Ausdrücke sind in dieser sicheren Simulation deaktiviert.')
  const session = cloneSession(before); let [command, ...args] = tokens
  if (command === 'sudo') {
    if (!args.length) return result(session, input, 'sudo: In diesem Lab werden keine echten Administratorrechte vergeben. Versuche einen simulierten Befehl dahinter.')
    command = args[0]; args = args.slice(1)
  }
  const resolve = (value = '') => resolveLinuxPath(session.cwd, value)
  const exists = (path: string) => Boolean(session.nodes[path]); const isDirectory = (path: string) => session.nodes[path]?.type === 'dir'; const isFile = (path: string) => session.nodes[path]?.type === 'file'
  if (command === 'clear') return result(session, input, '', false, true)
  if (command === 'pwd') return result(session, input, session.cwd)
  if (command === 'whoami') return result(session, input, session.user)
  if (command === 'uname') return result(session, input, args.includes('-r') ? '6.8.0-fisi-lab' : args.includes('-a') ? 'Linux fisi-lab 6.8.0-fisi-lab x86_64 GNU/Linux' : 'Linux')
  if (command === 'history') return result(session, input, [...session.commandHistory, input].map((entry, index) => `${index + 1}  ${entry}`).join('\n'))
  if (command === 'ls') {
    const flags = args.filter((arg) => arg.startsWith('-')).join(''); const target = resolve(args.find((arg) => !arg.startsWith('-')) || '.')
    if (!exists(target)) return fail(before, input, `ls: ${target}: Datei oder Verzeichnis nicht gefunden`)
    const paths = isDirectory(target) ? children(session, target, flags.includes('a')) : [target]
    const output = flags.includes('l') ? paths.map((path) => `${modeLabel(session.nodes[path])} 1 ${session.user} ${session.user} ${String(session.nodes[path].content.length).padStart(4)} ${basename(path)}`).join('\n') : paths.map(basename).join('  ')
    return result(session, input, output)
  }
  if (command === 'cd') {
    const target = resolve(args[0]); if (!isDirectory(target)) return fail(before, input, `cd: ${args[0] || '~'}: Verzeichnis nicht gefunden`)
    session.cwd = target; return result(session, input)
  }
  if (command === 'mkdir') {
    const values = args.filter((arg) => !arg.startsWith('-')); if (!values.length) return fail(before, input, 'mkdir: Ordnername fehlt')
    for (const value of values) { const target = resolve(value); if (exists(target)) return fail(before, input, `mkdir: ${value}: existiert bereits`); if (!isDirectory(parent(target))) return fail(before, input, `mkdir: ${parent(target)}: Oberordner fehlt`); session.nodes[target] = directory() }
    return result(session, input)
  }
  if (command === 'touch') {
    if (!args.length) return fail(before, input, 'touch: Dateiname fehlt')
    for (const value of args) { const target = resolve(value); if (!isDirectory(parent(target))) return fail(before, input, `touch: ${value}: Zielordner fehlt`); if (!exists(target)) session.nodes[target] = file() }
    return result(session, input)
  }
  if (command === 'cat') { if (!args.length || !isFile(resolve(args[0]))) return fail(before, input, `cat: ${args[0] || ''}: Datei nicht gefunden`); return result(session, input, session.nodes[resolve(args[0])].content) }
  if (command === 'echo') {
    const redirect = args.findIndex((arg) => arg === '>' || arg === '>>')
    if (redirect >= 0) { const target = resolve(args[redirect + 1]); if (!args[redirect + 1] || !isDirectory(parent(target))) return fail(before, input, 'echo: ungültiges Umleitungsziel'); const content = args.slice(0, redirect).join(' '); session.nodes[target] = file(args[redirect] === '>>' && isFile(target) ? `${session.nodes[target].content}\n${content}` : content); return result(session, input) }
    return result(session, input, args.join(' '))
  }
  if (command === 'cp' || command === 'mv') {
    const values = args.filter((arg) => !arg.startsWith('-')); if (values.length !== 2) return fail(before, input, `${command}: Quelle und Ziel werden benötigt`)
    const source = resolve(values[0]); let destination = resolve(values[1]); if (!exists(source)) return fail(before, input, `${command}: ${values[0]}: Quelle nicht gefunden`); if (isDirectory(destination)) destination = resolveLinuxPath(destination, basename(source)); if (!isDirectory(parent(destination))) return fail(before, input, `${command}: Zielordner fehlt`); if (isDirectory(source) && command === 'cp' && !args.some((arg) => arg.includes('r'))) return fail(before, input, 'cp: Ordner benötigen die Option -r')
    copyTree(session, source, destination); if (command === 'mv') for (const path of Object.keys(session.nodes).filter((path) => path === source || path.startsWith(source + '/'))) delete session.nodes[path]
    return result(session, input)
  }
  if (command === 'rm') {
    const value = args.find((arg) => !arg.startsWith('-')); const target = resolve(value); if (!value || !exists(target)) return fail(before, input, `rm: ${value || ''}: Datei nicht gefunden`); if (target === '/' || target === LINUX_HOME || target === '/home') return fail(before, input, 'rm: Dieser geschützte Systempfad kann im Lernlabor nicht gelöscht werden.'); if (isDirectory(target) && !args.some((arg) => arg.includes('r'))) return fail(before, input, 'rm: Ordner benötigen die Option -r'); for (const path of Object.keys(session.nodes).filter((path) => path === target || path.startsWith(target + '/'))) delete session.nodes[path]; return result(session, input)
  }
  if (command === 'chmod') { const [mode, rawPath] = args; const target = resolve(rawPath); if (!/^[0-7]{3}$/.test(mode || '') || !exists(target)) return fail(before, input, 'chmod: Nutze einen dreistelligen Oktalmodus und einen vorhandenen Pfad.'); session.nodes[target].mode = mode; return result(session, input) }
  if (command === 'grep') {
    const [pattern, rawPath] = args.filter((arg) => !arg.startsWith('-')); const target = resolve(rawPath); if (!pattern || !isFile(target)) return fail(before, input, 'grep: Suchbegriff und vorhandene Datei werden benötigt'); const insensitive = args.includes('-i'); const matches = session.nodes[target].content.split('\n').filter((line) => insensitive ? line.toLowerCase().includes(pattern.toLowerCase()) : line.includes(pattern)); return result(session, input, matches.join('\n'), matches.length === 0)
  }
  if (command === 'find') {
    const start = resolve(args[0] || '.'); const nameIndex = args.indexOf('-name'); const pattern = nameIndex >= 0 ? args[nameIndex + 1] : '*'; if (!exists(start)) return fail(before, input, `find: ${args[0]}: Pfad nicht gefunden`); const matcher = wildcard(pattern || '*'); const matches = Object.keys(session.nodes).filter((path) => (path === start || path.startsWith(start + '/')) && matcher.test(basename(path))); return result(session, input, matches.join('\n'))
  }
  if (command === 'nano' || command === 'vim') { const target = resolve(args[0]); if (!args[0] || !isDirectory(parent(target))) return fail(before, input, `${command}: gültiger Dateipfad fehlt`); if (!exists(target)) session.nodes[target] = file(); return result(session, input, `${command}: vereinfachter Editor geöffnet. Nutze echo "Text" > ${args[0]}, um Inhalt zu speichern.`) }
  if (command === 'git') {
    const [subcommand, ...gitArgs] = args
    if (subcommand === 'init') { session.git.initialized = true; return result(session, input, `Leeres Git-Repository in ${session.cwd}/.git/ initialisiert.`) }
    if (!session.git.initialized) return fail(before, input, 'fatal: Kein Git-Repository. Starte mit git init.')
    if (subcommand === 'status') return result(session, input, session.git.staged.length ? `Zum Commit vorgemerkte Änderungen:\n  ${session.git.staged.join('\n  ')}` : 'Auf Branch main\nnichts zu committen, Arbeitsverzeichnis sauber')
    if (subcommand === 'add') { const target = gitArgs[0]; if (!target) return fail(before, input, 'git add: Dateiname fehlt'); session.git.staged = target === '.' ? Object.keys(session.nodes).filter((path) => path.startsWith(session.cwd + '/') && isFile(path)).map(basename) : [...new Set([...session.git.staged, target])]; return result(session, input) }
    if (subcommand === 'commit') { const messageIndex = gitArgs.indexOf('-m'); const message = messageIndex >= 0 ? gitArgs[messageIndex + 1] : ''; if (!message || !session.git.staged.length) return fail(before, input, 'git commit: Vorgemerkte Änderungen und eine Nachricht mit -m werden benötigt'); const hash = `fisi${String(session.git.commits.length + 1).padStart(3, '0')}`; session.git.commits.push({ hash, message }); session.git.staged = []; return result(session, input, `[main ${hash}] ${message}`) }
    if (subcommand === 'log') return result(session, input, session.git.commits.length ? [...session.git.commits].reverse().map((commit) => `commit ${commit.hash}\n    ${commit.message}`).join('\n\n') : 'Noch keine Commits vorhanden.')
    if (subcommand === 'branch') return result(session, input, '* main')
    return fail(before, input, `git ${subcommand || ''}: In diesem Lab nicht verfügbar`)
  }
  return fail(before, input, `${command}: Befehl nicht gefunden. Öffne die Schnellhilfe für unterstützte Befehle.`)
}

export const supportedLinuxCommands = ['pwd', 'ls', 'cd', 'mkdir', 'touch', 'cp', 'mv', 'rm', 'rmdir', 'cat', 'head', 'tail', 'less', 'tree', 'stat', 'file', 'echo', 'grep', 'find', 'wc', 'sort', 'uniq', 'whoami', 'id', 'groups', 'passwd', 'useradd', 'usermod', 'userdel', 'chmod', 'chown', 'chgrp', 'sudo', 'ps', 'top', 'kill', 'jobs', 'systemctl', 'journalctl', 'hostname', 'ip', 'ping', 'ss', 'curl', 'traceroute', 'apt', 'uname', 'date', 'env', 'which', 'history', 'clear', 'help', 'man', 'nano', 'vim', 'git'] as const

export function completeLinuxCommand(session: LinuxLabSession, input: string): string {
  const parts = input.split(/\s+/); const current = parts[parts.length - 1] ?? ''
  if (parts.length === 1) return supportedLinuxCommands.find((item) => item.startsWith(current)) ?? input
  const target = resolveLinuxPath(session.cwd, current); const match = children(session, parent(target), true).find((path) => basename(path).startsWith(basename(target)))
  if (!match) return input
  parts[parts.length - 1] = `${current.includes('/') ? current.slice(0, current.lastIndexOf('/') + 1) : ''}${basename(match)}`
  return parts.join(' ')
}

const manPages: Record<string, string> = {
  ls: 'ls [OPTION] [PFAD] — Inhalte anzeigen. Beispiel: ls -la /etc', chmod: 'chmod MODUS DATEI — Rechte ändern. Beispiel: chmod 640 report.txt',
  grep: 'grep [OPTION] MUSTER DATEI — Zeilen suchen. Beispiel: grep ERROR /var/log/syslog', systemctl: 'systemctl status|start|stop|restart DIENST — simulierte Dienste verwalten.',
  ip: 'ip addr | ip route — simulierte Adressen und Routingtabelle anzeigen.', git: 'git status|add|commit|log|diff|branch — simulierte Versionsverwaltung.',
}

export function runLinuxCommand(before: LinuxLabSession, rawInput: string): LinuxCommandResult {
  const input = rawInput.trim(); const parsed = tokenize(input)
  if (!parsed?.length) return fail(before, input, 'Gib einen Befehl ein.')
  if (/[;&|`]|\$\(|\r|\n/.test(input)) return fail(before, input, 'Shell-Verkettung, Pipes und Ausdrücke sind in dieser sicheren Simulation deaktiviert.')
  const session = cloneSession(before); const sudo = parsed[0] === 'sudo'; const [command, ...args] = sudo ? parsed.slice(1) : parsed
  const done = (output = '', error = false, clear = false) => result(session, input, output, error, clear)
  const target = (value = '') => resolveLinuxPath(session.cwd, value)
  const node = (value = '') => session.nodes[target(value)]
  if (command === 'help') return done(`Unterstützte Befehle:\n${supportedLinuxCommands.join(' · ')}\n\nNutze man BEFEHL für Hilfe.`)
  if (command === 'man') return args[0] ? done(manPages[args[0]] ?? `${args[0]} — kompakte Hilfe ist in der Befehlsübersicht verfügbar.`) : done('man: Welchen Eintrag möchtest du lesen?', true)
  if (command === 'hostname') return done(session.hostname)
  if (command === 'date') return done('Do 1. Okt 2026 09:00:00 CEST')
  if (command === 'env') return done(`USER=${session.user}\nHOME=${LINUX_HOME}\nSHELL=/bin/bash\nLANG=de_DE.UTF-8\nPATH=/usr/local/bin:/usr/bin:/bin`)
  if (command === 'which') return args[0] && supportedLinuxCommands.includes(args[0] as never) ? done(`/usr/bin/${args[0]}`) : done(`${args[0] || ''} nicht gefunden`, true)
  if (command === 'head' || command === 'tail' || command === 'less') { const pathArgs = args.filter((arg) => !arg.startsWith('-') && !/^\d+$/.test(arg)); const rawPath = pathArgs[pathArgs.length - 1]; const source = node(rawPath); if (!rawPath || source?.type !== 'file') return done(`${command}: ${rawPath || ''}: Datei oder Verzeichnis nicht gefunden`, true); const lines = source.content.split('\n'); const index = args.indexOf('-n'); const count = index >= 0 ? Number(args[index + 1]) : 10; const output = command === 'head' ? lines.slice(0, count).join('\n') : command === 'tail' ? lines.slice(-count).join('\n') : `${source.content}\n\n(vereinfachte Ansicht – Ende)`; return done(output) }
  if (command === 'tree') { const start = target(args[0] || '.'); if (!session.nodes[start]) return done(`tree: ${args[0]}: Datei oder Verzeichnis nicht gefunden`, true); return done(Object.keys(session.nodes).filter((path) => path === start || path.startsWith(start + '/')).sort().map((path) => `${'  '.repeat(Math.max(0, path.split('/').length - start.split('/').length))}${basename(path)}${session.nodes[path].type === 'dir' ? '/' : ''}`).join('\n')) }
  if (command === 'stat') { const source = node(args[0]); if (!source) return done(`stat: '${args[0] || ''}' nicht gefunden`, true); return done(`Datei: ${target(args[0])}\nTyp: ${source.type === 'dir' ? 'Verzeichnis' : 'reguläre Datei'}\nZugriff: (${source.mode})  Besitzer: ${source.owner ?? 'student'}  Gruppe: ${source.group ?? 'student'}`) }
  if (command === 'file') { const source = node(args[0]); if (!source) return done(`${args[0]}: kann nicht geöffnet werden`, true); return done(`${args[0]}: ${source.type === 'dir' ? 'directory' : source.content.startsWith('#!') ? 'shell script, UTF-8 text executable' : 'UTF-8 text'}`) }
  if (command === 'rmdir') { const path = target(args[0]); if (!session.nodes[path] || session.nodes[path].type !== 'dir') return done(`rmdir: '${args[0] || ''}': Datei oder Verzeichnis nicht gefunden`, true); if (children(session, path, true).length) return done(`rmdir: '${args[0]}': Verzeichnis nicht leer`, true); delete session.nodes[path]; return done() }
  if (command === 'wc' || command === 'sort' || command === 'uniq') { const pathArgs = args.filter((arg) => !arg.startsWith('-')); const rawPath = pathArgs[pathArgs.length - 1]; const source = node(rawPath); if (!rawPath || source?.type !== 'file') return done(`${command}: ${rawPath || ''}: Datei nicht gefunden`, true); const lines = source.content.split('\n'); if (command === 'sort') return done([...lines].sort().join('\n')); if (command === 'uniq') return done(lines.filter((line, index) => index === 0 || line !== lines[index - 1]).join('\n')); const words = source.content.trim().split(/\s+/).filter(Boolean).length; return done(args.includes('-l') ? String(lines.length) : `${lines.length} ${words} ${source.content.length} ${rawPath}`) }
  if (command === 'id' || command === 'groups') { const name = args[0] || session.user; const user = session.users[name]; if (!user) return done(`${command}: '${name}': Benutzer nicht gefunden`, true); return done(command === 'groups' ? `${name} : ${user.groups.join(' ')}` : `uid=${user.uid}(${name}) gid=${user.uid}(${name}) Gruppen=${user.groups.join(',')}`) }
  if (command === 'passwd') return done('passwd: Passwortänderung wird in diesem sicheren Lab nur erklärt, nicht gespeichert.')
  if (command === 'useradd') { const name = args[args.length - 1]; if (!sudo) return done('useradd: Permission denied. Nutze sudo in der Simulation.', true); if (!name || name.startsWith('-') || session.users[name]) return done(`useradd: Benutzer '${name || ''}' kann nicht angelegt werden`, true); const uid = 1000 + Object.keys(session.users).length; session.users[name] = { uid, groups: [name] }; if (args.includes('-m')) session.nodes[`/home/${name}`] = directory('750', name, name); return done() }
  if (command === 'usermod') { const name = args[args.length - 1]; const groupAt = args.findIndex((arg) => arg === '-aG' || arg === '-G'); const group = args[groupAt + 1]; if (!sudo || !name || !group || !session.users[name]) return done('usermod: Nutze sudo usermod -aG GRUPPE BENUTZER', true); session.users[name].groups = [...new Set([...session.users[name].groups, group])]; return done() }
  if (command === 'userdel') { const name = args[args.length - 1]; if (!sudo || !name || !session.users[name] || name === 'student') return done(`userdel: Benutzer '${name || ''}' kann nicht entfernt werden`, true); if (args.includes('-r')) for (const path of Object.keys(session.nodes).filter((path) => path === `/home/${name}` || path.startsWith(`/home/${name}/`))) delete session.nodes[path]; delete session.users[name]; return done() }
  if (command === 'chown' || command === 'chgrp') { const [identity, rawPath] = args; const source = node(rawPath); if (!source) return done(`${command}: Zugriff auf '${rawPath || ''}' nicht möglich: Datei nicht gefunden`, true); if (command === 'chgrp') source.group = identity; else { const [owner, group] = identity.split(':'); if (owner) source.owner = owner; if (group) source.group = group } return done() }
  if (command === 'ps' || command === 'top') return done(`${command === 'top' ? 'top - 09:00:00, load average: 0.05, 0.03, 0.01\n' : ''}  PID USER     COMMAND\n${session.processes.map((item) => `${String(item.pid).padStart(5)} ${item.user.padEnd(8)} ${item.command}`).join('\n')}`)
  if (command === 'kill') { const pidArg = args[args.length - 1]; const pid = Number(pidArg); if (!session.processes.some((item) => item.pid === pid) || pid === 1) return done(`kill: (${pidArg}): Kein passender Prozess`, true); session.processes = session.processes.filter((item) => item.pid !== pid); return done() }
  if (command === 'jobs') return done('Keine Hintergrundjobs in dieser simulierten Shell.')
  if (command === 'systemctl') { const [action, name] = args; if (!name || !session.services[name]) return done(`Unit ${name || ''}.service konnte nicht gefunden werden.`, true); if (action === 'status') return done(`● ${name}.service\n   Active: ${session.services[name] === 'running' ? 'active (running)' : session.services[name] === 'failed' ? 'failed' : 'inactive (dead)'}`, session.services[name] !== 'running'); if (['start', 'stop', 'restart'].includes(action)) { session.services[name] = action === 'stop' ? 'stopped' : 'running'; return done() } return done('systemctl: status, start, stop oder restart erwartet', true) }
  if (command === 'journalctl') return done(args.includes('nginx') ? 'nginx: service stopped\nnginx: website unavailable' : 'systemd: Started FISI Lab\nbackup: ERROR target unavailable')
  if (command === 'ip') return done(args[0] === 'route' ? 'default via 192.168.56.1 dev eth0\n192.168.56.0/24 dev eth0 src 192.168.56.10' : '1: lo: <LOOPBACK,UP>\n    inet 127.0.0.1/8\n2: eth0: <BROADCAST,MULTICAST,UP>\n    inet 192.168.56.10/24')
  if (command === 'ping') return args[0] ? done(`PING ${args[0]} (192.168.56.1)\n64 bytes: icmp_seq=1 ttl=64 time=0.8 ms\n1 packets transmitted, 1 received, 0% packet loss`) : done('ping: Ziel fehlt', true)
  if (command === 'ss') return done('Netid State  Local Address:Port\ntcp   LISTEN 0.0.0.0:22\ntcp   LISTEN 127.0.0.1:3000')
  if (command === 'curl') return args[0]?.includes('localhost') && session.services.nginx === 'running' ? done('<h1>FISI Lab</h1>') : done('curl: (7) Verbindung zum Ziel fehlgeschlagen', true)
  if (command === 'traceroute') return done(`traceroute to ${args[0] || 'gateway'}\n 1  192.168.56.1  0.8 ms\n 2  10.0.0.1  4.2 ms`)
  if (command === 'apt') return args[0] === 'update' ? done('Paketlisten werden gelesen... Fertig') : ['install', 'remove'].includes(args[0]) && args[1] ? done(`${args[1]} wurde sicher simuliert ${args[0] === 'install' ? 'installiert' : 'entfernt'}.`) : done('apt: Nutze update, install PAKET oder remove PAKET.', true)
  if (command === 'git' && args[0] === 'diff' && before.git.initialized) return done((before.git.modified ?? []).length ? before.git.modified!.map((item) => `diff --git a/${item} b/${item}\n+ simulierte Änderung`).join('\n') : '')
  return runCoreLinuxCommand(before, rawInput)
}

// Backward-compatible helpers for existing imports.
export const virtualLinux = { user: 'student', directory: LINUX_HOME, kernel: '6.8.0-fisi-lab' } as const
export const simulatedCommands = {
  whoami: 'student',
  pwd: LINUX_HOME,
  date: 'Mo 30. Sep 2026 10:30:00 CEST',
  'uname -r': '6.8.0-fisi-lab',
  'cat /etc/os-release': 'PRETTY_NAME="Ubuntu 24.04 LTS (Simulation)"\nNAME="Ubuntu"\nVERSION_ID="24.04"',
  ls: 'Dokumente  Downloads  logs  scripts  willkommen.txt',
  exit: 'Simulierte Sitzung beendet.',
} as const
export type SimulatedCommand = keyof typeof simulatedCommands
export function evaluateCommand(input: string, expected: SimulatedCommand) { const normalized = normalizeCommand(input); return { correct: normalized === expected, output: normalized === expected ? simulatedCommands[expected] : null } }
