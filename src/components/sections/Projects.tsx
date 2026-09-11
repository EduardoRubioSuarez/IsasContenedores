"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { navCta, projectShowcase, showcaseSection } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const reduce = useReducedMotion();
  const item = projectShowcase[active];
  const activeImage = item.images[imageIndex] ?? item.images[0];

  function selectTab(index: number) {
    setActive(index);
    setImageIndex(0);
  }

  return (
    <section id="servicios" className="section relative overflow-hidden bg-dark-surface">
      <span id="proyectos" aria-hidden="true" className="pointer-events-none absolute top-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 deco-grid opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-24 deco-corrugated-strong opacity-40"
      />

      <div className="shell relative">
        <SectionHeading
          title={showcaseSection.title}
          description={showcaseSection.description}
          tone="dark"
        />

        {/* Pestañas de navegación: cuadrícula 2x2 en móvil, fila en escritorio */}
        <div
          className="relative z-10 mt-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
          role="tablist"
          aria-label="Tipos de proyecto"
        >
          {projectShowcase.map((p, i) => {
            const sel = i === active;
            return (
              <button
                key={p.tab}
                type="button"
                role="tab"
                aria-selected={sel}
                onClick={() => selectTab(i)}
                className={`flex w-full items-center justify-center gap-2 px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide transition-colors sm:w-auto sm:justify-start ${
                  sel
                    ? "bg-gold-primary text-dark-base"
                    : "border border-border-line bg-dark-base text-slate-300 hover:border-gold-primary/60 hover:text-white"
                }`}
              >
                <Icon name={p.icon} className="h-4 w-4" />
                {p.tab}
              </button>
            );
          })}
        </div>

        {/* Contenido: imagen + ficha, formato tipo "Nosotros" */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="clip-corner relative aspect-[4/3] overflow-hidden ring-1 ring-gold-primary/25">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage.src}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <span className="pointer-events-none absolute left-4 top-4 z-10 h-6 w-6 border-l-2 border-t-2 border-gold-primary" />
            </div>

            {item.images.length > 1 ? (
              <div
                className="mt-4 flex items-center gap-2"
                role="tablist"
                aria-label="Vista del contenedor"
              >
                {item.images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    role="tab"
                    aria-selected={i === imageIndex}
                    onClick={() => setImageIndex(i)}
                    className={`px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-wide transition-colors ${
                      i === imageIndex
                        ? "bg-gold-primary text-dark-base"
                        : "border border-border-line text-slate-300 hover:border-gold-primary/60 hover:text-white"
                    }`}
                  >
                    {img.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.tab}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-eyebrow text-slate-400">
                  {item.container}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{item.description}</p>

                <ul className="mt-6 space-y-2.5 border-t border-border-line pt-6">
                  {item.specs.map((spec) => (
                    <li key={spec} className="flex gap-3 text-sm text-slate-300">
                      <Plus
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-primary"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <Button href={navCta.href} variant="primary" size="lg" withArrow>
                {showcaseSection.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
