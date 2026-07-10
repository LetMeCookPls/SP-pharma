import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductGrid from "@/components/sections/ProductGrid";
import QualityHighlights from "@/components/sections/QualityHighlights";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ProductGrid />
      <QualityHighlights />
      <ContactSection />
    </>
  );
}
