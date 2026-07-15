"use client";

import { motion, Variants } from "framer-motion";
import { COMPANY_DATA, COMPANY_STATS } from "@/lib/constants";
import { 
  ShieldCheck, 
  Globe, 
  Award, 
  MapPin, 
  FlaskConical, 
  Cpu,
  Sparkles,
  CheckCircle2,
  Building,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";

// Snappy transition presets for modern UI feel
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

const MILESTONES = [
  {
    year: "2017",
    title: "Foundation",
    description: "Established our initial manufacturing unit in Mangalore, Karnataka, specializing in high-grade nicotine extraction."
  },
  {
    year: "2019",
    title: "GMP Upgrade & Expansion",
    description: "Expanded extraction capacity and upgraded cleanroom facilities to meet global WHO-GMP specifications."
  },
  {
    year: "2022",
    title: "Global Export Reach",
    description: "Successfully exported nicotine salts and pure derivatives to leading formulators in Europe and the Americas."
  },
  {
    year: "Present",
    title: "Market Leader",
    description: "Serving 100+ active B2B clients globally with an annual capacity exceeding industry demands and zero compromise on purity."
  }
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`;

  return (
    <div className="relative min-h-screen py-24 md:py-36 bg-[#FAFBFD] text-[var(--color-ink-navy)] selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      
      {/* Dynamic Background Layout: Dotted grid + colorful ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-blue-500/10 via-indigo-500/8 to-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-10vw] w-[45vw] h-[45vw] rounded-full bg-blue-300/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10vw] w-[45vw] h-[45vw] rounded-full bg-emerald-300/5 blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-28 pt-12 md:pt-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-ink-navy)]/10 shadow-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-bold text-[var(--color-slate)] tracking-widest uppercase">Established 2017</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight mb-8 leading-[0.95] text-[var(--color-ink-navy)]">
            Absolute Purity. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">Global Scale.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[var(--color-slate)] font-light leading-relaxed max-w-2xl mx-auto">
            SP Pharmaceuticals supplies ultra-pure nicotine and nicotine derivatives from Mangalore, India to licensed formulators and manufacturers globally.
          </motion.p>
        </motion.div>

        {/* Modern Clean Stats Grid with Thin Dark Border Accent */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-36 max-w-6xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center mb-6 text-blue-600 border border-[var(--color-ink-navy)]/5 group-hover:scale-105 transition-transform duration-300">
              <Building className="w-6 h-6" />
            </div>
            <div className="text-5xl font-display font-extrabold text-[var(--color-ink-navy)] mb-2 tracking-tight">
              {COMPANY_STATS.years}+
            </div>
            <div className="text-[11px] font-bold text-[var(--color-slate)] uppercase tracking-wider">Years of Operations</div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-50/50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 border border-[var(--color-ink-navy)]/5 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-5xl font-display font-extrabold text-[var(--color-ink-navy)] mb-2 tracking-tight">
              {COMPANY_STATS.clients}
            </div>
            <div className="text-[11px] font-bold text-[var(--color-slate)] uppercase tracking-wider">B2B Clients Globally</div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-red-50/50 rounded-xl flex items-center justify-center mb-6 text-red-500 border border-[var(--color-ink-navy)]/5 group-hover:scale-105 transition-transform duration-300">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div className="text-5xl font-display font-extrabold text-[var(--color-ink-navy)] mb-2 tracking-tight">
              99.9%
            </div>
            <div className="text-[11px] font-bold text-[var(--color-slate)] uppercase tracking-wider">Standard USP/EP Purity</div>
          </motion.div>
        </motion.div>

        {/* Narrative & Infrastructure (Bento Style) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-36 max-w-6xl mx-auto"
        >
          {/* Main Narrative */}
          <motion.div variants={fadeUp} className="lg:col-span-7 bg-white/70 backdrop-blur-sm border border-[var(--color-ink-navy)]/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-[var(--color-ink-navy)] mb-6 tracking-tight leading-tight">
              Global Scale, Absolute Transparency
            </h2>
            <div className="h-[2px] w-12 bg-[var(--color-ink-navy)] mb-8" />
            <div className="space-y-6 text-[var(--color-slate)] text-base md:text-lg leading-relaxed font-light">
              <p>
                At SP Pharmaceuticals, our state-of-the-art facility located in the KIADB Export Promotion Industrial Park in Mangalore, Karnataka is built to meet the most demanding pharmaceutical specifications.
              </p>
              <p>
                We understand that purity, traceability, and logistics security are crucial to our B2B customers. From custom concentrations of Nicotine Salts to USP/BP/EP grade Pharmaceutical Nicotine, every batch we release is accompanied by strict quality control documents and third-party validation.
              </p>
            </div>
          </motion.div>

          {/* Highlights List */}
          <motion.div variants={fadeUp} className="lg:col-span-5 bg-[#0F0F25] border border-[var(--color-ink-navy)] rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3 mb-8">
              <MapPin className="w-5 h-5 text-blue-400" />
              Infrastructure
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Located in an official Export Promotion Zone (KIADB)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Next-generation stainless steel distillation columns</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Dedicated analytical laboratories (HPLC and GC-MS testing)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5.5 h-5.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-white/85 font-light text-sm md:text-base leading-snug">Environmentally controlled packaging under nitrogen</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Pillars / Values Grid */}
        <div className="mb-36 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[var(--color-ink-navy)] tracking-tight">
              Why Partners Trust Us
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Value 1 */}
            <motion.div variants={fadeUp} className="bg-white/70 rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/5 rounded-xl flex items-center justify-center mb-6 text-blue-600 border border-[var(--color-ink-navy)]/5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">Regulatory Rigor</h3>
              <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
                Complete compliance with national and international export mandates, featuring GMP controls and fully traceable documentation.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={fadeUp} className="bg-white/70 rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/5 rounded-xl flex items-center justify-center mb-6 text-emerald-600 border border-[var(--color-ink-navy)]/5">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">Custom Formulations</h3>
              <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
                We formulate custom ratios of nicotine compounds and salts to meet specific pharmaceutical, cosmetic, or therapeutic criteria.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={fadeUp} className="bg-white/70 rounded-3xl p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/5 rounded-xl flex items-center justify-center mb-6 text-amber-600 border border-[var(--color-ink-navy)]/5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-[var(--color-ink-navy)] mb-4 tracking-tight">Certified Purity</h3>
              <p className="text-[var(--color-slate)] leading-relaxed font-light text-sm">
                Guaranteed low impurities and verified levels of heavy metals, meeting strict specifications of USP/EP pharmacopoeias.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Clean Developer-Doc style Timeline */}
        <div className="mb-36 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[var(--color-ink-navy)] tracking-tight">
              Our Journey
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative border-l border-[var(--color-ink-navy)]/10 ml-4 md:ml-6 space-y-8"
          >
            {/* Dark Line Overlay */}
            <div className="absolute left-[-1px] top-2 bottom-2 w-[1px] bg-[var(--color-ink-navy)]/10" />

            {MILESTONES.map((milestone) => (
              <motion.div key={milestone.year} variants={fadeUp} className="relative pl-8 md:pl-12 group">
                
                {/* Thin dark node indicator */}
                <div className="absolute left-[-5px] top-2.5 w-2 h-2 rounded-full bg-white border-2 border-[var(--color-ink-navy)] transition-colors duration-300 group-hover:bg-[var(--color-ink-navy)]" />
                
                {/* Modern card container with thin black border */}
                <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300 max-w-3xl">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[var(--color-ink-navy)]/10 text-[var(--color-ink-navy)] text-xs font-bold mb-4 shadow-sm">
                    {milestone.year}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[var(--color-ink-navy)] mb-3 tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--color-slate)] leading-relaxed font-light text-base md:text-lg">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Premium CTA Banner with Clean Dark Border */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0F0F25] rounded-[2.5rem] p-10 md:p-16 max-w-6xl mx-auto relative overflow-hidden shadow-2xl border border-[var(--color-ink-navy)]"
        >
          {/* Subtle decoration elements */}
          <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-50%] left-[-10%] w-[50%] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-tight tracking-tight">
                Ready to sample our high-purity nicotine?
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed">
                Connect with our technical and compliance team to review custom concentrations, request certification documents, or schedule a batch order.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-blue-50 text-[var(--color-ink-navy)] hover:text-blue-700 font-bold text-lg rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all group"
              >
                Request Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-lg rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all group"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
