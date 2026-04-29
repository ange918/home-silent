import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const colA = [
  { label: "Projets", href: "/projets" },
  { label: "Studio", href: "/studio" },
  { label: "Journal", href: "/journal" },
  { label: "Presse", href: "/presse" },
  { label: "Boutique", href: "/boutique" },
];

const colB = [
  { label: "Architecture intérieure", href: "/studio#services" },
  { label: "Décoration", href: "/studio#services" },
  { label: "Mobilier sur mesure", href: "/boutique" },
  { label: "Hôtellerie", href: "/projets" },
];

const colC = [
  { label: "Instagram", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "AD Magazine", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-32 bg-[#0e0e0e] text-[#e8e6df]">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        {/* Big mark */}
        <div className="border-b border-white/10 pb-14">
          <h3
            className="font-display text-[#f4eede]"
            style={{
              fontSize: "clamp(48px, 9vw, 156px)",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              fontWeight: 900,
            }}
          >
            Faisons silence<span className="text-[#ef7a2c]">.</span>
          </h3>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.6] text-white/65">
            Nous prenons trois nouveaux projets par an. Une réponse personnelle vous est adressée
            sous 72 heures, après lecture attentive de votre demande.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-[#111] hover:bg-white/90"
            data-testid="link-footer-cta"
          >
            Écrire au studio <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 pt-14 md:grid-cols-5">
          <div className="col-span-2">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">Studio</div>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-white/80">
              28 rue de Sévigné<br />
              75004 Paris, France
            </p>
            <p className="mt-3 max-w-[280px] text-[14px] leading-[1.6] text-white/80">
              14 quai Saint-Antoine<br />
              69002 Lyon, France
            </p>
            <p className="mt-4 text-[13px] text-white/55">Du mardi au vendredi · 10h — 19h</p>
          </div>
          <FooterCol title="Plan du site" items={colA} />
          <FooterCol title="Savoir-faire" items={colB} />
          <FooterCol title="Suivre" items={colC} />
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-white/50">
          <span>© 2014—2026 Maison Silencieuse · SAS au capital de 50 000 €</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">RGPD</a>
            <span>FR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">{title}</div>
      <ul className="mt-4 space-y-2.5 text-[14px] text-white/85">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="hover:text-white">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
