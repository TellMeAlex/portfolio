import React, { useState, useEffect } from 'react'
import { ThemeToggle } from '../../ui/ThemeToggle'
import { PaletteSelector } from '../../ui/PaletteSelector'
import './Header.css'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      id="navigation"
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo" role="banner" aria-label="Site logo">
          <span className="header__logo-prompt">&gt;</span>
          tellmealex
          <span className="header__logo-cursor">_</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navLinks.map(link => (
              <li key={link.href} className="header__nav-item">
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Controls */}
        <div className="header__controls">
          <PaletteSelector />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="header__menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="header__menu-icon">
            {isMobileMenuOpen ? (
              // Close icon
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="header__backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <nav
            id="mobile-menu"
            className="header__mobile-menu"
            aria-label="Mobile navigation"
          >
            <ul className="header__mobile-menu-list">
              {navLinks.map(link => (
                <li key={link.href} className="header__mobile-menu-item">
                  <a
                    href={link.href}
                    className="header__mobile-menu-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Theme Controls */}
            <div className="header__mobile-controls">
              <PaletteSelector />
              <ThemeToggle />
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
