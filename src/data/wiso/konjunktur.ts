import type { Exercise, Topic } from '../../types/content'

/**
 * Source: WISO.md, sections "4. KONJUNKTUR UND KONJUNKTURVERLAUF" and
 * "5. KONJUNKTURPOLITIK UND STABILITÄTSGESETZ" (merged into one lesson —
 * both describe the same economic cycle and the state's response to it).
 * WISO.md is the sole source of truth — nothing here contradicts or extends
 * its facts. Exercises are original IHK-style practice questions.
 */

const TOPIC_SLUG = 'konjunktur'

const exercises: Exercise[] = [
  {
    id: 'ex-wiso-konj-01',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'In welcher Reihenfolge verläuft der klassische Konjunkturzyklus?',
    options: [
      { id: 'a', text: 'Aufschwung → Boom → Abschwung → Rezession' },
      { id: 'b', text: 'Boom → Rezession → Aufschwung → Abschwung' },
      { id: 'c', text: 'Rezession → Boom → Aufschwung → Abschwung' },
    ],
    correctAnswer: 'a',
    explanation: 'Der Konjunkturzyklus wird typischerweise in die Phasen Aufschwung, Boom, Abschwung und Rezession eingeteilt.',
  },
  {
    id: 'ex-wiso-konj-02',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'In welcher Konjunkturphase ist die Arbeitslosigkeit typischerweise am geringsten?',
    options: [
      { id: 'aufschwung', text: 'Aufschwung' },
      { id: 'boom', text: 'Boom' },
      { id: 'rezession', text: 'Rezession' },
    ],
    correctAnswer: 'boom',
    explanation: 'Der Boom ist die Hochphase der Konjunktur mit hoher Beschäftigung und geringer Arbeitslosigkeit.',
  },
  {
    id: 'ex-wiso-konj-03',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'In einer Rezession nehmen Lagerbestände häufig zu, weil Unternehmen weniger verkaufen als erwartet.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'wahr',
    explanation: 'Das ist ein wichtiger Prüfungsbegriff: Lagerbestände nehmen in einer Rezession häufig zu, weil Unternehmen weniger verkaufen als erwartet.',
  },
  {
    id: 'ex-wiso-konj-04',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'medium',
    question: 'Welche Maßnahme wirkt normalerweise konjunkturbelebend?',
    options: [
      { id: 'a', text: 'Erhöhung staatlicher Investitionen' },
      { id: 'b', text: 'Erhöhung der Leitzinsen' },
    ],
    correctAnswer: 'a',
    explanation: 'Eine Erhöhung staatlicher Investitionen kann die Konjunktur beleben. Höhere Leitzinsen wirken normalerweise nicht konjunkturbelebend, weil Kredite teurer werden.',
  },
  {
    id: 'ex-wiso-konj-05',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Höhere Leitzinsen wirken normalerweise konjunkturbelebend.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: 'Höhere Leitzinsen wirken normalerweise NICHT konjunkturbelebend, weil Kredite teurer werden und Investitionen bzw. Nachfrage zurückgehen können.',
  },
  {
    id: 'ex-wiso-konj-06',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Wie werden die vier zentralen Ziele der Wirtschaftspolitik (Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, Wirtschaftswachstum) bezeichnet?',
    options: [
      { id: 'a', text: 'Magisches Viereck' },
      { id: 'b', text: 'Goldener Kreis' },
      { id: 'c', text: 'Stabilitätsdreieck' },
    ],
    correctAnswer: 'a',
    explanation: 'Diese vier Ziele werden als „Magisches Viereck" bezeichnet.',
  },
  {
    id: 'ex-wiso-konj-07',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welches Merkmal ist typisch für eine Rezession?',
    options: [
      { id: 'a', text: 'Steigendes BIP' },
      { id: 'b', text: 'Sinkendes BIP' },
      { id: 'c', text: 'Sinkende Arbeitslosigkeit' },
    ],
    correctAnswer: 'b',
    explanation: 'In einer Rezession sinkt das BIP, ebenso Produktion, Investitionen, Kapazitätsauslastung und Nachfrage, während die Arbeitslosigkeit steigt.',
  },
]

export const konjunkturTopic: Topic = {
  id: 'topic-wiso-konjunktur',
  slug: TOPIC_SLUG,
  moduleSlug: 'wiso',
  title: 'Konjunktur und Konjunkturpolitik',
  shortIntro: 'Der Konjunkturzyklus von Aufschwung bis Rezession – und wie der Staat mit Konjunkturpolitik gegensteuert.',
  order: 4,
  keyPoints: [
    'Konjunkturzyklus: Aufschwung → Boom → Abschwung → Rezession.',
    'In der Rezession sinkt das BIP und die Arbeitslosigkeit steigt; Lagerbestände können zunehmen.',
    'Erhöhung staatlicher Investitionen wirkt konjunkturbelebend; höhere Leitzinsen wirken normalerweise NICHT konjunkturbelebend.',
    'Magisches Viereck: Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum.',
  ],
  exercises,
  content: [
    { type: 'heading', level: 2, text: 'Was ist Konjunktur?' },
    {
      type: 'paragraph',
      text: 'Konjunktur beschreibt die wirtschaftliche Entwicklung einer Volkswirtschaft über einen bestimmten Zeitraum. Der Konjunkturzyklus wird typischerweise in vier Phasen eingeteilt: Aufschwung, Boom, Abschwung und Rezession/Depression.',
    },
    { type: 'illustration', component: 'business-cycle-diagram', caption: 'Der Konjunkturzyklus durchläuft wiederkehrend Aufschwung, Boom, Abschwung und Rezession.' },

    { type: 'heading', level: 3, text: 'Aufschwung' },
    {
      type: 'list',
      style: 'bullet',
      items: ['Nachfrage steigt', 'Produktion steigt', 'Investitionen steigen', 'Beschäftigung steigt', 'Arbeitslosigkeit sinkt', 'Gewinne steigen'],
    },

    { type: 'heading', level: 3, text: 'Boom' },
    {
      type: 'paragraph',
      text: 'Der Boom ist die Hochphase der Konjunktur.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['sehr hohe Nachfrage', 'hohe Produktion', 'hohe Investitionen', 'hohe Beschäftigung', 'geringe Arbeitslosigkeit', 'hohe Kapazitätsauslastung', 'mögliche Inflationsgefahr'],
    },

    { type: 'heading', level: 3, text: 'Abschwung' },
    {
      type: 'list',
      style: 'bullet',
      items: ['Nachfrage sinkt', 'Produktion sinkt', 'Investitionen gehen zurück', 'Gewinne sinken', 'Arbeitslosigkeit beginnt zu steigen'],
    },

    { type: 'heading', level: 3, text: 'Rezession' },
    {
      type: 'paragraph',
      text: 'In einer Rezession geht die wirtschaftliche Aktivität deutlich zurück.',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['BIP sinkt', 'Produktion sinkt', 'Investitionen sinken', 'Kapazitätsauslastung sinkt', 'Arbeitslosigkeit steigt', 'Nachfrage sinkt', 'Lagerbestände können zunehmen'],
    },
    {
      type: 'exam-tip',
      text: 'Lagerbestände nehmen in einer Rezession häufig zu, weil Unternehmen weniger verkaufen als erwartet.',
    },

    { type: 'heading', level: 2, text: 'Konjunkturpolitik' },
    {
      type: 'paragraph',
      text: 'Konjunkturpolitik umfasst Maßnahmen des Staates bzw. der Wirtschaftspolitik, mit denen die wirtschaftliche Entwicklung beeinflusst werden soll.',
    },
    {
      type: 'paragraph',
      text: 'Konjunkturbelebende Maßnahmen können zum Beispiel sein:',
    },
    {
      type: 'list',
      style: 'bullet',
      items: ['Erhöhung staatlicher Investitionen', 'Förderung der Nachfrage', 'geeignete steuerliche Maßnahmen', 'geeignete geldpolitische Maßnahmen'],
    },
    {
      type: 'exam-tip',
      text: 'Eine Erhöhung staatlicher Investitionen kann die Konjunktur beleben. Dagegen wirken höhere Leitzinsen normalerweise NICHT konjunkturbelebend, weil Kredite teurer werden und Investitionen bzw. Nachfrage zurückgehen können.',
    },

    { type: 'heading', level: 3, text: 'Das Magische Viereck' },
    {
      type: 'paragraph',
      text: 'Wichtige Ziele der Wirtschaftspolitik sind unter anderem:',
    },
    {
      type: 'key-points',
      items: ['Preisniveaustabilität', 'hoher Beschäftigungsstand', 'außenwirtschaftliches Gleichgewicht', 'stetiges und angemessenes Wirtschaftswachstum'],
    },
    {
      type: 'note',
      text: 'Diese vier Ziele werden als „Magisches Viereck" bezeichnet.',
    },
  ],
}
