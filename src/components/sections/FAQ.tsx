"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs, faqSection } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading title={faqSection.title} description={faqSection.description} />

        <ul className="border-t border-dark-base/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={faq.question} className="border-b border-dark-base/15">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-start gap-4 py-5 text-left transition-colors ${
                      isOpen ? "text-dark-base" : "text-dark-base/90 hover:text-dark-base"
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-display text-xs font-semibold ${
                        isOpen ? "text-gold-primary" : "text-slate-muted"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-base font-semibold sm:text-lg">
                      {faq.question}
                    </span>
                    <Plus
                      className={`mt-1 h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl border-l-2 border-gold-primary/60 pb-5 pl-4 text-sm leading-relaxed text-slate-muted sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
