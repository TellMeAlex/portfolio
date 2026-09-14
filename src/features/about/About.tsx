/**
 * About — the three closing cards: `$ cat proyectos.md`, `$ whoami --verbose`,
 * `$ cat stack.txt` + `$ contact --all`.
 */
import React from 'react'
import { useLang } from '@/i18n'
import { PERSONAL_INFO } from '@/constants/personal'
import { CONTACT_LINKS, PROJECTS, STACK, WHOAMI } from '@/content/portfolio'
import './About.css'

export const About: React.FC = () => {
  const { t, lang } = useLang()
  const es = lang === 'es'

  return (
    <section
      id="sobre-mi"
      className="about"
      aria-label={
        es ? 'Proyectos, sobre mí y contacto' : 'Projects, about and contact'
      }
      tabIndex={-1}
    >
      <article className="about__card">
        <h2 className="about__cmd">$ cat proyectos.md</h2>
        <ul className="about__projects" role="list">
          {PROJECTS.map(p => (
            <li key={p.name}>
              <div className="about__project-name">{p.name}</div>
              <div className="about__project-desc">{t(p.desc)}</div>
            </li>
          ))}
        </ul>
      </article>

      <article className="about__card">
        <h2 className="about__cmd">$ whoami --verbose</h2>
        <p className="about__bio">{t(WHOAMI.bio)}</p>
        <p className="about__note">{t(WHOAMI.note)}</p>
      </article>

      <article className="about__card" id="contacto">
        <h2 className="about__cmd">$ cat stack.txt</h2>
        <ul className="about__stack" role="list">
          {STACK.map(s => (
            <li key={s} className="about__tag">
              {s}
            </li>
          ))}
        </ul>
        <h2 className="about__cmd about__cmd--push">$ contact --all</h2>
        <ul className="about__contacts" role="list">
          {CONTACT_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="about__contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">{link.icon}</span> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="about__contact"
            >
              <span aria-hidden="true">✉️</span> {PERSONAL_INFO.contact.email}
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}
