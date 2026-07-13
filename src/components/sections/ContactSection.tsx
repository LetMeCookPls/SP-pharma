"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, COMPANY_DATA } from "@/lib/constants";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Honeypot check
    if (data.bot_field) {
      setStatus("success"); // fake success for bots
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 relative z-10" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="glass rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            
            {/* Form Side */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-display font-bold text-[var(--color-ink-navy)] mb-2">Get in Touch</h2>
              <p className="text-[var(--color-slate)] mb-8 text-sm">
                Enquire about our products, pricing, or request documentation.
              </p>

              {status === "success" ? (
                <div className="glass-dark p-8 rounded-2xl text-center text-white">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3 className="text-xl font-bold font-display mb-2">Thank you!</h3>
                  <p className="text-white/70 text-sm">We&apos;ve received your enquiry. We aim to respond within [24 business hours].</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[var(--color-ink-navy)]">Full Name *</label>
                      <input required type="text" name="name" className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[var(--color-ink-navy)]">Company Name</label>
                      <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[var(--color-ink-navy)]">Email *</label>
                      <input required type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[var(--color-ink-navy)]">Phone / WhatsApp</label>
                      <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[var(--color-ink-navy)]">Area of Interest</label>
                    <select name="interest" className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors appearance-none">
                      <option value="">Select a product...</option>
                      {PRODUCT_CATEGORIES.map(p => <option key={p} value={p}>{p}</option>)}
                      <option value="Other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[var(--color-ink-navy)]">Message *</label>
                    <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-white/40 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)] transition-colors resize-none"></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p>Something went wrong. Please try again, or <a href={`mailto:${COMPANY_DATA.email}`} className="underline font-medium">email us directly</a>.</p>
                    </div>
                  )}

                  <button 
                    disabled={status === "loading"} 
                    className="w-full py-4 bg-[var(--color-brand-blue)] text-white font-medium rounded-xl hover:bg-[var(--color-ink-navy)] transition-colors disabled:opacity-70 flex justify-center items-center h-14"
                  >
                    {status === "loading" ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : "Send Enquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Map Side */}
            <motion.div 
              initial={{ filter: "grayscale(100%)", opacity: 0.7 }}
              whileInView={{ filter: "grayscale(0%)", opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-white/40 h-80 lg:h-auto min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps?q=KIADB+Export+Promotion+Industrial+Park+Ganjimata+Mangalore+Karnataka+574144&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
