import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const subjects = [
  "Projet résidentiel",
  "Projet hôtelier",
  "Aménagement de bureaux",
  "Mobilier sur mesure",
  "Demande presse",
  "Candidature spontanée",
] as const;

export default function Contact() {
  return (
    <main className="anim-page mx-auto max-w-[1400px] px-6 pt-12">
      <div className="text-center">
        <div className="anim-up text-[12px] uppercase tracking-[0.18em] text-[#7a7a78]">
          Premier contact
        </div>
        <h1
          className="anim-hero mt-3 font-display text-[#0e0e0e]"
          style={{ fontSize: "clamp(48px, 9vw, 156px)", lineHeight: 0.95, letterSpacing: "-0.04em", fontWeight: 900 }}
          data-testid="text-page-title"
        >
          ÉCRIRE
        </h1>
        <p className="anim-up delay-300 mx-auto mt-6 max-w-[640px] text-[15.5px] leading-[1.55] text-[#3a3a38]">
          Parlez-nous de votre lieu, de l'usage que vous en rêvez, et du calendrier idéal. Une réponse
          personnelle vous est adressée sous 72 heures.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* Form */}
        <Reveal as="form" className="md:col-span-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Prénom" testId="input-firstname" />
            <Field label="Nom" testId="input-lastname" />
            <Field label="Adresse e-mail" type="email" testId="input-email" />
            <Field label="Téléphone (optionnel)" type="tel" testId="input-phone" />
          </div>

          <div className="mt-6">
            <div className="mb-2 text-[12px] uppercase tracking-[0.14em] text-[#7a7a78]">Sujet</div>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  className="rounded-full border border-black/15 bg-white px-3.5 py-2 text-[13px] font-medium text-[#111] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#111] hover:bg-[#111] hover:text-white"
                  data-testid={`button-subject-${s.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-[12px] uppercase tracking-[0.14em] text-[#7a7a78]">Lieu</div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field label="Ville" testId="input-city" />
              <Field label="Surface (m²)" testId="input-surface" />
              <Field label="Calendrier idéal" testId="input-timeline" />
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-[12px] uppercase tracking-[0.14em] text-[#7a7a78]">Message</div>
            <textarea
              rows={6}
              placeholder="Racontez-nous votre lieu et l'usage que vous en rêvez."
              className="w-full rounded-[6px] border border-black/15 bg-white p-4 text-[14.5px] leading-[1.6] text-[#111] outline-none transition-colors focus:border-[#111]"
              data-testid="textarea-message"
            />
          </div>

          <button
            type="button"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3.5 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-[1px] hover:bg-black/80"
            data-testid="button-submit"
          >
            Envoyer au studio
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
          </button>
          <p className="mt-3 text-[12px] text-[#7a7a78]">
            En envoyant ce message, vous acceptez notre politique de confidentialité.
          </p>
        </Reveal>

        {/* Info */}
        <Reveal stagger as="aside" className="flex flex-col gap-5 md:col-span-5">
          <div className="rounded-[8px] bg-white p-7 transition-colors duration-500 hover:bg-white">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[#ef7a2c]">Studio Paris</div>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[#0e0e0e]">
              28 rue de Sévigné<br />75004 Paris
            </p>
            <p className="mt-3 text-[13.5px] text-[#3a3a38]">
              <a href="mailto:bonjour@maison-silencieuse.fr" className="underline">bonjour@maison-silencieuse.fr</a><br />
              +33 (0)1 42 78 18 14
            </p>
          </div>
          <div className="rounded-[8px] bg-white p-7">
            <div className="text-[12px] uppercase tracking-[0.14em] text-[#ef7a2c]">Atelier & Studio Lyon</div>
            <p className="mt-3 text-[15.5px] leading-[1.6] text-[#0e0e0e]">
              14 quai Saint-Antoine<br />69002 Lyon
            </p>
            <p className="mt-3 text-[13.5px] text-[#3a3a38]">
              <a href="mailto:atelier@maison-silencieuse.fr" className="underline">atelier@maison-silencieuse.fr</a><br />
              +33 (0)4 72 11 09 30
            </p>
          </div>
          <div className="rounded-[8px] bg-[#0e0e0e] p-7 text-white">
            <div className="text-[12px] uppercase tracking-[0.14em] text-white/55">Carnet de commandes</div>
            <p className="mt-3 text-[15.5px] leading-[1.55] text-white/85">
              Nous prenons trois nouveaux projets par an. Les commandes 2026 sont fermées ;
              ouverture du carnet 2027 le 15 mai 2026.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

function Field({
  label,
  testId,
  type = "text",
}: {
  label: string;
  testId: string;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 text-[12px] uppercase tracking-[0.14em] text-[#7a7a78]">{label}</div>
      <input
        type={type}
        className="h-11 w-full rounded-[6px] border border-black/15 bg-white px-3.5 text-[14.5px] text-[#111] outline-none transition-colors focus:border-[#111]"
        data-testid={testId}
      />
    </label>
  );
}
