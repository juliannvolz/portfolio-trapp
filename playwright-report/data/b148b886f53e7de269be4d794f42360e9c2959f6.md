# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: interactions.spec.ts >> Interactions >> mobile viewport >> mobile menu opens and closes
- Location: tests\e2e\interactions.spec.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[aria-label="Abrir menu"]')

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - link "Pular para o conteúdo principal" [ref=f1e2]:
    - /url: "#main"
  - alert [ref=f1e3]
  - banner [ref=f1e4]:
    - generic [ref=f1e5]:
      - generic [ref=f1e6]:
        - link "Ruan Trapp - Início" [ref=f1e7]:
          - /url: /
          - text: RUAN TRAPP
        - button "Fechar menu" [expanded] [ref=f1e9]
      - navigation "Menu mobile" [ref=f1e12]:
        - list [ref=f1e13]:
          - listitem [ref=f1e14]:
            - link "A OBRA" [ref=f1e15]:
              - /url: "#obra"
          - listitem [ref=f1e16]:
            - link "O CAMINHO" [ref=f1e17]:
              - /url: "#caminho"
          - listitem [ref=f1e18]:
            - link "O ACERVO" [ref=f1e19]:
              - /url: "#acervo"
          - listitem [ref=f1e20]:
            - link "O OFÍCIO" [ref=f1e21]:
              - /url: "#oficio"
          - listitem [ref=f1e22]:
            - link "O FECHO" [ref=f1e23]:
              - /url: "#fecho"
          - listitem [ref=f1e24]:
            - link "Orçamento no WhatsApp" [ref=f1e25]:
              - /url: https://wa.me/554792242056
      - navigation "Menu mobile (sem JavaScript)" [ref=f1e26]:
        - list [ref=f1e27]:
          - listitem [ref=f1e28]:
            - link "A OBRA" [ref=f1e29]:
              - /url: "#obra"
          - listitem [ref=f1e30]:
            - link "O CAMINHO" [ref=f1e31]:
              - /url: "#caminho"
          - listitem [ref=f1e32]:
            - link "O ACERVO" [ref=f1e33]:
              - /url: "#acervo"
          - listitem [ref=f1e34]:
            - link "O OFÍCIO" [ref=f1e35]:
              - /url: "#oficio"
          - listitem [ref=f1e36]:
            - link "O FECHO" [ref=f1e37]:
              - /url: "#fecho"
          - listitem [ref=f1e38]:
            - link "Orçamento no WhatsApp" [ref=f1e39]:
              - /url: https://wa.me/554792242056
  - main [ref=f1e40]:
    - generic [ref=f1e42]:
      - generic:
        - generic:
          - generic:
            - img "Caminho das Artes - vista geral da galeria a céu aberto"
      - generic [ref=f1e43]:
        - paragraph [ref=f1e44]: 01 / A RUA · 2200K
        - paragraph [ref=f1e45]: RUAN TRAPP
        - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=f1e46]
        - paragraph [ref=f1e47]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
        - generic [ref=f1e48]:
          - link "VER AS OBRAS" [ref=f1e49]:
            - /url: "#acervo"
          - link "FALAR NO WHATSAPP" [ref=f1e50]:
            - /url: https://wa.me/554792242056
        - paragraph [ref=f1e51]: DESÇA A RUA
    - generic [ref=f1e54]:
      - paragraph [ref=f1e55]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=f1e56]
      - generic [ref=f1e58]:
        - paragraph [ref=f1e59]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=f1e60]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=f1e61]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=f1e64]:
        - term [ref=f1e66]: Ruan Trapp
        - term [ref=f1e68]: Jaraguá do Sul — SC
        - term [ref=f1e70]: graffiti desde 2018
        - term [ref=f1e72]: muralista desde 2024
        - term [ref=f1e74]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=f1e75]:
        - /url: "#caminho"
    - generic [ref=f1e78]:
      - generic [ref=f1e79]:
        - paragraph [ref=f1e80]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=f1e81]
        - paragraph [ref=f1e82]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=f1e83]:
        - article [ref=f1e84]:
          - generic [ref=f1e85]:
            - generic:
              - generic:
                - img "Vista geral do Caminho das Artes"
          - generic [ref=f1e86]:
            - generic [ref=f1e87]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=f1e88]:
          - generic [ref=f1e90]:
            - generic [ref=f1e91]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=f1e92]:
          - generic [ref=f1e94]:
            - generic [ref=f1e95]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=f1e96]:
          - generic [ref=f1e98]:
            - generic [ref=f1e99]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=f1e100]:
          - generic [ref=f1e102]:
            - generic [ref=f1e103]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=f1e104]:
          - generic [ref=f1e106]:
            - generic [ref=f1e107]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=f1e108]:
          - generic [ref=f1e110]:
            - generic [ref=f1e111]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=f1e112]:
        - listitem [ref=f1e113]: 600 m de percurso
        - listitem [ref=f1e114]: 1.500 m² de muros
        - listitem [ref=f1e115]: 30 artistas
        - listitem [ref=f1e116]: 14 luminárias LED
        - listitem [ref=f1e117]: SCAR + Instituto AION
        - listitem [ref=f1e118]: 150 anos de Jaraguá do Sul
      - blockquote [ref=f1e119]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=f1e120]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=f1e122]:
      - paragraph [ref=f1e123]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=f1e124]
      - paragraph [ref=f1e125]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=f1e126]:
        - button "TODOS" [pressed] [ref=f1e127]
        - button "MURAIS" [ref=f1e128]
        - button "CALIGRAFIA" [ref=f1e129]
        - button "TELAS" [ref=f1e130]
        - button "ESTÚDIO & TATTOO" [ref=f1e131]
      - generic "Obras - 17 itens" [ref=f1e132]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=f1e133] [cursor=pointer]:
          - img "Vista geral do Caminho das Artes, galeria a céu aberto em Jaraguá do Sul" [ref=f1e137]
          - generic [ref=f1e138]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=f1e139] [cursor=pointer]:
          - img "Painel da araponga em letra 3D Wildstyle, metal e geometria" [ref=f1e142]:
            - generic [ref=f1e143]: Imagem indisponível
          - generic [ref=f1e144]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=f1e145] [cursor=pointer]:
          - img "Detalhe caligráfico da araponga" [ref=f1e148]:
            - generic [ref=f1e149]: Imagem indisponível
          - generic [ref=f1e150]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=f1e151] [cursor=pointer]:
          - generic [ref=f1e156]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=f1e157] [cursor=pointer]:
          - generic [ref=f1e162]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=f1e163] [cursor=pointer]:
          - generic [ref=f1e168]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=f1e169] [cursor=pointer]:
          - generic [ref=f1e174]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=f1e175] [cursor=pointer]:
          - generic [ref=f1e180]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=f1e181] [cursor=pointer]:
          - generic [ref=f1e186]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=f1e187] [cursor=pointer]:
          - generic [ref=f1e192]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=f1e193] [cursor=pointer]:
          - generic [ref=f1e198]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=f1e199] [cursor=pointer]:
          - generic [ref=f1e204]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=f1e205] [cursor=pointer]:
          - generic [ref=f1e210]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=f1e211] [cursor=pointer]:
          - generic [ref=f1e216]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=f1e217] [cursor=pointer]:
          - generic [ref=f1e222]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=f1e223] [cursor=pointer]:
          - generic [ref=f1e228]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=f1e229] [cursor=pointer]:
          - generic [ref=f1e234]: Caligrafite Studio Tattoo
    - generic [ref=f1e236]:
      - paragraph [ref=f1e237]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=f1e238]
      - paragraph [ref=f1e239]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=f1e240]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=f1e245]: arraste ou use as setas
      - generic [ref=f1e246]: Parede antes e depois da intervenção Mandala
    - generic [ref=f1e248]:
      - paragraph [ref=f1e249]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=f1e250]
      - paragraph [ref=f1e251]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=f1e253]
      - generic [ref=f1e265]:
        - generic [ref=f1e266]:
          - term [ref=f1e267]: 01 CONVERSA
          - definition [ref=f1e268]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=f1e269]:
          - term [ref=f1e270]: 02 ESBOÇO
          - definition [ref=f1e271]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=f1e272]:
          - term [ref=f1e273]: 03 PAREDE
          - definition [ref=f1e274]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=f1e275]:
          - term [ref=f1e276]: 04 ASSINATURA
          - definition [ref=f1e277]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=f1e279]:
      - paragraph [ref=f1e280]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=f1e281]
      - generic [ref=f1e282]:
        - article [ref=f1e283]:
          - generic [ref=f1e284]:
            - generic [ref=f1e285]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=f1e286]
            - paragraph [ref=f1e287]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=f1e288]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=f1e289]:
          - generic [ref=f1e290]:
            - generic [ref=f1e291]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=f1e292]
            - paragraph [ref=f1e293]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=f1e294]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=f1e295]:
          - generic [ref=f1e296]:
            - generic [ref=f1e297]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=f1e298]
            - paragraph [ref=f1e299]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=f1e300]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=f1e301]:
          - generic [ref=f1e302]:
            - generic [ref=f1e303]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=f1e304]
            - paragraph [ref=f1e305]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=f1e306]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=f1e307]
              - paragraph [ref=f1e308]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=f1e309]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=f1e310]:
          - generic [ref=f1e311]:
            - generic [ref=f1e312]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=f1e313]
            - paragraph [ref=f1e314]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=f1e315]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=f1e317]:
      - paragraph [ref=f1e318]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=f1e319]
      - paragraph [ref=f1e320]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=f1e321]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=f1e322]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=f1e323]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=f1e324]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=f1e327]:
        - generic [ref=f1e328]: RUAN TRAPP
  - contentinfo [ref=f1e329]:
    - generic [ref=f1e331]:
      - generic [ref=f1e332]:
        - paragraph [ref=f1e333]: RUAN TRAPP
        - paragraph [ref=f1e334]: Jaraguá do Sul — SC
      - generic [ref=f1e335]:
        - heading "Créditos" [level=3] [ref=f1e336]
        - paragraph [ref=f1e337]: "Imagens: acervo do artista"
      - generic [ref=f1e338]:
        - paragraph [ref=f1e339]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=f1e340]:
          - /url: "#inicio"
  - button "Ativar som" [ref=f1e343]
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
> 25  |       await menuButton.click();
      |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  41  |     await expect(lightbox).toBeVisible({ timeout: 5000 });
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