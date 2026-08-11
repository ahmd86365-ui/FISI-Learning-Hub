function Box({ x, y, w, h, label, dashed }: { x: number; y: number; w: number; h: number; label: string; dashed?: boolean }) {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={3}
        className={
          dashed
            ? 'fill-ink-50 stroke-ink-400 dark:fill-ink-800 dark:stroke-ink-500'
            : 'fill-brand-100 stroke-brand-400 dark:fill-brand-500/20 dark:stroke-brand-500'
        }
        strokeWidth="1.5"
        strokeDasharray={dashed ? '3 2' : undefined}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 3.5}
        textAnchor="middle"
        className={dashed ? 'fill-ink-600 text-[8px] dark:fill-ink-300' : 'fill-brand-700 text-[8px] font-semibold dark:fill-brand-300'}
      >
        {label}
      </text>
    </>
  )
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="1.5" />
}

function EinlinienDiagram() {
  return (
    <svg viewBox="0 0 160 100" className="h-24 w-full" role="img" aria-label="Einliniensystem: ein Vorgesetzter, klare Baumstruktur">
      <Box x={60} y={5} w={40} h={18} label="Leitung" />
      <Line x1={80} y1={23} x2={80} y2={35} />
      <Line x1={30} y1={35} x2={130} y2={35} />
      <Line x1={30} y1={35} x2={30} y2={45} />
      <Line x1={80} y1={35} x2={80} y2={45} />
      <Line x1={130} y1={35} x2={130} y2={45} />
      <Box x={10} y={45} w={40} h={18} label="Team A" />
      <Box x={60} y={45} w={40} h={18} label="Team B" />
      <Box x={110} y={45} w={40} h={18} label="Team C" />
    </svg>
  )
}

function MehrlinienDiagram() {
  return (
    <svg viewBox="0 0 160 100" className="h-24 w-full" role="img" aria-label="Mehrliniensystem: mehrere Vorgesetzte weisen dieselbe Stelle an">
      <Box x={10} y={5} w={50} h={18} label="Fachleitung 1" />
      <Box x={100} y={5} w={50} h={18} label="Fachleitung 2" />
      <Line x1={35} y1={23} x2={80} y2={55} />
      <Line x1={125} y1={23} x2={80} y2={55} />
      <Box x={60} y={55} w={40} h={18} label="Mitarbeiter" />
    </svg>
  )
}

function StablinienDiagram() {
  return (
    <svg viewBox="0 0 160 100" className="h-24 w-full" role="img" aria-label="Stabliniensystem: Einliniensystem ergänzt um eine beratende Stabsstelle">
      <Box x={55} y={5} w={50} h={18} label="Leitung" />
      <Line x1={105} y1={14} x2={130} y2={14} />
      <Box x={130} y={5} w={28} h={18} label="Stab" dashed />
      <Line x1={80} y1={23} x2={80} y2={45} />
      <Line x1={40} y1={45} x2={120} y2={45} />
      <Line x1={40} y1={45} x2={40} y2={55} />
      <Line x1={120} y1={45} x2={120} y2={55} />
      <Box x={15} y={55} w={50} h={18} label="Abteilung A" />
      <Box x={95} y={55} w={50} h={18} label="Abteilung B" />
    </svg>
  )
}

function MatrixDiagram() {
  return (
    <svg viewBox="0 0 160 100" className="h-24 w-full" role="img" aria-label="Matrixorganisation: Doppelunterstellung unter Funktionsleitung und Projektleitung">
      <Box x={10} y={5} w={60} h={18} label="Funktionsleitung" />
      <Box x={10} y={70} w={60} h={18} label="Projektleitung" />
      <Line x1={70} y1={14} x2={100} y2={38} />
      <Line x1={70} y1={79} x2={100} y2={55} />
      <Box x={100} y={38} w={50} h={18} label="Mitarbeiter" />
    </svg>
  )
}

const diagrams = [
  { Component: EinlinienDiagram, label: 'Einliniensystem' },
  { Component: MehrlinienDiagram, label: 'Mehrliniensystem' },
  { Component: StablinienDiagram, label: 'Stabliniensystem' },
  { Component: MatrixDiagram, label: 'Matrixorganisation' },
]

export function LeitungssystemeDiagrams() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {diagrams.map(({ Component, label }) => (
        <div key={label} className="text-center">
          <Component />
          <p className="mt-2 text-xs font-medium text-ink-500 dark:text-ink-400">{label}</p>
        </div>
      ))}
    </div>
  )
}
