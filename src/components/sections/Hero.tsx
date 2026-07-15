"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, Check, FlaskConical, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "@/lib/constants";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(
    "Hi SP Pharmaceuticals, I'd like to enquire about your products.",
  )}`;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: easeOut },
  });

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#101b24] pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/bg-image.png"
          alt=""
          fill
          sizes="(max-width: 767px) 0vw, 100vw"
          className="hidden object-cover object-[58%_center] md:block"
          priority
        />
        <Image
          src="/bg-image-mob.png"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 0vw"
          className="object-cover object-center md:hidden"
          priority
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,17,35,0.96)_0%,rgba(10,25,37,0.87)_36%,rgba(10,25,37,0.52)_61%,rgba(10,25,37,0.24)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,17,35,0.75)_0%,transparent_42%,rgba(8,17,35,0.12)_100%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />

      <div className="container relative mx-auto w-full px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            {...reveal(0)}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 shadow-lg shadow-black/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>
            Nicotine derivatives for licensed buyers
          </motion.div>

          <motion.h1
            {...reveal(0.08)}
            className="max-w-4xl font-display text-[2.75rem] font-bold leading-[0.97] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Purity, prepared
            <span className="block bg-gradient-to-r from-emerald-200 via-emerald-300 to-sky-200 bg-clip-text text-transparent">for what&apos;s next.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 md:text-xl"
          >
            {COMPANY_DATA.name} supplies high-purity nicotine and nicotine derivatives to formulators and manufacturers who need reliable, consistent inputs at every scale.
          </motion.p>

          <motion.div {...reveal(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[var(--color-ink-navy)] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-100 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101b24]"
            >
              Explore our products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101b24]"
            >
              Talk to our team
            </a>
          </motion.div>

          <motion.div {...reveal(0.34)} className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
            {[
              "High-purity nicotine inputs",
              "Flexible pack sizes",
              "Global B2B enquiries",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full border border-emerald-300/30 bg-emerald-300/10">
                  <Check className="h-3 w-3 text-emerald-200" />
                </span>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.38, ease: easeOut }}
          className="relative mt-12 max-w-xl overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0e1b2bcc] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-6 xl:absolute xl:bottom-0 xl:right-8 xl:mt-0 xl:w-[25rem]"
        >
          <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full border border-emerald-200/15" />
          <div className="relative flex items-start justify-between gap-5">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                <Sparkles className="h-3.5 w-3.5" />
                Formulation essentials
              </div>
              <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">Made for dependable supply.</h2>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10">
              <FlaskConical className="h-5 w-5 text-emerald-200" />
            </div>
          </div>
          <div className="relative mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <div className="rounded-xl bg-white/[0.06] p-3.5">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              <p className="mt-3 text-sm font-semibold text-white">Quality-led</p>
              <p className="mt-1 text-xs leading-5 text-white/55">Careful process controls</p>
            </div>
            <div className="rounded-xl bg-white/[0.06] p-3.5">
              <Globe2 className="h-4 w-4 text-sky-200" />
              <p className="mt-3 text-sm font-semibold text-white">B2B focused</p>
              <p className="mt-1 text-xs leading-5 text-white/55">For global formulators</p>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white md:inline-flex"
      >
        Scroll to explore
        <motion.span animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
