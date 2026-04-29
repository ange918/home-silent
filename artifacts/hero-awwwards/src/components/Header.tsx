import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full bg-[#f3f3f1]">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center gap-7 px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#111] text-[12px] font-black text-white">
            M
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#111]">
            Maison Silencieuse
          </span>
        </Link>

        {/* Desktop nav */}
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

        {/* Desktop right cluster */}
        <div className="ml-auto hidden items-center gap-4 text-[13px] font-medium text-[#111] md:flex">
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

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-[#111] md:hidden"
          data-testid="button-menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-x-0 top-[68px] bottom-0 z-50 overflow-y-auto bg-[#f3f3f1] md:hidden"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => {
              const active = location === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center justify-between py-5 text-[26px] font-semibold tracking-tight ${
                    active ? "text-[#ef7a2c]" : "text-[#111]"
                  }`}
                  data-testid={`mobile-link-${l.label.toLowerCase()}`}
                >
                  <span className="inline-flex items-center gap-3">
                    {l.label}
                    {l.badge && (
                      <span className="rounded-full bg-[#111] px-2 py-[3px] text-[10px] font-semibold uppercase tracking-wide text-white">
                        {l.badge}
                      </span>
                    )}
                  </span>
                  <span className="text-[18px] text-black/40">↗</span>
                </Link>
              );
            })}

            <div className="mt-8 flex flex-col gap-3 text-[15px] font-medium text-[#111]">
              <a href="#" className="py-1" data-testid="mobile-link-clients">Espace clients</a>
              <a href="#" className="py-1" data-testid="mobile-link-rdv">Rendez-vous</a>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <button
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111] text-[14px] font-semibold text-white"
                data-testid="mobile-button-devis"
              >
                Demander un devis
              </button>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#111] bg-white text-[14px] font-semibold text-[#111]"
                data-testid="mobile-button-projet"
              >
                Confier un projet
              </Link>
            </div>

            <div className="mt-10 text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">
              Studio
            </div>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#3a3a38]">
              28 rue de Sévigné, Paris<br />
              14 quai Saint-Antoine, Lyon
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
