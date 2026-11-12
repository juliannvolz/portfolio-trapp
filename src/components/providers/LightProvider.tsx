'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CHAPTERS } from '@/lib/light';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/useReducedMotion';

type LightContextType = {
  activeChapter: string;
};

const LightContext = createContext<LightContextType | null>(null);

export function LightProvider({ children }: { children: ReactNode }) {
  const [activeChapter, setActiveChapter] = useState('inicio');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const triggers = CHAPTERS.map((chapter) => {
      const section = document.querySelector(`[data-chapter="${chapter.id}"]`);
      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => {
          setActiveChapter(chapter.id);
          document.documentElement.style.setProperty('--light-rgb', chapter.rgb);
          document.documentElement.style.setProperty('--light-intensity', String(chapter.intensity));
          document.documentElement.style.setProperty('--light-shadow', String(chapter.shadow));
          document.documentElement.style.setProperty('--light-origin', chapter.origin);
          window.dispatchEvent(new CustomEvent('trapp:light:change', { detail: chapter }));
        },
        onEnterBack: () => {
          setActiveChapter(chapter.id);
          document.documentElement.style.setProperty('--light-rgb', chapter.rgb);
          document.documentElement.style.setProperty('--light-intensity', String(chapter.intensity));
          document.documentElement.style.setProperty('--light-shadow', String(chapter.shadow));
          document.documentElement.style.setProperty('--light-origin', chapter.origin);
          window.dispatchEvent(new CustomEvent('trapp:light:change', { detail: chapter }));
        },
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
    };
  }, [prefersReducedMotion]);

  return (
    <LightContext.Provider value={{ activeChapter }}>{children}</LightContext.Provider>
  );
}

export function useLight() {
  const ctx = useContext(LightContext);
  if (!ctx) throw new Error('useLight must be used within LightProvider');
  return ctx;
}
