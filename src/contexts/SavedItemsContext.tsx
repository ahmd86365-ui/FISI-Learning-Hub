import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { supabase } from '../lib/supabase'

export type SavedItemKind = 'favorite' | 'review'
export type SavedContentType = 'lesson' | 'exercise'

export interface SavedItem {
  user_id: string
  item_kind: SavedItemKind
  content_type: SavedContentType
  content_id: string
  content_title: string
  content_path: string
  created_at: string
}

export interface SavedContent {
  contentType: SavedContentType
  contentId: string
  title: string
  path: string
}

interface SavedItemsContextValue {
  items: SavedItem[]
  loading: boolean
  error: string | null
  isSaved: (kind: SavedItemKind, contentType: SavedContentType, contentId: string) => boolean
  isPending: (kind: SavedItemKind, contentType: SavedContentType, contentId: string) => boolean
  toggle: (kind: SavedItemKind, content: SavedContent) => Promise<void>
}

const SavedItemsContext = createContext<SavedItemsContextValue | undefined>(undefined)

const itemKey = (kind: SavedItemKind, contentType: SavedContentType, contentId: string) =>
  `${kind}:${contentType}:${contentId}`

export function SavedItemsProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth()
  const [items, setItems] = useState<SavedItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingKeys, setPendingKeys] = useState<Set<string>>(new Set())
  const currentUser = useRef(session?.user.id)
  currentUser.current = session?.user.id

  useEffect(() => {
    let active = true
    setPendingKeys(new Set())
    if (!session?.user) {
      setItems([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)
    void supabase
      .from('user_content_items')
      .select('user_id,item_kind,content_type,content_id,content_title,content_path,created_at')
      .order('created_at', { ascending: false })
      .then(({ data, error: loadError }) => {
        if (!active) return
        if (loadError) {
          setError(loadError.message)
          setItems([])
        } else {
          setItems((data ?? []) as SavedItem[])
        }
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [session?.user.id])

  const isSaved = useCallback(
    (kind: SavedItemKind, contentType: SavedContentType, contentId: string) =>
      items.some(
        (item) => item.item_kind === kind && item.content_type === contentType && item.content_id === contentId,
      ),
    [items],
  )

  const isPending = useCallback(
    (kind: SavedItemKind, contentType: SavedContentType, contentId: string) =>
      pendingKeys.has(itemKey(kind, contentType, contentId)),
    [pendingKeys],
  )

  const toggle = useCallback(
    async (kind: SavedItemKind, content: SavedContent) => {
      const user = session?.user
      if (!user) return

      const key = itemKey(kind, content.contentType, content.contentId)
      if (pendingKeys.has(key)) return
      const existing = items.find(
        (item) =>
          item.item_kind === kind &&
          item.content_type === content.contentType &&
          item.content_id === content.contentId,
      )
      const optimisticItem: SavedItem = {
        user_id: user.id,
        item_kind: kind,
        content_type: content.contentType,
        content_id: content.contentId,
        content_title: content.title.trim().slice(0, 500),
        content_path: content.path.slice(0, 1000),
        created_at: new Date().toISOString(),
      }

      setError(null)
      setPendingKeys((current) => new Set(current).add(key))
      setItems((current) =>
        existing
          ? current.filter(
              (item) =>
                !(item.item_kind === kind && item.content_type === content.contentType && item.content_id === content.contentId),
            )
          : [optimisticItem, ...current],
      )

      const query = existing
        ? supabase
            .from('user_content_items')
            .delete()
            .eq('user_id', user.id)
            .eq('item_kind', kind)
            .eq('content_type', content.contentType)
            .eq('content_id', content.contentId)
        : supabase.from('user_content_items').insert(optimisticItem)
      const { error: saveError } = await query
      if (currentUser.current !== user.id) return

      if (saveError) {
        setItems((current) =>
          existing
            ? [existing, ...current]
            : current.filter(
                (item) =>
                  !(item.item_kind === kind && item.content_type === content.contentType && item.content_id === content.contentId),
              ),
        )
        setError(saveError.message)
      }
      setPendingKeys((current) => {
        const next = new Set(current)
        next.delete(key)
        return next
      })
    },
    [items, pendingKeys, session?.user],
  )

  const value = useMemo(
    () => ({ items, loading, error, isSaved, isPending, toggle }),
    [error, isPending, isSaved, items, loading, toggle],
  )

  return <SavedItemsContext.Provider value={value}>{children}</SavedItemsContext.Provider>
}

export function useSavedItems() {
  const context = useContext(SavedItemsContext)
  if (!context) throw new Error('useSavedItems must be used within a SavedItemsProvider')
  return context
}
