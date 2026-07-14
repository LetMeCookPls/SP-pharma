"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_DATA, NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const isHome = pathname === '/';
  const isDarkHeader = isHome && !scrolled;
  
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div className={`mx-4 md:mx-8 transition-all duration-300 border ${
        scrolled 
          ? "glass shadow-lg border-white/20 rounded-2xl" 
          : "bg-transparent border-transparent rounded-2xl shadow-none"
      }`}>
        <nav className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative overflow-hidden transition-transform group-hover:scale-105">
              <Image src="/logo.png" alt="SP Pharmaceuticals Logo" width={56} height={56} className="w-12 md:w-14 h-auto object-contain" priority />
            </div>
            <span className={`font-display font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
              isDarkHeader ? "text-white drop-shadow-md" : "text-[var(--color-brand-blue)]"
            }`}>
              SP Pharmaceuticals
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-sm font-semibold transition-all relative px-1 ${
                    isActive ? "text-[var(--color-brand-blue)]" : "text-[var(--color-ink-navy)] hover:text-[var(--color-brand-blue)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-indicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[var(--color-brand-blue)] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-50 p-2.5 bg-white/60 backdrop-blur-md rounded-xl border border-white/50 text-[var(--color-ink-navy)] shadow-sm" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[var(--color-ink-navy)]/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[80px] left-4 right-4 z-50 md:hidden"
            >
              <div className="glass p-6 rounded-3xl flex flex-col gap-3 shadow-2xl border border-white/60">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={`p-4 rounded-2xl text-lg font-semibold transition-colors flex items-center ${
                        isActive 
                          ? "bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]" 
                          : "text-[var(--color-ink-navy)] hover:bg-white/60"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-ink-navy)]/10 to-transparent my-3" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center mt-2 px-6 py-4 bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-700 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
