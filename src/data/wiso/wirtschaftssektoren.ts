import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, section "1. DIE 3 SEKTOREN DER WIRTSCHAFT" (incl. 1.1-1.5
 * Primärer/Sekundärer/Tertiärer Sektor, erwerbswirtschaftlicher/
 * gemeinwirtschaftlicher Betrieb). WISO.md is the sole source of truth for
 * this content — nothing here contradicts or extends its facts. Exercises
 * below are original IHK-style practice questions applying exactly the
 * definitions and examples given in that section.
 */

const TOPIC_SLUG = 'wirtschaftssektoren-betriebe'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-sekt-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Zu welchem Sektor gehört die Landwirtschaft?',
    options: [
      { id: 'primaer', text: 'Primärer Sektor' },
      { id: 'sekundaer', text: 'Sekundärer Sektor' },
      { id: 'tertiaer', text: 'Tertiärer Sektor' },
    ],
    correctAnswer: 'primaer',
    explanation: 'Der primäre Sektor beschäftigt sich mit der Gewinnung von Rohstoffen und natürlichen Ressourcen – dazu zählt die Landwirtschaft.',
  },
  {
    id: 'ex-wiso-sekt-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Zu welchem Sektor gehört ein IT-Dienstleistungsunternehmen?',
    options: [
      { id: 'primaer', text: 'Primärer Sektor' },
      { id: 'sekundaer', text: 'Sekundärer Sektor' },
      { id: 'tertiaer', text: 'Tertiärer Sektor' },
    ],
    correctAnswer: 'tertiaer',
    explanation: 'Ein IT-Dienstleistungsunternehmen gehört grundsätzlich zum tertiären Sektor, da dieser Dienstleistungen umfasst.',
  },
  {
    id: 'ex-wiso-sekt-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Eine Fabrik verarbeitet Rohstoffe zu fertigen Produkten. Welchem Sektor ist sie zuzuordnen?',
    options: [
      { id: 'primaer', text: 'Primärer Sektor' },
      { id: 'sekundaer', text: 'Sekundärer Sektor' },
      { id: 'tertiaer', text: 'Tertiärer Sektor' },
    ],
    correctAnswer: 'sekundaer',
    explanation: 'Der sekundäre Sektor verarbeitet Rohstoffe und stellt Produkte her – Fabriken sind ein genanntes Beispiel dafür.',
  },
  {
    id: 'ex-wiso-sekt-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welches der folgenden Beispiele gehört NICHT zum tertiären Sektor?',
    options: [
      { id: 'banken', text: 'Banken' },
      { id: 'bergbau', text: 'Bergbau' },
      { id: 'versicherungen', text: 'Versicherungen' },
    ],
    correctAnswer: 'bergbau',
    explanation: 'Bergbau ist ein Beispiel für den primären Sektor (Rohstoffgewinnung), nicht für den tertiären Sektor (Dienstleistungen).',
  },
  {
    id: 'ex-wiso-sekt-05',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Ein gemeinwirtschaftlicher Betrieb verfolgt in erster Linie das Ziel, möglichst hohe Gewinne zu erzielen.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Ein gemeinwirtschaftlicher Betrieb verfolgt stärker ein öffentliches bzw. gesellschaftliches Versorgungsziel, nicht ausschließlich die Gewinnerzielung. Das ist der erwerbswirtschaftliche Betrieb.',
  },
  {
    id: 'ex-wiso-sekt-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Eine GmbH verkauft IT-Dienstleistungen und möchte damit Gewinne erzielen. Um welche Art von Betrieb handelt es sich?',
    options: [
      { id: 'erwerb', text: 'Erwerbswirtschaftlicher Betrieb' },
      { id: 'gemein', text: 'Gemeinwirtschaftlicher Betrieb' },
    ],
    correctAnswer: 'erwerb',
    explanation: 'Ein erwerbswirtschaftlicher Betrieb verfolgt grundsätzlich das Ziel, Gewinne zu erwirtschaften – genau wie im Beispiel dieser GmbH.',
  },
]

export const wirtschaftssektorenTopic: Topic = {
  id: 'topic-wiso-wirtschaftssektoren',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Wirtschaftssektoren und Betriebe',
  shortIntro: 'Primärer, sekundärer und tertiärer Sektor – und der Unterschied zwischen erwerbs- und gemeinwirtschaftlichen Betrieben.',
  order: 1,
  keyPoints: [
    'Primärer Sektor = Rohstoffe gewinnen.',
    'Sekundärer Sektor = Rohstoffe verarbeiten und Produkte herstellen.',
    'Tertiärer Sektor = Dienstleistungen.',
    'Erwerbswirtschaftlich = Gewinnorientierung. Gemeinwirtschaftlich = Versorgung / gesellschaftlicher Zweck.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Die drei Sektoren der Wirtschaft' },
    {
      type: 'paragraph',
      text: 'Die Wirtschaft wird in drei Sektoren eingeteilt: den primären, den sekundären und den tertiären Sektor.',
    },

    { type: 'heading', level: 3, text: 'Primärer Sektor' },
    {
      type: 'paragraph',
      text: 'Der primäre Sektor beschäftigt sich mit der Gewinnung von Rohstoffen und natürlichen Ressourcen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Landwirtschaft', 'Forstwirtschaft', 'Fischerei', 'Bergbau', 'Rohstoffgewinnung'],
    },

    { type: 'heading', level: 3, text: 'Sekundärer Sektor' },
    {
      type: 'paragraph',
      text: 'Der sekundäre Sektor verarbeitet Rohstoffe und stellt Produkte her.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Industrie', 'Produktion', 'Fabriken', 'Handwerk', 'Bauwirtschaft'],
    },

    { type: 'heading', level: 3, text: 'Tertiärer Sektor' },
    {
      type: 'paragraph',
      text: 'Der tertiäre Sektor umfasst Dienstleistungen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['IT-Unternehmen', 'Banken', 'Versicherungen', 'Handel', 'Beratung', 'Transport', 'Tourismus'],
    },
    {
      type: 'note',
      text: 'Ein IT-Dienstleistungsunternehmen gehört deshalb grundsätzlich zum tertiären Sektor.',
    },
    {
      type: 'illustration',
      component: 'wirtschaftssektoren-flow',
      caption: 'Primärer Sektor gewinnt Rohstoffe, der sekundäre Sektor verarbeitet sie, der tertiäre Sektor erbringt Dienstleistungen.',
    },

    { type: 'heading', level: 3, text: 'Erwerbswirtschaftlicher Betrieb' },
    {
      type: 'paragraph',
      text: 'Ein erwerbswirtschaftlicher Betrieb verfolgt grundsätzlich das Ziel, Gewinne zu erwirtschaften.',
    },
    {
      type: 'example',
      text: 'Eine GmbH, die IT-Dienstleistungen verkauft und Gewinne erzielen möchte.',
    },

    { type: 'heading', level: 3, text: 'Gemeinwirtschaftlicher Betrieb' },
    {
      type: 'paragraph',
      text: 'Ein gemeinwirtschaftlicher Betrieb verfolgt stärker ein öffentliches bzw. gesellschaftliches Versorgungsziel und nicht ausschließlich die Gewinnerzielung.',
    },
    {
      type: 'exam-tip',
      text: 'Erwerbswirtschaftlich = Gewinnorientierung. Gemeinwirtschaftlich = Versorgung / gesellschaftlicher Zweck.',
    },
  ],
}
