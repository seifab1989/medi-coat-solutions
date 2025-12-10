// Shared blog posts data for list and detail pages
import { assetUrl } from "../../utils/assetUrl";
export const posts = [
  {
    id: "pvd-30",
    date: "2025-03-12",
    author: { name: "Dr. Fabian Seifried", role: "Gründer / Geschäftsführer" },
    title:
      "Neue PVD-Schichten verlängern die Lebensdauer chirurgischer Instrumente um bis zu 30 %.",
    image: assetUrl("blog/pvd-30.jpg"),
    imageAlt: "Symbolbild chirurgische Instrumente mit Beschichtung",
    short:
      "Modern entwickelte PVD‑Schichten (z. B. CrN‑Modifikationen und DLC‑Systeme) reduzieren Abrieb und Korrosion an hochbeanspruchten Kontaktflächen chirurgischer Instrumente.",
    full:
      "PVD‑Beschichtungen (Physical Vapour Deposition) ermöglichen dünne, dichte und harte Funktionsschichten mit definierter Chemie und Mikrostruktur. In aktuellen Untersuchungen wurden mehrlagige Systeme mit Gradientenzonen und gezielter Eigenspannung entwickelt, um Mikrorissbildung zu hemmen und Kantenstabilität zu erhöhen. Das Ergebnis sind geringere Verschleißraten in Gleitlagern und Gelenken sowie zuverlässigere Korrosionsbeständigkeit nach wiederholten Reinigungs‑ und Sterilisationszyklen.",
    imgCredit: "📷 Bildquelle: Unsplash / Author",
    textCredit: "📝 Textquelle: Journal of Coating Technology, 2024",
  },
  {
    id: "biokomp-10993",
    date: "2025-05-30",
    author: { name: "Dr. Sven Ulrich", role: "Leitung Qualität & Regulierung" },
    title: "Biokompatibilität: Prüfansätze nach DIN EN ISO 10993 im Überblick",
    image:
      "https://images.unsplash.com/photo-1582719478400-77106b8f0f6d?auto=format&fit=crop&w=1600&q=60",
    imageAlt: "Labor-Setup für Materialtests",
    short:
      "Welche Prüfschritte für PVD‑Schichten bei Medizinprodukten typischerweise relevant sind – von Zytotoxizität bis Chemikalienbeständigkeit.",
    full:
      "Kurzer Überblick über Prüfpläne und sinnvolle Sequenzen für Entwicklungs‑ und Serienphase einschließlich SPC‑Begleitung.",
    imgCredit: "📷 Bildquelle: Unsplash / Lab Photographer",
    textCredit: "📝 Textquelle: Interner Leitfaden, 2025",
  },
  {
    id: "nachhaltigkeit-pvd",
    date: "2025-07-18",
    author: { name: "Dr. Michael Stüber", role: "F&E Beschichtungssysteme" },
    title: "Nachhaltigkeit in der PVD: Energieverbrauch senken, Qualität sichern",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=60",
    imageAlt: "PVD-Anlage im Betrieb",
    short:
      "Wie sich Zykluszeiten, Chargenplanung und Vorbehandlung auf die CO₂‑Bilanz auswirken – Praxisnotizen.",
    full:
      "Erfahrungen mit Lastmanagement, Vakuumperformance und Wiederverwendbarkeit von Prozessmedien.",
    imgCredit: "📷 Bildquelle: Unsplash / Industry",
    textCredit: "📝 Textquelle: Workshop-Dokumentation, 2025",
  },
];

export const findPost = (id) => posts.find((p) => p.id === id);