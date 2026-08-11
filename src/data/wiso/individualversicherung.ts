import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "33. INDIVIDUALVERSICHERUNG". WISO.md is the
 * sole source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'individualversicherung'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-indiv-01',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Eine Individualversicherung ist eine gesetzliche Pflichtversicherung.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Eine Individualversicherung ist gerade keine gesetzliche Pflichtversicherung, sondern ein freiwilliger privater Versicherungsvertrag.',
  },
  {
    id: 'ex-wiso-indiv-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Wie entsteht eine Individualversicherung?',
    options: [
      { id: 'a', text: 'Durch eine freiwillige vertragliche Vereinbarung' },
      { id: 'b', text: 'Durch gesetzliche Pflicht' },
      { id: 'c', text: 'Automatisch bei Arbeitsaufnahme' },
    ],
    correctAnswer: 'a',
    explanation: 'Eine Individualversicherung entsteht grundsätzlich durch eine freiwillige vertragliche Vereinbarung zwischen Versicherungsnehmer und Versicherungsunternehmen.',
  },
  {
    id: 'ex-wiso-indiv-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Zwischen wem wird bei einer Individualversicherung der Vertrag geschlossen?',
    options: [
      { id: 'a', text: 'Versicherungsnehmer und Versicherungsunternehmen' },
      { id: 'b', text: 'Staat und Bürger' },
      { id: 'c', text: 'Arbeitgeber und Berufsgenossenschaft' },
    ],
    correctAnswer: 'a',
    explanation: 'Die Individualversicherung entsteht durch eine Vereinbarung zwischen Versicherungsnehmer und Versicherungsunternehmen.',
  },
  {
    id: 'ex-wiso-indiv-04',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'easy',
    question: 'Individualversicherung = freiwilliger privater Versicherungsvertrag.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Merksatz: Individualversicherung → freiwilliger privater Versicherungsvertrag.',
  },
]

export const individualversicherungTopic: Topic = {
  id: 'topic-wiso-individualversicherung',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Individualversicherung',
  shortIntro: 'Der freiwillige private Versicherungsvertrag – abgegrenzt von der gesetzlichen Pflichtversicherung.',
  order: 17,
  keyPoints: [
    'Individualversicherung → freiwilliger privater Versicherungsvertrag.',
    'Nicht mit gesetzlicher Pflichtversicherung verwechseln.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist eine Individualversicherung?' },
    {
      type: 'paragraph',
      text: 'Eine Individualversicherung entsteht grundsätzlich durch eine freiwillige vertragliche Vereinbarung zwischen Versicherungsnehmer und Versicherungsunternehmen.',
    },
    {
      type: 'exam-tip',
      text: 'Individualversicherung → freiwilliger privater Versicherungsvertrag. Nicht mit der gesetzlichen Pflichtversicherung verwechseln.',
    },
  ],
}
