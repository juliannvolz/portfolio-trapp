'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

type MotionContextType = {
  reducedMotion: boolean;
};

const MotionContext = createContext<MotionContextType | null>(null);

export function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <MotionContext.Provider value={{ reducedMotion }}>{children}</MotionContext.Provider>
  );
}

export function useMotion() {
  const ctx = useContext(MotionContext);
  if (!ctx) throw new Error('useMotion must be used within MotionProvider');
  return ctx;
}
