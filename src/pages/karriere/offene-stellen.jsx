import React, { useState } from "react";

export default function OffeneStellen() {
  // Beispielhafte (zunächst leere) Jobliste – kann später per API/State gefüllt werden
  const [jobs] = useState([
    // { id: 1, title: "Prozessingenieur:in PVD (m/w/d)", location: "Kieselbronn", type: "Vollzeit", desc: "Entwicklung, Validierung und Serienbetreuung von PVD‑Prozessen im regulierten Umfeld (ISO 13485)." },
    // { id: 2, title: "Qualitätsmanager:in Medizintechnik (m/w/d)", location: "Kieselbronn", type: "Teilzeit/Vollzeit", desc: "Aufbau und Pflege des QM‑Systems, Dokumentation, CAPA, Risiko‑ & Änderungsmanagement." },
  ]);

  // Locally defined helpers
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  const GradientCard = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl"
      style={{
        border: "4px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#000000",
      }}
    >
      {children != null ? children : null}
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="offene-stellen-title">
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
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <span className="text-sm">Bildplatzhalter – Karriere bei MediCoat</span>
          </div>
        </div>
      </section>

      {/* Stellenliste */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Aktuelle Ausschreibungen</h2>
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />

        {jobs.length === 0 ? (
          <GradientCard>
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
    </main>
  );
}

