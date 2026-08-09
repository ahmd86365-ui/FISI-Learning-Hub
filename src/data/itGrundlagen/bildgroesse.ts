import type { Topic } from '../../types/content'

/**
 * Source: written material supplied directly for this platform (not from
 * the PDF school files). No exercise worksheets were provided for this
 * topic, so per the "architecture only unless instructed otherwise" rule,
 * `exercises` stays empty rather than generating new questions.
 */
export const bildgroesseTopic: Topic = {
  id: 'topic-it-grundlagen-bildgroesse',
  slug: 'bildgroesse-datengroesse',
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
  exercises: [],
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

    { type: 'heading', level: 2, text: 'Vollständige Bildgrößen-Berechnung' },
    {
      type: 'paragraph',
      text: 'Die Lernreihenfolge fasst alle Schritte zusammen: cm → Zoll → Pixel → Gesamtpixel → Bit → Byte → KiB → MiB → GiB.',
    },
    {
      type: 'example',
      title: 'Beispiel: Breite 12,7 cm, Höhe 8,89 cm, 300 DPI, 8 Bit Farbtiefe',
      text: '12,7 / 2,54 = 5 Zoll. 8,89 / 2,54 = 3,5 Zoll. 5 × 300 = 1500 Pixel. 3,5 × 300 = 1050 Pixel. 1500 × 1050 = 1.575.000 Pixel. Bei 8 Bit Farbtiefe: 1.575.000 × 8 = 12.600.000 Bit. 12.600.000 / 8 = 1.575.000 Byte.',
    },
  ],
}
