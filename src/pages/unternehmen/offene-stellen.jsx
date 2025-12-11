import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";

export default function OffeneStellen() {
  const [jobs] = useState([]);

  // Seite komplett ausblenden (Route bleibt bestehen)
  return (
    <div className="hidden">
    <Container as="main" role="main" aria-labelledby="offene-stellen-title">
      <h1 id="offene-stellen-title" className="text-3xl md:text-4xl font-semibold">Offene Stellen</h1>
      <GradientBar />

      <section className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <p className="text-slate-700 leading-relaxed">
            Hier erscheinen ausgeschriebene Positionen mit Aufgaben & Profil. Bewerbungen bitte über das{" "}
            <Link to="/kontakt/formular" className="text-blue-700 underline">Kontaktformular</Link>{" "}
            oder per E‑Mail einreichen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind ein kleines, wachsendes Unternehmen im Bereich der Medizintechnik. Da wir unser Team bewusst schlank und
            persönlich halten, haben wir aktuell <strong>keine offenen Stellen</strong> zu besetzen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Neue Positionen entstehen bei uns in erster Linie, wenn unser Unternehmen weiterwächst oder sich spannende Projekte ergeben.
            Deshalb lohnt es sich, regelmäßig auf dieser Seite vorbeizuschauen. Sobald wir Verstärkung suchen, findest du hier alle aktuellen Ausschreibungen.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="h-40 sm:h-48 lg:h-56 w-full mt-2 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white">
            <img
              src={assetUrl("assets/offene-stellen.png")}
              alt="Karriere – Offene Stellen"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Aktuelle Ausschreibungen</h2>
        <GradientBar className="mt-3 mb-5" />

        {jobs.length === 0 ? (
          <GradientCard borderWidth={2}>
            <p className="text-slate-700">
              Derzeit sind keine Stellen ausgeschrieben. Schauen Sie gerne später erneut vorbei.
            </p>
          </GradientCard>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <GradientCard key={job.id}>
                <article>
                  <header className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200">{job.type}</span>
                  </header>
                  <div className="mt-1 text-slate-500 text-sm">📍 {job.location}</div>
                  <p className="mt-3 text-slate-700">{job.desc}</p>
                  <div className="mt-4">
                    <Link to="/kontakt/formular" className="text-blue-700 underline">Jetzt bewerben</Link>
                  </div>
                </article>
              </GradientCard>
            ))}
          </div>
        )}
      </section>
    </Container>
    </div>
  );
}
