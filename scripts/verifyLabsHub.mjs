import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { build } from 'esbuild'

async function load(entry) {
  const bundle = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
}

const { labRegistry, lessonLabMap, labHref } = await load('src/data/labs.ts')
const { lessonCatalog } = await load('src/lib/lessonCatalog.ts')
const { terminalExercises } = await load('src/data/linux/terminalExercises.ts')
const { linuxScenarios } = await load('src/data/linux/labContent.ts')
const lessons = lessonCatalog.flatMap((module) => module.lessons)
const lessonIds = new Set(lessons.map((lesson) => lesson.id))
const labIds = new Set(labRegistry.map((lab) => lab.id))
const guidedIds = ['workstation-ipv4', 'routing-next-hop', 'osi-diagnosis', 'linux-orientation']
const validRoutes = new Set(['/it/linux/lab', '/practice/linux-tag-2', '/practice/linux-tag-3', '/practice/subnetting', ...guidedIds.map((id) => `/practice/labs/${id}`)])

assert.equal(lessons.length, 108, 'Der vollständige Katalog muss 108 Lektionen enthalten')
assert.equal(labRegistry.length, 8)
assert.equal(labIds.size, labRegistry.length, 'Lab-IDs müssen eindeutig sein')
for (const lab of labRegistry) assert.ok(validRoutes.has(lab.route), `Ungültige Lab-Route: ${lab.route}`)
assert.ok(!labRegistry.some((lab) => /windows server|active directory/i.test(`${lab.id} ${lab.title} ${lab.description}`)))

const challengeIds = new Set(terminalExercises.map((item) => item.id))
const scenarioIds = new Set(linuxScenarios.map((item) => item.id))
for (const [lessonId, mappings] of Object.entries(lessonLabMap)) {
  assert.ok(lessonIds.has(lessonId), `Unbekannte Lektion: ${lessonId}`)
  assert.ok(mappings.length <= 3, `${lessonId}: zu viele Lab-Aktionen`)
  const seen = new Set()
  for (const mapping of mappings) {
    assert.ok(labIds.has(mapping.labId), `${lessonId}: unbekanntes Lab ${mapping.labId}`)
    assert.ok(!seen.has(mapping.labId), `${lessonId}: doppeltes Lab ${mapping.labId}`)
    seen.add(mapping.labId)
    if (mapping.deepLink?.challenge) assert.ok(challengeIds.has(mapping.deepLink.challenge), `${lessonId}: unbekannte Challenge`)
    if (mapping.deepLink?.scenario) assert.ok(scenarioIds.has(mapping.deepLink.scenario), `${lessonId}: unbekanntes Szenario`)
    assert.ok(!mapping.deepLink || mapping.labId === 'linux-lab', `${lessonId}: Deep Link nur für Linux Lab`)
  }
}

const mappedIds = Object.keys(lessonLabMap)
assert.equal(mappedIds.length, 14)
assert.equal(lessons.length - mappedIds.length, 94)
assert.ok(!lessonLabMap['topic-linux-11-suchen-aliase-und-variablen'], 'Tag 11 darf ohne passende Simulation kein Lab-Mapping erhalten')
assert.ok(!lessonLabMap['topic-linux-12-cronjobs'], 'Tag 12 darf ohne cron-Simulation kein Lab-Mapping erhalten')
assert.ok(!lessonLabMap['topic-linux-13-dein-werkzeugkasten'], 'Tag 13 darf ohne verlässliche Skript-/cron-Simulation kein Lab-Mapping erhalten')
assert.ok(!lessonLabMap['topic-linux-13-extra-linux-als-server'], 'Das Server-Extra darf ohne systemd/nginx-Simulation kein Lab-Mapping erhalten')
assert.equal(lessonLabMap['topic-netz-neu-subnetting'][0].labId, 'subnetting-trainer')
assert.equal(lessonLabMap['topic-netz-neu-statisches-routing'][0].labId, 'praxis-routing-next-hop')
assert.equal(lessonLabMap['topic-linux-08-dateirechte-und-sudo'][0].deepLink.challenge, 'report-permission')
assert.equal(lessonLabMap['topic-linux-06-git-und-github'][0].deepLink.challenge, 'git-init')
assert.equal(lessonLabMap['topic-linux-10-wiederholung-woche-2-support'][0].deepLink.scenario, 'access-denied')
assert.match(labHref(labRegistry.find((lab) => lab.id === 'linux-lab'), lessonLabMap['topic-linux-06-git-und-github'][0], '/it/linux/git-und-github'), /^\/it\/linux\/lab\?challenge=git-init&source=/)

const app = readFileSync('src/App.tsx', 'utf8')
for (const route of ['/practice/subnetting', '/practice/linux-terminal', '/practice/linux-tag-2', '/practice/linux-tag-3', '/practice/labs', '/practice/labs/:labId']) assert.ok(app.includes(`path="${route.slice(1)}"`), `Alte Route fehlt: ${route}`)
const hub = readFileSync('src/pages/Labs.tsx', 'utf8')
assert.equal((hub.match(/labRegistry\.filter/g) || []).length, 1, 'Hub muss ausschließlich aus der zentralen Registry lesen')
const action = readFileSync('src/components/labs/LessonLabAction.tsx', 'utf8')
assert.ok(action.includes('if(!matches.length)return null'), 'Lektionen ohne Mapping dürfen keinen Lab-Block rendern')
const linuxLab = readFileSync('src/pages/LinuxTerminalTrainer.tsx', 'utf8')
assert.match(linuxLab, /linuxScenarios\.findIndex\(item=>item\.id===params\.get\('scenario'\)\)/, 'Szenario-Deep-Link muss das angeforderte Szenario initialisieren')
console.log(`Labs Hub: ${labRegistry.length} Umgebungen, ${lessons.length} Lektionen geprüft, ${mappedIds.length} mit Lab-Zuordnung, ${lessons.length - mappedIds.length} ohne Lab-Aktion.`)
