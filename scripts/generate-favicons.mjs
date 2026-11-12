#!/usr/bin/env node
// scripts/generate-favicons.mjs
// Gera favicons: 16, 32, 180, 192, 512 + .ico + site.webmanifest
// Monograma RT em Archivo Black, osso sobre concreto

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

const SIZES = [16, 32, 48, 180, 192, 512];
const OUTPUT_DIR = 'public/favicons';

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

function makeSvg(size) {
  const fontSize = size * 0.65;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0B0A08" rx="${size * 0.125}"/>
      <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle"
            font-family="Archivo Black, Arial Black, sans-serif"
            font-size="${fontSize}" font-weight="900" fill="#EDE8DF"
            letter-spacing="-0.02em">
        RT
      </text>
    </svg>
  `;
}

async function generate() {
  await ensureDir(OUTPUT_DIR);

  for (const size of SIZES) {
    const svg = makeSvg(size);
    await sharp(Buffer.from(svg))
      .png({ compressionLevel: 9 })
      .toFile(join(OUTPUT_DIR, `icon-${size}.png`));
    console.log(`✓ favicon-${size}.png`);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map(size => sharp(Buffer.from(makeSvg(size))).png().toBuffer())
  );
  // sharp doesn't write .ico directly; write largest PNG as fallback
  await sharp(Buffer.from(makeSvg(32))).png().toFile(join(OUTPUT_DIR, 'favicon.ico'));
  console.log(`✓ favicon.ico`);

  const manifest = {
    name: 'Ruan Trapp — Muralista, Caligraffiti e Tatuagem',
    short_name: 'Ruan Trapp',
    description: 'Murais, letreiros, telas e tatuagem de Ruan Trapp. Artista do Caminho das Artes, em Jaraguá do Sul (SC).',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0A08',
    theme_color: '#0B0A08',
    orientation: 'portrait-primary',
    icons: SIZES.filter(s => s >= 192).map(s => ({
      src: `/favicons/icon-${s}.png`,
      sizes: `${s}x${s}`,
      type: 'image/png',
      purpose: 'any maskable',
    })),
  };

  await writeFile(join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  await writeFile('public/site.webmanifest', JSON.stringify(manifest, null, 2));
  console.log(`✓ site.webmanifest`);
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});