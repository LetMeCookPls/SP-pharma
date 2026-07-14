import { COMPANY_STATS } from "@/lib/constants";

export const metadata = {
  title: "About Us | SP Pharmaceuticals",
  description: "Learn about SP Pharmaceuticals, our state-of-the-art facility in Mangalore, and our commitment to quality.",
};

export default function AboutPage() {
  return (
    <div className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink-navy)] mb-6">Our Story</h1>
        
        <div className="glass p-8 md:p-12 mb-12">
          <div className="prose prose-lg text-[var(--color-slate)] max-w-none">
            <p className="mb-6">
              SP Pharmaceuticals is a specialized manufacturer of high-purity nicotine and nicotine derivatives. Based in the KIADB Export Promotion Industrial Park in Mangalore, Karnataka, our state-of-the-art facility is designed to meet stringent global pharmaceutical standards.
            </p>
            <p className="mb-6">
              Our mission is to provide safe, consistent, and traceable nicotine products to licensed formulators and institutional buyers worldwide. From custom concentrations of Nicotine Salts to USP/BP/EP grade Pharmaceutical Nicotine, every batch undergoes rigorous quality control and certification.
            </p>
            <h3 className="text-2xl font-display font-bold text-[var(--color-ink-navy)] mt-10 mb-4">Our Infrastructure</h3>
            <p className="mb-6">
              Located in a dedicated export promotion zone, our manufacturing infrastructure allows us to efficiently serve international markets while maintaining strict compliance with local and international regulatory frameworks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-dark p-8 text-center text-white">
            <div className="text-4xl font-display font-bold text-[var(--color-brand-blue)] mb-2">
              {COMPANY_STATS.years}+
            </div>
            <div className="text-sm font-medium text-white/70">Years in Operation</div>
          </div>
          <div className="glass-dark p-8 text-center text-white">
            <div className="text-4xl font-display font-bold text-[var(--color-brand-blue)] mb-2">
              {COMPANY_STATS.clients}
            </div>
            <div className="text-sm font-medium text-white/70">Satisfied B2B Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
