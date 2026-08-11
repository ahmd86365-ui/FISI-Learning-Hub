import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Sommer 2020, Wirtschafts- und Sozialkunde, Teil 3.
 * Transcribed verbatim from the scanned exam PDF `WiSo_20s.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_20s.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 */

export const wisoExam2020SommerMeta: WisoExamMeta = {
  id: 'wiso-2020-sommer',
  year: 2020,
  period: 'Sommer',
  label: 'Sommer 2020',
  examDate: 'Mittwoch, 29. April 2020',
  courseCodes: '1190 – 1196 – 1197 – 6440 – 6450',
  sourceExamPdf: 'WiSo_20s.pdf',
  sourceSolutionPdf: 'Loe_WiSo_20s.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** "Situation" printed once on page 2; explicitly applies to all following Aufgaben. */
const SCENARIO =
  'Sie sind Mitarbeiter/-in der Infotec GmbH. Die Infotec GmbH ist ein Unternehmen, welches IT-Dienstleistungen anbietet.\nDie folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const REFERENCE_KREISLAUF_2 =
  'Die Grafik zeigt einen vereinfachten Wirtschaftskreislauf mit den vier Stationen "Staat", "Unternehmen", "Private Haushalte" und "Ausland". Zwischen den Stationen sind zehn nummerierte Geldströme (01–10) mit Pfeilen eingezeichnet: 04 und 08 verlaufen zwischen Unternehmen und Staat; 01 und 05 zwischen Staat und Privaten Haushalten; 09 und 10 zwischen Unternehmen und Privaten Haushalten; 03 und 07 zwischen Unternehmen und Ausland; 06 und 02 zwischen Ausland und Privaten Haushalten.'

const q1: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q1',
  examId: 'wiso-2020-sommer',
  questionNumber: 1,
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO,
  question:
    'Die Infotec GmbH bietet als IT-Dienstleister für klein- und mittelständische Betriebe kundenspezifische Hard- und Softwarelösungen an. Eine Erweiterung des Portfolios um kundenspezifische Angebote von IT-Sicherheitslösungen ist geplant.\n\nWelche der folgenden Bezeichnungen treffen auf die Infotec GmbH zu?\n\nTragen Sie die Ziffern von den zwei zutreffenden Bezeichnungen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Unternehmen des primären Sektors' },
    { id: '2', text: 'Unternehmen des sekundären Sektors' },
    { id: '3', text: 'Unternehmen des tertiären Sektors' },
    { id: '4', text: 'Gemeinwirtschaftlicher Betrieb' },
    { id: '5', text: 'Einzelunternehmen' },
    { id: '6', text: 'Erwerbswirtschaftlicher Betrieb' },
  ],
  correctAnswer: ['3', '6'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2a: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q2-a',
  examId: 'wiso-2020-sommer',
  questionNumber: 2,
  subPart: 'a',
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO,
  referenceText: REFERENCE_KREISLAUF_2,
  question:
    'Die folgende Grafik zeigt einen vereinfachten Wirtschaftskreislauf. Welche der mit 01 bis 10 gekennzeichneten Geldströme treffen auf die folgenden Zahlungsvorgänge in der Infotec GmbH zu? Tragen Sie die Ziffern des jeweils zutreffenden Geldstroms zweistellig in die Kästchen ein.\n\nZahlungsvorgänge:\na) Die Infotec GmbH erhält eine Subvention der Kommune für die Anschaffung von zwei Elektrofahrzeugen.',
  type: 'open-answer',
  correctAnswer: '08',
  answerStatus: 'confirmed',
  explanation: 'Geldstrom 08 verläuft vom Staat zum Unternehmen (Subvention).',
  sourcePage: 2,
}

const q2b: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q2-b',
  examId: 'wiso-2020-sommer',
  questionNumber: 2,
  subPart: 'b',
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO,
  referenceText: REFERENCE_KREISLAUF_2,
  question:
    'Welche der mit 01 bis 10 gekennzeichneten Geldströme treffen auf die folgenden Zahlungsvorgänge in der Infotec GmbH zu? Tragen Sie die Ziffern des jeweils zutreffenden Geldstroms zweistellig in die Kästchen ein.\n\nb) Die Infotec GmbH überweist die Gewerbesteuer an das Finanzamt.',
  type: 'open-answer',
  correctAnswer: '04',
  answerStatus: 'confirmed',
  explanation: 'Geldstrom 04 verläuft vom Unternehmen zum Staat (Gewerbesteuer).',
  sourcePage: 2,
}

const q2c: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q2-c',
  examId: 'wiso-2020-sommer',
  questionNumber: 2,
  subPart: 'c',
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO,
  referenceText: REFERENCE_KREISLAUF_2,
  question:
    'Welche der mit 01 bis 10 gekennzeichneten Geldströme treffen auf die folgenden Zahlungsvorgänge in der Infotec GmbH zu? Tragen Sie die Ziffern des jeweils zutreffenden Geldstroms zweistellig in die Kästchen ein.\n\nc) Eine Mitarbeiterin der Infotec GmbH bezahlt die Rechnung eines Stockholmer Hotels für ihre private Wochenendreise nach Stockholm.',
  type: 'open-answer',
  correctAnswer: '02',
  answerStatus: 'confirmed',
  explanation: 'Geldstrom 02 verläuft von den privaten Haushalten zum Ausland.',
  sourcePage: 2,
}

const q2d: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q2-d',
  examId: 'wiso-2020-sommer',
  questionNumber: 2,
  subPart: 'd',
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO,
  referenceText: REFERENCE_KREISLAUF_2,
  question:
    'Welche der mit 01 bis 10 gekennzeichneten Geldströme treffen auf die folgenden Zahlungsvorgänge in der Infotec GmbH zu? Tragen Sie die Ziffern des jeweils zutreffenden Geldstroms zweistellig in die Kästchen ein.\n\nd) Ein Mitarbeiter der Infotec GmbH erhält Kindergeld.',
  type: 'open-answer',
  correctAnswer: '01',
  answerStatus: 'confirmed',
  explanation: 'Geldstrom 01 verläuft vom Staat zu den privaten Haushalten (Kindergeld).',
  sourcePage: 2,
}

const q2e: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q2-e',
  examId: 'wiso-2020-sommer',
  questionNumber: 2,
  subPart: 'e',
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO,
  referenceText: REFERENCE_KREISLAUF_2,
  question:
    'Welche der mit 01 bis 10 gekennzeichneten Geldströme treffen auf die folgenden Zahlungsvorgänge in der Infotec GmbH zu? Tragen Sie die Ziffern des jeweils zutreffenden Geldstroms zweistellig in die Kästchen ein.\n\ne) Die Infotec GmbH überweist den Rechnungsbetrag an ein schwedisches Unternehmen für gelieferte Hardware.',
  type: 'open-answer',
  correctAnswer: '03',
  answerStatus: 'confirmed',
  explanation: 'Geldstrom 03 verläuft vom Unternehmen zum Ausland.',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q3',
  examId: 'wiso-2020-sommer',
  questionNumber: 3,
  topic: 'Arbeitszeitgesetz',
  scenario: SCENARIO,
  question:
    'Für die Entwicklung des neuen Geschäftsfeldes Clouddienste plant die Infotec GmbH die Einstellung von Mitarbeitern. In den Arbeitsverträgen der neuen Mitarbeiter soll vorübergehend eine tägliche Arbeitszeit von zehn Stunden vereinbart werden. Die Infotec GmbH arbeitet fünf Tage in der Woche von Montag bis Freitag.\n\nWelche der folgenden Aussagen zur regelmäßigen täglichen Arbeitszeit trifft zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie Vereinbarung ist zulässig, …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'wenn sie tarifvertraglich vereinbart wurde.' },
    { id: '2', text: 'weil die tägliche Arbeitszeit keiner gesetzlichen Beschränkung unterliegt.' },
    { id: '3', text: 'weil in der Infotec GmbH an Wochenenden nicht gearbeitet wird.' },
    { id: '4', text: 'wenn innerhalb von sechs Monaten im Durchschnitt acht Stunden werktäglich nicht überschritten werden.' },
    { id: '5', text: 'wenn der Betriebsrat mit der Geschäftsleitung in einer Betriebsvereinbarung mehr Urlaubstage vereinbart.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q4',
  examId: 'wiso-2020-sommer',
  questionNumber: 4,
  topic: 'Probezeit',
  scenario: SCENARIO,
  question:
    'Für die neuen Mitarbeiter soll in den Arbeitsverträgen eine Probezeit von sechs Monaten vereinbart werden.\n\nWelche der folgenden Aussagen trifft auf die vereinbarte Probezeit zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Arbeitnehmer kann das Arbeitsverhältnis während der Probezeit nicht kündigen.' },
    { id: '2', text: 'Der Arbeitgeber kann das Arbeitsverhältnis nur aus wichtigem Grund kündigen.' },
    { id: '3', text: 'Das Arbeitsverhältnis kann während der Probezeit mit einer Frist von zwei Wochen gekündigt werden.' },
    { id: '4', text: 'Während der Probezeit kann nur der Arbeitnehmer das Arbeitsverhältnis kündigen.' },
    { id: '5', text: 'Die Probezeit muss mindestens einen Monat und darf maximal vier Monate betragen.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q5',
  examId: 'wiso-2020-sommer',
  questionNumber: 5,
  topic: 'Kollektives Arbeitsrecht',
  scenario: SCENARIO,
  question:
    'Die Infotec GmbH ist Mitglied des Arbeitgeberverbandes.\n\nIn welchem der folgenden Bestandteile des Arbeitsvertrages ist die Infotec GmbH an kollektives Arbeitsrecht gebunden?\n\nTragen Sie die Ziffer vor dem zutreffenden Bestandteil in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das Arbeitsverhältnis beginnt am 1. Juli 2020.' },
    { id: '2', text: 'Die Infotec GmbH bietet den Mitarbeitern ein Job-Ticket für die Fahrt zur Arbeit an.' },
    { id: '3', text: 'Der Mitarbeiter erhält ein monatliches Bruttogehalt von 3.000,00 EUR.' },
    { id: '4', text: 'Der Mitarbeiter arbeitet im IT-Service.' },
    { id: '5', text: 'Die wöchentliche Arbeitszeit beträgt nach Tarifvertrag 38,5 Stunden.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q6',
  examId: 'wiso-2020-sommer',
  questionNumber: 6,
  topic: 'Vorstellungsgespräch / unzulässige Fragen',
  scenario: SCENARIO,
  question:
    'Die Fachinformatikerin Claudia Richter hat sich bei der Infotec GmbH beworben. Sie soll zu einem Vorstellungsgespräch eingeladen werden.\n\nWelche der folgenden Fragen dürfen in einem Vorstellungsgespräch nicht gestellt werden bzw. müssen von Frau Richter nicht wahrheitsgemäß beantwortet werden.\n\nTragen Sie die Ziffern vor den zwei entsprechenden Fragen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Sind Sie bereit, im Ausland zu arbeiten?' },
    { id: '2', text: 'Haben Sie Erfahrungen in Teamarbeit?' },
    { id: '3', text: 'Welcher Religionsgemeinschaft gehören Sie an?' },
    { id: '4', text: 'Wie gut schätzen Sie Ihre Kenntnisse in JAVA ein?' },
    { id: '5', text: 'Sind Sie bereit, gelegentlich Überstunden zu leisten?' },
    { id: '6', text: 'Sind Sie schwanger?' },
  ],
  correctAnswer: ['3', '6'],
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q7',
  examId: 'wiso-2020-sommer',
  questionNumber: 7,
  topic: 'Betriebsrat / Mitbestimmung',
  scenario: SCENARIO,
  question:
    'Die Geschäftsleitung der Infotec GmbH arbeitet vertrauensvoll mit dem Betriebsrat zusammen.\n\nIn welchen der folgenden Angelegenheiten hat der Betriebsrat laut Betriebsverfassungsgesetz ein Mitbestimmungsrecht?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Angelegenheiten in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Einführung einer neuen Gleitzeitregelung' },
    { id: '2', text: 'Planung des Fortbildungsbedarfs' },
    { id: '3', text: 'Einführung eines Zeiterfassungssystems' },
    { id: '4', text: 'Errichten einer neuen Lagerhalle' },
    { id: '5', text: 'Anschaffung neuer Lagertechnik' },
    { id: '6', text: 'Gründung einer Filiale' },
  ],
  correctAnswer: ['1', '3'],
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q8',
  examId: 'wiso-2020-sommer',
  questionNumber: 8,
  topic: 'Betriebsversammlung',
  scenario: SCENARIO,
  question:
    'Der Betriebsrat der Infotec GmbH lädt zur vierteljährlichen Betriebsversammlung ein.\n\nWelcher der folgenden Personenkreise ist berechtigt, an der Betriebsversammlung teilzunehmen?\n\nTragen Sie die Ziffer vor dem zutreffenden Personenkreis in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Alle Arbeitnehmer des Unternehmens' },
    { id: '2', text: 'Nur die Betriebsratsmitglieder und die Gewerkschaftsvertreter' },
    { id: '3', text: 'Nur die gewerkschaftlich organisierten Mitarbeiter' },
    { id: '4', text: 'Nur die Vollzeitmitarbeiter und die Führungskräfte' },
    { id: '5', text: 'Nur die Vollzeitmitarbeiter und die Auszubildenden' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q9',
  examId: 'wiso-2020-sommer',
  questionNumber: 9,
  topic: 'Tarifvertrag',
  scenario: SCENARIO,
  question:
    'In Tarifverhandlungen wird zwischen dem Entgelttarifvertrag und dem Manteltarifvertrag unterschieden.\n\nWelche der folgenden Regelungen wird im Manteltarifvertrag vereinbart?\n\nTragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Pausenregelung' },
    { id: '2', text: 'Regelmäßige Wochenarbeitszeit' },
    { id: '3', text: 'Gehaltssätze für die einzelnen Gehaltsgruppen' },
    { id: '4', text: 'Ausbildungsvergütung' },
    { id: '5', text: 'Höhe der Überstundenzulage' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q10',
  examId: 'wiso-2020-sommer',
  questionNumber: 10,
  topic: 'Sozialpartner',
  scenario: SCENARIO,
  question:
    'Die Infotec GmbH ist an Vereinbarungen gebunden, die die Sozialpartner miteinander vereinbart haben.\n\nWelche der folgenden Einrichtungen wird zu den Sozialpartnern gerechnet?\n\nTragen Sie die Ziffer vor der zutreffenden Einrichtung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Bundesministerium für Gesundheit' },
    { id: '2', text: 'Bundesministerium für Arbeit und Soziales' },
    { id: '3', text: 'Bundesagentur für Arbeit' },
    { id: '4', text: 'Arbeitgeberverbände' },
    { id: '5', text: 'Industrie- und Handelskammern' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q11',
  examId: 'wiso-2020-sommer',
  questionNumber: 11,
  topic: 'Gesetzliche Krankenversicherung',
  scenario: SCENARIO,
  question:
    'Mitarbeiter der Infotec GmbH sind in der gesetzlichen Krankenversicherung (GKV) pflichtversichert.\n\nWelche der folgenden Aussagen trifft auf die gesetzliche Krankenversicherung zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Ein Wechsel der Krankenkasse ist nur mit Zustimmung des Arbeitgebers möglich.' },
    { id: '2', text: 'Der Beitragssatz wird vom Bundesministerium für Gesundheit festgelegt.' },
    { id: '3', text: 'Der Beitrag wird vom Nettolohn berechnet.' },
    { id: '4', text: 'Die Beitragsbemessungsgrenze gibt an, bis zu welchem Jahresbruttoentgelt ein Arbeitnehmer in der GKV versichert sein muss.' },
    { id: '5', text: 'Auf den Teil des Bruttolohns, der unterhalb der Beitragsbemessungsgrenze liegt, wird kein Beitrag erhoben.' },
  ],
  answerStatus: 'unclear',
  explanation:
    'Der von der Aufgabenstellung angegebene Antwortschlüssel nennt für diese Aufgabe den Text "immer richtig" statt einer der auf der Seite abgedruckten Ziffern 1–5. Dieser Wert konnte keiner der fünf gedruckten Antwortoptionen eindeutig zugeordnet werden — bitte Originaldokument (Loe_WiSo_20s.pdf, Seite 3) prüfen.',
  sourcePage: 5,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q12',
  examId: 'wiso-2020-sommer',
  questionNumber: 12,
  topic: 'Gesetzliche Krankenversicherung',
  scenario: SCENARIO,
  question:
    'Die Fachinformatikerin Petra Müller ist seit dem 1. März 2020 bei der Infotec GmbH angestellt. Ihr Bruttogehalt beträgt 3.200,00 EUR. Frau Müller möchte wissen, wie hoch ihr Beitrag zur gesetzlichen Krankenversicherung ist.\n\nAllgemeiner Beitragssatz: 14,6 %\nZusatzbeitrag: 0,7 %\n\nBerechnen Sie den Beitrag Frau Müllers zur gesetzlichen Krankenversicherung.\n\nTragen Sie das Ergebnis in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '244,80',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q13',
  examId: 'wiso-2020-sommer',
  questionNumber: 13,
  topic: 'Gesetzliche Unfallversicherung',
  scenario: SCENARIO,
  question:
    'Die Arbeitnehmer der Infotec GmbH sind gesetzlich unfallversichert.\n\nFür welche der folgenden Fälle werden von der gesetzlichen Unfallversicherung Leistungen gewährt?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Fällen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Die Mitarbeiterin Sophia Kemm stolpert im Büro über ein Kabel und verstaucht sich den Fuß.' },
    { id: '2', text: 'Der Mitarbeiter Tim Schneider stürzt am arbeitsfreien Wochenende bei der Fahrt mit seinem Fahrrad zum heimischen Garten und zieht sich eine Schulterprellung zu.' },
    { id: '3', text: 'Die Auszubildende Paula Schmitz rutscht auf dem direkten Weg zur Arbeit aus und zieht sich eine Bänderdehnung zu.' },
    { id: '4', text: 'Der Mitarbeiter Yannick Weber ist wegen einer Grippeerkrankung arbeitsunfähig.' },
    { id: '5', text: 'Das Kind der Mitarbeiterin Sarah Buchholz ist an Masern erkrankt und muss zu Hause von der Mutter betreut werden.' },
    { id: '6', text: 'Der Mitarbeiter Marco Bode sucht seinen Augenarzt auf, weil seine Sehkraft sich verschlechtert hat.' },
  ],
  correctAnswer: ['1', '3'],
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q14',
  examId: 'wiso-2020-sommer',
  questionNumber: 14,
  topic: 'Rentenversicherung / Altersvorsorge',
  scenario: SCENARIO,
  question:
    'Zwei 20-jährige Auszubildende der Infotec GmbH diskutieren in der Mittagspause über die Leistungen der gesetzlichen Rentenversicherung und einer privaten Altersvorsorge.\n\nWelches der folgenden Argumente trifft zu?\n\nTragen Sie die Ziffer vor dem zutreffenden Argument in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Eine private Altersvorsorge ist notwendig, weil die gesetzliche Rentenversicherung voraussichtlich nicht ausreichen wird.' },
    { id: '2', text: 'Der demografische Wandel sorgt auch in Zukunft für genug Beitragszahler, weshalb das Rentenniveau der gesetzlichen Rentenversicherung steigt.' },
    { id: '3', text: 'Eine private Altersvorsorge ist nicht sinnvoll, weil das Rentenniveau in der gesetzlichen Rentenversicherung stetig steigt.' },
    { id: '4', text: 'Eine private Altersvorsorge lohnt sich nicht, weil jedem Arbeitnehmer eine Betriebsrente zusteht.' },
    { id: '5', text: 'Eine private Altersvorsorge ist nur notwendig, wenn die Inflationsrate steigt.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q15',
  examId: 'wiso-2020-sommer',
  questionNumber: 15,
  topic: 'Solidaritätsprinzip',
  scenario: SCENARIO,
  question:
    'Solidarität ist ein gesellschaftspolitisches Prinzip, welches in der Bundesrepublik Deutschland angewendet wird.\n\nWelcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität?\n\nTragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Staat erhöht die Abschreibungen auf Gewerbeimmobilien.' },
    { id: '2', text: 'Die Freibeträge bei der Erbschaftssteuer werden gesenkt.' },
    { id: '3', text: 'Der Erwerb von Immobilien durch Kapitalgesellschaften wird steuerlich gefördert.' },
    { id: '4', text: 'Der Staat erhöht die Steuersätze für Einkünfte aus Zinsen und Dividenden.' },
    { id: '5', text: 'Die Leistungen der gesetzlichen Krankenversicherungen sind einkommensunabhängig.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q16',
  examId: 'wiso-2020-sommer',
  questionNumber: 16,
  topic: 'Öffentlich-rechtlicher Betrieb',
  scenario: SCENARIO,
  question:
    'In Deutschland gibt es neben privaten Betrieben auch öffentlich-rechtliche Betriebe.\n\nWelches der folgenden Ziele trifft auf einen öffentlich-rechtlichen Betrieb zu?\n\nTragen Sie die Ziffer vor dem zutreffenden Ziel in das Kästchen ein.\n\nEin öffentlich-rechtlicher Betrieb verfolgt primär das Ziel …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'der Steigerung des Einkommens der Kommune.' },
    { id: '2', text: 'der Kostenvermeidung.' },
    { id: '3', text: 'der optimalen Versorgung der Bevölkerung durch private Investoren.' },
    { id: '4', text: 'der bestmöglichen Versorgung der Bevölkerung mit Dienstleistungen oder Sachgütern.' },
    { id: '5', text: 'der Dividendenausschüttung.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17Options = [
  { id: '1', text: 'Bit & Byte e. K.' },
  { id: '2', text: 'InFoSys AG' },
  { id: '3', text: 'Peters KG' },
  { id: '4', text: 'Wireless GmbH' },
]

const SCENARIO_17 = SCENARIO
const REFERENCE_17 =
  'Unternehmungen:\n1 Bit & Byte e. K.\n2 InFoSys AG\n3 Peters KG\n4 Wireless GmbH'

const q17a: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q17-a',
  examId: 'wiso-2020-sommer',
  questionNumber: 17,
  subPart: 'a',
  topic: 'Rechtsformen',
  scenario: SCENARIO_17,
  referenceText: REFERENCE_17,
  question:
    'Zu Lieferern der Infotec GmbH zählen unter anderem die folgenden Unternehmungen. Ordnen Sie den folgenden Unternehmungen die nachstehenden Aussagen zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmung in das Kästchen ein.\n\na) Die Geschäftsanteile könnten an der Börse gehandelt werden.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17b: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q17-b',
  examId: 'wiso-2020-sommer',
  questionNumber: 17,
  subPart: 'b',
  topic: 'Rechtsformen',
  scenario: SCENARIO_17,
  referenceText: REFERENCE_17,
  question:
    'Ordnen Sie den folgenden Unternehmungen die nachstehenden Aussagen zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmung in das Kästchen ein.\n\nb) Das Stammkapital muss in das Handelsregister eingetragen werden.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17c: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q17-c',
  examId: 'wiso-2020-sommer',
  questionNumber: 17,
  subPart: 'c',
  topic: 'Rechtsformen',
  scenario: SCENARIO_17,
  referenceText: REFERENCE_17,
  question:
    'Ordnen Sie den folgenden Unternehmungen die nachstehenden Aussagen zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmung in das Kästchen ein.\n\nc) Nur ein Teil der Gesellschafter haftet unbeschränkt.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18Options = [
  { id: '1', text: 'Fusion' },
  { id: '2', text: 'Kartell' },
  { id: '3', text: 'Konzern' },
  { id: '4', text: 'Arbeitsgemeinschaft' },
]

const SCENARIO_18 = SCENARIO
const REFERENCE_18 =
  'Unternehmensverbindungen:\n1 Fusion\n2 Kartell\n3 Konzern\n4 Arbeitsgemeinschaft\n\nHinweis: Eine der folgenden Unternehmensverbindungen kann zwei Sachverhalten zugeordnet werden.'

const q18a: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q18-a',
  examId: 'wiso-2020-sommer',
  questionNumber: 18,
  subPart: 'a',
  topic: 'Unternehmensverbindungen',
  scenario: SCENARIO_18,
  referenceText: REFERENCE_18,
  question:
    'Die Infotec GmbH analysiert ihr wirtschaftliches Umfeld durch stete Marktbeobachtung. Ordnen Sie die folgenden Unternehmensverbindungen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmensverbindung in das Kästchen ein.\n\na) Die Infotec GmbH führt gemeinsam mit zwei anderen Unternehmen einen Großauftrag aus.',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18b: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q18-b',
  examId: 'wiso-2020-sommer',
  questionNumber: 18,
  subPart: 'b',
  topic: 'Unternehmensverbindungen',
  scenario: SCENARIO_18,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Unternehmensverbindungen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmensverbindung in das Kästchen ein.\n\nb) Zwei Kunden der Infotec GmbH, die Byte GmbH und die IT-Sec GmbH, schließen sich zur Byte-Sec GmbH zusammen.',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18c: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q18-c',
  examId: 'wiso-2020-sommer',
  questionNumber: 18,
  subPart: 'c',
  topic: 'Unternehmensverbindungen',
  scenario: SCENARIO_18,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Unternehmensverbindungen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmensverbindung in das Kästchen ein.\n\nc) Die Infotec GmbH vereinbart mit Wettbewerbern einheitliche Verkaufskonditionen.',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18d: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q18-d',
  examId: 'wiso-2020-sommer',
  questionNumber: 18,
  subPart: 'd',
  topic: 'Unternehmensverbindungen',
  scenario: SCENARIO_18,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Unternehmensverbindungen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmensverbindung in das Kästchen ein.\n\nd) Die Infotec GmbH hat die Mehrheit an der SecureSoft AG übernommen.',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18e: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q18-e',
  examId: 'wiso-2020-sommer',
  questionNumber: 18,
  subPart: 'e',
  topic: 'Unternehmensverbindungen',
  scenario: SCENARIO_18,
  referenceText: REFERENCE_18,
  question:
    'Ordnen Sie die folgenden Unternehmensverbindungen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Unternehmensverbindung in das Kästchen ein.\n\ne) Die SecureSoft AG gründet in Düsseldorf und Stuttgart Tochtergesellschaften.',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const SCENARIO_19 = SCENARIO
const REFERENCE_19 =
  'Diagramm "Angebots- und Nachfragekurve": Koordinatensystem mit Preis in EUR (y-Achse, 10,00 EUR bis 140,00 EUR in 5,00-EUR-Schritten) über Stück (x-Achse, 10 bis 170 Stück). Die durchgezogene Nachfragekurve fällt von links oben nach rechts unten; die gestrichelte Angebotskurve steigt von links unten nach rechts oben. Beide Kurven verlaufen näherungsweise linear und schneiden sich etwa in der Mitte des Diagramms.'

const q19a: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q19-a',
  examId: 'wiso-2020-sommer',
  questionNumber: 19,
  subPart: 'a',
  topic: 'Angebot und Nachfrage',
  scenario: SCENARIO_19,
  referenceText: REFERENCE_19,
  question:
    'Für ein Produkt, wie es die Infotec GmbH anbietet, wurde für den Gesamtmarkt folgende Angebots- und Nachfragesituation (modellhaft vereinfacht) ermittelt (siehe Angebots- und Nachfragekurve).\n\nErmitteln Sie …\na) den Preis je Stück, zu dem ein höchstmöglicher Umsatz erzielt werden kann.\n\nTragen Sie die Ergebnisse in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '75,00',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19b: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q19-b',
  examId: 'wiso-2020-sommer',
  questionNumber: 19,
  subPart: 'b',
  topic: 'Angebot und Nachfrage',
  scenario: SCENARIO_19,
  referenceText: REFERENCE_19,
  question:
    'Ermitteln Sie …\nb) den Umsatz, der maximal erzielt werden kann.\n\nTragen Sie die Ergebnisse in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '6.750,00',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19c: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q19-c',
  examId: 'wiso-2020-sommer',
  questionNumber: 19,
  subPart: 'c',
  topic: 'Angebot und Nachfrage',
  scenario: SCENARIO_19,
  referenceText: REFERENCE_19,
  question:
    'Ermitteln Sie …\nc) den Angebotsüberhang bei einem Preis von 90,00 EUR je Stück.\n\nTragen Sie die Ergebnisse in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '40',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q20',
  examId: 'wiso-2020-sommer',
  questionNumber: 20,
  topic: 'Umsatzrentabilität',
  scenario: SCENARIO,
  referenceText:
    'Quartalszahlen 2019 der Infotec GmbH:\nQuartal 1: Umsatz 280.000 EUR, Gewinn 11.200 EUR\nQuartal 2: Umsatz 320.000 EUR, Gewinn 19.200 EUR\nQuartal 3: Umsatz 260.000 EUR, Gewinn 13.000 EUR\nQuartal 4: Umsatz 340.000 EUR, Gewinn 23.800 EUR',
  question:
    'Für die Infotec GmbH liegen für das Jahr 2019 folgende Quartalszahlen vor (siehe Tabelle).\n\nBerechnen Sie die Umsatzrentabilität für die vier Quartale 2019.\n\nGeben Sie das Quartal an, in dem die Infotec GmbH die höchste Umsatzrentabilität erzielte.\n\nTragen Sie die Ziffer des Quartals und deren Umsatzrentabilität in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '4/7',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q21',
  examId: 'wiso-2020-sommer',
  questionNumber: 21,
  topic: 'Nachfrage',
  scenario: SCENARIO,
  question:
    'Die Nachfrage der Kunden (Konsumenten) der Infotec GmbH hängt von verschiedenen Faktoren ab.\n\nWelche der folgenden Aussagen trifft zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Nachfrage der Konsumenten ist immer unabhängig vom Angebot.' },
    { id: '2', text: 'Die Menge der Bedürfnisse der Konsumenten entsprechen dem Bedarf.' },
    { id: '3', text: 'Der Bedarf der Konsumenten ist abhängig von der Kaufkraft.' },
    { id: '4', text: 'Die Bedürfnisse der Konsumenten entsprechen dem Angebot.' },
    { id: '5', text: 'Die Bedürfnisse der Konsumenten entsprechen deren Nachfrage.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q22',
  examId: 'wiso-2020-sommer',
  questionNumber: 22,
  topic: 'Verbraucherschutz',
  scenario: SCENARIO,
  question:
    'Der Verbraucherschutz ist ein zentrales Element der sozialen Marktwirtschaft.\n\nWelche der folgenden Aussagen trifft auf den Verbraucherschutz zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Verbraucherschutz greift nur bei B2B-Geschäften.' },
    { id: '2', text: 'Träger des Verbraucherschutzes sind u. a. die Verbraucherzentralen.' },
    { id: '3', text: 'Der Verbraucherschutz gilt nur bei Versandgeschäften.' },
    { id: '4', text: 'Der Verbraucherschutz bezieht sich allein auf Produkte, welche die Gesundheit der Verbraucher schädigen können, z. B. Lebensmittel, Medikamente, Trinkwasser.' },
    { id: '5', text: 'Der Verbraucherschutz ist ein Zweig der Sozialversicherung zur Absicherung von Risiken aus privatrechtlichen Verträgen wie Kaufverträgen und Mietverträgen.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q23',
  examId: 'wiso-2020-sommer',
  questionNumber: 23,
  topic: 'Geschäftsfähigkeit',
  scenario: SCENARIO,
  question:
    'Die 18-jährige Auszubildende Laura Peters verfügt über eine monatliche Ausbildungsvergütung von 995,00 EUR. Sie ist leidenschaftliche PC-Gamerin und bestellt bei der Infotec GmbH einen High-End-Gaming-PC zum Preis von 4.999,00 EUR. Da sie noch nicht die gesamte Summe gespart hat, vereinbart sie mit dem Verkäufer eine Anzahlung von 999,00 EUR zu leisten und die restliche Summe in zehn Monatsraten zu je 400,00 EUR pro Monat zu zahlen.\n\nWelche der folgenden Aussagen zu diesem Rechtsgeschäft trifft zu?\n\nTragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Darlehensgeschäfte mit Auszubildenden sind nichtig.' },
    { id: '2', text: 'Das Rechtsgeschäft ist bis zur Zustimmung der gesetzlichen Vertreter schwebend unwirksam.' },
    { id: '3', text: 'Das Rechtsgeschäft ist gültig, weil Frau Peters unbeschränkt geschäftsfähig ist.' },
    { id: '4', text: 'Auszubildende sind generell geschäftsunfähig.' },
    { id: '5', text: 'Darlehensgeschäfte von Auszubildenden bedürfen der Zustimmung des Familiengerichts.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q24',
  examId: 'wiso-2020-sommer',
  questionNumber: 24,
  topic: 'Natürliche und juristische Personen',
  scenario: SCENARIO,
  question:
    'Die Infotec GmbH hat einen großen Kundenstamm mit privaten als auch gewerblichen Kunden.\n\nWelche der folgenden Kunden sind natürliche Personen?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Kunden in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Städtische Werke Nürnberg GmbH' },
    { id: '2', text: 'Bauingenieurin Sophie Heine' },
    { id: '3', text: 'Consulting Josef Ohlert GmbH' },
    { id: '4', text: 'Interbyte AG' },
    { id: '5', text: 'Steuerberaterin Sophie Kropp' },
    { id: '6', text: 'Staatliche Museen Berlin' },
  ],
  correctAnswer: ['2', '5'],
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q25',
  examId: 'wiso-2020-sommer',
  questionNumber: 25,
  topic: 'Prokura',
  scenario: SCENARIO,
  question:
    'Die Geschäftsleitung der Infotec GmbH hat der Abteilungsleiterin Petra Fischer Prokura erteilt.\n\nWelche der folgenden Aussagen treffen auf die Prokura zu?\n\nTragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.\n\nFrau Fischer …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'muss zukünftig Geschäftsbriefe mit dem Zusatz pp. oder ppa. unterzeichnen.' },
    { id: '2', text: 'muss als Prokuristin in das Handelsregister eingetragen werden.' },
    { id: '3', text: 'darf das Unternehmen verkaufen.' },
    { id: '4', text: 'muss die Bilanz der Infotec GmbH unterzeichnen.' },
    { id: '5', text: 'darf neue Gesellschafter in die Infotec GmbH aufnehmen.' },
    { id: '6', text: 'darf ohne Weiteres Unternehmensgrundstücke verkaufen.' },
  ],
  correctAnswer: ['1', '2'],
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q26',
  examId: 'wiso-2020-sommer',
  questionNumber: 26,
  topic: 'Vollmachten',
  scenario: SCENARIO,
  question:
    'Die Infotec GmbH überträgt der IT-Systemkauffrau Sophie Schulz als Sachbearbeiterin im Einkauf die Beschaffung von Hardware bis zu einem Auftragswert von 10.000,00 EUR je Auftrag.\n\nMit welcher der folgenden Unterschriften muss Frau Schulz die Geschäftsbriefe unterzeichnen?\n\nTragen Sie die Ziffer vor der zutreffenden Unterschrift in das Kästchen ein.\n\nInfotec GmbH …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Schulz' },
    { id: '2', text: 'Sophie Schulz' },
    { id: '3', text: 'ppa. Schulz' },
    { id: '4', text: 'i. H. Schulz' },
    { id: '5', text: 'i. A. Schulz' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q27',
  examId: 'wiso-2020-sommer',
  questionNumber: 27,
  topic: 'Arbeitsteilung',
  scenario: SCENARIO,
  question:
    'Die Arbeitsleistungen der Infotec GmbH werden von verschiedenen Wirtschaftseinheiten erbracht.\n\nIn welchem der folgenden Fälle handelt es sich um eine betriebliche Arbeitsteilung (Arbeitszerlegung)?\n\nTragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.\n\nDie Infotec GmbH …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'gliedert einen Schritt des Leistungsprozesses an die Byte GmbH aus.' },
    { id: '2', text: 'lässt von einem Mitarbeiter ein Produkt aus Komponenten zusammenbauen, die von verschiedenen externen Unternehmen hergestellt wurden.' },
    { id: '3', text: 'organisiert mehrere Prozesse als „supply chain", in denen Lieferanten, Abteilungen der Infotec GmbH und Kunden miteinander vernetzt sind.' },
    { id: '4', text: 'schließt eine Filiale in Niedersachsen, deren Kunden zukünftig von der Hamburger Filiale beliefert werden sollen.' },
    { id: '5', text: 'gliedert einen Beschaffungsprozess für Hardware in mehrere Teilprozesse, die von mehreren Arbeitskräften ausgeführt werden.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q28',
  examId: 'wiso-2020-sommer',
  questionNumber: 28,
  topic: 'Globalisierung',
  scenario: SCENARIO,
  question:
    'Die Volkswirtschaft der Bundesrepublik Deutschland profitiert von der Globalisierung.\n\nWelche der folgenden Maßnahmen fördert die Globalisierung?\n\nTragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die USA plant, für bestimmte Produkte aus der EU die Zölle zu erhöhen.' },
    { id: '2', text: 'Die Erhöhung der Steuern für Transportdienstleistungen.' },
    { id: '3', text: 'Die EU schließt ein Freihandelsabkommen mit den südamerikanischen Staaten.' },
    { id: '4', text: 'Die Infotec GmbH schließt ihre Niederlassungen in Asien.' },
    { id: '5', text: 'Ein deutsches Unternehmen zentralisiert die Fertigung in Deutschland.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29Options = [
  { id: '1', text: 'Stabilität des Preisniveaus' },
  { id: '2', text: 'Hoher Beschäftigungsstand' },
  { id: '3', text: 'Außenwirtschaftliches Gleichgewicht' },
  { id: '4', text: 'Stetiges und angemessenes Wirtschaftswachstum' },
]

const SCENARIO_29 = SCENARIO
const REFERENCE_29 =
  'Ziele (Stabilitätsgesetz):\n1 Stabilität des Preisniveaus\n2 Hoher Beschäftigungsstand\n3 Außenwirtschaftliches Gleichgewicht\n4 Stetiges und angemessenes Wirtschaftswachstum'

const q29a: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q29-a',
  examId: 'wiso-2020-sommer',
  questionNumber: 29,
  subPart: 'a',
  topic: 'Stabilitätsgesetz',
  scenario: SCENARIO_29,
  referenceText: REFERENCE_29,
  question:
    'Ziel der Wirtschaftspolitik der Bundesrepublik Deutschland ist das gesamtwirtschaftliche Gleichgewicht. Im Stabilitätsgesetz werden vier Ziele genannt, deren Zielerreichung an Indikatoren gemessen werden. Ordnen Sie die folgenden Ziele den nachstehenden Indikatoren zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Ziel in das Kästchen ein.\n\na) Arbeitslosenquote',
  type: 'single-choice',
  options: q29Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29b: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q29-b',
  examId: 'wiso-2020-sommer',
  questionNumber: 29,
  subPart: 'b',
  topic: 'Stabilitätsgesetz',
  scenario: SCENARIO_29,
  referenceText: REFERENCE_29,
  question:
    'Ordnen Sie die folgenden Ziele den nachstehenden Indikatoren zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Ziel in das Kästchen ein.\n\nb) Preisindex für Lebenshaltung',
  type: 'single-choice',
  options: q29Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29c: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q29-c',
  examId: 'wiso-2020-sommer',
  questionNumber: 29,
  subPart: 'c',
  topic: 'Stabilitätsgesetz',
  scenario: SCENARIO_29,
  referenceText: REFERENCE_29,
  question:
    'Ordnen Sie die folgenden Ziele den nachstehenden Indikatoren zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Ziel in das Kästchen ein.\n\nc) Zuwachsrate des realen Bruttoinlandsprodukts',
  type: 'single-choice',
  options: q29Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29d: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q29-d',
  examId: 'wiso-2020-sommer',
  questionNumber: 29,
  subPart: 'd',
  topic: 'Stabilitätsgesetz',
  scenario: SCENARIO_29,
  referenceText: REFERENCE_29,
  question:
    'Ordnen Sie die folgenden Ziele den nachstehenden Indikatoren zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Ziel in das Kästchen ein.\n\nd) Außenbeitrag (Saldo von Handels- und Dienstleistungsbilanz)',
  type: 'single-choice',
  options: q29Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2020-sommer-q30',
  examId: 'wiso-2020-sommer',
  questionNumber: 30,
  topic: 'Kaufkraft',
  scenario: SCENARIO,
  question:
    'Die Bundesregierung plant Maßnahmen zur Steigerung der Kaufkraft.\n\nWelche der folgenden staatlichen Maßnahmen wirkt sich positiv auf die Kaufkraft aus?\n\nTragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.\n\nErhöhung …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'der Importzölle für bestimmte Produkte aus den USA' },
    { id: '2', text: 'des Beitragssatzes zur gesetzlichen Krankenversicherung' },
    { id: '3', text: 'des Wohngeldes' },
    { id: '4', text: 'der Beitragsbemessungsgrenze in der Sozialversicherung' },
    { id: '5', text: 'des Mehrwertsteuersatzes' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

export const wisoExam2020SommerQuestions: WisoExamQuestion[] = [
  q1,
  q2a,
  q2b,
  q2c,
  q2d,
  q2e,
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
  q13,
  q14,
  q15,
  q16,
  q17a,
  q17b,
  q17c,
  q18a,
  q18b,
  q18c,
  q18d,
  q18e,
  q19a,
  q19b,
  q19c,
  q20,
  q21,
  q22,
  q23,
  q24,
  q25,
  q26,
  q27,
  q28,
  q29a,
  q29b,
  q29c,
  q29d,
  q30,
]
