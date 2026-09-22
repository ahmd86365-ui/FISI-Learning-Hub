// A small, deterministic in-memory model for Linux Campus day 2. No host commands or files are used.
export type VirtualNode = { type: 'dir' | 'file'; content: string; modified: number }
export type DayTwoSession = { cwd: string; previous: string; nodes: Record<string, VirtualNode>; history: string[]; tick: number; screen: string }
export type CommandResult = { session: DayTwoSession; output: string; error?: string; deletion?: string[] }
export const HOME = '/home/andre'

function add(nodes: Record<string, VirtualNode>, path: string, type: 'dir' | 'file', content = '') {
  nodes[path] = { type, content, modified: 0 }
}

export function normalizePath(cwd: string, value: string): string {
  const expanded = value === '~' ? HOME : value.startsWith('~/') ? HOME + value.slice(1) : value
  const parts = (expanded.startsWith('/') ? expanded : `${cwd}/${expanded}`).split('/')
  const stack: string[] = []
  for (const part of parts) {
    if (!part || part === '.') continue
    if (part === '..') stack.pop()
    else stack.push(part)
  }
  return '/' + stack.join('/')
}

function parent(path: string) { return path.slice(0, path.lastIndexOf('/')) || '/' }
function name(path: string) { const parts = path.split('/'); return parts[parts.length - 1] || '/' }
function children(session: DayTwoSession, path: string, hidden = false) {
  return Object.keys(session.nodes).filter(key => key !== path && parent(key) === path && (hidden || !name(key).startsWith('.'))).sort()
}

export function createDayTwoSession(scene = 'home'): DayTwoSession {
  const nodes: Record<string, VirtualNode> = {}
  for (const path of ['/', '/home', HOME, `${HOME}/Desktop`, `${HOME}/Dokumente`, `${HOME}/Downloads`, `${HOME}/linux-kurs`, '/etc', '/var', '/var/log']) add(nodes, path, 'dir')
  add(nodes, `${HOME}/.bashrc`, 'file', '# Bash-Einstellungen\nexport PATH=$HOME/bin:$PATH\nalias ll="ls -l"\n# Farben\n# Ende')
  add(nodes, `${HOME}/.profile`, 'file', '# Profil')
  add(nodes, '/etc/os-release', 'file', 'PRETTY_NAME="Ubuntu 22.04.4 LTS"\nNAME="Ubuntu"\nVERSION_ID="22.04"\nID=ubuntu\nHOME_URL="https://ubuntu.com"')
  add(nodes, '/etc/hosts', 'file', '127.0.0.1 localhost')
  let cwd = HOME
  if (scene === 'navigation') { add(nodes, `${HOME}/linux-kurs/tag02`, 'dir') }
  if (scene === 'view') { add(nodes, `${HOME}/linux-kurs/tag02`, 'dir'); cwd = `${HOME}/linux-kurs/tag02` }
  if (scene === 'delete-dir') {
    cwd = `${HOME}/linux-kurs/tag02`; add(nodes, cwd, 'dir'); add(nodes, `${cwd}/alt-backup`, 'dir'); add(nodes, `${cwd}/alt-backup/b.txt`, 'file')
  }
  if (scene === 'review') {
    cwd = `${HOME}/linux-kurs/projekt`; add(nodes, cwd, 'dir'); add(nodes, `${cwd}/texte`, 'dir'); add(nodes, `${cwd}/bilder`, 'dir'); add(nodes, `${cwd}/texte/kapitel1.txt`, 'file')
  }
  return { cwd, previous: HOME, nodes, history: [], tick: 0, screen: '' }
}

export function createTaskFixture(cwd: string, entries: string[]): DayTwoSession {
  const session = createDayTwoSession()
  let path = ''
  for (const part of cwd.split('/').filter(Boolean)) { path += '/' + part; if (!session.nodes[path]) add(session.nodes, path, 'dir') }
  session.cwd = cwd
  for (const entry of entries) {
    const match = entry.match(/^(.+?)(?: \((.*)\))?$/)
    if (!match) continue
    const label = entry.split(' (')[0]
    const nodePath = normalizePath(cwd, label)
    add(session.nodes, nodePath, label.endsWith('/') ? 'dir' : 'file')
    if (label.endsWith('/') && match[2]) for (const item of match[2].split(', ')) add(session.nodes, `${nodePath}/${item}`, 'file')
  }
  return session
}

export function parseCommand(input: string): string[] | null {
  const parts: string[] = []
  let word = '', quote = '', active = false
  for (let i = 0; i < input.length; i++) {
    const c = input[i]
    if (c === '\\' && quote !== "'" && i + 1 < input.length) { word += input[++i]; active = true }
    else if (quote) { if (c === quote) quote = ''; else word += c }
    else if (c === '"' || c === "'") { quote = c; active = true }
    else if (/\s/.test(c)) { if (active) { parts.push(word); word = ''; active = false } }
    else { word += c; active = true }
  }
  if (quote) return null
  if (active) parts.push(word)
  return parts
}

function globRegex(pattern: string): RegExp {
  let result = '^'
  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i]
    if (c === '*') result += '.*'
    else if (c === '?') result += '.'
    else if (c === '[') {
      const end = pattern.indexOf(']', i + 1)
      if (end > i + 1) { result += pattern.slice(i, end + 1); i = end }
      else result += '\\['
    } else result += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }
  return new RegExp(result + '$')
}

export function expandPaths(session: DayTwoSession, raw: string): string[] {
  const path = normalizePath(session.cwd, raw)
  const base = parent(path), pattern = name(path)
  if (!/[*?\[]/.test(pattern)) return [path]
  const regex = globRegex(pattern)
  return children(session, base).filter(item => regex.test(name(item)))
}

function clone(session: DayTwoSession): DayTwoSession {
  return { ...session, nodes: Object.fromEntries(Object.entries(session.nodes).map(([key, value]) => [key, { ...value }])), history: [...session.history] }
}
function fail(session: DayTwoSession, error: string): CommandResult { return { session, output: '', error } }
function list(session: DayTwoSession, path: string, flags: string): string {
  const node = session.nodes[path]
  if (!node) return `ls: ${path}: Datei oder Verzeichnis nicht gefunden`
  const detail = (item: string) => {
    const n = session.nodes[item]
    const size = n.type === 'dir' ? 4096 : n.content.length
    return `${n.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--'} andre andre ${flags.includes('h') && size >= 1024 ? `${(size / 1024).toFixed(1)}K` : size} Sep 22 ${name(item)}`
  }
  if (node.type === 'file') return flags.includes('l') ? detail(path) : name(path)
  const entries = children(session, path, flags.includes('a'))
  if (flags.includes('t')) entries.sort((a, b) => session.nodes[b].modified - session.nodes[a].modified || a.localeCompare(b))
  const render = (items: string[]) => flags.includes('l') ? items.map(detail).join('\n') : items.map(name).join('  ')
  let output = render(entries)
  if (flags.includes('a')) output = `${flags.includes('l') ? '.\n..\n' : '.  ..  '}${output}`
  if (flags.includes('R')) for (const entry of entries.filter(item => session.nodes[item].type === 'dir')) output += `\n\n${entry}:\n${list(session, entry, flags.replace('R', ''))}`
  return output
}

function copyTree(session: DayTwoSession, source: string, destination: string) {
  const keys = Object.keys(session.nodes).filter(key => key === source || key.startsWith(source + '/')).sort((a, b) => a.length - b.length)
  for (const key of keys) session.nodes[destination + key.slice(source.length)] = { ...session.nodes[key], modified: ++session.tick }
}

export function deletionTargets(session: DayTwoSession, input: string): string[] | null {
  const parts = parseCommand(input)
  if (!parts || parts[0] !== 'rm') return null
  const patterns = parts.slice(1).filter(part => !part.startsWith('-'))
  return [...new Set(patterns.flatMap(pattern => expandPaths(session, pattern)).filter(path => session.nodes[path]).flatMap(path => {
    const recursive = parts.slice(1).some(part => /^-[^-]*r/.test(part))
    return recursive ? Object.keys(session.nodes).filter(key => key === path || key.startsWith(path + '/')).sort() : [path]
  }))].sort()
}

export function runDayTwoCommand(before: DayTwoSession, input: string, confirmDelete = false): CommandResult {
  const parts = parseCommand(input)
  if (!parts || !parts.length) return fail(before, 'Gib einen gültigen Befehl ein.')
  const session = clone(before), [command, ...args] = parts
  const flags = args.filter(arg => arg.startsWith('-') && arg !== '-').join('')
  const values = args.filter(arg => !arg.startsWith('-') || arg === '-')
  let output = ''
  const exists = (path: string) => !!session.nodes[path]
  const dir = (path: string) => session.nodes[path]?.type === 'dir'
  const file = (path: string) => session.nodes[path]?.type === 'file'
  const resolve = (raw: string) => normalizePath(session.cwd, raw)
  if (command === 'pwd') output = session.cwd
  else if (command === 'ls') {
    if (args.includes('--help')) output = 'Usage: ls [OPTION]... [FILE]...\n-l lange Liste  -a versteckte Dateien  -h lesbare Größen  -t nach Zeit  -R rekursiv'
    else output = (values.length ? values.flatMap(value => expandPaths(session, value)) : [session.cwd]).map(path => list(session, path, flags)).join('\n')
  } else if (command === 'cd') {
    const destination = args[0] === '-' ? session.previous : resolve(args[0] || '~')
    if (!dir(destination)) return fail(before, `cd: ${args[0] || '~'}: Verzeichnis nicht gefunden`)
    session.previous = session.cwd; session.cwd = destination
    if (args[0] === '-') output = destination
  } else if (command === 'mkdir') {
    if (!values.length) return fail(before, 'mkdir braucht mindestens einen Ordnernamen.')
    for (const value of values) {
      const path = resolve(value), segments = path.split('/').slice(1)
      let current = ''
      for (let i = 0; i < segments.length; i++) {
        current += '/' + segments[i]
        if (!exists(current)) {
          if (i !== segments.length - 1 && !flags.includes('p')) return fail(before, `mkdir: Oberordner ${current} fehlt; nutze -p.`)
          if (!dir(parent(current))) return fail(before, `mkdir: ${parent(current)} ist kein Ordner.`)
          session.nodes[current] = { type: 'dir', content: '', modified: ++session.tick }
        } else if (i === segments.length - 1 && !flags.includes('p')) return fail(before, `mkdir: ${value} existiert bereits.`)
      }
    }
  } else if (command === 'touch') {
    if (!values.length) return fail(before, 'touch braucht mindestens einen Dateinamen.')
    for (const value of values) {
      const path = resolve(value)
      if (!dir(parent(path)) || dir(path)) return fail(before, `touch: ${value}: ungültiger Dateipfad.`)
      session.nodes[path] = { type: 'file', content: session.nodes[path]?.content || '', modified: ++session.tick }
    }
  } else if (command === 'cp' || command === 'mv') {
    if (values.length < 2) return fail(before, `${command} braucht Quelle und Ziel.`)
    const destination = resolve(values[values.length - 1]), sources = values.slice(0, -1).flatMap(value => expandPaths(session, value))
    if (!sources.length || sources.some(source => !exists(source))) return fail(before, `${command}: Quelle nicht gefunden.`)
    if (sources.length > 1 && !dir(destination)) return fail(before, `${command}: Für mehrere Quellen ist ein Zielordner nötig.`)
    for (const source of sources) {
      if (session.nodes[source].type === 'dir' && command === 'cp' && !flags.includes('r')) return fail(before, 'cp: Für einen Ordner brauchst du -r.')
      const target = dir(destination) ? normalizePath(destination, name(source)) : destination
      if (!dir(parent(target)) || target === source || target.startsWith(source + '/')) return fail(before, `${command}: ungültiges Ziel.`)
      copyTree(session, source, target)
      if (command === 'mv') for (const key of Object.keys(session.nodes).filter(key => key === source || key.startsWith(source + '/'))) delete session.nodes[key]
    }
  } else if (command === 'rm') {
    const targets = deletionTargets(session, input) || []
    if (!targets.length) return fail(before, 'rm: keine passende Datei gefunden.')
    if (targets.some(path => dir(path)) && !flags.includes('r')) return fail(before, 'rm: Ordner erfordern -r.')
    if (!confirmDelete) return { session: before, output: '', deletion: targets }
    for (const path of targets) delete session.nodes[path]
  } else if (command === 'cat' || command === 'head' || command === 'tail') {
    const countIndex = args.indexOf('-n'), count = countIndex >= 0 ? Number(args[countIndex + 1]) : 10
    if (!Number.isInteger(count) || count < 0) return fail(before, `${command}: ungültige Zeilenzahl.`)
    const paths = values.filter(value => value !== String(count))
    if (!paths.length || paths.some(value => !file(resolve(value)))) return fail(before, `${command}: Datei nicht gefunden.`)
    output = paths.map(value => { const lines = session.nodes[resolve(value)].content.split('\n'); return command === 'cat' ? lines.join('\n') : command === 'head' ? lines.slice(0, count).join('\n') : lines.slice(-count).join('\n') }).join('\n')
  } else if (command === 'echo') output = args.join(' ')
  else if (command === 'clear') session.screen = ''
  else if (command === 'history') output = [...session.history, input].map((entry, index) => `${index + 1}  ${entry}`).join('\n')
  else if (command === 'man') output = args[0] === '-k' ? 'kopieren (1) - cp: Dateien und Ordner kopieren' : `${args[0] || 'man'}: Handbuch (simuliert). Suche mit /, beende mit q.`
  else return fail(before, `Befehl ${command} ist in dieser Tag-2-Simulation nicht verfügbar.`)
  session.history.push(input)
  if (command !== 'clear') session.screen = output
  return { session, output }
}
