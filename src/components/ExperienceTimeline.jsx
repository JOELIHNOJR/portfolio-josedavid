'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  const bullets = t('experience.bullets');
  const bulletIcons = ['🏗️', '⚙️', '🌐', '🔐', '🔗', '📦', '🐳', '🔀'];

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,107,53,0.04)_0%,transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
              {t('experience.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-cyan)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-orange)] to-[var(--accent-cyan)]/20" />

          {/* Header Card */}
          <ScrollReveal delay={0.1}>
            <div className="relative pl-12 sm:pl-20 mb-8">
              {/* Dot */}
              <div className="absolute left-2.5 sm:left-6.5 top-3 w-3 h-3 rounded-full bg-[var(--accent-cyan)] shadow-[var(--glow-cyan)]" />

              <div className="bg-[var(--surface-card)] rounded-2xl border border-white/5 p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {t('experience.role')}
                    </h3>
                    <p className="text-[var(--accent-cyan)] font-medium">
                      {t('experience.company')} · {t('experience.location')}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 text-[var(--accent-orange)] text-sm font-semibold">
                      {t('experience.badge')}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--text-primary)]/50 text-sm">
                  {t('experience.period')}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bullet Points */}
          {Array.isArray(bullets) &&
            bullets.map((bullet, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <div className="relative pl-12 sm:pl-20 mb-4">
                  {/* Small dot */}
                  <div className="absolute left-3 sm:left-7 top-4 w-2 h-2 rounded-full bg-white/20" />

                  <div className="group bg-[var(--surface-card)]/50 hover:bg-[var(--surface-hover)] rounded-xl border border-white/5 hover:border-[var(--accent-cyan)]/20 p-4 transition-all duration-300">
                    <div className="flex gap-3">
                      <span className="text-lg flex-shrink-0 mt-0.5">{bulletIcons[i]}</span>
                      <p className="text-[var(--text-primary)]/75 text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
