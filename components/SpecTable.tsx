const rows = [
  { m: "Switchable Panel (PDLC)", t: "Frosted ↔ Clear · ms", l: "Up to 80%", p: "Minute AC", s: "Any size · pro install", c: "Made to order" },
  { m: "Crystal Clear Display", t: "Transparent film LED", l: "Up to 90% idle", p: "Low draw", s: "Custom · curved OK", c: "100,000 h · outdoor" },
  { m: "T-Grille Mesh", t: "Alu grille + LEDs", l: "45–60%", p: "Low draw", s: "High-rise · wind-proof", c: "Front-serviceable" },
];

export default function SpecTable() {
  return (
    <div className="bg-surface-white rounded-2xl border border-border-hairline overflow-x-auto shadow-sm thin-scroll">
      <table className="w-full text-left border-collapse min-w-[760px]">
        <thead>
          <tr className="border-b border-border-hairline bg-surface-low font-mono text-[12px] text-text-muted">
            <th className="p-4 font-medium">PRODUCT</th>
            <th className="p-4 font-medium">TECHNOLOGY</th>
            <th className="p-4 font-medium">TRANSPARENCY</th>
            <th className="p-4 font-medium">POWER</th>
            <th className="p-4 font-medium">FORMATS</th>
            <th className="p-4 font-medium">ASSURANCE</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-hairline font-mono text-[12px]">
          {rows.map((r) => (
            <tr key={r.m} className="hover:bg-surface-low/50 transition-colors">
              <td className="p-4 text-[14px] font-medium text-text-primary">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  {r.m}
                </span>
              </td>
              <td className="p-4 text-text-primary">{r.t}</td>
              <td className="p-4 text-text-primary font-semibold">{r.l}</td>
              <td className="p-4 text-text-muted">{r.p}</td>
              <td className="p-4 text-text-muted">{r.s}</td>
              <td className="p-4">
                <span className="px-2 py-0.5 rounded bg-badge-bg text-badge-text whitespace-nowrap">{r.c}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
