import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss12Slug = 'hintergruende-farben'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss12Slug + '-' + id,
  topicSlug: htmlCss12Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss12Topic: Topic = {
  id: 'topic-html-css-hintergruende-farben',
  slug: htmlCss12Slug,
  moduleSlug: 'html-css',
  title: 'Hintergründe, Farben & Verläufe',
  shortIntro: 'Farbmodelle (HEX, RGB, HSL), background-image, background-size (cover/contain), Wiederholungen und lineare Farbverläufe.',
  order: 12,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du beherrschst die Farbmodelle des Webs (HEX, RGBA, HSL), weißt, wie background-image mit cover und center perfekt skalierende Hero-Banner erzeugt und erstellst moderne CSS-Gradients.'),

    h('1. Farbmodelle im Web'),
    table(['Format', 'Syntax-Beispiel', 'Erklärung'], [
      ['Hexadezimal (HEX)', '#1e293b oder #fff', 'RGB in Hexadezimalwerten von 00 bis FF.'],
      ['RGB / RGBA', 'rgb(30, 41, 59) oder rgba(0, 0, 0, 0.5)', 'Rot, Grün, Blau von 0-255. Das vierte Argument Alpha (0.0 bis 1.0) definiert Transparenz.'],
      ['HSL / HSLA', 'hsl(215, 28%, 17%)', 'Farbton (Hue in Grad 0-360), Sättigung (Saturation %) und Helligkeit (Lightness %).']
    ]),

    h('2. Professionelle Hintergrundbilder mit CSS'),
    p('Um ein Hintergrundbild responsiv und ohne Kachelung über die gesamte Box zu spannen, kombiniert man vier Schlüssel-Eigenschaften:'),
    code('.hero-section {\n  background-image: url("images/hero.jpg");\n  background-repeat: no-repeat; /* Keine Kachelung */\n  background-position: center center; /* Zentrierte Ausrichtung */\n  background-size: cover; /* Füllt Container komplett aus, schneidet Ränder passend ab */\n  min-height: 400px;\n}', 'css'),
    p('Unterschied cover vs. contain:'),
    list(
      'background-size: cover: Das Bild füllt den Container vollständig aus. Überstehende Teile werden beschnitten, es entstehen jedoch niemals weiße Ränder.',
      'background-size: contain: Das Bild wird so skaliert, dass es VOLLSTÄNDIG sichtbar ist. Kann zu Freiräumen (Letterboxing) führen.'
    ),

    h('3. Lineare Farbverläufe (linear-gradient)'),
    code('.gradient-card {\n  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);\n  color: white;\n}', 'css'),

    h('4. Interaktive Live-Sandbox'),
    h('5. Original-Aufgabe 10.0_CSS-Start (Sonnen-Beispiel) & Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Gestalte die Galaxie- und Sonnensystem-Übersicht mit dunklem Weltraumhintergrund, Bild-Zentrierung und RGBA-Transparenzen.'),
    code(`/* Aus 10.0_CSS-Start-Sonnen-Beispiel/styles.css (Offizielle Dozentenlösung) */
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #050714;
  color: #ffffff;
}

.hero-space {
  background-image: url('images/interstellar.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 350px;
}

.overlay-panel {
  background-color: rgba(15, 23, 42, 0.75); /* 75% Deckkraft */
  backdrop-filter: blur(4px);
  padding: 24px;
  border-radius: 8px;
}`, 'css'),

    interactive('html-css-sandbox', 'Experimentiere mit Verläufen und Hintergrund-Sizing'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Background-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/Background-Kurzreferenz.html)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle eine Hero-Section mit einem zentrierten Hintergrundbild, background-size: cover und einem abgedunkelten Verlauf als Overlay.'),
    practice('praxis-2', 'Erläutere den Unterschied zwischen background-size: cover und background-size: contain.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-12-1',
      lessonId: 'topic-html-css-hintergruende-farben',
      type: 'multiple-choice',
      question: 'Was bewirkt background-size: cover?',
      answers: [
        { id: 'a1', text: 'Das Bild skaliert so, dass die gesamte Fläche des Containers gefüllt ist; überstehende Ränder werden abgeschnitten.' },
        { id: 'a2', text: 'Das Bild wird unverzerrt und ohne Beschnitt eingepasst, es bleiben Ränder.' },
        { id: 'a3', text: 'Das Bild wird transparent dargestellt.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Cover garantiert lückenlose Abdeckung ohne Verzerrung des Seitenverhältnisses.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-12-2',
      lessonId: 'topic-html-css-hintergruende-farben',
      type: 'multiple-choice',
      question: 'Wofür steht das A in rgba(59, 130, 246, 0.5)?',
      answers: [
        { id: 'a1', text: 'Alpha-Kanal für den Transparenzwert (0.0 = voll transparent, 1.0 = voll deckend).' },
        { id: 'a2', text: 'Animationsgeschwindigkeit' },
        { id: 'a3', text: 'Ausrichtung (Alignment)' }
      ],
      correctAnswer: 'a1',
      explanation: 'Der Alpha-Kanal steuert die Deckkraft der Farbe.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-12-3',
      lessonId: 'topic-html-css-hintergruende-farben',
      type: 'multiple-choice',
      question: 'Mit welcher CSS-Funktion erzeugt man einen linearen Farbverlauf?',
      answers: [
        { id: 'a1', text: 'linear-gradient(...)' },
        { id: 'a2', text: 'color-blend(...)' },
        { id: 'a3', text: 'gradient-fill(...)' }
      ],
      correctAnswer: 'a1',
      explanation: 'linear-gradient(direction, color1, color2, ...) generiert verlaufende Farbmuster.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
