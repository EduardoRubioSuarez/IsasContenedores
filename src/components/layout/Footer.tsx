import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { footer, navLinks, site, telUrl, whatsappUrl } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-base text-slate-300">
      <div className="h-[2px] w-full deco-corrugated-strong" aria-hidden="true" />

      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="max-w-xs">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">{footer.tagline}</p>

          {site.social.length > 0 ? (
            <div className="mt-6 flex gap-3">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-border-line text-slate-300 transition-colors hover:border-gold-primary hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <nav aria-label="Enlaces rápidos">
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-slate-500">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-gold-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-slate-500">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={telUrl} className="transition-colors hover:text-gold-light">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold-light"
              >
                WhatsApp
              </a>
            </li>
            {site.email ? (
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-gold-light"
                >
                  {site.email}
                </a>
              </li>
            ) : null}
            <li className="text-slate-400">
              {site.addressLine}
              <br />
              {site.addressCity}
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-border-line">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {year} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors hover:text-gold-light"
              >
                {l.label}
              </Link>
            ))}
            <span>{footer.credits}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
