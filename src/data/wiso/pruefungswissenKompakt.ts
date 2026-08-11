import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "38. WICHTIGE PRÜFUNGSVERGLEICHE",
 * "39. WICHTIGE MERKSÄTZE FÜR DIE PRÜFUNG" and "40. WICHTIGE
 * RECHENMETHODEN" — a dedicated exam-cram lesson consolidating the
 * comparisons, Merksätze and formulas WISO.md itself groups together as
 * exam prep, even though each fact also appears in its own dedicated
 * lesson. WISO.md is the sole source of truth — nothing here contradicts
 * or extends its facts. Exercises are original IHK-style review questions
 * spanning multiple topics, as a final recap quiz.
 */

const TOPIC_SLUG = 'pruefungswissen-kompakt'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-kompakt-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Die GmbH ist eine …',
    options: [
      { id: 'kapital', text: 'Kapitalgesellschaft' },
      { id: 'personen', text: 'Personengesellschaft' },
    ],
    correctAnswer: 'kapital',
    explanation: 'GmbH = Kapitalgesellschaft + 25.000 EUR Mindeststammkapital.',
  },
  {
    id: 'ex-wiso-kompakt-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Die KG ist eine …',
    options: [
      { id: 'kapital', text: 'Kapitalgesellschaft' },
      { id: 'personen', text: 'Personengesellschaft' },
    ],
    correctAnswer: 'personen',
    explanation: 'KG: Personengesellschaft.',
  },
  {
    id: 'ex-wiso-kompakt-03',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Boom bezeichnet …',
    options: [
      { id: 'a', text: 'Die Hochphase der Konjunktur' },
      { id: 'b', text: 'Den wirtschaftlichen Abschwung' },
      { id: 'c', text: 'Die Gründung einer GmbH' },
    ],
    correctAnswer: 'a',
    explanation: 'Boom: Hochphase der Konjunktur.',
  },
  {
    id: 'ex-wiso-kompakt-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Rezession bezeichnet …',
    options: [
      { id: 'a', text: 'Den wirtschaftlichen Abschwung' },
      { id: 'b', text: 'Die Hochphase der Konjunktur' },
      { id: 'c', text: 'Einen Unternehmenszusammenschluss' },
    ],
    correctAnswer: 'a',
    explanation: 'Rezession: Wirtschaftlicher Abschwung.',
  },
  {
    id: 'ex-wiso-kompakt-05',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Krankenversicherung: Bruttogehalt 3.500 EUR, Gesamtbeitragssatz 16,4 %. Wie hoch ist der Arbeitnehmeranteil in EUR?',
    correctAnswer: '287',
    explanation: 'Gesamtbeitrag = 3.500 × 16,4 % = 574 EUR. Arbeitnehmeranteil = 574 / 2 = 287 EUR.',
  },
  {
    id: 'ex-wiso-kompakt-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Formel berechnet den Gewinnanteil eines GmbH-Gesellschafters?',
    options: [
      { id: 'a', text: 'Gesamtgewinn × Beteiligungsquote' },
      { id: 'b', text: 'Gesamtkapital × Beteiligungsquote' },
      { id: 'c', text: 'Bruttogehalt × Beitragssatz' },
    ],
    correctAnswer: 'a',
    explanation: 'Gewinnanteil = Gesamtgewinn × Beteiligungsquote.',
  },
]

export const pruefungswissenKompaktTopic: Topic = {
  id: 'topic-wiso-pruefungswissen-kompakt',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Prüfungswissen kompakt',
  shortIntro: 'Alle wichtigen Prüfungsvergleiche, Merksätze und Rechenmethoden aus WISO.md auf einen Blick.',
  order: 21,
  keyPoints: [
    'Diese Lektion fasst die Vergleiche, Merksätze und Rechenmethoden aus allen WISO-Themen kompakt als Wiederholung zusammen.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Wichtige Prüfungsvergleiche' },
    {
      type: 'table',
      headers: ['Begriff', 'Kernaussage'],
      rows: [
        ['GmbH', 'Kapitalgesellschaft'],
        ['KG', 'Personengesellschaft'],
        ['HRA', 'Personengesellschaften'],
        ['HRB', 'Kapitalgesellschaften'],
        ['Prokura', 'Sehr weitreichende Vollmacht'],
        ['Handlungsvollmacht', 'Gewöhnliche Geschäfte'],
        ['Artvollmacht', 'Bestimmte Art von Geschäften'],
        ['Einzelvollmacht', 'Ein einzelnes konkretes Geschäft'],
        ['Einzelprokura', 'Allein unterschreiben'],
        ['Gesamtprokura', 'Gemeinsam unterschreiben'],
        ['Einliniensystem', 'Ein Vorgesetzter'],
        ['Mehrliniensystem', 'Mehrere Vorgesetzte'],
        ['Stabliniensystem', 'Linie + beratende Stabsstelle'],
        ['Matrix', 'Doppelunterstellung / zwei Dimensionen'],
        ['Arbeitsunfall', 'Unfall bei der Arbeit'],
        ['Wegeunfall', 'Unfall auf dem direkten Weg zur oder von der Arbeit'],
        ['Ökonomisches Ziel', 'Gewinn, Umsatz, Kosten, Rentabilität'],
        ['Ökologisches Ziel', 'Umwelt, CO₂, Nachhaltigkeit'],
        ['Soziales Ziel', 'Mitarbeiter, Gleichberechtigung, Chancengleichheit'],
        ['Rezession', 'Wirtschaftlicher Abschwung'],
        ['Boom', 'Hochphase der Konjunktur'],
      ],
    },

    { type: 'heading', level: 2, text: 'Wichtige Merksätze für die Prüfung' },
    {
      type: 'key-points',
      items: [
        'GmbH = Kapitalgesellschaft + 25.000 EUR Mindeststammkapital.',
        'HRA = Personengesellschaften, HRB = Kapitalgesellschaften.',
        'Prokura ist eine sehr weitreichende Vollmacht.',
        'Einzelprokura = allein, Gesamtprokura = gemeinsam.',
        'Ein Linie = ein Chef, Mehr Linie = mehrere Chefs, Stab Linie = Beratung, Matrix = Doppelunterstellung.',
        'Berufsgenossenschaft = gesetzliche Unfallversicherung.',
        'Arbeitsunfall = Arbeit, Wegeunfall = direkter Arbeitsweg.',
        'Primär = Rohstoffe, Sekundär = Produktion, Tertiär = Dienstleistungen.',
        'Ökonomisch = Geld, Ökologisch = Umwelt, Sozial = Menschen.',
        'Aufschwung → Boom → Abschwung → Rezession.',
        'Fusion = Zusammenschluss von Unternehmen.',
      ],
    },

    { type: 'heading', level: 2, text: 'Wichtige Rechenmethoden' },
    { type: 'heading', level: 3, text: '1. Beteiligungsquote' },
    {
      type: 'key-points',
      items: ['Beteiligungsquote = Geschäftsanteil / Gesamtkapital × 100'],
    },
    { type: 'heading', level: 3, text: '2. Gewinnanteil' },
    {
      type: 'key-points',
      items: ['Gewinnanteil = Gesamtgewinn × Beteiligungsquote'],
    },
    { type: 'heading', level: 3, text: '3. Krankenversicherungsbeitrag' },
    {
      type: 'key-points',
      items: ['Gesamtbeitrag = Bruttogehalt × Beitragssatz', 'Arbeitnehmeranteil = Gesamtbeitrag / 2'],
    },
    {
      type: 'example',
      title: 'Beispiel',
      text: '3.500 × 16,4 % = 574 EUR. 574 / 2 = 287 EUR.',
    },
  ],
}
