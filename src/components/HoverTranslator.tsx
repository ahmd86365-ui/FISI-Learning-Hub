import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePreferences } from '../contexts/PreferencesContext'
import { dictionary } from '../data/dictionary'

interface TooltipState {
  word: string
  translation: string
  x: number
  y: number
  visible: boolean
}

const IGNORED_TAGS = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'CODE', 'PRE', 'SVG']

export function HoverTranslator() {
  const { translationEnabled } = usePreferences()
  const [tooltip, setTooltip] = useState<TooltipState>({ word: '', translation: '', x: 0, y: 0, visible: false })
  const hoverTimer = useRef<number | null>(null)
  const currentWordRef = useRef<string>('')

  useEffect(() => {
    if (!translationEnabled) {
      setTooltip(prev => ({ ...prev, visible: false }))
      return
    }

    const handlePointerMove = (e: PointerEvent) => {
      // For mobile tap fallback, we can use the pointer type. But here we just handle general pointer.
      // Do not process if dragging or hovering over interactive elements.
      const target = e.target as HTMLElement
      if (!target || target.closest(IGNORED_TAGS.join(',')) || target.isContentEditable) {
        clearTooltip()
        return
      }

      // Feature detection for getting caret position
      let textNode: Node | null = null
      let offset: number = 0

      // standard
      if ('caretPositionFromPoint' in document) {
        const caretPos = (document as any).caretPositionFromPoint(e.clientX, e.clientY)
        if (caretPos) {
          textNode = caretPos.offsetNode
          offset = caretPos.offset
        }
      } 
      // webkit fallback
      else if ('caretRangeFromPoint' in document) {
        const range = (document as any).caretRangeFromPoint(e.clientX, e.clientY)
        if (range) {
          textNode = range.startContainer
          offset = range.startOffset
        }
      }

      if (!textNode || textNode.nodeType !== Node.TEXT_NODE || !textNode.nodeValue) {
        clearTooltip()
        return
      }

      const text = textNode.nodeValue
      
      // 1. Find base word boundaries around the offset
      let baseStart = offset
      while (baseStart > 0 && /\w|ä|ö|ü|Ä|Ö|Ü|ß/.test(text[baseStart - 1])) {
        baseStart--
      }
      
      let baseEnd = offset
      while (baseEnd < text.length && /\w|ä|ö|ü|Ä|Ö|Ü|ß/.test(text[baseEnd])) {
        baseEnd++
      }

      if (baseStart === baseEnd) {
        clearTooltip()
        return
      }

      // 2. Expand outwards up to 4 words left and 4 words right
      const isWordChar = (char: string) => /\w|ä|ö|ü|Ä|Ö|Ü|ß/.test(char)
      const isSpaceOrHyphen = (char: string) => /[ \-]/.test(char)

      let leftBound = baseStart
      let leftWords = 0
      while (leftBound > 0 && leftWords < 4) {
        let temp = leftBound
        while (temp > 0 && isSpaceOrHyphen(text[temp - 1])) temp--
        if (temp === 0 || !isWordChar(text[temp - 1])) break
        while (temp > 0 && isWordChar(text[temp - 1])) temp--
        leftBound = temp
        leftWords++
      }

      let rightBound = baseEnd
      let rightWords = 0
      while (rightBound < text.length && rightWords < 4) {
        let temp = rightBound
        while (temp < text.length && isSpaceOrHyphen(text[temp])) temp++
        if (temp === text.length || !isWordChar(text[temp])) break
        while (temp < text.length && isWordChar(text[temp])) temp++
        rightBound = temp
        rightWords++
      }

      // 3. Extract all tokens in the expanded boundary
      const chunk = text.substring(leftBound, rightBound)
      const tokenRegex = /[\wäöüÄÖÜß]+/g
      let match
      const tokens: { start: number, end: number }[] = []
      while ((match = tokenRegex.exec(chunk)) !== null) {
        tokens.push({ start: leftBound + match.index, end: leftBound + match.index + match[0].length })
      }

      const baseIdx = tokens.findIndex(t => t.start === baseStart)
      if (baseIdx === -1) {
        clearTooltip()
        return
      }

      // 4. Generate sub-phrases from longest to shortest that contain the base word
      let bestMatch: { translation: string, start: number, end: number, word: string } | null = null

      for (let len = tokens.length; len > 0; len--) {
        for (let i = 0; i <= tokens.length - len; i++) {
          const j = i + len - 1
          if (baseIdx >= i && baseIdx <= j) {
            const phraseStart = tokens[i].start
            const phraseEnd = tokens[j].end
            const rawPhrase = text.substring(phraseStart, phraseEnd)
            
            // Normalize spaces/hyphens for robust lookup
            const phraseWord = rawPhrase.replace(/\s+/g, ' ').toLowerCase()

            // Disallow purely numeric words
            if (len === 1 && !Number.isNaN(Number(phraseWord))) continue

            if (dictionary[phraseWord]) {
              bestMatch = {
                translation: dictionary[phraseWord],
                start: phraseStart,
                end: phraseEnd,
                word: phraseWord
              }
              break
            }
          }
        }
        if (bestMatch) break
      }

      if (!bestMatch) {
        clearTooltip()
        return
      }

      const start = bestMatch.start
      const end = bestMatch.end
      const word = bestMatch.word
      const translation = bestMatch.translation

      // If we are already hovering this word, do nothing
      if (currentWordRef.current === word && tooltip.visible) return

      // Debounce the tooltip display
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
      
      hoverTimer.current = window.setTimeout(() => {
        try {
          const range = document.createRange()
          range.setStart(textNode, start)
          range.setEnd(textNode, end)
          const rect = range.getBoundingClientRect()
          
          setTooltip({
            word,
            translation,
            x: rect.left + rect.width / 2,
            y: rect.top - 8,
            visible: true
          })
          currentWordRef.current = word
        } catch (err) {
          // Ignore range errors
        }
      }, 150)
    }

    const handlePointerDown = (e: PointerEvent) => {
      // On mobile tap, let it fall through to handlePointerMove manually to trigger tooltip
      if (e.pointerType === 'touch') {
        handlePointerMove(e)
        // Automatically hide after 3 seconds on touch
        setTimeout(clearTooltip, 3000)
      }
    }

    const clearTooltip = () => {
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
      setTooltip(prev => prev.visible ? { ...prev, visible: false } : prev)
      currentWordRef.current = ''
    }

    const handleScroll = () => clearTooltip()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('scroll', handleScroll)
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current)
    }
  }, [translationEnabled, tooltip.visible])

  if (!tooltip.visible || !tooltip.translation) return null

  return createPortal(
    <div 
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-full rounded-md bg-ink-900 px-3 py-1.5 text-sm font-medium text-white shadow-xl dark:bg-ink-100 dark:text-ink-950"
      style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
      dir="rtl"
    >
      {tooltip.translation}
      <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink-900 dark:border-t-ink-100" />
    </div>,
    document.body
  )
}
