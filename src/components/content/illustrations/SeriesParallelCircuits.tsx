function ResistorBox({ x, y, width, height, label }: { x: number; y: number; width: number; height: number; label: string }) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className="fill-brand-100 stroke-brand-400 dark:fill-brand-500/20 dark:stroke-brand-500"
        strokeWidth="1.5"
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 4}
        textAnchor="middle"
        className="fill-brand-700 text-[10px] font-semibold dark:fill-brand-300"
      >
        {label}
      </text>
    </>
  )
}

function SeriesCircuit() {
  return (
    <svg viewBox="0 0 220 110" className="h-28 w-full max-w-[260px]" role="img" aria-label="Reihenschaltung: R1 und R2 in einer Schleife, überall gleicher Strom">
      <rect x="20" y="20" width="180" height="70" className="fill-none stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <ResistorBox x={45} y={13} width={45} height={14} label="R1" />
      <ResistorBox x={130} y={13} width={45} height={14} label="R2" />
      <text x="110" y="102" textAnchor="middle" className="fill-ink-500 text-[9px] dark:fill-ink-400">
        I überall gleich
      </text>
    </svg>
  )
}

function ParallelCircuit() {
  return (
    <svg viewBox="0 0 220 110" className="h-28 w-full max-w-[260px]" role="img" aria-label="Parallelschaltung: R1 und R2 auf getrennten Zweigen, überall gleiche Spannung">
      <line x1="20" y1="20" x2="20" y2="90" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <line x1="200" y1="20" x2="200" y2="90" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <line x1="20" y1="35" x2="80" y2="35" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <line x1="140" y1="35" x2="200" y2="35" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <line x1="20" y1="75" x2="80" y2="75" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <line x1="140" y1="75" x2="200" y2="75" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
      <ResistorBox x={80} y={28} width={60} height={14} label="R1" />
      <ResistorBox x={80} y={68} width={60} height={14} label="R2" />
      <text x="110" y="102" textAnchor="middle" className="fill-ink-500 text-[9px] dark:fill-ink-400">
        U überall gleich
      </text>
    </svg>
  )
}

export function SeriesParallelCircuits() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="text-center">
        <SeriesCircuit />
        <p className="mt-2 text-xs font-medium text-ink-500 dark:text-ink-400">Reihenschaltung</p>
      </div>
      <div className="text-center">
        <ParallelCircuit />
        <p className="mt-2 text-xs font-medium text-ink-500 dark:text-ink-400">Parallelschaltung</p>
      </div>
    </div>
  )
}
