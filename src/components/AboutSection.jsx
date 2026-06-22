'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    { icon: '☕', label: t('about.highlights.java'), color: 'var(--accent-orange)' },
    { icon: '🍃', label: t('about.highlights.spring'), color: '#6DB33F' },
    { icon: '🟢', label: t('about.highlights.node'), color: '#68A063' },
    { icon: '🐳', label: t('about.highlights.docker'), color: '#2496ED' },
    { icon: '🔗', label: t('about.highlights.rest'), color: 'var(--accent-cyan)' },
    { icon: '🔐', label: t('about.highlights.security'), color: '#FFD700' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,212,255,0.04)_0%,transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-orange)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-[var(--surface-card)] rounded-2xl border border-white/5 p-6 sm:p-8 lg:p-10">
            <p className="text-[var(--text-primary)]/80 text-lg leading-relaxed mb-4">
              {t('about.description')}
            </p>
            <p className="text-[var(--text-primary)]/70 text-lg leading-relaxed mb-8">
              {t('about.description2')}
            </p>

            {/* Highlight Chips */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((h) => (
                <span
                  key={h.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--accent-cyan)]/5 transition-all duration-300"
                >
                  <span>{h.icon}</span>
                  {h.label}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
