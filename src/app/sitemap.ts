import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export const dynamic = "force-static";

/**
 * Sitemap del sitio. Hoy es una sola página; si se agregan rutas (p. ej.
 * /casas-contenedor), añádelas aquí para que Google las descubra.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
