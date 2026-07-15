"use client";

import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  FlaskConical, 
  Dna, 
  FileSpreadsheet, 
  Boxes, 
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  FlameKindling,
  Cpu
} from "lucide-react";
import QualityHighlights from "@/components/sections/QualityHighlights";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02
    }
  }
};

export default function QualityPage() {
  return (
    <div className="relative min-h-screen py-24 md:py-36 bg-[#FAFBFD] text-[var(--color-ink-navy)] selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      
      {/* Background layout: Tech grid + ambient chromatic glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-indigo-500/5 to-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10vw] w-[45vw] h-[45vw] rounded-full bg-blue-300/5 blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-24 pt-12 md:pt-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-ink-navy)]/10 shadow-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-bold text-[var(--color-slate)] tracking-widest uppercase">Purity Assurance</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-8 leading-[0.95] text-[var(--color-ink-navy)]">
            Quality & <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">Compliance Rigor</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-slate)] font-light leading-relaxed max-w-2xl mx-auto">
            SP Pharmaceuticals operates under strict analytical frameworks. We guarantee chemical validation, trace control, and absolute batch homogeneity.
          </motion.p>
        </motion.div>

        {/* Quality Controls Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-32 max-w-6xl mx-auto"
        >
          {/* HPLC Card */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 border border-[var(--color-ink-navy)]/5">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">HPLC Assay Verification</h3>
            <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
              We employ High-Performance Liquid Chromatography (HPLC) to calibrate precise purity percentages and guarantee consistent assay values for every batch.
            </p>
          </motion.div>

          {/* GC-MS Card */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 border border-[var(--color-ink-navy)]/5">
              <Dna className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">GC-MS Volatiles Mapping</h3>
            <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
              Gas Chromatography-Mass Spectrometry (GC-MS) screenings ensure that trace alkaloids, residual solvents, and VOCs are held strictly below detectable levels.
            </p>
          </motion.div>

          {/* Trace Metals Card */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 border border-[var(--color-ink-navy)]/5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">Heavy Metal Controls</h3>
            <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
              All raw materials and final product batches are screened for trace heavy metals (arsenic, cadmium, lead, mercury) to assure absolute biological safety.
            </p>
          </motion.div>
        </motion.div>

        {/* Bento Grid: Standards & Testing protocols */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 max-w-6xl mx-auto"
        >
          {/* Monograph Compliance narrative */}
          <motion.div variants={fadeUp} className="lg:col-span-7 bg-white/70 backdrop-blur-sm border border-[var(--color-ink-navy)]/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[var(--color-ink-navy)] mb-6 tracking-tight leading-tight">
              Monograph Specifications & Standards
            </h2>
            <div className="h-[2px] w-12 bg-[var(--color-ink-navy)] mb-8" />
            <div className="space-y-6 text-[var(--color-slate)] text-base md:text-lg leading-relaxed font-light">
              <p>
                Our manufacturing processes are aligned to satisfy international pharmacopeial monographs, including the <strong>United States Pharmacopeia (USP)</strong> and the <strong>European Pharmacopoeia (EP)</strong>.
              </p>
              <p>
                Each batch is traceably logged, documenting raw input parameters, processing conditions, and testing calibrations. This data is packaged directly into batch-specific Certificates of Analysis (COA) for total customer transparency.
              </p>
            </div>
          </motion.div>

          {/* Infrastructure testing controls */}
          <motion.div variants={fadeUp} className="lg:col-span-5 bg-[#0F0F25] border border-[var(--color-ink-navy)] rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3 mb-8">
              <Cpu className="w-5 h-5 text-emerald-400" />
              Operational Controls
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Distillation column temperative profiling controls</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Strict cleanroom containment air-filtering (HEPA filtration)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Oxygen-free nitrogen blanketing for all storage cylinders</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Quality Highlights component wrapper */}
        <div className="mb-32">
          <QualityHighlights />
        </div>

        {/* Premium CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0F0F25] rounded-[2.5rem] p-10 md:p-16 max-w-6xl mx-auto relative overflow-hidden shadow-2xl border border-[var(--color-ink-navy)] animate-none"
        >
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-tight tracking-tight">
                Request custom batch parameters
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Need details regarding physical validation profiles, specific heavy metal standards, or batch testing? Connect directly with our QC lead.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-[var(--color-ink-navy)] hover:text-blue-700 font-bold text-lg rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all group"
              >
                Inquire with QC Lead
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
