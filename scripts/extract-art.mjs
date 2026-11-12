#!/usr/bin/env node
// scripts/extract-art.mjs
// Extrai máscaras alpha (PNG + WebP) para logos e fundos caligráficos
// Requer: sharp, @img/sharp-libvips

import { mkdir, writeFile, readdir } from 'fs/promises';
import { join, basename, extname } from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'assets-source';
const OUTPUT_DIR = 'public/images/art';

const MASKS = [
  { src: 'logo3.1.jpg', out: 'logo3-1-alpha', threshold: 128 },
  { src: 'logo-trapp.jpg', out: 'logo-trapp-alpha', threshold: 128 },
  { src: 'logo-tipo2.jpg', out: 'logo-tipo2-alpha', threshold: 128 },
  { src: 'caligra-parede-branca.jpg', out: 'calligra-wall-01', threshold: 180 },
  { src: 'caligra-parede-azul.jpg', out: 'calligra-wall-02', threshold: 180 },
  { src: 'caligra-parede-azul2.jpg', out: 'calligra-wall-03', threshold: 180 },
];

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

async function extractMask({ src, out, threshold }) {
  const input = join(SOURCE_DIR, src);
  try {
    await ensureDir(OUTPUT_DIR);
    const img = sharp(input);
    const { data, info } = await img
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const alpha = Buffer.alloc(width * height);

    for (let i = 0; i < data.length; i += channels) {
      const luma = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
      alpha[i / channels] = luma > threshold ? 255 : 0;
    }

    const maskImg = sharp(alpha, { raw: { width, height, channels: 1 } });
    await Promise.all([
      maskImg.png({ compressionLevel: 9 }).toFile(join(OUTPUT_DIR, `${out}.png`)),
      maskImg.webp({ lossless: true }).toFile(join(OUTPUT_DIR, `${out}.webp`)),
    ]);

    console.log(`✓ ${src} → ${out}.png/.webp (${width}x${height})`);
  } catch (err) {
    console.warn(`⚠ ${src}: ${err.message}`);
  }
}

async function main() {
  for (const m of MASKS) {
    await extractMask(m);
  }
  console.log('\nMasks extracted to', OUTPUT_DIR);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});