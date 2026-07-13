import Link from "next/link";
import Image from "next/image";
import { COMPANY_DATA, NAV_LINKS, REGULATORY_NOTICE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--color-ink-navy)] text-[var(--color-cloud)] pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="glass-dark rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt={`${COMPANY_DATA.name} Logo`} width={48} height={48} className="w-12 h-auto" />
                <span className="font-display font-bold text-xl">{COMPANY_DATA.name}</span>
              </div>
              <p className="text-white/70 max-w-xs">
                Pharmaceutical-grade nicotine and nicotine derivatives manufactured for global standards.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-6 text-lg">Contact & Info</h4>
              <address className="not-italic text-white/70 space-y-3 font-mono text-sm">
                <p>{COMPANY_DATA.address}</p>
                <p>Phone: {COMPANY_DATA.phone}</p>
                <p>Email: <a href={`mailto:${COMPANY_DATA.email}`} className="hover:text-white">{COMPANY_DATA.email}</a></p>
                <p>GSTIN: {COMPANY_DATA.gstin}</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
          <p className="text-white/50 text-sm max-w-3xl mb-4 leading-relaxed">
            {REGULATORY_NOTICE}
          </p>
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
