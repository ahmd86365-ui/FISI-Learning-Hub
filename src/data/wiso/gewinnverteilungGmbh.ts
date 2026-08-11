import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "9. GEWINNVERTEILUNG BEI DER GmbH" plus the
 * matching formulas repeated in section "40. WICHTIGE RECHENMETHODEN".
 * WISO.md is the sole source of truth — nothing here contradicts or extends
 * its facts. Exercises 3 and 4 reproduce the exact two worked examples from
 * the source; exercises 1, 2, 5 and 6 are original practice problems
 * applying the same given formula.
 */

const TOPIC_SLUG = 'gewinnverteilung-gmbh'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-gewinn-01',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Herr A hat einen Geschäftsanteil von 40.000 EUR bei einem Gesamtkapital von 200.000 EUR. Berechne seine Beteiligungsquote in %.',
    correctAnswer: '20',
    explanation: 'Beteiligungsquote = Geschäftsanteil / Gesamtkapital × 100 = 40.000 / 200.000 × 100 = 20 %.',
  },
  {
    id: 'ex-wiso-gewinn-02',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Bei einer Beteiligungsquote von 20 % und einem Gesamtgewinn von 50.000 EUR: Wie hoch ist der Gewinnanteil?',
    correctAnswer: '10000',
    explanation: 'Gewinnanteil = Gesamtgewinn × Beteiligungsquote = 50.000 × 20 % = 10.000 EUR.',
  },
  {
    id: 'ex-wiso-gewinn-03',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Frau Wegener hält 35.000 EUR von insgesamt 120.000 EUR Gesamtkapital. Bei einem Gesamtgewinn von 60.000 EUR: Wie hoch ist ihr Gewinnanteil in EUR?',
    correctAnswer: '17500',
    explanation: 'Beteiligung: 35.000 / 120.000 ≈ 29,17 %. Gewinnanteil = 60.000 × 35.000 / 120.000 = 17.500 EUR.',
  },
  {
    id: 'ex-wiso-gewinn-04',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Claudia Simmer hält 132.000 EUR von 330.000 EUR Stammkapital. Bei einem Gewinn von 87.450 EUR: Wie hoch ist ihr Gewinnanteil in EUR?',
    correctAnswer: '34980',
    explanation: 'Claudias Anteil: 132.000 / 330.000 = 40 %. Gewinnanteil = 87.450 × 40 % = 34.980 EUR.',
  },
  {
    id: 'ex-wiso-gewinn-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wonach richtet sich die Gewinnverteilung bei der GmbH, wenn keine abweichende vertragliche Regelung besteht?',
    options: [
      { id: 'a', text: 'Nach den Geschäftsanteilen bzw. Beteiligungsverhältnissen' },
      { id: 'b', text: 'Gleichmäßig auf alle Gesellschafter' },
      { id: 'c', text: 'Nach den Dienstjahren der Gesellschafter' },
    ],
    correctAnswer: 'a',
    explanation: 'Ohne abweichende vertragliche Regelung richtet sich die Gewinnverteilung grundsätzlich nach den Geschäftsanteilen bzw. Beteiligungsverhältnissen.',
  },
  {
    id: 'ex-wiso-gewinn-06',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Herr Müller hält 198.000 EUR von 330.000 EUR Stammkapital. Wie hoch ist seine Beteiligungsquote in %?',
    correctAnswer: '60',
    explanation: 'Beteiligungsquote = 198.000 / 330.000 × 100 = 60 %.',
  },
]

export const gewinnverteilungGmbhTopic: Topic = {
  id: 'topic-wiso-gewinnverteilung-gmbh',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Gewinnverteilung bei der GmbH',
  shortIntro: 'Beteiligungsquote und Gewinnanteil berechnen, wenn keine abweichende vertragliche Regelung besteht.',
  order: 8,
  keyPoints: [
    'Beteiligungsquote = Geschäftsanteil / Gesamtkapital × 100.',
    'Gewinnanteil = Gesamtgewinn × Beteiligungsquote.',
    'Ohne abweichende vertragliche Regelung richtet sich die Gewinnverteilung nach den Geschäftsanteilen.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Grundregel' },
    {
      type: 'paragraph',
      text: 'Wenn keine abweichende vertragliche Regelung besteht, richtet sich die Gewinnverteilung grundsätzlich nach den Geschäftsanteilen bzw. Beteiligungsverhältnissen.',
    },
    {
      type: 'key-points',
      items: ['Beteiligungsquote = Geschäftsanteil / Gesamtkapital × 100', 'Gewinnanteil = Gesamtgewinn × Beteiligungsquote'],
    },

    { type: 'heading', level: 2, text: 'Beispiel: Herr Trout und Frau Wegener' },
    {
      type: 'example',
      title: 'Gegeben',
      text: 'Herr Trout: 85.000 EUR. Frau Wegener: 35.000 EUR. Gesamtkapital: 85.000 + 35.000 = 120.000 EUR.',
    },
    {
      type: 'example',
      title: 'Beteiligung Frau Wegener',
      text: '35.000 / 120.000 = 29,166… %.',
    },
    {
      type: 'example',
      title: 'Gewinnanteil bei 60.000 EUR Gesamtgewinn',
      text: '60.000 × 35.000 / 120.000 = 17.500 EUR. Ergebnis: Frau Wegener erhält 17.500 EUR.',
    },

    { type: 'heading', level: 2, text: 'Beispiel: Peter Müller und Claudia Simmer' },
    {
      type: 'example',
      title: 'Gegeben',
      text: 'Stammkapital: 330.000 EUR. Peter Müller: 198.000 EUR. Claudia Simmer: 132.000 EUR.',
    },
    {
      type: 'example',
      title: 'Claudias Anteil',
      text: '132.000 / 330.000 = 40 %.',
    },
    {
      type: 'example',
      title: 'Gewinnanteil bei 87.450 EUR Gewinn',
      text: '87.450 × 40 % = 34.980 EUR. Ergebnis: Claudia Simmer erhält 34.980 EUR.',
    },

    {
      type: 'interactive',
      component: 'gewinnverteilung-calculator',
      caption: 'Setze eigene Werte für Geschäftsanteil, Gesamtkapital und Gesamtgewinn ein und prüfe deinen Rechenweg.',
    },
  ],
}
