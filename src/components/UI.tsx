import { type MouseEvent, type ReactNode, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, reducedMotion } from "@/lib/motion";

export function Magnetic({ children, className = "", strength = 0.22 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  const move = (event: MouseEvent<HTMLSpanElement>) => {
    if (reducedMotion() || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    gsap.to(ref.current, {
      x: (event.clientX - bounds.left - bounds.width / 2) * strength,
      y: (event.clientY - bounds.top - bounds.height / 2) * strength,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const reset = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1, 0.35)" });
  };

  return <span ref={ref} onMouseMove={move} onMouseLeave={reset} className={`inline-flex will-change-transform ${className}`}>{children}</span>;
}

export function TextLink({ href, children, external = false, className = "" }: { href: string; children: ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex items-center gap-3 border-b border-gold/40 pb-2 text-sm font-medium text-bone transition-colors hover:border-gold hover:text-gold ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 ${className}`} aria-hidden="true">
      <span className="font-display text-[26px] leading-none text-gold">T</span>
      <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-gold" />
    </span>
  );
}
