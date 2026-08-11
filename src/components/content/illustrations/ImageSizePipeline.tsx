import { ArrowRight } from 'lucide-react'

const steps = ['cm', 'Zoll', 'Pixel (B×H)', 'Gesamtpixel', 'Bit', 'Byte', 'KiB', 'MiB', 'GiB']

export function ImageSizePipeline() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1.5">
          <span className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-300 dark:text-ink-600" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}
