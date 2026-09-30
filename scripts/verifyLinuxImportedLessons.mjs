import assert from 'node:assert/strict'
import { existsSync, readFileSync, statSync } from 'node:fs'
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
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText
  const localRequire = (name) => {
    if (!name.startsWith('.')) return require(name)
    const target = resolve(dirname(path), name)
    const file = [target, `${target}.ts`, `${target}.tsx`, resolve(target, 'index.ts')]
      .find((candidate) => existsSync(candidate) && statSync(candidate).isFile())
    assert.ok(file, `Unresolved import ${name}`)
    return load(file)
  }
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports)
  return module.exports
}

const { getModuleBySlug } = load('src/data/modules.ts')
const { dictionary } = load('src/data/dictionary.ts')
const linux = getModuleBySlug('it', 'linux')
assert.ok(linux)
assert.deepEqual(linux.topics.map((topic) => topic.order), [1, 2, 3, 4, 5, 6, 7, 8])
assert.equal(new Set(linux.topics.map((topic) => topic.id)).size, linux.topics.length, 'Duplicate Linux topic ID')
assert.equal(new Set(linux.topics.map((topic) => topic.slug)).size, linux.topics.length, 'Duplicate Linux topic slug')

const expected = [
  ['git-und-github', ['git init', 'git switch -c', 'git push -u origin main', 'id_ed25519.pub']],
  ['benutzer-und-gruppen', ['useradd -m -s /bin/bash', 'usermod -aG', 'userdel -r', 'su - javier']],
  ['dateirechte-und-sudo', ['chmod 600', 'chmod 755', 'chown carlos:verkauf', 'chmod g+s']],
]
for (const [slug, phrases] of expected) {
  const topic = linux.topics.find((item) => item.slug === slug)
  assert.ok(topic, `Missing topic ${slug}`)
  assert.ok(topic.content.length >= 15, `Insufficient content blocks for ${slug}`)
  assert.ok(topic.exercises.length >= 4, `Insufficient exercises for ${slug}`)
  assert.ok(topic.exercises.every((exercise) => exercise.topicSlug === slug), `Exercise link mismatch for ${slug}`)
  const serialized = JSON.stringify(topic)
  for (const phrase of phrases) assert.ok(serialized.includes(phrase), `${slug} is missing ${phrase}`)
}

const sourceFiles = ['gitLesson.ts', 'usersGroupsLesson.ts', 'permissionsLesson.ts']
  .map((file) => readFileSync(resolve(root, 'src/data/linux', file), 'utf8'))
  .join('\n')
assert.doesNotMatch(sourceFiles, /dangerouslySetInnerHTML|child_process|execSync|\bfetch\s*\(/)
assert.match(readFileSync(resolve(root, 'src/components/HoverTranslator.tsx'), 'utf8'), /'CODE'.*'PRE'/)
for (const term of ['commits', 'branches', 'öffentlicher schlüssel', 'gruppenmitgliedschaft', 'dateirechte', 'rechteblock']) {
  assert.ok(dictionary[term], `Missing Arabic dictionary entry for ${term}`)
}

console.log('Linux source audit passed: 8 unique ordered topics; 3 new lessons, command coverage, exercises and shared translation integration verified.')
