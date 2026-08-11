import { useState } from 'react'
import { PieChart } from 'lucide-react'
import { CalculatorShell, NumberField, roundTo } from './CalculatorShell'

export function GewinnverteilungCalculator() {
  const [geschaeftsanteil, setGeschaeftsanteil] = useState(35000)
  const [gesamtkapital, setGesamtkapital] = useState(120000)
  const [gesamtgewinn, setGesamtgewinn] = useState(60000)

  const beteiligungsquote = gesamtkapital !== 0 ? (geschaeftsanteil / gesamtkapital) * 100 : null
  const gewinnanteil = beteiligungsquote !== null ? gesamtgewinn * (beteiligungsquote / 100) : null

  return (
    <CalculatorShell
      icon={PieChart}
      title="Gewinnverteilungs-Rechner (GmbH)"
      description="Beteiligungsquote = Geschäftsanteil / Gesamtkapital × 100. Gewinnanteil = Gesamtgewinn × Beteiligungsquote."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <NumberField label="Geschäftsanteil" unit="EUR" value={geschaeftsanteil} onChange={setGeschaeftsanteil} />
        <NumberField label="Gesamtkapital" unit="EUR" value={gesamtkapital} onChange={setGesamtkapital} />
        <NumberField label="Gesamtgewinn" unit="EUR" value={gesamtgewinn} onChange={setGesamtgewinn} />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-ink-50 px-3 py-2.5 dark:bg-ink-800/60">
          <p className="text-[0.65rem] font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">
            Beteiligungsquote
          </p>
          <p className="text-sm font-semibold text-ink-900 dark:text-white">
            {beteiligungsquote === null ? '–' : `${roundTo(beteiligungsquote, 3)} %`}
          </p>
        </div>
        <div className="rounded-lg bg-brand-50/60 px-3 py-2.5 dark:bg-brand-500/10">
          <p className="text-[0.65rem] font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
            Gewinnanteil
          </p>
          <p className="text-sm font-semibold text-brand-800 dark:text-brand-300">
            {gewinnanteil === null ? '–' : `${roundTo(gewinnanteil, 2)} EUR`}
          </p>
        </div>
      </div>
    </CalculatorShell>
  )
}
