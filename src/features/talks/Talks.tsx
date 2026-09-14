/**
 * Talks — `$ ls charlas/`: the 9 Código Sin Siesta decks as a 3-column grid
 * with a sort control (reciente · tema · duración).
 */
import React, { useMemo, useState } from 'react'
import { useLang } from '@/i18n'
import { TALKS, talkUrl, type Talk, type TalkFormat } from '@/content/portfolio'
import { Eyebrow } from '@/core/ui/Eyebrow'
import './Talks.css'

type SortKey = 'recent' | 'topic' | 'duration'

const SORTS: Array<{ id: SortKey; label: { es: string; en: string } }> = [
  { id: 'recent', label: { es: 'reciente', en: 'recent' } },
  { id: 'topic', label: { es: 'tema', en: 'topic' } },
  { id: 'duration', label: { es: 'duración', en: 'duration' } },
]

const FORMAT_ORDER: Record<TalkFormat, number> = {
  keynote: 0,
  talk: 1,
  workshop: 2,
}

const sortTalks = (talks: Talk[], sort: SortKey, lang: 'es' | 'en'): Talk[] => {
  const list = [...talks]
  if (sort === 'topic') {
    return list.sort(
      (a, b) =>
        FORMAT_ORDER[a.format] - FORMAT_ORDER[b.format] ||
        a.title[lang].localeCompare(b.title[lang], lang)
    )
  }
  if (sort === 'duration') {
    return list.sort((a, b) => b.minutes - a.minutes)
  }
  return list // content order is already newest-first
}

export const Talks: React.FC = () => {
  const { t, lang } = useLang()
  const [sort, setSort] = useState<SortKey>('recent')
  const talks = useMemo(() => sortTalks(TALKS, sort, lang), [sort, lang])
  const es = lang === 'es'

  return (
    <section
      id="charlas"
      className="talks"
      aria-labelledby="talks-title"
      tabIndex={-1}
    >
      <div className="talks__header">
        <Eyebrow as="h2" id="talks-title">
          $ ls charlas/{' '}
          <span className="talks__count">
            — {TALKS.length} {es ? 'entradas' : 'entries'}
          </span>
        </Eyebrow>
        <div
          className="talks__sort"
          role="group"
          aria-label={es ? 'Ordenar charlas' : 'Sort talks'}
        >
          <span>{es ? 'ordenar: ' : 'sort: '}</span>
          {SORTS.map((s, i) => (
            <React.Fragment key={s.id}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              <button
                type="button"
                className={`talks__sort-btn ${sort === s.id ? 'is-active' : ''}`}
                aria-pressed={sort === s.id}
                onClick={() => setSort(s.id)}
              >
                {t(s.label)}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
      <ul className="talks__grid" role="list">
        {talks.map(talk => (
          <li key={talk.id}>
            <a
              href={talkUrl(talk)}
              className="talk-card"
              style={{ '--talk-color': talk.color } as React.CSSProperties}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="talk-card__top">
                <span className="talk-card__emoji" aria-hidden="true">
                  {talk.emoji}
                </span>
                <span className="talk-card__kind">{t(talk.kind)}</span>
              </div>
              <div className="talk-card__body">
                <h3 className="talk-card__title">{t(talk.title)}</h3>
                <p className="talk-card__desc">{t(talk.desc)}</p>
              </div>
              <div className="talk-card__meta">
                <span>{talk.repo}</span>
                <span>{talk.meta}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
