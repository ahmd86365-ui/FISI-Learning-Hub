import type { LinuxLabSession } from '../../lib/linuxTerminal'

export type ChallengeDifficulty = 'Grundlagen' | 'Mittel' | 'Fortgeschritten'
export interface LinuxLabChallenge {
  id: string; title: string; description: string; goal: string; hint: string
  difficulty: ChallengeDifficulty; lessonSlug: string; suggestedCommands: string[]
  isComplete: (session: LinuxLabSession, lastOutput: string) => boolean
}

const hasRun = (session: LinuxLabSession, command: string) => session.commandHistory.some((entry) => entry === command || entry.startsWith(command + ' '))

export const terminalExercises: LinuxLabChallenge[] = [
  {
    id: 'orientation', title: 'Im System orientieren', difficulty: 'Grundlagen', lessonSlug: 'was-ist-linux',
    description: 'Finde heraus, als welcher Benutzer du arbeitest und in welchem Verzeichnis du dich befindest.',
    goal: 'Führe whoami und pwd aus.', hint: 'Beide Befehle verändern das System nicht.', suggestedCommands: ['whoami', 'pwd'],
    isComplete: (session) => hasRun(session, 'whoami') && hasRun(session, 'pwd'),
  },
  {
    id: 'navigate', title: 'Verzeichnis wechseln', difficulty: 'Grundlagen', lessonSlug: 'terminal-und-erste-befehle',
    description: 'Wechsle in den vorhandenen Ordner Dokumente.', goal: 'Das aktuelle Verzeichnis endet mit /Dokumente.',
    hint: 'Nutze cd gefolgt vom Ordnernamen.', suggestedCommands: ['ls', 'cd Dokumente'],
    isComplete: (session) => session.cwd === '/home/student/Dokumente',
  },
  {
    id: 'create-directory', title: 'Projektordner erstellen', difficulty: 'Grundlagen', lessonSlug: 'terminal-und-erste-befehle',
    description: 'Lege im Ordner Dokumente einen neuen Ordner namens linux-lab an.', goal: 'Der Pfad /home/student/Dokumente/linux-lab existiert.',
    hint: 'mkdir erstellt einen neuen Ordner.', suggestedCommands: ['mkdir linux-lab', 'ls -la'],
    isComplete: (session) => session.nodes['/home/student/Dokumente/linux-lab']?.type === 'dir',
  },
  {
    id: 'create-file', title: 'Datei anlegen', difficulty: 'Grundlagen', lessonSlug: 'terminal-und-erste-befehle',
    description: 'Erstelle im Ordner linux-lab eine leere Datei namens notizen.txt.', goal: 'notizen.txt befindet sich im Projektordner.',
    hint: 'Wechsle zuerst mit cd in linux-lab und nutze dann touch.', suggestedCommands: ['cd linux-lab', 'touch notizen.txt'],
    isComplete: (session) => session.nodes['/home/student/Dokumente/linux-lab/notizen.txt']?.type === 'file',
  },
  {
    id: 'write-read', title: 'Datei schreiben und lesen', difficulty: 'Mittel', lessonSlug: 'terminal-und-erste-befehle',
    description: 'Schreibe den Text Linux macht Spaß in notizen.txt und gib den Inhalt anschließend aus.', goal: 'Die Datei enthält den Text und wurde mit cat gelesen.',
    hint: 'Nutze echo "Linux macht Spaß" > notizen.txt und danach cat.', suggestedCommands: ['echo "Linux macht Spaß" > notizen.txt', 'cat notizen.txt'],
    isComplete: (session) => session.nodes['/home/student/Dokumente/linux-lab/notizen.txt']?.content === 'Linux macht Spaß' && hasRun(session, 'cat'),
  },
  {
    id: 'rename', title: 'Datei umbenennen', difficulty: 'Mittel', lessonSlug: 'terminal-und-erste-befehle',
    description: 'Benenne notizen.txt in lernnotizen.txt um.', goal: 'lernnotizen.txt existiert, notizen.txt nicht mehr.',
    hint: 'mv kann Dateien verschieben und umbenennen.', suggestedCommands: ['mv notizen.txt lernnotizen.txt'],
    isComplete: (session) => Boolean(session.nodes['/home/student/Dokumente/linux-lab/lernnotizen.txt']) && !session.nodes['/home/student/Dokumente/linux-lab/notizen.txt'],
  },
  {
    id: 'permissions', title: 'Dateirechte ändern', difficulty: 'Mittel', lessonSlug: 'dateirechte-und-sudo',
    description: 'Setze für /home/student/scripts/backup.sh die Rechte auf 750.', goal: 'Die Datei besitzt den Oktalmodus 750.',
    hint: 'chmod erwartet zuerst den Modus und dann den Pfad.', suggestedCommands: ['chmod 750 ~/scripts/backup.sh', 'ls -la ~/scripts'],
    isComplete: (session) => session.nodes['/home/student/scripts/backup.sh']?.mode === '750',
  },
  {
    id: 'search', title: 'Dateien finden', difficulty: 'Mittel', lessonSlug: 'das-dateisystem',
    description: 'Suche ab deinem Home-Verzeichnis nach allen Dateien mit der Endung .log.', goal: 'find gibt system.log aus.',
    hint: 'Nutze find ~ -name "*.log".', suggestedCommands: ['find ~ -name "*.log"'],
    isComplete: (session, output) => hasRun(session, 'find') && output.includes('/home/student/logs/system.log'),
  },
  {
    id: 'filter', title: 'Logdatei filtern', difficulty: 'Fortgeschritten', lessonSlug: 'das-dateisystem',
    description: 'Zeige nur die Warnung aus der Datei ~/logs/system.log an.', goal: 'grep gibt die Zeile mit WARN aus.',
    hint: 'grep sucht einen Begriff in einer Datei.', suggestedCommands: ['grep WARN ~/logs/system.log'],
    isComplete: (session, output) => hasRun(session, 'grep') && output.includes('WARN Speicher fast voll'),
  },
  {
    id: 'git-basics', title: 'Git-Repository starten', difficulty: 'Fortgeschritten', lessonSlug: 'git-und-github',
    description: 'Initialisiere im aktuellen Ordner ein Git-Repository.', goal: 'Das simulierte Repository ist initialisiert.',
    hint: 'Der erste Git-Befehl in einem neuen Projekt endet mit init.', suggestedCommands: ['git init', 'git status'],
    isComplete: (session) => session.git.initialized,
  },
]

export const quickHelp = [
  ['Navigation', 'pwd · ls · ls -la · cd'], ['Dateien', 'mkdir · touch · cp · mv · rm · cat · echo'],
  ['Suche & Rechte', 'grep · find · chmod · sudo'], ['System', 'whoami · uname · clear · history'],
  ['Editoren', 'nano · vim (vereinfacht)'], ['Git', 'git init · status · add · commit · log · branch'],
] as const
