import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { seo, site } from "@/data/content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import StructuredData from "@/components/seo/StructuredData";
import { organizationLd, websiteLd } from "@/lib/structured-data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: site.name,
  category: "construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImage,
        width: seo.ogImageWidth,
        height: seo.ogImageHeight,
        alt: seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#111419",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <StructuredData data={[organizationLd(), websiteLd()]} />
        {/* Sentinela para que el Navbar detecte el scroll sin listeners por frame */}
        <div
          id="nav-sentinel"
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-20"
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
