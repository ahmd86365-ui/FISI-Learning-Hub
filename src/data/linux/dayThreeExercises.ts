export type DayThreeTask = {
  id: string; section: string; prompt: string; kind: 'command' | 'text'; answers: string[]; hint: string; explanation: string; ar: string
}

const command = (section: string, prompt: string, answers: string[], hint: string, explanation: string): Omit<DayThreeTask, 'id'> => ({ section, prompt, kind: 'command', answers, hint, explanation, ar: 'تحقق من الأمر والمسار والخيار المطلوب.' })
const text = (section: string, prompt: string, answers: string[], hint: string, explanation: string): Omit<DayThreeTask, 'id'> => ({ section, prompt, kind: 'text', answers, hint, explanation, ar: 'راجع الفكرة في الدرس ثم حاول مرة أخرى.' })

const raw: Omit<DayThreeTask, 'id'>[] = [
  command('01 · Mach mit: Dateibaum', 'Wechsle in die Wurzel.', ['cd /'], 'Die Wurzel hat einen einzelnen Schrägstrich.', 'cd / setzt das Arbeitsverzeichnis auf die Wurzel.'),
  command('01 · Mach mit: Dateibaum', 'Liste den Inhalt der Wurzel auf.', ['ls'], 'Nutze den einfachen Listenbefehl.', 'ls zeigt die sichtbaren Einträge der Wurzel.'),
  command('01 · Mach mit: Dateibaum', 'Zeige die Wurzel in langer Form und suche die Pfeile.', ['ls -l /'], 'Kombiniere ls, -l und den Pfad /.', 'Die lange Liste kennzeichnet Links mit l und ->.'),
  command('01 · Mach mit: Dateibaum', 'Prüfe ls und cp unter /bin in einer langen Liste.', ['ls -l /bin/ls /bin/cp'], 'Gib beide absoluten Pfade an.', '/bin verweist im Beispiel auf /usr/bin; beide Programme sind erreichbar.'),
  command('01 · Mach mit: Dateibaum', 'Liste die simulierten Logdateien unter /var/log.', ['ls /var/log'], 'Nutze den absoluten Verzeichnispfad.', 'syslog enthält im Kursbeispiel allgemeine Systemmeldungen.'),
  command('02 · Mach mit: Systemdateien', 'Lies den simulierten Rechnernamen.', ['cat /etc/hostname'], 'Die Datei liegt unter /etc.', '/etc/hostname enthält den Hostnamen.'),
  command('02 · Mach mit: Systemdateien', 'Lies die simulierte Namensauflösung.', ['cat /etc/hosts'], 'Verwende cat mit /etc/hosts.', '/etc/hosts ordnet Namen lokalen Adressen zu.'),
  command('02 · Mach mit: Systemdateien', 'Zeige die letzten drei Zeilen der Benutzerliste.', ['tail -n 3 /etc/passwd'], 'tail braucht -n und die Zahl 3.', 'tail -n 3 begrenzt die Ausgabe auf das Dateiende.'),
  command('02 · Mach mit: Systemdateien', 'Zähle die Zeilen in /etc/passwd.', ['wc -l /etc/passwd'], 'wc zählt mit der Option -l Zeilen.', 'wc -l liefert Zeilenzahl und Dateiname.'),
  command('02 · Mach mit: Systemdateien', 'Zeige die ersten fünf Zeilen der virtuellen CPU-Information.', ['head -n 5 /proc/cpuinfo'], 'head zeigt den Anfang.', '/proc/cpuinfo wird in der Simulation wie eine virtuelle Kerneldatei gelesen.'),
  command('03 · Mach mit: Home und nano', 'Gehe in dein Home-Verzeichnis.', ['cd ~', 'cd'], '~ steht für dein Home.', 'cd ~ führt nach /home/andre.'),
  command('03 · Mach mit: Home und nano', 'Zeige dort auch versteckte Dateien.', ['ls -a'], 'Die Option lautet -a.', 'ls -a zeigt unter anderem ., .. und .bashrc.'),
  command('03 · Mach mit: Home und nano', 'Lege ~/linux-kurs/tag03 einschließlich fehlender Oberordner an.', ['mkdir -p ~/linux-kurs/tag03'], 'mkdir benötigt die Option -p.', '-p erstellt die benötigte Verzeichniskette.'),
  command('03 · Mach mit: Home und nano', 'Wechsle in den neuen Tag-3-Ordner.', ['cd ~/linux-kurs/tag03', 'cd linux-kurs/tag03'], 'Nutze den Pfad ab Home.', 'Die folgenden Dateien bleiben in diesem verbundenen Übungsordner.'),
  command('03 · Mach mit: Home und nano', 'Öffne notizen.txt im simulierten nano.', ['nano notizen.txt'], 'Der Aufruf besteht aus Editor und Dateiname.', 'Der Simulator wechselt in den kontrollierten Editor.'),
  command('03 · Mach mit: Home und nano', 'Lies die gespeicherte notizen.txt.', ['cat notizen.txt'], 'Verwende cat.', 'cat sieht den zuvor im Editor gespeicherten Inhalt.'),
  command('03 · Mach mit: Home und nano', 'Zeige Besitzer, Gruppe, Größe, Datum und Namen von notizen.txt.', ['ls -l notizen.txt'], 'Die lange Listenoption ist -l.', 'Die Metadaten stammen ausschließlich aus dem virtuellen Dateisystem.'),
  command('03 · Mach mit: Home und nano', 'Zeige /etc/passwd mit lesbarer Größe in langer Form.', ['ls -lh /etc/passwd', 'ls -hl /etc/passwd'], 'Kombiniere -l und -h.', '-h formatiert Größen lesbar.'),
  command('03 · Mach mit: Home und nano', 'Sortiere dein Home in langer Form nach Änderungszeit.', ['ls -lt ~', 'ls -tl ~'], 'Kombiniere -l und -t.', '-t stellt neuere Einträge zuerst.'),
  command('04 · Mach mit: Links', 'Lege verweis.txt als symbolischen Link auf notizen.txt an.', ['ln -s notizen.txt verweis.txt'], 'Bei ln -s kommt zuerst das Ziel.', 'Der Link speichert den relativen Zielpfad.'),
  command('04 · Mach mit: Links', 'Prüfe den Link samt Pfeil in langer Form.', ['ls -l verweis.txt'], 'Nutze ls -l für den Linknamen.', 'Das erste Zeichen l und der Pfeil machen den Link sichtbar.'),
  command('04 · Mach mit: Links', 'Lies die Notiz durch den Link.', ['cat verweis.txt'], 'cat kann dem Linkziel folgen.', 'Der Inhalt stammt aus notizen.txt.'),
  command('04 · Mach mit: Links', 'Öffne notizen.txt erneut, um Ausschneiden und Einfügen zu üben.', ['nano notizen.txt'], 'Öffne dieselbe Zieldatei.', 'Im Editor werden Strg+K, Strg+U und erneutes Speichern geübt.'),
  command('05 · Aufgabe A: FHS', 'Wechsle erneut in die Wurzel.', ['cd /'], 'Nutze cd mit /.', 'Die Erkundung beginnt am Stamm des Baums.'),
  command('05 · Aufgabe A: FHS', 'Liste die vorhandenen Home-Verzeichnisse.', ['ls /home'], 'Gib /home als Argument an.', 'Die Simulation enthält den Benutzerordner andre.'),
  command('05 · Aufgabe A: FHS', 'Prüfe erneut die beiden Programme unter /bin.', ['ls -l /bin/ls /bin/cp'], 'Lange Liste, zwei Pfade.', 'Die Pfade demonstrieren den /bin-Verweis.'),
  command('05 · Aufgabe A: FHS', 'Liste /var/log und finde die Datei für allgemeine Meldungen.', ['ls /var/log'], 'Der Dateiname steht auch im Kapitel.', 'Die gesuchte Datei heißt syslog.'),
  command('05 · Aufgabe A: FHS', 'Öffne fhs.txt mit nano und schreibe vier Antworten, je eine pro Zeile.', ['nano ~/linux-kurs/tag03/fhs.txt'], 'Verwende den vollständigen Pfad.', 'Die Antworten werden als vier Zeilen im verbundenen Dateisystem gespeichert.'),
  text('05 · Aufgabe A: FHS', 'Wie heißt die Datei für allgemeine Systemmeldungen?', ['syslog'], 'Sie liegt in /var/log.', 'Die Quelle nennt syslog.'),
  command('06 · Aufgabe B: Benutzerliste', 'Zähle die Zeilen der Benutzerliste.', ['wc -l /etc/passwd'], 'Nutze wc -l.', 'Jede simulierte Zeile steht für einen Benutzer.'),
  command('06 · Aufgabe B: Benutzerliste', 'Zeige ihre letzten drei Zeilen.', ['tail -n 3 /etc/passwd'], 'Nutze tail und n=3.', 'Die letzte Zeile gehört dem normalen Beispielbenutzer andre.'),
  command('06 · Aufgabe B: Benutzerliste', 'Öffne meinuser.txt im Tag-3-Ordner.', ['nano ~/linux-kurs/tag03/meinuser.txt'], 'Nutze nano mit absolutem Home-Pfad.', 'Die Benutzerzeile und vier Angaben werden gespeichert.'),
  command('06 · Aufgabe B: Benutzerliste', 'Kontrolliere meinuser.txt.', ['cat ~/linux-kurs/tag03/meinuser.txt'], 'Lies die Datei mit cat.', 'cat zeigt die gespeicherte Auswertung.'),
  text('06 · Aufgabe B: Benutzerliste', 'Welche UID hat der normale Beispielbenutzer andre?', ['1000'], 'Es ist Feld 3 seiner passwd-Zeile.', 'andre hat in den simulierten Kursdaten UID 1000.'),
  command('07 · Aufgabe C: nano', 'Öffne notiz.txt im Tag-3-Ordner.', ['nano ~/linux-kurs/tag03/notiz.txt'], 'Nutze nano und den angegebenen Pfad.', 'Im Editor werden genau drei Zeilen geschrieben.'),
  command('07 · Aufgabe C: nano', 'Zeige notiz.txt nach dem Speichern.', ['cat ~/linux-kurs/tag03/notiz.txt'], 'Nutze cat.', 'Die gespeicherten drei Zeilen bleiben in der Sitzung erhalten.'),
  command('07 · Aufgabe C: nano', 'Zähle die Zeilen in notiz.txt.', ['wc -l ~/linux-kurs/tag03/notiz.txt'], 'Nutze wc -l.', 'Das Ergebnis muss für die geforderte Notiz drei sein.'),
]

export const linuxDayThreeTasks: DayThreeTask[] = raw.map((task, index) => ({ ...task, id: `linux-03-train-${String(index + 1).padStart(3, '0')}` }))

export type DayThreeExamQuestion = { id: string; question: string; options: string[]; correct: number; explanation: string }
const q = (n: number, question: string, options: string[], correct: number, explanation: string): DayThreeExamQuestion => ({ id: `linux-03-exam-${String(n).padStart(2, '0')}`, question, options, correct, explanation })
export const linuxDayThreeExam: DayThreeExamQuestion[] = [
  q(1, 'Wo beginnt der eine Linux-Verzeichnisbaum?', ['/root', '/', '/home', '/boot'], 1, '/ ist die Wurzel.'),
  q(2, 'Was beschreibt der FHS?', ['Passwortregeln', 'Verzeichnisaufbau und vorgesehene Inhalte', 'Netzwerkadressen', 'Dateirechte'], 1, 'Der Standard macht Pfade vorhersehbar.'),
  q(3, 'Was ist /root?', ['Die Wurzel', 'Das Home von root', 'Ein Link auf /', 'Ein Logordner'], 1, '/root ist nicht /.'),
  q(4, 'Wo liegt die Systemkonfiguration?', ['/etc', '/dev', '/tmp', '/proc'], 0, '/etc enthält Konfigurationsdateien.'),
  q(5, 'Welches Verzeichnis enthält veränderliche Daten wie Logs?', ['/boot', '/var', '/lib', '/mnt'], 1, '/var/log ist das Kursbeispiel.'),
  q(6, 'Was kann /dev/sda1 darstellen?', ['Eine Partition', 'Einen Benutzer', 'Eine Shell', 'Eine Konfiguration'], 0, 'Geräte und Partitionen erscheinen unter /dev.'),
  q(7, 'Was ist /proc/cpuinfo im Kurskontext?', ['Eine echte Textdatei auf USB', 'Virtuell erzeugte Kernelinformation', 'Ein Passwortspeicher', 'Ein Link nach /etc'], 1, '/proc ist virtuell.'),
  q(8, 'Was enthält /etc/hostname?', ['Rechnername', 'Benutzerpasswort', 'CPU-Takt', 'Logdateien'], 0, 'Dort steht der Hostname.'),
  q(9, 'Wie viele Felder hat eine /etc/passwd-Zeile?', ['5', '6', '7', '8'], 2, 'Sieben Felder sind durch Doppelpunkte getrennt.'),
  q(10, 'Welches passwd-Feld ist die UID?', ['2', '3', '4', '6'], 1, 'Feld 3 ist die UID.'),
  q(11, 'Wo liegen Passwörter laut Quelle?', ['/etc/passwd', '/etc/shadow', '/etc/hosts', '/proc'], 1, '/etc/passwd enthält nur x als Platzhalter.'),
  q(12, 'Was kennzeichnet im Kurs meist einen normalen Benutzer?', ['UID ab 1000', 'GID 0', 'Shell /bin', 'Name root'], 0, 'UIDs unter 1000 sind laut Quelle Systembenutzer.'),
  q(13, 'Welche Option zeigt versteckte Namen?', ['ls -l', 'ls -a', 'ls -t', 'ls -d'], 1, '-a steht für alle Einträge.'),
  q(14, 'Was bedeutet . in einer Verzeichnisliste?', ['Wurzel', 'Home', 'aktueller Ordner', 'versteckter Schutz'], 2, '. bezeichnet den aktuellen Ordner.'),
  q(15, 'Welches erste Zeichen in ls -l kennzeichnet einen Link?', ['-', 'd', 'l', 's'], 2, 'l steht für Link.'),
  q(16, 'Was bewirkt ls -ld /etc?', ['Inhalt rekursiv', 'Ordner selbst in langer Form', 'Löschen', 'Versteckte Dateien'], 1, '-d zeigt den Verzeichniseintrag selbst.'),
  q(17, 'Welche Reihenfolge nutzt ln -s?', ['Link, Ziel', 'Ziel, Linkname', 'Option, Link, Ziel', 'Nur Ziel'], 1, 'Erst Ziel, dann Linkname.'),
  q(18, 'Was passiert beim Löschen nur des symbolischen Links?', ['Ziel wird gelöscht', 'Ziel bleibt bestehen', 'Beide werden geschützt', 'Link wird Ordner'], 1, 'Der Verweis und sein Ziel sind getrennte Einträge.'),
  q(19, 'Welche Nano-Tastenfolge speichert und bestätigt den Namen?', ['Strg+X, N', 'Strg+O, Enter', 'Strg+K, Strg+U', 'Alt+U, Enter'], 1, 'Strg+O speichert; Enter bestätigt den Namen.'),
  q(20, 'Welcher Aufruf zählt Zeilen?', ['wc -l datei', 'ls -l datei', 'tail -l datei', 'cat -l datei'], 0, 'wc -l zählt Zeilen.'),
]
