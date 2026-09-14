/**
 * Language context primitives — kept apart from the provider component so the
 * hook file and the component file each export only one kind of thing.
 */
import { createContext } from 'react'

export type Lang = 'es' | 'en'

/** A bilingual value: pick with `t(value)` inside components. */
export type Bi<T = string> = { es: T; en: T }

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** Resolve a bilingual value for the active language. */
  t: <T>(value: Bi<T>) => T
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
