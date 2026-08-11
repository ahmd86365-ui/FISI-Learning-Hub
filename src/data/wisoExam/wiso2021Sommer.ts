import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Sommer 2021, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_21s.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_21s.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 */

export const wisoExam2021SommerMeta: WisoExamMeta = {
  id: 'wiso-2021-sommer',
  year: 2021,
  period: 'Sommer',
  label: 'Sommer 2021',
  examDate: 'Mittwoch, 5. Mai 2021',
  courseCodes: '1190 – 1196 – 1197 – 6440 – 6450',
  sourceExamPdf: 'WiSo_21s.pdf',
  sourceSolutionPdf: 'Loe_WiSo_21s.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** General company context ("Situation") printed once on page 2; applies to the whole exam. */
const SCENARIO_GENERAL =
  'Sie sind Mitarbeiter/-in der GreenByte GmbH.\n\nDie GreenByte GmbH ist ein IT-Dienstleistungsunternehmen mit Sitz in Hamburg. Die GreenByte GmbH beschäftigt 110 Mitarbeitende an mehreren Standorten.\n\nDie folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

/** Local "Situation zur 19. und 20. Aufgabe" box printed on page 7. */
const SCENARIO_19_20 = 'Die GreenByte GmbH will ein IT-Servicecenter in der Rechtsform einer GmbH gründen.'

const q1: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q1',
  examId: 'wiso-2021-sommer',
  questionNumber: 1,
  topic: 'Unternehmensformen',
  scenario: SCENARIO_GENERAL,
  question:
    'Zur GreenByte GmbH liegen folgende Daten vor:\n\nGesellschaft mit beschränkter Haftung\nIT-Dienstleister\n25 % Marktanteil in der Region\n110 Mitarbeitende\n1.520.000 EUR Gewinn im Jahr 2020\n\nWelche der folgenden Angaben treffen auf die GreenByte GmbH zu? Tragen Sie die Ziffern vor den zwei zutreffenden Angaben in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Kapitalgesellschaft' },
    { id: '2', text: 'Monopolist in der Region' },
    { id: '3', text: 'Unternehmen des primären Sektors' },
    { id: '4', text: 'Großunternehmen' },
    { id: '5', text: 'Erwerbswirtschaftliches Unternehmen' },
    { id: '6', text: 'Personengesellschaft' },
  ],
  correctAnswer: ['1', '5'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q2',
  examId: 'wiso-2021-sommer',
  questionNumber: 2,
  topic: 'Allgemeines Gleichbehandlungsgesetz (AGG)',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH plant, zwei Fachinformatiker Anwendungsentwicklung (m/w/d) einzustellen. Welche der folgenden Formulierungen in einer Stellenanzeige verstößt gegen das Allgemeine Gleichbehandlungsgesetz (AGG). Tragen Sie die Ziffer vor der zutreffenden Formulierung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Sie verfügen über hervorragende Kenntnisse in Webprogrammierung.' },
    { id: '2', text: 'Sie passen in unser junges dynamisches Team, wenn Sie jünger als 30 Jahre sind.' },
    { id: '3', text: 'Sie sind mobil und bereit, auch mehrtägige Geschäftsreisen zu unternehmen.' },
    { id: '4', text: 'Sie sind an flexible Arbeitszeiten gewöhnt und können gelegentlich abends länger arbeiten.' },
    { id: '5', text: 'Sie beherrschen die englische Sprache verhandlungssicher in Wort und Schrift.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q3',
  examId: 'wiso-2021-sommer',
  questionNumber: 3,
  topic: 'Arbeitssicherheit',
  scenario: SCENARIO_GENERAL,
  question:
    'In der Geschäftsführung der GreenByte GmbH werden Maßnahmen zur Arbeitssicherheit im Unternehmen diskutiert. Welche der folgenden Aussagen trifft auf die Arbeitssicherheit im Unternehmen zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Betriebliche Arbeitsschutzbestimmungen sind eine freiwillige Leistung des Arbeitgebers.' },
    { id: '2', text: 'Betriebliche Arbeitsschutzbestimmungen gelten nur, wenn sie tarifvertraglich vereinbart wurden.' },
    { id: '3', text: 'Der Arbeitgeber muss alle notwendigen Maßnahmen des Arbeitsschutzes treffen und die Einhaltung im Betrieb überwachen.' },
    { id: '4', text: 'Die regelmäßige Unterweisung in Arbeitsschutzbestimmungen erfolgt in Unternehmen durch externe Berater der Industrie- und Handelskammer.' },
    { id: '5', text: 'Die Ergonomie von Arbeitsplätzen ist nicht notwendig, weil die Ergonomie nicht der Arbeitssicherheit dient.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q4',
  examId: 'wiso-2021-sommer',
  questionNumber: 4,
  topic: 'Probezeit',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH möchte zukünftig in den Arbeitsverträgen eine Probezeit von sechs Monaten vereinbaren. Welche der folgenden Aussagen trifft auf die Probezeit zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Eine Probezeit darf nur bei unbefristeten Arbeitsverträgen vereinbart werden.' },
    { id: '2', text: 'Eine Probezeit von sechs Monaten ist gesetzlich zulässig.' },
    { id: '3', text: 'Die Probezeit muss mindestens zwölf Monate betragen.' },
    { id: '4', text: 'Der Arbeitgeber kann die Probezeit beliebig oft verlängern.' },
    { id: '5', text: 'Während der Probezeit kann nur der Arbeitnehmer das Arbeitsverhältnis kündigen.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q5',
  examId: 'wiso-2021-sommer',
  questionNumber: 5,
  topic: 'Kollektives Arbeitsrecht',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH ist Mitglied des Arbeitgeberverbandes. Bei welcher der folgenden Vereinbarungen des Arbeitsvertrags ist die GreenByte GmbH an kollektives Arbeitsrecht gebunden? Tragen Sie die Ziffer vor der zutreffenden Vereinbarung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Wochenarbeitszeit beträgt regelmäßig 38 Stunden.' },
    { id: '2', text: 'Das Arbeitsverhältnis beginnt am 1. Juli 2021 und ist unbefristet.' },
    { id: '3', text: 'Der Mitarbeiter erhält einen außertariflichen Fahrgeldzuschuss von 100,00 EUR.' },
    { id: '4', text: 'Der Mitarbeiter arbeitet im IT-Service in der Kundenbetreuung im Außendienst.' },
    { id: '5', text: 'Die GreenByte GmbH bietet dem Mitarbeitenden die Möglichkeit, ein Jobticket für den ÖPNV zu erwerben.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q6',
  examId: 'wiso-2021-sommer',
  questionNumber: 6,
  topic: 'Kurzarbeit',
  scenario: SCENARIO_GENERAL,
  question:
    'In der Unternehmenszentrale der GreenByte GmbH in Hamburg arbeiten insgesamt 110 Mitarbeitende. Durch Unterbrechungen in der Lieferkette und Auftragsstornierungen von Kunden können für voraussichtlich zwei Monate die Mitarbeitenden nur zum geringen Teil beschäftigt werden. Das Unternehmen möchte aber den Mitarbeitenden möglichst nicht kündigen, weil sich zum Jahresende die Auftragslage voraussichtlich wieder normalisiert. Welche der folgenden Aussagen trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die GreenByte GmbH muss allen Mitarbeitenden außerordentlich kündigen.' },
    { id: '2', text: 'Die GreenByte GmbH darf jederzeit die Gehälter der Mitarbeitenden kürzen.' },
    { id: '3', text: 'Die Mitarbeitenden müssen für die Dauer der geringen Beschäftigung unbezahlten Urlaub nehmen.' },
    { id: '4', text: 'Die betroffenen Mitarbeitenden haben Anspruch auf Arbeitslosengeld.' },
    { id: '5', text: 'Die GreenByte GmbH kann bei der Bundesagentur für Arbeit für die Mitarbeitenden Kurzarbeitergeld beantragen.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q7',
  examId: 'wiso-2021-sommer',
  questionNumber: 7,
  topic: 'Betriebsrat',
  scenario: SCENARIO_GENERAL,
  question:
    'In der GreenByte GmbH wurde ein Betriebsrat gewählt. Welche der folgenden Aussagen über den Betriebsrat ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Ein Betriebsrat kann in der GreenByte GmbH nicht gewählt werden, weil sie weniger als 200 Mitarbeitende hat.' },
    { id: '2', text: 'Ein Betriebsrat muss je zur Hälfte aus Arbeitnehmern und Arbeitnehmerinnen gebildet werden.' },
    { id: '3', text: 'Ein Betriebsrat kann von allen Arbeitnehmern eines Betriebs gewählt werden, die das 18. Lebensjahr vollendet haben.' },
    { id: '4', text: 'In einen Betriebsrat können nur Arbeitnehmer gewählt werden, die mindestens eine zweijährige Betriebszugehörigkeit nachweisen können.' },
    { id: '5', text: 'Ein Betriebsrat kann nur in tarifvertraglich gebundenen Kapitalgesellschaften gewählt werden.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q8',
  examId: 'wiso-2021-sommer',
  questionNumber: 8,
  topic: 'Mitbestimmungsrecht des Betriebsrats',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Geschäftsleitung der GreenByte GmbH arbeitet eng mit dem Betriebsrat zusammen. In welchen der folgenden Angelegenheiten hat der Betriebsrat laut Betriebsverfassungsgesetz ein Mitbestimmungsrecht? Tragen Sie die Ziffern vor den zwei zutreffenden Angelegenheiten in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Errichtung eines neuen Hochregallagers' },
    { id: '2', text: 'Planung des Personalbedarfs für 2022' },
    { id: '3', text: 'Wechsel des Logistikanbieters' },
    { id: '4', text: 'Einführung eines neuen elektronischen Zeiterfassungssystems' },
    { id: '5', text: 'Festlegung von Richtlinien zur gleitenden Arbeitszeit' },
    { id: '6', text: 'Umwandlung der Rechtsform' },
  ],
  correctAnswer: ['4', '5'],
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q9',
  examId: 'wiso-2021-sommer',
  questionNumber: 9,
  topic: 'Tarifautonomie',
  scenario: SCENARIO_GENERAL,
  question:
    'Für Arbeitgeber und Arbeitnehmer ist die Tarifautonomie gesetzlich festgeschrieben. Welche der folgenden Aussagen treffen auf die Tarifautonomie zu? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.\n\nDie Tarifautonomie …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'gibt den Vertragsparteien das Recht, die Arbeits- und Wirtschaftsbedingungen unabhängig von staatlicher Einflussnahme zu regeln.' },
    { id: '2', text: 'gibt den Vertragsparteien das Recht zu Vereinbarungen, die von den Vertragspartnern nicht einseitig zu Ungunsten der Arbeitnehmer abgeändert werden dürfen.' },
    { id: '3', text: 'gewährt der Bundesagentur für Arbeit die direkte Eingriffsmöglichkeit in Tarifverhandlungen.' },
    { id: '4', text: 'gibt den Vertragsparteien das Recht, unter Beteiligung des Bundesministeriums für Arbeit und Soziales Vereinbarungen zu treffen.' },
    { id: '5', text: 'ist individuelles Arbeitsrecht zur Regelung der Beziehungen zwischen einem Arbeitgeber und einem Arbeitnehmer.' },
    { id: '6', text: 'gibt den Vertragsparteien das Recht zu Regelungen, die schlechter sind als die in Gesetzen genannten.' },
  ],
  correctAnswer: ['1', '2'],
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q10',
  examId: 'wiso-2021-sommer',
  questionNumber: 10,
  topic: 'Berufliche Weiterbildung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die berufliche Weiterbildung wird in der GreenByte GmbH gefördert, um die Wettbewerbsfähigkeit des Unternehmens auch in Zukunft zu gewährleisten. Welche der folgenden Aussagen zur beruflichen Weiterbildung ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie berufliche Weiterbildung …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist in der IT-Branche zur Vertiefung und Erweiterung von Kenntnissen und Fertigkeiten notwendig.' },
    { id: '2', text: 'ist für Arbeitnehmer grundsätzlich kostenpflichtig, weil die Weiterbildung überwiegend im persönlichen Interesse des Arbeitnehmers liegt.' },
    { id: '3', text: 'darf nur außerbetrieblich in Einrichtungen zertifizierter Bildungsträger erfolgen.' },
    { id: '4', text: 'muss immer als Aufstiegsfortbildung mit einer Abschlussprüfung vor der Industrie- und Handelskammer angelegt sein.' },
    { id: '5', text: 'ist nur in einem anerkannten Ausbildungsberuf zulässig.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q11',
  examId: 'wiso-2021-sommer',
  questionNumber: 11,
  topic: 'Wegeunfall / gesetzliche Unfallversicherung',
  scenario: SCENARIO_GENERAL,
  question:
    'Eine Mitarbeiterin der GreenByte GmbH ist arbeitsunfähig, weil sie am Vortag auf dem direkten Weg zur Arbeit bei einem Sturz vom Fahrrad schwer verletzt wurde. Welche der folgenden Aussagen ist in diesem Zusammenhang zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie GreenByte GmbH …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss den Unfall der Krankenversicherung der Mitarbeiterin melden.' },
    { id: '2', text: 'darf die Gehaltszahlung ab dem ersten Krankheitstag einstellen.' },
    { id: '3', text: 'darf den Urlaubsanspruch der Mitarbeiterin kürzen.' },
    { id: '4', text: 'muss den Unfall der Gewerbeaufsichtsbehörde melden.' },
    { id: '5', text: 'muss den Unfall der Berufsgenossenschaft melden.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q12',
  examId: 'wiso-2021-sommer',
  questionNumber: 12,
  topic: 'Beitragsbemessungsgrenze / Rentenversicherung',
  scenario: SCENARIO_GENERAL,
  question:
    'Nach der letzten Gehaltserhöhung übersteigt das Bruttogehalt von Melanie Fuchs die Beitragsbemessungsgrenze für die gesetzliche Rentenversicherung. Welche der folgenden Konsequenzen ergibt sich aus der Gehaltserhöhung für Frau Fuchs? Tragen Sie die Ziffer vor der zutreffenden Konsequenz in das Kästchen ein.\n\nFrau Fuchs …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss sich nun privat versichern.' },
    { id: '2', text: 'muss nun für einen Teil ihres Gehalts keinen Rentenversicherungsbeitrag mehr leisten.' },
    { id: '3', text: 'erhält für die Sozialversicherung keinen Arbeitgeberanteil mehr.' },
    { id: '4', text: 'ist in der gesetzlichen Rentenversicherung nicht mehr versicherungspflichtig.' },
    { id: '5', text: 'kann die Beiträge an die Rentenversicherung gegen Selbstbehalt reduzieren.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q13',
  examId: 'wiso-2021-sommer',
  questionNumber: 13,
  topic: 'Solidaritätsprinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Solidarität ist ein gesellschaftspolitisches Prinzip, das in der Bundesrepublik Deutschland angewendet wird. Welcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Staat hebt die Beitragsbemessungsgrenze für die gesetzliche Krankenkasse an.' },
    { id: '2', text: 'Der Staat fordert verstärkt Selbstverantwortung bei der Altersvorsorge.' },
    { id: '3', text: 'Der Spitzensteuersatz bei der Einkommenssteuer wird gesenkt.' },
    { id: '4', text: 'Kindergartenbeiträge sind für alle Eltern, unabhängig vom Einkommen, gleich hoch.' },
    { id: '5', text: 'Der Beitrag zur Krankenversicherung steigt mit individuellem Krankheitsrisiko des Versicherten.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q14',
  examId: 'wiso-2021-sommer',
  questionNumber: 14,
  topic: 'Private Altersvorsorge',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der GreenByte GmbH diskutieren über die unterschiedlichen Möglichkeiten einer privaten Altersvorsorge. Welcher der folgenden Sachverhalte gefährdet eine private Altersvorsorge? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Steigende Zinsen für Spareinlagen' },
    { id: '2', text: 'Einführung von Kurzarbeitergeld für ein Jahr als Folge der Pandemie' },
    { id: '3', text: 'Steigendes Lohnniveau' },
    { id: '4', text: 'Höhere Beitragssätze in der gesetzlichen Pflegeversicherung' },
    { id: '5', text: 'Anhebung der Beitragsbemessungsgrenze in der gesetzlichen Rentenversicherung' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q15',
  examId: 'wiso-2021-sommer',
  questionNumber: 15,
  topic: 'Erwerbswirtschaftliches Prinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH ist ein erwerbswirtschaftliches Unternehmen. Welche der folgenden Aussagen treffen auf ein erwerbswirtschaftliches Unternehmen zu? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.\n\nDie GreenByte GmbH …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'kann nur Konsumgüter herstellen.' },
    { id: '2', text: 'darf keine Gewinne erzielen.' },
    { id: '3', text: 'arbeitet gewinnorientiert.' },
    { id: '4', text: 'muss jeden Kunden zu staatlich festgelegten Bedingungen und Preisen beliefern.' },
    { id: '5', text: 'wirtschaftet nach einem öffentlichen Wirtschaftsplan mit dem Ziel der Bedarfsdeckung.' },
    { id: '6', text: 'richtet ihr Portfolio am Marktumfeld aus.' },
  ],
  correctAnswer: ['3', '6'],
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q16a: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q16-a',
  examId: 'wiso-2021-sommer',
  questionNumber: 16,
  subPart: 'a',
  topic: 'Eigenkapitalrentabilität',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Gesellschafter der GreenByte GmbH haben insgesamt Stammeinlagen in Höhe von 1.375.000 EUR in die GmbH eingebracht. Im Jahr 2019 erzielte die GreenByte GmbH einen Gewinn von 116.875 EUR. Im Geschäftsjahr 2020 ist der Gewinn auf 129.250 EUR bei unveränderten Stammeinlagen gestiegen. Ermitteln Sie die Eigenkapitalrentabilität im Jahr 2020 in Prozent. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '9,4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16b: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q16-b',
  examId: 'wiso-2021-sommer',
  questionNumber: 16,
  subPart: 'b',
  topic: 'Eigenkapitalrentabilität',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Gesellschafter der GreenByte GmbH haben insgesamt Stammeinlagen in Höhe von 1.375.000 EUR in die GmbH eingebracht. Im Jahr 2019 erzielte die GreenByte GmbH einen Gewinn von 116.875 EUR. Im Geschäftsjahr 2020 ist der Gewinn auf 129.250 EUR bei unveränderten Stammeinlagen gestiegen. Ermitteln Sie, um wie viel Prozentpunkte die Eigenkapitalrentabilität 2020 im Vergleich zu 2019 gestiegen ist. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '0,9',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17a: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q17-a',
  examId: 'wiso-2021-sommer',
  questionNumber: 17,
  subPart: 'a',
  topic: 'Umsatz pro Mitarbeiter',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Umsatz pro Mitarbeiter im Jahr 2019: 112.000 EUR\n\nGeschäftsjahr | Anzahl Mitarbeiter | Umsatz\n2020 | 32 | 3.763.200 EUR',
  question:
    'Die Geschäftsführung der GreenByte GmbH möchte überprüfen, wie sich der gesunkene Umsatz 2020 im Vergleich zu 2019 auf den Umsatz je Mitarbeiter ausgewirkt hat. Berechnen Sie den Umsatz pro Mitarbeiter für das Jahr 2020. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '117.600',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17b: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q17-b',
  examId: 'wiso-2021-sommer',
  questionNumber: 17,
  subPart: 'b',
  topic: 'Umsatz pro Mitarbeiter',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Umsatz pro Mitarbeiter im Jahr 2019: 112.000 EUR\n\nGeschäftsjahr | Anzahl Mitarbeiter | Umsatz\n2020 | 32 | 3.763.200 EUR',
  question:
    'Die Geschäftsführung der GreenByte GmbH möchte überprüfen, wie sich der gesunkene Umsatz 2020 im Vergleich zu 2019 auf den Umsatz je Mitarbeiter ausgewirkt hat. Berechnen Sie die prozentuale Veränderung des Umsatzes pro Mitarbeiter von 2019 auf 2020. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '5 oder Algo (E17a - 112.000) / 112.000 x 100',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q18',
  examId: 'wiso-2021-sommer',
  questionNumber: 18,
  topic: 'Unternehmenszusammenschlüsse / Fusion',
  scenario: SCENARIO_GENERAL,
  question:
    'In der GreenByte GmbH wird die Zusammenarbeit von Unternehmen in ihrem wirtschaftlichen Umfeld beobachtet. Bei welchem der folgenden Sachverhalte handelt es sich um eine Fusion? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Lüders KG und die Felder KG führen gemeinsam einen Großauftrag aus.' },
    { id: '2', text: 'Die HIES AG, ein Lieferer der GreenByte GmbH, hat die Aktienmehrheit an der Veit AG übernommen.' },
    { id: '3', text: 'Die Knebel AG, A-Stadt, vereinbart mit Wettbewerbern einheitliche Verkaufskonditionen.' },
    { id: '4', text: 'Zwei Kunden der GreenByte GmbH, die Schmidt GmbH und die Weber KG, schließen sich zur Schmidt GmbH & Co. KG zusammen.' },
    { id: '5', text: 'Die HIES KG nimmt einen neuen Gesellschafter auf.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q19',
  examId: 'wiso-2021-sommer',
  questionNumber: 19,
  topic: 'GmbH-Gründung',
  scenario: SCENARIO_19_20,
  question:
    'Mit welchem der folgenden Ereignisse wird eine GmbH rechtsfähig? Tragen Sie die Ziffer vor dem zutreffenden Ereignis in das Kästchen ein.\n\nMit …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'der Einzahlung des Stammkapitals' },
    { id: '2', text: 'der notariellen Beurkundung des Gesellschaftsvertrages' },
    { id: '3', text: 'dem Abschluss des ersten Rechtsgeschäfts' },
    { id: '4', text: 'der Eintragung in das Handelsregister' },
    { id: '5', text: 'der Einberufung der ersten Gesellschafterversammlung' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q20',
  examId: 'wiso-2021-sommer',
  questionNumber: 20,
  topic: 'GmbH',
  scenario: SCENARIO_19_20,
  question: 'Welche der folgenden Aussagen zur GmbH ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das Stammkapital muss mindestens 50.000 EUR betragen.' },
    { id: '2', text: 'Ein Gesellschafter kann gleichzeitig Geschäftsführer sein.' },
    { id: '3', text: 'Die GmbH hat keine Firma.' },
    { id: '4', text: 'Die Geschäftsführung der GmbH obliegt dem Vorstand.' },
    { id: '5', text: 'Die neu gegründete GmbH ist eine juristische Person des öffentlichen Rechts.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q21',
  examId: 'wiso-2021-sommer',
  questionNumber: 21,
  topic: 'Bedürfnisse, Bedarf und Nachfrage',
  scenario: SCENARIO_GENERAL,
  question:
    'Das Verhalten von Konsumenten hängt von verschiedenen Faktoren ab. Welche der folgenden Aussagen ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Bedarf der Konsumenten ist unabhängig von der Menge ihrer Bedürfnisse.' },
    { id: '2', text: 'Die Kaufkraft der Konsumenten hat keinen Einfluss auf den Bedarf.' },
    { id: '3', text: 'Die Nachfrage der Konsumenten ist abhängig von der Kaufkraft.' },
    { id: '4', text: 'Die Bedürfnisse der Konsumenten entsprechen dem Angebot.' },
    { id: '5', text: 'Die Bedürfnisse der Konsumenten entsprechen deren Nachfrage.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q22',
  examId: 'wiso-2021-sommer',
  questionNumber: 22,
  topic: 'Angebot und Nachfrage / Marktsituation',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH bietet ihren Kunden seit zwei Jahren erfolgreich ein Dokumentenmanagementsystem an. Da Dokumentenmanagementsysteme im Markt ein hohes Wachstumspotenzial haben, wurde das Angebot im Markt durch mehrere neue Mitbewerber stark erhöht. Die Nachfrage ist im geringeren Maß als die Erhöhung des Angebots gestiegen. Welche der folgenden Aussagen trifft auf diese Marktsituation zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Es ist ein Verkäufermarkt, weil das gestiegene Angebot Preissteigerungen ermöglicht.' },
    { id: '2', text: 'Es ist ein Käufermarkt, weil das gestiegene Angebot Preissenkungen erwarten lässt.' },
    { id: '3', text: 'Das Angebot der neuen Mitbewerber hat keinen Einfluss auf die Preisbildung.' },
    { id: '4', text: 'Wegen des Nachfrageüberhangs können die Unternehmen Preissteigerungen durchsetzen.' },
    { id: '5', text: 'Bei dem Angebotsüberhang können die Unternehmen bei Lohnsteigerungen leichter die Preise erhöhen.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q23',
  examId: 'wiso-2021-sommer',
  questionNumber: 23,
  topic: 'Angebotsgesetz / vollkommener Markt',
  scenario: SCENARIO_GENERAL,
  question:
    'In einem vollkommenen Markt beeinflusst der erzielbare Preis eines Produkts die angebotene Menge des Produkts. Welche der folgenden Aussagen über den Zusammenhang von angebotener Menge und Preis eines Produktes trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Je höher die angebotene Menge des Produkts ist, umso niedriger ist der Preis.' },
    { id: '2', text: 'Je höher der Preis des Produkts ist, umso niedriger ist die angebotene Menge.' },
    { id: '3', text: 'Je höher der Preis des Produkts ist, umso höher ist die angebotene Menge.' },
    { id: '4', text: 'Je niedriger die angebotene Menge des Produkts ist, umso höher ist der Preis.' },
    { id: '5', text: 'Der Preis eines Produkts hat keinen Einfluss auf die angebotene Menge.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24Options = [
  { id: '1', text: 'Kommanditist/-in' },
  { id: '2', text: 'Prokurist/-in' },
  { id: '3', text: 'Handlungsbevollmächtigte/-r' },
  { id: '4', text: 'Geschäftsführer/-in' },
  { id: '5', text: 'Vorstand' },
  { id: '6', text: 'Sekretär/-in' },
]

const q24a: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q24-a',
  examId: 'wiso-2021-sommer',
  questionNumber: 24,
  subPart: 'a',
  topic: 'Vertretungsbefugnis (Prokura / Handlungsvollmacht)',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Die GreenByte GmbH hat mit der Volt GmbH einen Vertrag geschlossen, der vonseiten der Volt GmbH wie folgt unterschrieben wurde:\na) Unterschrift "Heimer" — ppa. Sylvia Heimer\nb) Unterschrift "Dr. Pfeffer" — i. V. Dr. Karl Pfeffer',
  question:
    'Welche der folgenden Positionen hat Sylvia Heimer in der Volt GmbH laut ihrer Unterschrift ("ppa. Sylvia Heimer")? Tragen Sie die Ziffer vor der zutreffenden Position in das Kästchen ein.',
  type: 'single-choice',
  options: q24Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24b: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q24-b',
  examId: 'wiso-2021-sommer',
  questionNumber: 24,
  subPart: 'b',
  topic: 'Vertretungsbefugnis (Prokura / Handlungsvollmacht)',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Die GreenByte GmbH hat mit der Volt GmbH einen Vertrag geschlossen, der vonseiten der Volt GmbH wie folgt unterschrieben wurde:\na) Unterschrift "Heimer" — ppa. Sylvia Heimer\nb) Unterschrift "Dr. Pfeffer" — i. V. Dr. Karl Pfeffer',
  question:
    'Welche der folgenden Positionen hat Dr. Karl Pfeffer in der Volt GmbH laut seiner Unterschrift ("i. V. Dr. Karl Pfeffer")? Tragen Sie die Ziffer vor der zutreffenden Position in das Kästchen ein.',
  type: 'single-choice',
  options: q24Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q25',
  examId: 'wiso-2021-sommer',
  questionNumber: 25,
  topic: 'Verbraucherschutz',
  scenario: SCENARIO_GENERAL,
  question:
    'Der Verbraucherschutz ist ein zentrales Element der sozialen Marktwirtschaft. Welche der folgenden Aussagen trifft auf den Verbraucherschutz zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Träger des Verbraucherschutzes sind die Unternehmen, welche die Verbraucher umfassend und objektiv über ihre Produkte und Dienstleistungen informieren müssen.' },
    { id: '2', text: 'Der Verbraucherschutz schließt die Nachteile aus, welche aufgrund mangelnder Fachkenntnis, Informationen und/oder Erfahrung der Konsumenten entstehen.' },
    { id: '3', text: 'Viele dem Verbraucherschutz dienenden Rechtsnormen sind im Bürgerlichen Gesetzbuch (BGB) verankert, z. B. die Vorschriften über Fernabsatzverträge.' },
    { id: '4', text: 'Der Verbraucherschutz bezieht sich allein auf Produkte, welche die Gesundheit der Verbraucher schädigen können, z. B. Lebensmittel, Medikamente, Trinkwasser.' },
    { id: '5', text: 'Der Verbraucherschutz ist ein Zweig der Sozialversicherung zur Absicherung von Risiken aus privatrechtlichen Verträgen wie Kaufverträgen und Mietverträgen.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q26',
  examId: 'wiso-2021-sommer',
  questionNumber: 26,
  topic: 'Persönliche Existenzsicherung',
  scenario: SCENARIO_GENERAL,
  question:
    'Arbeitnehmer können Maßnahmen zur persönlichen Existenzsicherung treffen. Welche der folgenden Maßnahmen ist zur persönlichen Existenzsicherung geeignet? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Abschluss einer Garantieverlängerung für das neue Smartphone' },
    { id: '2', text: 'Abschluss einer Versicherung für den Fall der Berufsunfähigkeit' },
    { id: '3', text: 'Abschluss eines Ratenkaufvertrags aufgrund fehlender Liquidität' },
    { id: '4', text: 'Abschluss einer Risikolebensversicherung zur Absicherung eines Kredites für den Kauf neuer Möbel' },
    { id: '5', text: 'Abschluss einer privaten Zusatzkrankenversicherung' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q27',
  examId: 'wiso-2021-sommer',
  questionNumber: 27,
  topic: 'Kaufmannseigenschaft / Handelsregister',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Scholz will ein Unternehmen gründen, das in einem Onlineshop IT-Zubehör vertreibt. Das Unternehmen erfordert nach Art und Umfang einen kaufmännischen Geschäftsbetrieb. Welche der folgenden Aussagen zur Unternehmensgründung ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Zur Absicherung von Krediten muss die Unternehmensform Gesellschaft mit beschränkter Haftung (GmbH) gewählt werden.' },
    { id: '2', text: 'Die Industrie- und Handelskammer verlangt von Herrn Scholz den Nachweis seiner fachlichen Qualifikation zum Betrieb eines kaufmännisch zu führenden Unternehmens.' },
    { id: '3', text: 'Herr Scholz muss als Ist-Kaufmann sein kaufmännisch geführtes Unternehmen im Handelsregister eintragen lassen.' },
    { id: '4', text: 'Herr Scholz ist von der Einkommensteuerpflicht befreit, wenn er Gewerbesteuer zahlt.' },
    { id: '5', text: 'Als selbstständiger Kaufmann benötigt Herr Scholz keine Krankenversicherung.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q28',
  examId: 'wiso-2021-sommer',
  questionNumber: 28,
  topic: 'Betriebliche Arbeitsteilung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Arbeitsleistung der GreenByte GmbH wird von verschiedenen Wirtschaftseinheiten erbracht. In welchem der folgenden Fälle handelt es sich um eine betriebliche Arbeitsteilung (Arbeitszerlegung). Tragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.\n\nDie GreenByte GmbH …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'gliedert einen Schritt eines Leistungsprozesses an die OS GmbH aus.' },
    { id: '2', text: 'lässt von einem Mitarbeiter ein Produkt aus Komponenten zusammenbauen, die von verschiedenen externen Unternehmen hergestellt wurden.' },
    { id: '3', text: 'organisiert einen Prozess als Wertschöpfungs- und Lieferkette (Supply Chain), in der Lieferanten, Abteilungen der GreenByte GmbH und Kunden miteinander vernetzt sind.' },
    { id: '4', text: 'betreibt eine Filiale, die in allen Geschäftsfeldern selbstständig operiert.' },
    { id: '5', text: 'produziert ein Produkt in mehreren Arbeitsschritten, die von verschiedenen Arbeitskräften ausgeführt werden.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q29',
  examId: 'wiso-2021-sommer',
  questionNumber: 29,
  topic: 'Globalisierung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die GreenByte GmbH hat sich mit den Auswirkungen der Globalisierung auseinanderzusetzen. Welche der folgenden Auswirkungen trifft auch auf die GreenByte GmbH zu? Tragen Sie die Ziffer vor der zutreffenden Auswirkung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das unternehmerische Risiko sinkt, weil neue Märkte erschlossen werden.' },
    { id: '2', text: 'Da Deutschland ein Niedriglohnland ist, stehen der GreenByte GmbH ausreichend Fachkräfte zur Verfügung.' },
    { id: '3', text: 'Alle Aufträge der GreenByte GmbH werden weltweit in EUR abgewickelt.' },
    { id: '4', text: 'Alle ausländischen Fachkräfte haben jederzeit Zugang zum deutschen Arbeitsmarkt und können von der GreenByte GmbH sofort eingestellt werden.' },
    { id: '5', text: 'Die unternehmerische Risiko steigt, weil durch die notwendigen Warentransporte Lieferketten unterbrochen werden können.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2021-sommer-q30',
  examId: 'wiso-2021-sommer',
  questionNumber: 30,
  topic: 'Soziale Marktwirtschaft',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Wirtschaftsordnung Deutschlands wird als soziale Marktwirtschaft bezeichnet. Welche der folgenden Aussagen trifft auf die soziale Marktwirtschaft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Produktionsmittel dürfen kein privates Eigentum sein.' },
    { id: '2', text: 'Die Sozialgesetzgebung soll den Einzelnen vor den negativen Auswirkungen des Marktes schützen.' },
    { id: '3', text: 'Die Gewinne dürfen von den Anbietern bis zur Gewinnschwelle frei kalkuliert werden.' },
    { id: '4', text: 'Es dürfen nur die Berufe ausgebildet werden, die auf dem Arbeitsmarkt nachgefragt werden.' },
    { id: '5', text: 'Die staatliche Wettbewerbspolitik soll den Wettbewerb einschränken und Monopole sowie Kartelle zur Stabilisierung der Märkte fördern.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

export const wisoExam2021SommerQuestions: WisoExamQuestion[] = [
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
  q13,
  q14,
  q15,
  q16a,
  q16b,
  q17a,
  q17b,
  q18,
  q19,
  q20,
  q21,
  q22,
  q23,
  q24a,
  q24b,
  q25,
  q26,
  q27,
  q28,
  q29,
  q30,
]
