import React, { useState } from "react";
import Container from "../../components/Container";
import GradientCard from "../../components/GradientCard";
import GradientBar from "../../components/GradientBar";

export default function Pressemitteilungen() {
 const [open, setOpen] = useState(false);

  return (
    <Container as="main">
      <h1 className="text-3xl md:text-4xl font-semibold">Pressemitteilungen</h1>
      {/* Intro-Section */}
      <section className="mt-3">
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
        <h3 className="text-2xl md:text-3xl font-semibold">Aktuelle Mitteilungen</h3>
        <GradientBar />
        <GradientCard onClick={() => setOpen(!open)} className="cursor-pointer">
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
    </Container>
  );
}

