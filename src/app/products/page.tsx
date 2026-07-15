import ProductGrid from "@/components/sections/ProductGrid";

export const metadata = {
  title: "Products | SP Pharmaceuticals",
  description: "Browse our range of high-purity nicotine and nicotine derivatives.",
};

export default function ProductsPage() {
  return (
    <div className="relative z-10 overflow-hidden pb-12 pt-28 md:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-[-20rem] -z-10 h-[38rem] w-[58rem] -translate-x-1/2 rounded-full bg-blue-100/55 blur-[130px]" />
      <div className="container mx-auto mb-3 px-4 md:mb-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">SP Pharmaceuticals</p>
          <h1 className="font-display text-5xl font-bold tracking-[-0.06em] text-[var(--color-ink-navy)] md:text-6xl lg:text-7xl">
            Products crafted for <span className="text-emerald-700">precision.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-slate)] md:text-lg">
            Reliable nicotine solutions, designed with the purity, traceability, and consistency your formulation demands.
          </p>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
}
