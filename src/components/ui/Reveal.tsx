"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";
import { motion, useInView, useReducedMotion, type Target } from "framer-motion";

type Variant = "up" | "left" | "right" | "fade" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retardo de entrada en segundos (para escalonar listas). */
  delay?: number;
  /** Distancia de desplazamiento en píxeles. */
  distance?: number;
  variant?: Variant;
  as?: "div" | "li" | "span" | "section" | "ul" | "ol";
  /** Añade una elevación suave al pasar el cursor. */
  hoverLift?: boolean;
  /** Repite la animación cada vez que el elemento entra en viewport. */
  replay?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

function hiddenState(variant: Variant, d: number): Target {
  switch (variant) {
    case "left":
      return { opacity: 0, x: -d };
    case "right":
      return { opacity: 0, x: d };
    case "fade":
      return { opacity: 0 };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "up":
    default:
      return { opacity: 0, y: d };
  }
}

const SHOWN: Target = { opacity: 1, x: 0, y: 0, scale: 1 };

/**
 * Envoltura de entrada al hacer scroll. Aparece cuando el elemento entra en
 * viewport. Con `replay` la animación se repite en cada pasada; sin él ocurre
 * una sola vez y hay un temporizador de respaldo para que el contenido nunca
 * quede oculto si el observer no dispara. Respeta `prefers-reduced-motion`.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 26,
  variant = "up",
  as = "div",
  hoverLift = false,
  replay = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: !replay, amount: 0.15 });
  const seen = useRef(false);
  const [fallback, setFallback] = useState(false);

  if (inView) seen.current = true;

  useEffect(() => {
    const timer = window.setTimeout(() => setFallback(true), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  // En modo repetición el inView manda; el respaldo solo cubre la primera vez.
  const show = reduceMotion || inView || (fallback && !seen.current);

  const Tag =
    as === "li"
      ? motion.li
      : as === "span"
        ? motion.span
        : as === "section"
          ? motion.section
          : as === "ul"
            ? motion.ul
            : as === "ol"
              ? motion.ol
              : motion.div;

  return (
    <Tag
      ref={ref as Ref<never>}
      className={className}
      initial={reduceMotion ? false : hiddenState(variant, distance)}
      animate={show ? SHOWN : hiddenState(variant, distance)}
      whileHover={hoverLift && !reduceMotion ? { y: -6 } : undefined}
      transition={{ duration: 0.65, delay: fallback && !inView ? 0 : delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
