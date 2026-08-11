import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Sommer 2022, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_22s.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_22s.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 */

export const wisoExam2022SommerMeta: WisoExamMeta = {
  id: 'wiso-2022-sommer',
  year: 2022,
  period: 'Sommer',
  label: 'Sommer 2022',
  examDate: 'Mittwoch, 4. Mai 2022',
  courseCodes: '1201 – 1202 – 1203 – 1204 – 1205 – 6470 – 6480',
  sourceExamPdf: 'WiSo_22s.pdf',
  sourceSolutionPdf: 'Loe_WiSo_22s.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** "Ausgangssituation" printed once on page 2; explicitly applies to all following Aufgaben of this exam. */
const SCENARIO_GENERAL =
  'Die Sachs-IT GmbH ist ein mittelständisches Unternehmen, das IT-Systemleistungen für einen breiten Kundenkreis anbietet. Alle folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const q1: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q1',
  examId: 'wiso-2022-sommer',
  questionNumber: 1,
  topic: 'Einzelarbeitsvertrag',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Sachs-IT GmbH hat mit dem 25-jährigen Harry Petry einen Einzelarbeitsvertrag geschlossen. Welche der folgenden Aussagen ist in diesem Zusammenhang zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nEin Einzelarbeitsvertrag …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'kann nur geschlossen werden, wenn für die Sachs-IT GmbH kein gültiger Tarifvertrag vorliegt.' },
    { id: '2', text: 'kann nur mit Zustimmung der Gewerkschaft geschlossen werden.' },
    { id: '3', text: 'ist ohne Urlaubsregelung ungültig.' },
    { id: '4', text: 'ist auch gültig, wenn das vereinbarte Arbeitsentgelt über dem tarifvertraglich geregelten liegt.' },
    { id: '5', text: 'darf für höchstens zwei Jahre geschlossen werden.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q2',
  examId: 'wiso-2022-sommer',
  questionNumber: 2,
  topic: 'Probezeit',
  scenario: SCENARIO_GENERAL,
  question:
    'In Herrn Petrys Arbeitsvertrag ist auch eine Angabe zur Probezeit vorgesehen. Welche der folgenden Aussagen dazu sind zutreffend? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.\n\nDie Probezeit …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'könnte ggf. ganz entfallen.' },
    { id: '2', text: 'muss mindestens einen Monat betragen.' },
    { id: '3', text: 'muss mindestens drei Monate betragen.' },
    { id: '4', text: 'muss mindestens vier Monate betragen.' },
    { id: '5', text: 'kann bis zu sechs Monate betragen.' },
    { id: '6', text: 'kann neuerdings bis zu zwei Jahre betragen.' },
  ],
  correctAnswer: ['1', '5'],
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q3',
  examId: 'wiso-2022-sommer',
  questionNumber: 3,
  topic: 'Jugendarbeitsschutzgesetz – Nachtruhe',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Henry Witting, 17 Jahre, hat am 1. Januar 2021 seine Berufsausbildung als Fachinformatiker Fachrichtung Systemintegration bei der Sachs-IT GmbH begonnen. Da einige Mitarbeitende der IT-Abteilung erkrankt sind, muss der Dienstplan für Herrn Witting geändert werden. Bei der Änderung wird die Pausenregelung entsprechend angepasst.\n\nAuszug Jugendarbeitsschutzgesetz – JArbSchG\n§ 14 Nachtruhe\n(1) Jugendliche dürfen nur in der Zeit von 6 bis 20 Uhr beschäftigt werden.\n(2) Jugendliche über 16 Jahre dürfen\n1. im Gaststätten- und Schaustellergewerbe bis 22 Uhr,\n2. in mehrschichtigen Betrieben bis 23 Uhr,\n3. in der Landwirtschaft ab 5 Uhr oder bis 21 Uhr,\n4. in Bäckereien und Konditoreien ab 5 Uhr\nbeschäftigt werden.\n\nDienstplan (alt) für Henry Witting:\n| Montag | Dienstag | Mittwoch | Donnerstag | Freitag | Samstag | Sonntag |\n| 09:00–13:00 | 09:00–13:00 | 09:00–13:00 | 11:00–15:30 | 09:00–13:00 | frei | frei |\n| 13:00–14:00 | 13:00–14:00 | 13:00–14:00 | 15:30–16:30 | 13:00–14:00 | frei | frei |\n| 14:00–18:00 | 14:00–18:00 | 14:00–18:00 | 16:30–20:00 | 14:00–18:00 | frei | frei |',
  question:
    'Zu welcher Uhrzeit könnte Herr Witting unter Beachtung des JArbSchG frühestens seinen Dienst beginnen? Tragen Sie die zutreffende Uhrzeit (hh:mm) in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '06:00',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q4',
  examId: 'wiso-2022-sommer',
  questionNumber: 4,
  topic: 'Jugendarbeitsschutzgesetz',
  scenario: SCENARIO_GENERAL,
  question:
    'Welche der folgenden Vorschriften gilt für den 17-jährigen Herrn Witting laut Jugendarbeitsschutzgesetz? Tragen Sie die Ziffer vor der zutreffenden Vorschrift in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Jugendliche dürfen nur an fünf Tagen in der Woche beschäftigt werden.' },
    { id: '2', text: 'Die erste Nachuntersuchung muss drei Monate nach Ausbildungsbeginn stattfinden.' },
    { id: '3', text: 'An Feiertagen dürfen Jugendliche nicht beschäftigt werden. Ausnahmen sieht das Gesetz nicht vor.' },
    { id: '4', text: 'Die wöchentlichen Ruhetage müssen aufeinander folgen.' },
    { id: '5', text: 'Jugendliche dürfen nicht mehr als 48 Stunden wöchentlich beschäftigt werden.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q5',
  examId: 'wiso-2022-sommer',
  questionNumber: 5,
  topic: 'Urlaubsanspruch',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Herr Witting möchte wissen, wie viel Urlaub ihm für das Kalenderjahr 2022 zusteht und bittet Sie um Hilfe. Der Auszubildende vollendet am 4. April 2022 das 18. Lebensjahr.\n\nAuszug Jugendarbeitsschutzgesetz – JArbSchG\n§ 19 Urlaub\n(1) Der Arbeitgeber hat Jugendlichen für jedes Kalenderjahr einen bezahlten Erholungsurlaub zu gewähren.\n(2) Der Urlaub beträgt jährlich\n1. mindestens 30 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 16 Jahre alt ist,\n2. mindestens 27 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 17 Jahre alt ist,\n3. mindestens 25 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 18 Jahre alt ist.\nJugendliche, die im Bergbau unter Tage beschäftigt werden, erhalten in jeder Altersgruppe einen zusätzlichen Urlaub von drei Werktagen.\n(3) Der Urlaub soll Berufsschülern in der Zeit der Berufsschulferien gegeben werden. Soweit er nicht in den Berufsschulferien gegeben wird, ist für jeden Berufsschultag, an dem die Berufsschule während des Urlaubs besucht wird, ein weiterer Urlaubstag zu gewähren.\n\nAuszug aus dem Tarifvertrag für die Sachs-IT GmbH\n§ 42 Erholungsurlaub\n(1) Die Dauer des Erholungsurlaubs beträgt für alle Beschäftigten der Sachs-IT GmbH 30 Arbeitstage.\n(2) Beginnt oder endet das Arbeitsverhältnis im Laufe des Urlaubsjahres, so beträgt der Urlaubsanspruch ein Zwölftel für jeden Beschäftigungsmonat.\n(3) Arbeitstage sind alle Kalendertage, die nicht Sonnabende, Sonntage oder gesetzliche Feiertage sind (Fünftagewoche). Auszubildenden soll ihr Erholungsurlaub in den Berufsschulferien gewährt werden.',
  question: 'Auf wie viele Tage Urlaub hat Herr Witting demnach im Kalenderjahr 2022 Anspruch? Tragen Sie die Anzahl der Urlaubstage in die Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '30',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q6',
  examId: 'wiso-2022-sommer',
  questionNumber: 6,
  topic: 'Ausbildereignung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Ausbildungsleiterin der Sachs-IT GmbH sucht mittelfristig Mitarbeitende, die als Ausbilder tätig werden wollen. Welche der folgenden Voraussetzungen muss ein Ausbilder nach den gesetzlichen Regelungen u. a. erfüllen? Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.\n\nEr/Sie muss …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Mitglied im zuständigen Prüfungsausschuss sein.' },
    { id: '2', text: 'über eine notwendige persönliche und fachliche Eignung verfügen.' },
    { id: '3', text: 'jährlich ein Weiterbildungsseminar der IHK besuchen.' },
    { id: '4', text: 'Mitglied der Geschäftsleitung sein.' },
    { id: '5', text: 'Mitglied einer Gewerkschaft sein.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q7',
  examId: 'wiso-2022-sommer',
  questionNumber: 7,
  topic: 'Betriebsverfassungsgesetz / Kündigung',
  scenario: SCENARIO_GENERAL,
  question:
    'Einem Mitarbeiter der Sachs-IT GmbH wurde ohne Anhörung des Betriebsrates gekündigt. Welche der folgenden Aussagen entspricht dem Betriebsverfassungsgesetz? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie Kündigung …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist wirksam, weil eine Zustimmung des Betriebsrates nicht vorgeschrieben ist.' },
    { id: '2', text: 'ist wirksam, weil eine Anhörung des Betriebsrates nicht vorgeschrieben ist.' },
    { id: '3', text: 'ist unwirksam, weil eine Anhörung des Betriebsrates zwingend vorgeschrieben ist.' },
    { id: '4', text: 'ist durch eine nachträgliche Anhörung des Betriebsrates wirksam geworden.' },
    { id: '5', text: 'ist unwirksam, wenn das Arbeitsgericht nicht beteiligt wurde.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q8',
  examId: 'wiso-2022-sommer',
  questionNumber: 8,
  topic: 'Kündigung Minderjähriger / Ausbildungsvertrag',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Auszug aus dem Schreiben:\n„Sehr geehrte Damen und Herren, nach langer Überlegung kündige ich das Ausbildungsverhältnis zum 15. April 2022, weil ich eine Ausbildung in einem anderen Beruf beginnen möchte. Bitte stellen Sie mir ein qualifiziertes Zeugnis aus. MfG, Pamela Bommering"',
  question:
    'Am 12.03.2022 kündigt die 17-jährige Pamela Bommering ihr Ausbildungsverhältnis mit nachstehendem Schreiben. Das Schreiben geht der Sachs-IT GmbH noch am selben Tag zu.\n\nHat Frau Bommering wirksam gekündigt? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Ja, weil das Kündigungsschreiben rechtzeitig übergeben wurde.' },
    { id: '2', text: 'Ja, weil Frau Bommering schriftlich gekündigt und einen Kündigungsgrund angegeben hat.' },
    { id: '3', text: 'Ja, weil Frau Bommering sich noch in der Probezeit befindet.' },
    { id: '4', text: 'Nein, weil die Unterschrift der Erziehungsberechtigten als gesetzliche Vertreter fehlt.' },
    { id: '5', text: 'Nein, weil die Kündigungsfrist von vier Wochen nicht eingehalten wurde.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q9',
  examId: 'wiso-2022-sommer',
  questionNumber: 9,
  topic: 'Ausbildungszeugnis',
  scenario: SCENARIO_GENERAL,
  question:
    'Frau Bommering wünscht nach der Beendigung des Ausbildungsvertrages mit der Sachs-IT GmbH ein qualifiziertes Zeugnis. Welche der folgenden Formulierungen in einem Ausbildungszeugnis macht das Zeugnis zu einem qualifizierten Zeugnis? Tragen Sie die Ziffer vor der zutreffenden Formulierung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: '„Pamela Bommering, geboren am 03.12.2004, …"' },
    { id: '2', text: '„… wohnhaft in Solingen, …"' },
    { id: '3', text: '„… wurde seit dem 1. Januar 2021 in unserem Betrieb ausgebildet."' },
    { id: '4', text: '„Frau Bommering erledigte die ihr übertragenen Aufgaben stets zu unserer vollsten Zufriedenheit."' },
    { id: '5', text: '„Wir wünschen Frau Bommering für die Zukunft alles Gute."' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q10',
  examId: 'wiso-2022-sommer',
  questionNumber: 10,
  topic: 'Betriebsrat',
  scenario: SCENARIO_GENERAL,
  question:
    'In der Sachs-IT GmbH wurde ein Betriebsrat gewählt. Welche der folgenden Aussagen über den Betriebsrat ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nEin Betriebsrat …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss in jeder Gesellschaft mit beschränkter Haftung gewählt werden.' },
    { id: '2', text: 'muss paritätisch aus Arbeitnehmern und Arbeitnehmerinnen gebildet werden.' },
    { id: '3', text: 'besitzt umfangreiche Handlungsvollmacht und kann in fast allen Belangen des Unternehmens Rechtsgeschäfte abschließen.' },
    { id: '4', text: 'muss aufgrund der zwingenden Mitbestimmung der Gründung einer Filiale zustimmen.' },
    { id: '5', text: 'besitzt bei der Aufstellung des Urlaubsplans ein Mitbestimmungsrecht.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q11',
  examId: 'wiso-2022-sommer',
  questionNumber: 11,
  topic: 'Jugend- und Auszubildendenvertretung (JAV)',
  scenario: SCENARIO_GENERAL,
  question:
    'Peter Meyer, Ausbilder bei der Sachs-IT GmbH, informiert seine neuen Auszubildenden über die Anforderungen und Möglichkeiten, sich in die Jugend- und Auszubildendenvertretung (JAV) wählen zu lassen. Welche der folgenden Aussagen zur JAV ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: '„Es ist ausreichend, wenn Sie eine Liste von drei Vorgesetzten vorlegen, die Ihre Wahl unterstützen, um für die Wahl aufgestellt zu werden."' },
    { id: '2', text: '„Eine eventuelle strafrechtliche Verurteilung ist für die Wahl nicht relevant, da es keinen Bezug zu Ihrer Tätigkeit hat."' },
    { id: '3', text: '„Als Auszubildende/-r unter 25 sind Sie wahlberechtigt und auch wählbar."' },
    { id: '4', text: '„Wenn es 20 Wahlberechtigte gibt, können Sie leicht eins der vier JAV-Mitglieder werden."' },
    { id: '5', text: '„Mit der „Zweitstimme" können Sie als Ersatzmitglied in die JAV gewählt werden."' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q12',
  examId: 'wiso-2022-sommer',
  questionNumber: 12,
  topic: 'Tarifrecht / Friedenspflicht',
  scenario: SCENARIO_GENERAL,
  question:
    'In der Sachs-IT GmbH sind zwei Drittel der Mitarbeiter Mitglied einer Gewerkschaft und an die absolute Friedenspflicht gebunden. Welcher der folgenden Sachverhalte trifft auf die im Tarifrecht genannte absolute Friedenspflicht zu? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Erzeugung eines guten Betriebsklimas' },
    { id: '2', text: 'Verbot eines Arbeitskampfes während eines geltenden Tarifvertrages' },
    { id: '3', text: 'Vermeidung von Auseinandersetzungen vor dem Arbeitsgericht' },
    { id: '4', text: 'Einhaltung des Kündigungsschutzes für Betriebsratsmitglieder' },
    { id: '5', text: 'Konstruktive Zusammenarbeit zwischen Arbeitgebern und Arbeitnehmern' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q13: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q13',
  examId: 'wiso-2022-sommer',
  questionNumber: 13,
  topic: 'Tarifvertrag',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Sachs-IT GmbH ist tarifgebunden und schließt Arbeitsverträge auf der Grundlage des aktuellen Tarifvertrags. Welche der folgenden Aussagen treffen auf einen Tarifvertrag zu? Tragen Sie die Ziffern vor den zwei zutreffenden Aussagen in die Kästchen ein.\n\nEin Tarifvertrag …',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'kommt durch freie Vereinbarung der Tarifpartner zustande.' },
    { id: '2', text: 'bedarf der Genehmigung eines staatlich bestellten Schlichters.' },
    { id: '3', text: 'schließt günstigere Betriebsvereinbarungen nicht aus.' },
    { id: '4', text: 'darf nur für gewerkschaftlich organisierte Arbeitende angewendet werden.' },
    { id: '5', text: 'darf eine Laufzeit von höchstens drei Jahren haben.' },
    { id: '6', text: 'gibt Höchstgrenzen für Löhne und Gehälter an.' },
  ],
  correctAnswer: ['1', '3'],
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q14',
  examId: 'wiso-2022-sommer',
  questionNumber: 14,
  topic: 'Tarifvertrag',
  scenario: SCENARIO_GENERAL,
  question:
    'Neben einem neuen Gehaltstarifvertrag wird von den Tarifpartnern auch ein neuer Mantel- oder Rahmentarifvertrag geschlossen. Welcher der folgenden Sachverhalte wird darin u. a. geregelt? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Vergütung für Auszubildende' },
    { id: '2', text: 'Die Mindest- und Höchstlohnsätze' },
    { id: '3', text: 'Die Anzahl der Sonderurlaubstage' },
    { id: '4', text: 'Definition der jeweiligen Vergütungsgruppen' },
    { id: '5', text: 'Der Betrag des Ecklohns' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q15',
  examId: 'wiso-2022-sommer',
  questionNumber: 15,
  topic: 'Sozialversicherung',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Petry bittet in der Personalabteilung der Sachs-IT GmbH um Informationen zur Sozialversicherung. Welche der folgenden Versicherungen sind nicht im Beitragssatz des Arbeitnehmers zur Sozialversicherung enthalten? Tragen Sie die Ziffern vor den zwei zutreffenden Versicherungen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Krankenversicherung' },
    { id: '2', text: 'Pflegeversicherung' },
    { id: '3', text: 'Lebensversicherung' },
    { id: '4', text: 'Rentenversicherung' },
    { id: '5', text: 'Arbeitslosenversicherung' },
    { id: '6', text: 'Unfallversicherung' },
  ],
  correctAnswer: ['3', '6'],
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q16',
  examId: 'wiso-2022-sommer',
  questionNumber: 16,
  topic: 'Europass',
  scenario: SCENARIO_GENERAL,
  question:
    'Eine Auszubildende der Sachs-IT GmbH will einen Teil ihrer Berufsausbildung im Ausland durchführen. In Zusammenhang mit diesem Auslandsaufenthalt weist die Sachs-IT GmbH die Auszubildende auf den Europass hin. Welche der folgenden Aussagen zum Europass ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Europass ist ein kostenpflichtiger Dienst.' },
    { id: '2', text: 'Der Europass unterstützt Auszubildende, erworbene Qualifikationen, Fähigkeiten und Kompetenzen bei Bewerbungen europaweit verständlich darzustellen.' },
    { id: '3', text: 'Der Europass beglaubigt Ausbildungsabschnitte von Auszubildenden, die im europäischen Ausland durchgeführt wurden, im „Europass-Mobilität".' },
    { id: '4', text: 'Der vom Europass ausgestellte „Europass-Mobilität" ist für eine Berufsausbildung im europäischen Ausland verpflichtend.' },
    { id: '5', text: 'Der Europass zertifiziert Fremdsprachenkenntnisse im „Europass-Sprachkenntnisse".' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17Options = [
  { id: '1', text: 'Primärer Sektor' },
  { id: '2', text: 'Sekundärer Sektor' },
  { id: '3', text: 'Tertiärer Sektor' },
]

const SCENARIO_17 = 'Volkswirtschaften werden in Wirtschaftssektoren eingeteilt. Ordnen Sie den nachstehenden Sachverhalten die folgenden Sektoren zu. Tragen Sie die Ziffer vor dem jeweils zutreffenden Sektor in das Kästchen ein.\n\nSektoren\n1 Primärer Sektor\n2 Sekundärer Sektor\n3 Tertiärer Sektor'

const q17a: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q17-a',
  examId: 'wiso-2022-sommer',
  questionNumber: 17,
  subPart: 'a',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO_17,
  question: 'Ein Computerhersteller produziert Laptops.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17b: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q17-b',
  examId: 'wiso-2022-sommer',
  questionNumber: 17,
  subPart: 'b',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO_17,
  question: 'Für die Smartphone-Fertigung benötigte Rohstoffe werden von der Mining Co. im Tagebau gefördert.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17c: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q17-c',
  examId: 'wiso-2022-sommer',
  questionNumber: 17,
  subPart: 'c',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO_17,
  question: 'Die Altintas KG erstellt Sicherheits-Software.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17d: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q17-d',
  examId: 'wiso-2022-sommer',
  questionNumber: 17,
  subPart: 'd',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO_17,
  question: 'Die Sachs-IT GmbH kauft Monitore und verkauft diese einem Kunden.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17e: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q17-e',
  examId: 'wiso-2022-sommer',
  questionNumber: 17,
  subPart: 'e',
  topic: 'Wirtschaftssektoren',
  scenario: SCENARIO_17,
  question: 'Die Sachs-IT GmbH berät Kunden bei deren innerbetrieblichen Sicherheitsproblemen.',
  type: 'single-choice',
  options: q17Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q18: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q18',
  examId: 'wiso-2022-sommer',
  questionNumber: 18,
  topic: 'GmbH',
  scenario: SCENARIO_GENERAL,
  question:
    'Bei der Gründung der Sachs-IT GmbH wurde von Günter Sachs die Rechtsform GmbH gewählt. Welche der folgenden Aussagen trifft auf eine GmbH zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'GmbH-Anteile werden an der Börse gehandelt.' },
    { id: '2', text: 'Das Stammkapital der GmbH muss bei Gründung mindestens 100.000 EUR betragen.' },
    { id: '3', text: 'Alle Gesellschafter der GmbH sind jederzeit zur Geschäftsführung berechtigt.' },
    { id: '4', text: 'Die Gesellschafter der GmbH haften für Verbindlichkeiten mit ihrem Privatvermögen.' },
    { id: '5', text: 'Die Gewinnverteilung erfolgt der gesetzlichen Regelung entsprechend nach Geschäftsanteilen.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q19',
  examId: 'wiso-2022-sommer',
  questionNumber: 19,
  topic: 'Wirtschaftlichkeit',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Für die folgenden vier durchgeführten Aufträge der Sachs-IT GmbH liegen folgende Zahlen vor:\n| Auftrag Nr. | 1 | 2 | 3 | 4 |\n| Aufwand (EUR) | 150.000 | 40.000 | 40.000 | 50.000 |\n| Ertrag (EUR) | 180.000 | 50.000 | 52.000 | 62.000 |',
  question: 'Ermitteln Sie, welcher Auftrag am wirtschaftlichsten abgewickelt wurde. Tragen Sie die Auftragsnummer des wirtschaftlichsten Auftrags in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q20',
  examId: 'wiso-2022-sommer',
  questionNumber: 20,
  topic: 'Unternehmenszusammenschluss',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Sachs-IT GmbH hat die Bätje GmbH gekauft und betreibt diese unter Beibehaltung der Firma Bätje GmbH weiter. Um welche der folgenden Formen eines Unternehmenszusammenschlusses handelt es sich? Tragen Sie die Ziffer vor der zutreffenden Form des Unternehmenszusammenschlusses in das Kästchen ein.',
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
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q21',
  examId: 'wiso-2022-sommer',
  questionNumber: 21,
  topic: 'Leitungssysteme',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Schema "Leitungssystem der Sachs-IT GmbH": Die oberste Box "Leitung" ist über Linien mit drei Boxen auf der zweiten Ebene verbunden: "Einkauf", "Produktion", "Absatz". Auf einer dritten Ebene stehen die Boxen "PC", "Netz" und "Software"; jede dieser drei Boxen ist sowohl direkt mit "Leitung" (linke Sammellinie) als auch mit jeder der drei Boxen "Einkauf", "Produktion" und "Absatz" verbunden (die horizontalen Linien laufen durchgehend unter allen drei Spalten hindurch) – die Linien der dritten Ebene kreuzen sich also mit allen drei Bereichen der zweiten Ebene.',
  question: 'Das folgende Schema zeigt das Leitungssystem der Sachs-IT GmbH. Nach welchem der folgenden Leitungssysteme arbeitet die Sachs-IT GmbH? Tragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
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
  sourcePage: 8,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q22',
  examId: 'wiso-2022-sommer',
  questionNumber: 22,
  topic: 'Internationale Arbeitsteilung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Sachs-IT GmbH kauft Waren, die in weltweiter Arbeitsteilung hergestellt werden. Welche der folgenden Auswirkungen hat die weltweite Arbeitsteilung? Tragen Sie die Ziffer vor der zutreffenden Auswirkung in das Kästchen ein.',
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
  sourcePage: 8,
}

const q23Options = [
  { id: '1', text: 'Piktogramm 1: schwarzes Quadrat mit einer Hand, die einen Knopf/eine Taste drückt, im Hintergrund stilisierte Flammen.' },
  { id: '2', text: 'Piktogramm 2: weißes Dreieck mit schwarzer Umrandung, darin eine stilisierte Flamme (Warnzeichen).' },
  { id: '3', text: 'Piktogramm 3: weißes Dreieck mit schwarzer Umrandung, darin ein Blitzsymbol (Warnzeichen).' },
  { id: '4', text: 'Piktogramm 4: grauer Kreis, darin eine durchgestrichene Hand (Verbotszeichen).' },
  { id: '5', text: 'Piktogramm 5: weißer Pfeil nach rechts auf grauem/grünem Grund (Rettungszeichen).' },
  { id: '6', text: 'Piktogramm 6: grauer Kreis, darin ein durchgestrichenes Symbol aus Sprühstrahl/Wasser über einem Blitz (Verbotszeichen).' },
  { id: '7', text: 'Piktogramm 7: schwarzes Quadrat mit mehreren Personen und Pfeilen, die zu einem Punkt zusammenlaufen (Sammelstelle).' },
]

const SCENARIO_23 =
  'Herr Petry wird von der Sicherheitsfachkraft der Sachs-IT GmbH über Schutzmaßnahmen am Arbeitsplatz informiert. Dabei legt die Sicherheitsfachkraft Wert darauf, dass die Sicherheitskennzeichen bekannt sind. Welche der folgenden Sicherheitskennzeichen sind den danebenstehenden Bedeutungen zuzuordnen? Tragen Sie die Ziffer vor dem jeweils zutreffenden Sicherheitskennzeichen in das Kästchen ein.'

const Q23_EXPLANATION =
  'Enthält eine Grafik/Abbildung (Sicherheitskennzeichen-Piktogramme 1–7 auf Seite 8), die nicht zuverlässig verbal transkribiert werden kann. Der offizielle Lösungsschlüssel gibt die Zuordnung a)2 b)6 c)1 d)5 vor; die Zuordnung von Piktogramm 6 zu "Gehäuse unter Spannung, nicht berühren" ließ sich anhand der Bildbeschreibung nicht zweifelsfrei nachvollziehen (ein Verbotszeichen mit Sprühstrahl/Blitz deutet eher auf "kein Wasser zum Löschen" hin). Bitte anhand des Original-PDF prüfen.'

const q23a: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q23-a',
  examId: 'wiso-2022-sommer',
  questionNumber: 23,
  subPart: 'a',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_23,
  question: 'Bedeutung: Warnung vor feuergefährlichen Stoffen',
  type: 'single-choice',
  options: q23Options,
  answerStatus: 'unclear',
  explanation: Q23_EXPLANATION,
  sourcePage: 8,
}

const q23b: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q23-b',
  examId: 'wiso-2022-sommer',
  questionNumber: 23,
  subPart: 'b',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_23,
  question: 'Bedeutung: Gehäuse unter Spannung, nicht berühren',
  type: 'single-choice',
  options: q23Options,
  answerStatus: 'unclear',
  explanation: Q23_EXPLANATION,
  sourcePage: 8,
}

const q23c: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q23-c',
  examId: 'wiso-2022-sommer',
  questionNumber: 23,
  subPart: 'c',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_23,
  question: 'Bedeutung: Manueller Brandmelder',
  type: 'single-choice',
  options: q23Options,
  answerStatus: 'unclear',
  explanation: Q23_EXPLANATION,
  sourcePage: 8,
}

const q23d: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q23-d',
  examId: 'wiso-2022-sommer',
  questionNumber: 23,
  subPart: 'd',
  topic: 'Sicherheitskennzeichen',
  scenario: SCENARIO_23,
  question: 'Bedeutung: Richtungsangabe Rettungsweg',
  type: 'single-choice',
  options: q23Options,
  answerStatus: 'unclear',
  explanation: Q23_EXPLANATION,
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q24',
  examId: 'wiso-2022-sommer',
  questionNumber: 24,
  topic: 'Arbeitsschutz / Unfallverhütungsvorschriften',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Mitarbeitenden der Sachs-IT GmbH müssen die Vorschriften zu Unfallverhütung und zum Arbeits- und zum Gesundheitsschutz am Arbeitsplatz kennen und einhalten. Welche der folgenden Aussagen trifft auf die Informationspflicht über Unfallverhütungsvorschriften zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDie Sachs-IT GmbH muss …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ihre Mitarbeiter schriftlich informieren, dass an den Arbeitsplätzen Unfallverhütungsvorschriften einzuhalten sind, die sie bei der zuständigen Berufsgenossenschaft einsehen können.' },
    { id: '2', text: 'ihre Mitarbeiter zu Beginn ihrer Tätigkeit einmal mündlich, z. B. im Vorstellungsgespräch, über die einzuhaltenden Unfallverhütungsvorschriften informieren.' },
    { id: '3', text: 'die Unfallverhütungsvorschriften im Intranet bereitstellen, sodass alle Mitarbeiter diese jederzeit einsehen und downloaden können.' },
    { id: '4', text: 'die Unfallverhütungsvorschriften im Betrieb gut sichtbar aushängen.' },
    { id: '5', text: 'jeden neuen Mitarbeiter zu einer Informationsveranstaltung über Arbeitssicherheit und Gesundheitsschutz bei der zuständigen Berufsgenossenschaft anmelden.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q25',
  examId: 'wiso-2022-sommer',
  questionNumber: 25,
  topic: 'Brandbekämpfung / Feuerlöscher',
  scenario: SCENARIO_GENERAL,
  question:
    'Herrn Petry liegen die folgenden Piktogramme, die das Löschen mithilfe von Feuerlöschgeräten zum Thema haben, vor. Eine Kollegin meint, dass eins der Piktogramme ein unzutreffendes Verhalten darstellt. Welches der folgenden Piktogramme stellt unzutreffendes Verhalten im Löschfall dar? Tragen Sie die Ziffer vor dem zutreffenden Piktogramm in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Piktogramm: Person löscht Brandstelle und beobachtet sie. Bildunterschrift: "Brandstelle beobachten, auf Wiederentzündung warten, NICHT einfach weggehen"' },
    { id: '2', text: 'Piktogramm: Zwei Personen löschen gemeinsam mit mehreren Feuerlöschern gleichzeitig. Bildunterschrift: "Möglichst viele Feuerlöscher gleichzeitig benutzen, NICHT hintereinander"' },
    { id: '3', text: 'Piktogramm: Person löscht kniend von unten in Richtung der Flammen. Bildunterschrift: "Tropf- und Fließbrände von unten bekämpfen, NIE von oben löschen"' },
    { id: '4', text: 'Piktogramm: Person löscht von unten und von vorn nach hinten. Bildunterschrift: "Von unten und von vorn nach hinten löschen, NICHT andersherum"' },
    { id: '5', text: 'Piktogramm: Person löscht in Windrichtung. Bildunterschrift: "Immer in Windrichtung löschen, NICHT gegen den Wind"' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const SCENARIO_26 =
  'Zur Brandbekämpfung verwendet die Sachs-IT GmbH u. a. Feuerlöscher. Herr Petry weist die Auszubildenden in die Handhabung der Feuerlöscher mit Dauerdruck ein. Bringen Sie die folgenden Schritte zur Bedienung eines Feuerlöschers in die richtige Reihenfolge. Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.'

const q26a: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q26-a',
  examId: 'wiso-2022-sommer',
  questionNumber: 26,
  subPart: 'a',
  topic: 'Feuerlöscher Bedienung',
  scenario: SCENARIO_26,
  question: 'Schritt: „Sicherungsstift/Sicherungslasche ziehen" – an welcher Stelle in der richtigen Reihenfolge steht dieser Schritt?',
  type: 'open-answer',
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q26b: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q26-b',
  examId: 'wiso-2022-sommer',
  questionNumber: 26,
  subPart: 'b',
  topic: 'Feuerlöscher Bedienung',
  scenario: SCENARIO_26,
  question: 'Schritt: „Feuerlöscher aus der Wandhalterung entnehmen" – an welcher Stelle in der richtigen Reihenfolge steht dieser Schritt?',
  type: 'open-answer',
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q26c: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q26-c',
  examId: 'wiso-2022-sommer',
  questionNumber: 26,
  subPart: 'c',
  topic: 'Feuerlöscher Bedienung',
  scenario: SCENARIO_26,
  question: 'Schritt: „Betätigungshebel ziehen/Betätigungstaste drücken" – an welcher Stelle in der richtigen Reihenfolge steht dieser Schritt?',
  type: 'open-answer',
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q26d: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q26-d',
  examId: 'wiso-2022-sommer',
  questionNumber: 26,
  subPart: 'd',
  topic: 'Feuerlöscher Bedienung',
  scenario: SCENARIO_26,
  question: 'Schritt: „Schlauch in Richtung Feuer halten" – an welcher Stelle in der richtigen Reihenfolge steht dieser Schritt?',
  type: 'open-answer',
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q26e: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q26-e',
  examId: 'wiso-2022-sommer',
  questionNumber: 26,
  subPart: 'e',
  topic: 'Feuerlöscher Bedienung',
  scenario: SCENARIO_26,
  question: 'Schritt: „Zum Feuerlöschgerät laufen" – an welcher Stelle in der richtigen Reihenfolge steht dieser Schritt?',
  type: 'open-answer',
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q27',
  examId: 'wiso-2022-sommer',
  questionNumber: 27,
  topic: 'Umweltschutz / Verursacherprinzip',
  scenario: SCENARIO_GENERAL,
  question:
    'Im Rahmen des Umweltschutzes soll künftig stärker das Verursacherprinzip berücksichtigt werden. Welche der folgenden Aussagen zum Verursacherprinzip trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDas Verursacherprinzip bedeutet, dass …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'die Kosten für die Beseitigung von Umweltschäden auf alle Mitglieder der Solidargemeinschaft gleichmäßig aufgeteilt werden.' },
    { id: '2', text: 'die Kosten für die Beseitigung von Umweltschäden diejenigen tragen, die für die Schäden verantwortlich sind.' },
    { id: '3', text: 'möglichst solche Waren vertrieben werden sollen, deren Verpackung vom Konsumenten leicht fachgerecht entsorgt werden kann.' },
    { id: '4', text: 'die Abfallentsorgung wichtiger ist als die Abfallvermeidung.' },
    { id: '5', text: 'ausreichend Verpackungsmaterial eingesetzt wird, damit die Ware nicht beschädigt wird.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q28',
  examId: 'wiso-2022-sommer',
  questionNumber: 28,
  topic: 'Kreislaufwirtschaft / Recycling',
  scenario: SCENARIO_GENERAL,
  question:
    'Zweck des Kreislaufwirtschaftsgesetzes ist es unter anderem, das Recycling von Abfällen zu fördern. Welche der folgenden Handlungen im Betriebsablauf der Sachs-IT GmbH wird als Recycling bezeichnet? Tragen Sie die Ziffer vor der zutreffenden Handlung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Sachs-IT GmbH verwendet für Verpackungen bei Briefen und Paketen nur Materialien mit dem Umweltsiegel.' },
    { id: '2', text: 'In den Waschräumen werden Papierhandtücher bereitgelegt, die besonders hygienisch sind.' },
    { id: '3', text: 'Anfallende Verpackungen werden erst nach Materialien getrennt und dann dem Dualen System zugeführt.' },
    { id: '4', text: 'Durch den Einbau von Öko-Toiletten-Spülungen wird wertvolles Trinkwasser gespart.' },
    { id: '5', text: 'In der Kantine werden nur Lebensmittel aus biologischer Erzeugung verwendet.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q29',
  examId: 'wiso-2022-sommer',
  questionNumber: 29,
  topic: 'Diversity Management / Charta der Vielfalt',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Sachs-IT GmbH möchte ihr "Diversity Management" neu bewerten und überlegt, der 2006 ins Leben gerufenen "Charta der Vielfalt" beizutreten. Hierbei handelt es sich um eine Selbstverpflichtung von Unternehmen und anderen Organisationen, ein möglichst vorurteilsfreies Arbeitsumfeld zu schaffen. Welcher der folgenden Punkte wird in der Charta nicht berücksichtigt? Tragen Sie die Ziffer vor dem zutreffenden Punkt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Alter' },
    { id: '2', text: 'Religion' },
    { id: '3', text: 'Sexuelle Orientierung/Identität' },
    { id: '4', text: 'Ausbildungsstand/Art des Abschlusses' },
    { id: '5', text: 'Nationalität/ethnische Herkunft' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2022-sommer-q30',
  examId: 'wiso-2022-sommer',
  questionNumber: 30,
  topic: 'Diversity Management',
  scenario: SCENARIO_GENERAL,
  question:
    'Ihr Kollege möchte sich näher mit dem Thema beschäftigen und fragt Sie, was das Ziel des Diversity Managements ist. Welche der folgenden Antworten geben Sie ihm? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.\n\nDiversity Management …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist ein klassischer Teil des Personalwesens und soll die bestehenden Vorurteile bei Kunden ausnutzen.' },
    { id: '2', text: 'zielt auf eine Gewinnmaximierung durch Personaleinsparung ab.' },
    { id: '3', text: 'umfasst alle Strategien, die es erlauben, Ungleiches gleich und Gleiches ungleich zu behandeln.' },
    { id: '4', text: 'soll helfen, das Humankapital der Belegschaft dem Management zur Verfügung zu stellen.' },
    { id: '5', text: 'will die in der Vielfalt der Belegschaft liegenden Potenziale für das Unternehmen nutzbar machen.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 11,
}

export const wisoExam2022SommerQuestions: WisoExamQuestion[] = [
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
  q16,
  q17a,
  q17b,
  q17c,
  q17d,
  q17e,
  q18,
  q19,
  q20,
  q21,
  q22,
  q23a,
  q23b,
  q23c,
  q23d,
  q24,
  q25,
  q26a,
  q26b,
  q26c,
  q26d,
  q26e,
  q27,
  q28,
  q29,
  q30,
]
