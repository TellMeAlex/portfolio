/**
 * Screen Reader Utilities
 * Helper functions for screen reader announcements
 * WCAG 2.1 AA compliant aria-live regions
 */

/**
 * Announce a message to screen readers
 * Creates or uses existing aria-live region
 * @param message - Message to announce
 * @param priority - 'polite' (default) or 'assertive'
 */
export const announceToScreenReader = (
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void => {
  const liveRegionId = `sr-announce-${priority}`

  // Get or create live region
  let liveRegion = document.getElementById(liveRegionId)

  if (!liveRegion) {
    liveRegion = document.createElement('div')
    liveRegion.id = liveRegionId
    liveRegion.setAttribute('role', 'status')
    liveRegion.setAttribute('aria-live', priority)
    liveRegion.setAttribute('aria-atomic', 'true')
    liveRegion.className = 'sr-only'
    document.body.appendChild(liveRegion)
  }

  // Announce message
  liveRegion.textContent = message

  // Clear after announcement (screen readers will have already read it)
  setTimeout(() => {
    if (liveRegion) {
      liveRegion.textContent = ''
    }
  }, 1000)
}

/**
 * Announce navigation to a section
 * @param sectionName - Name of the section
 */
export const announceNavigation = (sectionName: string): void => {
  announceToScreenReader(`Navegando a ${sectionName}`, 'polite')
}

/**
 * Announce loading state
 * @param isLoading - Whether content is loading
 * @param contentName - Name of the content being loaded
 */
export const announceLoading = (
  isLoading: boolean,
  contentName: string
): void => {
  const message = isLoading
    ? `Cargando ${contentName}`
    : `${contentName} cargado`
  announceToScreenReader(message, 'polite')
}

/**
 * Announce error to screen reader
 * @param errorMessage - Error message
 */
export const announceError = (errorMessage: string): void => {
  announceToScreenReader(`Error: ${errorMessage}`, 'assertive')
}

/**
 * Announce success to screen reader
 * @param successMessage - Success message
 */
export const announceSuccess = (successMessage: string): void => {
  announceToScreenReader(successMessage, 'polite')
}

/**
 * Clean up all screen reader live regions
 * Useful for testing or cleanup
 */
export const cleanupScreenReaderRegions = (): void => {
  const regions = document.querySelectorAll('[aria-live]')
  regions.forEach(region => {
    if (region.id.startsWith('sr-announce-')) {
      region.remove()
    }
  })
}
