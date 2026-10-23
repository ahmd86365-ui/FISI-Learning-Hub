import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss07Slug = 'css-syntax'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss07Slug + '-' + id,
  topicSlug: htmlCss07Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss07Topic: Topic = {
  id: 'topic-html-css-css-syntax',
  slug: htmlCss07Slug,
  moduleSlug: 'html-css',
  title: 'CSS-Grundlagen, Syntax & Einbindung',
  shortIntro: 'Selektoren, Deklarationsblöcke, Eigenschaften, Werte, Maßeinheiten und die drei Methoden der Einbindung.',
  order: 7,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du lernst den exakten Aufbau einer CSS-Regel kennen, verstehst den Unterschied zwischen Inline-, Internen- und Externen Styles und weißt, warum externe Stylesheets der professionelle Standard sind.'),

    h('1. Anatomie einer CSS-Regel'),
    p('Eine CSS-Regel besteht aus einem Selektor und einem Deklarationsblock in geschweiften Klammern {}. Jeder Deklarationsblock enthält eine oder mehrere Eigenschaft-Wert-Paare:'),
    code('selektor {\n  eigenschaft: wert;\n  weitere-eigenschaft: wert;\n}', 'css'),
    list(
      'Selektor: Bestimmt, welches Element im HTML angesprochen wird (z. B. h1, .btn).',
      'Eigenschaft (Property): Das visuelle Merkmal, das gestaltet werden soll (z. B. color, font-size).',
      'Wert (Value): Der konkrete Gestaltungswert (z. B. #2563eb, 18px). Jeder Wert endet mit einem Semikolon (;).'
    ),

    h('2. Die drei Methoden der CSS-Einbindung'),
    table(['Methode', 'Syntax / Ort', 'Bewertung & Best Practice'], [
      ['Externe CSS-Datei', '<link rel="stylesheet" href="style.css"> im <head>', 'Best Practice! Trennung von Struktur und Design, browser-caching-fähig, auf allen Unterseiten wiederverwendbar.'],
      ['Internes Stylesheet', '<style> h1 { color: red; } </style> im <head>', 'Nur sinnvoll für seitenspezifische Einzelseiten oder schnelle Prototypen.'],
      ['Inline-Style', '<p style="color: red; font-size: 16px;">Text</p>', 'Schlechte Praxis! Zerstört die Trennung, unmöglich global zu pflegen, extrem hohe Spezifität.']
    ]),

    h('3. Wichtige CSS-Maßeinheiten'),
    table(['Einheit', 'Kategorie', 'Bedeutung & Einsatzzweck'], [
      ['px (Pixel)', 'Absolut', 'Feste Bildschirmpixel. Gut für Rahmen und Schatten, starr bei Skalierung.'],
      ['rem (Root EM)', 'Relativ', 'Relativ zur Schriftgröße des html-Wurzelelements (1rem = Standard 16px). Moderner Standard für Abstände & Typo!'],
      ['% (Prozent)', 'Relativ', 'Relativ zur Breite des Eltern-Elements. Zentral für flexible Layout-Spalten.'],
      ['vw / vh', 'Relativ', 'Viewport Width / Height: 100vw = 100% der sichtbaren Browserbreite, 100vh = 100% Bildschirmhöhe.']
    ]),

    h('4. Interaktive Live-Sandbox'),
    h('5. Original-Aufgabe 10.1_CSS-Start & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Binde eine externe CSS-Datei styles.css ein und formatiere h1, p und background-color sauber nach CSS-Syntaxregeln.'),
    code(`/* Aus 10.1_CSS-Start-Lösung/styles-aufgabe1.css (Offizielle Dozentenlösung) */
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  background-color: #f8fafc;
  color: #1e293b;
  line-height: 1.5;
}

h1 {
  font-family: 'Georgia', serif;
  font-size: 32px;
  color: #0f172a;
  margin-bottom: 16px;
}

p {
  color: #475569;
  margin-bottom: 12px;
}`, 'css'),

    interactive('html-css-sandbox', 'Probiere verschiedene CSS-Eigenschaften und Einheiten aus'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Einführung 2.0 (PDF)](/resources/html-css/praesentation/2_CSS-Einführung2.0.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Binde ein externes Stylesheet styles.css korrekt in das <head>-Tag eines HTML-Dokuments ein.'),
    practice('praxis-2', 'Vergleiche die drei Einbindungsarten von CSS (extern, intern, inline) hinsichtlich Vor- und Nachteilen.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-07-1',
      lessonId: 'topic-html-css-css-syntax',
      type: 'multiple-choice',
      question: 'Wie lautet das HTML-Tag zur Einbindung einer externen CSS-Datei?',
      answers: [
        { id: 'a1', text: '<link rel="stylesheet" href="style.css">' },
        { id: 'a2', text: '<style src="style.css">' },
        { id: 'a3', text: '<css link="style.css">' }
      ],
      correctAnswer: 'a1',
      explanation: 'Das <link>-Element im <head> bindet externe Stylesheets modular und wartbar ein.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-07-2',
      lessonId: 'topic-html-css-css-syntax',
      type: 'multiple-choice',
      question: 'Aus welchen zwei Hauptbestandteilen besteht eine CSS-Regel?',
      answers: [
        { id: 'a1', text: 'Selektor und Deklarationsblock (in geschweiften Klammern mit Eigenschaft-Wert-Paaren).' },
        { id: 'a2', text: 'HTML-Kopf und Dokument-Body.' },
        { id: 'a3', text: 'Media-Query und Breakpoint-ID.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Der Selektor wählt die Elemente aus, der Block definiert deren visuelle Eigenschaften.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-07-3',
      lessonId: 'topic-html-css-css-syntax',
      type: 'multiple-choice',
      question: 'Warum gilt die Verwendung von Inline-Styles (style-Attribut) als Anti-Pattern?',
      answers: [
        { id: 'a1', text: 'Weil Inhalt und Design vermischt werden, keine zentrale Wiederverwendbarkeit existiert und Spezifitätskonflikte entstehen.' },
        { id: 'a2', text: 'Weil der Browser Inline-Styles grundsätzlich ignoriert.' },
        { id: 'a3', text: 'Weil Inline-Styles nur mit JavaScript gerendert werden.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Inline-Styles erschweren Wartung, Responsive Design und Theming drastisch.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
