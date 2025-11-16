import React from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";

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

  

  return (
    <Container as="main" role="main" aria-labelledby="ausbildung-title">
      <h2 id="ausbildung-title" className="text-3xl md:text-4xl font-semibold">
        Ausbildung / Praktika
      </h2>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Programme für Auszubildende und Studierende – mit dem Fokus auf die Medizintechnik und PVD-Schichten.</p>

      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Nachwuchsförderung</h3>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Ausbildung und Nachwuchsförderung sind uns wichtig. Derzeit können
            wir jedoch <strong>keine Ausbildungs- oder Praktikumsplätze</strong>{" "}
            anbieten. Als kleines Unternehmen gestalten wir unser Angebot flexibel nach Bedarf.</p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Bitte schau zu einem späteren Zeitpunkt noch einmal vorbei – sobald
            neue Möglichkeiten entstehen, veröffentlichen wir sie hier.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Worauf wir Wert legen
        </h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard>
            <h4 className="font-semibold">Qualität</h4>
            <p className="text-sm mt-2 text-slate-700">
              Dokumentierte, auditierbare Prozesse nach DIN EN ISO 13485.
            </p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Lernen und Mentoring</h4>
            <p className="text-sm mt-2 text-slate-700">
              Klare Lernziele, direkte Zusammenarbeit, ehrliches Feedback.
            </p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Praxisnähe</h4>
            <p className="text-sm mt-2 text-slate-700">
              Arbeiten an echten Projekten in Einkauf, Vertrieb, Beschichtung und
              Qualitätsmanagement.
            </p>
          </GradientCard>
        </div>
      </section>

      {jobs.length > 0 && (
        <section className="mt-12" data-testid="jobs-section">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Aktuelle Ausbildungs- und Praktikumsplätze
          </h3>
          <GradientBar />
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <GradientCard key={job.id}>
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
              </GradientCard>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}

// 👇 Hier kommt der Export, damit du die Komponente importieren kannst
export default Ausbildung;
