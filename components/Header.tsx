"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "@/data/site";

const links = [
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { scrollYProgress } = useScroll();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setPastHero(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ghost (transparent, light content) only over the dark home hero
  const ghost = isHome && !pastHero && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        ghost ? "bg-transparent border-transparent" : "bg-paper/92 border-border-hairline"
      } ${scrolled && !ghost ? "shadow-[0_10px_36px_-16px_rgba(22,33,27,0.3)]" : ""}`}
    >
      {ghost && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent pointer-events-none"
        />
      )}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`absolute bottom-0 left-0 right-0 h-[2px] origin-left ${ghost ? "bg-highlight" : "bg-brand"}`}
      />
      <div className="w-full pl-2 pr-2 md:pl-4 md:pr-4 h-[68px] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Smart Glass Ireland — home">
          <Image
            src="/images/logo.png"
            alt="Smart Glass Ireland Ltd"
            width={1024}
            height={422}
            className={`h-11 w-auto shrink-0 transition-all duration-300 ${ghost ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13.5px] whitespace-nowrap transition-colors ${
                  active
                    ? ghost
                      ? "text-white font-semibold border-b-2 border-highlight pb-0.5"
                      : "text-text-primary font-semibold border-b-2 border-brand pb-0.5"
                    : ghost
                      ? "text-white/70 hover:text-white"
                      : "text-text-muted hover:text-text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={BUSINESS.phoneUKHref}
            className={`hidden xl:flex items-center gap-1.5 font-mono text-[12px] transition-colors px-2 py-2 ${
              ghost ? "text-white hover:text-highlight" : "text-text-primary hover:text-brand"
            }`}
          >
            <Phone size={15} className={ghost ? "text-highlight" : "text-brand"} />
            <span>{BUSINESS.phoneUK}</span>
          </a>
          <Link
            href="/contact"
            className={`group relative overflow-hidden inline-flex items-center justify-center gap-1 text-[12px] font-semibold rounded-lg pl-4 pr-3 py-2.5 tracking-wide transition-all duration-300 ${
              ghost ? "bg-highlight text-ink hover:bg-white" : "bg-text-primary text-white shadow-sm hover:bg-brand"
            }`}
          >
            Free Consultation
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-[110%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[110%]"
            />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ${
              ghost ? "border-white/30 bg-white/10 text-white" : "border-border-hairline bg-surface-white text-text-primary"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-hairline bg-paper px-4 py-3 flex flex-col">
          {[{ href: "/", label: "Home" }, ...links].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2.5 text-[14px] border-b border-border-hairline last:border-0 ${
                pathname === l.href ? "text-text-primary font-semibold" : "text-text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-1 text-[13px] font-semibold rounded-lg bg-text-primary text-white px-4 py-3"
          >
            Free Consultation <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
