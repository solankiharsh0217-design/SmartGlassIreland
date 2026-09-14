import Image from "next/image";

const PANELS = [
  {
    pill: "POWER OFF · FROSTED · FULLY PRIVATE",
    pillDark: false,
    frosted: true,
    captionTitle: "Crystals relaxed",
    caption: "light scatters and the glass turns frosted. Private, yet the room stays bright.",
  },
  {
    pill: "POWER ON · CLEAR · DAYLIGHT FLOODS IN",
    pillDark: true,
    frosted: false,
    captionTitle: "Crystals aligned",
    caption: "the glass turns clear — views and daylight pass straight through.",
  },
];

/**
 * Same-photo frosted vs clear comparison. One image, honest CSS frost —
 * no toggle needed, the difference reads instantly.
 */
export default function PdlcDemo() {
  return (
    <div>
      <div className="max-w-3xl mb-6">
        <div className="font-mono text-[12px] text-text-muted uppercase mb-1">
          How PDLC Smart Glass Works
        </div>
        <h2 className="text-[26px] md:text-[32px] leading-[32px] md:leading-[40px] font-semibold tracking-[-0.02em]">
          Frosted or clear — <span className="text-brand">in an instant.</span>
        </h2>
        <p className="text-[14px] text-text-muted mt-2 leading-relaxed">
          An electrical current aligns microscopic liquid crystals in the PDLC film. Power on:
          clear. Power off: frosted and private — while daylight keeps flowing through.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PANELS.map((p) => (
          <figure
            key={p.pill}
            className="group relative rounded-2xl overflow-hidden border border-border-hairline shadow-sm bg-surface-white"
          >
            <div className="relative h-[280px] md:h-[340px] overflow-hidden">
              <Image
                src="/images/hero-restaurant.jpg"
                alt={`Restaurant interior behind switchable glass — ${p.frosted ? "frosted for privacy" : "crystal clear"}`}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              {p.frosted && <div className="absolute inset-0 bg-white/55 backdrop-blur-[14px]" />}
              <span
                className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg font-mono text-[11px] shadow backdrop-blur ${
                  p.pillDark ? "bg-brand text-white" : "bg-white/90 text-text-primary"
                }`}
              >
                {p.pill}
              </span>
            </div>
            <figcaption className="px-5 py-4 text-[13px] text-text-muted leading-relaxed border-t border-border-hairline">
              <strong className="text-text-primary font-semibold">{p.captionTitle}</strong>
              {" — "}
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 mt-4 rounded-2xl border border-border-hairline bg-surface-white overflow-hidden">
        {[
          ["STATE", "Frosted ↔ Clear"],
          ["SWITCHING", "Milliseconds"],
          ["LIGHT KEPT", "Up to 80%"],
          ["CURRENT", "Minute AC load"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`px-5 py-4 ${i !== 0 ? "border-l border-border-hairline" : ""} ${
              i >= 2 ? "max-md:border-t max-md:border-border-hairline" : ""
            } ${i === 2 ? "max-md:border-l-0" : ""}`}
          >
            <div className="font-mono text-[10px] tracking-[0.14em] text-text-muted">{k}</div>
            <div className="text-[15px] font-semibold mt-0.5">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
