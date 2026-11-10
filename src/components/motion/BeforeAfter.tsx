'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface BeforeAfterProps {
  before: string;
  after: string;
  labels?: { before: string; after: string };
  className?: string;
}

export function BeforeAfter({ before, after, labels = { before: 'ANTES', after: 'DEPOIS' }, className }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPosition(x * 100);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (dragging) handleMove(e.clientX);
  }, [dragging, handleMove]);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (dragging && e.touches[0]) handleMove(e.touches[0].clientX);
  }, [dragging, handleMove]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const step = 5;
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        e.preventDefault();
        setPosition((p) => Math.max(0, p - step));
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        e.preventDefault();
        setPosition((p) => Math.min(100, p + step));
        break;
      case 'Home':
        e.preventDefault();
        setPosition(0);
        break;
      case 'End':
        e.preventDefault();
        setPosition(100);
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onMouseMove, onTouchMove, onKeyDown]);

  const beforeStyle = { clipPath: `inset(0 ${100 - position}% 0 0)`, WebkitClipPath: `inset(0 ${100 - position}% 0 0)` };
  const afterStyle = { clipPath: `inset(0 0% 0 ${position}%)`, WebkitClipPath: `inset(0 0% 0 ${position}%)` };
  const handleStyle = { left: `${position}%`, transform: 'translateX(-50%)' };

  return (
    <div className={cn('relative aspect-video overflow-hidden', className)} ref={sliderRef} role="slider" aria-label="Comparação antes e depois" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position)} aria-valuetext={`${labels.before} ${100 - Math.round(position)}%, ${labels.after} ${Math.round(position)}%`} tabIndex={0} onMouseDown={() => setDragging(true)} onTouchStart={() => setDragging(true)} onMouseUp={() => setDragging(false)} onTouchEnd={() => setDragging(false)} onMouseLeave={() => setDragging(false)}>
      <div ref={beforeRef} className="absolute inset-0" style={beforeStyle} aria-hidden="true">
        <img src={before} alt={labels.before} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={afterStyle} aria-hidden="true">
        <img src={after} alt={labels.after} className="w-full h-full object-cover" />
      </div>
      <div className="no-js ba-fallback absolute inset-0 grid grid-cols-2" aria-hidden="true">
        <div>
          <img src={before} alt={labels.before} className="w-full h-full object-cover" />
          <p className="type-mono text-[var(--color-bone)] bg-[var(--color-concrete-900)]/80 px-3 py-1 rounded absolute bottom-4 left-4">{labels.before}</p>
        </div>
        <div>
          <img src={after} alt={labels.after} className="w-full h-full object-cover" />
          <p className="type-mono text-[var(--color-bone)] bg-[var(--color-concrete-900)]/80 px-3 py-1 rounded absolute bottom-4 left-4">{labels.after}</p>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none" aria-hidden="true">
        <span className="type-mono text-[var(--color-bone)] bg-[var(--color-concrete-900)]/80 px-3 py-1 rounded">{labels.before}</span>
        <span className="type-mono text-[var(--color-bone)] bg-[var(--color-concrete-900)]/80 px-3 py-1 rounded">{labels.after}</span>
      </div>
      <div className="absolute top-0 bottom-0 w-1 bg-[var(--color-bone)] pointer-events-none" style={handleStyle} aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--color-concrete-900)] border-2 border-[var(--color-bone)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 type-mono text-[var(--color-silver)] text-xs">arraste ou use as setas</p>
    </div>
  );
}
