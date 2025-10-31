import React, { useState } from "react";

export default function Pressemitteilungen() {
 const [open, setOpen] = useState(false);

  const GradientCard = ({ children, onClick }) => (
    <div
      className={`bg-white p-6 rounded-3xl ${onClick ? "cursor-pointer" : ""}`}
      style={{
        border: "4px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#000000",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Pressemitteilungen</h1>
      {/* Intro-Section */}
      <section className="mt-10">
        <p className="text-slate-700 leading-relaxed mt-4">
          Als junges Unternehmen im Bereich Medizintechnik und PVD-Schichten veröffentlichen wir nur ausgewählte
          Pressemitteilungen – immer dann, wenn es wirklich wichtige Neuigkeiten gibt. Hier finden Sie offizielle
          Informationen zu Unternehmensentwicklungen, Kooperationen und Produktneuheiten.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Für weitere Einblicke empfehlen wir unseren Blog, in dem wir regelmäßig über Forschung, Innovationen und
          aktuelle Themen berichten.
        </p>
      </section>

      {/* Pressemitteilung mit ein-/ausklappbarem Inhalt */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Aktuelle Mitteilungen</h3>
        <GradientCard onClick={() => setOpen(!open)}>
          {/* Nur Überschrift sichtbar; Klick toggelt den Inhalt */}
          <h4 className="text-lg font-semibold underline">
            MediCoat Solutions präsentiert innovative PVD-Schichten für minimalinvasive Instrumente
          </h4>
          {open && (
            <>
              <p className="text-sm text-slate-600 mt-1">📅 15. März 2025 – Kieselbronn</p>
              <p className="text-slate-700 mt-4">
                MediCoat Solutions, ein Startup im Bereich Medizintechnik, hat eine neuartige PVD-Schicht entwickelt, die
                speziell für den Einsatz bei minimalinvasiven Instrumenten konzipiert ist. Die Beschichtung zeichnet sich durch
                eine besonders hohe Korrosionsbeständigkeit, hohe Verschleißfestigkeit und verbesserte Biokompatibilität aus.
              </p>
              <blockquote className="mt-4 pl-4 border-l-4 border-slate-200 italic text-slate-800">
                „Unsere Technologie trägt dazu bei, die Lebensdauer und Sicherheit medizinischer Instrumente deutlich zu erhöhen“,
                erklärt Dr. Fabian Seifried, Gründer / Geschäftsführer. „Damit leisten wir einen wichtigen Beitrag zur
                Weiterentwicklung moderner Medizintechnik.“
              </blockquote>
            </>
          )}
        </GradientCard>
      </section>
    </section>
  );
}

