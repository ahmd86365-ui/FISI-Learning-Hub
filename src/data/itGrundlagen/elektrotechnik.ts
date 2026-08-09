import type { Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files). No exercise worksheets were provided for this
 * topic, so per the "architecture only unless instructed otherwise" rule,
 * `exercises` stays empty rather than generating new questions.
 */
export const elektrotechnikTopic: Topic = {
  id: 'topic-it-grundlagen-elektrotechnik',
  slug: 'elektrotechnik',
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
  exercises: [],
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
      type: 'example',
      title: 'Gesucht: U',
      text: 'Gegeben: R = 30 Ω, I = 0,4 A. U = R × I = 30 × 0,4 = 12 V.',
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
      type: 'note',
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

    { type: 'heading', level: 2, text: 'Reihen- vs. Parallelschaltung im Vergleich' },
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
