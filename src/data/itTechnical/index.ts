import { Cpu } from 'lucide-react'
import type { Module } from '../../types/content'
import { itTechnicalTopics } from './lessons'

export { itTechnicalChapters } from './chapters'

export const itTechnicalModule: Module = {
  id: 'mod-it-technical',
  slug: 'it-technical',
  subjectSlug: 'it',
  title: 'IT Technical',
  description: 'Hardware, Speicher, Stromversorgung, Firmware und Windows – mit Rechenwegen und Kontrollfragen aus dem Unterricht.',
  icon: Cpu,
  order: 4,
  topics: itTechnicalTopics,
}
