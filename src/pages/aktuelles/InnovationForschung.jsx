import React, { useState } from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";

export default function InnovationForschung() {
  // Ergebnisse-Accordion: Stil wie "Aktuelle Mitteilungen"
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Container as="main">
      <h1 className="text-3xl md:text-4xl font-semibold">Innovation & Forschung</h1>

      {/* Intro-Section jetzt über volle Breite */}
      <section className="mt-3">
        <p className="text-slate-700 leading-relaxed max-w-none">
          Eine unserer Stärken liegt in der Entwicklung innovativer PVD-Schichten für die
          Medizintechnik. Auf dieser Seite präsentieren wir ausschließlich Ergebnisse, die direkt von unserem Unternehmen
          oder unseren Mitarbeitenden erarbeitet wurden – darunter Patente und Zeitschriftenartikel.
        </p>
      </section>

      {/* Ergebnisse im Überblick – Stil wie Aktuelle Mitteilungen */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Ergebnisse im Überblick</h3>
        <GradientBar />
        <div className="space-y-6">
          {[
            {
              id: 0,
              title:
                "Patent: Beschichtungssystem für verschleißbeanspruchte medizinische Instrumente",
              content: (
                <>
                  <div className="text-slate-900 font-medium"><strong>Autoren</strong></div>
                  <p>[Name1], [Name2] (Arbeitgeber zum Zeitpunkt der Anmeldung: [Unternehmen XY])</p>
                  <div className="text-slate-900 font-medium mt-3"><strong>Kurzbeschreibung</strong></div>
                  <p>
                    Das Patent beschreibt ein innovatives PVD-Beschichtungssystem mit verbesserter Härte und
                    Biokompatibilität, das die Lebensdauer chirurgischer Instrumente signifikant erhöht.
                  </p>
                </>
              ),
            },
            {
              id: 1,
              title:
                "Fachartikel: Optimierung von PVD-Schichten für Anwendungen in der Medizintechnik",
              content: (
                <>
                  <div className="text-slate-900 font-medium"><strong>Autoren</strong></div>
                  <p>[Name1], [Name2] (Arbeitgeber: [Unternehmen XY])</p>
                  <div className="text-slate-900 font-medium mt-3"><strong>Zusammenfassung</strong></div>
                  <p>
                    Dieser Artikel stellt Ergebnisse zur Anpassung von PVD-Schichten hinsichtlich Oberflächenmorphologie und
                    chemischer Zusammensetzung vor.
                  </p>
                </>
              ),
            },
            {
              id: 2,
              title:
                "Fachartikel: Mechanische Eigenschaften von Hartstoffschichten für minimalinvasive Instrumente",
              content: (
                <>
                  <div className="text-slate-900 font-medium"><strong>Autoren</strong></div>
                  <p>[Name1], [Name2] (Arbeitgeber: [Unternehmen XY])</p>
                  <div className="text-slate-900 font-medium mt-3"><strong>Zusammenfassung</strong></div>
                  <p>
                    Veröffentlichung zur Bestimmung von Härte und Elastizitätsmodul mittels Indentierung und deren
                    Bedeutung für den klinischen Einsatz.
                  </p>
                </>
              ),
            },
          ].map((item) => {
            const offen = openIndex === item.id;
            return (
              <GradientCard
                key={item.id}
                onClick={() => setOpenIndex(offen ? null : item.id)}
                className="cursor-pointer"
              >
                <h4 className="text-lg font-semibold underline">{item.title}</h4>
                {offen && <div className="mt-4 text-slate-700 text-sm">{item.content}</div>}
              </GradientCard>
            );
          })}
        </div>
      </section>

      {/* Kooperation mit dem KIT – gleicher Stil wie Unterabschnitte in UeberUns */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Kooperationen mit Forschungseinrichtungen</h3>
        <GradientBar />
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <GradientCard className="h-full">
            <p className="text-slate-700 leading-relaxed">
              Für die Charakterisierung unserer PVD-Schichten arbeiten wir eng mit der Arbeitsgruppe
              „Hochleistungsschutzschichten“ von Prof. Dr. Sven Ulrich und Dr. Michael Stüber am <strong>KIT-IAM-AWP</strong> zusammen.</p>
            <p className="text-slate-700 leading-relaxed mt-4">Zum Einsatz kommen dabei modernste Methoden wie:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-700">
              <li>
                <strong>Rasterelektronenmikroskopie (REM)</strong> zur Analyse der Morphologie
              </li>
              <li>
                <strong>Mechanische Eindringprüfung</strong> für Härte und Elastizitätsmodul
              </li>
              <li>
                <strong>Elektronenstrahlmikroanalyse (ESMA)</strong> zur Bestimmung der chemischen Zusammensetzung
              </li>
              <li>
                <strong>Röntgenbeugung (XRD)</strong> zur Untersuchung der Mikrostruktur
              </li>
              <li>
                <strong>Profilometrie</strong> zur Messung der Schichtdicke und Oberflächenrauheit
              </li>
              <li>
                <strong>Kalottenschliffverfahren</strong> zur Bestimmung der Schichtdicke und-architektur
              </li>
              <li>
                <strong>Ritztest</strong> zur Prüfung der Haftfestigkeit der Schichten
              </li>
            </ul>
          </GradientCard>
          <div className="aspect-[4/3] mt-2 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white">
                  <img
                src={assetUrl("assets/innovation-forschung.png")}
              alt="Innovation & Forschung – Kooperation KIT"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
