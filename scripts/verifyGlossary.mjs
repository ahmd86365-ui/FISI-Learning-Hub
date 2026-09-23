import assert from 'node:assert/strict'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import ts from 'typescript'

const root = resolve(import.meta.dirname, '..')
const require = createRequire(import.meta.url)
const cache = new Map()
function load(relativePath) {
  const path = resolve(root, relativePath)
  if (cache.has(path)) return cache.get(path).exports
  const module = { exports: {} }
  cache.set(path, module)
  const code = ts.transpileModule(readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText
  const localRequire = (name) => {
    if (!name.startsWith('.')) return require(name)
    const target = resolve(dirname(path), name)
    const file = [target, `${target}.ts`, `${target}.tsx`, resolve(target, 'index.ts')].find((candidate) => existsSync(candidate) && statSync(candidate).isFile())
    assert.ok(file, `Unresolved import: ${name} from ${path}`)
    return load(file)
  }
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports)
  return module.exports
}

const { glossaryEntries, glossaryCategories, searchGlossary, normalizeGlossarySearch, glossaryLessonPath } = load('src/data/glossary.ts')
const { getModuleBySlug } = load('src/data/modules.ts')

  assert.ok(glossaryEntries.length > 0, 'Glossary has entries')
  const ids = new Set()
  const terms = new Set()
  let linked = 0
  for (const entry of glossaryEntries) {
    assert.match(entry.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `Stable URL-safe ID: ${entry.id}`)
    assert.ok(!ids.has(entry.id), `Duplicate ID: ${entry.id}`)
    ids.add(entry.id)
    const term = normalizeGlossarySearch(entry.term)
    assert.ok(!terms.has(term), `Duplicate canonical term: ${entry.term}`)
    terms.add(term)
    assert.ok(entry.definition?.trim(), `Missing definition: ${entry.term}`)
    assert.ok(glossaryCategories.includes(entry.category), `Invalid category: ${entry.term}`)
    assert.ok(entry.lessons?.length, `Missing lesson source: ${entry.term}`)
    linked++
    for (const lesson of entry.lessons) {
      const module = getModuleBySlug(lesson.subject, lesson.module)
      assert.ok(module, `Missing module for ${entry.term}: ${lesson.module}`)
      assert.ok(module.topics.some((topic) => topic.slug === lesson.topic), `Missing lesson for ${entry.term}: ${lesson.topic}`)
      assert.match(glossaryLessonPath(lesson), /^\/(it|it-english|wirtschaft-gesellschaft)\//)
    }
    for (const id of entry.related ?? []) assert.ok(glossaryEntries.some((other) => other.id === id), `Broken glossary reference ${entry.term} -> ${id}`)
  }

  assert.equal(normalizeGlossarySearch('  ÄÖÜ ß  '), 'aou ss')
  assert.equal(normalizeGlossarySearch('Straße'), normalizeGlossarySearch('STRASSE'))
  assert.ok(searchGlossary(glossaryEntries, 'MAC Address').some((entry) => entry.id === 'mac-adresse'))
  assert.ok(searchGlossary(glossaryEntries, 'präfixlänge').some((entry) => entry.id === 'cidr'))
  assert.ok(searchGlossary(glossaryEntries, 'auflösung').some((entry) => entry.id === 'dns'))
  assert.ok(searchGlossary(glossaryEntries, 'Betriebssystemkern', 'Linux').some((entry) => entry.id === 'kernel'))
  assert.ok(!searchGlossary(glossaryEntries, 'Betriebssystemkern', 'Hardware').some((entry) => entry.id === 'kernel'))
  assert.ok(searchGlossary(glossaryEntries, 'übertragung').length > 0)
  assert.equal(glossaryEntries.length, 58)
  for (const id of ['terminal', 'shell', 'prompt', 'dateipfad']) {
    const entry = glossaryEntries.find((item) => item.id === id)
    assert.ok(entry, `Missing Tag 2 glossary term: ${id}`)
    assert.ok(entry.lessons.some((lesson) => lesson.module === 'linux' && lesson.topic === 'terminal-und-erste-befehle'))
  }
  for (const id of ['fhs', 'root-verzeichnis', 'symbolischer-link', 'uid-gid', 'nano']) {
    const entry = glossaryEntries.find((item) => item.id === id)
    assert.ok(entry, `Missing Tag 3 glossary term: ${id}`)
    assert.ok(entry.lessons.some((lesson) => lesson.module === 'linux' && lesson.topic === 'das-dateisystem'))
  }

  const counts = Object.fromEntries(glossaryCategories.map((category) => [category, glossaryEntries.filter((entry) => entry.category === category).length]))
  console.log(`Glossary verification passed: ${glossaryEntries.length} terms, ${linked} with lesson links`)
  console.log(counts)
