import React, { useState } from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";

export default function OffeneStellen() {
  // Beispielhafte (zunächst leere) Jobliste – kann später per API/State gefüllt werden
  const [jobs] = useState([
    // { id: 1, title: "Prozessingenieur:in PVD (m/w/d)", location: "Kieselbronn", type: "Vollzeit", desc: "Entwicklung, Validierung und Serienbetreuung von PVD‑Prozessen im regulierten Umfeld (ISO 13485)." },
    // { id: 2, title: "Qualitätsmanager:in Medizintechnik (m/w/d)", location: "Kieselbronn", type: "Teilzeit/Vollzeit", desc: "Aufbau und Pflege des QM‑Systems, Dokumentation, CAPA, Risiko‑ & Änderungsmanagement." },
  ]);

  // Gemeinsame Komponenten & assetUrl werden genutzt

  return (
  <Container as="main" role="main" aria-labelledby="offene-stellen-title">
      {/* Titel & Divider wie bei "Messeauftritte" */}
      <h1 id="offene-stellen-title" className="text-3xl md:text-4xl font-semibold">Offene Stellen</h1>
      <GradientBar />

      {/* Intro-Section analog zu Messeauftritte: Text links, Visual rechts */}
      <section className="mt-6 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <p className="text-slate-700 leading-relaxed">
            Hier erscheinen ausgeschriebene Positionen mit Aufgaben & Profil. Bewerbungen bitte über das
            {" "}
            <a href="/kontakt/formular" className="text-blue-700 underline">Kontaktformular</a>
            {" "}
            oder per E‑Mail einreichen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind ein kleines, wachsendes Unternehmen im Bereich Medizintechnik. Da wir unser Team bewusst schlank und
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

      {/* Stellenliste */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Aktuelle Ausschreibungen</h2>
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />

        {jobs.length === 0 ? (
          <GradientCard borderWidth={4}>
            <p className="text-slate-700">
              Derzeit sind keine Stellen ausgeschrieben. Schauen Sie gerne später erneut vorbei oder senden Sie uns eine
              <a href="/kontakt/formular" className="text-blue-700 underline ml-1">Initiativbewerbung</a>.
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
                    <a href="/kontakt/formular" className="text-blue-700 underline">Jetzt bewerben</a>
                  </div>
                </article>
              </GradientCard>
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}

