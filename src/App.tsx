import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { About } from "@/components/About";
import { CaminhoScene } from "@/components/CaminhoScene";
import { Commission } from "@/components/Commission";
import { FAQ, Farewell, FloatingContact, Footer } from "@/components/ContactExtras";
import { Cursor } from "@/components/Cursor";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Process } from "@/components/Process";
import { ProjectModal } from "@/components/ProjectModal";
import { works } from "@/data/works";
import { gsap, reducedMotion, ScrollTrigger } from "@/lib/motion";

function DisciplineTicker() {
  const items = ["Murais", "Calligraffiti", "Telas", "Tatuagem autoral", "Jaraguá do Sul", "Arte & território"];
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-gold py-3 text-ink" aria-label="Murais, calligraffiti, telas, tatuagem autoral e projetos em Jaraguá do Sul">
      <div className="flex w-max animate-[ticker_30s_linear_infinite] items-center">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {items.map((item) => (
              <span key={`${group}-${item}`} className="flex items-center whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.2em]"><span className="px-7">{item}</span><span className="font-display text-xl leading-none">T</span></span>
            ))}
          </div>
        ))}
      </div>
      <style>{`@keyframes ticker { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedWork = works.find((work) => work.id === selectedId) ?? null;

  const closeProject = useCallback(() => setSelectedId(null), []);
  const selectProject = useCallback((id: string) => setSelectedId(id), []);

  useEffect(() => {
    if (reducedMotion()) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.1,
      anchors: { offset: -76 },
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    let active = true;
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(() => { if (active) refresh(); });
    window.addEventListener("load", refresh);
    return () => {
      active = false;
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener("load", refresh);
    };
  }, []);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const locked = menuOpen || Boolean(selectedId);
    if (locked) lenisRef.current?.stop();
    else lenisRef.current?.start();
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen, selectedId]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-ink text-bone">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <div ref={progressRef} className="fixed inset-x-0 top-0 z-[130] h-[2px] origin-left scale-x-0 bg-gold" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main id="conteudo">
        <Hero />
        <DisciplineTicker />
        <About />
        <CaminhoScene />
        <Gallery onSelect={selectProject} />
        <Process />
        <Commission />
        <FAQ />
      </main>
      <Footer />
      <Farewell />
      <FloatingContact />
      <ProjectModal work={selectedWork} onClose={closeProject} onSelect={selectProject} />
    </div>
  );
}
