import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss13Slug = 'komponenten-cards'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss13Slug + '-' + id,
  topicSlug: htmlCss13Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss13Topic: Topic = {
  id: 'topic-html-css-komponenten-cards',
  slug: htmlCss13Slug,
  moduleSlug: 'html-css',
  title: 'UI-Komponenten: Card-Layouts & Hover-Effekte',
  shortIntro: 'Zusammenspiel von Box-Modell, border-radius, box-shadow, overflow: hidden und interaktiven Transition-Effekten.',
  order: 13,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du setzt das Wissen aus Box-Modell, Typografie und Farbgestaltung in einer vollendeten UI-Komponente (Card) zusammen und animierst sie elegant über CSS transitions.'),

    h('1. Anatomie einer modernen UI-Card'),
    p('Cards (Karten) sind das vorherrschende Gestaltungsmuster im modernen Webdesign. Sie bündeln Bild, Überschrift, Text und Call-to-Action in einer klar abgegrenzten Einheit.'),
    code('<article class="card">\n  <img src="images/course.jpg" alt="Kursbild" class="card-img">\n  <div class="card-body">\n    <span class="card-badge">Fachinformatiker</span>\n    <h3>Netzwerktechnik Kompakt</h3>\n    <p>Lerne OSI-Modell, TCP/IP und Subnetting von Grund auf.</p>\n    <button class="card-btn">Jetzt lernen</button>\n  </div>\n</article>', 'html'),

    h('2. CSS-Styling mit Tiefe (Elevation & Shadow)'),
    code('.card {\n  background: #ffffff;\n  border-radius: 12px;\n  overflow: hidden; /* Verhindert, dass das Bild die abgerundeten Ecken überragt */\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px); /* Schwebe-Effekt beim Drüberfahren */\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);\n}', 'css'),

    h('3. Interaktive Live-Sandbox'),
    h('4. Original-Aufgabe 10.5_CSS-Selektoren-Cards & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Baue eine Mitarbeiterkarteikarte (.card) mit rundem Avatarbild, Schattenwurf (box-shadow) und weicher Hover-Transition.'),
    code(`/* Aus 10.5_CSS-Selektoren-Cards-Lösung/css/styles.css (Offizielle Dozentenlösung) */
.card {
  box-sizing: border-box;
  max-width: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding-bottom: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.card h2 {
  font-size: 28px;
  padding-left: 16px;
  padding-top: 16px;
}

.card div img {
  max-width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}`, 'css'),

    interactive('html-css-sandbox', 'Passe die Card-Styles an und teste den Schwebe-Effekt'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: CSS Einführung 2.0 (PDF)](/resources/html-css/praesentation/2_CSS-Einführung2.0.pdf)',
      '[CSS-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/CSS-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Baue eine dreispaltige Übersicht mit Feature-Cards auf Basis der Aufgabenstellung 10.5_CSS-Selektoren-Cards.'),
    practice('praxis-2', 'Ergänze eine weiche Hover-Animation bei Bewegung des Mauszeigers über die Card mittels transition.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-13-1',
      lessonId: 'topic-html-css-komponenten-cards',
      type: 'multiple-choice',
      question: 'Warum setzt man overflow: hidden; auf einen Card-Container mit border-radius?',
      answers: [
        { id: 'a1', text: 'Damit innenliegende Bilder oder Header die abgerundeten Ecken des Containers nicht überlappen.' },
        { id: 'a2', text: 'Um alle Textinhalte automatisch zu zentrieren.' },
        { id: 'a3', text: 'Weil CSS-Cards sonst nicht responsiv sind.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Overflow: hidden schneidet überstehende Kind-Elemente exakt an der Abrundungskante ab.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-13-2',
      lessonId: 'topic-html-css-komponenten-cards',
      type: 'multiple-choice',
      question: 'Mit welcher CSS-Eigenschaft animiert man weiche Übergänge bei Hover-Zuständen?',
      answers: [
        { id: 'a1', text: 'transition (z. B. transition: all 0.2s ease;)' },
        { id: 'a2', text: 'transform-speed' },
        { id: 'a3', text: 'animate-hover' }
      ],
      correctAnswer: 'a1',
      explanation: 'Transition definiert Übergangseigenschaften, Dauer und Timing-Funktion.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-13-3',
      lessonId: 'topic-html-css-komponenten-cards',
      type: 'multiple-choice',
      question: 'Wie baut man in einer Card einen klickbaren Button ohne Standard-Browser-Relief?',
      answers: [
        { id: 'a1', text: 'border: none; background: #...; border-radius: ...; cursor: pointer;' },
        { id: 'a2', text: 'display: none;' },
        { id: 'a3', text: 'opacity: 0;' }
      ],
      correctAnswer: 'a1',
      explanation: 'Das Zurücksetzen der Browser-Standardstile verleiht Buttons einen modernen Flat-Look.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
