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
              <div key={idx} className="glass p-8 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/50 rounded-xl mb-6 flex items-center justify-center text-[var(--color-brand-blue)] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--color-ink-navy)] mb-3">{product}</h3>
                <p className="text-[var(--color-slate)] text-sm mb-8 flex-grow">
                  Pharmaceutical grade quality, manufactured under strict guidelines for global distribution.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-[var(--color-ink-navy)] text-white text-sm font-medium rounded-lg text-center hover:bg-[var(--color-brand-blue)] transition-colors"
                  >
                    Enquire
                  </a>
                  <a href="/contact" className="px-4 py-2.5 text-sm font-medium text-[var(--color-ink-navy)] hover:bg-white/40 rounded-lg transition-colors">
                    Form
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
