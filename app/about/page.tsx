import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Factory, Globe2 } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import { BUSINESS } from "@/data/site";

export const metadata = { title: "About — Smart Glass Ireland" };

const values = [
  {
    icon: Award,
    t: "Premium materials only",
    d: "Advanced PDLC film, laminated safety glass and precision aluminium — specified to last.",
  },
  {
    icon: Factory,
    t: "Made to order",
    d: "Custom sizes, tints, curves and configurations. Every panel is built for its opening — never off the shelf.",
  },
  {
    icon: Globe2,
    t: "Ireland & UK coverage",
    d: "Dublin-based with installation and project support across Ireland and the United Kingdom.",
  },
];

export default function AboutPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10">
        <SectionLabel>Smart Glass Ireland Ltd</SectionLabel>
        <SectionTitle className="max-w-3xl">Innovative glass technology, honestly supplied</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
          <div className="lg:col-span-7">
            <p className="text-[16px] leading-[26px] text-text-muted">
              {BUSINESS.name} provides premium smart glass solutions to residential, commercial,
              healthcare and architectural projects {BUSINESS.coverage.toLowerCase()}. From
              instant-privacy PDLC panels to sunlight-visible transparent displays and
              wind-permeable facade mesh, everything is measured, made and installed by
              specialists.
            </p>
            <p className="text-[15px] leading-[25px] text-text-muted mt-4">
              Our process is deliberately simple: we assess your location and measure the
              surface, design a bespoke configuration — including content strategy for display
              systems — and our certified engineers install it quickly with minimal disruption.
              From initial consultation to ongoing support, the experience stays seamless from
              start to finish.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 bg-surface-white rounded-2xl border border-border-hairline p-6">
              {[
                ["90%", "Transparency idle"],
                ["100k h", "LED lifetime"],
                ["<1 s", "Privacy switch"],
                ["24 h", "Response time"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="text-[24px] font-semibold tracking-tight">{v}</div>
                  <div className="text-[13px] text-text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <div className="relative h-64 rounded-2xl overflow-hidden border border-border-hairline">
                <Image src="/images/factory-table.jpg" alt="PDLC lamination table in production" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 text-white backdrop-blur font-mono text-[11px]">
                  PRODUCTION · LAMINATION
                </span>
              </div>
            </Reveal>
            <div className="bg-surface-white rounded-2xl border border-border-hairline p-6 shadow-sm">
              <div className="font-mono text-[12px] text-text-muted mb-3">TALK TO US</div>
              <div className="space-y-2 text-[14px]">
                <a href={`mailto:${BUSINESS.email}`} className="block font-semibold hover:text-brand transition-colors">{BUSINESS.email}</a>
                <a href={BUSINESS.phoneUKHref} className="block text-text-muted hover:text-text-primary transition-colors">{BUSINESS.phoneUK} (UK)</a>
                <a href={BUSINESS.phoneIEHref} className="block text-text-muted hover:text-text-primary transition-colors">{BUSINESS.phoneIE} (IE)</a>
              </div>
              <Link href="/contact" className="mt-5 w-full inline-flex items-center justify-center gap-2 text-[12px] font-semibold rounded-lg bg-text-primary text-white px-6 py-3 hover:bg-brand transition-colors">
                Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-border-hairline">
        <SectionLabel>What we stand on</SectionLabel>
        <SectionTitle>Three commitments</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Reveal key={v.t} delay={i * 0.05} className="h-full">
                <div className="bg-surface-white rounded-2xl border border-border-hairline p-6 shadow-sm h-full">
                  <span className="w-10 h-10 rounded-lg bg-sage-tint flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand" />
                  </span>
                  <h3 className="text-[17px] font-semibold mb-2">{v.t}</h3>
                  <p className="text-[13.5px] text-text-muted leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
