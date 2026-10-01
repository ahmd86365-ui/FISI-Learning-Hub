import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const dictionarySource = readFileSync('src/data/dictionary.ts', 'utf8')
const expansionSource = readFileSync('src/data/dictionaryExpansion.ts', 'utf8')
const translatorSource = readFileSync('src/components/HoverTranslator.tsx', 'utf8')
const preferencesSource = readFileSync('src/contexts/PreferencesContext.tsx', 'utf8')
const baseEntries = [...dictionarySource.matchAll(/^\s*'((?:[^'\\]|\\.)+)':\s*'([^']*)',?$/gm)]
const expansionEntries = [...expansionSource.matchAll(/^([a-zäöüß0-9 -]+)\|([^\n]+)$/gm)]
const baseDictionary = Object.fromEntries(baseEntries.map((match) => [match[1], match[2]]))
const expansionDictionary = Object.fromEntries(expansionEntries.map((match) => [match[1], match[2]]))
const dictionary = { ...expansionDictionary, ...baseDictionary }
const keys = Object.keys(dictionary)

assert.equal(baseEntries.length, 1870, 'Unexpected base dictionary entry count')
assert.ok(keys.length >= 2870, 'Dictionary must contain at least 1,000 new unique entries')
assert.equal(keys.length, 3389, 'Unexpected merged dictionary entry count')
assert.equal(keys.length - baseEntries.length, 1519, 'Unexpected unique expansion count')
assert.equal(expansionEntries.length, new Set(expansionEntries.map((match) => match[1])).size, 'Duplicate expansion key')
assert.equal(new Set(keys).size, keys.length, 'Duplicate dictionary key')
assert.equal(keys.filter((key) => key.includes(' ')).length, 452, 'Unexpected phrase count')
assert.ok(keys.every((key) => key === key.toLowerCase()), 'Dictionary keys must be lowercase')
assert.ok(keys.every((key) => key === key.trim()), 'Dictionary keys must be trimmed')
assert.ok(Object.values(dictionary).every((value) => value.trim().length > 0), 'Translations must not be empty')

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
  formal: ['nachvollziehbarkeit', 'rahmenbedingungen', 'verhältnismäßigkeit', 'folgeabschätzung'],
  wiso: ['entgeltfortzahlung', 'beitragsbemessungsgrenze', 'tarifautonomie', 'nacherfüllung'],
  advancedNetworking: ['netzwerksegmentierung', 'protokolldateneinheit', 'broadcastdomäne', 'paketweiterleitung'],
  advancedSecurity: ['schutzbedarfsfeststellung', 'nichtabstreitbarkeit', 'zertifikatswiderruf', 'einbruchserkennung'],
  operations: ['prozessverwaltung', 'protokollauswertung', 'verfügbarkeitsüberwachung', 'änderungsfreigabe'],
  examLanguage: ['welche aussage trifft zu', 'was ist hierbei zu beachten', 'beurteilen sie den sachverhalt', 'sofern nicht anders angegeben'],
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

assert.match(translatorSource, /if \(!translationEnabled\)/, 'Disabled translation must hide the tooltip')
assert.match(translatorSource, /const IGNORED_TAGS = \['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'CODE', 'PRE', 'SVG'\]/)
assert.match(translatorSource, /\[data-no-translate\]/, 'Explicit translation exclusions must remain supported')
assert.match(translatorSource, /for \(let len = tokens\.length; len > 0; len--\)/, 'Longest phrase must be checked first')
assert.match(translatorSource, /if \(dictionary\[phraseWord\]\)/, 'Dictionary lookup must remain constant-time')
assert.match(preferencesSource, /localStorage\.getItem\('fisi_translation_enabled'\)/, 'Translation preference must be restored')
assert.match(preferencesSource, /localStorage\.setItem\('fisi_translation_enabled'/, 'Translation preference must be persisted')
const allDictionarySource = `${dictionarySource}\n${expansionSource}`
assert.doesNotMatch(allDictionarySource, /^(sudo|chmod|chown|ls -la|\/etc\/passwd|192\.168\.1\.1|git commit|npm install|--force|readme\.md)[|'\s:]/gmi)

console.log(`Translation dictionary verified: ${baseEntries.length} before, ${keys.length} after, ${keys.length - baseEntries.length} new unique entries, ${keys.filter((key) => key.includes(' ')).length} phrases (${189} before), ${Object.keys(categories).length} subject categories, longest-match lookup and code exclusions.`)
