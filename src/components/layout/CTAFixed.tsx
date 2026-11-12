'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function CTAFixed() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / docHeight;
      setVisible(progress > 0.2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={cn('fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-opacity duration-300', 'md:flex-row')} role="navigation" aria-label="Ações rápidas">
      <a
        href="https://wa.me/554792242056"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg',
          'shadow-lg hover:bg-green-700 transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-concrete-900)]'
        )}
        aria-label="Falar no WhatsApp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href="https://instagram.com/ruantrapp"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-2 px-4 py-3 bg-[var(--color-concrete-800)] text-[var(--color-bone)] font-semibold rounded-lg border border-[var(--color-concrete-700)]',
          'shadow-lg hover:border-[var(--color-silver)] transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-concrete-900)]'
        )}
        aria-label="Instagram @ruantrapp"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <span className="hidden sm:inline">Instagram</span>
      </a>
    </div>
  );
}
