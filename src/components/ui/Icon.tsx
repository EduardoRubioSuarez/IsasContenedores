import {
  Zap,
  Leaf,
  ShieldCheck,
  Truck,
  Timer,
  Thermometer,
  MapPin,
  Home,
  Briefcase,
  Store,
  Warehouse,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/content";

const registry: Record<IconName, LucideIcon> = {
  zap: Zap,
  leaf: Leaf,
  shield: ShieldCheck,
  truck: Truck,
  timer: Timer,
  thermometer: Thermometer,
  mapPin: MapPin,
  home: Home,
  briefcase: Briefcase,
  store: Store,
  warehouse: Warehouse,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

/** Renderiza un icono de lucide-react a partir de su clave en `content.ts`. */
export function Icon({ name, className, strokeWidth = 1.5 }: IconProps) {
  const Glyph = registry[name] ?? Zap;
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
