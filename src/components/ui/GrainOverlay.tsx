'use client';

import { useEffect, useRef } from 'react';

export function GrainOverlay({ opacity = 0.03, className }: { opacity?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      if (!ctx) return;
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = val;
        data[i + 3] = opacity * 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [opacity]);

  return <canvas ref={canvasRef} className={className} style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 999, opacity: 1 }} aria-hidden="true" />;
}
