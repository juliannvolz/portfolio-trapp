# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility >> keyboard navigation works
- Location: tests\e2e\a11y.spec.ts:17:3

# Error details

```
Error: expect(received).toBeTruthy()

Received: null
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - link "Pular para o conteúdo principal" [ref=e2]:
    - /url: "#main"
  - alert [ref=e3]
  - alert "Carregando portfólio" [ref=e4]:
    - img [ref=e6]:
      - generic [ref=e7]: RUAN TRAPP
    - paragraph [ref=e10]: Jaraguá do Sul — SC
    - paragraph [ref=e11]: acendendo a rua
    - button "Pular abertura" [ref=e12]: pular abertura
  - banner [ref=e13]:
    - generic [ref=e15]:
      - link "Ruan Trapp - Início" [ref=e16]:
        - /url: /
        - text: RUAN TRAPP
      - navigation "Navegação principal" [ref=e17]:
        - link "A OBRA" [ref=e18]:
          - /url: "#obra"
        - link "O CAMINHO" [ref=e19]:
          - /url: "#caminho"
        - link "O ACERVO" [ref=e20]:
          - /url: "#acervo"
        - link "O OFÍCIO" [ref=e21]:
          - /url: "#oficio"
        - link "O FECHO" [ref=e22]:
          - /url: "#fecho"
      - button "Abrir WhatsApp" [ref=e24]: Orçamento
  - main [ref=e27]:
    - generic [ref=e29]:
      - generic:
        - generic:
          - img "Caminho das Artes - vista geral da galeria a céu aberto":
            - generic: Imagem indisponível
      - generic [ref=e30]:
        - paragraph [ref=e31]: 01 / A RUA · 2200K
        - paragraph [ref=e32]: RUAN TRAPP
        - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=e33]
        - paragraph [ref=e34]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
        - generic [ref=e35]:
          - link "VER AS OBRAS" [ref=e36]:
            - /url: "#acervo"
          - link "FALAR NO WHATSAPP" [ref=e37]:
            - /url: https://wa.me/554792242056
        - paragraph [ref=e38]: DESÇA A RUA
    - generic [ref=e41]:
      - paragraph [ref=e42]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=e43]
      - generic [ref=e45]:
        - paragraph [ref=e46]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=e47]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=e48]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=e51]:
        - term [ref=e53]: Ruan Trapp
        - term [ref=e55]: Jaraguá do Sul — SC
        - term [ref=e57]: graffiti desde 2018
        - term [ref=e59]: muralista desde 2024
        - term [ref=e61]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=e62]:
        - /url: "#caminho"
    - generic [ref=e65]:
      - generic [ref=e66]:
        - paragraph [ref=e67]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=e68]
        - paragraph [ref=e69]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=e70]:
        - article [ref=e71]:
          - generic [ref=e72]:
            - generic:
              - generic:
                - img "Vista geral do Caminho das Artes"
          - generic [ref=e73]:
            - generic [ref=e74]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=e75]:
          - generic [ref=e77]:
            - generic [ref=e78]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=e79]:
          - generic [ref=e81]:
            - generic [ref=e82]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=e83]:
          - generic [ref=e85]:
            - generic [ref=e86]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=e87]:
          - generic [ref=e89]:
            - generic [ref=e90]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=e91]:
          - generic [ref=e93]:
            - generic [ref=e94]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=e95]:
          - generic [ref=e96]:
            - generic:
              - generic:
                - img "Processo etapa 2"
          - generic [ref=e97]:
            - generic [ref=e98]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=e99]:
        - listitem [ref=e100]: 600 m de percurso
        - listitem [ref=e101]: 1.500 m² de muros
        - listitem [ref=e102]: 30 artistas
        - listitem [ref=e103]: 14 luminárias LED
        - listitem [ref=e104]: SCAR + Instituto AION
        - listitem [ref=e105]: 150 anos de Jaraguá do Sul
      - blockquote [ref=e106]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=e107]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=e109]:
      - paragraph [ref=e110]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=e111]
      - paragraph [ref=e112]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=e113]:
        - button "TODOS" [active] [pressed] [ref=e114]
        - button "MURAIS" [ref=e115]
        - button "CALIGRAFIA" [ref=e116]
        - button "TELAS" [ref=e117]
        - button "ESTÚDIO & TATTOO" [ref=e118]
      - generic "Obras - 17 itens" [ref=e119]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=e120] [cursor=pointer]:
          - img "Vista geral do Caminho das Artes, galeria a céu aberto em Jaraguá do Sul" [ref=e124]
          - generic [ref=e125]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=e126] [cursor=pointer]:
          - img "Painel da araponga em letra 3D Wildstyle, metal e geometria" [ref=e129]:
            - generic [ref=e130]: Imagem indisponível
          - generic [ref=e131]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=e132] [cursor=pointer]:
          - img "Detalhe caligráfico da araponga" [ref=e135]:
            - generic [ref=e136]: Imagem indisponível
          - generic [ref=e137]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=e138] [cursor=pointer]:
          - img "Mural mandala com lustre central" [ref=e141]:
            - generic [ref=e142]: Imagem indisponível
          - generic [ref=e143]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=e144] [cursor=pointer]:
          - img "Mural de caligrafia em tons prateados" [ref=e147]:
            - generic [ref=e148]: Imagem indisponível
          - generic [ref=e149]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=e150] [cursor=pointer]:
          - img "Mural em sala com violão" [ref=e153]:
            - generic [ref=e154]: Imagem indisponível
          - generic [ref=e155]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=e156] [cursor=pointer]:
          - generic [ref=e161]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=e162] [cursor=pointer]:
          - generic [ref=e167]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=e168] [cursor=pointer]:
          - generic [ref=e173]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=e174] [cursor=pointer]:
          - generic [ref=e179]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=e180] [cursor=pointer]:
          - generic [ref=e185]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=e186] [cursor=pointer]:
          - generic [ref=e191]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=e192] [cursor=pointer]:
          - generic [ref=e197]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=e198] [cursor=pointer]:
          - generic [ref=e203]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=e204] [cursor=pointer]:
          - generic [ref=e209]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=e210] [cursor=pointer]:
          - generic [ref=e215]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=e216] [cursor=pointer]:
          - generic [ref=e221]: Caligrafite Studio Tattoo
    - generic [ref=e223]:
      - paragraph [ref=e224]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=e225]
      - paragraph [ref=e226]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=e227]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=e232]: arraste ou use as setas
      - generic [ref=e233]: Parede antes e depois da intervenção Mandala
    - generic [ref=e235]:
      - paragraph [ref=e236]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=e237]
      - paragraph [ref=e238]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=e240]
      - generic [ref=e252]:
        - generic [ref=e253]:
          - term [ref=e254]: 01 CONVERSA
          - definition [ref=e255]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=e256]:
          - term [ref=e257]: 02 ESBOÇO
          - definition [ref=e258]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=e259]:
          - term [ref=e260]: 03 PAREDE
          - definition [ref=e261]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=e262]:
          - term [ref=e263]: 04 ASSINATURA
          - definition [ref=e264]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=e266]:
      - paragraph [ref=e267]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=e268]
      - generic [ref=e269]:
        - article [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=e273]
            - paragraph [ref=e274]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=e275]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=e276]:
          - generic [ref=e277]:
            - generic [ref=e278]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=e279]
            - paragraph [ref=e280]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=e281]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e284]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=e285]
            - paragraph [ref=e286]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=e287]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=e288]:
          - generic [ref=e289]:
            - generic [ref=e290]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=e291]
            - paragraph [ref=e292]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=e293]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=e294]
              - paragraph [ref=e295]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=e296]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=e297]:
          - generic [ref=e298]:
            - generic [ref=e299]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=e300]
            - paragraph [ref=e301]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=e302]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=e304]:
      - paragraph [ref=e305]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=e306]
      - paragraph [ref=e307]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=e308]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=e309]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=e310]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=e311]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=e314]:
        - generic [ref=e315]: RUAN TRAPP
  - contentinfo [ref=e316]:
    - generic [ref=e318]:
      - generic [ref=e319]:
        - paragraph [ref=e320]: RUAN TRAPP
        - paragraph [ref=e321]: Jaraguá do Sul — SC
      - generic [ref=e322]:
        - heading "Créditos" [level=3] [ref=e323]
        - paragraph [ref=e324]: "Imagens: acervo do artista"
      - generic [ref=e325]:
        - paragraph [ref=e326]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=e327]:
          - /url: "#inicio"
  - navigation "Ações rápidas" [ref=e330]:
    - link "Falar no WhatsApp" [ref=e331]:
      - /url: https://wa.me/554792242056
      - generic [ref=e334]: WhatsApp
    - link "Instagram @ruantrapp" [ref=e335]:
      - /url: https://instagram.com/ruantrapp
      - generic [ref=e339]: Instagram
  - button "Ativar som" [ref=e340]
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
> 29  |     expect(thirdFocused).toBeTruthy();
      |                          ^ Error: expect(received).toBeTruthy()
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
```