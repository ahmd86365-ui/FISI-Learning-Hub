import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const htmlCss02Slug = 'attribute-formulare'

const h = (text: string, level: 2 | 3 | 4 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const code = (val: string, language = 'html'): ContentBlock => ({ type: 'code', language, code: val })
const interactive = (component: string, caption?: string): ContentBlock => ({ type: 'interactive', component, caption })

const practice = (id: string, question: string): Exercise => ({
  id: 'html-css-' + htmlCss02Slug + '-' + id,
  topicSlug: htmlCss02Slug,
  type: 'technical-problem',
  difficulty: 'medium',
  question,
})

export const htmlCss02Topic: Topic = {
  id: 'topic-html-css-attribute-formulare',
  slug: htmlCss02Slug,
  moduleSlug: 'html-css',
  title: 'HTML-Attribute & Formularelemente',
  shortIntro: 'Vollständige Formulartechnik: input-Typen, label-Verknüpfung, Auswahlelemente, Validierung und POST/GET.',
  order: 2,
  content: [
    h('Lernziele dieser Lektion'),
    p('Du verstehst die Rolle von globalen und spezifischen HTML-Attributen und lernst, wie vollständige, zugängliche Web-Formulare mit Labels, Validierungsattributen und interaktiven Steuerelementen aufgebaut werden.'),

    h('1. Was sind HTML-Attribute?'),
    p('Attribute erweitern HTML-Tags um zusätzliche Eigenschaften, Metadaten und Steuerungsbefehle. Sie stehen grundsätzlich im öffnenden Tag und bestehen üblicherweise aus Name="Wert".'),
    table(['Attribut', 'Typ', 'Bedeutung', 'Beispiel'], [
      ['id', 'Global', 'Dokumentenweit absolut eindeutiger Bezeichner.', 'id="main-nav"'],
      ['class', 'Global', 'Klassenzugehörigkeit für Styling und Scripting (mehrfach erlaubt).', 'class="btn primary"'],
      ['src', 'Spezifisch', 'Quelle einer Mediendatei (z. B. bei <img>, <script>).', 'src="images/logo.png"'],
      ['href', 'Spezifisch', 'Hypertext Reference / Zieladresse eines Links (<a>, <link>).', 'href="https://example.com"'],
      ['alt', 'Spezifisch', 'Alternativtext für Screenreader & bei Ladefehlern (Pflicht bei <img>).', 'alt="Unternehmenslogo"']
    ]),

    h('2. Formularelemente & Interaktionssteuerung (<form>)'),
    p('Das <form>-Element definiert einen Bereich für Benutzereingaben. Zwei Attribute sind hierbei von zentraler Bedeutung:'),
    list(
      'action: Die Ziel-URL des Serverscripts (z. B. /api/kontakt oder process.php), das die Formulardaten verarbeitet.',
      'method: Die HTTP-Übertragungsmethode – GET (Daten werden an die URL angehängt, z. B. bei Suchfeldern) oder POST (Daten werden im HTTP-Request-Body übertragen, z. B. bei Passwörtern).'
    ),

    h('3. Eingabefelder: Das vielseitige <input>-Element'),
    p('Über das type-Attribut entscheidet sich das Verhalten des Eingabefeldes:'),
    table(['type-Wert', 'Darstellung / Verhalten', 'Typische Attribute'], [
      ['text', 'Einzeiliges Freitextfeld für Namen, Adressen etc.', 'placeholder="Max Mustermann", required'],
      ['password', 'Maskiertes Eingabefeld (Punkte/Sterne) zum Schutz vor Blicken.', 'minlength="8"'],
      ['email', 'Automatische Syntax-Validierung auf gültige E-Mail-Adresse (@).', 'required'],
      ['number', 'Numerische Eingabe mit Pfeilsteuerung (Stepper).', 'min="1", max="100", step="1"'],
      ['checkbox', 'Mehrfachauswahl aus einer Optionsliste (Häkchenfeld).', 'checked, value="newsletter"'],
      ['radio', 'Exklusive Einfachauswahl (alle Optionen müssen denselben "name" teilen).', 'name="geschlecht", value="m"'],
      ['submit', 'Schaltfläche zum Absenden des Formulars an action.', 'value="Jetzt absenden"']
    ]),

    h('4. Barrierefreiheit & Usability: Das <label>-Element'),
    p('Jedes Formularfeld benötigt zwingend ein zugehöriges <label>. Dies ist nicht nur essenziell für Screenreader (Barrierefreiheit), sondern vergrößert auch die Klickfläche: Ein Klick auf den Text fokussiert das verknüpfte Feld.'),
    p('Die Verknüpfung erfolgt über das for-Attribut des Labels, das exakt mit der id des Inputs übereinstimmen muss:'),
    code('<label for="user-email">Deine E-Mail-Adresse:</label>\n<input type="email" id="user-email" name="email" placeholder="name@domain.de" required>', 'html'),

    h('5. Mehrzeiliger Text & Dropdown-Menüs'),
    p('Für längere Nachrichten und strukturierte Listen stehen spezifische Tags bereit:'),
    table(['Element', 'Funktion', 'Wichtige Attribute'], [
      ['<textarea>', 'Mehrzeiliger Textbereich für Freitext, Kommentare etc.', 'rows="5", cols="40", maxlength="500"'],
      ['<select>', 'Ausklappbares Dropdown-Menü (Auswahlliste).', 'name="land"'],
      ['<option>', 'Einzelner Auswahleintrag innerhalb von <select>.', 'value="de", selected']
    ]),

    h('6. Vollständiges Praxisbeispiel eines Kontaktformulars'),
    code('<form action="/kontakt.php" method="post" class="contact-form">\n  <label for="name">Name (Pflichtfeld):</label>\n  <input type="text" id="name" name="name" required placeholder="Dein Name">\n\n  <label for="topic">Thema:</label>\n  <select id="topic" name="topic">\n    <option value="support">Technischer Support</option>\n    <option value="sales">Vertrieb & Beratung</option>\n  </select>\n\n  <label for="msg">Ihre Nachricht:</label>\n  <textarea id="msg" name="message" rows="4" placeholder="Schreiben Sie uns..."></textarea>\n\n  <button type="submit">Nachricht senden</button>\n</form>', 'html'),

    h('7. Interaktive Live-Sandbox'),
    h('8. Original-Aufgabe 02_Attribute & Offizielle Musterlösung'),
    p('Aufgabe aus dem Schulungsarchiv: Binde Testbilder mit verschiedenen Breiten (100px, 200px, 100%) ein, setze Pflichtattribute wie alt und teste das Verhalten bei ungültigem Pfad im src-Attribut.'),
    code(`<!-- Aus 1_attribute.html (Offizielle Musterlösung) -->
<h2>Bild 1 (Feste Breite 100px)</h2>
<img src="image.png" alt="Bild 1" width="100px" height="100%">

<h2>Bild 2 (Feste Breite 200px)</h2>
<img src="image.png" alt="Bild 2" width="200px" height="100%">

<h2>Bild 3 (Fehlerhafter Pfad demonstriert alt-Text für Screenreader)</h2>
<img src="im-age.png" alt="Kannst Du mich sehen?">

<h2>Bild 4 (Prozentuale Skalierung 100%)</h2>
<img src="image.png" alt="Bild 4" width="100%" height="100%">`, 'html'),

    interactive('html-css-sandbox', 'Teste das Formular und verändere input-Typen live'),

    h('Begleitende Schulungsunterlagen & Referenzen', 3),
    list(
      '[Präsentation: HTML Einführung (PDF)](/resources/html-css/praesentation/1_HTML-Einführung.pdf)',
      '[HTML-Kurzreferenz (HTML)](/resources/html-css/nuetzliches/HTML-Kurzreferenz.html)'
    )

  ],
  exercises: [
    practice('praxis-1', 'Erstelle ein Eingabeformular mit Feldern für E-Mail, Passwort und einem Absende-Button.'),
    practice('praxis-2', 'Erläutere den Zweck des for-Attributs im <label>-Tag und wie es mit der id des <input>-Tags zusammenwirkt.')
  ],
  flashcards: [
    {
      id: 'fc-html-css-02-1',
      lessonId: 'topic-html-css-attribute-formulare',
      type: 'multiple-choice',
      question: 'Darf eine HTML-id mehrfach auf derselben Seite vergeben werden?',
      answers: [
        { id: 'a1', text: 'Nein, eine id muss dokumentenweit eindeutig sein.' },
        { id: 'a2', text: 'Ja, IDs dürfen beliebig oft wiederholt werden.' },
        { id: 'a3', text: 'Nur, wenn sie in unterschiedlichen Containern liegen.' }
      ],
      correctAnswer: 'a1',
      explanation: 'IDs müssen eindeutig sein. Für wiederkehrende Stylings oder Gruppierungen werden Klassen (class) genutzt.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-02-2',
      lessonId: 'topic-html-css-attribute-formulare',
      type: 'multiple-choice',
      question: 'Welches Attribut ist bei einem <img>-Tag essenziell für Screenreader und Barrierefreiheit?',
      answers: [
        { id: 'a1', text: 'Das alt-Attribut (Alternativtext)' },
        { id: 'a2', text: 'Das title-Attribut' },
        { id: 'a3', text: 'Das name-Attribut' }
      ],
      correctAnswer: 'a1',
      explanation: 'Das alt-Attribut beschreibt den Inhalt des Bildes, falls es nicht geladen werden kann oder von Screenreadern vorgelesen wird.',
      difficulty: 'easy',
      tags: ['HTML & CSS']
    },
    {
      id: 'fc-html-css-02-3',
      lessonId: 'topic-html-css-attribute-formulare',
      type: 'multiple-choice',
      question: 'Wie verbindet man ein <label> semantisch mit einem bestimmten <input>-Feld?',
      answers: [
        { id: 'a1', text: 'Über das for-Attribut im Label und die übereinstimmende id im Input-Tag.' },
        { id: 'a2', text: 'Über denselben Klassennamen im class-Attribut.' },
        { id: 'a3', text: 'Indem man das name-Attribut identisch benennt.' }
      ],
      correctAnswer: 'a1',
      explanation: 'Wenn <label for="xyz"> mit <input id="xyz"> verknüpft ist, fokussiert ein Klick auf das Label automatisch das Feld.',
      difficulty: 'medium',
      tags: ['HTML & CSS']
    }
  ]
}
