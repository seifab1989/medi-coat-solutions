import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import { findPost } from "./posts";
import Button from "../../components/Button";

export default function BlogPost() {
  const { id } = useParams();
  const post = findPost(id);

  if (!post) {
    return (
      <Container as="main">
        <h1 className="text-2xl md:text-3xl font-semibold">Beitrag nicht gefunden</h1>
        <p className="mt-3 text-slate-700">Der angeforderte Blogbeitrag existiert nicht oder wurde verschoben.</p>
        <Link to="/aktuelles/blog" className="mt-6 inline-block px-4 py-2 rounded-xl bg-slate-800 text-white">Zurück zur Übersicht</Link>
      </Container>
    );
  }

  const formatDate = (iso) => {
    try {
      const d = new Date(`${iso}T00:00:00`);
      return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
    } catch {
      return iso;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author?.name,
    },
    image: post.image,
    description: post.short,
  };

  // Inject basic OpenGraph/Twitter meta for better LinkedIn previews
  React.useEffect(() => {
    const ensureMeta = (name, content, attr = "property") => {
      if (!content) return;
      let el = document.head.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const url = `${window.location.origin}${window.location.pathname}${window.location.hash}`;
    document.title = `${post.title} | Blog`;
    ensureMeta("og:type", "article");
    ensureMeta("og:title", post.title);
    ensureMeta("og:description", post.short);
    ensureMeta("og:image", post.image);
    ensureMeta("og:url", url);
    ensureMeta("twitter:card", "summary_large_image", "name");
    ensureMeta("twitter:title", post.title, "name");
    ensureMeta("twitter:description", post.short, "name");
    ensureMeta("twitter:image", post.image, "name");

    return () => {
      // Optionally clean up or leave tags; leaving is fine in SPA navigation
    };
  }, [post]);

  return (
    <Container as="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-slate-600">
        <Link to="/" className="hover:underline">Start</Link> <span>/</span>{" "}
        <Link to="/aktuelles/blog" className="hover:underline">Blog</Link> <span>/</span>{" "}
        <span className="text-slate-800">{post.title}</span>
      </nav>

      <h1 className="mt-3 text-3xl md:text-4xl font-semibold">{post.title}</h1>
      <GradientBar />
      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
        <span>{formatDate(post.date)}</span>
        <span>•</span>
        <span>{post.author?.name}</span>
        {post.author?.role && <span className="text-slate-400">({post.author.role})</span>}
      </div>

      {/* Inhalt über dem Bild */}
      {post.short && (
        <section className="mt-5">
          <h2 className="text-xl font-semibold text-slate-900">Zusammenfassung</h2>
          <p className="mt-2 text-slate-700 leading-relaxed">{post.short}</p>
        </section>
      )}

      {post.full && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">Artikel</h2>
          <article className="mt-2 prose prose-slate max-w-none">
            <p className="whitespace-pre-line">{post.full}</p>
          </article>
        </section>
      )}

      {/* Textquelle direkt unterhalb des Textes */}
      <div className="mt-4 text-xs text-slate-600">{post.textCredit}</div>

      <figure className="mt-6">
        <img src={post.image} alt={post.imageAlt} loading="lazy" className="w-full rounded-2xl" />
        <figcaption className="mt-2 text-xs text-slate-600">{post.imgCredit}</figcaption>
      </figure>

      <div className="mt-8">
        <Button to="/aktuelles/blog">Zurück zur Übersicht</Button>
      </div>
    </Container>
  );
}
