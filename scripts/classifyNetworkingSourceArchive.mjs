import { readFileSync, writeFileSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'

const repoRoot = resolve(import.meta.dirname, '..')
const root = join(repoRoot, '2_Netzwerktechnik', 'zusatzmaterial-alt')
const sourceManifestPath = join(root, 'source-manifest.json')
const sourceManifest = JSON.parse(readFileSync(sourceManifestPath, 'utf8'))

const classify = (name) => {
  if (/^VLAN/.test(name)) return ['Fehlte; als neue Lektion umgesetzt', ['vlan-switching'], 'IEEE 802.1Q, Segmentierung, Tagging und Inter-VLAN-Routing']
  if (name === 'VPN.pdf') return ['Fehlte; als neue Lektion umgesetzt', ['vpn-tunneling'], 'Remote Access, Site-to-Site, End-to-End, Tunnel und Schutzziele']
  if (name === 'Firewall+Ports.pdf') return ['Fehlte; als neue Lektion umgesetzt', ['firewall-ports'], 'Filterstrategien, SPI, Proxy, Ports und Portknocking']
  if (name === 'CMD+PING.pdf') return ['Fehlte; als neue Lektion umgesetzt', ['netzwerkdienste-diagnose'], 'Kommandozeilendiagnose, ICMP, Ping- und Portscan-Kontext']
  if (name === 'Projekt-Netzwerk.pdf') return ['Supplementäre offene Transferaufgabe', ['netzwerkplanung-uebertragungsrechnung'], 'Netzwerkprojekt ohne eindeutige Musterlösung']
  if (/Grundlagen_Netzwerktechnik_Teil-2/.test(name)) return ['Teilweise abgedeckt; fehlende Infrastrukturteile umgesetzt', ['netzwerkformen-verkabelung', 'netzwerkplanung-uebertragungsrechnung'], 'Strukturierte Verkabelung, Medien, Adapter und TCP/IP-Grundlagen']
  if (/Grundlagen_Netzwerktechnik_Teil-1/.test(name)) return ['Überlappend mit eigenständigem Bildungswert', ['osi-tcp-ip', 'ethernet-lan', 'netzwerkformen-verkabelung', 'vpn-tunneling'], 'Breites Grundlagenkompendium mit Topologien, Begriffen und Tunneling']
  if (/Loe04_Supernetting|A04_Supernetting/.test(name)) return ['Teilweise abgedeckt; Aggregation/VLSM ergänzt', ['netzwerkplanung-uebertragungsrechnung', 'subnetting'], 'Offizielle Supernetting-/VLSM-Aufgabe und Lösung']
  if (/Subnetting-Berechnungen/.test(name)) return ['Supplementäre prüfungsnahe Aufgaben mit eigenständigem Wert', ['subnetting', 'vlan-switching', 'netzwerkplanung-uebertragungsrechnung'], 'Subnetting, VLAN, DNS/DHCP, VPN und Berechnungen']
  if (/ITNWG_Übungsaufgaben_Teil_3/.test(name)) return ['Supplementäre Aufgaben; Kernlücken umgesetzt', ['netzwerkplanung-uebertragungsrechnung', 'netzwerkdienste-diagnose', 'firewall-ports', 'vpn-tunneling', 'ipv6-adressierung'], 'Übertragungsrechnung, IPv4/IPv6, Dienste und Sicherheit']
  if (/ITNWG_Übungsaufgaben_Teil_[1245]|ITNWG-Ü-Klausur/.test(name)) return ['Supplementäre Wiederholungs-/Prüfungsaufgaben', ['netzwerkformen-verkabelung', 'ethernet-lan', 'osi-tcp-ip', 'netzwerkplanung-uebertragungsrechnung'], 'Grundlagen, Topologien, Verkabelung, Switching und Prüfungstransfer']
  if (/Abkurzugen & Gleichungen/.test(name)) return ['Supplementäres fachübergreifendes Nachschlagewerk', ['netzwerkplanung-uebertragungsrechnung'], 'Abkürzungen und Rechenbeziehungen, teils außerhalb Netzwerktechnik']
  if (/Klausur_Themen/.test(name)) return ['Supplementäre Themenübersicht', ['netzwerkformen-verkabelung', 'osi-tcp-ip', 'subnetting'], 'Prüfungsthemen ohne eigenständige Erklärung']
  if (/Netzwerkgrundlagen_Erkläungen/.test(name)) return ['Weitgehend abgedeckte Übersicht', ['osi-tcp-ip', 'ethernet-lan', 'statisches-routing'], 'OSI-, Protokoll- und Kopplungselementübersicht']
  if (/Dualstellen bilden/.test(name)) return ['Vollständig abgedeckte Referenztabelle', ['ipv4-adressen', 'protokoll-header-frameanalyse'], 'Binär-/Hexadezimalumrechnung']
  if (/02_LAN_IP-Adressen|Adressen_Subnetting|Aufbau_von_IP|IPv4_Übungsaufgaben|Lösungen-IPv4/.test(name)) return ['Vollständig durch IPv4/CIDR-Lektionen abgedeckt', ['ipv4-adressen', 'cidr-netzgrenzen'], 'IPv4-Aufbau, Bereiche, Binärumrechnung und Netzgrenzen']
  if (/Loe0[1235]_Subnetting|A0[1235]_Subnetting|Subnetting\.pdf/.test(name)) return ['Supplementäre Subnetting-Aufgabe beziehungsweise offizielle Lösung', ['cidr-netzgrenzen', 'subnetting'], 'RFC-950-/RFC-1878-Rechenpraxis; historische Einschränkungen beachten']
  if (/Loe06_Routing|A06_Routing/.test(name)) return ['Supplementäre Routingaufgabe beziehungsweise offizielle Lösung', ['statisches-routing'], 'Routingtabellen und Next-Hop-Transfer']
  return ['Manuell geprüft; überlappendes Zusatzmaterial', [], 'Kein automatischer Dateinamens-Match']
}

const uniqueByArchive = new Map()
for (const record of sourceManifest.records) {
  if (!uniqueByArchive.has(record.archivedPath)) {
    const [classification, lessonSlugs, educationalValue] = classify(basename(record.archivedPath))
    uniqueByArchive.set(record.archivedPath, {
      archivedPath: record.archivedPath,
      sha256: record.sha256,
      classification,
      lessonSlugs,
      educationalValue,
      originalPaths: [],
    })
  }
  uniqueByArchive.get(record.archivedPath).originalPaths.push(record.originalPath)
}

const documents = [...uniqueByArchive.values()].sort((a, b) => a.archivedPath.localeCompare(b.archivedPath, 'de'))
for (const record of sourceManifest.records) {
  const coverage = uniqueByArchive.get(record.archivedPath)
  record.classification = record.duplicateOf
    ? `Byte-identisches Duplikat; ${coverage.classification}`
    : coverage.classification
}

writeFileSync(sourceManifestPath, `${JSON.stringify(sourceManifest, null, 2)}\n`)
writeFileSync(join(root, 'coverage-manifest.json'), `${JSON.stringify({
  generatedFrom: 'source-manifest.json',
  uniqueDocumentCount: documents.length,
  documents,
}, null, 2)}\n`)
console.log(`Classified ${documents.length} unique archived documents.`)
