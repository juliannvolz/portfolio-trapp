import { useEffect, useRef } from "react";
import { reducedMotion } from "@/lib/motion";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  size: number;
  gold: boolean;
  drift: number;
};

function makeSprite(color: string) {
  const sprite = document.createElement("canvas");
  sprite.width = 64;
  sprite.height = 64;
  const context = sprite.getContext("2d");
  if (!context) return sprite;
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.22, color.replace("0.5", "0.24"));
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  return sprite;
}

export function SprayCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const isReduced = reducedMotion();
    const particles: Particle[] = [];
    const goldSprite = makeSprite("rgba(212,175,55,0.5)");
    const mistSprite = makeSprite("rgba(225,225,215,0.5)");
    let width = 1;
    let height = 1;
    let frame = 0;
    let previous = performance.now();
    let spawnTimer = 0;
    let active = true;
    let pointerX = -1000;
    let pointerY = -1000;
    let pointerActive = false;

    const addParticle = (x: number, y: number, burst = false): Particle => {
      const particle: Particle = {
        x,
        y,
        vx: (Math.random() - 0.5) * (burst ? 0.09 : 0.025),
        vy: -(0.008 + Math.random() * (burst ? 0.065 : 0.025)),
        age: 0,
        life: 3500 + Math.random() * 5000,
        size: (burst ? 8 : 14) + Math.random() * (burst ? 24 : 58),
        gold: Math.random() > 0.62,
        drift: Math.random() * Math.PI * 2,
      };
      particles.push(particle);
      return particle;
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles.length = 0;
      const count = Math.min(80, Math.max(30, Math.round(width / 18)));
      for (let index = 0; index < count; index += 1) {
        const particle = addParticle(Math.random() * width, Math.random() * height);
        particle.age = Math.random() * particle.life;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
      pointerActive = pointerX >= 0 && pointerX <= width && pointerY >= 0 && pointerY <= height;
    };

    const draw = (now: number) => {
      if (!active) return;
      const delta = Math.min(34, now - previous);
      previous = now;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "screen";

      if (!isReduced) {
        spawnTimer += delta;
        if (spawnTimer > 100 && particles.length < 110) {
          spawnTimer = 0;
          addParticle(width * (0.58 + Math.random() * 0.4), height * (0.78 + Math.random() * 0.25));
        }
        if (pointerActive && Math.random() > 0.72 && particles.length < 120) {
          addParticle(pointerX + (Math.random() - 0.5) * 22, pointerY + (Math.random() - 0.5) * 22, true);
        }
      }

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        if (!isReduced) {
          particle.age += delta;
          particle.drift += delta * 0.0003;
          particle.x += (particle.vx + Math.sin(particle.drift) * 0.008) * delta;
          particle.y += particle.vy * delta;
        }
        if (particle.age >= particle.life || particle.y < -100) {
          if (!isReduced) particles.splice(index, 1);
          continue;
        }
        const progress = particle.age / particle.life;
        const opacity = Math.sin(progress * Math.PI) * 0.32;
        context.globalAlpha = opacity;
        const size = particle.size * (0.6 + progress * 0.9);
        context.drawImage(
          particle.gold ? goldSprite : mistSprite,
          particle.x - size / 2,
          particle.y - size / 2,
          size,
          size,
        );
      }
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      if (!isReduced) frame = requestAnimationFrame(draw);
    };

    const observer = new IntersectionObserver(([entry]) => {
      const wasActive = active;
      active = entry.isIntersecting;
      if (active && !wasActive && !isReduced) {
        previous = performance.now();
        frame = requestAnimationFrame(draw);
      } else if (!active) {
        cancelAnimationFrame(frame);
      }
    });

    resize();
    observer.observe(canvas);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(draw);

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
