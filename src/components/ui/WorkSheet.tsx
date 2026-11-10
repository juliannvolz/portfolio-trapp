'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { SmartImage } from '@/components/ui/SmartImage';
import { LightSweep } from '@/components/motion/LightSweep';
import { MetallicRipple } from '@/components/motion/MetallicRipple';

gsap.registerPlugin(ScrollTrigger);

interface WorkSheetProps {
  work: {
    id: string;
    title: string;
    category: string;
    src: string;
    alt: string;
    year?: number;
    technique?: string;
    location?: string;
    dimensions?: string;
    featured?: boolean;
    span?: string;
  };
  index: number;
  onClick: () => void;
}

export function WorkSheet({ work, index, onClick }: WorkSheetProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const img = el.querySelector('img') as HTMLImageElement;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08, filter: 'grayscale(0.4) brightness(0.7)' },
          {
            scale: 1,
            filter: 'grayscale(0) brightness(1)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <button
      ref={ref}
      type="button"
      className={cn('group relative overflow-hidden cursor-pointer w-full', 'transition-transform duration-300 hover:scale-[1.01]', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-concrete-900)]')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      aria-label={`Ver ${work.title}`}
    >
      <LightSweep temperature={3000} angle={-15} duration={0.7} trigger={ref.current ? `#${work.id}` : undefined}>
        <div className="relative aspect-[3/4] bg-[var(--color-concrete-800)] overflow-hidden">
          <SmartImage
            src={work.src}
            alt={work.alt}
            fill
            priority={index < 3}
            className="transition-all duration-700 ease-out group-hover:scale-105"
          />
          {hovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-concrete-900)]/90 via-transparent to-transparent" aria-hidden="true" />
          )}
          <MetallicRipple
            active={hovered}
            origin={{ x: 50, y: 50 }}
            color="255,209,161"
            className="pointer-events-none"
          />
        </div>
      </LightSweep>
      <figcaption className="type-mono text-[var(--color-silver)] mt-3 text-center truncate">
        {work.title}
        {work.year && (
          <>
            <span className="mx-2">·</span> {work.year}
          </>
        )}
      </figcaption>
    </button>
  );
}