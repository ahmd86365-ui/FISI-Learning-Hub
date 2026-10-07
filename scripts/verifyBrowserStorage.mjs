import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/browserStorage.ts', import.meta.url), 'utf8')
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
}).outputText
const storage = await import(`data:text/javascript;base64,${Buffer.from(output).toString('base64')}`)

const memory = (initial = {}) => {
  const values = new Map(Object.entries(initial))
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  }
}
const recordWithId = (value) => storage.isRecord(value) && typeof value.id === 'string'

const valid = memory({ list: JSON.stringify([{ id: 'kept' }, { invalid: true }]) })
assert.deepEqual(storage.readValidatedArray('local', 'list', recordWithId, valid), [{ id: 'kept' }])
assert.equal(valid.getItem('list'), JSON.stringify([{ id: 'kept' }]), 'valid entries must survive structural repair')

for (const raw of ['not-json', '{}']) {
  const invalid = memory({ key: raw, untouched: 'preserve-me' })
  assert.deepEqual(storage.readValidatedArray('local', 'key', recordWithId, invalid), [])
  assert.equal(invalid.getItem('key'), null, 'only the invalid key should be reset')
  assert.equal(invalid.getItem('untouched'), 'preserve-me')
}

const blocked = {
  getItem: () => { throw new DOMException('blocked', 'SecurityError') },
  setItem: () => { throw new DOMException('full', 'QuotaExceededError') },
  removeItem: () => { throw new DOMException('blocked', 'SecurityError') },
}
assert.equal(storage.safeStorageGet('local', 'key', blocked), null)
assert.equal(storage.safeStorageSet('local', 'key', 'value', blocked), false)
assert.equal(storage.safeStorageRemove('local', 'key', blocked), false)
assert.deepEqual(storage.readValidatedArray('local', 'key', recordWithId, blocked), [])

console.log('Browser storage verified: malformed JSON, invalid shapes, partial recovery, SecurityError and QuotaExceededError are handled without cross-key deletion.')
