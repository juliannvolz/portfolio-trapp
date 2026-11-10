'use client';

import { useEffect } from 'react';
import { CHAPTERS } from '@/lib/light';
import { useLight } from '@/components/providers/LightProvider';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function ChapterLight() {
  const { activeChapter } = useLight();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const chapter = CHAPTERS.find((c) => c.id === activeChapter);
    if (!chapter) return;

    const root = document.documentElement;
    root.style.setProperty('--light-rgb', chapter.rgb);
    root.style.setProperty('--light-intensity', String(chapter.intensity));
    root.style.setProperty('--light-shadow', String(chapter.shadow));
    root.style.setProperty('--light-origin', chapter.origin);

    const style = document.createElement('style');
    style.textContent = `
      .light-layer {
        background:
          radial-gradient(60% 50% at var(--light-origin),
            rgb(var(--light-rgb) / var(--light-intensity)), transparent 70%),
          radial-gradient(80% 80% at 50% 50%,
            transparent 40%, rgb(0 0 0 / var(--light-shadow)) 100%);
        transition: background var(--duration-slow) var(--ease-out);
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, [activeChapter, prefersReducedMotion]);

  return <div className="light-layer fixed inset-0 -z-10" aria-hidden="true" />;
}
