"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Recorrido en px (positivo = se mueve hacia arriba al bajar). */
  amount?: number;
};

/** Envoltura que desplaza su contenido con el scroll para dar profundidad. */
export default function Parallax({ children, className, amount = 60 }: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [amount, -amount],
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
