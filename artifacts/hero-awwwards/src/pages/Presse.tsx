import Reveal from "@/components/Reveal";

const features = [
  { mag: "AD Magazine", title: "Maison Silencieuse, l'art du retrait", date: "Avril 2026", country: "FR" },
  { mag: "Wallpaper*", title: "The studio that whispers", date: "March 2026", country: "UK" },
  { mag: "Casa Vogue", title: "L'atelier che ascolta i luoghi", date: "Febbraio 2026", country: "IT" },
  { mag: "Architectural Digest", title: "Inside Villa Ocra, a quiet revolution", date: "January 2026", country: "US" },
  { mag: "Côté Maison", title: "Un appartement parisien remis à sa lumière", date: "Décembre 2025", country: "FR" },
  { mag: "Dezeen", title: "Maison Silencieuse completes Kyoto ryokan", date: "October 2025", country: "UK" },
  { mag: "Elle Décoration", title: "Les nouvelles voix discrètes du décor", date: "Septembre 2025", country: "FR" },
  { mag: "Frame Magazine", title: "Atelier Mauves — a publishing house in slow time", date: "July 2025", country: "NL" },
];

const awards = [
  { year: "2025", name: "AD100 — Studio de l'année (mention)" },
  { year: "2025", name: "Frame Awards — Workplace of the Year, finaliste" },
  { year: "2024", name: "Dezeen Awards — Hospitality Project, longlist" },
  { year: "2023", name: "Wallpaper* Design Awards — Best New Hotel" },
  { year: "2022", name: "Prix Émile Hermès — Mention spéciale" },
];

export default function Presse() {
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">
          Presse & distinctions
        </div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          PRESSE
        </h1>
        <p className="anim-up delay-300 mx-auto mt-6 max-w-[600px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Pour toute demande presse, écrivez à{" "}
          <a className="underline" href="mailto:presse@maison-silencieuse.fr">
            presse@maison-silencieuse.fr
          </a>
          . Notre dossier de presse 2026 est disponible sur demande (FR / EN / IT).
        </p>
      </div>

      {/* Features */}
      <section className="mt-16">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Articles récents</div>
        </Reveal>
        <Reveal stagger className="mt-6 grid grid-cols-1">
          {features.map((f) => (
            <div
              key={f.title}
              className="grid grid-cols-12 items-center gap-6 py-7 transition-colors hover:bg-white"
            >
              <div className="col-span-12 md:col-span-3">
                <div className="text-[18px] font-semibold tracking-tight text-[#0e0e0e]">{f.mag}</div>
                <div className="text-[12.5px] text-[#7a7a78]">{f.country}</div>
              </div>
              <div className="col-span-12 md:col-span-7 text-[16px] text-[#3a3a38]">{f.title}</div>
              <div className="col-span-12 text-right text-[13px] text-[#7a7a78] md:col-span-2">{f.date}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Awards */}
      <section className="mt-24">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Distinctions</div>
          <h2
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1, letterSpacing: "-0.035em", fontWeight: 800 }}
          >
            Prix & sélections.
          </h2>
        </Reveal>
        <Reveal stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {awards.map((a) => (
            <div key={a.name} className="flex items-baseline gap-6 pb-6">
              <span className="font-display text-[40px] font-bold leading-none text-[#0e0e0e]">{a.year}</span>
              <span className="text-[15px] text-[#3a3a38]">{a.name}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Press kit */}
      <Reveal as="section" className="mt-24 rounded-[8px] border border-black/10 bg-white p-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="text-[12px] uppercase tracking-[0.18em] text-[#ef7a2c]">Dossier de presse</div>
            <h3
              className="mt-3 font-display text-[#0e0e0e]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1, letterSpacing: "-0.025em", fontWeight: 700 }}
            >
              Visuels haute définition, biographies, plans et fiches projets.
            </h3>
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-3 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-[1px] hover:bg-black/80"
              data-testid="button-presskit-fr"
            >
              Télécharger — FR (42 Mo)
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-full border border-[#111] bg-white px-5 py-3 text-[13px] font-semibold text-[#111] transition-transform duration-300 hover:-translate-y-[1px] hover:bg-[#111] hover:text-white"
              data-testid="button-presskit-en"
            >
              Download — EN (42 MB)
            </button>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
