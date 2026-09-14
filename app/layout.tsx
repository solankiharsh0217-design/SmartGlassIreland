import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Smart Glass Ireland — Switchable Privacy Glass & Transparent LED Displays",
  description:
    "Smart Glass Ireland Ltd provides premium smart glass solutions to residential, commercial, healthcare and architectural projects across Ireland and the United Kingdom.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-text-primary font-sans">
        <Providers>
          <Header />
          <main className="flex-1 w-full pt-[68px]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
