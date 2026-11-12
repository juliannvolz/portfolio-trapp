'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface PinScrubProps {
  children: React.ReactNode;
  length?: number;
  horizontal?: boolean;
  id?: string;
  className?: string;
}

export function PinScrub({
  children,
  length = 3000,
  horizontal = true,
  id,
  className,
}: PinScrubProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !wrapperRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current!;
      const track = trackRef.current!;

      const st = ScrollTrigger.create({
        trigger: wrapper,
        pin: true,
        anticipatePin: 1,
        start: 'top top',
        end: `+=${length}`,
        horizontal,
        onUpdate: (self) => {
          if (horizontal) {
            gsap.set(track, { x: -self.progress * (track.scrollWidth - wrapper.clientWidth) });
          } else {
            gsap.set(track, { y: -self.progress * (track.scrollHeight - wrapper.clientHeight) });
          }
        },
        id,
      });

      return () => st.kill();
    }, wrapperRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, length, horizontal, id]);

  return (
    <div ref={wrapperRef} className={cn('relative overflow-hidden', className)} style={{ height: horizontal ? '100vh' : 'auto' }}>
      <div ref={trackRef} className={cn('flex', horizontal ? 'flex-row' : 'flex-col')}>
        {children}
      </div>
    </div>
  );
}
