import { services } from "@/data/projects";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Louis Paquet", role: "Fondateur · Direction artistique", bio: "Diplômé de l'École Camondo, après dix ans chez Joseph Dirand. Lauréat AD100 en 2022." },
  { name: "Koki Hirano", role: "Architecte d'intérieur", bio: "Tokyo–Paris, ancienne du studio Sou Fujimoto. Pilote nos projets hôteliers japonais." },
  { name: "Kim Levan", role: "Designer mobilier", bio: "Diplômée de l'ENSCI, dirige notre atelier d'édition de mobilier sur mesure." },
  { name: "Adrien Vanderpotte", role: "Chef de projet sénior", bio: "Architecte HMONP, supervise les chantiers résidentiels en France et Suisse." },
  { name: "Florent Roux-Durraffourt", role: "Scénographie & matières", bio: "Ancien de la Casa Lapin de Lisbonne. Compose les ambiances et les bibliothèques de matières." },
  { name: "Pauline Ostermann", role: "Direction de production", bio: "Pilote les budgets, les délais et l'orchestration des artisans partenaires." },
];

const milestones = [
  { y: "2014", t: "Fondation à Paris", d: "Louis Paquet quitte le studio Dirand et fonde Maison Silencieuse, rue de Sévigné." },
  { y: "2017", t: "Premier hôtel", d: "Livraison du Mas de Lourmarin, première commande hôtelière du studio." },
  { y: "2019", t: "Atelier mobilier", d: "Ouverture de l'atelier d'édition à Lyon-Confluence avec Kim Levan." },
  { y: "2022", t: "Reconnaissance internationale", d: "Trois projets primés en Italie, Japon et Portugal. Entrée au AD100." },
  { y: "2024", t: "Antenne lyonnaise", d: "Quatorze collaborateurs aujourd'hui, deux adresses, un seul ton." },
];

export default function Studio() {
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Studio</div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          LE STUDIO
        </h1>
      </div>

      {/* Intro */}
      <Reveal as="section" className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12">
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
            visuelle. Nous écoutons d'abord — la lumière, le terrain, vos heures, vos manies — puis
            nous dessinons.
          </p>
          <p className="mt-5 text-[16px] leading-[1.7] text-[#3a3a38]">
            Nous travaillons en équipe restreinte, en pleine maîtrise d'œuvre. Chaque projet est suivi
            par un binôme architecte–scénographe et notre atelier mobilier. Tous nos meubles sur
            mesure sont fabriqués en France, dans un rayon de 600 km autour de Lyon.
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
            <div key={s.n} className="bg-[#f3f3f1] p-8 transition-colors duration-500 hover:bg-white">
              <div className="text-[12px] font-semibold tracking-[0.18em] text-[#ef7a2c]">{s.n}</div>
              <div className="mt-3 text-[20px] font-semibold tracking-tight text-[#0e0e0e]">{s.title}</div>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a3a38]">{s.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Team */}
      <section className="mt-24">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Équipe</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Quatorze mains, une attention.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-[#f3f3f1] p-7 transition-colors duration-500 hover:bg-white"
              data-testid={`card-member-${m.name.split(" ")[0].toLowerCase()}`}
            >
              <div className="text-[20px] font-semibold tracking-tight text-[#0e0e0e]">{m.name}</div>
              <div className="mt-1 text-[13.5px] uppercase tracking-[0.06em] text-[#ef7a2c]">{m.role}</div>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#3a3a38]">{m.bio}</p>
            </div>
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
        <Reveal stagger className="mt-10 grid grid-cols-1">
          {milestones.map((m) => (
            <div key={m.y} className="grid grid-cols-12 gap-6 py-7">
              <div className="col-span-3 font-display text-[28px] font-bold text-[#0e0e0e] md:col-span-2">
                {m.y}
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
    </main>
  );
}
