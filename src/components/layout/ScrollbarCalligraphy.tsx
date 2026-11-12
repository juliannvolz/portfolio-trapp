'use client';

import { useEffect, useState } from 'react';
import { CHAPTERS } from '@/lib/light';
import { useLight } from '@/components/providers/LightProvider';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function ScrollbarCalligraphy() {
  const { activeChapter } = useLight();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollTop / docHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [prefersReducedMotion]);

  if (!mounted || prefersReducedMotion) return null;

  const currentChapter = CHAPTERS.find((c) => c.id === activeChapter) || CHAPTERS[0];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block" aria-hidden="true">
      <svg width="2" height="200" viewBox="0 0 2 200" className="text-[var(--color-bone-dim)]">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="200"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.3"
        />
        <line
          x1="1"
          y1="0"
          x2="1"
          y2={200 * progress}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="transition-transform duration-100"
        />
      </svg>
      <div className="mt-4 text-right">
        <span className="type-mono text-[var(--color-light-2200)] block mb-1">
          {currentChapter.index} · {currentChapter.kelvin}K
        </span>
        <span className="type-mono text-[var(--color-silver)] text-[var(--text-mono)]">
          {currentChapter.label}
        </span>
      </div>
    </div>
  );
}
