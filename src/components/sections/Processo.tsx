'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { BuildScrub } from '@/components/motion/BuildScrub';
import { processSteps } from '@/content/process';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { useRef } from 'react';

export function Processo() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const processImages = [
    '/images/processo-arte.jpg',
    '/images/processo-grafite-academia.jpg',
    '/images/processo-tucano-sinners.jpg',
    '/images/processo-tucano-sinners2.jpg',
    '/images/processo-tucano-sinners3.jpg',
    '/images/processo-caminho-artes.jpg',
    '/images/processo-caminho-das-artes.jpg',
    '/images/processo-caminho-das-artes3.jpg',
    '/images/processo2-caminho-artes.jpg',
    '/images/processo-tela-caligra.jpg',
    '/images/processo-caligra-tela.jpg',
  ];

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const steps = el.querySelectorAll('.process-step');

      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      id="processo"
      data-chapter="processo"
      className="relative py-20 px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <p className="type-mono text-[var(--color-light-5600)] mb-4">06 / O PROCESSO · 5600K</p>
        <h2 className="type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-12">
          Do rascunho ao último brilho.
        </h2>
        <p className="text-[var(--color-bone-dim)] text-[var(--text-body)] mb-16">
          Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
        </p>

        <div className="relative mb-20">
          <BuildScrub images={processImages} steps={8} className="aspect-[16/9] rounded-lg overflow-hidden" />
        </div>

        <dl className="space-y-12">
          {processSteps.map((step) => (
            <div key={step.num} className="process-step grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <dt className="type-display text-[var(--text-display-md)] text-[var(--color-light-5600)] whitespace-nowrap">
                {step.num} {step.title}
              </dt>
              <dd className="text-[var(--color-bone)] text-[var(--text-body)]">
                {step.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

