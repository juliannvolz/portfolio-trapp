'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { SprayReveal } from '@/components/motion/SprayReveal';
import { Flash } from '@/components/motion/Flash';
import { ArapongaCue } from '@/components/motion/ArapongaCue';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { useRef } from 'react';

export function Contato() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const title = el.querySelector('.contato-title');
      const text = el.querySelector('.contato-text');
      const cta = el.querySelector('.contato-cta');
      const info = el.querySelector('.contato-info');

      gsap.fromTo(
        [title, text, cta, info],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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
      id="fecho"
      data-chapter="fecho"
      className="relative py-20 px-4"
    >
      {!prefersReducedMotion && <Flash chapterId="fecho" temperature={5600} intensity={0.1} />}
      <ArapongaCue enabled={true} />
      <div className="container mx-auto max-w-5xl text-center">
        <p className="type-mono text-[var(--color-light-5600)] mb-4">08 / O FECHO · 5600K</p>
        <h2 className="contato-title type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-8">
          A rua continua.
        </h2>
        <p className="contato-text text-[var(--color-bone-dim)] text-[var(--text-body)] max-w-2xl mx-auto mb-12">
          Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
        </p>
        <a
          href="https://wa.me/554792242056"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-cta inline-block px-8 py-4 bg-[var(--color-bone)] text-[var(--color-concrete-900)] font-semibold rounded transition-colors hover:bg-[var(--color-bone-dim)] text-[var(--text-body)]"
        >
          FALAR NO WHATSAPP
        </a>
        <p className="contato-info type-mono text-[var(--color-silver)] mt-8">
          Jaraguá do Sul — SC. Atendo a região e projetos fora.
        </p>
        <p className="contato-info type-mono text-[var(--color-silver)] mt-2">
          Instagram: <a href="https://instagram.com/ruantrapp" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] hover:underline">@ruantrapp</a>
        </p>
        <div className="mt-16 relative" aria-hidden="true">
          <SprayReveal
            color="2F7FD6"
            maskSrc="/images/art/tag-trapp-alpha.png"
            className="max-w-md mx-auto"
          >
            <svg viewBox="0 0 400 120" className="w-full h-auto text-[var(--color-blue)]" role="img" aria-label="Tag azul spray Ruan Trapp">
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fontFamily="Archivo Black, sans-serif" fontSize="48" fontWeight="900" fill="currentColor">
                RUAN TRAPP
              </text>
            </svg>
          </SprayReveal>
        </div>
      </div>
    </section>
  );
}

