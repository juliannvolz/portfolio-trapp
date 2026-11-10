'use client';

import { BeforeAfter } from '@/components/motion/BeforeAfter';

export function Transformacao() {
  return (
    <section id="transformacao" data-chapter="transformacao" className="relative py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="type-mono text-[var(--color-light-5600)] mb-4">05 / A TRANSFORMAÇÃO · 5600K</p>
        <h2 className="type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-4">
          Antes de acender, a parede é só parede.
        </h2>
        <p className="text-[var(--color-bone-dim)] text-[var(--text-body)] mb-12">
          Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
        </p>
        <BeforeAfter
          before="/images/antes-mandala.jpg"
          after="/images/mural-estudio-espelho.jpg"
          labels={{ before: 'ANTES', after: 'DEPOIS' }}
          className="rounded-lg overflow-hidden"
        />
        <figcaption className="type-mono text-[var(--color-silver)] text-center mt-4">
          Parede antes e depois da intervenção Mandala
        </figcaption>
      </div>
    </section>
  );
}

