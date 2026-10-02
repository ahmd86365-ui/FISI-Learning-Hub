import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const navigationSource = await read('src/lib/navigation.ts')
const compiled = ts.transpileModule(navigationSource, { compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 } }).outputText
const navigation = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)

const accepted = ['/labs', '/it/linux/lab?source=%2Fit%2Flinux', '/lernkarten/topic-1', '/review', '/exams']
const rejected = ['https://example.com', '//example.com', 'javascript:alert(1)', 'data:text/html,test', '/%2F%2Fexample.com', '/javascript%3Aalert(1)', '/data%3Atext/html,test', '/%E0%A4%A', '/%5C%5Cexample.com']
accepted.forEach((path) => assert.equal(navigation.isSafeInternalPath(path), true, `expected accepted: ${path}`))
rejected.forEach((path) => assert.equal(navigation.isSafeInternalPath(path), false, `expected rejected: ${path}`))
assert.equal(navigation.getReturnDestination('?source=%2Flabs'), '/labs')
assert.equal(navigation.getReturnDestination('?source=https%3A%2F%2Fexample.com'), undefined)
assert.equal(navigation.fallbackForPath('/practice/subnetting'), '/labs')
assert.equal(navigation.fallbackForPath('/lernkarten/review'), '/review')
assert.equal(navigation.fallbackForPath('/pruefungsvorbereitung/it-ap/ap1'), '/pruefungsvorbereitung/it-ap')

const app = await read('src/App.tsx')
const labs = await read('src/data/labs.ts')
const lesson = await read('src/pages/LessonPage.tsx')
const technical = await read('src/pages/itTechnical/ItTechnicalPage.tsx')
const required = [
  'src/components/navigation/SmartBackButton.tsx',
  'src/components/navigation/BackToTop.tsx',
  'src/components/navigation/MobileQuickActions.tsx',
  'src/components/navigation/NavigationManager.tsx',
  'src/hooks/useSmartBack.ts',
]
await Promise.all(required.map(read))

const appRoutes = new Set([...app.matchAll(/<Route\s+(?:index\s+)?path="([^"]+)"/g)].map((match) => `/${match[1]}`))
for (const route of ['/labs', '/practice/subnetting', '/practice/linux-tag-2', '/practice/linux-tag-3', '/practice/labs/:labId', '/lernkarten/review', '/lernkarten/:lessonId']) {
  assert(appRoutes.has(route), `missing app route ${route}`)
}
for (const route of [...labs.matchAll(/route:'([^']+)'/g)].map((match) => match[1])) {
  const staticRoute = route.startsWith('/practice/labs/') ? '/practice/labs/:labId' : route
  assert(appRoutes.has(staticRoute), `lab registry route is not registered: ${route}`)
}
assert.match(labs, /params\.set\('source',sourceLesson\)/, 'lesson Lab source query must be preserved')
assert.match(lesson, /if \(firstLab\) quickActions\.push/, 'standard lesson Lab quick action must be conditional')
assert.match(technical, /if \(firstLab\) quickActions\.push/, 'IT technical Lab quick action must be conditional')
assert.match(lesson, /if \(nextTopic\) quickActions\.push/, 'next action must be conditional')

console.log(`Navigation UX verification passed: ${accepted.length} safe paths, ${rejected.length} unsafe paths, ${required.length} shared components, and all Lab routes checked.`)
