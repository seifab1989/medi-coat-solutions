import React from 'react'

export default function Qualitaetsmanagement() {
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  // Robuste Gradient-Border-Karte (identische Technik wie im Quellfile)
  const GradientCard = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl"
      style={{
        border: "1px solid transparent",
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
    <main
      className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      role="main"
      aria-labelledby="qm-title"
    >
      {/* Titel & Intro */}
      <h1 id="qm-title" className="text-3xl md:text-4xl font-semibold">Qualitätsmanagement</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Dokumentierte, validierte Abfolge von Entwicklung bis Serie; Abweichungs- und Änderungssteuerung (CAPA).
      </p>

      {/* Einleitender Abschnitt – Text/Bild-Layout */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Unser Anspruch: Sicherheit und Zuverlässigkeit</h2>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            MediCoat Solutions legt größten Wert auf die Qualität der Produkte und Prozesse. Unsere PVD‑Schichten
            erfüllen höchste Anforderungen an Biokompatibilität, Langlebigkeit und Präzision.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind nach <strong>DIN EN ISO 13485</strong> zertifiziert – der internationalen Norm für
            Qualitätsmanagementsysteme in der Medizintechnik.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <span className="text-sm">Bildplatzhalter – QM / Audit</span>
          </div>
        </div>
      </section>

      {/* Kernbereiche als Karten */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <GradientCard>
          <h3 className="text-xl font-semibold">Dokumentation & Nachweise</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-3">
            <li>Prozessbeschreibungen und Prüfpläne entlang des Produktlebenszyklus</li>
            <li>Validierungen (IQ/OQ/PQ) inkl. Messmittelfähigkeit</li>
            <li>Lenkung von Dokumenten und Aufzeichnungen</li>
          </ul>
        </GradientCard>

        <GradientCard>
          <h3 className="text-xl font-semibold">Prozesssicherheit & CAPA</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-3">
            <li>Risikomanagement nach ISO 14971 und FMEAs</li>
            <li>Abweichungsmanagement, Korrektur- & Vorbeugemaßnahmen</li>
            <li>SPC‑Überwachung, Freigaben und Änderungssteuerung</li>
          </ul>
        </GradientCard>
      </section>

      {/* Prüf- und Validierungsmethoden */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Prüf- und Validierungsmethoden</h3>
        <GradientBar />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-4xl">
          <li><strong>RFA/EDX</strong> zur Bestimmung der chemischen Zusammensetzung</li>
          <li><strong>Röntgenbeugung (XRD)</strong> zur Untersuchung der Mikrostruktur</li>
          <li><strong>Profilometrie</strong> für Schichtdicke & Oberflächenrauheit</li>
          <li><strong>Kalottenschliff</strong> zur Bestimmung der Schichtarchitektur</li>
          <li><strong>Ritztest</strong> zur Prüfung der Haftfestigkeit</li>
        </ul>
      </section>
    </main>
  );
}
