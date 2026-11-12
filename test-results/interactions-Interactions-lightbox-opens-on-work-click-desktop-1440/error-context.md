# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Interactions >> lightbox opens on work click
- Location: tests\e2e\interactions.spec.ts:30:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[role="dialog"][aria-modal="true"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('[role="dialog"][aria-modal="true"]') with timeout 5000ms
  - waiting for locator('[role="dialog"][aria-modal="true"]')

```

```yaml
- link "Pular para o conteúdo principal":
  - /url: "#main"
- alert
- banner:
  - link "Ruan Trapp - Início":
    - /url: /
    - text: RUAN TRAPP
  - navigation "Navegação principal":
    - link "A OBRA":
      - /url: "#obra"
    - link "O CAMINHO":
      - /url: "#caminho"
    - link "O ACERVO":
      - /url: "#acervo"
    - link "O OFÍCIO":
      - /url: "#oficio"
    - link "O FECHO":
      - /url: "#fecho"
  - button "Abrir WhatsApp": Orçamento
- main:
  - img "Caminho das Artes - vista geral da galeria a céu aberto": Imagem indisponível
  - paragraph: 01 / A RUA · 2200K
  - paragraph: RUAN TRAPP
  - heading "O CANTO QUE CONSTRÓI" [level=2]
  - paragraph: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
  - link "VER AS OBRAS":
    - /url: "#acervo"
  - link "FALAR NO WHATSAPP":
    - /url: https://wa.me/554792242056
  - paragraph: DESÇA A RUA
  - paragraph: 02 / A OBRA · 3000K
  - heading "A rua foi minha primeira escola." [level=2]
  - paragraph: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
  - paragraph: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
  - paragraph: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
  - term: Ruan Trapp
  - term: Jaraguá do Sul — SC
  - term: graffiti desde 2018
  - term: muralista desde 2024
  - term: murais · letreiros · telas · tatuagem · oficinas
  - link "Ver o Caminho das Artes":
    - /url: "#caminho"
  - paragraph: 03 / O CAMINHO · 3000K
  - heading "O canto que constrói." [level=2]
  - paragraph: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
  - article:
    - img "Vista geral do Caminho das Artes"
    - text: Vista geral 600 m de galeria a céu aberto
  - article:
    - img "Araponga no Caminho das Artes"
    - text: A araponga Ave da Mata Atlântica, canto metálico
  - article:
    - img "Captação do projeto"
    - text: Captação Processo de seleção dos 30 artistas
  - article:
    - img "Processo de pintura"
    - text: Processo Execução dos murais ao longo do percurso
  - article: Detalhes Trabalho em altura e escala urbana
  - article: Finalização Acabamento e iluminação LED
  - article: Etapa 2 Segunda fase de execução
  - list:
    - listitem: 600 m de percurso
    - listitem: 1.500 m² de muros
    - listitem: 30 artistas
    - listitem: 14 luminárias LED
    - listitem: SCAR + Instituto AION
    - listitem: 150 anos de Jaraguá do Sul
  - blockquote: "\"O canto da araponga é o som da cidade: metal e mata.\""
  - paragraph: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
  - paragraph: 04 / O ACERVO · 3000K
  - heading "Cada parede acende diferente." [level=2]
  - paragraph: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
  - group "Filtros de categoria":
    - button "TODOS" [pressed]
    - button "MURAIS"
    - button "CALIGRAFIA"
    - button "TELAS"
    - button "ESTÚDIO & TATTOO"
  - button "Ver Caminho das Artes — Vista Geral":
    - img "Vista geral do Caminho das Artes, galeria a céu aberto em Jaraguá do Sul"
    - text: Caminho das Artes — Vista Geral· 2026
  - button "Ver Araponga — Painel Caminho das Artes":
    - img "Painel da araponga em letra 3D Wildstyle, metal e geometria": Imagem indisponível
    - text: Araponga — Painel Caminho das Artes· 2026
  - button "Ver Araponga — Caligrafia":
    - img "Detalhe caligráfico da araponga": Imagem indisponível
    - text: Araponga — Caligrafia· 2026
  - button "Ver Mandala com Lustre":
    - img "Mural mandala com lustre central": Imagem indisponível
    - text: Mandala com Lustre
  - button "Ver Caligrafia Prata":
    - img "Mural de caligrafia em tons prateados": Imagem indisponível
    - text: Caligrafia Prata
  - button "Ver Sala de Violão":
    - img "Mural em sala com violão": Imagem indisponível
    - text: Sala de Violão
  - button "Ver Ouro e Prata":
    - img "Mural com detalhes em dourado e prateado": Imagem indisponível
    - text: Ouro e Prata
  - button "Ver Pássaro Amarelo — Realismo":
    - img "Pássaro amarelo em estilo realista": Imagem indisponível
    - text: Pássaro Amarelo — Realismo
  - button "Ver Estúdio — Espelho":
    - img "Trabalho de estúdio com espelho": Imagem indisponível
    - text: Estúdio — Espelho
  - button "Ver Estúdio — Noturno":
    - img "Trabalho de estúdio cena noturna": Imagem indisponível
    - text: Estúdio — Noturno
  - button "Ver Antes — Mandala":
    - img "Parede antes da intervenção mandala": Imagem indisponível
    - text: Antes — Mandala· 2024
  - button "Ver Grafite Academia":
    - img "Grafite em academia"
    - text: Grafite Academia
  - button "Ver Grafite Escrita":
    - img "Grafite com foco em escrita"
    - text: Grafite Escrita
  - button "Ver Caligrafia Cliente — Pronto":
    - img "Caligrafia finalizada para cliente"
    - text: Caligrafia Cliente — Pronto
  - button "Ver Caligrafia Parede Branca":
    - img "Caligrafia em parede branca"
    - text: Caligrafia Parede Branca
  - button "Ver Ruan Trapp Pintando":
    - img "Ruan Trapp em processo de pintura": Imagem indisponível
    - text: Ruan Trapp Pintando
  - button "Ver Caligrafite Studio Tattoo":
    - img "Trabalho de estúdio estilo tattoo"
    - text: Caligrafite Studio Tattoo
  - paragraph: 05 / A TRANSFORMAÇÃO · 5600K
  - heading "Antes de acender, a parede é só parede." [level=2]
  - paragraph: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
  - slider "Comparação antes e depois":
    - paragraph: arraste ou use as setas
  - text: Parede antes e depois da intervenção Mandala
  - paragraph: 06 / O PROCESSO · 5600K
  - heading "Do rascunho ao último brilho." [level=2]
  - paragraph: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
  - img "Construção da obra em etapas"
  - term: 01 CONVERSA
  - definition: Entendo o espaço, a luz e o que a parede precisa dizer.
  - term: 02 ESBOÇO
  - definition: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
  - term: 03 PAREDE
  - definition: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
  - term: 04 ASSINATURA
  - definition: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
  - paragraph: 07 / O OFÍCIO · 5000K / 2700K
  - heading "O que eu faço na parede — e na pele." [level=2]
  - article:
    - text: "01"
    - heading "MURAIS EXTERIORES" [level=3]
    - paragraph: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
    - link "Orçamento no WhatsApp":
      - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
  - article:
    - text: "02"
    - heading "LETREIROS & IDENTIDADE" [level=3]
    - paragraph: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
    - link "Orçamento no WhatsApp":
      - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
  - article:
    - text: "03"
    - heading "TELAS & QUADROS" [level=3]
    - paragraph: Obras em tela para colecionadores e ambientes internos.
    - link "Orçamento no WhatsApp":
      - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
  - article:
    - text: "04"
    - heading "TATUAGEM" [level=3]
    - paragraph: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
    - heading "A pele é a parede mais próxima." [level=4]
    - paragraph: Luz 2700K para a pele. Ring light 5000K para o estúdio.
    - link "Orçamento no WhatsApp":
      - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
  - article:
    - text: "05"
    - heading "OFICINAS" [level=3]
    - paragraph: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
    - link "Orçamento no WhatsApp":
      - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
  - paragraph: 08 / O FECHO · 5600K
  - heading "A rua continua." [level=2]
  - paragraph: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
  - link "FALAR NO WHATSAPP":
    - /url: https://wa.me/554792242056
  - paragraph: Jaraguá do Sul — SC. Atendo a região e projetos fora.
  - paragraph:
    - text: "Instagram:"
    - link "@ruantrapp":
      - /url: https://instagram.com/ruantrapp
- contentinfo:
  - paragraph: RUAN TRAPP
  - paragraph: Jaraguá do Sul — SC
  - heading "Créditos" [level=3]
  - paragraph: "Imagens: acervo do artista"
  - paragraph: © 2026 Ruan Trapp
  - link "voltar ao topo":
    - /url: "#inicio"
- navigation "Ações rápidas":
  - link "Falar no WhatsApp":
    - /url: https://wa.me/554792242056
    - text: WhatsApp
  - link "Instagram @ruantrapp":
    - /url: https://instagram.com/ruantrapp
    - text: Instagram
- navigation "Índice de capítulos":
  - list:
    - listitem:
      - link "01 A RUA":
        - /url: "#inicio"
    - listitem:
      - link "02 A OBRA":
        - /url: "#obra"
    - listitem:
      - link "03 O CAMINHO":
        - /url: "#caminho"
    - listitem:
      - link "04 O ACERVO":
        - /url: "#acervo"
    - listitem:
      - link "05 A TRANSFORMAÇÃO":
        - /url: "#transformacao"
    - listitem:
      - link "06 O PROCESSO":
        - /url: "#processo"
    - listitem:
      - link "07 O OFÍCIO":
        - /url: "#oficio"
    - listitem:
      - link "08 O FECHO":
        - /url: "#fecho"
- button "Ativar som"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Interactions', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/');
  6   |     await page.waitForLoadState('networkidle');
  7   |     await page.waitForTimeout(1500);
  8   |   });
  9   | 
  10  |   test.describe('mobile viewport', () => {
  11  |     test.use({ viewport: { width: 375, height: 667 } });
  12  | 
  13  |     test('mobile menu opens and closes', async ({ page }) => {
  14  |       await page.goto('/');
  15  |       await page.waitForLoadState('networkidle');
  16  |       await page.waitForTimeout(1500);
  17  | 
  18  |       const menuButton = page.locator('button[aria-label="Abrir menu"]');
  19  |       await expect(menuButton).toBeVisible();
  20  |       await menuButton.click();
  21  | 
  22  |       const mobileNav = page.locator('#mobile-nav, nav[aria-label="Menu mobile"]');
  23  |       await expect(mobileNav).toBeVisible();
  24  | 
  25  |       await menuButton.click();
  26  |       await expect(mobileNav).toBeHidden();
  27  |     });
  28  |   });
  29  | 
  30  |   test('lightbox opens on work click', async ({ page }) => {
  31  |     await page.setViewportSize({ width: 1024, height: 768 });
  32  |     await page.goto('/');
  33  |     await page.waitForLoadState('networkidle');
  34  |     await page.waitForTimeout(3000);
  35  | 
  36  |     const firstWork = page.locator('#acervo button').first();
  37  |     await expect(firstWork).toBeVisible();
  38  |     await firstWork.click();
  39  | 
  40  |     const lightbox = page.locator('[role="dialog"][aria-modal="true"]');
> 41  |     await expect(lightbox).toBeVisible({ timeout: 5000 });
      |                            ^ Error: expect(locator).toBeVisible() failed
  42  | 
  43  |     await page.keyboard.press('Escape');
  44  |     await expect(lightbox).toBeHidden();
  45  |   });
  46  | 
  47  |   test('portfolio filters work', async ({ page }) => {
  48  |     await page.setViewportSize({ width: 1024, height: 768 });
  49  |     await page.goto('/');
  50  |     await page.waitForLoadState('networkidle');
  51  |     await page.waitForTimeout(1000);
  52  | 
  53  |     const muralFilter = page.locator('button:has-text("MURAIS")');
  54  |     await expect(muralFilter).toBeVisible();
  55  |     await muralFilter.click();
  56  | 
  57  |     const count = await page.locator('#acervo button').count();
  58  |     expect(count).toBeGreaterThan(0);
  59  |   });
  60  | 
  61  |   test('BeforeAfter slider works with mouse', async ({ page }) => {
  62  |     await page.setViewportSize({ width: 1024, height: 768 });
  63  |     await page.goto('/');
  64  |     await page.waitForLoadState('networkidle');
  65  |     await page.waitForTimeout(1000);
  66  | 
  67  |     const slider = page.locator('#transformacao [role="slider"]');
  68  |     await expect(slider).toBeVisible();
  69  | 
  70  |     const box = await slider.boundingBox();
  71  |     if (box) {
  72  |       await page.mouse.move(box.x + box.width * 0.2, box.y + box.height / 2);
  73  |       await page.mouse.down();
  74  |       await page.mouse.move(box.x + box.width * 0.8, box.y + box.height / 2);
  75  |       await page.mouse.up();
  76  | 
  77  |       const position = await slider.getAttribute('aria-valuenow');
  78  |       expect(parseInt(position || '0')).toBeGreaterThan(20);
  79  |     }
  80  |   });
  81  | 
  82  |   test('BeforeAfter slider works with keyboard', async ({ page }) => {
  83  |     await page.setViewportSize({ width: 1024, height: 768 });
  84  |     await page.goto('/');
  85  |     await page.waitForLoadState('networkidle');
  86  |     await page.waitForTimeout(1000);
  87  | 
  88  |     const slider = page.locator('#transformacao [role="slider"]');
  89  |     await slider.focus();
  90  | 
  91  |     await page.keyboard.press('ArrowRight');
  92  |     await page.keyboard.press('ArrowRight');
  93  | 
  94  |     const position = await slider.getAttribute('aria-valuenow');
  95  |     expect(parseInt(position || '0')).toBeGreaterThanOrEqual(10);
  96  |   });
  97  | 
  98  |   test('SoundToggle toggles sound', async ({ page }) => {
  99  |     await page.setViewportSize({ width: 1024, height: 768 });
  100 |     await page.goto('/');
  101 |     await page.waitForLoadState('networkidle');
  102 | 
  103 |     const soundToggle = page.locator('button[aria-label*="som"], button[aria-label*="Som"]').first();
  104 |     await expect(soundToggle).toBeVisible();
  105 | 
  106 |     const initialState = await soundToggle.getAttribute('aria-pressed');
  107 |     await soundToggle.click();
  108 |     const newState = await soundToggle.getAttribute('aria-pressed');
  109 | 
  110 |     expect(newState).not.toBe(initialState);
  111 |   });
  112 | });
```