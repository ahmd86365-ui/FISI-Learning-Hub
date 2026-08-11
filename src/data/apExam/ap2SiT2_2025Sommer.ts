import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2025SommerMeta: ApExamMeta = {
  id: 'ap2-si-t2-2025-sommer',
  area: 'AP2_SI_T2',
  year: 2025,
  period: 'Sommer',
  label: 'Sommer 2025',
  examDate: 'Mittwoch, 7. Mai 2025',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_25s.pdf',
  sourceSolutionPdf: 'Loe_SI_AP2_T2_25s.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker (Systemintegration) bei der 1234-IT-Systemhaus GmbH. Dabei handelt es sich um einen mittelständischen IT-Dienstleister, der neben der Zentrale mehrere bundesweit verteilte Standorte hat.\n\nAktuell betreuen Sie für Ihren Arbeitgeber die „IHK-Wear GmbH", ein Unternehmen aus der Modebranche. Der Kunde betreibt eine Firmenzentrale in Norddeutschland und in jeder größeren Stadt mindestens eine Einzelhandels-Filiale, in der die Mode verkauft wird. Der Kunde plant aktuell einige Änderungen an der IT der Firmenzentrale sowie die Eröffnung einer neuen Filiale.\n\nBearbeiten Sie in diesem Zusammenhang die folgenden vier Aufgaben:\n1. Aufgabe: Das bestehende Netzwerk analysieren\n2. Aufgabe: Anbindung an das Internet realisieren\n3. Aufgabe: Die Internetanbindung absichern\n4. Aufgabe: Geräte drahtlos in das Netzwerk einbinden'

const ANLAGE1 =
  'Anlage 1: Netzwerkskizze der IHK-Wear GmbH (Zentrale) — vier redundant vermaschte Multilayer-Switches (MLS1–MLS4: MLS1–MLS4 über Portchannel 3, MLS2–MLS3 über Portchannel 1, MLS3–MLS4 über Portchannel 2, MLS1–MLS2 blockiert ⊘). Angeschlossene Endgeräte je VLAN: VLAN 11 „Technik" (192.168.11.0/26) — S1, PC11, PC12; VLAN 12 „Vertrieb" (192.168.12.128/25) — S2, PC21, PC22; VLAN 66 „Management" (192.168.66.8/29) — Laptop1; VLAN 1 „default" (192.168.1.0/24) — kein Endgerät dargestellt. Router R1 verbindet die Zentrale (eth1) mit dem Internet (eth0, 203.0.113.1/30) über den ISP der IHK-Wear GmbH; über das Internet ist eine weitere Filiale N mit eigenem Router R2 erreichbar.'

export const ap2SiT2_2025SommerQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (22 Punkte)
  {
    id: 'ap2-si-t2-2025-sommer-q1-aa',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'VLAN / Subnetting',
    scenario: SCENARIO,
    referenceText:
      ANLAGE1 +
      '\n\nAusgangstabelle (VLAN 1 bereits als Beispiel ausgefüllt):\nVLAN ID | Name | Subnetz | Maske (dezimal) | Max. nutzbare IP-Adressen\n1 | default | 192.168.1.0/24 | 255.255.255.0 | 254\n11 | Technik | 192.168.11.0/26 | ? | ?\n12 | Vertrieb | 192.168.12.128/25 | ? | ?\n66 | Management | 192.168.66.8/29 | ? | ?\n— | Filial-Netze | 172.16.200.0/22 | ? | ?',
    question:
      '1. Aufgabe (22 Punkte)\n\na) Das Netzwerk der IHK-Wear GmbH besteht aus der Firmenzentrale und den Filialen. Das Netzwerk in der Zentrale ist in VLANs und Subnetze aufgeteilt, wie im Netzwerkplan dargestellt.\nFür alle Filialen wird der Netzbereich 172.16.200.0/22 verwendet. Die Filialen sollen nach der Modernisierung des Netzwerks Zugang zu den Servern in der Zentrale über ein VPN erhalten.\n\naa) Sie verschaffen sich zuerst einen Überblick über die Adressbereiche der Subnetze.\n\nTragen Sie die zugehörigen dezimalen Subnetzmasken sowie die Anzahl der maximal nutzbaren IP-Adressen in die Tabelle ein.',
    maxPoints: 4,
    modelSolution:
      'VLAN ID | Name | Subnetz | Maske (dezimal) | Max. nutzbare IP-Adressen\n1 | default | 192.168.1.0/24 | 255.255.255.0 | 254\n11 | Technik | 192.168.11.0/26 | 255.255.255.192 | 62\n12 | Vertrieb | 192.168.12.128/25 | 255.255.255.128 | 126\n66 | Management | 192.168.66.8/29 | 255.255.255.248 | 6\n— | Filial-Netze | 172.16.200.0/22 | 255.255.252.0 | 1022',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q1-ab',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'VLAN / Gateway-Adressen',
    scenario: SCENARIO,
    referenceText:
      'Ausgangstabelle:\nVLAN ID | Name | Subnetz | IP-Adresse des Gateways\n1 | default | 192.168.1.0/24 | ?\n11 | Technik | 192.168.11.0/26 | ?\n12 | Vertrieb | 192.168.12.128/25 | ?\n66 | Management | 192.168.66.8/29 | ?',
    question:
      'ab) Die Schnittstellen auf R1 werden als Gateway für die Subnetze konfiguriert. Dafür soll jeweils die letzte IP-Adresse aus dem Subnetz verwendet werden.\n\nTragen Sie die IP-Adressen der Gateways in die Tabelle ein.',
    maxPoints: 4,
    modelSolution:
      'VLAN ID | Name | Subnetz | IP-Adresse des Gateways\n1 | default | 192.168.1.0/24 | 192.168.1.254\n11 | Technik | 192.168.11.0/26 | 192.168.11.62\n12 | Vertrieb | 192.168.12.128/25 | 192.168.12.254\n66 | Management | 192.168.66.8/29 | 192.168.66.14\n\nWeiterführende Informationen:\nVLAN 1 „default": Host Adress Range 192.168.1.1–192.168.1.254, Broadcast Address 192.168.1.255\nVLAN 11 „Technik": Host Adress Range 192.168.11.1–192.168.11.62, Broadcast Address 192.168.11.63\nVLAN 12 „Vertrieb": Host Adress Range 192.168.12.129–192.168.12.254, Broadcast Address 192.168.12.255\nVLAN 66 „Management": Host Adress Range 192.168.66.9–192.168.66.14, Broadcast Address 192.168.66.15',
    answerStatus: 'confirmed',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q1-ac',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'ac',
    topic: 'Subinterfaces',
    scenario: SCENARIO,
    referenceText:
      'Übersichtstabelle (bereits ausgefüllt):\nVLAN ID | Name | Subnetz | Schnittstelle auf R1\n11 | Technik | 192.168.11.0/26 | eth1.11 (Subinterface)\n12 | Vertrieb | 192.168.12.128/25 | eth1.12 (Subinterface)\n66 | Management | 192.168.66.8/29 | eth1.66 (Subinterface)',
    question:
      'ac) Für die Netzwerkplanung sollen die Gateway-Adressen der Subnetze auf den Schnittstellen von R1 entsprechend der VLANs richtig zugeordnet werden.\n\nErläutern Sie, weshalb als Schnittstelle in der Übersichtstabelle jeweils ein Subinterface angegeben ist und was man darunter versteht.',
    maxPoints: 4,
    modelSolution:
      'Für jedes VLAN und das zugehörige Subnetz wird ein Gateway benötigt. Da der Router nur über zwei physische Schnittstellen (eth0 und eth1) verfügt, werden auf der LAN-seitigen Schnittstelle Subinterfaces eingerichtet, um mehrere VLANs über eine einzige Verbindung zu verwalten. Ein Subinterface ist eine virtuelle, logische Schnittstelle, die durch das Aufteilen einer physischen Schnittstelle entsteht und jeweils einem bestimmten VLAN zugeordnet wird.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q1-ba',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'Link Aggregation',
    scenario: SCENARIO,
    question:
      'b) In der weiteren Planung wird darüber diskutiert, ob auf den Switchen „link aggregation" zum Einsatz kommen sollte.\n\nba) Erläutern Sie den Begriff „link aggregation" und nennen Sie zwei Vorteile gegenüber herkömmlichen Verbindungen zwischen Switchen.',
    maxPoints: 4,
    modelSolution:
      'Link Aggregation (auch „Port Trunking" genannt) ist ein Standardverfahren zur parallelen Bündelung mehrerer physischer Netzwerkverbindungen zu einer einzigen logischen Verbindung. Dadurch können die Ethernet-Frames auf alle beteiligten Leitungen verteilt werden.\n\nVorteile:\n– Erhöhter Datendurchsatz\n– Verbesserte Ausfallsicherheit\n– Lastverteilung\n– Verbesserte Skalierbarkeit\n– …',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q1-bb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'Spanning Tree',
    scenario: SCENARIO,
    referenceText: ANLAGE1,
    question:
      'bb) Erläutern Sie, warum auf dem Switch MLS1 der Port mit der Verbindung zum Switch MLS2 geblockt ist (im Netzwerkplan Zeichen ⊘), obwohl er prinzipiell funktionsfähig ist.',
    maxPoints: 4,
    modelSolution:
      'Um Netzwerkschleifen zu verhindern, wurde der Port blockiert. Das kann beispielsweise durch das Spanning Tree Protocol oder einen Admin erfolgt sein, um das Netzwerk stabil zu halten und Broadcast-Stürme zu vermeiden.\n\nEin Broadcast-Sturm entsteht, wenn sich Broadcast-Pakete aufgrund einer Netzwerkschleife ständig wiederholen und das Netzwerk überlasten. In Netzwerken mit redundanten Verbindungen zwischen Switches können diese Pakete über mehrere Pfade gleichzeitig gesendet werden, was die Überlastung verstärkt.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q1-c',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 1,
    subPart: 'c',
    topic: 'Routing',
    scenario: SCENARIO,
    referenceText:
      'Routingtabelle von R1 (unvollständig):\nNetzwerk | Schnittstelle | Next hop\n203.0.113.0/30 | eth0 | -\n192.168.11.0/26 | eth1.11 | -\n192.168.12.128/25 | eth1.12 | -\n192.168.66.8/29 | eth1.66 | -\n(fehlender Eintrag zu ergänzen)',
    question:
      'c) Nachdem der Router R1 eingerichtet wurde, können keine Verbindungen zu Adressen im Internet hergestellt werden.\n\nErgänzen Sie den fehlenden Eintrag in der Routingtabelle von R1, sodass Verbindungen zum Internet möglich werden.',
    maxPoints: 2,
    modelSolution:
      'Netzwerk: 0.0.0.0/0 — Schnittstelle: eth0 — Next hop: 203.0.113.1\n\nDie Standardroute 0.0.0.0/0 steht für „alle anderen Ziele" und leitet den Verkehr über die Schnittstelle eth0 zum Next Hop 203.0.113.1, also dem Gateway in Richtung Internet.',
    answerStatus: 'confirmed',
    sourcePage: 5,
  },

  // 2. Aufgabe (29 Punkte)
  {
    id: 'ap2-si-t2-2025-sommer-q2-aa',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'DSL-Anschluss',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (29 Punkte)\n\na) Die IHK-Wear GmbH plant aktuell den Aufbau eines neuen Flagship-Stores in Berlin. Sie sind für die Anbindung dieser Filiale an das Firmennetz und die IT-Ausstattung der neuen Filiale zuständig.\n\naa) Ihr Internet-Anbieter hat Ihnen ein Angebot für die Anbindung der neuen Filiale mit einem „Geschäftskunden DSL mit 250/40 Mbit/s" vorgelegt.\n\nNennen Sie drei Aspekte, die einen DSL-Anschluss für Geschäftskunden von einem Privatkunden-Anschluss unterscheiden können.',
    maxPoints: 3,
    modelSolution:
      'Mögliche Aspekte:\n– Statische IP-Adresse\n– Bessere Service-Level-Agreements (SLAs)\n– Höhere / garantierte Verfügbarkeit\n– Priorisierter Support durch z. B. eine Geschäftskunden-Hotline\n– Gewerbliche Nutzung erlaubt\n– …',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-ab',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'GPON / Shared Medium',
    scenario: SCENARIO,
    question:
      'ab) Alternativ bietet Ihnen Ihr Internetanbieter eine „Glasfaseranbindung (GPON)" mit der gleichen Geschwindigkeit an. Ihr Anbieter weist darauf hin, dass es sich dabei um ein „shared medium" handelt.\n\nErläutern Sie, was man darunter versteht und warum dies für die Filiale der IHK-Wear GmbH ungünstig ist.',
    maxPoints: 3,
    modelSolution:
      'Ein „shared medium" bedeutet, dass sich mehrere Teilnehmer in einem Netzabschnitt die verfügbare Bandbreite teilen. Bei GPON (Gigabit Passive Optical Network) teilen sich mehrere Kunden eine gemeinsame Glasfaserleitung bis zum Verteiler. Das ist für die Filiale der IHK-Wear GmbH ungünstig, da tatsächlich verfügbare Geschwindigkeit stark schwanken kann.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-ac',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'ac',
    topic: 'LTE-Anbindung',
    scenario: SCENARIO,
    question:
      'ac) Der geplante Eröffnungszeitpunkt der Filiale liegt vor dem Termin, den Ihr Anbieter für die beiden Anschlussarten realisieren kann. Zur Überbrückung bietet Ihnen der Anbieter einen „LTE-Router mit 50/10 Mbit/s" an.\n\nErläutern Sie zwei Aspekte, warum dies für die Filiale keine dauerhafte Lösung ist.',
    maxPoints: 4,
    modelSolution:
      'Es handelt sich hierbei erneut um eine Lösung mit einem shared medium, die Geschwindigkeit und Stabilität hängt sehr von der Netzabdeckung und der Auslastung des Mobilfunknetzes ab.\n\nBei einer LTE-Verbindung erhält der Kunde meist nur eine private IP-Adresse, da der Anbieter Carrier Grade NAT (CGN) einsetzt. Dadurch ist der Anschluss von außen nicht direkt erreichbar, was z. B. VPNs oder Serverdienste erschwert.\n\nWeitere Aspekte die für eine Erläuterung genutzt werden könnten:\n– Geringerer Download / Upload (50/10 Mbit/s)\n– Erhöhte Latenz im Vergleich zu DSL / Glasfaser\n– Eingeschränkter Funktionsumfang des LTE-Routers\n– …',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-ba',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'ba',
    topic: 'NAT / PAT',
    scenario: SCENARIO,
    question:
      'b) Sie haben sich für das Angebot aus Aufgabe aa („Geschäftskunden DSL mit 250/40 Mbit/s") entschieden.\n\nba) Nach der Bereitstellung des Anschlusses müssen Sie diesen in Betrieb nehmen. Sie erhalten für den Anschluss von Ihrem Anbieter eine öffentliche, feste IPv4-Adresse.\n\nErläutern Sie, wie Sie dennoch in der Lage sind, die vielen Geräte in der Filiale über diese eine IP-Adresse mit dem Internet zu verbinden.',
    maxPoints: 4,
    modelSolution:
      'Trotz nur einer festen, öffentlichen IPv4-Adresse können alle Geräte in der Filiale über das Internet kommunizieren, da sie intern private IP-Adressen nutzen. Der Router verwendet NAT (Network Address Translation) und PAT (Port Address Translation), um bei ausgehenden Datenpaketen die Quell-IP-Adresse und den Quell-Port in die öffentliche IP-Adresse und einen eindeutigen Port umzuwandeln. So kann er die Antworten den internen Geräten zuordnen und ermöglicht mehreren Geräten gleichzeitig den Zugang zum Internet.',
    answerStatus: 'confirmed',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-bb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'bb',
    topic: 'IPv6-Subnetting',
    scenario: SCENARIO,
    referenceText:
      'Öffentliches IPv6-Präfix des Anbieters: 2001:db8:9876::/56. Aufteilung in Subnetze der Größe /64.\nAuszufüllende Tabelle:\nAnzahl Subnetze | ?\n1. Subnetz | ?\n2. Subnetz | ?\nvorletztes Subnetz | ?\nletztes Subnetz | ?',
    question:
      'bb) Zusätzlich erhalten Sie von Ihrem Anbieter ein öffentliches IPv6-Präfix:\n2001:db8:9876:: /56\n\nSie wollen dieses Präfix für verschiedene Zwecke nutzen, daher teilen Sie diesen in Subnetze der Größe /64 auf.\nErmitteln Sie, wie viele Subnetze entstehen und wie das erste, das zweite, das vorletzte und das letzte Subnetz lautet.',
    maxPoints: 5,
    modelSolution:
      'Anzahl Subnetze: 256\n1. Subnetz: 2001:db8:9876::/64\n2. Subnetz: 2001:db8:9876:1::/64\nvorletztes Subnetz: 2001:db8:9876:fe::/64\nletztes Subnetz: 2001:db8:9876:ff::/64\n\nErläuterung der Vorgehensweise: Es ist ein IPv6-Präfix mit der Länge /56 gegeben. Es sollen kleinere Subnetze mit der Größe /64 gebildet werden. Die Präfixlänge wird also um 8 Bits vergrößert. Diese 8 Bits werden genutzt, um verschiedene Subnetze zu unterscheiden, wodurch sich 2^8 (256) Subnetze ergeben. Die Subnetznummer wird in das vierte 16-Bit-Segment der Adresse eingefügt, während die ersten 56 Bits unverändert bleiben. So entstehen Subnetze von 2001:db8:9876:0000::/64 bis 2001:db8:9876:00ff::/64, wobei jedes Subnetz durch den Wert im vierten Block eindeutig ist.\n\n(Vollständig ungekürzte Schreibweise: 1. Subnetz 2001:0db8:9876:0000:0000:0000:0000:0000/64; 2. Subnetz 2001:0db8:9876:0001:0000:0000:0000:0000/64; vorletztes Subnetz 2001:0db8:9876:00fe:0000:0000:0000:0000/64; letztes Subnetz 2001:0db8:9876:00ff:0000:0000:0000:0000/64)',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-bc',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'bc',
    topic: 'DMZ',
    scenario: SCENARIO,
    question:
      'bc) Sie wollen in der Filiale eines der Subnetze für Server verwenden, die in einer DMZ untergebracht werden sollen.\n\nNennen Sie zwei Eigenschaften einer DMZ.',
    maxPoints: 2,
    modelSolution:
      'Eigenschaften einer DMZ:\n– Separates Netzwerk zwischen internem Netzwerk und Internet\n– Strenge Zugriffsbeschränkungen zwischen DMZ und internem Netzwerk\n– Schützt das interne Netzwerk vor direkten Zugriffen von außen\n– Ermöglicht sichere Bereitstellung von Diensten für externe Nutzer ohne vollständigen Zugriff auf interne Systeme\n– Wird durch Router/Firewall vom LAN getrennt\n– …',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-bd',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'bd',
    topic: 'IPv6-Adressraum',
    scenario: SCENARIO,
    question:
      'bd) Geben Sie an, wie viele IP-Adressen in einer DMZ der Größe /64-Subnetz zur Verfügung stehen.',
    maxPoints: 2,
    modelSolution: 'In einem /64 Netz existieren 2^64 IP-Adressen.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-ca',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'ca',
    topic: 'DNS rekursiv',
    scenario: SCENARIO,
    question:
      'c) Um Ihren Clients den Zugriff auf das Internet zu ermöglichen, konfigurieren Sie den Router der Filiale so, dass er für die Filiale als DNS-Server dient. Sie testen von einem Client aus die Erreichbarkeit der Seite www.ihk.de.\n\nca) Beschreiben Sie, wie Ihr Client die Anfrage nach www.ihk.de rekursiv aufgelöst hat.',
    maxPoints: 1,
    modelSolution:
      'Der Client sendet die Anfrage nach www.ihk.de an den Router oder einen anderen eingetragenen DNS-Server. Dieser übernimmt die rekursive Auflösung, bis die IP-Adresse von www.ihk.de ermittelt wurde und diese an den Client zurückgegeben werden kann.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-cb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'cb',
    topic: 'DNS iterativ',
    scenario: SCENARIO,
    question:
      'cb) Ihr Router löst die Anfrage nach www.ihk.de iterativ auf.\n\nErläutern Sie die einzelnen Schritte, die er dazu durchführt.',
    maxPoints: 3,
    modelSolution:
      'Der Router fragt zuerst die Root-Server nach den zuständigen DNS-Servern für die Top-Level-Domain .de ab. Anschließend erkundigt er sich bei den .de-Servern nach den Nameservern für die Domain ihk.de. Abschließend fragt er bei den Servern von ihk.de die IP-Adresse von www.ihk.de ab und gibt diese Antwort an den Client zurück.',
    answerStatus: 'confirmed',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q2-cc',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 2,
    subPart: 'cc',
    topic: 'DNS / Sicherheit',
    scenario: SCENARIO,
    question:
      'cc) Erläutern Sie, weshalb Sie Ihren Clients in der Filiale nicht gestatten sollten, einen öffentlichen DNS-Server, wie z. B. 9.9.9.9, für die Namensauflösung zu verwenden.',
    maxPoints: 2,
    modelSolution:
      'Wenn Clients einen öffentlichen DNS-Server verwenden, können interne Domain-Namen nicht mehr aufgelöst werden. Dadurch wären interne Server nur noch über ihre IP-Adressen erreichbar.\n\nWeitere mögliche Gründe, die gegen öffentliche DNS-Server sprechen:\n– Öffentliche DNS-Server können Manipulationen oder DNS-Spoofing ausgesetzt sein, was zu Phishing oder Malware führen kann.\n– Bei Problemen ist es schwieriger, diese zu analysieren, wenn Clients unterschiedliche öffentliche DNS-Server nutzen.\n– …',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },

  // 3. Aufgabe (29 Punkte)
  {
    id: 'ap2-si-t2-2025-sommer-q3-aa',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'Stateful Packet Inspection',
    scenario: SCENARIO,
    question:
      '3. Aufgabe (29 Punkte)\n\nDer Internetzugang der Mitarbeiter in der neuen Filiale der IHK-Wear GmbH soll unter anderem durch eine sogenannte Stateful Packet Inspection Firewall (SPI) abgesichert werden.\n\na) Sie unterstützen das Netzwerkteam bei der Einrichtung der Firewall und sollen hierzu einige Vorbereitungen treffen.\n\naa) Erläutern Sie, was eine „Stateful Packet Inspection" Firewall von einem reinen Paketfilter unterscheidet.',
    maxPoints: 4,
    modelSolution:
      'Eine Stateful Packet Inspection (SPI) Firewall erkennt und speichert zugelassene Datenströme (sogenannte „States") z. B. für TCP-, UDP- oder ICMP-Verbindungen. Antwortpakete auf bereits erlaubte Verbindungen werden automatisch erkannt und ohne erneute Prüfung zugelassen. Ein reiner Paketfilter kann solche Antworten nicht automatisch zuordnen und behandelt jedes Paket einzeln, ohne den Verbindungszusammenhang zu kennen.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q3-ab',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'Firewall-Regeln',
    scenario: SCENARIO,
    referenceText:
      'Bislang wurden folgende Internet-Anwendungen identifiziert, welche durch die Firewall ermöglicht werden sollen:\n– HTTPS\n– SMTP/IMAPS\n– Externe Datenbankanwendung, welche auf Port 4711 reagiert\n– Interner Webserver muss von außen über eine gesicherte HTTP-Verbindung unter IP 192.0.2.64 erreichbar sein\nAllen weiteren Datenverkehr soll die Firewall unterbinden.\n\nAuszufüllende Regeltabelle (teilweise vorgegeben):\nRegel | Protokoll | Quell-IP | Ziel-IP | Quell-Port | Ziel-Port | Richtung\nallow | TCP | any | any | any | ? | out\nallow | TCP | ? | ? | any | 587 (smtp) | out\nallow | ? | any | any | ? | 993 (imaps) | out\n? | TCP | any | any | any | 4711 | out\nallow | TCP | any | 192.0.2.64/32 | any | ? | in\n? | any | any | any | any | any | out\n? | any | any | any | any | any | in',
    question:
      'ab) Vervollständigen Sie die Regeln für die Stateful Packet Inspection Firewall in folgender Tabelle.',
    maxPoints: 9,
    modelSolution:
      'Regel | Protokoll | Quell-IP | Ziel-IP | Quell-Port | Ziel-Port | Richtung\n1. allow | TCP | any | any | any | 443 (https) | out\n2. allow | TCP | any | any | any | 587 (smtp) | out\n3. allow | TCP | any | any | any | 993 (imaps) | out\n4. allow | TCP | any | any | any | 4711 | out\n5. allow | TCP | any | 192.0.2.64/32 | any | 443 (https) | in\n6. deny | any | any | any | any | any | out\n7. deny | any | any | any | any | any | in\n\nZeile 1: Ausgehender HTTPS-Traffic soll gemäß Aufgabenstellung ermöglicht werden, daher ist 443 als Ziel-Port zu ergänzen.\nZeile 2, Zeile 3: SMTP- und IMAPS-Traffic ist gemäß Aufgabenstellung gleichermaßen freizugeben, daher können die Angaben zur Quell-IP, Ziel-IP sowie zum Quell-Port jeweilig von den beiden Zeilen übernommen werden. UDP wird bei E-Mail-Protokollen nicht verwendet, daher ist TCP anzugeben.\nZeile 4: Die externe Datenbankanwendung soll gemäß Aufgabenstellung ermöglicht werden, demnach ist die Regel als allow zu erfassen.\nZeile 5: Der interne Webserver soll über eine gesicherte http-Verbindung erreichbar sein, daher ist HTTPS bzw. Port 443 zu verwenden. HTTP würde keine gesicherte Verbindungsform darstellen.\nZeile 6, Zeile 7: Jeglicher weitere Datenverkehr soll unterbunden werden, daher sind diese Regeln mit deny zu erfassen. Ähnliche Schlüsselwörter wie z. B. reject oder forbid wären ebenfalls zulässig.',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q3-ac',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 3,
    subPart: 'ac',
    topic: 'Next Generation Firewall',
    scenario: SCENARIO,
    question:
      'ac) Für die Absicherung des Netzwerks müssen Sie eine moderne Firewall beschaffen. Sie erwägen, eine „Next Generation Firewall" anzuschaffen.\n\nErläutern Sie zwei Vorteile, die eine solche Firewall im Vergleich zu einem klassischen Paketfilter bietet.',
    maxPoints: 4,
    modelSolution:
      'Zu den Vorteilen zählt zum Beispiel die Intrusion Detection / Intrusion Prevention. Hierbei werden externe Angriffe automatisch erkannt und abgewehrt (z. B. SYN Flood).\n\nAußerdem bieten Next Generation Firewalls oft Geolocation-Funktionen, um IP-Adressen geografisch zuzuordnen. So lässt sich der Zugriff länderbezogen einschränken und auf relevante Regionen beschränken.\n\nWeitere mögliche Vorteile, die für eine Erläuterung genutzt werden könnten:\n– Anti-Virus / Anti-SPAM-Filter Mail-Relay\n– Verhaltensanalyse\n– QoS-Management\n– Erweiterte Schutzfunktionalitäten gegen Advanced Persistent Threat Angriffe (APT)\n– Deep Packet Inspection\n– …',
    answerStatus: 'confirmed',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q3-ba',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'VPN / PKI',
    scenario: SCENARIO,
    question:
      'b) Für die geplanten VPN-Tunnel zwischen den Standorten stehen derzeit zwei alternative Software-Produkte zur Auswahl:\nVPN-Software 1, welche Zertifikate nach X.509 einsetzt, um beide Seiten der Verbindung gegenseitig zu authentifizieren.\noder\nVPN-Software 2, welche zur Authentifizierung eigene Public-Keys generiert, die durch die Administratoren auf den jeweiligen Geräten hinterlegt werden müssen.\n\nba) Wählen Sie eines der beiden genannten Produkte aus und begründen Sie Ihre Entscheidung.',
    maxPoints: 4,
    modelSolution:
      'Bei nachvollziehbarer Begründung können beide Produkte gewählt werden.\n\nBegründung für VPN-Software 1 (mit X.509-Zertifikaten): Bietet eine zentrale Verwaltung der Authentifizierung durch den Einsatz einer Zertifizierungsstelle (CA). Zertifikate können bei Bedarf einfach widerrufen oder erneuert werden, was den Verwaltungsaufwand langfristig reduziert.\n\nBegründung für VPN-Software 2 (mit manuell hinterlegten Public-Keys): Einfacher in der initialen Einrichtung, da keine PKI-Infrastruktur benötigt wird. Der manuelle Austausch und die Verwaltung der Schlüssel erfordern aber eine höhere Disziplin seitens der Administratoren und ist allgemein fehleranfälliger.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q3-bb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'VPN-Hardware',
    scenario: SCENARIO,
    question:
      'bb) Bei der Auswahl der Hardware für die VPN-Tunnel fallen einige Kriterien auf.\n\nErläutern Sie deren Relevanz in Bezug auf die Funktionalität der Tunnel:\n– hardware-unterstützte Krypto-Algorithmen:\n– Anzahl Netzwerkports:\n– garantierte Firmware-Updates über einen bestimmten Zeitraum:\n– Leistungsaufnahme in Watt:',
    maxPoints: 8,
    modelSolution:
      'Hardware-unterstütze Krypto-Algorithmen: Sehr relevant, erhöht die Performance und Stabilität des Tunnels insbesondere bei hoher Auslastung. Sollten die Algorithmen der Software nicht unterstützt werden, wäre mit deutlichen Performance-Problemen zu rechnen.\n\nAnzahl Netzwerkports: Sehr wichtig um die verschiedenen Netzwerksegmente zu trennen und anzubinden. Muss demnach ausreichend sein für die Anzahl der Verbindungen.\n\nGarantierte Firmware-Updates über einen bestimmten Zeitraum: Reduziert Sicherheitsrisiken und schafft Planungssicherheit, ist daher allgemein sehr wichtig. Kurzfristig allerdings nur wenig relevant für die Funktionalität der VPN-Tunnel.\n\nLeistungsaufnahme in Watt: Keine Relevanz in Bezug auf die Funktionalität der VPN-Tunnel. Nur bzgl. der Energiekosten, Stromversorgung und Kühlung relevant.',
    answerStatus: 'confirmed',
    sourcePage: 9,
  },

  // 4. Aufgabe (20 Punkte)
  {
    id: 'ap2-si-t2-2025-sommer-q4-aa',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'aa',
    topic: 'WLAN / SSID',
    scenario: SCENARIO,
    question:
      '4. Aufgabe (20 Punkte)\n\nSteigende Energiekosten haben die IHK-Wear GmbH dazu veranlasst, Energiedaten für die Räume zu erfassen. Dazu werden neben bereits fest installierten Sensoren nun auch IoT-Geräte eingesetzt, welche die Temperatur und Luftfeuchtigkeit in jedem Raum messen und per Funk übertragen.\n\na) Die neuen IoT-Geräte werden an das WLAN der Firma angebunden.\n\naa) Die neue WLAN-SSID für die IoT-Geräte stellt keinen SSID-Broadcast zur Verfügung.\n\nBeschreiben Sie die Funktionsweise und den Zweck des SSID-Broadcasts.',
    maxPoints: 2,
    modelSolution:
      'Der SSID-Broadcast ist die Funktion, um den Netzwerknamen (SSID) öffentlich auszusenden, damit er in der Liste verfügbarer Netzwerke erscheint. Zweck des Broadcast ist, dass der Netzwerkname nicht manuell eingegeben werden muss.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-ab',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'ab',
    topic: 'WLAN / Authentifizierung',
    scenario: SCENARIO,
    question:
      'ab) Damit die IoT-Geräte in das WLAN integriert werden können, müssen die Authentifizierung und die Vertraulichkeit festgelegt werden.\n\nErläutern Sie die beiden Begriffe in Bezug auf die WLAN-Verbindung.\nAuthentifizierung:\nVertraulichkeit:',
    maxPoints: 4,
    modelSolution:
      'Authentifizierung: Die Identität eines Benutzers oder Geräts wird mithilfe eines Passworts oder Zertifikats überprüft, um sicherzustellen, dass nur autorisierte Nutzer Zugriff auf das Netzwerk erhalten.\n\nVertraulichkeit: Vertraulichkeit bedeutet, dass die übertragenen Daten im WLAN verschlüsselt werden, um diese vor Unbefugten zu schützen.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-ac',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'ac',
    topic: 'WPA',
    scenario: SCENARIO,
    question:
      'ac) Nennen Sie jeweils ein Beispiel, wie WPA (1/2/3) die Authentifizierung bzw. Verschlüsselung realisiert.\nBeispiel für Authentifizierung:\nBeispiel für Verschlüsselung:',
    maxPoints: 2,
    modelSolution:
      'Beispiele für Authentifizierung:\n– Festes Passwort / Pre-Shared Key (PSK)\n– Individueller Zugang durch RADIUS oder Zertifikat\n– Simultaneous Authentication of Equals (SAE, bei WPA3)\n– …\n\nBeispiele für Verschlüsselung:\n– TKIP (Temporal Key Integrity Protocol, bei WPA1)\n– AES (Advanced Encryption Standard, bei WPA2/3)\n– GCMP-256 (Galois/Counter Mode Protocol, bei WPA3)\n– …',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-ba',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'DHCP',
    scenario: SCENARIO,
    question:
      'b) Sobald ein IoT-Gerät eine Verbindung zum WLAN hergestellt hat, versucht es, automatisch eine IP-Adresse vom DHCP-Server zu erhalten.\n\nba) Erläutern Sie, warum der DHCP-Discover als Broadcast erfolgt.',
    maxPoints: 3,
    modelSolution:
      'Der DHCP-Discover erfolgt als Broadcast, da das IoT-Gerät noch keine eigene IP-Adresse besitzt, die Adresse des DHCP-Servers unbekannt ist und es die Anfrage daher an alle Geräte im Netzwerk schicken muss.',
    answerStatus: 'confirmed',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-bb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'Gratuitous ARP',
    scenario: SCENARIO,
    question:
      'bb) Nachdem der DHCP-Vorgang erfolgreich abgeschlossen ist, sendet das IoT-Gerät (bzw. jeder neue Client) sogenannte „Gratuitous ARP-Requests".\n\nErläutern Sie den Sinn dieser ARP-Requests.',
    maxPoints: 3,
    modelSolution:
      'Der Sinn dieses ARP-Requests liegt darin, herauszufinden, ob die vom DHCP-Server vergebene Adresse tatsächlich frei ist.\n\nBeim Gratuitous ARP-Request sendet das IoT-Gerät eine ARP-Anfrage mit der eigenen IP-Adresse als Ziel. Es wird also nachgefragt, wer diese IP-Adresse besitzt, obwohl das IoT-Gerät selbst der Besitzer der Adresse sein will. Antwortet niemand, gilt die Adresse als frei und nutzbar. Antwortet jedoch ein anderes Gerät, liegt eine Adressenkollision vor und das IoT-Gerät muss eine andere IP-Adresse anfordern.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-ca',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'ca',
    topic: 'MQTT',
    scenario: SCENARIO,
    referenceText:
      'Die Datenübertragung der IoT-Geräte erfolgt per MQTT. Verbindungsablauf zwischen IoT-Gerät und Server: Connect → Connect Ack, dann mehrere Publish-Nachrichten vom IoT-Gerät zum Server.',
    question:
      'c) Die Datenübertragung der IoT-Geräte erfolgt per MQTT. Der Verbindungsablauf zwischen einem exemplarischen IoT-Gerät und dem Server ist nachfolgend abgebildet (Connect, Connect Ack, mehrere Publish-Nachrichten).\n\nca) Erläutern Sie, warum das MQTT-Protokoll auf TCP und nicht auf UDP aufsetzen muss.',
    maxPoints: 3,
    modelSolution:
      'MQTT arbeitet mit einem zentralen Broker-Modell, bei dem alle Daten an einen Server (MQTT-Broker) gesendet werden. Das IoT-Gerät baut hierbei eine dauerhafte Verbindung zum Broker auf. Für diese dauerhafte Verbindung sowie das Sicherstellen der Datenübertragung wird ein verbindungsorientiertes Protokoll (TCP) benötigt.\n\nMQTT basiert auf TCP und funktioniert nicht direkt über UDP. Es gibt jedoch Bibliotheken, die UDP verwenden können; das entspricht zwar nicht dem MQTT-Standard, wird aber unter dem Namen „MQTT-SN" (für „MQTT for Sensor Networks") beschrieben.',
    answerStatus: 'confirmed',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2025-sommer-q4-cb',
    examId: 'ap2-si-t2-2025-sommer',
    questionNumber: 4,
    subPart: 'cb',
    topic: 'Bandbreiten-Berechnung',
    scenario: SCENARIO,
    question:
      'cb) Eine einzelne „Publish Message" ist 66 Byte groß und wird periodisch alle 60 Sekunden gesendet. Insgesamt senden zukünftig 500 IoT-Geräte ihre Sensordaten per MQTT an den Server.\nDie WLAN-Bandbreite für diese SSID soll auf lediglich 10 kbit/s begrenzt werden.\n\nBestimmen Sie durch Rechnung, ob die gewählte Bandbreite ausreichend ist. Hinweis: Protokolloverhead muss nicht berücksichtigt werden.',
    maxPoints: 3,
    modelSolution:
      'Datenverbrauch aller Publish Messages:\n66 Byte × 500 Geräte = 33.000 Byte\n\nDatenverbrauch pro Sekunde:\n33.000 Byte / 60 Sekunden = 550 Byte/s\n\nBenötigte Bandbreite pro Sekunde in kbit/s:\n550 Byte/s × 8 bit/Byte = 4.400 bit/s = 4,4 kbit/s\n\nDie zur Verfügung stehende Bandbreite von 10 kbit/s ist ausreichend.',
    answerStatus: 'confirmed',
    sourcePage: 12,
  },
]
