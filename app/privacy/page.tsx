import Link from "next/link";
import { SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import { BUSINESS } from "@/data/site";

export const metadata = { title: "Privacy Policy — Smart Glass Ireland" };

export default function PrivacyPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10 max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <SectionTitle>Privacy Policy</SectionTitle>
        <p className="font-mono text-[12px] text-text-muted mt-2">LAST UPDATED · JANUARY 2026</p>
        <div className="mt-8 space-y-5 text-[14px] leading-relaxed text-text-muted">
          {[
            ["1 · Who we are", `${BUSINESS.name} (${BUSINESS.area}). Contact: ${BUSINESS.email}, ${BUSINESS.phoneUK}.`],
            ["2 · What we collect", "Name, email, phone and project details submitted through our enquiry form — used solely to prepare your consultation and quote."],
            ["3 · Your rights", "Access, rectification, erasure, restriction, portability and objection under GDPR, plus complaint to the Data Protection Commission."],
          ].map(([t, d]) => (
            <div key={t} className="bg-surface-white rounded-2xl border border-border-hairline p-6">
              <h2 className="text-text-primary font-semibold text-[16px] mb-2">{t}</h2>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-text-primary text-white text-[12px] font-semibold px-6 py-3.5 hover:bg-brand transition-colors">
            Back to contact
          </Link>
          <Link href="/cookie" className="inline-flex items-center rounded-lg bg-surface-white border border-border-hairline text-[12px] font-semibold px-6 py-3.5 hover:bg-surface-low transition-colors">
            Cookie Policy
          </Link>
        </div>
      </section>
    </>
  );
}
