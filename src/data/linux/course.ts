import type { ContentBlock, Exercise, Topic } from '../../types/content'

// Source: Linux/Was ist Linux.pdf (12 pages). Add later PDF lessons as separate topics here.
const slug = 'was-ist-linux'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const list = (...items: string[]): ContentBlock => ({ type: 'list', style: 'bullet', items })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const choice = (n: number, question: string, options: string[], answer: number, explanation: string): Exercise => ({
  id: `linux-01-quiz-${n}`, topicSlug: slug, type: 'single-choice', difficulty: 'easy', question,
  options: options.map((text, index) => ({ id: String(index), text })), correctAnswer: String(answer), explanation,
})
const open = (n: number, question: string): Exercise => ({
  id: `linux-01-praxis-${n}`, topicSlug: slug, type: 'technical-problem', difficulty: 'medium', question,
})

export const linuxTopics: Topic[] = [{
  id: 'topic-linux-01-was-ist-linux', slug, moduleSlug: 'linux', title: 'Was ist Linux?', order: 1,
  shortIntro: 'Herkunft, Grundideen, Distributionen, Installation und erste Terminalbefehle.',
  content: [
    h('Einführung'),
    p('Linux begegnet dir auf Servern, Routern und Android-Geräten. In dieser Lektion lernst du, was ein Betriebssystem leistet, wie GNU/Linux entstand und wie du eine Debian-basierte Distribution in einer virtuellen Maschine ausprobierst.'),
    h('Lernziele'),
    list('Betriebssystem, Kernel, GNU und Distribution unterscheiden.', 'Grundprinzipien und Lizenz von Linux erläutern.', 'Eine passende Debian-basierte Distribution wählen und in einer VM installieren.', 'Die ersten Systeminformationen im Terminal abfragen.'),
    h('Betriebssysteme im Vergleich'),
    p('Ein Betriebssystem vermittelt zwischen Benutzerprogrammen und Hardware. Es verwaltet Prozessor, Arbeitsspeicher, Datenträger sowie Ein- und Ausgabegeräte und startet Programme.'),
    table(['System', 'Stärken', 'Grenzen laut Quelle'], [
      ['Windows', 'Große Programm- und Spieleauswahl; im Büro verbreitet', 'Kostenpflichtig; geschlossener Quellcode; höherer Speicherbedarf'],
      ['macOS', 'Stabil; Terminal vorhanden', 'An Apple-Hardware gebunden; geringe Hardwareauswahl'],
      ['Linux', 'Kostenlos; offener Quellcode; sparsam; stark auf Servern', 'Weniger fertige Programme; teils eigene Einrichtung nötig'],
    ]),
    h('Von Unix zu GNU/Linux'),
    table(['Jahr', 'Entwicklung', 'Bedeutung'], [
      ['1969', 'Unix von Ken Thompson und Dennis Ritchie', 'Vorbild für kleine, kombinierbare Werkzeuge und „Alles ist eine Datei“'],
      ['1983', 'GNU-Projekt von Richard Stallman', 'Freie Werkzeuge wie Bash, GCC und Coreutils; ein Kernel fehlte'],
      ['1991', 'Linux-Kernel von Linus Torvalds', 'Kernel spricht mit der Hardware und verteilt Rechenzeit'],
    ]),
    { type: 'note', text: 'GNU-Werkzeuge und Linux-Kernel bilden zusammen ein nutzbares GNU/Linux-System. Ein Compiler wie GCC übersetzt Quellcode in ein Programm.' },
    h('Grundprinzipien und Lizenz'),
    list('Ein Werkzeug erledigt eine Aufgabe gut.', 'Geräte und Prozesse erscheinen im System als Dateien.', 'Konfiguration steht oft in Textdateien unter /etc.', 'Kleine Programme lassen sich mit der Pipe | verbinden.', 'Der Quellcode ist offen und darf nach den Lizenzbedingungen genutzt und geändert werden.'),
    p('Open Source macht Quellcode einsehbar und veränderbar. Die GPL verlangt bei Weitergabe des entsprechend lizenzierten Codes die erneute Offenlegung; dieses Prinzip heißt Copyleft. Die Quelle nennt bessere Prüfbarkeit, weniger Herstellerbindung und Anpassbarkeit als Vorteile.'),
    h('Distributionen auswählen'),
    p('Eine Distribution bündelt Linux-Kernel, Systemwerkzeuge, Paketverwaltung und meist eine grafische Oberfläche. Für diesen Kurs verlangt die Quelle eine Debian-basierte Distribution.'),
    table(['Distribution', 'Basis', 'Zielgruppe laut Quelle', 'Paketverwaltung'], [
      ['Debian', 'eigene', 'stabile Server', 'apt'], ['Ubuntu', 'Debian', 'Einsteiger; Desktop und Server', 'apt'],
      ['Lubuntu', 'Ubuntu', 'sparsame VM', 'apt'], ['Xubuntu', 'Ubuntu', 'sparsame VM', 'apt'],
      ['Linux Mint', 'Ubuntu', 'Windows-Umsteiger', 'apt'], ['Fedora', 'Red Hat', 'Entwickler; neue Technik', 'dnf'],
      ['Arch', 'eigene', 'erfahrene Nutzer', 'pacman'], ['Kali', 'Debian', 'Sicherheitstests', 'apt'],
    ]),
    { type: 'note', text: 'Für die Übungen empfiehlt die Quelle Lubuntu oder Xubuntu. Fedora und Arch sind nicht Debian-basiert. Die Paketverwaltung apt wird hier nur eingeordnet; ihre Benutzung folgt erst in einem späteren Quellkapitel.' },
    h('Installation in einer virtuellen Maschine'),
    p('Eine VM ist ein Rechner innerhalb des bestehenden Systems. Die Quelle beschreibt VMware Workstation Player und eine aktuelle LTS-ISO von lubuntu.me oder xubuntu.org. LTS steht für Long Term Support.'),
    { type: 'list', style: 'numbered', items: [
      'ISO der gewählten Distribution herunterladen und in VMware Workstation Player eine neue VM anlegen.',
      'Virtuelle Festplatte mit 25 GB, 4096 MB RAM (mindestens 2048 MB) und zwei Prozessorkernen einstellen.',
      'Installation starten: Sprache Englisch, Zeitzone Berlin und Tastatur Deutsch auswählen.',
      '„Erase disk“ nur für die virtuelle Festplatte wählen, Benutzer anlegen und Zugangsdaten sicher aufbewahren.',
      'Nach der Installation neu starten, ISO gegebenenfalls aus dem virtuellen Laufwerk entfernen und anmelden.',
      'Desktop und Dateimanager erkunden; mit Strg+Alt+T das Terminal öffnen.',
    ] },
    { type: 'warning', text: 'Bei einer direkten Installation auf einem PC kann „Erase disk“ die vorhandenen Daten einschließlich Windows löschen. Die Quelle empfiehlt deshalb für den Kurs eine VM oder einen Rechner ohne wichtige Daten.' },
    h('Erste Terminalbefehle'),
    p('Gib jeweils den Befehl ein und bestätige mit Enter. Optionen und Pfade sind Teil des jeweiligen Aufrufs.'),
    table(['Eingabe', 'Befehl', 'Option / Argument', 'Ergebnis'], [
      ['whoami', 'whoami', '–', 'angemeldeter Benutzername'],
      ['pwd', 'pwd', '–', 'aktuelles Verzeichnis'],
      ['date', 'date', '–', 'Datum und Uhrzeit'],
      ['uname -r', 'uname', 'Option -r', 'Kernel-Version'],
      ['cat /etc/os-release', 'cat', 'Dateipfad /etc/os-release', 'Distribution und Version'],
      ['exit', 'exit', '–', 'Terminal schließen'],
      ['ls', 'ls', '–', 'Dateien und Ordner auflisten (Praxisaufgabe)'],
    ]),
    code('whoami\npwd\ndate\nuname -r\ncat /etc/os-release\nls\nexit'),
    code('whoami\n# andre\npwd\n# /home/andre\nuname -r\n# 6.8.0-45-generic'),
    { type: 'note', text: 'Die mit # beginnenden Zeilen zeigen hier beispielhafte Ausgaben. Gib sie nicht ein. Benutzername, Pfad und Kernel-Version können bei dir anders aussehen.' },
    { type: 'key-points', items: ['Linux ist der Kernel; GNU/Linux bezeichnet das System aus Kernel und GNU-Werkzeugen.', 'Eine Distribution liefert ein installierbares Gesamtpaket.', 'Die ersten Befehle zeigen Benutzer, Verzeichnis, Uhrzeit, Kernel und Distribution.'] },
  ],
  exercises: [
    open(1, 'Vergleiche Ubuntu, Lubuntu, Xubuntu und Fedora: Notiere jeweils Zielgruppe, Paketverwaltung und Debian-Basis. Wähle eine Debian-basierte Distribution und begründe deine Wahl.'),
    open(2, 'Installiere eine Debian-basierte Distribution in einer VM oder auf einem Rechner ohne wichtige Daten. Verwende 25 GB virtuelle Festplatte, mindestens 2048 MB RAM und zwei Prozessorkerne. Melde dich an, öffne mit Strg+Alt+T das Terminal und führe whoami, pwd und date aus.'),
    open(3, 'Öffne den Dateimanager und lege im Home-Ordner linux-kurs an. Öffne das Terminal, prüfe den Ordner mit ls und notiere die Ausgabe von pwd.'),
    open(4, 'Ermittle Benutzername, Kernel-Version, Distribution mit Versionsnummer sowie Datum und Uhrzeit. Schreibe die vier Ergebnisse mit einem Texteditor in systeminfo.txt in deinem Home-Ordner.'),
    choice(1, 'Wer startete 1983 das GNU-Projekt?', ['Linus Torvalds', 'Richard Stallman', 'Ken Thompson', 'Steve Jobs'], 1, 'Richard Stallman startete das GNU-Projekt.'),
    choice(2, 'Was schrieb Linus Torvalds 1991?', ['Bash', 'Den Linux-Kernel', 'LXQt', 'apt'], 1, 'Torvalds entwickelte den Linux-Kernel.'),
    choice(3, 'Was ist eine Linux-Distribution?', ['Ein anderes Wort für den Kernel', 'Ein Paket aus Kernel, Systemprogrammen, Paketverwaltung und meist Oberfläche', 'Ein Verteilprogramm', 'Eine Firma'], 1, 'Eine Distribution bündelt die Bestandteile zu einem nutzbaren System.'),
    choice(4, 'Welche Distribution nennt die Quelle als sparsam?', ['Kali', 'Lubuntu', 'Fedora', 'Red Hat Enterprise Linux'], 1, 'Lubuntu eignet sich laut Quelle für kleine virtuelle Maschinen.'),
    choice(5, 'Was bedeutet „Everything is a file“?', ['Jedes Programm speichert nur Dateien', 'Geräte und Prozesse erscheinen als Dateien', 'Linux öffnet nur Textdateien', 'Alle Dateien liegen unter /home'], 1, 'Geräte und Prozesse werden über Dateischnittstellen zugänglich.'),
    choice(6, 'Was ist das Copyleft-Prinzip der GPL laut Quelle?', ['Nur Firmen dürfen Code ändern', 'Weitergegebener Code muss wieder offengelegt werden', 'Kommerzielle Nutzung ist verboten', 'Änderungen müssen an Torvalds gesendet werden'], 1, 'Bei Weitergabe bleibt der Code offen.'),
    choice(7, 'Welche Tastenkombination öffnet in den beschriebenen Ubuntu-Varianten das Terminal?', ['Strg+Alt+T', 'Strg+T', 'Alt+F4', 'Strg+Shift+Esc'], 0, 'Die Quelle nennt Strg+Alt+T.'),
    { id: 'linux-01-quiz-8', topicSlug: slug, type: 'text', difficulty: 'easy', question: 'Welcher Befehl zeigt deinen eigenen Benutzernamen?', correctAnswer: 'whoami', explanation: 'Der Befehl lautet whoami.' },
  ],
}]
