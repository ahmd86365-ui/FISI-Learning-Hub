import type { AccentKey } from '../types/content'

interface AccentClasses {
  iconBg: string
  iconText: string
  ring: string
  border: string
  glowShadow: string
  text: string
  dot: string
  chipBg: string
  chipText: string
}

export const accentClasses: Record<AccentKey, AccentClasses> = {
  brand: {
    iconBg: 'bg-brand-50 dark:bg-brand-500/10',
    iconText: 'text-brand-600 dark:text-brand-400',
    ring: 'group-hover:ring-brand-200 dark:group-hover:ring-brand-500/30',
    border: 'group-hover:border-brand-300 dark:group-hover:border-brand-500/40',
    glowShadow: 'group-hover:shadow-glow',
    text: 'text-brand-600 dark:text-brand-400',
    dot: 'bg-brand-500',
    chipBg: 'bg-brand-50 dark:bg-brand-500/10',
    chipText: 'text-brand-700 dark:text-brand-300',
  },
  amber: {
    iconBg: 'bg-amber-50 dark:bg-amber-500/10',
    iconText: 'text-amber-600 dark:text-amber-400',
    ring: 'group-hover:ring-amber-200 dark:group-hover:ring-amber-500/30',
    border: 'group-hover:border-amber-300 dark:group-hover:border-amber-500/40',
    glowShadow: 'group-hover:shadow-[0_0_0_1px_rgb(217_119_6/0.12),0_8px_30px_-8px_rgb(217_119_6/0.35)]',
    text: 'text-amber-600 dark:text-amber-400',
    dot: 'bg-amber-500',
    chipBg: 'bg-amber-50 dark:bg-amber-500/10',
    chipText: 'text-amber-700 dark:text-amber-300',
  },
  teal: {
    iconBg: 'bg-teal-50 dark:bg-teal-500/10',
    iconText: 'text-teal-600 dark:text-teal-400',
    ring: 'group-hover:ring-teal-200 dark:group-hover:ring-teal-500/30',
    border: 'group-hover:border-teal-300 dark:group-hover:border-teal-500/40',
    glowShadow: 'group-hover:shadow-[0_0_0_1px_rgb(13_148_136/0.12),0_8px_30px_-8px_rgb(13_148_136/0.35)]',
    text: 'text-teal-600 dark:text-teal-400',
    dot: 'bg-teal-500',
    chipBg: 'bg-teal-50 dark:bg-teal-500/10',
    chipText: 'text-teal-700 dark:text-teal-300',
  },
  rose: {
    iconBg: 'bg-rose-50 dark:bg-rose-500/10',
    iconText: 'text-rose-600 dark:text-rose-400',
    ring: 'group-hover:ring-rose-200 dark:group-hover:ring-rose-500/30',
    border: 'group-hover:border-rose-300 dark:group-hover:border-rose-500/40',
    glowShadow: 'group-hover:shadow-[0_0_0_1px_rgb(225_29_72/0.12),0_8px_30px_-8px_rgb(225_29_72/0.35)]',
    text: 'text-rose-600 dark:text-rose-400',
    dot: 'bg-rose-500',
    chipBg: 'bg-rose-50 dark:bg-rose-500/10',
    chipText: 'text-rose-700 dark:text-rose-300',
  },
}
