import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import ScrollProgress from "@/components/ui/ScrollProgress";

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
  metadataBase: new URL("https://isascontenedores.mx"),
  title: {
    default: `${site.name} | Arquitectura modular en contenedores marítimos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "contenedores marítimos",
    "casas de contenedores",
    "oficinas modulares",
    "arquitectura modular",
    "tiny house",
    "bodegas de contenedor",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: site.name,
    title: `${site.name} | Arquitectura modular en contenedores marítimos`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Arquitectura modular en contenedores marítimos`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
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
