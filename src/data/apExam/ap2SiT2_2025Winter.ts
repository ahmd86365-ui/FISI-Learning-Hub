import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap2SiT2_2025WinterMeta: ApExamMeta = {
  id: 'ap2-si-t2-2025-winter',
  area: 'AP2_SI_T2',
  year: 2025,
  period: 'Winter',
  label: 'Winter 2025/26',
  examDate: 'Mittwoch, 26. November 2025',
  examTitle: 'Analyse und Entwicklung von Netzwerken',
  courseCode: '1202',
  sourceExamPdf: 'SI_AP2_T2_25w.pdf',
  sourceSolutionPdf: 'SI_AP2_T2_25w_kommentiert.pdf',
  solutionSource: 'unofficial',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:\n\nSie arbeiten als Fachinformatiker (Systemintegration) bei der 1234-IT-Systemhaus GmbH. Dabei handelt es sich um einen mittelständischen IT-Dienstleister, der neben der Zentrale mehrere bundesweit verteilte Standorte hat.\n\nAktuell betreuen Sie für Ihren Arbeitgeber die „IHK-Travel GmbH". Die IHK-Travel GmbH ist ein lokaler Anbieter von Busreisen und ÖPNV-Fahrten. Insgesamt beschäftigt die IHK-Travel GmbH rund 70 Mitarbeiter und betreibt im Stadtgebiet drei Standorte: ein Verwaltungsgebäude mit einem kleinen Serverraum, eine Garage/Werkstatt und in der Innenstadt ein Reisebüro.\n\nAnlage 1: Netzwerkplan der IHK-Travel GmbH:\n– Router Zentrale: eth0 (Internet, 31.101.17.41/30), eth1 (LAN, 10.0.0.0/10), eth2 (DMZ, 192.168.199.0/24), tun0 (VPN-Werkstatt, 172.16.10.1/30), tun1 (VPN-Reisebüro, 172.16.20.1/30). Angeschlossen: LAN 10.0.0.0/10 und DMZ 192.168.199.0/24.\n– Router Werkstatt: g0/1 (Internet, 86.14.30.1/30), LAN, tun0 (VPN, 172.16.10.2/30). Angeschlossen: Werkstatt-Netz 192.168.23.0/24 (dieses Netz wird in Aufgabe 3 in Subnetze unterteilt).\n– Router Reisebüro: eth0 (Internet, 198.51.100.1/30), eth1 (LAN), tun0 (VPN, 172.16.20.2/30). Angeschlossen: Reisebüro-Netz 192.168.50.0/23.\n– Zwischen Zentrale und Werkstatt sowie zwischen Zentrale und Reisebüro besteht je ein VPN-Tunnel über das Internet.'

export const ap2SiT2_2025WinterQuestions: ApExamQuestion[] = [
  // 1. Aufgabe (26 Punkte) — Analyse und Konfiguration der Internetanbindung
  {
    id: 'ap2-si-t2-2025-winter-q1-aa',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'aa',
    topic: 'Subnetting / letzte nutzbare IP',
    scenario: SCENARIO,
    referenceText:
      '1. Aufgabe (26 Punkte)\n\na) Für Ihren Auftraggeber, die IHK-Travel GmbH, betreuen Sie das interne Netzwerk und die VPN-Tunnel zwischen den Standorten.\n\naa) Unvollständige Tabelle:\nRouter — Interface — IP-Adresse des Interface — Anzahl nutzbarer IP-Adressen\nZentrale — eth1 - LAN — (?) — (?)\nZentrale — eth2 - DMZ — (?) — (?)\nReisebüro — eth1 - LAN — (?) — (?)',
    question: 'Betrachten Sie den beigelegten Netzwerkplan der IHK-Travel GmbH. Sie sollen die fehlenden Informationen ergänzen.\n\nTragen Sie für den Router die jeweils letzte nutzbare IP-Adresse im Subnetz ein und geben Sie jeweils die Anzahl der nutzbaren IP-Adressen an.',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nRouter — Interface — IP-Adresse des Interface — Anzahl nutzbarer IP-Adressen\nZentrale — eth1 - LAN — 10.63.255.254 — 4.194.302\nZentrale — eth2 - DMZ — 192.168.199.254 — 254\nReisebüro — eth1 - LAN — 192.168.51.254 — 510',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-winter-q1-ab',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'ab',
    topic: 'Routing-Tabelle',
    scenario: SCENARIO,
    referenceText:
      'ab) Auf dem Router in der Zentrale sollen Sie die Routingtabelle überprüfen.\n\nUnvollständige Router-Zentrale-Tabelle:\nNetzwerk-ID — CIDR — Schnittstelle — Next-Hop\n10.0.0.0 — /10 — eth1 — ---\n192.168.199.0 — /24 — eth2 — ---\n31.101.17.40 — /30 — eth0 — ---\n172.16.10.0 — /30 — tun0 — ---\n172.16.20.0 — /30 — tun1 — ---\n(?) — (?) — (?) — (?)\n(?) — (?) — (?) — (?)\n(?) — (?) — (?) — (?)',
    question: 'Ergänzen Sie die vorliegende Tabelle mit der erwarteten vollständigen Routingtabelle, sodass eine Kommunikation zu allen anderen Standorten und dem Internet möglich ist.',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nNetzwerk-ID — CIDR — Schnittstelle — Next-Hop\n10.0.0.0 — /10 — eth1 — ---\n192.168.199.0 — /24 — eth2 — ---\n31.101.17.40 — /30 — eth0 — ---\n172.16.10.0 — /30 — tun0 — ---\n172.16.20.0 — /30 — tun1 — ---\n192.168.50.0 — /23 — --- (tun1) — ---\n192.168.23.0 — /24 — --- (tun0) — ---\n0.0.0.0 — /0 — eth0 — 31.101.17.41',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-winter-q1-ba',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'ba',
    topic: 'NAT',
    scenario: SCENARIO,
    question: 'b) Der Router in der Zentrale übernimmt neben dem Routing auch die Aufgaben einer Firewall und weiterer Netzwerkdienste.\n\nba) Erläutern Sie, warum Datenpakete, die aus dem LAN der Zentrale ins Internet geleitet werden, durch NAT verändert werden müssen.',
    maxPoints: 2,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nDie Geräte im LAN der Zentrale verwenden private IP-Adressen (10.0.0.0/10), die im Internet nicht routbar sind. Damit Antwortpakete aus dem Internet den richtigen Absender erreichen können, muss der Router die private Quell-IP durch seine öffentliche IP-Adresse ersetzen (NAT).',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-winter-q1-bb',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'bb',
    topic: 'NAT/PAT-Prozess',
    scenario: SCENARIO,
    referenceText:
      'bb) Zwei User im LAN der Zentrale rufen zur gleichen Zeit eine Webseite im Internet auf. Im lokalen Netzwerk können Sie mit einem Netzwerk-Monitor die Pakete verfolgen.\n\nAbschnitt 1 (Client → Router, LAN-seitig, gegeben):\nSource — Destination\n10.0.0.1:45123 — 12.7.51.9:443\n10.0.0.2:45123 — 12.7.51.9:443\n\nDer Datenfluss läuft: Client →(1)→ NAT-Router →(2)→ Server im Internet; Server →(3)→ NAT-Router →(4)→ Client. Abschnitt 2 (Router → Internet), Abschnitt 3 (Internet → Router) und Abschnitt 4 (Router → Client) sind zu ergänzen.',
    question: 'Ergänzen Sie die fehlenden Informationen in den Abschnitten 2 bis 4 für die folgende Darstellung des NAT/PAT-Prozesses. (Hinweis: Eventuell nötige IP-Adressen finden Sie ggf. im Netzwerkplan.)',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nAbschnitt 2 (Source — Destination):\n31.101.17.41:50001 — 12.7.51.9:443\n31.101.17.41:50002 — 12.7.51.9:443\n\nAbschnitt 3 (Source — Destination):\n12.7.51.9:443 — 31.101.17.41:50001\n12.7.51.9:443 — 31.101.17.41:50002\n\nAbschnitt 4 (Source — Destination):\n12.7.51.9:443 — 10.0.0.1:45123\n12.7.51.9:443 — 10.0.0.2:45123',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-winter-q1-bc',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'bc',
    topic: 'NAT vs. TLS',
    scenario: SCENARIO,
    question: 'bc) Erläutern Sie, warum der NAT-Router den Inhalt der Pakete erfolgreich verändern kann, obwohl eine TLS-verschlüsselte Verbindung auf Port 443 verwendet wird.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nNAT arbeitet auf Layer 3 (IP-Header) und Layer 4 (TCP/UDP-Header) und verändert nur IP-Adresse und Port. Die TLS-Verschlüsselung schützt den Payload (Nutzdaten) auf Layer 7, also den eigentlichen Inhalt. Da NAT nur die Header und nicht den verschlüsselten Inhalt ändert, ist das möglich. Der TLS-Tunnel wird zwischen Client und Server end-to-end aufgebaut, der NAT-Router ist dabei transparent und muss den Inhalt nicht entschlüsseln.',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },
  {
    id: 'ap2-si-t2-2025-winter-q1-bd',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 1,
    subPart: 'bd',
    topic: 'Portforwarding',
    scenario: SCENARIO,
    question: 'bd) Bei der Einrichtung von NAT stoßen Sie in der GUI des Routers auf den Punkt „Portforwarding".\n\nErläutern Sie, was man darunter versteht, und nennen Sie einen Anwendungsfall, bei dem man Portforwarding einsetzt.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nBeim Portforwarding leitet der Router eingehende Verbindungen auf einem bestimmten Port der öffentlichen IP-Adresse an einen bestimmten internen Host (private IP + Port) weiter.\n\nEin Webserver steht im internen LAN. Damit dieser aus dem Internet erreichbar ist, wird Port 443 auf der öffentlichen IP an die private IP des Servers weitergeleitet.',
    answerStatus: 'unofficial',
    sourcePage: 2,
  },

  // 2. Aufgabe (26 Punkte) — Absicherung der Internetanbindung
  {
    id: 'ap2-si-t2-2025-winter-q2-aa',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'aa',
    topic: 'Site-to-Site-VPN',
    scenario: SCENARIO,
    question:
      '2. Aufgabe (26 Punkte)\n\na) Die Mitarbeiter der IHK-Travel GmbH arbeiten oft von verschiedenen Standorten aus und benötigen Zugriff auf das interne Netzwerk. Diese Verbindungen werden über das Internet mithilfe von VPN realisiert.\n\naa) Erläutern Sie anhand des Netzwerkplans, welche Art/Typ von VPN die IHK-Travel GmbH zwischen der Werkstatt und der Zentrale einsetzt, und auf welchen Geräten dies jeweils eingerichtet werden muss.',
    maxPoints: 2,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nEs handelt sich um ein Site-to-Site-VPN (auch: LAN-to-LAN-VPN). Es verbindet zwei Standort-Netzwerke dauerhaft miteinander. Eingerichtet wird es auf den Routern beider Standorte (Router Werkstatt – Router Zentrale).',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-ab',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'ab',
    topic: 'Remote-Access-VPN',
    scenario: SCENARIO,
    question:
      'ab) Die IHK-Travel GmbH möchte sicherstellen, dass auch ihre Busfahrer und Reiseleitungen, die unterwegs sind, auf das Firmennetz zugreifen können.\n\nNennen Sie, welche Art/Typ von VPN die IHK-Travel GmbH für diese Verbindung konfigurieren muss und auf welchen Geräten dies jeweils eingerichtet werden muss.',
    maxPoints: 2,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nHier wird ein Remote-Access-VPN (auch: Client-to-Site-VPN) benötigt. Die mobilen Mitarbeiter bauen von ihren Endgeräten (Laptop/Smartphone) eine VPN-Verbindung zur Zentrale auf. Eingerichtet wird es auf dem Router/VPN-Gateway der Zentrale sowie auf den Endgeräten der Mitarbeiter.',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-b',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'b',
    topic: 'VPN-Schutzziele',
    scenario: SCENARIO,
    question: 'b) Die im Netzplan eingezeichneten VPN wurden mit IPSec eingerichtet.\n\nErläutern Sie zwei Schutzziele, die durch ein VPN sichergestellt werden sollen.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nVertraulichkeit (Verschlüsselung): Die übertragenen Daten werden verschlüsselt, sodass ein Angreifer, der den Datenverkehr abfängt (Man-in-the-Middle), den Inhalt nicht lesen kann.\n\nIntegrität / Authentizität: Durch kryptografische Prüfsummen wird sichergestellt, dass Datenpakete nicht unbemerkt verändert wurden und tatsächlich vom legitimen Kommunikationspartner stammen.',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-c',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'c',
    topic: 'VPN-Fehlersuche',
    scenario: SCENARIO,
    question:
      'c) Ein neuer VPN-Nutzer bei der IHK-Travel GmbH (Reiseleiter) kann sich mit dem Internet verbinden, kann allerdings nicht über VPN auf das interne Netzwerk zugreifen. Alle anderen Nutzer haben keine Probleme.\n\nNennen Sie zwei mögliche Fehlerursachen für dieses Problem und erläutern Sie jeweils eine Möglichkeit zur Fehlerbeseitigung.',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nUrsache 1: Fehlende oder falsche Benutzerrechte.\nLösung: Benutzerkonto im VPN-Server prüfen und ggf. anlegen/freischalten, Zugriffsrechte und Gruppenrichtlinien kontrollieren.\n\nUrsache 2: Fehlende oder falsche Routing-/Split-Tunnel-Konfiguration.\nLösung: VPN-Client-Konfiguration prüfen, sicherstellen dass das interne Subnetz über den Tunnel geroutet wird.',
    answerStatus: 'unofficial',
    sourcePage: 6,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-da',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'da',
    topic: 'Passwort-Policy',
    scenario: SCENARIO,
    referenceText:
      'd) Während eines Audits der IHK-Travel GmbH wird festgestellt, dass mehrere Mitarbeiter schwache VPN-Passwörter verwenden und keine zusätzlichen Authentifizierungsmethoden im Einsatz sind.\n\nBestehende Passwort-Policy:\n1. Es muss mindestens ein Groß- und ein Kleinbuchstabe im Passwort enthalten sein.',
    question: 'da) Erweitern Sie die vorgegebene Passwort-Policy für die IHK-Travel GmbH, um zukünftig sicherere Passwörter vorzuschreiben. Nennen Sie zwei weitere Regeln.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\n2. Das Passwort muss mindestens ein Sonderzeichen (z. B. !, @, #, $) enthalten.\n3. Das Passwort muss mindestens eine Ziffer (0–9) enthalten.',
    answerStatus: 'unofficial',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-db',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'db',
    topic: 'Multi-Faktor-Authentifizierung',
    scenario: SCENARIO,
    question: 'db) Sie wollen zukünftig eine Multi-Faktor-Authentifizierung einsetzen, um die Sicherheit zu erhöhen.\n\nBeschreiben Sie dazu zwei weitere Authentifizierungsmethoden (neben Wissen/Passwort).',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nBesitz: Der Nutzer bestätigt seine Identität mit einem physischen Gerät (z. B. Authenticator-App, SMS-TAN oder Hardware-Token wie YubiKey).\n\nBiometrie (Sein/Körpermerkmal): Der Nutzer authentifiziert sich über ein biometrisches Merkmal wie Fingerabdruck, Gesichtserkennung oder Irisscan.',
    answerStatus: 'unofficial',
    sourcePage: 7,
  },
  {
    id: 'ap2-si-t2-2025-winter-q2-e',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 2,
    subPart: 'e',
    topic: 'Angriffsmethoden',
    scenario: SCENARIO,
    question: 'e) Um die IT-Sicherheit weiter zu erhöhen, planen Sie eine Schulung für die Mitarbeiter durchzuführen.\n\nZur Vorbereitung der Schulung sollen Sie zwei der folgenden drei Angriffsmethoden erläutern: Phishing, Trojaner, Virus.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nPhishing: Angreifer versenden gefälschte E-Mails oder erstellen täuschend echte Webseiten, die legitime Dienste imitieren (z. B. die Unternehmensanmeldung). Mitarbeiter werden dazu verleitet, ihre Zugangsdaten einzugeben, die dann vom Angreifer gestohlen werden.\n\nTrojaner: Ein Trojaner ist Schadsoftware, die sich als legitimes, nützliches Programm tarnt. Wird es vom Nutzer installiert, führt es im Hintergrund schädliche Aktionen aus (z. B. Datendiebstahl, Fernzugriff, Nachladen weiterer Malware), ohne dass der Nutzer es bemerkt.\n\nVirus: Ein Virus ist ein sich selbst replizierendes Schadprogramm, das sich an andere Dateien oder Programme anhängt. Es verbreitet sich, sobald die infizierte Datei ausgeführt wird, und kann Daten zerstören, das System beschädigen oder weitere Malware installieren.\n\n(Hinweis im Kommentierten Exemplar zu Wurm: „Eigenständiges Schadprogramm, sonst wie Virus.")',
    answerStatus: 'unofficial',
    sourcePage: 7,
  },

  // 3. Aufgabe (24 Punkte) — Einrichten von VLANs für einen Standort
  {
    id: 'ap2-si-t2-2025-winter-q3-aa',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'aa',
    topic: 'VLAN-Gründe',
    scenario: SCENARIO,
    referenceText:
      '3. Aufgabe (24 Punkte)\n\nDie IHK-Travel GmbH besitzt eine eigene Werkstatt, um die Fahrzeuge des Fuhrparks jederzeit reparieren zu können. In dieser werden feste PCs für das Büro des Werkstattmeisters und die Mitarbeiter in der Werkstatt benötigt. Zudem auch jeweils ein VoIP-Telefon. Die Messgeräte der Werkstatt werden per WLAN angebunden.\n\nAnlage 2: Netzwerkplan der Werkstatt — Router (86.14.30.1/30) verbunden über g0/0/g0/24 mit einem Switch; Switch-Ports: g0/23 → PC Werkstatt, g0/22 → PC Meisterbüro, g0/10 → AP Werkstatt (WLAN, Subnetz mobile Messgeräte 192.168.23.8/29), g0/2 → Telefon Meisterbüro, g0/1 → Telefon Werkstatt (Subnetz VoIP-Telefone 192.168.23.16/29). Subnetz feste PCs: 192.168.23.0/29. VLANs: 231 = Firmen-PCs, 232 = Messgeräte, 233 = Telefone.\n\na) Auf dem Switch, der in der Werkstatt installiert ist, kommen VLANs zum Einsatz.',
    question: 'aa) Erläutern Sie zwei Gründe, die die IHK-Travel GmbH dazu bewogen haben könnten, VLANs zu verwenden.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nSicherheit/Netztrennung: Durch VLANs werden verschiedene Gerätegruppen (z. B. VoIP-Telefone, PCs, Messgeräte) logisch voneinander getrennt. Dadurch wird Angriffspotential verringert, da die Geräte nicht direkt miteinander kommunizieren können.\n\nPriorisierung/Performance (insb. für VoIP): Sprachpakete (VoIP) sind latenzempfindlich. Durch ein eigenes VLAN können diese Pakete priorisiert werden (QoS), sodass die Sprachqualität unabhängig von anderen Netzwerklastspitzen gewährleistet ist.',
    answerStatus: 'unofficial',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-winter-q3-ab',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'ab',
    topic: 'Switchport-Konfiguration',
    scenario: SCENARIO,
    referenceText:
      'ab) Unvollständige Tabelle:\nInterface — VLAN-Nr — Switchportmodus\nG0/1 — 233 — untagged\nG0/2 — 233 — untagged\nG0/10 — (?) — (?)\nG0/22 — (?) — (?)\nG0/23 — (?) — (?)\nG0/24 — (?) — (?)',
    question: 'Die Switchports müssen entsprechend der Vorgaben konfiguriert werden. Geben Sie für jeden Port die passende(n) VLAN-Nummer(n) und den Switchportmodus (untagged oder tagged) an. Beachten Sie, dass für das Routing zwischen den VLANs der Router zuständig ist.',
    maxPoints: 5,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nInterface — VLAN-Nr — Switchportmodus\nG0/1 — 233 — untagged\nG0/2 — 233 — untagged\nG0/10 — 232 — untagged\nG0/22 — 231 — untagged\nG0/23 — 231 — untagged\nG0/24 — 231, 232, 233 — tagged (Trunk)',
    answerStatus: 'unofficial',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-winter-q3-ba',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'ba',
    topic: 'Router-on-a-Stick',
    scenario: SCENARIO,
    question: 'b) Auf dem Router in der Werkstatt kommt das Verfahren Router-on-a-Stick bzw. One-armed-Router zum Einsatz, wie in Anlage 2 dargestellt.\n\nba) Erläutern Sie das Konzept Router-on-a-Stick bzw. One-armed-Router.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nBeim Router-on-a-Stick wird das Routing zwischen verschiedenen VLANs über eine einzige physische Schnittstelle des Routers realisiert. Diese wird in mehrere logische Subinterfaces aufgeteilt, denen jeweils ein VLAN per 802.1Q-Tagging zugeordnet wird. Der Switch überträgt den VLAN-Verkehr tagged (Trunk) zu dieser einen Schnittstelle.',
    answerStatus: 'unofficial',
    sourcePage: 8,
  },
  {
    id: 'ap2-si-t2-2025-winter-q3-bb',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'bb',
    topic: 'Router-Konfigurationsfehler',
    scenario: SCENARIO,
    referenceText:
      'bb) Die PCs in der Werkstatt können nicht mit dem restlichen Firmennetz kommunizieren.\n\nAuszug der Schnittstellenkonfiguration des Routers:\ninterface GigabitEthernet0/0\n  no ip address\n  duplex auto\n  speed auto\n!\ninterface GigabitEthernet0/0.231\n  encapsulation dot1q 231\n  ip address 192.168.23.61 255.255.255.248\n!\ninterface GigabitEthernet0/0.232\n  encapsulation dot1q 232\n  ip address 192.168.23.14 255.255.255.248\n!\ninterface GigabitEthernet0/0.233\n  encapsulation dot1q 233\n  ip address 192.168.23.22 255.255.255.248',
    question: 'Beschreiben Sie den Fehler und geben Sie einen konkreten Lösungsvorschlag an.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nFehlerbeschreibung: Ohne aktives physisches Interface funktionieren auch die Subinterfaces nicht (das physische Interface GigabitEthernet0/0 ist administrativ nicht aktiviert).\n\nLösungsvorschlag: In das Interface GigabitEthernet0/0 die Zeile „no shutdown" einfügen.',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2025-winter-q3-bc',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'bc',
    topic: 'dot1q-Encapsulation',
    scenario: SCENARIO,
    question: 'bc) Im Auszug der Schnittstellenkonfiguration aus Teilaufgabe bb) ist für jedes Subinterface die Konfiguration „encapsulation dot1q" angegeben.\n\nErläutern Sie, warum diese Konfiguration bei der Methode Router-on-a-Stick bzw. One-armed-Router zwingend benötigt wird.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nBei Router-on-a-Stick kommen alle VLAN-Pakete tagged über denselben physischen Port. Der Router muss anhand des VLAN-Tags erkennen, zu welchem Subinterface (und damit zu welchem Subnetz) ein Paket gehört. Die Konfiguration „encapsulation dot1q [VLAN-ID]" weist dem Subinterface genau diese VLAN-ID zu und ermöglicht es dem Router, die 802.1Q-Tags zu lesen und korrekt zuzuordnen. Ohne diese Konfiguration kann der Router die VLANs nicht unterscheiden.',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },
  {
    id: 'ap2-si-t2-2025-winter-q3-c',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 3,
    subPart: 'c',
    topic: 'VLAN für VoIP',
    scenario: SCENARIO,
    question: 'c) Zum Telefonieren kommen VoIP-Telefone in der Werkstatt zum Einsatz.\n\nErläutern Sie zwei Gründe, die für den Einsatz eines eigenen VLAN für VoIP sprechen.',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nPriorisierung (QoS): VoIP-Daten sind sehr latenz- und jitterempfindlich. Ein eigenes VLAN erlaubt es, VoIP-Pakete mit hoher Priorität zu behandeln (Quality of Service), sodass Sprachqualität auch bei hoher Netzlast gewährleistet ist.\n\nSicherheit: Durch die Trennung vom Datennetz können Endgeräte im PC-VLAN nicht direkt auf die VoIP-Infrastruktur zugreifen. Das schützt vor Abhören von Gesprächen oder Angriffen auf die Telefonanlage (z. B. Toll Fraud).',
    answerStatus: 'unofficial',
    sourcePage: 9,
  },

  // 4. Aufgabe (24 Punkte) — Troubleshooting im laufenden Betrieb des Unternehmens
  {
    id: 'ap2-si-t2-2025-winter-q4-a',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'a',
    topic: 'SLA-Verfügbarkeit',
    scenario: SCENARIO,
    question:
      '4. Aufgabe (24 Punkte)\n\nDie IHK-Travel GmbH beauftragt Sie, die Internetanbindung und VPN-Verbindung zwischen den Standorten zu bewerten.\n\na) Der aktuell beauftragte Internetprovider o3-Internet garantiert per SLA eine Verfügbarkeit von 99 % bezogen auf ein Jahr.\n\nBerechnen Sie, wie viele Stunden pro Jahr ein Komplettausfall der Internetverbindung möglich ist, ohne dass die SLA verletzt wird.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\n365 × 24 = 8.760 Stunden\n8.760 / 100 = 87,6 Stunden/Jahr',
    answerStatus: 'unofficial',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-ba',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'ba',
    topic: 'Kombinierte Verfügbarkeit',
    scenario: SCENARIO,
    referenceText:
      'b) Ihre Auftraggeberin wünscht, dass die Ausfallsicherheit der VPN-Anbindung an allen Standorten erhöht wird. Sie entscheiden sich, an allen Standorten eine zweite Internetanbindung in Betrieb zu nehmen. Sie prüfen hierzu folgende Technologien:\nAnbieter — Technologie — Verfügbarkeit — monatliche Kosten — Bandbreite down/up [Mbit/s] — Latenz\nFonedavo Kabel — DOCSIS 3.1 — 98,5 % — 59,90 EUR — 1.000 / 200 — 30 ms\nLahrstink — Satellit — 99 % — 428 EUR — 220 / 25* — 25-60 ms\nS-Mobile — LTE — 98 % — 69,90 EUR — 300 / 75 — 5 ms\nTelegeh — FTTH GPON — 99 % — 167,95 EUR — 2.000 / 1.000 — 10 ms\n\nba) Die Gesamtverfügbarkeit der beiden Internetanbindungen soll mindestens 99,99 % betragen.\n\nErmitteln Sie, welche beiden Anbieter unter diesem Aspekt für die zweite Internetanbindung neben o3-Internet in Betracht kommen. Hinweis: Zur Berechnung der Verfügbarkeit kann die Ausfallwahrscheinlichkeit der jeweiligen kombinierten Anbieter multipliziert und von 1 abgezogen werden.',
    question: 'Ermitteln Sie, welche beiden Anbieter unter diesem Aspekt für die zweite Internetanbindung neben o3-Internet in Betracht kommen.',
    maxPoints: 3,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\n1 − (0,1 × 0,1) = 0,9999 = 99,99 %\n\n(Da o3-Internet eine Ausfallwahrscheinlichkeit von 1 % = 0,01 hat, ist gemäß dem angegebenen Rechenweg 0,1 × 0,1 als Beispielrechnung im Kommentierten Exemplar angegeben, ohne die Zuordnung zu einem konkreten Anbieter der Tabelle explizit auszuschreiben. Sinngemäß kommen die Anbieter mit ausreichend hoher Einzelverfügbarkeit in Betracht, sodass die kombinierte Ausfallwahrscheinlichkeit (Produkt beider Einzelausfallwahrscheinlichkeiten) höchstens 0,01 % ergibt.)',
    answerStatus: 'unofficial',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-bb',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'bb',
    topic: 'Shared-Medium',
    scenario: SCENARIO,
    question: 'bb) Alle genannten Anbindungen sind sogenannte „Shared-Medium"-Verbindungen.\n\nBeschreiben Sie einen Nachteil, der bei Anbindung über einen „Shared-Medium"-Provider auftreten kann.',
    maxPoints: 2,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nBei einer Shared-Medium-Verbindung teilen sich mehrere Nutzer die verfügbare Bandbreite. In Stoßzeiten (z. B. abends) kann die tatsächlich verfügbare Übertragungsgeschwindigkeit erheblich unter dem vertraglich zugesicherten Maximum liegen, da alle Nutzer im gleichen Segment gleichzeitig auf das Medium zugreifen. Die garantierte Bandbreite ist damit nicht zuverlässig.',
    answerStatus: 'unofficial',
    sourcePage: 10,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-bc',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'bc',
    topic: 'Übertragungsdauer-Berechnung',
    scenario: SCENARIO,
    question:
      'bc) Täglich um 02:00 Uhr soll eine 15 GiB große Datei in die Cloud gesichert werden. Der Standort ist mit 250 Mbit/s symmetrisch an das Internet angebunden.\n\nGehen Sie bei der Übertragung von einem Protokolloverhead von zusätzlich 10 % für sämtliche Daten aus und berechnen Sie nachvollziehbar die Übertragungsdauer. Geben Sie das Ergebnis in Minuten und Sekunden an.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\n(15 GiB × 1024³ × 8 × 1,1) / (250 × 1000²) = 566,94 Sekunden = 9 Minuten 26 Sekunden',
    answerStatus: 'unofficial',
    sourcePage: 11,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-bd',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'bd',
    topic: 'VPN-Tunnelaufbau ohne öffentliche IPv4',
    scenario: SCENARIO,
    question:
      'bd) Einige der oben genannten ISP stellen im angebotenen Vertrag keine öffentliche IPv4-Adresse zur Verfügung (Carrier-Grade-NAT oder DS-lite) und können daher für einen ankommenden Tunnelaufbau mit IPv4 nicht genutzt werden.\n\nBeschreiben Sie eine Maßnahme, wie dies trotzdem möglich gemacht werden kann.',
    maxPoints: 2,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nMan kann IPv6 für den VPN-Tunnelaufbau verwenden, da die meisten dieser Anbieter eine öffentliche IPv6-Adresse bereitstellen. Alternativ kann man einen VPN-Server in einer Cloud (mit öffentlicher IPv4) mieten und diesen als Vermittler einsetzen.',
    answerStatus: 'unofficial',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-ca',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'ca',
    topic: 'Switch-Port-Fehlersuche',
    scenario: SCENARIO,
    question:
      'c) Die IHK-Travel GmbH beauftragt Sie, im internen Netzwerk der Zentrale Fehler zu suchen und Hardware zu tauschen.\n\nca) Sie erhalten die Fehlermeldung „Zeitweise schlechte Netzwerkperformance in der Abteilung Kundenbetreuung". Bei der Überprüfung des Switches stellen Sie an einem der Ports eine deutlich erhöhte Aktivität fest.\n\nBeschreiben Sie zwei Möglichkeiten/Ursachen, wie es zu einer erhöhten Aktivität eines einzelnen Switch-Ports kommen kann.',
    maxPoints: 4,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nMöglichkeit 1: Broadcast-Sturm / Switching-Loop. Ein fehlerhaft verkabelter Switch (z. B. Kabelschleife ohne STP) kann dazu führen, dass Broadcast-Pakete endlos im Netzwerk zirkulieren und den Port mit Datenverkehr überfluten.\n\nMöglichkeit 2: Defekte Netzwerkkarte (NIC) eines angeschlossenen Geräts. Eine fehlerhafte Netzwerkkarte sendet ständig fehlerhafte oder übermäßig viele Pakete (sog. „Jabber"), was zu erhöhter Port-Aktivität führt.',
    answerStatus: 'unofficial',
    sourcePage: 12,
  },
  {
    id: 'ap2-si-t2-2025-winter-q4-cb',
    examId: 'ap2-si-t2-2025-winter',
    questionNumber: 4,
    subPart: 'cb',
    topic: 'SFP-Uplink-Fehlersuche',
    scenario: SCENARIO,
    question:
      'cb) Sie haben einen 24-Port-Switch mit SFP-Modul gegen einen 48-Port-Switch mit neuem SFP-Modul vom gleichen Hersteller und der gleichen Baureihe ausgetauscht und die gesicherte Konfiguration des ursprünglichen Switches eingespielt. Nach dem Einschalten funktioniert der Glasfaser-Uplink nicht.\n\nBeschreiben Sie zwei mögliche Ursachen mit geeigneter Fehlerbeseitigung.',
    maxPoints: 6,
    modelSolution:
      '(Unverifizierte Lösung aus Kommentiertem Exemplar)\n\nUrsache: Konfigurationsfehler. Größere Switches haben oft anders belegte Interface-IDs, besonders die SFP-Ports. Daher kann es sein, dass die alte Konfiguration die falschen Ports auf dem Switch anspricht.\nFehlerbeseitigung: Switch-Konfiguration neu durchführen bzw. Interface-Konfiguration des Uplink-Ports prüfen und ggf. „no shutdown" setzen.\n\nUrsache: Falsches SFP-Modul / falsche Wellenlänge. Das neue SFP-Modul des 48-Port-Switches ist nicht kompatibel mit der vorhandenen Glasfaserverkabelung (z. B. Multimode vs. Singlemode, falsche Wellenlänge 850 nm vs. 1310 nm).\nFehlerbeseitigung: SFP-Modul prüfen und gegen das zum Kabel passende Modul austauschen.',
    answerStatus: 'unofficial',
    sourcePage: 12,
  },
]
