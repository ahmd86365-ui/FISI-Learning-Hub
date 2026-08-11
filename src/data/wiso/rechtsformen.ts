import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "7. RECHTSFORMEN". WISO.md is the sole source of
 * truth — nothing here contradicts or extends its facts. Exercises are
 * original IHK-style practice questions applying exactly the classification
 * given in that section.
 */

const TOPIC_SLUG = 'rechtsformen'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-recht-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche der folgenden Rechtsformen ist eine Personengesellschaft?',
    options: [
      { id: 'ohg', text: 'OHG' },
      { id: 'gmbh', text: 'GmbH' },
      { id: 'ag', text: 'AG' },
    ],
    correctAnswer: 'ohg',
    explanation: 'Personengesellschaften sind u. a. OHG und KG. GmbH und AG sind Kapitalgesellschaften.',
  },
  {
    id: 'ex-wiso-recht-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche der folgenden Rechtsformen ist eine Kapitalgesellschaft?',
    options: [
      { id: 'kg', text: 'KG' },
      { id: 'gmbh', text: 'GmbH' },
      { id: 'ohg', text: 'OHG' },
    ],
    correctAnswer: 'gmbh',
    explanation: 'Kapitalgesellschaften sind u. a. GmbH, AG und UG. KG und OHG sind Personengesellschaften.',
  },
  {
    id: 'ex-wiso-recht-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was steht bei einer Kapitalgesellschaft stärker im Mittelpunkt?',
    options: [
      { id: 'personen', text: 'Die beteiligten Personen' },
      { id: 'kapital', text: 'Kapital und Gesellschaftsvermögen' },
    ],
    correctAnswer: 'kapital',
    explanation: 'Bei einer Kapitalgesellschaft stehen Kapital und Gesellschaftsvermögen stärker im Mittelpunkt.',
  },
  {
    id: 'ex-wiso-recht-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Die UG ist eine Personengesellschaft.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Die UG ist laut WISO.md eine Kapitalgesellschaft, keine Personengesellschaft.',
  },
  {
    id: 'ex-wiso-recht-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was steht bei einer Personengesellschaft stärker im Mittelpunkt?',
    options: [
      { id: 'personen', text: 'Die beteiligten Personen' },
      { id: 'kapital', text: 'Kapital und Gesellschaftsvermögen' },
    ],
    correctAnswer: 'personen',
    explanation: 'Bei einer Personengesellschaft stehen die Personen stärker im Mittelpunkt.',
  },
  {
    id: 'ex-wiso-recht-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche zwei Rechtsformen sind Beispiele für Personengesellschaften?',
    options: [
      { id: 'a', text: 'OHG und KG' },
      { id: 'b', text: 'GmbH und AG' },
      { id: 'c', text: 'AG und UG' },
    ],
    correctAnswer: 'a',
    explanation: 'OHG und KG sind die genannten Beispiele für Personengesellschaften.',
  },
]

export const rechtsformenTopic: Topic = {
  id: 'topic-wiso-rechtsformen',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Rechtsformen von Unternehmen',
  shortIntro: 'Personengesellschaften und Kapitalgesellschaften – und der zentrale Unterschied zwischen beiden.',
  order: 6,
  keyPoints: [
    'Personengesellschaften: OHG, KG.',
    'Kapitalgesellschaften: GmbH, AG, UG.',
    'Personengesellschaft → Personen stehen stärker im Mittelpunkt.',
    'Kapitalgesellschaft → Kapital und Gesellschaftsvermögen stehen stärker im Mittelpunkt.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Personengesellschaften und Kapitalgesellschaften' },
    {
      type: 'paragraph',
      text: 'Unternehmen können unterschiedliche Rechtsformen haben. Wichtig sind insbesondere Personengesellschaften und Kapitalgesellschaften.',
    },
    {
      type: 'table',
      headers: ['Personengesellschaften', 'Kapitalgesellschaften'],
      rows: [['OHG', 'GmbH'], ['KG', 'AG'], ['', 'UG']],
    },
    {
      type: 'key-points',
      items: [
        'Personengesellschaft → Personen stehen stärker im Mittelpunkt.',
        'Kapitalgesellschaft → Kapital und Gesellschaftsvermögen stehen stärker im Mittelpunkt.',
      ],
    },
  ],
}
