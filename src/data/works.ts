export type WorkCategory = "Murais" | "Calligraffiti" | "Telas" | "Processo";

export type Work = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: WorkCategory;
  year: string;
  location: string;
  image: string;
  alt: string;
  ratio: "portrait" | "landscape";
  featured?: boolean;
  description: string;
  context: string;
  technique: string;
  details: string[];
  palette: string[];
};

export const works: Work[] = [
  {
    id: "o-canto-que-constroi",
    index: "01",
    title: "O canto que constrói",
    subtitle: "Natureza e indústria em uma mesma frequência",
    category: "Murais",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/caminho-das-artes.jpg",
    alt: "Mural O canto que constrói — araponga em wildstyle metálico na ciclovia do Centro",
    ratio: "landscape",
    featured: true,
    description:
      "A araponga, ave da Mata Atlântica conhecida pelo canto metálico, atravessa o muro como uma estrutura viva de aço, geometria e wildstyle.",
    context:
      "Criado para o Caminho das Artes, o painel parte da relação entre passado, presente e futuro de Jaraguá do Sul. O canto da ave — comparado ao som do aço sendo golpeado — conecta a floresta à força metalúrgica da cidade. Realização SCAR, curadoria Beto Shibata e Denyse Silva, parceria Instituto AION.",
    technique: "Mural público · spray, wildstyle e formas geométricas",
    details: ["Projeto SCAR + Instituto AION", "Galeria a céu aberto na ciclovia do Centro", "Cerca de 30 artistas na primeira etapa"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "tucano-processo-1",
    index: "02",
    title: "Tucano — Processo 1",
    subtitle: "Construção do volume e estrutura",
    category: "Processo",
    year: "2025",
    location: "Mural externo · Santa Catarina",
    image: "/images/processo-tucano-sinners3.jpg",
    alt: "Processo do mural do tucano — estrutura inicial e grade",
    ratio: "portrait",
    description:
      "Primeira etapa: definição da grade, proporções e estrutura geral do tucano. O desenho guia toda a construção volumétrica.",
    context:
      "O processo começa com a grade de proporções. Cada linha define onde o volume vai nascer. A distância do spray e a pressão determinam a qualidade da linha.",
    technique: "Mural externo · spray sobre parede — etapa 1",
    details: ["Grade de proporções", "Estrutura geral", "Definição de volumes"],
    palette: ["#ef6c22", "#5c9b3b", "#d52e2e", "#282b28"],
  },
  {
    id: "tucano-processo-2",
    index: "03",
    title: "Tucano — Processo 2",
    subtitle: "Camadas de cor e definição",
    category: "Processo",
    year: "2025",
    location: "Mural externo · Santa Catarina",
    image: "/images/processo-tucano-sinners.jpg",
    alt: "Processo do mural do tucano — camadas intermediárias de cor",
    ratio: "portrait",
    description:
      "Segunda etapa: aplicação das camadas de cor base, construção do bico laranja vibrante e definição das áreas de luz e sombra.",
    context:
      "O bico ganha vida com camadas sucessivas de laranja e vermelho. As folhagens começam a aparecer, criando profundidade e contexto.",
    technique: "Mural externo · spray sobre parede — etapa 2",
    details: ["Construção do bico", "Camadas de cor base", "Primeiras folhagens"],
    palette: ["#ef6c22", "#5c9b3b", "#d52e2e", "#282b28"],
  },
  {
    id: "tucano-processo-3",
    index: "04",
    title: "Tucano — Processo 3",
    subtitle: "Detalhes finais e acabamento",
    category: "Processo",
    year: "2025",
    location: "Mural externo · Santa Catarina",
    image: "/images/processo-tucano-sinners2.jpg",
    alt: "Processo do mural do tucano — detalhes finais e acabamento",
    ratio: "portrait",
    description:
      "Terceira etapa: refinamento de detalhes, ajustes de contraste, luzes finais e assinatura. O mural respira pronto.",
    context:
      "Os toques finais trazem o realismo: reflexos no olho, textura das penas, integração com a parede. O processo se fecha.",
    technique: "Mural externo · spray sobre parede — etapa 3",
    details: ["Refinamento de detalhes", "Luzes e contrastes", "Assinatura"],
    palette: ["#ef6c22", "#5c9b3b", "#d52e2e", "#282b28"],
  },
  {
    id: "tucano-final",
    index: "05",
    title: "Tucano — Resultado Final",
    subtitle: "Cor tropical sob luz de fim de tarde",
    category: "Murais",
    year: "2025",
    location: "Mural externo · Santa Catarina",
    image: "/images/TUCANO-FINAL.webp",
    alt: "Mural finalizado do tucano com bico laranja vibrante",
    ratio: "portrait",
    featured: true,
    description:
      "O tucano completo: bico laranja vibrante, plumagem detalhada, folhagens integradas. A ave tropical domina a parede com presença.",
    context:
      "Mural finalizado que sintetiza todo o processo. O bico laranja é o ponto focal, as folhagens criam ambiente, a composição respira.",
    technique: "Mural externo · spray sobre parede — resultado final",
    details: ["Bico laranja vibrante", "Plumagem detalhada", "Integração com folhagens", "Composição equilibrada"],
    palette: ["#ef6c22", "#5c9b3b", "#d52e2e", "#282b28"],
  },
  {
    id: "escada-piolho",
    index: "06",
    title: "Escada do Piolho",
    subtitle: "Intervenção urbana em escadaria",
    category: "Murais",
    year: "2024",
    location: "Escadaria pública · Santa Catarina",
    image: "/images/cliente-piolho-caligra-escada.jpg",
    alt: "Escadaria pintada com caligraffiti vermelho vibrante",
    ratio: "portrait",
    featured: true,
    description:
      "Uma escadaria pública transformada em tela. O caligraffiti vermelho vibrante sobe degrau a degrau, criando ritmo e movimento.",
    context:
      "Intervenção urbana que transforma o cotidiano. Cada degrau carrega uma parte da composição. Ao subir, a obra se revela completa.",
    technique: "Mural em escadaria · spray e acrílico",
    details: ["Intervenção urbana", "Caligraffiti vermelho", "Composição em degraus", "Experiência cinética"],
    palette: ["#d52e2e", "#ef6c22", "#1a1a1a", "#d9d5c8"],
  },
  {
    id: "caligra-tela-processo",
    index: "07",
    title: "Caligraffiti Tela — Processo",
    subtitle: "Pesquisa de letra em escala de ateliê",
    category: "Processo",
    year: "2025",
    location: "Ateliê · Jaraguá do Sul, SC",
    image: "/images/processo-tela-caligra.jpg",
    alt: "Processo de caligraffiti em tela — camadas e gestos",
    ratio: "portrait",
    description:
      "Na tela, o gesto fica exposto. Marcas de cerda, raspagens, veladuras e transparências revelam a construção da letra.",
    context:
      "A escala de ateliê permite controle e experimentação. Cada camada é uma decisão visível. O processo vira obra.",
    technique: "Tela · acrílico, pincel, spray e veladuras",
    details: ["Camadas de pigmento", "Gestos de pincel chato", "Veladuras e transparências", "Estudos de luz"],
    palette: ["#1a3a5c", "#b5b4ae", "#d4af37", "#101010"],
  },
  {
    id: "caminho-artes-2",
    index: "08",
    title: "Caminho das Artes — Vista 2",
    subtitle: "Perspectiva da galeria a céu aberto",
    category: "Murais",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/caminho-2.jpg",
    alt: "Vista do Caminho das Artes — perspectiva da ciclovia",
    ratio: "landscape",
    description:
      "Segunda vista do percurso: a ciclovia transformada em galeria. Murais de ambos os lados criam corredor imersivo.",
    context:
      "Parte do projeto Caminho das Artes. 600 metros de ciclovia, 30 artistas, 1.500 m² de muros. A cidade ganha voz.",
    technique: "Mural público · spray e tinta acrílica",
    details: ["Perspectiva da ciclovia", "Corredor imersivo", "Integração urbana"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "caminho-artes-3",
    index: "09",
    title: "Caminho das Artes — Vista 3",
    subtitle: "Visão aérea da galeria",
    category: "Murais",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/caminho-3.jpg",
    alt: "Visão aérea do Caminho das Artes — extensão do percurso",
    ratio: "landscape",
    description:
      "Visão aérea revela a extensão do projeto: 600 metros de intervenção contínua. A cidade vista de cima ganha nova identidade.",
    context:
      "Captação aérea mostra a escala real. O percurso conecta bairros, pessoas, histórias. Arte como infraestrutura urbana.",
    technique: "Mural público · spray e tinta acrílica",
    details: ["Visão aérea", "Escala urbana", "Conexão de bairros"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "caminho-artes-4",
    index: "10",
    title: "Caminho das Artes — Vista 4",
    subtitle: "Natureza e obra integradas",
    category: "Murais",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/caminho-4.jpg",
    alt: "Integração da natureza com a obra no Caminho das Artes",
    ratio: "landscape",
    description:
      "A vegetação nativa abraça os murais. Árvores, sombras e luz natural tornam-se parte da composição. Arte e mata atlântica em diálogo.",
    context:
      "O projeto respeita e integra a vegetação existente. A natureza não é fundo — é coautora. Sombra de árvore vira pincelada.",
    technique: "Mural público · spray e tinta acrílica",
    details: ["Integração com mata atlântica", "Luz e sombra naturais", "Diálogo arte-natureza"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "caligra-parede-branca",
    index: "11",
    title: "Caligrafia Parede Branca",
    subtitle: "Contraste limpo e direto",
    category: "Calligraffiti",
    year: "2025",
    location: "Intervenção de interior · Santa Catarina",
    image: "/images/caligra-parede-branca.jpg",
    alt: "Caligraffiti em prata e dourado sobre parede branca",
    ratio: "portrait",
    description:
      "Sobre o branco puro, a letra brilha. Prata e dourado dançam sem competição. O vazio amplifica o gesto.",
    context:
      "Parede branca como tela infinita. O mínimo necessário: letra, metal, luz. A simplicidade exige precisão absoluta.",
    technique: "Calligraffiti de interior · spray, acrílico e metalizados",
    details: ["Fundo branco puro", "Prata e dourado", "Precisão absoluta", "Vazio ativo"],
    palette: ["#ffffff", "#c8d0d1", "#d4af37", "#1a1a1a"],
  },
  {
    id: "caligra-parede-azul2",
    index: "12",
    title: "Caligrafia Parede Azul 2",
    subtitle: "Variação em azul profundo",
    category: "Calligraffiti",
    year: "2025",
    location: "Intervenção de interior · Santa Catarina",
    image: "/images/caligra-parede-azul2.jpg",
    alt: "Caligraffiti gótico em prata e dourado sobre parede azul escura — variação 2",
    ratio: "portrait",
    description:
      "Variação da composição vertical. O azul profundo cria câmara distinta. Ornamentos laterais ganham novo ritmo.",
    context:
      "Mesma estrutura, nova atmosfera. O azul muda a leitura: mais noturna, mais íntima. A letra adapta-se ao suporte.",
    technique: "Calligraffiti de interior · spray, acrílico e metalizados",
    details: ["Composição vertical variada", "Azul profundo", "Ornamentos reconfigurados"],
    palette: ["#102c4a", "#1ca6c8", "#c8d0d1", "#d4af37"],
  },
  {
    id: "grafite-estudio",
    index: "13",
    title: "Grafite Estúdio",
    subtitle: "Letra e movimento no espaço de treino",
    category: "Murais",
    year: "2024",
    location: "Espaço comercial · Jaraguá do Sul, SC",
    image: "/images/grafite-estudio.jpg",
    alt: "Grafite autoral em tons terrosos e dourados em parede de estúdio",
    ratio: "landscape",
    description:
      "A composição acompanha o fluxo do espaço. Formas orgânicas e letterforms dialogam com a arquitetura industrial.",
    context:
      "Projeto para identidade visual do ambiente. A paleta terrosa com toques de ouro conecta o espaço à linguagem da rua.",
    technique: "Mural comercial · spray e acrílico",
    details: ["Adaptação à arquitetura", "Identidade visual", "Paleta terrosa e dourada"],
    palette: ["#8b6b47", "#d4af37", "#3d2f21", "#c9b896"],
  },
  {
    id: "grafite-studio3",
    index: "14",
    title: "Grafite Estúdio 3",
    subtitle: "Variação no espaço de treino",
    category: "Murais",
    year: "2024",
    location: "Espaço comercial · Jaraguá do Sul, SC",
    image: "/images/grafite-studio3.jpg",
    alt: "Grafite autoral — variação 3 em estúdio",
    ratio: "landscape",
    description:
      "Nova composição no mesmo espaço. A letra muta, as formas se reorganizam. O estúdio como laboratório contínuo.",
    context:
      "O mesmo muro, nova intervenção. O espaço pede mudança. A letra responde ao tempo e ao uso do lugar.",
    technique: "Mural comercial · spray e acrílico",
    details: ["Reintervenção no mesmo espaço", "Letra mutante", "Laboratório contínuo"],
    palette: ["#8b6b47", "#d4af37", "#3d2f21", "#c9b896"],
  },
  {
    id: "caligra-grafite-processo",
    index: "15",
    title: "Caligraffiti & Grafite — Processo",
    subtitle: "Onde a letra encontra a rua",
    category: "Processo",
    year: "2024",
    location: "Registro de ateliê · Jaraguá do Sul, SC",
    image: "/images/caligra-grafite.jpg",
    alt: "Estudo misto de caligraffiti e grafite em parede de treino",
    ratio: "landscape",
    description:
      "Antes da grande escala, há silêncio, estudo e repetição. O pincel calibra o pulso que depois será ampliado em metros de parede.",
    context:
      "O processo reúne referências da caligrafia gótica, do graffiti e do desenho autoral. Cada estudo alimenta um vocabulário que circula entre suporte, arquitetura e pele.",
    technique: "Processo de ateliê · desenho, pincel e spray",
    details: ["Pesquisa de letterforms", "Estudos de densidade", "Passagem entre escalas"],
    palette: ["#1d5b3c", "#d4d1c8", "#353735", "#0d0e0d"],
  },
  {
    id: "quadro-caligrafrite",
    index: "16",
    title: "Quadro Caligrafrite",
    subtitle: "Obra em tela para coleção particular",
    category: "Telas",
    year: "2025",
    location: "Coleção particular · Santa Catarina",
    image: "/images/quadro-parede-caligrafrite.jpg",
    alt: "Tela com caligraffiti em tons de azul, prata e dourado — variação",
    ratio: "portrait",
    description:
      "Na tela, a escala muda e o pigmento fica mais próximo. Marcas de cerda, raspagens e veladuras tornam visíveis as decisões do gesto.",
    context:
      "A pesquisa sobre tela desloca o calligraffiti da leitura imediata para a experiência da matéria. A letra permanece como estrutura, mas a textura assume o primeiro plano.",
    technique: "Tela · acrílica, pincel e veladuras metalizadas",
    details: ["Camadas de pigmento", "Gestos de pincel chato", "Estudos de luz e textura"],
    palette: ["#1a3a5c", "#b5b4ae", "#d4af37", "#101010"],
  },
  {
    id: "processo-caminho-1",
    index: "17",
    title: "Processo Caminho — Execução",
    subtitle: "Pintura dos murais ao longo do percurso",
    category: "Processo",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/processo-caminho-artes.jpg",
    alt: "Processo de execução dos murais no Caminho das Artes",
    ratio: "landscape",
    description:
      "Execução em altura, escala urbana, logística de andaimes. O muro vira ateliê temporário. Cada dia, uma nova seção.",
    context:
      "Processo real de pintura no percurso. Condições climáticas, altura, tempo. A obra nasce no confronto com o real.",
    technique: "Mural público · spray e tinta acrílica — processo",
    details: ["Trabalho em altura", "Escala urbana", "Logística de execução", "Condições reais"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "processo-caminho-2",
    index: "18",
    title: "Processo Caminho — Detalhe",
    subtitle: "Trabalho em altura e escala urbana",
    category: "Processo",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/processo-caminho-das-artes.jpg",
    alt: "Detalhe do processo de pintura no Caminho das Artes",
    ratio: "landscape",
    description:
      "Close no processo: textura do spray, sobreposição de cores, gesto do artista. A macro revela o que o longe esconde.",
    context:
      "Detalhe que mostra a materialidade. Cada ponto de spray é uma decisão. A textura conta a história da execução.",
    technique: "Mural público · spray e tinta acrílica — detalhe",
    details: ["Textura do spray", "Sobreposição de cores", "Gesto do artista"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "processo-caminho-3",
    index: "19",
    title: "Processo Caminho — Finalização",
    subtitle: "Acabamento e iluminação LED",
    category: "Processo",
    year: "2026",
    location: "Caminho das Artes · Jaraguá do Sul, SC",
    image: "/images/processo-caminho-das-artes3.jpg",
    alt: "Finalização dos murais e instalação de iluminação no Caminho das Artes",
    ratio: "landscape",
    description:
      "Última etapa: retoques finais, proteção, instalação das 14 luminárias LED. A galeria acende. A noite revela nova face.",
    context:
      "A iluminação transforma. O que era dia vira noite, e a obra ganha segunda vida. 14 pontos de luz desenham o percurso.",
    technique: "Mural público · spray e tinta acrílica — finalização",
    details: ["Retoques finais", "Proteção da obra", "14 luminárias LED", "Face noturna"],
    palette: ["#b9a15c", "#606568", "#18352d", "#d9d5c8"],
  },
  {
    id: "grafite-academia",
    index: "20",
    title: "Grafite na academia",
    subtitle: "Letra e movimento no espaço de treino",
    category: "Murais",
    year: "2024",
    location: "Espaço comercial · Jaraguá do Sul, SC",
    image: "/images/grafite-academia.jpg",
    alt: "Grafite autoral em tons terrosos e dourados em parede de academia",
    ratio: "landscape",
    description:
      "A composição acompanha o fluxo do espaço. Formas orgânicas e letterforms dialogam com a arquitetura industrial.",
    context:
      "Projeto encomendado para identidade visual do ambiente. A paleta terrosa com toques de ouro conecta o espaço à linguagem da rua.",
    technique: "Mural comercial · spray e acrílico",
    details: ["Adaptação à arquitetura", "Identidade visual do espaço", "Paleta terrosa e dourada"],
    palette: ["#8b6b47", "#d4af37", "#3d2f21", "#c9b896"],
  },
  {
    id: "caligra-parede-azul",
    index: "21",
    title: "Caligraffiti na parede azul",
    subtitle: "Ritmo gótico em fundo profundo",
    category: "Calligraffiti",
    year: "2025",
    location: "Intervenção de interior · Santa Catarina",
    image: "/images/caligra-parede-azul.jpg",
    alt: "Caligraffiti gótico em prata e dourado sobre parede azul escura",
    ratio: "portrait",
    description:
      "Camadas de letras se organizam em composição vertical. O azul profundo cria câmara para o dourado e a prata respirarem.",
    context:
      "A simetria central conversa com a liberdade dos ornamentos laterais. A peça combina precisão de desenho e transparências de spray para produzir profundidade em superfície plana.",
    technique: "Calligraffiti de interior · spray, acrílico e metalizados",
    details: ["Composição vertical", "Contrastes de opacidade", "Ornamento e estrutura gótica"],
    palette: ["#102c4a", "#1ca6c8", "#c8d0d1", "#d4af37"],
  },
  {
    id: "caligrafite-studio",
    index: "22",
    title: "Caligraffiti no estúdio",
    subtitle: "Pesquisa de letra em escala de ateliê",
    category: "Calligraffiti",
    year: "2025",
    location: "Ateliê · Jaraguá do Sul, SC",
    image: "/images/caligrafite-studio.jpg",
    alt: "Estudo de caligraffiti em parede de estúdio com pincel e spray",
    ratio: "portrait",
    description:
      "No ateliê a escala muda e o pigmento fica mais próximo. Marcas de cerda, raspagens e veladuras tornam visíveis as decisões do gesto.",
    context:
      "A pesquisa sobre parede desloca o calligraffiti da leitura imediata para a experiência da matéria. A letra permanece como estrutura, mas a textura assume o primeiro plano.",
    technique: "Parede de ateliê · pincel, spray e acrílico",
    details: ["Camadas de pigmento", "Gestos de pincel chato", "Estudos de luz e textura"],
    palette: ["#b5b4ae", "#777873", "#d4af37", "#20201f"],
  },
];

export const categories = ["Todos", "Murais", "Calligraffiti", "Telas", "Processo"] as const;
export type GalleryFilter = (typeof categories)[number];