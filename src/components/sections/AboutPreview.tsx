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
              <div className="glass p-6 text-center">
                <div className="text-3xl font-display font-bold text-[var(--color-signal-red)] mb-2">
                  {COMPANY_STATS.years.split(" ")[0]}
                </div>
                <div className="text-sm font-medium text-[var(--color-slate)]">Years in Operation</div>
              </div>
              <div className="glass p-6 text-center">
                <div className="text-3xl font-display font-bold text-[var(--color-brand-blue)] mb-2">
                  {COMPANY_STATS.countries.split(" ")[0]}
                </div>
                <div className="text-sm font-medium text-[var(--color-slate)]">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
