import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Sommer 2024, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_24s.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_24s.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 *
 * Unlike some other exam papers in this series, this exam has no single
 * blanket "Ausgangssituation" box that applies to all 30 Aufgaben — each
 * Aufgabe narrates its own Ecotec GmbH context inline in the question text,
 * so no shared `scenario` constant is used except where the paper prints an
 * explicit boxed "Situation zur X. und Y. Aufgabe" (Aufgabe 15/16).
 */

export const wisoExam2024SommerMeta: WisoExamMeta = {
  id: 'wiso-2024-sommer',
  year: 2024,
  period: 'Sommer',
  label: 'Sommer 2024',
  examDate: 'Mittwoch, 24. April 2024',
  courseCodes: '1201 – 1202 – 1203 – 1204 – 1205 – 6470 – 6480',
  sourceExamPdf: 'WiSo_24s.pdf',
  sourceSolutionPdf: 'Loe_WiSo_24s.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

const q1: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q1',
  examId: 'wiso-2024-sommer',
  questionNumber: 1,
  topic: 'Probezeit',
  question:
    'Die Ecotec GmbH möchte zu Beginn des neuen Ausbildungsjahres zwei Ausbildungsplätze Fachinformatiker/Fachinformatikerin Fachrichtung Systemintegration anbieten. In die Ausbildungsverträge sollen Vereinbarungen über eine Probezeit aufgenommen werden. Welche der folgenden Aussagen über die Probezeit in Ausbildungsverträgen trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nEine Probezeit …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist bei Ausbildungsverträgen nicht erforderlich.' },
    { id: '2', text: 'muss mindestens sechs Monate betragen.' },
    { id: '3', text: 'ist nur bei kaufmännischen Berufen erforderlich.' },
    { id: '4', text: 'muss mindestens einen Monat und maximal vier Monate betragen.' },
    { id: '5', text: 'von einem Monat ist nur bei dreijähriger Ausbildungsdauer vorgeschrieben.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q2',
  examId: 'wiso-2024-sommer',
  questionNumber: 2,
  topic: 'Kündigung Ausbildungsvertrag',
  question:
    'Frau Medstein hat im September 2023 bei der Ecotec GmbH eine Ausbildung zur Fachinformatikerin Fachrichtung Anwendungsentwicklung begonnen. Sie möchte im Mai 2024 die Ausbildung abbrechen und in eine Ausbildung zur Verwaltungsfachangestellten wechseln. Welche der folgenden Aussagen über die Kündigung ihres Ausbildungsvertrages bei der Ecotec GmbH trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Kündigungsfrist beträgt für beide Vertragspartner sechs Monate.' },
    { id: '2', text: 'Frau Medstein kann den Ausbildungsvertrag mit einer Kündigungsfrist von vier Wochen kündigen.' },
    { id: '3', text: 'Nach der Probezeit kann der Ausbildungsvertrag nicht mehr gekündigt werden.' },
    { id: '4', text: 'Nach der Probezeit kann nur die Ecotec GmbH den Ausbildungsvertrag kündigen.' },
    { id: '5', text: 'Der Ausbildungsvertrag kann nur mit Zustimmung der IHK gekündigt werden.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q3',
  examId: 'wiso-2024-sommer',
  questionNumber: 3,
  topic: 'Beendigung des Ausbildungsverhältnisses',
  question:
    'Der Auszubildende David Schmitz befindet sich bei der Ecotec GmbH im letzten Ausbildungsjahr zum Fachinformatiker Anwendungsentwicklung und bereitet sich auf die Abschlussprüfung vor. Er möchte wissen, wann das Ausbildungsverhältnis konkret endet. Welche der folgenden Aussagen über die Beendigung des Ausbildungsverhältnisses trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Auszubildende muss den Ausbildungsvertrag nach bestandener Abschlussprüfung kündigen.' },
    { id: '2', text: 'Der Ausbildungsbetrieb muss das Ausbildungsverhältnis nach bestandener Abschlussprüfung kündigen.' },
    { id: '3', text: 'Das Ausbildungsverhältnis endet vor Ablauf der Ausbildungszeit bei bestandener Abschlussprüfung.' },
    { id: '4', text: 'Das Ausbildungsverhältnis kann nur von der zuständigen Stelle (z. B. IHK) beendet werden.' },
    { id: '5', text: 'Das Ausbildungsverhältnis endet mit der Beendigung der Berufsschulpflicht.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q4',
  examId: 'wiso-2024-sommer',
  questionNumber: 4,
  topic: 'Befristung des Arbeitsverhältnisses',
  question:
    'Herr Schmitz hat seine Ausbildung erfolgreich beendet und soll bei der Ecotec GmbH in ein befristetes Arbeitsverhältnis für zunächst ein Jahr übernommen werden. Welche der folgenden Aussagen über eine Befristung des Arbeitsverhältnisses trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Auszubildende des eigenen Betriebs können nur in ein befristetes Arbeitsverhältnis übernommen werden.' },
    { id: '2', text: 'Das Arbeitsverhältnis endet nach einem Jahr, ohne dass es einer Kündigung bedarf.' },
    { id: '3', text: 'Eine Befristung ist nur mit Zustimmung der Agentur für Arbeit möglich.' },
    { id: '4', text: 'Ein befristeter Arbeitsvertrag muss auf mindestens zwei Jahre abgeschlossen werden.' },
    { id: '5', text: 'Ein befristeter Arbeitsvertrag ist nur mit Zustimmung des Betriebsrats möglich.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q5',
  examId: 'wiso-2024-sommer',
  questionNumber: 5,
  topic: 'Betriebsvereinbarung',
  question:
    'In der Ecotec GmbH wurden verschiedene Sachverhalte durch betriebliche und tarifliche Vereinbarungen geregelt. Welche der folgenden Sachverhalte können durch eine Betriebsvereinbarung geregelt werden? Tragen Sie die Ziffern vor den zwei zutreffenden Sachverhalten in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Einführung einer neuen Pausenregelung für die Mitarbeiter' },
    { id: '2', text: 'Die Reduzierung der Urlaubstage gemäß Tarifvertrag' },
    { id: '3', text: 'Die Höhe der Arbeitsentgelte nach Gehaltsgruppen' },
    { id: '4', text: 'Aufstellung des Urlaubsplans' },
    { id: '5', text: 'Erhöhung der regelmäßigen täglichen Arbeitszeit auf elf Stunden' },
    { id: '6', text: 'Die Dauer der Entgeltfortzahlung im Krankheitsfall' },
  ],
  correctAnswer: ['1', '4'],
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q6',
  examId: 'wiso-2024-sommer',
  questionNumber: 6,
  topic: 'Betriebsrat',
  question:
    'Wessen Interessen vertritt der Betriebsrat gemäß Betriebsverfassungsgesetz? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.\n\nDer Betriebsrat vertritt die Interessen der …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Arbeitgeber.' },
    { id: '2', text: 'Arbeitnehmer.' },
    { id: '3', text: 'leitenden Angestellten.' },
    { id: '4', text: 'Industrie- und Handelskammern.' },
    { id: '5', text: 'Bundesagentur für Arbeit.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q7',
  examId: 'wiso-2024-sommer',
  questionNumber: 7,
  topic: 'Sozialgerichtsbarkeit',
  question:
    'Frau Vengeta ist gesetzlich krankenversichert. Die gesetzliche Krankenkasse bewilligt für einen Zahnersatz eine Zuzahlung von 50,00 EUR. Frau Vengeta ist mit der Höhe der Zuzahlung nicht einverstanden und will den Fall gerichtlich klären lassen. Bei welchem der folgenden Gerichte muss sie die Klage einreichen? Tragen Sie die Ziffer vor dem zutreffenden Gericht in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Amtsgericht' },
    { id: '2', text: 'Landgericht' },
    { id: '3', text: 'Arbeitsgericht' },
    { id: '4', text: 'Sozialgericht' },
    { id: '5', text: 'Finanzgericht' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q8',
  examId: 'wiso-2024-sommer',
  questionNumber: 8,
  topic: 'Beitragsbemessungsgrenze',
  question:
    'In der Tageszeitung liest Frau Vengeta, dass die Beitragsbemessungsgrenze in der gesetzlichen Rentenversicherung auf 87.600 EUR jährlich festgelegt wurde. Welche der folgenden Aussagen zur Beitragsbemessungsgrenze trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Beitragsbemessungsgrenze gibt an, wie hoch mindestens die Rente aus der gesetzlichen Rentenversicherung ist.' },
    { id: '2', text: 'Auf den Teil des Bruttolohns, der über der Beitragsbemessungsgrenze liegt, wird kein Rentenversicherungsbeitrag erhoben.' },
    { id: '3', text: 'Bei einem Verdienst über der Beitragsbemessungsgrenze besteht keine Versicherungspflicht mehr in der gesetzlichen Rentenversicherung.' },
    { id: '4', text: 'Wessen Verdienst über der Beitragsbemessungsgrenze liegt, muss privat vorsorgen, weil er aus der gesetzlichen Rentenversicherung ausscheidet.' },
    { id: '5', text: 'Wer über der Beitragsbemessungsgrenze verdient, hat keinen Anspruch auf Erwerbsminderungsrente.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q9',
  examId: 'wiso-2024-sommer',
  questionNumber: 9,
  topic: 'Wirtschaftssektoren / Betriebstypen',
  question:
    'Die Ecotec GmbH ist ein IT-Dienstleistungsunternehmen. Welche der folgenden Bezeichnungen treffen auf die Ecotec GmbH zu? Tragen Sie die Ziffern vor den zwei zutreffenden Bezeichnungen in die Kästchen ein.\n\nDie Ecotec GmbH ist …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'ein Unternehmen des primären Sektors.' },
    { id: '2', text: 'ein Unternehmen des sekundären Sektors.' },
    { id: '3', text: 'ein Unternehmen des tertiären Sektors.' },
    { id: '4', text: 'ein erwerbswirtschaftlicher Betrieb.' },
    { id: '5', text: 'ein gemeinwirtschaftlicher Betrieb.' },
    { id: '6', text: 'eine Personengesellschaft.' },
  ],
  correctAnswer: ['3', '4'],
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q10',
  examId: 'wiso-2024-sommer',
  questionNumber: 10,
  topic: 'Arbeitsschutz / Arbeitssicherheit',
  question:
    'Die Ecotec GmbH ist verpflichtet, die Arbeitssicherheit im Unternehmen zu gewährleisten. Welche der folgenden Aussagen trifft auf die Arbeitssicherheit in der Ecotec GmbH zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Eine Mitbestimmung von Arbeitnehmern bei der Arbeitssicherheit ist ausgeschlossen, da das Arbeitsschutzgesetz die Pflichten der Arbeitgeber im Einzelnen regelt.' },
    { id: '2', text: 'Betriebliche Arbeitsschutzbestimmungen sind kein zwingendes Recht des Arbeitsverhältnisses.' },
    { id: '3', text: 'Ein Unternehmen mit mehr als 20 Beschäftigten muss einen Arbeitsschutzausschuss einrichten, in dem die Themen des Arbeitsschutzes erörtert werden.' },
    { id: '4', text: 'Die Ergonomie von Arbeitsplätzen ist keine Anforderung der Arbeitssicherheit, sondern eine freiwillige Leistung des Arbeitgebers.' },
    { id: '5', text: 'Die regelmäßige Unterweisung im betrieblichen Arbeitsschutz erfolgt durch externe Berater der Gewerkschaft als zuständige Organisation für die Arbeitssicherheit.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q11',
  examId: 'wiso-2024-sommer',
  questionNumber: 11,
  topic: 'Gesetzliche Unfallversicherung',
  question:
    'Die Mitarbeitenden der Ecotec GmbH sind gesetzlich unfallversichert. Welche der folgenden Fälle werden von der gesetzlichen Unfallversicherung abgedeckt? Tragen Sie die Ziffern vor den zwei zutreffenden Fällen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Eine Mitarbeiterin stürzt im Materiallager und bricht sich den Fuß.' },
    { id: '2', text: 'Ein Mitarbeiter stürzt in der Freizeit und zieht sich eine Schulterprellung zu.' },
    { id: '3', text: 'Eine Auszubildende rutscht auf dem direkten Weg zur Arbeit aus und zieht sich eine Bänderdehnung zu.' },
    { id: '4', text: 'Ein Mitarbeiter ist wegen einer Magenerkrankung arbeitsunfähig.' },
    { id: '5', text: 'Die kleine Tochter eines Mitarbeiters ist erkrankt und muss von ihm zu Hause betreut werden.' },
    { id: '6', text: 'Ein Mitarbeiter sucht seinen Augenarzt auf, weil seine Sehkraft sich in den letzten Monaten verschlechtert hat.' },
  ],
  correctAnswer: ['1', '3'],
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q12',
  examId: 'wiso-2024-sommer',
  questionNumber: 12,
  topic: 'Gesetzliche Unfallversicherung',
  question:
    'Welche der folgenden Organisationen ist Träger der gesetzlichen Unfallversicherung? Tragen Sie die Ziffer vor der zutreffenden Organisation in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Deutsche Rentenversicherung Bund' },
    { id: '2', text: 'Gewerbeaufsichtsamt' },
    { id: '3', text: 'Berufsgenossenschaft' },
    { id: '4', text: 'Gesetzliche Krankenversicherung' },
    { id: '5', text: 'Private Krankenkasse' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const SCENARIO_13 =
  'Sie sollen mit neuen Auszubildenden der Ecotec GmbH eine Führung durch die Betriebsräume durchführen. Bei dieser Führung sollen Sie den Auszubildenden die Bedeutung der abgebildeten Schilder erklären. Ordnen Sie die folgenden Bedeutungen den nachstehenden Schildern zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Bedeutung in das Kästchen ein.\n\nBedeutungen\n1 Vor Öffnen Netzstecker ziehen\n2 Gefahr durch Laserstrahl\n3 Richtung des Fluchtweges\n4 Erste Hilfe\n5 Feuerlöscher'

const q13Options = [
  { id: '1', text: 'Vor Öffnen Netzstecker ziehen' },
  { id: '2', text: 'Gefahr durch Laserstrahl' },
  { id: '3', text: 'Richtung des Fluchtweges' },
  { id: '4', text: 'Erste Hilfe' },
  { id: '5', text: 'Feuerlöscher' },
]

const q13a: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q13-a',
  examId: 'wiso-2024-sommer',
  questionNumber: 13,
  subPart: 'a',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_13,
  referenceText: 'Schild a): grünes Rettungszeichen, laufende Person mit weißem Pfeil nach rechts (Fluchtwegrichtung).',
  question: 'Schild a): laufende Person mit Pfeil nach rechts.',
  type: 'single-choice',
  options: q13Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13b: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q13-b',
  examId: 'wiso-2024-sommer',
  questionNumber: 13,
  subPart: 'b',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_13,
  referenceText: 'Schild b): grünes Rettungszeichen mit weißem Kreuz (Erste-Hilfe-Symbol).',
  question: 'Schild b): weißes Kreuz auf grünem Grund.',
  type: 'single-choice',
  options: q13Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13c: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q13-c',
  examId: 'wiso-2024-sommer',
  questionNumber: 13,
  subPart: 'c',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_13,
  referenceText: 'Schild c): rotes Brandschutzzeichen mit Feuerlöscher-Symbol und stilisierten Flammen.',
  question: 'Schild c): Feuerlöscher-Symbol mit Flammen.',
  type: 'single-choice',
  options: q13Options,
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13d: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q13-d',
  examId: 'wiso-2024-sommer',
  questionNumber: 13,
  subPart: 'd',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_13,
  referenceText: 'Schild d): grauer Kreis mit Pfeil und aus einer Steckdose gezogenem Netzstecker (Gebotszeichen).',
  question: 'Schild d): Pfeil mit gezogenem Netzstecker aus einer Steckdose in einem Kreis.',
  type: 'single-choice',
  options: q13Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13e: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q13-e',
  examId: 'wiso-2024-sommer',
  questionNumber: 13,
  subPart: 'e',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_13,
  referenceText: 'Schild e): gelbes Warndreieck mit Laserstrahl-Symbol (Warnzeichen).',
  question: 'Schild e): Dreieck mit Laserstrahl-Symbol.',
  type: 'single-choice',
  options: q13Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q14',
  examId: 'wiso-2024-sommer',
  questionNumber: 14,
  topic: 'Brandschutz / Verhalten im Brandfall',
  question:
    'Im Lager der Ecotec GmbH ist eine Palette in Brand geraten. Welche der folgenden Aktionen ist zuerst durchzuführen? Tragen Sie die Ziffer vor der zutreffenden Aktion in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Sofortiges Einleiten des Löschens.' },
    { id: '2', text: 'Fenster und Türen öffnen, damit der Rauch abziehen kann.' },
    { id: '3', text: 'Brandmelder betätigen bzw. Brand melden.' },
    { id: '4', text: 'Sofort alle andere Mitarbeitenden warnen.' },
    { id: '5', text: 'Sofort nächsten Sammelpunkt aufsuchen.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const SCENARIO_15_16 =
  'Situation zur 15. und 16. Aufgabe: Frau Vengeta liegen zur Ecotec GmbH die folgenden Informationen vor:'

const REFERENCE_15_16 =
  'Auszug aus einer Informationsquelle (tabellarisch):\n| Nummer der Eintragung (1) | a) Firma b) Ort (2) | Grund- oder Stammkapital (3) | Gesellschafter (4) | Prokura (5) |\n| 1 | a) Ecotec GmbH b) Hamburg | 330.000,00 EUR | Peter Müller, Kaufmann, Hamburg; Claudia Simmer, Kauffrau, Hamburg | (keine Eintragung) |'

const q15: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q15',
  examId: 'wiso-2024-sommer',
  questionNumber: 15,
  topic: 'Handelsregister',
  scenario: SCENARIO_15_16,
  referenceText: REFERENCE_15_16,
  question: 'Aus welcher der folgenden Informationsquellen stammen die oben ausschnittsweise abgebildeten Informationen? Tragen Sie die Ziffer vor der zutreffenden Informationsquelle in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Grundbuch' },
    { id: '2', text: 'Patentregister' },
    { id: '3', text: 'Gesellschaftsvertrag' },
    { id: '4', text: 'Handelsregister' },
    { id: '5', text: 'Vereinsregister' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q16',
  examId: 'wiso-2024-sommer',
  questionNumber: 16,
  topic: 'GmbH – Gewinnverteilung',
  scenario: SCENARIO_15_16,
  referenceText: REFERENCE_15_16,
  question:
    'Die Ecotec GmbH hat zwei Gesellschafter. Peter Müller ist mit 198.000,00 EUR am Stammkapital beteiligt, die Gesellschafterin Claudia Simmer hält den Rest des Stammkapitals. Die Ecotec GmbH schüttet einen Gewinn nach Steuern von 87.450,00 EUR aus. Dieser Gewinn wird im Verhältnis der Kapitalanteile der Gesellschafter ausgeschüttet. Errechnen Sie den Gewinnanteil der Gesellschafterin Claudia Simmer. Tragen Sie das Ergebnis in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '34.980,00',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q17',
  examId: 'wiso-2024-sommer',
  questionNumber: 17,
  topic: 'GmbH',
  question:
    'Welche der folgenden Aussagen trifft auf die Ecotec GmbH zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Ecotec GmbH ist eine Personengesellschaft.' },
    { id: '2', text: 'Die Eintragung der GmbH erfolgt in das Handelsregister Abteilung A.' },
    { id: '3', text: 'Die Gründung der GmbH ist durch eine Person möglich.' },
    { id: '4', text: 'Die Mindesthöhe des Stammkapitals beträgt 5.000,00 EUR.' },
    { id: '5', text: 'Die Ecotec GmbH hat grundsätzlich nur einen Geschäftsführer; mehrere Geschäftsführer sind nicht zulässig.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q18',
  examId: 'wiso-2024-sommer',
  questionNumber: 18,
  topic: 'Mutterschutzgesetz',
  question:
    'Die 26-jährige Mitarbeiterin der Ecotec GmbH, Esma Barasi, erwartet ihr erstes Kind. Wie viele Wochen darf sie nach dem Mutterschutzgesetz ab dem Tag der Entbindung nicht beschäftigt werden? Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '8',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q19',
  examId: 'wiso-2024-sommer',
  questionNumber: 19,
  topic: 'Businessplan / Existenzgründung',
  question:
    'Zwei Mitarbeitende der Ecotec GmbH wollen sich mit einem IT-Service-Unternehmen selbstständig machen. Die finanzierende Bank erwartet von den beiden Existenzgründern die Vorlage eines Businessplanes. Welche der folgenden Aussagen über einen Businessplan trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Businessplan wird von der zuständigen IHK ausgestellt, in dem das Unternehmen gegründet wurde.' },
    { id: '2', text: 'Der Businessplan wird im Handelsregister des zuständigen Amtsgerichtes eingetragen.' },
    { id: '3', text: 'Der Businessplan muss nur bei der Gründung von Kapitalgesellschaften erstellt werden.' },
    { id: '4', text: 'Der Businessplan ist nur bei der Aufnahme von Darlehen notwendig.' },
    { id: '5', text: 'Im Businessplan werden u. a. das Finanzkonzept und die Unternehmensidee vorgestellt.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q20',
  examId: 'wiso-2024-sommer',
  questionNumber: 20,
  topic: 'Wirtschaftlichkeit',
  referenceText:
    'Frau Vengeta bittet einen Praktikanten, die folgenden vier durchgeführten Aufträge der Ecotec GmbH auf ihre Wirtschaftlichkeit zu prüfen:\n| Auftrags-Nr. | 1 | 2 | 3 | 4 |\n| Aufwand (EUR) | 600.000 | 320.000 | 160.000 | 200.000 |\n| Ertrag (EUR) | 720.000 | 400.000 | 208.000 | 248.000 |',
  question: 'Welcher Auftrag wurde am wirtschaftlichsten abgewickelt? Tragen Sie die Auftragsnummer des wirtschaftlichsten Auftrags in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q21',
  examId: 'wiso-2024-sommer',
  questionNumber: 21,
  topic: 'Leitungssysteme',
  referenceText:
    'Schema "bestehendes Leitungssystem der Ecotec GmbH": eine oberste (unbeschriftete) Box ist über Linien mit drei Boxen auf der zweiten Ebene verbunden. Jede dieser drei Boxen der zweiten Ebene ist ihrerseits nur mit einer eigenen, nicht überlappenden Gruppe von insgesamt acht Boxen auf der dritten Ebene verbunden (die Linien verzweigen sich strikt baumartig nach unten, ohne dass sich Linien verschiedener Zweige kreuzen oder eine Box mehrere Vorgesetzte hätte).',
  question: 'Die Ecotec GmbH überlegt, ob das Unternehmen neu organisiert werden soll. Hierfür analysiert sie zunächst die bestehende Organisationsstruktur. Das folgende Schema zeigt das bestehende Leitungssystem. Nach welchem der folgenden Leitungssysteme arbeitet die Ecotec GmbH? Tragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Einliniensystem' },
    { id: '2', text: 'Matrixsystem' },
    { id: '3', text: 'Mehrliniensystem' },
    { id: '4', text: 'Stabliniensystem' },
    { id: '5', text: 'Abteilungssystem' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q22',
  examId: 'wiso-2024-sommer',
  questionNumber: 22,
  topic: 'Kartellrecht',
  question:
    'Die Ecotec GmbH hat Probleme mit einem vermeintlichen Kartell. Welches der folgenden Kartelle ist anmeldepflichtig? Tragen Sie die Ziffer vor dem zutreffenden Kartell in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Kartellmitglieder vereinbaren einen Mindestpreis.' },
    { id: '2', text: 'Die Kartellmitglieder vereinbaren einheitliche Abmessungen und Ausführungsformen (Normen- und Typen).' },
    { id: '3', text: 'Die Kartellmitglieder vereinbaren vertraglich, für welches Absatzgebiet sie ausschließlich zuständig sind.' },
    { id: '4', text: 'Der Kartellvertrag vereinbart für jedes Kartellmitglied eine bestimmte Produktionsquote.' },
    { id: '5', text: 'Die Kartellmitglieder vereinbaren einen Höchstpreis.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q23',
  examId: 'wiso-2024-sommer',
  questionNumber: 23,
  topic: 'Kündigungsschutz',
  question:
    'Eine Kollegin bei der Ecotech GmbH hat Fragen bezüglich des gesetzlichen Kündigungsschutzes. Welche der folgenden Personengruppen genießt keinen besonderen Kündigungsschutz? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Betriebsratsmitglieder' },
    { id: '2', text: 'Schwerbehinderte' },
    { id: '3', text: 'Werdende Mütter' },
    { id: '4', text: 'Mitarbeiter über 45 Jahre' },
    { id: '5', text: 'Auszubildende nach der Probezeit' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q24',
  examId: 'wiso-2024-sommer',
  questionNumber: 24,
  topic: 'Tarifvertrag',
  question:
    'Im Rahmen der Tarifverhandlungen wird zwischen Lohn- und Gehaltstarifvertrag und dem normalerweise längerfristig geltenden Manteltarifvertrag unterschieden. Welcher der folgenden Inhalte wird typischerweise in einem Lohn- und Gehaltstarifvertrag geregelt? Tragen Sie die Ziffer vor dem zutreffenden Inhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Kündigungsfristen' },
    { id: '2', text: 'Tägliche und wöchentliche Arbeitszeit' },
    { id: '3', text: 'Mindesturlaubstage' },
    { id: '4', text: 'Gehaltssätze für die einzelnen Gehaltsgruppen' },
    { id: '5', text: 'Arbeitsbefreiung für Prüfertätigkeit bei IHK-Prüfungen' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q25',
  examId: 'wiso-2024-sommer',
  questionNumber: 25,
  topic: 'Tarifvertrag',
  question:
    'Für die Ecotec GmbH wird ein neuer Tarifvertrag ausgehandelt. Welche der folgenden Aussagen zu den Tarifverträgen ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Arbeitgeberverbände und Gewerkschaften handeln Tarifverträge aus.' },
    { id: '2', text: 'Während der Laufzeit von Tarifverträgen sind Arbeitskämpfe erlaubt, wenn sie vier Wochen vorher angekündigt werden.' },
    { id: '3', text: 'Tarifverträge werden zwischen der Geschäftsführung und den Arbeitnehmern geschlossen.' },
    { id: '4', text: 'Tarifverträge sind als Empfehlungen für die Tarifparteien zu interpretieren.' },
    { id: '5', text: 'Arbeitskampfmaßnahmen müssen jeder Tarifverhandlung vorausgehen.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q26',
  examId: 'wiso-2024-sommer',
  questionNumber: 26,
  topic: 'Gesetzliche Rentenversicherung',
  question:
    'In der gesetzlichen Rentenversicherung wird der sogenannte "Generationenvertrag" angewandt. Welche der folgenden Aussagen beschreibt die Funktionsweise dieses "Vertrages"? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDer Generationenvertrag …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'verlangt, dass jede Generation individuell Vorsorge für das Rentenalter treffen muss.' },
    { id: '2', text: 'sieht vor, dass jeder Arbeitnehmer seine eingezahlten Beiträge erstattet bekommt.' },
    { id: '3', text: 'gilt nur noch für Arbeitnehmer, die bereits vor 2023 in die gesetzliche Rentenversicherung eingezahlt haben.' },
    { id: '4', text: 'regelt, dass mit den Einzahlungen der aktiven Arbeitnehmer die Rente der Rentenempfänger bestritten wird.' },
    { id: '5', text: 'besagt, dass jeder Sozialversicherungszweig den anderen finanziell unterstützen muss.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q27',
  examId: 'wiso-2024-sommer',
  questionNumber: 27,
  topic: 'Allgemeines Gleichbehandlungsgesetz (AGG)',
  question:
    'Die Ecotec GmbH möchte ihr "Diversity Management" neu bewerten und überprüft die Einhaltung der Grundsätze des AGG (Allgemeines Gleichbehandlungsgesetz). Welcher der folgenden Punkte wird im AGG nicht berücksichtigt? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Alter' },
    { id: '2', text: 'Religion' },
    { id: '3', text: 'Sexuelle Orientierung/Identität' },
    { id: '4', text: 'Art des Abschlusses' },
    { id: '5', text: 'Nationalität/ethnische Herkunft' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q28',
  examId: 'wiso-2024-sommer',
  questionNumber: 28,
  topic: 'Brandschutzkennzeichen',
  referenceText: 'Schild: rotes Brandschutzzeichen mit Symbol eines aufgerollten Feuerwehrschlauchs an einer Haspel mit Anschlussstück, daneben stilisierte Flammen.',
  question:
    'In der Ecotec GmbH wird dem Brandschutz besondere Beachtung geschenkt. In diesem Zusammenhang hat das Unternehmen an verschiedenen Stellen Schilder angebracht, um auf Besonderheiten, Regelungen oder Gefahren hinzuweisen. In einem der Unternehmensgebäude ist u. a. das abgebildete Schild angebracht. Welche der folgenden Bedeutungen hat dieses Schild? Tragen Sie die Ziffer vor der zutreffenden Bedeutung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Feuerwehrnoteingang mit Schlauchanschluss an dieser Stelle' },
    { id: '2', text: 'Erste-Hilfe-Rettung durch Hilfedienste mit Hinweis auf Verbandskasten' },
    { id: '3', text: 'Sprinkler-Anlage mit Sprühwassergefahr von oben' },
    { id: '4', text: 'Fluchtweg für im Gebäude Anwesende in Pfeilrichtung' },
    { id: '5', text: 'Löschschlauch hier' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q29',
  examId: 'wiso-2024-sommer',
  questionNumber: 29,
  topic: 'Nachhaltigkeit',
  question:
    'Die Ecotec GmbH wirtschaftet, soweit möglich, nachhaltig. Welche der folgenden Maßnahmen zählen zum nachhaltigen Wirtschaften? Tragen Sie die Ziffern vor den zwei zutreffenden Maßnahmen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Bezug von ausländischen Lebensmitteln für die Betriebskantine' },
    { id: '2', text: 'Verwendung von Rohölen, welche schonend und umweltverträglich abgebaut wurden' },
    { id: '3', text: 'Zuführung von Verpackungsabfällen zum Recycling' },
    { id: '4', text: 'Einkauf von Zulieferprodukten, die in Entwicklungsländern hergestellt wurden' },
    { id: '5', text: 'Herstellung von Produkten aus nachwachsenden Rohstoffen (soweit möglich)' },
    { id: '6', text: 'Ausweitung der Produktion bei nur wenigen Produkten' },
  ],
  correctAnswer: ['3', '5'],
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2024-sommer-q30',
  examId: 'wiso-2024-sommer',
  questionNumber: 30,
  topic: 'Umweltschutz / Verursacherprinzip',
  question:
    'Im Rahmen des Umweltschutzes soll nach dem Verursacherprinzip verfahren werden. Welche der folgenden Aussagen beschreibt dieses Prinzip zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Umweltschutz wird immer mehr grundsätzlicher Bestandteil schulischer Lehrpläne.' },
    { id: '2', text: 'Abfalltrennung ist wichtiger als Abfallvermeidung.' },
    { id: '3', text: 'Abfallentsorgung ist wichtiger als Abfallvermeidung.' },
    { id: '4', text: 'Die Kosten für die Beseitigung von Umweltschäden tragen diejenigen, die für die Schäden verantwortlich sind.' },
    { id: '5', text: 'Die Kosten für die Beseitigung von Umweltschäden werden gleichmäßig auf alle Einwohner eines Landes aufgeteilt.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

export const wisoExam2024SommerQuestions: WisoExamQuestion[] = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13a,
  q13b,
  q13c,
  q13d,
  q13e,
  q14,
  q15,
  q16,
  q17,
  q18,
  q19,
  q20,
  q21,
  q22,
  q23,
  q24,
  q25,
  q26,
  q27,
  q28,
  q29,
  q30,
]
