/**
 * Timeline — `$ git log --oneline` with filter chips (todo · trabajo · charlas ·
 * proyectos), the animated spine, and the sticky CV download card.
 */
import React, { useMemo, useState } from 'react'
import { useLang } from '@/i18n'
import {
  KIND_COLORS,
  TIMELINE,
  TIMELINE_FILTERS,
  type TimelineFilter,
} from '@/content/portfolio'
import { Eyebrow } from '@/core/ui/Eyebrow'
import { CvCard } from './CvCard'
import './Timeline.css'

const YEARS = '2021 → 2026'

export const Timeline: React.FC = () => {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState<TimelineFilter>('all')
  const es = lang === 'es'

  const entries = useMemo(
    () => TIMELINE.filter(e => filter === 'all' || e.kind === filter),
    [filter]
  )
  const counts = useMemo(
    () =>
      TIMELINE_FILTERS.map(f => ({
        ...f,
        count:
          f.id === 'all'
            ? TIMELINE.length
            : TIMELINE.filter(e => e.kind === f.id).length,
      })),
    []
  )

  const command =
    filter === 'all'
      ? 'git log --oneline'
      : `git log --oneline --grep=${filter}`

  return (
    <section
      id="cronologia"
      className="timeline"
      aria-labelledby="timeline-title"
      tabIndex={-1}
    >
      <div className="timeline__main">
        <div className="timeline__header">
          <div className="timeline__command">
            <Eyebrow as="h2" id="timeline-title" plain>
              $ {command}
            </Eyebrow>
            <span className="timeline__count" aria-live="polite">
              {entries.length} commits · {YEARS}
            </span>
          </div>
          <div
            className="timeline__filters"
            role="group"
            aria-label={es ? 'Filtrar cronología' : 'Filter timeline'}
          >
            {counts.map(f => {
              const active = f.id === filter
              return (
                <button
                  key={f.id}
                  type="button"
                  className={`filter-chip ${active ? 'is-active' : ''}`}
                  style={
                    { '--chip-color': KIND_COLORS[f.id] } as React.CSSProperties
                  }
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                >
                  <span className="filter-chip__dot" aria-hidden="true" />
                  {t(f.label)}
                  <span className="filter-chip__count">{f.count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="timeline__rail">
          <span className="timeline__line" aria-hidden="true" />
          <span className="timeline__spine" aria-hidden="true" />
          <ol className="timeline__list" role="list">
            {entries.map(entry => (
              <li
                key={entry.id}
                className="commit"
                style={
                  {
                    '--commit-color': KIND_COLORS[entry.kind],
                  } as React.CSSProperties
                }
              >
                <span className="commit__dot" aria-hidden="true" />
                <span className="commit__date">{entry.date}</span>
                <div className="commit__body">
                  <span className="commit__title">{t(entry.title)}</span>
                  <span className="commit__desc">{t(entry.desc)}</span>
                </div>
                <span className="commit__kind">{t(entry.kindLabel)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <CvCard />
    </section>
  )
}
