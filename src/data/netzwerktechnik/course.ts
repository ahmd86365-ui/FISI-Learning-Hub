import type { ContentBlock, Exercise, Topic } from '../../types/content'

// The only educational sources for this module are in Netzwerktechnik-Neu.
// Worksheet answers below are calculated from the printed inputs; the PDFs contain no answer key.
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const ex = (title: string, text: string): ContentBlock => ({ type: 'example', title, text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const goals = (...items: string[]): ContentBlock[] => [h('Lernziele'), list(...items)]
const choice = (id: string, topicSlug: string, question: string, options: string[], correct: number, explanation: string): Exercise => ({
  id: `netz-neu-${id}`, topicSlug, type: 'single-choice', difficulty: 'medium', question,
  options: options.map((text, i) => ({ id: String(i), text })), correctAnswer: String(correct), explanation,
})
const calc = (id: string, topicSlug: string, question: string, answer: string, explanation: string): Exercise => ({
  id: `netz-neu-${id}`, topicSlug, type: 'calculation', difficulty: 'medium', question,
  correctAnswer: answer, explanation,
})
const open = (id: string, topicSlug: string, question: string, hint: string): Exercise => ({
  id: `netz-neu-${id}`, topicSlug, type: 'technical-problem', difficulty: 'hard', question, explanation: hint,
})
const topic = (slug: string, title: string, order: number, shortIntro: string, content: ContentBlock[], exercises: Exercise[]): Topic => ({
  id: `topic-netz-neu-${slug}`, slug, moduleSlug: 'netzwerktechnik', title, order, shortIntro, content, exercises,
})

const model = 'osi-tcp-ip'
const lan = 'ethernet-lan'
const ip = 'ipv4-adressen'
const cidr = 'cidr-netzgrenzen'
const subnet = 'subnetting'
const routing = 'statisches-routing'
const tcp = 'tcp-verbindungen'

export const netzwerktechnikTopics: Topic[] = [
  topic(model, 'OSI-Modell, TCP/IP und Protokollstapel', 1,
    'Schichten, Protokolle und Kapselung vom Anwendungsdatum bis zum Ethernet-Frame.',
    [
      p('Ein Netzwerk überträgt Daten nicht in einem einzigen Schritt. Schichten teilen die Arbeit auf: Eine Anwendung erzeugt Daten, Transport und Vermittlung adressieren die Kommunikation, die Netzzugangsschicht bringt Bits zum nächsten Gerät.'),
      ...goals('Die sieben OSI-Schichten benennen und ihre Aufgaben einordnen.', 'OSI und TCP/IP gegenüberstellen.', 'Die Kapselung einer Nachricht anhand des Quellenbeispiels erklären.'),
      h('OSI und TCP/IP zuordnen'),
      { type: 'diagram', src: '/images/netzwerktechnik/osi-tcp-ip.jpg', alt: 'Vergleich der sieben OSI-Schichten mit vier TCP/IP-Bereichen', caption: 'Quellabbildung T02: OSI-Schichten und TCP/IP-Bereiche. Die konkrete Protokollzuordnung wird im Text erläutert.' },
      table(['OSI', 'Deutsch / Englisch', 'Aufgabe', 'TCP/IP-Bereich'], [
        ['7', 'Anwendung / Application', 'Anwendungsprotokolle wie SMTP, HTTP, FTP und DNS', 'Anwendung'],
        ['6', 'Darstellung / Presentation', 'Darstellung der Daten', 'Anwendung'],
        ['5', 'Sitzung / Session', 'Kommunikation zwischen Anwendungen', 'Anwendung'],
        ['4', 'Transport / Transport', 'Ende-zu-Ende-Transport mit TCP oder UDP; Ports', 'Transport / Host-to-Host'],
        ['3', 'Vermittlung / Network', 'IP-Adressierung und Routing; ICMP', 'Internet'],
        ['2', 'Sicherung / Data Link', 'Ethernet-Frames und MAC-Adressen; ARP an der Grenze zu IP', 'Netzzugang'],
        ['1', 'Bitübertragung / Physical', 'Übertragung über Kupfer, Glasfaser oder Funk', 'Netzzugang'],
      ]),
      note('T03 nennt POP3 und IMAP bei OSI 6 bzw. 5. In der Praxis gehören beide als Mailprotokolle zur Anwendungsschicht. Die Schichtentabelle verwendet diese technisch korrekte Einordnung.'),
      h('Kapselung: Daten erhalten weitere Hüllen'),
      p('Im Foto T01 beginnt eine SMTP-Nachricht als Anwendungsdatum. TCP ergänzt Quell- und Zielport (dort 1030 und 25). IP ergänzt Quell- und Zieladresse (dort 195.0.7.4 und 130.1.2.3). Ethernet ergänzt MAC-Adressen für den nächsten Übertragungsabschnitt. Beim Empfänger werden die Hüllen in umgekehrter Reihenfolge ausgewertet.'),
      table(['Schritt', 'Dateneinheit', 'Wichtige Information'], [
        ['Anwendung', 'Nachricht', 'SMTP-Inhalt und Empfänger'],
        ['Transport', 'TCP-Segment', 'Quellport 1030, Zielport 25'],
        ['Internet', 'IP-Paket', 'Quell-IP 195.0.7.4, Ziel-IP 130.1.2.3'],
        ['Netzzugang', 'Ethernet-Frame', 'Quell- und Ziel-MAC für den lokalen Abschnitt'],
      ]),
      { type: 'key-points', items: ['OSI ist ein Referenzmodell; TCP/IP beschreibt die im Beispiel verwendete Protokollfamilie.', 'Jede Schicht nutzt den Dienst der darunterliegenden Schicht.', 'IP-Ziel und TCP-Zielport bezeichnen unterschiedliche Ziele: Rechner und Anwendung.'] },
    ],
    [
      choice('modell-1', model, 'Welche OSI-Schicht ist für IP-Routing zuständig?', ['Sicherung (2)', 'Vermittlung (3)', 'Transport (4)'], 1, 'IP und Routing gehören zur Vermittlungsschicht.'),
      choice('modell-2', model, 'Welche Reihenfolge beschreibt die Kapselung der SMTP-Nachricht aus T01?', ['SMTP → TCP → IP → Ethernet', 'Ethernet → SMTP → IP → TCP', 'IP → Ethernet → SMTP → TCP'], 0, 'Jede tiefere Schicht ergänzt ihre eigenen Steuerinformationen.'),
      choice('modell-3', model, 'Welche Information bezeichnet im T01-Beispiel die empfangende Anwendung?', ['130.1.2.3', 'Port 25', 'Ethernet-MAC'], 1, 'Der TCP-Zielport 25 bezeichnet den SMTP-Dienst.'),
    ]),
  topic(lan, 'Ethernet-LAN, MAC-Adressen und Topologien', 2,
    'Was Netzwerkkarten, Hubs und Switches im lokalen Netz tun.',
    [
      p('Ein LAN verbindet Geräte in einem begrenzten Bereich. T04 betrachtet dafür die OSI-Schicht 2 und mehrere historische sowie aktuelle Topologien.'),
      ...goals('Eine MAC-Adresse und ihre Rolle im LAN erklären.', 'Bus, Ring, Stern und Baum unterscheiden.', 'Das Weiterleitungsverhalten von Hub und Switch vergleichen.'),
      h('Netzwerkkarte und MAC-Adresse'),
      p('Eine NIC (Network Interface Card) verbindet ein Gerät mit dem Netz. Im Material trägt sie beispielhaft die MAC-Adresse 00-20-AF-F6-CA-2B. Der erste Teil kennzeichnet den Herstellerbereich, der zweite die vom Hersteller vergebene Kennung. Die MAC dient der Zustellung im lokalen Ethernet-Segment.'),
      h('Topologien und Weiterleitung'),
      table(['Aufbau', 'Prinzip laut Quelle', 'Einordnung'], [
        ['Bus', 'Alle Teilnehmer sehen die Übertragung und prüfen die Ziel-MAC.', 'Historischer gemeinsamer Übertragungsweg'],
        ['Ring / Tokenring', 'Ein Token wandert; nur dessen Besitzer darf senden.', 'Historische Zugriffstechnik'],
        ['Stern mit Hub', 'Hub verteilt an alle Ports.', 'Physikalisch Stern, logisch gemeinsamer Bus'],
        ['Stern mit Switch', 'Switch lernt Quell-MAC und Eingangsport; bekannte Ziele gehen gezielt zum Port.', 'Üblicher Ethernet-Aufbau'],
        ['Baum', 'Mehrere Switches bilden eine verzweigte Struktur.', 'Erweiterung des Sterns'],
      ]),
      { type: 'diagram', src: '/images/netzwerktechnik/ethernet-switch.png', alt: 'Quellfolie mit Stern-Topologie und Switch-Tabelle für MAC-Adressen und Ports', caption: 'T04, Seite 6: Ein Switch merkt sich die Quell-MAC pro Port und leitet bekannte Ziele gezielt weiter.' },
      ex('Switch lernt', 'Trifft ein Frame mit bisher unbekannter Quell-MAC am Port 2 ein, speichert der Switch die Zuordnung. Ist die Ziel-MAC unbekannt, verteilt er den Frame zunächst an die anderen Ports.'),
      { type: 'key-points', items: ['MAC-Adressen dienen der Zustellung im LAN.', 'Ein Hub verteilt, ein Switch lernt und leitet gezielt weiter.', 'Das Material zeigt Bus und Tokenring als Vergleichsformen; für den heutigen FISI-Alltag ist das geswitchte Ethernet zentral.'] },
    ],
    [
      choice('lan-1', lan, 'Was lernt ein Ethernet-Switch aus einem empfangenen Frame?', ['Ziel-IP und Gateway', 'Quell-MAC und Eingangsport', 'TCP-Port und DNS-Name'], 1, 'Die Quell-MAC wird dem Port zugeordnet, an dem der Frame ankam.'),
      choice('lan-2', lan, 'Was tut ein Switch laut T04, wenn die Ziel-MAC noch unbekannt ist?', ['Er verwirft immer den Frame.', 'Er sendet den Frame an alle anderen Ports.', 'Er sendet ausschließlich an den Router.'], 1, 'Die unbekannte Ziel-MAC führt zunächst zu Flooding.'),
      choice('lan-3', lan, 'Wie beschreibt T04 einen Stern mit Hub?', ['Physikalisch Stern, logisch Bus', 'Physikalisch Ring, logisch Stern', 'Physikalisch Bus, logisch Ring'], 0, 'Der Hub verbindet sternförmig, verteilt aber an alle Teilnehmer.'),
    ]),
  topic(ip, 'IPv4-Adressen und Adressbereiche', 3,
    '32 Bit, Oktette, private Netze und der Blick auf IPv6.',
    [
      p('T05 stellt IPv4 als 32-Bit-Adresse aus vier Oktetten dar. Eine Netzmaske trennt Netz- und Hostanteil; erst diese Kombination bestimmt, zu welchem Netz ein Gerät gehört.'),
      ...goals('IPv4 zwischen binärer und dezimaler Schreibweise umrechnen.', 'Private und besondere Bereiche erkennen.', 'Den Unterschied zur 128-Bit-Adresse von IPv6 nennen.'),
      h('Vier Oktette zu je acht Bit'),
      ex('Binär nach dezimal', '00001010.10010111.00101100.01100100 entspricht 10.151.44.100. Pro Oktett werden die gesetzten Stellenwerte 128, 64, 32, 16, 8, 4, 2 und 1 addiert (A01).'),
      table(['Bereich aus T05', 'Bedeutung'], [
        ['10.0.0.0/8', 'Privat'],
        ['172.16.0.0/12', 'Privat: 172.16 bis 172.31'],
        ['192.168.0.0/16', 'Privat'],
        ['127.0.0.0/8', 'Loopback / eigener Host'],
        ['169.254.0.0/16', 'Link-local / APIPA'],
        ['224.0.0.0 bis 239.255.255.255', 'Multicast-Bereich'],
      ]),
      note('Die historischen Klassen A, B und C zeigt T05 als Einteilung des Adressraums. Für die konkrete Netzgröße zählen heute Präfix und Netzmaske; die Routingaufgaben A09/A10 verlangen ausdrücklich noch klassisches Classful-Denken.'),
      h('IPv6 im Quellmaterial'),
      p('T05 nennt für IPv6 128 Bit bzw. 16 Byte und eine hexadezimale Schreibweise in acht Gruppen zu je 16 Bit, getrennt durch Doppelpunkte. Ein Beispiel für die volle Schreibweise ist FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF.'),
      { type: 'key-points', items: ['IPv4: 32 Bit = vier Oktette.', 'Eine IP-Adresse allein legt die Netzgrenze nicht fest; die Maske gehört dazu.', 'IPv6 verwendet 128 Bit und hexadezimale Gruppen.'] },
    ],
    [
      calc('a01-a', ip, 'A01: Wandle 00001010.10010111.00101100.01100100 in dezimales IPv4 um.', '10.151.44.100', 'Die Oktette ergeben 10, 151, 44 und 100.'),
      calc('a01-b', ip, 'A01: Wandle 192.168.13.114 in 8-Bit-Oktette um.', '11000000.10101000.00001101.01110010', '192 = 128+64; 168 = 128+32+8; 13 = 8+4+1; 114 = 64+32+16+2.'),
      choice('ip-private', ip, 'Welche Adresse liegt in einem privaten Bereich aus T05?', ['169.254.4.8', '172.20.4.8', '224.1.4.8'], 1, '172.20 liegt zwischen 172.16 und 172.31.'),
    ]),
  topic(cidr, 'Netzmaske, CIDR und Netzgrenzen', 4,
    'Netzadresse, Broadcast und Hostzahl sicher bestimmen.',
    [
      p('Die Übungsblätter A01–A03 liefern binäre Adressen und Präfixe. Die Netzmaske hat von links zusammenhängende Einsen; /n zählt diese Netzbits. Der Rest sind Hostbits.'),
      ...goals('Präfix und Netzmaske umrechnen.', 'Netz- und Broadcast-Adresse berechnen.', 'Die nutzbare Hostzahl in den Aufgaben bestimmen.'),
      h('Rechenweg'),
      list('Hostbits = 32 − Präfixlänge.', 'Adressen pro Subnetz = 2 hoch Hostbits.', 'Bei den hier behandelten üblichen Subnetzen sind 2 Adressen reserviert: Netz- und Broadcast-Adresse.', 'Netzadresse: Hostbits auf 0 setzen. Broadcast: Hostbits auf 1 setzen.'),
      ex('A01: 172.31.78.98/28', 'Maske 255.255.255.240; vier Hostbits; 16 Adressen, 14 nutzbare Hosts. Der letzte Oktettblock beginnt bei 96 und endet bei 111: Netz 172.31.78.96, Broadcast 172.31.78.111.'),
      ex('A02: 44.91.108.98/26', 'Maske 255.255.255.192; sechs Hostbits; Blockgröße 64. Der Host liegt im Block 64–127: Netz 44.91.108.64, Broadcast 44.91.108.127, 62 nutzbare Hosts.'),
      ex('A03: 155.17.118.114/21', 'Maske 255.255.248.0; elf Hostbits; drittes Oktett in Achterblöcken. 118 liegt im Block 112–119: Netz 155.17.112.0, Broadcast 155.17.119.255, 2046 nutzbare Hosts.'),
      { type: 'exam-tip', text: 'Bei einer CIDR-Aufgabe zuerst die Blockgröße des betroffenen Oktetts bestimmen. Danach Netz- und Broadcast-Grenze prüfen, bevor Hostzahlen abgelesen werden.' },
    ],
    [
      calc('a01-mask', cidr, 'A01: Die Maske 11111111.11111111.11111111.11110000 hat welche dezimale Form?', '255.255.255.240', 'Das letzte Oktett 11110000 ist 240.'),
      calc('a01-broadcast', cidr, 'A01: Welche dezimale Broadcast-Adresse hat 172.31.78.98/28?', '172.31.78.111', 'Der /28-Block 96–111 endet bei 111.'),
      calc('a02-network', cidr, 'A02: Welche Netzadresse hat 44.91.108.98/26?', '44.91.108.64', 'Ein /26 umfasst 64 Adressen; 98 liegt im Block 64–127.'),
      calc('a02-broadcast', cidr, 'A02: Welche Broadcast-Adresse hat 44.91.108.98/26?', '44.91.108.127', 'Der Block 64–127 endet bei 127.'),
      calc('a03-mask', cidr, 'A03: Welche dezimale Maske gehört zu 155.17.118.114/21?', '255.255.248.0', '21 Netzbits: 16 vollständige Bits und 11111000 im dritten Oktett.'),
      calc('a03-network', cidr, 'A03: Welche Netzadresse gehört zu 155.17.118.114/21?', '155.17.112.0', 'Die /21-Blöcke im dritten Oktett haben Schrittweite 8; 118 liegt bei 112–119.'),
      calc('a03-hosts', cidr, 'A03: Wie viele nutzbare Hostadressen hat ein /21-Subnetz?', '2046', '2^11 = 2048 Adressen, abzüglich Netz- und Broadcast-Adresse.'),
    ]),
  topic(subnet, 'Subnetting planen und anwenden', 5,
    'Gleich große Teilnetze mit den Zahlen aus A04 und A05.',
    [
      p('Subnetting teilt ein vorhandenes Netz in kleinere, gleich große Bereiche. Die Aufgaben A04 und A05 verlangen jeweils eine fortlaufende Nummerierung der Subnetze und Hosts.'),
      ...goals('Ein Präfix aus der geforderten Anzahl Teilnetze ableiten.', 'Subnetznummer, Hostposition und Gateway berechnen.', 'Nutzbare Adressen von zusätzlich benötigten Geräten abziehen.'),
      h('A04: Sigma-Training'),
      ex('130.88.0.0/16 → /21', 'Der PC 130.88.49.10 nutzt 255.255.248.0 (/21). Es werden 5 Bits für Teilnetze verwendet: 32 gleich große Subnetze. Jedes /21 hat 2046 nutzbare Hosts. 49 liegt im dritten Oktett im Block 48–55: Netz 130.88.48.0, Broadcast 130.88.55.255. Bei Zählung ab 1 ist das das 7. Subnetz; 130.88.49.10 ist der 266. nutzbare Host. Gateway laut Aufgabenregel: 130.88.48.1.'),
      h('A05: Ziegelwolf'),
      ex('202.234.79.0/24 → fünf Abteilungen', 'Mindestens fünf gleiche Subnetze erfordern 3 zusätzliche Netzbits, also /27 bzw. 255.255.255.224. Acht Subnetze zu je 32 Adressen entstehen. Pro Abteilung bleiben 30 nutzbare Hostadressen; nach Netzwerkdrucker und eigenem Gateway-Rechner höchstens 28 Mitarbeiter-PCs.'),
      p('Die Adresse 202.234.79.87 liegt im dritten /27-Subnetz 202.234.79.64–95. Sie ist der 23. nutzbare Host; Broadcast ist 202.234.79.95 und das Gateway nach Aufgabenregel 202.234.79.65.'),
      { type: 'key-points', items: ['Für fünf Teilnetze reichen zwei neue Netzbits nicht (2² = 4); drei ergeben acht.', 'Nutzbare Hosts und Mitarbeiterzahl sind verschieden, wenn Drucker und Gateway eigene Adressen belegen.', 'Bei fortlaufender Zählung ab 1 ist der erste Host Netzadresse + 1.'] },
    ],
    [
      calc('a04-subnets', subnet, 'A04: 130.88.0.0/16 wird in /21-Subnetze aufgeteilt. Wie viele gleich große Subnetze entstehen?', '32', '21 − 16 = 5 zusätzliche Netzbits; 2^5 = 32.'),
      calc('a04-gateway', subnet, 'A04: Der PC 130.88.49.10/21 nutzt die niedrigste zulässige Adresse als Gateway. Wie lautet sie?', '130.88.48.1', '49 liegt im /21-Block 48–55; erste Hostadresse ist 130.88.48.1.'),
      calc('a04-host', subnet, 'A04: Der wievielte nutzbare Host ist 130.88.49.10/21 im eigenen Subnetz (ab 1 gezählt)?', '266', 'Ein volles viertes Oktett ab 130.88.48.0 sind 256 Adressen; plus 10 ergibt Hostposition 266.'),
      calc('a05-mask', subnet, 'A05: Welches CIDR-Präfix ergibt für 202.234.79.0/24 mindestens fünf gleich große, möglichst große Subnetze?', '/27', 'Drei neue Netzbits ergeben acht Subnetze.'),
      calc('a05-staff', subnet, 'A05: Wie viele Mitarbeiter-PCs passen höchstens in ein /27-Subnetz, wenn ein Drucker und ein separater Gateway-Rechner Adressen benötigen?', '28', '30 nutzbare Hosts minus 2 Geräte = 28.'),
      calc('a05-gateway', subnet, 'A05: 202.234.79.87/27 liegt in welchem Subnetz? Gib dessen niedrigste nutzbare Gateway-Adresse an.', '202.234.79.65', '87 liegt im Block 64–95; erste Hostadresse ist .65.'),
    ]),
  topic(routing, 'WAN und statisches Routing', 6,
    'Router, Next Hop, Default Route und Routingtabellen.',
    [
      p('Ein WAN verbindet Netze über größere Entfernungen. T06 zeigt Router mit je einer Adresse pro angeschlossenem Netz und Routingtabellen zur Weiterleitung zwischen diesen Netzen.'),
      ...goals('Direkt angeschlossene und entfernte Ziele unterscheiden.', 'Zielnetz, Maske, Next Hop, Schnittstelle und Default Route lesen.', 'Den Weg einer Zieladresse durch mehrere Router erklären.'),
      { type: 'diagram', src: '/images/netzwerktechnik/routing-drei-router.png', alt: 'Drei Router verbinden 192.168.1.0, 10.0.0.0 und 172.16.0.0 mit einem externen Anschluss', caption: 'T06, Seite 2: Router 1, 2 und 3 verbinden mehrere IP-Netze.' },
      h('Routingtabelle lesen'),
      table(['Feld', 'Bedeutung'], [
        ['Zielnetz + Maske', 'Für welche Zieladressen gilt der Eintrag?'],
        ['Gateway / Next Hop', 'An welchen benachbarten Router wird weitergeleitet?'],
        ['Schnittstelle', 'Über welchen lokalen Ausgang verlässt das Paket den Router?'],
        ['Metrik', 'Kostenwert zur Auswahl zwischen passenden Wegen'],
        ['0.0.0.0/0', 'Default Route für Ziele ohne spezielleren Eintrag'],
      ]),
      ex('T06: 192.168.1.222', 'Router 2 findet 192.168.1.0/24 und sendet über eth0 an Router 1 (10.0.0.250). Router 1 erreicht das Zielnetz direkt. Für die Übertragung im jeweiligen LAN wird die MAC des nächsten Empfängers ermittelt.'),
      ex('T06: externes Ziel 66.249.93.104', 'Router 2 verwendet seine Default Route zu 172.16.0.1 über eth1. Router 3 leitet über seine Default Route an 195.5.3.1 weiter.'),
      note('A09 und A10 verwenden denselben Vier-Router-Plan, fragen aber nach den Tabellen für Router 2 bzw. Router 4. A11 und A12 enthalten weitere Prüfungsszenarien; sie sind als offene Transferaufgaben vertreten, da keine Musterlösung beiliegt.'),
      { type: 'exam-tip', text: 'Bei statischen Routen muss der Next Hop aus Sicht des betrachteten Routers direkt erreichbar sein. Für unbekannte externe Ziele gilt 0.0.0.0/0.' },
    ],
    [
      choice('route-1', routing, 'Welchen Next Hop nutzt Router 2 in T06 für 192.168.1.222?', ['10.0.0.250', '172.16.0.1', '195.5.3.1'], 0, 'Die Route zum Netz 192.168.1.0/24 führt zu Router 1.'),
      choice('route-2', routing, 'Welcher Eintrag deckt ein unbekanntes externes Ziel ab?', ['192.168.1.0/24', '0.0.0.0/0', '127.0.0.0/8'], 1, '0.0.0.0/0 ist die Default Route.'),
      open('a09', routing, 'A09: Erstelle auf Basis des Vier-Router-Plans eine statische Tabelle für Router 2. Direkt: 192.168.0.2 (eth1), 172.30.0.1 (eth2), 192.168.2.1 (eth3). Router 1 ist 192.168.0.1 und Router 3 ist 192.168.2.2. Erreiche zusätzlich 172.16.0.0/16, 172.25.0.0/16, 10.0.0.0/8, 192.168.1.0/24 und externe Ziele. Welche Next Hops und Ausgänge wählst du?', 'Prüfe jede Route gegen den direkt erreichbaren Nachbarrouter. Externe Ziele gehen über Router 1. Für gleich mögliche Wege kann mehr als eine konsistente Tabelle bestehen.'),
      open('a10', routing, 'A10: Im selben Vier-Router-Plan hat Router 4 die Interfaces 172.16.0.1 (eth2) und 192.168.1.2 (eth1). Erstelle seine statischen Routen zu 10.0.0.0/8, 172.25.0.0/16, 172.30.0.0/16, 192.168.0.0/24, 192.168.2.0/24 und ins Internet.', 'Router 1 ist über 192.168.1.1 und Router 3 über 172.25.0.1 nicht direkt erreichbar; beachte die tatsächliche Topologie und die direkt angeschlossenen Links.'),
      open('a11', routing, 'A11: RB1 besitzt 10.10.10.0/28 direkt, einen Link 10.1.1.0/30 nach Hamburg, 10.2.2.0/30 nach München und 203.0.113.12/30 zum Internet. Im Plan liegt Berlin-LAN bei 172.16.32.0/19 und Berlin-DMZ bei 10.10.10.0/28. Prüfe die angegebene Route 172.16.64.0/22 via 10.2.2.2 und erkläre den Fehler.', 'Vergleiche Zielnetz und Präfix mit dem Plan. Der gedruckte Eintrag passt weder zum Berliner LAN 172.16.32.0/19 noch zur direkt angeschlossenen DMZ. Die Quelle enthält keine Musterlösung für die vollständige Fehlerfrage.'),
      open('a12', routing, 'A12: Plane am Router Erfurt statische Routen mit minimalen Hops zu Köln 172.16.64.0/19, Köln-DMZ 203.0.113.8/29, Hamburg 172.16.96.0/22, Berlin 172.16.100.0/23 und ins Internet. Direkt: Erfurt 172.16.102.0/24; Links zu Köln 10.10.10.40/30 und Berlin 10.10.10.52/30. Der Link Hamburg–Berlin ist noch nicht verfügbar.', 'Leite Next Hops aus dem Netzplan ab; direkt angeschlossene Netze müssen nicht neu eingetragen werden. Eine vollständige Musterlösung ist in A12 nicht enthalten.'),
    ]),
  topic(tcp, 'TCP: Verbindungsaufbau, Datenfluss und Abbau', 7,
    'Sequenznummern, Quittungen und Sliding Window aus T07.',
    [
      p('TCP gehört in T07 zur OSI-Transportschicht 4. Es baut eine Verbindung auf, nummeriert Datenbytes und bestätigt empfangene Bereiche mit Acknowledgment-Nummern. T03 stellt TCP dem verbindungslosen UDP gegenüber.'),
      ...goals('Den Drei-Wege-Handshake mit SYN und ACK erklären.', 'Sequenz- und Quittungsnummern im Quellenbeispiel berechnen.', 'Sliding Window und Verbindungsabbau beschreiben.'),
      h('Drei-Wege-Handshake'),
      table(['Schritt aus T07', 'Seq', 'Ack', 'Bedeutung'], [
        ['Client: SYN', '10000', '0', 'Verbindung anfragen'],
        ['Server: SYN + ACK', '5000', '10001', 'SYN belegen je eine Sequenznummer'],
        ['Client: ACK', '10001', '5001', 'Server-SYN bestätigen'],
      ]),
      h('Daten und kumulative Bestätigung'),
      ex('T07: 30 Bytes', 'Sendet der Client ab Seq 10001 genau 30 Datenbytes, bestätigt der Server mit Ack 10031. Sendet der Server anschließend 200 Bytes ab Seq 5001, bestätigt der Client mit Ack 5201.'),
      p('Im Sliding-Window-Beispiel meldet der Empfänger Window 800. Der Sender darf innerhalb dieses freien Empfangsfensters Daten senden, ohne jedes Segment einzeln abzuwarten. Zwei Segmente zu je 400 Bytes ab Seq 5401 und 5801 werden gemeinsam mit Ack 6201 bestätigt.'),
      h('Verbindungsabbau'),
      p('FIN verbraucht wie SYN eine Sequenznummer. Im Material folgt auf FIN ab Seq 10091 ein Ack 10092; auf FIN ab Seq 6201 folgt Ack 6202. Ein reines ACK ohne Daten und ohne weiteres Signal verbraucht keine neue Sequenznummer.'),
      { type: 'key-points', items: ['Ack bezeichnet das nächste erwartete Byte.', 'SYN und FIN zählen jeweils als eine Sequenznummer; ein reines ACK nicht.', 'Das Fenster begrenzt die Menge unbestätigter Daten.'] },
    ],
    [
      choice('tcp-1', tcp, 'Welche TCP-Nachricht folgt im T07-Handshake auf SYN mit Seq 10000?', ['SYN + ACK mit Ack 10001', 'FIN mit Ack 10000', 'ACK mit Ack 5000'], 0, 'SYN belegt eine Sequenznummer.'),
      calc('tcp-2', tcp, 'T07: Ein Segment ab Seq 10001 enthält 30 Datenbytes. Welche Ack-Nummer bestätigt es vollständig?', '10031', '10001 + 30 = 10031.'),
      calc('tcp-3', tcp, 'T07: Zwei Segmente ab Seq 5401 mit je 400 Bytes werden kumulativ bestätigt. Wie lautet Ack?', '6201', '5401 + 400 + 400 = 6201.'),
      choice('tcp-4', tcp, 'Was verbraucht beim TCP-Abbau eine Sequenznummer?', ['Ein reines ACK', 'FIN', 'Weder FIN noch ACK'], 1, 'FIN zählt eine Sequenznummer; ein reines ACK ohne Daten zählt null.'),
    ]),
]
