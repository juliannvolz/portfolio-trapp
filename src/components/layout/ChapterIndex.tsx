'use client';

import { useEffect, useState } from 'react';
import { CHAPTERS } from '@/lib/light';
import { useLight } from '@/components/providers/LightProvider';

export function ChapterIndex() {
  const { activeChapter } = useLight();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block" aria-label="Índice de capítulos">
      <ol className="flex flex-col gap-3" role="list">
        {CHAPTERS.map((chapter) => {
          const isActive = activeChapter === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className={`flex items-center gap-3 px-3 py-2 rounded-l-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--color-bone)] text-[var(--color-concrete-900)] w-48'
                    : 'text-[var(--color-bone-dim)] hover:text-[var(--color-bone)] w-12'
                }`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span className="type-mono text-[var(--text-mono)] font-mono">{chapter.index}</span>
                <span className="type-mono whitespace-nowrap overflow-hidden">{chapter.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
