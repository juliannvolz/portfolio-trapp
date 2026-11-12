# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reduced-motion.spec.ts >> Reduced motion >> no flash animations when reduced motion
- Location: tests\e2e\reduced-motion.spec.ts:6:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 1
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Pular para o conteúdo principal" [ref=e2]:
    - /url: "#main"
  - alert "Carregando portfólio" [ref=e3]:
    - img [ref=e5]:
      - generic [ref=e6]: RUAN TRAPP
    - paragraph [ref=e8]: Jaraguá do Sul — SC
    - paragraph [ref=e9]: acendendo a rua
    - button "Pular abertura" [ref=e10]: pular abertura
  - banner [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - link "Ruan Trapp - Início" [ref=e14]:
          - /url: /
          - text: RUAN TRAPP
        - button "Abrir menu" [ref=e16]
      - navigation "Menu mobile (sem JavaScript)" [ref=e19]:
        - list [ref=e20]:
          - listitem [ref=e21]:
            - link "A OBRA" [ref=e22]:
              - /url: "#obra"
          - listitem [ref=e23]:
            - link "O CAMINHO" [ref=e24]:
              - /url: "#caminho"
          - listitem [ref=e25]:
            - link "O ACERVO" [ref=e26]:
              - /url: "#acervo"
          - listitem [ref=e27]:
            - link "O OFÍCIO" [ref=e28]:
              - /url: "#oficio"
          - listitem [ref=e29]:
            - link "O FECHO" [ref=e30]:
              - /url: "#fecho"
          - listitem [ref=e31]:
            - link "Orçamento no WhatsApp" [ref=e32]:
              - /url: https://wa.me/554792242056
  - main [ref=e33]:
    - generic [ref=e36]:
      - paragraph [ref=e37]: 01 / A RUA · 2200K
      - paragraph [ref=e38]: RUAN TRAPP
      - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=e39]
      - paragraph [ref=e40]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
      - generic [ref=e41]:
        - link "VER AS OBRAS" [ref=e42]:
          - /url: "#acervo"
        - link "FALAR NO WHATSAPP" [ref=e43]:
          - /url: https://wa.me/554792242056
      - paragraph [ref=e44]: DESÇA A RUA
    - generic [ref=e47]:
      - paragraph [ref=e48]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=e49]
      - generic [ref=e51]:
        - paragraph [ref=e52]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=e53]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=e54]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=e57]:
        - term [ref=e59]: Ruan Trapp
        - term [ref=e61]: Jaraguá do Sul — SC
        - term [ref=e63]: graffiti desde 2018
        - term [ref=e65]: muralista desde 2024
        - term [ref=e67]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=e68]:
        - /url: "#caminho"
    - generic [ref=e71]:
      - generic [ref=e72]:
        - paragraph [ref=e73]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=e74]
        - paragraph [ref=e75]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=e76]:
        - article [ref=e77]:
          - generic [ref=e79]:
            - generic [ref=e80]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=e81]:
          - generic [ref=e83]:
            - generic [ref=e84]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=e85]:
          - generic [ref=e87]:
            - generic [ref=e88]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=e89]:
          - generic [ref=e91]:
            - generic [ref=e92]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=e93]:
          - generic [ref=e95]:
            - generic [ref=e96]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=e97]:
          - generic [ref=e99]:
            - generic [ref=e100]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=e101]:
          - generic [ref=e103]:
            - generic [ref=e104]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=e105]:
        - listitem [ref=e106]: 600 m de percurso
        - listitem [ref=e107]: 1.500 m² de muros
        - listitem [ref=e108]: 30 artistas
        - listitem [ref=e109]: 14 luminárias LED
        - listitem [ref=e110]: SCAR + Instituto AION
        - listitem [ref=e111]: 150 anos de Jaraguá do Sul
      - blockquote [ref=e112]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=e113]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=e115]:
      - paragraph [ref=e116]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=e117]
      - paragraph [ref=e118]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=e119]:
        - button "TODOS" [pressed] [ref=e120]
        - button "MURAIS" [ref=e121]
        - button "CALIGRAFIA" [ref=e122]
        - button "TELAS" [ref=e123]
        - button "ESTÚDIO & TATTOO" [ref=e124]
      - generic "Obras - 17 itens" [ref=e125]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=e126] [cursor=pointer]:
          - generic [ref=e131]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=e132] [cursor=pointer]:
          - generic [ref=e137]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=e138] [cursor=pointer]:
          - generic [ref=e143]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=e144] [cursor=pointer]:
          - generic [ref=e149]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=e150] [cursor=pointer]:
          - generic [ref=e155]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=e156] [cursor=pointer]:
          - generic [ref=e161]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=e162] [cursor=pointer]:
          - generic [ref=e167]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=e168] [cursor=pointer]:
          - generic [ref=e173]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=e174] [cursor=pointer]:
          - generic [ref=e179]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=e180] [cursor=pointer]:
          - generic [ref=e185]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=e186] [cursor=pointer]:
          - generic [ref=e191]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=e192] [cursor=pointer]:
          - generic [ref=e197]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=e198] [cursor=pointer]:
          - generic [ref=e203]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=e204] [cursor=pointer]:
          - generic [ref=e209]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=e210] [cursor=pointer]:
          - generic [ref=e215]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=e216] [cursor=pointer]:
          - generic [ref=e221]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=e222] [cursor=pointer]:
          - generic [ref=e227]: Caligrafite Studio Tattoo
    - generic [ref=e229]:
      - paragraph [ref=e230]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=e231]
      - paragraph [ref=e232]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=e233]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=e238]: arraste ou use as setas
      - generic [ref=e239]: Parede antes e depois da intervenção Mandala
    - generic [ref=e241]:
      - paragraph [ref=e242]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=e243]
      - paragraph [ref=e244]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=e246]
      - generic [ref=e258]:
        - generic [ref=e259]:
          - term [ref=e260]: 01 CONVERSA
          - definition [ref=e261]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=e262]:
          - term [ref=e263]: 02 ESBOÇO
          - definition [ref=e264]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=e265]:
          - term [ref=e266]: 03 PAREDE
          - definition [ref=e267]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=e268]:
          - term [ref=e269]: 04 ASSINATURA
          - definition [ref=e270]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=e272]:
      - paragraph [ref=e273]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=e274]
      - generic [ref=e275]:
        - article [ref=e276]:
          - generic [ref=e277]:
            - generic [ref=e278]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=e279]
            - paragraph [ref=e280]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=e281]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e284]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=e285]
            - paragraph [ref=e286]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=e287]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=e288]:
          - generic [ref=e289]:
            - generic [ref=e290]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=e291]
            - paragraph [ref=e292]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=e293]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=e294]:
          - generic [ref=e295]:
            - generic [ref=e296]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=e297]
            - paragraph [ref=e298]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=e299]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=e300]
              - paragraph [ref=e301]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=e302]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=e303]:
          - generic [ref=e304]:
            - generic [ref=e305]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=e306]
            - paragraph [ref=e307]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=e308]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=e310]:
      - paragraph [ref=e311]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=e312]
      - paragraph [ref=e313]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=e314]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=e315]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=e316]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=e317]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=e320]:
        - generic [ref=e321]: RUAN TRAPP
  - contentinfo [ref=e322]:
    - generic [ref=e324]:
      - generic [ref=e325]:
        - paragraph [ref=e326]: RUAN TRAPP
        - paragraph [ref=e327]: Jaraguá do Sul — SC
      - generic [ref=e328]:
        - heading "Créditos" [level=3] [ref=e329]
        - paragraph [ref=e330]: "Imagens: acervo do artista"
      - generic [ref=e331]:
        - paragraph [ref=e332]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=e333]:
          - /url: "#inicio"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Reduced motion', () => {
  4  |   test.use({ reducedMotion: 'reduce' });
  5  | 
  6  |   test('no flash animations when reduced motion', async ({ page }) => {
  7  |     await page.goto('/');
  8  |     await page.waitForLoadState('networkidle');
  9  | 
  10 |     const flashElements = await page.locator('.fixed.inset-0.z-\\[100\\]').count();
> 11 |     expect(flashElements).toBe(0);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  12 |   });
  13 | 
  14 |   test('no pinned sections when reduced motion', async ({ page }) => {
  15 |     await page.goto('/');
  16 |     await page.waitForLoadState('networkidle');
  17 | 
  18 |     const pinnedElements = await page.locator('[style*="position: fixed"][style*="top: 0"]').count();
  19 |     expect(pinnedElements).toBe(0);
  20 |   });
  21 | });
```