import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface PreferencesContextValue {
  translationEnabled: boolean
  toggleTranslation: () => void
}

const PreferencesContext = createContext<PreferencesContextValue | undefined>(undefined)

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [translationEnabled, setTranslationEnabled] = useState(() => {
    const stored = localStorage.getItem('fisi_translation_enabled')
    return stored === 'true'
  })

  useEffect(() => {
    localStorage.setItem('fisi_translation_enabled', String(translationEnabled))
  }, [translationEnabled])

  const toggleTranslation = () => setTranslationEnabled((prev) => !prev)

  return (
    <PreferencesContext.Provider value={{ translationEnabled, toggleTranslation }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (context === undefined) {
    throw new Error('usePreferences must be used within a PreferencesProvider')
  }
  return context
}
