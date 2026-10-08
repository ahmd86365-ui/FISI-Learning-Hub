import type { ContentBlock, Exercise, FlashcardQuestion, Question, Topic } from '../../types/content'

const slug = 'uebungsskript-und-ablauf-der-klausur'
const lessonId = 'topic-linux-14-uebungsskript-und-ablauf-der-klausur'
const h = (text: string, level: 2 | 3 = 2): ContentBlock => ({ type: 'heading', level, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const numbered = (...items: string[]): ContentBlock => ({ type: 'list', style: 'numbered', items })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const practical = (id: string, question: string, difficulty: 'medium' | 'hard' = 'hard'): Exercise => ({ id: `linux-14-praxis-${id}`, topicSlug: slug, type: 'technical-problem', difficulty, question })
const card = (id: string, question: string, correct: string, distractors: string[], explanation: string): FlashcardQuestion => ({
  id: `fc-linux-14-${id}`, lessonId, type: 'multiple-choice', question,
  answers: [correct, ...distractors].map((text, index) => ({ id: `a${index}`, text })), correctAnswer: 'a0', explanation,
  difficulty: 'medium', tags: ['Linux', 'Tag 14'],
})
const quiz = (id: number, question: string, answers: string[], correct: number, explanation: string): Question => ({
  id: `linux-14-quiz-${id}`, topicSlug: slug, type: 'single-choice', difficulty: 'medium', question,
  options: answers.map((text, index) => ({ id: `a${index}`, text })), correctAnswer: `a${correct}`, explanation,
})

export const linuxDayFourteenTopic: Topic = {
  id: lessonId, slug, moduleSlug: 'linux', title: 'Übungsskript und Ablauf der Klausur', order: 15,
  shortIntro: 'Ein langes Bash-Skript strukturiert aufbauen, sicher in einer VM testen und in mehreren kleinen Git-Commits abgeben.',
  content: [
    h('Warum dieses Übungsskript wichtig ist'),
    p('Teil 2 der Klausur ist ein Skript. Das Übungsskript richtet einen Firmenrechner ein: Pakete, Benutzer, Gruppen, Ordner, Rechte und Cronjobs werden nicht einzeln von Hand, sondern nachvollziehbar in einem langen Bash-Skript eingerichtet.'),
    h('So baust du ein langes Skript auf'),
    code('#!/bin/bash\n# firma.sh - richtet einen neuen Firmenrechner ein\n# Autor: Lena\n# Start: sudo ./firma.sh'),
    list('Die Shebang in der ersten Zeile wählt Bash.', 'Der Kommentarkopf nennt Name, Zweck und Startbefehl.', 'Abschnittskommentare wie # --- 2. Benutzer und Gruppen --- gliedern das Skript.', 'Vor jedem Arbeitsschritt zeigt ein nummeriertes echo den Fortschritt.', 'Nach jedem Schritt lässt sleep 2 Zeit, die Meldung zu lesen.'),
    code('# --- 2. Benutzer und Gruppen ---\necho "4. Benutzer lena wird angelegt ..."\nuseradd -m lena\nsleep 2'),
    h('Das Skript mit root-Rechten starten'),
    code('chmod +x firma.sh\nsudo ./firma.sh'),
    p('Ein einziges sudo beim Start reicht: Danach läuft das ganze Skript als root. Im Skript selbst wird sudo nicht vor jedem Befehl wiederholt.'),
    { type: 'warning', text: 'Am Ende steht reboot: Der Rechner startet wirklich neu. Speichere vorher alles.' },
    h('Erst testen, dann laufen lassen'),
    p('Das Skript ist nicht idempotent: Beim zweiten Lauf existieren die Benutzer bereits und Befehle melden Fehler. Deshalb wird es in einer VMware-VM mit Snapshot getestet.'),
    numbered('VM anhalten.', 'Snapshot anlegen, zum Beispiel „vor dem Skript“.', 'Skript starten.', 'Ergebnis prüfen.', 'Zum Snapshot zurückkehren und erneut testen.'),
    h('Auf GitHub sichern'),
    p('Die Quelle verlangt mehrere kleine Commits. Jede Nachricht beschreibt genau einen Arbeitsschritt im Imperativ: Add user section, nicht Added user section.'),
    code('git add firma.sh\ngit commit -m "Add user section"\ngit push'),
    h('Befehle für die Aufgabe'),
    { type: 'table', headers: ['Befehl', 'Zweck'], rows: [
      ['apt install -y', 'Pakete ohne Rückfrage installieren'], ['useradd -m', 'Benutzer mit Home-Verzeichnis anlegen'],
      ['chpasswd', 'Passwort nicht-interaktiv setzen'], ['groupadd', 'Gruppe anlegen'], ['usermod -aG', 'zusätzliche Gruppenmitgliedschaft ergänzen'],
      ['chown', 'Besitzer und Gruppe ändern'], ['chmod', 'Rechte ändern'], ['crontab -u', 'Crontab eines anderen Benutzers bearbeiten oder anzeigen'],
      ['sleep 2', 'zwei Sekunden warten'], ['reboot', 'Rechner neu starten'],
    ] },
    h('Aufwärmer: warmup.sh'),
    code('#!/bin/bash\n# warmup.sh - kleine Uebung\n\necho "1. Aktueller Benutzer:"\nwhoami\nsleep 2\n\necho "2. Aktueller Ordner:"\npwd\nsleep 2\n\necho "3. Countdown:"\necho "3"\nsleep 1\necho "2"\nsleep 1\necho "1"\nsleep 1\necho "Fertig."'),
    code('chmod +x warmup.sh\n./warmup.sh'),
    h('Große Klausurübung: firma.sh'),
    { type: 'exam-tip', text: 'Für das gesamte Skript gelten die Quellregeln: Shebang, Kommentarkopf, Abschnittskommentare, nummeriertes echo und sleep 2 pro Schritt; kein if, for oder while; Start mit sudo ./firma.sh.' },
    h('Teil 1: System, Benutzer und Ordner', 3),
    numbered(
      'Paketlisten aktualisieren; alle installierten Pakete ohne Rückfrage aktualisieren; git, htop und curl ohne Rückfrage installieren.',
      'lena und timo mit Home-Verzeichnis, mika ohne Home-Verzeichnis anlegen; für alle drei Start123 per chpasswd setzen.',
      'devteam und office anlegen; lena und mika zu devteam, timo zu office und lena zusätzlich zu sudo hinzufügen.',
      'In /home/lena die Ordner Projekte, Backup, Temp und Credentials mit lena:devteam anlegen; /home/timo/Projekte gehört timo:office.',
      '/srv/projekte mit lena:devteam und /srv/temp mit mika:devteam anlegen; beide erhalten Rechte 770.',
      'In /home/lena/Credentials je Benutzer eine Textdatei mit Benutzername und Passwort anlegen; Besitzer lena:devteam, Rechte 600.'
    ),
    code('chown lena:devteam /srv/projekte\nchmod 770 /srv/projekte\nchown mika:devteam /srv/temp\nchmod 770 /srv/temp'),
    h('Teil 2: Alias, Variable, Cronjobs und Neustart', 3),
    numbered(
      'In lenas .bashrc update_sys als Alias für sudo apt update && sudo apt upgrade -y eintragen.',
      'COMPANY_NAME mit dem Wert Nordlicht GmbH dauerhaft in lenas .bashrc exportieren und sicherstellen, dass die Datei weiterhin lena gehört.',
      'Cronjob für lena: sonntags 00:00 Projekte nach /home/lena/Backup kopieren.',
      'Cronjob für timo: alle 20 Minuten das aktuelle Datum an /home/timo/.zeitlog anhängen.',
      'Cronjob für mika: alle 8 Stunden den Inhalt von /srv/temp löschen.',
      'Alle drei Crontabs anzeigen, Abschluss melden, von 5 bis 1 mit je einer Sekunde herunterzählen und reboot ausführen.'
    ),
    { type: 'warning', text: 'Der letzte Schritt startet den Rechner wirklich neu. Diese Aufgabe gehört in eine VM mit Snapshot.' },
    h('Teil 3: Das Skript auf GitHub', 3),
    numbered(
      'Git-Namen und E-Mail prüfen und fehlende Identität setzen.', 'Den Ordner ~/linux-projekt anlegen, hineinwechseln und git init ausführen.',
      'README.md mit Überschrift und Projektbeschreibung erstellen; nur diese Datei als Add readme committen.',
      'firma.sh hineinkopieren und mit Add setup script committen.', 'README um eine kurze Liste der Skriptschritte ergänzen und mit Document script steps committen.',
      'Mit git log --oneline mindestens drei Commits prüfen.', 'Auf github.com linux-projekt ohne README und .gitignore anlegen, Remote verbinden und pushen.',
      'Im Browser firma.sh und README.md prüfen und den Repository-Link an den Lehrer senden.'
    ),
    { type: 'key-points', items: ['Ein langes Skript braucht sichtbare Gliederung und Fortschrittsmeldungen.', 'sudo beim Start gibt dem gesamten Skript root-Rechte.', 'Snapshots machen die nicht-idempotente Übung wiederholbar.', 'Kleine Git-Commits und imperative Nachrichten dokumentieren den Aufbau.', 'Die praktische Aufgabe endet bewusst mit Kontrolle im Browser und Abgabe des Links.'] },
  ],
  exercises: [
    practical('warmup', 'Schreibe warmup.sh exakt nach der Quelle: Shebang, Kommentar, nummerierte Ausgaben für whoami und pwd mit sleep 2 sowie Countdown 3, 2, 1 mit sleep 1. Mache es ausführbar und starte es.', 'medium'),
    practical('firma-teil-1', 'firma.sh · Teil 1 – System, Benutzer und Ordner: Setze alle 14 Quellanforderungen zu Paketpflege, git/htop/curl, lena/timo/mika, devteam/office, Mitgliedschaften, Home-/srv-Ordnern, Besitz, Rechten und drei Credential-Dateien als strukturiertes sudo-Skript um.'),
    practical('firma-teil-2', 'firma.sh · Teil 2 – Alias, Variable, Cronjobs und Neustart: Ergänze die Schritte 15–24 im selben Skript mit update_sys, COMPANY_NAME, .bashrc-Besitz, den drei exakten Zeitplänen, Crontab-Kontrolle, Abschlussausgabe, Countdown und reboot.'),
    practical('firma-teil-3', 'firma.sh · Teil 3 – GitHub-Abgabe: Prüfe die Git-Identität, erstelle ~/linux-projekt, initialisiere Git, erzeuge README und mindestens die drei Quell-Commits Add readme, Add setup script und Document script steps, kontrolliere git log --oneline, verbinde das leere GitHub-Repo, pushe und prüfe beide Dateien im Browser.'),
  ],
  test: { id: 'test-linux-14-source-quiz', scope: 'topic', subjectSlug: 'it', moduleSlug: 'linux', topicSlug: slug, title: 'Quellenquiz · Tag 14', questions: [
    quiz(1, 'Warum steht apt update im Skript vor apt install?', ['Ohne apt update gibt es apt install nicht.', 'apt update holt aktuelle Paketlisten, damit apt install die passende aktuelle Version findet.', 'apt update startet den Rechner neu.', 'Die Reihenfolge ist egal.'], 1, 'apt update aktualisiert die Paketlisten; apt install verwendet diese Listen.'),
    quiz(2, 'Welcher Befehl macht lena und devteam zu Besitzer und Gruppe von /home/lena/Projekte?', ['chown lena:devteam /home/lena/Projekte', 'chmod lena:devteam /home/lena/Projekte', 'usermod -aG /home/lena/Projekte lena', 'groupadd lena:devteam'], 0, 'Bei chown steht vor dem Doppelpunkt der Benutzer, dahinter die Gruppe.'),
    quiz(3, 'Du bist root. Welcher Befehl öffnet timos Crontab?', ['crontab -e timo', 'crontab -u timo -e', 'cron -u timo -e', 'crontab -l timo'], 1, '-u wählt den Benutzer, -e öffnet die Crontab zum Bearbeiten.'),
    quiz(4, 'Welche Option lässt apt install ohne Rückfrage arbeiten?', ['-r', '-y', '-m', '-q'], 1, '-y beantwortet Rückfragen mit ja.'),
    quiz(5, 'Wozu dient sleep 2 zwischen den Schritten?', ['Es wartet zwei Sekunden, damit die Meldung lesbar bleibt.', 'Es wartet zwei Minuten.', 'Es prüft den vorherigen Rückgabecode.', 'Es speichert das Skript.'], 0, 'sleep verwendet hier Sekunden.'),
    quiz(6, 'Wie lautet die erste Zeile eines Bash-Skripts?', ['#!/bin/bash', '# /bin/bash', 'bash!', 'sudo bash'], 0, 'Die Shebang legt Bash als Interpreter fest.'),
  ] },
  flashcards: [
    card('shebang', 'Was muss in der ersten Zeile von firma.sh stehen?', '#!/bin/bash', ['sudo ./firma.sh', '# firma.sh', 'bash!'], 'Die Shebang wählt Bash.'),
    card('header', 'Welche drei Angaben gehören laut Quelle in den Kommentarkopf?', 'Name, Zweck und Startbefehl.', ['Nur Datum und Uhrzeit.', 'Passwörter und IP-Adresse.', 'Commit-Hash und Port.'], 'Der Kopf erklärt das Skript vor dem ersten Abschnitt.'),
    card('echo', 'Warum werden die echo-Meldungen nummeriert?', 'Damit der laufende oder fehlerhafte Schritt sofort erkennbar ist.', ['Damit Bash root wird.', 'Damit Git automatisch committet.', 'Damit reboot ausbleibt.'], 'Die Nummer macht Fortschritt und Fehlerstelle sichtbar.'),
    card('sleep', 'Was bewirkt sleep 2?', 'Das Skript wartet zwei Sekunden.', ['Es wartet zwei Minuten.', 'Es testet den letzten Befehl.', 'Es beendet die Shell.'], 'Die Pause macht Ausgaben lesbar.'),
    card('single-sudo', 'Warum steht sudo nur vor ./firma.sh?', 'Das gesamte Skript läuft dadurch bereits als root.', ['sudo funktioniert nicht in Dateien.', 'Nur reboot braucht root.', 'Git verbietet sudo.'], 'Ein sudo beim Start reicht.'),
    card('snapshot', 'Warum verlangt die Quelle vor dem Test einen VM-Snapshot?', 'Das nicht-idempotente Skript lässt sich danach wieder von einem sauberen Stand testen.', ['Damit Git schneller pusht.', 'Damit sleep übersprungen wird.', 'Damit Passwörter verschlüsselt werden.'], 'Benutzererstellung würde beim zweiten Lauf Fehler liefern.'),
    card('useradd-m', 'Was bewirkt useradd -m lena?', 'Es legt lena mit Home-Verzeichnis an.', ['Es macht lena zum Admin.', 'Es löscht lenas Home.', 'Es legt die Gruppe lena an.'], '-m erstellt das Home-Verzeichnis.'),
    card('chpasswd', 'Wie setzt das Skript Passwörter ohne Dialog?', 'Es übergibt benutzer:passwort an chpasswd.', ['Mit passwd -m.', 'Mit chmod 600.', 'Mit usermod -p Klartext.'], 'chpasswd verarbeitet die Eingabe nicht-interaktiv.'),
    card('usermod', 'Warum ist bei usermod -aG das -a wichtig?', 'Es ergänzt die Gruppe, ohne bestehende Zusatzgruppen zu ersetzen.', ['Es erstellt das Home.', 'Es aktiviert das Konto.', 'Es ändert den Besitzer.'], '-a bedeutet append.'),
    card('chmod-770', 'Was erlauben Rechte 770 an /srv/projekte?', 'Besitzer und Gruppe dürfen alles, andere nichts.', ['Alle dürfen lesen.', 'Nur root darf schreiben.', 'Andere dürfen ausführen.'], '7 ist rwx, 0 ist ---.'),
    card('chmod-600', 'Warum erhalten Credential-Dateien 600?', 'Nur der Besitzer darf lesen und schreiben.', ['Damit alle sie lesen können.', 'Damit sie ausführbar sind.', 'Damit devteam sie ändern kann.'], 'Passwortdateien werden eng geschützt.'),
    card('bashrc-owner', 'Warum wird nach Änderungen der Besitzer von lenas .bashrc geprüft?', 'Die persönliche Konfiguration soll weiterhin lena gehören.', ['Damit cron sie als root liest.', 'Damit Git sie ignoriert.', 'Damit sie Port 22 öffnet.'], 'Root schreibt im Skript in die Datei, Eigentum soll aber bei lena bleiben.'),
    card('crontab-u', 'Was wählt crontab -u timo aus?', 'Timos benutzerspezifische Crontab.', ['Die Systemzeit.', 'Die Gruppe office.', 'Den Benutzer für chown.'], '-u steht für den Zielbenutzer.'),
    card('reboot', 'Welche Sicherheitsfolge hat der letzte firma.sh-Schritt?', 'Der Rechner startet wirklich neu; vorher speichern und in der Snapshot-VM testen.', ['Nur Bash startet neu.', 'Das Repository wird gelöscht.', 'Die Cronjobs werden pausiert.'], 'Die Warnung gilt ausdrücklich für reboot.'),
    card('small-commits', 'Warum fordert die Quelle mehrere kleine Commits?', 'Jeder nachvollziehbare Arbeitsschritt erhält einen eigenen Stand.', ['Git akzeptiert keine großen Commits.', 'Damit nur README gepusht wird.', 'Damit kein Remote nötig ist.'], 'Die drei verlangten Commits zeigen den Aufbau.'),
    card('imperative', 'Welche Commit-Nachricht entspricht der Quellregel?', 'Add setup script', ['Added setup script', 'adding setup script', 'setup was added'], 'Commit-Nachrichten stehen im Imperativ.'),
    card('git-log', 'Womit prüfst du die mindestens drei kurzen Commits?', 'git log --oneline', ['git status -y', 'git push --check', 'git remote add'], 'Die Ein-Zeilen-Ansicht zeigt den Verlauf kompakt.'),
    card('github-empty', 'Wie soll das neue GitHub-Repository angelegt werden?', 'Ohne README und ohne .gitignore.', ['Mit automatisch erzeugter README.', 'Als Fork.', 'Mit vorinstalliertem Skript.'], 'Die lokalen Dateien und Commits sollen gepusht werden.'),
  ],
}
