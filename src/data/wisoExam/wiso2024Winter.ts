import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Winter 2024/25, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_24w.pdf` and the
 * official ZPA Nord-West solution PDF `Loe_WiSo_24w.pdf`. Every question
 * and option below is a faithful, unaltered reproduction of the source
 * material — see `src/types/wisoExam.ts` for why this must never be mixed
 * with or "corrected" against the ordinary WISO lessons.
 */

export const wisoExam2024WinterMeta: WisoExamMeta = {
  id: 'wiso-2024-winter',
  year: 2024,
  period: 'Winter',
  label: 'Winter 2024/25',
  examDate: 'Mittwoch, 27. November 2024',
  courseCodes: '1201 – 1202 – 1203 – 1204 – 1205 – 6470 – 6480',
  sourceExamPdf: 'WiSo_24w.pdf',
  sourceSolutionPdf: 'Loe_WiSo_24w.pdf',
  hasOfficialSolution: true,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** General company context ("Ausgangssituation") printed once on page 2; applies to the whole exam. */
const SCENARIO_GENERAL =
  'Die EcoTec GmbH ist ein IT-Service-Unternehmen und hat 25 Mitarbeiter. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const SCENARIO_16_17 =
  'Die EcoTec GmbH ist in den folgenden beiden Märkten tätig: spezielle IT-Dienstleistungen für Medikamentenabrechnungen. Hier gibt es vier Mitbewerber. Außerdem bietet die EcoTec GmbH für eine Vielzahl von Privathaushalten und Unternehmen allgemeine IT-Dienstleistungen für Steuerabrechnungen an. In diesem zweiten Bereich gibt es eine Vielzahl von Konkurrenten.'

const SCENARIO_21_22 =
  'Drei ehemalige Mitarbeitende der EcoTec GmbH wollen sich selbstständig machen und ein Unternehmen als GmbH gründen. Die Einlagen verteilen sich wie folgt.\n- John Walsch mit einer Einlage in Höhe von 50.000 EUR\n- Susanne Venga mit einer Einlage in Höhe von 20.000 EUR\n- Denis Özgül mit einer Einlage in Höhe von 15.000 EUR\nAls Geschäftsführerin für die neue GmbH wird Claudia Müller eingestellt. Im Gesellschaftsvertrag wird auf die gesetzlichen Bestimmungen bezüglich Haftung und Vertretung verwiesen.'

const SCENARIO_23_25 =
  'Die EcoTec GmbH formuliert interne Ziele bezüglich der Nachhaltigkeit und des Umweltschutzes im Unternehmen.'

const q1: WisoExamQuestion = {
  id: 'wiso-2024-winter-q1',
  examId: 'wiso-2024-winter',
  questionNumber: 1,
  topic: 'Jugendarbeitsschutzgesetz',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Gesetz zum Schutze der arbeitenden Jugend (Jugendarbeitsschutzgesetz - JArbSchG) - § 19 Urlaub\n(1) Der Arbeitgeber hat Jugendlichen für jedes Kalenderjahr einen bezahlten Erholungsurlaub zu gewähren.\n(2) Der Urlaub beträgt jährlich\nmindestens 30 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 16 Jahre alt ist,\nmindestens 27 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 17 Jahre alt ist,\nmindestens 25 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahrs noch nicht 18 Jahre alt ist.\n(…)',
  question:
    'Moritz Monion hat am 02.03. Geburtstag, ist 17 Jahre alt und beginnt am 01.08.2024 seine Ausbildung bei der EcoTec GmbH. 2025 erhält er 30 Urlaubstage. Ermitteln Sie, wie viele Werktage Herr Monion mehr erhält, als im Jugendarbeitsschutzgesetz als Mindesturlaub vorgeschrieben ist. Tragen Sie die Anzahl der Werktage in das Kästchen ein.',
  type: 'open-answer',
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2024-winter-q2',
  examId: 'wiso-2024-winter',
  questionNumber: 2,
  topic: 'Berufsausbildungsvertrag',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH schließt Ausbildungsverträge mit diversen Auszubildenden ab. Welcher der folgenden Punkte ist nicht zwingend vertraglich in Ausbildungsverträgen festzuhalten? Tragen Sie die Ziffer vor dem zutreffenden Punkt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Art, sachliche und zeitliche Gliederung sowie Ziel der Berufsausbildung' },
    { id: '2', text: 'Beginn und Dauer der Berufsausbildung' },
    { id: '3', text: 'Dauer der regelmäßigen täglichen Ausbildungszeit' },
    { id: '4', text: 'Regelungen zur Gleitzeit' },
    { id: '5', text: 'Ausbildungsmaßnahmen außerhalb der Ausbildungsstätte' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2024-winter-q3',
  examId: 'wiso-2024-winter',
  questionNumber: 3,
  topic: 'Probezeit (Berufsbildungsgesetz)',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Monion hat Fragen bezüglich der Probezeit. Wie lang muss die Probezeit laut Berufsbildungsgesetz in der Ausbildung mindestens sein? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: '1 Monat' },
    { id: '2', text: '2 Monate' },
    { id: '3', text: '3 Monate' },
    { id: '4', text: '4 Monate' },
    { id: '5', text: 'Eine Probezeit ist nicht zwingend notwendig.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2024-winter-q4',
  examId: 'wiso-2024-winter',
  questionNumber: 4,
  topic: 'Kündigung während der Probezeit',
  scenario: SCENARIO_GENERAL,
  question:
    'Justin Höhler, Mitauszubildender von Herrn Monion, kündigt seinen Ausbildungsvertrag während der Probezeit. Welche der folgenden Feststellung hierzu entspricht dem Berufsbildungsgesetz? Tragen Sie die Ziffer vor der zutreffenden Feststellung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Kündigung eines Ausbildungsverhältnisses kann mündlich erfolgen.' },
    {
      id: '2',
      text: 'Beide Seiten können das Berufsausbildungsverhältnis nur in der ersten Hälfte der Probezeit und zwingend mit Einhaltung einer Kündigungsfrist kündigen.',
    },
    {
      id: '3',
      text: 'Beide Seiten können das Berufsausbildungsverhältnis in der Probezeit ohne Angabe von Gründen und ohne Einhaltung einer Kündigungsfrist kündigen.',
    },
    {
      id: '4',
      text: 'In Betrieben, in denen ein Betriebsrat besteht, muss dieser jeder Kündigung während der Probezeit durch den Arbeitgeber zustimmen.',
    },
    { id: '5', text: 'Während einer Berufsausbildung kann vom Arbeitgeber nicht, auch nicht in der Probezeit, gekündigt werden.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 2,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2024-winter-q5',
  examId: 'wiso-2024-winter',
  questionNumber: 5,
  topic: 'Betriebsrat – passives Wahlrecht',
  scenario: SCENARIO_GENERAL,
  question:
    'In der EcoTec GmbH soll ein neuer Betriebsrat gewählt werden. Welche der folgenden Personengruppen ist nach dem Betriebsverfassungsgesetz (BetrVG) in den Betriebsrat wählbar (passives Wahlrecht)? Tragen Sie die Ziffer vor der zutreffenden Personengruppe in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Alle Wahlberechtigten, die über 16 Jahre alt sind.' },
    { id: '2', text: 'Alle Betriebsangehörigen' },
    { id: '3', text: 'Alle Wahlberechtigten, die das 18. Lebensjahr vollendet haben und mindestens sechs Monate im Betrieb beschäftigt sind.' },
    { id: '4', text: 'Alle Wahlberechtigten, die mindestens das 21. Lebensjahr vollendet haben und seit einem Monat im Betrieb beschäftigt sind.' },
    { id: '5', text: 'Alle Wahlberechtigten, die der EcoTec GmbH seit mindestens sechs Wochen angehören.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2024-winter-q6',
  examId: 'wiso-2024-winter',
  questionNumber: 6,
  topic: 'Gewerkschaften',
  scenario: SCENARIO_GENERAL,
  question:
    'Maike Schröder, eine Kollegin von Herrn Monion, beschäftigt sich mit dem Aufgabenbereich des Betriebsrats. Sie liest unter anderem den folgenden Satz: „Der Betriebsrat sorgt in den Unternehmen für die Umsetzung und Einhaltung von Tarifverträgen." Sie hat bisher nur Gewerkschaften mit Tarifverträgen in Verbindung gebracht. Welche der folgenden Darstellungen von Gewerkschaften ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Darstellung in das Kästchen ein.\n\nGewerkschaften …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'sind in den Betrieben für die Schlichtung von Auseinandersetzungen zwischen Arbeitnehmern und Arbeitgebern zuständig.' },
    { id: '2', text: 'handeln mit den Arbeitgeberverbänden auch Betriebsvereinbarungen aus.' },
    { id: '3', text: 'können bei Streitigkeiten zwischen Arbeitgebern und Arbeitnehmern den organisierten Arbeitnehmern Rechtsbeistand leisten.' },
    { id: '4', text: 'haben die Aufgabe, die Betriebsratswahlen zu kontrollieren.' },
    { id: '5', text: 'haben bei Tarifverhandlungen für die Belange aller Arbeitnehmer einzutreten.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2024-winter-q7',
  examId: 'wiso-2024-winter',
  questionNumber: 7,
  topic: 'Tarifvertrag – Zustandekommen',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Monion beschäftigt sich mit dem Zustandekommen von Tarifverträgen. Ihm liegt der folgende zeitliche Ablaufplan vor. Herr Monion ist sich sicher, dass dort die Reihenfolge der Schritte durcheinandergeraten ist. Welche der folgenden Schritte wurden aus Versehen vertauscht? Tragen Sie die Ziffern vor den zwei zutreffenden Schritten in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Fristgerechte Kündigung des bestehenden Tarifvertrags' },
    { id: '2', text: 'Aufnahme der Tarifverhandlungen durch die Tarifparteien' },
    { id: '3', text: 'Urabstimmung über einen Arbeitskampf mit nachfolgendem Streik' },
    { id: '4', text: 'Erklärung des Scheiterns der Tarifverhandlungen durch eine der Tarifparteien' },
    { id: '5', text: 'Neue Verhandlungen bei Aussetzung des Streiks' },
    { id: '6', text: 'Urabstimmung über die Verhandlungsergebnisse' },
    { id: '7', text: 'Zustimmung der Tarifparteien zum Ergebnis' },
  ],
  correctAnswer: ['3', '4'],
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2024-winter-q8',
  examId: 'wiso-2024-winter',
  questionNumber: 8,
  topic: 'Tarifvertrag – Änderung der Arbeitsbedingungen',
  scenario: SCENARIO_GENERAL,
  question:
    'In der EcoTec GmbH wird aktuell überlegt, die tariflich festgelegten Arbeitsbedingungen in einzelnen Punkten zu ändern. Wann sind solche Änderungen zulässig? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.\n\nDie Änderung ist zulässig, wenn …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'sie zugunsten der Arbeitnehmer erfolgt.' },
    { id: '2', text: 'die Berufsgenossenschaft der Änderung zustimmt.' },
    { id: '3', text: 'die Landesregierung der Änderung zustimmt.' },
    { id: '4', text: 'sie zugunsten der EcoTec GmbH erfolgt.' },
    { id: '5', text: 'sie von der Bundesagentur für Arbeit genehmigt wird.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 3,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2024-winter-q9',
  examId: 'wiso-2024-winter',
  questionNumber: 9,
  topic: 'Betriebsvereinbarung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH veröffentlicht in ihrem Intranet die aktuell gültigen Betriebsvereinbarungen. Von wem werden diese Betriebsvereinbarungen abgeschlossen? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.\n\nDie Betriebsvereinbarungen werden abgeschlossen von …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'den Tarifparteien, also dem Arbeitgeberverband und der örtlich zuständigen Industrie- und Handelskammer.' },
    { id: '2', text: 'der Industrie- und Handelskammer und dem Betriebsrat der EcoTec GmbH.' },
    { id: '3', text: 'dem Betriebsrat der EcoTec GmbH und der zuständigen Arbeitsagentur.' },
    { id: '4', text: 'dem Betriebsrat der EcoTec GmbH und der zuständigen Industrie- und Handelskammer.' },
    { id: '5', text: 'der Geschäftsleitung der EcoTec GmbH und dem Betriebsrat.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const SCENARIO_10 =
  'Die 17-jährige Daniela Schubert ist Auszubildende im ersten Ausbildungsjahr bei der EcoTec GmbH. Sie bittet Herrn Monion um Informationen, in welchen Rechtsgrundlagen sie sich bezüglich der nachstehenden Angelegenheiten informieren kann. In welchen Gesetzen findet Herr Monion die Rechtsgrundlagen, die zu den jeweiligen Angelegenheiten passen? Ordnen Sie dazu den folgenden Rechtsgrundlagen die nachstehenden Angelegenheiten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Rechtsgrundlage in das Kästchen ein.\n\nRechtsgrundlagen\n1 Jugendarbeitsschutzgesetz\n2 Berufsbildungsgesetz\n3 Kündigungsschutzgesetz\n4 Betriebsverfassungsgesetz\n5 Bürgerliches Gesetzbuch'

const q10Options = [
  { id: '1', text: 'Jugendarbeitsschutzgesetz' },
  { id: '2', text: 'Berufsbildungsgesetz' },
  { id: '3', text: 'Kündigungsschutzgesetz' },
  { id: '4', text: 'Betriebsverfassungsgesetz' },
  { id: '5', text: 'Bürgerliches Gesetzbuch' },
]

const q10a: WisoExamQuestion = {
  id: 'wiso-2024-winter-q10-a',
  examId: 'wiso-2024-winter',
  questionNumber: 10,
  subPart: 'a',
  topic: 'Rechtsgrundlagen im Ausbildungsverhältnis',
  scenario: SCENARIO_10,
  question: 'Frau Schubert möchte wissen, ob das Berufsausbildungsverhältnis gekündigt werden kann.',
  type: 'single-choice',
  options: q10Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10b: WisoExamQuestion = {
  id: 'wiso-2024-winter-q10-b',
  examId: 'wiso-2024-winter',
  questionNumber: 10,
  subPart: 'b',
  topic: 'Rechtsgrundlagen im Ausbildungsverhältnis',
  scenario: SCENARIO_10,
  question: 'Frau Schubert möchte wissen, wie viel Pausenzeiten ihr zustehen.',
  type: 'single-choice',
  options: q10Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q10c: WisoExamQuestion = {
  id: 'wiso-2024-winter-q10-c',
  examId: 'wiso-2024-winter',
  questionNumber: 10,
  subPart: 'c',
  topic: 'Rechtsgrundlagen im Ausbildungsverhältnis',
  scenario: SCENARIO_10,
  question: 'Frau Schubert möchte wissen, welche Aufgaben die Jugend- und Auszubildendenvertretung hat.',
  type: 'single-choice',
  options: q10Options,
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2024-winter-q11',
  examId: 'wiso-2024-winter',
  questionNumber: 11,
  topic: 'Jugend- und Auszubildendenvertretung (JAV)',
  scenario: SCENARIO_GENERAL,
  question:
    'Bei der EcoTec GmbH gibt es eine Jugend- und Auszubildendenvertretung (JAV), in der sich Herr Monion engagieren möchte. Welcher der folgenden Aussagen zur JAV ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die regelmäßige Amtszeit in der JAV beträgt vier Jahre.' },
    { id: '2', text: 'Das passive Wahlrecht für die JAV endet mit Vollendung des 18. Lebensjahres.' },
    { id: '3', text: 'Das Mindestalter für das aktive Wahlrecht beträgt 16 Jahre.' },
    { id: '4', text: 'Das aktive Wahlrecht für die JAV endet immer mit Vollendung des 18. Lebensjahres.' },
    { id: '5', text: 'Eine JAV kann nur gewählt werden, wenn bereits ein Betriebsrat besteht.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 4,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2024-winter-q12',
  examId: 'wiso-2024-winter',
  questionNumber: 12,
  topic: 'JAV – Wählbarkeitsvoraussetzungen',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Monion möchte sich als Kandidat zur JAV aufstellen lassen. Welche der folgenden Voraussetzungen muss er u. a. dafür erfüllen? Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.\n\nHerr Monion …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'darf nicht Mitglied des Betriebsrats sein.' },
    { id: '2', text: 'muss die deutsche Staatsangehörigkeit besitzen.' },
    { id: '3', text: 'muss im zweiten Ausbildungsjahr sein.' },
    { id: '4', text: 'darf während der Amtszeit das 25. Lebensjahr nicht überschreiten.' },
    { id: '5', text: 'muss bereits seit mindestens drei Monaten im Betrieb beschäftigt sein.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const REFERENCE_ORGANIGRAMM_13_14 =
  'Grafik zur 13. und 14. Aufgabe – Organigramm der EcoTec GmbH:\nLeitung — (verbunden über eine Linie ohne Weisungsbefugnis mit) Rechtsabteilung (als ovale Stabsstelle dargestellt)\nUnter der Leitung (Liniensystem, direkte Weisungslinien): Sales (Vertrieb) | Personal | Organisation/IT\nUnter Sales (Vertrieb): Public Relations, Versand\nUnter Personal: Verwaltung, Buchhaltung\nUnter Organisation/IT: Nachhaltigkeitsmanagement, IT-Service'

const q13: WisoExamQuestion = {
  id: 'wiso-2024-winter-q13',
  examId: 'wiso-2024-winter',
  questionNumber: 13,
  topic: 'Organisationsstruktur / Leitungssysteme',
  scenario: SCENARIO_GENERAL,
  referenceText: REFERENCE_ORGANIGRAMM_13_14,
  question:
    'Herr Monion zeigt Frau Schröder das abgebildete Organigramm der EcoTec GmbH. Welches der folgenden Leitungssysteme liegt diesem Organigramm zugrunde? Tragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Liniensystem' },
    { id: '2', text: 'Stabliniensystem' },
    { id: '3', text: 'Mehrliniensystem' },
    { id: '4', text: 'Matrixorganisation' },
    { id: '5', text: 'Spartenorganisation' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2024-winter-q14',
  examId: 'wiso-2024-winter',
  questionNumber: 14,
  topic: 'Organisationsstruktur / Stabsstelle',
  scenario: SCENARIO_GENERAL,
  referenceText: REFERENCE_ORGANIGRAMM_13_14,
  question:
    'Darüber hinaus erläutert Herr Monion ihr die Organisationsstruktur aus Aufgabe 13. Welche der folgenden Aussagen dazu ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die IT-Abteilung ist als Stabsstelle organisiert.' },
    { id: '2', text: 'Stabsstellen kommen auf keiner der Leitungsebenen der EcoTec GmbH vor.' },
    { id: '3', text: 'Das Nachhaltigkeitsmanagement der EcoTec GmbH untersteht der Sales-Abteilung.' },
    { id: '4', text: 'Die Leitung Personalmanagement ist nicht an die Weisungen der Geschäftsführung gebunden.' },
    { id: '5', text: 'Die Rechtsabteilung berät die Geschäftsleitung, ist jedoch gegenüber den Angestellten der EcoTec GmbH nicht weisungsbefugt.' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2024-winter-q15',
  examId: 'wiso-2024-winter',
  questionNumber: 15,
  topic: 'Konjunktur',
  scenario: SCENARIO_GENERAL,
  referenceText:
    'Indikatoren | 1. Quartal | 2. Quartal | 3. Quartal | 4. Quartal\nBruttoinlandsprodukt in Billionen EUR | 3,87 | 3,7 | 3,5 | 3,3\nArbeitslosenquote | 8,5 % | 9 % | 10 % | 11,5 %\nWirtschaftswachstum | 1 % | -1,1 % | -1,5 % | -2 %',
  question:
    'Herrn Monion liegen folgende Zahlen bezüglich der aktuellen Entwicklung der wirtschaftlichen Situation in Europa vor. Mit welchem der folgenden Begriffe können Sie die gesamtwirtschaftliche Situation bezogen auf das ganze Jahr beschreiben? Tragen Sie die Ziffer vor dem zutreffenden Begriff in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Aufschwung' },
    { id: '2', text: 'Stillstand (Stagnation)' },
    { id: '3', text: 'Höchststand (Boom)' },
    { id: '4', text: 'Inflation' },
    { id: '5', text: 'Abschwung (Rezession)' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2024-winter-q16',
  examId: 'wiso-2024-winter',
  questionNumber: 16,
  topic: 'Marktformen',
  scenario: SCENARIO_16_17,
  question:
    'Welche der folgenden Aussagen beschreibt und begründet die vorliegenden Marktformen korrekt? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Bei den Medikamentenabrechnungen ist die Marktform des Polypols gegeben, da viele Unternehmen und Haushalte als Nachfrager auftreten.' },
    {
      id: '2',
      text: 'Der Markt für allgemeine IT-Dienstleistungen für Steuerabrechnungen weist auf ein Polypol hin, da neben der EcoTec GmbH eine hohe Zahl an Anbietern auf eine Vielzahl von Nachfragern trifft.',
    },
    {
      id: '3',
      text: 'Das Nachfrageoligopol kennzeichnet den Markt für Steuerabrechnungen, da mit Unternehmen und Haushalten nur zwei große Gruppen von Nachfragern auftreten.',
    },
    {
      id: '4',
      text: 'Da neben der EcoTec GmbH nur wenige Anbieter auf dem Markt für Medikamentenabrechnungen zu finden sind, liegt die Marktform des Angebotsmonopols vor.',
    },
    {
      id: '5',
      text: 'Es liegt ein Quasi-Monopol als Marktform vor, da es insgesamt lediglich vier Anbieter für Steuerabrechnungen gibt, die somit automatisch eine marktbeherrschende Stellung innehaben.',
    },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const q17: WisoExamQuestion = {
  id: 'wiso-2024-winter-q17',
  examId: 'wiso-2024-winter',
  questionNumber: 17,
  topic: 'Vollkommener Markt vs. Marktrealität',
  scenario: SCENARIO_16_17,
  question:
    'Welchen der folgenden Unterschiede weist der Markt für Steuerabrechnungen zu dem Modell des vollkommenen Marktes bzw. der vollständigen Konkurrenz auf? Tragen Sie die Ziffer vor dem zutreffenden Unterschied in das Kästchen ein.',
  type: 'single-choice',
  options: [
    {
      id: '1',
      text: 'In dem Markt der vollständigen Konkurrenz kann der Staat zum Schutz der Verbraucher Mindestpreise und Höchstpreise festlegen. Dies ist für den Markt für Steuerabrechnungen nicht möglich.',
    },
    {
      id: '2',
      text: 'Der Markt für Steuerabrechnungen stellt einen Verkäufermarkt dar. Im Modell der vollständigen Konkurrenz liegt dagegen nur der Käufermarkt vor.',
    },
    { id: '3', text: 'Im Modell des vollkommenen Marktes wird von jedem Anbieter eine eigenständige und unabhängige Preispolitik betrieben.' },
    {
      id: '4',
      text: 'Da es sich im vorliegenden Fall nur um wenige Anbieter von Steuerabrechnungen handelt, liegt auf der Nachfrageseite vollständige Markttransparenz vor. Diese ist im Modell der vollständigen Konkurrenz nicht gegeben.',
    },
    {
      id: '5',
      text: 'Das Modell des vollkommenen Marktes unterstellt die Homogenität der Güter; dies ist im Fall des Marktes für Steuerabrechnungen jedoch nicht gegeben, da die Anbieter ihre Software mit verschiedenen Merkmalen und Eigenschaften auf den Markt bringen.',
    },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 6,
}

const SCENARIO_18 =
  'Die EcoTec GmbH stellt sich in ihrem Leitbild unter anderem auch als „lernende Organisation" dar. Ein Aspekt hiervon ist die regelmäßige Anpassung und Aktualisierung der Unternehmensziele. Bei der Formulierung der Unternehmensziele kann es zu Konflikten zwischen einzelnen Zielen kommen. Welche der folgenden Zielarten lassen sich den nachstehenden Zielsetzungspaaren zuordnen? Tragen Sie die Ziffer vor der jeweils zutreffenden Zielart in das Kästchen ein.\n\nZielarten\n1 Komplementäre Ziele\n2 Konkurrierende Ziele\n3 Indifferente Ziele'

const q18Options = [
  { id: '1', text: 'Komplementäre Ziele' },
  { id: '2', text: 'Konkurrierende Ziele' },
  { id: '3', text: 'Indifferente Ziele' },
]

const q18a: WisoExamQuestion = {
  id: 'wiso-2024-winter-q18-a',
  examId: 'wiso-2024-winter',
  questionNumber: 18,
  subPart: 'a',
  topic: 'Zielbeziehungen',
  scenario: SCENARIO_18,
  question: 'Mitarbeiterzufriedenheit erhöhen ↔ erhöhte Ausgaben für Verpackungen vermeiden',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18b: WisoExamQuestion = {
  id: 'wiso-2024-winter-q18-b',
  examId: 'wiso-2024-winter',
  questionNumber: 18,
  subPart: 'b',
  topic: 'Zielbeziehungen',
  scenario: SCENARIO_18,
  question: 'Einkauf ausschließlich der preisgünstigsten Produkte ↔ Erlangung eines Gütesiegels in der Produktion',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18c: WisoExamQuestion = {
  id: 'wiso-2024-winter-q18-c',
  examId: 'wiso-2024-winter',
  questionNumber: 18,
  subPart: 'c',
  topic: 'Zielbeziehungen',
  scenario: SCENARIO_18,
  question: 'Gutes Arbeitsklima ↔ Recycling der Verpackungen',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18d: WisoExamQuestion = {
  id: 'wiso-2024-winter-q18-d',
  examId: 'wiso-2024-winter',
  questionNumber: 18,
  subPart: 'd',
  topic: 'Zielbeziehungen',
  scenario: SCENARIO_18,
  question: 'Kundenzufriedenheit durch kompetente Mitarbeitende ↔ Mitarbeiterqualifikationen durch Fortbildungen erhöhen',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q18e: WisoExamQuestion = {
  id: 'wiso-2024-winter-q18-e',
  examId: 'wiso-2024-winter',
  questionNumber: 18,
  subPart: 'e',
  topic: 'Zielbeziehungen',
  scenario: SCENARIO_18,
  question: 'Bezugskosten minimieren ↔ Gewinnmaximierung',
  type: 'single-choice',
  options: q18Options,
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2024-winter-q19',
  examId: 'wiso-2024-winter',
  questionNumber: 19,
  topic: 'Soziale Unternehmensziele',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH verfolgt auch soziale Ziele. Welche der folgenden Maßnahmen orientiert sich nicht an sozialen Zielen? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Verwenden von fair gehandelten Produkten' },
    { id: '2', text: 'Verfolgung strenger Diversity- und Compliance-Regelungen' },
    { id: '3', text: 'Beteiligung der Arbeitenden am Unternehmenserfolg' },
    { id: '4', text: 'Einrichten eines betrieblichen Kindergartens' },
    { id: '5', text: 'Sammeln der Verpackungsabfälle aus dem Wareneingang' },
  ],
  correctAnswer: '5',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2024-winter-q20',
  examId: 'wiso-2024-winter',
  questionNumber: 20,
  topic: 'Betriebsbedingte Kündigung',
  scenario: SCENARIO_GENERAL,
  question:
    'Einem Mitarbeiter der EcoTec GmbH wurde nach dreijähriger Betriebszugehörigkeit betriebsbedingt gekündigt. Welchen der folgenden Gründe kann eine betriebsbedingte Kündigung haben? Tragen Sie die Ziffer vor dem zutreffenden Grund in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Zeitablauf des befristeten Arbeitsvertrages' },
    { id: '2', text: 'Trunkenheit am Arbeitsplatz' },
    { id: '3', text: 'Wegfall des Arbeitsplatzes durch Standortschließung' },
    { id: '4', text: 'Mangelndes Fachwissen' },
    { id: '5', text: 'Grobe Beleidigung eines Vorgesetzten' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2024-winter-q21',
  examId: 'wiso-2024-winter',
  questionNumber: 21,
  topic: 'GmbH-Gründung',
  scenario: SCENARIO_21_22,
  question:
    'Die drei Gesellschafter wollen die GmbH rechtswirksam gründen. Welcher der folgenden Sachverhalte entspricht den gesetzlichen Regelungen zur GmbH? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Eine Eintragung der GmbH ins Handelsregister muss nicht zwangsläufig beantragt werden.' },
    { id: '2', text: 'Der Name des neuen Unternehmens in dem Antrag könnte auch auf „EcoTec GmbH" lauten.' },
    {
      id: '3',
      text: 'Die Geschäftsführung des neuen Unternehmens muss durch eine außenstehende Person erfolgen, da zur Vermeidung von Interessenkonflikten Gesellschafter einer GmbH nicht auch deren Geschäfte führen dürfen.',
    },
    { id: '4', text: 'Die Einlagen der drei Gesellschafter übersteigen das gesetzlich geforderte Mindestkapital der neuen GmbH.' },
    { id: '5', text: 'Der Gesellschaftsvertrag zwischen den drei Gesellschaftern kann auch mündlich abgeschlossen werden, um rechtswirksam sein zu können.' },
  ],
  correctAnswer: '4',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2024-winter-q22',
  examId: 'wiso-2024-winter',
  questionNumber: 22,
  topic: 'Haftung der GmbH',
  scenario: SCENARIO_21_22,
  question:
    'Die neu gegründete GmbH erwirbt einen neuen Server. Wie ist die Haftung der GmbH gegenüber dem Verkäufer geregelt? Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Dem Verkäufer gegenüber haftet nur der Gesellschafter mit der höchsten Einlage.' },
    { id: '2', text: 'Die GmbH haftet mit ihrem Stammkapital und die drei Gesellschafter zusätzlich auch mit ihrem Privatvermögen.' },
    { id: '3', text: 'Die GmbH haftet gegenüber dem Verkäufer mit dem gesamten Betriebsvermögen.' },
    { id: '4', text: 'Die GmbH haftet dem Verkäufer der Ware gegenüber nur bis zur Höhe des gesetzlich festgelegten und einzuzahlenden Mindestkapitals.' },
    { id: '5', text: 'Die GmbH haftet gegenüber dem Verkäufer nur mit den liquiden Mitteln der Gesellschaft.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q23: WisoExamQuestion = {
  id: 'wiso-2024-winter-q23',
  examId: 'wiso-2024-winter',
  questionNumber: 23,
  topic: 'Ökologische Ziele',
  scenario: SCENARIO_23_25,
  question: 'Welche der folgenden Aussagen stellt ein ökologisches Ziel dar? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Alle Produkte sollen von ökologisch zertifizierten Lieferanten bezogen werden, ohne Abstriche bei der Qualität und Funktionalität hinzunehmen.' },
    { id: '2', text: 'Hohe Investitionen in neue Produktionslagen.' },
    { id: '3', text: 'Die Verbesserung der Kundenzufriedenheit und damit der Kundenbindung.' },
    { id: '4', text: 'Umstellung des Fuhrparks für die Geschäftsführung auf größere und leistungsstärkere Fahrzeuge mit Verbrennungsmotor.' },
    { id: '5', text: 'Umsatzsteigerung durch stetige Erweiterung des Sortiments.' },
  ],
  correctAnswer: '1',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2024-winter-q24',
  examId: 'wiso-2024-winter',
  questionNumber: 24,
  topic: 'Emissionen / Umweltschutz',
  scenario: SCENARIO_23_25,
  question:
    'Im Lager der EcoTec GmbH werden zu hohe umweltbelastende Emissionen festgestellt. Welche der folgenden Aussagen ist in diesem Zusammenhang richtig? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Emissionen entstehen in der EcoTec GmbH ausschließlich durch den Transport von Waren zwischen verschiedenen Lagerorten.' },
    { id: '2', text: 'Zu den umweltbelastenden Emissionen gehören neben umweltschädlichen Abgasen auch mögliche Schallemissionen.' },
    { id: '3', text: 'Emissionen können durch den Bau höherer Schornsteine für Abgase der EcoTec GmbH reduziert oder vermieden werden.' },
    { id: '4', text: 'Für die Luftreinhaltung ist gemäß Bundesimmissionsschutzgesetz die Sicherheitsbeauftragte der EcoTec GmbH zuständig.' },
    { id: '5', text: 'Die Verringerung der Emissionen in der EcoTec GmbH unterliegt keinerlei gesetzlichen Regelungen.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 8,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2024-winter-q25',
  examId: 'wiso-2024-winter',
  questionNumber: 25,
  topic: 'Umweltzeichen "Blauer Engel"',
  scenario: SCENARIO_23_25,
  question:
    'Die EcoTec GmbH strebt die Verleihung des Umweltzeichens „Blauer Engel" an. Welche der folgenden Aussagen zu der mit dem Umweltzeichen „Blauer Engel" ausgezeichneten Ware ist zutreffend? (Auf der Seite ist das Logo des Umweltzeichens „Blauer Engel – Das Umweltzeichen" abgebildet.) Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDiese Ware …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist besonders haltbar.' },
    { id: '2', text: 'ist besonders sicher in der Handhabung.' },
    { id: '3', text: 'ist aus schadstoffarmen Rohstoffen und umweltschonend produziert worden.' },
    { id: '4', text: 'hat bereits mehrere Umweltpreise gewonnen.' },
    { id: '5', text: 'ist nach ihrer Benutzung ausschließlich über das Duale System zu entsorgen.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2024-winter-q26',
  examId: 'wiso-2024-winter',
  questionNumber: 26,
  topic: 'Arbeitsschutzbeauftragter',
  scenario: SCENARIO_GENERAL,
  question:
    'Herr Monion soll nach Beendigung seiner Ausbildung die Aufgaben des Arbeitsschutzbeauftragten bei der EcoTec GmbH übernehmen. Welche der folgenden Aufgaben hat Herr Monion als Arbeitsschutzbeauftragter? Tragen Sie die Ziffer vor der zutreffenden Aufgabe in das Kästchen ein.\n\nDer Arbeitsschutzbeauftragte …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist für die Sicherheit im Betrieb allein verantwortlich.' },
    { id: '2', text: 'unterstützt den Arbeitgeber bei der Durchführung des Unfallschutzes.' },
    { id: '3', text: 'ist ein selbstständiges Organ im Sinne des Betriebsverfassungsrechts.' },
    { id: '4', text: 'ist verantwortlich für die Installation von Schließsystemen.' },
    { id: '5', text: 'ist automatisch Mitglied im Arbeitssicherheitsausschuss des Betriebsrates.' },
  ],
  correctAnswer: '2',
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2024-winter-q27',
  examId: 'wiso-2024-winter',
  questionNumber: 27,
  topic: 'Brandschutz – Sofortmaßnahmen',
  scenario: SCENARIO_GENERAL,
  question:
    'In einem Seminar bei der EcoTec GmbH werden Sofortmaßnahmen im Brandfall thematisiert. Welche der folgenden Maßnahmen müssen im Falle eines Brandes bei der EcoTec GmbH sofort ergriffen werden? Tragen Sie die Ziffern vor den zwei zutreffenden Maßnahmen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Alle Fenster öffnen, damit der Rauch abziehen kann' },
    { id: '2', text: 'Den Notruf absetzen' },
    { id: '3', text: 'Den Sicherheitsbeauftragten informieren, da er für die technischen Anlagen zuständig ist' },
    { id: '4', text: 'Den Vorgesetzten informieren, da dieser die Verantwortung für die Abteilung hat' },
    { id: '5', text: 'Alle gefährdeten Personen evakuieren' },
    { id: '6', text: 'Alle erreichbaren Wasserstellen öffnen' },
  ],
  correctAnswer: ['2', '5'],
  answerStatus: 'confirmed',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2024-winter-q28',
  examId: 'wiso-2024-winter',
  questionNumber: 28,
  topic: 'Gesundheitsmanagement / Stressreduzierung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH sucht nach geeigneten Maßnahmen, um die Gesundheit am Arbeitsplatz zu verbessern. Nach einer betrieblichen Umfrage steht der Wunsch nach Stressreduzierung an erster Stelle. Welche der folgenden Maßnahmen sind dafür nicht geeignet? Tragen Sie die Ziffern vor den zwei nicht geeigneten Maßnahmen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    {
      id: '1',
      text: 'Kundenbeschwerden werden nicht mehr in persönlicher Gegenwart des Kunden, sondern ausschließlich am Telefon bearbeitet und am schwarzen Brett veröffentlicht.',
    },
    { id: '2', text: 'Es werden Workshops zur Work-Life-Balance angeboten.' },
    { id: '3', text: 'Es wird eine angenehme Arbeitsatmosphäre geschaffen.' },
    { id: '4', text: 'Das Betriebssportangebot wird stark erweitert.' },
    { id: '5', text: 'Misserfolge der Mitarbeitenden werden für alle und nicht nur für die Vorgesetzten bekanntgegeben.' },
    { id: '6', text: 'Die Möglichkeit zum Homeoffice wird offener und flexibler gestaltet.' },
  ],
  correctAnswer: ['1', '5'],
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2024-winter-q29',
  examId: 'wiso-2024-winter',
  questionNumber: 29,
  topic: 'Allgemeines Gleichbehandlungsgesetz (AGG)',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH legt sowohl während des Einstellungsverfahrens als auch während der Beschäftigung großen Wert auf die Gleichbehandlung aller Mitarbeitenden. Welche der folgenden Aussagen trifft auf das Allgemeine Gleichbehandlungsgesetz (AGG) zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Das AGG gilt nicht für Auszubildende.' },
    { id: '2', text: 'Bei Verstoß gegen das AGG haben die Betroffenen keinen Anspruch auf Schadenersatz.' },
    { id: '3', text: 'Das AGG regelt unter anderem, dass Benachteiligungen aus Gründen des Geschlechts, der Religion oder Weltanschauung nicht zulässig sind.' },
    { id: '4', text: 'Stellenausschreibungen müssen nicht zwingend geschlechtsneutral ausgeschrieben werden.' },
    { id: '5', text: 'Die Benachteiligungsverbote des AGG erstrecken sich nicht auf Ungleichbehandlungen bei dem beruflichen Aufstieg sowie bei den Arbeitsbedingungen.' },
  ],
  correctAnswer: '3',
  answerStatus: 'confirmed',
  sourcePage: 10,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2024-winter-q30',
  examId: 'wiso-2024-winter',
  questionNumber: 30,
  topic: 'AGG – Stellenanzeigen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTec GmbH plant, zwei Fachinformatiker Anwendungsentwicklung (m/w/d) einzustellen. Welche der folgenden Formulierungen in einer Stellenanzeige verstößt gegen das Allgemeine Gleichbehandlungsgesetz (AGG)? Tragen Sie die Ziffer vor der zutreffenden Formulierung in das Kästchen ein.',
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
  sourcePage: 10,
}

export const wisoExam2024WinterQuestions: WisoExamQuestion[] = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10a,
  q10b,
  q10c,
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
