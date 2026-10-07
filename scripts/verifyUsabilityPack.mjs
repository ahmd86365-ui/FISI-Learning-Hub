import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const compile = async (path, stripImports = false) => {
  let source = await read(path)
  if (stripImports) source = source.replace(/^import .*$/gm, '')
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } }).outputText
  return import(`data:text/javascript;base64,${Buffer.from(output).toString('base64')}`)
}

const sidebar = await compile('src/lib/sidebarState.ts')
const storageSource = await read('src/lib/browserStorage.ts')
const navigationSource = (await read('src/lib/navigation.ts')).replace(/^import .*$/gm, '')
const recentSource = (await read('src/lib/recentPages.ts')).replace(/^import .*$/gm, '')
const shareSource = (await read('src/lib/share.ts')).replace(/^import .*$/gm, '')
const combined = ts.transpileModule(`${storageSource}\n${navigationSource}\n${recentSource}\n${shareSource}`, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } }).outputText
const usability = await import(`data:text/javascript;base64,${Buffer.from(combined).toString('base64')}`)
const recent = usability
const share = usability

const item = (path, title, type, offset = 0) => ({ path, title, type, visitedAt: new Date(Date.now() + offset).toISOString() })
const memoryStorage = () => {
  const values = new Map()
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) }
}
let pages = []
for (let index = 0; index < 12; index++) pages = recent.addRecentPage(pages, item(`/it/module-${index}/lesson-${index}`, `Lektion ${index}`, 'lesson', index))
assert.equal(pages.length, recent.RECENT_PAGES_LIMIT)
pages = recent.addRecentPage(pages, item('/it/module-5/lesson-5', 'Erneut', 'lesson', 99))
assert.equal(pages.filter((entry) => entry.path === '/it/module-5/lesson-5').length, 1)
assert.equal(pages[0].title, 'Erneut')
for (const unsafe of ['https://example.com', '//example.com', 'javascript:alert(1)', 'data:text/html,test']) assert.deepEqual(recent.addRecentPage(pages, item(unsafe, 'Unsicher', 'lesson')), pages)
assert.equal(recent.recentPageType('/profile'), undefined)
assert.equal(recent.recentPageType('/auth'), undefined)
assert.equal(recent.recentPageType('/it/linux/was-ist-linux'), 'lesson')
assert.equal(recent.recentPageType('/it/linux/spickzettel'), 'reference')
assert.equal(recent.canonicalRecentPath('/it/linux/spickzettel', '?tag=11&source=%2Fit%2Flinux'), '/it/linux/spickzettel?tag=11')
assert.equal(recent.canonicalRecentPath('/glossary', '?q=IP&category=Linux&token=secret'), '/glossary?q=IP&category=Linux')

const storage = memoryStorage()
const guestScope = recent.recentPagesScope(null, true)
const userAScope = recent.recentPagesScope('user-a-id', false)
const userBScope = recent.recentPagesScope('user-b-id', false)
assert.equal(guestScope, 'guest')
assert.notEqual(userAScope, userBScope)
assert.equal(recent.recentPagesScope(null, false), null, 'Unresolved auth must not fall back to guest')
recent.recordRecentPage(guestScope, item('/it/linux/was-ist-linux', 'Gastlektion', 'lesson'), storage)
recent.recordRecentPage(userAScope, item('/it/linux/dateisystem', 'Lektion A', 'lesson'), storage)
assert.deepEqual(recent.readRecentPages(userBScope, storage), [], 'User B must not see User A history')
assert.equal(recent.readRecentPages(guestScope, storage)[0].title, 'Gastlektion')
assert.equal(recent.readRecentPages(userAScope, storage)[0].title, 'Lektion A')
assert.equal(recent.readRecentPages(userAScope, storage).find((entry) => ['lesson', 'flashcards', 'lab'].includes(entry.type))?.title, 'Lektion A', 'Zuletzt gelernt must use the active scope')
assert.equal(recent.readRecentPages(userBScope, storage).find((entry) => ['lesson', 'flashcards', 'lab'].includes(entry.type)), undefined)

const legacyStorage = memoryStorage()
legacyStorage.setItem(recent.RECENT_PAGES_KEY, JSON.stringify([
  item('/it/linux/terminal-und-erste-befehle', 'Legacy Gast', 'lesson'),
  item('https://example.com', 'Unsicher', 'lesson'),
]))
assert.deepEqual(recent.readRecentPages(userAScope, legacyStorage), [], 'Legacy data must never be assigned to an account')
assert.equal(legacyStorage.getItem(recent.RECENT_PAGES_KEY) !== null, true)
assert.equal(recent.readRecentPages(guestScope, legacyStorage)[0].title, 'Legacy Gast')
assert.equal(recent.readRecentPages(guestScope, legacyStorage).length, 1)
assert.equal(legacyStorage.getItem(recent.RECENT_PAGES_KEY), null, 'Legacy key must be removed after guest migration')

const fullStorage = memoryStorage()
fullStorage.setItem(recent.RECENT_PAGES_KEY, JSON.stringify([item('/it/linux/terminal-und-erste-befehle', 'Bleibt erhalten', 'lesson')]))
fullStorage.setItem = () => { throw new DOMException('full', 'QuotaExceededError') }
assert.equal(recent.readRecentPages(guestScope, fullStorage)[0].title, 'Bleibt erhalten')
assert.notEqual(fullStorage.getItem(recent.RECENT_PAGES_KEY), null, 'Legacy data must remain when scoped migration cannot be saved')

assert.equal(sidebar.validStoredModule('linux', ['linux', 'netzwerk']), 'linux')
assert.equal(sidebar.validStoredModule('stale', ['linux', 'netzwerk']), null)

assert.equal(share.canonicalSharePath('/glossary', '?q=IP&category=Linux&source=%2Ferrors'), '/glossary?q=IP&category=Linux')
assert.equal(share.canonicalSharePath('/it/linux/was-ist-linux', '?source=%2Flabs&token=secret'), '/it/linux/was-ist-linux')
assert.equal(share.canonicalSharePath('/exams', '?draft=secret'), undefined)
assert.equal(share.canonicalSharePath('https://example.com'), undefined)

const app = await read('src/App.tsx')
const appAst = ts.createSourceFile('App.tsx', app, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
let providers = 0
function visit(node) { if (ts.isJsxOpeningElement(node) && node.tagName.getText() === 'ToastProvider') providers++; if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === 'ToastProvider') providers++; ts.forEachChild(node, visit) }
visit(appAst)
assert.equal(providers, 1, 'ToastProvider must be mounted exactly once')

const dashboard = await read('src/components/dashboard/StudentDashboard.tsx')
assert.ok(dashboard.includes('Zuletzt besucht') && dashboard.includes('Zuletzt gelernt') && dashboard.includes('Weiterlernen'))
await Promise.all(['src/contexts/ToastContext.tsx', 'src/components/ShareLinkButton.tsx', 'src/components/loading/Skeleton.tsx', 'src/components/navigation/HomeShortcut.tsx'].map(read))

console.log(`Usability Pack verified: guest/User A/User B isolation, auth switching, guest-only legacy migration, scoped Zuletzt gelernt, recent history capped at ${recent.RECENT_PAGES_LIMIT}, deduplication, safe canonical links, sidebar validation, one toast provider and dashboard wiring.`)
