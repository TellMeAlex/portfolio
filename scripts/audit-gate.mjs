/**
 * Dependency gate for the `dependency-scan` CI job.
 *
 * Two rules, both fail-closed:
 *   1. No high/critical advisory may affect a *production* dependency.
 *   2. No high/critical advisory may appear in the full (incl. dev) audit unless
 *      it is on ALLOWLIST below.
 *
 * ALLOWLIST exists only for advisories with no published patched version
 * ("Patched versions: None" in the advisory), where no upgrade can clear them.
 * Each entry names the GHSA, the dev-only packages that pull it in, and the date
 * it was reviewed. Delete an entry as soon as a patched release exists.
 *
 * Usage: node scripts/audit-gate.mjs <full-audit.json> <production-audit.json>
 */
import { readFileSync } from 'node:fs'

export const ALLOWLIST = [
  {
    ghsa: 'GHSA-fc5q-39xc-vjpf',
    title: 'picomatch vulnerable to ReDoS through single-branch repeated extglobs',
    devOnlyVia: ['vite', 'vitest', 'lint-staged', '@typescript-eslint/parser'],
    reason:
      'Advisory covers every picomatch release (<= 4.0.7) and has no patched version; reached only through build/test/lint tooling, never at runtime.',
    reviewed: '2026-11-18',
  },
]

const HIGH = new Set(['high', 'critical'])

/** Read an `npm audit --json` report. Throws when the file is missing or not audit JSON. */
export const readAudit = path => {
  const report = JSON.parse(readFileSync(path, 'utf8'))
  if (typeof report !== 'object' || report === null || !('vulnerabilities' in report)) {
    throw new Error(`${path}: not an npm audit report`)
  }
  return report
}

const advisoryId = via => {
  const id = String(via?.url ?? '')
    .split('/')
    .filter(Boolean)
    .pop()
  return id?.startsWith('GHSA-') ? id : null
}

/**
 * Advisories behind one package. `via` holds either advisory objects or the names
 * of vulnerable dependencies, so a dependent package is followed to its origin —
 * that is why a high `vite` is really the picomatch advisory.
 */
const advisoriesBehind = (report, name, seen = new Set()) => {
  const entry = report.vulnerabilities?.[name]
  if (!entry || seen.has(name)) return []
  seen.add(name)
  const found = []
  for (const via of entry.via ?? []) {
    if (typeof via === 'object' && via !== null) {
      const id = advisoryId(via)
      if (id) found.push({ ghsa: id, title: via.title })
    } else if (typeof via === 'string') {
      found.push(...advisoriesBehind(report, via, seen))
    }
  }
  return found
}

/** GHSA ids raised by high/critical packages, with the packages that raise them. */
export const highFindings = report => {
  const findings = new Map()
  for (const [name, entry] of Object.entries(report.vulnerabilities ?? {})) {
    if (!HIGH.has(entry?.severity)) continue
    const behind = advisoriesBehind(report, name)
    // A high package with no identifiable advisory is a finding of its own.
    if (behind.length === 0) {
      const id = `UNRESOLVED:${name}`
      findings.set(id, {
        ghsa: id,
        title: `high severity on ${name} without an advisory id`,
        packages: new Set([name]),
      })
      continue
    }
    for (const { ghsa, title } of behind) {
      if (!findings.has(ghsa)) findings.set(ghsa, { ghsa, title, packages: new Set() })
      findings.get(ghsa).packages.add(name)
    }
  }
  return [...findings.values()].map(f => ({ ...f, packages: [...f.packages].sort() }))
}

/**
 * Evaluate both reports.
 * @returns {{ ok: boolean, productionBlocking: object[], unexempted: object[], exempted: object[] }}
 */
export const evaluate = ({ full, production, allowlist = ALLOWLIST }) => {
  const allowed = new Set(allowlist.map(entry => entry.ghsa))
  const productionBlocking = highFindings(production)
  const fullFindings = highFindings(full)
  return {
    ok: productionBlocking.length === 0 && fullFindings.every(f => allowed.has(f.ghsa)),
    productionBlocking,
    unexempted: fullFindings.filter(f => !allowed.has(f.ghsa)),
    exempted: fullFindings.filter(f => allowed.has(f.ghsa)),
  }
}

const main = argv => {
  const [fullPath, productionPath] = argv
  if (!fullPath || !productionPath) {
    console.error('usage: node scripts/audit-gate.mjs <full-audit.json> <production-audit.json>')
    return 1
  }
  let result
  try {
    result = evaluate({
      full: readAudit(fullPath),
      production: readAudit(productionPath),
    })
  } catch (error) {
    console.error(`❌ Dependency gate could not read its input: ${error.message}`)
    return 1
  }

  if (result.productionBlocking.length > 0) {
    console.error('❌ High/critical advisories in production dependencies:')
    for (const f of result.productionBlocking) {
      console.error(`   ${f.ghsa} — ${f.title} (${f.packages.join(', ')})`)
    }
  }
  if (result.unexempted.length > 0) {
    console.error('❌ High/critical advisories that are neither patched nor allowlisted:')
    for (const f of result.unexempted) {
      console.error(`   ${f.ghsa} — ${f.title} (${f.packages.join(', ')})`)
    }
  }
  for (const f of result.exempted) {
    console.log(`⚠️  allowlisted (no patched version): ${f.ghsa} — ${f.title} (${f.packages.join(', ')})`)
  }
  if (!result.ok) {
    console.error('Dependency gate failed.')
    return 1
  }
  console.log('✅ Dependency gate passed: production audit clean, no unexempted high/critical advisories.')
  return 0
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exit(main(process.argv.slice(2)))
}
