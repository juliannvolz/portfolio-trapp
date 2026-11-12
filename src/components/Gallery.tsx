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

        <motion.div layout className="mt-10 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20">
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
  const span = work.ratio === "landscape" ? "md:col-span-7" : "md:col-span-5";
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 55, clipPath: "inset(0 0 25% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${span} self-start`}
    >
      <button type="button" onClick={() => onSelect(work.id)} data-cursor="ABRIR" className="work-card group block w-full text-left" aria-label={`Abrir projeto ${work.title}`}>
        <div className={`image-zoom relative overflow-hidden bg-panel ${work.ratio === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
          <img src={work.image} alt={work.alt} width={work.ratio === "portrait" ? 1000 : 1400} height={work.ratio === "portrait" ? 1250 : 1050} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/15 opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute inset-3 border border-white/0 transition-colors duration-500 group-hover:border-gold/45" />
          <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.18em] text-bone/75">{work.index} / 08</span>
          <span className="work-arrow absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-ink/25 text-bone backdrop-blur-sm"><ArrowUpRight size={17} strokeWidth={1.5} /></span>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <span className="eyebrow text-gold">{work.category}</span>
            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-bone/65">{work.year}</span>
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4 border-t border-white/15 pt-4">
          <div>
            <h3 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-none text-bone transition-colors group-hover:text-gold">{work.title}</h3>
            <p className="mt-2 text-xs font-light text-muted">{work.subtitle}</p>
          </div>
          <span className="mt-2 hidden font-mono text-[8px] uppercase tracking-[0.12em] text-bone/35 sm:block">Ver caso</span>
        </div>
      </button>
    </motion.article>
  );
}
