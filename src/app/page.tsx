import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Projects from "@/components/sections/Projects";
import Financing from "@/components/sections/Financing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import StructuredData from "@/components/seo/StructuredData";
import { faqPageLd, localBusinessLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <StructuredData data={[localBusinessLd(), faqPageLd()]} />
      <Hero />
      <Financing />
      <Benefits />
      <Projects />
      <FAQ />
      <Contact />
    </>
  );
}
