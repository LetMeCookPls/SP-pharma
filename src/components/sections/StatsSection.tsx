"use client";

import { motion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const statItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="stats" className="bg-white py-24 md:py-32 overflow-hidden relative z-10 border-t border-[var(--color-ink-navy)]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none lg:w-[120%] lg:-ml-[10%] origin-center overflow-hidden group"
            style={{
              WebkitMaskImage: `url("/sp-mask.svg")`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url("/sp-mask.svg")`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-navy)]/40 to-transparent z-10 pointer-events-none" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              src="https://res.cloudinary.com/dehtmwxwn/video/upload/v1783924868/gemini_generated_video_4231047e_ymhglv.mp4"
            />
          </motion.div>

          {/* Right Column - Content & Stats */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={statItemVariants} className="mb-12">
              <span className="text-[var(--color-brand-blue)] font-bold tracking-widest uppercase text-sm mb-4 block">Our Impact</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-ink-navy)] mb-6 leading-[1.15]">
                Powering Formulations that Ensure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400 italic font-dm-serif font-normal">Absolute Purity</span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--color-slate)] leading-relaxed font-light max-w-xl">
                For years, the world&apos;s most demanding formulators and manufacturers have relied on SP Pharmaceuticals&apos; pharmaceutical-grade nicotine and strict quality control to secure their supply chains and ensure unmatched product consistency.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-8 gap-y-12"
              variants={containerVariants}
            >
              {/* Stat 1 */}
              <motion.div variants={statItemVariants} className="flex flex-col group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-[var(--color-ink-navy)] group-hover:text-green-500 transition-colors duration-300">
                  <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[var(--color-slate)]/70 uppercase tracking-wider">
                  EP/USP Purity
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div variants={statItemVariants} className="flex flex-col group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-[var(--color-ink-navy)] group-hover:text-green-500 transition-colors duration-300">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[var(--color-slate)]/70 uppercase tracking-wider">
                  Traceability
                </div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div variants={statItemVariants} className="flex flex-col group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-[var(--color-ink-navy)] group-hover:text-green-500 transition-colors duration-300">
                  <AnimatedCounter value={3} suffix="+" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[var(--color-slate)]/70 uppercase tracking-wider">
                  Product Variants
                </div>
              </motion.div>

              {/* Stat 5 */}
              <motion.div variants={statItemVariants} className="flex flex-col group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-3 text-[var(--color-ink-navy)] group-hover:text-green-500 transition-colors duration-300">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="text-xs md:text-sm font-semibold text-[var(--color-slate)]/70 uppercase tracking-wider">
                  Quality Control
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
