#!/usr/bin/env node
// scripts/optimize-images.mjs
// Otimiza imagens: AVIF q50-55 esforço 4, WebP q75, LQIP 20px, manifest.json
// Larguras: 480, 640, 960, 1280, 1600, 2000 (sem ampliar)

import { readdir, stat, mkdir, writeFile, readFile } from 'fs/promises';
import { join, relative, extname, basename } from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'assets-source';
const OUTPUT_DIR = 'public/images';
const WIDTHS = [480, 640, 960, 1280, 1600, 2000];
const AVIF_OPTS = { quality: 50, effort: 4 };
const WEBP_OPTS = { quality: 75 };
const LQIP_WIDTH = 20;

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (!entry.isDirectory() && /\.(jpe?g|png|webp|avif)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimize() {
  await ensureDir(OUTPUT_DIR);
  const files = await getImageFiles(SOURCE_DIR);
  const manifest = [];

  for (const file of files) {
    const rel = relative(SOURCE_DIR, file);
    const name = basename(rel, extname(rel));
    const outDir = join(OUTPUT_DIR, rel.replace(basename(rel), ''));
    await ensureDir(outDir);

    try {
      const img = sharp(file);
      const meta = await img.metadata();
      const { width: origW, height: origH } = meta;
      const aspect = origW / origH;

      const validWidths = WIDTHS.filter(w => w <= origW);
      if (validWidths.length === 0) validWidths.push(origW);

      const widths = [...new Set(validWidths)].sort((a, b) => a - b);
      const variants = [];

      for (const w of widths) {
        const h = Math.round(w / aspect);
        const base = `${name}-w${w}`;

        await Promise.all([
          img.clone().resize(w, h).avif(AVIF_OPTS).toFile(join(outDir, `${base}.avif`)),
          img.clone().resize(w, h).webp(WEBP_OPTS).toFile(join(outDir, `${base}.webp`)),
        ]);

        variants.push({ width: w, height: h, avif: `${base}.avif`, webp: `${base}.webp` });
      }

      const lqipBuf = await img.clone().resize(LQIP_WIDTH).blur(10).avif({ quality: 20 }).toBuffer();
      const lqip = `data:image/avif;base64,${lqipBuf.toString('base64')}`;

      manifest.push({
        id: name,
        src: rel,
        width: origW,
        height: origH,
        aspect: Number(aspect.toFixed(3)),
        variants,
        lqip,
      });

      console.log(`✓ ${rel} → ${widths.length} variants`);
    } catch (err) {
      console.warn(`⚠ ${rel}: ${err.message} — skipping`);
    }
  }

  await writeFile(join(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nManifest written to ${OUTPUT_DIR}/manifest.json`);
  console.log(`Total images: ${manifest.length}`);
}

optimize().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});