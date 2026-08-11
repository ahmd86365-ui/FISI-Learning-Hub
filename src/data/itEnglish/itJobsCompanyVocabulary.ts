import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, Unit 1, Lesson 1 (IT Jobs / IT-Berufe) and
 * Lesson 2 (Company and Workplace Vocabulary). IT_Englisch.md is the sole
 * source of truth for this content — nothing here contradicts or extends
 * its vocabulary or example sentences. Exercises are original practice
 * questions applying exactly the terms and sentences given in that source.
 */

const TOPIC_SLUG = 'it-jobs-company-vocabulary'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-jobs-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which job title matches this description: "looks after databases"?',
    options: [
      { id: 'dba', text: 'Database administrator' },
      { id: 'pm', text: 'Project manager' },
      { id: 'sa', text: 'Systems analyst' },
    ],
    correctAnswer: 'dba',
    explanation: 'A database administrator looks after databases. → Ein Datenbankadministrator kümmert sich um Datenbanken.',
  },
  {
    id: 'ex-eng-jobs-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Who "manages a team of helpdesk workers"?',
    options: [
      { id: 'sup', text: 'Support technician' },
      { id: 'hs', text: 'Helpdesk supervisor' },
      { id: 'sd', text: 'Software developer' },
    ],
    correctAnswer: 'hs',
    explanation: 'A helpdesk supervisor manages a team of helpdesk workers. → Ein Helpdesk-Supervisor leitet ein Team von Helpdesk-Mitarbeitern.',
  },
  {
    id: 'ex-eng-jobs-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which job "writes specifications for software"?',
    options: [
      { id: 'sa', text: 'Systems analyst' },
      { id: 'sd', text: 'Software developer' },
      { id: 'pm', text: 'Project manager' },
    ],
    correctAnswer: 'sa',
    explanation: 'A systems analyst analyses systems and writes specifications for software.',
  },
  {
    id: 'ex-eng-jobs-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'A software developer writes software.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'true',
    explanation: 'A software developer writes software. → Ein Softwareentwickler entwickelt/schreibt Software.',
  },
  {
    id: 'ex-eng-jobs-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "suppliers"?',
    options: [
      { id: 'a', text: 'Kunden' },
      { id: 'b', text: 'Lieferanten' },
      { id: 'c', text: 'Einrichtungen' },
    ],
    correctAnswer: 'b',
    explanation: 'suppliers → Lieferanten. (clients → Kunden, facilities → Einrichtungen/Anlagen)',
  },
  {
    id: 'ex-eng-jobs-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Complete the sentence: "Passwords must be eight or more ____ long."',
    options: [
      { id: 'a', text: 'characters' },
      { id: 'b', text: 'minutes' },
      { id: 'c', text: 'clients' },
    ],
    correctAnswer: 'a',
    explanation: 'Passwords must be eight or more characters long. → Passwörter müssen mindestens acht Zeichen lang sein.',
  },
  {
    id: 'ex-eng-jobs-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'Which sentence is grammatically correct?',
    options: [
      { id: 'a', text: '"I\'m usually at my desk but I occasionally go out to visit a supplier."' },
      { id: 'b', text: '"I\'m usually at my desk but I occasionally goes out to visit a supplier."' },
    ],
    correctAnswer: 'a',
    explanation: 'With "I", the base verb form is used: "I go out", not "I goes out".',
  },
  {
    id: 'ex-eng-jobs-08',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Fill in the missing word: "Read the ____ before the meeting." (Tagesordnung)',
    correctAnswer: 'agenda',
    explanation: 'Read the agenda before the meeting. → Lies die Tagesordnung vor dem Meeting.',
  },
]

export const itJobsCompanyVocabularyTopic: Topic = {
  id: 'topic-eng-grundlagen-jobs-company',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'IT Jobs & Company Vocabulary',
  shortIntro: 'IT-Berufe und Vokabular rund um Unternehmen und Arbeitsplatz – die Grundlage für Unit 1.',
  order: 1,
  keyPoints: [
    'A database administrator looks after databases.',
    'A systems analyst writes specifications for software.',
    'A project manager manages projects.',
    'A helpdesk supervisor manages a team of helpdesk workers.',
    'A support technician maintains and repairs computers.',
    'A software developer writes software.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'IT Jobs / IT-Berufe' },
    {
      type: 'paragraph',
      text: 'Diese Lektion stellt die wichtigsten IT-Berufsbezeichnungen vor – mit ihrer Bedeutung auf Englisch und den passenden deutschen Übersetzungen.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch', 'Meaning'],
      rows: [
        ['Support technician', 'Supporttechniker / IT-Supporttechniker', 'Maintains and repairs computers and helps users with technical problems.'],
        ['Systems analyst', 'Systemanalytiker', 'Analyses systems and writes specifications for software.'],
        ['Project manager', 'Projektmanager', 'Manages projects.'],
        ['Helpdesk supervisor', 'Helpdesk-Leiter / Helpdesk-Supervisor', 'Manages a team of helpdesk workers.'],
        ['Database administrator', 'Datenbankadministrator', 'Looks after databases.'],
        ['Software developer', 'Softwareentwickler', 'Writes software.'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['A database administrator looks after databases.', 'Ein Datenbankadministrator kümmert sich um Datenbanken.'],
        ['A systems analyst writes specifications for software.', 'Ein Systemanalytiker erstellt Spezifikationen für Software.'],
        ['A project manager manages projects.', 'Ein Projektmanager leitet Projekte.'],
        ['A helpdesk supervisor manages a team of helpdesk workers.', 'Ein Helpdesk-Supervisor leitet ein Team von Helpdesk-Mitarbeitern.'],
        ['A support technician maintains computers.', 'Ein Supporttechniker wartet Computer.'],
        ['A software developer writes software.', 'Ein Softwareentwickler entwickelt/schreibt Software.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Company and Workplace Vocabulary' },
    {
      type: 'paragraph',
      text: 'Vokabular für den Arbeitsalltag im Unternehmen – von der Tagesordnung bis zu Kunden und Lieferanten.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['company', 'Unternehmen / Firma'],
        ['facilities', 'Einrichtungen / Anlagen'],
        ['production', 'Produktion'],
        ['clients', 'Kunden'],
        ['suppliers', 'Lieferanten'],
        ['agenda', 'Tagesordnung'],
        ['characters', 'Zeichen'],
        ['data', 'Daten'],
        ['minutes', 'Minuten'],
        ['normally', 'normalerweise'],
        ['occasionally', 'gelegentlich'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Sentences' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Read the agenda before the meeting.', 'Lies die Tagesordnung vor dem Meeting.'],
        ['The company has many clients in different countries.', 'Das Unternehmen hat viele Kunden in verschiedenen Ländern.'],
        ['Passwords must be eight or more characters long.', 'Passwörter müssen mindestens acht Zeichen lang sein.'],
        [
          "I'm usually at my desk but I occasionally go out to visit a supplier.",
          'Ich bin normalerweise an meinem Schreibtisch, aber manchmal gehe ich raus, um einen Lieferanten zu besuchen.',
        ],
      ],
    },
    {
      type: 'exam-tip',
      text: 'Merke dir die sechs IT-Berufsbezeichnungen zusammen mit ihrer Kernaufgabe (ein Satz pro Beruf) – das ist eine typische Prüfungsfrage.',
    },
  ],
}
