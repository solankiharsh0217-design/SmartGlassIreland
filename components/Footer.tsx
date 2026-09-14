import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-8 border-b border-white/10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="block h-12 w-fit shrink-0 overflow-hidden rounded-lg bg-white px-3">
              <Image src="/images/logo.png" alt="Smart Glass Ireland Ltd" width={1024} height={422} className="h-full w-auto" sizes="220px" />
            </span>
            <p className="text-[13px] leading-relaxed text-white/60 max-w-sm">
              {BUSINESS.name} provides premium smart glass solutions to residential, commercial,
              healthcare and architectural projects across Ireland and the United Kingdom.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="h-9 px-4 rounded-full bg-brand hover:bg-brand-bright transition-colors inline-flex items-center gap-2 text-[12px] font-semibold"
              >
                <MessageCircle size={14} /> WhatsApp us
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="h-9 px-4 rounded-full border border-white/15 hidden sm:inline-flex items-center gap-2 font-mono text-[12px] hover:bg-white hover:text-black transition-colors"
              >
                <Mail size={14} /> {BUSINESS.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-wider mb-1 text-white/90">
              Coverage
            </span>
            <div className="text-[13px] text-white/60 space-y-3">
              <div>
                <span className="font-medium text-white block">Ireland</span>
                Dublin base — nationwide installation
              </div>
              <div>
                <span className="font-medium text-white block">United Kingdom</span>
                Design, supply &amp; project support
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-wider mb-1 text-white/90">
              Explore
            </span>
            <div className="flex flex-col gap-2 text-[14px]">
              <Link href="/products" className="text-white/60 hover:text-white transition-colors">Products</Link>
              <Link href="/technology" className="text-white/60 hover:text-white transition-colors">PDLC Technology</Link>
              <Link href="/projects" className="text-white/60 hover:text-white transition-colors">Projects &amp; Sectors</Link>
              <Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-wider mb-1 text-white/90">
              Direct lines
            </span>
            <div className="flex flex-col gap-2 text-[14px]">
              <a href={BUSINESS.phoneUKHref} className="text-white/80 hover:text-white font-mono text-[12px] inline-flex items-center gap-1.5">
                <Phone size={13} /> {BUSINESS.phoneUK} (UK)
              </a>
              <a href={BUSINESS.phoneIEHref} className="text-white/80 hover:text-white font-mono text-[12px] inline-flex items-center gap-1.5">
                <Phone size={13} /> {BUSINESS.phoneIE} (IE)
              </a>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-emerald-300 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Replies within 24 hours
              </span>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-white/40">
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Supply</Link>
          </div>
          <div>© 2026 Smart Glass Ireland Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
