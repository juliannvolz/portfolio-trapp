'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface LightSweepProps {
  temperature?: number;
  angle?: number;
  trigger?: string;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export function LightSweep({
  temperature = 2200,
  angle = -30,
  trigger,
  duration = 0.7,
  className,
  children,
}: LightSweepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const kelvinToRgb = (k: number) => {
    if (k <= 2200) return '255,180,107';
    if (k <= 3000) return '255,209,161';
    if (k <= 5000) return '242,245,255';
    return '232,241,255';
  };

  const rgb = kelvinToRgb(temperature);

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const sweep = el.querySelector('.light-sweep-overlay') as HTMLElement;

      gsap.set(sweep, {
        clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        background: `linear-gradient(${angle}deg, rgb(${rgb} / 0.35) 0%, transparent 60%)`,
      });

      const st = gsap.to(sweep, {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        duration,
        ease: 'power3.out',
        paused: !trigger,
        scrollTrigger: trigger
          ? {
              trigger: trigger,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1,
            }
          : undefined,
      });

      return () => st.kill();
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion, trigger]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <div className="light-sweep-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
      {children}
    </div>
  );
}
