'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const lines = [
    { text: '> const developer = {', type: 'keyword' },
    { text: '    name: "José David Ibargüen",', type: 'string' },
    { text: '    role: "Backend Java & Full Stack Developer",', type: 'string' },
    { text: '    location: "Medellín, Colombia",', type: 'string' },
    { text: '    status: "Ready to build 🚀"', type: 'string' },
    { text: '  };', type: 'keyword' },
  ];

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push({ text: '', type: line.type });
          }
          newLines[currentLine] = {
            text: line.text.substring(0, currentChar + 1),
            type: line.type,
          };
          return newLines;
        });
        setCurrentChar(currentChar + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  const renderLine = (line, index) => {
    const text = line.text;
    // Highlight syntax
    const parts = [];
    const stringRegex = /"([^"]*)"/g;
    const keyRegex = /(\w+):/g;
    let lastIndex = 0;

    // Simple highlighting: keys in orange, strings in cyan
    const highlighted = text.replace(
      /("(?:[^"\\]|\\.)*")|(\b\w+)(?=:)|([>{}();,=]|const )/g,
      (match, str, key, symbol) => {
        if (str) return `<span class="text-[var(--accent-cyan)]">${match}</span>`;
        if (key) return `<span class="text-[var(--accent-orange)]">${match}</span>`;
        if (symbol) return `<span class="text-purple-400">${match}</span>`;
        return match;
      }
    );

    return (
      <div key={index} className="font-mono text-sm sm:text-base leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: highlighted }} />
        {index === currentLine && currentLine < lines.length && (
          <span className="inline-block w-2.5 h-5 bg-[var(--accent-cyan)] ml-0.5 animate-blink-cursor align-middle" />
        )}
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--accent-cyan) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--accent-cyan)]/20 animate-float"
            style={{
              width: `${4 + i * 3}px`,
              height: `${4 + i * 3}px`,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Terminal */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-white/30 font-mono">portfolio.js</span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 sm:p-6 min-h-[220px]">
                {displayedLines.map((line, i) => renderLine(line, i))}
                {currentLine >= lines.length && (
                  <div className="mt-2 font-mono text-sm sm:text-base">
                    <span className="text-green-400">{'>'} </span>
                    <span className="inline-block w-2.5 h-5 bg-[var(--accent-cyan)] animate-blink-cursor align-middle" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Side */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--accent-cyan)]/30 bg-[var(--accent-cyan)]/5 mb-6">
              <span className="text-[var(--accent-cyan)] text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              José David
              <br />
              <span className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-orange)] bg-clip-text text-transparent">
                Ibargüen
              </span>
            </h1>

            <p className="text-lg text-[var(--text-primary)]/60 mb-8 max-w-md mx-auto lg:mx-0">
              Backend Java & Full Stack Developer
              <br />
              Medellín, Colombia
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/jose-david-ibarguen-renteria-212734200"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-linkedin"
                className="group flex items-center gap-2 px-6 py-3 bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 rounded-xl text-[var(--accent-cyan)] font-medium hover:bg-[var(--accent-cyan)]/20 hover:shadow-[var(--glow-cyan)] transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {t('hero.cta_linkedin')}
              </a>

              <a
                href="https://github.com/JOELIHNOJR"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-github"
                className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[var(--text-primary)] font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                {t('hero.cta_github')}
              </a>

              <a
                href="/cv-jose-david.pdf"
                download
                id="cta-download-cv"
                className="group flex items-center gap-2 px-6 py-3 bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 rounded-xl text-[var(--accent-orange)] font-medium hover:bg-[var(--accent-orange)]/20 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('hero.cta_cv')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--text-primary)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
