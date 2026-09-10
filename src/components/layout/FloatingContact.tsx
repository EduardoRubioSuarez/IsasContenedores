import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/content";

/**
 * Botón flotante de WhatsApp.
 * Forma angular (cuadrado con esquina recortada a 45 grados), base grafito
 * y borde dorado ocre. Sin verde brillante. Tooltip solo en hover.
 */
export default function FloatingContact() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center sm:bottom-6 sm:right-6"
    >
      <span
        className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-gold-primary/40
                   bg-dark-base px-3.5 py-2 text-[0.78rem] font-semibold uppercase tracking-wide text-white
                   opacity-0 shadow-lg transition-opacity duration-200
                   group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
      >
        Cotizar por WhatsApp
      </span>

      <span className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
        {/* Pulso sutil */}
        <span
          aria-hidden="true"
          className="clip-corner-sm absolute inset-0 border border-gold-primary/60 motion-safe:animate-ping-slow motion-reduce:hidden"
        />
        <span
          className="clip-corner-sm relative flex h-full w-full items-center justify-center border border-gold-primary/70
                     bg-dark-base text-gold-light shadow-[0_12px_34px_-12px_rgba(17,20,25,0.7)]
                     transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95
                     motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        >
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
