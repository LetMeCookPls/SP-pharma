import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_DATA, NAV_LINKS, REGULATORY_NOTICE } from "@/lib/constants";
import CopyrightYear from "@/components/ui/CopyrightYear";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent(
    "Hi SP Pharmaceuticals, I'd like to enquire about your products.",
  )}`;

  return (
    <footer className="relative z-10 mt-20 overflow-hidden bg-[#0d1230] pt-16 text-white md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/15 blur-[130px]" />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl shadow-black/20 backdrop-blur-sm md:p-11">
          <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-4 h-28 w-28 rounded-full border border-emerald-300/20" />

          <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">Start a conversation</p>
              <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] text-white md:text-5xl">
                Built for exacting formulations and dependable supply.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1230]"
              >
                Enquire on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1230]"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_0.65fr_1fr] md:py-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d1230]">
              <Image src="/logo.png" alt={`${COMPANY_DATA.name} Logo`} width={56} height={56} className="h-auto w-12" />
              <span className="font-display text-xl font-bold tracking-[-0.03em]">{COMPANY_DATA.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Pharmaceutical-grade nicotine and nicotine derivatives manufactured with a focus on quality, consistency, and responsible supply.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-100">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Licensed business buyers only
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Explore</h3>
            <ul className="mt-5 space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white">
                    <span className="h-1 w-1 rounded-full bg-emerald-300/60 transition-transform group-hover:scale-150" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white">
                  <span className="h-1 w-1 rounded-full bg-emerald-300/60 transition-transform group-hover:scale-150" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Contact</h3>
            <address className="mt-5 space-y-4 not-italic text-sm text-white/65">
              <a href={`tel:${COMPANY_DATA.phone.replace(/\s/g, "")}`} className="group flex items-start gap-3 transition-colors hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{COMPANY_DATA.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_DATA.email}`} className="group flex items-start gap-3 break-all transition-colors hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{COMPANY_DATA.email}</span>
              </a>
              <div className="flex items-start gap-3 leading-6">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{COMPANY_DATA.address}</span>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 py-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-4xl text-xs leading-5 text-white/40">{REGULATORY_NOTICE}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45 lg:justify-end">
              <span>GSTIN: {COMPANY_DATA.gstin}</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>© <CopyrightYear /> {COMPANY_DATA.name}. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
