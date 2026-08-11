export function OhmsLawTriangle() {
  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 240 200"
        className="h-48 w-auto"
        role="img"
        aria-label="Formeldreieck des Ohmschen Gesetzes: U oben, I und R unten. Die gesuchte Größe abdecken zeigt die Rechenvorschrift der beiden anderen."
      >
        <polygon
          points="120,10 10,190 230,190"
          className="fill-none stroke-ink-300 dark:stroke-ink-600"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="53" y1="120" x2="187" y2="120" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="120" y1="120" x2="120" y2="190" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <text x="120" y="88" textAnchor="middle" className="fill-brand-600 text-2xl font-bold dark:fill-brand-400">
          U
        </text>
        <text x="80" y="168" textAnchor="middle" className="fill-ink-800 text-2xl font-bold dark:fill-white">
          I
        </text>
        <text x="160" y="168" textAnchor="middle" className="fill-ink-800 text-2xl font-bold dark:fill-white">
          R
        </text>
      </svg>
    </div>
  )
}
