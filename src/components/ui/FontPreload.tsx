'use client';

import { useEffect } from 'react';

export function FontPreload() {
  useEffect(() => {
    const links = [
      { href: '/fonts/archivo-black-latin-900.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/fonts/source-sans-3-latin-400.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/fonts/source-sans-3-latin-600.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/fonts/jetbrains-mono-latin-400.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
    ];

    links.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      link.type = type;
      link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}