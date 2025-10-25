import React from 'react'

export default function Patientensicherheit() {
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
        color: "#000000",
      }}
    >
      {children}
    </div>
  );

  return (
    <main
      className="flex-1 mx-auto max-w-7xl"
      role="main"
      aria-labelledby="patientensicherheit-title"
    >
      {/* Titel & Intro im Stil von UeberUns */}
      <h2 id="patientensicherheit-title" className="text-3xl md:text-4xl font-semibold">
        PVD & Patientensicherheit
      </h2>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Validierte Prozesse mit Risikoanalyse und statistischer Kontrolle (SPC). Nachweise zur
        Biokompatibilität und Sterilisationsbeständigkeit gemäß relevanter Normen.
      </p>

      {/* Intro-Section mit Bildplatzhalter (Layout wie in UeberUns) */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-3xl font-semibold">Warum Patientensicherheit?</h3>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Medizinprodukte sind hohen Belastungen ausgesetzt: Korrosion, Verschleiß (z. B. Abrieb) und hygienische
            Risiken können die Patientensicherheit gefährden. PVD-Schichten können die Risiken durch hohe Belastungen
            minimieren und tragen aktiv zur Patientensicherheit bei.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <span className="text-sm">Bildplatzhalter – Patientensicherheit</span>
          </div>
        </div>
      </section>

      {/* Nutzenliste – typografisch wie UeberUns Absätze */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Nutzen von PVD-Schichten für Medizinprodukte</h3>
        <GradientBar />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-4xl">
          <li>
            <span className="font-medium">Biokompatibilität nach DIN EN ISO 10993:</span> Schichten verhindern allergische
            Reaktionen (z. B. Nickel-Sperrschichten).
          </li>
          <li>
            <span className="font-medium">Korrosionsschutz:</span> Kein Austreten von Metallionen in den Körper.
          </li>
          <li>
            <span className="font-medium">Hygiene:</span> Glatte, verschleißarme Oberflächen → weniger Mikrorisse, geringeres
            Risiko von Keimanhaftung.
          </li>
          <li>
            <span className="font-medium">Langlebigkeit:</span> Weniger Verschleiß → weniger Bruch- oder Ausfallrisiko während einer
            Behandlung.
          </li>
        </ul>
      </section>

      {/* Beispiele – Kartenstil angelehnt an UeberUns "Unser Anspruch" */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <GradientCard>
          <h4 className="font-semibold">Beispiel 1: Korrosionsbeständigkeit</h4>
          <div className="aspect-[16/9] rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 mt-4 mb-3 flex items-center justify-center text-slate-500">
            <span className="text-sm">Abbildung zur Korrosionsbeständigkeit – Bildplatzhalter</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">
            Unbeschichteter vs. CrN-mod beschichteter Eisen-Prüfkörper, der mit Kupfersulfat (CuSO₄) beträufelt wurde.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Unbeschichteter und beschichteter Eisen-basierter Prüfkörper wird mit Kupfersulfat (CuSO₄) beträufelt.</li>
            <li>
              Beim unbeschichteten Prüfkörper kann das Eisen durch Kupfer ersetzt werden – punktuelle kupferfarbige
              Verfärbung (siehe Abbildung zur Korrosionsbeständigkeit).
            </li>
            <li>
              Der mit <strong>CrN-mod</strong> beschichtete Prüfkörper zeigt keine punktuellen kupferfarbigen Verfärbungen,
              weil die CrN-mod-Schicht das Eisen schützt. Die CrN-mod-Schicht von MediCoat Solutions reagiert zudem nicht mit der
              Kupfersulfat-Lösung und ist somit beständig gegen Korrosion (siehe Abbildung zur Korrosionsbeständigkeit).
            </li>
          </ul>
        </GradientCard>

        <GradientCard>
          <h4 className="font-semibold">Beispiel 2: Verschleißschutz</h4>
          <div className="aspect-[16/9] rounded-2xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 mt-4 mb-3 flex items-center justify-center text-slate-500">
            <span className="text-sm">Abbildung Verschleißschutz – Bildplatzhalter</span>
          </div>
          <p className="text-xs text-slate-500 mb-2">
            Prüfkörper lokal mit PROMAT-Schleifvlies (K180) beansprucht – unbeschichtet vs. TiN-mod.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Unbeschichteter und beschichteter Bereich eines Prüfkörpers wurden mit PROMAT-Schleifvlies (K180) beansprucht.</li>
            <li>Unbeschichteter Bereich: deutliche Kratzer und Riefen – abrasiver Verschleiß (siehe Abbildung Verschleißschutz).</li>
            <li>
              <strong>TiN-mod</strong> Beschichtung reduziert signifikant Kratzer/Riefen und schützt so vor abrasivem Verschleiß (siehe
              Abbildung Verschleißschutz).
            </li>
          </ul>
        </GradientCard>
      </section>
      
      {/* CTA */}
      <section className="mt-12">
        <div className="flex items-center gap-4 flex-nowrap bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
          <p className="text-slate-700 font-medium m-0">
            Erfahren Sie, wie unsere PVD-Schichten Ihre Medizintechnikprodukte sicherer machen.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
          >
            Kontaktieren Sie uns!
          </a>
        </div>
      </section>
    </main>
  );
}
