import type { LinuxLabSession } from '../../lib/linuxTerminal'

export interface LinuxScenario {
  id: string; title: string; symptom: string; briefing: string; difficulty: 'Mittel' | 'Fortgeschritten'
  objectives: string[]; hints: string[]; suggestedInvestigation: string[]; successMessage: string
  prepare: (session: LinuxLabSession) => LinuxLabSession
  isComplete: (session: LinuxLabSession) => boolean
}
const copy = (session: LinuxLabSession) => structuredClone(session)
export const linuxScenarios: LinuxScenario[] = [
  { id:'webserver-down', title:'Webserver ausgefallen', symptom:'Die lokale Website ist nicht erreichbar.', briefing:'Untersuche den nginx-Dienst und stelle die Website wieder bereit.', difficulty:'Mittel', objectives:['Dienststatus prüfen','nginx starten','Erreichbarkeit verifizieren'], hints:['Beginne mit dem Dienststatus.','systemctl verwaltet Dienste.','Nutze systemctl status nginx und systemctl start nginx.'], suggestedInvestigation:['systemctl status nginx','journalctl -u nginx','curl http://localhost'], successMessage:'nginx läuft wieder und die Website kann ausgeliefert werden.', prepare:s=>{const n=copy(s);n.services.nginx='stopped';return n}, isComplete:s=>s.services.nginx==='running' },
  { id:'access-denied', title:'Zugriff verweigert', symptom:'student kann report.txt nicht zuverlässig lesen.', briefing:'Prüfe Eigentümer und Rechte von ~/shared/report.txt und korrigiere die Ursache.', difficulty:'Fortgeschritten', objectives:['Metadaten prüfen','Eigentümer korrigieren','Minimal nötige Rechte setzen'], hints:['Prüfe stat oder ls -l.','Eigentümer und Modus sind getrennte Eigenschaften.','student:shared und 640 lösen das Problem.'], suggestedInvestigation:['stat ~/shared/report.txt','ls -l ~/shared'], successMessage:'Eigentümer, Gruppe und Rechte erlauben kontrollierten Zugriff.', prepare:s=>{const n=copy(s);n.nodes['/home/student/shared/report.txt'].owner='root';n.nodes['/home/student/shared/report.txt'].mode='600';return n}, isComplete:s=>s.nodes['/home/student/shared/report.txt']?.owner==='student'&&s.nodes['/home/student/shared/report.txt']?.mode==='640' },
  { id:'log-error', title:'Fehler in Logs', symptom:'Ein geplanter Backup-Lauf meldet einen Fehler.', briefing:'Finde die relevante ERROR-Zeile in /var/log/syslog.', difficulty:'Mittel', objectives:['Logdatei lokalisieren','Fehlerzeile filtern'], hints:['Die Meldung steht in syslog.','grep filtert Textzeilen.','grep ERROR /var/log/syslog'], suggestedInvestigation:['ls /var/log','grep ERROR /var/log/syslog'], successMessage:'Du hast die relevante Fehlermeldung im Systemlog gefunden.', prepare:copy, isComplete:s=>s.commandHistory.some(x=>x.includes('grep ERROR /var/log/syslog')) },
  { id:'network-diagnosis', title:'Netzwerkdiagnose', symptom:'Ein Ziel scheint nicht erreichbar zu sein.', briefing:'Prüfe lokale IPv4-Adresse, Standardroute und Verbindung zum Gateway.', difficulty:'Fortgeschritten', objectives:['Adresse prüfen','Route prüfen','Gateway anpingen'], hints:['Beginne lokal, dann prüfe den Weg.','ip kennt addr und route.','Nutze ip addr, ip route und ping 192.168.56.1.'], suggestedInvestigation:['ip addr','ip route','ping 192.168.56.1'], successMessage:'Adresse, Route und grundlegende Erreichbarkeit wurden systematisch geprüft.', prepare:copy, isComplete:s=>['ip addr','ip route'].every(c=>s.commandHistory.includes(c))&&s.commandHistory.some(x=>x.startsWith('ping ')) },
  { id:'git-changes', title:'Git-Änderungen sichern', symptom:'Im Projekt liegen noch nicht gespeicherte Änderungen.', briefing:'Prüfe den Zustand, merke Änderungen vor und erstelle einen Commit.', difficulty:'Fortgeschritten', objectives:['Status prüfen','Änderungen stagen','Commit erstellen'], hints:['Arbeite in der Reihenfolge prüfen, auswählen, speichern.','Nutze status, add und commit.','git status; git add .; git commit -m "Save work"'], suggestedInvestigation:['git status','git diff'], successMessage:'Die Änderungen sind als nachvollziehbarer Commit gesichert.', prepare:s=>{const n=copy(s);n.cwd='/home/student/projects';n.git.initialized=true;n.git.modified=['notes.txt'];n.nodes['/home/student/projects/notes.txt']={type:'file',content:'Neue Notiz',mode:'644',owner:'student',group:'student'};return n}, isComplete:s=>s.git.commits.length>0 },
]

export interface CommandReference { command:string; category:string; purpose:string; syntax:string; example:string; guided:boolean }
export const commandReference: CommandReference[] = [
  {command:'pwd',category:'Navigation',purpose:'Aktuelles Arbeitsverzeichnis anzeigen',syntax:'pwd',example:'pwd',guided:true},
  {command:'ls',category:'Navigation',purpose:'Verzeichnisinhalt anzeigen',syntax:'ls [OPTION] [PFAD]',example:'ls -la /etc',guided:true},
  {command:'cd',category:'Navigation',purpose:'Arbeitsverzeichnis wechseln',syntax:'cd PFAD',example:'cd ~/projects',guided:true},
  {command:'mkdir',category:'Dateien',purpose:'Verzeichnis erstellen',syntax:'mkdir [-p] PFAD',example:'mkdir ~/projects/linux',guided:true},
  {command:'touch',category:'Dateien',purpose:'Leere Datei anlegen',syntax:'touch DATEI',example:'touch notes.txt',guided:true},
  {command:'cp',category:'Dateien',purpose:'Dateien oder Verzeichnisse kopieren',syntax:'cp QUELLE ZIEL',example:'cp notes.txt notes.bak',guided:true},
  {command:'mv',category:'Dateien',purpose:'Verschieben oder umbenennen',syntax:'mv QUELLE ZIEL',example:'mv alt.txt neu.txt',guided:true},
  {command:'rm',category:'Dateien',purpose:'Datei entfernen',syntax:'rm DATEI',example:'rm notes.bak',guided:true},
  {command:'cat',category:'Dateien',purpose:'Datei vollständig ausgeben',syntax:'cat DATEI',example:'cat /etc/os-release',guided:true},
  {command:'grep',category:'Text',purpose:'Passende Textzeilen suchen',syntax:'grep MUSTER DATEI',example:'grep ERROR /var/log/syslog',guided:true},
  {command:'find',category:'Text',purpose:'Dateien im Baum suchen',syntax:'find PFAD -name MUSTER',example:'find ~ -name "*.log"',guided:true},
  {command:'chmod',category:'Rechte',purpose:'Dateirechte ändern',syntax:'chmod MODUS DATEI',example:'chmod 640 report.txt',guided:true},
  {command:'chown',category:'Rechte',purpose:'Besitzer und Gruppe ändern',syntax:'chown BENUTZER:GRUPPE DATEI',example:'sudo chown student:shared report.txt',guided:true},
  {command:'id',category:'Benutzer',purpose:'UID und Gruppen anzeigen',syntax:'id [BENUTZER]',example:'id student',guided:true},
  {command:'ps',category:'Prozesse',purpose:'Prozessliste anzeigen',syntax:'ps',example:'ps',guided:false},
  {command:'systemctl',category:'Dienste',purpose:'Dienststatus verwalten',syntax:'systemctl AKTION DIENST',example:'systemctl status nginx',guided:false},
  {command:'ip',category:'Netzwerk',purpose:'Adressen und Routen anzeigen',syntax:'ip addr | ip route',example:'ip addr',guided:false},
  {command:'ping',category:'Netzwerk',purpose:'Erreichbarkeit prüfen',syntax:'ping ZIEL',example:'ping 192.168.56.1',guided:false},
  {command:'git',category:'Git',purpose:'Versionsstand verwalten',syntax:'git UNTERBEFEHL',example:'git status',guided:true},
]

