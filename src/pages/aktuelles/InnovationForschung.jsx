import React, { useState } from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";

export default function InnovationForschung() {
  // Lokale UI-Helfer – stilistisch wie in UeberUns

  // Globale GradientBar/GradientCard werden verwendet

  // AccordionItem lokal in InnovationForschung definiert
  function AccordionItem({ title, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
      <div
        className="rounded-3xl bg-white"
        style={{
          border: "1px solid transparent",
          backgroundImage:
            "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.25), rgba(37,99,235,0.25), rgba(34,197,94,0.25))",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 text-left"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span className="font-bold text-slate-900">{title}</span>
          <span className="ml-4 text-slate-500">{open ? "−" : "+"}</span>
        </button>
        {open && <div className="px-4 pb-4 text-slate-700 text-sm">{children}</div>}
      </div>
    );
  }

  // Base-aware Pfad für statische Assets (berücksichtigt Vite base)
  // assetUrl liefert base-aware Pfade

  return (
    <Container as="main">
      <h1 className="text-3xl md:text-4xl font-semibold">Innovation & Forschung</h1>

      {/* Intro-Section jetzt über volle Breite */}
      <section className="mt-3">
        <p className="text-slate-700 leading-relaxed max-w-none">
          Unsere Stärke liegt in der Entwicklung und wissenschaftlichen Fundierung innovativer PVD-Schichten für die
          Medizintechnik. Auf dieser Seite präsentieren wir ausschließlich Ergebnisse, die direkt von unserem Unternehmen
          oder unseren Mitarbeitenden erarbeitet wurden – darunter Patente und Zeitschriftenartikel.
        </p>
      </section>

      {/* Ergebnisse im Überblick – mit GradientBar & Kartenlook */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Ergebnisse im Überblick</h3>
        <GradientBar />
        <div className="grid md:grid-cols-1 gap-4">
          <AccordionItem title="Patent: Beschichtungssystem für verschleißbeanspruchte medizinische Instrumente">
            <div>
              <div className="text-slate-900 font-medium">Autoren</div>
              <p>[Name1], [Name2] (Arbeitgeber zum Zeitpunkt der Anmeldung: [Unternehmen XY])</p>
              <div className="text-slate-900 font-medium mt-3">Kurzbeschreibung</div>
              <p>
                Das Patent beschreibt ein innovatives PVD-Beschichtungssystem mit verbesserter Härte und
                Biokompatibilität, das die Lebensdauer chirurgischer Instrumente signifikant erhöht.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="Fachartikel: Optimierung von PVD-Schichten für Anwendungen in der Medizintechnik">
            <div>
              <div className="text-slate-900 font-medium">Autoren</div>
              <p>[Name1], [Name2] (Arbeitgeber: [Unternehmen XY])</p>
              <div className="text-slate-900 font-medium mt-3">Zusammenfassung</div>
              <p>
                Dieser Artikel stellt Ergebnisse zur Anpassung von PVD-Schichten hinsichtlich Oberflächenmorphologie und
                chemischer Zusammensetzung vor.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem title="Fachartikel: Mechanische Eigenschaften von Hartstoffschichten für minimalinvasive Instrumente">
            <div>
              <div className="text-slate-900 font-medium">Autoren</div>
              <p>[Name1], [Name2] (Arbeitgeber: [Unternehmen XY])</p>
              <div className="text-slate-900 font-medium mt-3">Zusammenfassung</div>
              <p>
                Veröffentlichung zur Bestimmung von Härte und Elastizitätsmodul mittels Indentierung und deren
                Bedeutung für den klinischen Einsatz.
              </p>
            </div>
          </AccordionItem>
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
              „Hochleistungsschutzschichten“ von Prof. Dr. Sven Ulrich und Dr. Michael Stüber am <strong>KIT-IAM-AWP</strong>
              zusammen.
            </p>
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
