import Link from "next/link";
import { SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";

export const metadata = { title: "Cookie Policy — Smart Glass Ireland" };

export default function CookiePage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10 max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <SectionTitle>Cookie Policy</SectionTitle>
        <p className="font-mono text-[12px] text-text-muted mt-2">LAST UPDATED · JANUARY 2026</p>
        <div className="mt-8 space-y-5 text-[14px] leading-relaxed text-text-muted">
          {[
            ["1 · Technical cookies only", "This site uses only technical and session cookies required for navigation and the enquiry form. No profiling, no advertising trackers."],
            ["2 · Third-party content", "Fonts load from external providers under their own policies. The site remains fully usable with them blocked."],
            ["3 · Your control", "Delete or block cookies in your browser settings at any time."],
          ].map(([t, d]) => (
            <div key={t} className="bg-surface-white rounded-2xl border border-border-hairline p-6">
              <h2 className="text-text-primary font-semibold text-[16px] mb-2">{t}</h2>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/privacy" className="inline-flex items-center rounded-lg bg-surface-white border border-border-hairline text-[12px] font-semibold px-6 py-3.5 hover:bg-surface-low transition-colors">
            Privacy Policy
          </Link>
        </div>
      </section>
    </>
  );
}
