import { ChevronDown, Search } from "lucide-react";
import { Link, useLocation } from "wouter";

const links: Array<{ href: string; label: string; badge?: string; chevron?: boolean }> = [
  { href: "/projets", label: "Projets", chevron: true },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal", badge: "Nouveau" },
  { href: "/presse", label: "Presse" },
  { href: "/boutique", label: "Boutique" },
];

export default function Header() {
  const [location] = useLocation();
  return (
    <header className="w-full border-b border-black/5 bg-[#f3f3f1]">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-7 px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#111] text-[12px] font-black text-white">
            M
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#111]">
            Maison Silencieuse
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-6 text-[13px] font-medium text-[#111] md:flex">
          {links.map((l) => {
            const active = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`inline-flex items-center gap-1.5 hover:text-black/60 ${active ? "text-black" : ""}`}
                data-testid={`link-${l.label.toLowerCase()}`}
              >
                {l.label}
                {l.chevron && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />}
                {l.badge && (
                  <span className="rounded-full bg-[#111] px-2 py-[2px] text-[9.5px] font-semibold uppercase tracking-wide text-white">
                    {l.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-1 hidden flex-1 items-center md:flex">
          <div className="flex h-9 w-full max-w-[200px] items-center gap-2 rounded-full bg-[#e8e8e6] px-3.5 text-[12.5px] text-[#7a7a78]">
            <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span>Rechercher</span>
          </div>
        </div>

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
          <Link
            href="/contact"
            className="inline-flex h-9 items-center whitespace-nowrap rounded-full border border-[#111] bg-white px-4 text-[13px] font-medium text-[#111] hover:bg-[#111] hover:text-white"
            data-testid="button-projet"
          >
            Confier un projet
          </Link>
        </div>
      </div>
    </header>
  );
}
