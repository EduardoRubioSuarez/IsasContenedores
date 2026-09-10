"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, navCta, site } from "@/data/content";
import Button from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
      priority
      className={`w-auto transition-[filter] duration-300 ${
        onDark ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Al inicio (sin scroll y menú cerrado) el navbar flota difuminado sobre el Hero oscuro.
  const onDark = !scrolled && !open;

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled || open
          ? "border-border-light bg-light-bg/85 shadow-[0_1px_0_rgba(45,55,72,0.06),0_10px_30px_-18px_rgba(17,20,25,0.35)]"
          : "border-white/10 bg-dark-base/25"
      }`}
    >
      <div className="h-[2px] w-full deco-corrugated-strong" aria-hidden="true" />

      <nav className="shell flex h-[68px] items-center justify-between gap-6">
        <Link
          href="#inicio"
          aria-label={`${site.name}, inicio`}
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <Logo className="h-8 sm:h-9" onDark={onDark} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative text-[0.82rem] font-semibold uppercase tracking-wide transition-colors ${
                  onDark ? "text-white/80 hover:text-white" : "text-slate-muted hover:text-dark-base"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={navCta.href} size="md" withArrow>
            {navCta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center border transition-colors lg:hidden ${
            onDark
              ? "border-white/30 text-white hover:border-gold-primary"
              : "border-border-line/60 text-dark-base hover:border-gold-primary"
          }`}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden border-t border-border-light bg-light-bg lg:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-l-2 border-transparent px-3 py-3 text-sm font-semibold uppercase tracking-wide text-dark-base transition-colors hover:border-gold-primary hover:bg-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3 px-3">
                <Button
                  href={navCta.href}
                  size="lg"
                  withArrow
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {navCta.label}
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
