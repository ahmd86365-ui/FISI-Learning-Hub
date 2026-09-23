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
  shortIntro: 'FHS, Systemdateien, versteckte Dateien, ls -l, symbolische Links, nano und wc -l sicher üben.',
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
    h('Praxis aus Teil 1'),
    p('Der Tag-3-Trainer verbindet die Unterrichtsfolge mit den drei verfügbaren Aufgaben: Verzeichnisbaum erkunden und fhs.txt schreiben, die Benutzerliste auswerten und meinuser.txt anlegen sowie notiz.txt mit nano erstellen und per wc -l prüfen. Alles läuft ausschließlich in einem simulierten Dateisystem.'),
    { type: 'key-points', items: ['Ein Linux-System besitzt einen Baum ab /.', 'FHS macht Pfade zwischen Distributionen vorhersehbar.', '/etc/passwd hat sieben Felder; Passwörter stehen dort nicht.', 'Punktdateien sind verborgen, aber nicht geschützt.', 'Symbolische Links verweisen auf ein Ziel.', 'nano speichert erst mit Strg+O und Dateinamenbestätigung.', 'wc -l zählt Zeilen.'] },
    { type: 'note', text: 'Teil 2 der Quelle ist noch gesperrt. Umleitung, Fehlerkanal, Pipe, sort, less, df und du werden deshalb hier nicht gelehrt oder geprüft.' },
  ],
  exercises: [
    practice(1, 'Ordne /, /root, /etc, /home, /var/log, /dev und /proc ihren Aufgaben zu und erkläre den Unterschied zwischen / und /root.'),
    practice(2, 'Lies die sieben Felder der Beispielzeile andre:x:1000:1000:Andre,,,:/home/andre:/bin/bash von links nach rechts.'),
    practice(3, 'Öffne „Linux Campus · Tag 3 üben“ und bearbeite die verbundenen Teil-1-Aufgaben im sicheren Simulator.'),
    practice(4, 'Starte anschließend die Tag-3-Abschlussprüfung mit 20 quellengebundenen Fragen.'),
  ],
}
