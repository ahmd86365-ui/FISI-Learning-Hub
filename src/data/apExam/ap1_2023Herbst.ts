import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2023HerbstMeta: ApExamMeta = {
  id: 'ap1-2023-herbst',
  area: 'AP1',
  year: 2023,
  period: 'Herbst',
  label: 'Herbst 2023',
  examDate: 'Dienstag, 19. September 2023',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_23h.pdf',
  sourceSolutionPdf: 'Loe_AP1_23h.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie absolvieren Ihre Ausbildung bei der OptiSoft-XXL GmbH. Diese hat sich als Systemhaus darauf spezialisiert, Software für Handwerksbetriebe herzustellen und anzupassen. Die Geschäftsleitung legt großen Wert auf eine umfassende Kundenbetreuung. Bisher beschränkte sich diese im Wesentlichen auf die üblichen Öffnungszeiten des Unternehmens. Zur Verbesserung der Konkurrenzfähigkeit soll ein 24/7-Service als eigene Abteilung mit passenden PC-Arbeitsplätzen eingerichtet werden.'

const Q1_INTRO_REFERENCE =
  'Die OptiSoft-XXL GmbH möchte ihre Servicequalität verbessern. Der bestehende Prozess zeigt Schwachstellen. Zuerst unterziehen Sie den Prozess der Störungsmeldungen einer Ist-Analyse.\n\n' +
  'Hierzu erhalten Sie von der IT-Abteilung die folgenden Informationen:\n' +
  '– Kunden senden Störungsmeldungen.\n' +
  '– Die Störungsmeldungen werden von der IT-Abteilung erfasst.\n' +
  '– Die IT-Abteilung erstellt die Arbeitsplanung für die kommende Woche freitags. Dies beinhaltet auch immer eine Priorisierung.\n' +
  '– Die Arbeitsaufträge werden vom Serviceteam bearbeitet. Dies beinhaltet immer eine Rückmeldung.'

const q1a: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-a',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'a',
  topic: 'UML / Anwendungsfalldiagramm',
  scenario: SCENARIO,
  referenceText:
    Q1_INTRO_REFERENCE +
    '\n\nBereits angefangenes UML-Anwendungsfalldiagramm (Use Case Diagram): Ein Akteur (unbeschriftet, links) ist verbunden mit einem leeren Anwendungsfall (unten links) sowie mit "Störungsmeldung erfassen"; ein weiterer Akteur (unbeschriftet, rechts) ist verbunden mit einem leeren Anwendungsfall (oben rechts) und mit "Störungsmeldung erfassen"; der Akteur "Serviceteam" (rechts, vorgegeben) ist mit "Arbeitsauftrag bearbeiten" verbunden. Zwei «include»-Beziehungen sind bereits eingezeichnet: vom oberen rechten (unbeschrifteten) Anwendungsfall zum oberen linken (unbeschrifteten) Anwendungsfall, und von "Arbeitsauftrag bearbeiten" zum unteren linken (unbeschrifteten) Anwendungsfall. Rechtecke unter den beiden unbeschrifteten Akteuren sind zur Beschriftung vorgesehen.',
  question:
    'Ergänzen Sie das bereits angefangene UML-Anwendungsfalldiagramm (Use Case Diagram) um die fehlenden Anwendungsfälle und Bezeichnungen der Akteure.',
  maxPoints: 6,
  modelSolution:
    '6 Punkte (1 Punkt je ergänztem Akteur und Anwendungsfall)\n\n' +
    'Lösungsdiagramm: Akteur "Kunde" (links) verbunden mit Anwendungsfall "Störungsmeldung senden" und mit "Störungsmeldung erfassen"; Akteur "IT-Abteilung" (rechts) verbunden mit Anwendungsfall "Arbeitsplanung" und mit "Störungsmeldung erfassen"; Akteur "Serviceteam" (vorgegeben) verbunden mit "Arbeitsauftrag bearbeiten". «include»-Beziehungen: "Arbeitsplanung" includes "Priorisierung"; "Arbeitsauftrag bearbeiten" includes "Rückmeldung".',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ba: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-ba',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'ba',
  topic: 'Prozessanalyse / Service',
  scenario: SCENARIO,
  referenceText:
    Q1_INTRO_REFERENCE +
    '\n\nAktuell müssen die Störungsmeldungen als E-Mail gesendet werden. Diese werden in einer Tabellenkalkulation verwaltet. Einmal in der Woche am Freitag erfolgt die Arbeitsplanung. Die Arbeitszeit des Serviceteams ist von montags – freitags von 8.00 bis 17:00 Uhr.',
  question: 'Beschreiben Sie zwei Kritikpunkte an diesem Ablauf.',
  maxPoints: 4,
  modelSolution:
    'Beschreibungen zu folgenden Kritikpunkten:\n' +
    '– Langsame Reaktion bei dringenden Störungen\n' +
    '– Kontaktaufnahme nur per Mail möglich\n' +
    '– Daten in der Tabellenkalkulation nicht transparent und revisionssicher\n' +
    '– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1bb: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-bb',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'bb',
  topic: 'Prozessanalyse / Service',
  scenario: SCENARIO,
  question: 'Nennen Sie zwei geeignete Maßnahmen, um die Servicequalität zu verbessern.',
  maxPoints: 2,
  modelSolution:
    '– Einführung eines Ticketsystems\n' +
    '– Einführung eines CRM-Systems\n' +
    '– Schnellere Bearbeitung dringender Notfälle\n' +
    '– Einführung eines Premiumservices mit schneller Reaktionszeit\n' +
    '– Einführung eines Schichtsystem zur 24/7-Betreuung\n' +
    '– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1c: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-c',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Bedarfsanalyse',
  scenario: SCENARIO,
  question:
    'Sie sind sich unsicher, ob die vorgeschlagenen Maßnahmen ausreichend sind.\n\n' +
    'Nennen Sie drei Methoden für eine Bedarfsanalyse, um die Kundenbedürfnisse zu identifizieren.',
  maxPoints: 3,
  modelSolution:
    '– Interviews durchführen\n– Schriftliche Befragungen (online oder postalisch)\n– Fokusgruppe interviewen\n– Beschwerden auswerten\n– Medien analysieren\n– u. a.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const Q1D_REFERENCE =
  'Der zukünftig bessere Service wird ohne höhere Kosten nicht zu erreichen sein.\n\n' +
  'Beantworten Sie die nachfolgenden Fragen auf Deutsch anhand des englischsprachigen Artikels.\n\n' +
  '"It is important to pay attention to the prices you set for your services, because they can determine the success of your business. If you price your services too high, you may be rejected by customers and fail to find sales, no matter how good they are. On the other hand, if you set your prices too low, you will not cover your costs. There is no set method for pricing services. Here are four points they should consider for service pricing.\n' +
  '– Calculate your costs.\n– Know your customers.\n– Look at the market.\n– Choose a pricing model."'

const q1da: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-da',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'da',
  topic: 'IT-Englisch / Preisgestaltung',
  scenario: SCENARIO,
  referenceText: Q1D_REFERENCE,
  question: 'Benennen Sie eine Gefahr, die bei zu hohen Service-Preisen besteht.',
  maxPoints: 1,
  modelSolution: 'Kunden gehen verloren./Sie können von Kunden abgewiesen werden.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1db: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-db',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'db',
  topic: 'IT-Englisch / Preisgestaltung',
  scenario: SCENARIO,
  referenceText: Q1D_REFERENCE,
  question: 'Benennen Sie eine Gefahr, die bei zu niedrigen Service-Preisen besteht.',
  maxPoints: 1,
  modelSolution: 'Die OptiSoft-XXL GmbH arbeitet nicht kostendeckend./Sie wird ihre Kosten nicht decken.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1dc: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-dc',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'dc',
  topic: 'IT-Englisch / Preisgestaltung',
  scenario: SCENARIO,
  referenceText: Q1D_REFERENCE,
  question: 'Nennen Sie die vier im Text genannten Aspekte zur Service-Preis-Bestimmung.',
  maxPoints: 4,
  modelSolution:
    '– Berechnen/Kalkulieren Sie Ihre Kosten.\n– Kenne deinen Kunden.\n– Den Markt beobachten /Schauen Sie sich den Markt an.\n– Wählen Sie ein Preismodell.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1e: ApExamQuestion = {
  id: 'ap1-2023-herbst-q1-e',
  examId: 'ap1-2023-herbst',
  questionNumber: 1,
  subPart: 'e',
  topic: 'Kommunikation / 4-Ohren-Modell',
  scenario: SCENARIO,
  referenceText: 'Nach der vorgenommenen Preiserhöhung ruft ein Kunde an und sagt zu Ihnen: „Die Service-Preise sind ihr Geld nicht wert!".',
  question:
    'Beurteilen Sie diese Aussage nach dem 4-Ohren-Modell.\n\n1. Sachaspekt:\n2. Selbstaussage:\n3. Beziehungsaspekt:\n4. Appell:',
  maxPoints: 4,
  modelSolution:
    '1. Sachaspekt: „Die Service-Preise sind ihr Geld nicht wert."\n' +
    '2. Selbstaussage: „Ich bin unzufrieden mit den neuen Service-Preisen."\n' +
    '3. Beziehungsaspekt: „So geht man nicht mit seinen Kunden um."\n' +
    '4. Appell: „Ich möchte eine Reduzierung der Preise oder eine bessere Leistung für den gleichen Preis."\n\n' +
    'Andere Lösungen sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const Q2_INTRO_REFERENCE = 'Zur Realisierung des 24/7-Services gilt es im Vorfeld u. a., die Rahmenbedingungen zur Telearbeit zu klären. Sie wirken hierbei mit.'

const q2a: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-a',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Telearbeit / Ausstattung',
  scenario: SCENARIO,
  referenceText: Q2_INTRO_REFERENCE,
  question:
    'Der Teamleiter möchte zur Telearbeit PCs verwenden.\n\n' +
    'Was ist darüber hinaus noch nötig, um am Telearbeitsplatz die anfallenden betrieblichen Aufgaben erledigen zu können?\n\n' +
    'Nennen und begründen Sie zwei weitere Anschaffungen oder Maßnahmen.',
  maxPoints: 4,
  modelSolution:
    'z. B.\n' +
    '– Headset zum Senden und Empfangen von akustischen Signalen, z. B. bei Videokonferenzen\n' +
    '– Kamera zur Übertragung des eigenen Bildes\n' +
    '– Telefon für betriebliche Gespräche\n' +
    '– Drucker für betriebliche Ausdrucke\n' +
    '– Ergonomischer Bürostuhl zur Vermeidung von gesundheitlichen Schäden\n' +
    '– Blendfreie Lichtquelle für ermüdungsfreies Arbeiten\n' +
    '– Gesicherter Internetanschluss zur datenschutzkonformen Kommunikation',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2b: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-b',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Telearbeit / Bildschirmarbeitsplatz',
  scenario: SCENARIO,
  question:
    'Ein Kollege unterbreitet den Vorschlag, Tablets zum Einsatz im Homeoffice anzuschaffen.\n\n' +
    'Erläutern Sie anhand von zwei Aspekten, warum die Anforderungen an einen Bildschirmarbeitsplatz durch ein Tablet nicht erfüllt werden.',
  maxPoints: 4,
  modelSolution:
    'Antworten u. a. in folgenden Bereichen möglich:\n– Ergonomie\n– Anschlussmöglichkeiten\n– Softwarenutzung\n– Leistung',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2c: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-c',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Telearbeit / Ergonomie',
  scenario: SCENARIO,
  question:
    'Als Kompromiss hat man sich auf den Einsatz von Notebooks geeinigt.\n\n' +
    'Beschreiben Sie zwei Möglichkeiten bzw. Ergänzungen, die Arbeit mit den Notebooks ergonomischer zu gestalten.',
  maxPoints: 4,
  modelSolution:
    '– Einsatz einer ergonomischen Tastatur\n– Einsatz einer ergonomischen Maus\n– Zusätzlicher Bildschirm\n– Dockingstation\n– u. a.\n\nOder weitere sinnvolle Antworten',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-d',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'd',
  topic: 'Telearbeit / Homeoffice',
  scenario: SCENARIO,
  referenceText: 'Tabelle "Vorteile von Homeoffice für die Beschäftigten" | "Nachteile von Homeoffice für die Beschäftigten" (auszufüllen, je zwei Einträge).',
  question:
    'Als Vorbereitung für das anstehende Gespräch mit dem Betriebsrat sollen Sie Vor- und Nachteile von Homeoffice für die Beschäftigten zusammentragen.\n\n' +
    'Tragen Sie in die nachfolgende Tabelle jeweils zwei mögliche Vorteile und zwei Nachteile ein.',
  maxPoints: 4,
  modelSolution:
    'Vorteile von Homeoffice für die Beschäftigten:\n' +
    '– Keine Fahrtkosten zur Arbeitsstelle\n– Kein Zeitverlust durch Pendeln\n– Flexiblere Arbeitszeitgestaltung\n– Häusliche Umgebung\n– Mehr Gestaltungsmöglichkeiten des Arbeitsumfelds\n– Bessere Work-Life-Balance\n– u. a.\n\n' +
    'Nachteile von Homeoffice für die Beschäftigten:\n' +
    '– Vermischung von Beruf und Privatem\n– Soziale Kontakte reduziert\n– Vernachlässigung der Pausenzeiten\n– Kein geregeltes Arbeitsende\n– Selbstdisziplin erforderlich\n– Erschwerte berufliche Weiterentwicklung\n– u. a.\n\n' +
    'Oder andere sinnvolle Antworten',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-e',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Kaufmännische Rechnung / Hotline-Kalkulation',
  scenario: SCENARIO,
  referenceText:
    'Im Rahmen des 24/7-Services will die OptiSoft-XXL GmbH ihre Hotline zur angebotenen Software um die Zeit zwischen 20:00 Uhr und 06:00 Uhr erweitern. Für diese Zeit ist für den First-, Second- und Third-Level-Support die häusliche Erreichbarkeit als Bereitschaftszeit jeweils eines Mitarbeiters erforderlich.\n\n' +
    'Jeder Anruf wird zunächst vom First-Level-Support entgegengenommen und dann gegebenenfalls weitergeleitet. Auch wenn dies der Fall ist, soll dieser zusätzliche Service den Kunden als einheitlicher Minutenpreis angeboten werden. Weitere mögliche Kosten und Nachbereitungszeiten zu den Anrufen sollen nicht berücksichtigt werden.\n\n' +
    'Tabelle: | First-Level-Support | Second-Level-Support | Third-Level-Support\n' +
    'Stundensatz für die Bereitschaft in EUR | 12,00 | 15,00 | 20,00\n' +
    'Minutensatz bei Anruf in EUR | 0,50 | 1,00 | 1,50\n' +
    'Durchschnittliche Anrufzeit in Minuten pro Nachtschicht | 150 | 100 | 50',
  question:
    'Berechnen Sie, zu welchem einheitlichen Minutensatz kalkuliert werden muss, um die Kosten der Tabellenangaben exakt zu decken. Der Rechenweg muss nachvollziehbar sein. Runden Sie gegebenenfalls auf den nächsten Cent auf.',
  maxPoints: 5,
  modelSolution:
    '(pro Schritt ein Punkt)\n' +
    'Gesamtkosten Bereitschaft: (12,00 + 15,00 + 20,00) * 10 = 470,00 [EUR]\n' +
    'Gesamtminuten: 150 + 100 + 50 = 300 [Minuten]\n' +
    'Kosten beanspruchte Anrufzeit: (0,50 * 150) + (1,00 * 100) + (1,50 * 50) = 250,00 [EUR]\n' +
    'Kosten gesamt: 470,00 + 250,00 = 720,00 [EUR]\n' +
    'Minutensatz: 720,00 / 300 = 2,40 EUR',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2f: ApExamQuestion = {
  id: 'ap1-2023-herbst-q2-f',
  examId: 'ap1-2023-herbst',
  questionNumber: 2,
  subPart: 'f',
  topic: 'Kommunikation / Kundenargumentation',
  scenario: SCENARIO,
  question:
    'Die Kostenpflichtigkeit der Hotline zu dieser Software muss den Kunden kommuniziert werden.\n\n' +
    'Formulieren Sie (in ganzen Sätzen) zwei überzeugende Argumente, die als Text für eine E-Mail verwendet werden können.',
  maxPoints: 4,
  modelSolution:
    '4 Punkte, 2 x 2 Punkte\n' +
    'Mögliche inhaltliche Aspekte der Argumente:\n' +
    '– Die Hotline außerhalb der Geschäftszeiten ist ein weiteres Zusatzangebot, das in der Kalkulation der Software nicht enthalten ist.\n' +
    '– Jederzeitige Erreichbarkeit qualifizierter Ansprechpartner außerhalb der üblichen Geschäftszeiten gewährleistet einen reibungslosen und störungsfreien Geschäftsablauf beim Kunden.\n' +
    '– Die Finanzierung der Hotline erfolgt nach dem Verursachungsprinzip und nicht über den Preis der Software.\n' +
    '– Die Kostenpflicht der Hotline ermöglicht/garantiert die Finanzierung qualifizierter Mitarbeiter.\n\n' +
    'Auch andere sinnvolle Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const Q3_INTRO_REFERENCE = 'Bei der Nutzung Ihres firmeneigenen Laptops als heimbasierten Telearbeitsplatz ist es u. a. wichtig, den Schutz der Kundendaten zu gewährleisten.'

const q3a: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-a',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Datenschutz / Rechtsgrundlagen',
  scenario: SCENARIO,
  referenceText: Q3_INTRO_REFERENCE,
  question: 'Nennen Sie dazu zwei in Deutschland für den Datenschutz relevante gesetzliche Grundlagen.',
  maxPoints: 2,
  modelSolution:
    'Z. B. Bundesdatenschutzgesetz, DSGVO, Strafgesetzbuch (Vorbereitung des Ausspähens und Abfangens von Daten), Grundgesetz (Art. 10 Fernmeldegeheimnis), Landesdatenschutzgesetz',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3b: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-b',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'b',
  topic: 'IT-Sicherheit / BSI-Maßnahmen',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Zugriffsschutz auf mobile Datenträger" | "Verschlüsselung der lokalen SSD", Zeilen: Zutrittsschutz Telearbeitsplatz, Sichere Anmeldung am Laptop, Sichere Datenkommunikation, Transport von Datenträgern (rechte Spalte auszufüllen).',
  question:
    'Das Bundesamt für Sicherheit in der Informationstechnik (BSI) gibt Anforderungen zum Schutz von Informationen für die Telearbeit vor und stellt dazu Umsetzungshinweise zur Verfügung.\n\n' +
    'Nennen Sie jeweils ein Beispiel für eine sinnvolle technisch-organisatorische Maßnahme aus den folgenden Bereichen.',
  maxPoints: 4,
  modelSolution:
    'Zugriffsschutz auf mobile Datenträger | Verschlüsselung der lokalen SSD\n' +
    'Zutrittsschutz Telearbeitsplatz | z. B. separaten Arbeitsraum suchen, Fenster schließen, Türen abschließen, abschließbarer Schrank für Laptop o. Ä.\n' +
    'Sichere Anmeldung am Laptop | z. B. Verwendung sicherer Passwörter, Zweifaktor-Authentifizierung o. Ä.\n' +
    'Sichere Datenkommunikation | z. B. Verwendung eines VPNs, Verwendung sicherer Protokolle, Festlegung von eingeschränkten Zugriffszeiten, Protokollierung o. Ä.\n' +
    'Transport von Datenträgern | z. B. Sicherheitsschulung der Kuriere, Verwendung staub- und wasserdichter Transportkoffer, Übergabe nur an berechtigte Personen, Protokollierung, Verschlüsselung o. Ä.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const Q3C_INTRO_REFERENCE =
  'Zur Umsetzung des Zugriffsschutzes auf mobile Datenträger gibt Ihnen Ihr Arbeitgeber vor, Ihre lokale SSD zu verschlüsseln. Dazu sollen Sie das in Ihrem Laptop vorhandene Trusted Platform Module (TPM) und eine Verschlüsselungssoftware verwenden. Das TPM dient hier als Schlüsselspeicher. Beim Start des PCs soll das Laufwerk jeweils durch ein Passwort entsperrt werden. Für den Fall, dass Sie Ihren PC nicht entsperren können, wird ein Wiederherstellungsschlüssel getrennt aufbewahrt.'

const q3ca: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-ca',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'ca',
  topic: 'IT-Sicherheit / Passwortsicherheit',
  scenario: SCENARIO,
  referenceText: Q3C_INTRO_REFERENCE,
  question: 'Nennen Sie zwei Kriterien für ein sicheres Passwort.',
  maxPoints: 2,
  modelSolution: 'Z. B. Mindestlänge acht Zeichen, besteht aus Groß-/Kleinbuchstaben und Sonderzeichen, Passwort ist nicht in Wörterbuch zu finden o. Ä.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q3cb: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-cb',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'cb',
  topic: 'IT-Sicherheit / Wiederherstellungsschlüssel',
  scenario: SCENARIO,
  referenceText:
    Q3C_INTRO_REFERENCE +
    '\n\nBei der Einrichtung der Verschlüsselungssoftware müssen Sie auswählen, wie der Wiederherstellungsschlüssel gesichert werden soll.\n\n' +
    'Tabelle "Vorteil" | "Nachteil" für die Verfahren: "Auf PC in Textdatei speichern" (Beispiel vorgegeben: Vorteil "Kein zusätzlicher Speicher erforderlich", Nachteil "Kann im Wiederherstellungsfall ggf. nicht mehr erreicht werden"), "In Cloud-Speicher hochladen", "Auf USB-Stick speichern", "Wiederherstellungsschlüssel ausdrucken" (auszufüllen).',
  question: 'Beurteilen Sie die vorgeschlagenen Verfahren, indem Sie stichwortartig jeweils einen charakteristischen Vorteil und einen Nachteil nennen.',
  maxPoints: 3,
  modelSolution:
    'Auf PC in Textdatei speichern – Vorteil: Kein zusätzlicher Speicher erforderlich; Nachteil: Kann im Wiederherstellungsfall ggf. nicht mehr erreicht werden (vorgegeben)\n' +
    'In Cloud-Speicher hochladen – Vorteil: z. B. von verschiedenen IT-Geräten aus erreichbar o. Ä.; Nachteil: z. B. Cloud-Provider hält Datenschutzrichtlinien nicht ein o. Ä.\n' +
    'Auf USB-Stick speichern – Vorteil: z. B. Mobilität o. Ä.; Nachteil: z. B. kann ggf. leicht verloren gehen o. Ä.\n' +
    'Wiederherstellungsschlüssel ausdrucken – Vorteil: z. B. kein IT-Endgerät erforderlich o. Ä.; Nachteil: z. B. Drucker und Ablage erforderlich o. Ä.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3cc: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-cc',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'cc',
  topic: 'IT-Sicherheit / Schutzziele',
  scenario: SCENARIO,
  referenceText: Q3C_INTRO_REFERENCE,
  question:
    'Der Algorithmus der Verschlüsselungssoftware unterstützt die beiden Sicherheitsziele Vertraulichkeit und Integrität.\n\n' +
    'Beschreiben Sie, was dies in Bezug auf die Daten auf der SSD bedeutet.',
  maxPoints: 4,
  modelSolution:
    'Vertraulichkeit: Die Daten auf der SSD können nur von berechtigten Personen eingesehen werden.\n' +
    'Integrität: Eine Veränderung der gespeicherten Daten kann bemerkt werden.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3cd: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-cd',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'cd',
  topic: 'IT-Sicherheit / Diebstahlschutz',
  scenario: SCENARIO,
  referenceText: Q3C_INTRO_REFERENCE,
  question: 'Beurteilen Sie, inwiefern das beschriebene Verschlüsselungssystem die Daten auf der SSD im Fall eines Diebstahls des gesamten Laptops sichert.',
  maxPoints: 2,
  modelSolution: 'Auf die Daten kann nicht zugegriffen werden, da das Passwort zum Entsperren des Laufwerks nicht vorliegt.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const Q3D_INTRO_REFERENCE =
  'Zum Aufbau einer sicheren Verbindung von Ihrem Telearbeitsplatz auf einen Server im Firmennetz sollen Sie ein VPN verwenden. Zusätzlich erhalten Sie von Ihrem Arbeitgeber ein für Sie persönlich ausgestelltes digitales Zertifikat.'

const q3da: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-da',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'da',
  topic: 'IT-Sicherheit / VPN',
  scenario: SCENARIO,
  referenceText: Q3D_INTRO_REFERENCE,
  question: 'Beschreiben Sie den sicherheitstechnischen Vorteil eines Virtual Private Network (VPN).',
  maxPoints: 2,
  modelSolution: 'Eine sichere Datenübertragung auch über ein unsicheres Netz kann gewährleistet werden.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3db: ApExamQuestion = {
  id: 'ap1-2023-herbst-q3-db',
  examId: 'ap1-2023-herbst',
  questionNumber: 3,
  subPart: 'db',
  topic: 'IT-Sicherheit / digitales Zertifikat',
  scenario: SCENARIO,
  referenceText: Q3D_INTRO_REFERENCE,
  question: 'Beschreiben Sie die von Ihrem Arbeitgeber mithilfe des digitalen Zertifikats geplante Identifizierung.',
  maxPoints: 3,
  modelSolution: 'Das digitale Zertifikat dient der Authentifizierung des Mitarbeiters am Telearbeitsplatz gegenüber dem Server im Firmennetz.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const Q4_INTRO_REFERENCE = 'Zur Verwaltung der Serviceanfragen soll ein neues Ticketsystem eingeführt werden.'

const q4aa: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-aa',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'aa',
  topic: 'Projektplanung / Gantt vs. Netzplan',
  scenario: SCENARIO,
  referenceText: Q4_INTRO_REFERENCE + '\n\nIhre Aufgabe in der Planungsabteilung ist es, den Ablauf des Projektes zu überwachen.',
  question: 'Nennen Sie jeweils zwei wesentliche Merkmale von Gantt-Diagramm und Netzplan.',
  maxPoints: 4,
  modelSolution:
    'Gantt-Diagramm:\n– Bessere Visualisierung des zeitlichen Ablaufs\n– Nutzbar für Terminplanung\n– Darstellung in Balkenform\n\n' +
    'Netzplan:\n– Übersichtliche Darstellung der Abhängigkeiten von Projektphasen\n– Frühester, spätester Anfangszeitpunkt im Netzplan dargestellt\n– Besserer Vergleich der einzelnen Projektphasen\n\n' +
    'Andere Antworten sind möglich.',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4ab: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-ab',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'ab',
  topic: 'Projektplanung / Vorgehensmodell',
  scenario: SCENARIO,
  referenceText:
    'Planungsliste:\n1 – Test und Validation\n2 – Entwurf der Verteilung im Netz\n3 – Logischer Entwurf\n4 – Konzeptioneller Entwurf\n5 – Anwendung und Wartung\n6 – Physischer Entwurf/Implementierung\n\n' +
    'Tabelle "Anforderungsanalyse" mit 6 leeren Feldern (auszufüllen mit den Ziffern in richtiger Reihenfolge).',
  question:
    'Bringen Sie die folgenden Vorgänge einer Planungsliste in die richtige Reihenfolge:\n\n' +
    '1 – Test und Validation\n2 – Entwurf der Verteilung im Netz\n3 – Logischer Entwurf\n4 – Konzeptioneller Entwurf\n5 – Anwendung und Wartung\n6 – Physischer Entwurf/Implementierung\n\n' +
    'Tragen Sie hierzu die Ziffern in der richtigen Reihenfolge ein.',
  maxPoints: 3,
  modelSolution: '(je richtigem Feld 0,5 Punkte)\nAnforderungsanalyse → 4 → 3 → 2 → 6 → 1 → 5',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const Q4B_REFERENCE =
  'Für eine Projektplanung erhalten Sie die folgenden Informationen in einem Gantt-Diagramm vorgelegt:\n\n' +
  'Ein Projekt beginnt mit dem Vorgang A. Nachdem dieser Vorgang nach drei Tagen abgeschlossen ist, folgen drei parallele Vorgänge: B hat sechs Tage, D dauert acht Tage, E hat fünf Tage Dauer. B hat den Nachfolger C mit vier Tagen, an den sich der Vorgang F mit drei Tagen anschließt. C und D haben zusammen mit E den gemeinsamen Nachfolger F mit drei Tagen. Auf F folgt noch der Vorgang G mit zwei Tagen.\n\n' +
  'Danach ist das Projekt beendet.\n\n' +
  'Leere Gantt-Tabelle mit Spalten "Tage" 1–22 und Zeilen Vorgang A (Tage 1-3 als "Vorgabe" markiert), Vorgang B, Vorgang C, Vorgang D, Vorgang E, Vorgang F, Vorgang G (auszufüllen).'

const q4ba: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-ba',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'ba',
  topic: 'Projektplanung / Gantt-Diagramm',
  scenario: SCENARIO,
  referenceText: Q4B_REFERENCE,
  question: 'Erstellen Sie mithilfe der Vorgänge ein Gantt-Diagramm und zeichnen Sie die Abhängigkeiten ein.',
  maxPoints: 6,
  modelSolution:
    '(je richtigem Vorgang 1 Punkt)\n' +
    'Vorgang A: Tage 1–3 (Vorgabe)\nVorgang B: Tage 4–9\nVorgang C: Tage 10–13\nVorgang D: Tage 4–11\nVorgang E: Tage 4–8\nVorgang F: Tage 14–16\nVorgang G: Tage 17–18',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4bb: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-bb',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'bb',
  topic: 'Projektplanung / Gantt-Diagramm',
  scenario: SCENARIO,
  referenceText: Q4B_REFERENCE,
  question: 'Ermitteln Sie, nach wie vielen Tagen das Projekt frühestens beendet werden kann.',
  maxPoints: 1,
  modelSolution: 'Nach 18 Tagen',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q4bc: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-bc',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'bc',
  topic: 'Projektplanung / Gantt-Diagramm',
  scenario: SCENARIO,
  referenceText: Q4B_REFERENCE,
  question: 'Ermitteln Sie, welcher Vorgang den größten Puffer in Tagen hat.',
  maxPoints: 1,
  modelSolution: 'Vorgang C',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const Q4C_REFERENCE =
  'Die zugehörige Datenbank soll nun erstellt werden. Teile des Datenbankentwurfs wurden bereits in einem Entity-Relationship-Diagramm (ERD) umgesetzt.\n\n' +
  'Die Bearbeitung eines Tickets erfolgt in der Regel in einer oder mehreren zum Ticket gehörenden Tätigkeiten, welche durch Mitarbeiter der Serviceabteilung durchgeführt werden. Dieser Umstand soll nun noch zusätzlich in dem Ticketsystem abgebildet werden.\n\n' +
  'Zu jeder Tätigkeit soll eine ausführliche Beschreibung der durchgeführten Arbeiten und ein Ergebnis der Aktion gespeichert werden. Start und Ende der Tätigkeiten sollen festgehalten werden.\n\n' +
  'Hinweise zum bestehenden Teil des ERD:\n' +
  'Zu einem Ticket wird erfasst, zu welchem Kunden das Ticket gehört, welcher Mitarbeiter der IT-Abteilung es angelegt hat, wann es erfasst wurden sowie eine Beschreibung des Problems. Jedes Ticket bekommt außerdem eine Priorität und einen aktuellen Zustand der Bearbeitung zugeordnet.\n\n' +
  'Bestehendes ERD (Teilauszug): Entität "Kunde" mit Attributen KundenID, Name, PLZ, Ort, Strasse, Telefon, E-Mail, MitarbeiterID(FK); Entität "Mitarbeiter" mit Attributen MitarbeiterID, Name, Vorname, Telefon, E-Mail; Entität "Ticket" mit Attributen TicketID, Problembeschreibung, Prioritaet, Zustand, ErfassungDatum, MitarbeiterID(FK), KundenID(FK); Beziehung "eröffnet" zwischen Kunde (1) und Ticket (n); Beziehung "erfasst" zwischen Mitarbeiter (1) und Ticket (n). Bereits vorgegeben, aber noch nicht mit dem übrigen Diagramm verbunden: eine Entität "Taetigkeiten" mit Attributen TicketID(FK), TaetigkeitsID, Ergebnis, Beschreibung (sowie zwei weitere leere Attribut-Ellipsen) und zwei leere Beziehungsrauten (eine zwischen Ticket und Taetigkeiten, beschriftet "führt zu"; eine zwischen Mitarbeiter und Taetigkeiten, beschriftet "führt aus") ohne Kardinalitätsangaben.'

const q4ca: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-ca',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'ca',
  topic: 'Datenbank / ERM',
  scenario: SCENARIO,
  referenceText: Q4C_REFERENCE,
  question: 'Ergänzen Sie das ERD um die fehlenden Elemente zur Abbildung der Tätigkeiten in der Datenbank.',
  maxPoints: 5,
  modelSolution:
    '5 Punkte. Die Fremdschlüsselkennung (FK) kann auch weggelassen werden.\n' +
    'Je 1 Punkt für die zwei Beziehungen mit den Kardinalitäten, jeweils 1 Punkt für die Attribute.\n\n' +
    'Lösungsdiagramm: Entität "Taetigkeiten" mit Attributen TicketID(FK), MitarbeiterID(FK), TaetigkeitsID, ZeitstempelStart, ZeitstempelEnde, Ergebnis, Beschreibung. Beziehung "führt zu" zwischen Ticket (Kardinalität 1) und Taetigkeiten (Kardinalität n). Beziehung "führt aus" zwischen Mitarbeiter (Kardinalität 1) und Taetigkeiten (Kardinalität n).',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q4cb: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-cb',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'cb',
  topic: 'Datenbank / SQL',
  scenario: SCENARIO,
  question:
    'Sie erhalten von der Geschäftsleitung den Auftrag, aus statistischen Gründen die Anzahl der Tickets pro Priorität zu ermitteln. Die Ausgabe soll die Priorität und die dazugehörige Anzahl enthalten.\n\n' +
    'Erstellen Sie dazu eine geeignete SQL-Abfrage.',
  maxPoints: 2,
  modelSolution: 'SELECT Prioritaet, COUNT(TicketID) FROM Ticket GROUP BY Prioritaet;',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4cc: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-cc',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'cc',
  topic: 'Datenbank / SQL',
  scenario: SCENARIO,
  question:
    'Dem Unternehmen ist bekannt, wie viele Kunden es insgesamt hat. Nun möchte die Geschäftsleitung den Prozentsatz der Kunden ausrechnen, die Tickets eröffnet haben. Dazu muss die Anzahl der Kunden mit einem Ticket in der Ticketdatenbank bestimmt werden.\n\n' +
    'Erstellen Sie dazu eine geeignete SQL-Abfrage.',
  maxPoints: 3,
  modelSolution: 'SELECT COUNT(DISTINCT KundenID) AnzahlKunden FROM Ticket;',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4cd: ApExamQuestion = {
  id: 'ap1-2023-herbst-q4-cd',
  examId: 'ap1-2023-herbst',
  questionNumber: 4,
  subPart: 'cd',
  topic: 'Datenbank / SQL',
  scenario: SCENARIO,
  referenceText:
    'Vorliegende SQL-Abfrage:\n' +
    'SELECT Problembeschreibung, Prioritaet, Zustand, ErfassungDatum FROM Ticket WHERE Month(NOW())-Month(ErfassungDatum) > 2 AND Zustand="offen" ORDER BY ErfassungDatum ASC;',
  question:
    'Sie erhalten von der Geschäftsleitung den Auftrag zu ermitteln, welche offenen Tickets (Zustand=offen) einen Erfassungsmonat haben, der mehr als zwei Monate zurückliegt.\n\n' +
    'Analysieren Sie die vorliegende Abfrage und beschreiben Sie das zu erwartende Ergebnis.\n\n' +
    'SELECT Problembeschreibung, Prioritaet, Zustand, ErfassungDatum FROM Ticket WHERE Month(NOW())-Month(ErfassungDatum) > 2 AND Zustand="offen" ORDER BY ErfassungDatum ASC;',
  maxPoints: 3,
  modelSolution:
    'Mögliche Beschreibung\n' +
    '– Alle offenen Tickets (Zustand=offen), die einen Erfassungsmonat haben, der mehr als zwei Monate zurückliegt.\n' +
    '– Es wird dabei nur das Erfassungsdatum, die Problembeschreibung, die Priorität und der Zustand ausgegeben.\n' +
    '– Das Ergebnis ist aufsteigend vom dem ältesten zu dem neuesten Ticket sortiert.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

export const ap1_2023HerbstQuestions: ApExamQuestion[] = [
  q1a,
  q1ba,
  q1bb,
  q1c,
  q1da,
  q1db,
  q1dc,
  q1e,
  q2a,
  q2b,
  q2c,
  q2d,
  q2e,
  q2f,
  q3a,
  q3b,
  q3ca,
  q3cb,
  q3cc,
  q3cd,
  q3da,
  q3db,
  q4aa,
  q4ab,
  q4ba,
  q4bb,
  q4bc,
  q4ca,
  q4cb,
  q4cc,
  q4cd,
]
