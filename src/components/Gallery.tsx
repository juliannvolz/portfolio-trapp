import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, type GalleryFilter, type Work, works } from "@/data/works";
import { INSTAGRAM_URL } from "@/lib/motion";
import { Reveal, SectionLabel } from "./Reveal";
import { InstagramIcon } from "./UI";

type GalleryProps = { onSelect: (id: string) => void };

export function Gallery({ onSelect }: GalleryProps) {
  const [filter, setFilter] = useState<GalleryFilter>("Todos");
  const filtered = useMemo(() => filter === "Todos" ? works : works.filter((work) => work.category === filter), [filter]);

  return (
    <section id="obras" className="section-pad relative overflow-hidden bg-[#0d0d0c]" aria-labelledby="works-title">
      <div className="page-shell">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal><SectionLabel index="03">Arquivo selecionado</SectionLabel></Reveal>
            <Reveal delay={0.08}>
              <h2 id="works-title" className="mt-7 font-display text-[clamp(4.6rem,10vw,10rem)] leading-[0.8] tracking-[-0.03em] text-bone">
                Obras que ocupam<br /><span className="display-stroke">o olhar.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="max-w-sm text-sm font-light leading-7 text-muted">Murais, telas, lettering e registros de processo. Abra cada projeto para entrar na composição, na técnica e no contexto.</p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gold"><span className="h-1.5 w-1.5 rounded-full bg-gold" /> Clique para explorar</p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-y border-white/15 py-5 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtrar obras por categoria">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
                className={`relative shrink-0 border px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors ${filter === category ? "border-gold bg-gold text-ink" : "border-white/15 text-muted hover:border-gold/50 hover:text-bone"}`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted" aria-live="polite">{String(filtered.length).padStart(2, "0")} {filtered.length === 1 ? "projeto" : "projetos"}</p>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-12 md:gap-y-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((work) => (
              <WorkCard key={work.id} work={work} onSelect={onSelect} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center">
          <p className="max-w-lg text-pretty text-xl font-light leading-8 text-bone">O arquivo continua vivo no Instagram — novos murais, estudos e bastidores direto do ateliê.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group inline-flex shrink-0 items-center gap-4 border border-gold/50 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-ink">
            <InstagramIcon size={17} /> Seguir @ruantrapp <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function WorkCard({ work, onSelect }: { work: Work; onSelect: (id: string) => void }) {
  const span = "md:col-span-6";
  const isFeatured = work.featured;
  const featuredSpan = isFeatured 
  ? (work.ratio === "portrait" ? "md:col-span-12 lg:col-span-6" : "md:col-span-12 lg:col-span-8")
  : span;

  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  } as React.CSSProperties;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 55, clipPath: "inset(0 0 25% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${featuredSpan} self-start`}
    >
      <button
        type="button"
        onClick={() => onSelect(work.id)}
        data-cursor="ABRIR"
        className="work-card group block w-full text-left"
        aria-label={`Abrir projeto ${work.title}`}
      >
        {/* Polaroid Street Style Wrapper */}
        <div className="relative bg-[var(--color-concrete-900)] p-2.5 pb-6 shadow-[0_6px_24px_rgba(0,0,0,0.45)] rotate-[-0.4deg] hover:rotate-[0.4deg] transition-transform duration-300 border border-[var(--color-concrete-700)] group-hover:border-gold/30 group-hover:shadow-[0_10px_32px_rgba(212,175,55,0.12)]">
          {/* "Tape" strip at top - street aesthetic */}
          <div className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-14 h-2.5 bg-gradient-to-r from-amber-600/90 to-amber-700/70 rounded blur-sm opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
          
          {/* Photo area */}
          <div className={`relative overflow-hidden ${work.ratio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
            <img
              src={work.image}
              alt={work.alt}
              width={work.ratio === "portrait" ? 1200 : 1600}
              height={work.ratio === "portrait" ? 1600 : 1200}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Inner vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-concrete-900)]/50 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
            {/* Subtle noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={noiseStyle} aria-hidden="true" />
          </div>
          
          {/* Info on the "polaroid border" bottom */}
          <div className="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between text-[8px] font-mono uppercase tracking-[0.1em] text-[var(--color-silver)]">
            <span className="text-gold/80">{work.category}</span>
            <span className="text-bone/50">{work.year}</span>
          </div>
          
          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 bg-gold/20 border border-gold/40 text-[7px] font-mono uppercase tracking-[0.08em] text-gold">
              DESTAQUE
            </div>
          )}
        </div>
        
        {/* Title & subtitle below polaroid */}
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[clamp(2rem,3.5vw,3.4rem)] leading-none text-bone transition-colors group-hover:text-gold">{work.title}</h3>
            <p className="mt-0.5 text-xs font-light text-muted max-w-xs">{work.subtitle}</p>
          </div>
          <span className="mt-1.5 hidden font-mono text-[7px] uppercase tracking-[0.1em] text-bone/35 sm:block">Ver caso</span>
        </div>
      </button>
    </motion.article>
  );
}
