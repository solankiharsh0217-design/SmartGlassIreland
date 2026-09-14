import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Sun, Layers } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import PdlcDemo from "@/components/PdlcDemo";
import { products } from "@/data/site";

export const metadata = { title: "PDLC Technology — Smart Glass Ireland" };

const cards = [
  {
    icon: Zap,
    k: "THE PRINCIPLE",
    t: "Current aligns the crystals",
    v: "PDLC film holds microscopic liquid crystals between glass sheets. Power on: crystals align and light passes — clear. Power off: crystals relax into random orientation, scattering light — frosted and private.",
  },
  {
    icon: Sun,
    k: "LIGHT, KEPT",
    t: "Private yet bright",
    v: "The frosted state blocks visibility, not daylight — up to 80% light transmittance. Rooms stay bright while eyes stay out. UV is blocked in both states.",
  },
  {
    icon: Layers,
    k: "BUILT IN",
    t: "Laminated safety construction",
    v: "Film is laminated between two or more sheets of safety glass in custom sizes — with tint, curved, double-glazed and shaped options for any architecture.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10">
        <SectionLabel>How PDLC Smart Glass Works</SectionLabel>
        <SectionTitle className="max-w-3xl">Electrical current, instant privacy</SectionTitle>
        <p className="text-[15px] text-text-muted mt-3 max-w-2xl leading-relaxed">
          Our PDLC (Polymer Dispersed Liquid Crystal) technology uses an electrical current to
          align microscopic liquid crystals, transforming the glass from frosted to clear in an
          instant — try it live below.
        </p>
      </section>

      <Reveal>
        <PdlcDemo />
      </Reveal>

      <section className="py-10 border-t border-border-hairline mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.k} delay={i * 0.05} className="h-full">
                <div className="bg-surface-white rounded-2xl border border-border-hairline p-6 shadow-sm h-full">
                  <span className="w-10 h-10 rounded-lg bg-sage-tint flex items-center justify-center mb-4">
                    <Icon size={20} className="text-brand" />
                  </span>
                  <div className="font-mono text-[12px] text-brand font-semibold mb-1">{c.k}</div>
                  <h3 className="text-[18px] font-semibold mb-2">{c.t}</h3>
                  <p className="text-[13.5px] text-text-muted leading-relaxed">{c.v}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-10 border-t border-border-hairline">
        <div className="max-w-3xl mb-6">
          <SectionLabel>Numbers that matter</SectionLabel>
          <SectionTitle>Specification snapshot</SectionTitle>
          <p className="text-[14px] text-text-muted mt-2 leading-relaxed">
            Every panel is made to order. Headline figures per product — exact values are
            confirmed for your project at survey stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full bg-surface-white rounded-2xl border border-border-hairline overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-40 overflow-hidden shrink-0">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur font-mono text-[11px] font-semibold">
                    {p.badge}
                  </span>
                  <span className="absolute bottom-3 left-4 right-4 text-white font-semibold text-[17px] leading-snug">
                    {p.title}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  {p.specs.map((r) => (
                    <div
                      key={r.k}
                      className="flex items-baseline justify-between gap-3 py-2.5 border-b border-border-subtle last:border-0"
                    >
                      <span className="font-mono text-[11px] text-text-muted shrink-0">{r.k}</span>
                      <span className="font-mono text-[12px] font-semibold text-right">{r.v}</span>
                    </div>
                  ))}
                  <Link
                    href={`/contact?product=${p.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand hover:gap-2.5 transition-all"
                  >
                    Enquire about this product <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-text-primary text-white text-[12px] font-semibold px-6 py-3.5 hover:bg-brand transition-colors">
            Discuss your specification <ArrowRight size={15} />
          </Link>
          <Link href="/products" className="inline-flex items-center rounded-lg bg-surface-white border border-border-hairline text-[12px] font-semibold px-6 py-3.5 hover:bg-surface-low transition-colors">
            Compare products
          </Link>
        </div>
      </section>
    </>
  );
}
