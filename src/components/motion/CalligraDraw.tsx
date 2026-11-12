'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useRef } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(DrawSVGPlugin);

interface CalligraDrawProps {
  src?: string;
  path?: string;
  _color?: string;
  mode?: 'svg' | 'mask';
  scrub?: number | boolean;
  className?: string;
}

export function CalligraDraw({
  src,
  path,
  _color = 'currentColor',
  mode = 'svg',
  scrub = false,
  className,
}: CalligraDrawProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (mode === 'svg' && svgRef.current) {
        const el = svgRef.current;
        const paths = el.querySelectorAll('path');
        gsap.set(paths, { drawSVG: '0%' });

        const anim = gsap.to(paths, {
          drawSVG: '100%',
          duration: 1.2,
          ease: 'power2.inOut',
          stagger: 0.08,
          paused: !!scrub,
          scrollTrigger: scrub
            ? {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: scrub === true ? 1 : scrub,
              }
            : undefined,
        });

        return () => anim.kill();
      }

      if (mode === 'mask' && divRef.current) {
        const el = divRef.current;
        gsap.set(el, { '--mask-pos': '0%' });

        const anim = gsap.to(el, {
          '--mask-pos': '100%',
          duration: 1,
          ease: 'power2.out',
          paused: !!scrub,
          scrollTrigger: scrub
            ? {
                trigger: el,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: scrub === true ? 1 : scrub,
              }
            : undefined,
        });

        return () => anim.kill();
      }
    });

    return () => ctx.revert();
  }, [prefersReducedMotion, mode, scrub]);

  if (mode === 'svg' && src) {
    return (
      <svg ref={svgRef} className={className} aria-hidden="true" role="img">
        <use href={`${src}#calligra-path`} />
      </svg>
    );
  }

  if (mode === 'mask' && path) {
    return (
      <div
        ref={divRef}
        className={className}
        style={{
          maskImage: `url(${path})`,
          maskSize: 'cover',
          maskPosition: 'var(--mask-pos, 0%) center',
          WebkitMaskImage: `url(${path})`,
          WebkitMaskSize: 'cover',
          WebkitMaskPosition: 'var(--mask-pos, 0%) center',
        }}
        aria-hidden="true"
      />
    );
  }

  return <div ref={divRef} className={className} aria-hidden="true" />;
}
