"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { COMPANY_DATA } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    name: "Nicotine Alkaloid",
    concentration: "90% / 95%",
    packSizes: "100g to 1Kg, 1Kg, 5Kg, 10Kg to 200Kg",
    image: "/Nicotine Alkaloid.png",
    description: "High-purity liquid nicotine extracted from premium tobacco leaves, ideal for advanced formulations."
  },
  {
    name: "Nicotine Sulphate",
    concentration: "40%",
    packSizes: "100g to 1Kg, 1Kg, 5Kg, 10Kg to 200Kg",
    image: "/Nicotine Sulphate.png",
    description: "Stable nicotine salt solution commonly used in agricultural and specialized industrial applications."
  },
  {
    name: "Nicotine Pure",
    concentration: "99.99%",
    packSizes: "100g to 1Kg, 1Kg, 5Kg, 10Kg to 200Kg",
    image: "/Nicotine.png",
    description: "Ultra-pure pharmaceutical grade nicotine designed for medicinal and precision manufacturing."
  }
];

export default function ProductGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
    }, 6000); // Change product every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]); // Resets timer on manual change

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const product = PRODUCTS[currentIndex];
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(`Hi SP Pharmaceuticals, I'd like to enquire about: ${product.name} (${product.concentration})`)}`;

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-ink-navy)] mb-6">
              Premium Nicotine Solutions
            </h2>
            <p className="text-[var(--color-slate)] max-w-2xl mx-auto text-lg md:text-xl">
              High-purity nicotine derivatives manufactured to stringent quality standards for global distribution.
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1200px] mx-auto relative pb-20 px-4 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass p-8 md:p-16 lg:p-20 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 lg:gap-20 shadow-[0_10px_50px_rgba(34,197,94,0.12)] w-full min-h-[500px] md:min-h-[600px] relative"
            >
              {/* Product Image */}
              <div className="w-full md:w-1/2 flex justify-center items-center h-72 md:h-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl opacity-60" />
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  className="relative w-full h-full min-h-[280px] md:min-h-[400px] max-w-[450px] aspect-square"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-block bg-green-100 text-green-800 text-sm md:text-base font-semibold px-5 py-2 rounded-full mb-6 w-fit shadow-sm border border-green-200">
                    {product.concentration} Purity
                  </div>
                  
                  <h3 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[var(--color-ink-navy)] mb-6 leading-tight">
                    {product.name.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </h3>
                  
                  <p className="text-[var(--color-slate)] text-lg md:text-xl mb-10 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-4 mb-10 bg-white/50 p-6 rounded-2xl border border-white/60">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--color-ink-navy)] block text-sm md:text-base uppercase tracking-wider mb-2">Available Pack Sizes</span>
                        <span className="text-[var(--color-slate)] font-medium text-base md:text-lg">{product.packSizes}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-5 mt-auto">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 py-4 px-8 bg-[var(--color-ink-navy)] text-white text-lg font-semibold rounded-2xl text-center hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-600/20 active:scale-95"
                    >
                      Enquire on WhatsApp
                    </a>
                    <a href="/contact" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-[var(--color-ink-navy)] border-2 border-[var(--color-ink-navy)] hover:bg-[var(--color-ink-navy)] hover:text-white rounded-2xl transition-colors text-center active:scale-95">
                      Contact Form
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Manual Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-2 top-[35%] md:top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-white backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[var(--color-ink-navy)] hover:text-green-600 transition-all hover:scale-110 active:scale-95"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-2 top-[35%] md:top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-white backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[var(--color-ink-navy)] hover:text-green-600 transition-all hover:scale-110 active:scale-95"
            aria-label="Next product"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {PRODUCTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3.5 rounded-full transition-all duration-500 ease-out ${
                  currentIndex === idx 
                    ? "bg-green-600 w-12 shadow-md" 
                    : "bg-gray-300 w-3.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to product ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
