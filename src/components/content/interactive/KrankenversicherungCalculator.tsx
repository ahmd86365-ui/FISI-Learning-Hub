import { useState } from 'react'
import { HeartPulse } from 'lucide-react'
import { CalculatorShell, NumberField, roundTo } from './CalculatorShell'

export function KrankenversicherungCalculator() {
  const [brutto, setBrutto] = useState(3500)
  const [beitragssatz, setBeitragssatz] = useState(14.6)
  const [zusatzbeitrag, setZusatzbeitrag] = useState(1.8)

  const gesamtsatz = beitragssatz + zusatzbeitrag
  const gesamtbeitrag = brutto * (gesamtsatz / 100)
  const arbeitnehmeranteil = gesamtbeitrag / 2

  const steps: [string, string][] = [
    ['Gesamtsatz', `${roundTo(gesamtsatz, 2)} %`],
    ['Gesamtbeitrag', `${roundTo(gesamtbeitrag, 2)} EUR`],
    ['Arbeitnehmeranteil', `${roundTo(arbeitnehmeranteil, 2)} EUR`],
  ]

  return (
    <CalculatorShell
      icon={HeartPulse}
      title="Krankenversicherungsbeitrags-Rechner"
      description="Gesamtbeitrag = Bruttogehalt × (allgemeiner Beitragssatz + Zusatzbeitrag). Arbeitnehmeranteil = Gesamtbeitrag / 2."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NumberField label="Bruttogehalt" unit="EUR" value={brutto} onChange={setBrutto} />
        <NumberField label="Allg. Beitragssatz" unit="%" value={beitragssatz} onChange={setBeitragssatz} />
        <NumberField label="Zusatzbeitrag" unit="%" value={zusatzbeitrag} onChange={setZusatzbeitrag} />
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {steps.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-ink-50 px-3 py-2 dark:bg-ink-800/60">
            <dt className="text-[0.65rem] font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">
              {label}
            </dt>
            <dd className="text-sm font-semibold text-ink-900 dark:text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </CalculatorShell>
  )
}
