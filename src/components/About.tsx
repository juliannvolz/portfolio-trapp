import { useLayoutEffect, useRef } from "react";
import { gsap, reducedMotion } from "@/lib/motion";
import { Reveal, SectionLabel } from "./Reveal";

const milestones = [
  { year: "2018", title: "A primeira linha", text: "O graffiti entra pela cultura Hip Hop e vira pesquisa diária de letras, caligrafia gótica e calligraffiti." },
  { year: "2024", title: "A parede como ofício", text: "Início da atuação profissional como muralista, com projetos para espaços públicos e privados. Participação no Caminho das Artes — galeria a céu aberto no Centro de Jaraguá do Sul (SCAR + Instituto AION)." },
  { year: "Hoje", title: "Linguagem em expansão", text: "Murais, telas e tatuagens autorais convivem com oficinas de graffiti e ações artísticas para a comunidade." },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || reducedMotion()) return;
    const context = gsap.context(() => {
      gsap.fromTo(".about-image img", { yPercent: -8, scale: 1.12 }, {
        yPercent: 8,
        scale: 1.02,
        ease: "none",
        scrollTrigger: { trigger: ".about-image", start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.from(".milestone", {
        x: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".milestones", start: "top 78%", once: true },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="section-pad relative overflow-hidden bg-ink" aria-labelledby="about-title">
      <div className="pointer-events-none absolute right-[-0.1em] top-10 font-display text-[32vw] leading-none text-white/[0.018]" aria-hidden="true">T</div>
      <div className="page-shell relative">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3"><Reveal><SectionLabel index="01">Sobre o artista</SectionLabel></Reveal></div>
          <Reveal className="lg:col-span-9">
            <h2 id="about-title" className="max-w-5xl text-balance font-display text-[clamp(4.4rem,9.5vw,9.5rem)] leading-[0.82] tracking-[-0.025em] text-bone">
              A letra é <span className="display-stroke">território.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="about-image relative aspect-[4/5] overflow-hidden bg-panel">
                <img src="/images/ruan-trapp.jpg" alt="Trapp — artista visual, muralista e tatuador em seu ateliê" width="1000" height="1250" loading="lazy" className="h-[116%] w-full object-cover will-change-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-7">
                  <span className="eyebrow text-bone/75">Ateliê / processo</span>
                  <span className="font-display text-4xl text-gold">T.</span>
                </figcaption>
              </figure>
            </Reveal>
            <div className="mt-4 flex justify-between font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
              <span>Jaraguá do Sul, Santa Catarina</span><span>BR / 26.48° S</span>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="text-pretty text-[clamp(1.45rem,2.3vw,2.2rem)] font-light leading-[1.35] text-bone">
                Trapp transforma a disciplina da <span className="text-gold">caligrafia gótica</span> e a energia do graffiti em uma linguagem de presença física.
              </p>
              <p className="mt-7 max-w-xl text-pretty text-base font-light leading-8 text-muted">
                A trajetória começou na adolescência, em 2018, pelo Hip Hop e pelo estudo das letterforms. Desde então, o gesto atravessou suportes e escalas: do caderno ao ateliê, da tela à arquitetura, da expressão individual ao encontro com a comunidade.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-base font-light leading-8 text-muted">
                Profissionalmente muralista desde 2024, desenvolve obras autorais para espaços públicos e privados — destaque para o Caminho das Artes, galeria a céu aberto no Centro de Jaraguá do Sul (realização SCAR, curadoria Beto Shibata e Denyse Silva, parceria Instituto AION). Também atua com tatuagens autorais e ministra oficinas de graffiti em iniciativas culturais da cidade. Em cada trabalho, a letra não é apenas leitura: é ritmo, estrutura e memória.
              </p>
            </Reveal>

            <div className="milestones mt-14 border-t border-white/15">
              {milestones.map((milestone) => (
                <article key={milestone.year} className="milestone grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[90px_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-gold">{milestone.year}</span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-bone">{milestone.title}</h3>
                    <p className="mt-2 text-sm font-light leading-6 text-muted">{milestone.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
