import type { ContentBlock, Exercise, Topic } from '../../types/content'

const slug = 'dateirechte-und-sudo'
const h = (text: string): ContentBlock => ({ type: 'heading', level: 2, text })
const p = (text: string): ContentBlock => ({ type: 'paragraph', text })
const code = (value: string): ContentBlock => ({ type: 'code', language: 'bash', code: value })
const table = (headers: string[], rows: string[][]): ContentBlock => ({ type: 'table', headers, rows })
const choice = (n: number, question: string, options: string[], answer: number, explanation: string): Exercise => ({
  id: `linux-08-quiz-${n}`, topicSlug: slug, type: 'single-choice', difficulty: 'medium', question,
  options: options.map((text, index) => ({ id: String(index), text })), correctAnswer: String(answer), explanation,
})

export const linuxPermissionsTopic: Topic = {
  id: 'topic-linux-08-dateirechte-und-sudo', slug, moduleSlug: 'linux', title: 'Dateirechte und sudo', order: 8,
  shortIntro: 'rwx-Rechte lesen, chmod symbolisch und numerisch einsetzen, Besitzer ändern und Permission denied systematisch erklären.',
  content: [
    h('Eine Zeile von ls -l lesen'),
    code('ls -l /etc/shadow\n# -rw-r----- 1 root shadow 1420 Sep 29 14:40 /etc/shadow\nls -ld ~'),
    p('Das erste Zeichen bezeichnet die Art: - steht für eine Datei, d für ein Verzeichnis. Danach folgen je drei Rechte für Besitzer, Gruppe und alle anderen. Am Ende der Zeile stehen unter anderem Besitzer und Dateigruppe.'),
    table(['Recht', 'Bei einer Datei', 'Bei einem Verzeichnis'], [
      ['r (read)', 'Inhalt lesen', 'Namen mit ls anzeigen'],
      ['w (write)', 'Inhalt ändern', 'Einträge anlegen und löschen'],
      ['x (execute)', 'als Programm starten', 'mit cd hineingehen'],
    ]),
    { type: 'note', text: 'Linux prüft genau einen Rechteblock: zuerst den Besitzer, sonst die Dateigruppe, sonst alle anderen. Die Blöcke werden nicht miteinander addiert.' },
    h('chmod mit Buchstaben'),
    table(['Zeichen', 'Bedeutung'], [
      ['u', 'Besitzer (user)'], ['g', 'Gruppe'], ['o', 'alle anderen (others)'], ['a', 'alle drei'],
      ['+', 'Recht hinzufügen'], ['-', 'Recht entfernen'],
    ]),
    code('chmod g-w plan.txt\nchmod o-r plan.txt\nchmod u+x test.sh\nls -l plan.txt test.sh'),
    h('chmod mit Zahlen'),
    p('r hat den Wert 4, w den Wert 2 und x den Wert 1. Pro Block werden die Werte addiert. Drei Blöcke ergeben drei Ziffern für Besitzer, Gruppe und andere.'),
    table(['Modus', 'Rechte', 'Typischer Zweck'], [
      ['644', 'rw-r--r--', 'öffentlich lesbare Datei'],
      ['600', 'rw-------', 'private Datei'],
      ['755', 'rwxr-xr-x', 'allgemein nutzbares Skript oder Verzeichnis'],
      ['700', 'rwx------', 'privates Skript oder Verzeichnis'],
      ['770', 'rwxrwx---', 'gemeinsames Gruppenverzeichnis'],
    ]),
    code('chmod 600 geheim.txt\nchmod 644 oeffentlich.txt\nchmod 755 start.sh\nls -l geheim.txt oeffentlich.txt start.sh'),
    { type: 'warning', text: 'chmod 777 gibt jedem alle Rechte und ist fast nie die richtige Lösung. Ermittle stattdessen, welchem Benutzerblock welches einzelne Recht fehlt.' },
    h('Besitzer und Gruppe mit chown ändern'),
    code('sudo chown javier datei.txt\nsudo chown carlos:verkauf bericht.txt\nsudo chown :verkauf plan.txt'),
    p('Vor dem Doppelpunkt steht der neue Besitzer, dahinter die neue Gruppe. Den Besitzer darf nur root ändern; deshalb wird chown in der Regel mit sudo ausgeführt.'),
    h('Ein geschütztes Gruppenverzeichnis'),
    code('sudo mkdir /srv/verkauf\nsudo chown $USER:verkauf /srv/verkauf\nsudo chmod 770 /srv/verkauf\nls -ld /srv/verkauf'),
    p('Mit 770 dürfen Besitzer und Gruppe lesen, schreiben und das Verzeichnis betreten. Andere erhalten keine Rechte. Nach einer neuen Gruppenmitgliedschaft muss sich der Benutzer neu anmelden.'),
    h('Permission denied untersuchen'),
    p('Die Meldung bedeutet, dass im für dich geltenden Block ein benötigtes Recht fehlt. Drei Fragen führen zum Grund:'),
    { type: 'list', style: 'numbered', items: ['Wer bin ich? Prüfe whoami und id.', 'Wem gehört die Datei oder das Verzeichnis? Prüfe ls -l beziehungsweise ls -ld.', 'Welcher Block gilt für mich und fehlt dort r, w oder x?'] },
    code('whoami\nid\nls -ld /srv/verkauf'),
    h('Besondere Verzeichnisrechte'),
    p('Das Setgid-Bit an einem Verzeichnis sorgt dafür, dass neue Dateien dessen Gruppe erben. Das Sticky Bit erlaubt in einem gemeinsam beschreibbaren Verzeichnis nur dem jeweiligen Eigentümer, seine Dateien zu löschen.'),
    code('sudo chmod g+s /srv/verkauf\nls -ld /srv/verkauf\nls -ld /tmp\nsudo chmod +t /srv/austausch'),
    { type: 'key-points', items: ['Die neun Rechte gelten getrennt für Besitzer, Gruppe und andere.', 'Bei Verzeichnissen bedeutet x: hineingehen.', 'chmod kann einzelne Rechte symbolisch ändern oder alle Rechte numerisch setzen.', 'chown ändert Besitzer und Dateigruppe.', 'Permission denied wird mit Identität, Eigentümer und geltendem Rechteblock untersucht.'] },
  ],
  exercises: [
    choice(1, 'Welche Zahl entspricht rwxr-xr-x?', ['744', '755', '775', '655'], 1, 'rwx ist 7; r-x ist jeweils 5. Daraus wird 755.'),
    choice(2, 'Was bewirkt chmod o-r tagebuch.txt?', ['Der Besitzer darf nicht mehr lesen.', 'Die Gruppe darf nicht mehr lesen.', 'Alle anderen verlieren das Leserecht.', 'Niemand darf mehr lesen.'], 2, 'o steht für others, also alle anderen.'),
    choice(3, 'Welche Rechte braucht ein Verzeichnis typischerweise, damit du Namen sehen und hineingehen kannst?', ['nur r', 'nur w', 'r und x', 'w und x'], 2, 'r erlaubt das Auflisten der Namen; x erlaubt das Betreten.'),
    choice(4, 'Welcher Befehl setzt carlos als Besitzer und verkauf als Gruppe?', ['sudo chmod carlos:verkauf bericht.txt', 'sudo chown verkauf:carlos bericht.txt', 'sudo chown carlos:verkauf bericht.txt', 'sudo chown carlos verkauf bericht.txt'], 2, 'chown verwendet die Form Besitzer:Gruppe Datei.'),
    choice(5, 'Warum wirkt eine neue Gruppenmitgliedschaft bei einem bereits angemeldeten Benutzer oft noch nicht?', ['chmod fehlt.', 'Gruppen werden bei der Anmeldung eingelesen.', 'Die Gruppe braucht 777.', 'Der Benutzer muss root werden.'], 1, 'Nach Ab- und erneuter Anmeldung enthält die Sitzung die neue Gruppenmitgliedschaft.'),
  ],
}
