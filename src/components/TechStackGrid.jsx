'use client';

import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from './ScrollReveal';

const techData = {
  backend: [
    { name: 'Java', icon: 'java' },
    { name: 'Spring Boot', icon: 'spring' },
    { name: 'Spring Security', icon: 'spring-security' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Python', icon: 'python' },
    { name: 'C++', icon: 'cpp' },
  ],
  frontend: [
    { name: 'Angular', icon: 'angular' },
    { name: 'React', icon: 'react' },
    { name: 'Ionic', icon: 'ionic' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Bootstrap', icon: 'bootstrap' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Oracle', icon: 'oracle' },
  ],
  devops: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Portainer', icon: 'portainer' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'GitLab', icon: 'gitlab' },
    { name: 'Postman', icon: 'postman' },
    { name: 'MinIO', icon: 'minio' },
  ],
  security: [
    { name: 'OAuth 2.0', icon: 'oauth' },
    { name: 'JWT', icon: 'jwt' },
    { name: 'OTP / 2FA', icon: 'otp' },
    { name: 'RBAC', icon: 'rbac' },
  ],
  methodologies: [
    { name: 'Scrum', icon: 'scrum' },
    { name: 'Agile', icon: 'agile' },
    { name: 'Code Review', icon: 'review' },
    { name: 'OOP', icon: 'oop' },
    { name: 'REST', icon: 'rest' },
    { name: 'Microservices', icon: 'micro' },
    { name: 'CI/CD', icon: 'cicd' },
  ],
};

// SVG icons for technologies
function TechIcon({ name }) {
  const iconMap = {
    java: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.762.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.569 2.082-1.006 3.776-.891 3.776-.891M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.889 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627" />
      </svg>
    ),
    spring: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M21.8 2.2C20.4 3.8 18.4 5 16.2 5.6c-1-.4-2-.6-3.2-.6C8 5 4 9 4 14s4 9 9 9 9-4 9-9c0-2-.6-3.8-1.7-5.3.3-1.5.8-3 1.5-4.5l-.3-.3c-.2-.2-.4-.5-.7-.7zM12 20c-3.3 0-6-2.7-6-6s2.7-6 6-6c.8 0 1.5.2 2.2.4C12.4 10 11.2 12 11.2 14c0 2.2 1 4.2 2.6 5.5-.6.3-1.2.5-1.8.5z" />
      </svg>
    ),
    default: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  return iconMap[name] || iconMap.default;
}

export default function TechStackGrid() {
  const { t } = useLanguage();

  const categories = [
    { key: 'backend', items: techData.backend },
    { key: 'frontend', items: techData.frontend },
    { key: 'databases', items: techData.databases },
    { key: 'devops', items: techData.devops },
    { key: 'security', items: techData.security },
    { key: 'methodologies', items: techData.methodologies },
  ];

  return (
    <section id="tech-stack" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
              {t('techStack.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-orange)] mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {categories.map((cat, catIndex) => (
            <ScrollReveal key={cat.key} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-lg font-semibold text-[var(--accent-cyan)] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan)]" />
                  {t(`techStack.categories.${cat.key}`)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group relative bg-[var(--surface-card)] hover:bg-[var(--surface-hover)] border border-white/5 hover:border-[var(--accent-cyan)]/30 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/5 hover:scale-[1.03] cursor-default"
                    >
                      <div className="text-[var(--text-primary)]/60 group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                        <TechIcon name={item.icon} />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)]/80 group-hover:text-[var(--text-primary)] transition-colors duration-300">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
