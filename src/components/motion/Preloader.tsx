'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { cn } from '@/lib/utils';

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const skipped = sessionStorage.getItem('trapp-intro-skipped');
    if (skipped) {
      setVisible(false);
      return;
    }

    let frame = 0;
    const duration = prefersReducedMotion ? 600 : 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);

      if (p < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setVisible(false);
      }
    };

    frame = requestAnimationFrame(animate);

    const handleSkip = () => {
      cancelAnimationFrame(frame);
      sessionStorage.setItem('trapp-intro-skipped', 'true');
      setVisible(false);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleSkip();
    };

    window.addEventListener('click', handleSkip, { once: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('click', handleSkip);
      window.removeEventListener('keydown', handleKey);
    };
  }, [prefersReducedMotion]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[2000] flex flex-col items-center justify-center',
        'bg-[var(--color-concrete-900)] transition-opacity duration-300'
      )}
      role="alert"
      aria-live="polite"
      aria-label="Carregando portfólio"
    >
      <div className="relative mb-8" aria-hidden="true">
        <svg viewBox="0 0 300 120" className="w-64 h-auto text-[var(--color-purple)]" role="img" aria-label="Ruan Trapp logo gótico roxo">
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Archivo Black, sans-serif" font-size="48" font-weight="900" fill="currentColor">
            RUAN TRAPP
          </text>
        </svg>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-[var(--color-purple)]/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-purple)] rounded-full transition-transform duration-100"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>
      <p className="type-mono text-[var(--color-silver)] text-sm mb-2">Jaraguá do Sul — SC</p>
      <p className="type-mono text-[var(--color-purple)] text-sm mb-6">acendendo a rua</p>
      <button
        onClick={() => {
          sessionStorage.setItem('trapp-intro-skipped', 'true');
          setVisible(false);
        }}
        className="type-mono text-[var(--color-bone-dim)] hover:text-[var(--color-bone)] underline transition-colors px-4 py-2"
        aria-label="Pular abertura"
      >
        pular abertura
      </button>
    </div>
  );
}
