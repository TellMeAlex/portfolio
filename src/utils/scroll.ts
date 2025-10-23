/**
 * Scroll Utilities for smooth navigation
 * Provides accessible smooth scrolling to sections
 */

/**
 * Smooth scroll to a section by ID
 * @param sectionId - ID of the target section (without #)
 * @param offset - Optional offset from top in pixels (default: 80 for sticky header)
 */
export const scrollToSection = (
  sectionId: string,
  offset: number = 80
): void => {
  const element = document.getElementById(sectionId)

  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`)
    return
  }

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })

  // Set focus to the element for keyboard navigation accessibility
  // Use setTimeout to wait for scroll to complete
  setTimeout(() => {
    element.focus({ preventScroll: true })
  }, 500)
}

/**
 * Scroll to top of page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
