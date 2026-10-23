import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss05Slug = 'html5-semantik'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss05Slug + '-' + id,
  topicSlug: htmlCss05Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss05Topic: Topic = {
  id: 'topic-html-css-html5-semantik',
  slug: htmlCss05Slug,
  moduleSlug: 'html-css',
  title: 'HTML5-Semantik & Seitenstruktur',
  shortIntro: 'Moderne Seitenarchitektur ohne Div-Suppe: header, nav, main, section, article, aside und footer.',
  order: 5,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du lernst, warum semantische HTML5-Container reinen <div>-Elementen überlegen sind, wie eine professionelle Dokumenten-Architektur gegliedert wird und wie Screenreader davon profitieren.'),

    h('1. Schluss mit der „Div-Suppe“ (Divitis)'),
    p('Vor HTML5 wurden Webseiten fast ausschließlich aus bedeutungslosen <div>-Tags gebaut (z. B. <div id="header">, <div class="nav">). HTML5 führte semantische Strukturelemente ein, die dem Dokument eine logische, maschinenlesbare Bedeutung verleihen.'),

    h('2. Die wichtigsten semantischen Strukturelemente'),
    table(['HTML5-Tag', 'Semantische Bedeutung & Einsatzzweck'], [
      ['<header>', 'Kopfbereich einer Seite oder eines Artikels (enthält meist Logo, Titel und Navigation).'],
      ['<nav>', 'Haupt-Navigationsbereich mit Menü-Links (ul / li / a).'],
      ['<main>', 'Zentraler Hauptinhalt des Dokuments. Darf pro Seite nur EINMAL vorkommen!'],
      ['<article>', 'Eigenständiger, in sich geschlossener Inhalt (z. B. Blogbeitrag, News-Artikel, Forenpost).'],
      ['<section>', 'Thematischer Abschnitt oder Kapitel innerhalb einer Seite oder eines Artikels.'],
      ['<aside>', 'Zusatzinformationen am Rand (Sidebar, Glossar-Kasten, Banner, Autoren-Info).'],
      ['<footer>', 'Fußbereich mit Copyright, Links zu Impressum, Datenschutz und Social Media.']
    ]),

    h('3. Musteraufbau einer professionellen HTML5-Webseite'),
    code('<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantische Struktur</title>\n</head>\n<body>\n  <header>\n    <img src="logo.svg" alt="Logo">\n    <nav>\n      <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#kurse">Kurse</a></li>\n      </ul>\n    </nav>\n  </header>\n\n  <main>\n    <section>\n      <h1>Aktuelle Schulungsthemen</h1>\n      <article>\n        <h2>HTML5 Semantik</h2>\n        <p>Semantische Tags verbessern Barrierefreiheit und SEO nachhaltig.</p>\n      </article>\n    </section>\n    <aside>\n      <h3>IHK Prüfungshinweis</h3>\n      <p>Verwende stets main, header und nav statt reiner div-Container.</p>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 FISI Learning Hub. Alle Rechte vorbehalten.</p>\n  </footer>\n</body>\n</html>', 'html'),

    h('4. Interaktive Live-Sandbox'),
    h('5. Original-Aufgabe 06_Seitenstruktur & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Baue das HTML-Dokument entsprechend der Vorgabe aufbau.png mit header, nav, main, section, article und footer strukturiert auf.'),
    code(`<!-- Aus 06_Seitenstruktur_Lösung/struktur.html (Offizielle Dozentenlösung) -->
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Struktur</title>
</head>
<body>
  <header>
    <nav>
      <!-- Navigationsbereich -->
    </nav>
  </header>
  <main>
    <h1>Grundaufbau</h1>
    <section>
      <article>
        <img src="image.png" alt="Artikel 1">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr...</p>
      </article>
      <article>
        <img src="image.png" alt="Artikel 2">
        <p>At vero eos et accusam et justo duo dolores et ea rebum...</p>
      </article>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 Schulungsprojekt</p>
  </footer>
</body>
</html>`, 'html'),

    interactive('html-css-sandbox', 'Inspiziere die semantische Seitenstruktur im Live-Editor'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Skizziere die HTML5-Grundstruktur einer typischen Nachrichten-Website mit Header, Navigation, Hauptspalte mit zwei Artikeln, Sidebar und Footer.'),
    practice('praxis-2', 'Erläutere den semantischen Unterschied zwischen <section> und <article>.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-05-1',
      lessonId: 'topic-html-css-html5-semantik',
      type: 'multiple-choice',
      question: 'Welches HTML5-Element umschließt den einzigartigen Hauptinhalt einer Webseite genau einmal?',
      answers: [
        { id: 'a1', text: '<main>' },
        { id: 'a2', text: '<master>' },
        { id: 'a3', text: '<center>' }
      ],
      correctAnswer: 'a1',
      explanation: 'Das <main>-Element enthält den Hauptteil des Inhalts und darf im Dokument nicht mehrfach vorkommen.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-05-2',
      lessonId: 'topic-html-css-html5-semantik',
      type: 'multiple-choice',
      question: 'Welches Tag ist semantisch passend für einen selbstständigen, für sich stehenden Blogartikel oder News-Beitrag?',
      answers: [
        { id: 'a1', text: '<article>' },
        { id: 'a2', text: '<post>' },
        { id: 'a3', text: '<block>' }
      ],
      correctAnswer: 'a1',
      explanation: '<article> zeichnet in sich geschlossene Einheiten aus, die theoretisch unabhängig publiziert werden könnten.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-05-3',
      lessonId: 'topic-html-css-html5-semantik',
      type: 'multiple-choice',
      question: 'Wann sollte <aside> verwendet werden?',
      answers: [
        { id: 'a1', text: 'Für Inhalte, die in lockerer Beziehung zum Hauptinhalt stehen, wie Sidebars, Glossare oder Zitate.' },
        { id: 'a2', text: 'Ausschließlich für rechtliche Footer-Informationen.' },
        { id: 'a3', text: 'Für die primäre Navigation im Kopfbereich.' }
      ],
      correctAnswer: 'a1',
      explanation: '<aside> markiert Randbemerkungen, weiterführende Links oder Seitenleisten.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
