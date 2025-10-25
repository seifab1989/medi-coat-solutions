import React from "react";
import { motion } from "framer-motion";

export default function KarteAnfahrt() {
   const standorte = [
    {
      name: "Kieselbronn",
      adresse: "Ludwig-Wolf-Straße 23, 75249 Kieselbronn",
      maps: "https://www.google.com/maps?q=Ludwig-Wolf-Straße+23,+75249+Kieselbronn",
      iframe: "https://www.google.com/maps?q=Ludwig-Wolf-Straße+23,+75249+Kieselbronn&output=embed",
    },
  ];

  // --- UeberUns Look & Feel Helpers ---
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  const GradientCard = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl"
      style={{
        border: "3px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#0f172a",
      }}
    >
      {children}
    </div>
  );

  // --- Lightweight Runtime-Checks (als einfache "Tests") ---
  if (typeof window !== "undefined") {
    console.assert(standorte.length >= 1, "[Test] Es sollte mind. einen Standort geben.");
    console.assert(standorte.every(s => typeof s.iframe === "string" && s.iframe.startsWith("http")), "[Test] iframe-URLs müssen absolut sein.");
    console.assert(standorte.every(s => /output=embed/.test(s.iframe)), "[Test] iframe-URL sollte 'output=embed' enthalten.");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Standortkarte & Anfahrt</h1>
        
        <p className="mt-3 text-slate-600 max-w-3xl">Finden Sie unsere Standorte und planen Sie Ihre Anreise.</p>
      </header>

      {/* Info-Block – Stil wie UeberUns */}
      <section className="mb-10">
        <GradientCard>
          <p className="text-slate-700">Wir legen Wert auf eine klare Orientierung und effiziente Abläufe. Daher finden Sie hier alle Informationen, um uns schnell und unkompliziert zu erreichen.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold">Unsere Anschrift</h2>
              <address className="not-italic mt-2 text-slate-700">
                [Firmenname GmbH]<br />
                [Straße Hausnummer]<br />
                [PLZ Ort]
              </address>
              <p className="mt-3 text-sm font-bold text-red-700 bg-red-50 border border-red-300 rounded-lg p-3">👉 Hinweis: Persönliche Anlieferungen und Abholungen von Beschichtungsgut sind ausschließlich Mo–Do von 14:00 bis 15:00 Uhr möglich. Bevorzugt senden Sie Ihre Sendungen bitte an unsere Packstation: [Packstation-Adresse]</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Anfahrt</h2>
              <ul className="mt-2 space-y-2 text-slate-700 list-disc pl-5 text-sm">
                <li>Mit dem Auto: Parkmöglichkeiten stehen in begrenztem Umfang vor Ort zur Verfügung.</li>
                <li>Mit öffentlichen Verkehrsmitteln: [Optional: kurze Beschreibung, z. B. „Ab Hauptbahnhof mit Buslinie XY bis Haltestelle Z.“]</li>
                <li>Navigation: Bitte nutzen Sie die unten eingebundene Karte für eine direkte Routenplanung.</li>
              </ul>
            </div>
          </div>
        </GradientCard>
      </section>

      {/* Volle Breite: interaktive Karte */}
      <section className="mt-10">
        {standorte.map((s, i) => (
          <motion.article
            key={s.name}
            className="overflow-visible"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="mt-4 aspect-[21/9] w-full rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
              <iframe
                title={`Karte ${s.name}`}
                src={s.iframe}
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
