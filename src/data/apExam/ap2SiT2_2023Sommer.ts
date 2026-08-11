import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2023SommerMeta: ApExamMeta = {
  id: 'ap2-si-t2-2023-sommer',
  area: 'AP2_SI_T2',
  year: 2023,
  period: 'Sommer',
  label: 'Sommer 2023',
  examDate: 'Mittwoch, 26. April 2023',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_23s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T2_23s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker bei der 1234-IT-Systemhaus GmbH. Für Ihren Arbeitgeber beraten Sie u. a. ein Autohaus, die Fahrguth GmbH. Das Autohaus betreibt neben der Zentrale noch Filialen an drei Standorten. Den Netzwerkplan des Autohauses finden Sie in der perforierten Anlage.\n\nAnlage 1: Netzwerkplan der Fahrguth GmbH:\n– Zentrale Essen: Netz 10.1.0.0/16, mit Fileserver (IP 10.1.0.10), angebunden an Router Essen über IF1.\n– Router Essen: IF1 (zur Zentrale Essen), IF2 (192.168.0.0/30, zur Filiale Bochum), IF3 (192.168.0.4/30, zur Filiale Duisburg), IF4 (192.168.0.8/30, zur Filiale Dortmund), dsl (zum Internet, 210.10.10.1).\n– Filiale Bochum: Netz 10.2.0.0/16, Router Bochum.\n– Filiale Duisburg: Netz 10.3.0.0/16, Router Duisburg.\n– Filiale Dortmund: Netz 10.4.0.0/16, Router Dortmund.\n– Geplante zusätzliche Standleitung (gestrichelt eingezeichnet): Router Bochum – Router Duisburg, ebenfalls 10 Gbit/s.\n\nAm Hauptsitz der Fahrguth GmbH in Essen arbeiten rund 60 Mitarbeiter, die den Bereichen Verkauf, Verwaltung, Werkstatt und Administration zugeordnet sind. Für jeden Bereich wurde ein eigenes VLAN erstellt, zusätzlich existiert ein weiteres VLAN für die Server.'

export const ap2SiT2_2023SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (26 Punkte) — VLANs, DHCP, SFP+
  {
    id: 'ap2-si-t2-2023-sommer-q1-aa',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'VLAN-Gründe',
    scenario: SCENARIO,
    referenceText:
      '1. Aufgabe (26 Punkte)\n\na) Das interne Netzwerk ist aus mehreren Switches aufgebaut, die wie abgebildet verbunden sind (dicke schwarze Linie: Verkaufsraum-Switch — Serverraum-Switch — Werkstatt-Switch). Der eingesetzte Gebäude-Verteiler im Serverraum ist ein Layer-3-Switch, der für jedes VLAN das Standardgateway darstellt. Die Geräte der Mitarbeiter sind an die beiden Layer-2-Switche über Patchfelder und -dosen angeschlossen.',
    question: 'aa) Beschreiben Sie zwei Gründe, die die Fahrguth GmbH dazu bewogen haben könnten, VLANs zu verwenden.',
    maxPoints: 4,
    modelSolution:
      'Durch VLANs kann die IT-Sicherheit der Fahrguth GmbH erhöht werden, da die Netzwerksegmente logisch getrennt werden. Hierdurch werden Datenpakete nur zu den Mitarbeitern weitergeleitet, die diese auch empfangen sollen.\n\nDurch den Einsatz von VLANs können Kosten eingespart werden, da in Summe weniger Hardware angeschafft werden muss. Mehrere Netzwerksegmente werden durch VLANs auf einem Switch verarbeitet bzw. mithilfe eines Kabels transportiert.\n\nWeitere Gründe für VLANs wären beispielsweise:\n– Verkleinerung der Broadcast-Domäne\n– Verbesserte und erleichterte Konfiguration der logischen Gruppen im Netzwerk\n– Unabhängigkeit von physikalischer Topologie\n– Eindeutige Trennung des Traffics eines VLANs zu anderen VLANs\n\nWeitere Vorteile sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-ab',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'IEEE 802.1q / Q-Tag',
    scenario: SCENARIO,
    question:
      'ab) Zwischen den Switches werden Verbindungen nach Standard IEEE 802.1q eingesetzt. Auf diesen Verbindungen wird in jeden Frame ein 32 Bit großes Zusatzfeld (Q-Tag) eingefügt.\n\nErläutern Sie, weshalb dies geschieht, und nennen Sie eine der Informationen, die in diesem Zusatzfeld enthalten ist.',
    maxPoints: 3,
    modelSolution:
      'Das 32 Bit große Zusatzfeld (Q-Tag) ist notwendig, da der Header eines Standard-Frames kein Feld zur VLAN-Zuordnung vorsieht. Ohne das Q-Tag könnte also nicht spezifiziert werden, zu welchem VLAN ein Frame gehört. Das entscheidende Feld dieses Zusatzfeldes ist die VLAN-ID (12 Bit).\n\nWeiterführende Information:\nDie übrigen 20 Bit des Q-Tags verteilen sich auf folgende Felder:\n– Protokoll-ID (2 Byte)\n– Prioritätenfeld (3 Bit)\n– Indikator des Canonical Formats (1 Bit)',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-ac',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'ac',
    topic: 'VLAN-Zuordnung',
    scenario: SCENARIO,
    question:
      'ac) Eine Zuordnung zu einem VLAN kann z. B. statisch oder per IEEE 802.1X erfolgen.\n\nErläutern Sie jeweils anhand eines Beispiels, was man darunter versteht.',
    maxPoints: 4,
    modelSolution:
      'Bei einer statischen Zuordnung werden bestimmte Ports durch einen Administrator fest einem bestimmten VLAN zugeordnet. Beispielsweise werden Ports, die für die Mitarbeiter des Bereiches „Verwaltung" vorgesehen sind, unmittelbar dem VLAN „Verwaltung" fest zugeordnet.\n\nMithilfe des Standards IEEE 802.1X erfolgt eine dynamische Zuordnung der Anwender in die jeweiligen VLANs. Je nach Anmeldedaten wird zum Beispiel der Account „Chef" immer dem VLAN der Verwaltung zugeordnet. Bei einer dynamischen Zuordnung ist es nicht relevant, an welchem PC der Fahrguth GmbH die Anmeldung erfolgt ist.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-ba',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'DHCP-Kommunikationsschritte',
    scenario: SCENARIO,
    referenceText:
      'b) Sie sind für die PCs der Mitarbeiter zuständig. Diese sollen an das Netzwerk angeschlossen werden.\n\nba) Nach der Anmeldung eines Clients soll dieser vom DHCP-Server per DHCP eine IP-Adresse aus dem Bereich des jeweiligen VLANs erhalten. Auf dem DHCP-Server wurde daher für jedes VLAN ein Adresspool eingerichtet.',
    question: 'Benennen Sie die vier Kommunikationsschritte bei der erfolgreichen Zuteilung einer IP-Adresse via DHCP.',
    maxPoints: 4,
    modelSolution:
      '1. DHCP Discover\n2. DHCP Offer\n3. DHCP Request\n4. DHCP Ack\n\nWeiterführende Informationen:\n1. DHCP Discover: Mithilfe einer Broadcast-Anfrage bittet ein DHCP-Client ohne IP-Adresse im Netzwerk um IP-Adressinformationen.\n2. DHCP Offer: Der DHCP-Server antwortet auf die Broadcast-Anfrage mit IP-Adressinformationen.\n3. DHCP Request: Der DHCP-Client fordert eine bekannte oder angebotene IP-Adresse und weitere Informationen vom DHCP-Server an.\n4. DHCP Ack: Der DHCP-Server bestätigt die angeforderten Daten.\n\nAls möglicher fünfter Schritt könnte ein DHCP Release erfolgen, hierbei gibt der DHCP-Client seine IP-Adressinformationen zur erneuten Vergabe durch den Server frei. Angeforderte Informationen könnten vom DHCP-Server auch über DHCP-NAK abgelehnt werden, ebenso könnte der DHCP-Client angebotene IP-Adressinformationen über DHCP-Decline ablehnen. Die zuvor genannten Schritte bilden also nur den Idealfall ab.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-bb',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'DHCP-Relay',
    scenario: SCENARIO,
    question:
      'bb) Der DHCP-Server befindet sich im Server-VLAN, der Client in einem der Benutzer-VLANs. An den Switches wurden bisher nur die VLAN-Konfigurationen fehlerfrei eingerichtet.\n\nErläutern Sie, warum der DHCP-Prozess zunächst fehlschlägt, und welche Einstellungen vom Admin am Layer-3-Switch zusätzlich vorzunehmen sind, sodass der DHCP-Server alle VLANs mit IP-Adressen versorgen kann.',
    maxPoints: 3,
    modelSolution:
      'Die DHCP-Kommunikationsschritte (siehe Aufgabe ba) arbeiten als Broadcast, diese enden am Layer-3-Switch. Damit der DHCP-Server alle VLANs mit IP-Adressen versorgen kann, muss zunächst für jedes VLAN-Interface ein DHCP-Relay konfiguriert werden. Durch dieses werden DHCP-Anfragen und -Antworten zwischen dem DHCP-Server und den DHCP-Clients weitergeleitet.\n\nEbenfalls korrekt wäre eine Erläuterung zu IP Helper oder auch Relay Agent als „Vermittler" für den DHCP-Datenverkehr.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-ca',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'ca',
    topic: 'SFP / SFP+',
    scenario: SCENARIO,
    referenceText:
      'c) Die Verbindung zwischen den Switches soll zukünftig redundant ausgelegt werden. Dazu werden neue SFP+ Module für die Switches beschafft.',
    question: 'ca) Erläutern Sie, was man unter einem SFP+ Modul versteht und worin sich SFP und SFP+ unterscheiden.',
    maxPoints: 3,
    modelSolution:
      'Mithilfe eines SFP-Moduls können Multimode- und Singlemode-Glasfaserkabel an einem Switch angeschlossen werden. Bei SFP und SFP+ handelt es sich um unterschiedliche Klassen, SFP unterstützt Datenübertragungen bis zu 5 GBit/s wohingegen SFP+ bis zu 16 GBit/s unterstützt.\n\nWeiterführende Informationen:\nBei einem SFP+ oder SFP-Modul handelt es sich um ein Transceiver-Modul. Es können also sowohl Daten gesendet (transmittet) als auch empfangen (received) werden.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-cb',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'cb',
    topic: 'Glasfaserstecker',
    scenario: SCENARIO,
    referenceText:
      'cb) Im Datenblatt der bestellten Module finden Sie folgende Angaben:\nÜbertragungsrate: 1.000 Mbps\nTyp: Duplex\nGlasfaserart: Multimode\nAnschluss: LC\nLWL-Strecke: 2 km\nBetriebswellenlänge: 1.310 nm\n\nDrei abgebildete Steckertypen zur Auswahl: 1 = Duplex-LC-Stecker, 2 = SC-Stecker, 3 = ST-Stecker.',
    question: 'Kreuzen Sie an, welchen Stecker ein Glasfaserkabel besitzen muss, um mit dem Modul zusammenzuarbeiten.',
    maxPoints: 1,
    modelSolution:
      'Der gesuchte Stecker befindet sich ganz links (Duplex-LC-Stecker, passend zum im Datenblatt angegebenen Anschluss „LC").\n\nWeiterführende Informationen:\nStandardmäßig wird für SFP-Module der LC-Stecker verwendet. Dieser entspricht dem Platzbedarf eines RJ-45-Stecker.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q1-cc',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 1,
    subPart: 'cc',
    topic: 'STP vs. Link-Aggregation',
    scenario: SCENARIO,
    question:
      'cc) Sie schlagen vor, bei dieser Verkabelung zwischen den Switches entweder das Spanning-Tree-Protocol (STP) oder Link-Aggregation (IEEE 802.3ad) zu verwenden.\n\nErgänzen Sie dazu die folgende Tabelle (Protokoll — Funktionsweise, solange beide Leitungen störungsfrei sind — Reaktion der Verbindung, wenn eine Leitung ausfällt).',
    maxPoints: 4,
    modelSolution:
      'Spanning-Tree-Protocol (STP) — Funktionsweise: Es wird weiterhin nur eine Leitung verwendet. Das STP weiß aber, dass die zweite Verbindung vorhanden wäre. — Reaktion bei Ausfall: Sobald die verwendete Leitung ausfällt, wird der STP-Algorithmus aktiviert und die bisher ungenutzte Leitung überträgt nun die Daten.\n\nLink-Aggregation — Funktionsweise: Alle verfügbaren Leitungen werden gebündelt, die Übertragungsrate verdoppelt sich. — Reaktion bei Ausfall: Sobald eine der beiden Verbindungen ausfällt, werden die Daten mit reduzierter Geschwindigkeit über die verbleibende Verbindung gesendet.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },

  // 2. Aufgabe (25 Punkte) — Routing, ARP/APIPA
  {
    id: 'ap2-si-t2-2023-sommer-q2-aa',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'Statisches Routing',
    scenario: SCENARIO,
    referenceText:
      '2. Aufgabe (25 Punkte)\n\nDie Fahrguth GmbH hat ihre Zentrale in Essen und betreibt zurzeit Filialen in Duisburg, Bochum und Dortmund. Die Filialen sind über Standleitungen an die Zentrale angebunden (siehe Netzwerkplan).\n\na) In den drei Routing-Netzen hat der Router „Essen" jeweils die niedrigste mögliche IPv4-Adresse.\n\naa) Zurzeit wird zwischen den vier Routern mit statischem Routing gearbeitet.\n\nUnvollständige IPv4-Routentabelle des Routers Essen:\nNetzwerkziel — Netzmaske — Gateway/Next-Hop — Interface\n10.1.0.0 — 255.255.0.0 — direct — IF1\n10.2.0.0 — 255.255.0.0 — (?) — (?)\n10.3.0.0 — 255.255.0.0 — (?) — (?)\n10.4.0.0 — 255.255.0.0 — (?) — (?)\n(?) — (?) — direct — IF2\n(?) — (?) — direct — IF3\n(?) — (?) — direct — IF4\n0.0.0.0 — 0.0.0.0 — 210.10.10.1 — -\n210.10.10.1 — 255.255.255.255 — direct — dsl',
    question: 'Vervollständigen Sie hierzu folgende Tabelle des Routers in Essen.',
    maxPoints: 9,
    modelSolution:
      'Vollständige IPv4-Routentabelle für Router Essen:\nNetzwerkziel — Netzmaske — Gateway/Next-Hop — Interface\n10.1.0.0 — 255.255.0.0 — direct — IF1\n10.2.0.0 — 255.255.0.0 — 192.168.0.2 — -\n10.3.0.0 — 255.255.0.0 — 192.168.0.6 — -\n10.4.0.0 — 255.255.0.0 — 192.168.0.10 — -\n192.168.0.0 — 255.255.255.252 — direct — IF2\n192.168.0.4 — 255.255.255.252 — direct — IF3\n192.168.0.8 — 255.255.255.252 — direct — IF4\n0.0.0.0 — 0.0.0.0 — 210.10.10.1 — -\n210.10.10.1 — 255.255.255.255 — direct — dsl',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q2-ab',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'Dynamisches Routing',
    scenario: SCENARIO,
    referenceText:
      'Die aktuellen Standleitungen Bochum-Essen und Dortmund-Essen haben eine Bandbreite von 10 Gbit/s, die Standleitung Duisburg-Essen hat eine Bandbreite von nur 500 MBit/s. Da es hier immer wieder zu Problemen kommt, wird in Erwägung gezogen, das Netz durch eine weitere Leitung zwischen Bochum und Duisburg zu erweitern. Diese Leitung soll ebenfalls eine Bandbreite von 10 Gbit/s bereitstellen (siehe gestrichelte Linie im Netzwerkplan).\n\nDiese Maßnahme soll sowohl die Performanz als auch die Redundanz des Netzes erhöhen.',
    question: 'ab) Begründen Sie, warum in diesem Fall dynamisches Routing empfehlenswert ist.',
    maxPoints: 4,
    modelSolution:
      'Mithilfe des dynamischen Routings können Störungen durch das Netz eigenständig ausgeglichen werden, indem eine alternative Verbindung genutzt wird. Beim statischen Routing werden redundante Verbindungen nicht berücksichtigt.\n\nWeiterführende Informationen — weitere Vorteile des dynamischen Routings:\n– Der aktuelle Status des Netzwerkes und der Leitungen wird bei den Routing-Entscheidungen berücksichtigt\n– Der Ausfall einzelner Routen führt nicht zu einem Totalausfall\n– Das Netzwerk ist dynamisch erweiterbar, z. B. bei neuen Standorten\n– Geringer Wartungsaufwand durch automatische Konfigurationen',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q2-ac',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 2,
    subPart: 'ac',
    topic: 'Distance-Vector vs. Link-State',
    scenario: SCENARIO,
    question:
      'ac) Für dynamisches Routing stehen sowohl Distance-Vector-Protokolle als auch Link-State-Protokolle zur Verfügung.\n\nGeben Sie an und begründen Sie, welche dieser beiden Protokoll-Familien hier zum Einsatz kommen muss, um die gewünschten Anforderungen zu erreichen.',
    maxPoints: 4,
    modelSolution:
      'Bei Distance-Vector-Protokollen (z. B. RIP) dient die Hop-Anzahl als zentrale Metrik zur Entscheidungsfindung. Bei Link-State-Protokollen (z. B. OSPF) wird auch die aktuelle Last der Knoten berücksichtigt, daher wird hier (trotz der größeren Hop-Zahl) auch die zusätzliche Verbindung berücksichtigt. Es muss also Link-State zum Einsatz kommen.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q2-ba',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'APIPA / Fehlersuche',
    scenario: SCENARIO,
    referenceText:
      'b) Bei einem der File-Server in Essen kommt es wiederholt zu Problemen, da er nicht erreichbar ist. Die Netzwerkschnittstelle ist statisch auf die IPv4 Adresse 10.1.0.10/16 konfiguriert. Dies haben Sie überprüft. Sie analysieren das Problem zunächst mit dem Befehl ipconfig /all und erhalten folgende Ausgabe:\nEthernet-Adapter Ethernet:\nBeschreibung: Universal Ethernet Controller\nPhysische Adresse: 3C-E1-A1-BD-DF-E4\nDHCP aktiviert: Nein\nAutokonfiguration aktiviert: Nein\nIPv4-Adresse: 169.254.102.223 (Bevorzugt)\nSubnetzmaske: 255.255.0.0\nStandardgateway: (leer)\n\nSie erneuern die Interface-Konfiguration mit dem Befehl ipconfig /renew und überwachen währenddessen die Schnittstelle mit einem Netzwerkanalyse-Tool. Dabei protokollieren Sie folgende Daten:\nNo. 1, Time 0.000000, Source Universa_bd:df:e4, Destination Broadcast, Protocol ARP, Info „Who has 10.1.0.10?" (ARP Probe)\nNo. 2, Time 0.000596, Source PCEngine_57:11:05, Destination Universa_bd:df:e4, Protocol ARP, Info „10.1.0.10 is at 00:0d:b9:57:11:05"\nNo. 3, Time 5.988916, Source Universa_bd:df:e4, Destination Broadcast, Protocol ARP, Info „Who has 169.254.102.223?" (ARP Probe)\nNo. 4, Time 6.989909, Source Universa_bd:df:e4, Destination Broadcast, Protocol ARP, Info „Who has 169.254.102.223?" (ARP Probe)',
    question: 'ba) Erläutern Sie anhand der Analyse, warum der Server trotz statisch konfigurierter IP-Adresse nicht unter der gewünschten IPv4-Adresse erreichbar ist.',
    maxPoints: 5,
    modelSolution:
      'Die IP-Adresse 10.1.0.10 wird bereits verwendet (00:0d:b9:57:11:05 – siehe Protokoll Zeile 2). Durch Automatic Private IP Addressing (APIPA) wird automatisch die Adresse 169.254.102.223 zugewiesen.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q2-bb',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'IP-Konflikt beheben',
    scenario: SCENARIO,
    question: 'bb) Wie müssen Sie vorgehen, um den File-Server unter der IPv4 Adresse 10.1.0.10 erreichbar zu machen?',
    maxPoints: 3,
    modelSolution:
      'Um dem File-Server wieder die IP-Adresse 10.1.0.10 zuzuweisen, muss zunächst identifiziert werden, welches Gerät diese Adresse aktuell nutzt. Anschließend ist diesem Gerät eine andere IP-Adresse zuzuweisen, danach kann die IP-Konfiguration am File-Server aktualisiert werden.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },

  // 3. Aufgabe (20 Punkte) — VPN
  {
    id: 'ap2-si-t2-2023-sommer-q3-aa',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'VPN-Arten',
    scenario: SCENARIO,
    referenceText: '3. Aufgabe (20 Punkte)\n\nDie Fahrguth GmbH setzt an verschiedenen Stellen VPN-Verbindungen ein.',
    question: 'aa) Erläutern Sie jeweils anhand eines selbst gewählten Beispiels aus dem Arbeitsalltag der Fahrguth GmbH, wie diese die folgenden VPN-Arten sinnvoll einsetzen könnte: End-to-Site; Site-to-Site.',
    maxPoints: 4,
    modelSolution:
      'End-to-Site: Diese VPN-Art wird typischerweise für Außendienstmitarbeiter oder Mitarbeiter im Home-Office verwendet. Beispielsweise wenn Mitarbeiter der Verwaltung der Fahrguth GmbH von zuhause aus arbeiten.\n\nSite-to-Site: Diese VPN-Art wird typischerweise genutzt, um unterschiedliche Auslagerungen / Filialen einer Firma miteinander zu verbinden. Beispielsweise können hiermit die unterschiedlichen Filialen Duisburg, Bochum und Dortmund mit der Zentrale verbunden werden.\n\nWeiterführende Informationen: Es gibt drei unterschiedliche VPN-Arten: End-to-End (Remote-Desktop-VPN), End-to-Site (Remote-Access-VPN) und Site-to-Site (Branch-Office-VPN), wobei End-to-Site End-to-End einschließt und Site-to-Site wiederum End-to-Site.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q3-ab',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'X.509-Zertifikat',
    scenario: SCENARIO,
    question: 'ab) Zur Absicherung der VPN-Verbindungen setzt die Fahrguth GmbH Zertifikate nach Standard X.509 ein.\n\nNennen Sie drei der Bestandteile, die ein solches Zertifikat enthalten muss.',
    maxPoints: 3,
    modelSolution:
      'Mögliche Bestandteile (drei sind ausreichend):\n– Version\n– Seriennummer\n– Algorithmen-ID\n– Aussteller (Zertifizierungsstelle)\n– Gültigkeit\n– Zertifikatinhaber\n– Zertifikatinhaber-Schlüsselinformationen\n– Eindeutige ID des Ausstellers (optional)\n– Eindeutige ID des Inhabers (optional)\n\nWeiterführende Information: Bei X.509 handelt es sich um einen internationalen Standard für digitale Zertifikate einer Public-Key-Infrastruktur.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q3-b',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 3,
    subPart: 'b',
    topic: 'VPN / MTU / NAT-Fehlersuche',
    scenario: SCENARIO,
    question:
      'b) Bei einer WLAN Verbindung an einem Hotspot funktioniert der Abruf von Internetseiten ohne Probleme. Beim Verbindungsaufbau eines VPNs vom selben Hotspot aus scheitert die VPN-Verbindung, obwohl die Einrichtung des VPNs am Client korrekt erfolgt ist.\n\nBeschreiben Sie eine mögliche Fehlerursache und machen Sie einen Vorschlag zur Fehlerbeseitigung.',
    maxPoints: 5,
    modelSolution:
      'Mögliche Fehlerursache: Die Paketgröße (Maximum Transmission Unit – MTU) ist zu groß konfiguriert. Hierdurch werden die Pakete ggf. fragmentiert und die Integrität der Datenpakete ist hierdurch nicht mehr gewährleistet, abschließend werden die Pakete daher verworfen.\nVorschlag zur Fehlerbeseitigung: Die konfigurierte Paketgröße des VPN-Clients ist zu verringern.\n\nWeitere Lösungsmöglichkeit:\nMögliche Fehlerursache: Durch den Einsatz von Network Address Translation (NAT) und Port Address Translation (PAT) werden die IP-Adressen sowie Ports des Hotspots auf das VPN übersetzt. Durch diese Veränderung der Adressen und Ports wird die Integrität der Datenpakete gestört, abschließend werden die Pakete daher verworfen.\nVorschlag zur Fehlerbeseitigung: Mithilfe von NAT-Traversal können IPsec-Verbindungen über Router mit NAT hinweg aufgebaut werden. Hierfür werden die Daten in UDP-Pakete mit UDP-Ports verpackt.\n\nWeitere Lösungen möglich.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q3-ca',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 3,
    subPart: 'ca',
    topic: 'IPv6 VPN Breakout',
    scenario: SCENARIO,
    referenceText:
      'c) Nach Aufbau des VPNs soll der Internetverkehr ausschließlich über einen IPv4-Proxy in der Zentrale stattfinden. Einige Außendienstmitarbeiter berichten von Internetzugriffen, die nicht über den Proxy laufen.\n\nSie prüfen die Verbindungen mittels des Befehls tracert www.microsoft.com:\nC:\\Users\\Vertreter1>tracert www.microsoft.com\nRoutenverfolgung zu e13678.dscb.akamaiedge.net [2a02:26f0:1300:19a::356e] über maximal 30 Hops:\n1  1 ms   1 ms   2 ms  internetrouter.local [2001:db8:381c:21:7642:7fff:felc:62f8]\n2  10 ms  7 ms   6 ms  2001:db8:0:4000::1\n3  *      *      12 ms 2001:db8:1808::1\n4  56 ms  137 ms 305 ms 2001:db8:1808:1::2\n5  10 ms  10 ms  9 ms  g2a02-26f0-1300-019a-0000-0000-0000-356e.deploy.static.akamaitechnologies.com [2a02:26f0:1300:19a::356e]\nAblaufverfolgung beendet.',
    question: 'ca) Beschreiben Sie, warum ein ungefilterter Netzwerkverkehr ohne VPN-Einwahl möglich ist, obwohl der Internetverkehr nur über den Proxy der Zentrale stattfinden soll.',
    maxPoints: 5,
    modelSolution:
      'Das Netzwerk der Außendienstmitarbeiter unterstützt neben IPv4 auch IPv6, hierdurch werden auch zusätzliche IPv6-Adressen an die Clients verteilt. Diese Adressen können für einen Verbindungsaufbau mit dem Internet genutzt werden, hierbei wird allerdings die VPN-Verbindung (IPv4-Proxy) umgangen und es findet ein sogenannter IPv6 VPN Breakout statt (erkennbar am tracert-Ergebnis, das ausschließlich über IPv6-Adressen verläuft, nicht über den IPv4-Proxy).',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q3-cb',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 3,
    subPart: 'cb',
    topic: 'IPv6 VPN Breakout / Gegenmaßnahme',
    scenario: SCENARIO,
    question: 'cb) Machen Sie einen Vorschlag, wie der ungefilterte Netzwerkverkehr unterbunden werden kann.',
    maxPoints: 3,
    modelSolution:
      'Mögliche Vorschläge:\n– Dual-Stack (d. h. den Parallelbetrieb von IPv4 und IPv6) deaktivieren\n– IPv6 in der Netzwerkkonfiguration der verwendeten Clients deaktivieren\n– Aktivierung von IPv6 im VPN und im Unternehmensbereich\n– Verwendung spezieller VPN-Clients, die IPv6 VPN Breakouts verhindern\n\nWeitere Lösungen möglich.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },

  // 4. Aufgabe (29 Punkte) — DNS
  {
    id: 'ap2-si-t2-2023-sommer-q4-aa',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'DNS-Aufgaben',
    scenario: SCENARIO,
    question: '4. Aufgabe (29 Punkte)\n\nDer Provider der Fahrguth GmbH hat Änderungen am DNS-Server vorgenommen.\n\naa) Erläutern Sie, welche wesentlichen Aufgaben der DNS-Dienst im Internet übernimmt.',
    maxPoints: 2,
    modelSolution:
      'Mithilfe des Domain Name Systems (DNS) werden Hostnamen / URLs in IP-Adressen umgewandelt und umgekehrt.\n\nWeiterführende Information: Ein beispielhafter Befehl, um die Namensauflösung auszuprobieren, wäre z. B. nslookup.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-ab',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'DNS-Weiterleitung',
    scenario: SCENARIO,
    question: 'ab) Im lokalen DNS-Dienst ist eine Weiterleitung auf einen DNS-Server des Providers eingetragen.\n\nErläutern Sie, warum diese Weiterleitung sinnvoll ist.',
    maxPoints: 3,
    modelSolution:
      'Die Weiterleitung ist sinnvoll, da der lokale DNS-Dienst die Anfrage somit nicht selbst iterativ auflösen muss. Durch die Weiterleitung an einen DNS-Server des Providers kann dieser bzw. dessen Cache abgefragt werden, hierdurch kann die Abfrage schneller bearbeitet werden.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-ac',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'ac',
    topic: 'Iterative DNS-Auflösung',
    scenario: SCENARIO,
    question: 'ac) Erläutern Sie anhand der beispielhaften Anfrage nach www.ihk.de, wie der Nameserver des Providers die Anfrage auflöst, wenn dort keine Weiterleitung eingetragen ist und der Eintrag dort auch nicht im Cache vorhanden ist.',
    maxPoints: 6,
    modelSolution:
      'Die Anfrage wird iterativ bearbeitet.\n1. Abfrage des Root-Servers (.), wer für die DE-Zone (.de) zuständig ist.\n2. Abfrage des .de Servers, wer für ihk.de zuständig ist.\n3. Von dort wird die IP-Adresse zu ihk.de übermittelt.\n\nWeiterführende Information: Der hierarchische Aufbau von DNS gliedert sich von der Root-Zone (.) über die Top-Level-Domains (z. B. .com, .de, .org) bis hin zu den einzelnen Domains (z. B. ihk.de).',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-ba',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'DNS-Einträge / Mailserver',
    scenario: SCENARIO,
    referenceText:
      'b) Seit den Änderungen am DNS-Server kommt es zu Störungen in der Funktion. Um die Probleme mit dem DNS-System zu lokalisieren, lassen Sie sich die folgende Tabelle mit den DNS-Einträgen des Servers ausgeben:\nRecordname — Record-Typ — Ziel\nwww.fahrguth.gmbh — A — 217.70.165.122\nfahrguth.gmbh — A — 217.70.165.122\nfahrguth.gmbh — MX — mail1.fahrguth.gmbh\nfahrguth.gmbh — MX — mail2.fahrguth.gmbh\nfahrguth.gmbh — NS — ns2.fahrguth.gmbh\nfahrguth.gmbh — NS — ns1.fahrguth.gmbh\nfahrguth.gmbh — SOA — ns1.fahrguth.gmbh. hostmaster.fahrguth.gmbh. 2021060100 86400 7200 3600000 900\nfahrguth.gmbh — TXT — "v=spf1 a mx -all"\nns1.fahrguth.gmbh — A — 217.70.165.140\nns2.fahrguth.gmbh — A — 217.70.165.140',
    question: 'ba) Erläutern Sie mithilfe der Tabelle, warum der E-Mail-Server des Unternehmens aktuell keine externen E-Mails empfangen kann.',
    maxPoints: 3,
    modelSolution:
      'Es fehlt ein A-Eintrag (Adress-Eintrag) der beiden Mail-Server (mail1.fahrguth.gmbh und mail2.fahrguth.gmbh sind zwar als MX-Ziele eingetragen, besitzen aber keinen eigenen A-Eintrag, der sie auf eine IP-Adresse auflöst).\n\nWeiterführende Informationen:\nMX-Einträge: Definiert die Priorität der Mailserver.\nNS-Einträge: Legt den Nameserver einer Domain fest.\nSOA-Einträge: Speichert wichtige Informationen einer Domain, z. B. die E-Mail-Adresse des Admins oder wichtige Zeitstempel.\nTXT-Einträge: Frei wählbarer Text, wird auch genutzt, um SPF-Einträge zu erstellen. Bei SPF handelt es sich um ein Verfahren zur Abwehr von Spam, es soll insbesondere das Fälschen von Absenderadressen einer E-Mail verhindern.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-bb',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'SPF-Eintrag',
    scenario: SCENARIO,
    referenceText:
      'bb) Die Fahrguth GmbH versendet wöchentliche Newsletter über einen externen Anbieter (Mailserver: mail.newsletterversand.de) mit der Absenderadresse newsletter@fahrguth.gmbh. Seit der Änderung erhalten einige Kunden den Newsletter nicht mehr.\n\nEin Mitarbeiter des Newsletter-Versenders teilt Ihnen mit, dass Ihr SPF-Eintrag im DNS-System vermutlich unvollständig ist.\n\nAuszug (Wikipedia): "The Simple Mail Transfer Protocol permits any computer to send email claiming to be from any source address. This is exploited by spammers and scammers who often use forged email addresses, making it more difficult to trace a message back to its source, and easy for spammers to hide their identity in order to avoid responsibility. It is also used in phishing techniques, where users can be duped into disclosing private information in response to an email purportedly sent by an organization such as a bank.\n\nSPF allows the owner of an Internet domain to specify which computers are authorized to send mail with envelope-from addresses in that domain, using Domain Name System (DNS) records. Receivers verifying the SPF information in TXT records may reject messages from unauthorized sources before receiving the body of the message."',
    question: 'Erläutern Sie anhand des Textes, welche Funktion SPF wahrnimmt und warum bei einigen Kunden der Newsletter nicht zugestellt wird.',
    maxPoints: 5,
    modelSolution:
      'Der gewünschte Absender newsletter@fahrguth.gmbh kann nicht verwendet werden, da der SPF-Eintrag ("v=spf1 a mx -all") dies aktuell noch nicht zulässt (der externe Mailserver mail.newsletterversand.de ist nicht als autorisierter Absender gelistet). Der Eintrag müsste geändert werden, sodass es dem Anbieter erlaubt wird, E-Mails mit der Domain fahrguth.gmbh als Absender zu versenden.',
    answerStatus: 'confirmed',
    sourcePage: 13,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-c',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'c',
    topic: 'DNS-Spoofing',
    scenario: SCENARIO,
    question:
      'c) Bei Kunden der Fahrguth GmbH wurde der Aufruf der Seite http://www.fahrguth.gmbh mittels DNS ungewollt auf einen Server mit einer gefälschten Webseite umgeleitet.\n\nBeschreiben Sie eine Angriffsmethode, um den Datenverkehr auf die gefälschte Webseite umzuleiten.',
    maxPoints: 4,
    modelSolution:
      'DNS-Spoofing bzw. DNS Cache Poisoning: Hierbei werden Sicherheitslücken des DNS-Servers ausgenutzt, um fehlerhafte Einträge in den Cache einzufügen bzw. bereits bestehende Einträge abzuändern.\n\nDNS Injection: Hierbei wird ein Man-in-the-Middle-Angriff durch einen Netzbetreiber durchgeführt, per DNS-Spoofing werden anschließend gefälschte DNS-Antworten gesendet.\n\nDNS-Hijacking/-Redirection: Die Namensauflösung via DNS wird umgangen, indem Malware eingesetzt wird, die die Konfiguration der Clients so abändert, dass ein DNS-Server der Angreifer für Anfragen genutzt wird.\n\nWeitere Lösungen sind möglich.',
    answerStatus: 'confirmed',
    sourcePage: 13,
  },
  {
    id: 'ap2-si-t2-2023-sommer-q4-d',
    examId: 'ap2-si-t2-2023-sommer',
    questionNumber: 4,
    subPart: 'd',
    topic: 'DNSSEC',
    scenario: SCENARIO,
    question:
      'd) Um sicherzustellen, dass DNS-Nachrichten nicht manipuliert wurden, wurde auf allen Root-Servern DNSSEC eingeführt. Ein validierender DNSSEC-Server kann empfangene DNS-Nachrichten auf Authentizität und Integrität überprüfen.\n\nErklären Sie die beiden Begriffe Authentizität und Integrität in Bezug auf DNSSEC.',
    maxPoints: 6,
    modelSolution:
      'Authentizität: Die Echtheit der DNS-Antworten wird sichergestellt, indem eine digitale Signatur bzw. ein digitales Zertifikat verwendet wird.\n\nIntegrität: Die Vollständigkeit und Unveränderbarkeit der DNS-Antworten wird sichergestellt, indem Hash-Werte des Inhaltes gebildet werden, welche anschließend vom Empfänger überprüft werden.',
    answerStatus: 'confirmed',
    sourcePage: 14,
  },
]
