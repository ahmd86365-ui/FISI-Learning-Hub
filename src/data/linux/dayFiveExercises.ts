export type DayFiveTask = {
  id: string; section: string; prompt: string; kind: 'command' | 'text'; answers: string[]; hint: string; explanation: string; ar: string
}

const command = (section: string, prompt: string, answers: string[], hint: string, explanation: string): Omit<DayFiveTask, 'id'> => ({ section, prompt, kind: 'command', answers, hint, explanation, ar: '...' })

const raw: Omit<DayFiveTask, 'id'>[] = [
  command('Die Woche in Dateien', 'Wechsle in dein Home-Verzeichnis.', ['cd ~', 'cd'], 'Nutze cd.', 'Du bist nun in deinem Home-Ordner.'),
  command('Die Woche in Dateien', 'Lege den Ordner ~/linux-kurs/tag05 an (inklusive Unterordner).', ['mkdir -p ~/linux-kurs/tag05', 'mkdir -p linux-kurs/tag05'], 'Verwende mkdir -p.', 'Der Ordner für Tag 5 wurde erstellt.'),
  command('Die Woche in Dateien', 'Wechsle in den neuen Ordner.', ['cd ~/linux-kurs/tag05', 'cd linux-kurs/tag05'], 'Verwende cd.', 'Du befindest dich nun in tag05.'),
  command('Die Woche in Dateien', 'Schreibe das Wort "pwd" in eine neue Datei befehle.txt.', ['echo "pwd" > befehle.txt', 'echo pwd > befehle.txt'], 'Nutze echo und >.', 'Die Datei wurde angelegt.'),
  command('Die Woche in Dateien', 'Hänge das Wort "ls" an befehle.txt an.', ['echo "ls" >> befehle.txt', 'echo ls >> befehle.txt'], 'Nutze echo und >>.', 'Die Zeile wurde angehängt.'),
  command('Die Woche in Dateien', 'Hänge das Wort "cd" an befehle.txt an.', ['echo "cd" >> befehle.txt', 'echo cd >> befehle.txt'], 'Nutze echo und >>.', 'Die Zeile wurde angehängt.'),
  command('Die Woche in Dateien', 'Hänge das Wort "mkdir" an befehle.txt an.', ['echo "mkdir" >> befehle.txt', 'echo mkdir >> befehle.txt'], 'Nutze echo und >>.', 'Die Zeile wurde angehängt.'),
  command('Die Woche in Dateien', 'Hänge das Wort "chmod" an befehle.txt an.', ['echo "chmod" >> befehle.txt', 'echo chmod >> befehle.txt'], 'Nutze echo und >>.', 'Die Zeile wurde angehängt.'),
  command('Die Woche in Dateien', 'Zeige die Datei befehle.txt an.', ['cat befehle.txt'], 'Nutze cat.', 'Die fünf Befehle werden aufgelistet.'),
  command('Die Woche in Dateien', 'Zähle die Zeilen in befehle.txt.', ['wc -l befehle.txt', 'cat befehle.txt | wc -l'], 'Nutze wc -l.', 'Es sind 5 Zeilen.'),
  command('Die Woche in Dateien', 'Sortiere die Liste und schreibe das Ergebnis in sortiert.txt.', ['sort befehle.txt > sortiert.txt', 'cat befehle.txt | sort > sortiert.txt'], 'Nutze sort und >.', 'Die sortierte Liste wurde gespeichert.'),
  command('Die Woche in Dateien', 'Zeige nur die ersten zwei Zeilen von sortiert.txt.', ['head -n 2 sortiert.txt'], 'Nutze head -n 2.', 'Die ersten beiden alphabetischen Befehle werden angezeigt.'),
  command('Die Woche in Dateien', 'Versuche cat gibtsnicht.txt auszuführen. Du siehst eine Fehlermeldung.', ['cat gibtsnicht.txt'], 'Nutze cat.', 'Die Datei existiert nicht.'),
  command('Die Woche in Dateien', 'Leite diese Fehlermeldung in fehler.txt um.', ['cat gibtsnicht.txt 2> fehler.txt'], 'Nutze 2>.', 'Der Fehler wurde in die Datei umgeleitet.'),
  command('Die Woche in Dateien', 'Zeige die Fehlermeldung aus der Datei an.', ['cat fehler.txt'], 'Nutze cat.', 'Die Fehlermeldung steht nun in der Textdatei.')
]

export const linuxDayFiveTasks: DayFiveTask[] = raw.map((task, index) => ({ ...task, id: `linux-05-train-${String(index + 1).padStart(3, '0')}` }))

export type DayFiveExamQuestion = { id: string; question: string; options: string[]; correct: number; explanation: string }
const q = (n: number, question: string, options: string[], correct: number, explanation: string): DayFiveExamQuestion => ({ id: `linux-05-exam-${String(n).padStart(2, '0')}`, question, options, correct, explanation })

export const linuxDayFiveExam: DayFiveExamQuestion[] = [
  q(1, 'Wer hat 1991 mit dem Linux-Kernel angefangen?', ['Richard Stallman', 'Linus Torvalds', 'Brian Fox', 'Dennis Ritchie'], 1, 'Linus Torvalds begann 1991 den Kernel. Richard Stallman startete 1983 das GNU-Projekt. Brian Fox schrieb die Bash. Dennis Ritchie ist einer der Erfinder von Unix.'),
  q(2, 'Du tippst erst echo A > liste.txt und dann echo B > liste.txt. Was steht danach in liste.txt?', ['A und B', 'Nur B', 'Nur A', 'Nichts, die Datei ist leer'], 1, '> löscht vorher den alten Inhalt. Für A und B brauchst du beim zweiten Befehl >>.'),
  q(3, 'Was macht die Pipe in ls /etc | wc -l?', ['Sie hängt die Liste von ls an eine Datei an', 'Sie schreibt die Liste in eine Datei namens wc', 'Sie gibt die Liste von ls an wc -l weiter', 'Sie zeigt nur die Fehler von ls'], 2, '| gibt die Ausgabe von ls an wc -l weiter. wc -l zählt die Zeilen dieser Liste.'),
  q(4, 'Was passiert bei cat gibtsnicht.txt 2> /dev/null?', ['Die Fehlermeldung landet in einer Datei zum Nachlesen', 'Die Fehlermeldung verschwindet', 'cat legt die Datei gibtsnicht.txt an', 'Die Fehlermeldung kommt zweimal'], 1, '2> leitet die Fehler um. /dev/null schluckt alles, was hineinkommt. Nachlesen kannst du es nicht.'),
  q(5, 'Du startest ./backup.sh und siehst Permission denied. Welcher Befehl gibt backup.sh das Recht zum Ausführen?', ['chmod +x ./backup.sh', 'chmod -x ./backup.sh', 'chown backup.sh', 'execute backup.sh'], 0, 'Dem Skript fehlt das Recht zum Ausführen. chmod +x gibt es ihm.'),
  q(6, 'Welche Zeile speichert das Datum in der Form 2026-09-25?', ['HEUTE=$(date +%d.%m.%Y)', 'HEUTE = $(date +%Y-%m-%d)', 'HEUTE=date +%Y-%m-%d', 'HEUTE=$(date +%Y-%m-%d)'], 3, '$( ) speichert die Ausgabe von date. %Y-%m-%d gibt Jahr, Monat und Tag. Um das = darf kein Leerzeichen stehen.'),
  q(7, 'Du stehst in /tmp. Welcher Pfad führt trotzdem in deinen Kursordner?', ['linux-kurs', '~/linux-kurs', './linux-kurs', '../linux-kurs'], 1, '~ steht für dein Home, zum Beispiel /home/carlos. Dieser Pfad gilt überall. Die anderen gelten nur ab dem Ordner, in dem du gerade stehst.')
]
