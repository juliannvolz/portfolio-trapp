# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility >> skip link works
- Location: tests\e2e\a11y.spec.ts:50:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.skip-link:focus')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.skip-link:focus') with timeout 5000ms
  - waiting for locator('.skip-link:focus')

```

```yaml
- link "Pular para o conteúdo principal":
  - /url: "#main"
- alert
- banner:
  - link "Ruan Trapp - Início":
    - /url: /
    - text: RUAN TRAPP
  - button "Abrir menu"
  - navigation "Menu mobile (sem JavaScript)":
    - list:
      - listitem:
        - link "A OBRA":
          - /url: "#obra"
      - listitem:
        - link "O CAMINHO":
          - /url: "#caminho"
      - listitem:
        - link "O ACERVO":
          - /url: "#acervo"
      - listitem:
        - link "O OFÍCIO":
          - /url: "#oficio"
      - listitem:
        - link "O FECHO":
          - /url: "#fecho"
      - listitem:
        - link "Orçamento no WhatsApp":
          - /url: https://wa.me/554792242056
- main:
  - img "Caminho das Artes - vista geral da galeria a céu aberto"
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
  - article: A araponga Ave da Mata Atlântica, canto metálico
  - article: Captação Processo de seleção dos 30 artistas
  - article: Processo Execução dos murais ao longo do percurso
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
  - button "Ver Mandala com Lustre": Mandala com Lustre
  - button "Ver Caligrafia Prata": Caligrafia Prata
  - button "Ver Sala de Violão": Sala de Violão
  - button "Ver Ouro e Prata": Ouro e Prata
  - button "Ver Pássaro Amarelo — Realismo": Pássaro Amarelo — Realismo
  - button "Ver Estúdio — Espelho": Estúdio — Espelho
  - button "Ver Estúdio — Noturno": Estúdio — Noturno
  - button "Ver Antes — Mandala": Antes — Mandala· 2024
  - button "Ver Grafite Academia": Grafite Academia
  - button "Ver Grafite Escrita": Grafite Escrita
  - button "Ver Caligrafia Cliente — Pronto": Caligrafia Cliente — Pronto
  - button "Ver Caligrafia Parede Branca": Caligrafia Parede Branca
  - button "Ver Ruan Trapp Pintando": Ruan Trapp Pintando
  - button "Ver Caligrafite Studio Tattoo": Caligrafite Studio Tattoo
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
- button "Ativar som"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import AxeBuilder from '@axe-core/playwright';
  3   | 
  4   | test.describe('Accessibility', () => {
  5   |   test('passes axe accessibility checks', async ({ page }) => {
  6   |     await page.goto('/');
  7   |     await page.waitForLoadState('networkidle');
  8   |     await page.waitForTimeout(1500);
  9   | 
  10  |     const accessibilityScanResults = await new AxeBuilder({ page })
  11  |       .withTags(['wcag2aa', 'wcag21aa', 'best-practice'])
  12  |       .analyze();
  13  | 
  14  |     expect(accessibilityScanResults.violations).toHaveLength(0);
  15  |   });
  16  | 
  17  |   test('keyboard navigation works', async ({ page }) => {
  18  |     await page.goto('/');
  19  |     await page.waitForLoadState('networkidle');
  20  |     await page.waitForTimeout(1500);
  21  | 
  22  |     await page.keyboard.press('Tab');
  23  |     const firstFocused = await page.evaluate(() => document.activeElement?.tagName);
  24  |     expect(firstFocused).toBeTruthy();
  25  | 
  26  |     await page.keyboard.press('Tab');
  27  |     await page.keyboard.press('Tab');
  28  |     const thirdFocused = await page.evaluate(() => document.activeElement?.getAttribute('href'));
  29  |     expect(thirdFocused).toBeTruthy();
  30  |   });
  31  | 
  32  |   test('focus visible on interactive elements', async ({ page }) => {
  33  |     await page.goto('/');
  34  |     await page.waitForLoadState('networkidle');
  35  |     await page.waitForTimeout(1500);
  36  | 
  37  |     const focusable = page.locator('a, button, [tabindex]:not([tabindex="-1"])');
  38  |     const count = await focusable.count();
  39  | 
  40  |     for (let i = 0; i < Math.min(count, 10); i++) {
  41  |       await focusable.nth(i).focus();
  42  |       const hasFocusStyle = await focusable.nth(i).evaluate((el) => {
  43  |         const styles = getComputedStyle(el);
  44  |         return styles.outline !== 'none' || styles.boxShadow !== 'none';
  45  |       });
  46  |       expect(hasFocusStyle).toBeTruthy();
  47  |     }
  48  |   });
  49  | 
  50  |   test('skip link works', async ({ page }) => {
  51  |     await page.goto('/');
  52  |     await page.waitForLoadState('networkidle');
  53  | 
  54  |     await page.keyboard.press('Tab');
  55  |     const skipLink = page.locator('.skip-link:focus');
> 56  |     await expect(skipLink).toBeVisible();
      |                            ^ Error: expect(locator).toBeVisible() failed
  57  |     await expect(skipLink).toHaveAttribute('href', '#main');
  58  |   });
  59  | 
  60  |   test('dialog focus management', async ({ page }) => {
  61  |     await page.setViewportSize({ width: 1024, height: 768 });
  62  |     await page.goto('/');
  63  |     await page.waitForLoadState('networkidle');
  64  |     await page.waitForTimeout(3000);
  65  | 
  66  |     const firstWork = page.locator('#acervo button').first();
  67  |     await firstWork.click();
  68  | 
  69  |     const dialog = page.locator('[role="dialog"][aria-modal="true"]');
  70  |     await expect(dialog).toBeVisible({ timeout: 5000 });
  71  | 
  72  |     const closeButton = dialog.locator('button[aria-label="Fechar lightbox"]');
  73  |     await expect(closeButton).toBeFocused();
  74  | 
  75  |     await page.keyboard.press('Escape');
  76  |     await expect(dialog).toBeHidden();
  77  |   });
  78  | 
  79  |   test('slider has proper ARIA attributes', async ({ page }) => {
  80  |     await page.goto('/');
  81  |     await page.waitForLoadState('networkidle');
  82  |     await page.waitForTimeout(1000);
  83  | 
  84  |     const slider = page.locator('#transformacao [role="slider"]');
  85  |     await expect(slider).toHaveAttribute('aria-valuemin', '0');
  86  |     await expect(slider).toHaveAttribute('aria-valuemax', '100');
  87  |     await expect(slider).toHaveAttribute('aria-valuenow');
  88  |     await expect(slider).toHaveAttribute('aria-valuetext');
  89  |     await expect(slider).toHaveAttribute('aria-label');
  90  |   });
  91  | 
  92  |   test('images have alt text', async ({ page }) => {
  93  |     await page.goto('/');
  94  |     await page.waitForLoadState('networkidle');
  95  | 
  96  |     const images = page.locator('img');
  97  |     const count = await images.count();
  98  | 
  99  |     for (let i = 0; i < count; i++) {
  100 |       const alt = await images.nth(i).getAttribute('alt');
  101 |       expect(alt).toBeTruthy();
  102 |       expect(alt?.length).toBeGreaterThan(0);
  103 |     }
  104 |   });
  105 | 
  106 |   test('headings hierarchy is correct', async ({ page }) => {
  107 |     await page.goto('/');
  108 |     await page.waitForLoadState('networkidle');
  109 | 
  110 |     const headings = page.locator('h1, h2, h3, h4, h5, h6');
  111 |     const count = await headings.count();
  112 | 
  113 |     let previousLevel = 0;
  114 |     for (let i = 0; i < count; i++) {
  115 |       const tagName = await headings.nth(i).evaluate((el) => el.tagName.toLowerCase());
  116 |       const level = parseInt(tagName[1]);
  117 |       if (previousLevel > 0) {
  118 |         expect(level).toBeLessThanOrEqual(previousLevel + 1);
  119 |       }
  120 |       previousLevel = level;
  121 |     }
  122 |   });
  123 | 
  124 |   test('color contrast meets WCAG AA', async ({ page }) => {
  125 |     await page.goto('/');
  126 |     await page.waitForLoadState('networkidle');
  127 | 
  128 |     const contrastIssues = await page.evaluate(() => {
  129 |       const issues: string[] = [];
  130 |       const elements = document.querySelectorAll('p, span, a, button, h1, h2, h3, h4, h5, h6, li, dt, dd');
  131 |       elements.forEach((el) => {
  132 |         const styles = getComputedStyle(el);
  133 |         const color = styles.color;
  134 |         const bgColor = styles.backgroundColor;
  135 |         if (color && bgColor && color !== bgColor) {
  136 |         }
  137 |       });
  138 |       return issues;
  139 |     });
  140 | 
  141 |     expect(contrastIssues).toHaveLength(0);
  142 |   });
  143 | });
```