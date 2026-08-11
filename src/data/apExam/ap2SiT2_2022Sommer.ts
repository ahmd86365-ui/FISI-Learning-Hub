import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2022SommerMeta: ApExamMeta = {
  id: 'ap2-si-t2-2022-sommer',
  area: 'AP2_SI_T2',
  year: 2022,
  period: 'Sommer',
  label: 'Sommer 2022',
  examDate: 'Mittwoch, 4. Mai 2022',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_22s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T2_22s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie sind Mitarbeiter/-in des 1234-IT-Systemhauses, welches für Mittelstand und Großkunden arbeitet. Aktuell sind Sie in der Betreuung der Capitol-Versicherung eingesetzt, ein bundesweit tätiges Unternehmen, das sich aktuell verstärkt mit dem Thema „Homeoffice" beschäftigt.\n\nEs liegen folgende Aufträge vor:\n– Konzeptionierung und Planung der Anbindung der Homeoffice-Arbeitsplätze\n– Einrichtung bzw. Erneuerung des WLANs an den Standorten\n– Absicherung des Internet-Datenverkehrs\n– Netzanbindung und E-Mail-Sicherheit'

const NETWORK_DIAGRAM =
  'Netzwerk-Übersichtsplan (herausgetrenntes Konzeptpapier-Blatt, Seite 3 des Aufgabensatzes):\n\nDrei Homeoffice-Standorte sind jeweils über eine Anschlussleitung und eine VPN-Verbindung durch das Internet mit der Firmenzentrale verbunden:\n– „Home Office Herr Meier" — Anbindung über VDSL\n– „Home Office Frau Schmitt" — Anbindung über TV-Kabel\n– „Home Office Herr Pfeiffer" — Anbindung über LTE\n\nAlle drei Homeoffice-Anschlüsse führen als VPN-Verbindung durch die Wolke „Internet". Die „Firmenzentrale und Rechenzentrum Capitol-Versicherung" ist über eine LWL-Standleitung mit dem Internet verbunden. Der Internet-Anschluss der Zentrale läuft über eine Firewall, die dem zentralen Switch der Firmenzentrale vorgeschaltet ist.\n\nAn den zentralen Switch der Firmenzentrale sind folgende Server angeschlossen: Reverse-Proxy, Druck-Server, AD-Server, Datenbank-Server, Mail-Server, Web-Server.'

export const ap2SiT2_2022SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (30 Punkte) — Homeoffice-Anbindung / Subnetting / VPN
  {
    id: 'ap2-si-t2-2022-sommer-q1-aa',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Subnetting (IPv4)',
    scenario: SCENARIO,
    referenceText:
      'Auszufüllende Tabelle (jedes Feld ist leer und muss berechnet werden):\nNetz-ID: ______\nErste mögliche Host-IP: ______\nLetzte mögliche Host-IP: ______\nBroadcast: ______\nSubnetzmaske (dezimal): ______',
    question:
      '1. Aufgabe (30 Punkte)\n\nSie sind aktuell in der Netzwerkabteilung des 1234-IT-Systemhauses eingesetzt. Ihr Kunde, die Capitol-Versicherung, plant, verschiedene Arbeitsplätze ins Homeoffice auszulagern. Sie sollen dabei beratend zur Seite stehen.\n\na) Durch die wachsende Anzahl an Homeoffice-Mitarbeitern benötigt die Capitol-Versicherung eine schnelle Anbindung der Zentrale an das Internet. Es wird daher von einem Provider eine Glasfaser-Anbindung (LWL-Standleitung) mit mehreren öffentlich erreichbaren IP-Adressen bereitgestellt.\n\naa) Für die Anbindung der Zentrale stellt der Provider der Versicherung ein öffentliches IPv4-Netzwerk zur Verfügung. Aus diesem Netz verwendet die Versicherung die IP-Adresse 203.0.113.180/27 für den ausgehenden Traffic.\n\nGeben Sie zu diesem Netz die folgenden Informationen an:',
    maxPoints: 5,
    modelSolution:
      'Netz-ID: 203.0.113.160\nErste mögliche Host-IP: 203.0.113.161\nLetzte mögliche Host-IP: 203.0.113.190\nBroadcast: 203.0.113.191\nSubnetzmaske (dezimal): 255.255.255.224\n\nDie Werte ergeben sich aus der Kombination der gegebenen IP-Adresse mit der Subnetzmaske 255.255.255.224 (203.0.113.180/27).',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-ab',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Subnetting (IPv6)',
    scenario: SCENARIO,
    question:
      'ab) Zusätzlich erhält die Capitol-Versicherung vom Provider ein IPv6-Präfix: 2001:db8:ca::/56\nDie Capitol-Versicherung möchte diesen Bereich für verschiedene Subnetze aufteilen.\n\nBerechnen Sie nachvollziehbar, wie viele Subnetze die Versicherung mit diesem Netzwerk maximal erstellen kann, wenn sie sich an alle Vorgaben hält, sodass in den Subnetzen weiterhin eine automatisierte Vergabe der Adressen nach SLAAC möglich ist. Geben Sie die Netz-ID für das erste und das letzte dieser Subnetze in gekürzter Schreibweise an.',
    maxPoints: 4,
    modelSolution:
      'Für das Subnetting steht der Bereich ab dem 56. Bit zur Verfügung. Die letzten 64 Bit dürfen nicht verwendet werden (SLAAC benötigt ein /64-Präfix je Subnetz). 64 Bit – 56 Bit = 8 Bit\n\nMit 8 Bit lassen sich 28 Subnetze (also 256) bilden:\n\nErstes Netz: 2001:db8:ca::/64\nHost-Adress-Range: 2001:db8:ca:: - 2001:db8:ca::\nLetztes Netz: 2001:db8:ca:ff::/64\nHost-Adress-Range: 2001:db8:ca:ff:: - 2001:db8:ca:ff::\n\nDie Host-Adress-Range muss nicht angegeben werden und dient nur zur weiterführenden Erklärung.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-ba',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'IPv4/IPv6-Adresstypen',
    scenario: SCENARIO,
    referenceText:
      NETWORK_DIAGRAM +
      '\n\nb) Auf Seiten der Homeoffice-Mitarbeiter stehen verschiedene Internet-Anbindungen zur Verfügung:\n\nHerr Meier nutzt einen DSL-Anschluss und erhält von seinem Provider die folgenden IP-Adressen:\n142.250.186.130 / 30 und 2003:ee:271a:b400:: / 56\n\nFrau Schmitt nutzt einen Kabelanschluss (DOCSIS) und erhält von ihrem Provider die folgenden IP-Adressen:\n172.30.160.253 / 30 und 2002:2abe:4d21:f1:: / 64\n\nHerr Pfeiffer nutzt einen LTE-Router und erhält von seinem Provider die folgenden IP-Adressen:\n10.16.130.129 / 30 und 2001:3aa:2c2:ea00:: / 56\n\nAuszufüllende Tabelle mit Spalten „Öffentliche IPv4-Adresse", „Private IPv4-Adresse", „Global Unicast IPv6-Adresse", „Link-Local IPv6-Adresse" und Zeilen „Herr Meier", „Frau Schmitt", „Herr Pfeiffer" (alle Felder leer zum Ankreuzen).',
    question: 'ba) Kreuzen Sie an, um welche Art von IP-Adresse es sich jeweils handelt:',
    maxPoints: 3,
    modelSolution:
      'Tabelle (Ankreuzungen):\nHerr Meier: Öffentliche IPv4-Adresse (X), Global Unicast IPv6-Adresse (X)\nFrau Schmitt: Private IPv4-Adresse (X), Global Unicast IPv6-Adresse (X)\nHerr Pfeiffer: Private IPv4-Adresse (X), Global Unicast IPv6-Adresse (X)\n\nWeiterführende Erklärung:\n\nAdressbereiche privater IP-Adressen:\n– Klasse A: 10.0.0.0 – 10.255.255.255\n– Klasse B: 172.16.0.0 – 172.31.255.255\n– Klasse C: 192.168.0.0 – 192.168.255.255\n\nGlobal-Unicast-Adressen sind weltweit einmalige Adressen, die weltweit geroutet werden. Sie werden vom Netzwerkgerät benötigt, um eine Internetverbindung aufzubauen.\n\nLink-Local-Adressen sind immer nur innerhalb von lokalen Netzwerken gültig und beginnen mit dem Formatpräfix FE80::/10',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-bb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'IPv4/IPv6-Anbindungsart',
    scenario: SCENARIO,
    referenceText:
      'Herr Meier nutzt einen DSL-Anschluss und erhält von seinem Provider die folgenden IP-Adressen:\n142.250.186.130 / 30 und 2003:ee:271a:b400:: / 56\n\nFrau Schmitt nutzt einen Kabelanschluss (DOCSIS) und erhält von ihrem Provider die folgenden IP-Adressen:\n172.30.160.253 / 30 und 2002:2abe:4d21:f1:: / 64\n\nHerr Pfeiffer nutzt einen LTE-Router und erhält von seinem Provider die folgenden IP-Adressen:\n10.16.130.129 / 30 und 2001:3aa:2c2:ea00:: / 56\n\nAuszufüllende Tabelle mit Spalten „IPv4 only", „IPv6 only", „Dual Stack" und Zeilen „Herr Meier", „Frau Schmitt", „Herr Pfeiffer" (alle Felder leer zum Ankreuzen).',
    question: 'bb) Kreuzen Sie an, um welche Art von Internet-Anbindung es sich jeweils handelt:',
    maxPoints: 3,
    modelSolution:
      'Tabelle (Ankreuzungen):\nHerr Meier: Dual Stack (X)\nFrau Schmitt: Dual Stack (X)\nHerr Pfeiffer: Dual Stack (X)\n\nAlle Mitarbeiter haben sowohl eine IPv4- als auch eine IPv6-Adresse zugewiesen bekommen.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-bc',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'bc',
    topic: 'Übertragungsmedien',
    scenario: SCENARIO,
    referenceText:
      NETWORK_DIAGRAM +
      '\n\nHerr Meier nutzt einen DSL-Anschluss, Frau Schmitt einen Kabelanschluss (DOCSIS), Herr Pfeiffer einen LTE-Router (siehe Angaben zu Aufgabe b).\n\nAuszufüllende Tabelle mit Spalten „Herr Meier", „Frau Schmitt", „Herr Pfeiffer" und Zeilen „Mobilfunk", „Telefonkabel", „Koaxialkabel" (alle Felder leer zum Ankreuzen).',
    question:
      'bc) Kreuzen Sie das jeweils verwendete Übertragungsmedium für die sogenannte „Letzte Meile" an.',
    maxPoints: 3,
    modelSolution:
      'Tabelle (Ankreuzungen):\nMobilfunk: Herr Pfeiffer X (LTE-Router)\nTelefonkabel: Herr Meier X (Kabelanschluss DOCSIS)\nKoaxialkabel: Frau Schmitt X (DSL-Anschluss)\n\n(So im Original der Lösungshinweise angegeben.)',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-ca',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'ca',
    topic: 'VPN',
    scenario: SCENARIO,
    question:
      'c) Den Mitarbeitern im Homeoffice wird ein Dienstlaptop zur Verfügung gestellt, der bei Verbindung mit einem Netzwerk automatisch ein VPN zur Firmenzentrale aufbaut.\n\nca) Nennen Sie den vollständigen Fachbegriff für „VPN" und erläutern Sie, was man darunter versteht.',
    maxPoints: 3,
    modelSolution:
      'VPN steht für Virtual Private Network.\n\nEs handelt sich hierbei um ein geschlossenes logisches Netzwerk, bei dem eine verschlüsselte Verbindung von Endgeräten bzw. Netzwerken zu anderen Endgeräten / Netzwerken hergestellt wird.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-cb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'cb',
    topic: 'VPN',
    scenario: SCENARIO,
    question:
      'cb) Die Capitol-Versicherung hat den Laptop so vorkonfiguriert, dass jegliche Kommunikation nur über das VPN stattfinden kann.\n\nNennen und erläutern Sie zwei Vorteile, die aus Sicht der Versicherung dafür sprechen, die Geräte mit solch einer Konfiguration an die Mitarbeiter zu verteilen.',
    maxPoints: 4,
    modelSolution:
      'Besonders für den sicheren Datenverkehr sensibler Unternehmensdaten wird häufig aufgrund der erhöhten Anforderungen an den Datenschutz sowie die Datensicherheit auf VPN-Verbindungen gesetzt. Das Risiko von Datenlecks wird so auf ein Minimum reduziert.\n\nFür den Verbindungsaufbau über das VPN wird häufig ein separater Benutzername sowie ein zugehöriges Passwort benötigt. So kann sichergestellt werden, dass nur berechtigte Mitarbeiter Zugriff auf die Daten der Versicherung haben.\n\nTraffic des Mitarbeiters, der für externe Netze bestimmt ist (z. B. für das Internet) kann so von der Versicherung überwacht und beispielsweise auf Schadsoftware gefiltert werden.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q1-cc',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 1,
    subPart: 'cc',
    topic: 'VPN / RFC 3021',
    scenario: SCENARIO,
    referenceText:
      'Fortsetzung 1. Aufgabe\n\ncc) Beim Aufbau eines jeden VPNs verwendet die Capitol-Versicherung den folgenden Adresspool:\n172.20.0.0/16\n\nFür jede VPN-Verbindung wird daraus ein eigenes Netz mit zwei gültigen IP-Adressen nach RFC 3021 (siehe Ausschnitt unten) entnommen.\n\nRFC 3021 (gekürzt):\n„Abstract\nWith ever-increasing pressure to conserve IP address space on the Internet, it makes sense to consider where relatively minor changes can be made to fielded practice to improve numbering efficiency. One such change, proposed by this document, is to halve the amount of address space assigned to point-to-point links (common throughout the Internet infrastructure) by allowing the use of 31-bit subnet masks in a very limited way.\n\n...\n\nIn current practice, numbered Internet subnets do not use longer than a 30-bit subnet mask (in most cases), which requires four addresses per link – two host addresses, one all-zeros network, and one all-ones broadcast. This is unfortunate for point-to-point links, since they can only possibly have two identifying endpoints and don\'t support the notion of broadcast – any packet which is transmitted by one end of a link is always received by the other.\n\n...“\n\nEs folgt ein leeres Rechenkästchen-Raster zur Nebenrechnung.',
    question:
      'Berechnen Sie nachvollziehbar, wie viele VPNs die Versicherung für ihre Mitarbeiter zur Verfügung stellen kann.',
    maxPoints: 5,
    modelSolution:
      'Rechnung:\n2^15 = 32.768 Netze mit jeweils 2 IP-Adressen\n\nErläuterung:\nLaut dem vorliegenden Ausschnitt zum RFC 3021 können Netze der Größe /31 genutzt werden, da im Netzwerk für eine Punkt-zu-Punkt Verbindung keine eigene IP-Adresse für die Netz-ID und die Broadcast-Adresse benötigt wird.\n\nUnter der Angabe 172.20.0.0/16 stehen somit 15 Bit für das Subnetting zur Verfügung (/31 - /16 = /15).',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },

  // 2. Aufgabe (28 Punkte) — WLAN-Planung, RADIUS/AAA, VLAN, Gast-WLAN
  {
    id: 'ap2-si-t2-2022-sommer-q2-aa',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'WLAN-Planung',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (28 Punkte)\n\nDie Capitol-Versicherung möchte ihren Mitarbeitern und Kunden durch die Installation eines WLAN in den Firmenräumen mehr Flexibilität und Mobilität anbieten, ohne dabei die Sicherheit zu gefährden.\n\na) Sie wurden beauftragt, im Team des 1234-IT-Systemhauses bei der Planung und Einrichtung des WLANs mitzuwirken.\n\naa) Die Planung der Anforderungen an die WLAN-Lösung erfolgt vor Ort im Gebäude der Capitol-Versicherung.\n\nNennen Sie drei technische Aspekte, die Sie bei der Planung des WLAN-Konzepts berücksichtigen sollten.',
    maxPoints: 3,
    modelSolution:
      '– Frequenzband der Access-Points\n– Anzahl und Verteilung der Access-Points\n– Site Survey vor Ort (Messung wichtiger Parameter, Festlegung und Dokumentation)\n– Verschlüsselungsstandard\n– Authentifizierungslösung\n– Unternehmensanbindung\n– Sonstige Sicherheitsaspekte (z. B. Gastzugang)\n– …',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-ab',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'RADIUS / AAA',
    scenario: SCENARIO,
    question:
      'ab) Der WLAN-Controller bietet als Möglichkeit der Authentifizierung „PSK" oder „RADIUS (AAA)" an.\n\nErläutern Sie, wofür die drei A in der Abkürzung ausgeschrieben stehen und erläutern Sie diese drei Komponenten.',
    maxPoints: 6,
    modelSolution:
      'Bei RADIUS handelt es sich um ein sogenanntes Triple-A-System. Hierbei kommen verschiedene Komponenten zum Einsatz.\n\nAuthentication / Authentifizierung: Die User-Credentials werden überprüft und abgeglichen.\nAuthorization / Autorisierung: Die individuelle User-Berechtigung wird festgelegt und angewandt.\nAccounting / Protokollierung: Alle Aktivitäten des Users werden protokolliert und eine Log-Datei wird geschrieben.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-ac',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'ac',
    topic: 'RADIUS / AAA',
    scenario: SCENARIO,
    question: 'ac) Beschreiben Sie zwei Vorteile von RADIUS AAA gegenüber PSK.',
    maxPoints: 4,
    modelSolution:
      'RADIUS bietet den Vorteil, dass individuelle Zugangskennungen und -parameter für jeden User vergeben werden können. Diese Informationen lassen sich dank des Services zentral verwalten.\n\nAuf einen zentralen Zugangsschlüssel bzw. ein allgemeingültiges Passwort wird verzichtet. Der Zugang zum Netzwerk wird somit weitestgehend eingeschränkt. Durch den personalisierten Zugang wird die Sicherheit im Netzwerk erhöht.\n\nDie Capitol-Versicherung kann User vorübergehend sperren, dauerhaft deaktivieren oder Löschen bei Beendigung der Betriebszugehörigkeit.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-ad',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'ad',
    topic: 'Gast-WLAN',
    scenario: SCENARIO,
    referenceText:
      'Auszufüllende Tabelle „technische Voraussetzung / Erklärung/Begründung" mit vorgegebenen Zeilen (Erklärung/Begründung-Spalte jeweils leer):\n– eigene SSID\n– eigener IP-Adressbereich\n– Captive-Portal (Voucher)',
    question:
      'Fortsetzung 2. Aufgabe\n\nad) Den Kunden im Haus sollen über das WLAN nützliche Informationen zu Versicherungen und Dienstleistungen der Capitol-Versicherung sowie ein Internetzugang in Form eines Gast-WLANs zur Verfügung gestellt werden.\n\nBegründen Sie, weshalb die genannten technischen Voraussetzungen für den sicheren Betrieb eines Gast-WLANs sinnvoll sind. Ergänzen Sie hierzu die nachfolgende Tabelle.',
    maxPoints: 6,
    modelSolution:
      'eigene SSID — Erklärung/Begründung: Das Gast-WLAN ist durch einen eigenen Namen eindeutig identifizierbar und von anderen Netzwerken zu unterscheiden (SSID = Service Set Identifier).\n\neigener IP-Adressbereich — Erklärung/Begründung: Durch die logische Trennung des Netzwerkes mithilfe eines eigenen IP-Adressbereiches wird die Verwaltung erleichtert und alle IP-Pakete werden getrennt geroutet.\n\nCaptive-Portal (Voucher) — Erklärung/Begründung: Durch die vorgeschaltete Seite muss zunächst den Bedingungen des Netzwerkes zugestimmt werden. Der anschließende Traffic ist eindeutig einzelnen Nutzern zuzuordnen.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-ba',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'VLAN',
    scenario: SCENARIO,
    question:
      'b) Sie sollen für die Sicherheit im Netzwerk sorgen.\n\nba) Die Netzwerkstruktur der Capitol-Versicherung arbeitet auf der Basis von VLANs.\n\nBeschreiben Sie zwei Vorteile, die für den Einsatz von VLANs sprechen.',
    maxPoints: 4,
    modelSolution:
      'Es werden Beschreibungen zu möglichen Vorteilen eines VLANs erwartet, z. B. zu:\n– Verkleinerung der Broadcast-Domäne\n– Verbesserte und erleichterte Konfiguration der logischen Gruppen im Netzwerk\n– Unabhängigkeit von physikalischer Topologie\n– Eindeutige Trennung des Traffics eines VLANs zu anderen VLANs\n\nWeitere Vorteile sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-bb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'VLAN / Trunk',
    scenario: SCENARIO,
    question:
      'bb) Für zusätzliche IT-Systeme der Capitol-Versicherung muss für die 2. Etage ein weiterer Etagen-Switch konfiguriert werden. Die Switchports der Endgeräte sind jeweils einem von drei verschiedenen VLANs zugeordnet. Die Verbindung zwischen Etagen-Switch und Core-Switch soll über einen Uplink erfolgen.\n\nWelche Einstellung muss an den Switchports vorgenommen werden, die den Etagen-Switch mit dem Core-Switch verbinden, damit die Netzwerkkommunikation für alle VLANs über diese Verbindung laufen kann?',
    maxPoints: 2,
    modelSolution: 'Beide Switchports müssen auf VLAN-Tagging gesetzt werden (z. B. 802.1q).',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q2-bc',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 2,
    subPart: 'bc',
    topic: 'Port-Security',
    scenario: SCENARIO,
    question:
      'bc) Die Geschäftsführung der Capitol-Versicherung möchte als zusätzliche Sicherheitsmaßnahme verhindern, dass an den Netzwerkdosen unternehmensfremde Endgeräte betrieben werden können.\n\nBeschreiben Sie eine technische Möglichkeit, mit der dies umgesetzt werden kann.',
    maxPoints: 3,
    modelSolution:
      '– Einloggen nur für Geräte erlauben, die im RADIUS-Server in der Gerätedatenbank (z. B. anhand der MAC-Adresse) freigeschaltet und konfiguriert wurden.\n– Einloggen nur für authentifizierte Nutzer nach IEEE 802.1X bzw. RADIUS, sodass nur zugelassene Endgeräte eine Verbindung aufbauen dürfen (z. B. Cisco Identity Service Engine).\n– Konfigurieren der Port-Security: Hierdurch kann die Anzahl der MAC-Adressen, welche pro Switchport gespeichert werden dürfen, eingeschränkt werden. Beim Erreichen des Limits erfolgt eine Deaktivierung des Ports.\n\nWeitere Lösungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },

  // 3. Aufgabe (20 Punkte) — HTTPS-Scanning, Zertifikate, Reverse-Proxy, DMZ
  {
    id: 'ap2-si-t2-2022-sommer-q3-a',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'a',
    topic: 'HTTPS-Proxy / SSL-Interception',
    scenario: SCENARIO,
    question:
      '3. Aufgabe (20 Punkte)\n\nSie sind aktuell in der Abteilung für IT-Sicherheit des 1234-IT-Systemhauses eingesetzt. Ihr Kunde, die Capitol-Versicherung, plant, den ein- und ausgehenden Internetverkehr auf Schadsoftware zu scannen und den unerwünschten Abfluss von Daten zu vermeiden. Sie sollen dabei beratend zur Seite stehen.\n\nDie Capitol-Versicherung setzt bereits einen HTTP Proxyserver zur Filterung von Webseiten ein.\n\nMomentan wird nur der HTTP-Internetverkehr überwacht. Zukünftig sollen auch Verbindungen überwacht werden, die HTTPS nutzen.\n\na) In den Einstellungen des Proxyservers finden Sie folgende alternative Optionen unter dem Punkt „HTTPS-Scaneinstellungen":\n\n– Nur URL-Filterung\n– Entschlüsseln und scannen\n\nErläutern und begründen Sie, welche der beiden Optionen nach den Vorgaben der Capitol-Versicherung aktiviert werden sollte.',
    maxPoints: 3,
    modelSolution:
      'Es muss sich für die Option „Entschlüsseln und scannen" entschieden werden. Hierdurch wird der Datenverkehr inhaltlich überprüft. Bei der Option „Nur URL-Filterung" könnte keine Überprüfung der Inhalte auf Schadsoftware erfolgen. Es handelt sich hierbei lediglich um einen Abgleich der Ziel-URLs mit einer Black- bzw. Whitelist.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q3-ba',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'TLS-Zertifikatsfehler',
    scenario: SCENARIO,
    referenceText:
      'Nach Aktivierung neuer Optionen in der Firewall erhalten die Benutzer der Capitol-Versicherung bei Aufruf der URL https://www.ihk.de folgende Fehlermeldung im Browser (Screenshot):\n\n„Ihre Verbindung ist nicht privat."\n„Angreifer versuchen möglicherweise Ihre Informationen von ihk.de zu stehlen (z. B. Kennwörter, Nachrichten oder Kreditkarten)."\nNET::ERR_CERT_AUTHORITY_INVALID\n[Buttons: „Erweitert ausblenden" / „Zurück"]\n„Dieser Server konnte nicht nachweisen, dass es sich bei ihm um ihk.de handelt. Das Sicherheitszertifikat wird vom Betriebssystem Ihres Computers nicht als vertrauenswürdig eingestuft. Dies kann auf eine fehlerhafte Konfiguration zurückzuführen sein oder auf einen Angreifer, der Ihre Verbindung abfängt."\n„Weiter zu ihk.de (unsicher)"',
    question:
      'b) Nach Aktivierung neuer Optionen in der Firewall erhalten die Benutzer der Capitol-Versicherung bei Aufruf der URL https://www.ihk.de folgende Fehlermeldung: [siehe Screenshot]\n\nba) Erläutern Sie, weshalb diese Fehlermeldung erscheint.',
    maxPoints: 4,
    modelSolution:
      'Der Fehler „NET::ERR_CERT_AUTHORITY_INVALID" entsteht, da der Proxyserver den Datenverkehr zwischen der Capitol-Versicherung und „https://www.ihk.de" entschlüsselt, scannt und anschließend wieder mit einem selbstausgestellten Zertifikat verschlüsselt (siehe Aufgabe a). Abschließend erfolgt die Weiterleitung des Traffics an den Client.\n\nDas verwendete Zertifikat für die erneute Verschlüsslung ist dem Client nicht bekannt bzw. wurde beim Client nicht als vertrauenswürdig hinterlegt. Der Client stuft die Verbindung daher als nicht privat bzw. nicht sicher ein.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q3-bb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'TLS-Zertifikatsfehler',
    scenario: SCENARIO,
    question:
      'Fortsetzung 3. Aufgabe\n\nbb) Beschreiben Sie, wie sich diese Fehlermeldung zukünftig vermeiden lässt, wenn die Webseite im Browser aufgerufen wird.',
    maxPoints: 2,
    modelSolution:
      'Das Root-Zertifikat des Proxyservers sollte auf dem Client in die Liste der vertrauenswürdigen Stammzertifizierungsstellen aufgenommen werden. Dies kann entweder manuell oder durch eine Gruppenrichtlinie erfolgen.\n\nAlternativ könnte das Root-Zertifikat des Proxyservers durch eine bereits vertrauenswürdige Stammzertifizierungsstelle des Clients signiert werden oder der Benutzer fügt eine dauerhafte Ausnahme für diese explizite Seite hinzu.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q3-ca',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'ca',
    topic: 'Reverse-Proxy',
    scenario: SCENARIO,
    question:
      'c) Der Proxyserver der Capitol-Versicherung soll als Reverse-Proxy Server eingesetzt werden.\n\nca) Beschreiben Sie anhand von zwei Funktionen, weshalb der Reverse-Proxyserver für eingehende Anfragen aus dem Internet an den WEB-Server eingesetzt werden sollte.',
    maxPoints: 4,
    modelSolution:
      'Ein Reverse-Proxy ist eine zusätzliche Sicherheitskomponente. Anfragen aus dem Internet werden stellvertretend entgegengenommen und anschließend an einen Web-Server im Hintergrund weitergeleitet.\n\nFunktionen eines Reverse-Proxyservers:\n\nSchutz und Verschlüsselung: Reverse-Proxyserver können Kontrollsysteme wie Virenscanner oder Paketfilter beinhalten. Außerdem können Reverse-Proxyserver zur Verschlüsselung des weitergeleiteten Traffics verwendet werden.\n\nAnonymisierung: Der Zugang zum internen Netzwerk kann nur über den Reverse-Proxy aufgebaut werden. Dieser leitet alle Anfragen an die eigentlichen Zielsysteme weiter und agiert nach außen hin so, als ob eine direkte Verbindung mit dem Zielsystem aufgebaut wird.\n\nCaching: Durch den Reverse-Proxy können Serverantworten zwischengespeichert werden. Statische Inhalte wie Bilder oder häufig aufgerufene dynamische Webseiten werden somit im Cache-Speicher des Proxys vorgehalten und bei eventuellen Anfragen schneller an die Clients verteilt. Die Geschwindigkeit der Serverdienste wird hierdurch beschleunigt.\n\nLoadbalancing: Eine einzige URL kann durch einen Reverse-Proxy an mehrere Server im Netzwerk gekoppelt werden. Da ohnehin alle Anfragen über den Reverse-Proxy geleitet werden, kann hier ein Loadbalancing auf die verschiedenen hinterlegten Server erfolgen. Bei einzelnen Ausfällen kann so die Verfügbarkeit der URL weiterhin sichergestellt werden.\n\nKompression: Eingehende und ausgehende Daten werden durch entsprechende Komprimierungsmethoden (wie z. B. GZIP) komprimiert und die Dateigrößen werden verringert. Hierdurch wird Speicherplatz gespart und die Datenübertragung im Netzwerk wird zusätzlich beschleunigt.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q3-cb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'cb',
    topic: 'DMZ',
    scenario: SCENARIO,
    question:
      'cb) Um die Netzwerksicherheit zu erhöhen, soll eine DMZ eingerichtet werden.\n\nErläutern Sie die Funktionsweise einer DMZ.',
    maxPoints: 3,
    modelSolution:
      'Bei einem DMZ (demilitarisierte Zone) handelt es sich um einen speziell kontrollierten Netzwerkbereich, der zwischen dem internen und dem externen Netzwerk liegt. Die DMZ stellt eine Pufferzone dar, die Netze voneinander abtrennt und durch erweiterte Firewall- sowie Kommunikationsregeln schützt. Dienste, die von außen erreichbar sein müssen, liegen meistens in der DMZ.\n\nDie DMZ verhindert durch Ihre Pufferfunktion des Weiteren den direkten Durchgriff auf das interne Netzwerk.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q3-cc',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 3,
    subPart: 'cc',
    topic: 'DMZ',
    scenario: SCENARIO,
    referenceText: NETWORK_DIAGRAM,
    question:
      'cc) Wählen Sie aus dem aktuellen Netzwerkplan der Capitol-Versicherung je einen Server aus,\n– der in die geplante DMZ verschoben werden muss.\n– der im internen Netzwerk verbleiben sollte.\n\nBegründen Sie jeweils Ihre Entscheidung.',
    maxPoints: 4,
    modelSolution:
      'Server, die in die geplante DMZ verschoben werden sollten, sind:\n– Mailserver\n– Webserver\n– Reverse-Proxy\nBegründung: Diese Dienste müssen sowohl aus dem Internet als auch von innen erreicht werden können. Es ist daher sicherer, wenn diese in die DMZ verschoben werden und somit vom internen Netzwerk abgetrennt werden.\n\nServer, die im internen Netzwerk verbleiben sollten, sind:\n– Datenbankserver\n– Active-Directory-Server\n– Druckserver\n– Applikationsserver\nBegründung: Die genannten Dienste müssen nicht von außen erreichbar sein. Sie können daher im internen Netz verbleiben.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },

  // 4. Aufgabe (22 Punkte) — WAN-Bandbreite, Spamfilter, Sandbox
  {
    id: 'ap2-si-t2-2022-sommer-q4-aa',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'ADSL / Bandbreite',
    scenario: SCENARIO,
    question:
      '4. Aufgabe (22 Punkte)\n\nIn der Abteilung für IT-Sicherheit des 1234-IT-Systemhauses sind Sie für die WAN-Anbindungen der Capitol-Versicherung und der Mitarbeiter zuständig.\n\na) Einigen Angestellten steht im Homeoffice lediglich eine 16 Mbit/s ADSL-Anbindung zur Verfügung.\n\naa) Bei Videokonferenzen kommt es zeitweise zu schlechter Bildqualität und Störungen in der Sprachqualität.\n\nBeschreiben Sie eine mögliche Ursache.',
    maxPoints: 4,
    modelSolution:
      'Das „A" innerhalb von ADSL steht für asymmetric. Hierdurch wird spezifiziert, dass die Bandbreite zwischen Up- und Download unterschiedlich ist. In der Regel steht hierdurch viel mehr Bandbreite für den Download als für den Upload zur Verfügung.\n\nEs ist davon auszugehen, dass bei einer 16 Mbit/s ADSL-Anbindung zwar 16 Mbit/s für den Download, aber nur ca. 1 – 2,4 Mbit/s für den Upload, zur Verfügung stehen.\n\nDie Bandbreite reicht daher – insbesondere, wenn noch weiterer Datenverkehr in Richtung Internet geht – nicht für eine gute Bild- und/oder Tonqualität aus.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q4-ab',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'Übertragungsdauer-Berechnung',
    scenario: SCENARIO,
    question:
      'ab) Die Capitol-Versicherung versorgt ihre Mitarbeiter über einen internen Software-Verteilungs-Server mit Updates.\n\nErmitteln Sie unter Angabe des Rechenweges, wie lange die Übertragung des nächsten Software-Updates von 1.634 MiB zu einem Mitarbeiter-PC im Homeoffice (16 Mbit/s ADSL) mindestens dauert. Das Ergebnis ist in Minuten anzugeben.\n(Die Upload-Rate bei der Capitol-Versicherung sowie Protokoll-Overhead muss nicht berücksichtigt werden.)',
    maxPoints: 4,
    modelSolution:
      '1.634 MiB in Bit:\n1.634 MiB * 8 Bit = 13.072 MiBit\n13.072 MiBit * 1.024 * 1.024 = 13.706.985.472 Bit\n\n13.706.985.472 Bit / 16.000.000 Bit/s = 856,6865 Sekunden\n856,6865 Sekunden / 60 = 14,28 Minuten\n(14 Minuten und 17 Sekunden)',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q4-ba',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'Spamfilter',
    scenario: SCENARIO,
    referenceText:
      'Auszufüllende Tabelle „Nr: / Filterregel" mit zwei vorgegebenen Zeilen und drei leeren Zeilen zum Ergänzen:\n1: Mehr als 50 Empfänger der Mail bei unbekanntem Absender\n2: Absender ist auf der Black-List für unerwünschte Mails\n3: (leer)\n4: (leer)\n5: (leer)',
    question:
      'b) Die Capitol-Versicherung betreibt eine Firewall-Appliance mit Virenscanner.\n\nba) In der Firewall-Appliance ist ein Mail-Filter integriert, der Spam auf einen separaten Quarantäne-Server ablegt.\n\nErgänzen Sie die Tabelle um drei weitere Kriterien für den Spamfilter.',
    maxPoints: 6,
    modelSolution:
      'Mögliche weitere Regeln für einen Spamfilter:\n– Absender steht auf der White-List\n– Unerwünschte Begriffe im Betreff (siehe Blacklist der Begriffe)\n– Im E-Mail-Text kommen unerwünschte Links vor (siehe Blacklist der Begriffe)\n– Absender-Domain und angezeigter Absender-Name stimmen nicht überein\n– Anhänge haben Datei-Formate, die unbekannt oder unerwünscht sind (z. B. ausführbare Dateien)\n\nWeitere Nennungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q4-bb',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'E-Mail / Datenschutz',
    scenario: SCENARIO,
    question:
      'Fortsetzung 4. Aufgabe\n\nbb) Der Inhalt von E-Mails unterliegt dem Briefgeheimnis.\n\nBeschreiben Sie, unter welcher Bedingung ein Spamfilter oder der Administrator einer Firma die Mails auf unerwünschten Inhalt untersuchen darf.',
    maxPoints: 4,
    modelSolution:
      'Die Mitarbeiter des Unternehmens sollten vorab nachweislich über die Kontrolle durch Spamfilter oder Administratoren informiert werden. Im besten Fall sollte die ausdrückliche Einwilligung eingeholt werden.\n\nAlternativ sollte privater E-Mail-Verkehr untersagt werden, da das Unternehmen bei rein geschäftlichen Inhalten den Mailverkehr ohnehin einsehen darf.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2022-sommer-q4-bc',
    examId: 'ap2-si-t2-2022-sommer',
    questionNumber: 4,
    subPart: 'bc',
    topic: 'Sandbox',
    scenario: SCENARIO,
    question:
      'bc) Die Firewall-Appliance hat für unbekannte Datei-Anhänge eine Sandbox.\n\nBeschreiben Sie die Funktion einer Sandbox beim Mail-Eingang.',
    maxPoints: 4,
    modelSolution:
      'Bei einer Sandbox handelt es sich um eine abgeschottete virtuelle Maschine mit verschiedensten Betriebssystem-Konfigurationen. Die Dateianhänge können in dieser Umgebung automatisiert auf unerwünschte Verhaltensmuster überprüft werden. Eine Kommunikation aus der Sandbox hinaus kann nicht stattfinden – die übrigen Systeme und Umgebungen sind somit von eventuellen Aktionen der Dateianhänge geschützt.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
]
