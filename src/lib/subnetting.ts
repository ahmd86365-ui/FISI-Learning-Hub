export type Difficulty = 'leicht' | 'mittel' | 'schwer'
export type SubnetProblem = { address: string; prefix: number }

const ranges: Record<Difficulty, number[]> = {
  leicht: [16, 24, 25, 26],
  mittel: [20, 21, 22, 23, 24, 25, 26, 27, 28],
  schwer: Array.from({ length: 15 }, (_, i) => i + 16),
}

export function parseIPv4(value: string): number | null {
  const parts = value.trim().split('.')
  if (parts.length !== 4 || parts.some((part) => !/^\d{1,3}$/.test(part) || Number(part) > 255)) return null
  return parts.reduce((result, part) => ((result << 8) | Number(part)) >>> 0, 0)
}

export function formatIPv4(value: number): string {
  return [24, 16, 8, 0].map((shift) => (value >>> shift) & 255).join('.')
}

export function calculateSubnet(problem: SubnetProblem) {
  const ip = parseIPv4(problem.address)
  if (ip === null || !Number.isInteger(problem.prefix) || problem.prefix < 16 || problem.prefix > 30) {
    throw new Error('Ungültige IPv4-Adresse oder Präfix')
  }
  const hostBits = 32 - problem.prefix
  const mask = (0xffffffff << hostBits) >>> 0
  const network = (ip & mask) >>> 0
  const broadcast = (network | (~mask >>> 0)) >>> 0
  const relevantOctet = Math.ceil(problem.prefix / 8)
  const maskOctet = (mask >>> (8 * (4 - relevantOctet))) & 255
  const blockSize = 256 - maskOctet
  return {
    mask: formatIPv4(mask), network: formatIPv4(network), broadcast: formatIPv4(broadcast),
    firstHost: formatIPv4(network + 1), lastHost: formatIPv4(broadcast - 1),
    usableHosts: 2 ** hostBits - 2, hostBits, relevantOctet, blockSize,
    blockStart: (network >>> (8 * (4 - relevantOctet))) & 255,
    blockEnd: (broadcast >>> (8 * (4 - relevantOctet))) & 255,
  }
}

export function generateSubnetProblem(difficulty: Difficulty, random: () => number = Math.random): SubnetProblem {
  const draw = (max: number) => Math.min(max - 1, Math.floor(Math.max(0, random()) * max))
  const prefixes = ranges[difficulty]
  const prefix = prefixes[draw(prefixes.length)]
  const octets = difficulty === 'leicht'
    ? [192, 168, draw(256), draw(256)]
    : [draw(223) + 1, draw(256), draw(256), draw(256)]
  const hostBits = 32 - prefix
  const mask = (0xffffffff << hostBits) >>> 0
  const base = (parseIPv4(octets.join('.'))! & mask) >>> 0
  const hostCount = 2 ** hostBits - 2
  return { address: formatIPv4((base + 1 + draw(hostCount)) >>> 0), prefix }
}

export function answerMatches(input: string, expected: string | number): boolean {
  if (typeof expected === 'number') {
    const normalized = input.trim().replace(/\s/g, '')
    return /^\d+$/.test(normalized) && Number(normalized) === expected
  }
  const parsed = parseIPv4(input)
  return parsed !== null && formatIPv4(parsed) === expected
}
