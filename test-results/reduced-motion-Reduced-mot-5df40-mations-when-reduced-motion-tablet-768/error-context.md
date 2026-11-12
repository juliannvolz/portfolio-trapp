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
    - generic [ref=e13]:
      - link "Ruan Trapp - Início" [ref=e14]:
        - /url: /
        - text: RUAN TRAPP
      - navigation "Navegação principal" [ref=e15]:
        - link "A OBRA" [ref=e16]:
          - /url: "#obra"
        - link "O CAMINHO" [ref=e17]:
          - /url: "#caminho"
        - link "O ACERVO" [ref=e18]:
          - /url: "#acervo"
        - link "O OFÍCIO" [ref=e19]:
          - /url: "#oficio"
        - link "O FECHO" [ref=e20]:
          - /url: "#fecho"
      - button "Abrir WhatsApp" [ref=e22]: Orçamento
  - main [ref=e25]:
    - generic [ref=e28]:
      - paragraph [ref=e29]: 01 / A RUA · 2200K
      - paragraph [ref=e30]: RUAN TRAPP
      - heading "O CANTO QUE CONSTRÓI" [level=2] [ref=e31]
      - paragraph [ref=e32]: Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem.
      - generic [ref=e33]:
        - link "VER AS OBRAS" [ref=e34]:
          - /url: "#acervo"
        - link "FALAR NO WHATSAPP" [ref=e35]:
          - /url: https://wa.me/554792242056
      - paragraph [ref=e36]: DESÇA A RUA
    - generic [ref=e39]:
      - paragraph [ref=e40]: 02 / A OBRA · 3000K
      - heading "A rua foi minha primeira escola." [level=2] [ref=e41]
      - generic [ref=e43]:
        - paragraph [ref=e44]: Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira.
        - paragraph [ref=e45]: "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
        - paragraph [ref=e46]: Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas.
      - generic [ref=e49]:
        - term [ref=e51]: Ruan Trapp
        - term [ref=e53]: Jaraguá do Sul — SC
        - term [ref=e55]: graffiti desde 2018
        - term [ref=e57]: muralista desde 2024
        - term [ref=e59]: murais · letreiros · telas · tatuagem · oficinas
      - link "Ver o Caminho das Artes" [ref=e60]:
        - /url: "#caminho"
    - generic [ref=e63]:
      - generic [ref=e64]:
        - paragraph [ref=e65]: 03 / O CAMINHO · 3000K
        - heading "O canto que constrói." [level=2] [ref=e66]
        - paragraph [ref=e67]: "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
      - generic [ref=e68]:
        - article [ref=e69]:
          - generic [ref=e71]:
            - generic [ref=e72]: Vista geral
            - text: 600 m de galeria a céu aberto
        - article [ref=e73]:
          - generic [ref=e75]:
            - generic [ref=e76]: A araponga
            - text: Ave da Mata Atlântica, canto metálico
        - article [ref=e77]:
          - generic [ref=e79]:
            - generic [ref=e80]: Captação
            - text: Processo de seleção dos 30 artistas
        - article [ref=e81]:
          - generic [ref=e83]:
            - generic [ref=e84]: Processo
            - text: Execução dos murais ao longo do percurso
        - article [ref=e85]:
          - generic [ref=e87]:
            - generic [ref=e88]: Detalhes
            - text: Trabalho em altura e escala urbana
        - article [ref=e89]:
          - generic [ref=e91]:
            - generic [ref=e92]: Finalização
            - text: Acabamento e iluminação LED
        - article [ref=e93]:
          - generic [ref=e95]:
            - generic [ref=e96]: Etapa 2
            - text: Segunda fase de execução
      - list [ref=e97]:
        - listitem [ref=e98]: 600 m de percurso
        - listitem [ref=e99]: 1.500 m² de muros
        - listitem [ref=e100]: 30 artistas
        - listitem [ref=e101]: 14 luminárias LED
        - listitem [ref=e102]: SCAR + Instituto AION
        - listitem [ref=e103]: 150 anos de Jaraguá do Sul
      - blockquote [ref=e104]: "\"O canto da araponga é o som da cidade: metal e mata.\""
      - paragraph [ref=e105]: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."
    - generic [ref=e107]:
      - paragraph [ref=e108]: 04 / O ACERVO · 3000K
      - heading "Cada parede acende diferente." [level=2] [ref=e109]
      - paragraph [ref=e110]: Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz.
      - group "Filtros de categoria" [ref=e111]:
        - button "TODOS" [pressed] [ref=e112]
        - button "MURAIS" [ref=e113]
        - button "CALIGRAFIA" [ref=e114]
        - button "TELAS" [ref=e115]
        - button "ESTÚDIO & TATTOO" [ref=e116]
      - generic "Obras - 17 itens" [ref=e117]:
        - button "Ver Caminho das Artes — Vista Geral" [ref=e118] [cursor=pointer]:
          - generic [ref=e123]: Caminho das Artes — Vista Geral· 2026
        - button "Ver Araponga — Painel Caminho das Artes" [ref=e124] [cursor=pointer]:
          - generic [ref=e129]: Araponga — Painel Caminho das Artes· 2026
        - button "Ver Araponga — Caligrafia" [ref=e130] [cursor=pointer]:
          - generic [ref=e135]: Araponga — Caligrafia· 2026
        - button "Ver Mandala com Lustre" [ref=e136] [cursor=pointer]:
          - generic [ref=e141]: Mandala com Lustre
        - button "Ver Caligrafia Prata" [ref=e142] [cursor=pointer]:
          - generic [ref=e147]: Caligrafia Prata
        - button "Ver Sala de Violão" [ref=e148] [cursor=pointer]:
          - generic [ref=e153]: Sala de Violão
        - button "Ver Ouro e Prata" [ref=e154] [cursor=pointer]:
          - generic [ref=e159]: Ouro e Prata
        - button "Ver Pássaro Amarelo — Realismo" [ref=e160] [cursor=pointer]:
          - generic [ref=e165]: Pássaro Amarelo — Realismo
        - button "Ver Estúdio — Espelho" [ref=e166] [cursor=pointer]:
          - generic [ref=e171]: Estúdio — Espelho
        - button "Ver Estúdio — Noturno" [ref=e172] [cursor=pointer]:
          - generic [ref=e177]: Estúdio — Noturno
        - button "Ver Antes — Mandala" [ref=e178] [cursor=pointer]:
          - generic [ref=e183]: Antes — Mandala· 2024
        - button "Ver Grafite Academia" [ref=e184] [cursor=pointer]:
          - generic [ref=e189]: Grafite Academia
        - button "Ver Grafite Escrita" [ref=e190] [cursor=pointer]:
          - generic [ref=e195]: Grafite Escrita
        - button "Ver Caligrafia Cliente — Pronto" [ref=e196] [cursor=pointer]:
          - generic [ref=e201]: Caligrafia Cliente — Pronto
        - button "Ver Caligrafia Parede Branca" [ref=e202] [cursor=pointer]:
          - generic [ref=e207]: Caligrafia Parede Branca
        - button "Ver Ruan Trapp Pintando" [ref=e208] [cursor=pointer]:
          - generic [ref=e213]: Ruan Trapp Pintando
        - button "Ver Caligrafite Studio Tattoo" [ref=e214] [cursor=pointer]:
          - generic [ref=e219]: Caligrafite Studio Tattoo
    - generic [ref=e221]:
      - paragraph [ref=e222]: 05 / A TRANSFORMAÇÃO · 5600K
      - heading "Antes de acender, a parede é só parede." [level=2] [ref=e223]
      - paragraph [ref=e224]: Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura.
      - slider "Comparação antes e depois" [ref=e225]:
        - generic [aria-hidden]:
          - generic: ANTES
          - generic: DEPOIS
        - paragraph [ref=e230]: arraste ou use as setas
      - generic [ref=e231]: Parede antes e depois da intervenção Mandala
    - generic [ref=e233]:
      - paragraph [ref=e234]: 06 / O PROCESSO · 5600K
      - heading "Do rascunho ao último brilho." [level=2] [ref=e235]
      - paragraph [ref=e236]: Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura.
      - img "Construção da obra em etapas" [ref=e238]
      - generic [ref=e250]:
        - generic [ref=e251]:
          - term [ref=e252]: 01 CONVERSA
          - definition [ref=e253]: Entendo o espaço, a luz e o que a parede precisa dizer.
        - generic [ref=e254]:
          - term [ref=e255]: 02 ESBOÇO
          - definition [ref=e256]: Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray.
        - generic [ref=e257]:
          - term [ref=e258]: 03 PAREDE
          - definition [ref=e259]: Pinto no local, em camadas. Cor, volume e sombra até a obra respirar.
        - generic [ref=e260]:
          - term [ref=e261]: 04 ASSINATURA
          - definition [ref=e262]: Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço.
    - generic [ref=e264]:
      - paragraph [ref=e265]: 07 / O OFÍCIO · 5000K / 2700K
      - heading "O que eu faço na parede — e na pele." [level=2] [ref=e266]
      - generic [ref=e267]:
        - article [ref=e268]:
          - generic [ref=e269]:
            - generic [ref=e270]:
              - text: "01"
              - heading "MURAIS EXTERIORES" [level=3] [ref=e271]
            - paragraph [ref=e272]: Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti.
            - link "Orçamento no WhatsApp" [ref=e273]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20MURAIS%20EXTERIORES
        - article [ref=e274]:
          - generic [ref=e275]:
            - generic [ref=e276]:
              - text: "02"
              - heading "LETREIROS & IDENTIDADE" [level=3] [ref=e277]
            - paragraph [ref=e278]: Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua.
            - link "Orçamento no WhatsApp" [ref=e279]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20LETREIROS%20%26%20IDENTIDADE
        - article [ref=e280]:
          - generic [ref=e281]:
            - generic [ref=e282]:
              - text: "03"
              - heading "TELAS & QUADROS" [level=3] [ref=e283]
            - paragraph [ref=e284]: Obras em tela para colecionadores e ambientes internos.
            - link "Orçamento no WhatsApp" [ref=e285]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TELAS%20%26%20QUADROS
        - article [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - text: "04"
              - heading "TATUAGEM" [level=3] [ref=e289]
            - paragraph [ref=e290]: Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio.
            - generic [ref=e291]:
              - heading "A pele é a parede mais próxima." [level=4] [ref=e292]
              - paragraph [ref=e293]: Luz 2700K para a pele. Ring light 5000K para o estúdio.
            - link "Orçamento no WhatsApp" [ref=e294]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20TATUAGEM
        - article [ref=e295]:
          - generic [ref=e296]:
            - generic [ref=e297]:
              - text: "05"
              - heading "OFICINAS" [level=3] [ref=e298]
            - paragraph [ref=e299]: Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas.
            - link "Orçamento no WhatsApp" [ref=e300]:
              - /url: https://wa.me/554792242056?text=Or%C3%A7amento%3A%20OFICINAS
    - generic [ref=e302]:
      - paragraph [ref=e303]: 08 / O FECHO · 5600K
      - heading "A rua continua." [level=2] [ref=e304]
      - paragraph [ref=e305]: Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho.
      - link "FALAR NO WHATSAPP" [ref=e306]:
        - /url: https://wa.me/554792242056
      - paragraph [ref=e307]: Jaraguá do Sul — SC. Atendo a região e projetos fora.
      - paragraph [ref=e308]:
        - text: "Instagram:"
        - link "@ruantrapp" [ref=e309]:
          - /url: https://instagram.com/ruantrapp
      - img [ref=e312]:
        - generic [ref=e313]: RUAN TRAPP
  - contentinfo [ref=e314]:
    - generic [ref=e316]:
      - generic [ref=e317]:
        - paragraph [ref=e318]: RUAN TRAPP
        - paragraph [ref=e319]: Jaraguá do Sul — SC
      - generic [ref=e320]:
        - heading "Créditos" [level=3] [ref=e321]
        - paragraph [ref=e322]: "Imagens: acervo do artista"
      - generic [ref=e323]:
        - paragraph [ref=e324]: © 2026 Ruan Trapp
        - link "voltar ao topo" [ref=e325]:
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