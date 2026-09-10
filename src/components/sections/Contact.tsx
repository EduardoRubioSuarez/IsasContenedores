import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactSection, site, telUrl, whatsappUrl } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const details = [
  {
    icon: Phone,
    label: "Teléfono",
    value: site.phoneDisplay,
    href: telUrl,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Respuesta en horario de oficina",
    href: whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section relative overflow-hidden bg-light-bg">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            title={contactSection.title}
            description={contactSection.description}
          />

          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contactSection.primaryCta.href} size="lg" withArrow>
              {contactSection.primaryCta.label}
            </Button>
            <Button href={contactSection.secondaryCta.href} variant="outline" size="lg">
              {contactSection.secondaryCta.label}
            </Button>
          </Reveal>

          <ul className="mt-10 border-t border-dark-base/15">
            {details.map((d, index) => (
              <Reveal
                as="li"
                key={d.label}
                variant="left"
                delay={index * 0.06}
                className="border-b border-dark-base/15"
              >
                <a
                  href={d.href}
                  target={d.external ? "_blank" : undefined}
                  rel={d.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-dark-base/15 text-gold-dark transition-colors group-hover:border-gold-primary group-hover:bg-dark-base group-hover:text-gold-light">
                    <d.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-eyebrow text-slate-muted">
                      {d.label}
                    </span>
                    <span className="block text-sm font-medium text-dark-base">{d.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <li className="border-b border-dark-base/15 py-4">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-dark-base/15 text-gold-dark">
                  <Clock className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-eyebrow text-slate-muted">
                    Horario
                  </span>
                  <span className="mt-1 block space-y-0.5 text-sm text-dark-base">
                    {site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Mapa real + ficha de ubicación, estilo plano técnico */}
        <Reveal variant="right" distance={36} className="min-h-[320px]">
          <div className="clip-corner relative flex h-full min-h-[320px] flex-col overflow-hidden bg-dark-base text-white">
            <div className="relative flex items-center justify-between p-7 pb-4">
              <span className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-slate-400">
                Ubicación
              </span>
              <MapPin className="h-6 w-6 text-slate-300" strokeWidth={1.5} aria-hidden="true" />
            </div>

            <iframe
              src={site.mapEmbedSrc}
              title={`Mapa de ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="w-full grow border-y border-white/10"
              style={{ minHeight: 220 }}
            />

            <div className="relative p-7 pt-4">
              <p className="font-display text-lg font-semibold">{contactSection.location.title}</p>
              <p className="mt-2 text-sm text-slate-300">
                {site.addressLine}
                <br />
                {site.addressCity}
              </p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-eyebrow text-gold-light transition-colors hover:text-white"
              >
                Abrir en Google Maps
              </a>
              {contactSection.location.note ? (
                <p className="mt-3 text-xs text-slate-400">{contactSection.location.note}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
