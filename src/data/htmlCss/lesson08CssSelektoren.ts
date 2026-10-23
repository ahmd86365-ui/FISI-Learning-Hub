import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss08Slug = 'css-selektoren'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const tip = (text: string): ContentBlock => ({ type: 'exam-tip', text })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss08Slug + '-' + id,
  topicSlug: htmlCss08Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss08Topic: Topic = {
  id: 'topic-html-css-css-selektoren',
  slug: htmlCss08Slug,
  moduleSlug: 'html-css',
  title: 'CSS-Selektoren, Kaskade & Spezifität',
  shortIntro: 'Typ-, Klassen-, ID- und Universalselektoren, Kaskadenregeln und die exakte Spezifitätsberechnung nach W3C-Standard.',
  order: 8,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du lernst die 4 Kern-Selektoren von CSS kennen, verstehst das Konzept der Vererbung (Cascading) und kannst Spezifitätskonflikte mathematisch exakt berechnen.'),

    h('1. Das „C“ in CSS: Cascading & Vererbung'),
    p('CSS steht für Cascading Style Sheets (stufenförmige Gestaltungsbögen). Stile werden von übergeordneten Eltern-Elementen an Kind-Elemente vererbt – es sei denn, spezifischere Regeln überschreiben diese Werte.'),
    p('Typische vererbbare Eigenschaften laut Dozent Robert Reich: color, font-family, font-size, font-weight, line-height, text-align. Box-Modell-Eigenschaften wie margin, padding, border und width werden hingegen NIEMALS automatisch vererbt.'),

    h('2. Die vier Haupt-Selektoren im Detail'),
    table(['Selektortyp', 'Syntax in CSS', 'Spezifität', 'Einsatzbereich & Bewertung'], [
      ['Universalselektor', '* { box-sizing: border-box; }', '0, 0, 0, 0', 'Wählt ausnahmslos alle Elemente. Dient ausschließlich für Mini-Resets.'],
      ['Typselektor', 'p { color: #333; }\nh1 { font-size: 24px; }', '0, 0, 0, 1', 'Spricht alle HTML-Tags dieses Namens an. Eignet sich für Standard-Typografie.'],
      ['Klassenselektor', '.card { border: 1px solid #ccc; }\n.featured { ... }', '0, 0, 1, 0', 'Beginnt mit Punkt. Best Practice für modular wiederverwendbare Komponenten.'],
      ['ID-Selektor', '#main-header { position: fixed; }', '0, 1, 0, 0', 'Beginnt mit Raute (#). Höchste Selektorgewichtung, spricht Unikate an. Sparsam einsetzen!']
    ]),

    h('3. Spezifitäts-Berechnung (Das 4-Tupel-System)'),
    p('Wenn zwei CSS-Regeln für dasselbe Element widersprüchliche Werte definieren (z. B. unterschiedliche Schriftfarben), gewinnt immer die Regel mit der höheren Spezifität.'),
    p('Die Spezifität wird als 4-stelliger Vektor (a, b, c, d) berechnet:'),
    table(['Stelle', 'Kategorie', 'Gewichtung', 'Beispiele'], [
      ['a', 'Inline-Styles', '1000', 'style="color: red;" im HTML-Tag'],
      ['b', 'ID-Selektoren', '100', '#header, #nav, #sidebar'],
      ['c', 'Klassen, Attribute & Pseudoklassen', '10', '.btn, [type="text"], :hover, :first-child'],
      ['d', 'Typ-Selektoren & Pseudoelemente', '1', 'div, p, span, li, ::before, ::after']
    ]),

    h('Rechenbeispiele aus der Praxis:', 3),
    table(['Selektor', 'a', 'b', 'c', 'd', 'Gesamtwert', 'Gewinner'], [
      ['p', '0', '0', '0', '1', '0,0,0,1', ''],
      ['.text-primary', '0', '0', '1', '0', '0,0,1,0', 'Schlägt p'],
      ['div.content p.text-primary', '0', '0', '2', '2', '0,0,2,2', 'Schlägt Einzelklasse'],
      ['#main-content p', '0', '1', '0', '1', '0,1,0,1', 'Schlägt beliebige Klassen-Kombination!'],
      ['style="color: red;"', '1', '0', '0', '0', '1,0,0,0', 'Schlägt Stylesheet-IDs']
    ]),

    note('Gleiche Spezifität? Bei absolut identischer Spezifität zweier Selektoren gewinnt stets die Regel, die im Stylesheet weiter unten steht (Last Rule Wins).'),
    tip('Prüfungsfokus: !important überschreibt die normale Kaskade komplett. In IHK-Prüfungen gilt die unbedachte Nutzung von !important jedoch als schwerer Designfehler! Verwende stattdessen saubere Klassenselektoren.'),

    h('4. Original-Aufgabe 10.2_CSS-Selektoren'),
    p('Aufgabe aus dem Kursmaterial: Gegeben ist ein HTML-Dokument mit Absätzen und Klassen. Formatiere den Haupttext über eine Klasse, die Überschrift über den Typselektor und das Impressum über eine ID.'),
    h('Offizielle Musterlösung:', 3),
    code('/* Typ-Selektor */\nh1 {\n  font-family: Arial, sans-serif;\n  color: #1e3a8a;\n}\n\n/* Klassen-Selektor */\n.lead-text {\n  font-size: 18px;\n  line-height: 1.6;\n  color: #334155;\n}\n\n/* ID-Selektor */\n#impressum {\n  font-size: 12px;\n  color: #94a3b8;\n  border-top: 1px solid #e2e8f0;\n}', 'css'),

    h('5. Interaktive Live-Sandbox'),
    interactive('html-css-sandbox', 'Teste Selektor-Spezifitäten live im Editor'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Einführung 2.0 (PDF)](/resources/html-css/praesentation/2_CSS-Einführung2.0.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Berechne die Spezifität der folgenden Selektoren: body header nav.main-nav ul li a:hover.'),
    practice('praxis-2', 'Warum sollte man ID-Selektoren (#meinElement) in Stylesheets nur sehr sparsam einsetzen?')
  ],
  flashcards: [
    {
      id: 'fc-html-css-08-1',
      lessonId: 'topic-html-css-css-selektoren',
      type: 'multiple-choice',
      question: 'Mit welchem Zeichen beginnt ein Klassen-Selektor in CSS?',
      answers: [
        { id: 'a1', text: 'Mit einem Punkt (z. B. .meine-klasse)' },
        { id: 'a2', text: 'Mit einem Doppelpunkt (:)' },
        { id: 'a3', text: 'Mit einem Prozentzeichen (%)' }
      ],
      correctAnswer: 'a1',
      explanation: 'Klassen werden in CSS durch einen vorangestellten Punkt angesprochen.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-08-2',
      lessonId: 'topic-html-css-css-selektoren',
      type: 'multiple-choice',
      question: 'Mit welchem Zeichen beginnt ein ID-Selektor in CSS?',
      answers: [
        { id: 'a1', text: 'Mit einer Raute / Hashtag (z. B. #mein-id)' },
        { id: 'a2', text: 'Mit einem kaufmännischen Und (&)' },
        { id: 'a3', text: 'Mit einem Ausrufezeichen (!)' }
      ],
      correctAnswer: 'a1',
      explanation: 'IDs werden in CSS durch das Rautensymbol referenziert.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-08-3',
      lessonId: 'topic-html-css-css-selektoren',
      type: 'multiple-choice',
      question: 'Welcher Selektor hat eine höhere Spezifität: .nav-item a oder #navbar a?',
      answers: [
        { id: 'a1', text: '#navbar a (0,1,0,1 schlägt 0,0,1,1)' },
        { id: 'a2', text: '.nav-item a schlägt #navbar a.' },
        { id: 'a3', text: 'Beide besitzen exakt die gleiche Spezifität.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Eine ID zählt in der zweiten Spezifitätsstufe und schlägt beliebig viele Klassen.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
