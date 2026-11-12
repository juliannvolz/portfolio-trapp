import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/motion";
import { Magnetic } from "./UI";

const links = [
  { href: "#sobre", label: "Sobre", index: "01" },
  { href: "#caminho", label: "Caminho das Artes", index: "02" },
  { href: "#obras", label: "Obras", index: "03" },
  { href: "#processo", label: "Processo", index: "04" },
  { href: "#contato", label: "Contato", index: "05" },
];

type NavigationProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.1, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[110] transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="page-shell flex h-[76px] items-center justify-between">
          <a href="#topo" className="group flex items-center gap-3" aria-label="Trapp — início">
            <img
              src="/images/logo-trapp.png"
              alt="Trapp"
              className="h-14 w-auto sm:h-20 md:h-28 lg:h-32 transition-transform duration-500 group-hover:rotate-3"
              width="120"
              height="40"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={`relative py-3 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold ${active === link.href ? "text-gold" : "text-bone/75"}`}>
                {link.label}
                <span className={`absolute inset-x-0 bottom-1 h-px origin-left bg-gold transition-transform duration-300 ${active === link.href ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden md:inline-flex">
              <a href="#contato" className="group inline-flex items-center gap-3 border border-gold/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.17em] text-gold transition-colors hover:bg-gold hover:text-ink">
                Iniciar um projeto
                <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
              </a>
            </Magnetic>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center border border-white/20 text-bone lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[105] flex flex-col bg-ink px-[var(--page-x)] pb-10 pt-28 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="pointer-events-none absolute -right-12 top-20 font-display text-[18rem] leading-none text-gold/[0.04]" aria-hidden="true">T</div>
            <nav className="relative flex flex-1 flex-col justify-center" aria-label="Navegação móvel">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-5 border-b border-white/10 py-4"
                  initial={{ y: 45, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + index * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-[9px] text-gold">{link.index}</span>
                  <span className="font-display text-[clamp(2.8rem,11vw,5rem)] leading-none text-bone transition-colors group-hover:text-gold">{link.label}</span>
                </motion.a>
              ))}
            </nav>
            <motion.div className="relative flex items-end justify-between gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
              <div>
                <p className="eyebrow text-muted">Base</p>
                <p className="mt-2 text-sm text-bone">Jaraguá do Sul · SC</p>
              </div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">Instagram <ArrowUpRight size={14} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
