import { useState } from 'react'
import { Image } from 'lucide-react'
import { CalculatorShell, NumberField, roundTo } from './CalculatorShell'

export function BildgroesseCalculator() {
  const [widthCm, setWidthCm] = useState(12.7)
  const [heightCm, setHeightCm] = useState(8.89)
  const [dpi, setDpi] = useState(300)
  const [depth, setDepth] = useState(8)

  const zollW = widthCm / 2.54
  const zollH = heightCm / 2.54
  const pxW = zollW * dpi
  const pxH = zollH * dpi
  const totalPx = pxW * pxH
  const bits = totalPx * depth
  const bytes = bits / 8
  const kib = bytes / 1024
  const mib = kib / 1024
  const gib = mib / 1024

  const steps: [string, string][] = [
    ['Breite (Zoll)', roundTo(zollW, 3)],
    ['Höhe (Zoll)', roundTo(zollH, 3)],
    ['Breite (px)', roundTo(pxW, 1)],
    ['Höhe (px)', roundTo(pxH, 1)],
    ['Gesamtpixel', roundTo(totalPx, 0)],
    ['Bit', roundTo(bits, 0)],
    ['Byte', roundTo(bytes, 0)],
    ['KiB', roundTo(kib, 2)],
    ['MiB', roundTo(mib, 2)],
    ['GiB', roundTo(gib, 4)],
  ]

  return (
    <CalculatorShell
      icon={Image}
      title="Bildgrößen-Rechner"
      description="Rechne live vom Zentimetermaß bis zur Dateigröße durch."
    >
      <div className="grid grid-cols-2 gap-3">
        <NumberField label="Breite" unit="cm" value={widthCm} onChange={setWidthCm} />
        <NumberField label="Höhe" unit="cm" value={heightCm} onChange={setHeightCm} />
        <NumberField label="Auflösung" unit="DPI" value={dpi} onChange={setDpi} />
        <NumberField label="Farbtiefe" unit="Bit" value={depth} onChange={setDepth} />
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
