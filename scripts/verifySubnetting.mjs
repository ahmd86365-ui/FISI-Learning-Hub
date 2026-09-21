import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const ts = require('typescript')
const source = readFileSync(new URL('../src/lib/subnetting.ts', import.meta.url), 'utf8')
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
const { calculateSubnet, generateSubnetProblem, parseIPv4, answerMatches } = await import(`data:text/javascript,${encodeURIComponent(js)}`)

const cases = [
  ['192.168.10.73', 27, '255.255.255.224', '192.168.10.64', '192.168.10.95', '192.168.10.65', '192.168.10.94', 30],
  ['10.20.30.40', 16, '255.255.0.0', '10.20.0.0', '10.20.255.255', '10.20.0.1', '10.20.255.254', 65534],
  ['172.16.31.9', 20, '255.255.240.0', '172.16.16.0', '172.16.31.255', '172.16.16.1', '172.16.31.254', 4094],
  ['192.168.1.42', 24, '255.255.255.0', '192.168.1.0', '192.168.1.255', '192.168.1.1', '192.168.1.254', 254],
  ['192.168.1.129', 25, '255.255.255.128', '192.168.1.128', '192.168.1.255', '192.168.1.129', '192.168.1.254', 126],
  ['192.168.1.70', 26, '255.255.255.192', '192.168.1.64', '192.168.1.127', '192.168.1.65', '192.168.1.126', 62],
  ['192.168.1.241', 28, '255.255.255.240', '192.168.1.240', '192.168.1.255', '192.168.1.241', '192.168.1.254', 14],
  ['192.168.1.250', 29, '255.255.255.248', '192.168.1.248', '192.168.1.255', '192.168.1.249', '192.168.1.254', 6],
  ['192.168.1.253', 30, '255.255.255.252', '192.168.1.252', '192.168.1.255', '192.168.1.253', '192.168.1.254', 2],
]
for (const [address, prefix, mask, network, broadcast, firstHost, lastHost, usableHosts] of cases) {
  const actual = calculateSubnet({ address, prefix })
  assert.deepEqual([actual.mask, actual.network, actual.broadcast, actual.firstHost, actual.lastHost, actual.usableHosts],
    [mask, network, broadcast, firstHost, lastHost, usableHosts])
}
assert.equal(answerMatches(' 192.168.010.073 ', '192.168.10.73'), true)
assert.equal(answerMatches('192.168.10.74', '192.168.10.73'), false)
assert.equal(answerMatches(' 30 ', 30), true)
assert.equal(answerMatches('30.0', 30), false)
let seed = 123456789
const random = () => ((seed = (1664525 * seed + 1013904223) >>> 0) / 2 ** 32)
for (const difficulty of ['leicht', 'mittel', 'schwer']) {
  for (let i = 0; i < 3000; i++) {
    const problem = generateSubnetProblem(difficulty, random)
    const result = calculateSubnet(problem)
    const ip = parseIPv4(problem.address)
    assert.ok(ip > parseIPv4(result.network) && ip < parseIPv4(result.broadcast))
    assert.ok(result.usableHosts >= 2)
    assert.ok(problem.prefix >= 16 && problem.prefix <= 30)
  }
}
console.log('Subnetting: 9 bekannte Fälle, Normalisierung und 9.000 generierte Host/Präfix-Kombinationen geprüft.')
