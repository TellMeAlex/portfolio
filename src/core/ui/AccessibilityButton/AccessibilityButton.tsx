/**
 * AccessibilityButton Component
 * Floating button to open accessibility settings panel
 * WCAG 2.1 AA compliant with keyboard support
 */
import React from 'react'
import './AccessibilityButton.css'

interface AccessibilityButtonProps {
  onClick: () => void
}

export const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="accessibility-button"
      aria-label="Abrir configuración de accesibilidad"
      title="Accesibilidad (Alt + A)"
      type="button"
    >
      <span className="accessibility-button__icon" aria-hidden="true">
        ♿
      </span>
      <span className="accessibility-button__label">Accesibilidad</span>
    </button>
  )
}
