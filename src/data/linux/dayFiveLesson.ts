import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const linuxDayFiveSlug = 'wiederholung-woche-1'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const practice = (n: number, question: string): Exercise => ({ id: `linux-05-praxis-${n}`, topicSlug: linuxDayFiveSlug, type: 'technical-problem', difficulty: 'easy', question })

export const linuxDayFiveTopic: Topic = {
  id: 'topic-linux-05-wiederholung-woche-1', slug: linuxDayFiveSlug, moduleSlug: 'linux', title: 'Wiederholung Woche 1', order: 5,
  shortIntro: 'Alles aus Woche 1 zusammen: vom Auftrag zum Skript und die häufigsten Fehler. Drei Aufgaben verbinden Tag 1 bis 4.',
  content: [
    h('Warum das wichtig ist'),
    p('Du kennst jetzt viele Befehle. Jeden einzeln kannst du schon tippen. Im Alltag brauchst du sie zusammen: in einer Pipe oder in einem Skript. Genau das verlangt auch der zweite Teil der Klausur.'),
    
    h('Die Woche auf einen Blick'),
    table(['Tag', 'Thema', 'Die wichtigsten Befehle'], [
      ['1', 'Linux und Lubuntu', 'whoami, date, uname -r, cat /etc/os-release'],
      ['2', 'Terminal und Befehle', 'pwd, ls, cd, mkdir, touch, cp, mv, rm, cat, head, echo, man, *'],
      ['3', 'Das Dateisystem', 'ls -l, nano, >, >>, 2>, |, wc, sort, df, du, ln -s'],
      ['4', 'Erste Skripte', '#!/bin/bash, chmod +x, ./, sleep, NAME="Sofia", $NAME, read, $( )']
    ]),
    
    h('Vom Auftrag zum Skript (3-Schritte-Strategie)'),
    p('Ein Auftrag in der Klausur klingt so: "Lege einen Ordner an, schreibe eine Datei hinein und zeige das Ergebnis." Viele tippen sofort das ganze Skript. Dann suchen sie lange nach dem Fehler. Besser geht es in drei Schritten:'),
    p('1. Schreibe jeden Schritt als Kommentar ins Skript. Nur Wörter, noch kein Befehl.'),
    p('2. Probiere jeden Befehl erst im Terminal aus.'),
    p('3. Schreibe den Befehl, der funktioniert, unter seinen Kommentar.'),
    p('So sieht das Skript nach Schritt 1 aus:'),
    code('#!/bin/bash\n# Ordner anlegen\n\n# Datei hineinschreiben\n\n# Ergebnis zeigen'),
    p('Und so ist es fertig. Vor jedem Schritt steht ein echo. Zwischen zwei Schritten steht ein sleep 2. So will es die Klausur:'),
    code('#!/bin/bash\n# Ordner anlegen\necho "Schritt 1: Ordner anlegen"\nmkdir -p projekt\nsleep 2\n# Datei hineinschreiben\necho "Schritt 2: Datei schreiben"\necho "Start: $(date +%Y-%m-%d)" > projekt/info.txt\nsleep 2\n# Ergebnis zeigen\necho "Schritt 3: Ergebnis zeigen"\ncat projekt/info.txt'),
    p('So weißt du immer, was als Nächstes kommt. Und später sagt dir jeder Kommentar, was die Zeilen darunter tun.'),
    
    h('Häufige Fehler der Woche'),
    table(['Problem', 'Lösung / Erklärung'], [
      ['Die Datei hat nur noch eine Zeile.', 'Du hast > statt >> genommen. > löscht den alten Inhalt. >> hängt hinten an.'],
      ['Fehlermeldung steht trotzdem auf dem Bildschirm.', '> leitet nur die normale Ausgabe um. Für Fehler brauchst du 2>.'],
      ['No such file or directory.', 'Du bist im falschen Ordner, oder der Name hat einen Tippfehler. Prüfe mit pwd und ls.'],
      ['Der Pfad klappt nur manchmal.', 'linux-kurs/tag05 gilt nur, wenn du in deinem Home stehst. ~/linux-kurs/tag05 gilt überall.'],
      ['Permission denied beim Start.', 'Das Skript ist nicht ausführbar. Lösung: chmod +x skript.sh.'],
      ['command not found beim Start.', 'Das ./ fehlt. Richtig ist ./skript.sh.'],
      ['NAME: command not found im Skript.', 'Um das = stehen Leerzeichen. Richtig ist NAME="Sofia".'],
      ['Am Anfang der Zeile steht nur >.', 'Ein " fehlt. Die Shell wartet auf das Ende des Textes. Drücke Strg+C und tippe den Befehl neu.'],
      ['Kein Prompt mehr, das Terminal wartet.', 'Ein Befehl wartet auf eine Eingabe, zum Beispiel cat ohne Datei. Drücke Strg+C.']
    ]),

    h('Aufgaben aus Tag 5'),
    p('Tag 5 ist eine reine Wiederholung. In den Kursunterlagen trainierst du deine Fähigkeiten in drei umfangreichen Aufgaben. Den Teil "Die Woche in Dateien" kannst du direkt hier im Simulator lösen. Für "Fehlersuche im Skript" und "Das Wochen-Skript" benötigst du nano und musst echte Skripte ausführen – trainiere diese am besten in einer echten VM.'),
    p('1. Die Woche in Dateien: Erstelle Ordner, hänge mit >> Befehle an eine Textdatei an, zähle Zeilen mit wc, sortiere mit sort, und leite gezielt Fehlermeldungen (2>) um.'),
    p('2. Fehlersuche im Skript: Ein 11-Schritte-Training, bei dem du ein vorgegebenes fehlerhaftes Skript in nano abtippst und systematisch Fehler suchst (z.B. fehlendes chmod +x, falsche Leerzeichen bei Variablen, versehentliches Überschreiben mit > statt >>).'),
    p('3. Das Wochen-Skript: Ein komplexes Skript, das die 3-Schritte-Strategie anwendet, mit echo und sleep arbeitet, read -p zur Eingabe nutzt, und zum Abschluss deine Skripte zählt und Fehlermeldungen per Pipe ins Nichts (2> /dev/null) leitet.'),
    
    { type: 'key-points', items: ['Schritt 1: Kommentare als Plan ins Skript schreiben.', 'Schritt 2: Befehle einzeln live im Terminal testen.', 'Schritt 3: Funktionierende Befehle unter die Kommentare kopieren.', 'Ein > (Prompt) bedeutet ein fehlendes Anführungszeichen (Abbruch mit Strg+C).', 'Ein hängendes Terminal wartet auf Eingaben (Abbruch mit Strg+C).', 'Die häufigsten Skriptfehler sind fehlende ./ oder Ausführungsrechte.'] },
  ],
  exercises: [
    practice(1, 'Simuliertes Training: Die Woche in Dateien (Ordner, Umleitungen, Zählen, Sortieren).'),
    practice(2, 'Starte anschließend die Tag-5-Prüfung zur Wiederholung mit 7 Fragen.')
  ],
}
