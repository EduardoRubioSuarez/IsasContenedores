"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { hero } from "@/data/content";
import Button from "@/components/ui/Button";
import BlueprintContainer from "@/components/ui/BlueprintContainer";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const frameItem: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "16%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "-12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "24%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.15]);

  const initial = reduceMotion ? undefined : "hidden";
  const animate = reduceMotion ? undefined : "show";

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-dark-base pb-14 pt-24 sm:pb-16 sm:pt-28"
    >
      {/* Retícula técnica: parallax al scroll + deriva ambiental infinita */}
      <motion.div
        aria-hidden="true"
        style={{ y: gridY }}
        animate={reduceMotion ? undefined : { backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        className="pointer-events-none absolute inset-0 deco-grid opacity-[0.35]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 deco-corrugated-strong opacity-40"
      />
      {/* Rombo dorado en rotación lenta, guiño a la "A" del logo */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-16 w-16 border border-gold-primary/40 lg:block"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      />

      <motion.div
        className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
        style={{ y: textY, opacity: fade }}
      >
        <motion.div variants={container} initial={initial} animate={animate}>
          <motion.span
            variants={item}
            aria-hidden="true"
            className="block h-[3px] w-16 origin-left bg-gold-primary"
          />

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.9rem] font-semibold leading-[1] tracking-tight text-white sm:text-6xl lg:text-[4.6rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl border-l-2 border-gold-primary/70 pl-4 text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} variant="primary" size="lg" withArrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outlineLight" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Imagen enmarcada + wireframe del contenedor */}
        <motion.div
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]"
          variants={frameItem}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
        >
          <div className="clip-corner relative aspect-[4/5] w-full overflow-hidden ring-1 ring-gold-primary/30 lg:max-h-[74vh]">
            <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-base/70 via-transparent to-transparent" />
          </div>

          <motion.div
            className="pointer-events-none absolute -bottom-4 -left-4 w-[48%] max-w-[180px] sm:-bottom-5 sm:-left-5"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <BlueprintContainer className="opacity-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
