import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, IBM_Plex_Mono, Barlow, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LiquidGlassFilter from "@/components/filters/LiquidGlassFilter";
import { COMPANY_DATA } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${COMPANY_DATA.name} | Pharmaceutical Grade Nicotine`,
  description: "SP Pharmaceuticals supplies nicotine and nicotine derivatives to licensed formulators and manufacturers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} ${barlow.variable} ${instrumentSerif.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <LiquidGlassFilter />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
