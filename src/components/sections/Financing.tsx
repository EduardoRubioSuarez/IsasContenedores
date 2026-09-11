import { financing } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function Financing() {
  return (
    <section id="financiamiento" className="section relative overflow-hidden bg-white">
      <div className="shell">
        <Reveal variant="scale" replay>
          <div className="clip-corner relative overflow-hidden bg-dark-base text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 deco-grid opacity-20"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-24 deco-corrugated-strong opacity-40"
            />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div>
                  <span aria-hidden="true" className="block h-[3px] w-16 bg-gold-primary" />

                  <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-[2.9rem]">
                    {financing.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                    {financing.description}
                  </p>

                  <ul className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {financing.highlights.map((highlight) => (
                      <li key={highlight.text} className="flex items-start gap-3 text-base text-slate-200">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-gold-light">
                          <Icon name={highlight.icon} className="h-5 w-5" />
                        </span>
                        <span className="pt-2 leading-snug">{highlight.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-eyebrow text-slate-400">
                      {financing.totalLabel}
                    </p>
                    <p className="mt-2 font-display text-5xl font-semibold text-gold-light sm:text-6xl">
                      {financing.total}
                      <span className="ml-2 text-base font-normal text-slate-400">
                        {financing.totalNote}
                      </span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-slate-400">
                        {financing.paymentsLabel}
                      </p>
                      <p className="mt-1 font-display text-3xl font-semibold text-white">
                        {financing.paymentAmount}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-slate-400">
                        {financing.downPaymentLabel}
                      </p>
                      <p className="mt-1 font-display text-3xl font-semibold text-white">
                        {financing.downPayment}
                      </p>
                    </div>
                  </div>

                  <p className="border-t border-white/15 pt-6 text-base leading-relaxed text-slate-300">
                    {financing.firstPaymentNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de cierre: urgencia y llamada a la acción al mismo nivel */}
            <div className="relative flex flex-col gap-7 border-t border-white/15 bg-white/[0.03] px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-10 lg:px-16">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-gold-primary/15 text-gold-light ring-1 ring-gold-primary/40">
                  <Icon name="users" className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <p className="font-display text-3xl font-semibold leading-none tracking-tight text-white sm:text-4xl">
                  {financing.urgencyPrefix}{" "}
                  <span className="text-gold-light">{financing.urgencyHighlight}</span>
                  <span className="mt-2 block font-sans text-sm font-medium normal-case leading-none tracking-normal text-slate-400">
                    {financing.urgencyNote}
                  </span>
                </p>
              </div>

              <Button
                href={financing.cta.href}
                download={financing.pdfFileName}
                variant="primary"
                size="xl"
                withArrow
                className="sm:self-center"
              >
                {financing.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
