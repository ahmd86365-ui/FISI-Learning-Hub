import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "30. SOZIALVERSICHERUNG" (the five Zweige and
 * their assigned purpose). WISO.md is the sole source of truth — nothing
 * here contradicts or extends its facts. Exercises are original IHK-style
 * practice questions applying exactly the given assignment table.
 */

const TOPIC_SLUG = 'sozialversicherung'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-sozvers-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Aus wie vielen Versicherungszweigen besteht die gesetzliche Sozialversicherung?',
    options: [
      { id: 'a', text: 'Drei' },
      { id: 'b', text: 'Vier' },
      { id: 'c', text: 'Fünf' },
    ],
    correctAnswer: 'c',
    explanation: 'Die gesetzliche Sozialversicherung umfasst fünf Zweige: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.',
  },
  {
    id: 'ex-wiso-sozvers-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Versicherungszweig ist für Pflegebedürftigkeit zuständig?',
    options: [
      { id: 'pflege', text: 'Pflegeversicherung' },
      { id: 'kranken', text: 'Krankenversicherung' },
      { id: 'renten', text: 'Rentenversicherung' },
    ],
    correctAnswer: 'pflege',
    explanation: 'Die Pflegeversicherung ist für Pflegebedürftigkeit zuständig.',
  },
  {
    id: 'ex-wiso-sozvers-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Versicherungszweig zahlt das Arbeitslosengeld I?',
    options: [
      { id: 'alv', text: 'Arbeitslosenversicherung' },
      { id: 'rv', text: 'Rentenversicherung' },
      { id: 'uv', text: 'Unfallversicherung' },
    ],
    correctAnswer: 'alv',
    explanation: 'Die Arbeitslosenversicherung ist zuständig für Arbeitslosigkeit, Arbeitslosengeld I sowie Beratung und Förderung.',
  },
  {
    id: 'ex-wiso-sozvers-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Versicherungszweig deckt Arbeitsunfälle, Wegeunfälle und Berufskrankheiten ab?',
    options: [
      { id: 'uv', text: 'Unfallversicherung' },
      { id: 'kv', text: 'Krankenversicherung' },
      { id: 'rv', text: 'Rentenversicherung' },
    ],
    correctAnswer: 'uv',
    explanation: 'Die Unfallversicherung ist zuständig für Arbeitsunfälle, Wegeunfälle und Berufskrankheiten.',
  },
  {
    id: 'ex-wiso-sozvers-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Versicherungszweig ist für die Altersrente zuständig?',
    options: [
      { id: 'rv', text: 'Rentenversicherung' },
      { id: 'kv', text: 'Krankenversicherung' },
      { id: 'pv', text: 'Pflegeversicherung' },
    ],
    correctAnswer: 'rv',
    explanation: 'Die Rentenversicherung ist zuständig für Altersrente, Erwerbsminderungsrente und Hinterbliebenenleistungen.',
  },
  {
    id: 'ex-wiso-sozvers-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welcher Versicherungszweig ist für die medizinische Versorgung bei Krankheit zuständig?',
    options: [
      { id: 'kv', text: 'Krankenversicherung' },
      { id: 'pv', text: 'Pflegeversicherung' },
      { id: 'uv', text: 'Unfallversicherung' },
    ],
    correctAnswer: 'kv',
    explanation: 'Die Krankenversicherung ist zuständig für Krankheit und medizinische Versorgung.',
  },
]

export const sozialversicherungTopic: Topic = {
  id: 'topic-wiso-sozialversicherung',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Sozialversicherung im Überblick',
  shortIntro: 'Die fünf Zweige der gesetzlichen Sozialversicherung und wofür jeder zuständig ist.',
  order: 14,
  keyPoints: [
    'Die gesetzliche Sozialversicherung umfasst fünf Zweige: Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Fünf Versicherungszweige' },
    {
      type: 'paragraph',
      text: 'Die gesetzliche Sozialversicherung umfasst grundsätzlich fünf wichtige Versicherungszweige.',
    },
    {
      type: 'list',
      style: 'numbered',
      items: ['Krankenversicherung', 'Pflegeversicherung', 'Rentenversicherung', 'Arbeitslosenversicherung', 'Unfallversicherung'],
    },
    { type: 'illustration', component: 'sozialversicherung-overview', caption: 'Die fünf Säulen der gesetzlichen Sozialversicherung.' },

    { type: 'heading', level: 2, text: 'Wichtige Zuordnung' },
    {
      type: 'table',
      headers: ['Versicherungszweig', 'Zuständigkeit'],
      rows: [
        ['Krankenversicherung', 'Krankheit, medizinische Versorgung'],
        ['Pflegeversicherung', 'Pflegebedürftigkeit'],
        ['Rentenversicherung', 'Altersrente, Erwerbsminderungsrente, Hinterbliebenenleistungen'],
        ['Arbeitslosenversicherung', 'Arbeitslosigkeit, Arbeitslosengeld I, Beratung und Förderung'],
        ['Unfallversicherung', 'Arbeitsunfälle, Wegeunfälle, Berufskrankheiten'],
      ],
    },
  ],
}
