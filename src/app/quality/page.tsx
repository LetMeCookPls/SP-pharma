import QualityHighlights from "@/components/sections/QualityHighlights";

export const metadata = {
  title: "Quality & Compliance | SP Pharmaceuticals",
  description: "Review our certifications, manufacturing standards, and compliance documentation.",
};

export default function QualityPage() {
  return (
    <div className="pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink-navy)] mb-6">Quality & Compliance</h1>
        <p className="text-[var(--color-slate)] max-w-2xl mx-auto text-lg">
          We adhere to the highest international standards of manufacturing to ensure uncompromised purity and safety.
        </p>
      </div>
      <QualityHighlights />
    </div>
  );
}
