export function NetworkTopologyDiagram() {
  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 480 220"
        className="h-56 w-full max-w-xl"
        role="img"
        aria-label="Netzwerktopologie: Client und Server verbinden sich über einen Switch mit dem Router, der als Gateway den Zugang zum Internet und zu DNS/DHCP bereitstellt"
      >
        {/* connections */}
        <line x1="80" y1="70" x2="80" y2="110" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="240" y1="130" x2="80" y2="130" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="240" y1="130" x2="400" y2="130" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="240" y1="70" x2="240" y2="110" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="400" y1="70" x2="400" y2="110" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" />
        <line x1="240" y1="150" x2="240" y2="180" className="stroke-ink-300 dark:stroke-ink-600" strokeWidth="2" strokeDasharray="4 4" />

        {/* client */}
        <rect x="35" y="30" width="90" height="40" rx="8" className="fill-ink-50 stroke-ink-200 dark:fill-ink-800 dark:stroke-ink-700" strokeWidth="1.5" />
        <text x="80" y="54" textAnchor="middle" className="fill-ink-700 text-[11px] font-medium dark:fill-ink-200">
          Client
        </text>

        {/* server */}
        <rect x="355" y="30" width="90" height="40" rx="8" className="fill-ink-50 stroke-ink-200 dark:fill-ink-800 dark:stroke-ink-700" strokeWidth="1.5" />
        <text x="400" y="54" textAnchor="middle" className="fill-ink-700 text-[11px] font-medium dark:fill-ink-200">
          Server
        </text>

        {/* switch */}
        <rect x="195" y="30" width="90" height="40" rx="8" className="fill-ink-50 stroke-ink-200 dark:fill-ink-800 dark:stroke-ink-700" strokeWidth="1.5" />
        <text x="240" y="54" textAnchor="middle" className="fill-ink-700 text-[11px] font-medium dark:fill-ink-200">
          Switch
        </text>

        {/* router / gateway */}
        <rect x="185" y="110" width="110" height="40" rx="8" className="fill-brand-50 stroke-brand-300 dark:fill-brand-500/10 dark:stroke-brand-500/40" strokeWidth="1.5" />
        <text x="240" y="128" textAnchor="middle" className="fill-brand-800 text-[11px] font-semibold dark:fill-brand-300">
          Router
        </text>
        <text x="240" y="142" textAnchor="middle" className="fill-brand-700/80 text-[9px] dark:fill-brand-300/70">
          (default gateway)
        </text>

        {/* internet + DNS/DHCP */}
        <rect x="185" y="180" width="110" height="34" rx="17" className="fill-ink-100 stroke-ink-200 dark:fill-ink-800 dark:stroke-ink-700" strokeWidth="1.5" />
        <text x="240" y="201" textAnchor="middle" className="fill-ink-600 text-[10px] font-medium dark:fill-ink-300">
          Internet / DNS / DHCP
        </text>
      </svg>
    </div>
  )
}
