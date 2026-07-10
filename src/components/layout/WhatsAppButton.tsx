"use client";
import { COMPANY_DATA } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp}?text=${encodeURIComponent("Hi SP Pharmaceuticals, I'd like to enquire about your products.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 bg-[var(--color-brand-blue)] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
