/**
 * PaletteSelector Component
 * Interactive color palette selector
 */
import React, { useState } from 'react'
import { usePalette, type PaletteType } from '@/hooks/usePalette'
import './PaletteSelector.css'

const PALETTES = [
  {
    id: 'default' as PaletteType,
    name: 'Navy & Cyan',
    description: 'Original (Current)',
    colors: { primary: '#0a192f', accent: '#64ffda' },
  },
  {
    id: 'purple' as PaletteType,
    name: 'Deep Purple',
    description: 'Innovación IA',
    colors: { primary: '#1a0b2e', accent: '#6c5ce7' },
  },
  {
    id: 'emerald' as PaletteType,
    name: 'Dark Slate',
    description: 'Profesional',
    colors: { primary: '#0f1419', accent: '#10b981' },
  },
  {
    id: 'amber' as PaletteType,
    name: 'Midnight Blue',
    description: 'Premium',
    colors: { primary: '#0c1e2e', accent: '#f59e0b' },
  },
  {
    id: 'coral' as PaletteType,
    name: 'Graphite',
    description: 'Moderno',
    colors: { primary: '#18181b', accent: '#fb7185' },
  },
]

export const PaletteSelector: React.FC = () => {
  const { palette, changePalette } = usePalette()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSelector = () => {
    setIsOpen(!isOpen)
  }

  const handlePaletteChange = (paletteId: PaletteType) => {
    changePalette(paletteId)
    setIsOpen(false)
  }

  const currentPalette = PALETTES.find(p => p.id === palette) || PALETTES[0]

  return (
    <div className="palette-selector">
      <button
        className="palette-selector-trigger"
        onClick={toggleSelector}
        aria-label="Select color palette"
        aria-expanded={isOpen}
      >
        <span className="palette-icon">🎨</span>
        <span className="palette-label">{currentPalette.name}</span>
      </button>

      {isOpen && (
        <div className="palette-dropdown">
          <div className="palette-dropdown-header">
            <h3>Elige tu paleta</h3>
            <button
              className="palette-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close palette selector"
            >
              ✕
            </button>
          </div>

          <div className="palette-list">
            {PALETTES.map(p => (
              <button
                key={p.id}
                className={`palette-option ${palette === p.id ? 'palette-option--active' : ''}`}
                onClick={() => handlePaletteChange(p.id)}
                aria-pressed={palette === p.id}
              >
                <div className="palette-preview">
                  <div
                    className="palette-preview-color"
                    style={{ backgroundColor: p.colors.primary }}
                  />
                  <div
                    className="palette-preview-color"
                    style={{ backgroundColor: p.colors.accent }}
                  />
                </div>
                <div className="palette-info">
                  <div className="palette-name">{p.name}</div>
                  <div className="palette-description">{p.description}</div>
                </div>
                {palette === p.id && (
                  <span className="palette-checkmark" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="palette-footer">
            <p className="palette-note">
              💡 Las paletas se sincronizan con el modo claro/oscuro
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
