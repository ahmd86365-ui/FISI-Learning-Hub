import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss01Slug = 'grundlagen'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows });
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const note = (text: string): ContentBlock => ({ type: 'note', text })
const tip = (text: string): ContentBlock => ({ type: 'exam-tip', text })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: `html-css-${htmlCss01Slug}-${id}`,
  topicSlug: htmlCss01Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss01Topic: Topic = {
  id: 'topic-html-css-grundlagen',
  slug: htmlCss01Slug,
  moduleSlug: 'html-css',
  title: 'HTML-Grundlagen, Tags & Hello World',
  shortIntro: 'Vollständige Einführung in HTML5: Geschichte, Syntaxregeln, Elementtypen, Doctype und das erste Dokument.',
  order: 1,
  content: [
    h('Lernziele dieser Lektion'),
    p('Nach dieser Lektion verstehst du, was HTML ist, wie Tags aufgebaut sind, wie die zwingende Grundstruktur eines Dokuments aussieht und wie Webbrowser HTML rendern.'),

    h('1. Was ist HTML? (Hypertext Markup Language)'),
    p('HTML ist keine Programmiersprache, sondern eine textbasierte Auszeichnungssprache (Markup Language) zur Strukturierung digitaler Dokumente. Die Auszeichnung erfolgt durch sogenannte Tags („Etiketten“), die dem Webbrowser mitteilen, welche Bedeutung ein Inhaltsteil besitzt (z. B. Überschrift, Absatz, Zitat oder Bild).'),
    p('Tim Berners-Lee entwickelte HTML 1989 am CERN. Der aktuelle Standard ist HTML5 (W3C / WHATWG), der multimediale Elemente und semantische Strukturierung nativ unterstützt.'),

    h('2. Anatomie eines HTML-Tags'),
    p('Ein typisches HTML-Element besteht aus einem öffnenden Tag, dem Inhalt und einem schließenden Tag (gekennzeichnet durch den Schrägstrich /):'),
    code('<p>Dies ist der Inhalt des Absatzes.</p>', 'html'),
    p('Wichtige Syntaxregeln laut Dozent Robert Reich:'),
    table(['Regel', 'Bedeutung', 'Korrektes Beispiel', 'Fehlerhaftes Beispiel'], [
      ['Schreibweise', 'Tags werden heute durchgehend in Kleinbuchstaben notiert.', '<p>text</p>', '<P>text</P>'],
      ['Verschachtelung', 'Tags müssen in umgekehrter Reihenfolge geschlossen werden (LIFO).', '<b><i>Text</i></b>', '<b><i>Text</b></i>'],
      ['Schließung', 'Reguläre Container-Tags müssen zwingend geschlossen werden.', '<h1>Titel</h1>', '<h1>Titel']
    ]),

    h('3. Void-Elements (Leere Elemente)'),
    p('Einige Elemente besitzen keinen textuellen Inhalt und dürfen daher kein schließendes Endtag haben. In HTML5 müssen sie nicht mit einem Schrägstrich geschlossen werden:'),
    table(['Tag', 'Bedeutung', 'Verwendung'], [
      ['<br>', 'Break / Zeilenumbruch', 'Erzwingt einen einfachen Textumbruch ohne Absatzabstand.'],
      ['<hr>', 'Horizontal Rule', 'Erzeugt eine thematische Trennlinie.'],
      ['<img>', 'Image / Grafik', 'Bindet ein externes Bild über Attribute ein.'],
      ['<meta>', 'Metadaten', 'Beschreibt Zeichensatz, Viewport oder Autor im Head.'],
      ['<link>', 'Ressourcen-Verknüpfung', 'Bindet externe Stylesheets oder Favicons ein.']
    ]),

    h('4. Das HTML5-Grundgerüst'),
    p('Jedes moderne HTML-Dokument benötigt zwingend die folgende Mindeststruktur:'),
    code('<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Mein erstes HTML-Dokument</title>\n</head>\n<body>\n  <h1>Hallo Welt!</h1>\n  <p>Willkommen zum FISI Learning Hub Webkurs.</p>\n</body>\n</html>', 'html'),

    h('Erklärung der Grundkomponenten:', 3),
    table(['Element', 'Funktion im Dokument'], [
      ['<!DOCTYPE html>', 'Informiert den Browser, dass das Dokument nach modernem HTML5 gerendert werden soll (verhindert den Quirks-Modus).'],
      ['<html lang="de">', 'Wurzelelement des Dokuments. Das lang-Attribut definiert die primäre Sprache (wichtig für Screenreader und Suchmaschinen).'],
      ['<head>', 'Kopfbereich: Enthält maschinenlesbare Metadaten, Zeichensatzdeklaration, Skripte und Stylesheets. Nichts davon ist im Browserfenster direkt sichtbar.'],
      ['<meta charset="UTF-8">', 'Legt die Zeichenkodierung auf UTF-8 fest (Umlaute ä, ö, ü und Sonderzeichen werden fehlerfrei dargestellt).'],
      ['<title>', 'Definiert den Dokumenttitel, der im Browser-Tab und in Google-Suchergebnissen angezeigt wird.'],
      ['<body>', 'Körperbereich: Umschließt sämtliche für den Benutzer sichtbaren Inhalte der Webseite.']
    ]),

    h('5. Häufige Fehler & IHK-Prüfungshinweise'),
    note('Doctype vergessen: Fehlt <!DOCTYPE html>, schaltet der Browser in den veralteten Quirks-Modus. Dadurch verhalten sich Box-Modell und CSS-Berechnungen unberechenbar.'),
    tip('Prüfungsfokus: In Klausuren wird fast immer verlangt, das Grundgerüst handschriftlich fehlerfrei hinzuschreiben. Achte penibel auf: Doctype, html-Tag mit lang, head mit title und charset sowie das body-Tag.'),

    h('6. Original-Übung: 01_Hello_World'),
    p('Aufgabe aus dem Schulungsmaterial: Erstelle eine Datei namens index.html, die ein valides Grundgerüst besitzt und eine Überschrift sowie zwei Absätze darstellt.'),
    h('Musterlösung:', 3),
    code('<!DOCTYPE html>\n<html lang="de">\n<head>\n  <meta charset="UTF-8">\n  <title>Hello World</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>Mein erster Absatz in HTML.</p>\n  <p>Hier folgt der zweite Absatz mit einem <br> manuellen Zeilenumbruch.</p>\n</body>\n</html>', 'html'),

    h('7. Interaktive Live-Sandbox'),
    note('Teste den Code direkt in der nachfolgenden isolierten Sandbox:'),
    interactive('html-css-sandbox', 'Sichere HTML/CSS Live-Vorschau ohne Skriptausführung'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)',
      '[HTML5 & CSS Kurzreferenz (PDF)](/resources/html-css/nuetzliches/html5-css-referenz.pdf)',
      '[HTML Entities Übersicht (PDF)](/resources/html-css/nuetzliches/HTML%20Entities%20-%20html_entities.pdf)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle ein vollständiges HTML5-Dokument mit Doctype, UTF-8-Zeichensatz, Seitentitel und einer Hauptüberschrift (h1).'),
    practice('praxis-2', 'Erkläre den Unterschied zwischen einem regulären HTML-Tag (z. B. <p>) und einem Void-Element (z. B. <img>).')
  ],
  flashcards: [
    {
      id: 'fc-html-css-01-1',
      lessonId: 'topic-html-css-grundlagen',
      type: 'multiple-choice',
      question: 'Wofür steht die Abkürzung HTML?',
      answers: [
        { id: 'a1', text: 'Hypertext Markup Language' },
        { id: 'a2', text: 'Hyperlink Management Layer' },
        { id: 'a3', text: 'Home Tool Markup Language' }
      ],
      correctAnswer: 'a1',
      explanation: 'HTML steht für Hypertext Markup Language und ist die Standard-Auszeichnungssprache für Webdokumente.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-01-2',
      lessonId: 'topic-html-css-grundlagen',
      type: 'multiple-choice',
      question: 'Welche Angabe muss in der allerersten Zeile eines modernen HTML5-Dokuments stehen?',
      answers: [
        { id: 'a1', text: '<!DOCTYPE html>' },
        { id: 'a2', text: '<html version="5.0">' },
        { id: 'a3', text: '<head profile="web">' }
      ],
      correctAnswer: 'a1',
      explanation: 'Die Doctype-Deklaration teilt dem Browser mit, dass das Dokument nach dem HTML5-Standard gerendert werden soll.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-01-3',
      lessonId: 'topic-html-css-grundlagen',
      type: 'multiple-choice',
      question: 'Welches Tag umschließt alle sichtbaren Inhalte einer Webseite?',
      answers: [
        { id: 'a1', text: '<body>' },
        { id: 'a2', text: '<main-content>' },
        { id: 'a3', text: '<view>' }
      ],
      correctAnswer: 'a1',
      explanation: 'Alle für den Benutzer sichtbaren Elemente gehören in das <body>-Element. Der <head> enthält Metadaten.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    }
  ]
}
