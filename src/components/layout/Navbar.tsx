"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY_DATA, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`;

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 glass">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt={`${COMPANY_DATA.name} Logo`} width={40} height={40} className="w-10 h-auto" />
          <span className="font-display font-bold text-lg text-[var(--color-ink-navy)] tracking-tight">
            {COMPANY_DATA.name}
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-[var(--color-brand-blue)] transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[var(--color-brand-blue)] text-white text-sm font-medium rounded-xl hover:bg-[var(--color-ink-navy)] transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 mt-2 p-6 rounded-2xl flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium">
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-4 px-5 py-3 bg-[var(--color-brand-blue)] text-white font-medium rounded-xl"
          >
            Enquire on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
