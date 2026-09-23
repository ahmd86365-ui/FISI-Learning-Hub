import { normalizePath, parseCommand } from './linuxDayTwoSimulator'

export type DayThreeNode = { type: 'dir' | 'file' | 'symlink'; content: string; target?: string; modified: number; owner: string; group: string }
export type DayThreeSession = { cwd: string; nodes: Record<string, DayThreeNode>; tick: number; output: string }
export type DayThreeResult = { session: DayThreeSession; output: string; error?: string }
export const DAY_THREE_HOME = '/home/andre'

const node = (type: DayThreeNode['type'], content = '', modified = 0, owner = 'root', group = 'root', target?: string): DayThreeNode => ({ type, content, modified, owner, group, target })
const parent = (path: string) => path.slice(0, path.lastIndexOf('/')) || '/'
const basename = (path: string) => path.split('/').pop() || '/'
const clone = (state: DayThreeSession): DayThreeSession => ({ ...state, nodes: Object.fromEntries(Object.entries(state.nodes).map(([path, value]) => [path, { ...value }])) })

export function createDayThreeSession(): DayThreeSession {
  const nodes: Record<string, DayThreeNode> = {}
  const dirs = ['/', '/bin', '/sbin', '/etc', '/home', DAY_THREE_HOME, `${DAY_THREE_HOME}/Desktop`, `${DAY_THREE_HOME}/Dokumente`, `${DAY_THREE_HOME}/linux-kurs`, '/var', '/var/log', '/tmp', '/usr', '/usr/bin', '/usr/lib', '/usr/sbin', '/lib', '/boot', '/dev', '/proc', '/sys', '/media', '/mnt', '/opt', '/srv', '/run']
  for (const path of dirs) nodes[path] = node('dir', '', 1, path.startsWith(DAY_THREE_HOME) ? 'andre' : 'root', path.startsWith(DAY_THREE_HOME) ? 'andre' : 'root')
  nodes['/bin'] = node('symlink', '', 1, 'root', 'root', '/usr/bin')
  nodes['/lib'] = node('symlink', '', 1, 'root', 'root', '/usr/lib')
  nodes['/sbin'] = node('symlink', '', 1, 'root', 'root', '/usr/sbin')
  nodes['/usr/bin/ls'] = node('file', 'simuliertes Programm ls', 2)
  nodes['/usr/bin/cp'] = node('file', 'simuliertes Programm cp', 2)
  nodes['/bin/ls'] = node('symlink', '', 2, 'root', 'root', '/usr/bin/ls')
  nodes['/bin/cp'] = node('symlink', '', 2, 'root', 'root', '/usr/bin/cp')
  nodes['/var/log/syslog'] = node('file', 'Sep 23 08:00 lubuntu systemd: Simulierter Start\nSep 23 08:01 lubuntu kernel: Simulation bereit', 3)
  nodes['/var/log/auth.log'] = node('file', 'Simulierte Anmeldeereignisse', 2)
  nodes['/etc/hostname'] = node('file', 'lubuntu', 3)
  nodes['/etc/hosts'] = node('file', '127.0.0.1 localhost\n127.0.1.1 lubuntu', 3)
  nodes['/etc/os-release'] = node('file', 'PRETTY_NAME="Lubuntu 24.04 LTS (Simulation)"\nNAME="Lubuntu"\nVERSION_ID="24.04"\nID=ubuntu', 3)
  nodes['/etc/passwd'] = node('file', [
    'root:x:0:0:root:/root:/bin/bash', 'daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin', 'bin:x:2:2:bin:/bin:/usr/sbin/nologin',
    'syslog:x:104:110::/home/syslog:/usr/sbin/nologin', 'systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin',
    'nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin', 'andre:x:1000:1000:Andre,,,:/home/andre:/bin/bash',
  ].join('\n'), 4)
  nodes['/etc/shadow'] = node('file', 'Nicht lesbar: simulierte geschützte Passwortdatei', 4)
  nodes['/proc/cpuinfo'] = node('file', 'processor\t: 0\nvendor_id\t: SimulatedCPU\ncpu family\t: 6\nmodel\t\t: 142\nmodel name\t: Linux Campus Virtual CPU', 4)
  nodes['/dev/sda'] = node('file', 'simuliertes Blockgerät', 1)
  nodes['/dev/sda1'] = node('file', 'simulierte Partition', 1)
  nodes[`${DAY_THREE_HOME}/.bashrc`] = node('file', '# Simulierte Bash-Einstellungen', 2, 'andre', 'andre')
  nodes[`${DAY_THREE_HOME}/.profile`] = node('file', '# Simuliertes Profil', 2, 'andre', 'andre')
  return { cwd: DAY_THREE_HOME, nodes, tick: 10, output: '' }
}

function resolveLink(state: DayThreeSession, path: string, seen = new Set<string>()): string | null {
  const current = state.nodes[path]
  if (!current) return null
  if (current.type !== 'symlink') return path
  if (seen.has(path) || !current.target) return null
  seen.add(path)
  const destination = normalizePath(parent(path), current.target)
  return resolveLink(state, destination, seen)
}

function children(state: DayThreeSession, path: string, includeHidden: boolean) {
  return Object.keys(state.nodes).filter(item => item !== path && parent(item) === path && (includeHidden || !basename(item).startsWith('.')))
}

function mode(value: DayThreeNode) { return value.type === 'dir' ? 'drwxr-xr-x' : value.type === 'symlink' ? 'lrwxrwxrwx' : '-rw-r--r--' }
function size(value: DayThreeNode) { return value.type === 'dir' ? 4096 : value.type === 'symlink' ? (value.target?.length || 0) : new TextEncoder().encode(value.content).length }
function detail(path: string, value: DayThreeNode, human: boolean) {
  const bytes = size(value), display = human && bytes >= 1024 ? `${(bytes / 1024).toFixed(1)}K` : String(bytes)
  return `${mode(value)} 1 ${value.owner} ${value.group} ${display} Sep 23 10:${String(value.modified).padStart(2, '0')} ${basename(path)}${value.type === 'symlink' ? ` -> ${value.target}` : ''}`
}

function listPath(state: DayThreeSession, path: string, flags: string): string {
  const own = state.nodes[path]
  if (!own) return `ls: ${path}: Datei oder Verzeichnis nicht gefunden`
  if (flags.includes('d') || own.type !== 'dir') return flags.includes('l') ? detail(path, own, flags.includes('h')) : basename(path)
  let entries = children(state, path, flags.includes('a'))
  if (flags.includes('t')) entries = entries.sort((a, b) => state.nodes[b].modified - state.nodes[a].modified || a.localeCompare(b))
  const values = entries.map(item => flags.includes('l') ? detail(item, state.nodes[item], flags.includes('h')) : basename(item))
  if (flags.includes('a')) values.unshift(flags.includes('l') ? 'drwxr-xr-x 1 andre andre 4096 Sep 23 10:00 ..' : '..') && values.unshift(flags.includes('l') ? 'drwxr-xr-x 1 andre andre 4096 Sep 23 10:00 .' : '.')
  return values.join(flags.includes('l') ? '\n' : '  ')
}

function fail(state: DayThreeSession, error: string): DayThreeResult { return { session: state, output: '', error } }

export function saveNanoFile(before: DayThreeSession, rawPath: string, content: string): DayThreeSession {
  const state = clone(before), path = normalizePath(state.cwd, rawPath)
  if (state.nodes[parent(path)]?.type !== 'dir') throw new Error('Der Zielordner existiert nicht.')
  state.nodes[path] = node('file', content, ++state.tick, 'andre', 'andre')
  return state
}

export function runDayThreeCommand(before: DayThreeSession, input: string): DayThreeResult {
  const parts = parseCommand(input)
  if (!parts?.length) return fail(before, 'Gib einen gültigen Befehl ein.')
  const state = clone(before), [command, ...args] = parts
  const flags = args.filter(value => /^-[a-z]+$/i.test(value)).join('')
  const values = args.filter(value => !/^-[a-z]+$/i.test(value))
  const resolve = (value: string) => normalizePath(state.cwd, value)
  let output = ''
  if (command === 'pwd') output = state.cwd
  else if (command === 'cd') {
    const destination = resolve(args[0] || '~'), actual = resolveLink(state, destination)
    if (!actual || state.nodes[actual]?.type !== 'dir') return fail(before, `cd: ${args[0] || '~'}: Verzeichnis nicht gefunden`)
    state.cwd = destination
  } else if (command === 'ls') {
    const targets = values.length ? values.map(resolve) : [state.cwd]
    output = targets.map(path => listPath(state, path, flags)).join('\n')
  } else if (command === 'mkdir') {
    if (!values.length) return fail(before, 'mkdir braucht einen Pfad.')
    for (const raw of values) {
      const destination = resolve(raw), segments = destination.split('/').filter(Boolean); let current = ''
      for (let i = 0; i < segments.length; i++) { current += '/' + segments[i]; if (!state.nodes[current]) { if (i < segments.length - 1 && !flags.includes('p')) return fail(before, 'Ein Oberordner fehlt; nutze -p.'); state.nodes[current] = node('dir', '', ++state.tick, 'andre', 'andre') } }
    }
  } else if (command === 'cat' || command === 'head' || command === 'tail') {
    const nIndex = args.indexOf('-n'), amount = nIndex >= 0 ? Number(args[nIndex + 1]) : command === 'cat' ? Infinity : 10
    const fileArgs = values.filter(value => value !== String(amount))
    if (!fileArgs.length) return fail(before, `${command} braucht eine Datei.`)
    const outputs: string[] = []
    for (const raw of fileArgs) { const path = resolve(raw), actual = resolveLink(state, path); if (!actual || state.nodes[actual]?.type !== 'file') return fail(before, `${command}: ${raw}: Datei oder Linkziel nicht gefunden`); const lines = state.nodes[actual].content.split('\n'); outputs.push(command === 'head' ? lines.slice(0, amount).join('\n') : command === 'tail' ? lines.slice(-amount).join('\n') : lines.join('\n')) }
    output = outputs.join('\n')
  } else if (command === 'wc' && flags.includes('l')) {
    const raw = values[0], path = raw && resolve(raw), actual = path && resolveLink(state, path)
    if (!actual || state.nodes[actual]?.type !== 'file') return fail(before, 'wc: Datei nicht gefunden')
    const content = state.nodes[actual].content; output = `${content ? content.split('\n').length : 0} ${raw}`
  } else if (command === 'ln' && flags.includes('s')) {
    if (values.length !== 2) return fail(before, 'ln -s braucht Ziel und Linknamen.')
    const link = resolve(values[1]); if (!state.nodes[parent(link)] || state.nodes[link]) return fail(before, 'ln: Link kann hier nicht angelegt werden.')
    state.nodes[link] = node('symlink', '', ++state.tick, 'andre', 'andre', values[0])
  } else if (command === 'rm') {
    for (const raw of values) { const path = resolve(raw); if (!state.nodes[path] || state.nodes[path].type === 'dir') return fail(before, 'rm: Datei nicht gefunden oder ist ein Ordner.'); delete state.nodes[path] }
  } else if (command === 'nano') {
    if (values.length !== 1) return fail(before, 'nano braucht genau einen Dateinamen.')
    output = `NANO:${values[0]}`
  } else return fail(before, `Befehl ${command} ist in der Tag-3-Simulation nicht verfügbar.`)
  state.output = output
  return { session: state, output }
}

export function isBrokenLink(state: DayThreeSession, path: string) { return state.nodes[path]?.type === 'symlink' && resolveLink(state, path) === null }
