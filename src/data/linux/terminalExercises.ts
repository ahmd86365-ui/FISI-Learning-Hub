import type { SimulatedCommand } from '../../lib/linuxTerminal'

export interface TerminalExercise {
  id: string
  task: string
  command: SimulatedCommand
  hint: string
  explanation: string
}

// Only commands explicitly practiced in "Was ist Linux?".
export const terminalExercises: TerminalExercise[] = [
  { id: 'user', task: 'Finde heraus, welcher Benutzer gerade angemeldet ist.', command: 'whoami', hint: 'Der Befehl fragt: Wer bin ich?', explanation: 'whoami zeigt den angemeldeten Benutzernamen.' },
  { id: 'directory', task: 'In welchem Verzeichnis befindest du dich gerade?', command: 'pwd', hint: 'Gesucht ist der Pfad des aktuellen Arbeitsverzeichnisses.', explanation: 'pwd zeigt das aktuelle Verzeichnis.' },
  { id: 'date', task: 'Zeige Datum und Uhrzeit der Lernumgebung an.', command: 'date', hint: 'Der Befehlsname ist das englische Wort für Datum.', explanation: 'date zeigt Datum und Uhrzeit.' },
  { id: 'kernel', task: 'Ermittle die Version des Linux-Kernels.', command: 'uname -r', hint: 'Verwende uname mit der Option für die Kernel-Version.', explanation: 'uname -r gibt die Kernel-Version aus.' },
  { id: 'distribution', task: 'Finde Namen und Version der Linux-Distribution heraus.', command: 'cat /etc/os-release', hint: 'Lies die Datei /etc/os-release mit dem im Kurs gezeigten Befehl.', explanation: 'cat /etc/os-release zeigt Angaben zur Distribution.' },
  { id: 'listing', task: 'Liste Dateien und Ordner im aktuellen Verzeichnis auf.', command: 'ls', hint: 'Der kurze Befehl steht für eine Verzeichnisliste.', explanation: 'ls listet Dateien und Ordner auf.' },
  { id: 'exit', task: 'Beende die simulierte Terminalsitzung.', command: 'exit', hint: 'Der Befehlsname bedeutet „verlassen“.', explanation: 'exit beendet eine Terminalsitzung. Hier endet nur die simulierte Aufgabe.' },
]
