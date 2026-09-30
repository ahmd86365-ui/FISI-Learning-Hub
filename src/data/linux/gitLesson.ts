import type { ContentBlock, Exercise, Topic } from '../../types/content'

const slug = 'git-und-github'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const choice = (n: number, question: string, options: string[], answer: number, explanation: string): Exercise => ({
  id: `linux-06-quiz-${n}`, topicSlug: slug, type: 'single-choice', difficulty: 'medium', question,
  options: options.map((text, index) => ({ id: String(index), text })), correctAnswer: String(answer), explanation,
})

export const linuxGitTopic: Topic = {
  id: 'topic-linux-06-git-und-github', slug, moduleSlug: 'linux', title: 'Git und GitHub', order: 6,
  shortIntro: 'Versionen lokal mit Git sichern, Branches zusammenführen und ein Repository sicher über SSH mit GitHub verbinden.',
  content: [
    h('Warum Versionsverwaltung?'),
    p('Kopien wie backup_alt.sh und backup_final2.sh werden schnell unübersichtlich. Git speichert stattdessen nachvollziehbare Stände einer Datei als Commits. Jeder Commit enthält die Änderung, den Zeitpunkt, den Autor und eine kurze Nachricht.'),
    { type: 'note', text: 'Git ist das lokale Versionsverwaltungsprogramm. GitHub ist ein Internetdienst, auf dem Git-Repositories gespeichert und gemeinsam bearbeitet werden können.' },
    h('Git installieren und einmalig einrichten'),
    code('sudo apt update\nsudo apt install git\ngit --version\ngit config --global user.name "Carlos Ruiz"\ngit config --global user.email "carlos@example.com"\ngit config --global init.defaultBranch main\ngit config --list'),
    p('Name und E-Mail werden in jeden Commit geschrieben. Die Einstellung init.defaultBranch sorgt dafür, dass neue Repositories mit dem Branch main beginnen.'),
    h('Vom Ordner zum Repository'),
    code('cd ~/linux-kurs\ngit init\nls -a\ngit status\ngit add .\ngit commit -m "Add work from week 1"\ngit log --oneline'),
    table(['Befehl', 'Aufgabe'], [
      ['git init', 'legt das versteckte Verzeichnis .git an'],
      ['git status', 'zeigt unversionierte, geänderte und vorgemerkte Dateien'],
      ['git add', 'legt Änderungen in den Staging-Bereich'],
      ['git commit -m', 'speichert den vorgemerkten Stand als Commit'],
      ['git log --oneline', 'zeigt den Verlauf kompakt'],
      ['git diff', 'zeigt noch nicht vorgemerkte Änderungen'],
      ['git restore datei', 'verwirft lokale Änderungen seit dem letzten Commit'],
    ]),
    { type: 'warning', text: 'git restore verwirft nicht gespeicherte Änderungen. Prüfe vorher mit git diff, ob du sie wirklich nicht mehr brauchst.' },
    h('Alte Stände und Branches'),
    p('HEAD zeigt auf den Stand, an dem du gerade arbeitest. Mit einem Branch kannst du Änderungen getrennt von main ausprobieren und später zusammenführen.'),
    code('git log --oneline --all\ngit switch --detach adfc1ed\ngit switch main\ngit restore --source=adfc1ed hallo.sh\ngit add hallo.sh\ngit commit -m "Remove goodbye message"'),
    code('git switch -c wochentag\n# Datei bearbeiten, dann committen\ngit add hallo.sh\ngit commit -m "Add weekday"\ngit switch main\ngit merge wochentag\ngit branch -d wochentag'),
    p('Ein detached HEAD eignet sich zum Ansehen eines alten Commits. Neue Arbeit gehört in einen Branch. Vor einem Branchwechsel solltest du offene Änderungen committen.'),
    h('GitHub und SSH'),
    p('Ein SSH-Schlüsselpaar besteht aus einem privaten und einem öffentlichen Schlüssel. Nur die Datei mit der Endung .pub wird bei GitHub hinterlegt. Der private Schlüssel bleibt auf deinem Rechner.'),
    code('ssh-keygen -t ed25519 -C "carlos@example.com"\ncat ~/.ssh/id_ed25519.pub\nssh -T git@github.com'),
    { type: 'warning', text: 'Veröffentliche niemals ~/.ssh/id_ed25519. Nur ~/.ssh/id_ed25519.pub darf weitergegeben werden. Passwörter und andere Geheimnisse gehören ebenfalls nie in ein Repository.' },
    code('git remote add origin git@github.com:carlos-ruiz/linux-kurs.git\ngit remote -v\ngit push -u origin main\ngit pull\ngit clone git@github.com:carlos-ruiz/linux-kurs.git'),
    table(['Befehl', 'Richtung'], [
      ['git push', 'lokale Commits zu GitHub hochladen'],
      ['git pull', 'neue Commits aus dem entfernten Repository holen'],
      ['git clone', 'ein Repository mit Verlauf auf einen neuen Rechner kopieren'],
    ]),
    h('Dateien bewusst ausschließen'),
    p('In .gitignore steht pro Zeile ein Muster. Der Eintrag *.log verhindert zum Beispiel, dass Logdateien durch git add . vorgemerkt werden.'),
    code('echo "*.log" >> .gitignore\ngit add .gitignore\ngit commit -m "Ignore log files"'),
    { type: 'key-points', items: ['Git speichert lokale Versionen als Commits; GitHub hostet Repositories.', 'Der Grundablauf lautet status, add, commit und bei Bedarf push.', 'Branches schützen main während eines Versuchs.', 'Nur der öffentliche SSH-Schlüssel mit .pub gehört zu GitHub.', 'Geheimnisse müssen aus dem Repository und seinem Verlauf fernbleiben.'] },
  ],
  exercises: [
    choice(1, 'In welcher Reihenfolge speicherst du eine Änderung als neue Version?', ['git commit, dann git add', 'git add, dann git commit', 'git push, dann git init', 'nur git status'], 1, 'git add wählt Änderungen für den nächsten Commit aus; git commit speichert sie.'),
    choice(2, 'Welche Datei darfst du bei GitHub als SSH-Schlüssel hinterlegen?', ['~/.ssh/id_ed25519', '~/.ssh/id_ed25519.pub', '~/.ssh/known_hosts', '~/.gitconfig'], 1, 'Die Datei mit .pub enthält den öffentlichen Schlüssel. Der private Schlüssel bleibt geheim.'),
    choice(3, 'Welcher Befehl holt ein Repository erstmals auf einen neuen Rechner?', ['git pull', 'git clone', 'git restore', 'git merge'], 1, 'git clone legt den Projektordner an und holt Dateien sowie Verlauf.'),
    choice(4, 'Was macht git switch -c wochentag?', ['Es löscht main.', 'Es erstellt einen Commit.', 'Es erstellt den Branch wochentag und wechselt dorthin.', 'Es lädt zu GitHub hoch.'], 2, '-c steht für create: Der neue Branch wird angelegt und ausgecheckt.'),
  ],
}
