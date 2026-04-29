import { services } from "@/data/projects";
import Reveal from "@/components/Reveal";
import atelierImg from "@assets/generated_images/atelier-bureau.png";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  bg: string;
  fg: string;
};

const team: Member[] = [
  { name: "Hugo Brassart", role: "Fondateur · Direction artistique", bio: "Diplômé de l'École Camondo, après dix ans chez Joseph Dirand. Lauréat AD100 en 2022.", initials: "HB", bg: "#1f3b2d", fg: "#ffffff" },
  { name: "Margaux Lefranc", role: "Architecte d'intérieur", bio: "Formée à Paris et Lisbonne, ancienne du studio Sou Fujimoto. Pilote nos projets hôteliers internationaux.", initials: "ML", bg: "#f0d8c2", fg: "#1f1f1f" },
  { name: "Léa Vidal", role: "Designer mobilier", bio: "Diplômée de l'ENSCI, dirige notre atelier d'édition de mobilier sur mesure.", initials: "LV", bg: "#c2c8d0", fg: "#1f1f1f" },
  { name: "Antoine Chaumet", role: "Chef de projet sénior", bio: "Architecte HMONP, supervise les chantiers résidentiels en France et Suisse.", initials: "AC", bg: "#2a2a2a", fg: "#ffffff" },
  { name: "Théo Berland", role: "Scénographie & matières", bio: "Ancien de la Casa Lapin de Lisbonne. Compose les ambiances et les bibliothèques de matières.", initials: "TB", bg: "#b9b6a8", fg: "#1f1f1f" },
  { name: "Camille Roussel", role: "Direction de production", bio: "Pilote les budgets, les délais et l'orchestration des artisans partenaires.", initials: "CR", bg: "#ef7a2c", fg: "#ffffff" },
];

const milestones = [
  { y: "2014", t: "Fondation à Paris", d: "Hugo Brassart quitte le studio Dirand et fonde Maison Silencieuse, rue de Sévigné." },
  { y: "2017", t: "Premier hôtel", d: "Livraison du Mas de Lourmarin, première commande hôtelière du studio." },
  { y: "2019", t: "Atelier mobilier", d: "Ouverture de l'atelier d'édition à Lyon-Confluence avec Léa Vidal." },
  { y: "2022", t: "Reconnaissance internationale", d: "Trois projets primés en Italie, Japon et Portugal. Entrée au AD100." },
  { y: "2024", t: "Antenne lyonnaise", d: "Quatorze collaborateurs aujourd'hui, deux adresses, un seul ton." },
];

const numbers = [
  { n: "12", l: "années d'exercice" },
  { n: "14", l: "collaborateurs" },
  { n: "47", l: "artisans partenaires" },
  { n: "3", l: "continents" },
];

export default function Studio() {
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      {/* Title */}
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Studio</div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          LE STUDIO
        </h1>
        <p className="anim-up delay-300 mx-auto mt-6 max-w-[640px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Une maison d'architecture intérieure fondée à Paris en 2014, désormais répartie entre la
          rue de Sévigné et le quai Saint-Antoine.
        </p>
      </div>

      {/* Hero image */}
      <div className="anim-up delay-500 mt-12 overflow-hidden rounded-[6px]">
        <img
          src={atelierImg}
          alt="Vue de l'atelier du studio"
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
      </div>

      {/* Numbers strip */}
      <Reveal stagger className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {numbers.map((n) => (
          <div key={n.l}>
            <div
              className="font-display text-[#0e0e0e]"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1, letterSpacing: "-0.04em", fontWeight: 900 }}
            >
              {n.n}
            </div>
            <div className="mt-2 text-[12.5px] uppercase tracking-[0.14em] text-[#7a7a78]">{n.l}</div>
          </div>
        ))}
      </Reveal>

      {/* Manifeste */}
      <Reveal as="section" className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Manifeste</div>
          <p
            className="mt-4 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.025em", fontWeight: 600 }}
          >
            Une maison d'architecture intérieure qui parle à voix basse.
          </p>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p className="text-[16px] leading-[1.7] text-[#3a3a38]">
            Maison Silencieuse a été fondée en 2014 sur une intuition simple : un lieu réussi est un
            lieu où l'on n'a plus envie de partir. Nous ne signons ni un style, ni une signature
            visuelle. Nous écoutons d'abord la lumière, le terrain, vos heures, vos manies, puis
            nous dessinons.
          </p>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#3a3a38]">
            Nous travaillons en équipe restreinte, en pleine maîtrise d'œuvre. Chaque projet est suivi
            par un binôme architecte et scénographe, soutenu par notre atelier mobilier. Tous nos
            meubles sur mesure sont fabriqués en France, dans un rayon de 600 km autour de Lyon.
          </p>
        </div>
      </Reveal>

      {/* Services */}
      <section id="services" className="mt-24">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Savoir-faire</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Quatre métiers, sous un même toit.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="group rounded-[6px] bg-white p-8 transition-transform duration-500 hover:-translate-y-[2px]"
            >
              <div className="text-[12px] font-semibold tracking-[0.18em] text-[#ef7a2c]">{s.n}</div>
              <div className="mt-3 text-[20px] font-semibold tracking-tight text-[#0e0e0e]">{s.title}</div>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a3a38]">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Team */}
      <section className="mt-24">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Équipe</div>
            <h2
              className="mt-3 font-display text-[#0e0e0e]"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
            >
              Quatorze mains, une attention.
            </h2>
          </div>
          <div className="hidden text-[13px] text-[#7a7a78] md:block">
            14 collaborateurs · Paris & Lyon
          </div>
        </Reveal>
        <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group rounded-[6px] bg-white p-7 transition-transform duration-500 hover:-translate-y-[2px]"
              data-testid={`card-member-${m.name.split(" ")[0].toLowerCase()}`}
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold ring-1 ring-black/5"
                  style={{ background: m.bg, color: m.fg }}
                  aria-hidden
                >
                  {m.initials}
                </span>
                <div>
                  <div className="text-[18px] font-semibold tracking-tight text-[#0e0e0e]">
                    {m.name}
                  </div>
                  <div className="mt-0.5 text-[12.5px] uppercase tracking-[0.08em] text-[#ef7a2c]">
                    {m.role}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-[1.6] text-[#3a3a38]">{m.bio}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="mt-24">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Histoire</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Douze années, à voix basse.
          </h2>
        </Reveal>
        <Reveal stagger className="relative mt-12 flex flex-col gap-8">
          {milestones.map((m) => (
            <div
              key={m.y}
              className="relative grid grid-cols-12 items-start gap-6 rounded-[6px] bg-white p-7 transition-transform duration-500 hover:-translate-y-[2px]"
            >
              <div className="col-span-3 md:col-span-2">
                <span
                  className="font-display text-[#ef7a2c]"
                  style={{ fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em", fontWeight: 900 }}
                >
                  {m.y}
                </span>
              </div>
              <div className="col-span-9 md:col-span-3 md:pt-2 text-[16px] font-semibold tracking-tight text-[#0e0e0e]">
                {m.t}
              </div>
              <div className="col-span-12 md:col-span-7 md:pt-2 text-[14.5px] leading-[1.6] text-[#3a3a38]">
                {m.d}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA banner */}
      <Reveal as="section" className="mt-24 rounded-[8px] bg-[#0e0e0e] p-12 text-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">
              Carnet de commandes
            </div>
            <h3
              className="mt-3 font-display text-white"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700 }}
            >
              Trois nouveaux projets par an. Trois conversations qui commencent par une écoute.
            </h3>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#111] transition-transform duration-300 hover:-translate-y-[1px]"
              data-testid="link-studio-cta"
            >
              Confier votre lieu au studio
            </a>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
