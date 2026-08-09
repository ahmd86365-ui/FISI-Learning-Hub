import { Cpu, Landmark, FileCheck2 } from 'lucide-react'
import type { ExamSection } from '../types/content'

export const examSections: ExamSection[] = [
  {
    id: 'ap',
    title: 'IT – AP1 / AP2',
    description: 'Abschlussprüfung Teil 1 und Teil 2 für Fachinformatiker für Systemintegration.',
    accent: 'brand',
    icon: Cpu,
    status: 'coming-soon',
  },
  {
    id: 'wg',
    title: 'Wirtschaft & Gesellschaft',
    description: 'Prüfungsrelevante Themen aus Wirtschafts- und Sozialkunde.',
    accent: 'amber',
    icon: Landmark,
    status: 'coming-soon',
  },
  {
    id: 'ehk',
    title: 'EHK-Prüfungen',
    description: 'Vorbereitung auf die Einsatzgebietsbezogenen Handlungskompetenzen.',
    accent: 'rose',
    icon: FileCheck2,
    status: 'coming-soon',
  },
]
