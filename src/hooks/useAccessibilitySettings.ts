/**
 * useAccessibilitySettings Hook
 * Manages user accessibility preferences
 * - Reduced motion toggle
 * - Keyboard shortcuts visibility
 * - Persists to localStorage
 */
import { useState, useEffect } from 'react'

interface AccessibilitySettings {
  reducedMotion: boolean
  showKeyboardHints: boolean
}

const STORAGE_KEY = 'accessibility-settings'

const getDefaultSettings = (): AccessibilitySettings => {
  // Check system preference for reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  return {
    reducedMotion: prefersReducedMotion,
    showKeyboardHints: true,
  }
}

const loadSettings = (): AccessibilitySettings => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.warn('Failed to load accessibility settings:', error)
  }
  return getDefaultSettings()
}

const saveSettings = (settings: AccessibilitySettings): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch (error) {
    console.warn('Failed to save accessibility settings:', error)
  }
}

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(loadSettings)

  // Apply settings to document
  useEffect(() => {
    // Apply reduced motion preference
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion')
    } else {
      document.documentElement.classList.remove('reduce-motion')
    }

    // Apply keyboard hints visibility
    if (settings.showKeyboardHints) {
      document.documentElement.classList.add('show-keyboard-hints')
    } else {
      document.documentElement.classList.remove('show-keyboard-hints')
    }

    // Save to localStorage
    saveSettings(settings)
  }, [settings])

  // Listen to system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (event: MediaQueryListEvent) => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: event.matches,
      }))
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleReducedMotion = () => {
    setSettings(prev => ({
      ...prev,
      reducedMotion: !prev.reducedMotion,
    }))
  }

  const toggleKeyboardHints = () => {
    setSettings(prev => ({
      ...prev,
      showKeyboardHints: !prev.showKeyboardHints,
    }))
  }

  const resetSettings = () => {
    setSettings(getDefaultSettings())
  }

  return {
    settings,
    toggleReducedMotion,
    toggleKeyboardHints,
    resetSettings,
  }
}
