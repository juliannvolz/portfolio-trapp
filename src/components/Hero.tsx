import { useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap, reducedMotion } from "@/lib/motion";
import { SprayCanvas } from "./SprayCanvas";
import { Magnetic } from "./UI";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion()) return;

    const context = gsap.context(() => {
      const entrance = gsap.timeline({ defaults: { ease: "power4.out" } });
      entrance
        .fromTo(".hero-media", { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }, { clipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.6 })
        .fromTo(".hero-media img", { scale: 1.28 }, { scale: 1.06, duration: 1.8 }, 0)
        .from(".hero-reveal", { yPercent: 118, rotate: 2, duration: 1.25, stagger: 0.12 }, 0.28)
        .from(".hero-meta", { y: 25, opacity: 0, duration: 0.85, stagger: 0.08 }, 0.8)
        .from(".hero-seal", { scale: 0, rotate: -90, duration: 1.1, ease: "back.out(1.5)" }, 1);

      const scroll = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      scroll
        .to(".hero-media", { clipPath: "polygon(10% 12%, 100% 12%, 100% 88%, 0% 88%)", ease: "none" }, 0)
        .to(".hero-media img", { scale: 1.25, yPercent: 10, ease: "none" }, 0)
        .to(".hero-content", { yPercent: -22, opacity: 0.12, ease: "none" }, 0);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="topo" className="relative min-h-[100svh] overflow-hidden bg-ink" aria-labelledby="hero-title">
      <div className="hero-media absolute inset-y-0 right-0 hidden w-full md:block md:w-[76%]" style={{ clipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <img src="/images/processo-arte.jpg" alt="Processo artístico — Ruan Trapp no ateliê" width="1920" height="1080" fetchPriority="high" className="h-full w-full object-contain object-center will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-ink/15 to-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-ink/20" />
      </div>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)", backgroundSize: "12.5vw 12.5vw" }} aria-hidden="true" />
      <SprayCanvas className="absolute inset-0 h-full w-full opacity-90" />
      <div className="absolute inset-y-0 left-[var(--page-x)] hidden w-px bg-white/10 xl:block" aria-hidden="true" />

      <div className="hero-content page-shell relative z-10 flex min-h-[100svh] flex-col justify-start pb-8 pt-24 md:justify-end md:pb-10 md:pt-28">
        <div className="mb-6 flex items-center justify-between pt-5 md:mb-auto md:pt-8">
          <p className="hero-meta eyebrow max-w-[220px] text-bone/65">Arte urbana · caligrafia gótica · grande escala</p>
          <p className="hero-meta hidden font-mono text-[9px] uppercase tracking-[0.2em] text-bone/55 md:block">26°29′S / 49°04′W<br />Jaraguá do Sul — BR</p>
        </div>

        <div className="relative">

          <div className="flex flex-col items-center text-center md:block md:text-left">
            <div className="overflow-hidden pb-[0.06em]">
              <p className="hero-reveal eyebrow mb-3 text-gold md:mb-6">Trapp / artista visual</p>
            </div>
            <h1 id="hero-title" className="relative w-full font-display font-bold leading-[0.69] tracking-[-0.035em]">
              <span className="block overflow-hidden pb-[0.08em]">
                <picture className="block">
                  <source media="(max-width: 767px)" srcSet="/images/logotrapp-mobile.webp" type="image/webp" />
                  <source media="(max-width: 767px)" srcSet="/images/logotrapp-mobile.png" type="image/png" />
                  <img
                    src="/images/logotrappsemfundo.png"
                    alt="Trapp"
                    className="hero-reveal mx-auto block h-auto w-[min(66vw,18rem)] opacity-90 md:mx-0 md:h-[clamp(14rem,35vw,38rem)] md:w-auto"
                  />
                </picture>
              </span>
            </h1>
          </div>

          <div className="relative -mx-[var(--page-x)] my-4 overflow-hidden md:hidden" style={{ clipPath: "polygon(24% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
            <img src="/images/processo-arte.jpg" alt="Processo artístico — Ruan Trapp no ateliê" width="1280" height="720" loading="eager" className="block aspect-[16/9] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-ink/15 to-ink/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-ink/20" />
          </div>

          <div className="mt-3 grid items-end gap-4 border-t border-white/15 pt-4 md:mt-4 md:grid-cols-12 md:gap-6 md:pt-6">
            <p className="hero-meta text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-bone md:col-span-4 md:text-xs">
              Muralista <span className="mx-2 text-gold">&</span><br className="hidden md:block" /> Calligraffiti artist
            </p>
            <p className="hero-meta max-w-md text-pretty text-sm font-light leading-relaxed text-bone/65 md:col-span-4">
              Letras que saem do caderno, atravessam a arquitetura e devolvem identidade ao território.
            </p>
            <div className="hero-meta flex flex-wrap items-center gap-4 md:col-span-4 md:justify-end">
              <Magnetic>
                <a href="#obras" className="group inline-flex items-center gap-4 bg-gold px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-light">
                  Explorar obras <ArrowDown size={15} className="transition-transform group-hover:translate-y-1" />
                </a>
              </Magnetic>
              <a href="#contato" className="group inline-flex items-center gap-2 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-bone transition-colors hover:text-gold">Orçamento <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>

        <div className="hero-meta mt-auto flex items-center justify-between md:mt-8">
          <a href="#sobre" className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-bone/45 transition-colors hover:text-gold">
            <span className="relative h-8 w-px overflow-hidden bg-white/20"><span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-line_1.8s_ease-in-out_infinite] bg-gold" /></span>
            Role para entrar
          </a>
          <span className="font-mono text-[8px] tracking-[0.2em] text-bone/35">PORTFÓLIO / 2026</span>
        </div>
      </div>
      <style>{`@keyframes scroll-line { 0% { transform: translateY(-110%); } 100% { transform: translateY(220%); } }`}</style>
    </section>
  );
}
