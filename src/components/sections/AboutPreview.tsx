import { motion } from "framer-motion";
import { COMPANY_STATS } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-[var(--color-ink-navy)] mb-4">About Us</h2>
              <p className="text-[var(--color-slate)] mb-6 text-lg leading-relaxed">
                Located in the KIADB Export Promotion Industrial Park, we are dedicated to manufacturing high-purity nicotine products for the pharmaceutical and industrial sectors globally.
              </p>
              <a href="/about" className="text-[var(--color-brand-blue)] font-medium hover:underline inline-flex items-center gap-2">
                Read our full story →
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass p-6 text-center hover:bg-white/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300"
              >
                <div className="text-3xl font-display font-bold text-[var(--color-signal-red)] mb-2 group-hover:text-green-600 transition-colors">
                  {COMPANY_STATS.years}+
                </div>
                <div className="text-sm font-medium text-[var(--color-slate)]">Years in Operation</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="glass p-6 text-center hover:bg-white/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
              >
                <div className="text-3xl font-display font-bold text-[var(--color-brand-blue)] mb-2 group-hover:text-green-600 transition-colors">
                  {COMPANY_STATS.clients}
                </div>
                <div className="text-sm font-medium text-[var(--color-slate)]">Satisfied B2B Clients</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
