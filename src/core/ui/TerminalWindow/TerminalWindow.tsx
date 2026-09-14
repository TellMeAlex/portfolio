/**
 * TerminalWindow — macOS-style window chrome (traffic lights + title) wrapping
 * terminal-looking content. Used by the hero terminal and the chat panel.
 */
import React from 'react'
import './TerminalWindow.css'

interface TerminalWindowProps {
  title: React.ReactNode
  /** Optional right-aligned slot in the title bar (e.g. "online" status). */
  status?: React.ReactNode
  /** Border tint: blue (default) or green for the agent panel. */
  tone?: 'blue' | 'green'
  className?: string
  children: React.ReactNode
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title,
  status,
  tone = 'blue',
  className = '',
  children,
}) => (
  <div
    className={`terminal-window terminal-window--${tone} ${className}`.trim()}
  >
    <div className="terminal-window__bar">
      <span className="terminal-window__dots" aria-hidden="true">
        <span className="terminal-window__dot terminal-window__dot--red" />
        <span className="terminal-window__dot terminal-window__dot--amber" />
        <span className="terminal-window__dot terminal-window__dot--green" />
      </span>
      <span className="terminal-window__title">{title}</span>
      {status && <span className="terminal-window__status">{status}</span>}
    </div>
    {children}
  </div>
)
