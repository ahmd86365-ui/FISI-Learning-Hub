import { useState } from 'react'
import { AudioLines } from 'lucide-react'
import { CalculatorShell, NumberField, roundTo } from './CalculatorShell'

const channelOptions = [
  { value: 1, label: 'Mono' },
  { value: 2, label: 'Stereo' },
]

export function AudiogroesseCalculator() {
  const [rate, setRate] = useState(44100)
  const [depth, setDepth] = useState(16)
  const [channels, setChannels] = useState(2)
  const [duration, setDuration] = useState(45)

  const bits = rate * depth * channels * duration
  const bytes = bits / 8
  const kib = bytes / 1024
  const mib = kib / 1024
  const gib = mib / 1024

  const steps: [string, string][] = [
    ['Bit', roundTo(bits, 0)],
    ['Byte', roundTo(bytes, 0)],
    ['KiB', roundTo(kib, 2)],
    ['MiB', roundTo(mib, 4)],
    ['GiB', roundTo(gib, 6)],
  ]

  return (
    <CalculatorShell
      icon={AudioLines}
      title="Audiogrößen-Rechner"
      description="Rechne live von Abtastrate, Abtasttiefe, Kanälen und Dauer zur Dateigröße."
    >
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Abtastrate" unit="Hz" value={rate} onChange={setRate} />
        <NumberField label="Abtasttiefe" unit="Bit" value={depth} onChange={setDepth} />
        <div>
          <span className="mb-1 block text-xs font-medium text-ink-600 dark:text-ink-300">Kanäle</span>
          <div className="flex gap-2">
            {channelOptions.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setChannels(c.value)}
                aria-pressed={channels === c.value}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  channels === c.value
                    ? 'border-brand-400 bg-brand-50 text-brand-800 dark:border-brand-500/50 dark:bg-brand-500/10 dark:text-brand-300'
                    : 'border-ink-200 text-ink-600 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <NumberField label="Dauer" unit="Sekunden" value={duration} onChange={setDuration} />
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
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
