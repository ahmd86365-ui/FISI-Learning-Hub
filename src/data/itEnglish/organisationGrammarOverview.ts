import type { Exercise, Topic } from '../../types/content'

/**
 * Source: IT_Englisch.md, sections "Organisational Structure – Marketing
 * Department", "Most Important Grammar – Gesamtübersicht", "Important
 * Prepositions", "Important Exam Sentence Patterns" and "Final Exam
 * Checklist" (end of the Units 1–3 study summary). IT_Englisch.md is the
 * sole source of truth — nothing here contradicts or extends its facts.
 * The grammar overview here is a condensed reference table of rules
 * already taught in full in the other Grundlagen topics (Present Simple,
 * word order, purpose/reason, relative pronouns, First Conditional);
 * exercises are original practice questions applying exactly the content
 * of that source.
 */

const TOPIC_SLUG = 'organisation-grammar-overview'

const exercises: Exercise[] = [
  {
    id: 'ex-eng-org-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In the worksheet\'s organisational chart, who is the Managing Director?',
    options: [
      { id: 'a', text: 'Shane Walsh' },
      { id: 'b', text: 'Jack Carter' },
      { id: 'c', text: 'Eric White' },
    ],
    correctAnswer: 'a',
    explanation: 'Shane Walsh — Managing Director.',
  },
  {
    id: 'ex-eng-org-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Who is the Head of Market Research?',
    options: [
      { id: 'a', text: 'John Dixon' },
      { id: 'b', text: 'Eric White' },
      { id: 'c', text: 'Steve Gomez' },
    ],
    correctAnswer: 'a',
    explanation: 'John Dixon — Head of Market Research. Eric White is Head of Communications; Steve Gomez is Sales and Distribution.',
  },
  {
    id: 'ex-eng-org-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'What is the German translation of "report to"?',
    options: [
      { id: 'a', text: 'berichten an / unterstehen' },
      { id: 'b', text: 'leiten' },
      { id: 'c', text: 'einstellen' },
    ],
    correctAnswer: 'a',
    explanation: 'report to → berichten an / unterstehen.',
  },
  {
    id: 'ex-eng-org-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Which preposition completes: "Insert the cable ____ the socket."?',
    options: [
      { id: 'into', text: 'into' },
      { id: 'from', text: 'from' },
      { id: 'at', text: 'at' },
    ],
    correctAnswer: 'into',
    explanation: 'into → in / hinein: Insert the cable into the socket.',
  },
  {
    id: 'ex-eng-org-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Which preposition completes: "Disconnect it ____ the socket."?',
    options: [
      { id: 'from', text: 'from' },
      { id: 'to', text: 'to' },
      { id: 'on', text: 'on' },
    ],
    correctAnswer: 'from',
    explanation: 'from → von: Disconnect it from the socket.',
  },
  {
    id: 'ex-eng-org-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'How do you say "Ich studiere IT" in English?',
    options: [
      { id: 'a', text: 'I study IT.' },
      { id: 'b', text: 'I studies IT.' },
      { id: 'c', text: 'I am study IT.' },
    ],
    correctAnswer: 'a',
    explanation: 'I study IT. → Ich studiere IT.',
  },
  {
    id: 'ex-eng-org-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question: 'How do you correctly say "Ich möchte in Zukunft in der IT-Administration arbeiten"?',
    options: [
      { id: 'a', text: 'I want to work in IT administration in the future.' },
      { id: 'b', text: 'I want work in IT administration in the future.' },
      { id: 'c', text: 'I wants to working in IT administration in the future.' },
    ],
    correctAnswer: 'a',
    explanation: 'I want to work in IT administration in the future. → Ich möchte in Zukunft in der IT-Administration arbeiten.',
  },
  {
    id: 'ex-eng-org-08',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'A Personal Assistant (PA) is the same role as a Managing Director.',
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' },
    ],
    correctAnswer: 'false',
    explanation: 'These are different roles in the organisational chart: e.g. Carol Porter is a Personal Assistant (PA), Shane Walsh is Managing Director.',
  },
  {
    id: 'ex-eng-org-09',
    topicSlug: TOPIC_SLUG,
    type: 'text',
    difficulty: 'easy',
    question: 'Complete the model self-introduction sentence: "My name ___ Ahmad."',
    correctAnswer: 'is',
    explanation: 'My name is Ahmad. → Ich heiße Ahmad.',
  },
]

export const organisationGrammarOverviewTopic: Topic = {
  id: 'topic-eng-grundlagen-org-grammar-overview',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-english-grundlagen',
  title: 'Organisational Structure, Grammar Overview & Exam Checklist',
  shortIntro: 'Marketingabteilung als Organigramm-Beispiel, eine kompakte Grammatik-Gesamtübersicht, wichtige Präpositionen und der finale Prüfungs-Check.',
  order: 8,
  keyPoints: [
    'report to = berichten an / unterstehen; head of = Leiter von.',
    'Present Simple, Do/Does, Negative, Third-person -s, Will, First Conditional, Relative Pronouns, Purpose (to/for), Reason (because) — die 9 wichtigsten Grammatikregeln im Überblick.',
    'into, from, on, off, to, for, with, at, in — die wichtigsten IT-Präpositionen mit Beispielsätzen.',
    'Selbstvorstellung: My name is..., I\'m from..., I live in..., I study IT, I want to work in IT administration in the future.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Organisational Structure — Marketing Department' },
    {
      type: 'paragraph',
      text: 'Ein Organigramm-Beispiel aus dem Unterricht: die Struktur einer Marketingabteilung mit Titeln und Namen.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['Marketing Department', 'Marketingabteilung'],
        ['Managing Director', 'Geschäftsführer / Geschäftsführender Direktor'],
        ['Marketing Director', 'Marketingleiter'],
        ['Head of Communications', 'Leiter der Kommunikation'],
        ['Head of Market Research', 'Leiter der Marktforschung'],
        ['Advertising Manager', 'Werbeleiter'],
        ['PR & Sponsoring Manager', 'PR- und Sponsoring-Manager'],
        ['Social Media Manager', 'Social-Media-Manager'],
        ['Sales and Distribution', 'Vertrieb und Distribution'],
        ['Public Relations Staff', 'PR-Mitarbeiter'],
        ['Personal Assistant (PA)', 'Persönliche Assistenz'],
      ],
    },
    { type: 'heading', level: 3, text: 'Structure from the Worksheet' },
    {
      type: 'table',
      headers: ['Name', 'Position'],
      rows: [
        ['Shane Walsh', 'Managing Director'],
        ['Jack Carter', 'Marketing Director'],
        ['Eric White', 'Head of Communications'],
        ['John Dixon', 'Head of Market Research'],
        ['Steve Gomez', 'Sales and Distribution'],
        ['Robert Blake', 'Advertising Manager'],
        ['Janet Baker', 'PR & Sponsoring Manager'],
        ['Thomas Anderson', 'Social Media Manager'],
        ['Samuel Norton', 'Public Relations Staff'],
        ['Steven Robbins', 'Public Relations Staff'],
        ['Jane Miller', 'Public Relations Staff'],
        ['Carol Porter', 'Personal Assistant (PA)'],
      ],
    },
    { type: 'heading', level: 3, text: 'Important Organisational Language' },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['report to', 'berichten an / unterstehen'],
        ['superior', 'Vorgesetzter / übergeordnet'],
        ['department', 'Abteilung'],
        ['team', 'Team'],
        ['staff', 'Mitarbeiter / Belegschaft'],
        ['manager', 'Manager / Leiter'],
        ['head of', 'Leiter von'],
      ],
    },

    { type: 'heading', level: 2, text: 'Most Important Grammar — Gesamtübersicht' },
    {
      type: 'paragraph',
      text: 'Diese Tabelle fasst die Grammatikregeln aus den vorherigen Lektionen als schnelle Wiederholung zusammen.',
    },
    {
      type: 'table',
      headers: ['Topic', 'Rule', 'Example'],
      rows: [
        ['Present Simple', 'routine, habits, facts, regular activities', 'I work. He works.'],
        ['Do / Does', 'I/you/we/they → do; he/she/it → does', 'Do you work? Does he work?'],
        ['Negative', "do not = don't; does not = doesn't", "I don't work. He doesn't work."],
        ['Third person -s', 'he/she/it + verb + s', 'He manages. She provides. It connects.'],
        ['Will', 'will + base verb', "I'll install the software."],
        ['First Conditional', 'If + Present Simple + will + base verb', "If you follow a link, you'll go to another page."],
        ['Relative pronouns', 'who = people, which = things, that = both, where = places', '—'],
        ['Purpose', 'to + verb; for + noun', 'I use a drive to back up my data. I back up my data for security.'],
        ['Reason', 'because + sentence', "I use open-source software because it's free."],
      ],
    },

    { type: 'heading', level: 2, text: 'Important Prepositions' },
    {
      type: 'table',
      headers: ['Preposition', 'Deutsch', 'Example'],
      rows: [
        ['into', 'in / hinein', 'Insert the cable into the socket.'],
        ['from', 'von', 'Disconnect it from the socket.'],
        ['on', 'auf / an', 'Click on the button.'],
        ['off', 'aus', 'Turn off the computer.'],
        ['to', 'zu / um zu', 'Go to another web page. Use it to back up your data.'],
        ['for', 'für', 'For security.'],
        ['with', 'mit', 'With the right software.'],
        ['at', 'bei / an', 'at the service centre.'],
        ['in', 'in', 'in the office.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Important Exam Sentence Patterns' },
    {
      type: 'paragraph',
      text: 'Feste Sätze für die mündliche Vorstellung und den Arbeitsalltag – sehr nützlich für ein Fachgespräch oder Vorstellungsgespräch.',
    },
    {
      type: 'table',
      headers: ['English', 'Deutsch'],
      rows: [
        ['I work in IT.', 'Ich arbeite im IT-Bereich.'],
        ['I work in the Software Development Department.', 'Ich arbeite in der Softwareentwicklungsabteilung.'],
        ['I check my email.', 'Ich überprüfe meine E-Mail.'],
        ["I'm checking my email now.", 'Ich überprüfe gerade meine E-Mail.'],
        ['Please send me an attachment.', 'Bitte schicken Sie mir einen Anhang.'],
        ['Please write the password.', 'Bitte schreiben Sie das Passwort auf.'],
        ['I am working in the Software Development Department.', 'Ich arbeite gerade in der Softwareentwicklungsabteilung.'],
        ['My name is Ahmad.', 'Ich heiße Ahmad.'],
        ["I'm from Syria.", 'Ich komme aus Syrien.'],
        ['I live in Germany.', 'Ich lebe in Deutschland.'],
        ['I study IT.', 'Ich studiere IT.'],
        ['My hobby is swimming and programming.', 'Meine Hobbys sind Schwimmen und Programmieren.'],
        ['I want to work in IT administration in the future.', 'Ich möchte in Zukunft in der IT-Administration arbeiten.'],
      ],
    },

    { type: 'heading', level: 2, text: 'Final Exam Checklist' },
    {
      type: 'key-points',
      items: [
        'IT job titles',
        'Company vocabulary',
        'IT verbs',
        'Present Simple',
        'Do / Does',
        "Don't / Doesn't",
        'Third-person -s',
        'Word order',
        'Computer hardware',
        'Computer instructions',
        'Prepositions',
        'To / For / So / Because',
        'Internet vocabulary',
        'Who / Which / That / Where',
        'First Conditional',
        'Marketing organisational structure',
        'Job responsibilities',
        'Important IT sentences',
        'Correcting grammar mistakes',
        'Making questions',
        'Making negative sentences',
        'Translating important vocabulary between English and German',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Diese Checkliste stammt direkt aus dem Unterrichtsmaterial (Ende der Units 1–3) und markiert genau die Themen, die laut Lehrmaterial "besonders gut" gelernt werden sollen.',
    },
  ],
}
