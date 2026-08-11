import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "31. KRANKENVERSICHERUNG – BEITRAGSBERECHNUNG",
 * with the same formula repeated in section "40. WICHTIGE RECHENMETHODEN".
 * WISO.md is the sole source of truth — nothing here contradicts or extends
 * its facts. Exercise 1 reproduces the exact worked example from the
 * source; the others are original practice problems applying the same
 * given formula.
 */

const TOPIC_SLUG = 'krankenversicherung'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-kv-01',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Bruttogehalt 3.500 EUR, allgemeiner Beitragssatz 14,6 %, Zusatzbeitrag 1,8 %. Wie hoch ist der Arbeitnehmeranteil in EUR?',
    correctAnswer: '287',
    explanation: 'Gesamtsatz: 14,6 % + 1,8 % = 16,4 %. Gesamtbeitrag: 3.500 × 16,4 % = 574 EUR. Arbeitnehmeranteil: 574 / 2 = 287 EUR.',
  },
  {
    id: 'ex-wiso-kv-02',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Bruttogehalt 2.000 EUR, allgemeiner Beitragssatz 14,6 %, Zusatzbeitrag 1,8 %. Wie hoch ist der Arbeitnehmeranteil in EUR?',
    correctAnswer: '164',
    explanation: 'Gesamtsatz: 16,4 %. Gesamtbeitrag: 2.000 × 16,4 % = 328 EUR. Arbeitnehmeranteil: 328 / 2 = 164 EUR.',
  },
  {
    id: 'ex-wiso-kv-03',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Bruttogehalt 4.000 EUR, allgemeiner Beitragssatz 14,6 %, Zusatzbeitrag 1,8 %. Wie hoch ist der Gesamtbeitrag (nicht der Arbeitnehmeranteil) in EUR?',
    correctAnswer: '656',
    explanation: 'Gesamtsatz: 16,4 %. Gesamtbeitrag: 4.000 × 16,4 % = 656 EUR.',
  },
  {
    id: 'ex-wiso-kv-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welcher Reihenfolge sollte man bei der Beitragsberechnung vorgehen?',
    options: [
      { id: 'a', text: 'Bruttogehalt → Beitragssatz → Zusatzbeitrag → Gesamtbeitrag → Arbeitnehmeranteil' },
      { id: 'b', text: 'Arbeitnehmeranteil → Gesamtbeitrag → Bruttogehalt' },
      { id: 'c', text: 'Zusatzbeitrag → Bruttogehalt → Beitragssatz' },
    ],
    correctAnswer: 'a',
    explanation: 'Immer prüfen: 1. Bruttogehalt, 2. Beitragssatz, 3. Zusatzbeitrag, 4. Gesamtbeitrag, 5. Arbeitnehmeranteil.',
  },
  {
    id: 'ex-wiso-kv-05',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Bruttogehalt 3.000 EUR, allgemeiner Beitragssatz 14,6 %, Zusatzbeitrag 1,2 %. Wie hoch ist der Arbeitnehmeranteil in EUR?',
    correctAnswer: '237',
    explanation: 'Gesamtsatz: 14,6 % + 1,2 % = 15,8 %. Gesamtbeitrag: 3.000 × 15,8 % = 474 EUR. Arbeitnehmeranteil: 474 / 2 = 237 EUR.',
  },
  {
    id: 'ex-wiso-kv-06',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Der Arbeitnehmeranteil entspricht dem gesamten Krankenversicherungsbeitrag.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Der Arbeitnehmeranteil ist nur die Hälfte des Gesamtbeitrags: Arbeitnehmeranteil = Gesamtbeitrag / 2.',
  },
]

export const krankenversicherungTopic: Topic = {
  id: 'topic-wiso-krankenversicherung',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Krankenversicherung und Beitragsberechnung',
  shortIntro: 'Aus Bruttogehalt, Beitragssatz und Zusatzbeitrag den Arbeitnehmeranteil berechnen.',
  order: 15,
  keyPoints: [
    'Gesamtbeitrag = Bruttogehalt × (allgemeiner Beitragssatz + Zusatzbeitrag).',
    'Arbeitnehmeranteil = Gesamtbeitrag / 2.',
    'Prüfungsreihenfolge: Bruttogehalt → Beitragssatz → Zusatzbeitrag → Gesamtbeitrag → Arbeitnehmeranteil.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Beispiel aus der Prüfung' },
    {
      type: 'example',
      title: 'Gegeben',
      text: 'Bruttogehalt: 3.500 EUR. Allgemeiner Beitragssatz: 14,6 %. Zusatzbeitrag: 1,8 %.',
    },
    {
      type: 'example',
      title: 'Gesamtsatz',
      text: '14,6 % + 1,8 % = 16,4 %.',
    },
    {
      type: 'example',
      title: 'Gesamtbeitrag',
      text: '3.500 × 16,4 % = 574 EUR.',
    },
    {
      type: 'example',
      title: 'Arbeitnehmeranteil',
      text: '574 / 2 = 287 EUR. Ergebnis: Arbeitnehmer zahlt 287 EUR.',
    },

    { type: 'heading', level: 2, text: 'Fester Rechenweg' },
    {
      type: 'key-points',
      items: [
        'Gesamtbeitrag = Bruttogehalt × Beitragssatz',
        'Arbeitnehmeranteil = Gesamtbeitrag / 2',
      ],
    },
    {
      type: 'exam-tip',
      text: 'Immer prüfen: 1. Bruttogehalt, 2. Beitragssatz, 3. Zusatzbeitrag, 4. Gesamtbeitrag, 5. Arbeitnehmeranteil.',
    },
    {
      type: 'interactive',
      component: 'krankenversicherung-calculator',
      caption: 'Setze eigenes Bruttogehalt, Beitragssatz und Zusatzbeitrag ein und prüfe deinen Rechenweg.',
    },
  ],
}
