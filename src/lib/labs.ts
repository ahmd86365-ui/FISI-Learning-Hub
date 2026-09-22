import { calculateSubnet, answerMatches, parseIPv4, formatIPv4 } from './subnetting'
import { evaluateCommand, simulatedCommands, virtualLinux, type SimulatedCommand } from './linuxTerminal'

export type LabStep = {
  id: string
  prompt: string
  hint: string
  explanation: string
  answer: { type: 'ipv4' | 'text' | 'number' | 'command'; expected: string | number } | { type: 'choice'; expected: string; options: { id: string; label: string }[] }
}
export type Lab = {
  id: string
  title: string
  subject: string
  difficulty: 'Leicht' | 'Mittel'
  scenario: string
  concepts: string[]
  lessonPaths: string[]
  steps: LabStep[]
}

const workstation = calculateSubnet({ address: '192.168.40.78', prefix: 27 })
const networkLesson = (slug: string) => `/it/netzwerktechnik/${slug}`
const choice = (id: string, prompt: string, expected: string, options: { id: string; label: string }[], hint: string, explanation: string): LabStep => ({ id, prompt, hint, explanation, answer: { type: 'choice', expected, options } })

export const labs: Lab[] = [
  {
    id: 'workstation-ipv4', title: 'Arbeitsplatz im falschen Netz?', subject: 'Netzwerktechnik', difficulty: 'Mittel',
    scenario: 'Ein Arbeitsplatz hat 192.168.40.78/27. Als Gateway ist 192.168.40.94 eingetragen. Ein Dateiserver hat 192.168.40.110. Prüfe die Adressen, bevor du die Verbindung beurteilst.',
    concepts: ['Netzadresse', 'Broadcast', 'lokales und entferntes Ziel', 'Gateway im Subnetz'],
    lessonPaths: [networkLesson('cidr-netzgrenzen'), networkLesson('subnetting')],
    steps: [
      { id: 'network', prompt: 'Wie lautet die Netzadresse des Arbeitsplatzes?', hint: 'Ein /27-Netz umfasst Blöcke zu 32 Adressen im letzten Oktett.', explanation: '78 liegt im Block 64–95. Die erste Adresse ist die Netzadresse.', answer: { type: 'ipv4', expected: workstation.network } },
      { id: 'broadcast', prompt: 'Wie lautet die Broadcast-Adresse dieses Netzes?', hint: 'Nimm die letzte Adresse desselben 32er-Blocks.', explanation: 'Der Block 64–95 endet bei der Broadcast-Adresse .95.', answer: { type: 'ipv4', expected: workstation.broadcast } },
      choice('server', 'Liegt der Dateiserver 192.168.40.110 im selben /27-Netz?', 'remote', [{ id: 'local', label: 'Ja, lokal' }, { id: 'remote', label: 'Nein, anderes Netz' }], 'Vergleiche 110 mit dem eben ermittelten Adressbereich.', '110 liegt im nächsten Block 96–127. Der Arbeitsplatz benötigt für dieses Ziel einen Router.'),
      choice('gateway', 'Ist 192.168.40.94 als Gateway für den Arbeitsplatz plausibel?', 'yes', [{ id: 'yes', label: 'Ja, nutzbare Adresse im lokalen Netz' }, { id: 'no', label: 'Nein, außerhalb des lokalen Netzes' }], 'Ein Gateway muss aus dem lokalen Netz erreichbar sein und darf weder Netz- noch Broadcast-Adresse sein.', '.94 liegt zwischen .65 und .94 und ist damit eine nutzbare Adresse. Ob dort tatsächlich ein Router steht, lässt sich aus der Konfiguration allein nicht beweisen.'),
    ],
  },
  {
    id: 'routing-next-hop', title: 'Paketweg über Router 2', subject: 'Netzwerktechnik', difficulty: 'Mittel',
    scenario: 'Router 2 kennt 192.168.1.0/24 über 10.0.0.250 (eth0) und 0.0.0.0/0 über 172.16.0.1 (eth1). Entscheide für zwei Ziele anhand der Tabelle.',
    concepts: ['Zielnetz', 'spezifische Route', 'Next Hop', 'Default Route'], lessonPaths: [networkLesson('statisches-routing')],
    steps: [
      choice('known-route', 'Welcher Tabelleneintrag passt zu 192.168.1.222?', 'specific', [{ id: 'specific', label: '192.168.1.0/24' }, { id: 'default', label: '0.0.0.0/0' }], 'Prüfe zuerst, ob eine konkrete Netzroute passt.', '192.168.1.222 gehört zum Netz 192.168.1.0/24; diese Route ist spezifischer.'),
      { id: 'known-hop', prompt: 'An welche Next-Hop-Adresse sendet Router 2 dieses Paket?', hint: 'Lies den Nachbarrouter beim gewählten Zielnetz ab.', explanation: 'Der Tabelleneintrag 192.168.1.0/24 nennt 10.0.0.250 als Next Hop.', answer: { type: 'ipv4', expected: '10.0.0.250' } },
      choice('external-route', 'Welche Route gilt für das externe Ziel 66.249.93.104?', 'default', [{ id: 'specific', label: '192.168.1.0/24' }, { id: 'default', label: '0.0.0.0/0' }], 'Für das Ziel gibt es keinen konkreten Eintrag.', 'Das externe Ziel passt nicht zur /24-Route. Daher greift die Default Route.'),
      { id: 'external-hop', prompt: 'Wie lautet dafür der Next Hop?', hint: 'Lies die Gateway-Adresse der Default Route ab.', explanation: 'Der Standardweg 0.0.0.0/0 führt von Router 2 zu 172.16.0.1.', answer: { type: 'ipv4', expected: '172.16.0.1' } },
    ],
  },
  {
    id: 'osi-diagnosis', title: 'Mailversand schrittweise einordnen', subject: 'Netzwerktechnik', difficulty: 'Leicht',
    scenario: 'Eine SMTP-Nachricht soll an einen anderen Rechner gesendet werden. Du prüfst nacheinander, welche Information Rechner, Anwendung und nächsten Übertragungsabschnitt bezeichnet.',
    concepts: ['IP-Adresse', 'TCP-Port', 'Ethernet-MAC', 'OSI-Schichten'], lessonPaths: [networkLesson('osi-tcp-ip')],
    steps: [
      choice('host', 'Welche Information bezeichnet den Zielrechner?', 'ip', [{ id: 'ip', label: 'Ziel-IP-Adresse' }, { id: 'port', label: 'TCP-Zielport' }, { id: 'mac', label: 'Ethernet-MAC' }], 'Die Vermittlungsschicht adressiert Rechner über Netze hinweg.', 'Die Ziel-IP-Adresse bezeichnet den Rechner im IP-Netz.'),
      choice('service', 'Der Rechner ist erreichbar, aber die SMTP-Anwendung nicht. Welche Zielinformation grenzt den Dienst ein?', 'port', [{ id: 'ip', label: 'Ziel-IP-Adresse' }, { id: 'port', label: 'TCP-Zielport' }, { id: 'mac', label: 'Ethernet-MAC' }], 'TCP ergänzt Ports zum Transport zwischen Anwendungen.', 'Der TCP-Zielport bezeichnet die empfangende Anwendung, bei SMTP im Quellenbeispiel Port 25.'),
      choice('link', 'Welche Adresse wird für den nächsten Ethernet-Abschnitt benötigt?', 'mac', [{ id: 'ip', label: 'Ziel-IP-Adresse' }, { id: 'port', label: 'TCP-Zielport' }, { id: 'mac', label: 'MAC-Adresse des nächsten Empfängers' }], 'Ethernet kümmert sich um den lokalen Übertragungsabschnitt.', 'Die MAC-Adresse bezeichnet den nächsten Empfänger im lokalen Ethernet-Abschnitt.'),
    ],
  },
  {
    id: 'linux-orientation', title: 'Neue Linux-VM kennenlernen', subject: 'Linux', difficulty: 'Leicht',
    scenario: 'Du bist an einer simulierten Ubuntu-VM angemeldet. Ermittle Benutzer, Verzeichnis, Kernel und Distribution mit den ersten Terminalbefehlen. Die Eingaben werden ausschließlich simuliert.',
    concepts: ['Benutzer', 'Arbeitsverzeichnis', 'Kernel-Version', 'Distribution'], lessonPaths: ['/it/linux/was-ist-linux'],
    steps: [
      { id: 'user-command', prompt: 'Welcher Befehl zeigt den angemeldeten Benutzer?', hint: 'Der Befehl fragt „Wer bin ich?“.', explanation: `whoami gibt in dieser Simulation ${virtualLinux.user} aus.`, answer: { type: 'command', expected: 'whoami' } },
      { id: 'directory-command', prompt: 'Welcher Befehl zeigt dein aktuelles Verzeichnis?', hint: 'Denke an „print working directory“.', explanation: `pwd gibt ${virtualLinux.directory} aus.`, answer: { type: 'command', expected: 'pwd' } },
      { id: 'kernel-command', prompt: 'Welcher Befehl zeigt die Kernel-Version?', hint: 'Die Lektion verwendet uname mit der Option -r.', explanation: `uname -r gibt ${virtualLinux.kernel} aus.`, answer: { type: 'command', expected: 'uname -r' } },
      { id: 'distribution-command', prompt: 'Welcher Befehl zeigt Distribution und Version?', hint: 'Lies die Datei /etc/os-release mit dem in der Lektion gezeigten Befehl.', explanation: `cat /etc/os-release zeigt die simulierte Ubuntu-Version.`, answer: { type: 'command', expected: 'cat /etc/os-release' } },
    ],
  },
]

export function gradeLabStep(step: LabStep, input: string): boolean {
  const answer = step.answer
  if (answer.type === 'choice') return input === answer.expected
  if (answer.type === 'command') return evaluateCommand(input, answer.expected as SimulatedCommand).correct
  if (answer.type === 'number') return answerMatches(input, answer.expected)
  if (answer.type === 'ipv4') return answerMatches(input, answer.expected)
  return input.trim().toLocaleLowerCase('de-DE') === String(answer.expected).toLocaleLowerCase('de-DE')
}

export function labSolution(step: LabStep): string {
  const answer = step.answer
  return answer.type === 'choice' ? answer.options.find((option) => option.id === answer.expected)?.label ?? answer.expected : String(answer.expected)
}

export function labCommandOutput(step: LabStep): string | null {
  return step.answer.type === 'command' ? simulatedCommands[step.answer.expected as SimulatedCommand] : null
}

export type LabSession = { stepIndex: number; attempts: number; hintVisible: boolean; revealed: boolean; resolved: boolean; independentlySolved: number; solutionsShown: number }
export const newLabSession = (): LabSession => ({ stepIndex: 0, attempts: 0, hintVisible: false, revealed: false, resolved: false, independentlySolved: 0, solutionsShown: 0 })
export function submitLabAnswer(session: LabSession, correct: boolean): LabSession {
  if (session.resolved) return session
  return { ...session, attempts: session.attempts + 1, resolved: correct, independentlySolved: session.independentlySolved + (correct ? 1 : 0) }
}
export function revealLabSolution(session: LabSession): LabSession {
  if (session.resolved || session.attempts < 2) return session
  return { ...session, revealed: true, resolved: true, solutionsShown: session.solutionsShown + 1 }
}
export function nextLabStep(session: LabSession): LabSession {
  if (!session.resolved) return session
  return { ...session, stepIndex: session.stepIndex + 1, attempts: 0, hintVisible: false, revealed: false, resolved: false }
}

export function validateLabDefinitions(lessonPaths: Set<string>): string[] {
  const errors: string[] = []
  const ids = new Set<string>()
  for (const lab of labs) {
    if (ids.has(lab.id)) errors.push(`Doppelte Lab-ID: ${lab.id}`)
    ids.add(lab.id)
    if (lab.steps.length < 2) errors.push(`${lab.id}: weniger als 2 Schritte`)
    for (const path of lab.lessonPaths) if (!lessonPaths.has(path)) errors.push(`${lab.id}: unbekannte Lektion ${path}`)
    const stepIds = new Set<string>()
    for (const step of lab.steps) {
      if (stepIds.has(step.id)) errors.push(`${lab.id}: doppelte Schritt-ID ${step.id}`)
      stepIds.add(step.id)
      const answer = step.answer
      if (!['ipv4', 'text', 'number', 'command', 'choice'].includes(answer.type) || answer.expected === '' || answer.expected === undefined) errors.push(`${lab.id}/${step.id}: ungültige Antwort`)
      if (answer.type === 'ipv4' && (parseIPv4(String(answer.expected)) === null || formatIPv4(parseIPv4(String(answer.expected))!) !== answer.expected)) errors.push(`${lab.id}/${step.id}: ungültige IPv4-Lösung`)
      if (answer.type === 'command' && !(answer.expected in simulatedCommands)) errors.push(`${lab.id}/${step.id}: nicht simulierter Befehl`)
      if (answer.type === 'choice' && (!answer.options.length || !answer.options.some((option) => option.id === answer.expected))) errors.push(`${lab.id}/${step.id}: ungültige Auswahl`)
    }
  }
  return errors
}
