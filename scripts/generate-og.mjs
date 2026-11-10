#!/usr/bin/env node
// scripts/generate-og.mjs
// Gera OG image 1200x630 com araponga + tipo bone + "RUAN TRAPP / O CANTO QUE CONSTRÓI"

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

const OUTPUT = 'public/og-image.jpg';
const WIDTH = 1200;
const HEIGHT = 630;

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

async function generate() {
  await ensureDir('public');

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#0B0A08"/>
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#0B0A08" stop-opacity="0"/>
          <stop offset="100%" stop-color="#0B0A08" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vignette)"/>
      
      <text x="50%" y="45%" text-anchor="middle" dominant-baseline="middle"
            font-family="Archivo Black, Arial Black, sans-serif"
            font-size="96" font-weight="900" fill="#EDE8DF"
            letter-spacing="-0.03em" line-height="1">
        RUAN TRAPP
      </text>
      <text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle"
            font-family="Archivo Black, Arial Black, sans-serif"
            font-size="42" font-weight="900" fill="#FFB46B"
            letter-spacing="-0.02em" line-height="1">
        O CANTO QUE CONSTRÓI
      </text>
      <text x="50%" y="75%" text-anchor="middle" dominant-baseline="middle"
            font-family="Source Sans 3, Arial, sans-serif"
            font-size="20" fill="#A8A8A1"
            letter-spacing="0.08em" text-transform="lowercase">
        Jaraguá do Sul — SC
      </text>
      <ellipse cx="50%" cy="30%" rx="120" ry="80" fill="#FFB46B" opacity="0.15"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(OUTPUT);

  const stats = await sharp(OUTPUT).stats();
  console.log(`✓ OG image: ${OUTPUT} (${(stats.size / 1024).toFixed(1)} KB)`);
}

generate().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});