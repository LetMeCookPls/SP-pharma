"use client";

import { motion, Variants } from "motion/react";
import Typewriter from "@/components/ui/Typewriter";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const statsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const statItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="stats" className="bg-white text-[var(--color-ink-navy)] py-8 md:py-24 px-6 md:px-12 lg:px-[120px] w-full border-t border-[var(--color-ink-navy)]/10 overflow-hidden relative z-10">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-[160px] items-stretch">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 flex flex-col justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] font-sans font-medium tracking-tight mb-6 leading-[1.1] w-[590px] max-w-full">
            <span className="font-dm-serif italic font-normal text-[var(--color-brand-blue)]">
              <Typewriter text="SP Pharmaceuticals:" delay={0} speed={0.012} />
            </span><br />
            <Typewriter text="Powering Formulations that " delay={0.25} speed={0.012} />
            <span className="font-dm-serif italic font-normal text-[var(--color-brand-blue)]">
              <Typewriter text="Ensure Absolute Purity" delay={0.35} speed={0.012} />
            </span>
          </h2>

          <p className="text-base md:text-lg text-[var(--color-slate)] leading-relaxed font-light max-w-lg whitespace-normal mb-16">
            <Typewriter text="For years, the world's most demanding formulators and manufacturers have relied on SP Pharmaceuticals' pharmaceutical-grade nicotine and strict quality control to secure their supply chains and ensure unmatched product consistency." delay={0.1} speed={0.012} />
          </p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-[max-content_max-content] gap-8 md:gap-x-16 lg:gap-x-24"
            variants={statsContainerVariants}
          >
            {/* Stat 1 */}
            <motion.div variants={statItemVariants} className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3 text-[var(--color-signal-red)]">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-[var(--color-slate)] uppercase tracking-wider">
                EP/USP Purity Standard
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={statItemVariants} className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3 text-[var(--color-signal-red)]">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-[var(--color-slate)] uppercase tracking-wider">
                Global Partners
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={statItemVariants} className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3 text-[var(--color-signal-red)]">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-[var(--color-slate)] uppercase tracking-wider">
                Batch Traceability
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div variants={statItemVariants} className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3 text-[var(--color-signal-red)]">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-[var(--color-slate)] uppercase tracking-wider">
                Product Variants
              </div>
            </motion.div>

            {/* Stat 5 */}
            <motion.div variants={statItemVariants} className="flex flex-col">
              <div className="text-4xl md:text-5xl lg:text-[56px] font-dm-serif tracking-tight mb-3 text-[var(--color-signal-red)]">
                <AnimatedCounter value={24} suffix="/7" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-[var(--color-slate)] uppercase tracking-wider">
                Quality Control
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <div className="flex justify-center lg:justify-end items-center shrink-0 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1.2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
            className="w-full max-w-[500px] lg:max-w-none lg:w-[120%] aspect-square origin-center overflow-hidden"
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
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="https://app-uploads.krea.ai/wan-videos/7f348c17-c3aa-40c9-9d5b-a2bed9a72c2e.mp4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
