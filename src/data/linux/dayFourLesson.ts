import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const linuxDayFourSlug = 'erste-skripte'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const practice = (n: number, question: string): Exercise => ({ id: `linux-04-praxis-${n}`, topicSlug: linuxDayFourSlug, type: 'technical-problem', difficulty: 'easy', question })

export const linuxDayFourTopic: Topic = {
  id: 'topic-linux-04-erste-skripte', slug: linuxDayFourSlug, moduleSlug: 'linux', title: 'Erste Skripte', order: 4,
  shortIntro: 'Befehle in eine Datei schreiben und starten. Teil 1: Shebang, Kommentare, chmod +x, ./, echo und sleep. Teil 2: Variablen, Variablen vom System, $( ) und read.',
  content: [
    h('Warum das wichtig ist'),
    p('Bis jetzt hast du jeden Befehl einzeln getippt. Das ist in Ordnung, wenn du ihn nur einmal brauchst. Was aber, wenn du dieselben zehn Befehle jeden Montag brauchst? Dann schreibst du sie einmal in eine Datei. Danach startest du nur noch die Datei.'),
    p('So eine Datei heißt Skript. Admins sparen mit Skripten jeden Tag viel Zeit. Der zweite Teil der Klausur ist auch ein Skript.'),
    
    h('Teil 1: Das erste Skript'),
    h('Was ist ein Skript?'),
    p('Ein Skript ist eine Textdatei mit Befehlen. Die Shell liest die Datei von oben nach unten. Sie führt jede Zeile aus. Genau wie beim Tippen im Terminal.'),
    p('Skripte enden meistens auf .sh. Das ist keine Pflicht. Linux schaut nicht auf die Endung. Die Endung ist nur für Menschen: Man sieht sofort, dass es ein Skript ist.'),
    p('Ein Skript braucht drei Dinge:'),
    table(['Nr.', 'Was gebraucht wird', 'Erklärung'], [
      ['1', 'Die erste Zeile #!/bin/bash', 'Sie nennt die Shell.'],
      ['2', 'Das Recht zum Ausführen', 'Dateien sind nicht standardmäßig ausführbar.'],
      ['3', 'Den Start mit ./ davor', 'Sagt der Shell, wo sie das Skript findet.']
    ]),
    
    h('Das erste Skript'),
    p('Öffne eine neue Datei mit nano hello.sh und schreibe diese drei Zeilen hinein:'),
    code('#!/bin/bash\n# Mein erstes Skript\necho "Willkommen im Linux-Kurs!"'),
    p('Speichere mit Strg+O und Enter. Beende mit Strg+X.'),
    p('Die erste Zeile #!/bin/bash heißt Shebang. Sie sagt dem System: Führe diese Datei mit dem Programm /bin/bash aus. Sie muss ganz oben stehen, ohne Leerzeichen davor. Die Zeichen #! gibt es seit 1980. Dennis Ritchie hat sie bei Bell Labs eingeführt. Er ist einer der Erfinder von Unix.'),
    p('Ist der Shebang Pflicht? Nein. Ohne ihn startet die Bash das Skript meistens trotzdem. Andere Programme melden dann aber "Exec format error". Darum schreibst du ihn immer.'),
    p('Bash heißt "Bourne Again Shell". Brian Fox hat sie 1989 für das GNU-Projekt veröffentlicht. Der Name klingt wie "born again", auf Deutsch "wiedergeboren". Er erinnert an die ältere Bourne Shell von 1979.'),
    p('Bei Ubuntu gibt es auch /bin/sh. Das ist seit 2006 eine andere Shell. Sie heißt Dash. Sie startet schneller, kann aber weniger. Darum schreiben wir immer /bin/bash.'),
    p('Zeilen, die mit # beginnen, sind Kommentare. Die Shell überspringt sie. Sie sind für Menschen da. Schreibe oben in jedes Skript einen Kommentar, was es tut. Der Shebang beginnt auch mit #. Er ist trotzdem kein Kommentar. Das System liest ihn, bevor die Bash startet.'),
    p('Jetzt machst du die Datei ausführbar und startest sie:'),
    code('chmod +x hello.sh\n./hello.sh\n# Willkommen im Linux-Kurs!'),
    p('chmod +x gibt der Datei das Recht zum Ausführen. Ohne dieses Recht kommt Permission denied. Mehr über Rechte lernst du an Tag 8.'),
    p('./ bedeutet: in diesem Ordner. Ohne ./ sucht die Shell nur in den Systemordnern wie /usr/bin. Dort liegt dein Skript nicht. Dann kommt command not found.'),
    { type: 'warning', text: 'Achtung: Vergiss chmod +x nicht. Diesen Fehler machen alle beim ersten Mal.' },
    
    h('Ausgaben und Pausen'),
    p('echo gibt Text aus. sleep wartet.'),
    code('#!/bin/bash\n# Zeigt drei Schritte mit Pause\necho "Schritt 1: Ordner anlegen"\nsleep 2\necho "Schritt 2: Datei anlegen"\nsleep 2\necho "Fertig."'),
    p('sleep 2 wartet zwei Sekunden. So kann ein Mensch mitlesen, was das Skript gerade tut.'),
    { type: 'note', text: 'Tipp: In der Klausur wird beides verlangt: vor jedem Schritt ein echo, nach jedem Schritt ein sleep 2.' },
    
    h('Häufige Fehler beim Starten'),
    table(['Fehlermeldung / Problem', 'Erklärung und Lösung'], [
      ['Permission denied', 'Das Skript ist nicht ausführbar. Lösung: chmod +x skript.sh.'],
      ['command not found beim Start', 'Das ./ fehlt. Lösung: ./skript.sh.'],
      ['bad interpreter', 'Die erste Zeile hat einen Tippfehler, zum Beispiel #!/bin/bsh. Richtig ist #!/bin/bash.'],
      ['Das Skript macht nichts Neues', 'Du hast in nano nicht gespeichert. Erst Strg+O und Enter, dann Strg+X.'],
      ['cd im Skript wirkt nicht', 'Ein cd im Skript gilt nur im Skript. Danach ist dein Terminal noch im alten Ordner.']
    ]),
    
    h('Teil 2: Variablen und Eingaben'),
    p('Eine Variable merkt sich etwas für dich. Zum Beispiel einen Namen, einen Ordner oder ein Datum. So legst du eine Variable an:'),
    code('NAME="Carmen"'),
    p('Links steht der Name der Variable: NAME. Rechts steht, was sie sich merkt: Carmen.'),
    { type: 'warning', text: 'Kein Leerzeichen um das Gleichheitszeichen. NAME = "Carmen" ist falsch.' },
    p('Später brauchst du den Inhalt. Dann schreibst du ein $ vor den Namen. Die Bash setzt dort ein, was die Variable sich gemerkt hat:'),
    code('#!/bin/bash\nNAME="Carmen"\necho "Hallo $NAME"\n# Hallo Carmen'),
    p('Wozu das? Ein Skript braucht oft mehrmals denselben Ordner. Mit einer Variable schreibst du ihn nur einmal:'),
    code('ORDNER="/home/carlos/linux-kurs"\nmkdir -p $ORDNER\nls $ORDNER'),
    p('Ändert sich der Ordner, änderst du nur die erste Zeile. Große Buchstaben sind keine Pflicht. Es ist nur eine Gewohnheit. So sieht man Variablen sofort. Linux unterscheidet aber groß und klein: NAME und name sind zwei verschiedene Variablen.'),
    
    h('Variablen vom System'),
    p('Manche Variablen gibt es schon. Das System legt sie für dich an:'),
    table(['Variable', 'Was drin steht', 'Beispiel'], [
      ['$USER', 'dein Benutzername', 'carlos'],
      ['$HOME', 'dein Home-Verzeichnis', '/home/carlos'],
      ['$PWD', 'der Ordner, in dem du gerade bist', '/home/carlos/linux-kurs'],
      ['$HOSTNAME', 'der Name des Rechners', 'lubuntu']
    ]),
    code('echo "Ich bin $USER und wohne in $HOME"\n# Ich bin carlos und wohne in /home/carlos'),
    
    h('Die Ausgabe eines Befehls speichern'),
    p('Du kannst die Ausgabe eines Befehls in einer Variable speichern. Dafür schreibst du den Befehl in $( ):'),
    code('HEUTE=$(date +%d.%m.%Y)\necho "Heute ist der $HEUTE"\n# Heute ist der 24.09.2026'),
    p('Hinter dem + bestimmst du die Form des Datums:'),
    table(['Zeichen', 'Bedeutung', 'Beispiel'], [
      ['%d', 'Tag', '24'],
      ['%m', 'Monat', '09'],
      ['%Y', 'Jahr', '2026'],
      ['%H:%M', 'Stunde und Minute', '10:15']
    ]),
    p('Für Dateinamen nimmst du besser date +%Y-%m-%d. Das gibt 2026-09-24. Dann sortiert ls die Dateien richtig nach Datum. Diese Form ist eine internationale Norm. Sie heißt ISO 8601 und gilt seit 1988.'),
    
    h('Eingabe vom Benutzer'),
    p('read hält das Skript an. Es wartet, bis jemand etwas tippt und Enter drückt. Die Eingabe landet in einer Variable.'),
    code('#!/bin/bash\n# Fragt nach dem Namen und gruesst\necho "Wie heisst du?"\nread NAME\necho "Hallo $NAME!"'),
    p('Kürzer geht es mit -p. Dann steht die Frage in derselben Zeile wie die Antwort:'),
    code('read -p "Wie heisst du? " NAME\necho "Hallo $NAME!"'),
    
    h('Häufige Fehler bei Variablen'),
    table(['Fehler', 'Lösung'], [
      ['NAME: command not found', 'Leerzeichen um das =. Richtig ist NAME="Carmen".'],
      ['$NAME="Carmen"', 'Beim Anlegen kommt kein $ davor. Das $ brauchst du nur beim Lesen.'],
      ['Die Variable ist leer', 'Oft ein Tippfehler bei groß und klein. $name ist nicht $NAME.'],
      ['sh skript.sh statt ./skript.sh', 'sh startet die Shell Dash, nicht Bash. Dann ist zum Beispiel $HOSTNAME leer. Starte Skripte mit ./skript.sh.']
    ]),

    h('Bonus: Einfache oder doppelte Anführungszeichen'),
    p('In Skripten stehen oft Anführungszeichen. Es gibt zwei Sorten. echo "Ich bin $USER" gibt "Ich bin carlos" aus. echo \'Ich bin $USER\' gibt wörtlich "Ich bin $USER" aus. Die einfachen Anführungszeichen \' \' verhindern also, dass Variablen oder Befehle durch $( ) aufgelöst werden.'),

    h('Bonus: Rechnen im Skript'),
    p('Skripte müssen oft rechnen. Neu ist $(( )). Damit rechnet die Bash mit ganzen Zahlen. Beispiel: echo $(( 3 + 4 )) gibt 7. echo $(( 7 / 2 )) gibt 3 und nicht 3.5, weil die Bash nur mit ganzen Zahlen rechnet.'),

    h('Aufgaben aus Tag 4'),
    p('Die Original-Kursunterlagen enthalten fünf große praktische Aufgaben, bei denen du Skripte in nano schreibst, sie ausführbar machst und testest. Da unser Simulator den internen Inhalt von Skripten nicht kontrollieren kann, findest du hier die genauen Aufgaben, um sie in einer echten VM zu üben. Der Terminal-Simulator prüft anschließend dein Wissen über Variablen und Rechenbefehle.'),
    p('1. Dein erstes eigenes Skript: Lege ueber-mich.sh an, schreibe Variablen und Text mit echo hinein, und starte es.'),
    p('2. Arbeitsplatz per Skript: Ein Skript, das mit mkdir -p und touch eine Ordnerstruktur für neue Kollegen anlegt, getrennt durch sleep 2.'),
    p('3. Der Steckbrief als Skript: Erstelle steckbrief.sh, das $HOSTNAME, $USER, df -h und ls /etc | wc -l kombiniert.'),
    p('4. Backup mit Datum: Nutze HEUTE=$(date +%Y-%m-%d), um einen Zielordner mit mkdir -p anzulegen und Dateien mit Datum im Namen zu kopieren.'),
    p('5. Ein Skript, das fragt: Nutze read -p, um den Benutzer nach einem Befehl zu fragen, und schreibe die Antwort mit >> in eine Textdatei.'),

    { type: 'key-points', items: ['Skripte beginnen mit dem Shebang #!/bin/bash.', 'Dateien müssen mit chmod +x ausführbar gemacht werden.', './skript.sh führt ein Skript im aktuellen Ordner aus.', 'Variablen werden ohne Leerzeichen angelegt: NAME="Wert".', 'Beim Auslesen wird ein $ vorangestellt: echo $NAME.', '$( ) führt Befehle aus und speichert das Ergebnis, z.B. für Datum.', 'read -p "Frage: " VAR pausiert das Skript für eine Eingabe.'] },
  ],
  exercises: [
    practice(1, 'Simuliertes Training: Variablen, Systemvariablen und Rechnen in der Bash.'),
    practice(2, 'Starte anschließend die Tag-4-Prüfung mit 8 quellengebundenen Fragen.')
  ],
}
