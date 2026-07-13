"use client";

import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductGrid from "@/components/sections/ProductGrid";
import QualityHighlights from "@/components/sections/QualityHighlights";
import ContactSection from "@/components/sections/ContactSection";
import FloatingLeaf from "@/components/animations/FloatingLeaf";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingLeaf scrollYProgress={scrollYProgress} />
      </div>
      <Hero />
      <StatsSection />
      <AboutPreview />
      <ProductGrid />
      <QualityHighlights />
      <ContactSection />
    </div>
  );
}
