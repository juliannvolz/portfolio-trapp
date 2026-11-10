'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface SprayRevealProps {
  children: React.ReactNode;
  color?: string;
  maskSrc?: string;
  className?: string;
}

export function SprayReveal({
  children,
  color = '2F7FD6',
  maskSrc,
  className,
}: SprayRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;

      gsap.set(el, {
        clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        WebkitClipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
      });

      if (maskSrc) {
        el.style.setProperty('--spray-mask', `url(${maskSrc})`);
        el.style.setProperty('-webkit-mask-image', `url(${maskSrc})`);
        el.style.setProperty('mask-image', `url(${maskSrc})`);
      }

      gsap.to(el, {
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        WebkitClipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: 0.5,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion, maskSrc]);

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      style={{
        '--spray-color': `rgb(${color})`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
