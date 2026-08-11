import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2022HerbstMeta: ApExamMeta = {
  id: 'ap1-2022-herbst',
  area: 'AP1',
  year: 2022,
  period: 'Herbst',
  label: 'Herbst 2022',
  examDate: 'Mittwoch, 21. September 2022',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_22h.pdf',
  sourceSolutionPdf: 'Loe_AP1_22h.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Ihr Ausbildungsbetrieb, die Package AG, produziert und handelt mit Verpackungsmaterial. Um dem Marktpotenzial aufgrund der enorm gestiegenen Nachfrage gerecht zu werden, hat die Geschäftsleitung Investitionen zur Steigerung der Produktionskapazitäten beschlossen. Dies soll vor allem durch eine Erhöhung des Automatisierungsgrads erreicht werden, die weitreichende Auswirkungen auf die künftige Gestaltung und Ausstattung der Arbeitsplätze in der Produktion haben wird. Für diese Aufgabe wurde daher eine eigene Arbeitsgruppe gebildet.\n\nSie wurden in diese Arbeitsgruppe aufgenommen.'

const SQL_SYNTAX =
  'Auszug aus der Beilage "SQL-Syntax":\nSELECT * | Spaltenname1 [, Spaltenname2, …] — Wählt die Spalten einer oder mehrerer Tabellen, deren Inhalte in die Liste aufgenommen werden sollen; alle Spalten (*) oder die namentlich aufgeführten\nFROM — Name der Tabelle oder Namen der Tabellen, aus denen die Daten der Ausgabe stammen\nWHERE — Bedingung, nach der die Datensätze ausgewählt werden sollen\nGROUP BY Spaltenname1 [,Spaltenname2, …] — Gruppierung (Aggregation) nach Inhalt des genannten Feldes\nCOUNT(Spaltenname | *) — Ermittelt die Anzahl der Datensätze mit Nicht-NULL-Werten im angegebenen Feld oder alle Datensätze der Tabelle (dann mit Operator *)\nSUM(Spaltenname | Formel) — Ermittelt die Summe aller Werte im angegebenen Feld oder Formelergebnisse\nAND — Logisches UND\n= — Test auf Gleichheit'

const q1aa: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-aa',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'aa',
  topic: 'Marktformen',
  scenario: SCENARIO,
  referenceText:
    '1. Aufgabe (23 Punkte)\n\na) Die Marktsituation der Package AG ist aktuell noch gekennzeichnet durch wenige Anbieter aber viele Nachfrager.',
  question: 'aa) Nennen Sie die aktuell vorliegende Marktform.',
  maxPoints: 1,
  modelSolution: 'Oligopol',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ab: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-ab',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'ab',
  topic: 'Marktformen',
  scenario: SCENARIO,
  question:
    'ab) Es ist jedoch festzustellen, dass immer mehr Anbieter auf den Markt drängen.\n\nNennen Sie die neue Marktform, mit der die Package AG zukünftig rechnen sollte.',
  maxPoints: 1,
  modelSolution: 'Polypol',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-b',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Projektmanagement / Projektphasen',
  scenario: SCENARIO,
  question:
    'b) Um bei dem komplexen Vorhaben den Überblick zu behalten, legt die Arbeitsgruppe Projektschritte (z. B. Projektinitiierung) fest.\n\nBeschreiben Sie in nachvollziehbaren Stichpunkten zu jedem Projektschritt einen inhaltlichen Aspekt, der durchzuführen ist.\n\nProjektschritte, z. B.:\n1. Projektinitiierung — Inhaltlicher Aspekt, z. B.: Identifikation eines Problembereiches\n2. Beschreibung des Istzustands — Inhaltlicher Aspekt:\n3. Definition des Sollkonzepts — Inhaltlicher Aspekt:\n4. Planung — Inhaltlicher Aspekt:\n5. Umsetzung — Inhaltlicher Aspekt:\n6. Überprüfung der Zielerreichung — Inhaltlicher Aspekt:\n7. Ausblick — Inhaltlicher Aspekt:',
  maxPoints: 6,
  modelSolution:
    'Projektschritte, z. B. — Inhaltlicher Aspekt, z. B.:\n1. Projektinitiierung — Identifikation eines Problembereiches\n2. Beschreibung des Istzustands — Nachteile beim aktuellen Ablauf\n3. Definition des Sollkonzepts — Ziel der verbesserten Abläufe festlegen\n4. Planung — Modellierung der Phasen\n5. Umsetzung — Einführung der geänderten Abläufe\n6. Überprüfung der Zielerreichung — Prüfung der durch die Prozessänderung erreichten Wirkung\n7. Ausblick — Fixierung weiterer Möglichkeiten der Prozessoptimierung',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-c',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Stakeholder',
  scenario: SCENARIO,
  question:
    'c) „Stakeholder" beeinflussen die Machbarkeit von Projekten.\n\nBeschreiben Sie drei Gruppen von Stakeholdern mit deren Einfluss auf das Projekt.',
  maxPoints: 3,
  modelSolution:
    'z. B.:\nAnteilseigner: Bereitschaft zur Finanzierung des Projekts\nMitarbeiter: Akzeptanz des Projekts bei der Durchführung\nLieferanten: Realisierbarkeit vollautomatisierter Bestellungen',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1d: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-d',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'd',
  topic: 'Externer Projektberater',
  scenario: SCENARIO,
  question:
    'd) In der Projektgruppe wird die Einbindung eines externen Projektberaters diskutiert.\n\nWelche Vorteile und Nachteile sind damit verbunden? Nennen Sie insgesamt fünf Vor- und/oder Nachteile, z. B. zwei Vorteile und drei Nachteile.',
  maxPoints: 5,
  modelSolution:
    'Vorteile, z. B.:\n– mehr Erfahrung des externen Beraters aufgrund dessen Spezialisierung\n– geringere Zusatzbelastung des Personals\n– normkonforme Lösungen\n– höhere Methodenkompetenz\n– bessere Risikoeinschätzung\n\nNachteile, z. B.:\n– zusätzliche Kosten\n– Know-how außerhalb des Unternehmens\n– Abhängigkeit von externen Stellen\n– fehlende Kenntnisse über interne Abläufe und Strukturen\n– mehr Schnittstellen in der Kommunikation\n– zusätzlicher Aufwand mit Datenschutz, z. B. Zutrittskontrolle',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1e: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-e',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'e',
  topic: 'Effektiver Stundensatz',
  scenario: SCENARIO,
  referenceText:
    'e) Alternativ zu internen Fachkräften kann aus dem Büro des Projektberaters vergleichbares Personal zu einem effektiven Stundensatz von 85 EUR beauftragt werden.\n\nAngaben:\n– 260 Arbeitstage pro Jahr\n– 7,8 Std. pro Tag\n– 30 Urlaubstage pro Jahr\n– 5 Krankheitstage pro Jahr\n– 5 Feiertage pro Jahr\n– Jahreskosten eines Arbeitnehmers 140.000 EUR',
  question: 'Berechnen Sie den effektiven Stundensatz der internen Fachkräfte mit den nebenstehenden Angaben.',
  maxPoints: 5,
  modelSolution: '140.000 EUR / ((260 – 30 – 5 – 5) × 7,8) = 81,59 EUR',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1f: ApExamQuestion = {
  id: 'ap1-2022-herbst-q1-f',
  examId: 'ap1-2022-herbst',
  questionNumber: 1,
  subPart: 'f',
  topic: 'Dienstvertrag / Werkvertrag',
  scenario: SCENARIO,
  question:
    'f) Es stellt sich die Frage, ob mit dem Projektberater ein Dienstvertrag oder Werkvertrag abgeschlossen werden soll.\n\nGeben Sie eine begründete Empfehlung.',
  maxPoints: 2,
  modelSolution:
    'Werkvertrag, da dieser ergebnisabhängig ist, bei einem Dienstvertrag genügt die Arbeitsleistung.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q2a: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-a',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Scananzahl-Berechnung',
  scenario: SCENARIO,
  referenceText:
    '2. Aufgabe (25 Punkte)\n\nDie Package AG plant die Anschaffung einer kleinen Fertigungslinie für Karton, welche mit einer Arbeitsbreite von 508 mm und einer Produktionsgeschwindigkeit von 30,48 m/min Karton auf Rollen produziert. Die Anlage soll zwölf Stunden pro Tag produktiv sein.\n\nKarton wird zum Teil aus Altpapier hergestellt, Unreinheiten wirken sich auf die Qualität des Kartons aus. Zur Qualitätssicherung wird die erzeugte Kartonbahn fortlaufend durch eine Kamera gescannt. Die entstandenen Bilder werden ausgewertet und anschließend gespeichert. Bei erkannten Verfärbungen der Oberfläche oder Einschlüssen im Karton werden die aktuellen Rollen als mindere Qualität eingestuft.\n\nErfasste Scanfläche: 50,80 cm breit x 30,48 cm lang\nAuflösung: 400 dpi x 400 dpi\nFarbtiefe: 16 Bit\n1 Inch: 2,54 cm',
  question: 'a) Ermitteln Sie zunächst die Zahl der Scans/Aufnahmen pro Tag. Der Rechenweg ist anzugeben.',
  maxPoints: 2,
  modelSolution:
    'Anzahl der Scanner auf 508 mm Breite: 1 Scanner mit einer Breite von 50,8 cm\nAnzahl der Aufnahmen bei 30,48 m Karton pro Minute: 100 Aufnahmen pro Scanner zu 30,48 cm pro Minute\nAnzahl der Aufnahmen pro Stunde: 6.000 = 1 Scanner × 100 Aufnahmen pro Minute × 60 Minuten\nAnzahl der Aufnahmen pro Arbeitstag von 12 Stunden: 72.000 = 6.000 × 12 Stunden\n\nErgebnis: 72.000 Aufnahmen/Tag',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2ba: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-ba',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'ba',
  topic: 'Datenvolumen-Berechnung',
  scenario: SCENARIO,
  referenceText: 'b) Die Daten der Scans werden ein Tag für Auswertungen zur Qualitätskontrolle gespeichert.',
  question: 'ba) Ermitteln Sie das zu speichernde Datenvolumen in MiB pro Scan. Der Rechenweg ist anzugeben.',
  maxPoints: 4,
  modelSolution:
    'Werte in inch: Breite 50,80 cm / 2,54 = 20 inch; Länge 30,48 cm / 2,54 = 12 inch\nBildpunkte: Breite 20 × 400 dpi = 8.000; Länge 12 × 400 dpi = 4.800\n\nPixel/Scan: 8.000 × 4.800 = 38.400.000 Pixel\n16 Bit Farbtiefe: 38.400.000 × 16 = 614.400.000 Bit\ndurch 8 = 76.800.000 Byte\ndurch 1.024 = 75.000,00 KiB\ndurch 1.024 = 73,25 MiB',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2bb: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-bb',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'bb',
  topic: 'Datenvolumen-Berechnung',
  scenario: SCENARIO,
  referenceText:
    'Hinweis: Sollten Sie die Aufgabe a) oder die Teilaufgabe ba) nicht gelöst haben, gehen Sie von 100.000 Scans/Aufnahmen pro Tag und 70 MiB Datenvolumen pro Scan aus.',
  question:
    'bb) Ermitteln Sie anschließend das gesamte zu speichernde Datenvolumen pro Tag in TiB.\n\nRunden Sie das Ergebnis auf volle TiB auf. Der Rechenweg ist anzugeben.',
  maxPoints: 2,
  modelSolution:
    'Scan/Tag 72.000; MiB pro Scan 73,25\n72.000 × 73,25 = 5.274.000,00 MiB\ndurch 1.024 = 5.150,39 GiB\ndurch 1.024 = 5,029678345 TiB\naufgerundet = 6 TiB\n\nErsatzrechnung mit 100.000 Scan/Tag und 70 MiB: 100.000 × 70 = 7.000.000,00 MiB / 1.024 = 6.835,94 GiB / 1.024 = 6,675720215 TiB, aufgerundet = 7 TiB',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2ca: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-ca',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'ca',
  topic: 'RAID 5',
  scenario: SCENARIO,
  referenceText:
    'c) In Abstimmung mit der IT-Leitung beschließen Sie, ein redundantes Speichersystem einzurichten. Dazu sind folgende Komponenten verfügbar:\n– 2 Festplatten (je 3 TB Speicherkapazität)\n– 7 Festplatten (je 2 TB Speicherkapazität)\n– PCI RAID-Hostadapter\n\nMit allen vorhandenen Festplatten soll eine fehlertolerante RAID-5-Konfiguration erstellt werden, welche die größtmögliche Nettospeicherkapazität biete.',
  question: 'ca) Berechnen Sie die maximale Nettospeicherkapazität in TB. Der Rechenweg ist anzugeben.',
  maxPoints: 4,
  modelSolution:
    'RAID-Level: RAID 5\n\nRechenweg: Nutzung der kleinsten gemeinsamen Kapazität der Platten (alle 9 Platten werden auf 2 TB begrenzt).\n(9 − 1) × 2 TB = 16 TB\n\nNetto-Speicherkapazität: 16 TB',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2cb: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-cb',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'cb',
  topic: 'JBOD',
  scenario: SCENARIO,
  question:
    'cb) Für einen Vergleich soll auch die Speicherkapazität berechnet werden, wenn man die gegebenen Festplatten als JBOD (Zusammenfassung aller Festplatten zu einem logischen Volume) nutzt.\n\nErmitteln Sie die erreichbare Speicherkapazität in TB. Der Rechenweg ist anzugeben.',
  maxPoints: 2,
  modelSolution:
    'Speicherkapazität: 20 TiB\n\nRechenweg:\n2 × 3 TiB = 6 TiB\n7 × 2 TiB = 14 TiB\n6 TiB + 14 TiB = 20 TiB',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2cc: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-cc',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'cc',
  topic: 'JBOD vs. RAID 0',
  scenario: SCENARIO,
  question: 'cc) Beschreiben Sie zwei Vorteile, die ein Laufwerksverbund als JBOD gegenüber einem RAID 0 bietet.',
  maxPoints: 4,
  modelSolution:
    '– Ein RAID-Controller ist nicht erforderlich.\n– Volle Ausnutzung der Speicherkapazitäten bei unterschiedlichen Plattengrößen.\n– Keine identischen Platten erforderlich.\n– Relativ einfache Erweiterung möglich.\n– Die Nennung weiterer Vorteile ist möglich.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-d',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'd',
  topic: 'SAN vs. NAS',
  scenario: SCENARIO,
  question:
    'd) Die im Netzwerk der Hauptverwaltung eingesetzten NAS-Speichersysteme sollen durch ein SAN (Storage Area Network) abgelöst werden.\n\nNennen Sie drei Vorteile, die den Einsatz begründen.',
  maxPoints: 3,
  modelSolution:
    '– SAN besitzt höhere Performance\n– Erlaubt zeitnahe Datensicherung\n– Ein SAN arbeitet blockorientiert und für alle Anwendungen und Betriebssysteme kompatibel\n– Sehr gute Ressourcenauslastung, da viele Systeme gleichzeitig zugreifen können\n– Besonders geeignet für häufige Zugriffe\n– Bietet Maximum an Skalierbarkeit\n– Unabhängig vom Standort und zentraler Verwaltung\n– Unterbrechungsfreie Online-Erweiterung von Daten-Volumen möglich\n– Die Verwaltung des SAN kann vom Arbeitsplatz des Administrators geschehen',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2022-herbst-q2-e',
  examId: 'ap1-2022-herbst',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Barcode / QR-Code / RFID',
  scenario: SCENARIO,
  question:
    'e) Für die Kennzeichnung der produzierten Kartonrollen durch einen maschinenlesbaren Aufkleber schlägt die Geschäftsleitung die Verwendung von Barcode, QR-Code oder RFID-Chips vor.\n\nStellen Sie jeweils einen Vor- und Nachteil der Kennzeichnung mit QR-Code bzw. RFID-Chips in der Tabelle gegenüber (Barcode ist bereits vorgegeben).\n\nKennzeichnung — Vorteil — Nachteil\nBarcode (vorgegeben) — z. B.: einfach zu erstellen; kostengünstig — Kann bei Verschmutzung oder Sichtbehinderung nicht gelesen werden; Relativ umfangreiche Zeichenfolge für Barcode\nQR-Code — ? — ?\nRFID-Chip — ? — ?',
  maxPoints: 4,
  modelSolution:
    'QR-Code — Vorteil: einfach zu erstellen; kostengünstig; umfangreiche Datenmenge zur Beschreibung möglich — Nachteil: kann bei Verschmutzung oder Sichtbehinderung nicht gelesen werden\nRFID-Chip — Vorteil: Auslesen auch ohne direkten Sichtkontakt möglich; umfangreiche Datenmenge zur Beschreibung möglich — Nachteil: relativ aufwendig in der Herstellung der RFID-Chips; kostenintensiv',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-a',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'a',
  topic: 'IPv6 Vorteile',
  scenario: SCENARIO,
  question:
    '3. Aufgabe (28 Punkte)\n\na) Zur fachgerechten Kommunikation zwischen den Einzelkomponenten in der Automatisierung wird über den Einsatz von IPv6 als Ersatz für IPv4 nachgedacht.\n\nNennen Sie zwei technologische Vorteile der IPv6-Adressierung gegenüber IPv4, die für den Einsatz im Bereich IoT relevant sein können.',
  maxPoints: 2,
  modelSolution:
    'z. B.:\n– Nahezu uneingeschränkte Adresszahl\n– Weltweite Erreichbarkeit einzelner Komponenten\n– Verbesserte Integration von Sicherheitsmaßnahmen wie IPSec\n– Verschlankung des Protokoll-Headers',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3b: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-b',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'b',
  topic: 'IPv6-Adressaufbau',
  scenario: SCENARIO,
  referenceText:
    'b) In einer abgeschlossenen Testumgebung soll die Kommunikation zwischen einigen Netzwerkkomponenten über IPv6 geprüft werden. Dabei soll eine globale Adresse ähnlich derjenigen aus einem anderen Teilnetz des Betriebs 2001:da8:5f2d:28::/64 verwendet werden. Hier handelt es sich bereits um eine verkürzte Schreibweise. Sie besteht aus einem 48-Bit langem Standortpräfix und einer 16-Bit Teilnetz-ID.',
  question:
    'Identifizieren Sie in der gegebenen Adresse die beiden genannten Komponenten und geben Sie die beiden Teile der Adresse in ihrer ungekürzten Form im hexadezimalen Format an.',
  maxPoints: 4,
  modelSolution: 'Ungekürztes Standortpräfix: 2001:0da8:5f2d\nUngekürzte Teilnetz-ID: 0028',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3c: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-c',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'c',
  topic: 'IPv6-Teilnetze',
  scenario: SCENARIO,
  question: 'c) Geben Sie an, wie viele Teilnetze mit der gegebenen IPv6-Adresse gebildet werden können.',
  maxPoints: 2,
  modelSolution: '2^16',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3d: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-d',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'd',
  topic: 'IPv6-Adressvergabe',
  scenario: SCENARIO,
  referenceText:
    'Testumgebung (Netzwerkdiagramm): Router (Adresse 2001:da8:5f2d:29::1/64) — Switch (Adresse 2001:da8:5f2d:29::2/64, Gateway noch einzutragen) — daran angeschlossen: Sensor mit Netzwerkanschluss (Adresse/Gateway einzutragen), Steuerung mit Netzwerk-Anschluss (Adresse einzutragen, Gateway einzutragen), Industrie PC (Adresse bereits vorgegeben: 2001:da8:5f2d:29::20/64, Gateway einzutragen).',
  question:
    'd) Vergeben Sie für die abgebildete IoT-Testumgebung nutzbare IPv6-Adressen auf der Grundlage der gegebenen globalen Adresse für alle Geräte. Vermischen Sie dabei aus Gründen der Übersichtlichkeit nicht die Adressen der Endgeräte mit denen der Netzwerkgeräte. Richten Sie die IP-Adressierung so ein, dass alle Geräte später auch aus einem anderen Teilnetz über den Router gewartet werden können.',
  maxPoints: 6,
  modelSolution:
    'Router mit Standard-Gateway: 2001:da8:5f2d:29::1/64\nSwitch — Adresse: 2001:da8:5f2d:29::2/64, Gateway: 2001:da8:5f2d:29::1/64\nSensor mit Netzwerkanschluss — Adresse: 2001:da8:5f2d:29::18/64, Gateway: 2001:da8:5f2d:29::1/64\nSteuerung mit Netzwerkanschluss — Adresse: 2001:da8:5f2d:29::19/64, Gateway: 2001:da8:5f2d:29::1/64\nIndustrie-PC — Adresse: 2001:da8:5f2d:29::20/64, Gateway: 2001:da8:5f2d:29::1/64\n\nAndere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3e: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-e',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'e',
  topic: 'IPv6 / Loopback',
  scenario: SCENARIO,
  question:
    'e) Auf dem IoT-Gerät 1 soll nun die Erreichbarkeit des Loopback-Interfaces und des Standard-Gateways auf einer Kommandozeile geprüft werden.\n\nGeben Sie die erforderlichen Befehle an.',
  maxPoints: 2,
  modelSolution: 'z. B. ping ::1, ping 2001:da8:5f2d:29::1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3f: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-f',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'f',
  topic: 'Link-Local-Adresse',
  scenario: SCENARIO,
  referenceText:
    'f) Nach der Eingabe des Befehls ip addr zur Anzeige der Netzwerkkonfiguration erscheint u. a. die Ausgabe\nfe80::62eb:69ff:fed2:d2a6/64',
  question:
    'Geben Sie den Grund dafür an, dass eine IPv6-Adresse angezeigt wird, die Sie nicht konfiguriert hatten und benennen Sie dabei die Adressart.',
  maxPoints: 2,
  modelSolution: 'Es handelt sich um eine automatisch vergebene Link-Local-(Unicast-)Adresse.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3g: ApExamQuestion = {
  id: 'ap1-2022-herbst-q3-g',
  examId: 'ap1-2022-herbst',
  questionNumber: 3,
  subPart: 'g',
  topic: 'Angebotsvergleich',
  scenario: SCENARIO,
  referenceText:
    'g) Die Geschäftsführung möchte im Umfeld der Maschinenautomatisierung die Mitarbeiter mit weiteren mobilen und robusten Geräten ausstatten. Der Bedarf beträgt im ersten Schritt 30 Stück.\n\nDrei unverbindliche Angebote:\nKriterium — Noteplus AG, Mainz — Notebook-Clever.de, Berlin — PC-Genie KG, Frankfurt\nBareinkaufspreis pro Stück — 1.000 EUR — 1.100 EUR — 1.300 EUR\nLieferbedingungen/-kosten pro Stück — Ab Werk: 15 EUR — Frachtfrei: 10 EUR — Frei Haus\nBezugspreis pro Stück — zu berechnen — zu berechnen — zu berechnen\nLieferzeit — 5 Wochen — 3 Wochen — 1 Woche\nQualität — Gut — Durchschnitt — Sehr gut\nKundenrückmeldungen auf der Homepage der Lieferanten — Öfter bei Lieferungen kleine Mängel — Lieferung ohne Beanstandung — Sehr gutes Kulanzverhalten\n\nGewichtungstabelle (auszufüllen mit Punktzahl 1=schwach bis 3=sehr gut je Anbieter, sowie gewichtetem Ergebnis):\nKriterien — Gewichtung\nBezugspreis — 11\nLieferzeit — 8\nQualität — 9\nErfahrung — 5',
  question:
    'Berechnen Sie zuerst den Bezugspreis pro Stück. Bewerten Sie anschließend die Anbieter und Angebote mit einer Skala von 1 (schwach) bis 3 (sehr gut).\n\nFühren Sie mithilfe der vorliegenden Daten einen gewichteten Angebotsvergleich durch und entscheiden Sie sich für den geeigneten Lieferanten.',
  maxPoints: 10,
  modelSolution:
    'Bezugspreise pro Stück: Noteplus AG 1.015 EUR (1.000 + 15); Notebook-Clever.de 1.100 EUR (frachtfrei bereits enthalten, keine weitere Addition da "Frachtfrei" den Bezugspreis nicht erhöht); PC-Genie KG 1.300 EUR (frei Haus, keine weiteren Kosten).\n\nGewichteter Angebotsvergleich (Punkte × Gewichtung):\nKriterien — Gewichtung — Noteplus AG (Punkte/Ergebnis) — Notebook-Clever.de (Punkte/Ergebnis) — PC-Genie KG (Punkte/Ergebnis)\nBezugspreis — 11 — 3 / 33 — 2 / 22 — 1 / 11\nLieferzeit — 8 — 1 / 8 — 2 / 16 — 3 / 24\nQualität — 9 — 2 / 18 — 1 / 9 — 3 / 27\nErfahrung — 5 — 1 / 5 — 2 / 10 — 3 / 15\nSumme — — 64 — 57 — 77\n\nEntscheidung: PC-Genie KG, Frankfurt erzielt mit 77 Punkten das beste gewichtete Ergebnis und wird empfohlen.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4aa: ApExamQuestion = {
  id: 'ap1-2022-herbst-q4-aa',
  examId: 'ap1-2022-herbst',
  questionNumber: 4,
  subPart: 'aa',
  topic: 'SQL SELECT / WHERE',
  scenario: SCENARIO,
  referenceText:
    '4. Aufgabe (24 Punkte)\n\na) Sie erhalten den Auftrag, Produktionsdaten an die Steuerung der Walzanlage zu übergeben. Die Produktionsdaten werden in einer SQL-Datenbank gespeichert. Alle Datentypen sind Ganzzahlen. Die Breite, Länge und Dicke der Wellpappe wird in der Datenbank in Millimeter gespeichert.\n\nDie Tabelle ProductionData hat den folgenden Aufbau:\nOrderID (PK), Width, Length, Thickness, Quantity\n\n' +
    SQL_SYNTAX,
  question:
    'aa) Geben Sie den SQL-Befehl an, der die Breite, die Länge, die Dicke und die Anzahl der OrderID 736298 ausgibt. Die OrderID soll nicht in der Ergebnismenge enthalten sein.',
  maxPoints: 3,
  modelSolution: 'SELECT Width, Length, Thickness, Quantity FROM ProductionData WHERE OrderID = 736298;',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4ab: ApExamQuestion = {
  id: 'ap1-2022-herbst-q4-ab',
  examId: 'ap1-2022-herbst',
  questionNumber: 4,
  subPart: 'ab',
  topic: 'SQL COUNT / GROUP BY',
  scenario: SCENARIO,
  question:
    'ab) Wie viele Produktionsaufträge für Wellpappen mit einer Dicke von 2 mm wurden bisher in der Datenbank gespeichert.\n\nGeben Sie dazu den entsprechenden SQL-Befehl an.',
  maxPoints: 4,
  modelSolution:
    'SELECT Thickness, COUNT(*) As „Anzahl Wellpappen" FROM ProductionData\nGROUP BY Thickness\nHaving Thickness = 2;',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4ac: ApExamQuestion = {
  id: 'ap1-2022-herbst-q4-ac',
  examId: 'ap1-2022-herbst',
  questionNumber: 4,
  subPart: 'ac',
  topic: 'SQL SUM / WHERE',
  scenario: SCENARIO,
  question:
    'ac) Geben Sie die Gesamtanzahl gefertigter Wellpappen aus der Datenbank an, die mit einer Dicke von 2 mm, einer Breite von 200 mm und einer Länge von 300 mm gefertigt worden sind.\n\nGeben Sie dazu den entsprechenden SQL-Befehl an.',
  maxPoints: 4,
  modelSolution:
    'SELECT SUM(Quantity) AS „Gesamtanzahl"\nFROM ProductionData\nWHERE width = 200 AND length = 300 AND Thickness = 2\nGROUP BY width;\n\nHinweis für den Prüfer: statt GROUP BY width geht auch GROUP BY length oder GROUP BY Thickness.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2022-herbst-q4-b',
  examId: 'ap1-2022-herbst',
  questionNumber: 4,
  subPart: 'b',
  topic: 'Struktogramm / Pseudocode',
  scenario: SCENARIO,
  referenceText:
    'b) Die abgefragten Produktionsdaten werden über eine entsprechende API an die Steuerung der Walzanlage übergeben. Die Auftragsdaten werden im Array result[] mit dem Index 0 bis 3 gespeichert. Sie sollen jetzt an die Steuerung der Walzanlage durch eine von Ihnen zu erstellende Funktion übergeben werden. Gehen Sie von einem Array result[] aus, bei dem im Index 0 die Breite, im Index 1 die Länge, im Index 2 die Dicke und im Index 3 die Anzahl der zu produzierenden Wellpappen stehen.\n\nErstellen Sie die Funktion „launchTask(result[])".\n\nZur Kommunikation mit der Steuerung der Walzanlage stehen Ihnen die folgenden API-Funktionen zur Verfügung:\nsetRollerDim(int,int,int) — Übergeben wird Breite, Länge und Dicke der Wellpappe.\nrollerStart() — Startet einen Auftrag von einem Stück. Es wird eine Wellpappe mit den gesetzten Parametern erzeugt.\n\nDie Walzanlage verfügt über einen Notausschalter. Sie darf nur laufen, wenn der Notaus nicht ausgelöst ist. Der Status des Notausschalters kann mit der Funktion bool getEmergencyStop() abgefragt werden, der „true" liefert wenn der Notaus ausgelöst ist und „false" wenn der Notaus nicht ausgelöst ist.\n\nVorgegebenes Struktogramm-Gerüst:\nlaunchTask(result[])\nint i = 0\nbool emergencyStop = getEmergencyStop()\n(restliche Zeilen zu ergänzen)',
  question:
    'Ergänzen Sie das gegebene Struktogramm durch die entsprechenden Befehle zur Produktion der geforderten Anzahl von Wellpappen (siehe Index 3) in den angegebenen Maßen (siehe Index 0, 1 und 2).',
  maxPoints: 7,
  modelSolution:
    'launchTask(result[])\nint i = 0\nbool emergencyStop = getEmergencyStop()\nsetRollerDim(result[0], result[1], result[2])\nwiederhole solange i < result[3] und emergencyStop = false\n    rollerStart()\n    emergencyStop = getEmergencyStop()\n    i = i + 1\n\nBewertung: Zeile 4 (setRollerDim), 6 (rollerStart) und 8 (i = i+1) je 1 Punkt, Zeile 5 (Schleifenbedingung) und 7 (emergencyStop-Abfrage) je 2 Punkte.\n\nHinweis: Die Zeilen 6, 7 und 8 dürfen in der Reihenfolge vertauscht werden.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2022-herbst-q4-c',
  examId: 'ap1-2022-herbst',
  questionNumber: 4,
  subPart: 'c',
  topic: 'ERM',
  scenario: SCENARIO,
  referenceText:
    'c) Für die Produktion von Wellpappen ist die vorhandene Datenbank zu erweitern. Die Firma hat sich für ein SQL-fähiges relationales Datenbanksystem entschieden, in der die nachfolgenden Bedingungen berücksichtigt werden sollen. Die Speicherung der Datenbank wird auf dem Hostrechner „Steuerungs-PC" realisiert. In einer ersten Unterredung werden die zu speichernden Informationen definiert.\n\nIn dieser Datenbank sollen nur die Zusammenhänge zwischen den Walzanlagen, den Produktionsdaten abgebildet werden.\n\nIn der Produktionshalle sind mehrere Walzanlagen vorhanden. Diese jeweiligen Walzanlagen können Wellpappen mit unterschiedlichen Dicken (z. B. kleiner 4 mm, 4-8 mm, 8-12 mm) herstellen. In der Datenbank soll gespeichert werden, welche Walzanlage für welche Dicken (Spezifikation) verwendet werden kann. Außerdem soll das Baujahr, die Bezeichnung und eine eindeutige Maschinennummer gespeichert werden.\n\nFür jede Walzanlage sollen die entsprechenden Produktionsdaten (Breite, Länge, Dicke und Anzahl) mit dem jeweiligen Zeitstempel abgespeichert werden.\n\nVorgegebenes Entity-Relationship-Modell (ERM): zwei Entity-Typen "Walzanlage" und "Produktionsdaten", verbunden über eine leere Beziehungsraute; auf beiden Seiten der Beziehung stehen leere Kardinalitätsfelder; unter jedem Entity-Typ ist ein leeres (unterstrichenes) Primärschlüsselattribut vorgesehen.\n\nHinweis: Die eventuell benötigten Fremdschlüssel müssen nicht in diesem Entwurf eingetragen werden. Die Kardinalität zwischen den beiden Tabellen soll auf die entsprechenden Beziehungslinien eingetragen werden.',
  question: 'Vervollständigen Sie das vorgegebene Entity-Relationship-Modell (kurz: ERM) für diese Datenbank mit allen erforderlichen Attributen und Kardinalitäten.',
  maxPoints: 6,
  modelSolution:
    'Walzanlage (Primärschlüssel: WID) — Attribute: Spezifikation, Bezeichnung, Baujahr\nBeziehung: Walzanlage "liefert" Produktionsdaten, Kardinalität 1 : n\nProduktionsdaten (Primärschlüssel: WID) — Attribute: OrderID, Breite, Länge, Dicke, Zeitstempel\n\nBewertung: Kardinalität 1 Punkt; Kennzeichnung Primärschlüssel in beiden Tabellen 2 Punkte; Attribute 3 Punkte.\nHinweis: Fremdschlüssel# optional, nicht in der Aufgabenstellung gefordert.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

export const ap1_2022HerbstQuestions: ApExamQuestion[] = [
  q1aa,
  q1ab,
  q1b,
  q1c,
  q1d,
  q1e,
  q1f,
  q2a,
  q2ba,
  q2bb,
  q2ca,
  q2cb,
  q2cc,
  q2d,
  q2e,
  q3a,
  q3b,
  q3c,
  q3d,
  q3e,
  q3f,
  q3g,
  q4aa,
  q4ab,
  q4ac,
  q4b,
  q4c,
]
