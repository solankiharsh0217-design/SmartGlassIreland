import { Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal, SectionLabel, SectionTitle, TopMetaBar } from "@/components/ui";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/data/site";

export const metadata = { title: "Contact — Smart Glass Ireland" };

export default function ContactPage() {
  return (
    <>
      <TopMetaBar />
      <section className="py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionLabel>Free consultation · Custom quote</SectionLabel>
            <SectionTitle className="mb-3">Talk to our team</SectionTitle>
            <p className="text-[14px] text-text-muted leading-relaxed mb-6">
              Ready to transform your space? Contact our team for a free consultation and custom
              quote — or message us directly on WhatsApp for a fast response.
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-brand/25 bg-sage-tint px-4 py-3.5 hover:shadow-sm transition-all group"
              >
                <span className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block font-mono text-[11px] text-brand font-semibold">FASTEST · WHATSAPP</span>
                  <span className="block text-[14px] font-semibold mt-0.5">Message us directly</span>
                </span>
              </a>
              {[
                { icon: Mail, k: "EMAIL", v: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                { icon: Phone, k: "CALL UK", v: BUSINESS.phoneUK, href: BUSINESS.phoneUKHref },
                { icon: Phone, k: "CALL IRELAND", v: BUSINESS.phoneIE, href: BUSINESS.phoneIEHref },
              ].map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.k}
                    href={r.href}
                    className="flex items-center gap-3 rounded-xl border border-border-hairline bg-surface-white px-4 py-3 hover:border-brand/40 hover:shadow-sm transition-all group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-surface-low border border-border-hairline flex items-center justify-center shrink-0">
                      <Icon size={19} />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] text-text-muted">{r.k}</span>
                      <span className="block text-[14px] font-semibold mt-0.5">{r.v}</span>
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="mt-5 p-4 rounded-2xl bg-surface-white border border-border-hairline shadow-sm">
              <div className="font-mono text-[11px] text-text-muted mb-1">COVERAGE</div>
              <p className="text-[13px] text-text-muted">
                {BUSINESS.area} — {BUSINESS.coverage.toLowerCase()}. Site surveys across both
                countries.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-10 border-t border-border-hairline">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal className="h-full">
            <div className="bg-surface-white rounded-2xl border border-border-hairline p-7 h-full">
              <div className="font-mono text-[12px] text-brand font-semibold mb-2">AFTER YOU SEND</div>
              <h2 className="text-[20px] font-semibold mb-4">What happens next</h2>
              <ol className="space-y-3 text-[14px] text-text-muted">
                <li><strong className="text-text-primary">1. We assess.</strong> Your location, surface area and goals — measured properly.</li>
                <li><strong className="text-text-primary">2. We design.</strong> A bespoke configuration, including content strategy for displays.</li>
                <li><strong className="text-text-primary">3. We install.</strong> Certified engineers, minimal disruption, ongoing support.</li>
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="h-full">
            <div className="bg-ink text-white rounded-2xl p-7 h-full relative overflow-hidden">
              <div className="absolute inset-0 blueprint-dark opacity-40" />
              <div className="relative">
                <div className="font-mono text-[12px] text-white/50 mb-2">OUR PROMISE</div>
                <h2 className="text-[20px] font-semibold mb-4">Seamless, start to finish</h2>
                <p className="text-[14px] text-white/65 leading-relaxed">
                  From initial consultation to ongoing support, we ensure a seamless experience.
                  Product demonstrations available on request — ask for anything.
                </p>
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white text-black text-[12px] font-semibold px-5 py-3 hover:bg-highlight transition-colors"
                >
                  <MessageCircle size={15} /> Start on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
