import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { gsap, reducedMotion } from "@/lib/motion";

const facts = [
  { value: "600 m", label: "de ciclovia transformada" },
  { value: "±30", label: "artistas na primeira etapa" },
  { value: "1.500 m²", label: "de muros e pinturas" },
];

const caminhoImages = [
  "/images/caminho-das-artes.jpg",
  "/images/caminho-2.jpg",
  "/images/caminho-3.jpg",
  "/images/caminho-4.jpg",
];

const caminhoAlts = [
  "Mural O canto que constrói no Caminho das Artes — araponga em wildstyle metálico",
  "Processo de pintura no Caminho das Artes — detalhe da composição",
  "Captação do Caminho das Artes — vista aérea da galeria a céu aberto",
  "Ave no Caminho das Artes — integração da natureza com a obra",
];

export function CaminhoScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const context = gsap.context(() => {
      if (reducedMotion()) {
        gsap.set(".caminho-intro", { display: "none" });
        gsap.set(".caminho-media img", { opacity: (_, i) => (i === 0 ? 1 : 0) });
        gsap.set(".caminho-shade", { opacity: 1 });
        gsap.set([".caminho-caption", ".caminho-detail"], { y: 0, opacity: 1 });
        return;
      }

gsap.set(".caminho-intro", { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(".caminho-media img", { opacity: 0, scale: 1.05 });
      gsap.set(".caminho-media img:first-child", { opacity: 1, scale: 1.0 });
      gsap.set(".caminho-caption", { y: 90, opacity: 0 });
      gsap.set(".caminho-detail", { y: 40, opacity: 0 });
      gsap.set(".caminho-shade", { opacity: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=350%",
          pin,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(".caminho-intro", { clipPath: "inset(100% 0% 0% 0%)", duration: 0.3, ease: "power2.inOut" }, 0)
        .to(".caminho-intro-inner", { scale: 0.8, yPercent: -15, opacity: 0, duration: 0.5, ease: "power2.in" }, 0.1)
        .to(".caminho-media img:first-child", { opacity: 1, scale: 1.0, duration: 1.2, ease: "power2.out" }, 0)
        .to(".caminho-shade", { opacity: 1, duration: 0.5 }, 0.5)
        .to(".caminho-caption", { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, 0.8)
        .to(".caminho-detail", { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, 1)

        .to(".caminho-media img:nth-child(1)", { opacity: 0, scale: 1.08, duration: 0.6, ease: "power2.inOut" }, 1.2)
        .to(".caminho-media img:nth-child(2)", { opacity: 1, scale: 1.0, duration: 1.2, ease: "power2.out" }, 1.2)
        .to(".caminho-media img:nth-child(2)", { scale: 1.04, duration: 0.8, ease: "none" }, 1.8)

        .to(".caminho-media img:nth-child(2)", { opacity: 0, scale: 1.08, duration: 0.6, ease: "power2.inOut" }, 2.2)
        .to(".caminho-media img:nth-child(3)", { opacity: 1, scale: 1.0, duration: 1.2, ease: "power2.out" }, 2.2)
        .to(".caminho-media img:nth-child(3)", { scale: 1.04, duration: 0.8, ease: "none" }, 2.8)

        .to(".caminho-media img:nth-child(3)", { opacity: 0, scale: 1.08, duration: 0.6, ease: "power2.inOut" }, 3.0)
        .to(".caminho-media img:nth-child(4)", { opacity: 1, scale: 1.0, duration: 1.2, ease: "power2.out" }, 3.0)
        .to(".caminho-media img:nth-child(4)", { scale: 1.06, xPercent: -2, duration: 1, ease: "none" }, 3.5);

    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="caminho" className="relative bg-panel" aria-labelledby="caminho-title">
      <div ref={pinRef} className="relative min-h-[100svh] overflow-hidden">
        <div className="caminho-media absolute inset-0 bg-coal will-change-[clip-path]">
          {caminhoImages.map((src, i) => (
            <img
              key={src}
              ref={(el) => { imagesRef.current[i] = el; }}
              src={src}
              alt={caminhoAlts[i]}
              width="3840"
              height="2160"
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover object-center will-change-transform will-change-opacity [image-rendering:high-quality]"
            />
          ))}
        </div>
        <div className="caminho-shade pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/15 to-ink/20 opacity-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.35)_1px,transparent_1px)] bg-[size:20vw_100%] opacity-30" />

        <div className="caminho-intro absolute inset-0 z-10 flex items-center justify-center bg-panel px-[var(--page-x)] text-center">
          <div className="caminho-intro-inner will-change-transform">
            <p className="eyebrow mb-6 text-gold">02 / Projeto em destaque · arte pública</p>
            <h2 id="caminho-title" className="font-display text-[clamp(5rem,13vw,13rem)] leading-[0.78] tracking-[-0.025em] text-bone">
              A cidade<br /><span className="gold-sheen">ganha voz.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-md text-sm font-light leading-7 text-muted">O Caminho das Artes · uma galeria a céu aberto no Centro de Jaraguá do Sul</p>
          </div>
        </div>

        <div className="caminho-caption page-shell absolute inset-x-0 bottom-0 z-20 pb-8 pt-32 md:pb-10">
          <div className="grid items-end gap-7 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="caminho-detail eyebrow text-gold">Trapp no Caminho das Artes</p>
              <h3 className="caminho-detail mt-3 font-display text-[clamp(3.4rem,6vw,6.6rem)] leading-[0.9] text-bone">O canto que constrói</h3>
              <p className="caminho-detail mt-5 max-w-xl text-pretty text-sm font-light leading-7 text-bone/75 md:text-base">
                A araponga transforma seu canto metálico em wildstyle: a Mata Atlântica encontra a indústria e a identidade de Jaraguá do Sul ganha corpo no muro.
              </p>
              <div className="caminho-detail mt-6 flex flex-wrap gap-5">
                <a href="https://www.jdv.com.br/tantofaz/caminho-das-artes-jaragua-do-sul/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Ler a história no JDV <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" /></a>
                <a href="https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+%C3%82ngelo+Piazera+Jaragu%C3%A1+do+Sul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone/75 transition-colors hover:text-gold"><MapPin size={14} /> Região do percurso</a>
              </div>
            </div>
            <div className="grid grid-cols-3 border-y border-white/20 lg:col-span-5 lg:col-start-8">
              {facts.map((fact) => (
                <div key={fact.value} className="caminho-detail border-r border-white/20 px-3 py-5 last:border-r-0 md:px-5">
                  <strong className="block text-xl font-medium tracking-tight text-gold md:text-3xl">{fact.value}</strong>
                  <span className="mt-2 block text-[9px] leading-4 text-bone/60 md:text-[10px]">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="caminho-detail mt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-bone/40">Realização SCAR · Curadoria Beto Shibata e Denyse Silva · Parceria Instituto AION</p>
        </div>
      </div>
    </section>
  );
}