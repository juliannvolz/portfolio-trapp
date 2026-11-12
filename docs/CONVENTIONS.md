# CONVENTIONS.md — Convenções de código e padrões

## 1. Stack e versões
- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind v4 via `@tailwindcss/postcss`
- GSAP 3.13 + `@gsap/react` (ScrollTrigger, SplitText, DrawSVG, Flip)
- Lenis + Motion (motion/react)
- Sem WebGL
- `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`

## 2. Estrutura de pastas (resumo)
```
ruantrappportfolio-v3/
├─ docs/
├─ public/
├─ scripts/
├─ src/
│  ├─ app/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ sections/
│  │  ├─ motion/
│  │  ├─ ui/
│  │  └─ providers/
│  ├─ content/
│  └─ lib/
├─ tests/e2e/
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ playwright.config.ts
├─ package.json
├─ netlify.toml
└─ README.md
```

## 3. Server-first, client islands
- `page.tsx` server component; conteúdo textual no HTML
- Providers client recebem `children` server-rendered
- Hidratam apenas: Header, Preloader, LightEngine, Scrollbar, PortfolioGrid, BeforeAfter, SoundToggle, menu
- Isso melhora LCP, SEO e no-JS

## 4. CSS base (globals.css)
```css
@import "tailwindcss";

@theme {
  /* cores, fontes, durações, easings do DESIGN.md */
  --font-display: var(--font-archivo-black);
  --font-sans: var(--font-source-sans);
  --font-mono: var(--font-jetbrains-mono);

  --duration-fast: 120ms;
  --duration-base: 240ms;
  --duration-slow: 480ms;
  --duration-reveal: 700ms;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

:root {
  color-scheme: dark;
  --light-rgb: 255, 180, 107;
  --light-intensity: 0.45;
  --light-shadow: 0.65;
  --light-origin: 85% 8%;
}

html {
  background: var(--color-concrete-900);
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--color-bone) 35%, transparent) transparent;
}

body {
  color: var(--color-bone);
  font-family: var(--font-sans);
  background: var(--color-concrete-900);
  overflow-x: clip;
}

.type-display {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 0.88;
}

.type-mono {
  font-family: var(--font-mono);
  font-size: var(--text-mono);
  letter-spacing: 0.08em;
  text-transform: lowercase;
}
```
**Usar utilitários `type-*`, nunca `text-*` custom** (tailwind-merge descarta).

## 5. Lenis + GSAP
```ts
// lib/gsap.ts
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, Flip);
gsap.defaults({ ease: 'power3.out', duration: 0.24 });
ScrollTrigger.defaults({ toggleActions: 'play none none reverse' });
```
**Nunca usar CSS var como ease**.

```tsx
// providers/SmoothScrollProvider.tsx
const lenis = new Lenis({
  lerp: 0.09,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: false,
});
lenis.on('scroll', ScrollTrigger.update);
const tick = (time: number) => lenis.raf(time * 1000);
gsap.ticker.add(tick);
gsap.ticker.lagSmoothing(0);
```
- Reduced motion: não instanciar Lenis
- Menu/preloader: `lenis.stop()` / `start()`
- `ScrollTrigger.refresh()` após fontes e imagens

## 6. LightEngine
- LightProvider mantém `activeChapter`
- ScrollTrigger por seção (`start: 'top 55%'`, `end: 'bottom 55%'`)
- ChapterLight renderiza duas camadas; crossfade 480 ms
- Atualiza `--light-rgb`, `--light-intensity`, `--light-shadow`, `--light-origin`
- Dispara `trapp:light:change` para ripple/som
- Reduced motion: troca instantânea, sem ripple/flash

```css
.light-layer {
  background:
    radial-gradient(60% 50% at var(--light-origin),
      rgb(var(--light-rgb) / var(--light-intensity)), transparent 70%),
    radial-gradient(80% 80% at 50% 50%,
      transparent 40%, rgb(0 0 0 / var(--light-shadow)) 100%);
}
```

## 7. SmartImage e no-JS
SmartImage usa `<picture>` com AVIF/WebP, srcset, sizes, width, height, LQIP inline, loading, fetchPriority, decoding.
- Hero: priority, fetchPriority="high"
- Resto: loading="lazy"
- Dimensões sempre presentes (CLS)

**No-JS**:
```html
<html lang="pt-BR" class="no-js" suppressHydrationWarning>
<head>
  <script>document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');</script>
</head>
```
```css
.no-js .ba-slider { display: none; }
.no-js .ba-fallback { display: grid; }
.js .ba-fallback { display: none; }
.no-js .filters { display: none; }
.no-js .menu-button { display: none; }
.no-js .mobile-nav { display: block; }
```
Reveals: não esconder por CSS inicial; usar GSAP `from` em `useGSAP` (layout effect) para não quebrar no-JS.

## 8. Primitivas de movimento

| Primitiva | Props principais | Comportamento |
|-----------|------------------|---------------|
| LightSweep | temperature, angle, trigger, duration | máscara gradiente + clip-path + filtro; 700 ms; hover 240 ms; scrub opcional |
| CalligraDraw | src ou path, color, mode, scrub | SVG DrawSVG ou máscara raster mask-position; tint por currentColor |
| MetallicRipple | active, origin, color | 3 anéis SVG + waveform; 700 ms; sem loop |
| PinScrub | children, length, horizontal, id | wrapper pinado, track interno; matchMedia ≥1024 |
| BuildScrub | images, steps | 8 bandas clip-path + grayscale→cor; scrub 1 |
| SprayReveal | children, color | máscara PNG de borda + clip-path; sem filtro SVG por frame |
| Flash | temperature, intensity | overlay radial 120 ms, 1×/capítulo |
| BeforeAfter | before, after, labels | range + --pos + clip-path; teclado/toque; aria-valuetext |
| ArapongaCue | enabled | Web Audio sintetizado + ripple; opt-in; localStorage |
| ScrollbarCalligraphy | path | SVG DrawSVG scrub + label de temperatura |

**Regras GSAP**:
- Nunca o mesmo elemento como pin e pinSpacer
- Nunca pinar dentro de ancestor com transform
- Mover o track interno, não a janela
- Clip-path no filho; wrapper não clipado
- `useGSAP` com scope e cleanup
- Só transform/opacity em animação contínua
- Canvas pausado por IntersectionObserver

## 9. Pipeline de assets

### 9.1 Ordem
1. Criar `assets-source/` e copiar `IMAGENS-SITE` (originais intactos)
2. Baixar Lovable para `assets-source/lovable/`
3. `npm run images` → AVIF/WebP + LQIP + manifest
4. `npm run art` → máscaras alpha
5. `npm run og` → OG 1200×630
6. `npm run favicons` → 16/32/180/192/512 + .ico

### 9.2 Otimização
- Larguras: 480, 640, 960, 1280, 1600, 2000 (sem ampliar)
- AVIF q50–55, esforço 4; WebP q75
- LQIP base64 20 px
- Manifest com id, width, height, aspect, widths, lqip
- Nomes estáveis: `slug-w640.avif`, `slug-w640.webp`, etc.
- Não usar HEIC; usar JPG correspondente

### 9.3 Máscaras
- `logo3-1-alpha` (gótico roxo) — abertura
- `logo-trapp-alpha` (tag azul) — fecho
- `logo-tipo2-alpha` (gótico) — manifesto
- `calligra-wall-01/02/03` — fundos tingidos
- Recorte opcional da araponga
- Máscara sempre branca + alpha; cor via CSS

### 9.4 OG/favicons
- OG: araponga + tipo bone + "RUAN TRAPP / O CANTO QUE CONSTRÓI"; 1200×630; < 200 KB
- Favicon: monograma RT em Archivo Black, osso sobre concreto; gerar todos os tamanhos
- `site.webmanifest` com nome, tema, ícones

## 10. Acessibilidade
- WCAG 2.2 AA
- Contraste: osso sobre concreto ~13:1; prata ~7:1; ouro só em texto grande/acento
- Foco visível 2 px osso + offset; skip link; landmarks; headings
- Teclado: menu, slider, lightbox, som, capítulos; ESC, setas, Home/End
- `aria-live` para valor do slider e lightbox
- Alvos ≥ 44 px; sem informação só em hover
- Reduced motion: sem Lenis, pin, parallax, flash, ripple; luz instantânea
- Som opt-in; sem autoplay; volume baixo; AudioContext só após clique
- Flash seguro: 1×/capítulo, 120 ms, sem branco cheio
- No-JS: conteúdo visível, nav, fallback antes/depois, links de imagem
- `lang="pt-BR"`; zoom 200% sem overflow

## 11. Performance
- LCP < 1.5 s; CLS < 0.05; INP < 100 ms; 60 fps
- Hero AVIF/WebP < 120 KB, preload com imagesrcset/imagesizes, fetchpriority="high"
- JS inicial < 220 KB gzip; code-split de lightbox/som/ripple
- Fontes via next/font, subset latin, pesos limitados
- Imagens lazy abaixo da dobra; LQIP; dimensões
- Sem content-visibility em seções pinadas
- Canvas pausado offscreen; sem loops redundantes
- Lighthouse mobile/desktop como gate
- Se preloader atrasar LCP: reduzir para 600–900 ms, pular em mobile/reduced-data, ou desligar na primeira visita

## 12. QA / Playwright

### 12.1 Viewports
375, 390, 768, 1024, 1440, 1920

### 12.2 Specs
- `smoke.spec.ts`: título, H1, CTAs, links WhatsApp/Instagram, console 0
- `responsive.spec.ts`: scrollWidth <= clientWidth + 1
- `no-js.spec.ts`: javaScriptEnabled: false; conteúdo e fallback visíveis
- `reduced-motion.spec.ts`: reducedMotion: 'reduce'; sem pin/parallax/flash
- `interactions.spec.ts`: menu, lightbox, filtros, slider, som
- `a11y.spec.ts`: axe + teclado + foco + dialog + slider
- `screenshots.spec.ts`: capturas por viewport

### 12.3 Comandos
```bash
npx tsc --noEmit
npm run lint
npm run build
npx serve out -l 4173
npx playwright test
```

### 12.4 Critérios
- Console 0 erros/warnings; 0 page errors
- 0 overflow horizontal
- 0 imagem quebrada
- Todos os links corretos
- Lightbox/slider/menu/som funcionando
- No-JS e reduced motion ok
- Lighthouse: Perf ≥ 90 mobile; A11y ≥ 95; BP ≥ 90; SEO ≥ 95

## 13. Riscos e armadilhas (lições da v2)

| Risco | Regra |
|-------|-------|
| Pin quebrado | nunca pin === pinSpacer; nunca pinar dentro de transform |
| GSAP com CSS var | usar 'expo.out', não var(--ease) |
| Clip-path + whileInView | clip no filho; wrapper não clipado |
| Tailwind-merge | utilitários type-*, não text-* custom |
| UTF-8 | editar pelas ferramentas, não PowerShell |
| Preload | não usar crossOrigin em imagem |
| Overflow | overflow-x: clip, não hidden no body |
| 100vh mobile | usar 100svh/100dvh com fallback |
| ScrollTrigger | refresh() após fontes/imagens |
| sessionStorage | só em efeito/client |
| AudioContext | só após gesto; resume on visibility |
| Safari | prefixos -webkit-mask-image, testar clip-path |
| LCP | preloader curto; hero prioritário; fallback |
| next/font | build precisa de rede; se falhar, baixar WOFF2 local |
| Deploy | out/ estático; headers no host, não no next.config |

## 14. Handoff checklist
- [ ] 4 docs escritos e atualizados
- [ ] npm install ok
- [ ] npx tsc --noEmit limpo
- [ ] npm run lint limpo
- [ ] npm run build limpo
- [ ] out/ gerado
- [ ] Playwright passando nos 6 viewports
- [ ] Console 0 erros/warnings
- [ ] 0 overflow horizontal
- [ ] No-JS ok
- [ ] Reduced motion ok
- [ ] Lighthouse dentro das metas
- [ ] README com comandos, deploy, placeholders e créditos
- [ ] Nenhum push/deploy feito
- [ ] v1/v2 intactos

## 15. O que NÃO fazer
- Não usar preto/branco puro
- Não usar gradiente roxo de IA
- Não usar roxo fora da abertura; azul fora do fecho
- Não usar cartoon, mascote, emoji
- Não usar cards genéricos de SaaS
- Não inventar email, preço, ano, dimensão ou crédito
- Não usar WebGL sem necessidade comprovada
- Não colocar formulário sem backend
- Não fazer preloader longo
- Não esconder conteúdo no no-JS
- Não tocar em v1/v2
- Não fazer commit/push/deploy