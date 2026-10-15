import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, extname, join, relative, resolve } from 'node:path'

const repoRoot = resolve(import.meta.dirname, '..')
const archiveRoot = join(repoRoot, '2_Netzwerktechnik', 'zusatzmaterial-alt')
const sourcePrefix = 'Netzwerktechnik/'

const git = (...args) => execFileSync('git', args, { cwd: repoRoot, encoding: args.includes('--binary') ? null : 'utf8' })
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex')
const csv = (value) => `"${String(value).replaceAll('"', '""')}"`

const originalPaths = execFileSync('git', ['ls-tree', '-r', '-z', '--name-only', 'HEAD', 'Netzwerktechnik'], { cwd: repoRoot, encoding: null })
  .toString('utf8')
  .split('\0')
  .filter((path) => path.startsWith(sourcePrefix))

if (originalPaths.length !== 55) throw new Error(`Expected 55 old source paths, found ${originalPaths.length}`)
mkdirSync(archiveRoot, { recursive: true })

const records = []
const archiveByHash = new Map()
const reservedNames = new Map()

for (const originalPath of originalPaths) {
  const bytes = execFileSync('git', ['show', `HEAD:${originalPath}`], { cwd: repoRoot, encoding: null, maxBuffer: 64 * 1024 * 1024 })
  const hash = sha256(bytes)
  let archivedPath = archiveByHash.get(hash)
  let duplicateOf = ''

  if (!archivedPath) {
    const originalName = basename(originalPath)
    const extension = extname(originalName)
    const stem = originalName.slice(0, originalName.length - extension.length)
    const key = originalName.toLocaleLowerCase('de-DE')
    const collision = reservedNames.get(key)
    const archiveName = collision && collision !== hash ? `${stem}__${hash.slice(0, 10)}${extension}` : originalName
    reservedNames.set(archiveName.toLocaleLowerCase('de-DE'), hash)
    const destination = join(archiveRoot, archiveName)
    if (existsSync(destination)) {
      const existingHash = sha256(readFileSync(destination))
      if (existingHash !== hash) throw new Error(`Refusing to overwrite ${destination}`)
    } else {
      writeFileSync(destination, bytes, { flag: 'wx' })
    }
    archivedPath = relative(repoRoot, destination).replaceAll('\\', '/')
    archiveByHash.set(hash, archivedPath)
  } else {
    duplicateOf = archivedPath
  }

  records.push({
    originalPath,
    archivedPath,
    sha256: hash,
    classification: duplicateOf ? 'Byte-identisches Duplikat; gemeinsames Archivobjekt' : 'Aus Altbestand wiederhergestellt; inhaltliche Klassifikation siehe coverage-manifest.json',
    duplicateOf,
  })
}

const jsonPath = join(archiveRoot, 'source-manifest.json')
const csvPath = join(archiveRoot, 'source-manifest.csv')
writeFileSync(jsonPath, `${JSON.stringify({
  sourceRevision: git('rev-parse', 'HEAD').trim(),
  sourcePrefix,
  originalPathCount: records.length,
  uniqueContentCount: archiveByHash.size,
  records,
}, null, 2)}\n`)
writeFileSync(csvPath, `${['original_path', 'archived_path', 'sha256', 'classification', 'duplicate_of'].map(csv).join(',')}\n${records.map((record) => [record.originalPath, record.archivedPath, record.sha256, record.classification, record.duplicateOf].map(csv).join(',')).join('\n')}\n`)

console.log(`Recovered ${archiveByHash.size} unique contents from ${records.length} tracked paths.`)
console.log(`Archive: ${relative(repoRoot, archiveRoot)}`)
