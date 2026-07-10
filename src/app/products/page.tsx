import ProductGrid from "@/components/sections/ProductGrid";

export const metadata = {
  title: "Products | SP Pharmaceuticals",
  description: "Browse our range of high-purity nicotine and nicotine derivatives.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink-navy)] text-center mb-6">Our Products</h1>
      </div>
      <ProductGrid />
    </div>
  );
}
