'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { PinScrub } from '@/components/motion/PinScrub';
import { LightSweep } from '@/components/motion/LightSweep';
import { MetallicRipple } from '@/components/motion/MetallicRipple';
import { useReducedMotion } from '@/lib/useReducedMotion';
import { SmartImage } from '@/components/ui/SmartImage';
import { useRef } from 'react';

const caminhoFrames = [
  {
    id: 'frame-1',
    img: '/images/caminho-das-artes-principal.jpg',
    alt: 'Vista geral do Caminho das Artes',
    title: 'Vista geral',
    desc: '600 m de galeria a céu aberto',
  },
  {
    id: 'frame-2',
    img: '/images/ave-caminho-artes.jpg',
    alt: 'Araponga no Caminho das Artes',
    title: 'A araponga',
    desc: 'Ave da Mata Atlântica, canto metálico',
  },
  {
    id: 'frame-3',
    img: '/images/captacao-caminho-artes.jpg',
    alt: 'Captação do projeto',
    title: 'Captação',
    desc: 'Processo de seleção dos 30 artistas',
  },
  {
    id: 'frame-4',
    img: '/images/processo-caminho-artes.jpg',
    alt: 'Processo de pintura',
    title: 'Processo',
    desc: 'Execução dos murais ao longo do percurso',
  },
  {
    id: 'frame-5',
    img: '/images/processo-caminho-das-artes.jpg',
    alt: 'Processo detalhe',
    title: 'Detalhes',
    desc: 'Trabalho em altura e escala urbana',
  },
  {
    id: 'frame-6',
    img: '/images/processo-caminho-das-artes3.jpg',
    alt: 'Processo finalização',
    title: 'Finalização',
    desc: 'Acabamento e iluminação LED',
  },
  {
    id: 'frame-7',
    img: '/images/processo2-caminho-artes.jpg',
    alt: 'Processo etapa 2',
    title: 'Etapa 2',
    desc: 'Segunda fase de execução',
  },
];

export function CaminhoDasArtes() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (prefersReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current!;
      const header = el.querySelector('.caminho-header');
      const quote = el.querySelector('.caminho-quote');
      const credits = el.querySelector('.caminho-credits');

      gsap.fromTo(
        [header, quote, credits],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={ref}
      id="caminho"
      data-chapter="caminho"
      className="relative py-20 px-4"
    >
      <LightSweep temperature={3000} angle={-10} duration={1}>
        <div className="container mx-auto max-w-5xl">
          <div className="caminho-header mb-12">
            <p className="type-mono text-[var(--color-light-3000)] mb-4">03 / O CAMINHO · 3000K</p>
            <h2 className="type-display text-[var(--text-display-md)] text-[var(--color-bone)] mb-8">
              O canto que constrói.
            </h2>
            <p className="text-[var(--color-bone-dim)] text-[var(--text-body)] max-w-2xl">
              Fui um dos 30 artistas do Caminho das Artes, a galeria a céu aberto de Jaraguá do Sul. Meu painel parte da araponga — a ave da Mata Atlântica que canta como aço sendo golpeado. A ave vira letra 3D, metal e geometria: natureza e indústria no mesmo muro.
            </p>
          </div>

          <div className="hidden lg:block">
            <PinScrub length={4000} horizontal id="caminho-pin" className="mb-16">
              {caminhoFrames.map((frame) => (
                <article key={frame.id} id={frame.id} className="w-[80vw] flex-shrink-0 px-4">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-concrete-800)]">
                    <SmartImage src={frame.img} alt={frame.alt} fill priority={false} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-concrete-900)]/80 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <figcaption className="type-mono text-[var(--color-silver)] mt-3 text-center">
                    <span className="block text-[var(--color-light-3000)] mb-1">{frame.title}</span>
                    {frame.desc}
                  </figcaption>
                </article>
              ))}
            </PinScrub>
          </div>

          <div className="lg:hidden space-y-8">
            {caminhoFrames.map((frame) => (
              <article key={frame.id} id={frame.id} className="group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[var(--color-concrete-800)]">
                  <LightSweep temperature={3000} angle={-15} duration={0.7} trigger={`#${frame.id}`}>
                    <SmartImage src={frame.img} alt={frame.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </LightSweep>
                </div>
                <figcaption className="type-mono text-[var(--color-silver)] mt-3 text-center">
                  <span className="block text-[var(--color-light-3000)] mb-1">{frame.title}</span>
                  {frame.desc}
                </figcaption>
              </article>
            ))}
          </div>

          <ul className="type-mono space-y-2 text-[var(--color-silver)] mb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            <li>600 m de percurso</li>
            <li>1.500 m² de muros</li>
            <li>30 artistas</li>
            <li>14 luminárias LED</li>
            <li>SCAR + Instituto AION</li>
            <li>150 anos de Jaraguá do Sul</li>
          </ul>

          <blockquote className="caminho-quote border-l-4 border-[var(--color-gold)] pl-6 my-12 text-[var(--color-bone)] text-[var(--text-body)]">
            "O canto da araponga é o som da cidade: metal e mata."
          </blockquote>
          <p className="caminho-credits type-mono text-[var(--color-silver)]">
            Projeto: SCAR + Instituto AION. Curadoria: Beto Shibata e Denyse Silva. Imagens: acervo do artista.
          </p>
        </div>
      </LightSweep>

      <MetallicRipple
        active={true}
        origin={{ x: 50, y: 50 }}
        color="255,209,161"
        className="absolute inset-0 pointer-events-none -z-10"
      />
    </section>
  );
}

