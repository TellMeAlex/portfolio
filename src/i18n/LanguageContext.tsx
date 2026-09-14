/**
 * LanguageProvider — ES/EN toggle for the whole page.
 * The chosen language is persisted in localStorage and mirrored to <html lang>.
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  LanguageContext,
  type Lang,
  type LanguageContextValue,
} from './context'

const STORAGE_KEY = 'tellmealex:lang'

const readStoredLang = (): Lang | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'es' || stored === 'en' ? stored : null
  } catch {
    return null
  }
}

const detectLang = (): Lang => {
  const stored = readStoredLang()
  if (stored) return stored
  const browser = typeof navigator !== 'undefined' ? navigator.language : ''
  return browser.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export const LanguageProvider: React.FC<{
  children: React.ReactNode
  initialLang?: Lang
}> = ({ children, initialLang }) => {
  const [lang, setLangState] = useState<Lang>(() => initialLang ?? detectLang())

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Storage unavailable (private mode, blocked) — the toggle still works in-memory.
    }
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState(prev => (prev === 'es' ? 'en' : 'es')),
    []
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: value => value[lang],
    }),
    [lang, setLang, toggleLang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
