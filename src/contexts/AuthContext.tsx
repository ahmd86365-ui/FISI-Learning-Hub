import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { safeStorageGet, safeStorageRemove, safeStorageSet } from '../lib/browserStorage'

interface AuthContextValue {
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
  isGuest: boolean
  enterGuestMode: () => void
  exitGuestMode: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isGuest, setIsGuest] = useState(() => safeStorageGet('local', 'fisi_guest_active') === 'true')

  useEffect(() => {
    let active = true

    void supabase.auth.getSession()
      .then(({ data, error }) => {
        if (!active) return
        if (error) console.error('Sitzung konnte nicht geladen werden.', error)
        setSession(error ? null : data.session)
      })
      .catch((error: unknown) => {
        if (active) console.error('Sitzung konnte nicht geladen werden.', error)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return
      setSession(nextSession)
      setLoading(false)
    })

    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [])

  // A real authenticated Supabase session must always take precedence over guest mode.
  const activeSession = session
  const activeIsGuest = isGuest && !session

  useEffect(() => {
    if (activeSession && isGuest) {
      safeStorageRemove('local', 'fisi_guest_active')
      setIsGuest(false)
    }
  }, [activeSession, isGuest])

  const value = useMemo<AuthContextValue>(
    () => ({
      session: activeSession,
      loading,
      signOut: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      },
      isGuest: activeIsGuest,
      enterGuestMode: () => {
        safeStorageSet('local', 'fisi_guest_active', 'true')
        setIsGuest(true)
      },
      exitGuestMode: () => {
        safeStorageRemove('local', 'fisi_guest_active')
        setIsGuest(false)
      },
    }),
    [loading, activeSession, activeIsGuest],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
