"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { COMPANY_DATA } from "@/lib/constants";

const PRODUCTS = [
  {
    name: "Nicotine Alkaloids",
    concentration: "95%",
    grade: "Industrial intermediate grade",
    packSizes: "100 g–1 kg · 5 kg · 10 kg–200 kg",
    image: "/Nicotine Alkaloid.png",
    description:
      "High-purity liquid nicotine extracted from premium tobacco leaves for advanced formulations.",
    accent: "from-[#dceadd] via-[#eef5ee] to-[#f8faf8]",
    accentDark: "#315f47",
  },
  {
    name: "Nicotine Sulphate",
    concentration: "40%",
    grade: "Agricultural grade",
    packSizes: "100 g–1 kg · 5 kg · 10 kg–200 kg",
    image: "/Nicotine Sulphate.png",
    description:
      "A stable nicotine salt solution for agricultural and specialized industrial applications.",
    accent: "from-[#dbeafa] via-[#edf4fc] to-[#f9fbfe]",
    accentDark: "#315d8c",
  },
  {
    name: "Pure Nicotine",
    concentration: "99.99%",
    grade: "Industrial intermediate grade",
    packSizes: "100 g–1 kg · 5 kg · 10 kg–200 kg",
    image: "/Nicotine.png",
    description:
      "Ultra-pure pharmaceutical-grade nicotine developed for medicinal and precision manufacturing.",
    accent: "from-[#f2e5bd] via-[#fbf5e5] to-[#fffdf8]",
    accentDark: "#886b2d",
  },
];

const productNumber = (index: number) => String(index + 1).padStart(2, "0");

export default function ProductGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const product = PRODUCTS[currentIndex];

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % PRODUCTS.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  const selectProduct = (index: number) => setCurrentIndex(index);
  const previousProduct = () =>
    setCurrentIndex((index) => (index - 1 + PRODUCTS.length) % PRODUCTS.length);
  const nextProduct = () =>
    setCurrentIndex((index) => (index + 1) % PRODUCTS.length);

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(
    `Hi SP Pharmaceuticals, I'd like to enquire about: ${product.name} (${product.concentration})`,
  )}`;

  return (
    <section className="relative z-10 overflow-hidden py-10 pb-24 md:py-16 md:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Product portfolio
          </motion.div>
          <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-[var(--color-ink-navy)] md:text-5xl lg:text-6xl">
            Precision in every
            <span className="text-emerald-700"> formulation.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-slate)] md:text-lg">
            Explore our high-purity nicotine derivatives, carefully produced for dependable performance at scale.
          </p>
        </div>

        <div
          className="mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {PRODUCTS.map((item, index) => {
              const isActive = index === currentIndex;

              return (
                <motion.button
                  key={item.name}
                  type="button"
                  onClick={() => selectProduct(index)}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className={`group relative overflow-hidden rounded-[1.35rem] border p-4 text-left transition-[border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-[var(--color-ink-navy)] bg-[var(--color-ink-navy)] text-white shadow-[0_18px_36px_rgba(16,16,46,0.18)]"
                      : "border-[var(--color-ink-navy)]/10 bg-white/70 text-[var(--color-ink-navy)] shadow-sm hover:border-emerald-700/30 hover:shadow-lg"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className={`absolute inset-x-0 bottom-0 h-1 ${isActive ? "bg-emerald-400" : "bg-transparent"}`} />
                  <div className="flex items-center gap-4">
                    <div className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${item.accent}`}>
                      <Image src={item.image} alt="" fill sizes="64px" className="object-contain p-1.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`mb-1 font-mono text-[10px] font-medium tracking-[0.16em] ${isActive ? "text-emerald-300" : "text-emerald-700"}`}>
                        {productNumber(index)} / 0{PRODUCTS.length}
                      </div>
                      <div className="truncate font-display text-lg font-bold tracking-[-0.025em]">{item.name}</div>
                      <div className={`mt-0.5 text-xs ${isActive ? "text-white/65" : "text-[var(--color-slate)]/75"}`}>{item.concentration} concentration</div>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isActive ? "text-emerald-300" : "text-[var(--color-ink-navy)]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="relative mt-5 overflow-hidden rounded-[2rem] border border-[var(--color-ink-navy)]/10 bg-white shadow-[0_24px_60px_rgba(16,16,46,0.1)] md:mt-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid min-h-[33rem] md:grid-cols-[0.94fr_1.06fr] md:min-h-[35rem]"
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${product.accent} p-7 md:p-12`}>
                  <div className="absolute left-7 top-7 rounded-full border border-black/5 bg-white/60 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--color-ink-navy)]/65 backdrop-blur-sm md:left-10 md:top-10">
                    {productNumber(currentIndex)} — Featured product
                  </div>
                  <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/65 blur-2xl" />
                  <div className="absolute -left-20 bottom-10 h-44 w-44 rounded-full border-[18px] border-white/35" />
                  <motion.div
                    initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.92, rotate: shouldReduceMotion ? 0 : -4 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto mt-14 h-72 max-w-sm md:mt-12 md:h-[25rem]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 80vw, 500px"
                      className="object-contain drop-shadow-[0_24px_18px_rgba(16,16,46,0.18)]"
                      priority={currentIndex === 0}
                    />
                  </motion.div>
                  <div className="absolute bottom-7 left-7 flex items-center gap-2 text-xs font-semibold text-[var(--color-ink-navy)]/65 md:bottom-10 md:left-10">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accentDark }} />
                    Carefully formulated for consistency
                  </div>
                </div>

                <div className="flex flex-col p-7 md:p-12">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
                      <ShieldCheck className="h-4 w-4" />
                      {product.concentration} purity
                    </div>
                    <span className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--color-slate)]/55">
                      {productNumber(currentIndex)} / 0{PRODUCTS.length}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-md font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-[var(--color-ink-navy)] md:text-5xl">
                    {product.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-slate)] md:text-lg">
                    {product.description}
                  </p>

                  <div className="my-7 grid gap-3 border-y border-[var(--color-ink-navy)]/10 py-5 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-slate)]/55">Grade</div>
                        <div className="mt-1 text-sm font-semibold capitalize text-[var(--color-ink-navy)]">{product.grade}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Package className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-slate)]/55">Pack sizes</div>
                        <div className="mt-1 text-sm font-semibold leading-5 text-[var(--color-ink-navy)]">{product.packSizes}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-ink-navy)] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                    >
                      Enquire on WhatsApp
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl border border-[var(--color-ink-navy)]/15 px-5 py-3.5 text-sm font-bold text-[var(--color-ink-navy)] transition duration-300 hover:border-[var(--color-ink-navy)] hover:bg-[var(--color-ink-navy)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                    >
                      Request a quote
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 right-5 z-10 flex gap-2 md:bottom-7 md:right-7">
              <button
                type="button"
                onClick={previousProduct}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink-navy)]/10 bg-white/85 text-[var(--color-ink-navy)] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-[var(--color-ink-navy)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                aria-label="Show previous product"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={nextProduct}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink-navy)]/10 bg-white/85 text-[var(--color-ink-navy)] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-[var(--color-ink-navy)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                aria-label="Show next product"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
