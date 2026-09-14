import { useContext } from 'react'
import { LanguageContext, type LanguageContextValue } from './context'

export const useLang = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLang must be used inside <LanguageProvider>')
  }
  return ctx
}
