import React from "react";

export default function KontaktAnsprechpartner() {
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  return (
    <main
      className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      role="main"
      aria-labelledby="kontakt-ansprechpartner-title"
    >
      {/* Titel & Intro */}
      <h1 id="kontakt-ansprechpartner-title" className="text-3xl md:text-4xl font-semibold">
        Direkte Ansprechpartner
      </h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Wir sind für Sie da. Sprechen Sie uns an – direkt und ohne Umwege.
      </p>

      {/* Intro-Section mit Bildplatzhalter */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Dr. Fabian Seifried</h2>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Bei uns haben Sie den Vorteil, direkt mit der entscheidenden Person zu sprechen:
            Das bedeutet für Sie kurze Entscheidungswege, persönliche Betreuung und fachliche
            Expertise aus erster Hand. Mit fundiertem Wissen in der Medizintechnik und
            langjähriger Erfahrung mit PVD-Beschichtungen begleitet Dr. Fabian Seifried Sie
            vom ersten Gespräch bis zur Umsetzung.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:beratung@medicoat.de"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white font-medium shadow"
            >
              E-Mail an Dr. Seifried
            </a>
            <a
              href="/kontakt/formular"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-white border border-slate-300 text-slate-900 hover:bg-slate-50"
            >
              Kontaktformular
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <div className="text-center px-6">
              <div
                className="mx-auto mb-4 h-24 w-24 rounded-full bg-slate-200"
                aria-label="Foto von Gründer & Geschäftsführer"
              />
              <h3 className="font-semibold text-slate-900">Dr. Fabian Seifried</h3>
              <p className="text-sm text-slate-600">Gründer &amp; Geschäftsführer</p>
              <a
                className="text-sm text-blue-700 underline mt-2 inline-block"
                href="mailto:beratung@medicoat.de"
              >
                beratung@medicoat.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
