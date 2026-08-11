import { Cpu, Landmark } from 'lucide-react'
import type { ExamSection } from '../types/content'

export const examSections: ExamSection[] = [
  {
    id: 'ap',
    title: 'IT – AP1 / AP2',
    description: 'Abschlussprüfung Teil 1 und Teil 2 für Fachinformatiker für Systemintegration.',
    accent: 'brand',
    icon: Cpu,
    status: 'available',
    path: '/pruefungsvorbereitung/it-ap',
  },
  {
    id: 'wg',
    title: 'Wirtschaft & Gesellschaft',
    description: 'Prüfungsrelevante Themen aus Wirtschafts- und Sozialkunde.',
    accent: 'amber',
    icon: Landmark,
    status: 'available',
    path: '/pruefungsvorbereitung/wirtschaft-gesellschaft',
  },
]
