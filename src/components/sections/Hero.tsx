"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { COMPANY_DATA } from "@/lib/constants";
import { ArrowRight, FileCheck, Globe2, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-20]">
        {/* Desktop Image */}
        <Image
          src="/bg-image.png"
          alt="Hero Background Desktop"
          fill
          sizes="100vw"
          className="object-cover object-center hidden md:block"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/bg-image-mob.png"
          alt="Hero Background Mobile"
          fill
          sizes="100vw"
          className="object-cover object-center block md:hidden"
          priority
        />
        {/* Dark elegant overlay for perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink-navy)]/85 via-[var(--color-ink-navy)]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex w-full">
        <div className="max-w-4xl mr-auto pt-16 md:pt-12">
          
          {/* Top subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            <span className="text-white/90 text-sm font-bold tracking-widest uppercase">Premium Quality Extracts</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold font-display text-white leading-[1.1] mb-8 break-words"
          >
            Pharmaceutical-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Nicotine</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light"
          >
            {COMPANY_DATA.name} supplies ultra-pure nicotine and nicotine derivatives to licensed formulators and manufacturers globally, manufactured to stringent standards.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-2xl text-center hover:shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group text-lg"
            >
              Enquire Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl text-center hover:bg-white/20 transition-all border border-white/30 flex items-center justify-center gap-3 text-lg"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 md:gap-12 items-center text-white/80"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm md:text-base font-bold tracking-wide">GMP Compliant</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Globe2 className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm md:text-base font-bold tracking-wide">Export Ready</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <FileCheck className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-sm md:text-base font-bold tracking-wide">Custom Formulations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
