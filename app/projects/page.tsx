"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Expand, X } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import { gallery, sectors } from "@/data/site";

export default function ProjectsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <TopMetaBar />
      <section className="py-10">
        <SectionLabel>Applications &amp; sectors</SectionLabel>
        <SectionTitle className="max-w-3xl">Where smart glass transforms spaces</SectionTitle>
        <p className="text-[15px] text-text-muted mt-3 max-w-2xl leading-relaxed">
          Residential, commercial, healthcare and architectural projects across Ireland and the
          United Kingdom. Click any photograph to view it full-screen.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} delay={(i % 4) * 0.04}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              className="group relative block h-56 w-full rounded-2xl overflow-hidden border border-border-hairline bg-surface-low text-left"
              aria-label={`Enlarge: ${g.cap}`}
            >
              <Image
                src={g.src}
                alt={g.cap}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 100vw, 25vw"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-0 inset-x-0 px-3 py-2.5 text-white text-[12px] font-medium text-left">
                {g.cap}
              </span>
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand size={15} />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={gallery[selected].cap}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.figure
              key={gallery[selected].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-[min(1100px,94vw)] h-[74vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[selected].src} alt={gallery[selected].cap} fill className="object-contain bg-black" sizes="94vw" priority />
              <figcaption className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent text-white flex items-center justify-between gap-4">
                <span className="text-[13px] md:text-[14px] font-medium">{gallery[selected].cap}</span>
                <span className="font-mono text-[11px] text-white/60 shrink-0">
                  {selected + 1} / {gallery.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-10 border-t border-border-hairline mt-6">
        <SectionLabel>Sectors</SectionLabel>
        <SectionTitle>Six places it performs</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05} className="h-full">
              <div className="flex items-start gap-3 bg-surface-white rounded-2xl border border-border-hairline p-5 h-full shadow-sm">
                <span className="font-mono text-[12px] text-brand font-semibold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-[16px]">{s.title}</h3>
                  <p className="text-[13px] text-text-muted mt-0.5">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-text-primary text-white text-[12px] font-semibold px-6 py-3.5 hover:bg-brand transition-colors">
            Start your project <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
