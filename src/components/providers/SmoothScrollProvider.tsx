'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useReducedMotion } from '@/lib/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      syncTouch: false,
      autoRaf: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh(true);
    };

    if (document.fonts.ready) {
      document.fonts.ready.then(refreshScrollTrigger);
    }

    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    const totalImages = images.length;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        refreshScrollTrigger();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        onImageLoad();
      } else {
        img.addEventListener('load', onImageLoad, { once: true });
        img.addEventListener('error', onImageLoad, { once: true });
      }
    });

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      resizeObserver.disconnect();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}