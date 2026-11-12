'use client';

import { useState, useMemo, Suspense } from 'react';
import { works } from '@/content/works';
import { WorkSheet } from '@/components/ui/WorkSheet';
import { Lightbox } from '@/components/ui/Lightbox';
import { cn } from '@/lib/utils';

type Category = 'todos' | 'murais' | 'caligrafia' | 'telas' | 'estudio';

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'todos') return works;
    return works.filter((w) => w.category === activeCategory);
  }, [activeCategory]);

  const categories: { key: Category; label: string }[] = [
    { key: 'todos', label: 'TODOS' },
    { key: 'murais', label: 'MURAIS' },
    { key: 'caligrafia', label: 'CALIGRAFIA' },
    { key: 'telas', label: 'TELAS' },
    { key: 'estudio', label: 'ESTÚDIO & TATTOO' },
  ];

  const navigateLightbox = (dir: -1 | 1) => {
    setLightboxIndex((i) => Math.max(0, Math.min(works.length - 1, i + dir)));
  };

  return (
    <section id="acervo" data-chapter="acervo" className="relative py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <p className="type-mono text-[var(--color-light-3000)] mb-4">04 / O ACERVO · 3000K</p>
        <h2 className="type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-4">
          Cada parede acende diferente.
        </h2>
        <p className="text-[var(--color-bone-dim)] text-[var(--text-body)] mb-12">
          Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
        </p>
        <div className="type-mono flex flex-wrap gap-4 mb-12" role="group" aria-label="Filtros de categoria">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-4 py-2 border rounded transition-colors hover:bg-[var(--color-concrete-800)]',
                activeCategory === cat.key
                  ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-gold)]'
                  : 'border-[var(--color-silver)] text-[var(--color-bone-dim)]'
              )}
              aria-pressed={activeCategory === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" aria-live="polite" aria-label={`Obras - ${filteredWorks.length} itens`}>
          {filteredWorks.map((work, i) => (
            <WorkSheet
              key={work.id}
              work={work}
              index={i}
              onClick={() => {
                const idx = works.findIndex((w) => w.id === work.id);
                if (idx >= 0) {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }
              }}
            />
          ))}
        </div>
        {filteredWorks.length === 0 && (
          <p className="text-center text-[var(--color-silver)] py-12">Nenhuma obra nesta categoria.</p>
        )}
      </div>
      {lightboxOpen && (
        <Lightbox
          isOpen={lightboxOpen}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={navigateLightbox}
        />
      )}
    </section>
  );
}