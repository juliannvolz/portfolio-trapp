'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { LightSweep } from '@/components/motion/LightSweep';
import { MetallicRipple } from '@/components/motion/MetallicRipple';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { SmartImage } from '@/components/ui/SmartImage';
import Link from 'next/link';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const title = el.querySelector('.hero-title');
      const subtitle = el.querySelector('.hero-subtitle');
      const cta = el.querySelector('.hero-cta');
      const cue = el.querySelector('.hero-cue');

      gsap.set([title, subtitle, cta, cue], { opacity: 0, y: 30 });

      gsap.to([title, subtitle, cta, cue], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={ref}
      id="inicio"
      data-chapter="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <LightSweep temperature={2200} angle={-25} duration={1.2}>
        <div className="absolute inset-0 -z-10">
          <SmartImage
            src="/images/caminho-das-artes-principal.jpg"
            alt="Caminho das Artes - vista geral da galeria a céu aberto"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </LightSweep>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <p className="type-mono text-[var(--color-light-2200)] mb-4">01 / A RUA · 2200K</p>
        <p className="hero-title type-display text-[var(--text-display-lg)] text-[var(--color-bone)] mb-6">
          RUAN TRAPP
        </p>
        <h2 className="hero-subtitle type-display text-[var(--text-display-md)] text-[var(--color-bone-dim)] mb-6">
          O CANTO QUE CONSTRÓI
        </h2>
        <p className="hero-subtitle max-w-2xl mx-auto text-[var(--text-body)] text-[var(--color-silver)] mb-8">
          Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#acervo"
            className="px-6 py-3 bg-[var(--color-bone)] text-[var(--color-concrete-900)] font-semibold rounded transition-colors hover:bg-[var(--color-bone-dim)]"
          >
            VER AS OBRAS
          </Link>
          <a
            href="https://wa.me/554792242056"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-[var(--color-bone)] text-[var(--color-bone)] font-semibold rounded transition-colors hover:bg-[var(--color-bone)] hover:text-[var(--color-concrete-900)]"
          >
            FALAR NO WHATSAPP
          </a>
        </div>
        <p className="hero-cue type-mono text-[var(--color-light-2200)] mt-8">DESÇA A RUA</p>
      </div>

      <MetallicRipple
        active={true}
        origin={{ x: 50, y: 40 }}
        color="255,180,107"
        className="absolute inset-0 pointer-events-none -z-10"
      />
    </section>
  );
}

