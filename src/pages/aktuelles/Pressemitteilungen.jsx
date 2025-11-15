import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import GradientCard from "../../components/GradientCard";
import GradientBar from "../../components/GradientBar";

export default function Pressemitteilungen() {
 // Index der geöffneten Mitteilung; null = alle zu
 const [openIndex, setOpenIndex] = useState(null);

 const mitteilungen = [
  {
    id: 0,
    titel: "MediCoat Solutions präsentiert innovative PVD-Schichten für minimalinvasive Instrumente",
    datum: "15. März 2025 – Kieselbronn",
    lead: "MediCoat Solutions, ein Startup im Bereich Medizintechnik, hat eine neuartige PVD-Schicht entwickelt, die speziell für den Einsatz bei minimalinvasiven Instrumenten konzipiert ist.",
    text: "Die Beschichtung zeichnet sich durch eine besonders hohe Korrosionsbeständigkeit, hohe Verschleißfestigkeit und verbesserte Biokompatibilität aus.",
    quote: "Unsere Technologie trägt dazu bei, die Lebensdauer und Sicherheit medizinischer Instrumente deutlich zu erhöhen.",
    quoteAuthor: "Dr. Fabian Seifried, Gründer / Geschäftsführer"
  },
  {
    id: 1,
    titel: "Neue Kooperation zur Materialcharakterisierung: MediCoat Solutions erweitert Forschungsnetzwerk",
    datum: "02. Juli 2025 – Kieselbronn",
    lead: "MediCoat Solutions geht eine strategische Zusammenarbeit mit einer führenden Forschungseinrichtung zur vertieften Analyse von Hartstoffschichten ein.",
    text: "Ziel der Kooperation ist die beschleunigte Optimierung von Schichtarchitekturen hinsichtlich Verschleiß- und Korrosionsbeständigkeit sowie Biokompatibilität. Erste gemeinsame Untersuchungen liefern vielversprechende Daten zur strukturellen Stabilität unter zyklischer Belastung.",
    quote: "Durch den direkten Zugang zu erweiterten Analysekapazitäten können wir Entwicklungszyklen verkürzen und die Leistungsfähigkeit unserer Schichten noch gezielter steigern.",
    quoteAuthor: "Dr. Fabian Seifried, Gründer / Geschäftsführer"
  },
  {
    id: 2,
    titel: "Erfolgreicher Validierungs-Meilenstein: Produktionsprozess für Medizinbeschichtungen zertifiziert",
    datum: "18. September 2025 – Kieselbronn",
    lead: "MediCoat Solutions erreicht einen zentralen Entwicklungsschritt: Der interne Beschichtungsprozess für ausgewählte Instrumentenkomponenten wurde erfolgreich validiert und erfüllt zentrale Qualitätsanforderungen.",
    text: "Die Validierung umfasst reproduzierbare Schichtdicken, Haftfestigkeit unter thermischer und mechanischer Last sowie eine materialkonforme Oberflächenmorphologie. Damit wird ein wichtiger Grundstein für nachfolgende regulatorische Schritte gelegt und Kunden erhalten erhöhte Planungssicherheit.",
    quote: "Der Abschluss dieses Validierungspakets zeigt, dass unsere Entwicklungsarbeit nicht nur technologisch innovativ ist, sondern auch industriell belastbar umgesetzt werden kann.",
    quoteAuthor: "Dr. Fabian Seifried, Gründer / Geschäftsführer"
  }
 ];

  return (
    <Container as="main">
      <h1 className="text-3xl md:text-4xl font-semibold">Pressemitteilungen</h1>
      {/* Intro-Section */}
      <section className="mt-3">
        <p className="text-slate-700 leading-relaxed mt-4">
          Als junges Unternehmen im Bereich der Medizintechnik und PVD-Schichten veröffentlichen wir nur ausgewählte
          Pressemitteilungen – immer dann, wenn es wirklich wichtige Neuigkeiten gibt. Hier finden Sie offizielle
          Informationen zu Unternehmensentwicklungen, Kooperationen und Produktneuheiten.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Für weitere Einblicke empfehlen wir unseren <Link to="/aktuelles/blog" className="font-semibold text-blue-700 underline">Blog</Link>, in dem wir regelmäßig über Forschungsergebnisse, Innovationen und
          aktuelle Themen berichten.
        </p>
      </section>

      {/* Liste der Pressemitteilungen */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Aktuelle Mitteilungen</h3>
        <GradientBar />
        <div className="space-y-6">
          {mitteilungen.map(m => {
            const offen = openIndex === m.id;
            return (
              <GradientCard key={m.id} onClick={() => setOpenIndex(offen ? null : m.id)} className="cursor-pointer">
                <h4 className="text-lg font-semibold underline">
                  {m.titel}
                </h4>
                {offen && (
                  <>
                    <p className="text-sm text-slate-600 mt-1">📅 {m.datum}</p>
                    <p className="text-slate-700 mt-4">{m.lead}</p>
                    <p className="text-slate-700 mt-4">{m.text}</p>
                    <blockquote className="mt-4 pl-4 border-l-4 border-slate-200 italic text-slate-800">
                      „{m.quote}“<br />
                      <span className="not-italic text-sm text-slate-600">{m.quoteAuthor}</span>
                    </blockquote>
                  </>
                )}
              </GradientCard>
            )
          })}
        </div>
      </section>
    </Container>
  );
}

