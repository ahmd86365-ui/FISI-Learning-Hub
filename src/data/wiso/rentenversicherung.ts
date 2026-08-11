import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "32. RENTENVERSICHERUNG". WISO.md is the sole
 * source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions, including the
 * explicit "nicht verwechseln" traps named in the source.
 */

const TOPIC_SLUG = 'rentenversicherung'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-rv-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche Leistung gehört zur Rentenversicherung?',
    options: [
      { id: 'a', text: 'Erwerbsminderungsrente' },
      { id: 'b', text: 'Krankengeld' },
      { id: 'c', text: 'Arbeitslosengeld I' },
    ],
    correctAnswer: 'a',
    explanation: 'Die Erwerbsminderungsrente gehört zur Rentenversicherung, ebenso Altersrente und Hinterbliebenenrente.',
  },
  {
    id: 'ex-wiso-rv-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Zu welchem Versicherungszweig gehört das Krankengeld?',
    options: [
      { id: 'kv', text: 'Krankenversicherung' },
      { id: 'rv', text: 'Rentenversicherung' },
      { id: 'alv', text: 'Arbeitslosenversicherung' },
    ],
    correctAnswer: 'kv',
    explanation: 'Krankengeld → Krankenversicherung. Nicht mit der Rentenversicherung verwechseln.',
  },
  {
    id: 'ex-wiso-rv-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Zu welchem Versicherungszweig gehört das Arbeitslosengeld I?',
    options: [
      { id: 'alv', text: 'Arbeitslosenversicherung' },
      { id: 'rv', text: 'Rentenversicherung' },
      { id: 'kv', text: 'Krankenversicherung' },
    ],
    correctAnswer: 'alv',
    explanation: 'Arbeitslosengeld I → Arbeitslosenversicherung. Nicht mit der Rentenversicherung verwechseln.',
  },
  {
    id: 'ex-wiso-rv-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Die Hinterbliebenenrente ist eine Leistung der Rentenversicherung.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Die Rentenversicherung bietet unter anderem Altersrente, Erwerbsminderungsrente und Hinterbliebenenrente.',
  },
  {
    id: 'ex-wiso-rv-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche der folgenden Leistungen ist KEINE Leistung der Rentenversicherung?',
    options: [
      { id: 'a', text: 'Altersrente' },
      { id: 'b', text: 'Erwerbsminderungsrente' },
      { id: 'c', text: 'Arbeitslosengeld I' },
    ],
    correctAnswer: 'c',
    explanation: 'Arbeitslosengeld I gehört zur Arbeitslosenversicherung, nicht zur Rentenversicherung.',
  },
]

export const rentenversicherungTopic: Topic = {
  id: 'topic-wiso-rentenversicherung',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Rentenversicherung',
  shortIntro: 'Altersrente, Erwerbsminderungsrente und Hinterbliebenenrente – und was NICHT zur Rentenversicherung gehört.',
  order: 16,
  keyPoints: [
    'Rentenversicherung bietet: Altersrente, Erwerbsminderungsrente, Hinterbliebenenrente.',
    'Krankengeld → Krankenversicherung. Arbeitslosengeld I → Arbeitslosenversicherung.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Leistungen der Rentenversicherung' },
    {
      type: 'paragraph',
      text: 'Die Rentenversicherung bietet unter anderem Leistungen wie:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Altersrente', 'Erwerbsminderungsrente', 'Hinterbliebenenrente'],
    },
    {
      type: 'note',
      text: 'Wichtig aus den Aufgaben: Die Erwerbsminderungsrente gehört zur Rentenversicherung.',
    },

    { type: 'heading', level: 2, text: 'Nicht verwechseln' },
    {
      type: 'exam-tip',
      text: 'Krankengeld → Krankenversicherung. Arbeitslosengeld I → Arbeitslosenversicherung. Beides gehört NICHT zur Rentenversicherung.',
    },
  ],
}
