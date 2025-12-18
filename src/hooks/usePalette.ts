/**
 * usePalette Hook
 * Manages color palette selection
 */
import { useEffect, useState } from 'react'

export type PaletteType = 'default' | 'purple' | 'emerald' | 'amber' | 'coral'

const PALETTE_KEY = 'portfolio-palette'

export const usePalette = () => {
  const [palette, setPalette] = useState<PaletteType>(() => {
    const savedPalette = localStorage.getItem(PALETTE_KEY)
    return (savedPalette as PaletteType) || 'default'
  })

  useEffect(() => {
    // Apply palette to document
    document.documentElement.setAttribute('data-palette', palette)

    // Save to localStorage
    localStorage.setItem(PALETTE_KEY, palette)
  }, [palette])

  const changePalette = (newPalette: PaletteType) => {
    setPalette(newPalette)
  }

  return {
    palette,
    changePalette,
  }
}
