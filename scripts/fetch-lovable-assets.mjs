#!/usr/bin/env node
// scripts/fetch-lovable-assets.mjs
// Baixa imagens autorizadas do Lovable para assets-source/lovable/

import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

const LOVABLE_BASE = 'https://ruantrapp.lovable.app';
const IMAGES = [
  'antes-mandala.jpg',
  'mural-estudio-espelho.jpg',
  'mural-estudio-noturno.jpg',
  'araponga-caminho-das-artes.jpg',
  'araponga-caligrafia.jpg',
  'mural-mandala-lustre.jpg',
  'mural-caligrafia-prata.jpg',
  'mural-sala-violao.jpg',
  'mural-ouro-prata.jpg',
  'passaro-amarelo-realismo.jpg',
  'ruan-trapp-pintando.webp',
];

const OUT_DIR = 'assets-source/lovable';

async function ensureDir(dir) {
  try { await mkdir(dir, { recursive: true }); } catch {}
}

async function fetchImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    await writeFile(dest, Buffer.from(buf));
    console.log(`✓ ${url} → ${dest}`);
  } catch (err) {
    console.warn(`⚠ ${url}: ${err.message}`);
  }
}

async function main() {
  await ensureDir(OUT_DIR);
  for (const img of IMAGES) {
    await fetchImage(`${LOVABLE_BASE}/${img}`, join(OUT_DIR, img));
  }
  console.log('\nLovable images downloaded to', OUT_DIR);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});