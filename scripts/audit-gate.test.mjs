import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { ALLOWLIST, evaluate, readAudit } from './audit-gate.mjs'

const advisory = (id, title = 'advisory') => ({
  source: 1,
  name: 'pkg',
  title,
  url: `https://github.com/advisories/${id}`,
  severity: 'high',
  range: '*',
})

const report = vulnerabilities => ({ vulnerabilities, metadata: {} })

const write = (dir, name, body) => {
  const path = join(dir, name)
  writeFileSync(path, JSON.stringify(body))
  return path
}

describe('dependency audit gate', () => {
  it('passes when production is clean and the only high is an allowlisted advisory', () => {
    const allowed = ALLOWLIST[0].ghsa
    const result = evaluate({
      full: report({ picomatch: { severity: 'high', isDirect: false, via: [advisory(allowed)], effects: [] } }),
      production: report({}),
    })
    expect(result.ok).toBe(true)
    expect(result.exempted.map(f => f.ghsa)).toEqual([allowed])
    expect(result.unexempted).toEqual([])
  })

  it('fails on a high/critical advisory that is not allowlisted', () => {
    const result = evaluate({
      full: report({
        undici: { severity: 'critical', isDirect: false, via: [advisory('GHSA-aaaa-bbbb-cccc')], effects: [] },
      }),
      production: report({}),
    })
    expect(result.ok).toBe(false)
    expect(result.unexempted.map(f => f.ghsa)).toEqual(['GHSA-aaaa-bbbb-cccc'])
  })

  it('fails on any high/critical in production even when dev findings are allowlisted', () => {
    const result = evaluate({
      full: report({}),
      production: report({
        zod: { severity: 'high', isDirect: false, via: [advisory('GHSA-dddd-eeee-ffff')], effects: [] },
      }),
    })
    expect(result.ok).toBe(false)
    expect(result.productionBlocking.map(f => f.ghsa)).toEqual(['GHSA-dddd-eeee-ffff'])
  })

  it('fails a high package whose dependent chain carries no advisory id', () => {
    const result = evaluate({
      full: report({ mystery: { severity: 'high', isDirect: true, via: ['something'], effects: [] } }),
      production: report({}),
    })
    expect(result.ok).toBe(false)
    expect(result.unexempted[0].ghsa).toBe('UNRESOLVED:mystery')
  })

  it('attributes a dependent package to the advisory behind it', () => {
    const allowed = ALLOWLIST[0].ghsa
    const result = evaluate({
      full: report({
        picomatch: { severity: 'high', isDirect: false, via: [advisory(allowed, 'origin')], effects: ['vite'] },
        vite: { severity: 'high', isDirect: true, via: ['picomatch'], effects: [] },
        vitest: { severity: 'high', isDirect: true, via: ['picomatch'], effects: [] },
      }),
      production: report({}),
    })
    expect(result.ok).toBe(true)
    expect(result.unexempted).toEqual([])
    expect(result.exempted).toHaveLength(1)
    expect(result.exempted[0].packages).toEqual(['picomatch', 'vite', 'vitest'])
  })

  it('ignores moderate and low advisories', () => {
    const result = evaluate({
      full: report({
        minimatch: { severity: 'moderate', isDirect: false, via: [advisory('GHSA-xxxx-yyyy-zzzz')], effects: [] },
      }),
      production: report({}),
    })
    expect(result.ok).toBe(true)
  })

  it('fails closed when an input is missing or is not an audit report', () => {
    const dir = mkdtempSync(join(tmpdir(), 'audit-gate-'))
    const notAudit = write(dir, 'bad.json', { hello: 'world' })
    expect(() => readAudit(notAudit)).toThrow(/not an npm audit report/)
    expect(() => readAudit(join(dir, 'absent.json'))).toThrow()
  })
})
