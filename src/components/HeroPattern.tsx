/**
 * Decorative, theme-aware backdrop for the hero section. Evokes circuit
 * traces / network topology at very low opacity — purely ambient, never
 * competing with foreground content. Static (no motion) so it needs no
 * reduced-motion handling.
 */
export function HeroPattern() {
  return (
    <div
      className="bg-fade-mask pointer-events-none absolute inset-0 text-ink-900/[0.05] dark:text-white/[0.07]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 560"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* circuit traces */}
        <path
          d="M0 96 H180 V48 H420 V132 H620"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1200 72 H960 V150 H760 V96 H610"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M0 260 H120 V320 H300"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1200 300 H1040 V220 H860"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M90 440 H90 V520 H260 V470 H420"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1110 440 V500 H940 V450 H800"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* nodes */}
        {[
          [180, 96],
          [420, 48],
          [620, 132],
          [960, 72],
          [760, 150],
          [120, 260],
          [300, 320],
          [1040, 300],
          [860, 220],
          [260, 520],
          [420, 470],
          [940, 500],
          [800, 450],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" />
        ))}

        {/* faint dot lattice */}
        {Array.from({ length: 14 }).map((_, col) =>
          Array.from({ length: 7 }).map((__, row) => (
            <circle
              key={`d-${col}-${row}`}
              cx={40 + col * 88}
              cy={20 + row * 88}
              r="1"
              fill="currentColor"
              opacity="0.5"
            />
          )),
        )}
      </svg>
    </div>
  )
}
