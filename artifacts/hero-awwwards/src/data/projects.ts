import villaOcra from "@assets/generated_images/villa-ocra.png";
import haussmann from "@assets/generated_images/appartement-haussmann.png";
import ryokan from "@assets/generated_images/ryokan-kyoto.png";
import atelier from "@assets/generated_images/atelier-bureau.png";
import mediterranee from "@assets/generated_images/villa-mediterranee.png";
import chalet from "@assets/generated_images/chalet-megeve.png";

export type Project = {
  slug: string;
  name: string;
  category: "Résidentiel" | "Hôtellerie" | "Bureaux" | "Mobilier";
  location: string;
  year: number;
  surface: string;
  cover: string;
  palette: string;
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "villa-ocra",
    name: "Villa Ocra",
    category: "Résidentiel",
    location: "Lourmarin, Provence",
    year: 2026,
    surface: "320 m²",
    cover: villaOcra,
    palette: "linear-gradient(120deg,#f4b341 0%,#ef7a2c 38%,#d6442c 78%,#b22a36 100%)",
    blurb:
      "Une bastide du XVIIIᵉ siècle ramenée à sa lumière originelle. Terre cuite, lin écru, chêne ciré.",
  },
  {
    slug: "appartement-haussmann",
    name: "Appartement Cherche-Midi",
    category: "Résidentiel",
    location: "Paris 6ᵉ",
    year: 2025,
    surface: "180 m²",
    cover: haussmann,
    palette: "linear-gradient(135deg,#2f4f3a 0%,#1f3528 60%,#15241c 100%)",
    blurb:
      "Restitution d'un appartement haussmannien : moulures, point de Hongrie, vert mousse, laiton patiné.",
  },
  {
    slug: "ryokan-kyoto",
    name: "Ryokan Mitsuba",
    category: "Hôtellerie",
    location: "Kyoto, Japon",
    year: 2025,
    surface: "12 chambres",
    cover: ryokan,
    palette: "linear-gradient(150deg,#efe7d8 0%,#d6c8b0 60%,#a89a82 100%)",
    blurb:
      "Une auberge contemplative pensée comme un long souffle. Tatami, cèdre brûlé, washi, ikebana.",
  },
  {
    slug: "atelier-bureaux",
    name: "Atelier Mauves",
    category: "Bureaux",
    location: "Lyon Confluence",
    year: 2024,
    surface: "640 m²",
    cover: atelier,
    palette: "linear-gradient(135deg,#e8e3d6 0%,#c9c1ad 55%,#8a8169 100%)",
    blurb:
      "Un siège pour une maison d'édition, où le calme du papier dicte le rythme des espaces.",
  },
  {
    slug: "villa-mediterranee",
    name: "Villa Méditerranée",
    category: "Résidentiel",
    location: "Cap d'Antibes",
    year: 2024,
    surface: "410 m²",
    cover: mediterranee,
    palette: "linear-gradient(135deg,#f1e3cd 0%,#d8b88d 55%,#9c6f3f 100%)",
    blurb:
      "Travertin, laiton brossé, lin lavé. Une maison-balcon ouverte sur la pinède et la mer.",
  },
  {
    slug: "chalet-megeve",
    name: "Chalet Sève",
    category: "Hôtellerie",
    location: "Megève, Haute-Savoie",
    year: 2023,
    surface: "8 suites",
    cover: chalet,
    palette: "linear-gradient(135deg,#a86a3c 0%,#6e3f22 55%,#3a1f10 100%)",
    blurb:
      "Pierre sèche, sapin vieilli, peaux et cuir cognac : un refuge alpin pour la haute saison.",
  },
];

export const journalPosts = [
  {
    slug: "lumiere-mediterraneenne",
    title: "Penser la lumière méditerranéenne",
    excerpt:
      "Comment composer avec une lumière qui frappe à 14h et caresse à 18h. Notes de chantier depuis le Cap d'Antibes.",
    date: "12 mars 2026",
    read: "6 min",
    category: "Carnets",
  },
  {
    slug: "atelier-cedre",
    title: "Trois mois à l'atelier de cèdre brûlé",
    excerpt:
      "Récit d'une commande de panneaux yakisugi pour le Ryokan Mitsuba — du choix du bois au noir profond.",
    date: "27 février 2026",
    read: "9 min",
    category: "Matières",
  },
  {
    slug: "manifeste-silence",
    title: "Manifeste — habiter le silence",
    excerpt:
      "Le silence n'est pas l'absence de bruit, c'est la présence d'attention. Texte d'ouverture du studio.",
    date: "1ᵉʳ janvier 2026",
    read: "4 min",
    category: "Pensée",
  },
];

export const services = [
  {
    n: "01",
    title: "Architecture intérieure",
    body: "Conception sur mesure, plans, permis, suivi de chantier complet jusqu'à la livraison.",
  },
  {
    n: "02",
    title: "Décoration & scénographie",
    body: "Mise en scène, mobilier, textiles, œuvres. Une seule lecture du lieu, du sol au plafond.",
  },
  {
    n: "03",
    title: "Mobilier sur mesure",
    body: "Pièces dessinées et fabriquées en France avec nos artisans : ébénistes, tapissiers, ferronniers.",
  },
  {
    n: "04",
    title: "Hôtellerie & lieux recevant",
    body: "Hôtels, restaurants, maisons d'hôtes. Concept, identité spatiale, prototypage des chambres.",
  },
];
