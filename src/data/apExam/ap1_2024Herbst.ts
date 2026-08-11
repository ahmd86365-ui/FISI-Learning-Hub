import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2024HerbstMeta: ApExamMeta = {
  id: 'ap1-2024-herbst',
  area: 'AP1',
  year: 2024,
  period: 'Herbst',
  label: 'Herbst 2024',
  examDate: 'Dienstag, 17. September 2024',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_24h.pdf',
  sourceSolutionPdf: 'Loe_AP1_24h.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie sind Auszubildender der Identify OHG, die sich auf die Herstellung von elektronischen Schlüsselsystemen und Ausweisen unter Beachtung höchster Sicherheitsanforderungen spezialisiert hat.'

const q1a: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-a',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'a',
  topic: 'IT-Sicherheit / Zutrittskontrolle',
  scenario: SCENARIO,
  question:
    'Zur Vorbereitung der Absicherung eines Besprechungsraums informieren Sie sich u. a. über Maßnahmen aus dem BSI IT-Grundschutz-Kompendium und wirken an der Umsetzung mit.\n\nZur Absicherung des Besprechungsraums soll u. a. eine automatische Zutrittskontrolle an der Eingangstür eingerichtet werden. Nennen Sie drei technische Möglichkeiten, um eine automatische Zutrittskontrolle zu gewährleisten.',
  maxPoints: 3,
  modelSolution:
    '– Mit Fingerabdrucksensor\n– Über eine Stimmenerkennung\n– Durch die Eingabe eines Zahlencodes\n– Durch die Verwendung eines Kartenscanners\n– Weitere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-b',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'b',
  topic: 'IT-Sicherheit / Sicherheitsrisiken',
  scenario: SCENARIO,
  question: 'Beschreiben Sie die Sicherheitsrisiken der folgenden Situationen.',
  referenceText:
    'Tabelle "Situation" → "Sicherheitsrisiko":\n' +
    'Geöffnete Fenster und Türen nach Verlassen des Besprechungsraums → Beispiel: Informationen in Papierform oder IT-Geräte können durch Diebstahl in falsche Hände geraten. (vorgegebenes Beispiel)\n' +
    'Nutzung durch externe Personen → [auszufüllen]\n' +
    'Lose verlegte Kabel → [auszufüllen]\n' +
    'Nutzung von BYOD (Bring Your Own Device) → [auszufüllen]',
  maxPoints: 3,
  modelSolution:
    'Nutzung durch externe Personen → Vertrauliche Informationen der OHG könnten an externe Personen gelangen.\n' +
    'Lose verlegte Kabel → Versehentliche Unterbrechung von Netzwerkverbindungen durch Stolpern o. Ä.\n' +
    'Nutzung von BYOD → Gefährdung des Firmennetzes durch Malware, Ausspähungen o. Ä.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-c',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'c',
  topic: 'IT-Sicherheit / Präsentationsrechner',
  scenario: SCENARIO,
  question:
    'Ein PC soll für die Durchführung von Präsentationen mit einem Anzeigegerät verbunden werden. Der BSI-Grundschutz empfiehlt, den Präsentationsrechner in dem Besprechungsraum sicher zu konfigurieren.\n\nBegründen Sie die folgenden vorgeschlagenen Maßnahmen.\n\nNutzung einer Minimalkonfiguration mit festgelegter Anwendungssoftware:\n\nAnschluss an ein vom LAN der Institution getrenntes Datennetz:',
  maxPoints: 4,
  modelSolution:
    '– Eine Minimalkonfiguration ist einfacher zu pflegen, weniger fehleranfällig und bietet weniger Angriffsmöglichkeiten.\n– Die Präsentationsrechner und deren Nutzer können nicht auf Daten im Firmennetz zugreifen.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const Q1D_REFERENCE =
  'Vorgaben des Netzwerkadministrators für die Netzwerkkonfiguration des Präsentationsrechners (Adressvergabe soll statisch erfolgen, um eine spätere Fernwartung zu vereinfachen):\n' +
  'Netzwerk: 192.168.20.0/24\n' +
  'DHCP-Range: 192.168.20.20 - 192.168.20.254\n' +
  'Router: 192.168.20.1'

const q1da: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-da',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'da',
  topic: 'Netzwerk / IP-Adressierung',
  scenario: SCENARIO,
  referenceText: Q1D_REFERENCE,
  question:
    'Sie erhalten vom Netzwerkadministrator der Identify OHG die folgenden Vorgaben für die Netzwerkkonfiguration des Präsentationsrechners. Die Adressvergabe soll statisch erfolgen, um eine spätere Fernwartung zu vereinfachen.\n\nBei der Analyse des PCs wird Ihnen jedoch die IP-Adresse 169.254.122.115 angezeigt.\n\nBegründen Sie diese „Vorkonfiguration".',
  maxPoints: 2,
  modelSolution:
    'Der PC war für eine dynamische IP-Adressvergabe vorkonfiguriert. Ein DHCP-Server konnte jedoch noch nicht erreicht werden. Daher hat sich der PC diese IP-Adresse selbst vergeben.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1db: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-db',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'db',
  topic: 'Netzwerk / IP-Adressierung',
  scenario: SCENARIO,
  referenceText:
    Q1D_REFERENCE +
    '\n\nEingabemaske (Formular):\n○ IP-Adresse automatisch beziehen\n○ Folgende IP-Adresse verwenden:\n  IP-Adresse: ___.___.___\n  Subnetzmaske: ___.___.___\n  Standardgateway: ___.___.___',
  question:
    'Markieren Sie bzw. passen Sie die Konfiguration entsprechend der Vorgaben des Administrators in der folgenden Eingabemaske an.',
  maxPoints: 4,
  modelSolution:
    'Umstellung von „IP-Adresse automatisch beziehen" auf „Folgende IP-Adresse verwenden"\n' +
    'IP-Adresse: 192.168.20.10 (richtige Lösungen 2 – 19)\n' +
    'Subnetzmaske: 255.255.255.0\n' +
    'Standardgateway: 192.168.20.1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1dc: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-dc',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'dc',
  topic: 'Netzwerk / RJ45-Verkabelung',
  scenario: SCENARIO,
  referenceText: Q1D_REFERENCE,
  question:
    'Entsprechend der BSI-Empfehlungen ist das IP-Netz des Präsentationsrechners vom Firmennetz getrennt. Im Besprechungsraum befindet sich eine unbeschriftete Netzwerk-Doppeldose. Hier wird auf der einen Seite das Firmennetz, auf der anderen Seite das Netz für den Präsentationsrechner zur Verfügung gestellt. Ihre Aufgabe besteht nun darin, die richtige RJ-45-Buchse (links oder rechts) der Netzwerkdose zu ermitteln und zu beschriften. Ihnen steht dazu ein Patchkabel und der Präsentationsrechner mit seiner Kommandozeile zur Verfügung.\n\nBeschreiben Sie Ihre Vorgehensweise stichpunktartig.',
  maxPoints: 5,
  modelSolution:
    'Mögliche Lösung (weitere sind möglich):\n' +
    '– Verbindung des PCs über das Patchkabel mit der linken RJ45-Buchse.\n' +
    '– Eingabe des Befehls „ping 192.168.20.1"\n' +
    '– Bei erfolgreicher Antwort durch das Gateway Beschriftung des linken Ports mit „Präsentation"\n' +
    '– Wenn das Gateway nicht erreichbar ist, wird das Patchkabel auf die rechte RJ45-Buchse umgesteckt und der Ping-Befehl erneut ausgeführt.\n' +
    '– Bei Erfolg wird der rechte Port mit „Präsentation" beschriftet und kann verwendet werden.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1dd: ApExamQuestion = {
  id: 'ap1-2024-herbst-q1-dd',
  examId: 'ap1-2024-herbst',
  questionNumber: 1,
  subPart: 'dd',
  topic: 'Netzwerk / MAC-Adresse',
  scenario: SCENARIO,
  question:
    'Für die Einrichtung weiterer Maßnahmen der IT-Sicherheit im Netzwerk benötigt Ihr Administrator die MAC-Adresse des Präsentationsrechners.\n\nGeben Sie einen möglichen Konsolenbefehl an, um die Adresse zu ermitteln und nennen Sie ein Beispiel für eine MAC-Adresse in strukturierter hexadezimaler Darstellung.\n\nKonsolenbefehl:\n\nMAC-Adresse:',
  maxPoints: 4,
  modelSolution:
    'Mögliche Konsolenbefehle: ipconfig /all, ifconfig, getmac /v\nMögliche MAC-Adresse: A1-B3-54-64-C3-78',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2a: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-a',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Softwareentwicklung / Fremdvergabe',
  scenario: SCENARIO,
  question:
    'Die Identify OHG benötigt eine neue Software für ihre Schließsysteme. Sie arbeiten in der Abteilung Softwareentwicklung bei der Planung der neuen Software mit. Dabei erstellen Sie auch eine Kostenübersicht für einen Kunden.\n\nIn der Softwareentwicklungsabteilung des Unternehmens gibt es derzeit einen personellen Engpass. Die Identify OHG denkt über eine Fremdvergabe nach.\n\nNennen Sie zwei Argumente, die gegen eine Fremdvergabe sprechen.',
  maxPoints: 2,
  modelSolution:
    '– Weitergabe von Know-how\n– Abhängigkeit von Dritten\n– Höherer Abstimmungs-/Verwaltungsaufwand\n– Sicherheits- und Datenschutzbedenken\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-b',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Softwareentwicklung / Programmiersprachenwahl',
  scenario: SCENARIO,
  question:
    'Es wird beschlossen, die Software selbst zu entwickeln. Die Entwicklungsabteilung fragt, in welcher Programmiersprache die Software entwickelt werden soll.\n\nNennen Sie ein allgemeingültiges Kriterium, welches für die Auswahl der Programmiersprache von Bedeutung ist und geben Sie dazu eine kurze Begründung an.',
  maxPoints: 3,
  modelSolution:
    '– Anforderungen des Projekts – Einige Sprachen eignen sich besser für bestimmte Anwendungsfälle und Aufgaben als andere.\n' +
    '– Entwicklerfähigkeiten – Haben wir Entwickler mit Erfahrung in der ausgewählten Programmiersprache?\n' +
    '– Verfügbare Tools und Frameworks – Die Verwendung von passenden Tools und Frameworks kann die Entwicklung erheblich vereinfachen und beschleunigen.\n' +
    '– Zukünftige Perspektive – Wird die Programmiersprache weiter gepflegt und unterstützt?\n' +
    '– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2c: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-c',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Softwareentwicklung / Compiler vs. Interpreter',
  scenario: SCENARIO,
  question:
    'Zur Auswahl der Programmiersprachen stehen Compiler- und Interpreter-Sprachen.\n\nErläutern Sie den wesentlichen Unterschied zwischen den beiden Übersetzungsarten.',
  maxPoints: 3,
  modelSolution:
    'Compiler-Sprachen übersetzen den Code im Voraus in Maschinencode, was eine schnelle Ausführung ermöglicht.\nInterpreter-Sprachen interpretieren und führen den Code zeilenweise zur Laufzeit aus.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-d',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'd',
  topic: 'UML / Anwendungsfalldiagramm',
  scenario: SCENARIO,
  referenceText:
    'Vorgegebenes UML-Anwendungsfalldiagramm (Use-Case) mit Rahmen "System", Akteur "Mitarbeiter" bereits verbunden mit Anwendungsfall "Tür öffnen".',
  question:
    'Sie werden beauftragt, für die Schlüsselsystemsoftware ein UML-Anwendungsfalldiagramm (Use-Case) zu erstellen. Die folgenden Anforderungen liegen vor:\n' +
    '– Der Mitarbeiter kann Türen öffnen und Türen zuschließen. Dabei findet immer eine Berechtigungsprüfung statt.\n' +
    '– Der Administrator kann alles, was ein Mitarbeiter kann. Zusätzlich kann er die Türschlösser programmieren. Dabei findet immer eine Berechtigungsprüfung statt.\n\n' +
    'Ergänzen Sie das gegebene UML-Anwendungsfalldiagramm.',
  maxPoints: 5,
  modelSolution:
    '1 Punkt Administrator\n' +
    '1 Punkt Vererbung oder Striche zu den Anwendungsfällen „Tür öffnen" und „Tür zuschließen"\n' +
    '3 x 0,5 Punkte Anwendungsfälle\n' +
    '3 x 0,5 Punkte <Include> Beziehung\n\n' +
    'Lösungsdiagramm: Akteur "Mitarbeiter" verbunden mit "Tür öffnen" und "Tür zuschließen"; Akteur "Administrator" (per Vererbung/Generalisierung über Mitarbeiter) zusätzlich verbunden mit "Türschloss programmieren"; alle drei Anwendungsfälle ("Tür öffnen", "Tür zuschließen", "Türschloss programmieren") haben jeweils eine <<include>>-Beziehung zum Anwendungsfall "Berechtigungsprüfung".',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-e',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Programmierung / Pseudocode',
  scenario: SCENARIO,
  referenceText:
    'Methode `bool checkAuthority(int id, int roomNr)` übergibt eine Mitarbeiter-ID und eine Raumnummer, um abzufragen, ob für diesen Raum eine Zutrittsberechtigung besteht.\n\n' +
    'Hinweis: Die Funktion greift auf ein globales zweidimensionales Array keyData[][] zu. In der ersten Spalte steht die Mitarbeiter-ID. Die folgenden Spalten enthalten die Räume, für die eine Zutrittsberechtigung besteht. Der Zeilen- und Spaltenindex beginnt bei 0. Es gibt keine Kopfzeile im Array, sie dient nur zur Erläuterung.\n\n' +
    'Mitarbeiter-ID | Room1 | Room2 | Room3 | Room4 | Room5 | Room6 | Roomxx\n' +
    '1 | 223 | 312 | 154 | 47 | 124 | 236 | 334\n' +
    '2 | 103 | 401 | 14 | 236 | 56 | |\n' +
    '3 | 20 | 312 | 235 | 17 | 124 | 32 |\n\n' +
    'Pseudocode:\n' +
    '1 Funktion checkAuthority(id, roomNr)\n' +
    '2   Für i von 0 bis (AnzahlZeilen von keyData) – 1\n' +
    '3     Für j von 1 bis (AnzahlBelegteSpalten von keyData) – 1\n' +
    '4       Wenn id gleich keyData[i][0] und roomNr gleich keyData[i][j] dann\n' +
    '5         Rückgabe True\n' +
    '6       Ende Wenn\n' +
    '7     Ende Für\n' +
    '8   Ende Für\n' +
    '9   Rückgabe False\n' +
    '10 Ende Funktion',
  question:
    'Ihr Kollege hat gerade die Methode bool checkAuthority(int id, int roomNr) erstellt. Diese übergibt eine Mitarbeiter-ID und eine Raumnummer, um abzufragen, ob für diesen Raum eine Zutrittsberechtigung besteht.\n\nErmitteln und begründen Sie den Rückgabewert, der bei Aufruf der Funktion mit id = 3 und roomNr = 236 geliefert wird.',
  maxPoints: 6,
  modelSolution:
    'Da der Mitarbeiter mit der ID 3 keinen Zugriff auf den Raum 236 hat, wird False zurückgegeben.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2f: ApExamQuestion = {
  id: 'ap1-2024-herbst-q2-f',
  examId: 'ap1-2024-herbst',
  questionNumber: 2,
  subPart: 'f',
  topic: 'Kaufmännische Rechnung / Beschaffung',
  scenario: SCENARIO,
  question:
    'Eine Schule hat eine Anfrage zur Ausstattung ihres Schließsystems gestellt. Die benötigten Komponenten sind:\n' +
    '– 65 Schließzylinder zu einem Stückpreis von 512,00 EUR (Nettopreis).\n' +
    '– 80 Transponder zu einem Stückpreis von 39,00 EUR (Nettopreis).\n' +
    '– Ein Programmiergerät zum Preis von 2.300,00 EUR (Nettopreis).\n' +
    '– Eine Administrationssoftware, die eine jährliche Lizenzgebühr von 349,00 EUR (Nettopreis) hat.\n\n' +
    'Berechnen Sie die Gesamtkosten für die Schule über einen Zeitraum von fünf Jahren. Geben Sie sowohl den Nettopreis als auch den Bruttopreis bei 19 % Mehrwertsteuer an. Der Rechenweg ist anzugeben.',
  maxPoints: 6,
  modelSolution:
    '65 * 512,00 EUR = 33.280,00 EUR (1 Punkt)\n' +
    '80 * 39,00 EUR = 3.120,00 EUR (1 Punkt)\n' +
    '1 * 2.300,00 EUR = 2.300,00 EUR (1 Punkt)\n' +
    '5 * 349,00 EUR = 1.745,00 EUR (1 Punkt)\n' +
    'Netto = 40.445,00 EUR (1 Punkt)\n' +
    '+19 % = Brutto = 48.129,55 EUR (1 Punkt)',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-a',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Kaufmännische Rechnung / Ratendarlehen',
  scenario: SCENARIO,
  referenceText:
    'Angebot für zehn Computer: 12.000 EUR. Ratendarlehen der Kleinstadt-Bank:\n' +
    'Nominalzins: 6 % jährlich\nLaufzeit: 36 Monate\nTilgung: jeweils in gleichen Beträgen zum Jahresende\n\n' +
    'Tabelle "Zeitraum" | "Restschuld EUR" | "Zinsen EUR" | "Tilgung EUR" | "Zahlungen/12 Monate EUR":\n' +
    '01.04.2025 - 31.03.2026 | | | |\n' +
    '01.04.2026 - 31.03.2027 | | | |\n' +
    '01.04.2027 - 31.03.2028 | | | |\n' +
    'Summe | | | 12.000 |',
  question:
    'Die Identify OHG möchte Computer kaufen und Sie begleiten den Beschaffungsprozess. Ferner soll der Arbeitsspeicher bestehender Laptops erweitert werden.\n\n' +
    'Ein Angebot für die zehn Computer beläuft sich auf 12.000 EUR. Die Identify OHG entschließt sich zum Kauf der Computer auf Kredit und erhält von der Kleinstadt-Bank ein Angebot für ein Ratendarlehen.\n\n' +
    'Ermitteln Sie für den genannten Darlehensbetrag die jährlichen Zahlungen und die fälligen Gesamtzinsen sowie die Zahlungen insgesamt.',
  maxPoints: 7,
  modelSolution:
    'Zeitraum | Restschuld EUR | Zinsen EUR | Tilgung EUR | Zahlungen/12 Monate EUR\n' +
    '01.04.2025-31.03.2026 | 12.000 | 720 | 4.000 | 4.720\n' +
    '01.04.2026-31.03.2027 | 8.000 | 480 | 4.000 | 4.480\n' +
    '01.04.2027-31.03.2028 | 4.000 | 240 | 4.000 | 4.240\n' +
    'Summe | | 1.440 | 12.000 | 13.440',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const Q3B_REFERENCE =
  'Anforderungen des Tools: Windows 11, 32 GB RAM.\n\n' +
  'Aktueller Laptop der Entwickler:\n' +
  '– Prozessor: Intel® Core™ i5-1335U Prozessor der 13. Generation\n' +
  '– Betriebssystem: Windows 11 Professional (64 Bit)\n' +
  '– Grafik: Integrierte Intel® UHD-Grafik\n' +
  '– Arbeitsspeicher: 16 GB DDR4-3200MHz\n' +
  '– Massenspeicher: 1 TB HDD\n' +
  '– WLAN: Intel® Wi-Fi 6 AX201 2x2 AX und Bluetooth® 5.1\n\n' +
  'Der Laptop verfügt über einen weiteren Slot für einen weiteren Arbeitsspeicher-Riegel. Angebotene Arbeitsspeicher:\n' +
  'Arbeitsspeicher 1 – 82,20 EUR: 16 GB DDR5-6000MHz\n' +
  'Arbeitsspeicher 2 – 75,70 EUR: 16 GB DDR4-5600MHz\n' +
  'Arbeitsspeicher 3 – 31,80 EUR: 16 GB DDR4-3200MHz'

const q3ba: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-ba',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'ba',
  topic: 'Hardware / Arbeitsspeicher-Kompatibilität',
  scenario: SCENARIO,
  referenceText: Q3B_REFERENCE,
  question:
    'Der Abteilungsleiter der Entwicklungsabteilung der Identify OHG möchte, dass in Zukunft alle entwickelten Anwendungen auf der firmeninternen Cloud ausgerollt werden. Darum müssen alle Anwendungen auch mit entsprechenden Tools entwickelt und getestet werden. Aus den Hardwareanforderungen eines dieser Tools geht hervor, dass die Laptops der Entwickler folgende Bedingungen erfüllen müssen.\n\n' +
    'Der Abteilungsleiter der Entwicklungsabteilung hat sich dazu entschieden, dass die vorhandenen Laptops um den benötigten Arbeitsspeicher erweitert werden. Der Laptop verfügt über einen weiteren Slot für einen weiteren Arbeitsspeicher-Riegel. Von dem Hardware-Dienstleister der Identify OHG bekommen Sie folgende drei Arbeitsspeicher angeboten.\n\n' +
    'Erklären Sie die Kompatibilität für jeden der drei Arbeitsspeicher mit dem vorhandenen Laptop.\n\n' +
    'Arbeitsspeicher 1:\n\nArbeitsspeicher 2:\n\nArbeitsspeicher 3:',
  maxPoints: 3,
  modelSolution:
    'Arbeitsspeicher 1: DDR4 und DDR5 sind nicht miteinander kompatibel.\n' +
    'Arbeitsspeicher 2: DDR4-5600MHz und DDR4-3200MHz sind kompatibel, jedoch wird die niedrigere Geschwindigkeit (3200MHz) verwendet.\n' +
    'Arbeitsspeicher 3: DDR4-3200MHz und DDR4-3200MHz sind kompatibel.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3bb: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-bb',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'bb',
  topic: 'Hardware / Arbeitsspeicher-Empfehlung',
  scenario: SCENARIO,
  referenceText: Q3B_REFERENCE,
  question: 'Begründen Sie, welchen Arbeitsspeicher Sie dem Abteilungsleiter zur Anschaffung empfehlen.',
  maxPoints: 2,
  modelSolution:
    'Arbeitsspeicher 3, da es wirtschaftlich keinen Sinn macht, den schnelleren DDR4 Arbeitsspeicher für den doppelten Preis zu kaufen, wenn die Geschwindigkeit des niedrigeren verwendet wird.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3bc: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-bc',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'bc',
  topic: 'Hardware / SSD vs. HDD',
  scenario: SCENARIO,
  question: 'Sie schlagen dem Abteilungsleiter vor, die HDD im Laptop mit einer SSD zu ersetzen.\n\nNennen Sie drei Vorteile einer SSD gegenüber einer HDD.',
  maxPoints: 3,
  modelSolution:
    '– Schnellere Lese- und Schreibgeschwindigkeiten\n– Spürbarer Leistungsschub bei Wechsel von HDD\n– Geringer Energiebedarf\n– Lautlos-Betrieb\n– Kompakte Bauform\n– Kein Datenverlust durch Erschütterung\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3ca: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-ca',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'ca',
  topic: 'IT-Sicherheit / Phishing',
  scenario: SCENARIO,
  question:
    'Bei der Korrespondenz mit dem Hardwarelieferanten werden häufig E-Mails ausgetauscht. Sie warnen die Anwender darum vor Phishingmails.\n\nBeschreiben Sie eine Gefahr durch Phishingmails.',
  maxPoints: 2,
  modelSolution:
    'Es können Zugangsdaten gestohlen werden, dadurch können Angreifer an sicherheitskritische Informationen gelangen.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3cb: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-cb',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'cb',
  topic: 'IT-Sicherheit / Phishing',
  scenario: SCENARIO,
  question: 'Nennen Sie drei Anzeichen, an denen der User erkennen kann, dass es sich um eine Phishingmail handelt.',
  maxPoints: 3,
  modelSolution:
    '– Fehler in der Mail\n– Keine persönliche Anrede\n– Aufbau von Zeitdruck, z. B. durch Fristsetzungen\n– Aufforderung zur Eingabe von persönlichen Daten\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3cc: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-cc',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'cc',
  topic: 'IT-Sicherheit / Phishing',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Maßnahmen, die Sie dem Unternehmen zum Schutz vor Phishingmails empfehlen.',
  maxPoints: 2,
  modelSolution:
    '– Bei der Wahl des E-Mail-Programms auf gute Spamfilter achten\n– Phishing-Angriffe zu Übungszwecken simulieren\n– Schulung der Mitarbeiter\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3cd: ApExamQuestion = {
  id: 'ap1-2024-herbst-q3-cd',
  examId: 'ap1-2024-herbst',
  questionNumber: 3,
  subPart: 'cd',
  topic: 'IT-Sicherheit / Phishing',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Maßnahmen, die das Unternehmen den Mitarbeitern beim Empfang von Mails vorgibt, um sich vor Phishingmail zu schützen.',
  maxPoints: 2,
  modelSolution:
    '– Keine Übermittlung von User/Passwort per E-Mail\n– Keine Links aus E-Mails ausführen\n– Keine Anhänge aus unbekannten Quellen ausführen\n– Verdachtsfälle an die IT melden\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4a: ApExamQuestion = {
  id: 'ap1-2024-herbst-q4-a',
  examId: 'ap1-2024-herbst',
  questionNumber: 4,
  subPart: 'a',
  topic: 'Lasten- und Pflichtenheft',
  scenario: SCENARIO,
  referenceText:
    'Tabelle mit Spalten "Lastenheft" und "Pflichtenheft", Zeilen "Zweck" und "Beispiel für möglichen Inhalt" (auszufüllen).',
  question:
    'Alle Vorgänge des Produktionsprozesses müssen dokumentiert werden. Als Grundlage wird ein Datenmodell erstellt.\n\n' +
    'Bei der Identify OHG ist auch bei internen Aufträgen ein Lasten- und Pflichtenheft üblich.\n\n' +
    'Erklären Sie jeweils den Zweck von Lasten- und Pflichtenheft und führen Sie jeweils ein konkretes Beispiel für den Inhalt an. Tragen Sie Ihr Ergebnis in nachfolgende Tabelle ein.',
  maxPoints: 6,
  modelSolution:
    'Inhalt jeweils 2 Punkte; Beispiel jeweils 1 Punkt\n\n' +
    'Lastenheft – Zweck: Das Lastenheft beschreibt die Gesamtheit der vom Auftraggeber gewünschten Anforderungen und Funktionalitäten.\n' +
    'Lastenheft – Beispiel: z. B. Festlegung von Teilleistungen; Rahmenbedingungen der Leistungserbringung, z. B. Reaktionszeit; Einhaltung des Datenschutzes\n\n' +
    'Pflichtenheft – Zweck: Das Pflichtenheft beschreibt, wie der Auftragnehmer die Anforderungen des Auftraggebers umsetzen möchte.\n' +
    'Pflichtenheft – Beispiel: z. B. Ansprechpartner; Zeitrahmen; Testszenarien und Abnahmekriterien',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2024-herbst-q4-b',
  examId: 'ap1-2024-herbst',
  questionNumber: 4,
  subPart: 'b',
  topic: 'Datenmodellierung / ERM',
  scenario: SCENARIO,
  referenceText:
    'Vorgegebenes Datenmodell (ER-Diagramm, Chen-Notation):\n' +
    'Entität "Mitarbeiter" mit Attribut "Mitarbeiter-ID (PS)" und "Mitarbeiter_Name", verbunden über Beziehung "bearbeitet" (Kardinalität 1 auf Seite Mitarbeiter) — noch zu erweitern um die Entität "Aufträge" auf der n-Seite.\n\n' +
    'Angaben zur Datenbank: Die Bearbeitung eines Auftrags darf immer nur von einem einzigen Mitarbeiter erfolgen. Neben seinem Namen ist auch der Vorname zu erfassen. Jeder Auftrag hat einen Beginn und ein Ende der Bearbeitung. In jeder Entitätsmenge soll eine eindeutige Identifizierung durch einen Primärschlüssel möglich sein.',
  question:
    'Erweitern Sie das unten angegebene Datenmodell redundanzfrei um die vorliegenden Angaben. Geben Sie auch die Kardinalitäten an.\n\n' +
    'Angaben zur Datenbank:\n' +
    'Die Bearbeitung eines Auftrags darf immer nur von einem einzigen Mitarbeiter erfolgen. Neben seinem Namen ist auch der Vorname zu erfassen. Jeder Auftrag hat einen Beginn und ein Ende der Bearbeitung.\n' +
    'In jeder Entitätsmenge soll eine eindeutige Identifizierung durch einen Primärschlüssel möglich sein.',
  maxPoints: 6,
  modelSolution:
    'Lösungsdiagramm: Entität "Mitarbeiter" (Attribute: Mitarbeiter-ID (PS), Mitarbeiter_Name, Mitarbeiter_Vorname) verbunden über Beziehung "bearbeitet" mit Kardinalität 1 (Mitarbeiter-Seite) zu n (Aufträge-Seite) mit Entität "Aufträge" (Attribute: Auftrag-ID (PS), Beginn Bearbeitung, Ende Bearbeitung).\n\n' +
    'Korrekturhinweise:\n– Jeweils ein Punkt für jede Kardinalität, Tabelle und Feld an der richtigen Stelle\n– Ein Überschreiten der Höchstpunktzahl ist nicht möglich.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2024-herbst-q4-c',
  examId: 'ap1-2024-herbst',
  questionNumber: 4,
  subPart: 'c',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  question:
    'Da sich die Störungen an einer Maschine häufen, soll eine neue zur Herstellung von Ausweiskarten beschafft werden. Es werden Überlegungen zur Beschaffung über Leasing angestellt.\n\nBeschreiben Sie drei Vorteile der Beschaffung über Leasing.',
  maxPoints: 6,
  modelSolution:
    '– Der Austausch des Leasinggegenstands kann in Absprache mit dem Leasinggeber leichter erfolgen als beim Kauf.\n' +
    '– Die Belastung der aktuellen Liquidität erfolgt nur in Höhe der Leasingraten und nicht mit dem kompletten Anschaffungspreis.\n' +
    '– Der Wartungsaufwand des Leasinggegenstands kann mit dem Leasinggeber über einen pauschalierten Betrag festgelegt werden.\n' +
    '– Die kalkulierbaren Kosten für diese Anschaffung fallen in stets gleichbleibender Höhe an.\n' +
    '– Die Leasingraten können steuerlich abgesetzt werden.\n\n' +
    'Auch andere sinnvolle Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4d: ApExamQuestion = {
  id: 'ap1-2024-herbst-q4-d',
  examId: 'ap1-2024-herbst',
  questionNumber: 4,
  subPart: 'd',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  question:
    'Nach Ablauf der Leasingdauer bieten sich bezüglich der weiteren Nutzung der Maschine mehrere Möglichkeiten.\n\nBeschreiben Sie zwei dieser Möglichkeiten.',
  maxPoints: 4,
  modelSolution:
    '– Der Leasingnehmer gibt die Maschine an den Leasinggeber zurück.\n' +
    '– Der Leasingvertrag kann unter Anpassung der Leasingraten verlängert und die Maschine weiter genutzt werden.\n' +
    '– Der Leasingnehmer kann die Maschine dem Leasinggeber abkaufen.\n' +
    '– Die Maschine wird nach Ablauf der Vertragslaufzeit gegen einen anderen Vertragsgegenstand ausgewechselt.\n\n' +
    'Auch andere sinnvolle Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4e: ApExamQuestion = {
  id: 'ap1-2024-herbst-q4-e',
  examId: 'ap1-2024-herbst',
  questionNumber: 4,
  subPart: 'e',
  topic: 'Beschaffung / Ökologische Aspekte',
  scenario: SCENARIO,
  question:
    'Ein Kollege informiert Sie, dass die Maschine trotz ihrer technischen Veralterung, der Störungen und ihrer erhöhten Ausschussproduktion weiter genutzt werden kann.\n\nBei der Beschaffung der Maschine spielen nicht nur finanzielle, sondern auch ökologische Aspekte eine Rolle.\n\nBeschreiben Sie zwei ökologische Aspekte, die bei einer Neuinvestition zu beachten sind.',
  maxPoints: 4,
  modelSolution:
    'Neue Maschinen …\n' +
    '– könnten einen geringeren Energieverbrauch haben.\n' +
    '– benötigen u. U. aufgrund der geringeren Ausschussquote weniger Material.\n' +
    '– weisen geringere Emissionswerte (Lärm, Wärmestrahlung, Staub, Schmutz etc.) auf.\n' +
    '– verbrauchen bei deren Produktion zusätzliche Ressourcen.\n' +
    '– erzwingen meist die Entsorgung der alten Maschinen.\n\n' +
    'Auch andere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

export const ap1_2024HerbstQuestions: ApExamQuestion[] = [
  q1a,
  q1b,
  q1c,
  q1da,
  q1db,
  q1dc,
  q1dd,
  q2a,
  q2b,
  q2c,
  q2d,
  q2e,
  q2f,
  q3a,
  q3ba,
  q3bb,
  q3bc,
  q3ca,
  q3cb,
  q3cc,
  q3cd,
  q4a,
  q4b,
  q4c,
  q4d,
  q4e,
]
