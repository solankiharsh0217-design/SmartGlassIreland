import Link from "next/link";
import { SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";

export const metadata = { title: "Terms of Supply — Smart Glass Ireland" };

export default function TermsPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10 max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <SectionTitle>Terms of Supply</SectionTitle>
        <p className="font-mono text-[12px] text-text-muted mt-2">LAST UPDATED · JANUARY 2026</p>
        <div className="mt-8 space-y-5 text-[14px] leading-relaxed text-text-muted">
          {[
            ["1 · Scope", "Supply of switchable PDLC panels, transparent LED displays and grille screens, including bespoke design, certified installation, content configuration and commissioning."],
            ["2 · Quote & order", "Only the signed written quotation governs: scope, timelines and stage payments. Surveys, photometric analysis and samples are detailed in the quote."],
            ["3 · Warranty & care", "Hardware covered with durability-rated components (LEDs rated 100,000+ hours); installation workmanship and ongoing support included."],
          ].map(([t, d]) => (
            <div key={t} className="bg-surface-white rounded-2xl border border-border-hairline p-6">
              <h2 className="text-text-primary font-semibold text-[16px] mb-2">{t}</h2>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-text-primary text-white text-[12px] font-semibold px-6 py-3.5 hover:bg-brand transition-colors">
            Request a signed quote
          </Link>
        </div>
      </section>
    </>
  );
}
