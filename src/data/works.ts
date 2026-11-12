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
    id: "tucano-em-processo",
    index: "02",
    title: "Tucano em processo",
    subtitle: "Cor tropical sob luz de fim de tarde",
    category: "Murais",
    year: "2025",
    location: "Mural externo · Santa Catarina",
    image: "/images/tucano-sinners.jpg",
    alt: "Mural de tucano com bico laranja vibrante em construção",
    ratio: "portrait",
    description:
      "Entre o desenho de grade e a última camada de cor, o mural acontece no corpo: alcance, distância do spray, repetição e decisão.",
    context:
      "O registro documenta a construção de volume no bico e nas áreas de luz. Folhagens reais e pintadas se sobrepõem, aproximando a paisagem do suporte.",
    technique: "Mural externo · spray sobre parede",
    details: ["Construção por planos", "Controle de fades", "Luz, contorno e textura"],
    palette: ["#ef6c22", "#5c9b3b", "#d52e2e", "#282b28"],
  },
  {
    id: "caligra-parede-azul",
    index: "03",
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
    id: "grafite-academia",
    index: "04",
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
    id: "caligrafite-studio",
    index: "05",
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
  {
    id: "caligra-cliente-pronto",
    index: "06",
    title: "Caligraffiti cliente — obra finalizada",
    subtitle: "Encomenda residencial entregue",
    category: "Calligraffiti",
    year: "2024",
    location: "Residência · Santa Catarina",
    image: "/images/caligra-cliente-pronto.jpg",
    alt: "Caligraffiti finalizado em parede de sala com letterforms dourados",
    ratio: "landscape",
    description:
      "Composição desenhada para a arquitetura, a luz e a rotina do ambiente. O dourado muda discretamente com a luz ao longo do dia.",
    context:
      "Projeto residencial sob medida. O vazio preservado devolve escala ao ambiente, enquanto os metalizados criam presença sem aprisionar.",
    technique: "Mural residencial · acrílico e metalizados",
    details: ["Desenho radial", "Leitura que se transforma conforme o ponto de vista", "Integração com decoração"],
    palette: ["#d4af37", "#aaa69b", "#e6e2d8", "#31312d"],
  },
  {
    id: "quadro-parede-caligrafite",
    index: "07",
    title: "Quadro na parede — caligraffiti",
    subtitle: "Obra em tela para coleção particular",
    category: "Telas",
    year: "2025",
    location: "Coleção particular · Santa Catarina",
    image: "/images/quadro-parede-caligrafite.jpg",
    alt: "Tela com caligraffiti em tons de azul, prata e dourado",
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
    id: "caligra-grafite",
    index: "08",
    title: "Caligraffiti & grafite",
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
];

export const categories = ["Todos", "Murais", "Calligraffiti", "Telas", "Processo"] as const;
export type GalleryFilter = (typeof categories)[number];
