import assert from 'node:assert/strict'
import { build } from 'esbuild'

async function load(entry) {
  const bundle = await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', write: false })
  return import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`)
}

const { linuxTopics } = await load('src/data/linux/course.ts')
const { lessonLabMap } = await load('src/data/labs.ts')
const extra = linuxTopics.find((topic) => topic.id === 'topic-linux-13-extra-linux-als-server')
assert.ok(extra)
assert.equal(extra.slug, 'extra-linux-als-server')
assert.equal(extra.flashcards.length, 48)
assert.equal(extra.exercises.length, 14)
assert.equal(extra.test.questions.length, 5)
const serialized = JSON.stringify(extra)
for (const phrase of ['Optionales Zusatzmaterial · Teil 1', 'Optionales Zusatzmaterial · Teil 2', '127.0.0.1/8', '::1/128', 'hostname -I', 'ping -c 3 debian.org', 'sudo ss -tlnp', 'openssh-server', 'ssh.socket', '~/.ssh/known_hosts', 'ssh paula@localhost hostname', 'scp notiz.txt paula@localhost:', 'scp paula@localhost:notiz.txt kopie.txt', 'ssh-copy-id hugo@localhost', '/etc/hosts', 'tar -czf backup.tar.gz *.txt', 'sudo systemctl stop ssh.socket ssh']) assert.ok(serialized.includes(phrase), `Missing source-critical Extra fact: ${phrase}`)
const oldIds = ['service','systemd','systemctl','is-active','status','start-stop','restart','enable','disable','enable-now','nginx','localhost','web-root','index','charset','master-worker','least-privilege','read-permission','curl','curl-i','http','200','403','404','port-80','access-log','error-log','grep-404','journal','nginx-test'].map((id) => `fc-linux-13-extra-${id}`)
for (const id of oldIds) assert.ok(extra.flashcards.some((card) => card.id === id), `Existing card ID lost: ${id}`)
assert.equal(new Set(extra.flashcards.map((card) => card.id)).size, 48)
assert.equal(lessonLabMap[extra.id], undefined, 'Real systemd/nginx/SSH/scp workflow must not receive a fake Lab mapping')
console.log('Complete Extra verified: stable lesson identity, all 30 prior cards retained, 18 new cards, 7 new practical/bonus exercises, 5-question visible source quiz, no fake Lab mapping.')
