import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brush, Building2, Home, ScanText } from "lucide-react";
import { whatsappUrl } from "@/lib/motion";
import { Reveal, SectionLabel } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Escuta & território",
    short: "Entender antes de desenhar",
    text: "O projeto começa pela intenção e pelo espaço real. Fotos, medidas, incidência de luz, circulação, textura e estado da superfície orientam as decisões — inclusive o que não deve ser pintado.",
    note: "Você envia: referências, localização, fotos e dimensões aproximadas.",
    image: "/images/processo-caminho-artes.jpg",
    alt: "Processo no Caminho das Artes — estudo no muro da ciclovia",
  },
  {
    number: "02",
    title: "Desenho & direção",
    short: "A composição encontra a arquitetura",
    text: "Letterforms, ornamento, cor e vazio são organizados em um estudo de composição. A proposta considera os pontos de vista e a escala de quem vai conviver com a obra todos os dias.",
    note: "Nesta etapa: conceito, linguagem visual, paleta e escopo são alinhados.",
    image: "/images/processo-tela-caligra.jpg",
    alt: "Estudo de caligraffiti em tela no ateliê",
  },
  {
    number: "03",
    title: "Superfície & matéria",
    short: "Preparar para a obra permanecer",
    text: "A execução começa antes da cor: proteção do entorno, avaliação do fundo, limpeza e preparação quando necessária. Spray, acrílica, pincéis e acabamentos são escolhidos para o suporte e suas condições.",
    note: "O orçamento considera complexidade, acesso, materiais e logística.",
    image: "/images/processo-grafite-academia.jpg",
    alt: "Preparação de parede e aplicação de grafite em academia",
  },
  {
    number: "04",
    title: "Execução & presença",
    short: "Camadas até o último detalhe",
    text: "O desenho ganha escala por planos: base, estrutura, volumes, fades, contornos e acabamento. Ao final, o trabalho é revisado no espaço e registrado, com orientações de cuidado quando aplicável.",
    note: "O cronograma é definido por projeto, dimensão, clima e disponibilidade.",
    image: "/images/processo-tucano-sinners.jpg",
    alt: "Muralista aplicando spray no tucano — construção por planos",
  },
];

const services = [
  {
    title: "Murais comerciais",
    tag: "Marcas · fachadas · interiores",
    description: "Projetos site-specific que transformam identidade em experiência espacial, sem perder a autoria da linguagem urbana.",
    icon: Building2,
  },
  {
    title: "Murais residenciais",
    tag: "Living · quartos · áreas externas",
    description: "Composições desenhadas para a arquitetura, a luz e a rotina de cada ambiente — do gesto discreto à parede monumental.",
    icon: Home,
  },
  {
    title: "Telas & lettering",
    tag: "Obras autorais · encomendas",
    description: "Calligraffiti, estudos de assinatura e composições em menor escala, com atenção à matéria, ao pigmento e ao desenho.",
    icon: ScanText,
  },
  {
    title: "Tatuagem autoral",
    tag: "Blackletter · ornamentos · projetos",
    description: "A pesquisa de letras e formas também chega à pele, em propostas conversadas e desenhadas para cada pessoa.",
    icon: Brush,
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <>
      <section id="processo" className="section-pad overflow-hidden bg-panel" aria-labelledby="process-title">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3"><Reveal><SectionLabel index="04">Método & ofício</SectionLabel></Reveal></div>
            <Reveal className="lg:col-span-9">
              <h2 id="process-title" className="font-display text-[clamp(4.2rem,9vw,9rem)] leading-[0.82] text-bone">Do primeiro traço<br /><span className="text-gold">ao último fade.</span></h2>
            </Reveal>
          </div>

          <div className="mt-16 grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4" role="tablist" aria-label="Etapas do processo" aria-orientation="vertical">
              {steps.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  role="tab"
                  id={`step-tab-${index}`}
                  aria-selected={activeStep === index}
                  aria-controls="step-panel"
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault();
                      const next = (index + 1) % steps.length;
                      setActiveStep(next);
                      document.getElementById(`step-tab-${next}`)?.focus();
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault();
                      const previous = (index - 1 + steps.length) % steps.length;
                      setActiveStep(previous);
                      document.getElementById(`step-tab-${previous}`)?.focus();
                    }
                  }}
                  tabIndex={activeStep === index ? 0 : -1}
                  className={`group grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/15 py-5 text-left transition-colors first:border-t ${activeStep === index ? "text-gold" : "text-muted hover:text-bone"}`}
                >
                  <span className="font-mono text-[10px]">{item.number}</span>
                  <span><span className="block text-sm font-medium uppercase tracking-[0.08em]">{item.title}</span><span className="mt-1 block text-[11px] font-light opacity-65">{item.short}</span></span>
                  <span className={`h-2 w-2 rounded-full transition-all ${activeStep === index ? "scale-100 bg-gold" : "scale-0 bg-transparent"}`} />
                </button>
              ))}
            </div>

            <div className="mt-10 lg:col-span-8 lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.div key={step.number} id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${activeStep}`} className="grid overflow-hidden border border-white/15 bg-ink md:grid-cols-2" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="relative min-h-[300px] overflow-hidden md:min-h-[430px]">
                    <motion.img src={step.image} alt={step.alt} className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                    <span className="absolute bottom-5 left-5 font-display text-7xl text-gold">{step.number}</span>
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                    <p className="eyebrow text-gold">Etapa {step.number}</p>
                    <h3 className="mt-4 font-display text-4xl leading-none text-bone md:text-5xl">{step.title}</h3>
                    <p className="mt-6 text-sm font-light leading-7 text-muted">{step.text}</p>
                    <p className="mt-6 border-l border-gold/50 pl-4 text-xs leading-6 text-bone/75">{step.note}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section-pad bg-ink" aria-labelledby="services-title">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal><SectionLabel index="05">Formas de colaborar</SectionLabel>
                <h2 id="services-title" className="mt-7 font-display text-6xl leading-[0.9] text-bone md:text-7xl">Uma linguagem.<br /><span className="display-stroke">Várias escalas.</span></h2>
                <p className="mt-6 max-w-sm text-sm font-light leading-7 text-muted">Cada encomenda parte de uma conversa. Escolha o formato para iniciar um contato já direcionado.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.05}>
                    <a href={whatsappUrl(`Olá, Trapp! Gostaria de conversar sobre ${service.title.toLowerCase()}. Vim pelo seu portfólio.`)} target="_blank" rel="noreferrer" className="group grid gap-5 border-t border-white/15 py-7 last:border-b sm:grid-cols-[44px_1fr_auto] sm:items-center md:py-9">
                      <Icon size={25} strokeWidth={1.2} className="text-gold" />
                      <div>
                        <p className="eyebrow text-muted">{service.tag}</p>
                        <h3 className="mt-2 font-display text-4xl text-bone transition-colors group-hover:text-gold md:text-5xl">{service.title}</h3>
                        <p className="mt-3 max-w-xl text-sm font-light leading-6 text-muted">{service.description}</p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-bone transition-all group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-ink"><ArrowUpRight size={18} /></span>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
