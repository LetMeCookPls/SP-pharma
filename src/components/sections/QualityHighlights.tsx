"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle2 } from "lucide-react";

export default function QualityHighlights() {
  return (
    <section className="py-20 relative z-10 bg-white/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-[var(--color-ink-navy)] mb-4">Quality & Compliance</h2>
          <p className="text-[var(--color-slate)]">
            Our commitment to safety and purity is verified through advanced analytical equipment and strict operational protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Quality Protocols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3 text-[var(--color-ink-navy)]">
                <Shield className="w-5.5 h-5.5 text-blue-600" />
                Analytical Controls
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-ink-navy)] block">HPLC Concentration Assay</span>
                    <span className="text-xs text-[var(--color-slate)] font-light leading-relaxed">Verifying exact nicotine content to match client specifications.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-ink-navy)] block">GC-MS Volatiles Profiling</span>
                    <span className="text-xs text-[var(--color-slate)] font-light leading-relaxed">Assuring organic solvent residues are well below pharmacopeial limits.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-ink-navy)] block">Nitrogen-Purged Packaging</span>
                    <span className="text-xs text-[var(--color-slate)] font-light leading-relaxed">Eliminating atmospheric oxygen during filling to prevent product oxidation.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[var(--color-ink-navy)]/10">
              <a href="/quality" className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2 text-sm">
                Explore our full QC process →
              </a>
            </div>
          </motion.div>

          {/* Documentation Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[var(--color-ink-navy)]/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-[var(--color-ink-navy)]/30 hover:bg-white transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3 text-[var(--color-ink-navy)]">
                <FileText className="w-5.5 h-5.5 text-emerald-600" />
                Batch Documentation
              </h3>
              <p className="text-[var(--color-slate)] text-sm mb-6 leading-relaxed font-light">
                SP Pharmaceuticals values transparency. We supply detailed, batch-specific test results and records to licensed buyers.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-xs text-[var(--color-slate)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-navy)]/30" />
                  Certificate of Analysis (COA) for every shipment
                </li>
                <li className="flex items-center gap-3 text-xs text-[var(--color-slate)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-navy)]/30" />
                  Complete Safety Data Sheet (SDS) documentation
                </li>
                <li className="flex items-center gap-3 text-xs text-[var(--color-slate)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-ink-navy)]/30" />
                  Full batch raw-material tracking records
                </li>
              </ul>
            </div>
            
            <div>
              <a href="/contact" className="inline-flex py-3 px-6 bg-[var(--color-ink-navy)] text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors text-center shadow-sm">
                Request Documents
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
