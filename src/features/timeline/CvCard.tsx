/**
 * CvCard — `$ cat cv.pdf`: sticky download card next to the timeline.
 */
import React from 'react'
import { useLang } from '@/i18n'
import { CV_CARD, HERO, SITE } from '@/content/portfolio'

export const CvCard: React.FC = () => {
  const { t } = useLang()
  const { pages, sizeKb, revision } = SITE.cvMeta

  return (
    <aside className="cv-card" aria-labelledby="cv-card-title">
      <span className="cv-card__cmd">$ cat cv.pdf</span>
      <div className="cv-card__copy">
        <h3 id="cv-card-title" className="cv-card__title">
          {t(CV_CARD.title)}
        </h3>
        <p className="cv-card__desc">{t(CV_CARD.desc)}</p>
      </div>
      <dl className="cv-card__stats">
        {CV_CARD.stats.map(stat => (
          <div key={stat.value} className="cv-card__stat">
            <dd className="cv-card__stat-value">{stat.value}</dd>
            <dt className="cv-card__stat-label">{t(stat.label)}</dt>
          </div>
        ))}
      </dl>
      <a href={SITE.cvUrl} className="btn btn--primary cv-card__cta" download>
        <span className="btn__icon" aria-hidden="true">
          ↓
        </span>
        {t(HERO.cvLabel)}
      </a>
      <div className="cv-card__meta">
        <span>ES · EN</span>
        <span>
          {pages} {t(CV_CARD.pagesLabel)} · {sizeKb} KB
        </span>
        <span>rev. {revision}</span>
      </div>
    </aside>
  )
}
