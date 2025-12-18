/**
 * Date Utilities
 */

/**
 * Gets the current year
 * @returns {number} The current year
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * Calculates years of experience from a start date to now
 * @param {string} startDate - ISO format date string (YYYY-MM or YYYY-MM-DD)
 * @returns {number} Full years of experience
 */
export const calculateYearsOfExperience = (startDate: string): number => {
  const start = new Date(startDate)
  const now = new Date()

  let years = now.getFullYear() - start.getFullYear()
  const monthDiff = now.getMonth() - start.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--
  }

  return years
}
