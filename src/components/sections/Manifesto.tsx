'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { LightSweep } from '@/components/motion/LightSweep';
import { CalligraDraw } from '@/components/motion/CalligraDraw';
import { useRef } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';
import Link from 'next/link';

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const title = el.querySelector('.manifesto-title');
      const text = el.querySelector('.manifesto-text');
      const meta = el.querySelector('.manifesto-meta');
      const cta = el.querySelector('.manifesto-cta');

      gsap.fromTo(
        [title, text, meta, cta],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={ref}
      id="obra"
      data-chapter="obra"
      className="relative py-20 px-4"
    >
      <LightSweep temperature={3000} angle={-15} duration={0.8}>
        <div className="container mx-auto max-w-5xl">
          <p className="type-mono text-[var(--color-light-3000)] mb-4">02 / A OBRA · 3000K</p>
          <h2 className="manifesto-title type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-8">
            A rua foi minha primeira escola.
          </h2>
          <div className="manifesto-text grid lg:grid-cols-2 gap-12 items-start">
            <div className="prose text-[var(--color-bone-dim)] text-[var(--text-body)] space-y-6">
              <p>Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.</p>
              <p>Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço.</p>
              <p>Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.</p>
            </div>
            <div className="relative">
              <CalligraDraw
                path="/images/art/calligra-wall-01.png"
                mode="mask"
                className="aspect-[3/4] w-full"
                scrub={0.5}
              />
            </div>
          </div>
          <dl className="manifesto-meta type-mono grid grid-cols-2 gap-4 mt-12 text-[var(--color-silver)]">
            <div><dt>Ruan Trapp</dt></div>
            <div><dt>Jaraguá do Sul — SC</dt></div>
            <div><dt>graffiti desde 2018</dt></div>
            <div><dt>muralista desde 2024</dt></div>
            <div><dt>murais · letreiros · telas · tatuagem · oficinas</dt></div>
          </dl>
          <Link
            href="#caminho"
            className="manifesto-cta inline-block mt-8 px-6 py-3 border-2 border-[var(--color-bone)] text-[var(--color-bone)] font-semibold rounded transition-colors hover:bg-[var(--color-bone)] hover:text-[var(--color-concrete-900)]"
          >
            Ver o Caminho das Artes
          </Link>
        </div>
      </LightSweep>
    </section>
  );
}

