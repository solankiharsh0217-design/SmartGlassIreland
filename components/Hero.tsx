"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import CountUp from "./CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS: { label: string; value?: number; suffix?: string; display?: string }[] = [
  { label: "IDLE TRANSPARENCY", value: 90, suffix: "%+" },
  { label: "LED LIFETIME", value: 100000, suffix: " h" },
  { label: "PRODUCT LINES", value: 3, suffix: "" },
  { label: "COVERAGE", display: "IE + UK" },
];

function MaskedLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <>
      {/* desktop / tablet: full-viewport immersive editorial */}
      <div className="breakout hidden md:block">
        <section
          ref={sectionRef}
          className="relative flex flex-col min-h-svh bg-ink text-white overflow-hidden -mt-[68px]"
        >
          <motion.div className="absolute inset-0" style={{ y: imgY }}>
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: EASE }}
            >
              <Image
                src="/images/hero-restaurant.jpg"
                alt="High-rise restaurant wrapped in full-height architectural glazing"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/40 to-black/5" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center pt-[calc(68px+3.5rem)] pb-14 md:pt-[calc(68px+5rem)] md:pb-20">
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold tracking-[-0.03em]">
              <MaskedLine delay={0.15}>Privacy at the</MaskedLine>
              <MaskedLine delay={0.27}>
                <span className="italic font-light text-highlight">flick of a switch.</span>
              </MaskedLine>
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-[15px] md:text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            >
              Premium smart glass for homes, offices, clinics and facades — instant privacy,
              sunlight-visible displays and architectural mesh, installed across Ireland and
              the UK.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.58, ease: EASE }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-black text-[13px] font-semibold px-6 py-3.5 hover:bg-highlight transition-colors"
              >
                Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur text-[13px] font-semibold px-6 py-3.5 hover:bg-white/15 transition-colors"
              >
                <Play size={16} /> Explore Products
              </Link>
              <a
                href="#demo"
                className="font-mono text-[11px] text-white/60 hover:text-white underline underline-offset-4 transition-colors"
              >
                ↓ Try the live PDLC demo
              </a>
            </motion.div>
          </div>

          <div className="relative border-t border-white/15 bg-black/45 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-white/15">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="py-4 md:py-5 md:px-7 md:first:pl-0"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 + i * 0.1, ease: EASE }}
                >
                  <div className="font-mono text-[10px] tracking-[0.16em] text-white/55">
                    {s.label}
                  </div>
                  {s.display ? (
                    <div className="text-[24px] md:text-[28px] font-semibold tracking-tight mt-1">
                      {s.display}
                    </div>
                  ) : (
                    <CountUp
                      to={s.value ?? 0}
                      suffix={s.suffix ?? ""}
                      className="block text-[24px] md:text-[28px] font-semibold tracking-tight mt-1 tabular-nums"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* mobile: dark immersive stack */}
      <div className="breakout md:hidden">
        <section className="relative bg-ink text-white overflow-hidden -mt-[68px]">
          <div className="relative h-[52svh] min-h-[400px]">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
            <Image
              src="/images/hero-restaurant.jpg"
              alt="High-rise restaurant wrapped in full-height architectural glazing"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-ink" />
            <span className="absolute top-[84px] left-4 px-2.5 py-1 rounded-lg bg-black/55 backdrop-blur text-white font-mono text-[10px]">
              ARCHITECTURAL GLAZING · REAL INSTALLATION
            </span>
          </div>

          <div className="relative px-6 -mt-32 pb-8">
            <motion.h1
              className="text-[46px] leading-[0.98] font-semibold tracking-[-0.03em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            >
              Privacy at the
              <br />
              <span className="italic font-light text-highlight">flick of a switch.</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-[15px] leading-relaxed text-white/75"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            >
              Premium smart glass for homes, offices, clinics and facades across Ireland and
              the UK.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col gap-2.5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-lg bg-white text-black text-[15px] font-semibold px-6 py-4 active:bg-highlight"
              >
                Free Consultation <ArrowRight size={17} />
              </Link>
              <Link
                href="/products"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/5 backdrop-blur text-[15px] font-semibold px-6 py-4 active:bg-white/15"
              >
                <Play size={16} /> Explore Products
              </Link>
            </motion.div>
          </div>

          <div className="px-6 pb-10">
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="px-4 py-4 border-white/10 odd:border-r [&:nth-child(-n+2)]:border-b"
                >
                  <div className="font-mono text-[9px] tracking-[0.14em] text-white/55">
                    {s.label}
                  </div>
                  {s.display ? (
                    <div className="text-[22px] font-semibold tracking-tight mt-0.5">{s.display}</div>
                  ) : (
                    <CountUp
                      to={s.value ?? 0}
                      suffix={s.suffix ?? ""}
                      className="block text-[22px] font-semibold tracking-tight mt-0.5 tabular-nums"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
