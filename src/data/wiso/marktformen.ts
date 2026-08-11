import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "2. MARKT UND MARKTFORMEN" (Polypol, Oligopol,
 * Monopol). WISO.md is the sole source of truth — nothing here contradicts
 * or extends its facts. Exercises are original IHK-style practice questions
 * applying exactly the definitions given in that section.
 */

const TOPIC_SLUG = 'marktformen'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-markt-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Viele Anbieter treffen auf viele Nachfrager. Um welche Marktform handelt es sich?',
    options: [
      { id: 'polypol', text: 'Polypol' },
      { id: 'oligopol', text: 'Oligopol' },
      { id: 'monopol', text: 'Monopol' },
    ],
    correctAnswer: 'polypol',
    explanation: 'Beim Polypol treffen viele Anbieter auf viele Nachfrager.',
  },
  {
    id: 'ex-wiso-markt-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Ein Anbieter steht vielen Nachfragern gegenüber. Wie heißt diese Marktform?',
    options: [
      { id: 'polypol', text: 'Polypol' },
      { id: 'oligopol', text: 'Oligopol' },
      { id: 'monopol', text: 'Monopol' },
    ],
    correctAnswer: 'monopol',
    explanation: 'Beim Monopol steht ein Anbieter vielen Nachfragern gegenüber.',
  },
  {
    id: 'ex-wiso-markt-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Wenige Anbieter treffen auf viele Nachfrager. Wie heißt diese Marktform?',
    options: [
      { id: 'polypol', text: 'Polypol' },
      { id: 'oligopol', text: 'Oligopol' },
      { id: 'monopol', text: 'Monopol' },
    ],
    correctAnswer: 'oligopol',
    explanation: 'Beim Oligopol treffen wenige Anbieter auf viele Nachfrager.',
  },
  {
    id: 'ex-wiso-markt-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Beim Polypol ist der Wettbewerb in der Regel stärker als beim Oligopol.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Beim Polypol herrscht starker Wettbewerb; beim Oligopol ist der Wettbewerb geringer als beim Polypol.',
  },
  {
    id: 'ex-wiso-markt-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wie werden Käufer auf einem Markt bezeichnet?',
    options: [
      { id: 'anbieter', text: 'Anbieter' },
      { id: 'nachfrager', text: 'Nachfrager' },
    ],
    correctAnswer: 'nachfrager',
    explanation: 'Nachfrager sind die Kunden bzw. Käufer auf einem Markt.',
  },
  {
    id: 'ex-wiso-markt-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was bezeichnet der Begriff „Anbieter"?',
    options: [
      { id: 'a', text: 'Verkäufer / Unternehmen' },
      { id: 'b', text: 'Kunden / Käufer' },
    ],
    correctAnswer: 'a',
    explanation: 'Anbieter = Verkäufer / Unternehmen. Nachfrager = Kunden / Käufer.',
  },
]

export const marktformenTopic: Topic = {
  id: 'topic-wiso-marktformen',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Markt und Marktformen',
  shortIntro: 'Polypol, Oligopol und Monopol – wie viele Anbieter auf wie viele Nachfrager treffen.',
  order: 2,
  keyPoints: [
    'Polypol = viele Anbieter + viele Nachfrager.',
    'Oligopol = wenige Anbieter + viele Nachfrager.',
    'Monopol = ein Anbieter + viele Nachfrager.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist ein Markt?' },
    {
      type: 'paragraph',
      text: 'Ein Markt ist der Ort bzw. der Bereich, in dem Angebot und Nachfrage zusammentreffen.',
    },
    {
      type: 'table',
      headers: ['Begriff', 'Bedeutung'],
      rows: [
        ['Anbieter', 'Verkäufer / Unternehmen'],
        ['Nachfrager', 'Kunden / Käufer'],
        ['Angebot', 'angebotene Waren oder Dienstleistungen'],
        ['Nachfrage', 'Nachfrage der Kunden nach Waren oder Dienstleistungen'],
      ],
    },

    { type: 'heading', level: 3, text: 'Polypol' },
    {
      type: 'paragraph',
      text: 'Viele Anbieter treffen auf viele Nachfrager.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['viele Anbieter', 'viele Nachfrager', 'starker Wettbewerb'],
    },

    { type: 'heading', level: 3, text: 'Oligopol' },
    {
      type: 'paragraph',
      text: 'Wenige Anbieter treffen auf viele Nachfrager.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['begrenzte Anzahl von Anbietern', 'viele Nachfrager', 'Wettbewerb ist geringer als beim Polypol'],
    },

    { type: 'heading', level: 3, text: 'Monopol' },
    {
      type: 'paragraph',
      text: 'Ein Anbieter steht vielen Nachfragern gegenüber.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['nur ein Anbieter', 'viele Nachfrager', 'keine bzw. kaum direkte Konkurrenz'],
    },

    { type: 'illustration', component: 'market-forms-diagram', caption: 'Polypol, Oligopol und Monopol im Vergleich: die Anzahl der Anbieter sinkt, die Nachfragerseite bleibt breit.' },

    { type: 'heading', level: 2, text: 'Vergleich' },
    {
      type: 'table',
      headers: ['Marktform', 'Anbieter', 'Nachfrager'],
      rows: [
        ['Polypol', 'viele', 'viele'],
        ['Oligopol', 'wenige', 'viele'],
        ['Monopol', 'ein Anbieter', 'viele'],
      ],
    },
  ],
}
