import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2023FruehjahrMeta: ApExamMeta = {
  id: 'ap1-2023-fruehjahr',
  area: 'AP1',
  year: 2023,
  period: 'Frühjahr',
  label: 'Frühjahr 2023',
  examDate: 'Mittwoch, 1. März 2023',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1202',
  sourceExamPdf: 'AP1_23f.pdf',
  sourceSolutionPdf: 'Loe_AP1_23f.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie arbeiten in der SecuRita AG, einem Unternehmen des Finanzsektors. Hier steht eine Neustrukturierung der Arbeitsplätze unter Beachtung von Datensicherheit und Datenschutz an.\n\n' +
  'Dabei sollen Sie die folgenden Aufgaben erledigen:\n' +
  '1. Nutzwertanalyse, Vergleich Endgeräte\n' +
  '2. Bezugspreisermittlung mit Gegenüberstellung von Kauf und Leasing\n' +
  '3. Datenschutz und Datensicherheit\n' +
  '4. Einsatz von KI bei der Schadensabwicklung, Lasten- und Pflichtenheft, UML, SELECT'

const BELEG_REFERENCE =
  'Belegsatz zur 1. Aufgabe – zur Verfügung stehende Modelle der Arbeitsplatzrechner:\n' +
  '1. Notebook mit Dockingstation, NBook 840 GS: 14" Zoll FHD, i5-7300U, Webcam, 8 GB RAM, 250 GB m.2 SSD, 2 x USB-A 3.0, HDMI, Gb LAN, Audio in/out. Preis: 1432,00 EUR\n' +
  '2. All-in-One-PC MXI PRO AP241: 17 Zoll FHD IPS-Grade LED, Intel Core i3-10105, 4 GB Speicher, 500 GB HDD, WiFi 6, BT 5.1, Schwarz. Preis: 582,00 EUR\n' +
  '3. Thin-Client, HRP t530: 1 x GX-215JJ 1.5 GHz. Preis: 252,00 EUR\n' +
  '4. Desktop Rechner i5-10500T Prozessor, Hexa-Core, 16 GB RAM, 256 GB SSD, USB-C Schnittstelle mit USB 3.2, HDMI, DisplayPort, Thunderbolt 3, WLAN, BT, Gb LAN. Preis: 592,68 EUR\n' +
  '5. Zubehör: Ergonomischer Arbeitsplatzmonitor 24", Preis: 192,00 EUR; Tastatur und Maus, Preis: 34,00 EUR'

const q1a: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q1-a',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 1,
  subPart: 'a',
  topic: 'Beschaffung / Endgeräte-Vergleich',
  scenario: SCENARIO,
  referenceText:
    BELEG_REFERENCE +
    '\n\nTabelle "Vorteil" | "Nachteil" für die Zeilen: Notebook, All-in-One-PC, Thin-Client, Desktop-Rechner (auszufüllen).',
  question:
    'Das Unternehmen plant, seine Arbeitsumgebungen zu modernisieren. Das bisher genutzte Großraumbüro mit festen Arbeitsplätzen soll durch eine flexible Struktur ersetzt werden. Dafür sollen verschiedene Modelle für Arbeitsplatzrechner mithilfe einer Nutzwertanalyse verglichen werden. Die zur Auswahl stehenden Modelle finden Sie im Belegsatz.\n\n' +
    'Nennen Sie pro Modell je einen Vor- und einen Nachteil.',
  maxPoints: 4,
  modelSolution:
    'Notebook – Vorteil: mobil; Nachteil: teuer\n' +
    'All-in-One-PC – Vorteil: preisgünstig in der Anschaffung; Nachteil: schlechte Wartbarkeit und Erweiterbarkeit\n' +
    'Thin-Client – Vorteil: günstig; Nachteil: benötigt Serververbindung\n' +
    'Desktop-Rechner – Vorteil: gut erweiterbar; Nachteil: Platzbedarf\n\n' +
    'Andere Nennungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q1-b',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Beschaffung / Nutzwertanalyse',
  scenario: SCENARIO,
  referenceText:
    BELEG_REFERENCE +
    '\n\nNutzwertanalyse (1-4 Punkte möglich, 1: am schlechtesten, 4: am besten; jeder Punktwert kann nur einmal vergeben werden). ' +
    'gP = gewichtete Punkte.\n' +
    'Tabelle "Nr | Kriterium | Gewichtung | Notebook (Punkte/gP) | All-in-One-PC (Punkte/gP) | Thin-Client (Punkte/gP) | Desktop (Punkte/gP)":\n' +
    '1 | Platzbedarf | 15 % | 2 / 0,3 | 3 / 0,45 | [leer] / [leer] | [leer] / [leer]\n' +
    '2 | Ergonomie | 20 % | 2 / 0,4 | [leer] / [leer] | 4 / 0,8 | [leer] / [leer]\n' +
    '3 | Performance | 10 % | 3 / 0,3 | [leer] / [leer] | 2 / 0,2 | [leer] / [leer]\n' +
    '4 | Verfügbarkeit | 20 % | 4 / 0,8 | 2 / 0,4 | 1 / 0,2 | 3 / 0,6\n' +
    '5 | Kosten f. Wartung und Erweiterung | 15 % | 2 / 0,3 | [leer] / [leer] | 4 / [leer] | [leer] / [leer]\n' +
    '6 | Preis | 20 % | [leer] / [leer] | [leer] / [leer] | [leer] / [leer] | [leer] / [leer]\n' +
    'Auswertung (Summe gP) | 100 % | [leer] | [leer] | [leer] | [leer]',
  question:
    'Analysieren Sie die zur Verfügung stehen Modelle und ergänzen Sie die Nutzwertanalyse in den Zellen mit den fehlenden Punkten (weiße Felder). Jeder Punktwert kann nur einmal vergeben werden.\n' +
    '(1-4 Punkte möglich, 1: am schlechtesten, 4: am besten.)\n\n' +
    'Berechnen Sie anschließend für jedes Modell die Summe der gewichteten Punkte.',
  maxPoints: 16,
  modelSolution:
    '(12 Punkte für die richtige Vergabe der Punkte, 4 Punkte für die Summen, keine Punkte für die Berechnung der gP)\n\n' +
    'Nr | Kriterium | Gewichtung | Notebook P/gP | All-in-One-PC P/gP | Thin-Client P/gP | Desktop P/gP\n' +
    '1 | Platzbedarf | 15 % | 2/0,3 | 3/0,45 | 4/0,6 | 1/0,15\n' +
    '2 | Ergonomie | 20 % | 2/0,4 | 1/0,2 | 4/0,8 | 3/0,6\n' +
    '3 | Performance | 10 % | 3/0,3 | 1/0,1 | 2/0,2 | 4/0,4\n' +
    '4 | Verfügbarkeit | 20 % | 4/0,8 | 2/0,4 | 1/0,2 | 3/0,6\n' +
    '5 | Kosten f. Wartung und Erweiterung | 15 % | 2/0,3 | 1/0,15 | 4/0,6 | 3/0,45\n' +
    '6 | Preis | 20 % | 1/0,2 | 3/0,6 | 4/0,8 | 2/0,4\n' +
    'Auswertung | 100 % | 2,3 | 1,9 | 3,2 | 2,6',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q1-c',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Beschaffung / Entscheidung',
  scenario: SCENARIO,
  question:
    'Entscheiden Sie sich für eines der Modelle unter Berücksichtigung der geplanten Modernisierung der Arbeitsumgebung.\n' +
    'Begründen Sie Ihre Entscheidung.',
  maxPoints: 4,
  modelSolution:
    'Mit entsprechender Begründung verschiedene Varianten möglich!\n' +
    'z. B.:\n' +
    'Thin Clients\n' +
    'Begründung: Thin Client unterstützt am besten einen wechselnden Arbeitsplatz.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1d: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q1-d',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 1,
  subPart: 'd',
  topic: 'Beschaffung / Nutzwertanalyse',
  scenario: SCENARIO,
  question: 'Geben Sie ein weiteres sinnvolles Kriterium für die Nutzwertanalyse an. Begründen Sie Ihren Vorschlag.',
  maxPoints: 2,
  modelSolution:
    'z. B.\n' +
    '– Energieverbrauch\n' +
    '  Begründung: Kosteneinsparung oder ein Beitrag zur CO2-Einsparung\n' +
    '– Unterstützung für einen flexiblen Arbeitsplatz\n' +
    '  Beitrag zur geplanten Modernisierung der Büroumgebung',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const Q2_REFERENCE =
  'Für die Mitarbeiter sollen 3.500 neue Notebooks bezogen werden. Von den Standard-Lieferanten wurden folgende drei Angebote eingeholt:\n' +
  'Tabelle: | notebooks-günstiger.de | SMART Notebooks | Tech-ware\n' +
  'Listen-EK-Preis/Stk. | 886,31 EUR | 901,25 EUR | 1.071,00 EUR\n' +
  'Lieferantenrabatt | 0 % | 0 % | 20 %\n' +
  'Lieferantenskonto | 0 % | 0 % | 2 %\n' +
  'Lieferbedingungen | frachtfrei | frei Haus | ab Werk\n\n' +
  'Für alle Angebote gelten die folgenden Lieferkosten durch die Spedition Lieferschnell GmbH:\n' +
  '– Rollgeld zur Verladestation: 45 EUR pro 100 Stück\n' +
  '– Fracht: 100 EUR pro 100 Stück\n' +
  '– Rollgeld ab Entladestation: 55 EUR pro 100 Stück\n\n' +
  'Schema (Verkäufer → Rollgeld zur Verladestation → Fracht zur Entladestation → Rollgeld ab Entladestation → Käufer):\n' +
  '"frei Haus, frei Lager, frei Werk": Gesamte Kosten trägt der Verkäufer.\n' +
  '"frei, frachtfrei": Rollgeld zur Verladestation und Fracht trägt der Verkäufer; Rollgeld ab Entladestation trägt der Käufer.\n' +
  '"ab Lager, ab Werk": Gesamte Kosten trägt der Käufer.'

const q2aa: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-aa',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'aa',
  topic: 'Kaufmännische Rechnung / Bezugspreis',
  scenario: SCENARIO,
  referenceText:
    Q2_REFERENCE +
    '\n\nTabelle "Bezugspreis-Ermittlung" | notebooks-guenstiger.de | SMART Notebooks | Tech-ware:\n' +
    'Listen-EK-Preis/Stk. Brutto | 886,31 EUR | 901,25 EUR | 1.071,00 EUR\n' +
    'Lieferantenrabatt | 0,00 EUR | 0,00 EUR | [leer]\n' +
    '= Zieleinkaufspreis | 886,31 EUR | 901,25 EUR | [leer]\n' +
    'Lieferantenskonto | 0,00 EUR | 0,00 EUR | [leer]\n' +
    '= Bareinkaufspreis | 886,31 EUR | 901,25 EUR | [leer]\n' +
    'Bezugskosten | [leer] | [leer] | [leer]\n' +
    '= Bezugspreis | [leer] | [leer] | [leer]',
  question: 'Ermitteln Sie den Bezugspreis der einzelnen Anbieter pro Notebook durch Ergänzung der leeren Felder in der folgenden Tabelle.',
  maxPoints: 10,
  modelSolution:
    'Jedes Feld wird mit einem Punkt bewertet.\n\n' +
    '| notebooks-guenstiger.de | SMART Notebooks | Tech-ware\n' +
    'Listeneinkaufspreis | 886,31 EUR | 901,25 EUR | 1.071,00 EUR\n' +
    '- Lieferantenrabatt | 0,00 EUR | 0,00 EUR | 214,20 EUR\n' +
    '= Zieleinkaufspreis | 886,31 EUR | 901,25 EUR | 856,80 EUR\n' +
    '- Lieferantenskonto | 0,00 EUR | 0,00 EUR | 17,14 EUR\n' +
    '= Bareinkaufspreis | 886,31 EUR | 901,25 EUR | 839,66 EUR\n' +
    '+ Bezugskosten | 0,55 EUR | 0 EUR | 2,00 EUR\n' +
    '= Bezugspreis | 886,86 EUR | 901,25 EUR | 841,66 EUR',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q2ab: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-ab',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'ab',
  topic: 'Kaufmännische Rechnung / Lieferantenwahl',
  scenario: SCENARIO,
  referenceText: Q2_REFERENCE,
  question: 'Es wurde ein Lieferant mit einem höheren Bezugspreis gewählt.\n\nNennen Sie drei mögliche Gründe.',
  maxPoints: 3,
  modelSolution:
    'z. B.\n' +
    '– Höhere Zuverlässigkeit\n' +
    '– Großzügigeres Kulanzverhalten\n' +
    '– Guter Service\n' +
    '– Niedrige Reklamationsquote',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const Q2B_REFERENCE =
  'Sie erhalten ein weiteres Angebot. Die Best-IT-Service GmbH bietet die 3.500 Notebooks zu einem Gesamtpreis von 300.000,00 EUR an, alternativ einen Leasingvertrag über fünf Jahre mit einer monatlichen Leasingrate von 6.000,00 EUR mit Kaufoption.'

const q2ba: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-ba',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'ba',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  referenceText: Q2B_REFERENCE,
  question: 'Beschreiben Sie das Grundprinzip von Leasing und erklären Sie dabei die Eigentums- und Besitzverhältnisse.',
  maxPoints: 4,
  modelSolution:
    'Zeitlich begrenztes, vertraglich vereinbartes Nutzungsrecht an Gebäuden oder beweglichen Anlagegütern. (2 Punkte)\n' +
    'Eigentümer ist der Leasinggeber. (1 Punkt)\n' +
    'Besitzer ist der Leasingnehmer. (1 Punkt)',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2bb: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-bb',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'bb',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  referenceText: Q2B_REFERENCE,
  question: 'Vergleichen Sie den Kaufpreis mit den Gesamtkosten des Leasings.\n\nErmitteln Sie den Differenzbetrag.',
  maxPoints: 3,
  modelSolution:
    'Kauf: 300.000 EUR\n' +
    'Leasing: 6.000 x 60 Monate = 360.000 EUR\n' +
    'Leasing ist um 60.000 EUR teurer als Kauf.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2bc: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-bc',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'bc',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  referenceText: Q2B_REFERENCE,
  question: 'Nennen Sie drei Vorteile, die für einen Leasingvertrag sprechen.',
  maxPoints: 3,
  modelSolution:
    'z. B.\n' +
    '– Liquidität wird zunächst nur in Höhe der ersten Rate gebunden\n' +
    '– Eigenkapital wird nicht gemindert\n' +
    '– Kreditspielraum bleibt erhalten\n' +
    '– Schnellere Anpassung an den technischen Fortschritt\n' +
    '– Keine Sicherheiten notwendig, da der Leasinggeber Eigentümer bleibt\n' +
    '– Durch feste Leasingraten wird die Planung erleichtert\n' +
    '– Steuerliche Vorteile',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2bd: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q2-bd',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 2,
  subPart: 'bd',
  topic: 'Beschaffung / Leasing',
  scenario: SCENARIO,
  referenceText: Q2B_REFERENCE,
  question: 'Erläutern Sie den Begriff Kaufoption.',
  maxPoints: 2,
  modelSolution: 'Nach Vertragsablauf kann der Leasingnehmer den gemieteten Gegenstand zum Restwert oder Buchwert übernehmen.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-a',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Betriebssysteme / Schichtenmodell',
  scenario: SCENARIO,
  referenceText:
    'Schalenmodell (konzentrische Kreise): äußerer Ring [leer, zu benennen: Schicht oberhalb des Betriebssystems], mittlerer Ring "Betriebssystem" (vorgegeben), innerer Ring [leer, zu benennen: Schicht unterhalb des Betriebssystems].\n\n' +
    'Tabelle "Schicht" | "Funktion" mit zwei leeren Zeilen (auszufüllen).',
  question:
    'Sie informieren sich darüber, wie Sie bei den PCs in Ihrem Betrieb auf der Ebene der Betriebssysteme die Sicherheit verbessern könnten. Zur Einordnung der Funktionsebenen eines PCs wird häufig ein Schichten- oder ein Schalenmodell verwendet.\n\n' +
    'Benennen Sie im nebenstehenden Modell eine Schicht oberhalb und eine Schicht unterhalb des Betriebssystems.\n\n' +
    'Beschreiben Sie mithilfe der folgenden Tabelle jeweils eine Funktion Ihrer oben benannten Schichten.',
  maxPoints: 4,
  modelSolution:
    'Schicht | Funktion\n' +
    'z. B. Anwendung Textverarbeitung | Erstellung von Textdokumenten\n' +
    'Betriebssystem | Bereitstellen einer Benutzeroberfläche\n' +
    'z. B. UEFI/BIOS | Bereitstellung einer einheitlichen Schnittstelle zwischen Hardware und Betriebssystem\n' +
    'PC-Hardware | Verarbeitung und Speicherung von Daten',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const Q3B_REFERENCE =
  '„Ein Großteil der erfolgreichen Angriffe auf IT-Systeme mit Microsoft Windows 10 lässt sich bereits mit den im Betriebssystem vorhandenen Bordmitteln erkennen oder verhindern. Um die nötige Konfiguration des Betriebssystems zu erleichtern, hat das Bundesamt für Sicherheit in der Informationstechnik (BSI) im Rahmen der „Studie zu Systemaufbau, Protokollierung, Härtung und Sicherheitsfunktionen in Windows 10" (SiSyPHuS Win10) Handlungsempfehlungen zur Absicherung der Windows-Systeme in deutscher und englischer Sprache veröffentlicht. Ein Fokus bei der Erstellung lag auf der einfachen Umsetzung und praktischen Anwendung. Daher stellt das BSI die empfohlenen Konfigurationseinstellungen als direkt in Windows importierbare Gruppenrichtlinienobjekte (GPO) zum Download bereit – ein Service, der schnell und sicher ist."\n' +
  'Quelle: https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2021/210503_SiSyPHuS.html veröffentlicht am 03. Mai 2021'

const q3ba: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-ba',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'ba',
  topic: 'IT-Sicherheit / BSI',
  scenario: SCENARIO,
  referenceText: Q3B_REFERENCE,
  question:
    'Bei Ihren Recherchen zur Sicherheit rund um das Betriebssystem treffen Sie auf eine Information des Bundesamts für Sicherheit in der Informationstechnik (BSI). Beim Lesen des Textes ergeben sich die unten aufgeführten Fragen.\n\n' +
    'Nennen Sie zwei allgemeine Aufgaben des BSI.',
  maxPoints: 2,
  modelSolution:
    '– Anlaufstelle für Unternehmen und Bürger zum Thema IT-Sicherheit\n' +
    '– Erarbeitung von Standards zur IT-Sicherheit\n' +
    '– Schutz der IT-Systeme des Bundes\n' +
    '– Nennung weiterer Aufgaben laut Sicherheitsgesetz möglich\n' +
    '– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q3bb: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-bb',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'bb',
  topic: 'IT-Sicherheit / Härtung',
  scenario: SCENARIO,
  referenceText: Q3B_REFERENCE,
  question: 'Erklären Sie den Begriff der „Härtung" eines Betriebssystems.',
  maxPoints: 2,
  modelSolution: 'Reduktion von Angriffsmöglichkeiten, z. B. durch Deaktivierung von nicht notwendigen Diensten.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q3bc: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-bc',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'bc',
  topic: 'IT-Sicherheit / Härtung',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Beispiele für eine Härtung eines Betriebssystems.',
  maxPoints: 2,
  modelSolution:
    '– Entfernung oder Deaktivierung von für den Betrieb nicht zwingend erforderlichen Softwarekomponenten\n' +
    '– Reduzierung von Rechten und ihrer Vererbung auf das minimal notwendige Maß\n' +
    '– Nutzung von Verschlüsselung, z. B. für Datenübertragung\n' +
    '– Alle nicht benötigten Benutzerkonten löschen\n' +
    '– Alle nicht benötigten Ports schließen\n' +
    '– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3bd: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-bd',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'bd',
  topic: 'IT-Sicherheit / Bordmittel',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei Systemwerkzeuge („Bordmittel") eines Betriebssystems, mit denen die IT-Sicherheit erhöht werden kann.',
  maxPoints: 2,
  modelSolution: '– Firewall\n– Virenschutz\n– Datensicherung\n– Benutzerverwaltung\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3be: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-be',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'be',
  topic: 'IT-Sicherheit / Gruppenrichtlinien',
  scenario: SCENARIO,
  question: 'Beschreiben Sie, wozu Gruppenrichtlinien auf einem Arbeitsplatzrechner eingesetzt werden können.',
  maxPoints: 4,
  modelSolution:
    '– Digitale Richtlinie für verschiedene Einstellungen (Computer und Benutzer).\n' +
    '– Gruppenrichtlinien (Group Policies) erlauben den Administratoren die Vorgabe von Einstellungen zentral für einen oder mehrere Rechner. Die Einstellungen werden im Rechner festgeschrieben und können durch Anwender nicht geändert werden.\n' +
    '– Nennung von konkreten Einstellungen sind auch korrekt (z. B. Passworteinstellungen, Sperrung von Konfigurationsmöglichkeiten).',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3ca: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-ca',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'ca',
  topic: 'IT-Sicherheit / Protokollierung',
  scenario: SCENARIO,
  question:
    'Das BSI gibt weiterhin auch Empfehlungen zur Konfiguration der Protokollierung von Aktivitäten an den einzelnen Rechnern.\n\n' +
    'Beschreiben Sie, inwiefern eine Protokollierung (Logging) zur Erhöhung der IT-Sicherheit beitragen kann.',
  maxPoints: 4,
  modelSolution: 'Identifikation von Fehlern und unerlaubten Aktivitäten und Zuordnung zu entsprechenden Zeiten und Benutzern.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3cb: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q3-cb',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 3,
  subPart: 'cb',
  topic: 'IT-Sicherheit / Datenschutz bei Protokollierung',
  scenario: SCENARIO,
  question: 'Beschreiben Sie die besonderen Anforderungen an den Datenschutz, die bei der Protokollierung beachtet werden müssen.',
  maxPoints: 4,
  modelSolution:
    'Es dürfen Daten nur begrenzt gespeichert und ausgewertet werden. Nennung von konkreten Beispielen sind auch korrekt (z. B. Grundsatz der Datensparsamkeit).',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q4a: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-a',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'a',
  topic: 'KI / Chatbot',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "KI unterstützter Chatbot" | "Vorteile" | "Nachteile", Zeilen: "wirtschaftliche Aspekte", "soziale Aspekte" (auszufüllen).',
  question:
    'Die SecuRita AG möchte zukünftig die Möglichkeit bieten, Schadensfälle schnell und einfach online zu regulieren. Zum Einsatz soll ein Chatbot kommen, der über künstliche Intelligenz verfügt.\n\n' +
    'Dazu soll in einem ersten Schritt eine Übersicht über die Vorteile und Nachteile eines Chatbot unter wirtschaftlichen und sozialen Aspekten erstellt werden.\n\n' +
    'Geben Sie in jedem Feld ein zutreffendes Argument an.',
  maxPoints: 4,
  modelSolution:
    '(0,5 Punkte je richtige Antwort)\n\n' +
    'wirtschaftliche Aspekte – Vorteile: 24/7 Erreichbarkeit; Bearbeitung vieler Anfragen gleichzeitig; Entlastung der Servicemitarbeiter von einfachen Anfragen; geringere Betriebskosten; u. a.\n' +
    'wirtschaftliche Aspekte – Nachteile: hohe Anschaffungskosten; Datenschutzbedenken; komplexe Einbindung in die Systeme; keine Entscheidungsfindung; u. a.\n' +
    'soziale Aspekte – Vorteile: einfache Nutzung; keine Warteschleife; immer gut gelaunt; nehmen dem Kunden Berührungsängste; u. a.\n' +
    'soziale Aspekte – Nachteile: nicht alle Benutzer vertrauen Chatbots; mögliche Missverständnisse; ungeeignet bei komplexen Anfragen; u. a.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4ba: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-ba',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'ba',
  topic: 'Lasten- und Pflichtenheft',
  scenario: SCENARIO,
  question:
    'Die SecuRita AG hat sich für den Einsatz des Chatbots entschieden. Dazu soll in einem ersten Schritt ein Lastenheft erstellt werden.\n\n' +
    'Beschreiben Sie zwei Unterschiede zwischen einem Lastenheft und einem Pflichtenheft.',
  maxPoints: 4,
  modelSolution:
    'Das Lastenheft enthält die Anforderungen des Auftraggebers. Es beschreibt, was der Auftraggeber vom Auftragnehmer erwartet.\n' +
    'Aufgabe des Pflichtenheftes ist die Beschreibung der Leistungen, mit denen der Auftragnehmer die im Lastenheft genannten Anforderungen erfüllen will, wie und womit das Vorhaben realisiert wird. Das Pflichtenheft enthält die Leistungen, zu denen sich der Auftragnehmer verpflichtet.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4bb: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-bb',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'bb',
  topic: 'Lasten- und Pflichtenheft',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Inhalt Lastenheft" mit erster Zeile "Ausgangssituation" (vorgegeben) und zwei weiteren leeren Zeilen (auszufüllen).',
  question:
    'Sie wirken an der Erstellung des Lastenheftes mit.\n\n' +
    'Nennen Sie zwei weitere Inhalte, die neben der Ausgangssituation in ein Lastenheft gehören.',
  maxPoints: 2,
  modelSolution:
    'Ausgangssituation (vorgegeben)\n' +
    'Liste von Anforderungen\n' +
    'Rahmenbedingungen\n' +
    'Beschreibung von Schnittstellen\n' +
    'Qualitätsziele\n' +
    'Zeitziele\n' +
    'Budget\n' +
    'u. a.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-c',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'c',
  topic: 'UML / Klassendiagramm',
  scenario: SCENARIO,
  referenceText:
    'Legendenblatt "Klassendiagramm" mit Notation für Klasse, abstrakte Klasse, Schnittstelle, Notiz sowie den Beziehungsarten Vererbung, Assoziation, Multiplizität/Kardinalität, gerichtete Assoziation, Aggregation, Komposition und Implementierung (Standard-UML-Legende, keine aufgabenspezifischen Daten).',
  question:
    'Im nächsten Schritt wird ein Entwurf eines UML-Klassendiagramms für die Schadensregulierung erstellt. Für die Versicherungsfälle KFZ und Immobilie sollen eigene Klassen entworfen werden.\n\n' +
    'Die Klasse KFZ hat die Eigenschaften:\n– Hersteller\n– Typschlüssel\n– Neupreis\n– Baujahr\n– Laufleistung\n– Schadenshöhe\n\n' +
    'und Methoden:\n– restwertBerechnen()\n– auszahlen()\n\n' +
    'Die Klasse Immobilie hat die Eigenschaften:\n– Neupreis\n– Baujahr\n– Wohnfläche\n– Lagebewertung\n– Schadenshöhe\n\n' +
    'und Methoden:\n– restwertBerechnen()\n– getLagebewertung()\n– auszahlen()\n\n' +
    'Aufgabe: Erstellen Sie eine sinnvolle Klassenhierarchie mit einer gemeinsamen Oberklasse „Versicherungsobjekt".\n\n' +
    'Hinweis: Die Restwertberechnung erfolgt beim KFZ und bei der Immobilie unterschiedlich.\n' +
    'Zusätzliche Methoden, Konstruktoren und Zugriffsmodifikatoren sind nicht erforderlich.',
  maxPoints: 8,
  modelSolution:
    'Lösungsvorschlag: Je Klasse 2 Punkte, 2 Punkte für die Vererbung.\n' +
    '* Methode restwertBerechnen() zusätzlich in der Klasse Versicherungsobjekt zulässig (Polymorphie).\n\n' +
    'Lösungsdiagramm: Oberklasse "Versicherungsobjekt" mit Attributen Neupreis, Baujahr, Schadenshöhe und Methode auszahlen() (optional zusätzlich restwertBerechnen(), markiert mit *, als Polymorphie-Platzhalter zulässig). Davon erben (Vererbungspfeil nach oben) zwei Unterklassen: "KFZ" mit Attributen Hersteller, Typschlüssel, Laufleistung und Methode restwertBerechnen(); "Immobilie" mit Attributen Wohnfläche, Lagebewertung und Methoden restwertBerechnen(), getLagebewertung().',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const Q4D_REFERENCE =
  'Bei der Schadenregulierung im KFZ-Bereich werden die notwendigen Informationen in einer relationalen Datenbank gespeichert. Unter dem Attribut Fahrzeugtyp werden die Fahrzeuge nach SUV, Limousine, Geländewagen oder Cabriolet unterschieden. Das Attribut „Garage" wird mit dem Datentyp BOOLEAN abgespeichert.\n\n' +
  'Entity-Relationship-Modell (Teilauszug):\n' +
  'Entität "Versicherungsnehmer" mit Attributen VNID (PK), Name, Vorname, Geburtsdatum, PLZ, Ort, Straße, HNR, Telefon, E-Mail.\n' +
  'Entität "Fahrzeug" mit Attributen Kennzeichen (PK), Leistung_KW, Hubraum, Neuwert, Baujahr, Rahmennummer, Fahrzeugtyp, VID# (FK), Hersteller.\n' +
  'Entität "KFZ_Versicherung" mit Attributen VID (PK), km_Leistung, Versicherung_Summe, Vertragsbeginn, Garage, VNID# (FK).\n' +
  'Beziehung "abgeschlossen" zwischen Versicherungsnehmer (Kardinalität 1) und KFZ_Versicherung (Kardinalität n).\n' +
  'Beziehung "gehört" zwischen Fahrzeug (Kardinalität 1) und KFZ_Versicherung (Kardinalität 1).\n' +
  'PK bezeichnet ein Primärschlüsselattribut (unterstrichen). FK bezeichnet ein Fremdschlüsselattribut (nachgestelltes #).'

const q4da: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-da',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'da',
  topic: 'Datenbank / SQL',
  scenario: SCENARIO,
  referenceText: Q4D_REFERENCE,
  question:
    'Sie erhalten von der Versicherungszentrale den Auftrag, die durchschnittliche Versicherungssumme über alle KFZ-Versicherungsverträge zu ermitteln.\n\n' +
    'Erstellen Sie dazu eine geeignete SQL-Abfrage.',
  maxPoints: 3,
  modelSolution: 'SELECT AVG(Versicherung_Summe) FROM KFZ_Versicherung',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4db: ApExamQuestion = {
  id: 'ap1-2023-fruehjahr-q4-db',
  examId: 'ap1-2023-fruehjahr',
  questionNumber: 4,
  subPart: 'db',
  topic: 'Datenbank / SQL',
  scenario: SCENARIO,
  referenceText: Q4D_REFERENCE,
  question:
    'Sie erhalten von der Versicherungszentrale den Auftrag, die Versicherungsnummern (VID) zu ermitteln, welche im Mai 2022 abgeschlossen wurden und eine maximale Versicherungssumme von über 100.000,00 EUR beinhalten. Alle Fahrzeuge, die in einer Garage abgestellt werden, sollen in dieser Abfrage nicht angezeigt werden.\n\n' +
    'Erstellen Sie dazu eine geeignete SQL-Abfrage.',
  maxPoints: 4,
  modelSolution:
    'SELECT VID FROM KFZ_Versicherung\n' +
    'WHERE Year(Vertragsbeginn)= 2022 AND Month(Vertragsbeginn)= 5\n' +
    'AND Versicherung_Summe > 100000 AND Garage = FALSE',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

export const ap1_2023FruehjahrQuestions: ApExamQuestion[] = [
  q1a,
  q1b,
  q1c,
  q1d,
  q2aa,
  q2ab,
  q2ba,
  q2bb,
  q2bc,
  q2bd,
  q3a,
  q3ba,
  q3bb,
  q3bc,
  q3bd,
  q3be,
  q3ca,
  q3cb,
  q4a,
  q4ba,
  q4bb,
  q4c,
  q4da,
  q4db,
]
