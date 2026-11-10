'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#obra', label: 'A OBRA' },
    { href: '#caminho', label: 'O CAMINHO' },
    { href: '#acervo', label: 'O ACERVO' },
    { href: '#oficio', label: 'O OFÍCIO' },
    { href: '#fecho', label: 'O FECHO' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-100 transition-colors duration-300',
        scrolled ? 'bg-[var(--color-concrete-900)]/90' : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="type-display text-[var(--text-h2)] text-[var(--color-bone)]" aria-label="Ruan Trapp - Início">
            RUAN TRAPP
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-mono text-[var(--color-bone-dim)] hover:text-[var(--color-bone)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-[var(--color-bone)] text-[var(--color-bone)] font-semibold rounded transition-colors hover:bg-[var(--color-bone)] hover:text-[var(--color-concrete-900)] type-mono"
              aria-label="Abrir WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Orçamento
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav id="mobile-nav" className="md:hidden py-4 border-t border-[var(--color-concrete-700)] mobile-nav" role="navigation" aria-label="Menu mobile">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block type-display text-[var(--text-h2)] text-[var(--color-bone)] py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/554792242056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-[var(--color-bone)] text-[var(--color-concrete-900)] font-semibold rounded type-mono text-center"
                >
                  Orçamento no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}

        <nav className="no-js md:hidden py-4 border-t border-[var(--color-concrete-700)] mobile-nav" role="navigation" aria-label="Menu mobile (sem JavaScript)">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block type-display text-[var(--text-h2)] text-[var(--color-bone)] py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/554792242056"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-[var(--color-bone)] text-[var(--color-concrete-900)] font-semibold rounded type-mono text-center"
              >
                Orçamento no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
