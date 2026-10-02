import { ArrowLeft, ArrowRight, Brain, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSmartBack } from '../../hooks/useSmartBack'

export interface QuickAction { to: string; label: string; kind: 'cards'|'lab'|'next' }
const icons = { cards: Brain, lab: FlaskConical, next: ArrowRight }
export function MobileQuickActions({ actions, fallback }: { actions: QuickAction[]; fallback: string }) {
  const { goBack } = useSmartBack({ fallback })
  return <><div className="h-20 md:hidden" aria-hidden="true" /><nav aria-label="Schnellaktionen" className="fixed inset-x-0 bottom-0 z-20 border-t border-ink-200 bg-white/95 px-2 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_rgba(15,29,53,.08)] backdrop-blur dark:border-ink-800 dark:bg-ink-950/95 md:hidden"><div className="mx-auto flex max-w-lg items-stretch justify-around gap-1"><button type="button" onClick={goBack} className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 text-[.7rem] font-semibold text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 dark:text-brand-300"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Zurück</button>{actions.map(({to,label,kind})=>{const Icon=icons[kind];return <Link key={`${kind}-${to}`} to={to} className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 text-center text-[.7rem] font-semibold text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 dark:text-brand-300"><Icon className="h-4 w-4" aria-hidden="true"/><span className="max-w-full truncate">{label}</span></Link>})}</div></nav></>
}
