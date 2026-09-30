// Deterministic in-memory Linux lab. No input is ever passed to the host shell or network.
export type LinuxNode = { type: 'dir' | 'file'; content: string; mode: string }
export interface GitState { initialized: boolean; staged: string[]; commits: { hash: string; message: string }[] }
export interface LinuxLabSession { cwd: string; user: string; hostname: string; nodes: Record<string, LinuxNode>; commandHistory: string[]; git: GitState }
export interface LinuxCommandResult { session: LinuxLabSession; output: string; error?: boolean; clear?: boolean }

export const LINUX_HOME = '/home/student'
const directory = (mode = '755'): LinuxNode => ({ type: 'dir', content: '', mode })
const file = (content = '', mode = '644'): LinuxNode => ({ type: 'file', content, mode })

export function createLinuxLabSession(): LinuxLabSession {
  return {
    cwd: LINUX_HOME, user: 'student', hostname: 'fisi-lab', commandHistory: [],
    git: { initialized: false, staged: [], commits: [] },
    nodes: {
      '/': directory(), '/etc': directory(),
      '/etc/os-release': file('PRETTY_NAME="Ubuntu 24.04 LTS (Simulation)"\nNAME="Ubuntu"\nVERSION_ID="24.04"'),
      '/home': directory(), [LINUX_HOME]: directory('750'),
      [`${LINUX_HOME}/Dokumente`]: directory(), [`${LINUX_HOME}/Downloads`]: directory(),
      [`${LINUX_HOME}/willkommen.txt`]: file('Willkommen im sicheren FISI Linux Lab.\nHier werden keine echten Systembefehle ausgeführt.'),
      [`${LINUX_HOME}/scripts`]: directory(), [`${LINUX_HOME}/scripts/backup.sh`]: file('#!/bin/bash\necho "Backup gestartet"'),
      [`${LINUX_HOME}/logs`]: directory(), [`${LINUX_HOME}/logs/system.log`]: file('INFO Netzwerk bereit\nWARN Speicher fast voll\nINFO Dienst gestartet'),
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
  return { ...session, nodes: Object.fromEntries(Object.entries(session.nodes).map(([path, node]) => [path, { ...node }])), commandHistory: [...session.commandHistory], git: { ...session.git, staged: [...session.git.staged], commits: session.git.commits.map((commit) => ({ ...commit })) } }
}
function children(session: LinuxLabSession, path: string, includeHidden = false) {
  return Object.keys(session.nodes).filter((candidate) => candidate !== path && parent(candidate) === path && (includeHidden || !basename(candidate).startsWith('.'))).sort((a, b) => basename(a).localeCompare(basename(b)))
}
function modeLabel(node: LinuxNode) {
  const triplet = (value: number) => `${value & 4 ? 'r' : '-'}${value & 2 ? 'w' : '-'}${value & 1 ? 'x' : '-'}`
  return `${node.type === 'dir' ? 'd' : '-'}${[...node.mode].map(Number).map(triplet).join('')}`
}
function copyTree(session: LinuxLabSession, source: string, destination: string) {
  for (const path of Object.keys(session.nodes).filter((path) => path === source || path.startsWith(source + '/'))) session.nodes[destination + path.slice(source.length)] = { ...session.nodes[path] }
}
function result(session: LinuxLabSession, input: string, output = '', error = false, clear = false): LinuxCommandResult { session.commandHistory.push(input); return { session, output, error, clear } }
function fail(before: LinuxLabSession, input: string, output: string): LinuxCommandResult { return result(cloneSession(before), input, output, true) }
function wildcard(pattern: string) { return new RegExp(`^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.')}$`) }

export function runLinuxCommand(before: LinuxLabSession, rawInput: string): LinuxCommandResult {
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
