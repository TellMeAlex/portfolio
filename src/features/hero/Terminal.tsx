/**
 * Terminal — the hero's self-typing shell session.
 * Types each command character by character, prints its output, pauses,
 * and loops. Under prefers-reduced-motion the full transcript renders at once.
 */
import React, { useEffect, useState } from 'react'
import { useLang } from '@/i18n'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { TERMINAL_COMMANDS } from '@/content/portfolio'
import { TerminalWindow } from '@/core/ui/TerminalWindow'
import './Terminal.css'

const TICK_MS = 70
/** Ticks to hold after a command is fully typed before printing its output. */
const HOLD_TICKS = 8
/** Ticks to hold after the last command before the loop restarts. */
const RESTART_TICKS = 40

interface TypingState {
  step: number
  chars: number
  done: number[]
}

const finished: TypingState = {
  step: TERMINAL_COMMANDS.length,
  chars: 0,
  done: TERMINAL_COMMANDS.map((_, i) => i),
}

export const Terminal: React.FC = () => {
  const { t, lang } = useLang()
  const reducedMotion = usePrefersReducedMotion()
  const [typing, setTyping] = useState<TypingState>({
    step: 0,
    chars: 0,
    done: [],
  })

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setTyping(({ step, chars, done }) => {
        if (step >= TERMINAL_COMMANDS.length) {
          return chars > RESTART_TICKS
            ? { step: 0, chars: 0, done: [] }
            : { step, chars: chars + 1, done }
        }
        const cmdLength = TERMINAL_COMMANDS[step].cmd.length
        if (chars < cmdLength + HOLD_TICKS) {
          return { step, chars: chars + 1, done }
        }
        return { step: step + 1, chars: 0, done: [...done, step] }
      })
    }, TICK_MS)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  const { step, chars, done } = reducedMotion ? finished : typing
  const current =
    step < TERMINAL_COMMANDS.length
      ? TERMINAL_COMMANDS[step].cmd.slice(0, chars)
      : ''

  return (
    <TerminalWindow title="~/tellmealex — zsh">
      <div
        className="terminal"
        role="img"
        aria-label={
          lang === 'es'
            ? 'Terminal animada con un resumen de quién soy'
            : 'Animated terminal summarising who I am'
        }
      >
        {done.map(i => (
          <React.Fragment key={`cmd-${i}`}>
            <div className="terminal__line">
              <span className="terminal__prompt">$</span>
              <span className="terminal__cmd">{TERMINAL_COMMANDS[i].cmd}</span>
            </div>
            {TERMINAL_COMMANDS[i].out.map((line, j) => (
              <div
                key={`out-${i}-${j}`}
                className="terminal__line"
                style={{ color: line.color }}
              >
                {t(line.text)}
              </div>
            ))}
          </React.Fragment>
        ))}
        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__cmd">{current}</span>
          <span className="terminal__cursor" aria-hidden="true" />
        </div>
      </div>
    </TerminalWindow>
  )
}
