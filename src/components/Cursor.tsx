import { useEffect, useRef } from "react";
import { gsap, reducedMotion } from "@/lib/motion";

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!ring || !dot || !label) return;

    document.body.classList.add("custom-cursor-active");
    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, opacity: 0 });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    let visible = false;

    const onMove = (event: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([ring, dot], { opacity: 1, duration: 0.25 });
      }
      ringX(event.clientX);
      ringY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, select, [data-cursor]");
      const contextual = target?.closest<HTMLElement>("[data-cursor]");
      const text = contextual?.dataset.cursor ?? "";
      label.textContent = text;
      gsap.to(ring, {
        width: text ? 82 : interactive ? 58 : 34,
        height: text ? 82 : interactive ? 58 : 34,
        backgroundColor: text ? "rgba(212,175,55,0.94)" : "rgba(212,175,55,0)",
        borderColor: interactive ? "rgba(212,175,55,0.95)" : "rgba(212,175,55,0.55)",
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(label, { opacity: text ? 1 : 0, duration: 0.2 });
      gsap.to(dot, { opacity: text ? 0 : 1, duration: 0.2 });
    };

    const onLeave = () => {
      visible = false;
      gsap.to([ring, dot], { opacity: 0, duration: 0.2 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[160] flex h-[34px] w-[34px] items-center justify-center rounded-full border border-gold/60 will-change-transform" aria-hidden="true">
        <span ref={labelRef} className="eyebrow text-[8px] font-medium tracking-[0.12em] text-ink opacity-0">VER</span>
      </div>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[161] h-1 w-1 rounded-full bg-gold will-change-transform" aria-hidden="true" />
    </>
  );
}
