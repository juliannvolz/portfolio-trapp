'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps {
  src: string;
  alt: string;
  widths?: number[];
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  placeholder?: 'blur' | 'empty';
  lqip?: string;
}

export function SmartImage({
  src,
  alt,
  widths = [480, 640, 960, 1280, 1600, 2000],
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  fill = false,
  className,
  placeholder = 'blur',
  lqip,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const baseSrc = src.replace(/\.(avif|webp|jpg|jpeg|png)$/i, '');
  const ext = src.split('.').pop()?.toLowerCase() || 'jpg';

  const avifSrcSet = widths.map((w) => `${baseSrc}-w${w}.avif ${w}w`).join(', ');
  const webpSrcSet = widths.map((w) => `${baseSrc}-w${w}.webp ${w}w`).join(', ');
  const fallbackSrc = `${baseSrc}-w${widths[widths.length - 1]}.${ext}`;

  if (error) {
    return (
      <div className={cn('relative bg-[var(--color-concrete-800)]', fill ? 'absolute inset-0' : '', className)} role="img" aria-label={alt}>
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-silver)] type-mono text-sm">
          Imagem indisponível
        </div>
      </div>
    );
  }

  return (
    <picture className={cn(fill ? 'absolute inset-0' : 'block', className)}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 300ms ease-out',
          width: fill ? '100%' : 'auto',
          height: fill ? '100%' : 'auto',
          objectFit: fill ? 'cover' : undefined,
        }}
        aria-hidden={placeholder === 'blur' && !loaded}
      />
      {placeholder === 'blur' && lqip && !loaded && (
        <div
          className={cn('absolute inset-0', fill ? '' : 'aspect-video')}
          style={{
            backgroundImage: `url(${lqip})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
            opacity: 0.5,
            transition: 'opacity 300ms ease-out',
          }}
          aria-hidden="true"
        />
      )}
    </picture>
  );
}
