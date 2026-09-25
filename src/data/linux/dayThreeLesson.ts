import type { ContentBlock, Exercise, Topic } from '../../types/content'

export const linuxDayThreeSlug = 'das-dateisystem'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const practice = (n: number, question: string): Exercise => ({ id: `linux-03-praxis-${n}`, topicSlug: linuxDayThreeSlug, type: 'technical-problem', difficulty: 'easy', question })

// Sole source: "Das Dateisystem - Linux Campus", available Teil 1 (13 pages).
export const linuxDayThreeTopic: Topic = {
  id: 'topic-linux-03-das-dateisystem', slug: linuxDayThreeSlug, moduleSlug: 'linux', title: 'Das Dateisystem', order: 3,
  shortIntro: 'FHS, Systemdateien, versteckte Dateien, ls -l, symbolische Links, nano, sowie Umleitung, Pipes (|, >, >>), less, wc, df und du.',
  content: [
    h('Ein Baum für das ganze System'),
    p('Linux ordnet alles in einem einzigen Verzeichnisbaum an. Er beginnt bei /, dem Root- oder Wurzelverzeichnis. Der Filesystem Hierarchy Standard (FHS) beschreibt, welche Verzeichnisse vorgesehen sind und was dort liegt. Distributionen müssen diese Norm nicht verwenden, folgen ihr aber meist, damit Programme Dateien an erwarteten Orten finden.'),
    { type: 'warning', text: '/ ist die Wurzel des gesamten Baums. /root ist dagegen nur das Home-Verzeichnis des Administrators root.' },
    table(['Verzeichnis', 'Aufgabe laut Kursquelle'], [
      ['/', 'Wurzel; alles andere hängt darunter'], ['/bin', 'wichtige Programme für alle Benutzer'], ['/sbin', 'Programme für den Administrator'],
      ['/etc', 'Systemkonfiguration als Textdateien'], ['/home', 'Home-Verzeichnisse der Benutzer'], ['/root', 'Home-Verzeichnis des Administrators root'],
      ['/var', 'veränderliche Daten, etwa /var/log'], ['/tmp', 'temporäre, oft beim Neustart gelöschte Dateien'], ['/usr', 'die meisten Benutzerprogramme'],
      ['/lib', 'gemeinsam genutzte Programmbibliotheken'], ['/boot', 'Kernel und Bootloader zum Starten'], ['/dev', 'Geräte als Dateien'],
      ['/proc', 'virtuelle Prozess- und Kernelinformationen'], ['/sys', 'virtuelle Geräte- und Kernelinformationen'], ['/media, /mnt', 'Einhängepunkte für USB-Sticks und Netzlaufwerke'],
      ['/opt', 'zusätzliche Programme'], ['/srv', 'Server-Daten'], ['/run', 'Daten seit dem letzten Start'],
    ]),
    code('cd /\nls\nls -l /\nls -ld /etc'),
    h('Alles ist eine Datei'),
    p('Linux stellt auch Geräte über Dateipfade bereit. /dev/sda kann die erste Festplatte bezeichnen, /dev/sda1 eine Partition. In einer VM kann die Platte /dev/vda heißen; ein USB-Stick erscheint häufig als /dev/sdb. Um ihn zu verwenden, wird er in den Verzeichnisbaum eingehängt, zum Beispiel unter /media/andre/STICK.'),
    p('/proc ist kein gewöhnlicher Ordner auf dem Datenträger. Der Kernel erzeugt seine Informationen beim Lesen. Im Kurs dient /proc/cpuinfo als Beispiel; weiterführende Prozessverwaltung folgt später.'),
    code('head -n 5 /proc/cpuinfo'),
    h('Konfiguration unter /etc'),
    p('/etc/hostname enthält den Rechnernamen. /etc/hosts ordnet Namen Adressen zu; localhost bezeichnet den eigenen Rechner. /etc/os-release beschreibt die Distribution. Lesen kannst du solche Textdateien mit cat.'),
    code('cat /etc/hostname\ncat /etc/hosts\ncat /etc/os-release'),
    p('/etc/passwd enthält eine Zeile pro Benutzer, aber keine Passwörter. Diese liegen laut Quelle in /etc/shadow. Jede passwd-Zeile besitzt sieben durch Doppelpunkte getrennte Felder.'),
    table(['Nr.', 'Feld', 'Beispiel'], [['1', 'Benutzername', 'andre'], ['2', 'Passwort-Platzhalter', 'x'], ['3', 'UID', '1000'], ['4', 'GID', '1000'], ['5', 'Kommentar / voller Name', 'Andre,,,'], ['6', 'Home-Verzeichnis', '/home/andre'], ['7', 'Login-Shell', '/bin/bash']]),
    p('Normale Benutzer haben laut Quelle eine UID ab 1000. Kleinere UIDs gehören Systembenutzern, die etwa für Drucker oder Netzwerkdienste angelegt werden. wc -l zählt die Zeilen der Datei.'),
    code('tail -n 3 /etc/passwd\nwc -l /etc/passwd'),
    h('Versteckte Dateien'),
    p('Ein Name, der mit einem Punkt beginnt, wird von ls normalerweise ausgeblendet. ls -a zeigt ihn. Dabei steht . für den aktuellen und .. für den übergeordneten Ordner. .bashrc enthält Einstellungen der Shell; ihre Konfiguration ist erst für Tag 10 vorgesehen. Versteckt bedeutet nicht geschützt.'),
    code('cd ~\nls -a'),
    h('Die lange Liste lesen'),
    p('Bei -rw-r--r-- 1 andre andre 45 Sep 23 10:06 notizen.txt zeigt das erste Zeichen den Typ: - Datei, d Verzeichnis, l Link. Die übrigen Zeichen im ersten Feld sind Rechte; Details folgen erst an Tag 8. Danach kommen Linkanzahl, Besitzer, Gruppe, Größe, Änderungsdatum und Name.'),
    table(['Aufruf', 'Wirkung'], [['ls -lh /etc/passwd', 'lange Liste mit lesbarer Größe'], ['ls -lt ~', 'nach Änderungsdatum, neueste zuerst'], ['ls -ld /etc', 'den Ordner selbst statt seines Inhalts anzeigen']]),
    h('Symbolische Links'),
    p('Ein symbolischer Link ist ein Verweis auf ein Ziel. /bin kann beispielsweise auf /usr/bin zeigen. ln -s erhält zuerst das Ziel und danach den Linknamen. ls -l kennzeichnet ihn mit l und zeigt einen Pfeil. Lesen über den Link liefert den Inhalt des Ziels.'),
    code('ln -s notizen.txt verweis.txt\nls -l verweis.txt\ncat verweis.txt'),
    p('Wird nur der Link gelöscht, bleibt das Ziel bestehen. Wird das Ziel gelöscht, bleibt ein toter Link zurück, der ins Leere zeigt.'),
    h('Text schreiben mit nano'),
    p('nano dateiname öffnet oder erstellt beim Speichern eine Textdatei. „Modified“ zeigt ungespeicherte Änderungen. Der Cursor wird mit den Pfeiltasten bewegt. ^ bedeutet Strg, M- bedeutet Alt.'),
    table(['Taste', 'Aktion'], [['Strg+O', 'speichern; Dateinamen danach mit Enter bestätigen'], ['Strg+X', 'beenden'], ['Strg+K', 'ganze Zeile ausschneiden'], ['Strg+U', 'Zeile einfügen'], ['Strg+W', 'suchen'], ['Alt+U', 'rückgängig'], ['Strg+G', 'Hilfe anzeigen; mit Strg+X zurück']]),
    { type: 'note', text: 'Sicherer Ablauf: öffnen, schreiben, Strg+O, Enter, Strg+X. Beim Beenden eines geänderten Puffers fragt nano nach dem Speichern; N verwirft die Änderungen.' },
    
    h('Umleitung und Pipe'),
    p('Normalerweise schreibt ein Befehl seine Ausgabe auf den Bildschirm. Du kannst sie umleiten.'),
    table(['Zeichen', 'Was es tut', 'Beispiel'], [
      ['>', 'schreibt in eine Datei, überschreibt sie', 'ls > liste.txt'],
      ['>>', 'hängt an eine Datei an', 'date >> liste.txt'],
      ['|', 'gibt die Ausgabe an den nächsten Befehl weiter', 'ls | wc -l']
    ]),
    code('echo "Hallo Linux" > notizen.txt\ncat notizen.txt\necho "Zweite Zeile" >> notizen.txt\ncat notizen.txt\nls /bin | wc -l'),
    { type: 'warning', text: 'Achtung: > löscht den alten Inhalt ohne Rückfrage. Willst du etwas ergänzen, nimm >>.' },
    p('Die Pipe | verbindet zwei Befehle. Die Ausgabe des ersten wird zur Eingabe des zweiten. Das ist die Linux-Philosophie in einem Zeichen. Rechts von der Pipe kann jeder Befehl stehen, der Text liest. Du kannst auch mehr als zwei Befehle verbinden. Die Ausgabe wandert von links nach rechts durch alle:'),
    code('cat /etc/passwd | head -n 20 | tail -n 5'),
    
    h('Drei Kanäle: Eingabe, Ausgabe, Fehler'),
    p('Jeder Befehl hat drei Kanäle. Die Tastatur ist die Eingabe (0). Der Bildschirm ist die Ausgabe (1). Fehlermeldungen gehen über einen eigenen dritten Kanal, die Fehlerausgabe (2). Er landet normalerweise auch auf dem Bildschirm.'),
    p('> leitet nur die Ausgabe um (Kanal 1). Fehler kommen weiter auf den Bildschirm. Mit 2> leitest du die Fehler um.'),
    code('ls /gibtsnicht > liste.txt\n# ls: cannot access ...\nls /gibtsnicht 2> fehler.txt\nls /gibtsnicht 2> /dev/null'),
    p('Manchmal willst du die Fehler gar nicht sehen. Dafür gibt es /dev/null, ein Gerät, das alles schluckt. Das brauchst du später oft, wenn viele "Permission denied"-Fehler stören.'),
    p('Auch die Eingabe kannst du umleiten. Mit < liest ein Befehl aus einer Datei statt von der Tastatur (z.B. wc -l < /etc/passwd). Der Unterschied: Mit < kennt wc den Dateinamen nicht und gibt nur die Zahl aus.'),
    table(['Zeichen', 'Was es tut', 'Beispiel'], [
      ['>', 'Ausgabe in Datei, überschreibt', 'ls > liste.txt'],
      ['>>', 'Ausgabe an Datei anhängen', 'date >> liste.txt'],
      ['2>', 'Fehler in Datei', 'ls /x 2> fehler.txt'],
      ['2> /dev/null', 'Fehler wegwerfen', 'ls /x 2> /dev/null'],
      ['<', 'Eingabe aus Datei', 'wc -l < liste.txt'],
      ['|', 'Ausgabe an nächsten Befehl', 'ls | wc -l']
    ]),
    
    h('wc, sort und less'),
    p('wc kennst du aus Teil 1. wc -l zählt Zeilen, wc -w zählt Wörter, wc -c zählt Zeichen. Ohne Option zeigt es alle drei Zahlen.'),
    p('sort sortiert Zeilen alphabetisch. sort -r dreht die Reihenfolge um. Das passt gut hinter eine Pipe.'),
    code('ls /etc | sort -r | head -n 3'),
    p('less zeigt lange Dateien seitenweise. cat rauscht bei langen Dateien durch. less wartet auf dich (wie man).'),
    table(['Taste (less/man)', 'Was passiert'], [
      ['Leertaste', 'eine Seite weiter'],
      ['b', 'eine Seite zurück'],
      ['Pfeil hoch, Pfeil runter', 'eine Zeile'],
      ['g', 'zum Anfang'],
      ['G', 'zum Ende'],
      ['/wort', 'nach wort suchen'],
      ['n', 'nächster Treffer'],
      ['q', 'beenden']
    ]),
    table(['Befehl', 'Was er tut', 'Beispiel'], [
      ['cat', 'zeigt eine ganze Datei', 'cat /etc/passwd'],
      ['less', 'zeigt eine Datei seitenweise', 'less /etc/services'],
      ['head', 'zeigt die ersten Zeilen', 'head -n 5 /etc/passwd'],
      ['tail', 'zeigt die letzten Zeilen', 'tail -n 5 /etc/passwd'],
      ['wc -l', 'zählt Zeilen', 'wc -l /etc/passwd'],
      ['sort', 'sortiert Zeilen', 'sort namen.txt'],
      ['nano', 'öffnet den Editor', 'nano notizen.txt'],
      ['ln -s', 'legt einen Link an', 'ln -s ziel name']
    ]),
    
    h('Speicherplatz: df und du'),
    p('Zwei Fragen stellt sich jeder Admin: Wie voll ist die Platte? Und was nimmt den Platz weg?'),
    p('df -h zeigt alle eingehängten Laufwerke und wie voll sie sind. -h macht die Zahlen lesbar. Die wichtige Zeile ist die mit / ganz rechts. Das ist deine Festplatte. Die tmpfs-Zeilen sind Arbeitsspeicher, keine Platte.'),
    p('du -sh zeigt, wie groß ein Ordner mit allem drin ist. -s fasst zusammen, -h macht die Zahl lesbar.'),
    code('df -h\ndu -sh ~/linux-kurs\ndu -sh /var/log 2> /dev/null\ndu -sh *'),
    p('Bei /var/log darfst du als normaler Benutzer nicht überall hineinsehen. Ohne 2> /dev/null kommen ein paar Zeilen "Permission denied". Die Zahl am Ende stimmt trotzdem. Mit du -sh * siehst du die Größe jedes Eintrags im aktuellen Ordner.'),
    
    h('Häufige Fehler'),
    table(['Fehler', 'Erklärung / Auswirkung'], [
      ['> statt >>', 'Die alte Datei ist ohne Rückfrage weg. Wenn du anhängen willst, immer >>.'],
      ['cat datei > datei', 'Danach ist die Datei leer. Die Shell leert das Ziel, bevor cat liest. Schreibe immer in eine neue Datei.'],
      ['ls > liste.txt zeigt liste.txt selbst', 'Kein Fehler. Die Shell legt die Datei an, bevor ls läuft. Darum steht sie mit in der Liste.'],
      ['/root statt /', 'cd /root gibt Permission denied. Das ist richtig so, das ist das Zuhause des Administrators. Die Wurzel ist cd /.'],
      ['In /etc schreiben', 'Permission denied. Lesen darfst du, ändern nur der Administrator (kommt an Tag 8 mit sudo).'],
      ['nano nur mit Strg+X verlassen', 'nano fragt "Save modified buffer?". Mit N ist deine Arbeit weg. ß und Enter drücken.'],
      ['less geht nicht zu', 'Die Taste ist q. Das gilt auch für man.'],
      ['ln -s falsch herum', 'Erst das Ziel, dann der Name des Links. Wie bei cp.']
    ]),

    h('Praxis aus Teil 2 & Abschluss-Challenge'),
    p('In Teil 2 des Trainings übst du das Umleiten von Ausgaben und Fehlern, das Zählen (wc) und Sortieren (sort) per Pipe, sowie die Speicherplatzprüfung mit df und du.'),
    p('Die Abschluss-Challenge verlangt einen System-Steckbrief: Du baust eine Textdatei, die Hostname, Systemversion, Benutzeranzahl und Festplattenplatz enthält. Dabei darfst du nano nicht verwenden, sondern löst alles ausschließlich mit >, >> und Pipes.'),

    { type: 'key-points', items: ['Ein Linux-System besitzt einen Baum ab /.', 'FHS macht Pfade zwischen Distributionen vorhersehbar.', '/etc/passwd hat sieben Felder; Passwörter stehen dort nicht.', 'Symbolische Links verweisen auf ein Ziel.', 'nano speichert erst mit Strg+O.', '> überschreibt, >> hängt an.', '| (Pipe) leitet Ausgabe an den nächsten Befehl.', '2> /dev/null wirft Fehler weg.', 'less blättert mit Leertaste und q.', 'df -h prüft Laufwerke, du -sh prüft Ordner.'] },
  ],
  exercises: [
    practice(1, 'Ordne /, /root, /etc, /home, /var/log, /dev und /proc ihren Aufgaben zu und erkläre den Unterschied zwischen / und /root.'),
    practice(2, 'Lies die sieben Felder der Beispielzeile andre:x:1000:1000:Andre,,,:/home/andre:/bin/bash von links nach rechts.'),
    practice(3, 'Öffne „Linux Campus · Tag 3 üben“ und bearbeite die verbundenen Teil-1-Aufgaben im sicheren Simulator.'),
    practice(4, 'Löse die Pipes- und Umleitungsaufgaben (Sortieren, Zählen, Fehlerbehandlung).'),
    practice(5, 'Meistere die Abschluss-Challenge: Erstelle einen System-Steckbrief per Pipe ohne nano.'),
    practice(6, 'Starte anschließend die Tag-3-Abschlussprüfung mit den 20+ quellengebundenen Fragen.'),
  ],
}
