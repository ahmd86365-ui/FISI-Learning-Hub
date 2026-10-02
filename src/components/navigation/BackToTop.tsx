import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop({ aboveMobileBar = false }: { aboveMobileBar?: boolean }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const update = () => setVisible(window.scrollY > 700); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  if (!visible) return null
  const scrollTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  return <button type="button" onClick={scrollTop} aria-label="Nach oben" className={`fixed right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-700 shadow-lg transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 dark:border-ink-700 dark:bg-ink-900 dark:text-brand-300 dark:hover:bg-ink-800 ${aboveMobileBar ? 'bottom-[calc(5rem+env(safe-area-inset-bottom))] md:bottom-6' : 'bottom-6'}`}><ArrowUp className="h-5 w-5" aria-hidden="true" /></button>
}
