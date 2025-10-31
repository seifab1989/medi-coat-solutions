import React from 'react'

export default function Konformitaet() {
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
      {children}
    </div>
  );

  return (
    <main
      className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      role="main"
      aria-labelledby="regulatorik-title"
    >
      
      {/* Titel & Intro */}
      <h1 id="regulatorik-title" className="text-3xl md:text-4xl font-semibold">
        Regulatorische Konformität
      </h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Einhaltung von REACH, RoHS und medizintechnischen Regularien – kombiniert mit einem
        zertifizierten Qualitätsmanagementsystem nach DIN EN ISO 13485.
      </p>

      {/* Intro-Section mit Text links, Visual rechts – analog UeberUns */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Regulatorik in der Praxis</h2>
          <GradientBar />
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              Unsere PVD-Schichten sind <strong>nickelfrei</strong>, <strong>PFAS-frei</strong> und erfüllen die Anforderungen der europäischen
              <strong> REACH</strong>-Verordnung. REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) regelt den Umgang mit
              chemischen Stoffen innerhalb der EU und soll Mensch sowie Umwelt vor Risiken schützen. Durch den bewussten Verzicht auf
              problematische Substanzen wie z.&nbsp;B. Nickel, Chrom(VI) stellen wir sicher, dass unsere Schichten biokompatibel und
              umweltverträglich sind.
            </p>
            <p>
              Darüber hinaus setzen wir die Vorgaben der <strong>DIN EN ISO 13485</strong>, der international anerkannten Norm für
              Qualitätsmanagementsysteme in der Medizintechnik, um. Sie gewährleistet, dass unsere Prozesse auf die Einhaltung gesetzlicher
              Vorgaben sowie auf die Sicherheit unserer Produkte ausgerichtet sind.
            </p>
            <p>
              Mit dieser Kombination aus materialbezogener Konformität (REACH, Nickelfreiheit; PFAS-Freiheit) und prozessorientierten
              Qualitätsstandards (DIN EN ISO 13485) schaffen wir eine solide Basis für regulatorische Sicherheit und das Vertrauen in die
              PVD-Technologie.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <div className="text-center px-6">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-slate-200" />
              <p className="text-sm">Symbolischer Platzhalter – Compliance &amp; Qualität</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schwerpunkte – Karten im Stil von UeberUns */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Schwerpunkte</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard>
            <h4 className="font-semibold">REACH &amp; Stoffverbote</h4>
            <p className="text-sm mt-2 text-slate-700">
              Nickel- &amp; PFAS-freie Schichtsysteme, Verzicht auf Chrom(VI) – Fokus auf Biokompatibilität &amp; Umweltverträglichkeit.
            </p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">DIN EN ISO 13485</h4>
            <p className="text-sm mt-2 text-slate-700">
              Dokumentierte, auditierbare Prozesse; Risiko‑ &amp; Änderungsmanagement für gleichbleibende Qualität.
            </p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Vertrauen &amp; Nachweis</h4>
            <p className="text-sm mt-2 text-slate-700">
              Kombination aus Material‑Konformität und QM‑System schafft eine belastbare Grundlage für regulatorische Sicherheit.
            </p>
          </GradientCard>
        </div>
      </section>
    </main>
  );
}
