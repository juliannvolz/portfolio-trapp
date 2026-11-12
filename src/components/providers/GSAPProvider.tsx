'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Flip);

gsap.defaults({ ease: 'power3.out', duration: 0.24 });
ScrollTrigger.defaults({ toggleActions: 'play none none reverse' });

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return <>{children}</>;
}
