import { labs as guidedLabs } from '../lib/labs'

export type LabCategory = 'Linux' | 'Netzwerktechnik'
export type LabType = 'Lab' | 'Trainer' | 'Praxis-Lab'
export type LabIcon = 'terminal' | 'calendar' | 'network' | 'route' | 'layers' | 'stethoscope'
export interface LabRegistryEntry { id:string; title:string; description:string; category:LabCategory; type:LabType; route:string; subject:string; icon:LabIcon; capabilities:string[]; actionLabel:'Lab starten'|'Trainer öffnen'|'Praxis starten' }

const guidedDescriptions: Record<string, Pick<LabRegistryEntry, 'description'|'icon'>> = {
  'workstation-ipv4': { description:'IPv4-Netzgrenzen, Broadcast, Gateway und lokale Ziele in einem Diagnosefall prüfen.', icon:'stethoscope' },
  'routing-next-hop': { description:'Spezifische Routen, Default Route und Next Hop an einer Routingtabelle anwenden.', icon:'route' },
  'osi-diagnosis': { description:'IP-Adresse, TCP-Port und MAC-Adresse im Weg einer SMTP-Nachricht einordnen.', icon:'layers' },
  'linux-orientation': { description:'Eine simulierte Linux-VM mit grundlegenden Terminalbefehlen kennenlernen.', icon:'terminal' },
}

export const labRegistry: LabRegistryEntry[] = [
  { id:'linux-lab', title:'Linux Lab', category:'Linux', type:'Lab', route:'/it/linux/lab', subject:'Linux', icon:'terminal', description:'Linux-Befehle sicher in einer simulierten Umgebung anwenden und Fehlerfälle lösen.', capabilities:['Guided Lab','Freies Terminal','Szenarien'], actionLabel:'Lab starten' },
  { id:'linux-tag-2', title:'Linux Tag 2', category:'Linux', type:'Trainer', route:'/practice/linux-tag-2', subject:'Linux', icon:'calendar', description:'Die vorhandenen Übungen zu Terminalgrundlagen und ersten Befehlen bearbeiten.', capabilities:['Geführte Aufgaben','Terminalpraxis'], actionLabel:'Trainer öffnen' },
  { id:'linux-tag-3', title:'Linux Tag 3', category:'Linux', type:'Trainer', route:'/practice/linux-tag-3', subject:'Linux', icon:'calendar', description:'Die vorhandenen Übungen zum Linux-Dateisystem praktisch vertiefen.', capabilities:['Geführte Aufgaben','Dateisystem'], actionLabel:'Trainer öffnen' },
  { id:'subnetting-trainer', title:'Subnetting Trainer', category:'Netzwerktechnik', type:'Trainer', route:'/practice/subnetting', subject:'IPv4 und Subnetting', icon:'network', description:'IPv4-Netze, Präfixe, Netz- und Broadcast-Adressen mit generierten Aufgaben trainieren.', capabilities:['IPv4','CIDR','Subnetting'], actionLabel:'Trainer öffnen' },
  ...guidedLabs.map((lab): LabRegistryEntry => ({ id:`praxis-${lab.id}`, title:lab.title, description:guidedDescriptions[lab.id].description, category:lab.subject === 'Linux' ? 'Linux' : 'Netzwerktechnik', type:'Praxis-Lab', route:`/practice/labs/${lab.id}`, subject:lab.subject, icon:guidedDescriptions[lab.id].icon, capabilities:lab.concepts, actionLabel:'Praxis starten' })),
]

export interface LessonLabMapping { labId:string; reason:string; deepLink?:{ challenge?:string; scenario?:string; mode?:'guided'|'free'|'scenarios' } }
export const lessonLabMap: Record<string, LessonLabMapping[]> = {
  'topic-linux-01-was-ist-linux': [
    { labId:'praxis-linux-orientation', reason:'Grundlegende Systeminformationen in einer simulierten Linux-VM ermitteln.' },
    { labId:'linux-lab', reason:'Benutzer und Arbeitsverzeichnis direkt im Terminal prüfen.', deepLink:{ challenge:'where-am-i' } },
  ],
  'topic-linux-02-terminal-und-erste-befehle': [
    { labId:'linux-lab', reason:'Navigation und erste Befehle in der simulierten Shell anwenden.', deepLink:{ challenge:'list-home' } },
    { labId:'linux-tag-2', reason:'Die Übungen des zweiten Linux-Tags vollständig bearbeiten.' },
  ],
  'topic-linux-03-das-dateisystem': [
    { labId:'linux-lab', reason:'Dateien und Logpfade mit einem passenden Suchauftrag erkunden.', deepLink:{ challenge:'find-logs' } },
    { labId:'linux-tag-3', reason:'Die Übungen des dritten Linux-Tags zum Dateisystem bearbeiten.' },
  ],
  'topic-linux-04-erste-skripte': [{ labId:'linux-lab', reason:'Ein vorhandenes Skript mit passenden Rechten ausführbar machen.', deepLink:{ challenge:'script-permission' } }],
  'topic-linux-05-wiederholung-woche-1': [{ labId:'linux-lab', reason:'Navigation, Dateierstellung und Rechte in einer Aufgabe verbinden.', deepLink:{ challenge:'week-review' } }],
  'topic-linux-06-git-und-github': [{ labId:'linux-lab', reason:'Ein Repository initialisieren und den Git-Arbeitsablauf praktisch starten.', deepLink:{ challenge:'git-init' } }],
  'topic-linux-07-benutzer-und-gruppen': [{ labId:'linux-lab', reason:'UID und Gruppenmitgliedschaften des aktuellen Benutzers untersuchen.', deepLink:{ challenge:'inspect-user' } }],
  'topic-linux-08-dateirechte-und-sudo': [{ labId:'linux-lab', reason:'Dateirechte anhand eines konkreten Zugriffsfalls korrigieren.', deepLink:{ challenge:'report-permission' } }],
  'topic-linux-10-wiederholung-woche-2-support': [
    { labId:'linux-lab', reason:'Einen Supportfall mit fehlerhaften Eigentümern und Dateirechten diagnostizieren.', deepLink:{ scenario:'access-denied', mode:'scenarios' } },
  ],
  'topic-netz-neu-osi-tcp-ip': [{ labId:'praxis-osi-diagnosis', reason:'Adressinformationen entlang eines realistischen Mailwegs einordnen.' }],
  'topic-netz-neu-ipv4-adressen': [{ labId:'praxis-workstation-ipv4', reason:'Eine IPv4-Konfiguration in einem Diagnosefall beurteilen.' }],
  'topic-netz-neu-cidr-netzgrenzen': [
    { labId:'subnetting-trainer', reason:'Netzgrenzen und Präfixe mit wechselnden Aufgaben berechnen.' },
    { labId:'praxis-workstation-ipv4', reason:'CIDR-Netzgrenzen in einem Arbeitsplatzfall anwenden.' },
  ],
  'topic-netz-neu-subnetting': [
    { labId:'subnetting-trainer', reason:'Subnetting mit generierten IPv4-Aufgaben festigen.' },
    { labId:'praxis-workstation-ipv4', reason:'Subnetz, Broadcast und Gateway gemeinsam diagnostizieren.' },
  ],
  'topic-netz-neu-statisches-routing': [{ labId:'praxis-routing-next-hop', reason:'Next Hop und Default Route an einer Routingtabelle auswählen.' }],
}

export const getLabById = (id:string) => labRegistry.find((lab) => lab.id === id)
export const getLessonLabs = (lessonId:string) => (lessonLabMap[lessonId] ?? []).map((mapping) => ({ mapping, lab:getLabById(mapping.labId)! }))
export function labHref(lab:LabRegistryEntry, mapping?:LessonLabMapping, sourceLesson?:string) { const params=new URLSearchParams(); if(mapping?.deepLink?.mode)params.set('mode',mapping.deepLink.mode); if(mapping?.deepLink?.challenge)params.set('challenge',mapping.deepLink.challenge); if(mapping?.deepLink?.scenario)params.set('scenario',mapping.deepLink.scenario); if(sourceLesson)params.set('source',sourceLesson); const query=params.toString(); return `${lab.route}${query?`?${query}`:''}` }
