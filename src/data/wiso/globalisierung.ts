import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "36. GLOBALISIERUNG". WISO.md is the sole
 * source of truth — nothing here contradicts or extends its facts.
 * Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'globalisierung'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-glob-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was beschreibt der Begriff Globalisierung?',
    options: [
      { id: 'a', text: 'Die zunehmende internationale Verflechtung von Wirtschaft und Unternehmen' },
      { id: 'b', text: 'Die Verringerung internationaler Handelsbeziehungen' },
      { id: 'c', text: 'Die ausschließliche Konzentration auf den heimischen Markt' },
    ],
    correctAnswer: 'a',
    explanation: 'Globalisierung beschreibt die zunehmende internationale Verflechtung von Wirtschaft und Unternehmen.',
  },
  {
    id: 'ex-wiso-glob-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Maßnahme fördert die Globalisierung?',
    options: [
      { id: 'a', text: 'Offenheit für ausländische Investitionen im Inland und deutsche Investitionen im Ausland' },
      { id: 'b', text: 'Höhere Importzölle' },
      { id: 'c', text: 'Stärkere Abschottung' },
    ],
    correctAnswer: 'a',
    explanation: 'Eine Maßnahme, die Globalisierung fördert, ist die Offenheit für Investitionen ausländischer Unternehmen im Inland und deutscher Unternehmen im Ausland.',
  },
  {
    id: 'ex-wiso-glob-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Höhere Importzölle fördern die internationale Verflechtung.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Maßnahmen wie höhere Importzölle oder stärkere Abschottung fördern die internationale Verflechtung nicht.',
  },
  {
    id: 'ex-wiso-glob-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welches Beispiel gehört zur Globalisierung?',
    options: [
      { id: 'a', text: 'Weltweite Lieferketten' },
      { id: 'b', text: 'Ausschließlich lokale Nachbarschaftsläden' },
      { id: 'c', text: 'Verbot ausländischer Investitionen' },
    ],
    correctAnswer: 'a',
    explanation: 'Zur Globalisierung gehören u. a. internationale Märkte, internationale Investitionen, internationale Arbeitsteilung, weltweite Lieferketten, Auslandsstandorte und internationale Unternehmen.',
  },
]

export const globalisierungTopic: Topic = {
  id: 'topic-wiso-globalisierung',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Globalisierung',
  shortIntro: 'Die zunehmende internationale Verflechtung von Wirtschaft und Unternehmen.',
  order: 19,
  keyPoints: [
    'Globalisierung = zunehmende internationale Verflechtung von Wirtschaft und Unternehmen.',
    'Offenheit für Investitionen fördert die Globalisierung; Importzölle und Abschottung fördern sie nicht.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist Globalisierung?' },
    {
      type: 'paragraph',
      text: 'Globalisierung beschreibt die zunehmende internationale Verflechtung von Wirtschaft und Unternehmen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['internationale Märkte', 'internationale Investitionen', 'internationale Arbeitsteilung', 'weltweite Lieferketten', 'Auslandsstandorte', 'internationale Unternehmen'],
    },
    {
      type: 'example',
      text: 'Eine Maßnahme, die Globalisierung fördert: Offenheit für Investitionen ausländischer Unternehmen im Inland und deutscher Unternehmen im Ausland.',
    },
    {
      type: 'exam-tip',
      text: 'Maßnahmen wie höhere Importzölle oder stärkere Abschottung fördern die internationale Verflechtung NICHT.',
    },
  ],
}
