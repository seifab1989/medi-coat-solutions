import React, { useState } from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";

export default function Blog() {
  // --- Daten aus der Originaldatei extrahiert / vorbereitet ---
    const posts = [
    {
      id: "pvd-30",
      date: "2025-03-12",
      author: { name: "Dr. Fabian Seifried", role: "Gründer / Geschäftsführer" },
      title:
        "Neue PVD-Schichten verlängern die Lebensdauer chirurgischer Instrumente um bis zu 30 %.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=60",
      imageAlt: "Symbolbild chirurgische Instrumente mit Beschichtung",
      short: `Modern entwickelte PVD‑Schichten (z. B. CrN‑Modifikationen und DLC‑Systeme) reduzieren Abrieb und Korrosion
an hochbeanspruchten Kontaktflächen chirurgischer Instrumente. Durch verbesserte Haftung, optimierte Schichtarchitektur und
sterilisationsbeständige Oberflächen sinken Reibung und Partikelabgabe, was die Funktion und Aufbereitbarkeit nachhaltig
verbessert. `.trim(),
      full: `PVD‑Beschichtungen (Physical Vapour Deposition) ermöglichen dünne, dichte und harte Funktionsschichten mit
definierter Chemie und Mikrostruktur. In aktuellen Untersuchungen wurden mehrlagige Systeme mit Gradientenzonen und
gezielter Eigenspannung entwickelt, um Mikrorissbildung zu hemmen und Kantenstabilität zu erhöhen. Das Ergebnis sind
gerigere Verschleißraten in Gleitlagern und Gelenken sowie zuverlässigere Korrosionsbeständigkeit nach wiederholten
Reinigungs‑ und Sterilisationszyklen.`.trim(),
      imgCredit: "📷 Bildquelle: Unsplash / Author",
      textCredit: "📝 Textquelle: Journal of Coating Technology, 2024",
    },
    // Beispiel 2 – weiterer Beitrag
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
    // Beispiel 3 – weiterer Beitrag
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

  // Use shared GradientCard

  // --- Title policy (card only) ---
  const TITLE_MAX = 60;
  const truncateTitle = (t) => (t.length > TITLE_MAX ? t.slice(0, TITLE_MAX - 3) + "…" : t);

  // --- Date formatter (local) + Filters ---
  const formatDate = (iso) => {
    try {
      const d = new Date(`${iso}T00:00:00`);
      return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch {
      return iso;
    }
  };

  const authors = Array.from(new Set(posts.map(p => p.author?.name).filter(Boolean)));
  const years = Array.from(new Set(posts.map(p => new Date(`${p.date}T00:00:00`).getFullYear()))).sort((a,b)=>b-a);

  const [query, setQuery] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [yearFrom, setYearFrom] = React.useState("");
  const [yearTo, setYearTo] = React.useState("");

  const inRange = (iso) => {
    const y = new Date(`${iso}T00:00:00`).getFullYear();
    const fromOk = yearFrom ? y >= Number(yearFrom) : true;
    const toOk = yearTo ? y <= Number(yearTo) : true;
    return fromOk && toOk;
  };

  const filteredPosts = posts.filter(p => {
    const q = query.trim().toLowerCase();
    const text = [p.title, p.short, p.full].join(" ").toLowerCase();
    const matchesQuery = q ? text.includes(q) : true;
    const matchesAuthor = author ? (p.author?.name === author) : true;
    const matchesYear = inRange(p.date);
    return matchesQuery && matchesAuthor && matchesYear;
  });

  // --- Reusable blog card ---
  const BlogCard = ({ post, index }) => {
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    const isExpanded = open || hover;
    const testId = (base) => (index === 0 ? { [`data-testid`]: base } : {});

    return (
      <article
        className="relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-expanded={isExpanded}
        {...(index === 0 ? { "data-testid": "blog-card" } : {})}
      >
        {/* Header-Bild */}
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
        </div>
        {/* Body */}
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.author?.name}</span>
            {post.author?.role && <span className="text-slate-400">({post.author.role})</span>}
          </div>
          <h3 className="mt-2 font-semibold text-lg leading-snug" {...testId("blog-title")}>
            {truncateTitle(post.title)}
          </h3>
          <p className="mt-2 text-sm text-slate-700 line-clamp-6" {...testId("blog-short")}>
            {post.short}
          </p>
        </div>
        {/* Hover/Click Overlay with full content & credits */}
        {isExpanded && (
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-5 flex flex-col justify-between overflow-y-auto" {...testId("blog-overlay")}>
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.author?.name}</span>
                {post.author?.role && <span className="text-slate-400">({post.author.role})</span>}
              </div>
              <h3 className="mt-2 font-semibold text-lg leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-700 whitespace-pre-line">{post.full}</p>
            </div>
            <div className="mt-4 text-xs text-slate-600">
              <div>{post.imgCredit}</div>
              <div>{post.textCredit}</div>
            </div>
          </div>
        )}
      </article>
    );
  };

  // --- Page layout (UeberUns-style) ---
  return (
    <Container as="main">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold">Blog und Artikel</h1>
      <p className="mt-3 text-slate-700 leading-relaxed w-full">
        In unserem Blog finden Sie aktuelle Informationen und Fachbeiträge rund um PVD‑Schichten in der Medizintechnik. Wir berichten
        über Entwicklungen, Forschungsergebnisse und Innovationen.Wir verbinden praxisrelevante Einblicke aus Beschichtungstechnik, Qualitätssicherung und Regulierung. Beiträge sind kompakt,
            nachvollziehbar und auf medizintechnische Anwendungen fokussiert.
      </p>

      {/* Filter bar */}
      <section className="mt-8">
        <div className="grid md:grid-cols-4 gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Suche in Titel & Text"
            className="rounded-xl border border-slate-300 px-3 py-2 w-full"
            aria-label="Suche"
          />
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="rounded-xl border border-slate-300 px-3 py-2 w-full"
            aria-label="Autor filtern"
          >
            <option value="">Alle Autor:innen</option>
            {authors.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <select
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
            className="rounded-xl border border-slate-300 px-3 py-2 w-full"
            aria-label="Ab Jahr"
          >
            <option value="">Ab Jahr</option>
            {years.map((y)=> (<option key={`from-${y}`} value={y}>{y}</option>))}
          </select>
          <select
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
            className="rounded-xl border border-slate-300 px-3 py-2 w-full"
            aria-label="Bis Jahr"
          >
            <option value="">Bis Jahr</option>
            {years.map((y)=> (<option key={`to-${y}`} value={y}>{y}</option>))}
          </select>
        </div>
      </section>

      {/* Cards grid */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Aktuelle Beiträge</h2>
        <GradientBar />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <GradientCard key={post.id}>
              <BlogCard post={post} index={idx} />
            </GradientCard>
          ))}
        </div>
      </section>
    </Container>
  );
}
