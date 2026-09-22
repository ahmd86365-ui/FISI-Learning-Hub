// Pure, fixed-output simulation. Input is never passed to a shell or network service.
export const virtualLinux = {
  user: 'student',
  directory: '/home/student',
  kernel: '6.8.0-45-generic',
  distribution: 'NAME="Ubuntu"\nVERSION="24.04 LTS (simuliert)"\nID=ubuntu',
  date: 'Mo 16. Sep 2024 10:30:00 CEST',
  listing: 'Dokumente  linux-kurs  systeminfo.txt',
} as const

export const simulatedCommands = {
  whoami: virtualLinux.user,
  pwd: virtualLinux.directory,
  date: virtualLinux.date,
  'uname -r': virtualLinux.kernel,
  'cat /etc/os-release': virtualLinux.distribution,
  ls: virtualLinux.listing,
  exit: 'Simulierte Sitzung beendet.',
} as const

export type SimulatedCommand = keyof typeof simulatedCommands

export function normalizeCommand(input: string): string {
  return input.trim().replace(/\s+/g, ' ')
}

export function evaluateCommand(input: string, expected: SimulatedCommand) {
  const normalized = normalizeCommand(input)
  return {
    correct: normalized === expected,
    output: normalized === expected ? simulatedCommands[expected] : null,
  }
}
