import React from 'react'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'

export default function Qualitaetsmanagement() {
  return (
    <Container
      as="main"
      role="main"
      aria-labelledby="qm-title"
    >
      {/* Titel & Intro */}
      <h1 id="qm-title" className="text-3xl md:text-4xl font-semibold">Qualitätsmanagement</h1>
      <p className="mt-3 text-slate-600">
        Dokumentierte, validierte Prozesse von Entwicklung bis Serie; Abweichungs- und Änderungssteuerung (CAPA).
      </p>

      {/* Einleitender Abschnitt – Text/Bild-Layout */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Unser Anspruch: Sicherheit und Zuverlässigkeit</h2>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            MediCoat Solutions legt größten Wert auf die Qualität der Produkte und Prozesse. Unsere PVD‑Schichten
            erfüllen höchste Anforderungen an Biokompatibilität, Langlebigkeit, Hygiene und Korrosionsbeständigkeit.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind nach <strong>DIN EN ISO 13485</strong> zertifiziert – der internationalen Norm für
            Qualitätsmanagementsysteme in der Medizintechnik.
          </p>
        </div>
      </section>

      {/* Kernbereiche als Karten */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <GradientCard>
          <h3 className="text-xl font-semibold">Dokumentation & Nachweise</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-3">
            <li>Prozessbeschreibungen und Prüfpläne entlang des Produktlebenszyklus</li>
            <li>Validierungen (IQ/OQ/PQ) inkl. Messmittelfähigkeit</li>
            <li>Lenkung von Dokumenten und Aufzeichnungen</li>
          </ul>
        </GradientCard>

        <GradientCard>
          <h3 className="text-xl font-semibold">Prozesssicherheit & CAPA</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-3">
            <li>Risikomanagement nach DIN EN ISO 14971 und FMEAs</li>
            <li>Abweichungsmanagement, Korrektur- & Vorbeugemaßnahmen</li>
            <li>SPC‑Überwachung, Freigaben und Änderungssteuerung</li>
          </ul>
        </GradientCard>
      </section>
    </Container>
  );
}
