import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2021WinterMeta: ApExamMeta = {
  id: 'ap2-si-t2-2021-winter',
  area: 'AP2_SI_T2',
  year: 2021,
  period: 'Winter',
  label: 'Winter 2021/22',
  examDate: 'Mittwoch, 24. November 2021',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_21w.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T2_21w.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie sind Mitarbeiter/-in bei der Professional-Services GmbH, die IT-Lösungen für mittelständische Unternehmen anbietet. Die überregionale Bäckereikette vollKorn GmbH erteilt den Auftrag, die netzwerktechnische Anbindung neuer Filialen an die Zentrale in Köln zu realisieren.\n\nIn diesem Zusammenhang sollen Sie die folgenden vier Aufgaben bearbeiten:\n1. Aufgabe: Netzwerk erweitern\n2. Aufgabe: WLAN einrichten\n3. Aufgabe: Netzwerkverkehr absichern\n4. Aufgabe: Netzwerk-Monitoring einführen'

const NETZWERKPLAN =
  'Netzwerkplan (auf herstrennbarem Anlagenblatt): Vier Standorte sind über Router und Standleitungen (WAN-Punkt-zu-Punkt-Verbindungen, alle als 10.10.10.x /30 adressiert) miteinander verbunden.\n\nStandorte/LANs:\n– Hamburg: 172.16.96.0/22\n– Berlin: 172.16.100.0/23\n– Köln (Zentrale): 172.16.64.0/19; zusätzlich eine DMZ 203.0.113.8/29 (per Switch angebunden, darin zwei Server mit den Adressen 203.0.113.10 und 203.0.113.11) sowie ein Internet-Uplink\n– Erfurt (neuer Standort, Gegenstand der 1. Aufgabe): 172.16.102.0/24\n\nRouter-Schnittstellen und Standleitungen (je Punkt-zu-Punkt-Verbindung ein /30-Netz):\n– Router Hamburg eth0 10.10.10.22/30 ↔ Router Köln eth1 10.10.10.21/30 (Netz 10.10.10.20/30) — bestehende Leitung\n– Router Köln eth2 10.10.10.29/30 ↔ Router Berlin eth1 10.10.10.30/30 (Netz 10.10.10.28/30) — bestehende Leitung\n– Router Hamburg eth1 10.10.10.25/30 ↔ Router Berlin eth2 10.10.10.26/30 (Netz 10.10.10.24/30) — im Plan als „geplante Verbindung (Aufgabe 1e)" gekennzeichnet: diese Direktverbindung zwischen Hamburg und Berlin steht zu Beginn noch nicht zur Verfügung\n– Router Köln eth0 10.10.10.42/30 ↔ Router Erfurt eth0 10.10.10.41/30 (Netz 10.10.10.40/30) — Teil der „geplanten Erweiterung des Netzwerks (Aufgabe 1)"\n– Router Erfurt eth1 10.10.10.53/30 ↔ Router Berlin eth0 10.10.10.54/30 (Netz 10.10.10.52/30) — ebenfalls Teil der „geplanten Erweiterung des Netzwerks (Aufgabe 1)"\n\n(Die LAN-seitigen Router-Schnittstellen zu den jeweiligen Standort-Netzen sowie zur Köln-DMZ/zum Internet sind im Plan ohne eigene 10.10.10.x-Adresse eingezeichnet.)'

export const ap2SiT2_2021WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (30 Punkte) — Netzwerk erweitern
  {
    id: 'ap2-si-t2-2021-winter-q1-a',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 1,
    subPart: 'a',
    topic: 'Subnetting',
    scenario: SCENARIO,
    referenceText:
      NETZWERKPLAN +
      '\n\nTabelle „Bereich / Anzahl Hosts / Netzadresse / Subnetzmaske (dezimal)" (auszufüllen):\nAbteilung 1 — Anzahl Hosts 80\nAbteilung 2 — Anzahl Hosts 50\nAbteilung 3 — Anzahl Hosts 20\nIT — Anzahl Hosts 10',
    question:
      '1. Aufgabe (30 Punkte)\n\nDem neuen Standort der vollKorn GmbH in Erfurt ist das Subnetz 172.16.102.0 /24 zugewiesen worden. Es ist über zwei Standleitungen mit der Zentrale in Köln sowie mit Berlin verbunden (siehe Netzwerkplan in der perforierten Anlage).\n\na) Ihre Aufgabe innerhalb der Professional-Services GmbH ist es, für den Standort Erfurt Subnetze für die drei Abteilungen und den administrativen Bereich (IT) zu bilden. Die Größe der Subnetze soll an die Anzahl der maximal benötigten Adressen im Hostbereich angepasst werden, sodass möglichst wenige Adressen verschwendet werden. Der freie Adressblock (falls vorhanden) muss am Ende des Netzwerks liegen.\n\nErgänzen Sie die folgende Tabelle.',
    maxPoints: 8,
    modelSolution:
      'Bereich / Anzahl Hosts / Netzadresse / Subnetzmaske (dezimal):\nAbteilung 1 (80 Hosts): Netzadresse 172.16.102.0, Subnetzmaske 255.255.255.128 (/25)\nAbteilung 2 (50 Hosts): Netzadresse 172.16.102.128, Subnetzmaske 255.255.255.192 (/26)\nAbteilung 3 (20 Hosts): Netzadresse 172.16.102.192, Subnetzmaske 255.255.255.224 (/27)\nIT (10 Hosts): Netzadresse 172.16.102.224, Subnetzmaske 255.255.255.240 (/28)',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2021-winter-q1-b',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 1,
    subPart: 'b',
    topic: 'Statisches Routing',
    scenario: SCENARIO,
    referenceText:
      NETZWERKPLAN +
      '\n\nRouter-Tabelle Erfurt (auszufüllen), Spalten: Netzwerk / Subnetzmaske (dezimal) / Schnittstelle / Next-Hop — fünf leere Zeilen vorgegeben.',
    question:
      'b) Richten Sie auf dem Router Erfurt die statischen Routen zu den Netzen in Köln, Köln DMZ, Hamburg und Berlin mit minimalen Hops ein. Netzwerkverkehr zum Internet soll ebenfalls möglich sein. Die IPv4-Adressen und Router-Schnittstellen sind dem Netzplan zu entnehmen.\nBeachten Sie, dass die direkte Verbindung zwischen Hamburg und Berlin aktuell noch nicht zur Verfügung steht.\n\nErgänzen Sie die folgende Router-Tabelle um die statischen Routing-Einträge. (Direkt angeschlossene Netze müssen nicht ergänzt werden.)',
    maxPoints: 6,
    modelSolution:
      'Router-Tabelle Erfurt:\nNetzwerk 172.16.64.0, Subnetzmaske 255.255.224.0, Schnittstelle eth0, Next-Hop 10.10.10.42\nNetzwerk 203.0.113.8, Subnetzmaske 255.255.255.248, Schnittstelle eth0, Next-Hop 10.10.10.42\nNetzwerk 172.16.96.0, Subnetzmaske 255.255.252.0, Schnittstelle eth0, Next-Hop 10.10.10.42\nNetzwerk 172.16.100.0, Subnetzmaske 255.255.254.0, Schnittstelle eth1, Next-Hop 10.10.10.54\nNetzwerk 0.0.0.0, Subnetzmaske 0.0.0.0, Schnittstelle eth0, Next-Hop 10.10.10.42\n\nDie Routen nach Köln, Köln DMZ sowie Hamburg können vollständig durch die Default-Route (letzte Zeile) ersetzt werden und sind deshalb optional.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2021-winter-q1-c',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 1,
    subPart: 'c',
    topic: 'Firewall (SPI-Regeln)',
    scenario: SCENARIO,
    referenceText:
      'Tabelle „Richtung / Quell-IP / Ziel-IP / Quell-Port / Ziel-Port / Protokoll / Regel" für die äußere Firewall, teilweise vorgegeben (auszufüllen):\nZeile 1: Richtung — , Quell-IP any, Ziel-IP 203.0.113.10, Quell-Port any, Ziel-Port — , Protokoll — , Regel —\nZeile 2: Richtung eingehend, Quell-IP any, Ziel-IP 203.0.113.11, Quell-Port — , Ziel-Port — , Protokoll — , Regel accept\nZeile 3: Richtung eingehend, Quell-IP — , Ziel-IP — , Quell-Port any, Ziel-Port 993 (IMAP TLS), Protokoll — , Regel —\nZeile 4: Richtung — , Quell-IP — , Ziel-IP 203.0.113.11, Quell-Port — , Ziel-Port 465 (SMTP TLS), Protokoll — , Regel —\nZeile 5: Richtung — , Quell-IP any, Ziel-IP — , Quell-Port any, Ziel-Port 587 (SMTP STARTTLS), Protokoll TCP, Regel accept\nZeile 6: Richtung eingehend, Quell-IP — , Ziel-IP — , Quell-Port — , Ziel-Port — , Protokoll — , Regel drop',
    question:
      'c) Die vollKorn GmbH nutzt am Standort Köln in einer DMZ einen Webserver, welcher seinen Datenverkehr über TLS verschlüsselt, sowie einen E-Mail-Server, welcher eingehenden SMTP (unverschlüsselt und verschlüsselt) und IMAP (verschlüsselt) Traffic akzeptieren soll.\n\nErgänzen Sie die folgenden SPI-Firewall-Regeln für den eingehenden Netzwerkverkehr an der äußeren Firewall.',
    maxPoints: 6,
    modelSolution:
      'Vollständige Tabelle:\nZeile 1: eingehend, any, 203.0.113.10, any, 443, TCP, accept\nZeile 2: eingehend, any, 203.0.113.11, any, 25, TCP, accept\nZeile 3: eingehend, any, 203.0.113.11, any, 993 (IMAP TLS), TCP, accept\nZeile 4: eingehend, any, 203.0.113.11, any, 465 (SMTP TLS), TCP, accept\nZeile 5: eingehend, any, 203.0.113.11, any, 587 (SMTP STARTTLS), TCP, accept\nZeile 6: eingehend, any, any, any, any, any, drop',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2021-winter-q1-d',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 1,
    subPart: 'd',
    topic: 'Next Generation Firewall',
    scenario: SCENARIO,
    question:
      'd) Der Support der internen Firewall ist ausgelaufen, daher muss diese ersetzt werden. Es wird darüber nachgedacht, eine „Next Generation Firewall" anzuschaffen.\n\nErläutern Sie zwei Vorteile, die durch den Einsatz einer solchen Firewall im Vergleich zu einem klassischen Paket-Filter entstehen.',
    maxPoints: 4,
    modelSolution:
      'Durch die Next-Generation-Firewall sollen mehr Schichten des OSI-Modells berücksichtigt werden, hierdurch soll die Filterung von Netzwerkverkehr noch genauer vorgenommen werden können. Zu den zusätzlichen Funktionen zählen u. a.:\n– Intrusion Detection / Intrusion Prevention: Externe Angriffe sollen automatisch erkannt und abgewehrt werden (z. B. SYN Flood).\n– Geolocation-Features: Auf Basis von IP-Adressen können Lokationen identifiziert werden. Hierdurch kann der Zugriff länderbezogen eingeschränkt werden, nur relevante Länder können für die Kommunikation freigeschaltet werden.\n– Anti-Virus / Anti-SPAM-Filter Mail-Relay: Eingehende Daten können, basierend auf Signaturen, auf Malware oder Viren überprüft werden. Bekannte Schadsoftware oder SPAM-Merkmale können so gefiltert werden.\n– Verhaltensanalyse: Der Datenverkehr von Applikationen wird dauerhaft überwacht, um verdächtige Verhaltensweisen zu erkennen. Unerwartete Kommunikation an z. B. unbekannte Zieladressen kann erkannt und unterbunden werden.\n\n(Zwei der genannten Vorteile sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2021-winter-q1-e',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 1,
    subPart: 'e',
    topic: 'Statisches vs. dynamisches Routing',
    scenario: SCENARIO,
    question:
      'e) Zwischen den Standorten Hamburg und Berlin besteht nun eine Direktverbindung. Im Zuge der Inbetriebnahme dieser Verbindung wird geprüft, ob das interne Routing von „statisch" auf „dynamisch" umgestellt werden sollte.\n\nEntscheiden Sie sich für eines der beiden Routing-Verfahren und begründen Sie Ihre Entscheidung anhand von zwei Argumenten.',
    maxPoints: 6,
    modelSolution:
      'Bei Entscheidung für dynamisches Routing:\n– Der aktuelle Status des Netzwerkes und der Leitungen wird bei den Routing-Entscheidungen berücksichtigt\n– Alternative Routen werden automatisch berücksichtigt\n– Der Ausfall einzelner Routen führt nicht zu einem Totalausfall\n– Das Netzwerk ist dynamisch erweiterbar, z. B. bei neuen Standorten\n– Geringer Wartungsaufwand durch automatische Konfigurationen\n\nBei Entscheidung für statisches Routing:\n– Geringere Prozessorlast\n– Geringere Netzwerkbelastung, da Routinginformationen nicht regelmäßig übertragen werden müssen\n– Weniger Vorwissen für die Konfiguration der Routing-Protokolle erforderlich\n\n(Zwei Argumente für die gewählte Variante sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 2. Aufgabe (21 Punkte) — WLAN einrichten
  {
    id: 'ap2-si-t2-2021-winter-q2-a',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 2,
    subPart: 'a',
    topic: 'WLAN-Infrastruktur',
    scenario: SCENARIO,
    referenceText:
      'Tabelle (auszufüllen), Zeilen „Accesspoint" und „WLAN-Controller", Spalte für die jeweilige Aufgabe der Geräte.',
    question:
      '2. Aufgabe (21 Punkte)\n\nAm neuen Standort in Erfurt soll zukünftig auch WLAN für die Anbindung verschiedener interner Netzwerkgeräte sowie für einen Gastzugang für Besucher zur Verfügung gestellt werden. Eine professionelle Ausleuchtung der Räume hat ergeben, dass acht Accesspoints notwendig sind. Der vorhandene WLAN-Controller in Köln soll auch hierfür verwendet werden.\n\na) Erläutern Sie je eine Aufgabe der folgenden Geräte.',
    maxPoints: 4,
    modelSolution:
      'Accesspoint: Stellt den Übergang vom kabelgebundenen zum kabellosen Netzwerk her, indem die Funksignale/-wellen des WLAN ausgestrahlt werden.\n\nWLAN-Controller: Zentrale Steuerung, Überwachung und Konfiguration von mehreren Access Points.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2021-winter-q2-b',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 2,
    subPart: 'b',
    topic: 'WLAN-Sicherheit (WPA2)',
    scenario: SCENARIO,
    question:
      'b) Zur Verschlüsselung der Daten wird WPA2 eingesetzt, welches in den Varianten „WPA2-PSK" und „WPA2-Enterprise" eingesetzt werden kann.\n\nEntscheiden Sie sich für den Einsatz einer der beiden Varianten für die Mitarbeiter der Filiale Erfurt und begründen Sie Ihre Entscheidung.',
    maxPoints: 4,
    modelSolution:
      'Für Unternehmen ist WPA2-Enterprise zu bevorzugen. Bei WPA2-PSK werden sogenannte pre-shared-keys verwendet, diese gelten als weniger sicher. Bei WPA2-Enterprise kommen benutzerbezogene Zugangsdaten zum Einsatz. Sollte ein Mitarbeiter das Unternehmen verlassen, kann also gezielt dessen Zugang deaktiviert werden. Andernfalls müsste das Passwort an allen Geräten im WLAN geändert werden.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2021-winter-q2-c',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 2,
    subPart: 'c',
    topic: 'RADIUS / AAA',
    scenario: SCENARIO,
    question:
      'c) Neben den beiden oben genannten Geräten Accesspoint und WLAN-Controller wird für den Betrieb des WLANs ein RADIUS-Server eingesetzt. Dessen Aufgaben werden häufig mit der Abkürzung AAA oder Triple-A beschrieben.\n\nBenennen Sie diese Abkürzungen und erläutern Sie ihre Aufgabe und Funktion in einer WLAN-Infrastruktur.',
    maxPoints: 3,
    modelSolution:
      'Ein RADIUS-Server übernimmt die Aufgaben der Authentifizierung, Autorisierung und des Accountings.\n\nAuthentifizierung: Es wird festgestellt, wer der anfragende Benutzer ist (Username/Passwort).\nAutorisierung: Dem erkannten Benutzer werden Rechte zugeteilt, er erhält somit Zugriff auf das Netzwerk.\nAccounting: Die Nutzungsdauer sowie das aufgekommene Datenvolumen wird benutzerbezogen erfasst.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2021-winter-q2-d',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 2,
    subPart: 'd',
    topic: 'WLAN-Gastzugang',
    scenario: SCENARIO,
    question:
      'd) Für Gäste soll ein eigenes WLAN zur Verfügung gestellt werden. Der Zugriff darauf soll über ein WLAN-Ticketsystem (Voucher) mit Zugangsportal geregelt werden.\n\nErläutern Sie, was man darunter versteht und nennen Sie zwei Vorteile, die ein solches Ticketsystem für den Gastgeber bietet.',
    maxPoints: 4,
    modelSolution:
      'Die Gäste erhalten ein Ticket bzw. einen entsprechenden Zettel mit Zugangsdaten. Diese Daten sind nur für einen begrenzten Zeitraum gültig. Die Zugangsdaten sind auf einer Webseite einzugeben, nachdem eine Verbindung mit dem WLAN hergestellt wurde. Anschließend können die WLAN-Funktionalitäten genutzt werden.\n\nHierdurch entstehen folgende Vorteile:\n– Die Nutzungsdauer kann zeitlich begrenzt werden\n– Die Nutzung kann basierend auf dem Datenvolumen je Nutzer begrenzt werden\n– Durch die vorgeschaltete Webseite müssen zunächst Nutzungsbedingungen akzeptiert werden\n– Auf der vorgeschalteten Webseite können Informationen, Werbeaktionen oder Umfragen geschaltet werden\n– Je Ticket können unterschiedliche Freigaben auf unterschiedliche Dienste erteilt werden\n\n(Zwei Vorteile sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2021-winter-q2-e',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 2,
    subPart: 'e',
    topic: 'PoE / Switch-Auswahl',
    scenario: SCENARIO,
    referenceText:
      'Datenblatt-Auszug der Accesspoints:\nFrequenz: 2,4 GHz und 5 GHz\nWireless-Modus: 802.11 ac (4x4)\nMax. Durchsatz (theoretisch): 1.700 Mbit/s\nLeistungsaufnahme PoE+: 17,9 Watt\nSicherheit: WPA-3\nAnschluss: 1 x RJ45 1 / 2,5 Gbit/s, 1 x RJ45 1 Gbit/s (PoE+)\n\nVergleich dreier Switche:\nSwitch A: Anzahl Ports RJ45 8 x 1 Gbit/s, Anzahl Ports SFP+ 0, PoE+ 8 x, PoE-Leistungsbudget 250 Watt\nSwitch B: Anzahl Ports RJ45 8 x 2,5 Gbit/s, Anzahl Ports SFP+ 2, PoE+ 2 x, PoE-Leistungsbudget 60 Watt\nSwitch C: Anzahl Ports RJ45 24 x 1 Gbit/s, Anzahl Ports SFP+ 2, PoE+ 24 x, PoE-Leistungsbudget 180 Watt',
    question:
      'e) Die acht Accesspoints wurden bereits angeschafft und sollen über PoE betrieben werden. Ein Datenblatt-Auszug der Accesspoints sowie ein Vergleich dreier Switche liegt vor. Für den Betrieb der Accesspoints soll ein Switch beschafft werden. Der Switch soll an den Core Switch angeschlossen werden.\n\nPrüfen und begründen Sie, welche der genannten Switche für den Aufbau und Betrieb des WLANs NICHT in Frage kommen.',
    maxPoints: 6,
    modelSolution:
      'Folgende Switche kommen für den Betrieb und Aufbau des WLANs nicht in Frage:\n\nSwitch A: Es fehlt ein Port für einen SFP+ Transceiver, mithilfe dessen eine Uplink-Verbindung zu einem anderen Switch hergestellt werden kann. Die Analyse hat ja bereits ergeben, dass acht Accesspoints benötigt werden.\n\nSwitch B: Das PoE-Leistungsbudget von 60 Watt reicht nicht für acht Accesspoints mit jeweils 17,9 Watt aus. Über externe PoE-Injektoren könnte das PoE-Leistungsbudget erhöht werden, hierfür wäre aber zusätzliche Hardware notwendig.\n\nSwitch C kann gewählt werden.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },

  // 3. Aufgabe (21 Punkte) — Netzwerkverkehr absichern
  {
    id: 'ap2-si-t2-2021-winter-q3-a',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 3,
    subPart: 'a',
    topic: 'TLS-Zertifikate (X.509)',
    scenario: SCENARIO,
    question:
      '3. Aufgabe (21 Punkte)\n\nDie Zugriffe auf den Webserver der vollKorn GmbH erfolgen ausschließlich per https. Hierbei wird auf der Transportschicht TLS 1.3 verwendet. Sie werden gebeten, einige Sicherheitsaspekte dieser Verbindungsart (TLS) zu erläutern.\n\na) Zur Authentifizierung des Webzugangs werden Zertifikate nach X.509 verwendet.\n\nNennen Sie vier Inhalte, die ein solches Zertifikat enthält.',
    maxPoints: 4,
    modelSolution:
      '– Version\n– Inhabername\n– Ausstellername/-organisation (Certificate Authority)\n– Zertifizierungsstelleninformationen (Authority Info)\n– Gültigkeitsdauer (Beginn und Ende)\n– Verschlüsselungsverfahren\n– Signaturverfahren\n– Fingerabdrücke (SHA-256, SHA-1)\n– Schlüssellänge\n– Öffentlicher Key (encryption) des Zertifikatsinhabers\n– Zertifikatsregeln\n\n(Vier der genannten Inhalte sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2021-winter-q3-b',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 3,
    subPart: 'b',
    topic: 'TLS-Handshake',
    scenario: SCENARIO,
    referenceText:
      'Sequenzdiagramm „Client/Browser" (linke senkrechte Lebenslinie) und „Webserver" (rechte senkrechte Lebenslinie) mit acht leeren Kreisen, die mit Buchstaben zu befüllen sind. Von oben nach unten:\n1. Pfeil Client → Webserver (Kreis)\n2. Pfeil Webserver → Client (Kreis)\n3. Selbstaktion beim Client (kleines Rechteck mit Kreis daneben, links von der Lebenslinie)\n4. Selbstaktion beim Client (Rechteck mit Kreis)\n5. Selbstaktion beim Client (Rechteck mit Kreis)\n6. Pfeil Client → Webserver (Kreis)\n7. Selbstaktion beim Webserver (Rechteck mit Kreis, rechts von der Lebenslinie)\n8. Doppelpfeil Client ↔ Webserver (Kreis)\n\nZur Auswahl stehende Inhalte (Buchstaben):\nA – AES-verschlüsselte Datenübertragung\nB – Entschlüsseln des AES Session Keys\nC – Generieren eines AES Session Keys\nD – Übergabe des verschlüsselten AES Session Keys\nE – Übergabe des Zertifikates inklusive Public Encryption Key\nF – Überprüfung des Zertifikates mit Public Decryption Key der CA\nG – Verbindungsanfrage\nH – Verschlüsseln des AES Session Keys mit Public Encryption Key',
    question:
      'b) Ergänzen Sie folgendes Sequenzdiagramm, indem Sie die Buchstaben für die folgenden Inhalte an den entsprechenden Stellen in die Kreise eintragen.',
    maxPoints: 8,
    modelSolution:
      'Die acht Kreise sind von oben nach unten wie folgt zu befüllen:\n1. G – Verbindungsanfrage (Client → Webserver)\n2. E – Übergabe des Zertifikates inklusive Public Encryption Key (Webserver → Client)\n3. F – Überprüfung des Zertifikates mit Public Decryption Key der CA (Selbstaktion Client)\n4. C – Generieren eines AES Session Keys (Selbstaktion Client)\n5. H – Verschlüsseln des AES Session Keys mit Public Encryption Key (Selbstaktion Client)\n6. D – Übergabe des verschlüsselten AES Session Keys (Client → Webserver)\n7. B – Entschlüsseln des AES Session Keys (Selbstaktion Webserver)\n8. A – AES-verschlüsselte Datenübertragung (Client ↔ Webserver)',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2021-winter-q3-c',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 3,
    subPart: 'c',
    topic: 'Hybride Verschlüsselung',
    scenario: SCENARIO,
    question:
      'c) Bei TLS wird ein hybrides Verschlüsselungsverfahren eingesetzt.\n\nErläutern Sie den Vorteil eines solchen Verfahrens gegenüber einem nicht hybriden Verfahren.',
    maxPoints: 6,
    modelSolution:
      'Bei der hybriden Verschlüsselung geht es darum, die Vorteile der asymmetrischen und symmetrischen Verschlüsselung zu kombinieren. Der Schlüsselaustausch erfolgt durch asymmetrische Verfahren, während die eigentliche Verschlüsselung der Datenübertragung mit einem symmetrischen Verfahren durchgeführt wird.\n\nVorteile:\n– Erhöhte Sicherheit durch asymmetrischen Schlüsselaustausch\n– Sehr hohe Effizienz, da nur initial eine kleine Datenmenge asymmetrisch verschlüsselt werden muss',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2021-winter-q3-d',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 3,
    subPart: 'd',
    topic: 'TLS-Zertifikatsprüfung',
    scenario: SCENARIO,
    question:
      'd) Eine AES verschlüsselte Verbindung zwischen Client und Server nach TLS 1.3 wurde nun erfolgreich aufgebaut.\n\nWelche Information über das Server-Zertifikat besitzt der Client nach der Überprüfung mithilfe des entsprechenden Stamm-Zertifikats?',
    maxPoints: 3,
    modelSolution:
      'Die Gültigkeit des Zertifikates wurde geprüft und nachvollzogen. Das Server-Zertifikat lag in der übermittelten Form bei der certificate authority (CA) vor und wurde dort signiert.\n\nDie Qualität der Prüfung der Inhalte/Kontaktdaten durch die CA kann nicht nachvollzogen werden.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },

  // 4. Aufgabe (28 Punkte) — Netzwerk-Monitoring einführen
  {
    id: 'ap2-si-t2-2021-winter-q4-aa',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'SNMP',
    scenario: SCENARIO,
    referenceText:
      'Abgesetzter Befehl:\nC:\\snmpget -v 2c -c public 172.16.102.1 1.3.6.1.4.1.{HerstellerID}.{SensorID-Temp}\nAusgabe:\n1.3.6.1.4.1.{HerstellerID}.{SensorID-Temp} = Integer 38\n\nTabelle „Auszulesender Wert / Datentyp / Beispielhafter Rückgabewert", erste Zeile bereits vorgegeben:\nSystemtemperatur (SensorID-Temp) — Integer — 38 Grad Celsius\n(zwei weitere Zeilen sind vom Prüfling zu ergänzen)',
    question:
      '4. Aufgabe (28 Punkte)\n\nMithilfe eines Netzwerk-Monitorings soll der Betrieb des Netzwerkes optimiert werden.\n\na) Das Netzwerk-Monitoring basiert auf dem Simple Network Management Protokoll (SNMP).\n\naa) An einer Netzwerkkomponente soll die Systemtemperatur abgefragt werden. Sie setzen den gegebenen Befehl ab und erhalten die gegebene Ausgabe.\n\nErgänzen Sie die Tabelle um zwei weitere Werte, die sich per SNMP von Netzwerk-Geräten (z. B. Drucker, Server, Router, Serverschrank) auslesen lassen.',
    maxPoints: 6,
    modelSolution:
      'Auszulesender Wert / Datentyp / Beispielhafter Rückgabewert (Beispiele):\nSystem Load — Float — 37 % Last\nSystem online — Boolean — True/False\nFan Speed — Integer — 2.400 U/min\nPort x Link up — Boolean — True/False\nPort x Speed — Integer — 1 Gbit/sec\nPort x Full Duplex — Boolean — True/False\nPapierfach leer — Boolean — True/False\nToner leer — Boolean — True/False\nTintenstand — Float — 45 % Verfügbar\nStandortbezeichnung — String — Raum 459\n\nWeitere Lösungen möglich. (Zwei Werte sind für die volle Punktzahl ausreichend.)',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-ab',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'SNMP (GET-Request)',
    scenario: SCENARIO,
    question: 'ab) Beschreiben Sie den Nachteil eines Monitorings über eine get-Request (snmpget) Abfrage.',
    maxPoints: 3,
    modelSolution:
      'Ein GET-Request liefert nur einen einmaligen Rückgabewert zum Zeitpunkt der Abfrage. Statusänderungen oder Schwellwertüberschreitungen würden erst beim nächsten GET-Request erkannt werden.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-ac',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'ac',
    topic: 'SNMP (Trap / Inform)',
    scenario: SCENARIO,
    question: 'ac) Beschreiben Sie eine Möglichkeit, den Nachteil zu umgehen.',
    maxPoints: 3,
    modelSolution:
      'Um auch bei Schwellwertüberschreitungen zuverlässig informiert zu werden, ist ein Überwachungs-Agent auf dem zu überwachenden Gerät zu installieren. Dieser Agent würde bei einer Überschreitung eines Schwellwertes automatisch eine Nachricht (Trap) an das Monitoringsystem melden.\n\nDie gleiche Funktionalität könnte auch mittels eines INFORM-Requests erfüllt werden. Der Empfang des INFORM-Pakets muss allerdings vom Manager bestätigt werden. Sollten Nachrichten verloren gegangen sein, können diese hierdurch erneut verschickt werden.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-ba',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'ICMP / Ping',
    scenario: SCENARIO,
    referenceText:
      'Bildschirmausgabe:\nc:\\>ping www.ihk.de\nPing wird ausgeführt für www.ihk.de [141.88.222.152] mit 32 Bytes Daten:\nZeitüberschreitung der Anforderung.\nZeitüberschreitung der Anforderung.\nZeitüberschreitung der Anforderung.\nZeitüberschreitung der Anforderung.\nPing-Statistik für 141.88.222.152:\n  Pakete: Gesendet = 4, Empfangen = 0, Verloren = 4 (100% Verlust),\nDer Aufruf der Website im Browser funktioniert!',
    question:
      'b) Es erfolgt nun eine Überprüfung verschiedener Funktionen des Netzwerkes.\n\nba) Sie prüfen als Erstes die Verbindungen ins Internet mittels eines Ping auf die Website www.ihk.de (siehe Bildschirmausgabe). Der Aufruf der Website im Browser funktioniert dennoch.\n\nBeschreiben Sie eine Ursache, warum der Ping-Befehl dieses Ergebnis liefert.',
    maxPoints: 4,
    modelSolution:
      'Das Internet Control Message Protocol (ICMP), welches für Ping-Funktionalitäten zuständig ist, ist auf dem Zielsystem oder auf dem Netzwerkweg z. B. durch eine Firewall-Regel gesperrt.\n\nWeitere Lösungen möglich.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-bb',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'DNS (nslookup)',
    scenario: SCENARIO,
    referenceText:
      'Bildschirmausgabe (Zeilen nummeriert):\n(1) c:\\>nslookup www.google.de\n(2) Server:  router.local\n(3) Address:  fe80::1\n(4) Nicht autorisierende Antwort:\n(5) Name:  www.google.de\n(6) Addresses:  2a00:1450:4001:815::2003\n(7)            216.58.208.35\n\nTabelle „Zeile / Erklärung", Zeile 1 bereits vorgegeben: „Eingabe des Befehls „nslookup" zur Auflösung des Namens www.google.de" — Zeilen 2 bis 7 sind zu ergänzen.',
    question: 'bb) Sie überprüfen die Namensauflösung im Netzwerk (siehe Bildschirmausgabe). Erklären Sie stichwortartig die Zeilen 2 bis 7.',
    maxPoints: 6,
    modelSolution:
      'Zeile 2: Der antwortende DNS-Server wird ausgegeben: router.local.\nZeile 3: Die IP-Adresse des antwortenden DNS-Servers wird ausgegeben: fe80::1 (IPv6-Adresse).\nZeile 4: Es handelt sich beim antwortenden DNS-Server um keinen offiziellen Server, sondern um einen lokalen DNS-Server. Daher wird die Antwort als „nicht autorisierend" eingestuft.\nZeile 5: Die Antwort des DNS-Servers erfolgt: Name des abgefragten Servers: www.google.de.\nZeile 6: Antwort des DNS-Servers zu www.google.de: 2a00:1450:4001:815::2003 (IPv6-Adresse).\nZeile 7: Antwort des DNS-Servers zu www.google.de: 216.58.208.35 (IPv4-Adresse).',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-ca',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'ca',
    topic: 'Traceroute / TTL',
    scenario: SCENARIO,
    referenceText:
      'Zwei aufeinanderfolgende tracert-Läufe gegen www.google.de (C:\\>tracert www.google.de), im Abstand von einigen Minuten, mit je 13 bzw. 14 Hops. Beide Läufe zeigen mehrere Zeilen mit „*  *  *  Zeitüberschreitung der Anforderung." ohne angezeigte IP-Adresse (z. B. Zeile 2 und 7 im ersten Lauf; Zeile 2, 4, 7, 8 im zweiten Lauf), zwischen Zeilen mit erfolgreich aufgelösten Hop-Adressen (IPv6). Der erste Lauf endet nach 13 Hops beim Ziel [2a00:1450:4001:815::2003], der zweite nach 14 Hops beim Ziel [2a00:1450:4001:80b::2003] (abweichende Ziel-IPv6-Adresse gegenüber dem ersten Lauf).',
    question:
      'c) Sie überprüfen das Routing ins Internet mittels des Befehls „tracert" (traceroute) (siehe Bildschirmausgaben der zwei Läufe).\n\nca) Beschreiben Sie, warum folgende Zeile überhaupt ausgegeben wird, obwohl eine Zeitüberschreitung, aber keine IP-Adresse angezeigt wird.\nZeilennummer  *  *  *  Zeitüberschreitung der Anforderung.',
    maxPoints: 3,
    modelSolution:
      'Bei einer Routenverfolgung mit 30 Hops wird das TTL-Feld im IP-Paket auf 30 gesetzt. Jedes Netzwerkgerät, welches das IP-Paket bearbeitet, verringert das TTL-Feld um eins. Bei 30 Hops wäre die Routenverfolgung beendet und das TTL-Feld auf 0 gesetzt. Bei einem TTL von 0 würde das Datenpaket nicht mehr weitergeleitet, sondern verworfen werden.\n\nBei den angegebenen Meldungen ist davon auszugehen, dass das jeweilige Netzwerkgerät kein Trace / keine Antwort über ICMP unterstützt bzw. keine Daten zurückgibt.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2021-winter-q4-cb',
    examId: 'ap2-si-t2-2021-winter',
    questionNumber: 4,
    subPart: 'cb',
    topic: 'Traceroute / DNS-Lastverteilung',
    scenario: SCENARIO,
    question: 'cb) Beschreiben Sie eine Ursache, warum die zwei Ausgaben unterschiedlich viele Ausgabezeilen haben.',
    maxPoints: 3,
    modelSolution:
      'Das Routing im Internet ist sehr dynamisch, die Route kann sich deshalb laufend ändern und die Datenpakete können unterschiedliche Wege zum Zielserver nehmen.\n\nAußerdem ist in der Angabe ersichtlich, dass der Name „www.google.de" auf unterschiedliche IPv6-Adressen aufgelöst wurde. Es ist also davon auszugehen, dass eine Lastverteilung per DNS stattfindet, hierbei werden beim DNS mehrere IP-Adressen zu einem Eintrag zugewiesen. Anfragen werden also auf unterschiedliche Adressen für ein Ziel verteilt. Je nach mitgeteilter Adresse unterscheiden sich die Routen zum Zielsystem.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
]
