# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility >> passes axe accessibility checks
- Location: tests\e2e\a11y.spec.ts:5:3

# Error details

```
Error: expect(received).toHaveLength(expected)

Expected length: 0
Received length: 1
Received array:  [{"description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds", "help": "Elements must meet minimum color contrast ratio thresholds", "helpUrl": "https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=playwright", "id": "color-contrast", "impact": "serious", "nodes": [{"all": [], "any": [{"data": {"bgColor": "#0b0a08", "contrastRatio": 3.08, "expectedContrastRatio": "4.5:1", "fgColor": "#6e4f9e", "fontSize": "8.3pt (11px)", "fontWeight": "normal", "messageKey": null}, "id": "color-contrast", "impact": "serious", "message": "Element has insufficient color contrast of 3.08 (foreground color: #6e4f9e, background color: #0b0a08, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1", "relatedNodes": [{"html": "<div class=\"fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[var(--color-concrete-900)] transition-opacity duration-300\" role=\"alert\" aria-live=\"polite\" aria-label=\"Carregando portfólio\">", "target": [".z-\\[2000\\]"]}]}], "failureSummary": "Fix any of the following:
  Element has insufficient color contrast of 3.08 (foreground color: #6e4f9e, background color: #0b0a08, font size: 8.3pt (11px), font weight: normal). Expected contrast ratio of 4.5:1", "html": "<p class=\"type-mono text-[var(--color-purple)] text-sm mb-6\">acendendo a rua</p>", "impact": "serious", "none": [], "target": [".text-\\[var\\(--color-purple\\)\\].text-sm.mb-6"]}], "tags": ["cat.color", "wcag2aa", "wcag143", "TTv5", "TT13.c", "EN-301-549", "EN-9.1.4.3", "ACT", "RGAAv4", "RGAA-3.2.1"]}]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Pular para o conteúdo principal" [ref=e2]:
    - /url: "#main"
  - alert [ref=e3]
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - link "Ruan Trapp - Início" [ref=e7]:
          - /url: /
          - text: RUAN TRAPP
        - button "Abrir menu" [ref=e9]
      - navigation "Menu mobile (sem JavaScript)" [ref=e12]:
        - list [ref=e13]:
          - listitem [ref=e14]:
            - link "A OBRA" [ref=e15]:
              - /url: "#obra"
          - listitem [ref=e16]:
            - link "O CAMINHO" [ref=e17]:
              - /url: "#caminho"
          - listitem [ref=e18]:
            - link "O ACERVO" [ref=e19]:
              - /url: "#acervo"
          - listitem [ref=e20]:
            - link "O OFÍCIO" [ref=e21]:
              - /url: "#oficio"
          - listitem [ref=e22]:
            - link "O FECHO" [ref=e23]:
              - /url: "#fecho"
          - listitem [ref=e24]:
            - link "Orçamento no WhatsApp" [ref=e25]:
              - /url: https://wa.me/554792242056
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic:
        - generic:
          - generic:
            - img "Caminho das Artes - vista geral da galeria a céu aberto"
      - generic [ref=e29]:
        - paragraph [ref=e30]: 01 / A RUA · 2200K
        - paragraph [ref=e31]: RUAN TRAPP
        - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=e32]
        - paragraph [ref=e33]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
        - generic [ref=e34]:
          - link "VER AS OBRAS" [ref=e35]:
            - /url: "#acervo"
          - link "FALAR NO WHATSAPP" [ref=e36]:
            - /url: https://wa.me/554792242056
        - paragraph [ref=e37]: DESÇA A RUA
    - generic [ref=e40]:
      - paragraph [ref=e41]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=e42]
      - generic [ref=e44]:
        - paragraph [ref=e45]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=e46]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=e47]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=e50]:
        - term [ref=e52]: Ruan Trapp
        - term [ref=e54]: Jaraguá do Sul — SC
        - term [ref=e56]: graffiti desde 2018
        - term [ref=e58]: muralista desde 2024
        - term [ref=e60]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=e61]:
        - /url: "#caminho"
    - generic [ref=e64]:
      - generic [ref=e65]:
        - paragraph [ref=e66]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=e67]
        - paragraph [ref=e68]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=e69]:
        - article [ref=e70]:
          - generic [ref=e71]:
            - generic:
              - generic:
                - img "Vista geral do Caminho das Artes"
          - generic [ref=e72]:
            - generic [ref=e73]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=e74]:
          - generic [ref=e76]:
            - generic [ref=e77]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=e78]:
          - generic [ref=e80]:
            - generic [ref=e81]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=e82]:
          - generic [ref=e84]:
            - generic [ref=e85]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=e86]:
          - generic [ref=e88]:
            - generic [ref=e89]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=e90]:
          - generic [ref=e92]:
            - generic [ref=e93]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=e94]:
          - generic [ref=e96]:
            - generic [ref=e97]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=e98]:
        - listitem [ref=e99]: 600 m de percurso
        - listitem [ref=e100]: 1.500 m² de muros
        - listitem [ref=e101]: 30 artistas
        - listitem [ref=e102]: 14 luminárias LED
        - listitem [ref=e103]: SCAR + Instituto AION
        - listitem [ref=e104]: 150 anos de Jaraguá do Sul
      - blockquote [ref=e105]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=e106]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=e108]:
      - paragraph [ref=e109]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=e110]
      - paragraph [ref=e111]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=e112]:
        - button "TODOS" [pressed] [ref=e113]
        - button "MURAIS" [ref=e114]
        - button "CALIGRAFIA" [ref=e115]
        - button "TELAS" [ref=e116]
        - button "ESTÚDIO & TATTOO" [ref=e117]
      - generic "Obras - 17 itens" [ref=e118]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=e119] [cursor=pointer]:
          - img "Vista geral do Caminho das Artes, galeria a céu aberto em Jaraguá do Sul" [ref=e123]
          - generic [ref=e124]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=e125] [cursor=pointer]:
          - img "Painel da araponga em letra 3D Wildstyle, metal e geometria" [ref=e128]:
            - generic [ref=e129]: Imagem indisponível
          - generic [ref=e130]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=e131] [cursor=pointer]:
          - img "Detalhe caligráfico da araponga" [ref=e134]:
            - generic [ref=e135]: Imagem indisponível
          - generic [ref=e136]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=e137] [cursor=pointer]:
          - generic [ref=e142]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=e143] [cursor=pointer]:
          - generic [ref=e148]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=e149] [cursor=pointer]:
          - generic [ref=e154]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=e155] [cursor=pointer]:
          - generic [ref=e160]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=e161] [cursor=pointer]:
          - generic [ref=e166]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=e167] [cursor=pointer]:
          - generic [ref=e172]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=e173] [cursor=pointer]:
          - generic [ref=e178]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=e179] [cursor=pointer]:
          - generic [ref=e184]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=e185] [cursor=pointer]:
          - generic [ref=e190]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=e191] [cursor=pointer]:
          - generic [ref=e196]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=e197] [cursor=pointer]:
          - generic [ref=e202]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=e203] [cursor=pointer]:
          - generic [ref=e208]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=e209] [cursor=pointer]:
          - generic [ref=e214]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=e215] [cursor=pointer]:
          - generic [ref=e220]: Caligrafite Studio Tattoo
    - generic [ref=e222]:
      - paragraph [ref=e223]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=e224]
      - paragraph [ref=e225]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=e226]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=e231]: arraste ou use as setas
      - generic [ref=e232]: Parede antes e depois da intervenção Mandala
    - generic [ref=e234]:
      - paragraph [ref=e235]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=e236]
      - paragraph [ref=e237]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=e239]
      - generic [ref=e251]:
        - generic [ref=e252]:
          - term [ref=e253]: 01 CONVERSA
          - definition [ref=e254]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=e255]:
          - term [ref=e256]: 02 ESBOÇO
          - definition [ref=e257]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=e258]:
          - term [ref=e259]: 03 PAREDE
          - definition [ref=e260]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=e261]:
          - term [ref=e262]: 04 ASSINATURA
          - definition [ref=e263]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=e265]:
      - paragraph [ref=e266]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=e267]
      - generic [ref=e268]:
        - article [ref=e269]:
          - generic [ref=e270]:
            - generic [ref=e271]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=e272]
            - paragraph [ref=e273]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=e274]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=e275]:
          - generic [ref=e276]:
            - generic [ref=e277]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=e278]
            - paragraph [ref=e279]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=e280]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=e284]
            - paragraph [ref=e285]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=e286]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=e287]:
          - generic [ref=e288]:
            - generic [ref=e289]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=e290]
            - paragraph [ref=e291]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=e292]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=e293]
              - paragraph [ref=e294]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=e295]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=e296]:
          - generic [ref=e297]:
            - generic [ref=e298]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=e299]
            - paragraph [ref=e300]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=e301]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=e303]:
      - paragraph [ref=e304]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=e305]
      - paragraph [ref=e306]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=e307]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=e308]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=e309]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=e310]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=e313]:
        - generic [ref=e314]: RUAN TRAPP
  - contentinfo [ref=e315]:
    - generic [ref=e317]:
      - generic [ref=e318]:
        - paragraph [ref=e319]: RUAN TRAPP
        - paragraph [ref=e320]: Jaraguá do Sul — SC
      - generic [ref=e321]:
        - heading "Créditos" [level=3] [ref=e322]
        - paragraph [ref=e323]: "Imagens: acervo do artista"
      - generic [ref=e324]:
        - paragraph [ref=e325]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=e326]:
          - /url: "#inicio"
  - button "Ativar som" [ref=e329]
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
> 14  |     expect(accessibilityScanResults.violations).toHaveLength(0);
      |                                                 ^ Error: expect(received).toHaveLength(expected)
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
  56  |     await expect(skipLink).toBeVisible();
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
```