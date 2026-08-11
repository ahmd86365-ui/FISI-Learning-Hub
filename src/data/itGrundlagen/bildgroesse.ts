import type { Exercise, Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files) — see the header comment history for that base
 * content. The exercises below are original practice problems authored for
 * this platform, applying exactly the cm → Zoll → Pixel → Bit → Byte →
 * KiB → MiB → GiB pipeline already taught in this lesson — no new school
 * facts are introduced, only application of the given ones.
 */

const TOPIC_SLUG = 'bildgroesse-datengroesse'

const bildgroesseExercises: Exercise[] = [
  {
    id: 'ex-bild-01',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Ein Bild ist 2000 Pixel breit und 1000 Pixel hoch. Berechne die Gesamtpixelzahl.',
    correctAnswer: '2000000',
    explanation: 'Gesamtpixel = Breite × Höhe = 2000 × 1000 = 2.000.000 Pixel.',
  },
  {
    id: 'ex-bild-02',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'easy',
    question: 'Wandle 5,08 cm in Zoll um.',
    correctAnswer: '2',
    explanation: 'Zoll = cm / 2,54 = 5,08 / 2,54 = 2 Zoll.',
  },
  {
    id: 'ex-bild-03',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Ein Bild ist 4 Zoll breit und wird mit 200 DPI gescannt. Wie viele Pixel breit ist es?',
    correctAnswer: '800',
    explanation: 'Pixel = Zoll × DPI = 4 × 200 = 800 Pixel.',
  },
  {
    id: 'ex-bild-04',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: '500.000 Pixel werden mit 8 Bit Farbtiefe gespeichert. Wie viele Bit sind das insgesamt?',
    correctAnswer: '4000000',
    explanation: 'Bit = Gesamtpixel × Farbtiefe = 500.000 × 8 = 4.000.000 Bit.',
  },
  {
    id: 'ex-bild-05',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'medium',
    question: 'Ein Bild benötigt 4.000.000 Bit Speicherplatz. Wie viele Byte sind das?',
    correctAnswer: '500000',
    explanation: 'Byte = Bit / 8 = 4.000.000 / 8 = 500.000 Byte.',
  },
  {
    id: 'ex-bild-06',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question: 'Eine Datei ist 2.097.152 Byte groß. Wie viele MiB sind das?',
    correctAnswer: '2',
    explanation: '2.097.152 / 1024 = 2048 KiB. 2048 / 1024 = 2 MiB.',
  },
  {
    id: 'ex-bild-07',
    topicSlug: TOPIC_SLUG,
    type: 'calculation',
    difficulty: 'hard',
    question:
      'Ein Bild ist 15,24 cm breit und 10,16 cm hoch, aufgelöst mit 300 DPI und einer Farbtiefe von 24 Bit. Wie viele Byte groß ist die Bilddatei?',
    correctAnswer: '6480000',
    explanation:
      '15,24 / 2,54 = 6 Zoll, 10,16 / 2,54 = 4 Zoll. 6 × 300 = 1800 px, 4 × 300 = 1200 px. Gesamtpixel = 1800 × 1200 = 2.160.000. Bit = 2.160.000 × 24 = 51.840.000 Bit. Byte = 51.840.000 / 8 = 6.480.000 Byte.',
  },
  {
    id: 'ex-bild-08',
    topicSlug: TOPIC_SLUG,
    type: 'single-choice',
    difficulty: 'easy',
    question: 'Welche Reihenfolge ist bei der Bildgrößen-Berechnung korrekt?',
    options: [
      { id: 'a', text: 'cm → Zoll → Pixel → Bit → Byte' },
      { id: 'b', text: 'Pixel → cm → Bit → Zoll → Byte' },
      { id: 'c', text: 'Byte → Bit → Pixel → Zoll → cm' },
    ],
    correctAnswer: 'a',
    explanation: 'Der Rechenweg läuft immer cm → Zoll → Pixel → Gesamtpixel → Bit → Byte (→ KiB → MiB → GiB).',
  },
  {
    id: 'ex-bild-09',
    topicSlug: TOPIC_SLUG,
    type: 'true-false',
    difficulty: 'medium',
    question: '1 MiB entspricht 1000 KiB.',
    options: [
      { id: 'wahr', text: 'Wahr' },
      { id: 'falsch', text: 'Falsch' },
    ],
    correctAnswer: 'falsch',
    explanation: '1 MiB entspricht 1024 KiB, nicht 1000 KiB – bei den binären Einheiten wird immer durch 1024 geteilt.',
  },
]

export const bildgroesseTopic: Topic = {
  id: 'topic-it-grundlagen-bildgroesse',
  slug: TOPIC_SLUG,
  moduleSlug: 'it-grundlagen',
  title: 'Bildgröße / Datengröße',
  shortIntro: 'Von der Bildgröße in Zentimetern bis zur Dateigröße in Bit, Byte, KiB, MiB und GiB.',
  order: 7,
  keyPoints: [
    'Der Rechenweg läuft immer in dieser Reihenfolge: cm → Zoll → Pixel → Gesamtpixel → Bit → Byte → KiB → MiB → GiB.',
    '1 Zoll = 2,54 cm.',
    'Gesamtpixel = Breite (Pixel) × Höhe (Pixel).',
    'Bit = Gesamtpixel × Farbtiefe; Byte = Bit / 8; jede weitere Stufe (KiB, MiB, GiB) teilt erneut durch 1024.',
  ],
  exercises: bildgroesseExercises,
  content: [
    { type: 'heading', level: 2, text: 'Rastergrafik' },
    {
      type: 'paragraph',
      text: 'Eine Rastergrafik besteht aus Pixeln. Mehr Pixel bedeuten in der Regel eine höhere Bildauflösung. Die Gesamtzahl der Pixel ergibt sich aus Breite mal Höhe.',
    },
    {
      type: 'key-points',
      items: ['Gesamtpixel = Breite × Höhe'],
    },
    {
      type: 'example',
      title: 'Gesamtpixel berechnen',
      text: '1500 × 1050 Pixel ergeben 1.575.000 Pixel.',
    },

    { type: 'heading', level: 2, text: 'DPI' },
    {
      type: 'paragraph',
      text: 'DPI steht für „Dots per Inch" – die Anzahl der Bildpunkte pro Zoll. 1 Zoll entspricht 2,54 cm.',
    },
    {
      type: 'key-points',
      items: ['1 Zoll = 2,54 cm', 'Zoll = cm / 2,54'],
    },
    {
      type: 'example',
      title: 'cm in Zoll umrechnen',
      text: '10 cm / 2,54 ≈ 3,937 Zoll.',
    },

    { type: 'heading', level: 2, text: 'Zoll → Pixel' },
    {
      type: 'key-points',
      items: ['Pixel = Zoll × DPI'],
    },
    {
      type: 'example',
      title: 'Zoll in Pixel umrechnen',
      text: '3,937 Zoll × 300 DPI ≈ 1181 Pixel.',
    },

    { type: 'heading', level: 2, text: 'Gesamtpixel' },
    {
      type: 'example',
      title: 'Gesamtpixel aus Breite und Höhe',
      text: '1181 × 945 ≈ 1.116.045 Pixel.',
    },

    { type: 'heading', level: 2, text: 'Farbtiefe' },
    {
      type: 'paragraph',
      text: 'Die Farbtiefe beschreibt, wie viele Bit benutzt werden, um einen einzelnen Pixel zu speichern.',
    },
    {
      type: 'example',
      title: 'Bit aus Pixeln und Farbtiefe berechnen (24 Bit)',
      text: '2.000.000 Pixel × 24 Bit = 48.000.000 Bit.',
    },

    { type: 'heading', level: 2, text: 'Bit → Byte' },
    {
      type: 'key-points',
      items: ['8 Bit = 1 Byte'],
    },
    {
      type: 'example',
      title: 'Bit in Byte umrechnen',
      text: '48.000.000 Bit / 8 = 6.000.000 Byte.',
    },

    { type: 'heading', level: 2, text: 'Byte → KiB → MiB → GiB' },
    {
      type: 'paragraph',
      text: 'Ab hier wird mit den binären Einheiten weitergerechnet.',
    },
    {
      type: 'key-points',
      items: ['1 KiB = 1024 Byte', '1 MiB = 1024 KiB', '1 GiB = 1024 MiB'],
    },
    {
      type: 'example',
      title: 'Byte in KiB und MiB umrechnen',
      text: '6.000.000 Byte / 1024 ≈ 5859,38 KiB; 5859,38 / 1024 ≈ 5,72 MiB.',
    },
    {
      type: 'insight',
      title: 'Zusatzwissen: KB oder KiB?',
      text: 'In der Werbung und auf manchen Datenträgern wird oft mit 1 KB = 1000 Byte gerechnet (dezimal), während Betriebssysteme meist 1 KiB = 1024 Byte (binär) verwenden. Das erklärt, warum eine „500-GB-Festplatte" im Explorer als etwas weniger als 500 GiB angezeigt wird. In dieser Lektion – und in der Prüfung, sofern nichts anderes angegeben ist – wird durchgehend mit den binären Einheiten (1024) gerechnet.',
    },

    { type: 'heading', level: 2, text: 'Vollständige Bildgrößen-Berechnung' },
    {
      type: 'illustration',
      component: 'image-size-pipeline',
      caption: 'Die Lernreihenfolge fasst alle Schritte zusammen: cm → Zoll → Pixel → Gesamtpixel → Bit → Byte → KiB → MiB → GiB.',
    },
    {
      type: 'paragraph',
      text: 'Die Lernreihenfolge fasst alle Schritte zusammen: cm → Zoll → Pixel → Gesamtpixel → Bit → Byte → KiB → MiB → GiB.',
    },
    {
      type: 'example',
      title: 'Beispiel: Breite 12,7 cm, Höhe 8,89 cm, 300 DPI, 8 Bit Farbtiefe',
      text: '12,7 / 2,54 = 5 Zoll. 8,89 / 2,54 = 3,5 Zoll. 5 × 300 = 1500 Pixel. 3,5 × 300 = 1050 Pixel. 1500 × 1050 = 1.575.000 Pixel. Bei 8 Bit Farbtiefe: 1.575.000 × 8 = 12.600.000 Bit. 12.600.000 / 8 = 1.575.000 Byte.',
    },
    {
      type: 'exam-tip',
      text: 'Prüfungsstrategie: Rechne die Kette immer Schritt für Schritt in der festen Reihenfolge durch und notiere nach jedem Schritt das Zwischenergebnis (Zoll, dann Pixel je Seite, dann Gesamtpixel, dann Bit, dann Byte). So lässt sich ein Rechenfehler leicht einer einzelnen Stelle zuordnen.',
    },
    {
      type: 'interactive',
      component: 'bildgroesse-calculator',
      caption: 'Verändere Breite, Höhe, DPI und Farbtiefe und beobachte, wie sich jeder Zwischenschritt ändert.',
    },
  ],
}
