import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { posts } from "./posts";

export default function Blog() {

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
    const testId = (base) => (index === 0 ? { [`data-testid`]: base } : {});

    return (
      <article
        className="relative group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
        {...(index === 0 ? { "data-testid": "blog-card" } : {})}
      >
        <Link to={`/aktuelles/blog/${post.id}`} className="block">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={post.image} alt={post.imageAlt} className="h-full w-full object-cover" />
          </div>
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
            <span className="mt-3 inline-block text-sm font-medium text-blue-700">Weiterlesen</span>
          </div>
        </Link>
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
