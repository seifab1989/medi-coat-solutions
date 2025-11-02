import React from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";

export default function Messeauftritte() {
  const EventCard = ({ title, date, location, children }) => (
    <GradientCard>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-2 text-slate-700 text-sm space-y-1">
        <li>📅 {date}</li>
        <li>📍 {location}</li>
      </ul>
      <p className="text-slate-700 mt-3">{children}</p>
    </GradientCard>
  );

  return (
    <Container as="main" role="main" aria-labelledby="messe-title">
      {/* Titel & Intro (volle Breite) */}
      <h1 id="messe-title" className="text-3xl md:text-4xl font-semibold">Messeauftritte</h1>
      <section className="mt-6 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12">
          <p className="text-slate-600 leading-relaxed">
            Wir sind auf ausgewählten Fachmessen vertreten, um unsere PVD-Beschichtungslösungen für die Medizintechnik vorzustellen
            und den direkten Austausch mit Partnern und Interessenten zu fördern.
          </p>
        </div>
      </section>

      {/* Nächste Termine – Karten im Gradient-Stil */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Nächste Termine</h2>
        <GradientBar />
        <div className="grid md:grid-cols-2 gap-6">
          <EventCard
            title="COMPAMED 2025 – Düsseldorf"
            date="17.–20. November 2025"
            location="Messe Düsseldorf"
          >
            Entdecken Sie unsere neuesten Entwicklungen und sprechen Sie mit unserem Expertenteam über innovative Anwendungen.
          </EventCard>

          <EventCard
            title="MedtecLIVE 2026 – Nürnberg"
            date="12.–14. Mai 2026"
            location="Messe Nürnberg"
          >
            Erfahren Sie mehr über unsere Beschichtungstechnologien für Instrumente und Implantate – und wie sie Ihre Produkte weiterentwickeln können.
          </EventCard>
        </div>
      </section>

      {/* Call-to-Action – im Kartenstil */}
      <section className="mt-12">
        <GradientCard>
          <p className="text-slate-900 text-lg">👉 Haben Sie Fragen zu unseren Messeauftritten oder möchten Sie uns persönlich kennenlernen?</p>
          <p className="mt-2 text-slate-700">Kontaktieren Sie uns – wir freuen uns auf den Austausch mit Ihnen!</p>
          <div className="mt-4">
            {/* Für Mail-Links weiterhin <a>, da <Link> (react-router) keine externen Protokolle wie mailto unterstützt */}
            <a
              href="mailto:kontakt@medicoat.example"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white font-medium shadow"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </GradientCard>
      </section>
    </Container>
  );
}

