import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss19Slug = 'klausurvorbereitung'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss19Slug + '-' + id,
  topicSlug: htmlCss19Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss19Topic: Topic = {
  id: 'topic-html-css-klausurvorbereitung',
  slug: htmlCss19Slug,
  moduleSlug: 'html-css',
  title: 'Klausurvorbereitung: Themen, Aufgaben & Offizielle Lösungen',
  shortIntro: 'Vollständige Prüfungsvorbereitung: Der originale IHK-Klausurthemen-Katalog, alle 6 Original-Klausuraufgaben und die offiziellen Musterlösungen.',
  order: 19,
  content: [
    h('Lernziele dieser Lektion'),
    p('In dieser Lektion gehst du die verbindliche Klausurthemen-Checkliste durch, rechnest die Original-Boxmodell-Aufgaben und programmierst die vollständige Prüfungs-Website mit Flexbox und Media Queries.'),

    h('1. Offizielle Klausurthemen-Checkliste (aus Klausurthemen.pdf)'),
    table(['Themenbereich', 'Geforderte Kernkompetenzen laut Dozent'], [
      ['HTML Grundaufbau', '<!DOCTYPE html>, <html>, <head>, <title>, <meta charset>, <body> fehlerfrei strukturieren.'],
      ['Tags & Container', 'Semantische Container <header>, <main>, <footer>, <aside>, <section>, <article>.'],
      ['Links & Bookmarks', 'Anker-Tags <a href="" target="_blank"> sowie interne Sprungmarken id="ziel" mit <a href="#ziel">.'],
      ['Navigation', 'Semantische Navigationsleisten mit <nav>, <ul>, <li> und <a>.'],
      ['Boxmodell', 'Margin, Padding, Border, box-sizing: border-box; Reihenfolge der Werte im Uhrzeigersinn.'],
      ['CSS Selektoren', 'Die 4 Selektortypen (Universal, Typ, Klasse, ID) und ihre Spezifität.'],
      ['CSS Kombinatoren', 'Nachfahrenselektor (Leerzeichen) vs. direkter Kindselektor (>).'],
      ['Flexbox', 'display: flex, flex-direction (row/column), justify-content, align-items, flex-wrap.'],
      ['Media Queries', 'Desktop-zu-Mobile Umschaltung bei Breakpoints (max-width: 600px).']
    ]),

    h('2. Original-Klausuraufgabe 1: HTML-Tags & Container'),
    p('Aufgabenstellung: Schreibe das HTML-Grundgerüst mit Header, Navigationsliste (Home, Kontakt, externer Link zu Amazon in neuem Tab), einer Sidebar mit internem Bookmark und einem Footer.'),
    h('Offizielle Musterlösung (1_HTML-Tags_und _Container.html):', 3),
    code('<!doctype html>\n<html lang="de">\n<head>\n  <meta charset="utf-8">\n  <title>Klausurvorbereitung</title>\n</head>\n<body>\n  <header>\n    <nav>\n      <ul>\n        <li><a href="index.html">Home</a></li>\n        <li><a href="kontakt.html">Kontakt</a></li>\n        <li><a href="https://www.amazon.de" target="_blank" rel="noopener">Amazon</a></li>\n      </ul>\n    </nav>\n  </header>\n  <aside>\n    <ul>\n      <li><a href="#seitenanfang">Nach oben</a></li>\n    </ul>\n  </aside>\n  <footer>\n    <p>Home | Kontakt | Impressum</p>\n  </footer>\n</body>\n</html>', 'html'),

    h('3. Original-Klausuraufgabe 2: Box-Modell Berechnung'),
    p('Aufgabenstellung: Bestimme die einzelnen Abstände für Oben, Rechts, Unten und Links aus den folgenden Kurzschreibweisen:'),
    p('a) padding: 24px 16px 36px 8px;\nb) margin: 16px 12px;'),
    h('Offizielle Musterlösung (2_Boxmodell.txt):', 3),
    table(['Aufgabe', 'Oben', 'Rechts', 'Unten', 'Links', 'Erläuterung'], [
      ['a) padding: 24px 16px 36px 8px;', '24px', '16px', '36px', '8px', 'Vier Werte: Top, Right, Bottom, Left (Uhrzeigersinn).'],
      ['b) margin: 16px 12px;', '16px', '12px', '16px', '12px', 'Zwei Werte: 1. Wert vertikal (Oben/Unten), 2. Wert horizontal (Rechts/Links).']
    ]),

    h('4. Original-Klausuraufgabe 3 & 4: CSS-Selektoren & Kombinatoren'),
    p('Aufgabenstellung: Formatiere die Überschrift h2 innerhalb einer Card sowie das darin verschachtelte Bild über einen Kombinator.'),
    h('Offizielle Musterlösung (4_CSS-Kombinatoren.css):', 3),
    code('/* CSS-Kombinatoren */\n.card h2 {\n  font-family: Arial, Verdana, sans-serif;\n  font-size: 24px;\n}\n\n/* Mehrere valide Optionen das Bild anzusprechen:\n   .card div img\n   .card > div > img\n   .card div > img\n   .card img\n*/\n.card div img {\n  width: 100%;\n  height: auto;\n}\n\n.card div h3 {\n  font-family: Verdana, sans-serif;\n  font-size: 18px;\n  color: #334155;\n}', 'css'),

    h('5. Original-Klausuraufgabe 5: CSS-Positionierung'),
    p('Aufgabenstellung: Ein Container soll als Bezugspunkt dienen, ein Icon soll dauerhaft am Browserfenster haften und ein Bild soll an der unteren linken Ecke des Containers kleben.'),
    h('Offizielle Musterlösung (5_CSS-Position.css):', 3),
    code('/* position für den Bezugs-Container alles außer static möglich */\n.container {\n  position: relative;\n}\n\n/* position: fixed, da am body/Browserfenster ausgerichtet */\n.icon {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n}\n\n/* position: absolute, am übergeordneten Container ausgerichtet */\n.image {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}', 'css'),

    h('6. Original-Klausuraufgabe 6: Flexbox & Media Queries'),
    p('Aufgabenstellung: Baue eine 3-Spalten-Leiste (20%, 30%, 50%), die auf Displays unter 600px Breite automatisch in eine einspaltige Ansicht (jeweils 100%) umbricht.'),
    h('Offizielle Musterlösung (CSS-2-MediaQueries-Lösung):', 3),
    code('<section class="flex">\n  <article class="article1">Artikel 1 (20%)</article>\n  <article class="article2">Artikel 2 (30%)</article>\n  <article class="article3">Artikel 3 (50%)</article>\n</section>\n\n<style>\n.flex {\n  display: flex;\n  flex-direction: row;\n}\n.article1 { width: 20%; background: #fed7aa; }\n.article2 { width: 30%; background: #fef08a; }\n.article3 { width: 50%; background: #bbf7d0; }\n\n@media only screen and (max-width: 600px) {\n  .flex {\n    flex-direction: column;\n  }\n  .article1, .article2, .article3 {\n    width: 100%;\n  }\n}\n</style>', 'html'),

    h('7. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Führe die vollständige Klausurlösung in der Sandbox aus'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Offizielle Klausurthemen-Übersicht (PDF)](/resources/html-css/Klausurthemen.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Löse die Original-Klausuraufgabe: Gegeben ist ein Container mit padding: 24px 16px 36px 8px; und margin: 16px 12px;. Benenne die jeweiligen Abstände für Oben, Rechts, Unten und Links.'),
    practice('praxis-2', 'Erstelle den vollständigen HTML- und CSS-Code für die Klausuraufgabe 2 (Media Queries & Flexbox) und überprüfe ihn in der Sandbox.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-19-1',
      lessonId: 'topic-html-css-klausurvorbereitung',
      type: 'multiple-choice',
      question: 'Welche 4 Werte werden bei padding: 24px 16px 36px 8px; zugewiesen?',
      answers: [
        { id: 'a1', text: 'Oben: 24px, Rechts: 16px, Unten: 36px, Links: 8px (im Uhrzeigersinn).' },
        { id: 'a2', text: 'Oben: 24px, Unten: 16px, Links: 36px, Rechts: 8px.' },
        { id: 'a3', text: 'Links: 24px, Rechts: 16px, Oben: 36px, Unten: 8px.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Die Reihenfolge der vier Werte lautet immer Top, Right, Bottom, Left.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-19-2',
      lessonId: 'topic-html-css-klausurvorbereitung',
      type: 'multiple-choice',
      question: 'Welche 2 Werte werden bei margin: 16px 12px; zugewiesen?',
      answers: [
        { id: 'a1', text: 'Oben & Unten: 16px, Rechts & Links: 12px.' },
        { id: 'a2', text: 'Oben: 16px, Rechts: 12px, Unten: 0px, Links: 0px.' },
        { id: 'a3', text: 'Links: 16px, Rechts: 12px, Vertikal: 0px.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Bei zwei Werten steht der erste für vertikal (oben/unten) und der zweite für horizontal (rechts/links).',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-19-3',
      lessonId: 'topic-html-css-klausurvorbereitung',
      type: 'multiple-choice',
      question: 'Welche position-Eigenschaft eignet sich für ein Menü-Icon, das dauerhaft am Viewport-Fenster verankert sein soll?',
      answers: [
        { id: 'a1', text: 'position: fixed;' },
        { id: 'a2', text: 'position: static;' },
        { id: 'a3', text: 'position: relative;' }
      ],
      correctAnswer: 'a1',
      explanation: 'position: fixed löst das Element aus dem normalen Fluss und verankert es am Bildschirmfenster.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
