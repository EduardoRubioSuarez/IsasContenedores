"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "framer-motion";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  /** Vuelve a contar cada vez que entra en viewport. */
  replay?: boolean;
};

/** Número que cuenta desde 0 hasta `to` cuando entra en viewport. */
export default function Counter({
  to,
  prefix = "",
  suffix = "",
  className,
  duration = 1.4,
  replay = false,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: !replay, amount: 0.6 });
  const seen = useRef(false);
  const reduceMotion = useReducedMotion();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (reduceMotion) {
      count.set(to);
      return;
    }
    if (inView) {
      seen.current = true;
      count.set(0);
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
    if (replay) {
      // Modo repetición: al salir de viewport se reinicia a 0.
      count.set(0);
      return;
    }
    if (seen.current) return;
    // Respaldo: si el observer no dispara nunca, muestra el valor final.
    const timer = window.setTimeout(() => {
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [inView, reduceMotion, replay, to, duration, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}
