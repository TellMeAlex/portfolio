/**
 * AccessibilityPanel Component
 * Provides accessibility settings and keyboard shortcuts reference
 * WCAG 2.1 AA compliant with keyboard navigation support
 */
import React, { useEffect, useRef } from 'react'
import { useAccessibilitySettings } from '@/hooks/useAccessibilitySettings'
import { getKeyboardShortcuts } from '@/hooks/useKeyboardNav'
import './AccessibilityPanel.css'

interface AccessibilityPanelProps {
  isOpen: boolean
  onClose: () => void
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  isOpen,
  onClose,
}) => {
  const { settings, toggleReducedMotion, toggleKeyboardHints, resetSettings } =
    useAccessibilitySettings()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus trap: Focus close button when panel opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [isOpen])

  // Handle Esc key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const shortcuts = getKeyboardShortcuts()

  return (
    <>
      {/* Backdrop */}
      <div
        className="accessibility-panel-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        className="accessibility-panel"
        role="dialog"
        aria-labelledby="accessibility-panel-title"
        aria-modal="true"
      >
        {/* Header */}
        <div className="accessibility-panel__header">
          <h2 id="accessibility-panel-title" className="panel-title">
            <span className="panel-icon" aria-hidden="true">
              ⚙️
            </span>
            Accesibilidad
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="panel-close-button"
            aria-label="Cerrar panel de accesibilidad"
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        {/* Content */}
        <div className="accessibility-panel__content">
          {/* Settings Section */}
          <section className="panel-section">
            <h3 className="section-title">Configuración</h3>

            {/* Reduced Motion Toggle */}
            <div className="setting-item">
              <div className="setting-info">
                <label
                  htmlFor="reduced-motion-toggle"
                  className="setting-label"
                >
                  Reducir movimiento
                </label>
                <p className="setting-description">
                  Desactiva animaciones y transiciones
                </p>
              </div>
              <button
                id="reduced-motion-toggle"
                role="switch"
                aria-checked={settings.reducedMotion}
                onClick={toggleReducedMotion}
                className={`toggle-button ${settings.reducedMotion ? 'toggle-button--active' : ''}`}
                type="button"
              >
                <span className="toggle-slider" />
                <span className="sr-only">
                  {settings.reducedMotion ? 'Activado' : 'Desactivado'}
                </span>
              </button>
            </div>

            {/* Keyboard Hints Toggle */}
            <div className="setting-item">
              <div className="setting-info">
                <label
                  htmlFor="keyboard-hints-toggle"
                  className="setting-label"
                >
                  Mostrar atajos de teclado
                </label>
                <p className="setting-description">
                  Muestra indicadores de atajos al hacer hover
                </p>
              </div>
              <button
                id="keyboard-hints-toggle"
                role="switch"
                aria-checked={settings.showKeyboardHints}
                onClick={toggleKeyboardHints}
                className={`toggle-button ${settings.showKeyboardHints ? 'toggle-button--active' : ''}`}
                type="button"
              >
                <span className="toggle-slider" />
                <span className="sr-only">
                  {settings.showKeyboardHints ? 'Activado' : 'Desactivado'}
                </span>
              </button>
            </div>
          </section>

          {/* Keyboard Shortcuts Section */}
          <section className="panel-section">
            <h3 className="section-title">Atajos de Teclado</h3>
            <p className="section-description">
              Usa Alt + número para navegar rápidamente
            </p>

            <ul className="shortcuts-list">
              {shortcuts.map(shortcut => (
                <li key={shortcut.key} className="shortcut-item">
                  <kbd className="shortcut-key">Alt + {shortcut.key}</kbd>
                  <span className="shortcut-label">{shortcut.label}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Reset Button */}
          <div className="panel-footer">
            <button
              onClick={resetSettings}
              className="reset-button"
              type="button"
            >
              Restablecer configuración
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
