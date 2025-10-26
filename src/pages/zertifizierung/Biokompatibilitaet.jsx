import React from 'react'

export default function Biokompatibilitaet() {
  // Lokale UI‑Helfer (Styling analog zur Originaldatei)
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  const GradientCard = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl"
      // Robuster Gradient-Border (Originaltechnik: doppeltes backgroundImage)
      style={{
        border: "2px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#000000",
      }}
    >
      {children}
    </div>
  );

  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="bio-title">
      {/* Titel & Intro */}
      <h1 id="bio-title" className="text-3xl md:text-4xl font-semibold">Biokompatibilität</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Bewertung von Materialien und Schichten gemäß ISO 10993; Prüfstrategie abgestimmt auf Anwendung.
      </p>

      {/* Merkmalskarten – angelehnt an UeberUns */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Was geprüft wurde</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard>
            <h4 className="font-semibold">Normenbezug</h4>
            <p className="text-sm text-slate-700 mt-2">Prüfungen gemäß DIN EN ISO 10993-5.</p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Prüfkörper</h4>
            <p className="text-sm text-slate-700 mt-2">PVD-Schichten auf Zylinder aus Ti‑Gr. 5.</p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Einsatz</h4>
            <p className="text-sm text-slate-700 mt-2">Eignung für Kontakt mit Gewebe und Körperflüssigkeiten.</p>
          </GradientCard>
        </div>
      </section>

      {/* Zytotoxizität – Abschnitt im gleichen Stil */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Prüfung auf Zytotoxizität nach DIN EN ISO 10993‑5</h3>
        <GradientBar />
        <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
          <span className="text-sm">Bildplatzhalter – Prüfung auf Zytotoxizität</span>
        </div>
      </section>

      {/* Abschluss-Hinweise */}
      <section className="mt-12">
        <GradientCard>
          <p className="text-slate-700 leading-relaxed">
            Die Prüfung unserer PVD-Schichten ergab, dass sie biokompatibel sind und somit die Anforderungen für den medizinischen Einsatz erfüllen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            Die Zertifikate, welche die Biokompatibilität bestätigen, stehen im Bereich
            <a href="/zertifizierung/zertifikate" className="text-blue-700 underline ml-1">Zertifikate</a> zum Download bereit.
          </p>
        </GradientCard>
      </section>
    </main>
  );
}
