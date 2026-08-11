import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "34. STREIK" and "35. WILDER STREIK" (merged
 * into one lesson). WISO.md is the sole source of truth — nothing here
 * contradicts or extends its facts. Exercises are original IHK-style
 * practice questions.
 */

const TOPIC_SLUG = 'streik'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-streik-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was ist ein Streik?',
    options: [
      { id: 'a', text: 'Eine gemeinsame Arbeitsniederlegung von Arbeitnehmern' },
      { id: 'b', text: 'Eine einseitige Kündigung durch den Arbeitgeber' },
      { id: 'c', text: 'Eine automatische Gehaltserhöhung' },
    ],
    correctAnswer: 'a',
    explanation: 'Ein Streik ist eine gemeinsame Arbeitsniederlegung von Arbeitnehmern, um z. B. bessere Arbeitsbedingungen oder höhere Löhne durchzusetzen.',
  },
  {
    id: 'ex-wiso-streik-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Was kennzeichnet einen wilden Streik?',
    options: [
      { id: 'a', text: 'Er findet ohne Aufruf bzw. Zustimmung der zuständigen Gewerkschaft statt' },
      { id: 'b', text: 'Er wird von der Gewerkschaft offiziell organisiert' },
      { id: 'c', text: 'Er betrifft ausschließlich Auszubildende' },
    ],
    correctAnswer: 'a',
    explanation: 'Ein wilder Streik ist ein Streik, der ohne Aufruf bzw. Zustimmung der zuständigen Gewerkschaft durchgeführt wird.',
  },
  {
    id: 'ex-wiso-streik-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Ein wilder Streik ist grundsätzlich mit einem ordnungsgemäßen gewerkschaftlich getragenen Streik gleichzusetzen.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Ein wilder Streik ist grundsätzlich NICHT mit einem ordnungsgemäßen gewerkschaftlich getragenen Streik gleichzusetzen.',
  },
  {
    id: 'ex-wiso-streik-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welcher Begriff wird in WISO.md NICHT im Zusammenhang mit Streik genannt?',
    options: [
      { id: 'a', text: 'Tarifvertrag' },
      { id: 'b', text: 'Gewerkschaft' },
      { id: 'c', text: 'Aktiengesellschaft' },
    ],
    correctAnswer: 'c',
    explanation: 'Im Zusammenhang mit Streik werden Streik, Gewerkschaft, Arbeitgeber, Arbeitnehmer, Tarifvertrag und Tarifverhandlungen genannt – die Aktiengesellschaft nicht.',
  },
  {
    id: 'ex-wiso-streik-05',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wozu dient ein Streik typischerweise?',
    options: [
      { id: 'a', text: 'Um bessere Arbeitsbedingungen oder höhere Löhne durchzusetzen' },
      { id: 'b', text: 'Um die Unternehmensgründung zu beschleunigen' },
      { id: 'c', text: 'Um Steuern zu senken' },
    ],
    correctAnswer: 'a',
    explanation: 'Ein Streik dient dazu, z. B. bessere Arbeitsbedingungen oder höhere Löhne durchzusetzen.',
  },
]

export const streikTopic: Topic = {
  id: 'topic-wiso-streik',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Streik und Wilder Streik',
  shortIntro: 'Arbeitsniederlegung zur Durchsetzung von Forderungen – und der Unterschied zum wilden Streik.',
  order: 18,
  keyPoints: [
    'Streik = gemeinsame Arbeitsniederlegung von Arbeitnehmern zur Durchsetzung von Forderungen.',
    'Wilder Streik = Streik ohne gewerkschaftlichen Aufruf.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Streik' },
    {
      type: 'paragraph',
      text: 'Ein Streik ist eine gemeinsame Arbeitsniederlegung von Arbeitnehmern, um beispielsweise bessere Arbeitsbedingungen oder höhere Löhne durchzusetzen.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Streik', 'Gewerkschaft', 'Arbeitgeber', 'Arbeitnehmer', 'Tarifvertrag', 'Tarifverhandlungen'],
    },

    { type: 'heading', level: 2, text: 'Wilder Streik' },
    {
      type: 'paragraph',
      text: 'Ein wilder Streik ist ein Streik, der ohne Aufruf bzw. Zustimmung der zuständigen Gewerkschaft durchgeführt wird.',
    },
    {
      type: 'exam-tip',
      text: 'Wilder Streik = Streik ohne gewerkschaftlichen Aufruf. Ein wilder Streik ist grundsätzlich nicht mit einem ordnungsgemäßen gewerkschaftlich getragenen Streik gleichzusetzen.',
    },
  ],
}
