/**
 * Text utilities
 */

/**
 * Strip light markdown (bold/italic markers, inline code, headings, bullets)
 * so agent replies render as plain terminal text.
 */
export const stripMarkdown = (text: string): string =>
  text
    .replace(/\*\*|__|`/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/^\s*[-*]\s+/gm, '· ')
    .trim()
