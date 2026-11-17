import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('CV download', () => {
  it('includes a PDF in the public build assets', () => {
    const pdf = readFileSync('public/cv.pdf')
    expect(pdf.subarray(0, 5).toString()).toBe('%PDF-')
  })
})
