/**
 * Constructores de datos estructurados (JSON-LD, schema.org).
 *
 * Toda la información sale de `src/data/content.ts`, así que el equipo mantiene
 * los datos en un solo lugar. Los campos con placeholder (correo, redes) se
 * omiten automáticamente hasta que tengan un valor real.
 */
import { faqs, projectShowcase, seo, site } from "@/data/content";

const ORG_ID = `${site.url}/#organization`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

/** Convierte una ruta relativa ("/img.webp") en URL absoluta para schema.org. */
const abs = (path: string) => (path.startsWith("http") ? path : `${site.url}${path}`);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
} as const;

const sameAs = site.social.length
  ? { sameAs: site.social.map((s) => s.href) }
  : {};

const email = site.email ? { email: site.email } : {};

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: abs(site.logo.src),
    image: abs(seo.ogImage),
    description: site.description,
    telephone: site.phoneHref,
    address: postalAddress,
    areaServed: site.areaServed,
    ...email,
    ...sameAs,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "es-MX",
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    url: site.url,
    image: [abs(seo.ogImage), abs(site.logo.src)],
    logo: abs(site.logo.src),
    description: seo.description,
    telephone: site.phoneHref,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapLink,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: site.areaServed,
    parentOrganization: { "@id": ORG_ID },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de arquitectura en contenedores marítimos",
      itemListElement: projectShowcase.map((project) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: project.title,
          description: project.description,
          category: project.tab,
          areaServed: site.areaServed,
          provider: { "@id": BUSINESS_ID },
        },
      })),
    },
    ...email,
    ...sameAs,
  };
}

export function faqPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    inLanguage: "es-MX",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
