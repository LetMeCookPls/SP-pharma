import { CERTIFICATIONS } from "@/lib/constants";

export default function QualityHighlights() {
  return (
    <section className="py-20 relative z-10 bg-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-[var(--color-ink-navy)] mb-4">Quality & Compliance</h2>
          <p className="text-[var(--color-slate)]">
            Our commitment to safety and purity is reflected in our rigorous manufacturing standards and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="glass p-8 md:p-10">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-signal-red)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Certifications
            </h3>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-center gap-3 font-mono text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-blue)]" />
                  {cert}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[var(--color-ink-navy)]/10">
              <a href="/quality" className="text-[var(--color-brand-blue)] font-medium hover:underline inline-flex items-center gap-2 text-sm">
                View all compliance details →
              </a>
            </div>
          </div>

          <div className="glass p-8 md:p-10">
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-blue)]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Documentation
            </h3>
            <p className="text-[var(--color-slate)] text-sm mb-6 leading-relaxed">
              Safety Data Sheets (SDS) and Certificates of Analysis (COA) are available for all products upon request.
            </p>
            <a href="/contact" className="inline-flex py-2 px-4 bg-white/50 rounded-lg text-sm font-medium hover:bg-white text-[var(--color-ink-navy)] transition-colors border border-white">
              Request Documents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
