import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const dictionarySource = readFileSync('src/data/dictionary.ts', 'utf8')
const translatorSource = readFileSync('src/components/HoverTranslator.tsx', 'utf8')
const entries = [...dictionarySource.matchAll(/^\s*'((?:[^'\\]|\\.)+)':\s*'([^']*)',?$/gm)]
const keys = entries.map((match) => match[1])
const dictionary = Object.fromEntries(entries.map((match) => [match[1], match[2]]))

assert.equal(keys.length, 1870, 'Unexpected dictionary entry count')
assert.equal(new Set(keys).size, keys.length, 'Duplicate dictionary key')
assert.equal(keys.filter((key) => key.includes(' ')).length, 189, 'Unexpected phrase count')
assert.ok(keys.every((key) => key === key.toLowerCase()), 'Dictionary keys must be lowercase')

const categories = {
  linux: ['betriebssystemkern', 'kernel-version', 'paket installieren', 'dienst neu starten'],
  windows: ['gerätemanager', 'gerätetreiber', 'treiberaktualisierung'],
  networking: ['öffentliche ip-adresse', 'subnetzmaske', 'routingtabelle', 'netzwerk konfigurieren'],
  security: ['sicherheitslücke', 'mehrfaktor-authentifizierung', 'firewallregel', 'sicheren zugriff'],
  git: ['lokales repository', 'repository klonen', 'merge-konflikt', 'commit-nachricht'],
  storage: ['freier speicherplatz', 'partitionstabelle', 'einbindungspunkt'],
  virtualization: ['virtuelle maschinen', 'hostsystem', 'gastsystem', 'cloud-speicher'],
  database: ['datenbanksystem', 'primärschlüssel', 'fremdschlüssel', 'datenbankabfrage'],
  programming: ['quellcode kompilieren', 'laufzeitfehler', 'funktionsaufruf'],
  administration: ['benutzer hinzufügen', 'rechte ändern', 'administratorrechte', 'zugriff verweigert'],
  examination: ['prüfungsausschuss', 'teilaufgabe', 'bewertungskriterien', 'grundlegende kenntnisse'],
}

for (const [category, terms] of Object.entries(categories)) {
  for (const term of terms) assert.ok(dictionary[term], `${category}: missing ${term}`)
}

for (const term of ['datei', 'dateien', 'benutzer', 'benutzerin', 'benutzerkonto', 'verzeichnis', 'verzeichnisse', 'verbindung', 'verbindungen', 'installieren', 'installation', 'konfigurieren', 'konfiguration', 'konfiguriert', 'speichern', 'gespeichert', 'löschen', 'gelöscht', 'erstellen', 'erstellt', 'zugreifen', 'zugriff']) {
  assert.ok(dictionary[term], `Missing grammatical variant: ${term}`)
}

for (const phrase of ['zugriff verweigert', 'datei erstellen', 'datei löschen', 'benutzer hinzufügen', 'rechte ändern', 'verbindung herstellen', 'netzwerk konfigurieren', 'fehler beheben', 'dienst starten', 'dienst stoppen', 'paket installieren', 'aktuelle version', 'lokale adresse', 'öffentliche ip-adresse', 'ausführbare datei', 'versteckte datei', 'rekursiv löschen', 'sicheren zugriff', 'administratorrechte', 'grundlegende kenntnisse']) {
  assert.ok(dictionary[phrase], `Missing requested phrase: ${phrase}`)
}

assert.match(translatorSource, /const IGNORED_TAGS = \['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'CODE', 'PRE', 'SVG'\]/)
assert.match(translatorSource, /for \(let len = tokens\.length; len > 0; len--\)/, 'Longest phrase must be checked first')
assert.match(translatorSource, /if \(dictionary\[phraseWord\]\)/, 'Dictionary lookup must remain constant-time')
assert.doesNotMatch(dictionarySource, /^\s*'(sudo|chmod|chown|ls -la|\/etc\/passwd|192\.168\.1\.1|git commit|npm install|--force|readme\.md)':/gmi)

console.log(`Translation dictionary verified: ${keys.length} unique entries, ${keys.filter((key) => key.includes(' ')).length} phrases, ${Object.keys(categories).length} subject categories, longest-match lookup and code exclusions.`)
