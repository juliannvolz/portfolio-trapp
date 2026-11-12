'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface FlashProps {
  temperature?: number;
  intensity?: number;
  oncePerChapter?: boolean;
  chapterId?: string;
  className?: string;
}

export function Flash({
  temperature = 5600,
  intensity = 0.15,
  oncePerChapter = true,
  chapterId,
  className,
}: FlashProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [hasFlashed, setHasFlashed] = useState(false);

  const kelvinToRgb = (k: number) => {
    if (k <= 2200) return '255,180,107';
    if (k <= 3000) return '255,209,161';
    if (k <= 5000) return '242,245,255';
    return '232,241,255';
  };

  const rgb = kelvinToRgb(temperature);

  useEffect(() => {
    if (!chapterId) return;
    const key = `trapp-flash-${chapterId}`;
    const done = sessionStorage.getItem(key);
    if (done) setHasFlashed(true);
  }, [chapterId]);

  useGSAP(() => {
    if (prefersReducedMotion || hasFlashed || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;

      const handleLightChange = (e: CustomEvent) => {
        if (oncePerChapter && hasFlashed) return;
        if (chapterId && e.detail.id !== chapterId) return;

        gsap.fromTo(
          el,
          { opacity: intensity },
          { opacity: 0, duration: 0.12, ease: 'power2.out' }
        );

        if (oncePerChapter && chapterId) {
          setHasFlashed(true);
          sessionStorage.setItem(`trapp-flash-${chapterId}`, 'true');
        }
      };

      window.addEventListener('trapp:light:change', handleLightChange as EventListener);
      return () => window.removeEventListener('trapp:light:change', handleLightChange as EventListener);
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion, hasFlashed, chapterId, oncePerChapter]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      className={cn('fixed inset-0 pointer-events-none z-[100]', className)}
      style={{
        background: `radial-gradient(60% 50% at 50% 50%, rgb(${rgb} / ${intensity}), transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
