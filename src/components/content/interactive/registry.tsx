import type { ComponentType } from 'react'
import { OhmsLawCalculator } from './OhmsLawCalculator'
import { BildgroesseCalculator } from './BildgroesseCalculator'
import { AudiogroesseCalculator } from './AudiogroesseCalculator'
import { GewinnverteilungCalculator } from './GewinnverteilungCalculator'
import { KrankenversicherungCalculator } from './KrankenversicherungCalculator'

/**
 * Registry of reusable interactive widgets, keyed by the string a Topic's
 * `InteractiveBlock.component` references. Add a lesson-specific widget by
 * dropping a new component in this folder (built on `CalculatorShell`/
 * `NumberField`) and registering it here — no changes to `LessonContent` or
 * any page are needed.
 */
export const interactiveRegistry: Record<string, ComponentType> = {
  'ohms-law-calculator': OhmsLawCalculator,
  'bildgroesse-calculator': BildgroesseCalculator,
  'audiogroesse-calculator': AudiogroesseCalculator,
  'gewinnverteilung-calculator': GewinnverteilungCalculator,
  'krankenversicherung-calculator': KrankenversicherungCalculator,
}
