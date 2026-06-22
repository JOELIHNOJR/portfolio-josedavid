'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#tech-stack', label: t('nav.techStack') },
    { href: '#education', label: t('nav.education') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg sm:text-xl font-bold tracking-tight group"
          >
            <span className="text-[var(--accent-cyan)] group-hover:text-white transition-colors duration-300">
              {'<'}
            </span>
            <span className="text-[var(--text-primary)]">JD</span>
            <span className="text-[var(--accent-cyan)] group-hover:text-white transition-colors duration-300">
              {' />'}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-[var(--text-primary)]/70 hover:text-[var(--accent-cyan)] transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <div className="ml-4 flex items-center bg-white/5 rounded-full p-1">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === 'es'
                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                    : 'text-[var(--text-primary)]/60 hover:text-[var(--text-primary)]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                    : 'text-[var(--text-primary)]/60 hover:text-[var(--text-primary)]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile: Lang Toggle + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center bg-white/5 rounded-full p-1">
              <button
                onClick={() => setLang('es')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === 'es'
                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                    : 'text-[var(--text-primary)]/60'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                    : 'text-[var(--text-primary)]/60'
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 bg-[#0A0F1E]/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-[var(--text-primary)]/80 hover:text-[var(--accent-cyan)] hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
