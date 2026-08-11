import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Winter 2021/22, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_21w.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_21w.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 *
 * Aufgabe 2 (page 2) and Aufgabe 18 and 23 (pages 7–8) reference printed
 * diagrams (a Geldkreislaufschema, an organizational Leitungssystem chart,
 * and a standard Angebot/Nachfrage curve chart respectively); Aufgabe 7
 * (page 4) asks the reader to match four pictogram safety signs to a list
 * of meanings. These were transcribed from the rendered page images and
 * cross-checked against the official answer key — all resolved
 * consistently — but, being graphic-derived, are worth a human spot-check
 * against the original PDF.
 */

export const wisoExam2021WinterMeta: WisoExamMeta = {
  id: 'wiso-2021-winter',
  year: 2021,
  period: 'Winter',
  label: 'Winter 2021/22',
  examDate: 'Mittwoch, 24. November 2021',
  courseCodes: '1190 – 1196 – 1197 – 6440 – 6450',
  sourceExamPdf: 'WiSo_21w.pdf',
  sourceSolutionPdf: 'Loe_WiSo_21w.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** General company context ("Situation") printed once on page 2; applies to the whole exam. */
const SCENARIO_GENERAL =
  'Sie sind Mitarbeiterin/Mitarbeiter der MÖLLER AG.\n\nDie MÖLLER AG ist ein IT-Dienstleister.\n\nDie folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const q1: WisoExamQuestion = {
  id: 'wiso-2021-winter-q1',
  examId: 'wiso-2021-winter',
  questionNumber: 1,
  topic: 'Wirtschaftssektoren / Unternehmensarten',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG bietet Dienstleistungen für IT-Unternehmen an. Die Aktionäre der MÖLLER AG sind Privatpersonen, die Dividenden erwarten. Welche der folgenden Angaben treffen auf die MÖLLER AG zu? Tragen Sie die Ziffern vor den zwei zutreffenden Angaben in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Unternehmen des primären Sektors' },
    { id: '2', text: 'Unternehmen des tertiären Sektors' },
    { id: '3', text: 'Erwerbswirtschaftliches Unternehmen' },
    { id: '4', text: 'Gemeinwirtschaftliches Unternehmen' },
    { id: '5', text: 'Personengesellschaft' },
    { id: '6', text: 'Gesellschaft bürgerlichen Rechts' },
  ],
  correctAnswer: ['2', '3'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2021-winter-q2',
  examId: 'wiso-2021-winter',
  questionNumber: 2,
  topic: 'Wirtschaftskreislauf',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Die Seite zeigt ein Geldkreislaufschema mit vier Stationen: oben "Staat", links "Unternehmen", rechts "Private Haushalte", unten "Ausland". Zehn nummerierte Pfeile verbinden die Stationen:\n' +
    'Pfeil 04 führt (über die Oberseite der Grafik) von Unternehmen zu Staat.\n' +
    'Pfeil 01 führt (über die Oberseite der Grafik) von Private Haushalte zu Staat.\n' +
    'Pfeil 08 führt senkrecht von Staat abwärts zu Unternehmen.\n' +
    'Pfeil 05 führt zwischen Staat und Private Haushalte.\n' +
    'Pfeil 09 führt von Unternehmen zu Private Haushalte.\n' +
    'Pfeil 10 führt von Private Haushalte zu Unternehmen.\n' +
    'Pfeil 03 führt von Unternehmen zu Ausland.\n' +
    'Pfeil 07 führt von Ausland zu Unternehmen.\n' +
    'Pfeil 06 führt von Ausland zu Private Haushalte.\n' +
    'Pfeil 02 führt von Private Haushalte zu Ausland.',
  question:
    'Die folgende Grafik zeigt einen vereinfachten Wirtschaftskreislauf. Welchem der folgenden Vorgänge lässt sich der Nummer 08 in dem obenstehenden Geldkreislaufschema zuordnen? Tragen Sie die Ziffer vor dem zutreffenden Vorgang in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Zahlungen für Importe' },
    { id: '2', text: 'Private Ersparnisse' },
    { id: '3', text: 'Subventionen' },
    { id: '4', text: 'Einkommen' },
    { id: '5', text: 'Außenbeitrag' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2021-winter-q3',
  examId: 'wiso-2021-winter',
  questionNumber: 3,
  topic: 'Mutterschutzgesetz',
  scenario: SCENARIO_GENERAL,
  question:
    'Eine Mitarbeiterin der MÖLLER AG ist schwanger. Für sie gelten die Regelungen des Mutterschutzgesetzes. Welche der folgenden Aussagen zum Mutterschutzgesetz ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie Arbeitnehmerin …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss dem Arbeitgeber ihre Schwangerschaft mitteilen.' },
    { id: '2', text: 'kann in der Schwangerschaft ihre Arbeitszeiten (Kommen- und Gehenzeiten sowie Dauer) frei wählen.' },
    { id: '3', text: 'muss bei Schwangerschaft mit Lohneinbußen rechnen, da der Lohn während des Mutterschutzes höchstens 75 % des letzten Nettolohns betragen darf.' },
    { id: '4', text: 'besitzt während ihrer Schwangerschaft und nach der Entbindung einen besonderen Kündigungsschutz.' },
    { id: '5', text: 'kann vom Arbeitgeber verlangen, in der Schutzfrist nach der Entbindung beschäftigt zu werden.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2021-winter-q4',
  examId: 'wiso-2021-winter',
  questionNumber: 4,
  topic: 'Fragerecht des Arbeitgebers beim Einstellungsgespräch',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG will eine Stelle neu besetzen. Mit einer Bewerberin soll ein Einstellungsgespräch geführt werden. Zu welcher der folgenden Angelegenheiten muss die Bewerberin keine Auskunft bzw. keine wahrheitsgemäße Antwort geben? Tragen Sie die Ziffer vor der entsprechenden Angelegenheit in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Über die Staatsangehörigkeit.' },
    { id: '2', text: 'Über ihren exakten beruflichen Werdegang.' },
    { id: '3', text: 'Über ihren Familienstand.' },
    { id: '4', text: 'Über ihre Gewerkschaftszugehörigkeit.' },
    { id: '5', text: 'Über ihre Krankenkassenzugehörigkeit.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2021-winter-q5',
  examId: 'wiso-2021-winter',
  questionNumber: 5,
  topic: 'Arbeitsvertrag / Günstigkeitsprinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG schließt mit der Bewerberin Julia Kropp einen unbefristeten Arbeitsvertrag. Welche der folgenden im Arbeitsvertrag aufgeführten Vereinbarungen ist ungültig? Tragen Sie die Ziffer vor der ungültigen Vereinbarung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der vorliegende Arbeitsvertrag unterliegt den geltenden Tarifverträgen und Betriebsvereinbarungen in der jeweils gültigen Fassung.' },
    { id: '2', text: 'Die Arbeitnehmerin erhält mehr Urlaub als im Bundesurlaubsgesetz vorgesehen.' },
    { id: '3', text: 'Die Arbeitnehmerin muss eine Arbeitsunfähigkeitsbescheinigung wegen Krankheit spätestens am kommenden Werktag bei ihrem Arbeitgeber vorlegen.' },
    { id: '4', text: 'Die Arbeitnehmerin erhält als Ausgleich dafür, dass sie nur 16 Werktage Urlaub in einem vollen Kalenderjahr erhält, ein Gehalt, das 200 EUR höher ist als im geltenden Tarifvertrag vorgesehen.' },
    { id: '5', text: 'Die Arbeitnehmerin erhält für ihre Tätigkeit ein Monatsgehalt von 2.600 EUR, das erst am letzten Werktag eines Monats zahlbar ist.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2021-winter-q6',
  examId: 'wiso-2021-winter',
  questionNumber: 6,
  topic: 'Einfaches Arbeitszeugnis',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Vieluf hat seinen Bewerbungsunterlagen ein einfaches Arbeitszeugnis beigefügt. Welche der folgenden Angaben kann einem einfachen Arbeitszeugnis entnommen werden? Tragen Sie die Ziffer vor der zutreffenden Angabe in das Kästchen ein.\n\nAngaben über …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'besondere berufsspezifische Kenntnisse.' },
    { id: '2', text: 'Grund des Ausscheidens.' },
    { id: '3', text: 'Art und Dauer der Beschäftigung.' },
    { id: '4', text: 'Staatsangehörigkeit.' },
    { id: '5', text: 'Führung und Leistung während des Beschäftigungsverhältnisses.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7Options = [
  { id: '01', text: 'Tür darf nicht offen stehen' },
  { id: '02', text: 'Verwendung von Infrarot-Fernbedienungen verboten' },
  { id: '03', text: 'Mitführen von magnetischen und elektronischen Datenträgern verboten' },
  { id: '04', text: 'Nicht schalten' },
  { id: '05', text: 'Automatischer Anlauf möglich' },
  { id: '06', text: 'Vor Öffnen Netzstecker ziehen' },
  { id: '07', text: 'Gerät nach Gebrauch vom Netz trennen' },
  { id: '08', text: 'Löschschlauch' },
  { id: '09', text: 'Gefahren durch Batterien' },
  { id: '10', text: 'Starke Magnetfelder' },
  { id: '11', text: 'Säurestand der Batterien prüfen' },
]

const q7a: WisoExamQuestion = {
  id: 'wiso-2021-winter-q7-a',
  examId: 'wiso-2021-winter',
  questionNumber: 7,
  subPart: 'a',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der MÖLLER AG müssen die Bedeutung folgender Zeichen kennen. Welche der folgenden Bedeutungen trifft auf Zeichen a) zu? Tragen Sie die Ziffer zweistellig in das Kästchen ein.\n\nZeichen a: rundes Symbol mit einer Steckdose und einem herausgezogenen Stecker (Pfeil zeigt vom Stecker weg).',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '06',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q7b: WisoExamQuestion = {
  id: 'wiso-2021-winter-q7-b',
  examId: 'wiso-2021-winter',
  questionNumber: 7,
  subPart: 'b',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der MÖLLER AG müssen die Bedeutung folgender Zeichen kennen. Welche der folgenden Bedeutungen trifft auf Zeichen b) zu? Tragen Sie die Ziffer zweistellig in das Kästchen ein.\n\nZeichen b: quadratisches Symbol mit einem Feuerlöschschlauch auf einer Haspel vor Flammen.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '08',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q7c: WisoExamQuestion = {
  id: 'wiso-2021-winter-q7-c',
  examId: 'wiso-2021-winter',
  questionNumber: 7,
  subPart: 'c',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der MÖLLER AG müssen die Bedeutung folgender Zeichen kennen. Welche der folgenden Bedeutungen trifft auf Zeichen c) zu? Tragen Sie die Ziffer zweistellig in das Kästchen ein.\n\nZeichen c: dreieckiges Warnzeichen mit einer Batterie, aus der Rauch/Gas aufsteigt und Flüssigkeitstropfen austreten.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '09',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q7d: WisoExamQuestion = {
  id: 'wiso-2021-winter-q7-d',
  examId: 'wiso-2021-winter',
  questionNumber: 7,
  subPart: 'd',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der MÖLLER AG müssen die Bedeutung folgender Zeichen kennen. Welche der folgenden Bedeutungen trifft auf Zeichen d) zu? Tragen Sie die Ziffer zweistellig in das Kästchen ein.\n\nZeichen d: rundes Verbotszeichen (durchgestrichener Kreis) über einer Diskette/Datenträgerkarte.',
  type: 'single-choice',
  options: q7Options,
  correctAnswer: '03',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2021-winter-q8',
  examId: 'wiso-2021-winter',
  questionNumber: 8,
  topic: 'Mitbestimmungsrecht des Betriebsrats',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Geschäftsleitung der MÖLLER AG arbeitet mit dem Betriebsrat vertrauensvoll zusammen. In welcher der folgenden Angelegenheiten hat der Betriebsrat laut Betriebsverfassungsgesetz ein Mitbestimmungsrecht? Tragen Sie die Ziffer vor der zutreffenden Angelegenheit in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Betriebsrat verhandelt mit der Unternehmung über Rationalisierungsmaßnahmen.' },
    { id: '2', text: 'Der Betriebsrat nimmt Stellung zu einer vom Arbeitgeber ausgesprochenen Kündigung eines Arbeitnehmers, die er für sozial ungerechtfertigt hält.' },
    { id: '3', text: 'Der Betriebsrat vereinbart mit dem Arbeitgeber, dass zu besetzende Stellen im Betrieb auszuschreiben sind.' },
    { id: '4', text: 'Arbeitgeber und Betriebsrat vereinbaren, dass die tägliche Arbeitszeit um eine halbe Stunde verlängert wird.' },
    { id: '5', text: 'Der Betriebsrat verlangt vom Arbeitgeber Auskunft über eine geplante neue Zweigniederlassung.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2021-winter-q9',
  examId: 'wiso-2021-winter',
  questionNumber: 9,
  topic: 'Betriebsvereinbarung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG schließt mit dem Betriebsrat eine neue Betriebsvereinbarung ab, die mehrere Änderungen mit sich bringt. Welche der folgenden Vereinbarungen kann nicht Bestandteil dieser Betriebsvereinbarung sein? Tragen Sie die Ziffer vor der Vereinbarung, die nicht Bestandteil dieser Betriebsvereinbarung sein kann, in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Rauchverbote in der Kantine' },
    { id: '2', text: 'Betriebliche Altersvorsorge' },
    { id: '3', text: 'Einführung der flexiblen Arbeitszeit' },
    { id: '4', text: 'Urlaubsregelungen' },
    { id: '5', text: 'Aufhebung des Kündigungsschutzes für langjährige Mitarbeiter' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2021-winter-q10',
  examId: 'wiso-2021-winter',
  questionNumber: 10,
  topic: 'Arbeitskampf / Aussperrung',
  scenario: SCENARIO_GENERAL,
  question:
    'Während eines Arbeitskampfes wird in der örtlichen Tageszeitung über eine Aussperrung berichtet. Welche der folgenden Aussagen trifft auf eine Aussperrung zu. Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nAussperrung bedeutet …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'die Betriebsbesetzung durch Streikende, die der Betriebsleitung den Zutritt verwehren.' },
    { id: '2', text: 'eine außerordentliche Kündigung der gewerkschaftlich organisierten Arbeitnehmer.' },
    { id: '3', text: 'die gemeinsame und planmäßige Arbeitsniederlegung aller Arbeitnehmer.' },
    { id: '4', text: 'die vorübergehende Aufhebung der Arbeitsverhältnisse aller Mitarbeiter in den betroffenen Betrieben.' },
    { id: '5', text: 'die ordentliche Kündigung von Arbeitnehmern für den Zeitraum eines Arbeitskampfes.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2021-winter-q11',
  examId: 'wiso-2021-winter',
  questionNumber: 11,
  topic: 'Europass',
  scenario: SCENARIO_GENERAL,
  question:
    'Sara Stüven, Auszubildende bei der MÖLLER AG, möchte acht Wochen ihrer Berufsausbildung im Ausland durchführen. In diesem Zusammenhang wurde sie auf den Europass hingewiesen. Zu welchem der folgenden Zwecke wurde der Europass geschaffen? Tragen Sie die Ziffer vor dem zutreffenden Zweck in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Europass ersetzt die Reisepässe der EU-Mitgliedstaaten bei Auszubildenden.' },
    { id: '2', text: 'Der Europass ist ein vereinheitlichtes Dokument, das Qualifikationen und Kompetenzen europaweit verständlich und transparent darstellt.' },
    { id: '3', text: 'Mit dem Europass kann man innerhalb der EU kostenlos Bahn fahren und verreisen, ohne Wartezeiten an den Grenzen zu haben.' },
    { id: '4', text: 'Mit dem Europass kann man innerhalb der EU formlos Unternehmen gründen und Mitarbeiter aus der gesamten EU einstellen.' },
    { id: '5', text: 'Der Europass garantiert die kostenlose medizinische Versorgung innerhalb der EU für Staatsbürger der EU-Mitgliedsstaaten.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2021-winter-q12',
  examId: 'wiso-2021-winter',
  questionNumber: 12,
  topic: 'Sozialversicherungsbeiträge',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Sozialversicherung | Zahlung durch Arbeitgeber | Zahlung durch Arbeitnehmer\n1 Pflegeversicherung | 70 % | 30 %\n2 Krankenversicherung | 30 % | 70 %\n3 Rentenversicherung | 20 % | 80 %\n4 Arbeitslosenversicherung | 0 % | 100 %\n5 Unfallversicherung | 100 % | 0 %',
  question:
    'Arbeitgeber und Arbeitnehmer tragen die Beiträge für die verschiedenen gesetzlichen Sozialversicherungen entweder zu bestimmten Teilen oder aber auch vollständig. Für welche der folgenden gesetzlichen Sozialversicherungen ist die Verteilung der Zahlungen für Arbeitgeber und Arbeitnehmer richtig angegeben? Tragen Sie die Ziffer vor der zutreffenden Sozialversicherung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Pflegeversicherung – Arbeitgeber 70 % / Arbeitnehmer 30 %' },
    { id: '2', text: 'Krankenversicherung – Arbeitgeber 30 % / Arbeitnehmer 70 %' },
    { id: '3', text: 'Rentenversicherung – Arbeitgeber 20 % / Arbeitnehmer 80 %' },
    { id: '4', text: 'Arbeitslosenversicherung – Arbeitgeber 0 % / Arbeitnehmer 100 %' },
    { id: '5', text: 'Unfallversicherung – Arbeitgeber 100 % / Arbeitnehmer 0 %' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13: WisoExamQuestion = {
  id: 'wiso-2021-winter-q13',
  examId: 'wiso-2021-winter',
  questionNumber: 13,
  topic: 'Beitragsbemessungsgrenze',
  scenario: SCENARIO_GENERAL,
  question:
    'Der Mitarbeiter Niels Janneck hat Fragen zu seinen Sozialversicherungsbeiträgen. Welche der folgenden Aussagen zur Berechnung der Sozialversicherungsbeiträge ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Ein Anstieg der Beitragsbemessungsgrenzen hat keine Auswirkungen auf die Lohnnebenkosten.' },
    { id: '2', text: 'Bis zu der Beitragsbemessungsgrenze wird das Arbeitsentgelt für Beiträge der gesetzlichen Sozialversicherung herangezogen.' },
    { id: '3', text: 'Bei einem Anstieg der Beitragsbemessungsgrenze muss der Arbeitnehmer die Steuerklasse wechseln.' },
    { id: '4', text: 'Bei Überschreiten der Beitragsbemessungsgrenzen ist ein Arbeitnehmer von der Versicherungspflicht in der gesetzlichen Rentenversicherung befreit.' },
    { id: '5', text: 'Die Beitragsbemessungsgrenze gilt auch für die gesetzliche Unfallversicherung.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2021-winter-q14',
  examId: 'wiso-2021-winter',
  questionNumber: 14,
  topic: 'Arbeitslosengeld I',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG hat einem Angestellten betriebsbedingt ordentlich gekündigt. Er wird unmittelbar nach der Kündigung arbeitslos und muss Arbeitslosengeld (ALG I) beantragen. Welche der folgenden Aussagen trifft auf das Arbeitslosengeld zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nEine Leistung, …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'die vom Staat gezahlt wird, um den Grundbedarf zu decken.' },
    { id: '2', text: 'deren Höhe unabhängig vom letzten Einkommen ist und die sich an den persönlichen Ansprüchen des Arbeitslosen bemisst.' },
    { id: '3', text: 'die bei betriebsbedingter ordentlicher Kündigung erst nach einer Sperrzeit von zwölf Wochen ausgezahlt wird.' },
    { id: '4', text: 'die nach einem sozialversicherungspflichtigen Arbeitsverhältnis von mindestens zwölf Monaten gezahlt wird.' },
    { id: '5', text: 'auf die kein Anspruch besteht, wenn der Arbeitslose ein Vermögen besitzt, das dieser zur Finanzierung seines Lebensunterhalts nutzen kann.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2021-winter-q15',
  examId: 'wiso-2021-winter',
  questionNumber: 15,
  topic: 'Solidaritätsprinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Solidarität ist ein gesellschaftspolitisches Prinzip, das in der Bundesrepublik Deutschland angewendet wird. Welcher der folgenden Sachverhalte entspricht dem Prinzip der Solidarität? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Staat senkt die Beitragsbemessungsgrenze für die gesetzliche Krankenkasse.' },
    { id: '2', text: 'Der Staat fordert verstärkt Selbstverantwortung bei der Altersvorsorge.' },
    { id: '3', text: 'Der Einkommensteuersatz steigt progressiv mit dem Einkommen.' },
    { id: '4', text: 'Kindergartenbeiträge sind für alle Eltern, unabhängig vom Einkommen, gleich hoch.' },
    { id: '5', text: 'Der Beitrag zur Krankenversicherung steigt mit individuellem Krankheitsrisiko des Versicherten.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2021-winter-q16',
  examId: 'wiso-2021-winter',
  questionNumber: 16,
  topic: 'Private Altersvorsorge',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeiter der MÖLLER AG diskutieren über die unterschiedlichen Möglichkeiten einer privaten Altersvorsorge. Welcher der folgenden Sachverhalte gefährdet eine private Altersvorsorge? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Niedriges Zinsniveau für Spareinlagen' },
    { id: '2', text: 'Konjunkturaufschwung' },
    { id: '3', text: 'Staatliche Zuschüsse zur betrieblichen Altersvorsorge' },
    { id: '4', text: 'Moderate Lohnforderungen' },
    { id: '5', text: 'Senkung der Beiträge für die gesetzliche Rentenversicherung' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17: WisoExamQuestion = {
  id: 'wiso-2021-winter-q17',
  examId: 'wiso-2021-winter',
  questionNumber: 17,
  topic: 'Unternehmensziele / erwerbswirtschaftliches Prinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG ist ein börsennotiertes Unternehmen. Welches der folgenden Ziele verfolgt die MÖLLER AG vorrangig? Tragen Sie die Ziffer vor dem zutreffenden Ziel in das Kästchen ein.\n\nDie MÖLLER AG verfolgt primär das Ziel der …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Kundenzufriedenheit.' },
    { id: '2', text: 'Kostenmaximierung.' },
    { id: '3', text: 'bestmöglichen Versorgung der Bevölkerung.' },
    { id: '4', text: 'Gewinnmaximierung.' },
    { id: '5', text: 'Erhöhung der Bilanzsumme.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18: WisoExamQuestion = {
  id: 'wiso-2021-winter-q18',
  examId: 'wiso-2021-winter',
  questionNumber: 18,
  topic: 'Leitungssysteme / Organisation',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Das gezeigte Organigramm besteht aus einer obersten Instanz (ein Kasten oben links), die mit vier Instanzen in einer Kopfzeile (vier Kästen oben, nebeneinander) verbunden ist, sowie mit vier weiteren Instanzen in einer Spalte darunter (vier Kästen untereinander, links). Jede der vier unteren Instanzen ist über Verbindungspunkte mit jeder der vier oberen Instanzen vernetzt, sodass ein Gitter aus sich kreuzenden Verbindungslinien mit mehreren Kontaktpunkten entsteht (jede untere Instanz hat also mehrere übergeordnete Instanzen).',
  question:
    'Das folgende Schema zeigt das Leitungssystem der MÖLLER AG. Nach welchem der folgenden Leitungssysteme arbeitet die MÖLLER AG? Tragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Einliniensystem' },
    { id: '2', text: 'Matrixsystem' },
    { id: '3', text: 'Mehrliniensystem' },
    { id: '4', text: 'Stabliniensystem' },
    { id: '5', text: 'Abteilungssystem' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19a: WisoExamQuestion = {
  id: 'wiso-2021-winter-q19-a',
  examId: 'wiso-2021-winter',
  questionNumber: 19,
  subPart: 'a',
  topic: 'Umsatz pro Mitarbeiter',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Umsatz pro Mitarbeiter im Jahr 2019: 98.000 EUR\n\nGeschäftsjahr | Anzahl Mitarbeiter | Umsatz\n2020 | 39 | 4.127.760 EUR',
  question:
    'Die Geschäftsführung der Möller AG möchte überprüfen, ob die Einstellung neuer Mitarbeiter sich positiv auf die Umsatzentwicklung ausgewirkt hat. Berechnen Sie den Umsatz pro Mitarbeiter für das Jahr 2020. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '105.840',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19b: WisoExamQuestion = {
  id: 'wiso-2021-winter-q19-b',
  examId: 'wiso-2021-winter',
  questionNumber: 19,
  subPart: 'b',
  topic: 'Umsatz pro Mitarbeiter',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Umsatz pro Mitarbeiter im Jahr 2019: 98.000 EUR\n\nGeschäftsjahr | Anzahl Mitarbeiter | Umsatz\n2020 | 39 | 4.127.760 EUR',
  question:
    'Die Geschäftsführung der Möller AG möchte überprüfen, ob die Einstellung neuer Mitarbeiter sich positiv auf die Umsatzentwicklung ausgewirkt hat. Berechnen Sie die prozentuale Veränderung des Umsatzes pro Mitarbeiter von 2019 auf 2020. Tragen Sie das Ergebnis in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '8 oder Algo (E19a - 98.000):98.000 x 100',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20Options = [
  { id: '1', text: 'Eigenkapital * 100 / Anlagevermögen' },
  { id: '2', text: 'Gewinn * 100 / Eigenkapital' },
  { id: '3', text: 'Eigenkapital * 100 / Gesamtkapital' },
  { id: '4', text: 'Gewinn * 100 / Umsatzerlöse' },
  { id: '5', text: 'Umsatzerlöse * 100 / Eigenkapital' },
  { id: '6', text: 'Ertrag / Aufwand' },
]

const q20a: WisoExamQuestion = {
  id: 'wiso-2021-winter-q20-a',
  examId: 'wiso-2021-winter',
  questionNumber: 20,
  subPart: 'a',
  topic: 'Kennzahlen / Formeln',
  scenario: SCENARIO_GENERAL,
  question:
    'Sie sollen für das abgelaufene Geschäftsjahr der MÖLLER AG die nachstehenden Kennzahlen ermitteln. Ordnen Sie den folgenden Kennzahlen die Formel zu, nach denen diese berechnet werden. Welche Formel wird zur Berechnung der Eigenkapitalrentabilität verwendet? Tragen Sie die Ziffer vor der zutreffenden Formel in das Kästchen ein.',
  type: 'single-choice',
  options: q20Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20b: WisoExamQuestion = {
  id: 'wiso-2021-winter-q20-b',
  examId: 'wiso-2021-winter',
  questionNumber: 20,
  subPart: 'b',
  topic: 'Kennzahlen / Formeln',
  scenario: SCENARIO_GENERAL,
  question:
    'Sie sollen für das abgelaufene Geschäftsjahr der MÖLLER AG die nachstehenden Kennzahlen ermitteln. Ordnen Sie den folgenden Kennzahlen die Formel zu, nach denen diese berechnet werden. Welche Formel wird zur Berechnung der Wirtschaftlichkeit verwendet? Tragen Sie die Ziffer vor der zutreffenden Formel in das Kästchen ein.',
  type: 'single-choice',
  options: q20Options,
  correctAnswer: '6',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2021-winter-q21',
  examId: 'wiso-2021-winter',
  questionNumber: 21,
  topic: 'Unternehmenskooperation',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG und die Mayer&Schulz GmbH wollen gemeinsam einen Auftrag durchführen und haben dazu einen Kooperationsvertrag geschlossen. Welche der folgenden Formen der Kooperation liegt vor? Tragen Sie die Ziffer vor der zutreffenden Form der Kooperation in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Interessengemeinschaft' },
    { id: '2', text: 'Arbeitsgemeinschaft (Konsortium)' },
    { id: '3', text: 'Konzern' },
    { id: '4', text: 'Kartell' },
    { id: '5', text: 'Franchising' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2021-winter-q22',
  examId: 'wiso-2021-winter',
  questionNumber: 22,
  topic: 'Handelsregister',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG ist im Handelsregister beim örtlichen Amtsgericht eingetragen. Welche der folgenden Aussagen über das Handelsregister ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das Handelsregister ist aufgeteilt in Abteilung A (Personengesellschaften) und Abteilung B (Kapitalgesellschaften).' },
    { id: '2', text: 'Einsicht kann nur nehmen, wer ein berechtigtes Interesse nachweisen kann.' },
    { id: '3', text: 'Das Handelsregister ist ein Verzeichnis aller Kaufleute eines Amtsgerichtsbezirks.' },
    { id: '4', text: 'Das Handelsregister informiert über die Gesellschafter aller eingetragenen Firmen.' },
    { id: '5', text: 'Das Handelsregister benennt die rechtsgeschäftlichen Vertreter der Personen- und Kapitalgesellschaften.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2021-winter-q23',
  examId: 'wiso-2021-winter',
  questionNumber: 23,
  topic: 'Angebot und Nachfrage / Steuerpolitik',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Die Seite zeigt ein Koordinatensystem mit der y-Achse "Preis" und der x-Achse "Menge": eine fallende Nachfragekurve (von oben links nach unten rechts) und eine steigende Angebotskurve (von unten links nach oben rechts), die sich in einem Gleichgewichtspunkt schneiden — ein klassisches Angebot-Nachfrage-Diagramm.',
  question:
    'Die Bundesregierung plant, die Lohn-/Einkommensteuer zu erhöhen. Welche der folgenden Auswirkungen ergibt sich durch diese Maßnahme auf die modellhaft dargestellte Marktsituation? Tragen Sie die Ziffer vor der zutreffenden Auswirkung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Nachfragekurve verschiebt sich nach rechts.' },
    { id: '2', text: 'Die Nachfragekurve verschiebt sich nach links.' },
    { id: '3', text: 'Die Angebotskurve verschiebt sich nach links.' },
    { id: '4', text: 'Die Angebotskurve verschiebt sich nach rechts.' },
    { id: '5', text: 'Es kommt zu keinen Veränderungen der Kurven.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2021-winter-q24',
  examId: 'wiso-2021-winter',
  questionNumber: 24,
  topic: 'Marktgleichgewicht / Angebot und Nachfrage',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Auf einem Markt mit vollständiger Konkurrenz besteht für ein gleichartiges Gut folgende Gesamtnachfrage und folgendes Gesamtangebot:\n\nPreis je Stück in EUR | Gesamte Nachfragemenge in Stück | Gesamte Angebotsmenge in Stück\n100,00 | 2.000 | 1.200\n110,00 | 1.800 | 1.400\n120,00 | 1.600 | 1.600\n130,00 | 1.400 | 1.800\n140,00 | 1.200 | 2.000',
  question:
    'Welche der folgenden Aussagen kann durch obiges Zahlenbeispiel bestätigt werden? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Bei einem Preis von 100 EUR entsteht ein Angebotsüberhang von 800 Stück.' },
    { id: '2', text: 'Bei einem Preis von 110 EUR besteht ein Nachfrageüberhang von 400 Stück.' },
    { id: '3', text: 'Bei einem Preis von 130 EUR ergibt sich eine Gleichgewichtsmenge von 1.400 Stück.' },
    { id: '4', text: 'Bei einem Preis von 140 EUR besteht ein Angebotsüberhang von 1.200 Stück.' },
    { id: '5', text: 'Der Gleichgewichtspreis bildet sich bei einer Nachfragemenge von 1.800 Stück.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2021-winter-q25',
  examId: 'wiso-2021-winter',
  questionNumber: 25,
  topic: 'Prokura',
  scenario: SCENARIO_GENERAL,
  question:
    'Rechtsgeschäfte sind die Grundlage für jede rechtliche Verpflichtung. Welches der folgenden Rechtsgeschäfte darf Amir Demircan als Prokurist der Möller AG vornehmen? Tragen Sie die Ziffer vor dem zutreffenden Rechtsgeschäft in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Unterzeichnung der aktuellen Steuererklärung.' },
    { id: '2', text: 'Unterzeichnung der Bilanz des aktuellen Geschäftsjahres.' },
    { id: '3', text: 'Die Erteilung einer Handlungsvollmacht an einen Mitarbeiter.' },
    { id: '4', text: 'Die Auflösung der Unternehmung.' },
    { id: '5', text: 'Die Aufnahme eines neuen Gesellschafters.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2021-winter-q26',
  examId: 'wiso-2021-winter',
  questionNumber: 26,
  topic: 'Verbraucherschutz',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Verbraucherzentralen sind Vereine, die im staatlichen Auftrag Verbraucher schützen und beraten sollen. Welche der folgenden Maßnahmen dient unmittelbar dem Verbraucherschutz? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Festlegung von Mindestpreisen für landwirtschaftliche Erzeugnisse.' },
    { id: '2', text: 'Die staatliche Förderung für den Erwerb von Wohneigentum.' },
    { id: '3', text: 'Die Verpflichtung, alle zum Verkauf ausgestellten Waren mit Preisschildern zu versehen.' },
    { id: '4', text: 'Die Erhebung von Einfuhrzöllen für ausländische Waren.' },
    { id: '5', text: 'Die Subventionierung ertragsschwacher Betriebe.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2021-winter-q27',
  examId: 'wiso-2021-winter',
  questionNumber: 27,
  topic: 'Persönliche Existenzsicherung',
  scenario: SCENARIO_GENERAL,
  question:
    'Arbeitnehmer können Maßnahmen zur persönlichen Existenzsicherung treffen. Welche der folgenden Maßnahmen ist zur persönlichen Existenzsicherung geeignet? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Abschluss einer Garantieverlängerung für das neue Smartphone.' },
    { id: '2', text: 'Abschluss einer Versicherung für den Fall der Berufsunfähigkeit.' },
    { id: '3', text: 'Abschluss eines Ratenkaufvertrags aufgrund fehlender Liquidität.' },
    { id: '4', text: 'Abschluss einer Teilkaskoversicherung für den eigenen PKW.' },
    { id: '5', text: 'Abschluss einer privaten Zusatzkrankenversicherung.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2021-winter-q28',
  examId: 'wiso-2021-winter',
  questionNumber: 28,
  topic: 'Innerbetriebliche Arbeitsteilung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG betreibt innerbetriebliche Arbeitsteilung. Welche der folgenden Aussagen zur innerbetrieblichen Arbeitsteilung ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nInnerbetriebliche Arbeitsteilung …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'steigert in der Regel die Produktivität.' },
    { id: '2', text: 'verhindert eine Spezialisierung der Mitarbeiter.' },
    { id: '3', text: 'führt an den Arbeitsplätzen zu Arbeitserweiterung und Arbeitsbereicherung.' },
    { id: '4', text: 'führt immer zu einer größeren Fluktuation der Mitarbeiter.' },
    { id: '5', text: 'fördert die geistigen und körperlichen Fähigkeiten der Mitarbeiter durch die ständige Wiederholung von wenigen und immer gleichen Detailtätigkeiten.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2021-winter-q29',
  examId: 'wiso-2021-winter',
  questionNumber: 29,
  topic: 'Konjunkturpolitik',
  scenario: SCENARIO_GENERAL,
  question:
    'Im Rahmen der sozialen Marktwirtschaft betreibt der Staat Konjunkturpolitik. Dabei sollen im zyklischen Konjunkturverlauf Boom- und Depressionsphasen (Hoch- und Tiefphasen) abgeschwächt werden. Mit welcher der folgenden Maßnahmen kann der Staat in einem Boom die Konjunktur dämpfen? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Senkung der Lohn- und Einkommenssteuersätze' },
    { id: '2', text: 'Erhöhung der staatlichen Ausgaben' },
    { id: '3', text: 'Subventionierung von Unternehmen' },
    { id: '4', text: 'Senkung von Investitionszulagen' },
    { id: '5', text: 'Senkung der Erbschaftssteuer' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2021-winter-q30',
  examId: 'wiso-2021-winter',
  questionNumber: 30,
  topic: 'Internationale / weltweite Arbeitsteilung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die MÖLLER AG kauft Waren, die in weltweiter Arbeitsteilung hergestellt werden. Welche der folgenden Auswirkungen hat die weltweite Arbeitsteilung? Tragen Sie die Ziffer vor der zutreffenden Auswirkung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Produktion erfolgt jeweils in den Ländern mit den ökologisch besten Standards.' },
    { id: '2', text: 'Durch Nutzung der jeweils wirtschaftlich günstigsten Rohstoff- und Produktionsbedingungen nimmt die Menge der transportierten Waren weltweit zu.' },
    { id: '3', text: 'Aufgrund internationaler Vereinbarungen müssen die Unternehmen in allen Ländern die gleichen hohen sozialen und ökologischen Standards einhalten.' },
    { id: '4', text: 'Die Volkswirtschaften der Länder spezialisieren sich nicht auf bestimmte Produktionen.' },
    { id: '5', text: 'Auf dem weltweiten Arbeitsmarkt herrscht eine allgemeine Arbeitnehmerfreizügigkeit.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

export const wisoExam2021WinterQuestions: WisoExamQuestion[] = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7a,
  q7b,
  q7c,
  q7d,
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
  q18,
  q19a,
  q19b,
  q20a,
  q20b,
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
