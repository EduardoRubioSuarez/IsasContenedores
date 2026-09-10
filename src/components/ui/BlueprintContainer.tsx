"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

type Line = [number, number, number, number];

// Panel frontal (el "ojo" corrugado del contenedor)
const frontRect: Line[] = [
  [30, 58, 120, 58],
  [120, 58, 120, 222],
  [120, 222, 30, 222],
  [30, 222, 30, 58],
];
const frontCorrugation: Line[] = [45, 60, 75, 90, 105].map((x) => [x, 58, x, 222]);

// Costado largo en fuga hacia la derecha (perspectiva de un punto)
const sideEdges: Line[] = [
  [120, 58, 372, 92],
  [120, 222, 372, 196],
  [372, 92, 372, 196],
];
const sideCorrugation: Line[] = [0.22, 0.44, 0.66, 0.86].map((t) => {
  const xTop = 120 + (372 - 120) * t;
  const yTop = 58 + (92 - 58) * t;
  const yBot = 222 + (196 - 222) * t;
  return [xTop, yTop, xTop, yBot];
});

const STRUCTURAL = frontRect.length + sideEdges.length;
const ALL: Line[] = [...frontRect, ...sideEdges, ...frontCorrugation, ...sideCorrugation];

type Props = {
  className?: string;
  stroke?: string;
};

/**
 * Contenedor marítimo dibujado en perspectiva de un punto, como el
 * isotipo. Las líneas se trazan de forma escalonada al entrar en viewport.
 */
export default function BlueprintContainer({ className = "", stroke = "#C49846" }: Props) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setFallback(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  const show = reduceMotion || inView || fallback;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };

  const line: Variants = {
    hidden: { pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 1 : 0.15 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.7, ease: "easeInOut" },
        opacity: { duration: 0.25 },
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 260"
      fill="none"
      aria-hidden="true"
      className={className}
      variants={container}
      initial={reduceMotion ? false : "hidden"}
      animate={show ? "show" : "hidden"}
    >
      {ALL.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={`${x1}-${y1}-${x2}-${y2}-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={stroke}
          strokeWidth={i < STRUCTURAL ? 2 : 1}
          strokeLinecap="square"
          variants={line}
        />
      ))}
      <motion.polygon
        points="30,222 44,196 30,196"
        fill={stroke}
        variants={{
          hidden: { opacity: reduceMotion ? 1 : 0 },
          show: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
        }}
      />
    </motion.svg>
  );
}
