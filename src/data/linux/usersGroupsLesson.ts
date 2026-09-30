import type { ContentBlock, Exercise, Topic } from '../../types/content'

const slug = 'benutzer-und-gruppen'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const choice = (n: number, question: string, options: string[], answer: number, explanation: string): Exercise => ({
  id: `linux-07-quiz-${n}`, topicSlug: slug, type: 'single-choice', difficulty: 'medium', question,
  options: options.map((text, index) => ({ id: String(index), text })), correctAnswer: String(answer), explanation,
})

export const linuxUsersGroupsTopic: Topic = {
  id: 'topic-linux-07-benutzer-und-gruppen', slug, moduleSlug: 'linux', title: 'Benutzer und Gruppen', order: 7,
  shortIntro: 'Konten, Home-Verzeichnisse und Gruppen verwalten, sicher mit sudo arbeiten und Verwaltungsaufgaben skripten.',
  content: [
    h('Benutzer, Gruppen und root'),
    p('Auf einem Firmenserver arbeiten mehrere Menschen. Jeder Benutzer hat eine eigene Kennung, ein Home-Verzeichnis und eigene Dateien. Gruppen bündeln Benutzer, die gemeinsam auf Ressourcen zugreifen sollen. Das Administratorkonto heißt root.'),
    code('whoami\nid\ngrep $USER /etc/passwd'),
    p('whoami zeigt den aktuellen Benutzernamen. id zeigt UID, primäre GID und alle Gruppenmitgliedschaften. In /etc/passwd stehen unter anderem Home-Verzeichnis und Login-Shell.'),
    { type: 'note', text: 'sudo führt genau den folgenden Befehl mit Administratorrechten aus. Es fragt nach dem Passwort des aktuell angemeldeten Benutzers, sofern dieser zur Gruppe sudo gehört.' },
    h('Einen Benutzer vollständig anlegen'),
    code('sudo useradd -m -s /bin/bash javier\nls /home\ngrep javier /etc/passwd\nsudo passwd javier'),
    table(['Teil', 'Bedeutung'], [
      ['useradd', 'legt das Konto an'],
      ['-m', 'erstellt /home/javier'],
      ['-s /bin/bash', 'setzt Bash als Login-Shell'],
      ['passwd javier', 'setzt das Passwort interaktiv'],
    ]),
    p('Für ein durchlaufendes Übungsskript kann chpasswd Name und Passwort durch einen Doppelpunkt getrennt einlesen.'),
    code('echo "javier:Start123" | sudo chpasswd'),
    { type: 'warning', text: 'Ein Klartextpasswort ist nur für die abgeschottete Übungs-VM vorgesehen. Echte Passwörter dürfen weder in Skripten noch in einem Repository stehen.' },
    h('Benutzer wechseln'),
    code('su - javier\nwhoami\npwd\nexit'),
    p('Der Bindestrich startet eine vollständige Anmeldung und wechselt in das Home-Verzeichnis des Zielbenutzers. Ohne Bindestrich bleibt das aktuelle Verzeichnis erhalten, was dort zu Permission denied führen kann.'),
    h('Gruppen verwalten'),
    code('sudo groupadd verkauf\nsudo usermod -aG verkauf javier\nid javier\ngrep verkauf /etc/group'),
    { type: 'warning', text: 'Vergiss bei usermod -aG das -a nicht. Ohne -a werden die bisherigen ergänzenden Gruppen ersetzt; dabei kann ein Benutzer sogar seine sudo-Mitgliedschaft verlieren.' },
    h('Konten und Gruppen löschen oder sperren'),
    code('sudo userdel -r javier\nsudo groupdel verkauf\nsudo usermod -L javier\nsudo usermod -U javier'),
    table(['Befehl', 'Wirkung'], [
      ['userdel -r', 'löscht Konto und Home-Verzeichnis'],
      ['groupdel', 'löscht eine Gruppe'],
      ['usermod -L', 'sperrt die Passwortanmeldung'],
      ['usermod -U', 'entsperrt das Konto wieder'],
    ]),
    h('Verwaltung als Skript'),
    p('Ein Administrationsskript wird einmal mit sudo gestartet. Die einzelnen Befehle im Skript benötigen dann kein eigenes sudo.'),
    code('#!/bin/bash\necho "Schritt 1: Gruppe support anlegen"\ngroupadd support\nsleep 2\necho "Schritt 2: Benutzerin lucia anlegen"\nuseradd -m -s /bin/bash lucia\nsleep 2\necho "Schritt 3: Passwort setzen"\necho "lucia:Start123" | chpasswd\nsleep 2\necho "Schritt 4: Gruppe zuweisen"\nusermod -aG support lucia\nid lucia'),
    code('chmod +x lucia.sh\nsudo ./lucia.sh\nsu - lucia'),
    { type: 'key-points', items: ['whoami und id zeigen Identität und Gruppen.', 'useradd -m -s /bin/bash erstellt ein nutzbares Konto mit Home-Verzeichnis und Bash.', 'usermod -aG ergänzt eine Gruppe, ohne bestehende Mitgliedschaften zu verlieren.', 'su - NAME führt eine vollständige Anmeldung aus.', 'Passwörter im Klartext gehören nur in eine kurzlebige, lokale Übung.'] },
  ],
  exercises: [
    choice(1, 'Was bewirkt -m bei useradd?', ['Es setzt die Shell.', 'Es erstellt das Home-Verzeichnis.', 'Es setzt ein Passwort.', 'Es macht den Benutzer zum Administrator.'], 1, '-m erstellt das Home-Verzeichnis des neuen Benutzers.'),
    choice(2, 'Wie ergänzt du javier um die Gruppe verkauf, ohne andere Gruppen zu entfernen?', ['sudo usermod -G verkauf javier', 'sudo groupadd verkauf javier', 'sudo usermod -aG verkauf javier', 'sudo useradd -G verkauf javier'], 2, '-a hängt die angegebene ergänzende Gruppe an; -G nennt die Gruppe.'),
    choice(3, 'Welcher Befehl löscht javier einschließlich Home-Verzeichnis?', ['sudo userdel javier', 'sudo userdel -r javier', 'sudo groupdel javier', 'sudo rm javier'], 1, 'Die Option -r entfernt zusammen mit dem Konto auch das Home-Verzeichnis.'),
    choice(4, 'Warum wird su - javier statt su javier empfohlen?', ['Der Bindestrich setzt ein neues Passwort.', 'Nur so wird root verwendet.', 'Der Bindestrich startet die Login-Umgebung und wechselt in Javiers Home-Verzeichnis.', 'Ohne Bindestrich wird das Konto gelöscht.'], 2, 'su - führt eine vollständige Anmeldung mit der Umgebung des Zielbenutzers aus.'),
  ],
}
