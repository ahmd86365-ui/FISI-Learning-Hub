import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, LESSON 2 – TROUBLESHOOTING (lines 1436-1505).
 * IT_Englisch.md is the sole source of truth — nothing here contradicts or
 * extends its vocabulary, process steps, or example sentences. Exercises
 * are original practice questions applying exactly the content given in
 * that source. The `troubleshooting-process-flow` illustration is built
 * separately and visualizes the 8-step process listed below; it does not
 * add any new facts beyond the numbered list also present in this file.
 */

const TOPIC_SLUG = 'troubleshooting-process'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-fisi-trouble-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the German translation of "workaround"?',
    options: [
      { id: 'a', text: 'Übergangslösung' },
      { id: 'b', text: 'Fehlerbehebung' },
      { id: 'c', text: 'Wiederherstellung' },
    ],
    correctAnswer: 'a',
    explanation: 'workaround — Übergangslösung.',
  },
  {
    id: 'ex-eng-fisi-trouble-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the first step of the troubleshooting process?',
    options: [
      { id: 'a', text: 'Identify the problem.' },
      { id: 'b', text: 'Gather information.' },
      { id: 'c', text: 'Apply a solution.' },
    ],
    correctAnswer: 'a',
    explanation: '1. Identify the problem. → Problem identifizieren.',
  },
  {
    id: 'ex-eng-fisi-trouble-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'The last step of the troubleshooting process is "Document the problem and solution."',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: '8. Document the problem and solution. → Problem und Lösung dokumentieren.',
  },
  {
    id: 'ex-eng-fisi-trouble-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which step comes directly after "Test the connection." in the troubleshooting process?',
    options: [
      { id: 'a', text: 'Identify the cause.' },
      { id: 'b', text: 'Apply a solution.' },
      { id: 'c', text: 'Gather information.' },
    ],
    correctAnswer: 'a',
    explanation: '4. Test the connection. → 5. Identify the cause.',
  },
  {
    id: 'ex-eng-fisi-trouble-05',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'medium',
    question: 'Complete: "Have you tried ____ the computer?"',
    correctAnswer: 'restarting',
    explanation: 'Have you tried restarting the computer? → Haben Sie versucht, den Computer neu zu starten?',
  },
  {
    id: 'ex-eng-fisi-trouble-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'What is the English term for "diagnostizieren"?',
    options: [
      { id: 'a', text: 'diagnose' },
      { id: 'b', text: 'investigate' },
      { id: 'c', text: 'reproduce' },
    ],
    correctAnswer: 'a',
    explanation: 'diagnose — diagnostizieren.',
  },
  {
    id: 'ex-eng-fisi-trouble-07',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '"reproduce" means "reparieren".',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: 'reproduce — reproduzieren. repair — reparieren.',
  },
  {
    id: 'ex-eng-fisi-trouble-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which question asks whether a problem happens consistently?',
    options: [
      { id: 'a', text: 'Does the problem occur every time?' },
      { id: 'b', text: 'When did the problem start?' },
      { id: 'c', text: 'What exactly is not working?' },
    ],
    correctAnswer: 'a',
    explanation: 'Does the problem occur every time? → Tritt das Problem jedes Mal auf?',
  },
]

export const troubleshootingProcessTopic: Topic = {
  id: 'topic-eng-fisi-troubleshooting',
  slug: TOPIC_SLUG,
  moduleSlug: 'technical-english-fisi',
  title: 'Troubleshooting',
  shortIntro: 'Der 8-stufige Troubleshooting-Prozess und das englische Vokabular für die Fehlersuche.',
  order: 2,
  keyPoints: [
    'Der Troubleshooting-Prozess umfasst 8 Schritte von "Identify the problem" bis "Document the problem and solution".',
    'fault und failure bedeuten beide "Fehler", workaround ist dagegen nur eine Übergangslösung.',
    'Typische Diagnosefragen sind "What exactly is not working?" und "When did the problem start?".',
    'Am Ende jedes Prozesses steht die Dokumentation von Problem und Lösung.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Troubleshooting – Vocabulary' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['troubleshoot', 'Fehler suchen / beheben'],
        ['diagnose', 'diagnostizieren'],
        ['identify', 'identifizieren'],
        ['investigate', 'untersuchen'],
        ['reproduce', 'reproduzieren'],
        ['cause', 'Ursache'],
        ['symptom', 'Symptom'],
        ['fault', 'Fehler / Defekt'],
        ['failure', 'Fehler / Ausfall'],
        ['solution', 'Lösung'],
        ['workaround', 'Übergangslösung'],
        ['fix', 'Fehlerbehebung'],
        ['test', 'testen'],
        ['check', 'überprüfen'],
        ['replace', 'ersetzen'],
        ['repair', 'reparieren'],
        ['restart', 'neu starten'],
        ['reboot', 'neu starten'],
        ['restore', 'wiederherstellen'],
      ],
    },
    { type: 'heading', level: 3, text: 'Troubleshooting Process' },
    {
      type: 'illustration',
      component: 'troubleshooting-process-flow',
      caption: 'Der 8-stufige Troubleshooting-Prozess: Identify the problem → Gather information → Check the obvious causes → Test the connection → Identify the cause → Apply a solution → Test the solution → Document the problem and solution.',
    },
    {
      type: 'list',
      style: 'numbered',
      items: [
        'Identify the problem. → Problem identifizieren.',
        'Gather information. → Informationen sammeln.',
        'Check the obvious causes. → Offensichtliche Ursachen überprüfen.',
        'Test the connection. → Die Verbindung testen.',
        'Identify the cause. → Die Ursache identifizieren.',
        'Apply a solution. → Eine Lösung anwenden.',
        'Test the solution. → Die Lösung testen.',
        'Document the problem and solution. → Problem und Lösung dokumentieren.',
      ],
    },
    { type: 'heading', level: 3, text: 'Useful Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['What exactly is not working?', 'Was genau funktioniert nicht?'],
        ['When did the problem start?', 'Wann hat das Problem angefangen?'],
        ['Does the problem occur every time?', 'Tritt das Problem jedes Mal auf?'],
        ['Have you tried restarting the computer?', 'Haben Sie versucht, den Computer neu zu starten?'],
        ['The problem appears to be related to the network.', 'Das Problem scheint mit dem Netzwerk zusammenzuhängen.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'Die 8 Schritte laufen immer in derselben Reihenfolge ab: erst identifizieren, dann testen, dann dokumentieren.',
        'workaround ist keine endgültige Lösung, sondern nur eine Übergangslösung.',
        'restart und reboot sind synonym: beide bedeuten "neu starten".',
        'Diagnosefragen wie "What exactly is not working?" gehören zum Schritt "Gather information".',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Lerne die 8 Schritte in der exakten Reihenfolge auswendig – Prüfungsfragen fragen oft gezielt danach, welcher Schritt vor oder nach einem anderen kommt.',
    },
  ],
}
