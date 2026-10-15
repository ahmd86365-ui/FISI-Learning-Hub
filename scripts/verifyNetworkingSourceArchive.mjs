import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const repoRoot = resolve(import.meta.dirname, '..')
const archiveRoot = join(repoRoot, '2_Netzwerktechnik', 'zusatzmaterial-alt')
const source = JSON.parse(readFileSync(join(archiveRoot, 'source-manifest.json'), 'utf8'))
const coverage = JSON.parse(readFileSync(join(archiveRoot, 'coverage-manifest.json'), 'utf8'))
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex')

const trackedPaths = execFileSync('git', ['ls-tree', '-r', '-z', '--name-only', source.sourceRevision, 'Netzwerktechnik'], { cwd: repoRoot, encoding: null })
  .toString('utf8').split('\0').filter(Boolean)
assert.equal(trackedPaths.length, 55, 'Der alte Netzwerktechnik-Bestand muss 55 Pfade enthalten')
assert.equal(source.originalPathCount, 55)
assert.equal(source.uniqueContentCount, 44)
assert.equal(source.records.length, 55)
assert.equal(coverage.uniqueDocumentCount, 44)
assert.equal(coverage.documents.length, 44)

const sourcePaths = new Set(source.records.map((item) => item.originalPath))
assert.deepEqual(sourcePaths, new Set(trackedPaths), 'Manifest und Git-Bestand müssen dieselben Quellpfade enthalten')
const archivedHashes = new Set()
for (const record of source.records) {
  const gitBytes = execFileSync('git', ['show', `${source.sourceRevision}:${record.originalPath}`], { cwd: repoRoot, encoding: null, maxBuffer: 64 * 1024 * 1024 })
  assert.equal(sha256(gitBytes), record.sha256, `Git-Hash stimmt nicht: ${record.originalPath}`)
  const archivePath = join(repoRoot, record.archivedPath)
  assert.ok(existsSync(archivePath), `Archivdatei fehlt: ${record.archivedPath}`)
  assert.equal(sha256(readFileSync(archivePath)), record.sha256, `Archiv-Hash stimmt nicht: ${record.archivedPath}`)
  archivedHashes.add(record.sha256)
}
assert.equal(archivedHashes.size, 44, 'Es müssen exakt 44 unterschiedliche Inhalte archiviert sein')

const coveragePaths = new Set(coverage.documents.map((item) => item.archivedPath))
assert.equal(coveragePaths.size, 44)
for (const item of coverage.documents) {
  assert.ok(item.classification && item.educationalValue, `Klassifikation fehlt: ${item.archivedPath}`)
  assert.ok(item.originalPaths.length >= 1, `Provenienz fehlt: ${item.archivedPath}`)
}

const archivedNames = new Set(coverage.documents.map((item) => basename(item.archivedPath)))
const pairs = [
  ['A01_Subnetting_950 (1).doc', 'Loe01_Subnetting_950 (1).pdf'],
  ['A02_Subnetting_950.doc', 'Loe02_Subnetting_950 (1).pdf'],
  ['A03_Subnetting_1878.doc', 'Loe03_Subnetting_1878 (1).pdf'],
  ['A04_Supernetting.doc', 'Loe04_Supernetting.pdf'],
  ['A05_Subnetting (1).doc', 'Loe05_Subnetting.pdf'],
  ['A06_Routing.doc', 'Loe06_Routing.pdf'],
  ['ITNWG_Übungsaufgaben_Teil_1.docx', 'ITNWG_Übungsaufgaben_Teil_1-Lösung.pdf'],
  ['ITNWG_Übungsaufgaben_Teil_2 (1).docx', 'ITNWG_Übungsaufgaben_Teil_2-Lösung.pdf'],
  ['ITNWG_Übungsaufgaben_Teil_3.docx', 'ITNWG_Übungsaufgaben_Teil_3-Lösungen.pdf'],
  ['ITNWG_Übungsaufgaben_Teil_4.docx', 'ITNWG_Übungsaufgaben_Teil_4-Lösung (1).pdf'],
  ['ITNWG_Übungsaufgaben_Teil_5.docx', 'ITNWG_Übungsaufgaben_Teil_5-Lösung (1).pdf'],
  ['Subnetting-Berechnungen.docx', 'Subnetting-Berechnungen_Lösungen (1).pdf'],
  ['A00_Subnetting-Berechnungen.docx', 'Subnetting-Berechnungen_Lösungen (1).pdf'],
  ['Aufbau_von_IP.docx', 'Aufbau_von_IP-Lösungen.pdf'],
  ['IPv4_Übungsaufgaben_Teil-1.docx', 'Lösungen-IPv4_Übungsaufgaben_Teil-1.pdf'],
]
for (const [exercise, solution] of pairs) {
  assert.ok(archivedNames.has(exercise), `Aufgabenblatt fehlt: ${exercise}`)
  assert.ok(archivedNames.has(solution), `Lösung fehlt: ${solution}`)
}

console.log(`Networking source archive verified: ${source.records.length} Git paths, ${archivedHashes.size} unique byte contents, ${pairs.length} exercise/solution pairs.`)
