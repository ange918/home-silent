import Reveal from "@/components/Reveal";

type Item = {
  name: string;
  type: string;
  material: string;
  price: string;
  edition: string;
  palette: string;
};

const items: Item[] = [
  {
    name: "Banc Sève",
    type: "Banc bas",
    material: "Chêne ciré, cuir cognac tendu",
    price: "3 480 €",
    edition: "Édition de 24",
    palette: "linear-gradient(135deg,#a86a3c 0%,#6e3f22 60%,#3a1f10 100%)",
  },
  {
    name: "Lampe Ocra",
    type: "Lampe à poser",
    material: "Albâtre, laiton patiné",
    price: "1 940 €",
    edition: "Pièce signée",
    palette: "linear-gradient(140deg,#f4b341 0%,#ef7a2c 60%,#b22a36 100%)",
  },
  {
    name: "Table Mitsuba",
    type: "Table d'appoint",
    material: "Cèdre yakisugi, base acier brut",
    price: "2 260 €",
    edition: "Édition de 12",
    palette: "linear-gradient(150deg,#3a352d 0%,#1c1916 100%)",
  },
  {
    name: "Fauteuil Lourmarin",
    type: "Fauteuil bas",
    material: "Frêne, lin lavé écru",
    price: "4 120 €",
    edition: "Édition continue",
    palette: "linear-gradient(135deg,#efe7d8 0%,#d6c8b0 60%,#a89a82 100%)",
  },
  {
    name: "Console Cherche-Midi",
    type: "Console murale",
    material: "Marbre Vert d'Estours, laiton",
    price: "5 680 €",
    edition: "Édition de 18",
    palette: "linear-gradient(135deg,#2f4f3a 0%,#1f3528 60%,#15241c 100%)",
  },
  {
    name: "Miroir Mauves",
    type: "Miroir de mur",
    material: "Verre soufflé, cadre laqué",
    price: "1 280 €",
    edition: "Édition continue",
    palette: "linear-gradient(135deg,#e8e3d6 0%,#c9c1ad 55%,#8a8169 100%)",
  },
];

export default function Boutique() {
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">
          Mobilier d'édition
        </div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          BOUTIQUE
        </h1>
        <p className="anim-up delay-300 mx-auto mt-6 max-w-[600px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Une trentaine de pièces dessinées par le studio, fabriquées en France, en éditions courtes
          ou sur commande. Délais de fabrication : 6 à 14 semaines.
        </p>
      </div>

      <Reveal stagger className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.name}
            className="group"
            data-testid={`card-item-${it.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px]"
              style={{ background: it.palette }}
            >
              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[#111]">
                {it.edition}
              </span>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white transition-transform duration-700 group-hover:-translate-y-1">
                <div className="font-display text-[44px] font-black leading-none tracking-tight">
                  {it.name.split(" ")[0]}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 pt-4">
              <div>
                <div className="text-[18px] font-semibold tracking-tight text-[#0e0e0e]">{it.name}</div>
                <div className="mt-1 text-[13.5px] text-[#3a3a38]">{it.type} · {it.material}</div>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-semibold tracking-tight text-[#0e0e0e]">{it.price}</div>
                <div className="text-[12px] uppercase tracking-[0.12em] text-[#ef7a2c]">Sur demande</div>
              </div>
            </div>
          </article>
        ))}
      </Reveal>

      <Reveal as="section" className="mt-24 grid grid-cols-1 gap-10 rounded-[8px] bg-white p-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#ef7a2c]">Sur mesure</div>
          <h3
            className="mt-3 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.025em", fontWeight: 700 }}
          >
            Une pièce taillée pour votre lieu.
          </h3>
        </div>
        <div className="md:col-span-7">
          <p className="text-[15.5px] leading-[1.7] text-[#3a3a38]">
            Au-delà de notre catalogue, nous dessinons des pièces uniques pour vos projets — bibliothèque
            murale, banquette d'entrée, table de famille. Trois rendez-vous suffisent en général :
            écoute, esquisse, validation. Délais de 8 à 16 semaines selon les ateliers.
          </p>
          <button
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-3 text-[13px] font-semibold text-white transition-transform duration-300 hover:-translate-y-[1px] hover:bg-black/80"
            data-testid="button-custom"
          >
            Demander un devis sur mesure
          </button>
        </div>
      </Reveal>
    </main>
  );
}
