import { ArrowUpRight } from "lucide-react";
import { journalPosts } from "@/data/projects";
import Reveal from "@/components/Reveal";

const extra = [
  {
    slug: "calque-lourmarin",
    title: "Le calque de Lourmarin",
    excerpt:
      "Comment nous avons reconstruit, au crayon de couleur, la pénombre d'origine de la Villa Ocra.",
    date: "2 mars 2026",
    read: "7 min",
    category: "Carnets",
  },
  {
    slug: "boutique-marbres",
    title: "Petite anthologie des marbres tièdes",
    excerpt:
      "Trois carrières, trois caractères. Pourquoi nous quittons peu à peu le Calacatta pour les marbres bourguignons.",
    date: "14 février 2026",
    read: "5 min",
    category: "Matières",
  },
  {
    slug: "lecture-sote",
    title: "Lecture — Junichirō Tanizaki, Éloge de l'ombre",
    excerpt:
      "Le texte qui revient le plus souvent dans nos discussions de fin de journée. Et pourquoi.",
    date: "30 janvier 2026",
    read: "8 min",
    category: "Pensée",
  },
];

const all = [...journalPosts, ...extra];

export default function Journal() {
  const [feature, ...rest] = all;
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Journal</div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          JOURNAL
        </h1>
        <p className="anim-up delay-300 mx-auto mt-6 max-w-[600px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Notes de chantier, lectures, matières et conversations. Une pensée tous les quinze jours.
        </p>
      </div>

      {/* Feature */}
      <Reveal
        as="article"
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12"
        rootMargin="0px"
      >
        <div className="md:col-span-5">
          <div
            className="aspect-[4/5] w-full overflow-hidden rounded-[6px]"
            style={{ background: "linear-gradient(140deg,#f4b341 0%,#ef7a2c 50%,#b22a36 100%)" }}
          />
        </div>
        <div className="md:col-span-7 md:pt-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-black/15 bg-white px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#3a3a38]">
              {feature.category}
            </span>
            <span className="text-[12.5px] text-[#7a7a78]">
              {feature.date} · {feature.read}
            </span>
          </div>
          <h2
            className="mt-5 font-display text-[#0e0e0e]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 700 }}
          >
            {feature.title}
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-[#3a3a38]">{feature.excerpt}</p>
          <a
            href="#"
            className="group mt-7 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111] underline underline-offset-[5px]"
          >
            Lire l'article complet
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
          </a>
        </div>
      </Reveal>

      {/* Recent */}
      <section className="mt-24">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">Récemment</div>
        </Reveal>
        <Reveal stagger className="mt-6 grid grid-cols-1">
          {rest.map((p) => (
            <a
              key={p.slug}
              href="#"
              className="group grid grid-cols-12 gap-6 py-8 transition-colors hover:bg-white"
              data-testid={`link-post-${p.slug}`}
            >
              <div className="col-span-3 text-[13px] text-[#7a7a78] md:col-span-2">{p.date}</div>
              <div className="col-span-9 md:col-span-2">
                <span className="rounded-full border border-black/15 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[#3a3a38]">
                  {p.category}
                </span>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="text-[22px] font-semibold tracking-tight text-[#0e0e0e] transition-colors group-hover:text-[#ef7a2c]">
                  {p.title}
                </div>
                <p className="mt-2 max-w-[600px] text-[14.5px] leading-[1.55] text-[#3a3a38]">{p.excerpt}</p>
              </div>
              <div className="col-span-12 flex items-center justify-end text-[12px] text-[#7a7a78] md:col-span-1">
                {p.read}
              </div>
            </a>
          ))}
        </Reveal>
      </section>

      {/* Newsletter */}
      <Reveal as="section" className="mt-24 rounded-[8px] bg-[#0e0e0e] p-12 text-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/45">Lettre du studio</div>
            <h3
              className="mt-3 font-display text-white"
              style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700 }}
            >
              Une lettre, deux fois par mois. Rien de plus.
            </h3>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.6] text-white/70">
              Notes de chantier, sélections de matières, comptes rendus de lectures. Désabonnement
              en un clic, jamais de partage de votre adresse.
            </p>
          </div>
          <form className="flex items-end md:col-span-5">
            <div className="flex w-full items-center gap-2 rounded-full bg-white p-1.5">
              <input
                type="email"
                placeholder="prénom@maison.fr"
                className="flex-1 bg-transparent px-4 text-[14px] text-[#111] outline-none placeholder:text-[#7a7a78]"
                data-testid="input-newsletter"
              />
              <button
                type="button"
                className="rounded-full bg-[#111] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-black/80"
                data-testid="button-newsletter"
              >
                S'abonner
              </button>
            </div>
          </form>
        </div>
      </Reveal>
    </main>
  );
}
