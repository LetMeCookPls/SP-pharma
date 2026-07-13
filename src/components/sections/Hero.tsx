"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_DATA } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-20]">
        <Image
          src="/bg-image.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light overlay to ensure the dark text and glassmorphism stand out */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Background blobs for refraction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 mix-blend-multiply opacity-50">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-[var(--color-brand-blue)]/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] bg-[var(--color-signal-red)]/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[40%] w-[45vw] h-[45vw] bg-[var(--color-sky-tint)]/25 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 z-10 flex">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-glass rounded-3xl p-8 md:p-16 max-w-3xl mr-auto md:ml-8 lg:ml-16 border border-white/20 shadow-2xl relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display text-[var(--color-ink-navy)] leading-tight mb-6">
            Pharmaceutical-Grade Nicotine, Manufactured for Global Standards.
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-slate)] mb-10 max-w-2xl leading-relaxed">
            {COMPANY_DATA.name} supplies nicotine and nicotine derivatives to licensed formulators and manufacturers from our facility in the KIADB Export Promotion Industrial Park, Mangalore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-[var(--color-signal-red)] text-white font-medium rounded-xl text-center hover:bg-red-700 transition-colors shadow-lg shadow-red-500/25"
            >
              Enquire Now
            </a>
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/50 text-[var(--color-ink-navy)] font-medium rounded-xl text-center hover:bg-white/80 transition-colors border border-white border-b-2"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-ink-navy)]/10 flex flex-wrap gap-6 items-center opacity-80 text-sm font-mono text-[var(--color-slate)]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
              GMP Compliant Facility
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
              Export Ready
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
              Custom Concentrations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
