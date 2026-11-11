'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { LightSweep } from '@/components/motion/LightSweep';
import { services } from '@/content/services';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/lib/useReducedMotion';
import Link from 'next/link';
import { useRef } from 'react';

export function Servicos() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const items = el.querySelectorAll('.service-item');

      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
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
      id="oficio"
      data-chapter="oficio"
      className="relative py-20 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <p className="type-mono text-[var(--color-light-5000)] mb-4">07 / O OFÍCIO · 5000K / 2700K</p>
        <h2 className="type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-4">
          O que eu faço na parede — e na pele.
        </h2>
        <div className="space-y-16">
          {services.map((svc, i) => (
            <article
              key={svc.id}
              id={svc.id}
              className={cn('service-item relative', svc.id === 'tatuagem' && 'tattoo-section')}
            >
              <LightSweep
                temperature={svc.id === 'tatuagem' ? 2700 : 5000}
                angle={-10}
                duration={0.8}
                trigger={`#${svc.id}`}
              >
                <header className="mb-6">
                  <span className="type-display text-[var(--text-h2)] text-[var(--color-light-5000)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="type-display text-[var(--text-h2)] text-[var(--color-bone)] mt-2">
                    {svc.title}
                  </h3>
                </header>
                <p className="text-[var(--color-bone-dim)] text-[var(--text-body)] mb-6 max-w-2xl">
                  {svc.description}
                </p>
                {svc.id === 'tatuagem' && (
                  <div className="mb-6 p-6 border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/5 rounded-lg relative">
                    <h4 className="type-display text-[var(--text-h2)] text-[var(--color-gold)] mb-2">
                      A pele é a parede mais próxima.
                    </h4>
                    <p className="text-[var(--color-bone-dim)] text-[var(--text-body)]">
                      Luz 2700K para a pele. Ring light 5000K para o estúdio.
                    </p>
                  </div>
                )}
                <Link
                  href={`https://wa.me/554792242056?text=${encodeURIComponent(`Orçamento: ${svc.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-[var(--color-bone)] text-[var(--color-bone)] font-semibold rounded transition-colors hover:bg-[var(--color-bone)] hover:text-[var(--color-concrete-900)]"
                >
                  Orçamento no WhatsApp
                </Link>
              </LightSweep>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
