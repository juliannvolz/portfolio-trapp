import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, X } from "lucide-react";
import { type Work, works } from "@/data/works";
import { INSTAGRAM_URL, whatsappUrl } from "@/lib/motion";
import { InstagramIcon } from "./UI";

type ProjectModalProps = {
  work: Work | null;
  onClose: () => void;
  onSelect: (id: string) => void;
};

export function ProjectModal({ work, onClose, onSelect }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!work) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        const index = works.findIndex((item) => item.id === work.id);
        onSelect(works[(index + 1) % works.length].id);
      }
      if (event.key === "ArrowLeft") {
        const index = works.findIndex((item) => item.id === work.id);
        onSelect(works[(index - 1 + works.length) % works.length].id);
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [work, onClose, onSelect]);

  const index = work ? works.findIndex((item) => item.id === work.id) : -1;
  const previous = index >= 0 ? works[(index - 1 + works.length) % works.length] : null;
  const next = index >= 0 ? works[(index + 1) % works.length] : null;

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          className="fixed inset-0 z-[150] overflow-y-auto bg-ink"
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grid min-h-[100dvh] lg:grid-cols-12">
            <div className="relative h-[52svh] overflow-hidden bg-panel lg:sticky lg:top-0 lg:col-span-7 lg:h-[100dvh]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={work.id}
                  src={work.image}
                  alt={work.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/45" />
              <div className="absolute left-5 top-5 flex items-center gap-3 md:left-8 md:top-8">
                <span className="bg-ink/70 px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-gold backdrop-blur-md">{work.index} / 08</span>
                <span className="bg-ink/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-bone backdrop-blur-md">{work.category}</span>
              </div>
              <p className="absolute bottom-5 left-5 max-w-xs font-mono text-[8px] uppercase leading-4 tracking-[0.14em] text-bone/60 md:bottom-8 md:left-8">Use as setas do teclado para navegar entre os projetos</p>
            </div>

            <div className="modal-scroll relative lg:col-span-5 lg:h-[100dvh] lg:overflow-y-auto" data-lenis-prevent>
              <div className="flex min-h-full flex-col px-5 pb-8 pt-20 sm:px-8 md:px-12 lg:px-10 lg:pb-10 lg:pt-24 xl:px-14">
                <AnimatePresence mode="wait">
                  <motion.div key={work.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.45 }}>
                    <p className="eyebrow text-gold">{work.year}</p>
                    <h2 id="project-dialog-title" className="mt-5 font-display text-[clamp(3.8rem,6vw,6.5rem)] leading-[0.84] text-bone">{work.title}</h2>
                    <p className="mt-5 text-base font-light leading-7 text-gold-light">{work.subtitle}</p>
                    <p className="mt-8 text-pretty text-lg font-light leading-8 text-bone">{work.description}</p>
                    <p className="mt-5 text-pretty text-sm font-light leading-7 text-muted">{work.context}</p>

                    <div className="mt-8 flex items-start gap-3 border-y border-white/15 py-5">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                      <div><p className="eyebrow text-muted">Local / contexto</p><p className="mt-2 text-sm leading-6 text-bone">{work.location}</p></div>
                    </div>

                    <div className="mt-8">
                      <p className="eyebrow text-muted">Técnica</p>
                      <p className="mt-3 text-sm leading-6 text-bone">{work.technique}</p>
                    </div>
                    <ul className="mt-7 space-y-3">
                      {work.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-sm font-light text-muted"><Check size={14} className="shrink-0 text-gold" />{detail}</li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center justify-between gap-4">
                      <span className="eyebrow text-muted">Paleta da obra</span>
                      <div className="flex gap-2" aria-label="Cores principais da obra">
                        {work.palette.map((color) => <span key={color} title={color} className="h-6 w-6 rounded-full border border-white/20" style={{ backgroundColor: color }} />)}
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                      <a href={whatsappUrl(`Olá, Trapp! Vi o projeto “${work.title}” no seu portfólio e gostaria de conversar sobre um trabalho autoral.`)} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-3 bg-gold px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-light">Quero um projeto <ArrowUpRight size={15} /></a>
                      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Abrir Instagram de Trapp" className="inline-flex items-center justify-center border border-white/20 px-5 py-4 text-gold transition-colors hover:border-gold"><InstagramIcon size={18} /></a>
                    </div>
                    {work.id === "o-canto-que-constroi" && (
                      <a href="https://www.jdv.com.br/tantofaz/caminho-das-artes-jaragua-do-sul/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-gold">Fonte e história do projeto <ArrowUpRight size={13} /></a>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-auto grid grid-cols-2 gap-3 border-t border-white/15 pt-8">
                  <button type="button" onClick={() => previous && onSelect(previous.id)} className="group text-left">
                    <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-muted"><ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" /> Anterior</span>
                    <span className="mt-2 block text-xs text-bone group-hover:text-gold">{previous?.title}</span>
                  </button>
                  <button type="button" onClick={() => next && onSelect(next.id)} className="group text-right">
                    <span className="flex items-center justify-end gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-muted">Próximo <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" /></span>
                    <span className="mt-2 block text-xs text-bone group-hover:text-gold">{next?.title}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className="fixed right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-ink/75 text-bone backdrop-blur-md transition-colors hover:border-gold hover:bg-gold hover:text-ink md:right-7 md:top-7" aria-label="Fechar projeto"><X size={20} /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
