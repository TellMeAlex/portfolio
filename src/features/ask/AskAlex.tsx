/**
 * AskAlex — `$ ask alex`: a terminal-styled chat that answers questions about
 * Alejandro using only the facts on this page.
 */
import React, { useEffect, useRef } from 'react'
import { useLang } from '@/i18n'
import { ASK } from '@/content/portfolio'
import { Eyebrow } from '@/core/ui/Eyebrow'
import { TerminalWindow } from '@/core/ui/TerminalWindow'
import { MAX_QUESTION_LENGTH, useAskAlex } from './useAskAlex'
import './AskAlex.css'

export const AskAlex: React.FC = () => {
  const { t, lang } = useLang()
  const { messages, input, setInput, busy, ask } = useAskAlex(
    lang,
    t(ASK.error)
  )
  const logRef = useRef<HTMLDivElement>(null)
  const es = lang === 'es'

  // Keep the newest message in view as the conversation grows.
  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, busy])

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    void ask()
  }

  return (
    <section id="ask" className="ask" aria-labelledby="ask-title" tabIndex={-1}>
      <div className="ask__intro">
        <Eyebrow color="var(--color-kind-project)">$ ask alex</Eyebrow>
        <h2 id="ask-title" className="ask__title">
          {t(ASK.title)}
        </h2>
        <p className="ask__lead">{t(ASK.intro)}</p>
        <div className="ask__suggestions">
          <span className="ask__try">{t(ASK.tryLabel)}</span>
          <div className="ask__chips">
            {ASK.suggestions.map(s => (
              <button
                key={s.en}
                type="button"
                className="ask__chip"
                onClick={() => void ask(t(s))}
                disabled={busy}
              >
                {t(s)}
              </button>
            ))}
          </div>
        </div>
        <p className="ask__footnote">{t(ASK.footnote)}</p>
      </div>

      <TerminalWindow
        tone="green"
        className="ask__window"
        title={<>alex-agent — {t(ASK.windowTitle)}</>}
        status="online"
      >
        <div
          ref={logRef}
          className="chat__log"
          role="log"
          aria-live="polite"
          aria-label={
            es ? 'Conversación con el agente' : 'Conversation with the agent'
          }
        >
          {messages.length === 0 && (
            <div className="chat__msg chat__msg--bot">
              <span className="chat__prompt" aria-hidden="true">
                $
              </span>
              <span className="chat__text">{t(ASK.greeting)}</span>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`chat__msg chat__msg--${m.role}`}>
              <span className="chat__prompt" aria-hidden="true">
                {m.role === 'user' ? '>' : '$'}
              </span>
              <span className="chat__text">{m.text}</span>
            </div>
          ))}
          {busy && (
            <div className="chat__msg chat__msg--busy">
              <span className="chat__prompt" aria-hidden="true">
                $
              </span>
              <span>{t(ASK.busy)}</span>
              <span className="chat__cursor" aria-hidden="true" />
            </div>
          )}
        </div>
        <form className="chat__input-row" onSubmit={onSubmit}>
          <span className="chat__input-prompt" aria-hidden="true">
            &gt;
          </span>
          <label htmlFor="ask-input" className="sr-only">
            {t(ASK.placeholder)}
          </label>
          <input
            id="ask-input"
            className="chat__input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={t(ASK.placeholder)}
            maxLength={MAX_QUESTION_LENGTH}
            autoComplete="off"
            disabled={busy}
          />
          <button
            type="submit"
            className="chat__send"
            disabled={busy || input.trim().length === 0}
          >
            {t(ASK.send)}
          </button>
        </form>
      </TerminalWindow>
    </section>
  )
}
