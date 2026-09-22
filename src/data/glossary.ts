import type { SubjectSlug } from '../types/content'

export const glossaryCategories = ['Netzwerktechnik', 'Linux', 'Betriebssysteme', 'Hardware', 'Sicherheit', 'Wirtschaft'] as const
export type GlossaryCategory = (typeof glossaryCategories)[number]

export interface GlossaryLesson {
  subject: SubjectSlug
  module: string
  topic: string
}

export interface GlossaryEntry {
  id: string
  term: string
  definition: string
  category: GlossaryCategory
  lessons: GlossaryLesson[]
  aliases?: string[]
  related?: string[]
}

const net = (topic: string): GlossaryLesson => ({ subject: 'it', module: 'netzwerktechnik', topic })
const linux = (topic = 'was-ist-linux'): GlossaryLesson => ({ subject: 'it', module: 'linux', topic })
const hardware = (topic: string): GlossaryLesson => ({ subject: 'it', module: 'it-technical', topic })
const english = (topic: string): GlossaryLesson => ({ subject: 'english', module: 'technical-english-fisi', topic })
const wiso = (topic: string): GlossaryLesson => ({ subject: 'wirtschaft', module: 'wiso', topic })

// Each lesson reference points to the existing teaching material used for the entry.
// Keep the wording short and original; extend the data when new lessons arrive.
export const glossaryEntries: GlossaryEntry[] = [
  { id: 'osi-modell', term: 'OSI-Modell', category: 'Netzwerktechnik', definition: 'Ein Referenzmodell mit sieben Schichten, das Aufgaben bei der Netzwerkkommunikation ordnet. Es hilft dir, Protokolle und Fehler einer Schicht zuzuordnen.', lessons: [net('osi-tcp-ip')] },
  { id: 'tcp-ip', term: 'TCP/IP', category: 'Netzwerktechnik', definition: 'Eine Protokollfamilie für die Kommunikation in IP-Netzen. Im Lernstoff werden ihre Bereiche mit den OSI-Schichten verglichen.', lessons: [net('osi-tcp-ip')], aliases: ['TCP/IP-Modell'] },
  { id: 'tcp', term: 'TCP', category: 'Netzwerktechnik', definition: 'Ein Transportprotokoll, das eine Verbindung aufbaut, Daten nummeriert und den Empfang bestätigt.', lessons: [net('tcp-verbindungen')] },
  { id: 'udp', term: 'UDP', category: 'Netzwerktechnik', definition: 'Ein verbindungsloses Transportprotokoll. Im Gegensatz zu TCP wird in der behandelten Gegenüberstellung keine Verbindung aufgebaut.', lessons: [net('osi-tcp-ip')] },
  { id: 'ip-adresse', term: 'IP-Adresse', category: 'Netzwerktechnik', definition: 'Eine Adresse für ein Gerät in einem IP-Netz. Zusammen mit der Netzmaske lässt sich bestimmen, zu welchem Netz die Adresse gehört.', lessons: [net('ipv4-adressen')], aliases: ['IP address'] },
  { id: 'ipv4', term: 'IPv4', category: 'Netzwerktechnik', definition: 'Die im Kurs behandelte IP-Adressform mit 32 Bit, geschrieben als vier dezimale Oktette.', lessons: [net('ipv4-adressen')] },
  { id: 'ipv6', term: 'IPv6', category: 'Netzwerktechnik', definition: 'Eine IP-Adressform mit 128 Bit. Die Lektion zeigt ihre Schreibweise in hexadezimalen Gruppen.', lessons: [net('ipv4-adressen')] },
  { id: 'cidr', term: 'CIDR', category: 'Netzwerktechnik', definition: 'Die Schreibweise mit einem Schrägstrich und einer Zahl, etwa /28. Die Zahl gibt an, wie viele Bits zum Netzanteil gehören.', lessons: [net('cidr-netzgrenzen')], aliases: ['Präfixlänge'] },
  { id: 'subnetzmaske', term: 'Subnetzmaske', category: 'Netzwerktechnik', definition: 'Sie trennt bei einer IPv4-Adresse Netzbits von Hostbits. Die Einsen der Maske stehen dabei zusammenhängend am Anfang.', lessons: [net('cidr-netzgrenzen')], aliases: ['Netzmaske'] },
  { id: 'netzadresse', term: 'Netzadresse', category: 'Netzwerktechnik', definition: 'Die erste Adresse eines berechneten Subnetzes; ihre Hostbits sind null. In den behandelten üblichen Subnetzen ist sie keine nutzbare Hostadresse.', lessons: [net('cidr-netzgrenzen')] },
  { id: 'broadcast-adresse', term: 'Broadcast-Adresse', category: 'Netzwerktechnik', definition: 'Die letzte Adresse eines berechneten IPv4-Subnetzes; ihre Hostbits sind eins. In den behandelten üblichen Subnetzen ist sie für Hosts reserviert.', lessons: [net('cidr-netzgrenzen')], aliases: ['Broadcast'] },
  { id: 'subnetting', term: 'Subnetting', category: 'Netzwerktechnik', definition: 'Das Aufteilen eines Netzes in kleinere Teilnetze. Dazu werden zusätzliche Bits für den Netzanteil verwendet.', lessons: [net('subnetting')] },
  { id: 'standardgateway', term: 'Standardgateway', category: 'Netzwerktechnik', definition: 'Der Übergang zu anderen Netzen. In den Subnetting-Aufgaben erhält das Gateway eine nutzbare Adresse aus dem eigenen Subnetz.', lessons: [net('subnetting'), english('networking-basics-ip-addresses')], aliases: ['Default Gateway', 'Gateway'] },
  { id: 'routing', term: 'Routing', category: 'Netzwerktechnik', definition: 'Die Weiterleitung von IP-Paketen zwischen Netzen anhand von Routen. Eine Routingtabelle zeigt Zielnetz, nächsten Hop und Ausgang.', lessons: [net('statisches-routing')] },
  { id: 'router', term: 'Router', category: 'Netzwerktechnik', definition: 'Ein Gerät, das verschiedene IP-Netze verbindet und Pakete auf dem passenden Weg weiterleitet.', lessons: [net('statisches-routing')], aliases: ['router'] },
  { id: 'next-hop', term: 'Next Hop', category: 'Netzwerktechnik', definition: 'Der direkt erreichbare nächste Router, an den ein Paket auf dem Weg zum Zielnetz geschickt wird.', lessons: [net('statisches-routing')] },
  { id: 'default-route', term: 'Default Route', category: 'Netzwerktechnik', definition: 'Eine Route für Ziele ohne passenderen Eintrag. Im IPv4-Beispiel wird sie als 0.0.0.0/0 geschrieben.', lessons: [net('statisches-routing')], aliases: ['Standardroute'] },
  { id: 'routingtabelle', term: 'Routingtabelle', category: 'Netzwerktechnik', definition: 'Eine Übersicht der Wege zu Zielnetzen mit Angaben wie Maske, Next Hop und Ausgangsschnittstelle.', lessons: [net('statisches-routing')] },
  { id: 'mac-adresse', term: 'MAC-Adresse', category: 'Netzwerktechnik', definition: 'Eine Kennung einer Netzwerkschnittstelle für die Zustellung im lokalen Ethernet-Segment. Ein Switch lernt daraus, an welchem Port ein Gerät erreichbar ist.', lessons: [net('ethernet-lan')], aliases: ['MAC Address'] },
  { id: 'ethernet', term: 'Ethernet', category: 'Netzwerktechnik', definition: 'Die im Kurs behandelte Technik für lokale Netze. Ethernet-Frames tragen MAC-Adressen für den nächsten Übertragungsabschnitt.', lessons: [net('ethernet-lan'), net('osi-tcp-ip')] },
  { id: 'lan', term: 'LAN', category: 'Netzwerktechnik', definition: 'Ein lokales Netz, das Geräte in einem begrenzten Bereich verbindet.', lessons: [net('ethernet-lan')], aliases: ['Local Area Network'] },
  { id: 'wan', term: 'WAN', category: 'Netzwerktechnik', definition: 'Ein Netz, das andere Netze über größere Entfernungen verbindet.', lessons: [net('statisches-routing')], aliases: ['Wide Area Network'] },
  { id: 'switch', term: 'Switch', category: 'Netzwerktechnik', definition: 'Ein Gerät im LAN, das Quell-MAC-Adressen und Ports lernt und Frames für bekannte Ziele gezielt weiterleitet.', lessons: [net('ethernet-lan')] },
  { id: 'dns', term: 'DNS', category: 'Netzwerktechnik', definition: 'Ein Dienst zur Namensauflösung: Er übersetzt Domainnamen in IP-Adressen.', lessons: [english('networking-basics-ip-addresses')], aliases: ['Domain Name System'] },
  { id: 'dhcp', term: 'DHCP', category: 'Netzwerktechnik', definition: 'Ein Dienst, der Clients IP-Adressen automatisch zuweist.', lessons: [english('networking-basics-ip-addresses')], aliases: ['Dynamic Host Configuration Protocol'] },
  { id: 'port', term: 'Port', category: 'Netzwerktechnik', definition: 'Eine Nummer, die bei der Transportkommunikation eine Anwendung beziehungsweise einen Dienst am Zielgerät bezeichnet.', lessons: [net('osi-tcp-ip')] },
  { id: 'kapselung', term: 'Kapselung', category: 'Netzwerktechnik', definition: 'Beim Senden ergänzt jede beteiligte Netzwerkschicht eigene Steuerinformationen zu den Daten. Der Empfänger wertet diese Hüllen in umgekehrter Reihenfolge aus.', lessons: [net('osi-tcp-ip')] },
  { id: 'linux', term: 'Linux', category: 'Linux', definition: 'Im genauen Sinn der Kernel eines Betriebssystems. Zusammen mit GNU-Werkzeugen entsteht ein nutzbares GNU/Linux-System.', lessons: [linux()] },
  { id: 'kernel', term: 'Kernel', category: 'Linux', definition: 'Der Kern des Betriebssystems. Er spricht mit der Hardware und verteilt unter anderem Rechenzeit.', lessons: [linux()], aliases: ['Betriebssystemkern'] },
  { id: 'distribution', term: 'Distribution', category: 'Linux', definition: 'Ein installierbares Gesamtpaket aus Linux-Kernel, Systemwerkzeugen, Paketverwaltung und meist einer grafischen Oberfläche.', lessons: [linux()], aliases: ['Linux-Distribution', 'Distro'] },
  { id: 'gnu', term: 'GNU', category: 'Linux', definition: 'Ein Projekt für freie Systemwerkzeuge. Die Linux-Lektion nennt unter anderem Bash, GCC und Coreutils als Werkzeuge aus diesem Umfeld.', lessons: [linux()] },
  { id: 'gpl', term: 'GPL', category: 'Linux', definition: 'Eine im Linux-Kurs besprochene Lizenz. Bei Weitergabe entsprechend lizenzierter Software muss der Code nach ihren Bedingungen wieder offengelegt werden.', lessons: [linux()], aliases: ['General Public License'] },
  { id: 'open-source', term: 'Open Source', category: 'Linux', definition: 'Software mit einsehbarem und nach den jeweiligen Lizenzbedingungen veränderbarem Quellcode.', lessons: [linux()], aliases: ['Offener Quellcode'] },
  { id: 'bash', term: 'Bash', category: 'Linux', definition: 'Ein im Linux-Kurs genanntes GNU-Werkzeug für die Arbeit mit Befehlen im Terminal.', lessons: [linux()] },
  { id: 'virtuelle-maschine', term: 'Virtuelle Maschine', category: 'Linux', definition: 'Ein Rechner innerhalb eines bestehenden Systems. Im Linux-Kurs wird darauf eine Distribution zum Üben installiert.', lessons: [linux()], aliases: ['VM'] },
  { id: 'betriebssystem', term: 'Betriebssystem', category: 'Betriebssysteme', definition: 'Software zwischen Programmen und Hardware. Sie verwaltet Ressourcen wie Prozessor, Arbeitsspeicher und Datenträger und startet Programme.', lessons: [linux(), hardware('windows/betriebssystem')] },
  { id: 'cpu', term: 'CPU', category: 'Hardware', definition: 'Der Prozessor, der Befehle ausführt. Die IT-Technical-Lektion behandelt seinen Befehlszyklus und seine Leistung.', lessons: [hardware('kernkomponenten/cpu')], aliases: ['Prozessor'] },
  { id: 'ram', term: 'RAM', category: 'Hardware', definition: 'Der Arbeitsspeicher eines Rechners. Die Lektion ordnet ihn mit Cache und anderen Speichern in eine Speicherhierarchie ein.', lessons: [hardware('kernkomponenten/arbeitsspeicher')], aliases: ['Arbeitsspeicher'] },
  { id: 'firmware', term: 'Firmware', category: 'Hardware', definition: 'Software, die grundlegende Hardwarefunktionen und den Systemstart unterstützt. Im Kurs werden ROM und Flash als Speicher dafür behandelt.', lessons: [hardware('kernkomponenten/rom-firmware')] },
  { id: 'raid', term: 'RAID', category: 'Hardware', definition: 'Eine Anordnung mehrerer Laufwerke. Die Lektion vergleicht RAID 0, 1, 5 und 10 hinsichtlich Kapazität und Ausfallschutz.', lessons: [hardware('speicher/raid')] },
  { id: 'nas', term: 'NAS', category: 'Hardware', definition: 'Ein Speicher im Netz, auf den Geräte über das Netzwerk zugreifen. Die IT-Technical-Lektion stellt ihn einem SAN gegenüber.', lessons: [hardware('speicher/nas-san')] },
  { id: 'san', term: 'SAN', category: 'Hardware', definition: 'Eine Speicherinfrastruktur, die in der IT-Technical-Lektion mit NAS verglichen wird.', lessons: [hardware('speicher/nas-san')] },
  { id: 'usv', term: 'USV', category: 'Hardware', definition: 'Eine unterbrechungsfreie Stromversorgung, die Geräte bei Stromausfall für begrenzte Zeit versorgt. Auswahl und Laufzeit werden im Kurs berechnet.', lessons: [hardware('energie/usv-auswahl'), hardware('energie/usv-laufzeit')], aliases: ['Unterbrechungsfreie Stromversorgung'] },
  { id: 'firewall', term: 'Firewall', category: 'Sicherheit', definition: 'Eine Schutzfunktion, deren Regeln Datenverkehr nach Quelle, Ziel und weiteren Angaben erlauben oder blockieren.', lessons: [english('firewalls-protocols')] },
  { id: 'backup', term: 'Backup', category: 'Sicherheit', definition: 'Eine Sicherung von Daten für die spätere Wiederherstellung. Der Kurs betont, dass Sicherungen auch getestet werden müssen.', lessons: [english('backup-data-recovery')], aliases: ['Datensicherung'] },
  { id: 'rechtsform', term: 'Rechtsform', category: 'Wirtschaft', definition: 'Die rechtliche Form eines Unternehmens. Im WISO-Kurs werden verschiedene Formen und ihre Merkmale verglichen.', lessons: [wiso('rechtsformen')] },
  { id: 'vollmacht', term: 'Vollmacht', category: 'Wirtschaft', definition: 'Eine Befugnis, im Namen eines anderen zu handeln. Die WISO-Lektion unterscheidet betriebliche Arten und ihren Umfang.', lessons: [wiso('vollmachten-im-betrieb')] },
  { id: 'sozialversicherung', term: 'Sozialversicherung', category: 'Wirtschaft', definition: 'Ein System zur Absicherung sozialer Risiken. Der WISO-Kurs gibt einen Überblick über seine Zweige.', lessons: [wiso('sozialversicherung')] },
  { id: 'konjunktur', term: 'Konjunktur', category: 'Wirtschaft', definition: 'Die Entwicklung der wirtschaftlichen Aktivität über die Zeit. Im WISO-Kurs werden Konjunktur und Maßnahmen der Konjunkturpolitik behandelt.', lessons: [wiso('konjunktur')] },
]

export function normalizeGlossarySearch(value: string): string {
  return value.trim().toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss')
}

export function searchGlossary(entries: GlossaryEntry[], query: string, category?: GlossaryCategory): GlossaryEntry[] {
  const needle = normalizeGlossarySearch(query)
  return entries.filter((entry) =>
    (!category || entry.category === category) &&
    (!needle || [entry.term, entry.definition, ...(entry.aliases ?? [])].some((value) => normalizeGlossarySearch(value).includes(needle))),
  )
}

export function glossaryLessonPath(lesson: GlossaryLesson): string {
  const base = lesson.subject === 'it' ? '/it' : lesson.subject === 'english' ? '/it-english' : '/wirtschaft-gesellschaft'
  return `${base}/${lesson.module}/${lesson.topic}`
}
