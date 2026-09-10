"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type CorrugatedProps = {
  bars?: number;
  className?: string;
  barClassName?: string;
  height?: string;
  origin?: "bottom" | "top";
  /** Repite la animación cada vez que entra en viewport. */
  replay?: boolean;
};

/**
 * Banda de "corrugado" (panel frontal del contenedor del logo): barras
 * verticales finas que se despliegan de forma escalonada al entrar en viewport.
 */
export default function Corrugated({
  bars = 18,
  className = "",
  barClassName = "bg-gold-primary/60",
  height = "h-10",
  origin = "bottom",
  replay = false,
}: CorrugatedProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: !replay, amount: 0.5 });
  const seen = useRef(false);
  const [fallback, setFallback] = useState(false);

  if (inView) seen.current = true;

  useEffect(() => {
    const timer = window.setTimeout(() => setFallback(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  const show = reduceMotion || inView || (fallback && !seen.current);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035 } },
  };

  const bar: Variants = {
    hidden: { scaleY: reduceMotion ? 1 : 0.08, opacity: reduceMotion ? 1 : 0.4 },
    show: { scaleY: 1, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`flex ${height} items-end gap-[6px] ${className}`}
      variants={container}
      initial={reduceMotion ? false : "hidden"}
      animate={show ? "show" : "hidden"}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          variants={bar}
          style={{ transformOrigin: origin === "bottom" ? "bottom" : "top" }}
          className={`h-full w-[2px] flex-1 ${barClassName}`}
        />
      ))}
    </motion.div>
  );
}
