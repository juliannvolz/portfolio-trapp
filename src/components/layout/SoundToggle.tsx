'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

export function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('trapp-sound');
    if (stored) setEnabled(stored === 'true');
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('trapp-sound', String(next));
    window.dispatchEvent(new CustomEvent('trapp:sound:toggle', { detail: { enabled: next } }));
  };

  if (!mounted || prefersReducedMotion) return null;

  return (
    <button
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Desativar som' : 'Ativar som'}
      className="p-2 rounded-full bg-[var(--color-concrete-800)] border border-[var(--color-concrete-700)] text-[var(--color-bone)] hover:border-[var(--color-silver)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-concrete-900)]"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        {enabled ? (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </>
        ) : (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </>
        )}
      </svg>
    </button>
  );
}
