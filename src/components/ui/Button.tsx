import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "outlineLight";
type Size = "md" | "lg";

// Botones angulares: esquinas rectas + recorte a 45 grados en dos vértices.
const base =
  "group/btn relative inline-flex items-center justify-center gap-2 clip-corner-sm font-semibold uppercase tracking-wide " +
  "transition-[background-color,color,transform] duration-200 ease-out active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.8rem]",
  lg: "px-7 py-3.5 text-[0.8rem] sm:text-sm",
};

const variants: Record<Variant, string> = {
  primary: "bg-gold-primary text-dark-base hover:bg-gold-light",
  outline:
    "bg-transparent text-dark-base ring-1 ring-inset ring-dark-base/30 hover:bg-dark-base hover:text-white hover:ring-dark-base",
  outlineLight:
    "bg-transparent text-white ring-1 ring-inset ring-white/40 hover:bg-white hover:text-dark-base hover:ring-white",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  /** Ancla interna (`#seccion`), URL externa, `tel:` o `mailto:`. Si se omite, se renderiza un <button>. */
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * Botón unificado del sitio. Se renderiza como `next/link` para anclas
 * internas, como `<a target="_blank">` para enlaces externos y como
 * `<button>` cuando no hay `href`.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  href,
  type = "button",
  disabled,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const isProtocol = isExternal || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isProtocol) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
