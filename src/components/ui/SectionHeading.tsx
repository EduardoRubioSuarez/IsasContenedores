"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type SectionHeadingProps = {
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Repite la animación cada vez que entra en viewport. */
  replay?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Encabezado de sección con marca angular: una regla dorada que se traza
 * horizontalmente y el título que asciende. `tone="dark"` para fondos oscuros.
 */
export default function SectionHeading({
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
  replay = false,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: !replay, amount: 0.4 });
  const seen = useRef(false);
  const [fallback, setFallback] = useState(false);

  if (inView) seen.current = true;

  useEffect(() => {
    const timer = window.setTimeout(() => setFallback(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  const state =
    reduceMotion || inView || (fallback && !seen.current) ? "show" : "hidden";

  const fade: Variants = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex max-w-2xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      } ${className}`}
      initial={reduceMotion ? false : "hidden"}
      animate={state}
      transition={{ staggerChildren: 0.09 }}
    >
      <motion.span
        aria-hidden="true"
        className="block h-[3px] w-16 bg-gold-primary"
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
        variants={{
          hidden: { scaleX: reduceMotion ? 1 : 0 },
          show: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
        }}
      />

      <motion.h2
        className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.6rem] ${
          isDark ? "text-white" : "text-dark-base"
        }`}
        variants={fade}
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          className={`text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-muted"}`}
          variants={fade}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
