'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function EducationSection() {
  const { t } = useLanguage();
  const degrees = t('education.degrees');
  const languages = t('education.languages');

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,107,53,0.04)_0%,transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
              {t('education.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-cyan)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Degrees */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[var(--surface-card)] rounded-2xl border border-white/5 p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent-cyan)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {t('education.title')}
                </h3>
              </div>

              <div className="space-y-4">
                {Array.isArray(degrees) &&
                  degrees.map((deg, i) => (
                    <div
                      key={i}
                      className="pl-4 border-l-2 border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] transition-colors duration-300"
                    >
                      <h4 className="text-[var(--text-primary)] font-medium text-sm sm:text-base">
                        {deg.title}
                      </h4>
                      <p className="text-[var(--text-primary)]/50 text-sm">
                        {deg.institution} · {deg.year}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[var(--surface-card)] rounded-2xl border border-white/5 p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-orange)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--accent-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {t('education.languages_title')}
                </h3>
              </div>

              <div className="space-y-4">
                {Array.isArray(languages) &&
                  languages.map((lng, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors duration-300">
                      <span className="text-[var(--text-primary)] font-medium">{lng.lang}</span>
                      <span className="px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] text-sm font-medium">
                        {lng.level}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
