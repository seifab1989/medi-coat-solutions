import React from "react";

function Ausbildung() {
  const jobs = [
    // Hier könntest du später Stellenangebote einfügen, z. B.:
    // {
    //   id: 1,
    //   title: "Praktikum Werkstofftechnik (m/w/d)",
    //   location: "Kieselbronn",
    //   type: "Vollzeit",
    //   desc: "Unterstützung bei Versuchsplanung, Materialcharakterisierung und Dokumentation im Bereich PVD-Beschichtungen.",
    // },
  ];

  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5 w-full" />
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
    <main
      className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      role="main"
      aria-labelledby="ausbildung-title"
    >
      <h2 id="ausbildung-title" className="text-2xl md:text-4xl font-semibold">
        Ausbildung & Praktika
      </h2>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Programme für Auszubildende und Studierende – mit Fokus auf
        Medizintechnik und PVD-Schichten.
      </p>

      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-12">
          <h3 className="text-3xl md:text-2xl font-semibold">
            Ausbildung und Nachwuchsförderung
          </h3>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Ausbildung und Nachwuchsförderung sind uns wichtig. Derzeit können
            wir jedoch <strong>keine Ausbildungs- oder Praktikumsplätze</strong>{" "}
            anbieten. Da wir ein kleines Unternehmen sind, richten wir unser
            Angebot nach Bedarf aus.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Bitte schau zu einem späteren Zeitpunkt noch einmal vorbei – sobald
            neue Möglichkeiten entstehen, veröffentlichen wir sie hier.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">
          Worauf wir Wert legen
        </h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h4 className="font-semibold">Qualität</h4>
            <p className="text-sm mt-2 text-slate-700">
              Dokumentierte, auditierbare Prozesse nach DIN EN ISO 13485.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold">Lernen & Mentoring</h4>
            <p className="text-sm mt-2 text-slate-700">
              Klare Lernziele, direkte Zusammenarbeit, ehrliches Feedback.
            </p>
          </Card>
          <Card>
            <h4 className="font-semibold">Praxisnähe</h4>
            <p className="text-sm mt-2 text-slate-700">
              Arbeiten an echten Projekten in Beschichtung, Produktion und
              Qualitätssicherung.
            </p>
          </Card>
        </div>
      </section>

      {jobs.length > 0 && (
        <section className="mt-12" data-testid="jobs-section">
          <h3 className="text-xl md:text-2xl font-semibold">
            Aktuelle Ausbildungs- und Praktikumsplätze
          </h3>
          <GradientBar />
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <Card key={job.id}>
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-sm text-slate-600 mt-1">
                  {job.location} · {job.type}
                </p>
                <p className="text-slate-700 mt-3 text-sm">{job.desc}</p>
                <a
                  href="#kontakt"
                  className="inline-block mt-4 text-sm text-white px-4 py-2 rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 shadow"
                >
                  Jetzt bewerben
                </a>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

// 👇 Hier kommt der Export, damit du die Komponente importieren kannst
export default Ausbildung;
