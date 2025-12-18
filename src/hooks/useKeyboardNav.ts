/**
 * useKeyboardNav Hook
 * Implements keyboard shortcuts for section navigation
 * Alt+1-6 shortcuts for quick section access
 * WCAG 2.1 AA compliant keyboard navigation
 */
import { useEffect } from 'react'
import { scrollToSection } from '@/utils/scroll'
import { announceNavigation } from '@/utils/screenReader'

interface KeyboardShortcut {
  key: string
  sectionId: string
  label: string
}

const shortcuts: KeyboardShortcut[] = [
  { key: '1', sectionId: 'hero', label: 'Inicio' },
  { key: '2', sectionId: 'about', label: 'Sobre Mí' },
  { key: '3', sectionId: 'experience', label: 'Experiencia' },
  { key: '4', sectionId: 'projects', label: 'Proyectos' },
  { key: '5', sectionId: 'skills', label: 'Skills' },
  { key: '6', sectionId: 'contact', label: 'Contacto' },
  { key: 'A', sectionId: '', label: 'Accesibilidad' }, // Handled in App.tsx
]

/**
 * Custom hook for keyboard navigation
 * Listens for Alt+1-6 shortcuts and scrolls to corresponding sections
 */
export const useKeyboardNav = (): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Alt key (Option on Mac) is pressed
      if (!event.altKey) return

      // Find matching shortcut
      const shortcut = shortcuts.find(s => s.key === event.key)

      if (shortcut) {
        event.preventDefault() // Prevent default browser behavior

        // Show visual feedback
        console.log(
          `%c[Keyboard Nav] Alt+${shortcut.key} → ${shortcut.label}`,
          'color: #64FFDA; font-weight: bold'
        )

        // Scroll to section
        scrollToSection(shortcut.sectionId)

        // Announce to screen readers
        announceNavigation(shortcut.label)
      }
    }

    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}

/**
 * Get available keyboard shortcuts
 * Useful for displaying help or tooltips
 */
export const getKeyboardShortcuts = (): KeyboardShortcut[] => {
  return shortcuts
}
