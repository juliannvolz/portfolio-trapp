'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface MetallicRippleProps {
  active: boolean;
  origin?: { x: number; y: number };
  color?: string;
  className?: string;
}

export function MetallicRipple({
  active,
  origin = { x: 50, y: 50 },
  color = '255,180,107',
  className,
}: MetallicRippleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useGSAP(() => {
    if (prefersReducedMotion || !mounted) return;

    const _ctx = gsap.context(() => {
      if (!active || !ref.current) return;

      const el = ref.current;
      const rings = el.querySelectorAll('.ripple-ring');

      gsap.set(rings, { scale: 0, opacity: 0.6 });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
      rings.forEach((ring, i) => {
        tl.to(
          ring,
          { scale: 4, opacity: 0, duration: 0.7, delay: i * 0.08 },
          0
        );
      });

      return () => tl.kill();
    }, ref);
  }, [active, prefersReducedMotion, mounted]);

  if (!mounted || prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        '--ripple-x': `${origin.x}%`,
        '--ripple-y': `${origin.y}%`,
        '--ripple-color': `rgb(${color})`,
      } as React.CSSProperties}
      aria-hidden="true"
    >
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="ripple-ring absolute rounded-full border border-[var(--ripple-color)] pointer-events-none"
          style={{
            left: 'var(--ripple-x)',
            top: 'var(--ripple-y)',
            transform: 'translate(-50%, -50%)',
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
          }}
        />
      ))}
    </div>
  );
}
