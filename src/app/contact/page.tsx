import ContactSection from "@/components/sections/ContactSection";
import { COMPANY_DATA } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | SP Pharmaceuticals",
  description: "Get in touch with SP Pharmaceuticals for enquiries, documentation requests, and support.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink-navy)] mb-6">Contact Us</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-mono text-[var(--color-slate)] mb-12">
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
            [Business Hours Placeholder]
          </span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
            Email: {COMPANY_DATA.email}
          </span>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
