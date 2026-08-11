import { useState } from 'react'
import { Zap } from 'lucide-react'
import { CalculatorShell, NumberField, roundTo } from './CalculatorShell'

const targets = [
  { key: 'U', label: 'U (Spannung)', unit: 'V' },
  { key: 'I', label: 'I (Stromstärke)', unit: 'A' },
  { key: 'R', label: 'R (Widerstand)', unit: 'Ω' },
] as const

type Target = (typeof targets)[number]['key']

export function OhmsLawCalculator() {
  const [target, setTarget] = useState<Target>('U')
  const [r, setR] = useState(30)
  const [i, setI] = useState(0.4)
  const [u, setU] = useState(12)

  let result: number | null = null
  if (target === 'U') result = r * i
  if (target === 'I') result = r !== 0 ? u / r : null
  if (target === 'R') result = i !== 0 ? u / i : null

  const targetMeta = targets.find((t) => t.key === target)!

  return (
    <CalculatorShell
      icon={Zap}
      title="Ohmsches-Gesetz-Rechner"
      description="Wähle die gesuchte Größe und gib die anderen beiden ein — das Ergebnis wird live berechnet."
    >
      <div className="mb-4 flex flex-wrap gap-2">
        {targets.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTarget(t.key)}
            aria-pressed={target === t.key}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              target === t.key
                ? 'bg-brand-600 text-white dark:bg-brand-500'
                : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700'
            }`}
          >
            Gesucht: {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {target !== 'R' && <NumberField label="R" unit="Ω" value={r} onChange={setR} />}
        {target !== 'I' && <NumberField label="I" unit="A" value={i} onChange={setI} />}
        {target !== 'U' && <NumberField label="U" unit="V" value={u} onChange={setU} />}
      </div>

      <div className="mt-4 rounded-lg bg-brand-50/60 px-4 py-3 text-sm font-semibold text-brand-800 dark:bg-brand-500/10 dark:text-brand-300">
        {result === null || Number.isNaN(result)
          ? 'Bitte gültige Werte eingeben.'
          : `${target} = ${roundTo(result, 3)} ${targetMeta.unit}`}
      </div>
    </CalculatorShell>
  )
}
