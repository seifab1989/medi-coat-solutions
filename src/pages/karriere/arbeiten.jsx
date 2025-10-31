import React from 'react'

export default function Arbeiten() {
    const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );
  const Card = ({ children }) => (
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
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="arbeiten-title">
      {/* Titel & Intro */}
      <h2 id="arbeiten-title" className="text-3xl md:text-4xl font-semibold">Arbeiten bei uns</h2>
      <p className="mt-3 text-slate-600">
        Bei MediCoat Solutions entwickeln und produzieren wir innovative PVD-Schichten für die Medizintechnik. Unser Ziel ist es,
        durch höchste Präzision und Qualität einen direkten Beitrag zur Sicherheit von Patienten und zur Zuverlässigkeit medizinischer
        Produkte zu leisten.
      </p>

      {/* Einleitender Abschnitt mit Text links, Visual rechts */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-3xl font-semibold">Was dich bei uns erwartet</h3>
          <GradientBar />
          <div className="text-slate-700 leading-relaxed space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              {[
                "Innovation: Wir arbeiten mit modernster Technik und entwickeln Prozesse ständig weiter.",
                "Qualität: Sorgfalt in jedem Arbeitsschritt ist unser Standard – weil in der Medizintechnik jedes Detail zählt.",
                "Verantwortung: Unsere Arbeit hat direkten Einfluss auf die Gesundheit von Menschen. Dieses Bewusstsein treibt uns an.",
                "Mitarbeit in einem dynamischen, wachsenden Umfeld",
                "Einblicke in die Anwendungen von PVD-Schichten für die Medizintechnik",
                "Die Möglichkeit, aktiv an der Weiterentwicklung von Verfahren mitzuwirken",
                "Ein Arbeitsumfeld, in dem Patientensicherheit und technische Exzellenz oberste Priorität haben",
              ].map((it, i) => {
                const boldWords = [
                  "Innovation",
                  "Qualität",
                  "Verantwortung",
                  "PVD-Schichten",
                  "Medizintechnik",
                  "technische Exzellenz",
                  "Mitarbeit",
                ];
                let text = it;
                boldWords.forEach(word => {
                  const regex = new RegExp(`(${word})`, "gi");
                  text = text.replace(regex, "<strong>$1</strong>");
                });
                return <li key={i} dangerouslySetInnerHTML={{ __html: text }} />;
              })}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-slate-500">
            <span className="text-sm">Bildplatzhalter – Arbeiten bei uns</span>
          </div>
        </div>
      </section>

      {/* Warum es sich lohnt */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Warum es sich lohnt</h3>
        <GradientBar />
        <p className="text-slate-700 leading-relaxed">
          Arbeiten bei uns bedeutet, Teil einer Branche zu sein, die Leben verändert. Deine Arbeit trägt dazu bei,
          medizinische Produkte sicherer, langlebiger und leistungsfähiger zu machen.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="flex items-center gap-4 flex-nowrap bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl px-4 py-3 shadow-sm">
          <p className="text-slate-700 font-medium m-0">Jetzt Möglichkeiten entdecken:</p>
          <a
            href="/karriere/offene-stellen"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
          >
            Offene Stellen
          </a>
          <a
            href="/karriere/ausbildung-praktika"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
          >
            Ausbildung & Praktika
          </a>
        </div>
      </section>
    </main>
  );
}
