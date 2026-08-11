import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "10. KG – KOMMANDITGESELLSCHAFT". WISO.md is
 * the sole source of truth — nothing here contradicts or extends its facts.
 * The source explicitly notes that a "4-%-Regelung" for Gewinnverteilung
 * was covered in class without giving its formula, so it is stated as-is
 * below without any invented calculation. Exercises are original IHK-style
 * practice questions.
 */

const TOPIC_SLUG = 'kg'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-kg-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Gesellschafter einer KG haftet grundsätzlich unbeschränkt?',
    options: [
      { id: 'komplementaer', text: 'Der Komplementär' },
      { id: 'kommanditist', text: 'Der Kommanditist' },
    ],
    correctAnswer: 'komplementaer',
    explanation: 'Der Komplementär haftet grundsätzlich unbeschränkt und ist zur Geschäftsführung berechtigt.',
  },
  {
    id: 'ex-wiso-kg-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Gesellschafter einer KG haftet nur beschränkt auf seine Haftsumme?',
    options: [
      { id: 'komplementaer', text: 'Der Komplementär' },
      { id: 'kommanditist', text: 'Der Kommanditist' },
    ],
    correctAnswer: 'kommanditist',
    explanation: 'Der Kommanditist haftet grundsätzlich beschränkt auf seine Haftsumme.',
  },
  {
    id: 'ex-wiso-kg-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Der Kommanditist ist grundsätzlich zur Geschäftsführung berechtigt.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Der Kommanditist ist grundsätzlich nicht zur Geschäftsführung berechtigt.',
  },
  {
    id: 'ex-wiso-kg-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Der Komplementär ist grundsätzlich zur Geschäftsführung berechtigt.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Der Komplementär ist grundsätzlich zur Geschäftsführung berechtigt.',
  },
  {
    id: 'ex-wiso-kg-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Die KG ist eine …',
    options: [
      { id: 'personen', text: 'Personengesellschaft' },
      { id: 'kapital', text: 'Kapitalgesellschaft' },
    ],
    correctAnswer: 'personen',
    explanation: 'Die KG ist eine Personengesellschaft.',
  },
  {
    id: 'ex-wiso-kg-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Aus wie vielen Arten von Gesellschaftern besteht eine KG grundsätzlich?',
    options: [
      { id: 'a', text: 'Einer' },
      { id: 'b', text: 'Zwei' },
      { id: 'c', text: 'Drei' },
    ],
    correctAnswer: 'b',
    explanation: 'Eine KG besteht grundsätzlich aus zwei Arten von Gesellschaftern: Komplementär und Kommanditist.',
  },
]

export const kgTopic: Topic = {
  id: 'topic-wiso-kg',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'KG – Kommanditgesellschaft',
  shortIntro: 'Komplementär und Kommanditist – zwei Arten von Gesellschaftern mit unterschiedlicher Haftung.',
  order: 9,
  keyPoints: [
    'Die KG ist eine Personengesellschaft.',
    'Komplementär = unbeschränkte Haftung, zur Geschäftsführung berechtigt.',
    'Kommanditist = beschränkte Haftung auf seine Haftsumme, nicht zur Geschäftsführung berechtigt.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Zwei Arten von Gesellschaftern' },
    {
      type: 'paragraph',
      text: 'Die KG ist eine Personengesellschaft. Eine KG besteht grundsätzlich aus zwei Arten von Gesellschaftern: dem Komplementär und dem Kommanditisten.',
    },
    {
      type: 'table',
      headers: ['', 'Komplementär', 'Kommanditist'],
      rows: [
        ['Haftung', 'unbeschränkt', 'beschränkt auf die Haftsumme'],
        ['Geschäftsführung', 'grundsätzlich berechtigt', 'grundsätzlich nicht berechtigt'],
      ],
    },
    {
      type: 'note',
      text: 'Merksatz: Komplementär = unbeschränkte Haftung. Kommanditist = beschränkte Haftung.',
    },

    { type: 'heading', level: 2, text: 'Gewinnverteilung' },
    {
      type: 'paragraph',
      text: 'Bei der Gewinnverteilung können vertragliche Regelungen eine wichtige Rolle spielen. Im Unterricht wurde außerdem eine 4-%-Regelung bei der Gewinnverteilung behandelt.',
    },
  ],
}
