import type { Exercise, Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files) — see the header comment history for that base
 * content. The exercises below are original practice problems authored for
 * this platform, applying exactly the formulas already taught in this
 * lesson (Ohmsches Gesetz, Leistung, Reihen-/Parallelschaltung) — no new
 * school facts are introduced, only application of the given ones.
 */

const TOPIC_SLUG = 'elektrotechnik'

const elektrotechnikExercises: Exercise[] = [
  {
    id: 'ex-elektro-01',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Gegeben: R = 15 Ω, I = 3 A. Berechne U.',
    correctAnswer: '45',
    explanation: 'U = R × I = 15 × 3 = 45 V.',
  },
  {
    id: 'ex-elektro-02',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Gegeben: U = 18 V, R = 9 Ω. Berechne I.',
    correctAnswer: '2',
    explanation: 'I = U / R = 18 / 9 = 2 A.',
  },
  {
    id: 'ex-elektro-03',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Gegeben: U = 120 V, I = 4 A. Berechne R.',
    correctAnswer: '30',
    explanation: 'R = U / I = 120 / 4 = 30 Ω.',
  },
  {
    id: 'ex-elektro-04',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Gegeben: U = 10 V, I = 2 A. Berechne die Leistung P.',
    correctAnswer: '20',
    explanation: 'P = U × I = 10 × 2 = 20 W.',
  },
  {
    id: 'ex-elektro-05',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Gegeben: P = 460 W, U = 230 V. Berechne I.',
    correctAnswer: '2',
    explanation: 'I = P / U = 460 / 230 = 2 A.',
  },
  {
    id: 'ex-elektro-06',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Reihenschaltung: R1 = 12 Ω, R2 = 8 Ω, R3 = 5 Ω. Berechne Rgesamt.',
    correctAnswer: '25',
    explanation: 'In der Reihenschaltung werden die Widerstände addiert: 12 + 8 + 5 = 25 Ω.',
  },
  {
    id: 'ex-elektro-07',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Parallelschaltung mit zwei Widerständen: R1 = 12 Ω, R2 = 6 Ω. Berechne Rgesamt.',
    correctAnswer: '4',
    explanation: 'Rgesamt = (R1 × R2) / (R1 + R2) = (12 × 6) / 18 = 72 / 18 = 4 Ω.',
  },
  {
    id: 'ex-elektro-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'hard',
    question:
      'Drei Geräte mit 400 W, 600 W und 1000 W werden gleichzeitig an 230 V betrieben. Der Stromkreis ist mit 8 A abgesichert. Können alle Geräte gleichzeitig laufen?',
    options: [
      { id: 'ja', text: 'Ja' },
      { id: 'nein', text: 'Nein' },
    ],
    correctAnswer: 'nein',
    explanation:
      'Pgesamt = 400 + 600 + 1000 = 2000 W. Igesamt = 2000 / 230 ≈ 8,70 A. Das liegt über den zulässigen 8 A – die Geräte können nicht alle gleichzeitig betrieben werden.',
  },
  {
    id: 'ex-elektro-09',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Was ist in einer Reihenschaltung an jeder Stelle gleich?',
    options: [
      { id: 'strom', text: 'Der Strom' },
      { id: 'spannung', text: 'Die Spannung' },
      { id: 'widerstand', text: 'Der Widerstand' },
    ],
    correctAnswer: 'strom',
    explanation: 'In einer Reihenschaltung ist der Strom überall gleich: I1 = I2 = Igesamt.',
  },
  {
    id: 'ex-elektro-10',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: 'Der Gesamtwiderstand einer Parallelschaltung ist immer größer als der größte Einzelwiderstand.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation:
      'Der Gesamtwiderstand einer Parallelschaltung ist immer kleiner als der kleinste Einzelwiderstand, nicht größer.',
  },
]

export const elektrotechnikTopic: Topic = {
  id: 'topic-it-grundlagen-elektrotechnik',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-grundlagen',
  title: 'Elektrotechnik',
  shortIntro: 'Spannung, Stromstärke, Widerstand und Leistung – und wie man mit dem Ohmschen Gesetz rechnet.',
  order: 6,
  keyPoints: [
    'Reihe → gleicher Strom. Parallel → gleiche Spannung.',
    'Ohmsches Gesetz: U = R × I, I = U / R, R = U / I.',
    'Leistung: P = U × I, I = P / U, U = P / I.',
    'Bei mehreren gleichzeitig betriebenen Geräten: Leistungen addieren, dann durch die Spannung teilen, dann mit dem maximal zulässigen Strom vergleichen.',
  ],
  exercises: elektrotechnikExercises,
  content: [
    { type: 'heading', level: 2, text: 'Die wichtigsten vier Größen' },
    {
      type: 'paragraph',
      text: 'In der Elektrotechnik dreht sich fast alles um vier Grundgrößen. Wer diese vier sicher beherrscht, kann die meisten Berechnungen der Ausbildung lösen.',
    },
    {
      type: 'table',
      headers: ['Größe', 'Formelzeichen', 'Einheit'],
      rows: [
        ['Spannung', 'U', 'Volt (V)'],
        ['Stromstärke', 'I', 'Ampere (A)'],
        ['Widerstand', 'R', 'Ohm (Ω)'],
        ['Leistung', 'P', 'Watt (W)'],
      ],
    },

    { type: 'heading', level: 2, text: 'Ohmsches Gesetz' },
    {
      type: 'paragraph',
      text: 'Das Ohmsche Gesetz verknüpft Spannung, Widerstand und Stromstärke. Je nachdem, welche zwei Größen bekannt sind, lässt sich die Formel nach der dritten umstellen.',
    },
    {
      type: 'key-points',
      items: ['U = R × I', 'I = U / R', 'R = U / I'],
    },
    {
      type: 'illustration',
      component: 'ohms-law-triangle',
      caption:
        'Merkdreieck: Die gesuchte Größe zudecken – stehen die verbleibenden zwei nebeneinander, werden sie multipliziert; steht eine über der anderen, wird geteilt.',
    },
    {
      type: 'example',
      title: 'Gesucht: U',
      text: 'Gegeben: R = 30 Ω, I = 0,4 A. U = R × I = 30 × 0,4 = 12 V.',
    },
    {
      type: 'interactive',
      component: 'ohms-law-calculator',
      caption: 'Probiere eigene Werte aus und prüfe, ob dein Rechenweg zum richtigen Ergebnis führt.',
    },

    { type: 'heading', level: 2, text: 'Leistung' },
    {
      type: 'paragraph',
      text: 'Die elektrische Leistung ergibt sich aus Spannung und Stromstärke – auch diese Formel lässt sich nach jeder der drei Größen umstellen.',
    },
    {
      type: 'key-points',
      items: ['P = U × I', 'I = P / U', 'U = P / I'],
    },
    {
      type: 'example',
      title: 'Gesucht: I',
      text: 'Gegeben: P = 92 W, U = 230 V. I = P / U = 92 / 230 = 0,4 A.',
    },

    { type: 'heading', level: 2, text: 'Geräte zusammenrechnen' },
    {
      type: 'paragraph',
      text: 'Werden mehrere Geräte gleichzeitig betrieben, addieren sich ihre Leistungen zur Gesamtleistung. Daraus lässt sich der Gesamtstrom berechnen.',
    },
    {
      type: 'key-points',
      items: ['Pgesamt = P₁ + P₂ + P₃ + …', 'Igesamt = Pgesamt / U'],
    },
    {
      type: 'example',
      title: 'Können alle Geräte gleichzeitig laufen?',
      text: 'Geräte mit 250 W, 150 W, 100 W, 400 W, 1200 W und 1800 W sollen gleichzeitig an 230 V betrieben werden. Pgesamt = 250+150+100+400+1200+1800 = 3900 W. Igesamt = 3900 / 230 ≈ 16,96 A. Ist der maximal zulässige Strom 16 A, gilt: 16,96 A > 16 A – die Geräte können nicht alle gleichzeitig betrieben werden.',
    },
    {
      type: 'exam-tip',
      text: 'Prüfungsstrategie: Geräte addieren → Gesamtleistung berechnen → durch die Spannung teilen → mit dem maximal zulässigen Strom vergleichen.',
    },

    { type: 'heading', level: 2, text: 'Reihenschaltung' },
    {
      type: 'paragraph',
      text: 'In einer Reihenschaltung ist der Strom überall gleich: I₁ = I₂ = Igesamt. Die Einzelwiderstände werden einfach addiert.',
    },
    {
      type: 'key-points',
      items: ['Rgesamt = R₁ + R₂ + …'],
    },
    {
      type: 'example',
      title: 'Reihenschaltung berechnen',
      text: 'R₁ = 10 Ω, R₂ = 30 Ω. Rgesamt = 10 + 30 = 40 Ω.',
    },

    { type: 'heading', level: 2, text: 'Parallelschaltung' },
    {
      type: 'paragraph',
      text: 'In einer Parallelschaltung ist die Spannung an den parallelen Zweigen gleich. Für zwei Widerstände gilt eine eigene Formel für den Gesamtwiderstand.',
    },
    {
      type: 'key-points',
      items: ['Rgesamt = (R₁ × R₂) / (R₁ + R₂)  — für genau zwei Widerstände'],
    },
    {
      type: 'example',
      title: 'Parallelschaltung berechnen',
      text: 'R₁ = 20 Ω, R₂ = 30 Ω. Rgesamt = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω.',
    },
    {
      type: 'insight',
      title: 'Zusatzwissen: mehr als zwei Widerstände parallel',
      text: 'Die Produkt-über-Summe-Formel gilt nur für genau zwei Widerstände. Für beliebig viele parallele Widerstände lautet die allgemeine Formel 1/Rgesamt = 1/R₁ + 1/R₂ + 1/R₃ + …, aus der sich Rgesamt am Ende durch Kehrwertbildung ergibt. Für zwei Widerstände liefert sie exakt dasselbe Ergebnis wie die Produkt-über-Summe-Formel oben.',
    },

    { type: 'heading', level: 2, text: 'Reihen- vs. Parallelschaltung im Vergleich' },
    {
      type: 'illustration',
      component: 'series-parallel-circuits',
      caption: 'In der Reihenschaltung ist der Strom überall gleich, in der Parallelschaltung die Spannung.',
    },
    {
      type: 'table',
      headers: ['', 'Reihenschaltung', 'Parallelschaltung'],
      rows: [
        ['Strom', 'überall gleich', 'verteilt sich auf die Zweige'],
        ['Spannung', 'verteilt sich auf die Bauteile', 'an allen Zweigen gleich'],
        ['Gesamtwiderstand', 'Widerstände werden direkt addiert', 'kleiner als der kleinste Einzelwiderstand'],
      ],
    },
    {
      type: 'note',
      text: 'Merkregel: Reihe → gleicher Strom. Parallel → gleiche Spannung.',
    },
  ],
}
