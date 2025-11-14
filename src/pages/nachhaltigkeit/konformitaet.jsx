import React from 'react'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'
import { assetUrl } from '../../utils/assetUrl'

export default function Konformitaet() {
  return (
    <Container as="main" role="main" aria-labelledby="regulatorik-title">
      
      {/* Titel & Intro */}
      <h1 id="regulatorik-title" className="text-3xl md:text-4xl font-semibold">
        Regulatorische Konformität
      </h1>
      <p className="mt-3 text-slate-600">
        Einhaltung von REACH, RoHS und medizintechnischen Regularien – kombiniert mit einem
        zertifizierten Qualitätsmanagementsystem nach DIN EN ISO 13485.
      </p>

      {/* Intro-Section mit Text links, Visual rechts – analog UeberUns */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Regulatorik in der Praxis</h2>
          <GradientBar />
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              Unsere PVD-Schichten sind <strong>nickelfrei</strong>, <strong>PFAS-frei</strong> und erfüllen die Anforderungen der europäischen
              <strong> REACH</strong>-Verordnung. REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) regelt den Umgang mit
              chemischen Stoffen innerhalb der EU und soll Mensch sowie Umwelt vor Risiken schützen. Durch den bewussten Verzicht auf
              problematische Substanzen wie z.&nbsp;B. Nickel, Chrom(VI) stellen wir sicher, dass unsere Schichten biokompatibel und
              umweltverträglich sind.
            </p>
            <p>
              Darüber hinaus setzen wir die Vorgaben der <strong>DIN EN ISO 13485</strong>, der international anerkannten Norm für
              Qualitätsmanagementsysteme in der Medizintechnik, um. Sie gewährleistet, dass unsere Prozesse auf die Einhaltung gesetzlicher
              Vorgaben sowie auf die Sicherheit unserer Produkte ausgerichtet sind.
            </p>
            <p>
              Mit dieser Kombination aus materialbezogener Konformität (REACH, Nickelfreiheit; PFAS-Freiheit) und prozessorientierten
              Qualitätsstandards (DIN EN ISO 13485) schaffen wir eine solide Basis für regulatorische Sicherheit und das <strong>Vertrauen</strong> in die
              PVD-Technologie.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] mt-2 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white">
            <img
              src={assetUrl('assets/regulatorische-konformitaet.png')}
              alt="Regulatorische Konformität – Darstellung"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Schwerpunkte – Karten im Stil von UeberUns */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Schwerpunkte</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard borderWidth={4}>
            <h4 className="font-semibold">REACH &amp; Stoffverbote</h4>
            <p className="text-sm mt-2 text-slate-700">
              Nickel- &amp; PFAS-freie Schichtsysteme, Verzicht auf Chrom(VI) – Fokus auf Biokompatibilität und Umweltverträglichkeit.
            </p>
          </GradientCard>
          <GradientCard borderWidth={4}>
            <h4 className="font-semibold">DIN EN ISO 13485</h4>
            <p className="text-sm mt-2 text-slate-700">
              Dokumentierte, auditierbare Prozesse; Risiko‑ und Änderungsmanagement für gleichbleibende Qualität.
            </p>
          </GradientCard>
          <GradientCard borderWidth={4}>
            <h4 className="font-semibold">Vertrauen &amp; Nachweis</h4>
            <p className="text-sm mt-2 text-slate-700">
              Kombination aus Material‑Konformität und QM‑System schafft eine belastbare Grundlage für regulatorische Sicherheit.
            </p>
          </GradientCard>
        </div>
      </section>
    </Container>
  );
}
