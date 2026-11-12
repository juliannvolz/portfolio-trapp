#!/usr/bin/env node
// scripts/download-fonts.mjs
// Baixa fontes WOFF2 para preload local

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const FONTS = [
  { name: 'Archivo Black', weights: ['900'], subsets: ['latin'] },
  { name: 'Source Sans 3', weights: ['400', '600'], subsets: ['latin'] },
  { name: 'JetBrains Mono', weights: ['400'], subsets: ['latin'] },
];

const OUTPUT_DIR = 'public/fonts';

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

async function downloadFont(family, weight, subset) {
  const familyParam = family.replace(/\s+/g, '+');
  const url = `https://fonts.gstatic.com/s/${familyParam.toLowerCase()}/v1/${familyParam}-${weight}-${subset}.woff2`;
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    const filename = `${familyParam.toLowerCase()}-${subset}-${weight}.woff2`;
    await writeFile(join(OUTPUT_DIR, filename), Buffer.from(buf));
    console.log(`✓ ${filename}`);
    return filename;
  } catch (err) {
    console.warn(`⚠ ${family} ${weight} ${subset}: ${err.message}`);
    return null;
  }
}

async function main() {
  await ensureDir(OUTPUT_DIR);
  
  for (const font of FONTS) {
    for (const weight of font.weights) {
      for (const subset of font.subsets) {
        await downloadFont(font.name, weight, subset);
      }
    }
  }
  
  console.log('\nFonts downloaded to', OUTPUT_DIR);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});