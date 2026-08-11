export function BusinessCycleDiagram() {
  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 420 180"
        className="h-40 w-full max-w-xl"
        role="img"
        aria-label="Konjunkturzyklus: Aufschwung, Boom, Abschwung, Rezession im Wechsel"
      >
        <line x1="10" y1="90" x2="410" y2="90" className="stroke-ink-200 dark:stroke-ink-700" strokeWidth="1" strokeDasharray="4 4" />
        <path
          d="M 10 110 C 60 60, 100 30, 150 30 S 230 60, 260 90 S 320 150, 360 150 S 400 130, 410 110"
          fill="none"
          className="stroke-brand-500 dark:stroke-brand-400"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="60" y="140" textAnchor="middle" className="fill-ink-600 text-[10px] font-medium dark:fill-ink-300">
          Aufschwung
        </text>
        <text x="150" y="20" textAnchor="middle" className="fill-ink-600 text-[10px] font-medium dark:fill-ink-300">
          Boom
        </text>
        <text x="260" y="110" textAnchor="middle" className="fill-ink-600 text-[10px] font-medium dark:fill-ink-300">
          Abschwung
        </text>
        <text x="365" y="168" textAnchor="middle" className="fill-ink-600 text-[10px] font-medium dark:fill-ink-300">
          Rezession
        </text>
      </svg>
    </div>
  )
}
