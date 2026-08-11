import type { WisoExamMeta, WisoExamQuestion } from '../../types/wisoExam'

/**
 * IHK Abschlussprüfung Winter 2025/26, Wirtschafts- und Sozialkunde, Teil 2.
 * Transcribed verbatim from the scanned exam PDF `WiSo_25w.pdf`. No official
 * ZPA solution PDF was available for this exam at transcription time, so
 * every question below is marked `answerStatus: 'unclear'` with no
 * `correctAnswer` — see `src/types/wisoExam.ts` for why guessed answers must
 * never be presented as officially sourced. The question and option text
 * itself is a faithful, unaltered reproduction of the source material.
 */

export const wisoExam2025WinterMeta: WisoExamMeta = {
  id: 'wiso-2025-winter',
  year: 2025,
  period: 'Winter',
  label: 'Winter 2025/26',
  examDate: 'Mittwoch, 26. November 2025',
  courseCodes: '1201 – 1202 – 1203 – 1204 – 1205 – 6470 – 6480',
  sourceExamPdf: 'WiSo_25w.pdf',
  hasOfficialSolution: false,
  taskCount: 30,
  durationMinutes: 60,
  totalPoints: 100,
}

/** General company context ("Situation") printed once on page 2; applies to the whole exam. */
const SCENARIO_GENERAL =
  'Sie sind Mitarbeiter/-in der EcoTech GmbH. Die EcoTech GmbH ist ein IT-Dienstleistungsunternehmen für kleine und mittelständische Unternehmen mit Sitz in Mainz. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.'

const SCENARIO_18_20 =
  'Zur Reduzierung finanzieller Risiken plant die EcoTech GmbH, den Unternehmensbereich „Allgemeine Dienstleistungen" auszulagern. Denis Trout und Suzi Wegener möchten ein selbstständiges Tochterunternehmen in der Rechtsform der GmbH gründen. Herr Trout beteiligt sich mit 85.000 EUR und Frau Wegener mit 35.000 EUR.'

const q1: WisoExamQuestion = {
  id: 'wiso-2025-winter-q1',
  examId: 'wiso-2025-winter',
  questionNumber: 1,
  topic: 'Ausbildereignung (BBiG)',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTech GmbH plant, mehr Auszubildende einzustellen. Hierfür benötigt sie zusätzliche Ausbilder. Welches der folgenden Eignungskriterien muss ein Ausbilder nach dem Berufsbildungsgesetz erfüllen? Tragen Sie die Ziffer vor dem zutreffenden Eignungskriterium in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Mitgliedschaft im Arbeitgeberverband' },
    { id: '2', text: 'Abschluss einer einschlägigen kaufmännischen Ausbildung' },
    { id: '3', text: 'Persönliche und fachliche Eignung' },
    { id: '4', text: 'Mitgliedschaft in einer Gewerkschaft' },
    { id: '5', text: 'Mitgliedschaft im zuständigen Prüfungsausschuss der IHK' },
  ],
  answerStatus: 'unclear',
  sourcePage: 2,
}

const q2: WisoExamQuestion = {
  id: 'wiso-2025-winter-q2',
  examId: 'wiso-2025-winter',
  questionNumber: 2,
  topic: 'Verschwiegenheitspflicht Auszubildende',
  scenario: SCENARIO_GENERAL,
  question:
    'Im Berufsausbildungsvertrag der EcoTech GmbH wird auf die Verschwiegenheitspflicht (§ 13 Nr. 6 BBiG) hingewiesen. Welche der folgenden Aussagen ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nAuszubildende …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'müssen gegenüber Dritten über sämtliche Vorkommnisse in der EcoTech GmbH Stillschweigen wahren.' },
    { id: '2', text: 'müssen über alle Betriebs- und Geschäftsgeheimnisse der EcoTech GmbH Stillschweigen wahren.' },
    { id: '3', text: 'müssen ihre Verschwiegenheitspflicht in jedem Ausbildungsjahr schriftlich bestätigen.' },
    { id: '4', text: 'dürfen in Ausübung ihrer Tätigkeit außerhalb der EcoTech GmbH nicht mit anderen Personen sprechen.' },
    { id: '5', text: 'haben keine Verschwiegenheitspflicht gegenüber ihren Lebenspartnern.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 2,
}

const q3: WisoExamQuestion = {
  id: 'wiso-2025-winter-q3',
  examId: 'wiso-2025-winter',
  questionNumber: 3,
  topic: 'Berufsausbildungsvertrag – zulässige Regelungen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTech GmbH will ihre Ausbildungsverträge überarbeiten. Welche der folgenden Formulierungen entsprechen dem Berufsbildungsgesetz? Tragen Sie die Ziffern vor den zwei zutreffenden Formulierungen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Während der Probezeit kann das Berufsausbildungsverhältnis nur mit einer Kündigungsfrist von vier Wochen gekündigt werden.' },
    {
      id: '2',
      text: 'Eine Kündigung des Berufsausbildungsverhältnisses durch eine Auszubildende nach der Probezeit ist möglich, wenn sie eine Ausbildung in einem anderen Ausbildungsberuf beginnen will.',
    },
    { id: '3', text: 'Vereinbarungen über die Zahlung einer Entschädigung für die Ausbildung an den Ausbildungsbetrieb.' },
    { id: '4', text: 'Das Ausbildungsverhältnis endet mit Ablauf der Ausbildungszeit, auch wenn die Auszubildende die IHK-Abschlussprüfung vorher besteht.' },
    { id: '5', text: 'Die EcoTech GmbH muss den Auszubildenden bei Beendigung des Berufsausbildungsverhältnisses auf deren Wunsch ein Zeugnis ausstellen.' },
    { id: '6', text: 'Die EcoTech GmbH muss der Auszubildenden am Tag nach dem Bestehen der Abschlussprüfung einen unbefristeten Arbeitsvertrag anbieten.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 2,
}

const q4: WisoExamQuestion = {
  id: 'wiso-2025-winter-q4',
  examId: 'wiso-2025-winter',
  questionNumber: 4,
  topic: 'Weiterbeschäftigung nach Ausbildung',
  scenario: SCENARIO_GENERAL,
  question:
    'Welche Rechtsfolge hat es, wenn die EcoTech GmbH die Auszubildenden im Anschluss an die bestandene Abschlussprüfung ohne ausdrückliche Vereinbarung weiterbeschäftigt? Tragen Sie die Ziffer vor der zutreffenden Rechtsfolge in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Es wird ein unbefristetes Arbeitsverhältnis begründet.' },
    { id: '2', text: 'Die Beschäftigung kann jederzeit von beiden Seiten ohne Kündigung beendet werden.' },
    { id: '3', text: 'Die Beschäftigung endet automatisch nach zwölf Monaten.' },
    { id: '4', text: 'Die Beschäftigung endet zum Ablauf des nächsten Quartals.' },
    { id: '5', text: 'Es beginnt ein Arbeitsverhältnis mit einer Probezeit von sechs Monaten.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 2,
}

const q5: WisoExamQuestion = {
  id: 'wiso-2025-winter-q5',
  examId: 'wiso-2025-winter',
  questionNumber: 5,
  topic: 'Konjunkturbelebende Maßnahmen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Konjunktur kann durch unterschiedliche Maßnahmen belebt werden. Welche der folgenden Maßnahmen belebt die Konjunktur? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Erhöhung der staatlichen Investitionen' },
    { id: '2', text: 'Erhöhung der Steuern' },
    { id: '3', text: 'Erhöhung der Leitzinsen' },
    { id: '4', text: 'Kürzung des Kindergeldes' },
    { id: '5', text: 'Kürzung des Arbeitslosengeldes' },
  ],
  answerStatus: 'unclear',
  sourcePage: 3,
}

const q6: WisoExamQuestion = {
  id: 'wiso-2025-winter-q6',
  examId: 'wiso-2025-winter',
  questionNumber: 6,
  topic: 'Zielkonflikt (Unternehmensziele)',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTech GmbH hat sich verschiedene Unternehmensziele gesteckt. Diese Ziele sollen in regelmäßigen Abständen kontrolliert und aktualisiert werden. Bei welchen der folgenden Unternehmensziele besteht ein Zielkonflikt? Tragen Sie die Ziffer vor den zutreffenden Unternehmenszielen in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Die Chancengleichheit von Frauen und Männern soll sichergestellt und die Betriebskantine soll renoviert werden.' },
    { id: '2', text: 'Die Mitarbeiter sollen durch Gewinnbeteiligung motiviert und das Betriebsklima verbessert werden.' },
    { id: '3', text: 'Die EcoTech GmbH möchte Personalkosten einsparen und gleichzeitig Arbeitsplätze sichern.' },
    { id: '4', text: 'Die EcoTech GmbH versucht, durch regelmäßige Events ein gutes Betriebsklima zu schaffen und möchte die Möglichkeiten zum mobilen Arbeiten erweitern.' },
    { id: '5', text: 'Die EcoTech GmbH will die Firmenfahrzeuge auf E-Mobilität umstellen und gleichzeitig den Bedarf an Papier senken.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 3,
}

const q7: WisoExamQuestion = {
  id: 'wiso-2025-winter-q7',
  examId: 'wiso-2025-winter',
  questionNumber: 7,
  topic: 'Probezeit im Ausbildungsvertrag',
  scenario: SCENARIO_GENERAL,
  question:
    'Am 1. September wird Frau Jung eine Berufsausbildung zur Fachinformatikerin Fachrichtung Digitale Vernetzung in der EcoTech GmbH beginnen. Claudia Monion soll den Ausbildungsvertrag überprüfen. Welche der folgenden Aussagen zur Probezeit im Ausbildungsvertrag ist richtig? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Innerhalb der Probezeit sind Kündigungen des Ausbildungsvertrages unzulässig.' },
    { id: '2', text: 'Die Probezeit muss mindestens einen Monat und höchstens vier Monate dauern.' },
    { id: '3', text: 'Während der Probezeit sind Auszubildende von der Berufsschulpflicht befreit.' },
    { id: '4', text: 'Die Probezeit kann sechs Monate betragen.' },
    { id: '5', text: 'Eine Probezeit in Ausbildungsverträgen muss nicht vereinbart werden.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 3,
}

const q8: WisoExamQuestion = {
  id: 'wiso-2025-winter-q8',
  examId: 'wiso-2025-winter',
  questionNumber: 8,
  topic: 'Jugend- und Auszubildendenvertretung (JAV) – Rechtsgrundlage',
  scenario: SCENARIO_GENERAL,
  question:
    'Frau Monion überlegt, sich bei der Jugend- und Auszubildendenvertretung (JAV) zu engagieren. Sie informiert sich, welche Aufgaben die JAV genau hat. Welches der folgenden Gesetze enthält entsprechende Regelungen? Tragen Sie die Ziffer vor dem zutreffenden Gesetz in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Bürgerliches Gesetzbuch' },
    { id: '2', text: 'Arbeitsschutzgesetz' },
    { id: '3', text: 'Berufsbildungsgesetz' },
    { id: '4', text: 'Jugendarbeitsschutzgesetz' },
    { id: '5', text: 'Betriebsverfassungsgesetz' },
  ],
  answerStatus: 'unclear',
  sourcePage: 3,
}

const q9: WisoExamQuestion = {
  id: 'wiso-2025-winter-q9',
  examId: 'wiso-2025-winter',
  questionNumber: 9,
  topic: 'Zusammenarbeit JAV / Betriebsrat / Geschäftsführung',
  scenario: SCENARIO_GENERAL,
  question:
    'Eine Kollegin unterhält sich mit Frau Monion und möchte wissen, wie die Zusammenarbeit zwischen Mitgliedern der JAV, dem Betriebsrat und der Geschäftsführung der EcoTech GmbH geregelt ist. Welche der folgenden Aussagen trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nAls Mitglied der Jugend- und Auszubildendenvertretung …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'darf man nur zweimal im Jahr an Sitzungen des Betriebsrates teilnehmen.' },
    { id: '2', text: 'darf man für Jugendliche und Auszubildende beim Betriebsrat Maßnahmen zugunsten der Auszubildenden beantragen.' },
    { id: '3', text: 'vertritt man die Interessen aller Jugendlichen gegenüber der Geschäftsführung.' },
    { id: '4', text: 'muss man vor jeder Entscheidung des Betriebsrates gehört werden.' },
    { id: '5', text: 'hat man bei allen betrieblichen Belangen ein Mitspracherecht.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 4,
}

const q10: WisoExamQuestion = {
  id: 'wiso-2025-winter-q10',
  examId: 'wiso-2025-winter',
  questionNumber: 10,
  topic: 'Wahl zum Betriebsrat',
  scenario: SCENARIO_GENERAL,
  question:
    'Der bei der EcoTech GmbH angestellte Fachinformatiker Marco Keller interessiert sich für eine Mitarbeit im Betriebsrat. Welche der folgenden Voraussetzungen muss Herr Keller erfüllen, damit er in den Betriebsrat gewählt werden kann? Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.\n\nZur Wahl in den Betriebsrat …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'muss der Mitarbeitende das 25. Lebensjahr vollendet haben.' },
    { id: '2', text: 'kann sich jeder Mitarbeitende aufstellen lassen, der das 16. Lebensjahr vollendet hat.' },
    { id: '3', text: 'muss der Mitarbeitende volljährig sein und seit mindestens sechs Monaten bei der EcoTech GmbH angestellt sein.' },
    { id: '4', text: 'muss der Mitarbeitende eine abgeschlossene Berufsausbildung nachweisen.' },
    { id: '5', text: 'muss der Mitarbeitende das 17. Lebensjahr vollendet haben und darf vorher maximal sechs Monate für die EcoTech GmbH gearbeitet haben.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 4,
}

const q11: WisoExamQuestion = {
  id: 'wiso-2025-winter-q11',
  examId: 'wiso-2025-winter',
  questionNumber: 11,
  topic: 'Jugendarbeitsschutzgesetz – Ruhepausen/Ruhezeit',
  scenario: SCENARIO_GENERAL,
  question:
    'In der EcoTech GmbH sind einige Auszubildende beschäftigt, die das 18. Lebensjahr noch nicht vollendet haben. Welche der folgenden Regelungen im Jugendarbeitsschutzgesetz (JArbSchG) trifft für diese Auszubildenden zu? Tragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Jugendliche dürfen nicht länger als fünf Stunden ununterbrochen ohne Ruhepausen beschäftigt werden.' },
    { id: '2', text: 'Zwischen dem Arbeitsende und dem Arbeitsbeginn am nächsten Tag muss eine ununterbrochene Ruhepause von mindestens zehn Stunden liegen.' },
    { id: '3', text: 'Für Jugendliche ist eine wöchentliche Arbeitszeit von 40 Stunden zulässig.' },
    { id: '4', text: 'Jugendliche sollen grundsätzlich nicht vor acht Uhr morgens beschäftigt werden.' },
    { id: '5', text: 'Jugendliche müssen zur besseren Vorbereitung im Rahmen der Abschlussprüfung zwei Arbeitstage vor der Prüfung freigestellt werden.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 4,
}

const q12: WisoExamQuestion = {
  id: 'wiso-2025-winter-q12',
  examId: 'wiso-2025-winter',
  questionNumber: 12,
  topic: 'Berufliche Fortbildung',
  scenario: SCENARIO_GENERAL,
  question:
    'Nach der Abschlussprüfung informieren Sie sich über Möglichkeiten der beruflichen Fortbildung. Bei welchem der folgenden Beispiele handelt es sich um eine berufliche Fortbildung? Tragen Sie die Ziffer vor dem zutreffenden Beispiel in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Julian Oster besucht nach dem Realschulabschluss (MSA) die Berufsfachschule für Kaufmännische Assistenten.' },
    { id: '2', text: 'Ein Auszubildender der EcoTech GmbH nimmt in einer überbetrieblichen Ausbildungsstätte an einem Lehrgang zum Thema IT-Sicherheit teil.' },
    { id: '3', text: 'Frau Monion besucht an der Volkshochschule einen Segelkurs.' },
    { id: '4', text: 'Ein Auszubildender mit Abitur will nach Abschluss der Ausbildung studieren.' },
    { id: '5', text: 'Anja Bertsch nimmt nach der Ausbildung zur Kauffrau für IT-System-Management an einem Fernlehrgang „Business English" teil.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 4,
}

const SCENARIO_13 =
  'Bei der EcoTech GmbH kommen zu unterschiedlichen Sachverhalten immer wieder Fragen auf. Sie werden beauftragt, die entsprechenden Rechtsquellen den Sachverhalten zuzuordnen, damit die Fragen zutreffend beantwortet werden können. Ordnen Sie die folgenden Rechtsquellen den nachstehenden Sachverhalten zu. Tragen Sie die Ziffer vor der jeweils zutreffenden Rechtsquelle in das Kästchen ein.\n\nRechtsquellen\n1 Berufsbildungsgesetz\n2 Handelsgesetzbuch\n3 Betriebsverfassungsgesetz\n4 Tarifvertragsgesetz\n5 Bundesurlaubsgesetz\n6 Jugendarbeitsschutzgesetz'

const q13Options = [
  { id: '1', text: 'Berufsbildungsgesetz' },
  { id: '2', text: 'Handelsgesetzbuch' },
  { id: '3', text: 'Betriebsverfassungsgesetz' },
  { id: '4', text: 'Tarifvertragsgesetz' },
  { id: '5', text: 'Bundesurlaubsgesetz' },
  { id: '6', text: 'Jugendarbeitsschutzgesetz' },
]

const q13a: WisoExamQuestion = {
  id: 'wiso-2025-winter-q13-a',
  examId: 'wiso-2025-winter',
  questionNumber: 13,
  subPart: 'a',
  topic: 'Rechtsquellen-Zuordnung',
  scenario: SCENARIO_13,
  question: 'Die Geschäftsführung der EcoTech GmbH und der Betriebsrat arbeiten unter Beachtung der geltenden Tarifverträge und gesetzlichen Regelungen konstruktiv zusammen.',
  type: 'single-choice',
  options: q13Options,
  answerStatus: 'unclear',
  sourcePage: 5,
}

const q13b: WisoExamQuestion = {
  id: 'wiso-2025-winter-q13-b',
  examId: 'wiso-2025-winter',
  questionNumber: 13,
  subPart: 'b',
  topic: 'Rechtsquellen-Zuordnung',
  scenario: SCENARIO_13,
  question: 'Die EcoTech GmbH muss Jugendlichen – je nach Alter – mindestens 25 Werktage Urlaub gewähren.',
  type: 'single-choice',
  options: q13Options,
  answerStatus: 'unclear',
  sourcePage: 5,
}

const q14: WisoExamQuestion = {
  id: 'wiso-2025-winter-q14',
  examId: 'wiso-2025-winter',
  questionNumber: 14,
  topic: 'Unbefristeter Streik',
  scenario: SCENARIO_GENERAL,
  question:
    'Bei den letzten Tarifverhandlungen hat die Arbeitgeberseite kein Angebot vorgelegt und die Forderung der Gewerkschaft abgelehnt. Daraufhin wird von Seiten der Gewerkschaft ein Streik erwogen. Welche der folgenden Aussagen zu einem unbefristeten Streik ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    {
      id: '1',
      text: 'Ein unbefristeter Streik ist insbesondere dann möglich, wenn der Bundesvorstand des Deutschen Gewerkschaftsbunds dazu aufruft, auch wenn die erforderliche Stimmenzahl bei der Urabstimmung nicht erreicht wurde.',
    },
    { id: '2', text: 'Ein unbefristeter Streik muss durch das Bundesministerium für Arbeit und Soziales genehmigt werden.' },
    { id: '3', text: 'Ein unbefristeter Streik ist nur vor dem Auslaufen eines Tarifvertrags möglich.' },
    { id: '4', text: 'Tarifverhandlungen werden immer von unbefristeten Streiks begleitet.' },
    { id: '5', text: 'Auf einen unbefristeten Streik können die Arbeitgeber mit einer Aussperrung reagieren.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 5,
}

const q15: WisoExamQuestion = {
  id: 'wiso-2025-winter-q15',
  examId: 'wiso-2025-winter',
  questionNumber: 15,
  topic: 'Kündigungsfrist (§ 622 BGB)',
  scenario: SCENARIO_GENERAL,
  referenceText:
    '§ 622 BGB Kündigungsfristen bei Arbeitsverhältnissen\n(1) Das Arbeitsverhältnis eines Arbeiters oder eines Angestellten (Arbeitnehmers) kann mit einer Frist von vier Wochen zum Fünfzehnten oder zum Ende eines Kalendermonats gekündigt werden.\n(2) Für eine Kündigung durch den Arbeitgeber beträgt die Kündigungsfrist, wenn das Arbeitsverhältnis in dem Betrieb oder Unternehmen\n1. zwei Jahre bestanden hat, einen Monat zum Ende eines Kalendermonats,\n2. fünf Jahre bestanden hat, zwei Monate zum Ende eines Kalendermonats,\n3. acht Jahre bestanden hat, drei Monate zum Ende eines Kalendermonats,\n4. zehn Jahre bestanden hat, vier Monate zum Ende eines Kalendermonats,\n5. zwölf Jahre bestanden hat, fünf Monate zum Ende eines Kalendermonats,\n6. 15 Jahre bestanden hat, sechs Monate zum Ende eines Kalendermonats,\n7. 20 Jahre bestanden hat, sieben Monate zum Ende eines Kalendermonats.\n(…)',
  question:
    'Carl Kosta ist seit dem 01.01.2012 bei der EcoTech GmbH beschäftigt. Er möchte sich beruflich verändern und kündigt deshalb rechtswirksam am 11.12.2025. (Es gilt die gesetzliche Kündigungsfrist.) Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Herrn Kosta? Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
  type: 'open-answer',
  answerStatus: 'unclear',
  sourcePage: 5,
}

const q16: WisoExamQuestion = {
  id: 'wiso-2025-winter-q16',
  examId: 'wiso-2025-winter',
  questionNumber: 16,
  topic: 'Qualifiziertes Arbeitszeugnis',
  scenario: SCENARIO_GENERAL,
  question:
    'Die EcoTech GmbH stellt für Herrn Kosta ein qualifiziertes Arbeitszeugnis aus. Welcher der folgenden Sachverhalte ist in dem Zusammenhang mit einem qualifizierten Zeugnis zutreffend? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.\n\nDas qualifizierte Zeugnis …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'enthält nur Angaben über Art und Dauer der Beschäftigung.' },
    { id: '2', text: 'darf neben Art und Dauer der Beschäftigung auf Wunsch auch Aussagen über das private Auftreten enthalten.' },
    { id: '3', text: 'wird auf Ermessen des Arbeitgebers ausgestellt.' },
    { id: '4', text: 'wird nur bei sehr guten Leistungen ausgestellt.' },
    { id: '5', text: 'muss nur auf Verlangen des Arbeitnehmers ausgestellt werden.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 6,
}

const q17: WisoExamQuestion = {
  id: 'wiso-2025-winter-q17',
  examId: 'wiso-2025-winter',
  questionNumber: 17,
  topic: 'Kündigungsschutzgesetz',
  scenario: SCENARIO_GENERAL,
  question:
    'Wegen des steigenden Konkurrenzdrucks sollen bei der EcoTech GmbH die Kosten gesenkt werden. Es wird geprüft, inwieweit dies durch Personalabbau möglich ist. Welches der folgenden Arbeitsverhältnisse könnte durch eine ordentliche Kündigung beendet werden? Das Kündigungsschutzgesetz ist zu beachten. Tragen Sie die Ziffer vor dem zutreffenden Arbeitsverhältnis in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Dan Schulze, 19 Jahre, Auszubildender zum Kaufmann für IT-System-Management, im zweiten Ausbildungsjahr bei dreijähriger Ausbildungsdauer.' },
    { id: '2', text: 'Kevin Behrens, 32 Jahre, Fachinformatiker Fachrichtung Systemintegration, seit fünf Jahren im Unternehmen, ledig, keine Kinder.' },
    { id: '3', text: 'David Zolt, 35 Jahre, schwerbehindert, zwei Kinder, Netzwerkadministrator, seit zehn Jahren im Unternehmen.' },
    { id: '4', text: 'Luisa Nova, 28 Jahre, Fachinformatikerin Fachrichtung Anwendungsentwicklung, im fünften Monat schwanger, seit einem Jahr im Unternehmen.' },
    { id: '5', text: 'Till Svensson, 38 Jahre, IT-System-Elektroniker, seit fünf Jahren im Unternehmen, er wurde vor einem Jahr in den Betriebsrat gewählt.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 6,
}

const q18: WisoExamQuestion = {
  id: 'wiso-2025-winter-q18',
  examId: 'wiso-2025-winter',
  questionNumber: 18,
  topic: 'GmbH-Gründung',
  scenario: SCENARIO_18_20,
  question:
    'Bei der Gründung der GmbH müssen Frau Wegener und Herr Trout einige rechtliche Regelungen beachten. Welche der folgenden Regelungen trifft auf die neu gegründete GmbH zu? Tragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Zur Gründung einer GmbH müssen sich mindestens drei Personen mit den gleichen geschäftlichen Interessen zusammenschließen.' },
    { id: '2', text: 'Die GmbH kann nur durch das Einbringen von Sacheinlagen gegründet werden.' },
    { id: '3', text: 'Die persönliche Mitarbeit in der Geschäftsführung ist für alle Gesellschafter verpflichtend.' },
    { id: '4', text: 'Die GmbH muss im Handelsregister eingetragen werden.' },
    { id: '5', text: 'Das Stammkapital in Höhe von 50.000 EUR muss bei der Gründung vollständig eingezahlt werden.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 6,
}

const q19: WisoExamQuestion = {
  id: 'wiso-2025-winter-q19',
  examId: 'wiso-2025-winter',
  questionNumber: 19,
  topic: 'GmbH – Rechtswirksamkeit',
  scenario: SCENARIO_18_20,
  question:
    'Die beiden Gesellschafter haben die GmbH rechtswirksam gegründet. Welcher der folgenden Sachverhalte ist in diesem Zusammenhang zutreffend? Tragen Sie die Ziffer vor dem zutreffenden Sachverhalt in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Nur Frau Wegener konnte die Eintragung der GmbH beim Arbeitsgericht beantragen.' },
    { id: '2', text: 'Das neue Unternehmen könnte auch unter dem Namen EcoTech Services firmieren.' },
    { id: '3', text: 'Frau Wegener kann in der GmbH als Gesellschafterin die Geschäftsführung übernehmen.' },
    { id: '4', text: 'Die Einlagen der beiden Gesellschafter betragen insgesamt mehr als das Zehnfache des gesetzlich geforderten Stammkapitals der neuen GmbH.' },
    { id: '5', text: 'Zur Rechtswirksamkeit genügte es, dass der Gesellschaftsvertrag zwischen den beiden Gesellschaftern mündlich geschlossen wird.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 6,
}

const q20: WisoExamQuestion = {
  id: 'wiso-2025-winter-q20',
  examId: 'wiso-2025-winter',
  questionNumber: 20,
  topic: 'Gewinnverteilung GmbH',
  scenario: SCENARIO_18_20,
  question:
    'Im ersten Geschäftsjahr wird in dem neu gegründeten Tochterunternehmen ein Gewinn in Höhe von 60.000 EUR erwirtschaftet. Für die Gewinnverteilung ist keine vertragliche Regelung vereinbart. Berechnen Sie, welcher Gewinnanteil in EUR auf Frau Wegener entfällt. Tragen Sie das Ergebnis in die Kästchen ein.',
  type: 'open-answer',
  answerStatus: 'unclear',
  sourcePage: 7,
}

const q21: WisoExamQuestion = {
  id: 'wiso-2025-winter-q21',
  examId: 'wiso-2025-winter',
  questionNumber: 21,
  topic: 'Allgemeines Gleichbehandlungsgesetz (AGG)',
  scenario: SCENARIO_GENERAL,
  question:
    'Als Arbeitgeberin muss die EcoTech GmbH das Allgemeine Gleichbehandlungsgesetz (AGG) beachten. In welchen der folgenden Fälle wird gegen das AGG verstoßen? Tragen Sie die Ziffern vor den zwei zutreffenden Fällen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Die EcoTech GmbH schaltet eine Stellenanzeige, in der sie „junge Mitarbeiter (m/w/d)" sucht.' },
    { id: '2', text: 'Zwei Mitarbeitende werden abgemahnt, weil sie trotz Verbots im Lager zum wiederholten Mal geraucht haben.' },
    { id: '3', text: 'Alle volljährigen Mitarbeitenden machen an einem 4-Stunden-Arbeitstag keine Pause.' },
    { id: '4', text: 'Ein Vorschlag einer Mitarbeiterin wird abgelehnt, weil sie eine dunkle Hautfarbe hat.' },
    { id: '5', text: 'Ein zu 60 % schwerbehinderter Mitarbeiter erhält fünf Urlaubstage mehr als die Nicht-Schwerbehinderten.' },
    { id: '6', text: 'Ein Bewerber für die Personalabteilung wird abgelehnt, weil er keine PC-Kenntnisse hat.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 7,
}

const q22: WisoExamQuestion = {
  id: 'wiso-2025-winter-q22',
  examId: 'wiso-2025-winter',
  questionNumber: 22,
  topic: 'Betriebliche Arbeitsteilung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die BHI GmbH, ein Partnerunternehmen der EcoTech GmbH, betreibt in vielerlei Hinsicht Arbeitsteilung. In welchem der folgenden Fälle handelt es sich um betriebliche Arbeitsteilung in der BHI GmbH? Tragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.\n\nDie BHI GmbH…',
  type: 'single-choice',
  options: [
    {
      id: '1',
      text: 'stellt drei Informatiker ein, einen für die Programmierung von Apps, einen für die Wartung der Software für Smartphones und einen für die Schulung von Neukunden.',
    },
    { id: '2', text: 'bezieht Bildschirme eines chinesischen Anbieters.' },
    { id: '3', text: 'bietet Software, aber keine Smartphones an.' },
    { id: '4', text: 'lässt Selfiesticks für Kunden in München mit dem Firmenlogo versehen.' },
    { id: '5', text: 'führt eine Frauenquote ein.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 7,
}

const REFERENCE_ORGANIGRAMM_23_24 =
  'Organigramm zur 23. und 24. Aufgabe:\nLEITUNG — (verbunden über eine gestrichelte Linie ohne durchgezogene Weisungsbefugnis mit) Rechtsabteilung (gestrichelt umrandet, als Stabsstelle dargestellt)\nUnter der Leitung (durchgezogene Linien): Fertigung | Vertrieb | Beschaffung\nUnter Fertigung: Teilefertigung, Montage\nUnter Vertrieb: Verkauf, Faktura\nUnter Beschaffung: Disposition, Einkauf'

const q23: WisoExamQuestion = {
  id: 'wiso-2025-winter-q23',
  examId: 'wiso-2025-winter',
  questionNumber: 23,
  topic: 'Leitungssysteme / Organigramm',
  scenario: SCENARIO_GENERAL,
  referenceText: REFERENCE_ORGANIGRAMM_23_24,
  question:
    'Der Leiter der Rechtsabteilung der EcoTech GmbH erläutert einer neuen Kollegin das abgebildete Organigramm der EcoTech GmbH. Nach welchem der folgenden Leitungssysteme ist die EcoTech GmbH organisiert? Tragen Sie die Ziffer vor dem zutreffenden Leitungssystem in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Einliniensystem' },
    { id: '2', text: 'Stab-Liniensystem' },
    { id: '3', text: 'Mehrliniensystem' },
    { id: '4', text: 'Matrixorganisation' },
    { id: '5', text: 'Spartenorganisation' },
  ],
  answerStatus: 'unclear',
  sourcePage: 8,
}

const q24: WisoExamQuestion = {
  id: 'wiso-2025-winter-q24',
  examId: 'wiso-2025-winter',
  questionNumber: 24,
  topic: 'Organisationsstruktur / Stabsstelle',
  scenario: SCENARIO_GENERAL,
  referenceText: REFERENCE_ORGANIGRAMM_23_24,
  question:
    'Darüber hinaus erläutert er der Kollegin die Organisationsstruktur. Welche der folgenden Aussagen dazu ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Fertigung und Vertrieb sind als Stabsstellen organisiert.' },
    { id: '2', text: 'Stabsstellen kommen auf keiner der Leistungsebenen der EcoTech GmbH vor.' },
    { id: '3', text: 'Der Einkauf untersteht der Vertriebsabteilung.' },
    { id: '4', text: 'Die Leitung der Fertigung ist nicht an die Weisungen der Geschäftsführung gebunden.' },
    { id: '5', text: 'Die Rechtsabteilung berät die Geschäftsleitung, hat jedoch keine Weisungsbefugnis.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 8,
}

const q25: WisoExamQuestion = {
  id: 'wiso-2025-winter-q25',
  examId: 'wiso-2025-winter',
  questionNumber: 25,
  topic: 'Krankenversicherungsbeitrag berechnen',
  scenario: SCENARIO_GENERAL,
  question:
    'Zum Beginn des Jahres haben sich die Betragssätze der Krankenversicherung geändert. Die Mitarbeiterin Marina Meußling möchte wissen, wie hoch ihr Beitrag zur Krankenversicherung zukünftig ist. Folgende Daten liegen vor:\n\nMonatliches Bruttogehalt: 3.500,00 EUR\nAllgemeiner Beitragssatz zur gesetzlichen Krankenkasse: 14,6 %\nZusatzbeitrag der gesetzlichen Krankenkasse: 1,8 %\n\nBerechnen Sie den Arbeitnehmerbeitrag zur Krankenversicherung in EUR. Tragen Sie das Ergebnis in die Kästchen ein.',
  type: 'open-answer',
  answerStatus: 'unclear',
  sourcePage: 8,
}

const q26: WisoExamQuestion = {
  id: 'wiso-2025-winter-q26',
  examId: 'wiso-2025-winter',
  questionNumber: 26,
  topic: 'Globalisierung',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Volkswirtschaft in der Bundesrepublik Deutschland profitiert von der Globalisierung. Welche der folgenden Maßnahmen fördert die Globalisierung? Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Erhöhung von Importzöllen zur Absicherung von Gewinnen in der Binnenwirtschaft.' },
    { id: '2', text: 'Einschränkung des Technologietransfers zur Absicherung des technologischen Vorsprungs.' },
    { id: '3', text: 'Subventionierung niedriger Preise zur Bereinigung der Märkte von Mitbewerbern.' },
    { id: '4', text: 'Offenheit für Investitionen ausländischer Unternehmen im Inland sowie von Investitionen deutscher Unternehmen im Ausland.' },
    { id: '5', text: 'Erhöhung der Produktionstiefe an Industriestandorten weltweit.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 9,
}

const q27: WisoExamQuestion = {
  id: 'wiso-2025-winter-q27',
  examId: 'wiso-2025-winter',
  questionNumber: 27,
  topic: 'Soziale Marktwirtschaft',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Soziale Marktwirtschaft ist in Deutschland ein gesellschafts- und wirtschaftspolitisches Leitbild. Welche der folgenden Aussagen zur Sozialen Marktwirtschaft ist zutreffend? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Der Staat fördert Monopole und Kartelle, um einen Leistungswettbewerb zu verhindern.' },
    { id: '2', text: 'Der Staat greift regulierend in Märkte ein, indem er für Waren Mindest- und Höchstpreise sowie Angebotsmengen festsetzt.' },
    { id: '3', text: 'Durch sozialen Ausgleich und solidarische Hilfe soll eine Chancengleichheit erreicht werden.' },
    { id: '4', text: 'Durch die Gesetzgebung werden alle Wettbewerbshemmnisse vermieden, sodass auf den Märkten eine vollständige Konkurrenz erreicht wird.' },
    { id: '5', text: 'Alle von Insolvenz bedrohten Unternehmen werden auf Antrag durch staatliche Subventionen gestützt.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 9,
}

const q28: WisoExamQuestion = {
  id: 'wiso-2025-winter-q28',
  examId: 'wiso-2025-winter',
  questionNumber: 28,
  topic: 'Fusion – Auswirkungen',
  scenario: SCENARIO_GENERAL,
  question:
    'Die Geschäftsleitung der EcoTech GmbH erwägt, mit einem der regionalen Mitbewerber zu fusionieren. Welche der folgenden Auswirkungen kann eine Fusion haben? Tragen Sie die Ziffern vor den zwei zutreffenden Auswirkungen in die Kästchen ein.',
  type: 'multiple-choice',
  options: [
    { id: '1', text: 'Möglichkeiten zu Rationalisierungen und Einsparungen' },
    { id: '2', text: 'Breitere Kapitalbasis und bessere Finanzierungsmöglichkeiten' },
    { id: '3', text: 'Anspruch auf Marktbereinigungsprämie der EU' },
    { id: '4', text: 'Aufsicht durch das Bundeswirtschaftsministerium' },
    { id: '5', text: 'Geringere Umsatzsteuer' },
    { id: '6', text: 'Verpflichtung zur Änderung der Rechtsform' },
  ],
  answerStatus: 'unclear',
  sourcePage: 9,
}

const q29: WisoExamQuestion = {
  id: 'wiso-2025-winter-q29',
  examId: 'wiso-2025-winter',
  questionNumber: 29,
  topic: 'Emissionen / Umweltschutz',
  scenario: SCENARIO_GENERAL,
  question:
    'Im Lager der EcoTech GmbH werden zu hohe umweltbelastende Emissionen festgestellt. Welche der folgenden Aussagen ist in diesem Zusammenhang richtig? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
  type: 'single-choice',
  options: [
    { id: '1', text: 'Emissionen entstehen in der EcoTech GmbH ausschließlich durch den Transport von Waren zwischen verschiedenen Lagerorten.' },
    { id: '2', text: 'Zu den umweltbelastenden Emissionen gehören neben umweltschädlichen Abgasen auch mögliche Schallemissionen und Elektrosmog/Strahlung.' },
    { id: '3', text: 'Emissionen können durch den Bau höherer Schornsteine für Abgase der EcoTech GmbH reduziert oder vermieden werden.' },
    { id: '4', text: 'Für die Luftreinhaltung ist gemäß Bundesemissionsschutzgesetz die Sicherheitsbeauftragte der EcoTech GmbH zuständig.' },
    { id: '5', text: 'Die Verringerung der Emissionen in der EcoTech GmbH ist wichtiger als deren Vermeidung.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 9,
}

const q30: WisoExamQuestion = {
  id: 'wiso-2025-winter-q30',
  examId: 'wiso-2025-winter',
  questionNumber: 30,
  topic: 'Umweltzeichen "Blauer Engel"',
  scenario: SCENARIO_GENERAL,
  question:
    'Auf den Waren der EcoTech GmbH sehen Sie das Umweltzeichen „Blauer Engel". (Auf der Seite ist das Logo des Umweltzeichens „Blauer Engel – Das Umweltzeichen" abgebildet.) Welche der folgenden Aussagen über die Bedeutung dieses Zeichens trifft zu? Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.\n\nDiese Ware …',
  type: 'single-choice',
  options: [
    { id: '1', text: 'ist besonders haltbar.' },
    { id: '2', text: 'ist besonders sicher in der Handhabung.' },
    { id: '3', text: 'ist aus schadstoffarmen Rohstoffen und umweltschonend produziert worden.' },
    { id: '4', text: 'hat bereits mehrere Umweltpreise gewonnen.' },
    { id: '5', text: 'ist nach ihrer Benutzung ausschließlich über das Duale System zu entsorgen.' },
  ],
  answerStatus: 'unclear',
  sourcePage: 10,
}

export const wisoExam2025WinterQuestions: WisoExamQuestion[] = [
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
