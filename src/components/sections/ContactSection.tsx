"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, COMPANY_DATA } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get("bot_field")) {
      setStatus("success"); // fake success for bots
      return;
    }

    setSubmittedName((formData.get("name") as string) || "");
    setSubmittedEmail((formData.get("email") as string) || "");

    formData.append("access_key", "63a392ba-9bfb-4b4c-9909-058436283b32");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // The 'q' parameter with the exact coordinates provided by the user.
  const mapUrl = `https://maps.google.com/maps?q=12°58'45.3"N 74°57'25.3"E&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--color-brand-blue)] font-bold tracking-wider uppercase text-sm mb-3 block">Reach Out</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--color-ink-navy)] mb-6">
              Get in Touch
            </h2>
            <p className="text-[var(--color-slate)] max-w-2xl mx-auto text-lg md:text-xl">
              We&apos;d love to hear from you. Enquire about our products, request documentation, or ask about our manufacturing processes.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-white/40"
          >
            <h3 className="text-2xl font-display font-bold text-[var(--color-ink-navy)] mb-8">Send us a Message</h3>
            
            {status === "success" ? (
              <div className="p-10 rounded-3xl text-center bg-green-50 border border-green-100">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-2xl font-bold font-display mb-3 text-[var(--color-ink-navy)]">Thank you so much, {submittedName}!</h3>
                <p className="text-[var(--color-slate)] text-lg mb-6">
                  We&apos;ve received your message and will contact you at <strong>{submittedEmail}</strong> within 24 hours.
                </p>
                <div className="pt-6 border-t border-green-200">
                  <p className="text-sm font-medium text-green-800 mb-2">If you&apos;re in a hurry, feel free to reach out to us directly via:</p>
                  <p className="text-base font-bold text-[var(--color-ink-navy)]">{COMPANY_DATA.email}</p>
                  <p className="text-base font-bold text-[var(--color-ink-navy)]">{COMPANY_DATA.phone}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Full Name *</label>
                    <input required type="text" name="name" className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Company Name</label>
                    <input type="text" name="company" className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm" placeholder="Your Company Ltd." />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Email Address *</label>
                    <input required type="email" name="email" className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Phone / WhatsApp</label>
                    <input type="tel" name="phone" className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm" placeholder="+91 000 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Area of Interest</label>
                  <select name="interest" className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm appearance-none cursor-pointer">
                    <option value="">Select a product or topic...</option>
                    {PRODUCT_CATEGORIES.map(p => <option key={p} value={p}>{p}</option>)}
                    <option value="Other">Other / General Enquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[var(--color-ink-navy)] ml-1">Message *</label>
                  <textarea required name="message" rows={5} className="w-full px-5 py-4 rounded-2xl border border-white/50 bg-white/60 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--color-brand-blue)]/20 transition-all shadow-sm resize-none" placeholder="How can we help you?"></textarea>
                </div>

                {status === "error" && (
                  <div className="p-6 bg-red-50 text-red-600 rounded-2xl border border-red-100 flex flex-col items-center text-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <p className="font-bold text-lg">We couldn&apos;t send your message, {submittedName || "there"}.</p>
                    <p className="text-sm">Please try again, or if you&apos;re in a hurry, feel free to reach out to us directly via:</p>
                    <div className="mt-2">
                      <p className="font-bold text-red-700">{COMPANY_DATA.email}</p>
                      <p className="font-bold text-red-700">{COMPANY_DATA.phone}</p>
                    </div>
                  </div>
                )}

                <button 
                  disabled={status === "loading"} 
                  className="w-full py-4 px-8 bg-gradient-to-r from-[var(--color-brand-blue)] to-blue-700 text-white text-lg font-bold rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-70 flex justify-center items-center gap-3 group active:scale-95"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-[2rem] shadow-lg border border-white/50"
            >
              <h3 className="text-xl font-display font-bold text-[var(--color-ink-navy)] mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-[var(--color-brand-blue)] flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink-navy)] text-sm uppercase tracking-wider mb-1">Our Location</h4>
                    <p className="text-[var(--color-slate)] text-sm leading-relaxed">{COMPANY_DATA.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-[var(--color-brand-blue)] flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink-navy)] text-sm uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-[var(--color-slate)] text-sm">{COMPANY_DATA.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-[var(--color-brand-blue)] flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink-navy)] text-sm uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-[var(--color-slate)] text-sm break-all">{COMPANY_DATA.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-[var(--color-brand-blue)] flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink-navy)] text-sm uppercase tracking-wider mb-1">Business Hours</h4>
                    <p className="text-[var(--color-slate)] text-sm">Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-4 border-white h-72 lg:h-[360px] relative group"
            >
              <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
