export type DayFourTask = {
  id: string; section: string; prompt: string; kind: 'command' | 'text'; answers: string[]; hint: string; explanation: string; ar: string
}

const command = (section: string, prompt: string, answers: string[], hint: string, explanation: string): Omit<DayFourTask, 'id'> => ({ section, prompt, kind: 'command', answers, hint, explanation, ar: '...' })

const raw: Omit<DayFourTask, 'id'>[] = [
  command('Variablen', 'Erstelle eine Variable ORDNER mit dem Pfad ~/linux-kurs.', ['ORDNER="~/linux-kurs"', "ORDNER='~/linux-kurs'"], 'Kein Leerzeichen um das Gleichheitszeichen.', 'Die Variable merkt sich den Pfad.'),
  command('Variablen', 'Zeige den Inhalt der Variable ORDNER an.', ['echo $ORDNER'], 'Verwende echo und $.', 'Das $ liest den Wert der Variablen aus.'),
  command('Variablen vom System', 'Zeige an, in welchem Ordner du gerade bist, indem du die Systemvariable PWD nutzt.', ['echo $PWD'], 'Nutze echo und $PWD.', '$PWD enthält das aktuelle Arbeitsverzeichnis.'),
  command('Variablen vom System', 'Zeige den Namen des Rechners über die Systemvariable HOSTNAME an.', ['echo $HOSTNAME'], 'Nutze echo und $HOSTNAME.', '$HOSTNAME enthält den Rechnernamen.'),
  command('Datum', 'Gib das heutige Datum im Format YYYY-MM-DD aus.', ['date +%Y-%m-%d'], 'Verwende date und +%Y-%m-%d.', 'Dieses Format sortiert sich gut.'),
  command('Rechnen', 'Lass die Shell 3 + 4 rechnen.', ['echo $(( 3 + 4 ))', 'echo $((3+4))', 'echo $((3 + 4))'], 'Verwende echo und $(( )).', '$(( )) berechnet den Ausdruck.'),
  command('Rechnen', 'Lass die Shell 7 / 2 rechnen.', ['echo $(( 7 / 2 ))', 'echo $((7/2))', 'echo $((7 / 2))'], 'Verwende echo und $(( )).', 'Die Bash rechnet nur mit ganzen Zahlen, das Ergebnis ist 3.')
]

export const linuxDayFourTasks: DayFourTask[] = raw.map((task, index) => ({ ...task, id: `linux-04-train-${String(index + 1).padStart(3, '0')}` }))

export type DayFourExamQuestion = { id: string; question: string; options: string[]; correct: number; explanation: string }
const q = (n: number, question: string, options: string[], correct: number, explanation: string): DayFourExamQuestion => ({ id: `linux-04-exam-${String(n).padStart(2, '0')}`, question, options, correct, explanation })

export const linuxDayFourExam: DayFourExamQuestion[] = [
  q(1, 'Was steht in der ersten Zeile eines Bash-Skripts?', ['#!/bin/bash', '#/bin/bash', 'bin/bash', 'bash'], 0, 'Diese Zeile heißt Shebang. Sie sagt dem System, welche Shell das Skript ausführt.'),
  q(2, 'Welcher Befehl macht die Datei hello.sh ausführbar?', ['chmod +x hello.sh', 'chmod -x hello.sh', 'chmod hello.sh', 'exec hello.sh'], 0, 'chmod +x setzt das Ausführungsrecht. Ohne das Recht kommt Permission denied.'),
  q(3, 'Warum startest du ein Skript mit ./hello.sh und nicht nur mit hello.sh?', ['./ macht das Skript ausführbar', 'Ohne ./ sucht die Shell nur in den Systemordnern und findet das Skript nicht', './ lädt das Skript in die Bash', 'Skripte müssen immer mit einem Punkt anfangen'], 1, './ heißt "in diesem Ordner". Ohne ./ kommt command not found.'),
  q(4, 'Was macht sleep 3 in einem Skript?', ['Es beendet das Skript nach 3 Sekunden', 'Es wartet 3 Sekunden und macht dann weiter', 'Es fährt den Rechner in 3 Minuten herunter', 'Es wiederholt den letzten Befehl 3 mal'], 1, 'sleep wartet die angegebene Zahl an Sekunden. So kann ein Mensch die Ausgabe mitlesen.'),
  q(5, 'Welche Zeile legt eine Variable richtig an?', ['NAME = "Carmen"', 'NAME="Carmen"', '$NAME = "Carmen"', 'set NAME "Carmen"'], 1, 'Um das Gleichheitszeichen darf kein Leerzeichen stehen. Das $ brauchst du nur beim Auslesen.'),
  q(6, 'Wie gibst du den Inhalt der Variable NAME auf dem Bildschirm aus?', ['echo NAME', 'echo "NAME"', 'echo $NAME', 'NAME'], 2, 'Beim Auslesen kommt ein $ vor den Namen. echo $NAME gibt den Wert aus, nicht das Wort NAME.'),
  q(7, 'Was macht read NAME in einem Skript?', ['Es liest die Datei NAME ein', 'Es wartet auf eine Eingabe und speichert sie in der Variable NAME', 'Es gibt den Inhalt von NAME aus', 'Es löscht die Variable NAME'], 1, 'read hält das Skript an und wartet auf Enter. Mit read -p "Frage: " NAME kommt die Frage gleich mit.'),
  q(8, 'Welche Zeile speichert das heutige Datum in der Variable HEUTE?', ['HEUTE=date', 'HEUTE=$(date +%d.%m.%Y)', 'HEUTE = $(date +%d.%m.%Y)', '$HEUTE=(date +%d.%m.%Y)'], 1, '$( ) führt den Befehl aus und gibt seine Ausgabe weiter. HEUTE=date speichert nur das Wort date. Um das = darf kein Leerzeichen stehen.')
]
