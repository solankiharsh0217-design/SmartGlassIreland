import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Wrench } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import { products } from "@/data/site";

export const metadata = { title: "Products — Smart Glass Ireland" };

export default function ProductsPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10">
        <SectionLabel>Three distinct product lines</SectionLabel>
        <SectionTitle className="max-w-3xl">Engineered for specific applications</SectionTitle>
        <p className="text-[15px] text-text-muted mt-3 max-w-2xl leading-relaxed">
          Three distinct product lines, each engineered for a specific application in modern
          architecture and design — from instant privacy to high-brightness display.
        </p>
      </section>

      <div className="space-y-6 pb-4">
        {products.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={p.slug}>
              <article
                id={p.slug}
                className="bg-surface-white rounded-2xl border border-border-hairline overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 scroll-mt-24"
              >
                <div className={`relative min-h-[280px] lg:min-h-[360px] ${flip ? "lg:order-2" : ""}`}>
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur font-mono text-[11px] font-semibold">
                    {p.badge}
                  </span>
                </div>
                <div className="p-7 md:p-9 flex flex-col justify-center">
                  <div className="font-mono text-[12px] text-brand font-semibold mb-2">
                    {String(i + 1).padStart(2, "0")} / 03 · {p.tagline.toUpperCase()}
                  </div>
                  <h2 className="text-[26px] md:text-[30px] font-semibold tracking-tight mb-3">{p.title}</h2>
                  <p className="text-[15px] font-medium mb-2">{p.desc}</p>
                  <p className="text-[14px] text-text-muted leading-relaxed mb-5">{p.longDesc}</p>
                  <ul className="space-y-2 mb-5">
                    {p.points.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13.5px]">
                        <Check size={16} className="text-brand mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                    {p.specs.map((r) => (
                      <div key={r.k} className="rounded-lg bg-surface-low border border-border-hairline px-3 py-2">
                        <div className="text-[11px] text-text-muted">{r.k}</div>
                        <div className="font-mono text-[12px] font-semibold">{r.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-text-muted mb-5">
                    <Wrench size={14} /> Professional installation and support included
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/contact?product=${p.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-text-primary text-white text-[12px] font-semibold px-5 py-3 hover:bg-brand transition-colors"
                    >
                      Enquire about {p.title.split(" ").slice(0, 2).join(" ")} <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/technology"
                      className="inline-flex items-center rounded-lg border border-border-hairline text-[12px] font-semibold px-5 py-3 hover:bg-surface-low transition-colors"
                    >
                      How it works
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <section className="py-10 border-t border-border-hairline mt-6">
        <div className="bg-ink text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-dark opacity-40" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <div className="font-mono text-[12px] text-white/50 mb-1">NOT SURE WHICH FITS?</div>
              <div className="text-[22px] md:text-[26px] font-semibold tracking-tight">
                Describe your space — we&apos;ll specify it.
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white text-black text-[13px] font-semibold px-6 py-3.5 hover:bg-highlight transition-colors shrink-0">
              Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
