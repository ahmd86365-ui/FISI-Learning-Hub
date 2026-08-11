import type { ApExamMeta, ApExamQuestion } from '../../types/apExam'

export const ap1_2022FruehjahrMeta: ApExamMeta = {
  id: 'ap1-2022-fruehjahr',
  area: 'AP1',
  year: 2022,
  period: 'Frühjahr',
  label: 'Frühjahr 2022',
  examDate: 'Mittwoch, 30. März 2022',
  examTitle: 'Einrichten eines IT-gestützten Arbeitsplatzes',
  courseCode: '1201',
  sourceExamPdf: 'AP1_22f.pdf',
  sourceSolutionPdf: 'Loe_AP1_22f.pdf',
  solutionSource: 'confirmed',
  taskCount: 4,
  durationMinutes: 90,
  totalPoints: 100,
}

const SCENARIO =
  'Sie absolvieren eine Ausbildung bei der AllRound AG, einem im Jahr 1985 gegründeten IT-Systemhaus mit 720 Mitarbeiterinnen und Mitarbeitern in weltweiten Niederlassungen. Nach einer Krisensituation, einem Wechsel in der Geschäftsführung und einer Neuausrichtung hat die AllRound AG sich zum Anbieter größerer und internationaler IT-Projekte entwickelt.\n\n' +
  'Ein Außendienstmitarbeiter hat erfahren, dass bei der Rullix GmbH eine Aktualisierung der IT-Gesamtkonzeption ansteht. Die Rullix GmbH produziert und vertreibt Bauteile im Bereich der E-Mobilität und besitzt weltweit mehrere Standorte. Da sie nicht über ausreichende Personalkapazitäten für die eigene Durchführung verfügt, soll dieses Projekt extern vergeben werden. Der Außendienstmitarbeiter hat bereits die Möglichkeit eines Erstkontaktes hergestellt mit dem Ziel, die Rullix GmbH als Kunden zu gewinnen.'

const AUFGABE1_REFERENCE =
  'Vorgegebenes Beispiel:\n' +
  'Folienbereich (Stichpunkt): "– Seit 1985 am Markt"\n' +
  'Notizbereich (zugehörige Botschaft): "z. B.: Beständigkeit durch über 35 Jahre Marktpräsenz und jahrzehntelange Erfahrung garantiert langfristige Partnerschaften auch in der Zukunft."\n\n' +
  'Folienbereich (auszufüllen): drei weitere Zeilen mit Aufzählungspunkten "–"\n' +
  'Notizbereich (auszufüllen): drei weitere Zeilen mit Botschaften'

const q1aa: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q1-aa',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 1,
  subPart: 'aa',
  topic: 'Kundenakquise / Präsentation',
  scenario: SCENARIO,
  referenceText: AUFGABE1_REFERENCE,
  question:
    'Als Vorbereitung auf das Erstgespräch mit der Rullix GmbH soll zunächst die AllRound AG allgemein und dann das Leistungsangebot vorgestellt werden, um die Eignung der AllRound AG für diesen Auftrag herauszustellen.\n\n' +
    'Sie sollen eine Präsentationsfolie für die allgemeine Unternehmensdarstellung der AllRound AG erstellen, um für den gewünschten Auftrag einen möglichst guten Eindruck zu hinterlassen. Aus der eingangs beschriebenen Situation sind dazu drei geeignete betriebliche Informationen herauszustellen, um diese auf der Folie als möglichst präsentationsgeeignete Stichpunkte anzuführen. Dabei soll jeder einzelne Stichpunkt eine Botschaft vermitteln. Die inhaltliche Vorlage für die gestalterische Umsetzung soll in Form von Aufzählungspunkten erfolgen, wie in dem Beispiel bereits angedeutet ist.\n\n' +
    'Vermerken Sie im Notizbereich drei inhaltliche Botschaften, welche Sie aus der obigen Situationsbeschreibung in Ihrer Präsentationsfolie zum Ausdruck bringen wollen.',
  maxPoints: 6,
  modelSolution:
    'Mögliche Inhalte (jeweils Stichpunkt → zugehörige Botschaft; drei sind auszuwählen):\n' +
    '– Seit 1985 am Markt → Beständigkeit durch über 35 Jahre Marktpräsenz und jahrzehntelange Erfahrung garantiert langfristige Partnerschaften auch in der Zukunft. (vorgegebenes Beispiel)\n' +
    '– 720 Mitarbeiter / Mitarbeiterinnen → Großer Personalkörper, um Spezialisten für jeden Sachverhalt zu stellen, Gewährleistung termingerechter Abarbeitung von personalintensiven Aufträgen.\n' +
    '– Weltweite Niederlassungen → Direkte Vor-Ort-Betreuung aller internationalen Standorte der Rullix GmbH.\n' +
    '– Gemeisterte Krisensituation → Vermarktung der gemeisterten Krisensituation als Success-Story. Zuverlässiger Partner auch in schwierigen Zeiten. Krisen werden durch innovative Lösungen gemeistert. Die AllRound AG geht gestärkt aus der vergangenen Krise hervor.\n' +
    '– Wechsel in der Geschäftsführung → (Nur bedingt geeignet bzw. überzeugende Begründung notwendig.)\n' +
    '– Neuausrichtung → Zielgerichtete Neuausrichtung und Spezialisierung auf das Kerngeschäft der AllRound AG. Hierdurch effizientere und verbesserte Abläufe für die Betreuung der IT-Projekte der Rullix GmbH.\n' +
    '– Anbieter für größere IT-Projekte → Sehr gute Referenzen mit großen IT-Projekten, namhaftes Referenzportfolio, das ggf. auch Partner der Rullix GmbH enthält.\n' +
    '– Anbieter für internationale IT-Projekte → Hohe interkulturelle Kompetenzen in der AllRound AG, problemlose Zusammenarbeit über mehrere Zeit- und Sprachzonen hinweg.\n\n' +
    'Alternative Botschaften sind denkbar.',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1ab: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q1-ab',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 1,
  subPart: 'ab',
  topic: 'Kundenakquise / Präsentation',
  scenario: SCENARIO,
  referenceText: AUFGABE1_REFERENCE,
  question: 'Ergänzen Sie den Folienbereich um die drei zur Botschaft passenden Aufzählungspunkte.',
  maxPoints: 3,
  modelSolution:
    'Mögliche Inhalte (Folienbereich-Stichpunkte; drei sind auszuwählen, korrespondierend zu den in aa) gewählten Botschaften):\n' +
    '– Seit 1985 am Markt (vorgegebenes Beispiel)\n' +
    '– 720 Mitarbeiter / Mitarbeiterinnen\n' +
    '– Weltweite Niederlassungen\n' +
    '– Gemeisterte Krisensituation\n' +
    '– Wechsel in der Geschäftsführung\n' +
    '– Neuausrichtung\n' +
    '– Anbieter für größere IT-Projekte\n' +
    '– Anbieter für internationale IT-Projekte',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q1-b',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Leistungsangebote / Kundenkommunikation',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Leistungsangebote" / "Erläuternder Text, in ganzen Sätzen"; Zeile "Industrie 4.0" als Beispiel vorgegeben: "Wir optimieren Ihren Produktionsprozess durch Nutzung intelligenter Informations- und Kommunikationstechnik. Angestrebt wird die Schaffung einer möglichst hohen Flexibilität durch eine weitgehend selbstorganisierte Produktion."; drei weitere Begriffe sind auszuwählen und zu erläutern.',
  question:
    'Aus dem Unternehmensportfolio der AllRound AG sind Ihnen folgende Begriffe im Gedächtnis:\n' +
    '– Industrie 4.0\n' +
    '– Support in den Bereichen Prozess- und IT-Management\n' +
    '– Migrationsunterstützung\n' +
    '– Big Data\n' +
    '– Cloud-Hosting in allen Varianten\n' +
    '– Beratung im Hinblick auf DSGVO und BDSG\n' +
    '– Webhosting\n' +
    '– Remarketing von IT-Geräten\n\n' +
    'Die Leistungsangebote der AllRound AG sollen dem Kunden nicht nur erklärt, sondern auch sprachlich überzeugend formuliert werden.\n\n' +
    'Wählen Sie aus den obenstehenden Begriffen drei aus und beschreiben Sie diese dem zukünftigen Kunden so, dass die einzelnen Leistungsangebote möglichst auftrags- und nutzenbezogen erläutert werden.',
  maxPoints: 9,
  modelSolution:
    'Industrie 4.0 (vorgegebenes Beispiel): Wir optimieren Ihren Produktionsprozess durch Nutzung intelligenter Informations- und Kommunikationstechnik. Angestrebt wird die Schaffung einer möglichst hohen Flexibilität durch eine weitgehend selbstorganisierte Produktion.\n\n' +
    'Support in den Bereichen Prozess- und IT-Management: Die betrieblichen Prozesse im Rahmen der IT-Gesamtkonzeption können durch die AllRound AG reibungslos, flexibel und vollständig transparent optimiert werden. Ihre Management-Vorgaben werden durch unsere Expertise im Bereich IT-Management bestmöglich unterstützt und in die Prozesslandschaft integriert.\n\n' +
    'Migrationsunterstützung: Die AllRound AG kann bei Aktualisierungen und Migrationen von Hard- sowie Software innerhalb des kompletten Datenverarbeitungssystems unterstützen, um Ausfallzeiten und Datenverluste weitestgehend zu vermeiden.\n\n' +
    'Big Data: Um auch komplexe und schnelllebige Daten sicher, datenschutzkonform und unter garantierten Qualitätsmaßstäben zu verarbeiten, können wir Sie im Rahmen des Themenkomplexes Big Data zielgerichtet unterstützen.\n\n' +
    'Cloud-Hosting in allen Varianten: Mit unserer Unterstützung können Sie lokale IT-Ressourcen abbauen und virtualisierte Ressourcenpools für Rechenleistung, Speicherplatz, Software, Funktionen und vieles mehr nutzen. Die Abrechnung erfolgt hierbei nutzungsbezogen und vollständig transparent. Durch diese Unterstützung kann sich das Personal der Rullix GmbH auf Ihr Kerngeschäft konzentrieren.\n\n' +
    'Beratung im Hinblick auf DSGVO und BDSG: Durch unsere zertifizierten und umfangreich geschulten Mitarbeiter / Mitarbeiterinnen können die geltenden gesetzlichen Vorgaben des Bundes sowie der EU vollständig eingehalten und in der Gesamtkonzeption berücksichtigt werden. Hierdurch können Schäden und Strafen präventiv abgewandt werden.\n\n' +
    'Webhosting: Wir können alle technischen Tätigkeiten rund um Ihre Internetpräsenz vollständig übernehmen. Neben der Bereitstellung von Speicherplatz und der administrativen Betreuung der IT-Systeme können wir auch den Support für die benötigten Softwareprodukte übernehmen. Sie können sich hierdurch vollständig auf die redaktionelle Anpassung Ihrer Inhalte konzentrieren.\n\n' +
    'Remarketing von IT-Geräten: Im Sinne der umweltgerechten Entsorgung sowie einem verantwortungsbewussten Umgang mit IT-Ressourcen, kümmert sich die AllRound AG um die Wiedervermarktung der gebrauchten IT-Geräte und sorgt somit auch für zusätzliche Einnahmen für die Rullix GmbH.\n\n' +
    'Weitere sinnvolle Beschreibungen sind denkbar.',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q1ca: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q1-ca',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 1,
  subPart: 'ca',
  topic: 'Angebotserstellung',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Informationen" / "Erläuterungen"; Zeile "Räumliche Gegebenheiten" als Beispiel vorgegeben: "Bestimmung der Entfernungen, um den logistischen Aufwand abschätzen zu können"; Zeilen "Lastenheft", "Geplanter Zeitrahmen", "Ergebnisse der Ist-Analyse" sind auszufüllen.',
  question:
    'Die AllRound AG soll ein Angebot für das Projekt zur kompletten Neuorganisation der Verwaltung und der IT-Gesamtkonzeption der Rullix GmbH erstellen.\n\n' +
    'Schildern Sie analog des Beispiels, warum folgende Informationen für die Erstellung des Angebots benötigt werden:',
  maxPoints: 6,
  modelSolution:
    'Räumliche Gegebenheiten (vorgegebenes Beispiel): Bestimmung der Entfernung, um den logistischen Aufwand abschätzen zu können.\n\n' +
    'Lastenheft: Präzise Beschreibung der Gesamtheit der Forderungen durch den Auftraggeber. Stellt die Grundlage für spätere Kalkulationen und Abnahmen dar.\n\n' +
    'Geplanter Zeitrahmen: Festlegung der Projektlaufzeit und des Start- sowie Endtermins für die rechtzeitige Bereitstellung der Ressourcen und Planung der Meilensteine.\n\n' +
    'Ergebnisse der Ist-Analyse: Festlegung der Ausgangslage und allen daraus resultierenden Tätigkeitsschritten, um den geplanten Soll-Zustand zu erreichen.\n\n' +
    'Weitere sinnvolle Erläuterungen sind denkbar.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q1cb: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q1-cb',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 1,
  subPart: 'cb',
  topic: 'Angebotserstellung',
  scenario: SCENARIO,
  question:
    'Zur Erstellung eines Angebots werden auch formale Informationen benötigt, z. B. die Adresse.\n\n' +
    'Welche formale Information könnte darüber hinaus auch noch erforderlich sein?',
  maxPoints: 1,
  modelSolution:
    '– Ansprechpartner mit Kontaktdaten (E-Mail, Telefon, Fax)\n' +
    '– Zahlungskonditionen\n' +
    '– Bindungsfrist des Angebotes\n' +
    '– Lieferbedingungen\n' +
    '– Angebotsdatum\n' +
    '– Datum der Anfrage\n' +
    '– Referenznummer des Angebotes\n' +
    '– …\n\n' +
    'Durch die Angabe „könnte" sind vielfältige Nennungen möglich.',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q2aa: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-aa',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'aa',
  topic: 'Hardware / CPU-Einbau',
  scenario: SCENARIO,
  referenceText:
    'CPU installation (Manual): "To fit the processor in the socket, first lift the lever. The CPU fits in only one correct orientation. Make sure the arrow on top of the processor is aligned with the arrow on the processor socket. Do not force the CPU into the socket to prevent bending the connectors on the socket and damaging the CPU. Gently push the processor into place. Push the lever down to secure the processor."\n\n' +
    'Abbildung: drei Schritte 1., 2., 3. mit Zeichnungen eines CPU-Sockels (1: Hebel wird nach oben/außen geklappt; 2: CPU wird mit Pfeil-Ausrichtung von oben in den Sockel eingesetzt; 3: Hebel wird zurück nach unten geklappt, um die CPU zu fixieren).',
  question:
    'Das Angebot wurde angenommen. Nach der Beschaffung einzelner Hardwarekomponenten besteht Ihre Aufgabe nun darin, die Standardarbeitsplätze zu konfigurieren. Sie sollen einzelne Komponenten einbauen und die Schnittstellen der Computer identifizieren.\n\n' +
    'Sie möchten die CPU in den CPU-Sockel des Mainboards einbauen. Dazu lesen Sie sich die folgende Anleitung durch.\n\n' +
    'Nennen Sie die drei Schritte für den Einbau der CPU.',
  maxPoints: 3,
  modelSolution:
    '1. Hebel des Sockets (Steckplatzvorrichtung) öffnen\n' +
    '2. CPU vorsichtig und anhand der Pfeilangaben korrekt einsetzen\n' +
    '3. Hebel des Sockets schließen.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2ab: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-ab',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'ab',
  topic: 'Hardware / CPU-Einbau',
  scenario: SCENARIO,
  question: 'Beschreiben Sie, welche beiden Punkte beim Schritt 2 besonders zu beachten sind.',
  maxPoints: 2,
  modelSolution:
    '1. Den Prozessor vorsichtig und ohne Gewalteinwirkung einsetzen. Andernfalls würden die CPU-Pins ggf. biegen oder abbrechen.\n' +
    '2. Die Pfeilangabe des Prozessors muss mit der Pfeilangabe auf dem Socket übereinstimmen.',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q2b: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-b',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Hardware / Wärmeleitpaste',
  scenario: SCENARIO,
  question:
    'Nach dem Einsetzen der CPU auf das Mainboard wollen Sie den CPU-Kühler montieren. Dem CPU-Kühler liegt eine kleine Tube Wärmeleitpaste bei.\n\n' +
    'Erläutern Sie, welche Aufgabe die Wärmeleitpaste hat.',
  maxPoints: 2,
  modelSolution:
    'Die Wärmeleitpaste wird verwendet, um den Wärmeübergang vom Prozessor zum CPU-Kühler zu verbessern. Außerdem werden so kleine Unebenheiten auf der Kontaktfläche ausgeglichen. Durch diese Unebenheiten würde ansonsten ein kleiner Raum mit Luft zwischen Prozessor und CPU-Kühler entstehen. Da Luft ein schlechter Wärmeleiter ist, würde dieser Luft-Raum zu einer verschlechterten Kühlleistung führen.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2c: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-c',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Hardware / Arbeitsspeicher Dual Channel',
  scenario: SCENARIO,
  referenceText:
    'Abbildung eines Motherboard-Ausschnitts mit vier RAM-Steckplätzen, von oben nach unten beschriftet: DIMM B1, DIMM B2, DIMM A1, DIMM A2.',
  question:
    'Sie möchten nun den DDR 4 Arbeitsspeicher in die Slots des Motherboards einsetzen. Sie haben zwei DDR 4 RAM Riegel und möchten den RAM im Dual Channel Modus betreiben. Auf dem Motherboard sehen Sie die folgenden Slots (DIMM B1, DIMM B2, DIMM A1, DIMM A2).\n\n' +
    'Erläutern Sie, was Sie beim Einsetzen der beiden Speicherriegel beachten müssen, damit der RAM im Dual Channel Modus arbeitet.',
  maxPoints: 3,
  modelSolution:
    'Generell sollte zunächst im Handbuch des Motherboards nachgesehen werden, wie die Belegung der Kanäle (Channel) ist.\n\n' +
    'Im vorliegenden Beispiel kann aber davon ausgegangen werden, dass das Motherboard zwei Channel besitzt. Channel A liegt an DIMM A1 und DIMM A2 an, Channel B liegt an DIMM B1 und DIMM B2 an.\n\n' +
    'Um den Dual Channel Modus sinnvoll zu betreiben, sollte also ein DDR4 RAM-Riegel je Channel verwendet werden (z. B. ein RAM-Riegel in A1 und ein RAM-Riegel in B1). Außerdem ist darauf zu achten, dass beide Riegel die gleiche Speichergröße besitzen. Ansonsten könnte der Chipsatz auf den Single Channel Mode wechseln.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2d: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-d',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'd',
  topic: 'Hardware / SSD-Anschlussarten',
  scenario: SCENARIO,
  question:
    'Als Datenspeicher haben Sie sich für eine SSD entschieden. Zur Wahl steht eine SATA SSD und eine M.2 SSD.\n\n' +
    'Nennen Sie einen Vorteil und einen Nachteil einer M.2 SSD gegenüber einer SATA SSD.',
  maxPoints: 2,
  modelSolution:
    'Die Aufgabenstellung lässt Spielraum zur Interpretation zu. Eine M.2 SSD kann trotz des Steckers theoretisch auch über SATA angebunden sein. Es ist davon auszugehen, dass eine SATA SSD sowie eine M.2 SSD mit PCIe / NVMe zur Verfügung stehen.\n\n' +
    'Vorteile einer M.2 SSD (PCIe / NVMe):\n– Schnellere Datenübertragungsraten\n– Kompaktere und leichtere Bauweise\n– Zukunftssichere Anschlussart\n\n' +
    'Nachteile einer M.2 SSD (PCIe / NVMe):\n– Teurerer Anschaffungspreis\n– Geringe Anzahl der Anschlussmöglichkeiten auf dem Motherboard.',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2e: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-e',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Hardware / Grafikkarten-Anschlüsse',
  scenario: SCENARIO,
  referenceText:
    'Foto einer Grafikkarte mit vier Anschlüssen; markiert: A (die beiden linken, schmalen Anschlüsse), B (die beiden mittleren, HDMI-förmigen Anschlüsse), C (unterster, breiter mehrpoliger Anschluss).',
  question:
    'Nachdem der PC fertig zusammengebaut ist, möchten Sie den Monitor an die Grafikkarte anschließen. Sie sehen an der Grafikkarte die folgenden Anschlüsse (A, B und C).\n\n' +
    'Um welche Anschlüsse handelt es sich bei den mit A, B und C markierten Schnittstellen?\n' +
    'Nennen Sie die korrekten Bezeichnungen/Abkürzungen.\n\n' +
    'A:\n\nB:\n\nC:',
  maxPoints: 3,
  modelSolution: 'A: DisplayPort\nB: HDMI\nC: DVI',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q2fa: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-fa',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'fa',
  topic: 'Hardware / USB-Anschlüsse',
  scenario: SCENARIO,
  referenceText:
    'Foto der rückwärtigen I/O-Blende eines Mainboards mit BIOS-Taste, einem umrahmten USB-Anschluss (beschriftet "BIOS FLBK"), zwei weiteren USB-Anschlüssen (beschriftet "SS10"), zwei weiteren USB-Anschlüssen und einem LAN-Anschluss (beschriftet "2.5G").',
  question:
    'An der Rückseite des PC sehen Sie die folgenden Anschlüsse.\n\n' +
    'Beschreiben Sie, welche Besonderheit der umrahmte USB-Anschluss hat.',
  maxPoints: 2,
  modelSolution: 'Der umrahmte USB-Anschluss kann für das BIOS bzw. UEFI-Update genutzt werden.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q2fb: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-fb',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'fb',
  topic: 'Hardware / USB-Anschlüsse',
  scenario: SCENARIO,
  referenceText: 'Foto: USB-3-Anschluss (Typ A) neben einem USB-Anschluss vom Typ C.',
  question: 'Nennen Sie zwei Vorteile des USB-C Anschlusses gegenüber dem USB-3 Anschluss.',
  maxPoints: 2,
  modelSolution:
    'USB-C gibt lediglich eine Anschlussform an, welcher USB-Standard sich dahinter verbirgt ist zunächst unklar und müsste im Datenblatt des Motherboards eingesehen werden. Nicht alle USB-C Anschlüsse unterstützen USB 3 und nicht alle USB 3 Anschlüsse verwenden die Anschlussform USB-C. USB-C bietet daher nicht immer höhere Übertragungsraten!\n\n' +
    'Vorteile USB-C:\n– Beidseitig steckbar\n– Geringerer Platzbedarf der Anschlussform\n– Höhere Stromversorgung',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q2ga: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-ga',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'ga',
  topic: 'Hardware / Taskmanager-Auswertung',
  scenario: SCENARIO,
  referenceText:
    'Taskmanager-Ausgabe:\nBasisgeschwindigkeit: 3,40 GHz\nSockets: 1\nKerne: 16\nLogische Prozessoren: 32\nVirtualisierung: Aktiviert\nL1-Cache: 1,0 MB\nL2-Cache: 8,0 MB\nL3-Cache: 64,0 MB',
  question:
    'Sie testen den PC. Der Taskmanager zeigt die folgenden Daten (siehe Referenztext).\n\n' +
    'Erläutern Sie den Begriff „Logische Prozessoren".',
  maxPoints: 2,
  modelSolution:
    'Logische Prozessoren werden verwendet, um Hyperthreading zu ermöglichen. Das heißt, dass ein physikalischer Kern der CPU in mehrere logische Kerne unterteilt wird. Hierdurch können mehrere Threads gleichzeitig in einem Prozessorkern ausgeführt werden.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q2gb: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-gb',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'gb',
  topic: 'Hardware / Cache-Speicher',
  scenario: SCENARIO,
  question: 'Beschreiben Sie allgemein die Aufgabe eines „Cache"-Speichers.',
  maxPoints: 2,
  modelSolution:
    'Bei den angegebenen Caches (L1-Cache, L2-Cache, L3-Cache) handelt es sich um Puffer-Speicher, die zwischen Arbeitsspeicher und Prozessor liegen. Durch diese Speicher reduziert sich die Anzahl der Zugriffe auf den Arbeitsspeicher. Cache-Speicher arbeiten bis zu 100-mal schneller als ein herkömmlicher Arbeitsspeicher.\n\n' +
    'Schematischer Aufbau (Diagramm der Lösung): CPU, darunter L1-Cache, darunter L2-Cache, darunter L3-Cache, darunter Arbeitsspeicher – als absteigende Kette von der CPU bis zum Arbeitsspeicher dargestellt, mit Verbindungspfeilen dazwischen.',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q2gc: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q2-gc',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 2,
  subPart: 'gc',
  topic: 'Hardware / Taktfrequenz',
  scenario: SCENARIO,
  question: 'Geben Sie die Taktfrequenz von 3,4 GHz in Hertz an.',
  maxPoints: 1,
  modelSolution: '3,40 GHz → 3.400.000.000 Hz',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q3a: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-a',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'a',
  topic: 'Netzwerk / WLAN-Authentifizierung',
  scenario: SCENARIO,
  question:
    'Ihre Aufgabe besteht darin, für ein Notebook einen Netzwerkzugriff ins Firmen-WLAN einzurichten. Hierbei handelt es sich um ein WLAN mit WPA-PSK oder auch WPA Personal.\n\n' +
    'Nennen Sie zwei wesentliche Informationen, die Sie vom Administrator erfragen müssen, um das Notebook im WLAN anmelden zu können.',
  maxPoints: 2,
  modelSolution: '– SSID (Name) des WLAN-Netzes\n– Pre-Shared-Key (PSK) / Passwort',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3b: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-b',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'b',
  topic: 'Netzwerk / WLAN-Authentifizierung',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "Verfahren" / "Vorteil" / "Nachteil" / "Unternehmensgröße"; Zeile "WPA-PSK" vorgegeben (Vorteil: Einfach umzusetzen; Nachteil: Unsicher, da PW mit steigender Anzahl von Nutzern schnell bekannt werden kann; Unternehmensgröße: Kleine Unternehmen mit wenigen Mitarbeitern); Zeile "EAP/WPA-Enterprise-RADIUS" auszufüllen.',
  question:
    'Zur Authentifizierung von Nutzern im WLAN gibt es neben dem WPA-PSK-Verfahren auch das EAP-Verfahren, welches auch als WPA-Enterprise-RADIUS bezeichnet wird.\n\n' +
    'Nennen Sie je einen Vor- bzw. Nachteil und geben Sie eine Empfehlung, in welcher Unternehmensgröße es vorwiegend eingesetzt werden sollte.',
  maxPoints: 3,
  modelSolution:
    'EAP/WPA-Enterprise-RADIUS:\n' +
    'Vorteil: Erhöhte Sicherheit durch individuelle Kombination von Benutzername und Passwort\n' +
    'Nachteil: Komplizierter umzusetzen, da ein RADIUS-Server erforderlich ist. Außerdem muss dieser Server durch geeignete Firewall-Maßnahmen besonders geschützt werden.\n' +
    'Unternehmensgröße: Mittlere und große Unternehmen',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3c: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-c',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'c',
  topic: 'Netzwerk / OSI-Modell',
  scenario: SCENARIO,
  referenceText:
    'Tabelle "OSI-Schicht Nr." / "OSI-Schicht Name" / "Verwendete Protokolle" / "Verwendete Adressen" / "Möglicher Fehler"; Zeile 4 vorgegeben (Transportschicht, TCP/UDP, Ports, Verlust eines Segments); Zeile 1 teilweise vorgegeben ("–" bei Protokolle, Möglicher Fehler: Medium getrennt); Zeilen 7, 3, 2 sind auszufüllen.',
  question:
    'Sie versuchen, die Verbindung über das WLAN herzustellen, was leider zunächst nicht gelingt. Ihre Idee ist nun, eine Fehleranalyse basierend auf den verschiedenen Schichten des OSI-Modells durchzuführen.\n\n' +
    'Ergänzen Sie zur Vorbereitung die leeren Felder in der folgenden Tabelle.\n\n' +
    'Hinweis: Geben Sie pro Feld jeweils nur ein passendes Beispiel an.',
  maxPoints: 6,
  modelSolution:
    'OSI-Schicht Nr. | OSI-Schicht Name | Verwendete Protokolle | Verwendete Adressen | Möglicher Fehler\n' +
    '7 | Anwendung (Application) | DNS, DHCP u. a. | – | Serverkonfiguration fehlerhaft / unvollständig\n' +
    '4 | Transport | TCP, UDP | Ports | Verlust eines Segments\n' +
    '3 | Vermittlung (Network) | IPv4, IPv6 u. a. | IP-Adressen | Falsche IP-Adresse vergeben\n' +
    '2 | Sicherung (Data Link) | Ethernet u. a. | MAC-Adressen | Netzwerkkarte defekt\n' +
    '1 | Bitübertragung (Physical) | – | – | Medium getrennt',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q3d: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-d',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'd',
  topic: 'Netzwerk / Fehleranalyse OSI-Schicht 1',
  scenario: SCENARIO,
  referenceText:
    'Statusfenster "Status von WLAN": IPv4-Konnektivität: Kein Netzwerkzugriff; IPv6-Konnektivität: Kein Netzwerkzugriff; Medienstatus: Aktiviert; Kennung (SSID): Vodafone-5D2D; Dauer: 4 Tage 22:09:30; Übertragungsrate: 144,0 MBit/s; Signalqualität: (Balkenanzeige, hoch); Aktivität – Gesendet: 562.738.884 Bytes, Empfangen: 14.782.812.478 Bytes.',
  question:
    'Sie überprüfen nun den Zustand der Netzwerkverbindung. Das oben beschriebene Statusfenster wird angezeigt.\n\n' +
    'Entsprechend Ihres Plans starten Sie Ihre Fehlersuche im OSI-Modell von unten nach oben (Bottom-up), beginnend mit Schicht 1. Im obenstehenden Bild suchen Sie dazu Informationen über den Zustand der Verbindung.\n\n' +
    'Benennen Sie einen Wert, welcher der OSI-Schicht 1 zuzuordnen ist und interpretieren Sie diesen bezüglich seiner Funktionalität.',
  maxPoints: 4,
  modelSolution:
    'Mögliche Werte:\n' +
    '– Medienstatus: Aktiviert\n' +
    '– Signalqualität: Hoch\n' +
    '– Übertragungsrate: 144,0 MBit/s (hoch)\n' +
    '– Aktivität: Viele gesendete und empfangene Datenpakete\n\n' +
    'Interpretation der Funktionalität:\n' +
    'OSI-Schicht 1 scheint fehlerfrei zu arbeiten, der Fehler ist in einer übergeordneten Schicht zu vermuten.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3ea: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-ea',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'ea',
  topic: 'Netzwerk / MAC-Adresse',
  scenario: SCENARIO,
  referenceText:
    'Konsolenausgabe "Drahtlos-LAN-Adapter WLAN:":\n' +
    'Verbindungsspezifisches DNS-Suffix:\n' +
    'Beschreibung. . . . . . . . . . : Marvell AVASTAR Wireless-AC Network Controller\n' +
    'Physische Adresse . . . . . . . : 50-1A-C5-F2-38-B7\n' +
    'DHCP aktiviert. . . . . . . . . : Ja\n' +
    'Autokonfiguration aktiviert . . : Ja\n' +
    'Verbindungslokale IPv6-Adresse . : fe80::85e1:1ec1:c9e2:3cbb%5(Bevorzugt)',
  question:
    'Sie starten nun das Konsolenfenster zur Analyse der OSI-Schichten 2 und 3 und erhalten nach der Eingabe eines Befehls zur Anzeige der Netzwerkkonfiguration die oben stehende Ausgabe.\n\n' +
    'Trotz des fehlenden Netzwerkzugriffs werden zwei Adressen angezeigt.\n\n' +
    'Beschreiben Sie die Herkunft der Adresse 50-1A-C5-F2-38-B7.',
  maxPoints: 2,
  modelSolution:
    'Der Hersteller des Netzwerkgerätes erhält von der IEEE ein MAC-Segment und weist hieraus dann individuelle MAC-Adressen zu den einzelnen Netzwerkgeräten zu.\n\n' +
    'Weiterführende Information:\n' +
    'Hier handelt es sich um eine MAC-Adresse aus dem MAC-Segment 50:1A:C5:00:00:00 - 50:1A:C5:FF:FF:FF. Dieses Segment wurde dem Hersteller Microsoft zugewiesen.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3eb: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-eb',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'eb',
  topic: 'Netzwerk / IPv6-Adresse',
  scenario: SCENARIO,
  question: 'Beschreiben Sie die Herkunft der Adresse fe80::85e1:1ec1:c9e2:3cbb.',
  maxPoints: 2,
  modelSolution:
    'Bei dieser Adresse handelt es sich um die link-lokale IPv6-Adresse. Die Adresse hat sich der Client unabhängig vom Netz selbst zugewiesen.',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q3fa: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-fa',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'fa',
  topic: 'Netzwerk / DHCP',
  scenario: SCENARIO,
  referenceText:
    'Konsolenausgabe "Drahtlos-LAN-Adapter WLAN:":\n' +
    'Verbindungsspezifisches DNS-Suffix:\n' +
    'Verbindungslokale IPv6-Adresse . : fe80::85e1:1ec1:c9e2:3cbb%5\n' +
    'IPv4-Adresse . . . . . . . . . . : 192.168.0.52\n' +
    'Subnetzmaske . . . . . . . . . . : 255.255.255.0\n' +
    'Standardgateway . . . . . . . . : 192.168.0.1',
  question:
    'Bei Ihrer Fehleranalyse legen Sie nun Ihren Fokus auf die Analyse der höheren OSI-Schichten.\n\n' +
    'Nach Eingabe des Befehls zur Erneuerung der IP-Adresse wird nun die oben stehende Information angezeigt.\n\n' +
    'Sie setzen Ihre Fehleranalyse nun fort.\n\n' +
    'Nennen Sie die Bezeichnung des Servers, der hier durch den Befehl zur Erneuerung der IP-Adresse kontaktiert wurde.',
  maxPoints: 1,
  modelSolution: 'DHCP-Server',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q3fb: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-fb',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'fb',
  topic: 'Netzwerk / IP-Adressierung',
  scenario: SCENARIO,
  question: 'Geben Sie die nachfolgenden Adressen des hier angegebenen Hosts an.\n\nNetzadresse:\n\nHostadresse:\n\nBroadcastadresse:',
  maxPoints: 3,
  modelSolution: 'Netzadresse: 192.168.0.0/24\nHostadresse: 0.0.0.52 oder 192.168.0.52\nBroadcastadresse: 192.168.0.255',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q3fc: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q3-fc',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 3,
  subPart: 'fc',
  topic: 'Netzwerk / Fehlerdiagnose Ping',
  scenario: SCENARIO,
  referenceText:
    'Konsolenausgabe:\n' +
    'C:\\Users\\User>ping 192.168.0.1\n\n' +
    'Ping wird ausgeführt für 192.168.0.1 mit 32 Bytes Daten:\n' +
    'Antwort von 192.168.0.1: Bytes=32 Zeit=9ms TTL=64\n' +
    'Antwort von 192.168.0.1: Bytes=32 Zeit=8ms TTL=64\n' +
    'Antwort von 192.168.0.1: Bytes=32 Zeit=9ms TTL=64\n' +
    'Antwort von 192.168.0.1: Bytes=32 Zeit=6ms TTL=64\n\n' +
    'Ping-Statistik für 192.168.0.1:\n' +
    '    Pakete: Gesendet = 4, Empfangen = 4, Verloren = 0\n' +
    '    (0% Verlust),\n' +
    'Ca. Zeitangaben in Millisek.:\n' +
    '    Minimum = 6ms, Maximum = 9ms, Mittelwert = 8ms',
  question:
    'Um die nun veränderte Situation zu prüfen, geben Sie den Befehl „ping 192.168.0.1" ein und erhalten die oben stehende Ausgabe.\n\n' +
    'Sie analysieren die Ergebnisse Ihrer gesamten Fehlersuche.\n\n' +
    'Benennen Sie den von Ihnen ermittelten Fehler.',
  maxPoints: 2,
  modelSolution:
    'Ursache des Fehlers war die fehlende Zuteilung einer IP-Adresse. Nachdem die IP-Adresse erneuert wurde, funktioniert die Netzwerkübertragung.',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q4a: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q4-a',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 4,
  subPart: 'a',
  topic: 'Workspace-Management-Software',
  scenario: SCENARIO,
  referenceText:
    'Englischsprachiger Text: "Workspace management systems prepare the PC by installation and configuration, so that the user can immediately work with the programs. Prerequisite for the automatic installation are customized setups (packages), which do not require user input. The packages are installed and configured by a software distribution agent, which must be located on each PC. The patch management controls the administration and automatic installation of patches and updates. The integrated license management combines the data of available and actually used licenses and can thus not only prevent the procurement of neither too few nor too many software licenses. The data collection during the inventory is done remotely. It can also make use of proven network management tools such as SNMP. It is therefore not necessary for the responsible personnel to obtain physical access to the individual devices, as it is the case with an inventory. The data stock can be continuously updated by the automatic collection and not only once a year."',
  question:
    'Die AllRound AG plant, für die automatisierte Konfiguration der Standardarbeitsplätze eine Workspace-Management-Software einzusetzen.\n\n' +
    'Über die Workspace-Management-Software informieren Sie sich mit dem oben stehenden Text.\n\n' +
    'Nennen Sie vier Leistungsmerkmale einer Workspace-Management-Software anhand des oben zitierten Textes.',
  maxPoints: 4,
  modelSolution: '– Softwareverteilung\n– Softwarekonfiguration\n– Updatemanagement\n– Patchmanagement\n– Lizenzmanagement\n– Inventur',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4b: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q4-b',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 4,
  subPart: 'b',
  topic: 'Workspace-Management-Software / Cloud vs. On-Premises',
  scenario: SCENARIO,
  question:
    'Die Workspace-Management-Software wird cloudbasiert oder on-premises angeboten.\n\n' +
    'Nennen Sie zwei Vor- und Nachteile einer cloudbasierten Software gegenüber der on-premises.',
  maxPoints: 4,
  modelSolution:
    'Vorteile:\n' +
    '– Kosteneinsparung durch verbrauchsorientierte Abrechnungsmodelle und durch geringere Investitionskosten\n' +
    '– Geringerer Aufwand für die Pflege und Aktualisierung der Software\n' +
    '– Kürzere Implementierungsdauer\n' +
    '– Verkürzte Kündigungsfristen\n' +
    '– Verbesserte Skalierbarkeit\n' +
    '– …\n' +
    'Weitere sinnvolle Nennungen sind denkbar.\n\n' +
    'Nachteile:\n' +
    '– Abhängigkeit vom Cloud-Dienstleister\n' +
    '– Fehlende Verfügbarkeit bei Störungen des Internetzuganges\n' +
    '– Möglicherweise Datenschutzprobleme bei der Speicherung der Daten im Ausland\n' +
    '– Erhöhte Komplexität für die Datensicherung und Verschlüsselung\n' +
    '– Interne Anpassungen sind nicht oder nur sehr erschwert möglich\n' +
    '– …\n' +
    'Weitere sinnvolle Nennungen sind denkbar.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4c: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q4-c',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 4,
  subPart: 'c',
  topic: 'Kaufmännische Rechnung / Make-or-Buy',
  scenario: SCENARIO,
  question:
    'Für die Workspace-Management-Software können die Lizenzen von einem externen Anbieter für 25,00 EUR je Lizenz und Jahr bezogen werden.\n\n' +
    'Für die Eigenentwicklung wird ein Personalaufwand von 12.000 Stunden veranschlagt. Die jährliche Wartung wird mit 140 Stunden pro Jahr über einen Zeitraum von zehn Jahren veranschlagt. Eine Mitarbeiterstunde wird mit dem internen Kostensatz von 75 EUR berechnet.\n\n' +
    'Ab welcher Lizenzanzahl ist die Eigenentwicklung über einen Zeitraum von zehn Jahren günstiger als der Fremdbezug? (Lohnsteigerungen und Erhöhung der Lizenzpreise sollen nicht berücksichtigt werden.)',
  maxPoints: 5,
  modelSolution:
    'Berechnung der Eigenentwicklung:\n' +
    'Initialer Personalaufwand:\n' +
    '12.000 h x 75,00 EUR Stundenlohn = 900.000,00 EUR\n' +
    'Wartung für zehn Jahre:\n' +
    '10 Jahre x 140 h / Jahr x 75,00 EUR Stundenlohn = 105.000,00 EUR\n' +
    'Gesamtkosten:\n' +
    '900.000,00 EUR + 105.000,00 EUR = 1.005.000,00 EUR\n\n' +
    'Um festzustellen, ab wie vielen Lizenzen die Eigenentwicklung günstiger als der Fremdbezug wäre, müssen die Gesamtkosten zunächst pro Jahr berechnet werden.\n' +
    '1.005.000,00 EUR / 10 Jahre = 100.500,00 EUR\n\n' +
    'Anschließend kann die Lizenzanzahl berechnet werden:\n' +
    '100.500,00 EUR (jährliche Kosten) / 25,00 EUR (Kosten pro Lizenz) = 4.020 Stück\n\n' +
    'Ab einer Lizenzanzahl von 4.021 Stück ist die Eigenentwicklung über einen Zeitraum von zehn Jahren günstiger als der Fremdbezug.',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q4d: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q4-d',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 4,
  subPart: 'd',
  topic: 'Programmierung / Struktogramm',
  scenario: SCENARIO,
  referenceText:
    'Variablen: PCNr (Ganzzahl – Laufvariable), SoftwareNr (Ganzzahl – Laufvariable).\n' +
    'Felder (Array): PCListe[] (Stringliste mit den Namen der PC), SoftwareListe[] (Stringliste mit den Namen der Software).\n' +
    'Funktionen: getPC() – liefert eine Liste von PC-Namen aus der Datenbank; getSoftware(String) – liefert zu dem angefragten PC eine Liste der zu installierenden Software; installSoftware(String, String) – installiert die im ersten String angegebene Software auf dem im zweiten String übergebenen PC.\n\n' +
    'Vorgegebene, in falscher Reihenfolge aufgelistete Anweisungen:\n' +
    '1. installSoftware(SoftwareListe [SoftwareNr], PCListe[PCNr])\n' +
    '2. Solange SoftwareNr < Anzahl der Elemente in SoftwareListe []\n' +
    '3. PCListe[] = getPC()\n' +
    '4. PCNr = PCNr + 1\n' +
    '5. PCNr = 0\n' +
    '6. SoftwareListe[] = getSoftware(PCListe[PCNr])\n' +
    '7. SoftwareNr = 0\n' +
    '8. SoftwareNr = SoftwareNr + 1\n' +
    '9. Solange PCNr < Anzahl der Elemente in PCListe[]\n\n' +
    '"Abbildung zu Aufgabe 4 d)": leere, nach Nassi-Shneiderman-Notation ineinander verschachtelte Kästchen als Struktogramm-Vorlage (zwei oberste Zeilen einzeln, darunter eine äußere Schleifenbox mit zwei Zeilen und einer inneren Schleifenbox mit weiteren zwei Zeilen und einer noch weiter innen liegenden Box, gefolgt von einer abschließenden Zeile unterhalb der inneren Schleife).',
  question:
    'Sie planen, eine eigene Lösung für eine automatisierte Konfiguration der Standardarbeitsplätze zu programmieren. Aus einer Datenbank werden alle zu konfigurierenden PCs ausgelesen. Danach wird für jeden PC aus der Datenbank die zu installierende Software abgefragt und auf dem PC installiert.\n\n' +
    'Tragen Sie die Anweisungen folgerichtig in das nebenstehende Struktogramm ein.',
  maxPoints: 9,
  modelSolution:
    'Vollständiges Struktogramm (Nassi-Shneiderman), von außen nach innen verschachtelt:\n' +
    'PCNr = 0\n' +
    'PCListe[] = getPC()\n' +
    'Solange PCNr < Anzahl der Elemente in PCListe[]\n' +
    '    SoftwareListe[] = getSoftware(PCListe[PCNr])\n' +
    '    SoftwareNr = 0\n' +
    '    Solange SoftwareNr < Anzahl der Elemente in SoftwareListe []\n' +
    '        installSoftware(SoftwareListe [SoftwareNr], PCListe[PCNr])\n' +
    '        SoftwareNr = SoftwareNr + 1\n' +
    '    PCNr = PCNr + 1\n\n' +
    'Hinweis: Tausch von „PCNr = 0" und „PCListe[] = getPC()" möglich. Tausch von „SoftwareNr = 0" und „SoftwareListe[] = getSoftware(PCListe[PCNr])" möglich.',
  answerStatus: 'confirmed',
  sourcePage: 12,
}

const q4e: ApExamQuestion = {
  id: 'ap1-2022-fruehjahr-q4-e',
  examId: 'ap1-2022-fruehjahr',
  questionNumber: 4,
  subPart: 'e',
  topic: 'Netzwerk / Übertragungszeit-Berechnung',
  scenario: SCENARIO,
  question:
    'Die Datenbank soll in der Cloud gesichert werden.\n\n' +
    'Berechnen Sie die Zeit in Minuten, die für die Übertragung der 100 MiByte großen Datei bei einer VDSL-Leitung mit 100 Mbit/s download und 40 Mbit/s upload benötigt wird.\n\n' +
    'Das Ergebnis ist auf volle Sekunden aufzurunden.\n\n' +
    'Der Rechenweg ist anzugeben.',
  maxPoints: 4,
  modelSolution:
    'Da es um eine Datensicherung in der Cloud handelt, muss hierbei die Upload-Geschwindigkeit beachtet werden.\n' +
    'Upload-Geschwindigkeit: 40 MBit/s\n' +
    'Dateigröße: 100 MiByte\n\n' +
    'Anschließend muss eine gemeinsame Einheit für die Berechnung der Upload-Dauer gefunden werden. Nachfolgend wird mit Bit gerechnet.\n\n' +
    'Upload-Geschwindigkeit in Bit pro Sekunde:\n' +
    '40 MBit/s ≙ 40.000 KBit/s ≙ 40.000.000 Bit/s\n\n' +
    'Dateigröße in Bit:\n' +
    '1 MiByte ≙ 1.024 KiByte\n' +
    '1 KiByte ≙ 1.024 Byte\n' +
    '1 Byte ≙ 8 Bit\n' +
    '100 MiByte ≙ 100 Byte x 1.024 x 1.024 x 8 Bit/Byte\n\n' +
    '(100 Byte x 1.024 x 1.024 x 8 Bit/Byte) / 40.000.000 Bit/s = 20,97152 s\n\n' +
    'Der Upload benötigt ca. 21 Sekunden.',
  answerStatus: 'confirmed',
  sourcePage: 14,
}

export const ap1_2022FruehjahrQuestions: ApExamQuestion[] = [
  q1aa,
  q1ab,
  q1b,
  q1ca,
  q1cb,
  q2aa,
  q2ab,
  q2b,
  q2c,
  q2d,
  q2e,
  q2fa,
  q2fb,
  q2ga,
  q2gb,
  q2gc,
  q3a,
  q3b,
  q3c,
  q3d,
  q3ea,
  q3eb,
  q3fa,
  q3fb,
  q3fc,
  q4a,
  q4b,
  q4c,
  q4d,
  q4e,
]
