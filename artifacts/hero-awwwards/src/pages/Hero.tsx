import { ArrowUpRight, ChevronDown, Search } from "lucide-react";

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

function TopNav() {
  return (
    <header className="w-full bg-[#f3f3f1] border-b border-black/5">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-7 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" data-testid="link-logo">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#111] text-[12px] font-black text-white">
            M
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#111]">
            Maison Silencieuse
          </span>
        </a>

        {/* Primary nav */}
        <nav className="ml-4 hidden items-center gap-6 text-[13px] font-medium text-[#111] md:flex">
          <button className="inline-flex items-center gap-1 hover:text-black/60" data-testid="button-projets">
            Projets <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
          <a href="#" className="hover:text-black/60" data-testid="link-studio">
            Studio
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 hover:text-black/60" data-testid="link-journal">
            Journal
            <span className="rounded-full bg-[#111] px-2 py-[2px] text-[9.5px] font-semibold uppercase tracking-wide text-white">
              Nouveau
            </span>
          </a>
          <a href="#" className="hover:text-black/60" data-testid="link-presse">
            Presse
          </a>
          <a href="#" className="hover:text-black/60" data-testid="link-boutique">
            Boutique
          </a>
        </nav>

        {/* Search */}
        <div className="ml-1 hidden flex-1 items-center md:flex">
          <div className="flex h-9 w-full max-w-[200px] items-center gap-2 rounded-full bg-[#e8e8e6] px-3.5 text-[12.5px] text-[#7a7a78]">
            <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span>Rechercher</span>
          </div>
        </div>

        {/* Right cluster */}
        <div className="ml-auto flex items-center gap-4 text-[13px] font-medium text-[#111]">
          <a href="#" className="hidden whitespace-nowrap hover:text-black/60 xl:inline" data-testid="link-clients">
            Espace clients
          </a>
          <a href="#" className="hidden whitespace-nowrap hover:text-black/60 lg:inline" data-testid="link-rdv">
            Rendez-vous
          </a>
          <button
            className="inline-flex h-9 items-center whitespace-nowrap rounded-full bg-[#111] px-4 text-[13px] font-medium text-white hover:bg-black/80"
            data-testid="button-devis"
          >
            Devis
          </button>
          <button
            className="inline-flex h-9 items-center whitespace-nowrap rounded-full border border-[#111] bg-white px-4 text-[13px] font-medium text-[#111] hover:bg-[#111] hover:text-white"
            data-testid="button-projet"
          >
            Confier un projet
          </button>
        </div>
      </div>
    </header>
  );
}

function MetaRow() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[12.5px] font-medium text-[#3a3a38]">
      <span>Studio d'architecture intérieure</span>
      <span className="inline-flex items-center rounded-full border border-black/15 bg-white px-3 py-[5px] text-[12px] font-medium text-[#111] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
        Paris · Lyon · Depuis 2014
      </span>
      <span>
        Projets livrés : <span className="text-[#111]">128 sur 3 continents</span>
      </span>
    </div>
  );
}

function Title() {
  return (
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
  );
}

function Subtitle() {
  return (
    <p
      className="mx-auto mt-7 max-w-[640px] text-center text-[15.5px] leading-[1.55] text-[#3a3a38]"
      data-testid="text-subtitle"
    >
      Nous dessinons des intérieurs habités, taillés à la lumière et au geste juste.
      Maisons de famille, hôtels confidentiels et lieux de travail au calme retrouvé.
    </p>
  );
}

function Team() {
  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[15px] font-semibold text-[#111]">
      {team.map((m) => (
        <a
          key={m.name}
          href="#"
          className="group inline-flex items-center gap-2.5"
          data-testid={`link-team-${m.name.split(" ")[0].toLowerCase()}`}
        >
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
  );
}

function FeaturedProject() {
  return (
    <div className="mt-12">
      <div
        className="relative mx-auto h-[260px] w-full max-w-[1320px] overflow-hidden rounded-t-[6px]"
        style={{
          background:
            "linear-gradient(120deg, #f4b341 0%, #ef7a2c 38%, #d6442c 78%, #b22a36 100%)",
        }}
      >
        {/* Project name top-left */}
        <div className="absolute left-7 bottom-7 flex flex-col gap-1 text-white">
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/80">
            Projet en vedette
          </span>
          <span className="flex items-center gap-2 text-[18px] font-semibold tracking-tight">
            <span className="opacity-95">●</span> Villa Ocra — Provence, 2026
          </span>
        </div>

        {/* Floating section nav */}
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center rounded-full bg-[#111] p-1 text-[13px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          <span className="ml-1 mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#111] text-[13px] font-black text-white">
            M
          </span>
          {["Résidentiel", "Hôtellerie", "Bureaux", "Mobilier", "Recherche"].map((label) => (
            <button
              key={label}
              className="rounded-full px-3.5 py-2 text-white/90 hover:bg-white/10"
            >
              {label}
            </button>
          ))}
          <button className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#111]">
            Voir le projet
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>

        {/* Let's talk */}
        <div className="absolute right-6 bottom-7 flex items-center gap-2 text-[13px] text-white/95">
          <span>Discutons de votre lieu</span>
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/20 text-[10px]">
            ⤢
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-[#f3f3f1]">
      <TopNav />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-2">
        <MetaRow />
        <Title />
        <Subtitle />
        <Team />
        <FeaturedProject />
      </main>
    </div>
  );
}
