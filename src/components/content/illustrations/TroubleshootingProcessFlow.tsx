const steps = [
  'Identify the problem',
  'Gather information',
  'Check obvious causes',
  'Test the connection',
  'Identify the cause',
  'Apply a solution',
  'Test the solution',
  'Document',
]

export function TroubleshootingProcessFlow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-ink-50 px-3 py-2 text-center dark:border-ink-700 dark:bg-ink-800">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[0.65rem] font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
              {i + 1}
            </span>
            <p className="text-xs font-medium text-ink-800 dark:text-ink-100">{step}</p>
          </div>
          {i < steps.length - 1 && (
            <svg
              className="h-3 w-3 shrink-0 text-ink-300 dark:text-ink-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
