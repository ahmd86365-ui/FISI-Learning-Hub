import { Cpu, Landmark, Languages, GraduationCap } from 'lucide-react'
import type { Subject } from '../types/content'

export const subjects: Subject[] = [
  {
    slug: 'it',
    name: 'IT',
    tagline: 'Dein zentraler Lernbereich',
    description: 'Dein zentraler Lernbereich für Fachinformatiker für Systemintegration.',
    path: '/it',
    accent: 'brand',
    icon: Cpu,
  },
  {
    slug: 'wirtschaft',
    name: 'Wirtschaft & Gesellschaft',
    tagline: 'Ausbildung im Kontext',
    description: 'Wichtige Themen rund um Wirtschaft, Gesellschaft und Ausbildung.',
    path: '/wirtschaft-gesellschaft',
    accent: 'amber',
    icon: Landmark,
  },
  {
    slug: 'english',
    name: 'IT English',
    tagline: 'Technical English',
    description: 'Technisches Englisch für die IT-Praxis.',
    path: '/it-english',
    accent: 'teal',
    icon: Languages,
  },
  {
    slug: 'pruefung',
    name: 'Prüfungsvorbereitung',
    tagline: 'Gezielt vorbereiten',
    description: 'Bereite dich gezielt auf deine Prüfungen vor.',
    path: '/pruefungsvorbereitung',
    accent: 'rose',
    icon: GraduationCap,
  },
]

export const getSubjectBySlug = (slug: string) => subjects.find((s) => s.slug === slug)
