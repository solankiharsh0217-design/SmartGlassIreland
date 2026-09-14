import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/site";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      href={`/products#${p.slug}`}
      aria-label={`${p.title} — full details`}
      className="block h-full rounded-2xl"
    >
      <div className="group h-full bg-surface-white rounded-2xl border border-border-hairline overflow-hidden flex flex-col shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-44 overflow-hidden shrink-0">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-badge-text font-mono text-[11px] font-medium">
            {p.badge}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="font-mono text-[11px] text-brand font-semibold mb-1">{p.tagline.toUpperCase()}</div>
          <h3 className="text-[20px] leading-[28px] font-semibold tracking-tight mb-2">{p.title}</h3>
          <p className="text-[14px] leading-[22px] text-text-muted mb-4">{p.desc}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand">
            Full details <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="h-1 bg-gradient-to-r from-brand via-brand-bright to-brand opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}
