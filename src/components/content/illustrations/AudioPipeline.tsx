import { ArrowRight, X } from 'lucide-react'

const inputs = ['Abtastrate', 'Abtasttiefe', 'Kanäle', 'Dauer']
const outputs = ['Bit', 'Byte', 'KiB', 'MiB', 'GiB']

export function AudioPipeline() {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {inputs.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className="rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200">
              {step}
            </span>
            {i < inputs.length - 1 && (
              <X className="h-3 w-3 shrink-0 text-ink-300 dark:text-ink-600" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ArrowRight className="h-4 w-4 rotate-90 text-ink-300 dark:text-ink-600" aria-hidden="true" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {outputs.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className="rounded-lg border border-brand-200 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              {step}
            </span>
            {i < outputs.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-300 dark:text-ink-600" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
