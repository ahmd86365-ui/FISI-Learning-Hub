import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react'
import { CheckCircle2, CircleAlert, Info, TriangleAlert, X } from 'lucide-react'

export type ToastTone = 'success' | 'info' | 'warning' | 'error'
type Toast = { id: number; message: string; tone: ToastTone }

const ToastContext = createContext<{ showToast: (message: string, tone?: ToastTone) => void } | undefined>(undefined)
const icons = { success: CheckCircle2, info: Info, warning: TriangleAlert, error: CircleAlert }
const tones = {
  success: 'border-teal-300 bg-white text-teal-800 dark:border-teal-500/40 dark:bg-ink-900 dark:text-teal-300',
  info: 'border-brand-300 bg-white text-brand-800 dark:border-brand-500/40 dark:bg-ink-900 dark:text-brand-300',
  warning: 'border-amber-300 bg-white text-amber-800 dark:border-amber-500/40 dark:bg-ink-900 dark:text-amber-300',
  error: 'border-rose-300 bg-white text-rose-800 dark:border-rose-500/40 dark:bg-ink-900 dark:text-rose-300',
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const nextId = useRef(0)
  const last = useRef({ message: '', at: 0 })
  const dismiss = useCallback((id: number) => setToasts((current) => current.filter((toast) => toast.id !== id)), [])
  const showToast = useCallback((message: string, tone: ToastTone = 'info') => {
    const now = Date.now()
    if (last.current.message === message && now - last.current.at < 800) return
    last.current = { message, at: now }
    const id = ++nextId.current
    setToasts((current) => [...current.slice(-2), { id, message, tone }])
    window.setTimeout(() => dismiss(id), tone === 'error' ? 6000 : 3500)
  }, [dismiss])
  const value = useMemo(() => ({ showToast }), [showToast])
  return <ToastContext.Provider value={value}>{children}<div className="pointer-events-none fixed inset-x-3 bottom-[calc(8.75rem+env(safe-area-inset-bottom))] z-[60] flex flex-col items-center gap-2 md:bottom-5" aria-live="polite" aria-atomic="false">{toasts.map((toast) => { const Icon = icons[toast.tone]; return <div key={toast.id} role={toast.tone === 'error' ? 'alert' : 'status'} className={`pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-xl ${tones[toast.tone]}`}><Icon className="h-5 w-5 shrink-0" aria-hidden="true" /><span className="min-w-0 flex-1">{toast.message}</span><button type="button" onClick={() => dismiss(toast.id)} aria-label="Meldung schließen" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-ink-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:hover:bg-ink-800"><X className="h-4 w-4" aria-hidden="true" /></button></div>})}</div></ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within ToastProvider')
  return context
}
