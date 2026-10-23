import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss18Slug = '8-point-grid'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss18Slug + '-' + id,
  topicSlug: htmlCss18Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss18Topic: Topic = {
  id: 'topic-html-css-8-point-grid',
  slug: htmlCss18Slug,
  moduleSlug: 'html-css',
  title: 'UI-Design: Das 8-Point-Grid-System',
  shortIntro: 'Vollständige Design-Methodik: 8px-Raster, 4px-Halbschritte (Soft Grid), Konsistenz, Typografie-Rhythmus und Vermeidung von Subpixel-Rendering.',
  order: 18,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst, warum moderne UI-Designs (Google Material, Apple Human Interface, Tailwind) auf dem 8-Point-Grid basieren und wie du Abstände, Buttons und Typografie konsistent konstruierst.'),

    h('1. Warum ein 8-Point-Grid?'),
    p('Laut Dozent Robert Reich (Präsentation 6) ist der Hauptgrund schlicht KONSISTENZ:'),
    list(
      'Visuelle Harmonie: Abstände und Elemente mit einem 8er-Raster sehen automatisch aufgeräumt und „einfach richtig“ aus.',
      'Enorme Geschwindigkeitssteigerung: Entwickler und Designer müssen nicht mehr bei jedem Pixel feilschen (13px? 15px? 17px?), sondern wählen strikt aus der 8er-Reihe: 8, 16, 24, 32, 40, 48, 64px.',
      'Perfekte Skalierung: Fast alle gängigen Bildschirmauflösungen (1920x1080, 2560x1440, etc.) und Displayskalierungen (@1.5x, @2x, @3x Retina) sind durch 8 ohne unschöne krumme Bruchzahlen teilbar.'
    ),

    h('2. Das Prinzip der 8er-Schritte'),
    table(['Stufe', 'Pixel-Wert', 'Typische UI-Verwendung'], [
      ['0.5x (Halbschritt)', '4px', 'Micro-Spacing: Abstand zwischen Icon und Text, kleine Badges'],
      ['1x', '8px', 'Kompakte Abstände: Text zu Label, Innenabstand kleiner Buttons'],
      ['2x', '16px', 'Standard-Abstand: Fließtext-Absätze, Innenabstand regulärer Cards'],
      ['3x', '24px', 'Großzügiger Abstand: Zwischen Überschrift und Text, Card-Padding'],
      ['4x', '32px', 'Komponenten-Abstand: Zwischen unabhängigen Blöcken'],
      ['5x', '40px', 'Standard-Komponentenhöhe: Eingabefelder (Inputs) und Buttons'],
      ['6x', '48px', 'Ergonomische Touch-Target Mindestgröße für mobile Schaltflächen'],
      ['8x', '64px', 'Sektions-Abstand: Vertikaler Raum zwischen Webseiten-Abschnitten']
    ]),

    h('3. Vertikaler Rhythmus in der Typografie'),
    p('Auch die Zeilenhöhe (line-height) muss auf das Raster abgestimmt werden:'),
    code('h1 {\n  font-size: 32px;\n  line-height: 40px; /* 5 x 8px */\n  margin-bottom: 16px; /* 2 x 8px */\n}\np {\n  font-size: 16px;\n  line-height: 24px; /* 3 x 8px */\n  margin-bottom: 16px; /* 2 x 8px */\n}', 'css'),

    h('4. Original-Übung BONUS_8-point-grid'),
    p('Aufgabe: Baue eine Produktkarte (Card) mit Titel, Text und Button, bei der alle Maße lückenlos dem 8-Point-Grid folgen.'),
    h('Offizielle Musterlösung:', 3),
    code('.grid-card {\n  box-sizing: border-box;\n  max-width: 320px; /* 40 x 8px */\n  padding: 24px;   /* 3 x 8px */\n  border-radius: 8px; /* 1 x 8px */\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n}\n.grid-card h3 {\n  margin: 0 0 8px 0; /* 1 x 8px */\n  font-size: 24px;\n  line-height: 32px; /* 4 x 8px */\n}\n.grid-card p {\n  margin: 0 0 16px 0; /* 2 x 8px */\n  font-size: 16px;\n  line-height: 24px; /* 3 x 8px */\n  color: #64748b;\n}\n.grid-card button {\n  height: 40px;      /* 5 x 8px */\n  padding: 0 16px;   /* 2 x 8px */\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 4px; /* 0.5 x 8px */\n  cursor: pointer;\n}', 'css'),

    h('5. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Inspiziere die 8-Point-Grid Card im Editor'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: DESIGN 8-Point-Grid (PDF)](/resources/html-css/praesentation/6_DESIGN-8-Point-Grid.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Überarbeite ein bestehendes Card-CSS so, dass alle Margins, Paddings und line-height-Angaben strikt dem 8-Point-Grid entsprechen.'),
    practice('praxis-2', 'Warum verhindert das 8-Point-Grid unschöne Rendering-Artefakte und Subpixel-Verzerrungen bei Monitoren mit 1.5x oder 2x Skalierung?')
  ],
  flashcards: [
    {
      id: 'fc-html-css-18-1',
      lessonId: 'topic-html-css-8-point-grid',
      type: 'multiple-choice',
      question: 'Welche Schrittweite nutzt das standardmäßige 8-Point-Grid-System?',
      answers: [
        { id: 'a1', text: 'Vielfache von 8 Pixeln (8, 16, 24, 32, 40, 48, 64, ...)' },
        { id: 'a2', text: 'Vielfache von 5 Pixeln (5, 10, 15, 20, ...)' },
        { id: 'a3', text: 'Vielfache von 10 Pixeln (10, 20, 30, 40, ...)' }
      ],
      correctAnswer: 'a1',
      explanation: 'Das Raster vereinheitlicht Margins, Paddings und Komponentenhöhen im UI-Design.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-18-2',
      lessonId: 'topic-html-css-8-point-grid',
      type: 'multiple-choice',
      question: 'Welcher Unterteilungs-Schritt (Halbschritt) ist im 8-Point-Grid für feine Abstände zulässig?',
      answers: [
        { id: 'a1', text: '4 Pixel' },
        { id: 'a2', text: '2 Pixel' },
        { id: 'a3', text: '6 Pixel' }
      ],
      correctAnswer: 'a1',
      explanation: '4px dient als Ausnahmeschritt für enge Abstände, Badges oder kleine Icons.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-18-3',
      lessonId: 'topic-html-css-8-point-grid',
      type: 'multiple-choice',
      question: 'Was versteht man unter dem vertikalen Rhythmus eines Textlayouts?',
      answers: [
        { id: 'a1', text: 'Dass alle Zeilenhöhen (line-height) und Textabstände (margin-bottom) Vielfache desselben Grundrasters sind.' },
        { id: 'a2', text: 'Die Schnelligkeit von CSS-Animationen beim Scrollen.' },
        { id: 'a3', text: 'Die automatische Umrechnung von Hex-Farben in HSL.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Vertikaler Rhythmus erzeugt ein harmonisches, professionelles Schriftbild.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
