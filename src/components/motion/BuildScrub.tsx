'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface BuildScrubProps {
  images: string[];
  steps?: number;
  className?: string;
}

export function BuildScrub({ images, steps = 8, className }: BuildScrubProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const bands = el.querySelectorAll('.build-band');

      gsap.set(bands, { clipPath: 'inset(0 100% 0 0)', filter: 'grayscale(1)' });

      gsap.to(bands, {
        clipPath: 'inset(0 0% 0 0)',
        filter: 'grayscale(0)',
        duration: 1,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)} role="img" aria-label="Construção da obra em etapas">
      {images.map((src, i) => (
        <div
          key={i}
          className="build-band absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: steps - i,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
