import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 1, Lesson 3 (Important IT Verbs), Lesson 4
 * (Present Simple) and Lesson 5 (Word Order). IT_Englisch.md is the sole
 * source of truth — nothing here contradicts or extends its rules,
 * examples or vocabulary. Exercises are original practice questions
 * applying exactly the grammar rules and verbs given in that source.
 */

const TOPIC_SLUG = 'it-verbs-present-simple'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-verbs-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which verb means "diagnostizieren"?',
    options: [
      { id: 'a', text: 'diagnose' },
      { id: 'b', text: 'develop' },
      { id: 'c', text: 'maintain' },
    ],
    correctAnswer: 'a',
    explanation: 'diagnose → diagnostizieren.',
  },
  {
    id: 'ex-eng-verbs-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which combination means "ein Gerät anschließen"?',
    options: [
      { id: 'a', text: 'connect a device' },
      { id: 'b', text: 'repair computers' },
      { id: 'c', text: 'set up new computers' },
    ],
    correctAnswer: 'a',
    explanation: 'connect a device → ein Gerät anschließen.',
  },
  {
    id: 'ex-eng-verbs-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which sentence is correct for the third person singular?',
    options: [
      { id: 'a', text: 'He works in IT.' },
      { id: 'b', text: 'He work in IT.' },
    ],
    correctAnswer: 'a',
    explanation: 'he / she / it + verb + s: He works. She manages. It connects.',
  },
  {
    id: 'ex-eng-verbs-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which question is grammatically correct?',
    options: [
      { id: 'a', text: 'Does he work in IT?' },
      { id: 'b', text: 'Does he works in IT?' },
      { id: 'c', text: 'Do he work in IT?' },
    ],
    correctAnswer: 'a',
    explanation: 'After DOES / DOESN\'T, the base verb is used: "Does he work?" NOT "Does he works?".',
  },
  {
    id: 'ex-eng-verbs-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which auxiliary verb goes with "I / you / we / they"?',
    options: [
      { id: 'do', text: 'do' },
      { id: 'does', text: 'does' },
    ],
    correctAnswer: 'do',
    explanation: 'I / you / we / they → DO. he / she / it → DOES.',
  },
  {
    id: 'ex-eng-verbs-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'The Present Simple is used for routines, habits, facts and permanent situations.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'The Present Simple is used for: routines, habits, facts, regular activities, permanent situations.',
  },
  {
    id: 'ex-eng-verbs-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which word order is correct for a normal English sentence?',
    options: [
      { id: 'a', text: 'Subject + Verb + Object → "I repair computers."' },
      { id: 'b', text: 'Verb + Subject + Object → "Repair I computers."' },
    ],
    correctAnswer: 'a',
    explanation: 'Normal sentence: Subject + Verb + Object. I repair computers. My company sells software.',
  },
  {
    id: 'ex-eng-verbs-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which question word order is correct?',
    options: [
      { id: 'a', text: 'Where does he work?' },
      { id: 'b', text: 'Where he does work?' },
      { id: 'c', text: 'Where works he?' },
    ],
    correctAnswer: 'a',
    explanation: 'Question: Question word + auxiliary + subject + verb → "Where does he work?"',
  },
  {
    id: 'ex-eng-verbs-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which negative sentence is correct for "he"?',
    options: [
      { id: 'a', text: "He doesn't work." },
      { id: 'b', text: "He don't work." },
    ],
    correctAnswer: 'a',
    explanation: 'does not = doesn\'t → "He doesn\'t work."; do not = don\'t is used with I / you / we / they.',
  },
  {
    id: 'ex-eng-verbs-10',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'What is the base verb for "einrichten" used in IT contexts (as in "set up new computers")? Give the two-word phrasal verb.',
    correctAnswer: 'set up',
    explanation: 'set up → einrichten.',
  },
]

export const itVerbsPresentSimpleTopic: Topic = {
  id: 'topic-eng-grundlagen-verbs-present-simple',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'IT Verbs, Present Simple & Word Order',
  shortIntro: 'Die wichtigsten IT-Verben sowie die Grundregeln von Present Simple und Satzstellung.',
  order: 2,
  keyPoints: [
    'I / you / we / they + base verb — he / she / it + verb + s.',
    'Do you work? / Does he work? — after does, the verb stays in the base form.',
    "I don't work. / He doesn't work.",
    'Normal sentence: Subject + Verb + Object.',
    'Question: Question word + auxiliary + subject + verb.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Important IT Verbs' },
    {
      type: 'paragraph',
      text: 'Diese Verben werden in der IT ständig gebraucht – für Support-Tätigkeiten, Wartung und Gerätebedienung.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['carry out', 'durchführen'],
        ['check', 'überprüfen / kontrollieren'],
        ['connect', 'verbinden / anschließen'],
        ['diagnose', 'diagnostizieren'],
        ['provide', 'bereitstellen / anbieten'],
        ['send', 'senden / schicken'],
        ['support', 'unterstützen'],
        ['repair', 'reparieren'],
        ['maintain', 'warten / instand halten'],
        ['develop', 'entwickeln'],
        ['access', 'zugreifen auf'],
        ['browse', 'durchsuchen / surfen'],
        ['save', 'speichern'],
        ['install', 'installieren'],
        ['upgrade', 'aktualisieren / verbessern'],
        ['set up', 'einrichten'],
        ['back up', 'eine Sicherungskopie erstellen'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Combinations' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['check my emails', 'meine E-Mails überprüfen'],
        ['diagnose the problem', 'das Problem diagnostizieren'],
        ['provide support', 'Support bereitstellen'],
        ['support users', 'Benutzer unterstützen'],
        ['carry out a task', 'eine Aufgabe durchführen'],
        ['connect a device', 'ein Gerät anschließen'],
        ['repair computers', 'Computer reparieren'],
        ['maintain computers', 'Computer warten'],
        ['set up new computers', 'neue Computer einrichten'],
      ],
    },

    { type: 'heading', level: 2, text: 'Present Simple' },
    {
      type: 'paragraph',
      text: 'Das Present Simple wird verwendet für: routines, habits, facts, regular activities, permanent situations — auf Deutsch: Gewohnheiten, regelmäßige Handlungen, Fakten, Routinen, dauerhafte Situationen.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['I use a computer every day.', 'Ich benutze jeden Tag einen Computer.'],
        ['I work in IT.', 'Ich arbeite im IT-Bereich.'],
        ['He works in IT.', 'Er arbeitet im IT-Bereich.'],
        ['She manages the project.', 'Sie leitet das Projekt.'],
      ],
    },
    {
      type: 'key-points',
      items: [
        'I / you / we / they + base verb → I work. You work. We work. They work.',
        'he / she / it + verb + s → He works. She works. It works.',
        'Questions: Do you work in IT? / Does he work in IT?',
        "Negative: I don't work. / He doesn't work.",
      ],
    },
    {
      type: 'warning',
      text: 'After DOES / DOESN\'T, always use the base verb. Correct: "Does he work?" Incorrect: "Does he works?"',
    },

    { type: 'heading', level: 2, text: 'Word Order' },
    { type: 'heading', level: 3, text: 'Normal sentence' },
    {
      type: 'paragraph',
      text: 'Subject + Verb + Object.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['I repair computers.', 'My company sells software.', 'I set up new computers.'],
    },
    { type: 'heading', level: 3, text: 'Question' },
    {
      type: 'paragraph',
      text: 'Question word + auxiliary + subject + verb.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Where does he work?', 'Does he work at the service centre?'],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['I repair computers.', 'Ich repariere Computer.'],
        ["I don't answer calls in the office.", 'Ich beantworte keine Anrufe im Büro.'],
        ['You must change your password every month.', 'Du musst dein Passwort jeden Monat ändern.'],
        ['My company sells software.', 'Meine Firma verkauft Software.'],
      ],
    },
    {
      type: 'exam-tip',
      text: 'Präge dir die drei häufigsten Prüfungsfallen ein: (1) Does he WORKS ist falsch, (2) Fragen brauchen die richtige Wortstellung (Fragewort + Hilfsverb + Subjekt + Verb), (3) "he/she/it" bekommt in Aussagesätzen ein -s am Verb.',
    },
  ],
}
