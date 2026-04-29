import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { projects, journalPosts, services } from "@/data/projects";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bg: string;
  fg: string;
  lead?: boolean;
};

const team: TeamMember[] = [
  { name: "Louis Paquet", role: "Direction artistique", initials: "LP", bg: "#1f3b2d", fg: "#ffffff", lead: true },
  { name: "Koki Hirano", role: "Architecte d'intérieur", initials: "KH", bg: "#f0d8c2", fg: "#1f1f1f" },
  { name: "Kim Levan", role: "Designer mobilier", initials: "KL", bg: "#c2c8d0", fg: "#1f1f1f" },
  { name: "Adrien Vanderpotte", role: "Chef de projet", initials: "AV", bg: "#2a2a2a", fg: "#ffffff" },
  { name: "Florent Roux-Durraffourt", role: "Scénographie", initials: "FR", bg: "#b9b6a8", fg: "#1f1f1f" },
];

function Avatar({ m }: { m: TeamMember }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ring-1 ring-black/5"
      style={{ background: m.bg, color: m.fg }}
      aria-hidden
    >
      {m.initials}
    </span>
  );
}

function Hero() {
  const featured = projects[0];
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-2">
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[12.5px] font-medium text-[#3a3a38]">
        <span>Studio d'architecture intérieure</span>
        <span className="inline-flex items-center rounded-full border border-black/15 bg-white px-3 py-[5px] text-[12px] font-medium text-[#111]">
          Paris · Lyon · Depuis 2014
        </span>
        <span>
          Projets livrés : <span className="text-[#111]">128 sur 3 continents</span>
        </span>
      </div>

      <h1
        className="font-display mt-6 text-center text-[#0e0e0e]"
        style={{
          fontSize: "clamp(56px, 11.5vw, 188px)",
          lineHeight: 0.92,
          letterSpacing: "-0.045em",
          fontWeight: 900,
        }}
        data-testid="text-title"
      >
        MAISON SILENCIEUSE
      </h1>

      <p className="mx-auto mt-7 max-w-[640px] text-center text-[15.5px] leading-[1.55] text-[#3a3a38]">
        Nous dessinons des intérieurs habités, taillés à la lumière et au geste juste.
        Maisons de famille, hôtels confidentiels et lieux de travail au calme retrouvé.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[15px] font-semibold text-[#111]">
        {team.map((m) => (
          <a key={m.name} href="#" className="group inline-flex items-center gap-2.5">
            <Avatar m={m} />
            <span className="underline decoration-[#111] decoration-1 underline-offset-[5px] group-hover:decoration-black/40">
              {m.name}
            </span>
            {m.lead && (
              <span className="rounded-[3px] bg-[#dcd5c5] px-1.5 py-[1.5px] text-[10px] font-bold uppercase tracking-[0.06em] text-[#5b4d23]">
                Fondateur
              </span>
            )}
          </a>
        ))}
      </div>

      {/* Featured project banner */}
      <div className="mt-12">
        <div
          className="relative mx-auto h-[420px] w-full max-w-[1320px] overflow-hidden rounded-t-[6px]"
          style={{ background: featured.palette }}
        >
          <img
            src={featured.cover}
            alt={featured.name}
            className="absolute inset-0 h-full w-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

          <div className="absolute left-7 bottom-7 flex flex-col gap-1 text-white">
            <span className="text-[11px] uppercase tracking-[0.18em] text-white/85">
              Projet en vedette
            </span>
            <span className="flex items-center gap-2 text-[18px] font-semibold tracking-tight">
              <span className="opacity-95">●</span> {featured.name} — {featured.location}, {featured.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center rounded-full bg-[#111] p-1 text-[13px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <span className="ml-1 mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-[13px] font-black text-white">
              M
            </span>
            {["Résidentiel", "Hôtellerie", "Bureaux", "Mobilier", "Recherche"].map((label) => (
              <button key={label} className="rounded-full px-3.5 py-2 text-white/90 hover:bg-white/10">
                {label}
              </button>
            ))}
            <Link
              href="/projets"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#111]"
            >
              Voir le projet
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="absolute right-6 bottom-7 flex items-center gap-2 text-[13px] text-white/95">
            <span>Discutons de votre lieu</span>
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/20 text-[10px]">
              ⤢
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Manifeste</div>
          <div className="mt-3 text-[14px] text-[#3a3a38]">N° 01 / 04</div>
        </div>
        <div className="md:col-span-9">
          <p
            className="font-display text-[#0e0e0e]"
            style={{
              fontSize: "clamp(28px, 4vw, 56px)",
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              fontWeight: 600,
            }}
          >
            Le silence n'est pas l'absence de bruit.<br />
            <span className="text-[#7a7a78]">
              C'est la présence de l'attention. Nous concevons des lieux qui rendent leurs occupants
              à eux-mêmes — par la matière juste, la lumière exacte et l'absence du superflu.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = projects.slice(0, 6);
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Projets sélectionnés</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Six lieux, six silences.
          </h2>
        </div>
        <Link
          href="/projets"
          className="hidden items-center gap-1.5 text-[13px] font-medium text-[#111] underline underline-offset-[5px] md:inline-flex"
          data-testid="link-all-projects"
        >
          Voir les 128 projets <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Link
            key={p.slug}
            href="/projets"
            className={`group relative block overflow-hidden rounded-[6px] ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
            data-testid={`card-project-${p.slug}`}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ background: p.palette, aspectRatio: i === 0 ? "16 / 9" : "4 / 5" }}
            >
              <img
                src={p.cover}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-white/80">
                    {p.category} · {p.year}
                  </div>
                  <div className="mt-1 text-[20px] font-semibold tracking-tight">{p.name}</div>
                  <div className="text-[13px] text-white/85">{p.location}</div>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#111] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Approche</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Quatre savoir-faire, une seule lecture.
          </h2>
          <p className="mt-6 max-w-[360px] text-[15px] leading-[1.6] text-[#3a3a38]">
            Chaque projet est conduit par un binôme architecte–scénographe, soutenu par notre
            atelier mobilier et notre réseau d'artisans français.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="bg-[#f3f3f1] p-8">
                <div className="text-[12px] font-semibold tracking-[0.18em] text-[#ef7a2c]">{s.n}</div>
                <div className="mt-3 text-[20px] font-semibold tracking-tight text-[#0e0e0e]">
                  {s.title}
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a3a38]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { n: "12", l: "années d'exercice" },
    { n: "128", l: "projets livrés" },
    { n: "3", l: "continents" },
    { n: "47", l: "artisans partenaires" },
  ];
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="grid grid-cols-2 gap-6 border-y border-black/10 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <div
              className="font-display text-[#0e0e0e]"
              style={{ fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 900 }}
            >
              {s.n}
            </div>
            <div className="mt-2 text-[13px] uppercase tracking-[0.14em] text-[#7a7a78]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function JournalPreview() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Journal</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Carnets du studio.
          </h2>
        </div>
        <Link href="/journal" className="hidden items-center gap-1.5 text-[13px] font-medium text-[#111] underline underline-offset-[5px] md:inline-flex">
          Tout lire <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 divide-y divide-black/10 border-y border-black/10">
        {journalPosts.map((p) => (
          <Link
            key={p.slug}
            href="/journal"
            className="group grid grid-cols-12 gap-6 py-8 transition-colors hover:bg-white"
            data-testid={`link-journal-${p.slug}`}
          >
            <div className="col-span-3 text-[13px] text-[#7a7a78] md:col-span-2">{p.date}</div>
            <div className="col-span-9 md:col-span-2">
              <span className="rounded-full border border-black/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#3a3a38]">
                {p.category}
              </span>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="text-[22px] font-semibold tracking-tight text-[#0e0e0e] group-hover:text-[#ef7a2c]">
                {p.title}
              </div>
              <p className="mt-2 max-w-[600px] text-[14.5px] leading-[1.55] text-[#3a3a38]">
                {p.excerpt}
              </p>
            </div>
            <div className="col-span-12 flex items-center justify-end text-[12px] text-[#7a7a78] md:col-span-1">
              {p.read}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Press() {
  const press = [
    "AD Magazine",
    "Architectural Digest",
    "Wallpaper*",
    "Casa Vogue",
    "Côté Maison",
    "Dezeen",
    "Elle Décoration",
  ];
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6">
      <div className="text-center">
        <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">— Ils en parlent</div>
        <h2
          className="mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700 }}
        >
          Vu dans la presse.
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[18px] font-semibold tracking-tight text-[#7a7a78]">
        {press.map((p) => (
          <span key={p} className="opacity-70 transition-opacity hover:opacity-100 hover:text-[#111]">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="mx-auto mt-32 max-w-[1100px] px-6">
      <p
        className="text-center font-display text-[#0e0e0e]"
        style={{ fontSize: "clamp(28px, 3.6vw, 52px)", lineHeight: 1.15, letterSpacing: "-0.025em", fontWeight: 600 }}
      >
        "Maison Silencieuse a transformé une bastide poussiéreuse en lieu où l'on respire.
        Nous y revenons comme on rentre chez soi — la première fois."
      </p>
      <div className="mt-8 flex items-center justify-center gap-3 text-[13px] text-[#3a3a38]">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1f3b2d] text-[10px] font-semibold text-white">
          MC
        </span>
        <span className="font-semibold text-[#111]">Marguerite Chazal</span>
        <span>—</span>
        <span>propriétaire, Villa Ocra</span>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Projects />
      <Approach />
      <Numbers />
      <JournalPreview />
      <Press />
      <Quote />
    </main>
  );
}
