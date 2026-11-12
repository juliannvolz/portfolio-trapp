# DESIGN.md — Lighting Bible, tokens, tipografia, composição

## 1. Lighting Bible

Cada capítulo registra: fonte, temperatura, direção, motivo, cor, intensidade, sombra, tratamento de imagem, cue de movimento.

```ts
// src/lib/light.ts
export const CHAPTERS = [
  { id: 'inicio',       index: '01', label: 'A RUA',           kelvin: 2200, source: 'poste de sódio',        direction: 'topo-direita',    origin: '85% 8%',   rgb: '255,180,107', intensity: 0.45, shadow: 0.65 },
  { id: 'obra',         index: '02', label: 'A OBRA',          kelvin: 3000, source: 'galeria / LED',         direction: 'topo + lateral',    origin: '70% 15%',  rgb: '255,209,161', intensity: 0.30, shadow: 0.55 },
  { id: 'caminho',      index: '03', label: 'O CAMINHO',       kelvin: 3000, source: '14 luminárias LED',     direction: 'poços de cima',     origin: '50% 0%',   rgb: '255,209,161', intensity: 0.35, shadow: 0.60 },
  { id: 'acervo',       index: '04', label: 'O ACERVO',        kelvin: 3000, source: 'galeria',               direction: 'rasante lateral',   origin: '15% 40%',  rgb: '255,209,161', intensity: 0.28, shadow: 0.50 },
  { id: 'transformacao',index: '05', label: 'A TRANSFORMAÇÃO', kelvin: 5600, source: 'amanhecer',             direction: 'horizonte baixo',   origin: '50% 100%', rgb: '232,241,255', intensity: 0.40, shadow: 0.35 },
  { id: 'processo',     index: '06', label: 'O PROCESSO',      kelvin: 5600, source: 'amanhecer',             direction: 'baixa/longa',       origin: '20% 100%', rgb: '232,241,255', intensity: 0.38, shadow: 0.40 },
  { id: 'oficio',       index: '07', label: 'O OFÍCIO',        kelvin: 5000, source: 'ring light',            direction: 'frontal circular',  origin: '50% 35%',  rgb: '242,245,255', intensity: 0.30, shadow: 0.30 },
  { id: 'fecho',        index: '08', label: 'O FECHO',         kelvin: 5600, source: 'amanhecer + tag azul',  direction: 'baixa/frontal',     origin: '50% 100%', rgb: '232,241,255', intensity: 0.35, shadow: 0.30 },
] as const;
```

**Tattoo dentro de ofício**: luz 2700K, `rgb: '255,195,138'`, direção próximo/lateral, motivo pele.

## 2. Tokens de cor

```css
@theme {
  --color-concrete-900: #0B0A08;
  --color-concrete-800: #12100D;
  --color-concrete-700: #1A1713;
  --color-bone:         #EDE8DF;
  --color-bone-dim:     #C9C2B6;
  --color-silver:       #A8A8A1;
  --color-gold:         #C8A24A;
  --color-purple:       #6E4F9E; /* só abertura */
  --color-blue:         #2F7FD6; /* só fecho */
  --color-red:          #B4382E; /* acento raro */
  --color-light-2200:   #FFB46B;
  --color-light-3000:   #FFD1A1;
  --color-light-5000:   #F2F5FF;
  --color-light-5600:   #E8F1FF;
  --color-light-2700:   #FFC38A;
}
```

**Proibido**: preto/branco puro, gradiente roxo de IA, glow neon em tudo, roxo/azul fora dos dois logos.

## 3. Tipografia

| Papel | Fonte | Variável |
|-------|-------|----------|
| Display | Archivo Black | `--font-archivo-black` |
| Corpo | Source Sans 3 | `--font-source-sans` |
| Mono | JetBrains Mono | `--font-jetbrains-mono` |
| Gótico | assets logo3.1 / logo-tipo2 | — |

**Regras**: display uppercase, tracking −0.03em, line-height 0.88; mono lowercase; corpo 1.6; nunca system-ui.

**Escala**:
```css
--text-display-xl: clamp(4.5rem, 14vw, 13rem);
--text-display-lg: clamp(3.5rem, 10vw, 9rem);
--text-display-md: clamp(2.5rem, 6vw, 5.5rem);
--text-h2:         clamp(2rem, 4vw, 3.5rem);
--text-body:       clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-mono:       clamp(0.6875rem, 0.65rem + 0.15vw, 0.8125rem);
```

## 4. Composição e texturas

- Grid 12 colunas, full-bleed, assimétrico, sem cards.
- Tipo display sobreposto à imagem em 8–16%, com scrim de luz.
- Cortes diagonais de −3° a −6° nas bordas de seção, nunca no texto.
- Texturas: concreto via SVG feTurbulence 4–6%; grip em faixas pequenas; halftone em legendas; grão fixo; spray edge em máscara PNG pré-gerada.
- Nada "quadradão": colunas deslocadas, faixas verticais, legendas de zine, fitas de grip.

## 5. Imagem, logos e scrollbar

- Fotos diurnas recebem grade de luz CSS; não destruir a obra.
- Portfólio: imagem começa a 72% de brilho/dessaturada; LightSweep revela a cor real.
- Tattoo: pele natural, luz quente suave.
- Abertura: `logo3.1.jpg` com backlight roxo; único roxo do site.
- Fecho: `logo-trapp.jpg` com SprayReveal azul; único azul do site.
- Scrollbar nativa fina + traço caligráfico SVG DrawSVG à direita, `aria-hidden`; label de temperatura; some no mobile.

## 6. Anti-direção

❌ Cards 3 colunas com ícone + título + texto.  
❌ Gradiente roxo AI, arco-íris, glow neon.  
❌ Cartoon, mascote, emoji, fonte infantil.  
❌ Preloader de 6s, scroll lock longo.  
❌ Texto em 3ª pessoa.  
❌ Email/WhatsApp falsos, dados inventados.  
❌ Animação de blur em áreas grandes.