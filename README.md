# Ruan Trapp Portfolio v3 — "O CANTO QUE CONSTRÓI"

Site de portfólio do artista visual Ruan Trapp, muralista e tatuador de Jaraguá do Sul (SC).

## Conceito
Uma caminhada noturna por Jaraguá. Cada obra só existe quando a luz certa chega. Quem acende é o canto metálico da araponga.

## Stack
- Next.js 16 (App Router, static export)
- React 19
- TypeScript strict
- Tailwind CSS v4
- GSAP 3.13 (@gsap/react, ScrollTrigger, SplitText, DrawSVG, Flip)
- Lenis (smooth scroll)
- Motion (Framer Motion)

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento (Turbopack)
npm run dev

# Build de produção (export estático)
npm run build

# Preview do build
npm run preview

# Typecheck
npm run typecheck

# Lint
npm run lint

# Otimizar imagens (AVIF/WebP + LQIP)
npm run images

# Extrair máscaras alpha
npm run art

# Gerar OG image (1200x630)
npm run og

# Gerar favicons
npm run favicons

# Testes E2E (Playwright)
npm run test:e2e
```

## Deploy
1. `npm run build` → gera pasta `out/`
2. Subir `out/` para Netlify, Vercel, Cloudflare Pages ou qualquer host estático
3. Configurar headers de cache (ver `netlify.toml`)

## Variáveis de ambiente
- `SITE_URL` — URL final do site (padrão: `https://ruantrapp.vercel.app`)

## Estrutura de pastas
```
ruantrappportfolio-v3/
├─ docs/                 # CONTENT.md, DESIGN.md, PLAN.md, CONVENTIONS.md
├─ public/               # assets estáticos (images, favicons, og, robots, sitemap)
├─ scripts/              # scripts de build (imagens, OG, favicons)
├─ src/
│  ├─ app/               # App Router pages
│  ├─ components/        # componentes React
│  ├─ content/           # dados tipados (site, works, services, process)
│  └─ lib/               # utilitários (GSAP, Lenis, light, hooks)
└─ tests/e2e/            # Playwright specs
```

## Créditos
- Artista: Ruan Trapp
- Fotos: acervo do artista
- Projeto Caminho das Artes: SCAR + Instituto AION
- Curadoria: Beto Shibata e Denyse Silva
- Desenvolvimento: [seu nome/aqui]

## Licença
Todos os direitos reservados. Imagens e obras pertencem a Ruan Trapp.