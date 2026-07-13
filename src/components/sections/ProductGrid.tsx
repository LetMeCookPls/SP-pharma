import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, COMPANY_DATA } from "@/lib/constants";

export default function ProductGrid() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-[var(--color-ink-navy)] mb-4">Our Products</h2>
          <p className="text-[var(--color-slate)] max-w-2xl mx-auto">
            High-purity nicotine derivatives manufactured to stringent quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((product, idx) => {
            const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(`Hi SP Pharmaceuticals, I'd like to enquire about: ${product}`)}`;
            
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 flex flex-col h-full group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle glow effect overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="w-12 h-12 bg-white/50 rounded-xl mb-6 flex items-center justify-center text-[var(--color-brand-blue)] group-hover:text-green-600 transition-colors shadow-sm relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--color-ink-navy)] mb-3 relative z-10">{product}</h3>
                <p className="text-[var(--color-slate)] text-sm mb-8 flex-grow relative z-10">
                  Pharmaceutical grade quality, manufactured under strict guidelines for global distribution.
                </p>
                <div className="flex items-center gap-3 mt-auto relative z-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[var(--color-ink-navy)] text-white text-sm font-medium rounded-lg text-center hover:bg-green-600 transition-colors"
                  >
                    Enquire
                  </a>
                  <a href="/contact" className="px-4 py-2.5 text-sm font-medium text-[var(--color-ink-navy)] hover:bg-white/60 rounded-lg transition-colors">
                    Form
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
