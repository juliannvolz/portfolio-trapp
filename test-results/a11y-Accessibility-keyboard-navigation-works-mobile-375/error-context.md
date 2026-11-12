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
    - generic [ref=e14]:
      - generic [ref=e15]:
        - link "Ruan Trapp - Início" [ref=e16]:
          - /url: /
          - text: RUAN TRAPP
        - button "Abrir menu" [ref=e18]
      - navigation "Menu mobile (sem JavaScript)" [ref=e21]:
        - list [ref=e22]:
          - listitem [ref=e23]:
            - link "A OBRA" [ref=e24]:
              - /url: "#obra"
          - listitem [ref=e25]:
            - link "O CAMINHO" [ref=e26]:
              - /url: "#caminho"
          - listitem [ref=e27]:
            - link "O ACERVO" [ref=e28]:
              - /url: "#acervo"
          - listitem [ref=e29]:
            - link "O OFÍCIO" [ref=e30]:
              - /url: "#oficio"
          - listitem [ref=e31]:
            - link "O FECHO" [ref=e32]:
              - /url: "#fecho"
          - listitem [ref=e33]:
            - link "Orçamento no WhatsApp" [ref=e34]:
              - /url: https://wa.me/554792242056
  - main [ref=e35]:
    - generic [ref=e37]:
      - generic:
        - generic:
          - generic:
            - img "Caminho das Artes - vista geral da galeria a céu aberto"
      - generic [ref=e38]:
        - paragraph [ref=e39]: 01 / A RUA · 2200K
        - paragraph [ref=e40]: RUAN TRAPP
        - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=e41]
        - paragraph [ref=e42]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
        - generic [ref=e43]:
          - link "VER AS OBRAS" [ref=e44]:
            - /url: "#acervo"
          - link "FALAR NO WHATSAPP" [ref=e45]:
            - /url: https://wa.me/554792242056
        - paragraph [ref=e46]: DESÇA A RUA
    - generic [ref=e49]:
      - paragraph [ref=e50]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=e51]
      - generic [ref=e53]:
        - paragraph [ref=e54]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=e55]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=e56]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=e59]:
        - term [ref=e61]: Ruan Trapp
        - term [ref=e63]: Jaraguá do Sul — SC
        - term [ref=e65]: graffiti desde 2018
        - term [ref=e67]: muralista desde 2024
        - term [ref=e69]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=e70]:
        - /url: "#caminho"
    - generic [ref=e73]:
      - generic [ref=e74]:
        - paragraph [ref=e75]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=e76]
        - paragraph [ref=e77]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=e78]:
        - article [ref=e79]:
          - generic [ref=e80]:
            - generic:
              - generic:
                - img "Vista geral do Caminho das Artes"
          - generic [ref=e81]:
            - generic [ref=e82]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=e83]:
          - generic [ref=e85]:
            - generic [ref=e86]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=e87]:
          - generic [ref=e89]:
            - generic [ref=e90]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=e91]:
          - generic [ref=e93]:
            - generic [ref=e94]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=e95]:
          - generic [ref=e97]:
            - generic [ref=e98]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=e99]:
          - generic [ref=e101]:
            - generic [ref=e102]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e106]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=e107]:
        - listitem [ref=e108]: 600 m de percurso
        - listitem [ref=e109]: 1.500 m² de muros
        - listitem [ref=e110]: 30 artistas
        - listitem [ref=e111]: 14 luminárias LED
        - listitem [ref=e112]: SCAR + Instituto AION
        - listitem [ref=e113]: 150 anos de Jaraguá do Sul
      - blockquote [ref=e114]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=e115]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=e117]:
      - paragraph [ref=e118]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=e119]
      - paragraph [ref=e120]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=e121]:
        - button "TODOS" [active] [pressed] [ref=e122]
        - button "MURAIS" [ref=e123]
        - button "CALIGRAFIA" [ref=e124]
        - button "TELAS" [ref=e125]
        - button "ESTÚDIO & TATTOO" [ref=e126]
      - generic "Obras - 17 itens" [ref=e127]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=e128] [cursor=pointer]:
          - img "Vista geral do Caminho das Artes, galeria a céu aberto em Jaraguá do Sul" [ref=e132]
          - generic [ref=e133]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=e134] [cursor=pointer]:
          - img "Painel da araponga em letra 3D Wildstyle, metal e geometria" [ref=e137]:
            - generic [ref=e138]: Imagem indisponível
          - generic [ref=e139]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=e140] [cursor=pointer]:
          - img "Detalhe caligráfico da araponga" [ref=e143]:
            - generic [ref=e144]: Imagem indisponível
          - generic [ref=e145]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=e146] [cursor=pointer]:
          - generic [ref=e151]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=e152] [cursor=pointer]:
          - generic [ref=e157]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=e158] [cursor=pointer]:
          - generic [ref=e163]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=e164] [cursor=pointer]:
          - generic [ref=e169]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=e170] [cursor=pointer]:
          - generic [ref=e175]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=e176] [cursor=pointer]:
          - generic [ref=e181]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=e182] [cursor=pointer]:
          - generic [ref=e187]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=e188] [cursor=pointer]:
          - generic [ref=e193]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=e194] [cursor=pointer]:
          - generic [ref=e199]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=e200] [cursor=pointer]:
          - generic [ref=e205]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=e206] [cursor=pointer]:
          - generic [ref=e211]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=e212] [cursor=pointer]:
          - generic [ref=e217]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=e218] [cursor=pointer]:
          - generic [ref=e223]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=e224] [cursor=pointer]:
          - generic [ref=e229]: Caligrafite Studio Tattoo
    - generic [ref=e231]:
      - paragraph [ref=e232]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=e233]
      - paragraph [ref=e234]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=e235]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=e240]: arraste ou use as setas
      - generic [ref=e241]: Parede antes e depois da intervenção Mandala
    - generic [ref=e243]:
      - paragraph [ref=e244]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=e245]
      - paragraph [ref=e246]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=e248]
      - generic [ref=e260]:
        - generic [ref=e261]:
          - term [ref=e262]: 01 CONVERSA
          - definition [ref=e263]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=e264]:
          - term [ref=e265]: 02 ESBOÇO
          - definition [ref=e266]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=e267]:
          - term [ref=e268]: 03 PAREDE
          - definition [ref=e269]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=e270]:
          - term [ref=e271]: 04 ASSINATURA
          - definition [ref=e272]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=e274]:
      - paragraph [ref=e275]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=e276]
      - generic [ref=e277]:
        - article [ref=e278]:
          - generic [ref=e279]:
            - generic [ref=e280]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=e281]
            - paragraph [ref=e282]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=e283]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=e284]:
          - generic [ref=e285]:
            - generic [ref=e286]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=e287]
            - paragraph [ref=e288]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=e289]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=e290]:
          - generic [ref=e291]:
            - generic [ref=e292]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=e293]
            - paragraph [ref=e294]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=e295]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=e296]:
          - generic [ref=e297]:
            - generic [ref=e298]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=e299]
            - paragraph [ref=e300]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=e301]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=e302]
              - paragraph [ref=e303]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=e304]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=e305]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=e308]
            - paragraph [ref=e309]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=e310]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=e312]:
      - paragraph [ref=e313]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=e314]
      - paragraph [ref=e315]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=e316]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=e317]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=e318]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=e319]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=e322]:
        - generic [ref=e323]: RUAN TRAPP
  - contentinfo [ref=e324]:
    - generic [ref=e326]:
      - generic [ref=e327]:
        - paragraph [ref=e328]: RUAN TRAPP
        - paragraph [ref=e329]: Jaraguá do Sul — SC
      - generic [ref=e330]:
        - heading "Créditos" [level=3] [ref=e331]
        - paragraph [ref=e332]: "Imagens: acervo do artista"
      - generic [ref=e333]:
        - paragraph [ref=e334]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=e335]:
          - /url: "#inicio"
  - navigation "Ações rápidas" [ref=e338]:
    - link "Falar no WhatsApp" [ref=e339]:
      - /url: https://wa.me/554792242056
    - link "Instagram @ruantrapp" [ref=e342]:
      - /url: https://instagram.com/ruantrapp
  - button "Ativar som" [ref=e346]
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