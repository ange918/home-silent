import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects, type Project } from "@/data/projects";

const categories = ["Tout", "Résidentiel", "Hôtellerie", "Bureaux", "Mobilier"] as const;

export default function Projets() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tout");
  const list: Project[] =
    active === "Tout" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Réalisations</div>
        <h1
          className="mt-3 font-display text-[#0e0e0e]"
          style={{
            fontSize: "clamp(48px, 9vw, 156px)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            fontWeight: 900,
          }}
          data-testid="text-page-title"
        >
          PROJETS
        </h1>
        <p className="mx-auto mt-6 max-w-[600px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Une sélection de lieux conçus depuis 2014. Chaque projet est singulier ; tous partagent
          la même recherche d'évidence.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              active === c
                ? "border-[#111] bg-[#111] text-white"
                : "border-black/15 bg-white text-[#111] hover:bg-black/5"
            }`}
            data-testid={`button-filter-${c.toLowerCase()}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article
            key={p.slug}
            className="group block overflow-hidden rounded-[6px]"
            data-testid={`card-project-${p.slug}`}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ background: p.palette, aspectRatio: "4 / 5" }}
            >
              <img
                src={p.cover}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#111]">
                {p.category}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 pt-4">
              <div>
                <div className="text-[18px] font-semibold tracking-tight text-[#0e0e0e]">
                  {p.name}
                </div>
                <div className="mt-1 text-[13.5px] text-[#3a3a38]">
                  {p.location} · {p.year} · {p.surface}
                </div>
                <p className="mt-3 max-w-[420px] text-[14px] leading-[1.55] text-[#3a3a38]">
                  {p.blurb}
                </p>
              </div>
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#111] text-[#111] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-[14px] font-semibold text-white hover:bg-black/80"
          data-testid="link-projets-cta"
        >
          Confier votre lieu au studio <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
      </div>
    </main>
  );
}
