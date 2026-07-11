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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="sticky top-0 h-screen w-full">
          <FloatingLeaf scrollYProgress={scrollYProgress} />
        </div>
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
