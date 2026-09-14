"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Send, X } from "lucide-react";
import { BUSINESS, products } from "@/data/site";

const spaceOptions = [
  "Home / Residential",
  "Office / Commercial",
  "Clinic / Healthcare",
  "Hotel / Hospitality",
  "Shopfront / Retail",
  "Facade / Architectural",
];

function QuoteFormInner() {
  const searchParams = useSearchParams();
  const requested = products.find((p) => p.slug === searchParams.get("product")) ?? null;

  const [dismissed, setDismissed] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState(
    requested
      ? `I'm interested in: ${requested.title}.\nProject details and timelines to confirm on a call.`
      : ""
  );

  const showPill = requested && !dismissed;

  if (sent) {
    return (
      <div className="bg-surface-white rounded-2xl border border-border-hairline p-8 md:p-10 shadow-sm text-center flex flex-col items-center gap-3">
        <CheckCircle2 size={36} className="text-brand" />
        <h3 className="text-[22px] font-medium">Thank you — message received</h3>
        <p className="text-[14px] text-text-muted max-w-md">
          Thank you for getting in touch. Our team will respond within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-2 text-[12px] font-medium text-text-muted underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-white rounded-2xl border border-border-hairline p-6 md:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[12px] text-text-muted">ENQUIRY FORM</span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-tint text-brand text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Replies within 24h
        </span>
      </div>

      {showPill && requested && (
        <div className="flex items-center justify-between gap-3 rounded-lg bg-sage-tint border border-brand/20 px-3.5 py-2.5 mb-5">
          <span className="text-[13px]">
            <span className="text-text-muted">Enquiring about: </span>
            <strong>{requested.title}</strong>
          </span>
          <button
            type="button"
            onClick={() => {
              setDismissed(true);
              setMessage("");
            }}
            aria-label="Remove selected product"
            className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center text-text-muted hover:text-text-primary transition-colors shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-medium mb-1.5" htmlFor="name">Full Name *</label>
            <input id="name" required type="text" placeholder="e.g. Aoife Byrne"
              className="w-full border border-border-hairline rounded-lg px-3.5 py-2.5 text-[14px] placeholder:text-text-muted/60 focus:outline-none focus:border-brand" />
          </div>
          <div>
            <label className="block text-[12px] font-medium mb-1.5" htmlFor="email">Email *</label>
            <input id="email" required type="email" placeholder="you@example.ie"
              className="w-full border border-border-hairline rounded-lg px-3.5 py-2.5 text-[14px] placeholder:text-text-muted/60 focus:outline-none focus:border-brand" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-medium mb-1.5" htmlFor="phone">Phone</label>
            <input id="phone" type="tel" placeholder="+353 ..."
              className="w-full border border-border-hairline rounded-lg px-3.5 py-2.5 text-[14px] placeholder:text-text-muted/60 focus:outline-none focus:border-brand" />
          </div>
          <div>
            <label className="block text-[12px] font-medium mb-1.5" htmlFor="space">Project Type</label>
            <select id="space" className="w-full border border-border-hairline rounded-lg px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-brand">
              {spaceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-[12px] font-medium mb-1.5" htmlFor="message">Project Details</label>
          <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your space — room sizes, glazing, timelines…"
            className="w-full border border-border-hairline rounded-lg px-3.5 py-2.5 text-[14px] placeholder:text-text-muted/60 focus:outline-none focus:border-brand" />
        </div>
        <div className="flex items-start gap-2 pt-1">
          <input id="consent" required type="checkbox" className="mt-1 w-4 h-4 rounded accent-[#2e5b34]" />
          <label className="text-[13px] text-text-muted" htmlFor="consent">
            I consent to Smart Glass Ireland Ltd contacting me about this enquiry. See{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-lg bg-text-primary text-white text-[13px] font-semibold hover:bg-brand transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          Request Free Consultation <Send size={16} />
        </button>
        <p className="text-center text-[12px] text-text-muted">
          Prefer to talk? Call <a className="font-semibold text-text-primary hover:text-brand" href={BUSINESS.phoneUKHref}>{BUSINESS.phoneUK}</a>
          {" "}or{" "}
          <a className="font-semibold text-text-primary hover:text-brand" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">WhatsApp us</a>.
        </p>
      </form>
    </div>
  );
}

export default function QuoteForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-surface-white rounded-2xl border border-border-hairline p-8 text-[14px] text-text-muted">
          Loading form…
        </div>
      }
    >
      <QuoteFormInner />
    </Suspense>
  );
}
