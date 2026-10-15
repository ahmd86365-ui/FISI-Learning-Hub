import assert from 'node:assert/strict'
import { build } from 'esbuild'
import vm from 'node:vm'
import { createRequire } from 'node:module'

const result = await build({ entryPoints: ['src/data/modules.ts'], bundle: true, platform: 'node', format: 'cjs', write: false })
const module = { exports: {} }
const require = createRequire(import.meta.url)
vm.runInNewContext(`(function(require,module,exports){${result.outputFiles[0].text}\n})(require,module,module.exports)`, { require, module, console, process })

const networking = module.exports.modules.find((entry) => entry.slug === 'netzwerktechnik')
assert.ok(networking, 'Netzwerktechnik module exists')
assert.equal(networking.topics.length, 17, 'Expected seventeen networking lessons')

const expectedNew = [
  ['rip-dynamisches-routing', 8, 5, 5],
  ['ospf-link-state', 9, 5, 4],
  ['protokoll-header-frameanalyse', 10, 5, 5],
  ['ipv6-adressierung', 11, 5, 5],
  ['netzwerkformen-verkabelung', 12, 4, 4],
  ['vlan-switching', 13, 5, 4],
  ['netzwerkdienste-diagnose', 14, 5, 4],
  ['firewall-ports', 15, 5, 4],
  ['vpn-tunneling', 16, 5, 4],
  ['netzwerkplanung-uebertragungsrechnung', 17, 5, 4],
]
const topicIds = new Set()
const slugs = new Set()
const exerciseIds = new Set()
const flashcardIds = new Set()

for (const [index, topic] of [...networking.topics].sort((a, b) => a.order - b.order).entries()) {
  assert.equal(topic.order, index + 1, `Contiguous order for ${topic.slug}`)
  assert.ok(!topicIds.has(topic.id), `Duplicate topic ID ${topic.id}`)
  assert.ok(!slugs.has(topic.slug), `Duplicate topic slug ${topic.slug}`)
  topicIds.add(topic.id)
  slugs.add(topic.slug)
  assert.match(`/it/netzwerktechnik/${topic.slug}`, /^\/it\/netzwerktechnik\/[a-z0-9-]+$/, `Valid route for ${topic.slug}`)
  for (const exercise of topic.exercises) {
    assert.equal(exercise.topicSlug, topic.slug, `Exercise topic link ${exercise.id}`)
    assert.ok(!exerciseIds.has(exercise.id), `Duplicate exercise ID ${exercise.id}`)
    exerciseIds.add(exercise.id)
    if (exercise.type === 'single-choice') {
      assert.ok(exercise.options?.some((option) => option.id === exercise.correctAnswer), `Valid answer for ${exercise.id}`)
      assert.ok(exercise.explanation?.trim(), `Explanation for ${exercise.id}`)
    }
  }
  for (const flashcard of topic.flashcards ?? []) {
    assert.equal(flashcard.lessonId, topic.id, `Flashcard lesson link ${flashcard.id}`)
    assert.ok(!flashcardIds.has(flashcard.id), `Duplicate flashcard ID ${flashcard.id}`)
    flashcardIds.add(flashcard.id)
  }
}

for (const [slug, order, cards, exercises] of expectedNew) {
  const topic = networking.topics.find((entry) => entry.slug === slug)
  assert.ok(topic, `Missing imported topic ${slug}`)
  assert.equal(topic.order, order, `Order for ${slug}`)
  assert.equal(topic.flashcards?.length, cards, `Curated flashcards for ${slug}`)
  assert.equal(topic.exercises.length, exercises, `Exercises for ${slug}`)
}

console.log(`Networking import verification passed: ${networking.topics.length} lessons, ${exerciseIds.size} exercises, ${flashcardIds.size} curated cards`)
console.log(expectedNew.map(([slug, order]) => `/it/netzwerktechnik/${slug} (order ${order})`).join('\n'))
