import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Winter 2020/21, Wirtschafts- und Sozialkunde, Teil 3.
 * Transcribed verbatim from the scanned exam PDF `WiSo_20w.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_20w.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 */

export const wisoExam2020WinterMeta: WisoExamMeta = {
  id: 'wiso-2020-winter',
  year: 2020,
  period: 'Winter',
  label: 'Winter 2020/21',
  examDate: 'Mittwoch, 25. November 2020',
  courseCodes: '1190 – 1196 – 1197 – 6440 – 6450',
  sourceExamPdf: 'WiSo_20w.pdf',
  sourceSolutionPdf: 'Loe_WiSo_20w.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** "Situation" printed once on page 2; explicitly applies to all following Aufgaben. */
const SCENARIO =
  'Sie sind Mitarbeiter/-in der Gramberg GmbH. Die Gramberg GmbH ist ein Dienstleistungsunternehmen im Bereich der IT-Sicherheit.\nDie folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const q1Options = [
  { id: '1', text: 'Elektrokaufhaus Meier e. K.' },
  { id: '2', text: 'Baumschule Holthaus GmbH' },
  { id: '3', text: 'Metallbau Steinemann GmbH' },
  { id: '4', text: 'Rechtsanwälte Kook & Partner' },
  { id: '5', text: 'Krieger GmbH, Hoch- und Tiefbau' },
  { id: '6', text: 'Biohof Landwirtschaft Dröse GmbH' },
]

const REFERENCE_1 =
  'Unternehmen:\n1 Elektrokaufhaus Meier e. K.\n2 Baumschule Holthaus GmbH\n3 Metallbau Steinemann GmbH\n4 Rechtsanwälte Kook & Partner\n5 Krieger GmbH, Hoch- und Tiefbau\n6 Biohof Landwirtschaft Dröse GmbH'

const q1a: WisoExamQuestion = {
  id: 'wiso-2020-winter-q1-a',
  examId: 'wiso-2020-winter',
  questionNumber: 1,
  subPart: 'a',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO,
  referenceText: REFERENCE_1,
  question:
    'Die Gramberg GmbH hat viele Kunden aus unterschiedlichen Wirtschaftssektoren. Ordnen Sie die folgenden Unternehmen den daneben stehenden Wirtschaftssektoren zu. Tragen Sie die Ziffern von den zwei jeweils zutreffenden Unternehmen in die Kästchen ein.\n\na) Primärer Sektor',
  type: 'multiple-choice',
  options: q1Options,
  correctAnswer: ['2', '6'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1b: WisoExamQuestion = {
  id: 'wiso-2020-winter-q1-b',
  examId: 'wiso-2020-winter',
  questionNumber: 1,
  subPart: 'b',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO,
  referenceText: REFERENCE_1,
  question:
    'Ordnen Sie die folgenden Unternehmen den daneben stehenden Wirtschaftssektoren zu. Tragen Sie die Ziffern von den zwei jeweils zutreffenden Unternehmen in die Kästchen ein.\n\nb) Sekundärer Sektor',
  type: 'multiple-choice',
  options: q1Options,
  correctAnswer: ['3', '5'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q1c: WisoExamQuestion = {
  id: 'wiso-2020-winter-q1-c',
  examId: 'wiso-2020-winter',
  questionNumber: 1,
  subPart: 'c',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO,
  referenceText: REFERENCE_1,
  question:
    'Ordnen Sie die folgenden Unternehmen den daneben stehenden Wirtschaftssektoren zu. Tragen Sie die Ziffern von den zwei jeweils zutreffenden Unternehmen in die Kästchen ein.\n\nc) Tertiärer Sektor',
  type: 'multiple-choice',
  options: q1Options,
  correctAnswer: ['1', '4'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2020-winter-q2',
  examId: 'wiso-2020-winter',
  questionNumber: 2,
  topic: 'Leitungssysteme',
  scenario: SCENARIO,
  referenceText:
    'Das Schema zeigt zwei übergeordnete Kästchen (Führungsebene) nebeneinander sowie darunter vier weitere, gleich angeordnete Kästchen (ausführende Ebene). Von jedem der beiden oberen Kästchen führen Verbindungslinien nach unten, die sich zwischen den Ebenen mehrfach kreuzen.',
  question:
    'Das folgende Schema zeigt das Leitungssystem der Gramberg GmbH (siehe Organigramm mit zwei Kästchen in der oberen Ebene und vier Kästchen in der unteren Ebene, verbunden durch sich kreuzende Linien).\n\nNach welchem der folgenden Leitungssysteme arbeitet die Gramberg GmbH?\n\nTragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Einliniensystem' },
    { id: '2', text: 'Stabsystem' },
    { id: '3', text: 'Mehrliniensystem' },
    { id: '4', text: 'Stabliniensystem' },
    { id: '5', text: 'Matrixsystem' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2020-winter-q3',
  examId: 'wiso-2020-winter',
  questionNumber: 3,
  topic: 'Einzelarbeitsvertrag',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH hat mit Stefan Brüning einen Einzelarbeitsvertrag geschlossen.\n\nWelche der folgenden Aussagen ist in diesem Zusammenhang zutreffend?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nEin Einzelarbeitsvertrag …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist gültig, wenn das vereinbarte Arbeitsentgelt über dem tarifvertraglich geregelten liegt.' },
    { id: '2', text: 'kann nur geschlossen werden, wenn für die Gramberg GmbH kein gültiger Tarifvertrag vorliegt.' },
    { id: '3', text: 'kann nur mit Zustimmung der Gewerkschaft geschlossen werden.' },
    { id: '4', text: 'darf für höchstens zwei Jahre geschlossen werden.' },
    { id: '5', text: 'ist ohne Urlaubsregelung ungültig.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2020-winter-q4',
  examId: 'wiso-2020-winter',
  questionNumber: 4,
  topic: 'Kündigung / Betriebsrat',
  scenario: SCENARIO,
  question:
    'Hans Baumgart, 38 Jahre, Vater von zwei Kindern, erhält aus betriebsbedingten Gründen die Kündigung. Da er diese für sozial ungerechtfertigt hält, wendet er sich an den Betriebsrat.\n\nPrüfen Sie, welche der folgenden Aussagen zu den Kündigungsmodalitäten richtig ist.\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Betriebsrat muss angehört werden. Hält der Betriebsrat die Kündigung für ungerechtfertigt, dann darf der Arbeitgeber nicht kündigen.' },
    { id: '2', text: 'Der Betriebsrat muss angehört werden. Herr Baumgart kann innerhalb von drei Wochen nach Zugang der Kündigung Klage beim zuständigen Arbeitsgericht einreichen.' },
    { id: '3', text: 'Der Betriebsrat muss in Kündigungsfragen nicht angehört werden.' },
    { id: '4', text: 'Mit Zustimmung des Betriebsrats kann die Kündigungsfrist kürzer ausfallen.' },
    { id: '5', text: 'Betriebsbedingte Kündigungen sind immer gültig. Hier braucht der Betriebsrat nicht angehört werden.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2020-winter-q5',
  examId: 'wiso-2020-winter',
  questionNumber: 5,
  topic: 'Entgeltfortzahlung im Krankheitsfall',
  scenario: SCENARIO,
  question:
    'Michael Kuper, ein Mitarbeiter der Gramberg GmbH, ist erkrankt und muss operiert werden. Er wird insgesamt fünf Wochen nicht im Betrieb arbeiten können.\n\nWelche der folgenden Aussagen trifft auf die geschilderte Situation zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nHerr Kuper erhält von …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'der Gramberg GmbH weiterhin sein Bruttoentgelt.' },
    { id: '2', text: 'der gesetzlichen Krankenkasse Krankengeld.' },
    { id: '3', text: 'der Berufsgenossenschaft ein Übergangsgeld.' },
    { id: '4', text: 'der Bundesagentur für Arbeit eine Entgeltersatzleistung.' },
    { id: '5', text: 'seiner privaten Berufsunfähigkeitsversicherung eine Versicherungsleistung.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2020-winter-q6',
  examId: 'wiso-2020-winter',
  questionNumber: 6,
  topic: 'Kollektives Arbeitsrecht',
  scenario: SCENARIO,
  question:
    'Michael Butt hat mit der Gramberg GmbH einen schriftlichen Arbeitsvertrag geschlossen.\n\nWelcher der folgenden Bestandteile seines Arbeitsvertrags bindet die Gramberg GmbH an kollektives Arbeitsrecht?\n\nTragen Sie die Ziffer vor dem zutreffenden Bestandteil in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Herr Butt bekommt einen Dienstwagen gestellt.' },
    { id: '2', text: 'Er arbeitet als Sachbearbeiter im Kundenservice.' },
    { id: '3', text: 'Das Arbeitsverhältnis beginnt am 2. Mai 2020.' },
    { id: '4', text: 'Die reguläre wöchentliche Arbeitszeit beträgt gemäß Tarifvertrag 38,5 Stunden.' },
    { id: '5', text: 'Die Gramberg GmbH gewährt einen monatlichen Fahrtkostenzuschuss von 100,00 EUR.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7Options = [
  { id: '1', text: 'Kündigungsschutzgesetz' },
  { id: '2', text: 'Allgemeines Gleichbehandlungsgesetz' },
  { id: '3', text: 'Betriebsverfassungsgesetz' },
  { id: '4', text: 'Arbeitszeitgesetz' },
]

const REFERENCE_7 =
  'Gesetze:\n1 Kündigungsschutzgesetz\n2 Allgemeines Gleichbehandlungsgesetz\n3 Betriebsverfassungsgesetz\n4 Arbeitszeitgesetz'

const q7a: WisoExamQuestion = {
  id: 'wiso-2020-winter-q7-a',
  examId: 'wiso-2020-winter',
  questionNumber: 7,
  subPart: 'a',
  topic: 'Arbeitsrecht – Gesetze',
  scenario: SCENARIO,
  referenceText: REFERENCE_7,
  question:
    'In der Gramberg GmbH sind Regelungen aus dem Arbeitsrecht zu beachten. In welchen der folgenden Gesetze werden die daneben stehenden Sachverhalte geregelt? Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.\n\na) In einer Stellenanzeige der Gramberg GmbH steht, dass eine IT-Kauffrau gesucht wird.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7b: WisoExamQuestion = {
  id: 'wiso-2020-winter-q7-b',
  examId: 'wiso-2020-winter',
  questionNumber: 7,
  subPart: 'b',
  topic: 'Arbeitsrecht – Gesetze',
  scenario: SCENARIO,
  referenceText: REFERENCE_7,
  question:
    'In welchen der folgenden Gesetze werden die daneben stehenden Sachverhalte geregelt? Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.\n\nb) Die werktägliche Arbeitszeit der Arbeitnehmer darf acht Stunden nicht überschreiten.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7c: WisoExamQuestion = {
  id: 'wiso-2020-winter-q7-c',
  examId: 'wiso-2020-winter',
  questionNumber: 7,
  subPart: 'c',
  topic: 'Arbeitsrecht – Gesetze',
  scenario: SCENARIO,
  referenceText: REFERENCE_7,
  question:
    'In welchen der folgenden Gesetze werden die daneben stehenden Sachverhalte geregelt? Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.\n\nc) Eine betriebsbedingte Kündigung ist rechtsunwirksam, wenn eine Schwerbehinderung nicht ausreichend berücksichtigt wurde.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7d: WisoExamQuestion = {
  id: 'wiso-2020-winter-q7-d',
  examId: 'wiso-2020-winter',
  questionNumber: 7,
  subPart: 'd',
  topic: 'Arbeitsrecht – Gesetze',
  scenario: SCENARIO,
  referenceText: REFERENCE_7,
  question:
    'In welchen der folgenden Gesetze werden die daneben stehenden Sachverhalte geregelt? Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.\n\nd) Bei der Gramberg GmbH werden Bewerber mit Behinderungen bei gleicher Eignung bevorzugt.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7e: WisoExamQuestion = {
  id: 'wiso-2020-winter-q7-e',
  examId: 'wiso-2020-winter',
  questionNumber: 7,
  subPart: 'e',
  topic: 'Arbeitsrecht – Gesetze',
  scenario: SCENARIO,
  referenceText: REFERENCE_7,
  question:
    'In welchen der folgenden Gesetze werden die daneben stehenden Sachverhalte geregelt? Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.\n\ne) Die Gramberg GmbH informiert den Betriebsrat über die geplante Schließung einer Filiale.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2020-winter-q8',
  examId: 'wiso-2020-winter',
  questionNumber: 8,
  topic: 'Befristeter Arbeitsvertrag',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH will eine neue Mitarbeiterin zunächst befristet für ein Jahr einstellen.\n\nWelche der folgenden Aussagen über befristete Arbeitsverträge trifft zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Befristete Arbeitsverträge können vom Arbeitgeber während der Laufzeit nicht gekündigt werden.' },
    { id: '2', text: 'Der befristete Arbeitsvertrag endet mit Ablauf der Frist, ohne dass es einer Kündigung bedarf.' },
    { id: '3', text: 'Für befristete Arbeitsverträge gelten die tarifvertraglichen Vereinbarungen nicht.' },
    { id: '4', text: 'Bei befristeten Arbeitsverträgen gibt es keine Lohnfortzahlung im Krankheitsfall.' },
    { id: '5', text: 'Befristete Arbeitsverträge dürfen nur mit arbeitslosen Bewerbern abgeschlossen werden.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2020-winter-q9',
  examId: 'wiso-2020-winter',
  questionNumber: 9,
  topic: 'Gesetzliche Unfallversicherung',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH nimmt an einer Messe teil. Beim Aufbau des Messestandes fällt eine Mitarbeiterin von der Leiter und bricht sich das rechte Bein.\n\nWelche der folgenden Institutionen muss für die Heilbehandlungskosten aufkommen, wenn die Unfallverhütungsvorschriften eingehalten wurden?\n\nTragen Sie die Ziffer vor der zutreffenden Institution in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Krankenkasse, bei der die Mitarbeiterin versichert ist.' },
    { id: '2', text: 'Die private Unfallversicherung der Mitarbeiterin.' },
    { id: '3', text: 'Die Haftpflichtversicherung der Messegesellschaft.' },
    { id: '4', text: 'Die Messegesellschaft, weil sich der Unfall in deren Hallen ereignete.' },
    { id: '5', text: 'Die Berufsgenossenschaft, der die Gramberg GmbH angehört.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2020-winter-q10',
  examId: 'wiso-2020-winter',
  questionNumber: 10,
  topic: 'Kurzarbeit / Betriebsschließung',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH musste den Betrieb auf behördliche Anordnung vorübergehend schließen. Der Geschäftsbetrieb ruht. Die Mitarbeiter dürfen die Geschäftsräume für die Dauer der Schließung nicht mehr betreten. Die Dauer der Schließung ist noch nicht absehbar.\n\nWelche der folgenden Aussagen ist in diesem Zusammenhang zutreffend?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Gramberg GmbH kann für die Dauer der Schließung bei der Bundesagentur für Arbeit Kurzarbeitergeld beantragen.' },
    { id: '2', text: 'Die Gehaltszahlungen für die Mitarbeiter muss die Behörde übernehmen, die die Schließung angeordnet hat.' },
    { id: '3', text: 'Die Gramberg GmbH muss allen Mitarbeitern kündigen.' },
    { id: '4', text: 'Die Gramberg GmbH hat für die Dauer der Schließung einen unbegrenzten Kreditanspruch an die Landesregierung.' },
    { id: '5', text: 'Die Gramberg GmbH muss die Schließung der Kreditanstalt für Wiederaufbau melden, die gesetzlich alle Kosten der Betriebsschließung übernehmen muss.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2020-winter-q11',
  examId: 'wiso-2020-winter',
  questionNumber: 11,
  topic: 'Arbeitgeberverband',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH ist Mitglied eines Arbeitgeberverbandes.\n\nWelche der folgenden Verpflichtungen ergibt sich unter anderem daraus?\n\nTragen Sie die Ziffer vor der zutreffenden Verpflichtung in das Kästchen ein.\n\nDie Gramberg GmbH …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss Lohnabrechnungen beim Verband prüfen lassen.' },
    { id: '2', text: 'darf höchstens Tariflöhne zahlen.' },
    { id: '3', text: 'nimmt direkt an Tarifverhandlungen teil.' },
    { id: '4', text: 'muss mindestens Tariflöhne zahlen.' },
    { id: '5', text: 'darf sich nicht an Aussperrungen beteiligen.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2020-winter-q12',
  examId: 'wiso-2020-winter',
  questionNumber: 12,
  topic: 'Betriebsrat / Mitbestimmung',
  scenario: SCENARIO,
  question:
    'In der Gramberg GmbH wurde ein Betriebsrat gewählt.\n\nIn welchen der folgenden Angelegenheiten hat der Betriebsrat der Gramberg GmbH ein zwingendes Mitbestimmungsrecht?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Angelegenheiten in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Rationalisierungsmaßnahme' },
    { id: '2', text: 'Kündigung' },
    { id: '3', text: 'Stellenausschreibung' },
    { id: '4', text: 'Beginn und Ende der täglichen Arbeitszeit' },
    { id: '5', text: 'Einführung von Arbeitszeiterfassungsgeräten' },
    { id: '6', text: 'Einstellung leitender Angestellter' },
  ],
  correctAnswer: ['4', '5'],
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13: WisoExamQuestion = {
  id: 'wiso-2020-winter-q13',
  examId: 'wiso-2020-winter',
  questionNumber: 13,
  topic: 'Arbeitskampf',
  scenario: SCENARIO,
  question:
    'Im Rahmen eines Arbeitskampfes fällt der Begriff „Aussperrung".\n\nWelche der folgenden Aussagen trifft auf die Arbeitskampfmaßnahme „Aussperrung" zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nAussperrung bedeutet (,) …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'eine planmäßig organisierte Arbeitsniederlegung aller Mitarbeiter eines Betriebes.' },
    { id: '2', text: 'eine planmäßig organisierte Arbeitsniederlegung aller gewerkschaftlich organisierten Mitarbeiter eines Betriebes.' },
    { id: '3', text: 'die vorübergehende Freistellung von Arbeitnehmern für den Zeitraum des Arbeitskampfes.' },
    { id: '4', text: 'die ordentliche Kündigung des Arbeitsverhältnisses in den betroffenen Betrieben.' },
    { id: '5', text: 'dass im Rahmen eines Insolvenzverfahrens der Insolvenzverwalter den Betrieb zusperrt.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2020-winter-q14',
  examId: 'wiso-2020-winter',
  questionNumber: 14,
  topic: 'Tarifvertrag',
  scenario: SCENARIO,
  question:
    'Im Rahmen der Tarifverhandlungen wird zwischen Lohn- und Gehaltstarif und dem normalerweise längerfristig geltenden Manteltarif unterschieden.\n\nWelcher der folgenden Inhalte wird typischerweise in einem Lohn- und Gehaltstarif geregelt?\n\nTragen Sie die Ziffer vor dem zutreffenden Inhalt in das Kästchen ein.',
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
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2020-winter-q15',
  examId: 'wiso-2020-winter',
  questionNumber: 15,
  topic: 'Europass',
  scenario: SCENARIO,
  question:
    'Eine Auszubildende der Gramberg GmbH will einen Teil ihrer Berufsausbildung im Ausland durchführen. In diesem Zusammenhang wurde sie auf den Dienst Europass hingewiesen. Sie bittet Sie um weitere Erläuterungen.\n\nWelche der folgenden Aussagen zum Dienst Europass ist zutreffend?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Europass ist ein kostenpflichtiger Dienst.' },
    { id: '2', text: 'Der Dienst Europass unterstützt Auszubildende, erworbene Qualifikationen, Fähigkeiten und Kompetenzen bei Bewerbungen europaweit verständlich darzustellen.' },
    { id: '3', text: 'Der Dienst Europass beglaubigt Ausbildungsabschnitte von Auszubildenden, die im europäischen Ausland durchgeführt wurden, im „Europass-Mobilität".' },
    { id: '4', text: 'Der vom Dienst Europass ausgestellte „Europass-Mobilität" ist für eine Berufsausbildung im europäischen Ausland verpflichtend.' },
    { id: '5', text: 'Der Dienst Europass zertifiziert Fremdsprachenkenntnisse im „Europass-Sprachkenntnisse".' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2020-winter-q16',
  examId: 'wiso-2020-winter',
  questionNumber: 16,
  topic: 'Rentenversicherung',
  scenario: SCENARIO,
  question:
    'Nach der letzten Gehaltserhöhung übersteigt das Bruttogehalt von Dagmar Fitschen die Beitragsbemessungsgrenze für die gesetzliche Rentenversicherung.\n\nWelche der folgenden Konsequenzen ergibt sich aus der Gehaltserhöhung für Frau Fitschen?\n\nTragen Sie die Ziffer vor der zutreffenden Konsequenz in das Kästchen ein.\n\nFrau Fitschen …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist von der gesetzlichen Rentenversicherungspflicht befreit.' },
    { id: '2', text: 'muss sich nun privat rentenversichern.' },
    { id: '3', text: 'erhält für die Rentenversicherung keinen Arbeitgeberanteil mehr.' },
    { id: '4', text: 'muss nur noch für einen Teil ihres Gehaltes einen Beitrag zur gesetzlichen Rentenversicherung leisten.' },
    { id: '5', text: 'kann die Beiträge an die Rentenversicherung gegen Selbstbehalt reduzieren.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17: WisoExamQuestion = {
  id: 'wiso-2020-winter-q17',
  examId: 'wiso-2020-winter',
  questionNumber: 17,
  topic: 'Urlaub bei Krankheit',
  scenario: SCENARIO,
  question:
    'Tom Sauer, ein Mitarbeiter der Gramberg GmbH, erkrankt während seines Urlaubs.\n\nWelche der folgenden Aussagen trifft auf diesen Sachverhalt zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Tage der Arbeitsunfähigkeit werden voll auf den Jahresurlaub angerechnet.' },
    { id: '2', text: 'Die ärztlich nachgewiesenen Tage der Arbeitsunfähigkeit werden nicht auf den Jahresurlaub angerechnet.' },
    { id: '3', text: 'Die Arbeitsunfähigkeit wird nur dann angerechnet, wenn die Erkrankung im Ausland auftrat.' },
    { id: '4', text: 'Die Tage der Arbeitsunfähigkeit werden nur bei Krankenhausaufenthalt nicht angerechnet.' },
    { id: '5', text: 'Die Tage der Arbeitsunfähigkeit werden zur Hälfte auf den Jahresurlaub angerechnet.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18Options = [
  { id: '1', text: 'Der Mitarbeiter Jan Lange geht wegen einer Grippeerkrankung zu seinem Arzt.' },
  { id: '2', text: 'Dem Mitarbeiter Filip Bajovic wurde wegen Auftragsmangel zum 1. Juli 2020 gekündigt und er findet im Anschluss keine neue Beschäftigung.' },
  { id: '3', text: 'Die Mitarbeiterin Verena Mehrkens rutscht auf direktem Weg zur Arbeitsstelle aus und verstaucht sich den Fuß.' },
  { id: '4', text: 'Die Assistentin der Geschäftsleitung scheidet zum 1. Juli 2020 mit Vollendung des 65. Lebensjahres aus dem Berufsleben aus.' },
  { id: '5', text: 'Die an Demenz erkrankte Großmutter einer Mitarbeiterin benötigt eine häusliche Pflegekraft.' },
]

const REFERENCE_18 =
  'Fälle:\n1 Der Mitarbeiter Jan Lange geht wegen einer Grippeerkrankung zu seinem Arzt.\n2 Dem Mitarbeiter Filip Bajovic wurde wegen Auftragsmangel zum 1. Juli 2020 gekündigt und er findet im Anschluss keine neue Beschäftigung.\n3 Die Mitarbeiterin Verena Mehrkens rutscht auf direktem Weg zur Arbeitsstelle aus und verstaucht sich den Fuß.\n4 Die Assistentin der Geschäftsleitung scheidet zum 1. Juli 2020 mit Vollendung des 65. Lebensjahres aus dem Berufsleben aus.\n5 Die an Demenz erkrankte Großmutter einer Mitarbeiterin benötigt eine häusliche Pflegekraft.'

const q18a: WisoExamQuestion = {
  id: 'wiso-2020-winter-q18-a',
  examId: 'wiso-2020-winter',
  questionNumber: 18,
  subPart: 'a',
  topic: 'Sozialversicherung',
  scenario: SCENARIO,
  referenceText: REFERENCE_18,
  question:
    'Die Auszubildende Maren Wichern möchte wissen, welche Sachverhalte von der gesetzlichen Sozialversicherung gedeckt werden. Ordnen Sie die folgenden Fälle den nachstehenden Sozialversicherungszweigen zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Fall in das Kästchen ein.\n\na) Rentenversicherung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18b: WisoExamQuestion = {
  id: 'wiso-2020-winter-q18-b',
  examId: 'wiso-2020-winter',
  questionNumber: 18,
  subPart: 'b',
  topic: 'Sozialversicherung',
  scenario: SCENARIO,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Fälle den nachstehenden Sozialversicherungszweigen zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Fall in das Kästchen ein.\n\nb) Krankenversicherung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18c: WisoExamQuestion = {
  id: 'wiso-2020-winter-q18-c',
  examId: 'wiso-2020-winter',
  questionNumber: 18,
  subPart: 'c',
  topic: 'Sozialversicherung',
  scenario: SCENARIO,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Fälle den nachstehenden Sozialversicherungszweigen zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Fall in das Kästchen ein.\n\nc) Arbeitslosenversicherung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18d: WisoExamQuestion = {
  id: 'wiso-2020-winter-q18-d',
  examId: 'wiso-2020-winter',
  questionNumber: 18,
  subPart: 'd',
  topic: 'Sozialversicherung',
  scenario: SCENARIO,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Fälle den nachstehenden Sozialversicherungszweigen zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Fall in das Kästchen ein.\n\nd) Pflegeversicherung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18e: WisoExamQuestion = {
  id: 'wiso-2020-winter-q18-e',
  examId: 'wiso-2020-winter',
  questionNumber: 18,
  subPart: 'e',
  topic: 'Sozialversicherung',
  scenario: SCENARIO,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Fälle den nachstehenden Sozialversicherungszweigen zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Fall in das Kästchen ein.\n\ne) Gesetzliche Unfallversicherung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2020-winter-q19',
  examId: 'wiso-2020-winter',
  questionNumber: 19,
  topic: 'Solidaritätsprinzip',
  scenario: SCENARIO,
  question:
    'Solidarität ist ein gesellschaftspolitisches Prinzip, welches in der Bundesrepublik Deutschland angewendet wird.\n\nWelcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität?\n\nTragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Staat erhöht die Erbschaftssteuer zur Umverteilung großer Vermögen.' },
    { id: '2', text: 'Die Kommune senkt die Zuschüsse für Kindertagesstätten.' },
    { id: '3', text: 'Die Erbschaftssteuer wird gesenkt.' },
    { id: '4', text: 'Der Beitrag zur gesetzlichen Krankenversicherung steigt mit individuellem Krankheitsrisiko des Versicherten.' },
    { id: '5', text: 'Kindergartenbeiträge sind für alle Eltern, unabhängig vom Einkommen, gleich hoch.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2020-winter-q20',
  examId: 'wiso-2020-winter',
  questionNumber: 20,
  topic: 'Berufliche Fortbildung',
  scenario: SCENARIO,
  question:
    'Nach der Abschlussprüfung informieren Sie sich über Möglichkeiten der beruflichen Fortbildung.\n\nWelcher der folgenden Sachverhalte ist ein Beispiel für eine berufliche Fortbildung?\n\nTragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Mustafa Akil beginnt nach dem mittleren Schulabschluss (MSA) die Ausbildung zum Kaufmann für Büromanagement.' },
    { id: '2', text: 'Ein Auszubildender der Gramberg GmbH nimmt in einer überbetrieblichen Ausbildungsstätte an einem Lehrgang zum Thema IT-Sicherheit teil.' },
    { id: '3', text: 'Sie besuchen an der Volkshochschule einen Segelkurs.' },
    { id: '4', text: 'Ein Auszubildender mit Abitur will nach Abschluss der Ausbildung studieren.' },
    { id: '5', text: 'Die Mitarbeiterin Claudia Langer nimmt nach der Ausbildung zur IT-System-Kauffrau an einem Fernlehrgang „Business English" teil.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2020-winter-q21',
  examId: 'wiso-2020-winter',
  questionNumber: 21,
  topic: 'Unternehmensziele',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH verfolgt unterschiedliche Zielsetzungen. Einige Ziele lassen sich gut miteinander verbinden (komplementäre Ziele). Andere Ziele schließen sich jedoch gegenseitig aus (konkurrierende Ziele).\n\nIn welcher der folgenden Aussagen handelt es sich um komplementäre Ziele?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Einrichtung einer Betriebskantine und Erhöhung der Exportquote' },
    { id: '2', text: 'Reduzierung der Kosten und Erhöhung der Löhne' },
    { id: '3', text: 'Umsetzung von Rationalisierungsmaßnahmen und Verbesserung des Firmenimages' },
    { id: '4', text: 'Abbau von Arbeitsplätzen und Outsourcing des Rechnungswesens' },
    { id: '5', text: 'Erhöhung der Sozialleistungen und Senkung der Lohnnebenkosten' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const REFERENCE_22 =
  'Auftrag Nr. | 1 | 2 | 3 | 4\nAufwand (EUR) | 300.000 | 80.000 | 80.000 | 100.000\nErtrag (EUR) | 360.000 | 100.000 | 104.000 | 124.000'

const q22a: WisoExamQuestion = {
  id: 'wiso-2020-winter-q22-a',
  examId: 'wiso-2020-winter',
  questionNumber: 22,
  subPart: 'a',
  topic: 'Wirtschaftlichkeit',
  scenario: SCENARIO,
  referenceText: REFERENCE_22,
  question:
    'Für die folgenden vier durchgeführten Aufträge der Gramberg GmbH liegen nachstehende Zahlen vor (siehe Tabelle).\n\na) Welcher Auftrag wurde am wirtschaftlichsten abgewickelt?\n\nTragen Sie die Ziffer des wirtschaftlichsten Auftrags in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q22b: WisoExamQuestion = {
  id: 'wiso-2020-winter-q22-b',
  examId: 'wiso-2020-winter',
  questionNumber: 22,
  subPart: 'b',
  topic: 'Wirtschaftlichkeit',
  scenario: SCENARIO,
  referenceText: REFERENCE_22,
  question:
    'b) Ermitteln Sie die Kennzahl für die Wirtschaftlichkeit dieses Auftrags. Runden Sie das Ergebnis auf zwei Stellen nach dem Komma.\n\nTragen Sie das Ergebnis in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '1,30',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2020-winter-q23',
  examId: 'wiso-2020-winter',
  questionNumber: 23,
  topic: 'Unternehmenszusammenschluss',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH hat die Bätje GmbH gekauft und betreibt diese unter Beibehaltung der Firma „Bätje GmbH" weiter.\n\nUm welche der folgenden Formen eines Unternehmenszusammenschlusses handelt es sich?\n\nTragen Sie die Ziffer vor der zutreffenden Form des Unternehmenszusammenschlusses in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Fusion' },
    { id: '2', text: 'Arbeitsgemeinschaft' },
    { id: '3', text: 'Interessengemeinschaft' },
    { id: '4', text: 'Kartell' },
    { id: '5', text: 'Konzern' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2020-winter-q24',
  examId: 'wiso-2020-winter',
  questionNumber: 24,
  topic: 'GmbH-Gründung',
  scenario: SCENARIO,
  question:
    'Die Gramberg GmbH will ein Tochterunternehmen in der Rechtsform einer GmbH mit vorerst zwanzig Mitarbeitern gründen.\n\nWelche der folgenden Vorschriften sind dabei zu beachten?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Vorschriften in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Als Firma muss eine Sachfirma gewählt werden.' },
    { id: '2', text: 'Ein Aufsichtsrat muss bestellt werden.' },
    { id: '3', text: 'Das Stammkapital muss mindestens 25.000 EUR betragen.' },
    { id: '4', text: 'Die Gründung bedarf der Genehmigung des Kartellamtes.' },
    { id: '5', text: 'Die Gründung kann allein durch die Gramberg GmbH erfolgen.' },
    { id: '6', text: 'Die Gramberg GmbH haftet solidarisch für das Tochterunternehmen.' },
  ],
  correctAnswer: ['3', '5'],
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2020-winter-q25',
  examId: 'wiso-2020-winter',
  questionNumber: 25,
  topic: 'GmbH',
  scenario: SCENARIO,
  question:
    'Bei der Unternehmensgründung wurde vom Firmengründer Günter Gramberg die Rechtsform der GmbH gewählt.\n\nWelche der folgenden Aussagen trifft auf eine GmbH zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die GmbH hat einen Komplementär und einen Kommanditisten.' },
    { id: '2', text: 'Der Komplementär leitet die GmbH.' },
    { id: '3', text: 'Die Gesellschafter der GmbH haften für Verbindlichkeiten mit ihrem Privatvermögen.' },
    { id: '4', text: 'Nach der gesetzlichen Regelung erfolgt die Gewinnverteilung nach Geschäftsanteilen.' },
    { id: '5', text: 'Alle Gesellschafter der GmbH sind jederzeit zur Geschäftsführung berechtigt.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2020-winter-q26',
  examId: 'wiso-2020-winter',
  questionNumber: 26,
  topic: 'Marktformen',
  scenario: SCENARIO,
  question:
    'Für die Dienstleistungen der Gramberg GmbH gibt es viele Konkurrenten. Der Kundenkreis ist sehr umfangreich.\n\nWelcher der folgenden Begriffe beschreibt diese Marktform?\n\nTragen Sie die Ziffer vor dem zutreffenden Begriff in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Angebotsmonopol' },
    { id: '2', text: 'Angebotsoligopol' },
    { id: '3', text: 'Polypol' },
    { id: '4', text: 'Nachfragemonopol' },
    { id: '5', text: 'Nachfrageoligopol' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2020-winter-q27',
  examId: 'wiso-2020-winter',
  questionNumber: 27,
  topic: 'Geschäftsfähigkeit Minderjähriger',
  scenario: SCENARIO,
  question:
    'Der 16-jährige Auszubildende Murat Safin kauft ein E-Bike im Wert von 2.799,00 EUR.\n\nWelche der folgenden Aussagen trifft auf dieses Rechtsgeschäft zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das Rechtsgeschäft ist nichtig.' },
    { id: '2', text: 'Das Rechtsgeschäft ist anfechtbar.' },
    { id: '3', text: 'Herr Safin ist nicht rechtsfähig.' },
    { id: '4', text: 'Das Rechtsgeschäft ist gültig, wenn Herr Safin das E-Bike in zwölf Monatsraten bezahlt.' },
    { id: '5', text: 'Das Rechtsgeschäft ist bis zur Zustimmung der gesetzlichen Vertreter schwebend unwirksam.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2020-winter-q28',
  examId: 'wiso-2020-winter',
  questionNumber: 28,
  topic: 'Businessplan',
  scenario: SCENARIO,
  question:
    'Sie wollen sich mit einem Software-Unternehmen selbstständig machen. Bei den Kreditgesprächen mit einer Bank wird die Vorlage eines Businessplanes verlangt.\n\nAn welcher der folgenden Stellen in Ihrem Businessplan erwartet die Bank Aussagen zu anderen Unternehmen, die ähnliche Dienstleistungen anbieten?\n\nTragen Sie die Ziffer vor der zutreffenden Stelle in das Kästchen ein.\n\nBei der …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Unternehmensbeschreibung' },
    { id: '2', text: 'Standortbeschreibung' },
    { id: '3', text: 'Beschreibung der Produkte und Leistungen' },
    { id: '4', text: 'Markt- und Wettbewerbsanalyse' },
    { id: '5', text: 'Finanzplanung' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2020-winter-q29',
  examId: 'wiso-2020-winter',
  questionNumber: 29,
  topic: 'Globalisierung',
  scenario: SCENARIO,
  question:
    'Die Volkswirtschaft der Bundesrepublik Deutschland profitiert von der Globalisierung.\n\nWelche der folgenden Maßnahmen fördert die Globalisierung?\n\nTragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Erhöhung der Importzölle.' },
    { id: '2', text: 'Die Erhöhung von Steuern für Transportdienstleistungen.' },
    { id: '3', text: 'Die Erhöhung von Exportschranken.' },
    { id: '4', text: 'Ein deutsches Unternehmen eröffnet Niederlassungen in Asien und Amerika.' },
    { id: '5', text: 'Ein deutsches Unternehmen zentralisiert die Fertigung in Deutschland.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2020-winter-q30',
  examId: 'wiso-2020-winter',
  questionNumber: 30,
  topic: 'Magisches Viereck',
  scenario: SCENARIO,
  question:
    'In einer Mittagspause ist vom „magischen Viereck" die Rede.\n\nWelche der folgenden wirtschaftspolitischen Ziele sind nicht gemeint, wenn vom „magischen Viereck" gesprochen wird?\n\nTragen Sie die Ziffern vor den zwei wirtschaftspolitischen Zielen, die nicht gemeint sind, in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Preisstabilität' },
    { id: '2', text: 'Außenwirtschaftliches Gleichgewicht' },
    { id: '3', text: 'Gerechte Einkommens- und Vermögensverteilung' },
    { id: '4', text: 'Vollbeschäftigung' },
    { id: '5', text: 'Angemessenes Wirtschaftswachstum' },
    { id: '6', text: 'Gleichgewicht zwischen Ökonomie und Ökologie' },
  ],
  correctAnswer: ['3', '6'],
  answerStatus: 'confirmed',
  sourcePage: 10,
}

export const wisoExam2020WinterQuestions: WisoExamQuestion[] = [
  q1a,
  q1b,
  q1c,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7a,
  q7b,
  q7c,
  q7d,
  q7e,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
  q16,
  q17,
  q18a,
  q18b,
  q18c,
  q18d,
  q18e,
  q19,
  q20,
  q21,
  q22a,
  q22b,
  q23,
  q24,
  q25,
  q26,
  q27,
  q28,
  q29,
  q30,
]
