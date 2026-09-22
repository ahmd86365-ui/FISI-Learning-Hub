import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const linuxDayTwoSlug = 'terminal-und-erste-befehle'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const practice = (n: number, question: string): Exercise => ({ id: `linux-02-praxis-${n}`, topicSlug: linuxDayTwoSlug, type: 'technical-problem', difficulty: 'easy', question })

// Based on "Terminal und erste Befehle – Linux Campus", pp. 1–19; explanations are original.
export const linuxDayTwoTopic: Topic = {
  id: 'topic-linux-02-terminal-und-erste-befehle',
  slug: linuxDayTwoSlug,
  moduleSlug: 'linux',
  title: 'Terminal und erste Befehle',
  order: 2,
  shortIntro: 'Bash, Prompt und Pfade verstehen; Dateien und Ordner mit sicheren Grundbefehlen bearbeiten.',
  content: [
    h('Terminal, Shell und Prompt'),
    p('Das Terminal ist das Textfenster. Darin läuft die Shell Bash: Sie liest deinen Befehl, führt ihn aus und liefert die Ausgabe zurück. Der Prompt ist die Eingabeaufforderung vor dem Cursor.'),
    table(['Teil von andre@lubuntu:~$', 'Bedeutung'], [
      ['andre', 'Benutzername'], ['lubuntu', 'Rechnername (Hostname)'], ['~', 'Home-Verzeichnis'], ['$', 'normaler Benutzer; # kennzeichnet eine Root-Shell'],
    ]),
    p('Ein Aufruf besteht aus Befehl, optionalen Optionen und optionalen Argumenten. In ls -l /etc ist ls der Befehl, -l die Option und /etc das Argument. pwd braucht beides nicht.'),
    code('pwd\nls\nls -l\nls -a\nls -la'),
    h('Wo bin ich und was liegt hier?'),
    p('pwd zeigt den absoluten Pfad des Arbeitsverzeichnisses. ls listet sichtbare Einträge. Mit -l erscheinen Rechte, Besitzer, Größe und Datum; -a zeigt auch Namen, die mit einem Punkt beginnen. Du kannst Optionen wie in ls -la kombinieren.'),
    table(['Option', 'Wirkung'], [['-l', 'lange Liste'], ['-a', 'versteckte Einträge'], ['-h', 'Größen gut lesbar, zusammen mit -l'], ['-t', 'nach Änderungszeit sortieren'], ['-R', 'Unterordner rekursiv anzeigen']]),
    h('Pfade und Ordnerwechsel'),
    p('Ein absoluter Pfad beginnt mit / und bleibt von jedem Arbeitsverzeichnis aus gleich. Ein relativer Pfad beginnt am aktuellen Ort. Der Punkt . bezeichnet diesen Ort, .. den Elternordner und ~ dein Home-Verzeichnis.'),
    code('cd /etc\npwd\ncd ..\ncd ~\ncd linux-kurs/tag02\ncd -\ncd'),
    p('cd - kehrt zum vorherigen Arbeitsverzeichnis zurück; cd allein führt nach Hause. Linux unterscheidet Groß- und Kleinschreibung: Dokumente und dokumente sind verschiedene Namen.'),
    h('Ordner und Dateien bearbeiten'),
    table(['Befehl', 'Wirkung'], [
      ['mkdir name', 'Ordner anlegen'], ['mkdir -p a/b/c', 'auch fehlende Oberordner anlegen'], ['touch a.txt b.txt', 'leere Dateien anlegen'],
      ['cp quelle ziel', 'Datei kopieren'], ['cp -r ordner ziel', 'Ordner samt Inhalt kopieren'], ['mv quelle ziel', 'verschieben oder umbenennen'],
      ['rm datei', 'Datei löschen'], ['rm -r ordner', 'Ordner samt Inhalt löschen'],
    ]),
    { type: 'warning', text: 'rm löscht ohne Papierkorb. Prüfe vor Enter genau, welche Namen betroffen sind. Bei rm -r sind auch Dateien und Unterordner im Ziel enthalten.' },
    h('Dateien lesen und Text ausgeben'),
    p('cat zeigt kurze Dateien vollständig. head zeigt den Anfang und tail das Ende; ohne -n sind es jeweils zehn Zeilen. echo schreibt den angegebenen Text direkt ins Terminal.'),
    code('cat /etc/os-release\nhead -n 5 ~/.bashrc\ntail -n 3 ~/.bashrc\necho "Hallo Linux"'),
    { type: 'note', text: 'Für lange Dateien erwähnt die Vorlage less als Ausblick. Die Bedienung lernst du an Tag 3.' },
    h('Platzhalter und Dateinamen'),
    p('Die Shell ersetzt Platzhalter durch passende Dateinamen, bevor der Befehl startet. * passt auf beliebig viele Zeichen, ? auf genau eines und [12] auf eines der angegebenen Zeichen.'),
    code('ls *.txt\nls bild?.png\nls datei[12].txt\nls bild?.png   # vor einem Löschen zuerst prüfen'),
    p('Ein Leerzeichen trennt Argumente. Für einen Namen wie Mein Ordner verwende Anführungszeichen oder schütze das Leerzeichen mit einem Backslash: mkdir "Mein Ordner" oder mkdir Mein\\ Ordner.'),
    h('Hilfe und Tastatur'),
    p('ls --help liefert Kurzhilfe. man ls öffnet das Handbuch: Suche dort mit /sort und verlasse es mit q. man -k kopieren sucht nach einem Stichwort. history zeigt frühere Befehle, clear leert die Anzeige.'),
    list('Tab vervollständigt Namen; Pfeil hoch holt den letzten Befehl zurück.', 'Strg+C bricht ein laufendes Programm ab; Strg+L leert die Anzeige; Strg+D beendet die Sitzung.', 'Strg+R sucht im Befehlsverlauf. Im Terminal kopierst du mit Strg+Umschalt+C und fügst mit Strg+Umschalt+V ein.', 'Strg+Alt+T öffnet unter Lubuntu das Terminal.'),
    h('Jetzt selbst ausführen'),
    p('Der Linux-Campus-Trainer führt dich durch die Übungen „Mach mit“, Arbeitsordner, Kopieren und Löschen, Navigation, Dateiansicht, Platzhalter und die Abschluss-Challenge. Die Befehle wirken nur in einem simulierten Dateisystem.'),
  ],
  exercises: [
    practice(1, 'Erkläre den Unterschied zwischen Terminal, Shell und Prompt am Beispiel andre@lubuntu:~$.'),
    practice(2, 'Öffne den Linux-Campus-Tag-2-Trainer und bearbeite die verbundenen Praxisaufgaben bis zur Abschluss-Challenge.'),
    practice(3, 'Starte anschließend den Prüfungsmodus mit 20 gemischten Aufgaben und nutze die zweisprachige Fehleranalyse.'),
  ],
}
