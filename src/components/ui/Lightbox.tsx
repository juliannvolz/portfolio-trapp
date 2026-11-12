'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { SmartImage } from '@/components/ui/SmartImage';
import { works } from '@/content/works';

interface LightboxProps {
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
  onNavigate: (dir: -1 | 1) => void;
}

export function Lightbox({ isOpen, initialIndex, onClose, onNavigate }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      dialogRef.current?.showModal();
      document.body.style.overflow = 'hidden';
      setIndex(initialIndex);
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onNavigate(-1);
          break;
        case 'ArrowRight':
          onNavigate(1);
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, onNavigate]);

  const work = works[index];

  if (!isOpen || !work) return null;

  const content = (
    <dialog
      ref={dialogRef}
      className={cn('fixed inset-0 z-[1000] border-none bg-[var(--color-concrete-900)]/95 p-0 max-w-none max-h-none', 'backdrop:backdrop-blur-sm backdrop:bg-[var(--color-concrete-900)]/80')}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      aria-modal="true"
      aria-label={`${work.title} - Imagem ${index + 1} de ${works.length}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[var(--color-concrete-800)]/80 text-[var(--color-bone)] hover:bg-[var(--color-concrete-700)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
        aria-label="Fechar lightbox"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <button
        onClick={() => onNavigate(-1)}
        disabled={index === 0}
        className={cn('absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-concrete-800)]/80 text-[var(--color-bone)] hover:bg-[var(--color-concrete-700)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]', 'md:block hidden', index === 0 && 'opacity-30 pointer-events-none')}
        aria-label="Imagem anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={() => onNavigate(1)}
        disabled={index === works.length - 1}
        className={cn('absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[var(--color-concrete-800)]/80 text-[var(--color-bone)] hover:bg-[var(--color-concrete-700)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]', 'md:block hidden', index === works.length - 1 && 'opacity-30 pointer-events-none')}
        aria-label="Próxima imagem"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="relative w-full h-full flex items-center justify-center">
        <SmartImage
          src={work.src}
          alt={work.alt}
          className="max-w-[90vw] max-h-[80vh] object-contain"
          priority
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
        <h3 className="type-display text-[var(--text-h2)] text-[var(--color-bone)] mb-1">{work.title}</h3>
        <p className="type-mono text-[var(--color-silver)]">
          {work.year && `${work.year} · `}
          {work.technique && `${work.technique} · `}
          {work.location}
        </p>
        <p className="type-mono text-[var(--color-bone-dim)] text-sm mt-2">
          {index + 1} / {works.length}
        </p>
      </div>
    </dialog>
  );

  return createPortal(content, document.body);
}
