import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, whatsappUrl } from "@/lib/motion";
import { Reveal, SectionLabel } from "./Reveal";
import { InstagramIcon, Magnetic, Monogram, TextLink } from "./UI";
import { gsap, reducedMotion } from "@/lib/motion";

const faqs = [
  { question: "Como é calculado o valor de um mural?", answer: "Cada orçamento considera área, complexidade do desenho, estado e textura da superfície, altura e condições de acesso, materiais, proteção do entorno e deslocamento. Por isso, não há uma tabela genérica de preço por metro quadrado: o brief e as fotos permitem uma proposta coerente com o trabalho real." },
  { question: "Preciso ter todas as medidas antes do primeiro contato?", answer: "Não. Medidas aproximadas já ajudam, mas você pode iniciar a conversa com fotos, localização e uma descrição da ideia. A conferência das dimensões e das condições da parede faz parte da definição do projeto." },
  { question: "Posso enviar referências de outros artistas?", answer: "Sim. Referências ajudam a entender atmosfera, cor, densidade e intenção. Elas funcionam como ponto de partida para uma criação autoral, não como modelo para reproduzir a assinatura de outra pessoa." },
  { question: "Você atende projetos fora de Jaraguá do Sul?", answer: "Projetos em outras cidades podem ser avaliados conforme escopo, agenda e logística. Informe a cidade no brief para que deslocamento, hospedagem e condições de execução sejam considerados desde a proposta." },
  { question: "Também é possível encomendar tela ou tatuagem?", answer: "Sim. A mesma pesquisa de letterforms atravessa telas e tatuagens autorais. No brief, selecione o formato desejado e compartilhe dimensões ou região do corpo, referências e contexto para direcionar a conversa." },
  { question: "Como funcionam oficinas e ações para a comunidade?", answer: "O formato é conversado com a instituição ou coletivo: perfil dos participantes, duração, estrutura disponível, objetivos pedagógicos e número de pessoas. A proposta pode combinar repertório, demonstração e prática de graffiti e letterforms." },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section-pad bg-ink" aria-labelledby="faq-title">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28"><SectionLabel index="07">Antes da primeira conversa</SectionLabel><h2 id="faq-title" className="mt-7 font-display text-6xl leading-[0.88] text-bone md:text-7xl">Perguntas<br /><span className="text-gold">frequentes.</span></h2><p className="mt-6 max-w-sm text-sm font-light leading-7 text-muted">Informação clara também faz parte do processo. Se a sua dúvida não estiver aqui, envie pelo WhatsApp.</p></Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((faq, index) => {
            const expanded = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.035}>
                <div className="border-t border-white/15 last:border-b">
                  <h3>
                    <button type="button" onClick={() => setOpen(expanded ? -1 : index)} aria-expanded={expanded} aria-controls={`faq-panel-${index}`} className="flex w-full items-center justify-between gap-6 py-6 text-left">
                      <span className={`text-base font-medium leading-6 transition-colors md:text-lg ${expanded ? "text-gold" : "text-bone"}`}>{faq.question}</span>
                      <ChevronDown size={18} className={`shrink-0 text-gold transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {expanded && <motion.div id={`faq-panel-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden"><p className="max-w-2xl pb-7 pr-8 text-sm font-light leading-7 text-muted">{faq.answer}</p></motion.div>}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex items-center gap-2 md:bottom-6 md:right-6">
      <Magnetic>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-ink/85 text-bone shadow-xl backdrop-blur-md transition-colors hover:border-gold hover:text-gold" aria-label="Instagram de Trapp"><InstagramIcon size={19} /></a>
      </Magnetic>
      <Magnetic strength={0.14}>
        <a href={whatsappUrl("Olá, Trapp! Vim pelo seu portfólio e gostaria de conversar sobre um projeto de mural ou tatuagem.")} target="_blank" rel="noreferrer" className="group flex h-12 items-center gap-3 rounded-full bg-gold px-4 text-ink shadow-[0_8px_35px_rgba(212,175,55,0.22)] transition-colors hover:bg-gold-light md:px-5" aria-label="Solicitar orçamento pelo WhatsApp"><MessageCircle size={18} fill="currentColor" className="text-ink" /><span className="text-[9px] font-bold uppercase tracking-[0.14em]">WhatsApp <span className="hidden sm:inline">/ orçamento</span></span><ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" /></a>
      </Magnetic>
    </div>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);
  return <span>{time || "--:--"} GMT−3</span>;
}

export function Farewell() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".farewell-logo", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".farewell-section", start: "top 85%", once: true } });
      gsap.fromTo(".farewell-text", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: ".farewell-section", start: "top 85%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="farewell-section relative min-h-[50vh] flex items-center justify-center bg-ink border-t border-white/10" aria-label="Despedida">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 text-center px-6">
        <img src="/images/logotrappazulsemfundo.png" alt="Trapp" className="farewell-logo mx-auto mb-8 max-w-[280px] h-auto opacity-90 filter drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]" width="280" height="120" />
        <p className="farewell-text font-mono text-[9px] uppercase tracking-[0.3em] text-gold/60">Obrigado por chegar até aqui.</p>
        <p className="farewell-text mt-2 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/50">Trapp · Jaraguá do Sul, SC</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-[var(--color-concrete-700)]" role="contentinfo">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/images/logotrappazulsemfundo.png" 
              alt="Ruan Trapp" 
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4" 
            />
            <p className="type-mono text-[var(--color-silver)] text-center md:text-left">
              Jaraguá do Sul — SC
            </p>
          </div>
          <div>
            <h3 className="type-mono text-[var(--color-light-5600)] mb-4">Créditos</h3>
            <p className="text-[var(--color-bone-dim)] text-[var(--text-body)]">
              Imagens: acervo do artista
            </p>
          </div>
          <div className="text-right md:text-left">
            <p className="type-mono text-[var(--color-silver)] mb-2">
              © 2026 Ruan Trapp
            </p>
            <a
              href="#topo"
              className="type-mono text-[var(--color-gold)] hover:underline inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
              voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
