import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" className="fill-brand-600 dark:fill-brand-500" />
      <path
        d="M13 13L20 20L13 27"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 27H27" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink-950 ${className ?? ''}`}
      aria-label="FISI Learning Hub – Startseite"
    >
      <LogoMark className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:scale-105" />
      {showWordmark && (
        <span className="flex flex-col justify-center leading-none">
          <span className="font-mono text-[0.95rem] font-semibold tracking-tight text-ink-900 dark:text-white">
            FISI<span className="text-brand-600 dark:text-brand-400">.</span>
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ink-400 dark:text-ink-500">
            Learning Hub
          </span>
        </span>
      )}
    </Link>
  )
}
