import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2023WinterMeta: ApExamMeta = {
  id: 'ap2-si-t2-2023-winter',
  area: 'AP2_SI_T2',
  year: 2023,
  period: 'Winter',
  label: 'Winter 2023/24',
  examDate: 'Mittwoch, 29. November 2023',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_23w.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T2_23w.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker bei der 1234-IT-Systemhaus GmbH. Für Ihren Arbeitgeber beraten Sie u. a. eine Spedition, die IHK-Transport GmbH. Die Spedition betreibt neben der Zentrale in Berlin noch Filialen in München und Hamburg. Den Netzwerkplan der Spedition finden Sie in der perforierten Anlage.\n\nAnlage 1: Netzwerkplan der IHK-Transport GmbH (Beschreibung):\n– Berlin LAN: 172.16.32.0/19, mit PCB1 (172.16.32.150) über Switch an Router RB2 (172.16.32.1) angebunden; RB2 ist über 10.10.10.14 mit der Berlin-DMZ verbunden.\n– Berlin DMZ: 10.10.10.0/28, enthält Datei-Server (10.10.10.2) und Web-Server (10.10.10.1), angebunden an Router RB1 über Eth0 (10.10.10.13).\n– Router RB1 (Berlin) hat zusätzlich: Eth 1 (10.1.1.1/30) zur Filiale Hamburg, Eth 2 (10.2.2.1/30) zur Filiale München, Eth 4 (203.0.113.13/30) zum Internet.\n– Filiale Hamburg: Netz 172.16.64.0/22, Router RH mit 172.16.64.1 (LAN) und 10.1.1.2/30 (WAN zu RB1).\n– Filiale München: Netz 192.168.100.0/24, Router RM mit 192.168.100.1 (LAN) und 10.2.2.2/30 (WAN zu RB1), enthält Datei-Server 192.168.100.20, WLAN-Access-Point sowie eine geplante Erweiterung um ein zweites Gebäude (Aufgabe 3).\n– Internet: Router RB1 (203.0.113.13/30) verbindet sich über die Cloud mit dem Server www.ihk.de (135.125.254.20); zusätzlich Mobilfunkanbindung für mobile Geräte/Admin im Home-Office.\n\nAnlage 2 (zur 3. Aufgabe): Wireshark-Mitschnitt eines Netzwerk-Traces zwischen 192.168.100.212 (Quelle mehrerer ICMP-Echo-Requests) und 192.168.100.20 (Ziel), inkl. Ethernet-/IP-/ICMP-Header sowie Hex-Dump; im Hex-Dump ist ein VLAN-Tag (VLAN ID (vlan.id), 2 Bytes) markiert, dessen Hexadezimalwert „00 0b" (dezimal 11) entspricht.'

export const ap2SiT2_2023WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (21 Punkte) — Statisches Routing, dynamisches Routing, WLAN-Sicherheit
  {
    id: 'ap2-si-t2-2023-winter-q1-aa',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Routing / Fehlersuche',
    scenario: SCENARIO,
    referenceText:
      'Auszug aus der Routingtabelle auf Router RB1:\nNetz-ID | Subnetzmaske/CIDR | Next-Hop/Interface\n10.10.10.0 | /28 | Eth 0\n10.1.1.0 | /30 | Eth 1\n10.2.2.0 | /30 | Eth 2\n172.16.64.0 | /22 | 10.2.2.2\n192.168.100.0 | /24 | 10.1.1.2\n203.0.113.12 | /30 | Eth 4\n0.0.0.0 | /0 | 203.0.113.14',
    question:
      '1. Aufgabe (21 Punkte)\n\nDie Filialen der Spedition IHK-Transport GmbH sind über statische Routen miteinander verbunden.\n\na) Auszug aus der Routingtabelle auf Router RB1 (siehe Referenz).\n\naa) Die Mitarbeiter der Filiale in Hamburg melden, dass ein Zugang zu den Servern in Berlin nicht möglich ist. Ein Administrator prüft daraufhin die Routingtabelle auf Router RB1.\n\nWelche zwei Fehler in der Routingtabelle sind dafür verantwortlich?\nErläutern Sie, wie das Problem behoben werden kann.',
    maxPoints: 4,
    modelSolution:
      'In der Routingtabelle des Routers wurde die falsche Next-Hop-Adresse zum Netz nach Hamburg eingetragen. Die Gateways zu den Netzen nach Hamburg und München sind vertauscht.\n\nRichtige Zuordnung:\nNetz-ID: 172.16.64.0 — Subnetzmaske/CIDR: /22 — Next-Hop/Interface: 10.1.1.2\nNetz-ID: 192.168.100.0 — Subnetzmaske/CIDR: /24 — Next-Hop/Interface: 10.2.2.2',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2023-winter-q1-ab',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Routing',
    scenario: SCENARIO,
    question:
      'ab) Beschreiben Sie zwei Vorteile, die dynamische Routingprotokolle gegenüber Netzwerkkonfigurationen mit statischem Routing bieten.',
    maxPoints: 6,
    modelSolution:
      'Vorteil 1: Der aktuelle Status des Netzwerkes und der Leitungen wird bei den dynamischen Routing-Entscheidungen berücksichtigt. Hierdurch wird im Vergleich zum statischen Routing der kürzeste, kostengünstigste, schnellste oder sicherste Weg präferiert.\n\nVorteil 2: Dynamisches Routing minimiert den Wartungsaufwand durch automatische Aktualisierungen der Routing-Tabellen, während statisches Routing manuelle Konfigurationen erfordert, die bei Netzwerkänderungen regelmäßig angepasst werden müssen.\n\nWeitere Vorteile für ein dynamisches Routing (u. a.):\n– Alternative Routen werden automatisch berücksichtigt\n– Der Ausfall einzelner Routen führt nicht zu einem Totalausfall\n– Das Netzwerk ist dynamisch erweiterbar, z. B. bei neuen Standorten',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2023-winter-q1-ac',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'ac',
    topic: 'Routing / Metrik',
    scenario: SCENARIO,
    question:
      'ac) In der Praxis enthält eine Routingtabelle (neben den oben abgedruckten, verkürzten Informationen) noch die sogenannte Metrik oder „Costs".\n\nErklären Sie die Funktion dieser Angaben für das Routing.',
    maxPoints: 4,
    modelSolution:
      'Durch den Routing-Algorithmus wird jeder Pfad durch das Netzwerk bewertet. Dabei ist ein Pfad umso besser, je geringer seine Metrik ist.\n\nDie Metriken bzw. Kosten werden basierend auf mehreren Faktoren wie z. B. der Anzahl der Hops, der Bandbreite oder der Latenz berechnet. Anhand des errechneten Wertes sucht der Router eine zu verwendende Route aus.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-winter-q1-ad',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'ad',
    topic: 'Zugriff aus dem Internet',
    scenario: SCENARIO,
    question:
      'ad) Die Server in der DMZ in Berlin sind aus dem öffentlichen Netz zunächst nicht erreichbar, da sie private Adressen nutzen.\n\nNennen Sie eine Möglichkeit, wie Sie den Zugriff auf die Server aus dem Internet ermöglichen können.',
    maxPoints: 2,
    modelSolution:
      'Möglichkeiten für einen Zugriff aus dem Internet (eine ist ausreichend), u. a.:\n– Port Forwarding\n– NAT/PAT (Destination-NAT)\n– DMZ-Host\n– VPN\n– Reverse Proxy\n\nWeiterführende Informationen:\nPort Forwarding: Leitet Anfragen, die an bestimmte Ports eines externen Routers gesendet werden, an interne Server weiter, um den direkten Zugriff auf diese Server zu ermöglichen.\nNAT/PAT (Destination-NAT): NAT übersetzt private IP-Adressen in öffentliche, während PAT (Port Address Translation) Ports zuweist, um Anfragen von außen an interne Netzwerkgeräte weiterzuleiten.\nDMZ-Host: Ein DMZ-Host befindet sich in einer Zwischenzone des Netzwerks und besitzt eine öffentliche IP-Adresse, um spezifischen Servern den Zugriff aus dem Internet zu ermöglichen.\nVPN: Ein VPN ermöglicht es, eine verschlüsselte und sichere Verbindung über das Internet herzustellen, um auf interne Ressourcen, einschließlich DMZ-Server, zuzugreifen.\nReverse Proxy: Ein Reverse Proxy empfängt externe Anfragen, leitet sie an interne Server weiter und schützt so die internen Systeme, indem er als Vermittler fungiert und den direkten Zugriff verhindert.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-winter-q1-ba',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'WLAN-Sicherheit',
    scenario: SCENARIO,
    referenceText:
      'b) Die meisten Mitarbeiter der Filiale in München möchten sich in Zukunft auch mit mobilen Endgeräten über WLAN im lokalen Netzwerk anmelden. Für das WLAN soll das Verfahren „WPA2/3-Enterprise" verwendet werden.',
    question: 'ba) Erläutern Sie das Verfahren „WPA2/3-Enterprise".',
    maxPoints: 3,
    modelSolution:
      'WPA2/3-Enterprise ist ein Sicherheitsprotokoll für WLANs, bei dem sich jedes Gerät individuell mit Benutzername und Passwort oder Zertifikat anmeldet. Es bietet eine erhöhte Sicherheit sowie Individualität durch persönliche Authentifizierung und Verschlüsselung für jedes Gerät im Netzwerk, typischerweise über einen RADIUS-Server.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-winter-q1-bb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'WLAN-Sicherheit',
    scenario: SCENARIO,
    question: 'bb) Nennen Sie zwei Vorteile dieses Verfahrens gegenüber der Variante mit PSK.',
    maxPoints: 2,
    modelSolution:
      'Vorteile gegenüber der Variante mit PSK (zwei sind ausreichend), u. a.:\n– Spezifische Anmeldung je Gerät wird ermöglicht\n– Kompromittierungen würden nur einzelne Geräte und nicht das gesamte Netzwerk betreffen\n– Logischer Zugang zu VLANs und WLANs wird ermöglicht\n– Besser skalierbar und verwaltbar durch RADIUS-Server\n– Für die Zugriffe können personalisierte Logdateien erstellt werden\n– Accounts können bei Austritt aus dem Unternehmen leicht gesperrt werden',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 2. Aufgabe (25 Punkte) — NAT/PAT, IP-Header, Carrier Grade NAT
  {
    id: 'ap2-si-t2-2023-winter-q2-aa',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'NAT/PAT',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (25 Punkte)\n\na) Die Anbindung der IHK-Transport GmbH an das Internet erfolgt über den Router RB1 in Berlin. Vom Provider hat die Spedition die folgende statische IP-Adresse erhalten: 203.0.113.13/30.\n\naa) Damit die internen Clients der Spedition Daten aus dem Internet abrufen können, muss der Router RB1 in Berlin NAT/PAT ermöglichen.\n\nErläutern Sie, was man unter NAT und PAT versteht.',
    maxPoints: 4,
    modelSolution:
      'NAT (Network Address Translation) und PAT (Port Address Translation) ermöglichen es internen Netzgeräten sich mit einer öffentlichen IP-Adresse mit dem Internet zu verbinden.\n\nNAT wandelt private interne IP-Adressen in eine öffentliche IP-Adresse um.\n\nPAT erweitert NAT und nutzt auch Ports für die Identifizierung. Hierdurch können mehrere interne Geräte über dieselbe öffentliche IP-Adresse auf das Internet zugreifen.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-ab',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'IP-Header / NAT',
    scenario: SCENARIO,
    referenceText:
      'Client PCB1 in Berlin möchte die Seite https://www.ihk.de/index.html abrufen (siehe Netzwerkplan).\n\nAuszug aus dem Header auf dem Weg von Client PCB1 bis zum Router RB2 (vorgegebene Werte):\nTTL: 128 — Protokoll: 06 — Header-Checksum: 54466\nQuell-Port: 49152',
    question:
      'ab) Vervollständigen Sie die folgenden Ausschnitte aus dem Header auf dem Weg des Pakets.\nIP-Paket auf dem Weg von Client PCB1 bis zum Router RB2: Quell-IP-Adresse, Ziel-IP-Adresse und Ziel-Port sind zu ergänzen.',
    maxPoints: 3,
    modelSolution:
      'TTL: 128 — Protokoll: 06 — Header-Checksum: 54466\nQuell-IP-Adresse: 172.16.32.150 (PCB1)\nZiel-IP-Adresse: 135.125.254.20 (www.ihk.de)\nQuell-Port: 49152 — Ziel-Port: 443 (HTTPS)',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-ac',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'ac',
    topic: 'IP-Header / NAT',
    scenario: SCENARIO,
    referenceText:
      'ac) Ergänzen Sie den folgenden Ausschnitt aus dem Header.\nIP-Paket auf dem Weg vom Router RB1 bis zum ISP (vorgegebene Werte):\nHeader-Checksum: 32187\nQuell-Port: 50000',
    question:
      'Ergänzen Sie den folgenden Ausschnitt aus dem Header.\nIP-Paket auf dem Weg vom Router RB1 bis zum ISP: TTL, Protokoll, Quell-IP-Adresse, Ziel-IP-Adresse und Ziel-Port sind zu ergänzen.',
    maxPoints: 5,
    modelSolution:
      'TTL: 126 (128 – 2 Router) — Protokoll: 06 (TCP) — Header-Checksum: 32187\nQuell-IP-Adresse: 203.0.113.13 (RB1)\nZiel-IP-Adresse: 135.125.254.20 (www.ihk.de)\nQuell-Port: 50000 — Ziel-Port: 443 (HTTPS)',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-ad',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'ad',
    topic: 'NAT / Ports',
    scenario: SCENARIO,
    question:
      'ad) Erläutern Sie, weshalb im zweiten Header-Ausschnitt ein anderer Quell-Port als im ersten Header-Ausschnitt verwendet wird.',
    maxPoints: 2,
    modelSolution:
      'Der Router wählt für ausgehende Verbindungen jeweils eine neue Quell-Port-Nummer, die er aus seinem ungenutzten Port-Bereich nimmt. Über die Port-Nummern wird die Zuordnung gesichert, sodass Antworten an den richtigen internen PC weitergeleitet werden.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-ba',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'Destination-NAT',
    scenario: SCENARIO,
    referenceText:
      'b) Die DMZ der Spedition am Standort Berlin verwendet statisch vergebene, private IP-Adressen. Administratoren können über Destination-NAT die Server dennoch von außen erreichen.\n\nIP-Paket, das aus dem Homeoffice des Admins beim Router RB1 der Spedition ankommt:\nQuell-IP-Adresse: 62.155.243.193',
    question:
      'ba) Ergänzen Sie die folgenden Ausschnitte aus dem Header für eine Verbindung aus dem Internet zum internen Daten-Server per SSH. Der Server soll von extern und von intern jeweils über den SSH-Standardport erreichbar sein.\nZu ergänzen: Ziel-IP-Adresse, Quell-Port, Ziel-Port.',
    maxPoints: 4,
    modelSolution:
      'Quell-IP-Adresse: 62.155.243.193\nZiel-IP-Adresse: 203.0.113.13 (Eth 4)\nQuell-Port: beliebiger Wert zwischen 49.152 und 65.535\nZiel-Port: 22 (SSH-Standardport)',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-bb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'Destination-NAT',
    scenario: SCENARIO,
    question:
      'bb) Ergänzen Sie den folgenden Ausschnitt aus dem Header.\nIP-Paket, nachdem der Router RB1 der Spedition Destination-NAT durchgeführt hat.',
    maxPoints: 4,
    modelSolution:
      'Quell-IP-Adresse: 62.155.243.193\nZiel-IP-Adresse: 10.10.10.2 (Datei-Server)\nQuell-Port: beliebiger Wert zwischen 49.152 und 65.535\nZiel-Port: 22 (SSH-Standardport)\n\nWeiterführende Informationen:\nPorts unterhalb von 1.024 sind als „bekannte" Ports bekannt und sind bestimmten Diensten wie FTP (Port 21), HTTP (Port 80) oder HTTPS (Port 443) zugeordnet.\nPorts zwischen 1.024 und 49.151 sind als „registrierte" Ports bekannt und werden für verschiedene Anwendungen und Dienste verwendet.\nDie Ports im Bereich von 49.152 bis 65.535 werden häufig dynamisch von Geräten für ausgehende Verbindungen zugewiesen, um sicherzustellen, dass es nicht zu Konflikten mit den festen, bekannten oder registrierten Ports kommt.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2023-winter-q2-c',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 2,
    subPart: 'c',
    topic: 'Carrier Grade NAT',
    scenario: SCENARIO,
    question:
      'c) Kunden greifen auch über ihre Smartphones oder über ihre Laptops im Mobilfunknetz auf die Webseite der Spedition zu. Die Kunden erhalten im Mobilfunkbereich von Ihrem Provider eine Adresse aus dem Bereich 10.x.x.x (Carrier Grade NAT).\n\nErläutern Sie, warum der Provider dem Kunden eine solche Adresse zuweist, und nennen Sie einen Nachteil für den Kunden.\n\nErläuterung:\nNachteil:',
    maxPoints: 3,
    modelSolution:
      'Erläuterung: Der Provider weist dem Kunden eine private Adresse aus dem 10.x.x.x-Bereich zu, um mehrere Kunden gleichzeitig zu bedienen, ohne jedem Kunden eine öffentliche IP-Adresse zuzuweisen. Hierdurch spart der Provider Kosten für öffentliche IP-Adressen ein. Außerdem kann der Kunde so vor direkten externen Zugriffen geschützt werden.\n\nNachteil: Die Geräte sind nicht direkt aus dem Internet erreichbar und manche Anwendungen könnten dadurch beeinflusst werden (z. B. Remote-Zugriffe, Serverhostings, bestimmte VPNs).\n\nWeiterer möglicher Nachteil: Wenn das Netzwerk des Mobilfunkanbieters bereits NAT verwendet und der Router des Kunden ebenfalls NAT verwendet, kann es zu doppeltem NAT kommen. Hierdurch könnten Probleme bei VoIP-Anwendungen oder Peer-to-Peer-Verbindungen entstehen.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },

  // 3. Aufgabe (28 Punkte) — Glasfaser, VLANs, Fehlersuche
  {
    id: 'ap2-si-t2-2023-winter-q3-a',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'a',
    topic: 'Glasfaser vs. Kupfer',
    scenario: SCENARIO,
    question:
      '3. Aufgabe (28 Punkte)\n\nAm Standort München der IHK-Transport GmbH wurde ein zweites Gebäude neu errichtet. In jedem der beiden Gebäude wurde ein VLAN-fähiger Switch mit 10 Gbit/s SFP+ Steckplätzen für die UpLinks verbaut. Die beiden Gebäude haben einen Abstand von 150 Metern und sollen verbunden werden. Sie sollen das Netzwerk konfigurieren.\n\na) Erläutern Sie zwei Gründe für die Verwendung einer Glasfaserverbindung zwischen den beiden Gebäuden anstelle einer Kupferverbindung.',
    maxPoints: 6,
    modelSolution:
      'Höhere Reichweite: Kupferleitungen sollten nur bis zu einer maximalen Reichweite von 100 Metern betrieben werden. Bei Glasfaserleitungen mit einer Übertragungsrate von 10 Gbit/s sind Entfernungen von bis zu 550 Metern (Multimode) und bis zu 10.000 Meter bei Singlemode möglich.\n\nUnempfindlich gegen EMV-Störungen: Kupferkabel können durch äußere elektromagnetische Störeinflüsse stark in ihrer Signalqualität beeinträchtigt werden. Im Gegensatz dazu ist das optische Signal in einer Glasfaser immun gegen solche Störungen, da es unempfindlich gegenüber externen elektromagnetischen Einflüssen ist.\n\nWeitere Gründe, die für die Verwendung einer Glasfaserverbindung sprechen (u. a.):\n– Schutz vor Überspannung (z. B. bei Blitzeinschlag), da die Energie nicht weitergeleitet wird, werden keine angeschlossenen Geräte beschädigt\n– Galvanische Trennung der beiden Gebäude, da Glasfaserleitungen keinen Strom leiten\n– Geringeres Gewicht und geringere Größe, hierdurch erleichterte Installation\n– Zukunftssicherheit und Skalierbarkeit\n– Geringere Latenz ermöglicht Anwendungen, die schnelle Antwortzeiten erfordern\n– Geringere Kosten für Wartung und Reparatur',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-ba',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'VLAN',
    scenario: SCENARIO,
    question:
      'Fortsetzung 3. Aufgabe\n\nb) Das Netzwerk in München soll in VLANs segmentiert werden.\n\nba) Beschreiben Sie zwei Gründe, die die IHK-Transport GmbH dazu bewogen haben könnten, VLANs zu verwenden.',
    maxPoints: 4,
    modelSolution:
      'Logische Trennung der Netzwerksegmente: Durch VLANs werden Netzwerksegmente logisch getrennt, wodurch Datenpakete nur zu den Mitarbeitern weitergeleitet werden, die diese auch empfangen sollen. Dies trägt dazu bei, die Netzwerkleistung zu optimieren, indem die Übertragung von Daten auf diejenigen beschränkt wird, die in dem spezifischen Segment aktiv sind.\n\nKosteneinsparungen: Durch den Einsatz von VLANs können Kosten eingespart werden, da in Summe weniger Hardware angeschafft werden muss. Mehrere Netzwerksegmente werden durch VLANs auf einem Switch verarbeitet bzw. mithilfe eines Kabels transportiert.\n\nWeitere Gründe für VLANs (u. a.):\n– Verkleinerung der Broadcast-Domäne\n– Verbesserte und erleichterte Konfiguration der logischen Gruppen im Netzwerk\n– Unabhängigkeit von physikalischer Topologie\n– Eindeutige Trennung des Traffics eines VLANs zu anderen VLANs\n– Erleichterte Fehlerisolierung und Diagnose',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-bb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'VLAN / Trunk',
    scenario: SCENARIO,
    question:
      'bb) Beide Switche sollen so konfiguriert werden, dass gebäudeübergreifende VLANs betrieben werden können.\n\nGeben Sie an, welche Einstellung Sie auf den beiden Geräten vornehmen müssen.',
    maxPoints: 2,
    modelSolution:
      'Die Verbindungen der Switche über die Uplink-Ports sollen für den VLAN-Verkehr mit Tags konfiguriert werden, um eine korrekte Übertragung der VLAN-Informationen zu ermöglichen. Je nach Hersteller müssen die Ports z. B. auf „tagged" eingestellt werden.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-bc',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'bc',
    topic: 'VLAN / OSI-Layer 2',
    scenario: SCENARIO,
    question:
      'bc) Beschreiben Sie die Veränderung im OSI-Layer 2, die bei VLAN-Verbindung zwischen zwei Switches stattfindet.',
    maxPoints: 3,
    modelSolution:
      'Im Frame-Header wird ein VLAN-Tag eingefügt. Hierin enthalten ist die Kennzeichnung für das VLAN und die VLAN-Nummer.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-ca',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'ca',
    topic: 'Fehlersuche / DNS',
    scenario: SCENARIO,
    referenceText:
      'c) Nach Implementierung der VLANs melden die Mitarbeiter aus dem Neubau in München folgenden Sachverhalt: „keine Verbindung zum Internet möglich; Zugriff auf den Datei-Server im Hauptgebäude München funktioniert".\n\nca) Sie kontrollieren die IP-Adresse, die Netzwerkmaske (/24) und das Gateway (Internetrouter mit der IP 192.168.100.1). Alle Werte sind richtig eingetragen, und die Verbindung hat vor Einführung der VLANs funktioniert. Sie starten am PC eine Konsole und kontrollieren die Namensauflösung:\n\nC:\\Users\\user15>nslookup www.ihk.de\nDNS request timed out.\n    timeout was 2 seconds.\nServer: UnKnown\nAddress: 192.168.100.1\n\nDNS request timed out. (fünfmal wiederholt, jeweils timeout was 2 seconds)\n*** Zeitüberschreitung bei Anforderung an UnKnown.',
    question: 'Nennen Sie eine mögliche Ursache für diese Ausgabe.',
    maxPoints: 3,
    modelSolution:
      'Mögliche Fehlerursachen (eine ist ausreichend), u. a.:\n– Durch die Konfiguration der VLANs könnten neue Firewall-Regeln oder Routing-Probleme entstanden sein.\n– Der DNS-Serverdienst (192.168.100.1) ist nicht erreichbar und es wird daher keine Antwort vom DNS verschickt.\n– DNS-Pakete könnten beim VLAN-Setup eingeschränkt worden sein oder DNS-Pakete werden an das falsche VLAN geroutet.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-cb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'cb',
    topic: 'Fehlersuche / Ping',
    scenario: SCENARIO,
    referenceText:
      'cb) Sie überprüfen die Verbindung zum Datei-Server (192.168.100.20) mittels eines Ping-Befehls und zeichnen ein Trace des Netzwerkverkehrs zwischen den beiden Switches auf.\n\nC:\\Users\\user15>ping 192.168.100.20\nPing wird ausgeführt für 192.168.100.20 mit 32 Bytes Daten:\nAntwort von 192.168.100.20: Bytes=32 Zeit<1ms TTL=64 (viermal)\nPing-Statistik für 192.168.100.20: Pakete: Gesendet = 4, Empfangen = 4, Verloren = 0 (0% Verlust), Zeitangaben in Millisek.: Minimum = 0ms, Maximum = 0ms, Mittelwert = 0ms\n\nDas Trace des Netzwerkverkehrs ist beigefügt (siehe Anlage 2: Wireshark-Mitschnitt, Frame 778, Quelle 192.168.100.212, Ziel 192.168.100.20, VLAN-Tag im Hex-Dump „00 0b" = VLAN-ID 11).',
    question: 'Ermitteln Sie die IP-Adresse des Clients.',
    maxPoints: 2,
    modelSolution: 'IP-Adresse des Clients: 192.168.100.212',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-cc',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'cc',
    topic: 'VLAN-ID',
    scenario: SCENARIO,
    question: 'cc) Ermitteln Sie die Nummer des VLANs, über das die Verbindung zum Datei-Server stattfindet.',
    maxPoints: 2,
    modelSolution:
      'Nummer des VLANs: 11\n\nWeiterführende Informationen:\nDie VLAN-ID ist im Wireshark-Screenshot hervorgehoben („00 0b") und in der Hinweiszeile auch als solche angegeben „VLAN ID (vlan.id), 2 Bytes". Die hexadezimale Schreibweise „00 0b" entspricht einer 11 in dezimaler Schreibweise.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2023-winter-q3-cd',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 3,
    subPart: 'cd',
    topic: 'Fehlersuche / VLAN-Routing',
    scenario: SCENARIO,
    question:
      'cd) Beschreiben Sie eine mögliche Fehlerursache des eingangs beschriebenen Problems der fehlerhaften Internetverbindung und machen Sie einen Vorschlag zur Fehlerbeseitigung.\n\nFehlerursache:\nFehlerbeseitigung:',
    maxPoints: 6,
    modelSolution:
      'Fehlerursache: Client und Router befinden sich in unterschiedlichen VLANs. Ein Routing zwischen den VLANs findet nicht statt und somit können die beiden Geräte nicht miteinander kommunizieren.\n\nFehlerbeseitigung: Der Switch-Port des Clients ist in das gleiche VLAN wie der Router aufzunehmen. Alternativ könnte ein Routing zwischen VLAN 11 und den VLAN des Routers konfiguriert werden.\n\nAuf Basis der vorhergehenden Aufgaben und der offenen Fragestellung in Richtung „DNS-Problem" kann hier prinzipiell jede mögliche Fehlerursache und deren Beseitigung angegeben werden.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },

  // 4. Aufgabe (26 Punkte) — Zertifikate, MD5-Kollisionsangriff, TLS 1.3 / Diffie-Hellman
  {
    id: 'ap2-si-t2-2023-winter-q4-a',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'a',
    topic: 'Zertifikate / PKI',
    scenario: SCENARIO,
    question:
      '4. Aufgabe (26 Punkte)\n\nFür die VPN-Verbindungen der Außendienstmitarbeiter erfolgt die Authentifizierung zurzeit über PSK. In Zukunft soll hierzu eine eigene Certificate Authority (CA) nach X.509 eingesetzt werden, welche die notwendigen Client-Zertifikate signiert (self-signed).\n\na) Erläutern Sie zwei sicherheitsrelevante Vorteile, die für Zertifikate gegenüber PSK sprechen.',
    maxPoints: 4,
    modelSolution:
      'Revokationsmöglichkeit: Bei Verlust oder Kompromittierung eines Zertifikates kann dieses sehr leicht widerrufen werden. Bei einer Offenlegung des Pre-shared Keys (PSK) hingegen müssten alle betroffenen Geräte neu konfiguriert werden. Zertifikate können an Geräte bzw. Mitarbeiter gebunden werden, wodurch Zertifikate zielgerichteter erneuert werden können.\n\nHöhere kryptografische Sicherheit: Zertifikate verwenden kryptografische Schlüsselpaare, typischerweise aus einem öffentlichen und einem privaten Schlüssel. PSKs basieren auf einer statischen Passphrase oder einem statischen Schlüssel. Die kryptografischen Algorithmen, die in Zertifikaten verwendet werden, sind resistent gegenüber Brute-Force-Angriffen, während Passphrasen oft anfällig für diese sind.\n\nWeitere sicherheitsrelevante Vorteile (u. a.):\n– Minimiertes Angriffspotenzial für Social-Engineering\n– Schutz vor Replay-Angriffen\n– Erleichterte Skalierbarkeit\n– Bessere Auditierbarkeit\n– Verbesserte Sicherheit bei Geräteverlust',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-ba',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'Hashfunktionen / MD5',
    scenario: SCENARIO,
    referenceText:
      'b) Bei der Einrichtung der CA hat ein Mitarbeiter MD5 als Hash-Algorithmus ausgewählt.\n\nba) Nachdem Ihre VPN-Software Ihnen MD5 als Sicherheitsrisiko anzeigt, finden Sie folgenden Artikel zu MD5:\n\n„MD5 Security\nThe security of the MD5 hash function is severely compromised. A collision attack exists that can find collisions within seconds on a computer with a 2.6 GHz Pentium 4 processor. Further, there is also a chosen-prefix collision attack that can produce a collision for two inputs with specified prefixes within seconds, using off-the-shelf computing hardware.\nThese hash and collision attacks have been demonstrated in the public in various situations, including colliding document files and digital certificates.\n(https://en.wikipedia.org/wiki/MD5 - Auszug)"',
    question:
      'Erläutern Sie, warum Hashfunktionen in Zertifikaten nach X.509 eine entscheidende Rolle spielen.',
    maxPoints: 4,
    modelSolution:
      'Hashfunktionen spielen in Zertifikaten eine entscheidende Rolle, indem sie die Einmaligkeit, Integrität und Authentizität der Zertifikatsdaten gewährleisten. Beim Signieren der Zertifikate wird ein Hashwert des Zertifikates gebildet und anschließend signiert. Der Hashwert identifiziert das Zertifikat eindeutig.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-bb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'Kollisionsangriff',
    scenario: SCENARIO,
    question:
      'bb) Erläutern Sie den Begriff einer „collision attack" und warum diese Angriffsmöglichkeit ein auf MD5 basierendes Zertifikat unsicher macht.',
    maxPoints: 4,
    modelSolution:
      'Durch einen Kollisionsangriff wird ein gefälschtes Zertifikat erzeugt, das denselben Hashwert wie das originale Zertifikat aufweist. Dadurch kann das gefälschte Zertifikat als gültig erscheinen und angenommen werden, ohne als Fälschung erkannt zu werden. Besonders anfällig für diese Angriffsform ist der Hash-Algorithmus MD5.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-ca',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'ca',
    topic: 'PKI / Certificate Signing',
    scenario: SCENARIO,
    referenceText:
      'c) Nachdem mit SHA-256 ein aktuelles Hashverfahren aktiviert wurde, müssen alle Client-Zertifikate neu erstellt und auf den Mitarbeiter-Notebooks eingerichtet werden. Sie sind mit der Aufgabe betraut, dies bei einem Notebook durchzuführen.\n\nSie senden dem für die CA verantwortlichen Kollegen den Certificate Signing Request (Zertifikats-Anforderungs-Datei) des Clients und erhalten daraufhin eine E-Mail mit folgenden Dateien im Anhang:\nDateiname / Beschreibung:\nClient_Cert.crt — enthält Zertifikat für Client\nCA_Cert.crt — enthält Zertifikat für CA\nCA_Private_Key.key — enthält private Key der CA',
    question:
      'ca) Beschreiben Sie, welcher Fehler im Umgang mit den Dateien Ihrem Kollegen unterlaufen ist, und welche Sicherheitslücke durch diesen Fehler Ihres Kollegen entstanden ist.',
    maxPoints: 4,
    modelSolution:
      'Bei der E-Mail wurde der private Schlüssel (CA_Private_Key.key) beigefügt, somit ist dieser nicht mehr geheim und die gesamte certificate authority ist ungültig.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-cb',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'cb',
    topic: 'PKI / Fehlerbehebung',
    scenario: SCENARIO,
    question: 'cb) Beschreiben Sie, was unternommen werden muss, um den Fehler des Kollegen zu korrigieren.',
    maxPoints: 4,
    modelSolution:
      'Um den Fehler zu korrigieren, muss die gesamte certificate authority neu angelegt bzw. es müssen alle Schlüssel der CA neu generiert und verteilt werden. Außerdem müssen alle durch die CA signierten Zertifikate ersetzt werden.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-da',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'da',
    topic: 'TLS 1.3 / Diffie-Hellman',
    scenario: SCENARIO,
    referenceText:
      'd) Die von Ihnen verwendete VPN-Software ist so konfiguriert, dass ausschließlich Verbindungen nach TLS1.3 aufgebaut werden. Dieses Protokoll benutzt das sogenannte Diffie-Hellman-Verfahren.\n\nRFC8446 (Auszug):\n„In the Key Exchange phase, the client sends the ClientHello message, which contains either a set of Diffie-Hellman key shares, a set of pre-shared key labels, or both."',
    question: 'da) Erläutern Sie die Funktion des Diffie-Hellman-Verfahrens beim Verbindungsaufbau.',
    maxPoints: 3,
    modelSolution:
      'Das Diffie-Hellman-Verfahren ermöglicht es zwei Parteien, einen gemeinsamen geheimen Schlüssel über einen unsicheren Kanal auszutauschen, ohne diesen Schlüssel direkt zu übertragen. Das Verfahren wird von TLS 1.3 genutzt, um einen symmetrischen Session-Key für beide Parteien zu erzeugen.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2023-winter-q4-db',
    examId: 'ap2-si-t2-2023-winter',
    questionNumber: 4,
    subPart: 'db',
    topic: 'TLS 1.3 / asymmetrische Verschlüsselung',
    scenario: SCENARIO,
    question: 'db) Erläutern Sie, zu welchem Zweck bei TLS1.3 asymmetrische Verschlüsselung eingesetzt wird.',
    maxPoints: 3,
    modelSolution:
      'Die asymmetrische Verschlüsselung wird bei TLS (Transport Layer Security) 1.3 hauptsächlich für den Schlüsselaustausch sowie zur Authentifizierung und Überprüfung der Zertifikatssignaturen eingesetzt.\n\nWeiterführende Informationen:\nAus Effizienzgründen wird für die eigentliche Datenverschlüsselung ein symmetrischer Verschlüsselungsalgorithmus eingesetzt. TLS ist somit ein hybrides Verschlüsselungsprotokoll.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
]
