import React from 'react'
import './SkipLinks.css'

interface SkipLink {
  href: string
  label: string
}

interface SkipLinksProps {
  links?: SkipLink[]
}

const defaultLinks: SkipLink[] = [
  { href: '#main-content', label: 'Saltar al contenido principal' },
  { href: '#navigation', label: 'Saltar a la navegación' },
]

export const SkipLinks: React.FC<SkipLinksProps> = ({
  links = defaultLinks,
}) => {
  return (
    <div className="skip-links">
      {links.map(link => (
        <a key={link.href} href={link.href} className="skip-link">
          {link.label}
        </a>
      ))}
    </div>
  )
}
