'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

interface ArapongaCueProps {
  enabled?: boolean;
}

export function ArapongaCue({ enabled = true }: ArapongaCueProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const stored = localStorage.getItem('trapp-sound');
    setSoundEnabled(stored === 'true');
  }, []);

  useEffect(() => {
    if (!enabled || !soundEnabled || prefersReducedMotion) return;

    const handleLightChange = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') ctx.resume();

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'square';
      osc1.frequency.setValueAtTime(1200, now);
      osc1.frequency.exponentialRampToValueAtTime(2800, now + 0.15);
      osc1.frequency.exponentialRampToValueAtTime(800, now + 0.4);

      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(600, now);
      osc2.frequency.exponentialRampToValueAtTime(150, now + 0.5);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.5);
      osc2.start(now);
      osc2.stop(now + 0.5);
    };

    window.addEventListener('trapp:light:change', handleLightChange);
    return () => window.removeEventListener('trapp:light:change', handleLightChange);
  }, [enabled, soundEnabled, prefersReducedMotion]);

  useEffect(() => {
    const handleToggle = (e: CustomEvent) => {
      setSoundEnabled(e.detail.enabled);
    };
    window.addEventListener('trapp:sound:toggle', handleToggle as EventListener);
    return () => window.removeEventListener('trapp:sound:toggle', handleToggle as EventListener);
  }, []);

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return null;
}
