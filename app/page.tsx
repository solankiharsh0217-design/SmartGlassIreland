import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, HeartPulse, Home as HomeIcon, Hotel, Store, Landmark } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import Hero from "@/components/Hero";
import MobileActionBar from "@/components/MobileActionBar";
import PdlcDemo from "@/components/PdlcDemo";
import ProductCard from "@/components/ProductCard";
import SpecTable from "@/components/SpecTable";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS, gallery, processSteps, products, sectors } from "@/data/site";

const sectorIcons = [HomeIcon, Building2, HeartPulse, Hotel, Store, Landmark];

const marqueeItems = [
  "Privacy Glass",
  "Crystal Clear LED",
  "T-Grille Mesh",
  "PDLC Technology",
  "Ireland + UK",
  "Bespoke Sizes",
];

export default function Home() {
  return (
    <>
      <Hero />
      <MobileActionBar />

      <div className="breakout">
        <div className="bg-brand text-white overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="flex items-center gap-8 text-[13px] font-semibold tracking-wide whitespace-nowrap">
                {m.toUpperCase()} <span className="text-white/50">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <TopMetaBar />

      {/* PDLC demo */}
      <section id="demo" className="pt-10 pb-4 scroll-mt-20">
        <Reveal>
          <PdlcDemo />
        </Reveal>
      </section>

      {/* products */}
      <section className="py-10 border-t border-border-hairline mt-6" id="products">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <SectionLabel>Three product lines · Engineered per application</SectionLabel>
            <SectionTitle>One supplier, every smart surface</SectionTitle>
          </div>
          <Link href="/products" className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold">
            All products <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.05} className="h-full">
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* process — deep forest band */}
      <div className="breakout">
        <section className="bg-brand-deep text-white py-12 md:py-20 my-4 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-dark opacity-40" />
          <div className="absolute -top-48 left-1/4 w-[560px] h-[380px] rounded-full bg-brand-bright/20 blur-[140px] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                <div className="font-mono text-[12px] text-white/50 uppercase mb-2">Survey → support</div>
                <h2 className="text-[30px] md:text-[36px] font-semibold tracking-tight leading-[1.05]">
                  Seamless,
                  <br />
                  <span className="italic font-light text-highlight">start to finish.</span>
                </h2>
                <p className="text-[14px] text-white/60 mt-4 leading-relaxed max-w-sm">
                  Assess, design bespoke, install cleanly — then we stay with you. Three steps,
                  zero disruption.
                </p>
                <div className="relative h-60 md:h-72 rounded-2xl overflow-hidden mt-6 border border-white/15">
                  <Image src="/images/factory-rolls.jpg" alt="PDLC film rolls in production" fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur font-mono text-[11px]">
                    PRODUCTION · PDLC FILM STOCK
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg bg-white text-black text-[13px] font-semibold px-6 py-3.5 hover:bg-highlight transition-colors"
                >
                  Start your project <ArrowRight size={16} />
                </Link>
                <div className="mt-4 font-mono text-[11px] text-white/45">
                  3 STEPS · BESPOKE · AFTERCARE INCLUDED
                </div>
              </div>
              <div className="lg:col-span-8 relative">
                <div aria-hidden className="absolute left-[21px] top-3 bottom-3 w-px bg-gradient-to-b from-highlight/70 via-white/15 to-transparent" />
                <div className="space-y-4">
                  {processSteps.map((s, i) => (
                    <Reveal key={s.n} delay={Math.min(i * 0.06, 0.2)}>
                      <div className="relative pl-14 md:pl-16">
                        <span
                          aria-hidden
                          className="absolute left-0 top-5 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/20 bg-brand-deep font-mono text-[12px] font-semibold text-highlight shadow-[0_0_0_5px_#1e4023]"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur p-5 md:p-6 hover:border-highlight/40 hover:bg-white/[0.07] transition-colors">
                          <div className="font-mono text-[11px] tracking-[0.14em] text-highlight font-semibold mb-1.5">
                            {s.n}
                          </div>
                          <h3 className="text-[18px] font-semibold">{s.title}</h3>
                          <p className="text-[13.5px] text-white/60 leading-relaxed mt-1.5">{s.desc}</p>
                          <div className="mt-3 inline-flex px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/60">
                            {s.meta}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* sectors */}
      <section className="py-10 border-t border-border-hairline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <SectionLabel>Where smart glass transforms spaces</SectionLabel>
            <SectionTitle>Sectors we serve</SectionTitle>
          </div>
          <Link href="/projects" className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold">
            Projects &amp; sectors <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => {
            const Icon = sectorIcons[i % sectorIcons.length];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.05} className="h-full">
                <div className="group h-full bg-surface-white rounded-2xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5 flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-sage-tint flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-brand" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-[16px]">{s.title}</h3>
                      <p className="text-[13px] text-text-muted mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* gallery strip */}
      <section className="py-10 border-t border-border-hairline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <SectionLabel>From our installations</SectionLabel>
            <SectionTitle>Recent work</SectionTitle>
          </div>
          <Link href="/projects" className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold">
            Open gallery <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.slice(0, 4).map((g) => (
            <Link key={g.src} href="/projects" aria-label={`${g.cap} — open gallery`} className="group relative block h-44 md:h-52 rounded-2xl overflow-hidden border border-border-hairline">
              <Image src={g.src} alt={g.cap} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
              <span className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-white text-[12px] font-medium">
                {g.cap}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* specs */}
      <section className="py-10 border-t border-border-hairline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <SectionLabel>At a glance</SectionLabel>
            <SectionTitle>Specification snapshot</SectionTitle>
          </div>
          <Link href="/technology" className="shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold">
            How PDLC works <ArrowUpRight size={14} />
          </Link>
        </div>
        <Reveal>
          <SpecTable />
        </Reveal>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Up to 90% idle transparency", "100,000-hour LEDs", "Custom sizes & curves", "Low power draw", "IE + UK install"].map((c) => (
            <span key={c} className="px-3 py-1 rounded-full bg-sage-tint text-brand font-mono text-[12px]">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* contact */}
      <section className="py-10 border-t border-border-hairline" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel>Free consultation · Custom quote</SectionLabel>
            <SectionTitle className="mb-3">Ready to transform your space?</SectionTitle>
            <p className="text-[14px] text-text-muted leading-relaxed mb-6">
              Contact our team for a free consultation and custom quote. Our expert team is
              available to answer your questions and provide product demonstrations.
            </p>
            <div className="space-y-3">
              {[
                ["Email us", BUSINESS.email, `mailto:${BUSINESS.email}`],
                ["Call UK", `${BUSINESS.phoneUK} (UK)`, BUSINESS.phoneUKHref],
                ["Call Ireland", `${BUSINESS.phoneIE} (IE)`, BUSINESS.phoneIEHref],
              ].map(([k, v, href]) => (
                <a
                  key={k}
                  href={href}
                  className="flex items-center justify-between rounded-xl border border-border-hairline bg-surface-white px-4 py-3 hover:border-brand/40 hover:shadow-sm transition-all group"
                >
                  <span>
                    <span className="block font-mono text-[11px] text-text-muted">{k.toUpperCase()}</span>
                    <span className="block text-[14px] font-semibold mt-0.5">{v}</span>
                  </span>
                  <ArrowUpRight size={16} className="text-text-muted group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-2xl bg-surface-white border border-border-hairline shadow-sm">
              <div className="flex items-center gap-2 text-[12px] font-medium mb-1">
                <BadgeCheck size={15} className="text-brand" />
                <span>Why Smart Glass Ireland</span>
              </div>
              <p className="text-[13px] text-text-muted">
                Premium materials, bespoke sizing, certified installation and support from
                consultation to aftercare — across Ireland and the UK.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
