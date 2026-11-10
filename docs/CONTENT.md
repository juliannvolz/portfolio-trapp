# CONTENT.md — Copy final e estrutura de conteúdo

## 1. Voz
1ª pessoa, direta, concreta. Frases curtas. Sem "transforme seus espaços em experiências". Sem "paixão", "único", "incrível". Ruan fala.

## 2. Copy por seção

### Preloader
- Logo gótico roxo, alt "Ruan Trapp"
- "Jaraguá do Sul — SC"
- "acendendo a rua"
- Botão "pular abertura"

### Header
- Marca "RUAN TRAPP"
- Links: A OBRA / O CAMINHO / O ACERVO / O OFÍCIO / O FECHO
- Botão "Orçamento" → WhatsApp
- Toggle "Som"

### Hero — 01 / A RUA
- Kicker: "ARTISTA VISUAL · MURALISTA · TATUADOR"
- Local: "JARAGUÁ DO SUL — SC"
- H1: "RUAN TRAPP"
- H2: "O CANTO QUE CONSTRÓI"
- Sub: "Pinto a rua desde 2018. Murais, letreiros, telas e tatuagem."
- CTAs: "VER AS OBRAS" / "FALAR NO WHATSAPP"
- Cue: "DESÇA A RUA" + "2200K"

### Manifesto — 02 / A OBRA
- H2: "A rua foi minha primeira escola."
- "Comecei no graffiti em 2018, pelo Hip Hop, atrás das letras. Depois vieram a caligrafia gótica, o calligraffiti e a parede inteira."
- "Hoje pinto murais, letreiros, telas e tatuagem. O método é o mesmo: olhar a rua, entender a luz e construir o traço."
- "Sou de Jaraguá do Sul. Trabalho em espaços públicos e privados, e também passo o que aprendi em oficinas."
- Ficha: "Ruan Trapp / Jaraguá do Sul — SC / graffiti desde 2018 / muralista desde 2024 / murais · letreiros · telas · tatuagem · oficinas"
- CTA: "Ver o Caminho das Artes"

### Caminho das Artes — 03 / O CAMINHO
- H2: "O canto que constrói."
- "Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro."
- Fatos: "600 m de percurso / 1.500 m² de muros / 30 artistas / 14 luminárias LED / SCAR + Instituto AION / 150 anos de Jaraguá do Sul"
- Quote: "O canto da araponga é o som da cidade: metal e mata."
- Créditos: "Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista."

### Portfólio — 04 / O ACERVO
- H2: "Cada parede acende diferente."
- "Uma seleção de murais, caligrafias, telas e trabalhos de estúdio. Passe a luz."
- Filtros: TODOS / MURAIS / CALIGRAFIA / TELAS / ESTÚDIO & TATTOO

### Transformação — 05 / A TRANSFORMAÇÃO
- H2: "Antes de acender, a parede é só parede."
- "Arraste a luz. À esquerda, o que existia. À direita, o que ficou. O mesmo espaço, outra temperatura."
- Labels: ANTES / DEPOIS
- Hint: "arraste ou use as setas"

### Processo — 06 / O PROCESSO
- H2: "Do rascunho ao último brilho."
- "Cada parede começa antes da tinta. O processo é conversa, esboço, parede e assinatura."
- 01 CONVERSA: "Entendo o espaço, a luz e o que a parede precisa dizer."
- 02 ESBOÇO: "Desenho a composição, as letras e a escala. Testo o traço antes de soltar o spray."
- 03 PAREDE: "Pinto no local, em camadas. Cor, volume e sombra até a obra respirar."
- 04 ASSINATURA: "Últimos brilhos, acabamento e a tag. A parede passa a assinar o espaço."

### Serviços — 07 / O OFÍCIO
- H2: "O que eu faço na parede — e na pele."
- MURAIS EXTERIORES: "Paredes de casas, comércios, empresas e espaços públicos. Do realismo ao abstrato, com spray e técnica de graffiti."
- LETREIROS & IDENTIDADE: "Letreiros autorais, logos e lettering para marcas que querem ser vistas na rua."
- TELAS & QUADROS: "Obras em tela para colecionadores e ambientes internos."
- TATUAGEM: "Traço autoral, caligrafia e estética de rua na pele. Projeto e execução no estúdio."
- OFICINAS: "Graffiti, caligrafia e calligraffiti para escolas, centros culturais e empresas."
- Tattoo H3: "A pele é a parede mais próxima."

### Contato — 08 / O FECHO
- H2: "A rua continua."
- "Me chama no WhatsApp com o tamanho da parede, a cidade e a ideia. Eu respondo com um caminho."
- CTA: "FALAR NO WHATSAPP"
- "Jaraguá do Sul — SC. Atendo a região e projetos fora."
- Instagram: "@ruantrapp"
- Sem email.

### Footer
- "© 2026 Ruan Trapp"
- "Jaraguá do Sul — SC"
- "Imagens: acervo do artista"
- "voltar ao topo"

## 3. Obras e fichas
Criar `src/content/works.ts` com todos os trabalhos. Campos: `id`, `title`, `category`, `src`, `alt`, `year` (ou null), `technique` (ou null), `location` (ou null), `dimensions` (ou null), `featured`, `span`.
Categorias: `murais`, `caligrafia`, `telas`, `estudio`.
Não inventar ano/dimensão. Se desconhecido, omitir da ficha. Para o Caminho das Artes, ano 2026 confirmado.

## 4. Mapa de imagens por seção

| Seção | Imagens |
|-------|---------|
| Hero | `araponga-caminho-das-artes.jpg`, fallback `caminho-das-artes-principal.jpg` |
| Manifesto | `ruan-trapp3x4.jpg`, `ruan-trapp-pintando.webp`, `logo-tipo2.jpg` (watermark), `caligra-parede-branca.jpg` (máscara) |
| Caminho | `caminho-das-artes-principal.jpg`, `ave-caminho-artes.jpg`, `captacao-caminho-artes.jpg`, `processo-caminho-artes.jpg`, `processo-caminho-das-artes.jpg`, `processo-caminho-das-artes3.jpg`, `processo2-caminho-artes.jpg`, `araponga-caminho-das-artes.jpg`, `araponga-caligrafia.jpg` |
| Portfólio — Murais | `grafite-academia.jpg`, `grafite-escrita.jpg`, `grafite-estudio.jpg`, `grafite-studio3.jpg`, `mural-estudio-espelho.jpg`, `mural-estudio-noturno.jpg`, `mural-mandala-lustre.jpg`, `mural-caligrafia-prata.jpg`, `mural-sala-violao.jpg`, `mural-ouro-prata.jpg`, `passaro-amarelo-realismo.jpg` |
| Portfólio — Caligrafia | `caligra-cliente-pronto.jpg`, `caligra-grafite.jpg`, `caligra-parede-azul.jpg`, `caligra-parede-azul2.jpg`, `caligra-parede-branca.jpg`, `caligrafite-abstrato.jpg`, `caligrafite-cliente.jpg`, `cliente-piolho-caligra-escada.jpg` |
| Portfólio — Telas | `quadro-parede-caligrafite.jpg`, `quadro-parede-caligrafrite.jpg`, `processo-tela-caligra.jpg`, `processo-caligra-tela.jpg` |
| Portfólio — Estúdio/Tattoo | `caligrafite-studio.jpg`, `caligrafite-studio-tattoo.jpg` |
| Transformação | `antes-mandala.jpg`, `mural-estudio-espelho.jpg` |
| Processo | `processo-arte.jpg`, `processo-grafite-academia.jpg`, `processo-tucano-sinners.jpg`, `processo-tucano-sinners2.jpg`, `processo-tucano-sinners3.jpg`, `processo-caminho-artes.jpg`, `processo-caminho-das-artes.jpg`, `processo-caminho-das-artes3.jpg`, `processo2-caminho-artes.jpg`, `processo-tela-caligra.jpg`, `processo-caligra-tela.jpg` |
| Serviços/Tattoo | `caligrafite-studio-tattoo.jpg`, `ruan-trapp-pintando.webp`, `mural-estudio-noturno.jpg` |
| Marcas/máscaras | `logo3.1.jpg`, `logo-tipo2.jpg`, `logo-trapp.jpg`, `logo3.jpg`, `logo4.jpg`, `caligra-parede-branca.jpg`, `caligra-parede-azul.jpg` |

Usar todas. Imagens podem se repetir entre seções com crops diferentes.

## 5. SEO e metadata
- title: `'Ruan Trapp — Muralista, Caligraffiti e Tatuagem | Jaraguá do Sul'`
- description: `'Murais, letreiros, telas e tatuagem de Ruan Trapp. Artista do Caminho das Artes, em Jaraguá do Sul (SC). Fale no WhatsApp.'`
- OG: 1200×630, pt_BR, website, `/og-image.jpg`
- Twitter: summary_large_image
- JSON-LD Person: name, jobTitle, url, sameAs (Instagram + WhatsApp), address, knowsAbout
- themeColor: `'#0B0A08'`
- metadataBase: `new URL(SITE_URL)`
- sitemap.xml e robots.txt estáticos

## 6. Pendências marcadas
- URL final do subdomínio Vercel
- Email real (não exibir até confirmar)
- Créditos de fotos de terceiros
- Anos/dimensões de obras não confirmadas
- Mais pares "antes/depois" para o futuro