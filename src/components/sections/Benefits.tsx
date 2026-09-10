import { benefits, benefitsSection } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Corrugated from "@/components/ui/Corrugated";

export default function Benefits() {
  return (
    <section id="ventajas" className="section relative overflow-hidden bg-white">
      <div className="shell">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={benefitsSection.title} description={benefitsSection.description} replay />
          <Corrugated
            bars={22}
            height="h-14"
            barClassName="bg-gold-primary/40"
            className="hidden w-64 lg:flex"
            replay
          />
        </div>

        <ul className="mt-14 border-t border-dark-base/15">
          {benefits.map((benefit, index) => (
            <Reveal
              as="li"
              key={benefit.title}
              variant="left"
              delay={index * 0.06}
              replay
              className="group border-b border-dark-base/15"
            >
              <div className="grid gap-5 py-8 sm:grid-cols-[3rem_auto_1fr] sm:gap-8 sm:py-9 lg:items-center">
                <span className="font-display text-sm font-semibold text-gold-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-12 w-12 items-center justify-center bg-dark-base text-gold-light transition-colors group-hover:bg-gold-primary group-hover:text-dark-base">
                  <Icon name={benefit.icon} className="h-6 w-6" />
                </span>

                <div>
                  <h3 className="font-display text-xl font-semibold text-dark-base">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
