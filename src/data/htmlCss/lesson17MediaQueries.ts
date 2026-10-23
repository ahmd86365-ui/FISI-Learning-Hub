import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss17Slug = 'media-queries'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss17Slug + '-' + id,
  topicSlug: htmlCss17Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss17Topic: Topic = {
  id: 'topic-html-css-media-queries',
  slug: htmlCss17Slug,
  moduleSlug: 'html-css',
  title: 'CSS Media Queries & Responsive Breakpoints',
  shortIntro: 'Vollständige Anleitung zu Media Queries: @media-Syntax, min-width vs. max-width, Mobile-First-Strategie und Desktop-zu-Mobile Layoutumschaltung.',
  order: 17,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst die Arbeitsweise von Media Queries im Browser, beherrschst Breakpoint-Strategien und kannst mehrspaltige Desktop-Layouts responsiv in mobile Einspalter transformieren.'),

    h('1. Was ist Responsive Webdesign?'),
    p('Responsive Webdesign (RWD) bedeutet, dass sich Layout, Schriftgrößen und Navigation einer Webseite dynamisch an die Bildschirmgröße des Endgeräts (Smartphone, Tablet, Laptop, 4K-Monitor) anpassen, ohne dass separate URLs (wie veraltete m.example.com Seiten) nötig sind.'),

    h('2. Grundaufbau einer Media Query'),
    p('Eine Media Query fragt Merkmale des Anzeigegeräts ab. Sobald die definierte Bedingung zutrifft, werden die enthaltenen CSS-Regeln aktiv:'),
    code('@media (Bedingung) {\n  /* Dieser Block wird nur aktiv, wenn die Bedingung wahr ist */\n  body {\n    background-color: lightblue;\n  }\n}', 'css'),

    h('3. Die zwei Breakpoint-Philosophien'),
    table(['Ansatz', 'Syntax', 'Philosophie & Funktionsweise'], [
      ['Desktop-First', '@media (max-width: 767px) { ... }', 'Basis-CSS ist für große Bildschirme geschrieben. Media Query schrumpft und vereinfacht das Layout für Displays kleiner/gleich 767px.'],
      ['Mobile-First (Modern)', '@media (min-width: 768px) { ... }', 'Basis-CSS ist extrem schlank für Smartphones optimiert. Media Query erweitert das Design schrittweise ab einer Mindestbreite von 768px.']
    ]),

    h('4. Standard-Breakpoints in der Praxis'),
    table(['Geräteklasse', 'Typischer Breakpoint', 'Typische Layout-Anpassung'], [
      ['Smartphones (Portrait)', '< 600px / 640px', 'Einspaltig (100%), Navigation als Hamburger-Menü, reduzierte Font-Größen'],
      ['Tablets & Phablets', '601px – 1024px', '2-spaltige Anordnung, moderate Margins und Paddings'],
      ['Desktop & Laptops', '> 1024px', '3- bis 4-spaltige Raster, maximale Inhaltsbreite zentriert (max-width: 1200px)']
    ]),

    h('5. Klausurrelevantes Muster: Die Row-to-Column Transformation'),
    p('Laut Dozent Robert Reich ist die Umschaltung von flex-direction: row auf column unter 600px Bildschirmbreite DIE klassische Klausuraufgabe schlechthin:'),
    code('/* Standard Desktop: 3 Spalten nebeneinander */\n.container {\n  display: flex;\n  flex-direction: row;\n}\n.col-1 { width: 20%; }\n.col-2 { width: 30%; }\n.col-3 { width: 50%; }\n\n/* Klausur Media Query: Unter 600px umschalten auf mobile Stapelung */\n@media only screen and (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n  .col-1, .col-2, .col-3 {\n    width: 100%;\n  }\n}', 'css'),

    h('6. Hilfsklassen für Mobile-Steuerung'),
    p('In Präsentation 4 werden häufig gezielte Utility-Klassen verwendet:'),
    code('@media (max-width: 767px) {\n  .mobile-hidden {\n    display: none !important; /* Blendet Elemente auf Handys aus */\n  }\n  .mobile-column {\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n}', 'css'),

    h('7. Offizielle Klausurvorbereitung 2: Media Queries Lösung'),
    p('Vollständiger Quellcode der Prüfungsaufgabe CSS-2-MediaQueries aus dem Archiv:'),
    code('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>Klausurvorbereitung - MediaQueries</title>\n  <style>\n    .flex {\n      display: flex;\n      flex-direction: row;\n    }\n    .article1 { width: 20%; background: #fed7aa; }\n    .article2 { width: 30%; background: #fef08a; }\n    .article3 { width: 50%; background: #bbf7d0; }\n\n    @media only screen and (max-width: 600px) {\n      .flex {\n        flex-direction: column;\n      }\n      .article1, .article2, .article3 {\n        width: 100%;\n      }\n    }\n  </style>\n</head>\n<body>\n  <section class="flex">\n    <article class="article1">Artikel 1</article>\n    <article class="article2">Artikel 2</article>\n    <article class="article3">Artikel 3</article>\n  </section>\n</body>\n</html>', 'html'),

    h('8. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Verändere die Vorschaufensterbreite, um den Breakpoint zu testen'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Media Queries (PDF)](/resources/html-css/praesentation/4_CSS-Media-Queries.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Setze die Prüfungsaufgabe 2_Klausurvorbereitung-CSS-2-mediaqueries um: Unter 600px Breite müssen die drei Spalten von row (20%, 30%, 50%) auf column (jeweils 100%) umschalten.'),
    practice('praxis-2', 'Unterscheide min-width- von max-width-Breakpoints und ordne sie Mobile First vs. Desktop First zu.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-17-1',
      lessonId: 'topic-html-css-media-queries',
      type: 'multiple-choice',
      question: 'Wie lautet die CSS-Syntax für eine Media Query, die greift, wenn der Bildschirm maximal 600px breit ist?',
      answers: [
        { id: 'a1', text: '@media only screen and (max-width: 600px) { ... }' },
        { id: 'a2', text: '@device-width < 600px { ... }' },
        { id: 'a3', text: '@screen (max: 600) { ... }' }
      ],
      correctAnswer: 'a1',
      explanation: 'max-width definiert die obere Grenze, bis zu der die Regel wirksam ist.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-17-2',
      lessonId: 'topic-html-css-media-queries',
      type: 'multiple-choice',
      question: 'Was passiert typischerweise mit mehrspaltigen Flexbox-Layouts bei einem Mobile-Breakpoint?',
      answers: [
        { id: 'a1', text: 'flex-direction wechselt von row auf column und die Spaltenbreiten werden auf 100% gesetzt.' },
        { id: 'a2', text: 'Alle Spalten werden komplett unsichtbar.' },
        { id: 'a3', text: 'Die Spalten werden nebeneinander auf 33% verkleinert.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Die Spalten stapeln sich sauber untereinander für ergonomische mobile Lesbarkeit.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-17-3',
      lessonId: 'topic-html-css-media-queries',
      type: 'multiple-choice',
      question: 'Welche Bedingung in einer Media Query wird für den Mobile-First-Ansatz bevorzugt?',
      answers: [
        { id: 'a1', text: '(min-width: ...)' },
        { id: 'a2', text: '(max-width: ...)' },
        { id: 'a3', text: '(orientation: portrait)' }
      ],
      correctAnswer: 'a1',
      explanation: 'min-width erweitert das mobile Basisdesign schrittweise ab einer Mindestbreite für größere Monitore.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
