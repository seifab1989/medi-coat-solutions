import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'
import { assetUrl } from '../../utils/assetUrl'

export default function Biokompatibilitaet() {
  return (
    <Container as="main" role="main" aria-labelledby="bio-title">
      {/* Titel & Intro */}
      <h1 id="bio-title" className="text-3xl md:text-4xl font-semibold">Biokompatibilität</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Bewertung von PVD-Schichten gemäß DIN EN ISO 10993.
      </p>

      {/* Merkmalskarten – angelehnt an UeberUns */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Was wurde geprüft?</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard>
            <h4 className="font-semibold">Normenbezug</h4>
            <p className="text-sm text-slate-700 mt-2">Prüfungen gemäß DIN EN ISO 10993-5.</p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Prüfkörper</h4>
            <p className="text-sm text-slate-700 mt-2">PVD-Schichten auf Zylinder aus Ti‑Gr. 5.</p>
          </GradientCard>
          <GradientCard>
            <h4 className="font-semibold">Einsatz</h4>
            <p className="text-sm text-slate-700 mt-2">Eignung für Kontakt mit Gewebe und Körperflüssigkeiten.</p>
          </GradientCard>
        </div>
      </section>

      {/* Zytotoxizität – Abschnitt im gleichen Stil */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Schema zur Prüfung auf Zytotoxizität nach DIN EN ISO 10993‑5</h3>
        <GradientBar />
        <ZytotoxBild />
      </section>

      {/* 360°-Check */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">360°-Check: Maximale Validität, minimale Risiken</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <GradientCard>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-600">✓</span>
              <div>
                <h4 className="font-semibold">Materialauswahl</h4>
                <ul className="list-disc list-inside mt-2 text-sm text-slate-700">
                  <li>Validierung der Biokompatibilität in einem frühen Stadium (Screening).</li>
                  <li>Vermeidung von teuren Fehlbestellungen und Materialwechseln im Nachgang.</li>
                </ul>
              </div>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">📄</span>
              <div>
                <h4 className="font-semibold">Zulassung</h4>
                <ul className="list-disc list-inside mt-2 text-sm text-slate-700">
                  <li>Datenpakete für die PVD-Schicht gemäß ISO 10993-5 für das Technical File.</li>
                  <li>Beschleunigter Marktzugang (Time-to-Market) durch anerkannte Zertifikate für die PVD-Schichten.</li>
                </ul>
              </div>
            </div>
          </GradientCard>

          <GradientCard>
            <div className="flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600">🛡️</span>
              <div>
                <h4 className="font-semibold">Risikomanagement</h4>
                <ul className="list-disc list-inside mt-2 text-sm text-slate-700">
                  <li>Nachweis der chemischen Stabilität und Zellverträglichkeit unserer PVD-Schichten.</li>
                  <li>Minimierung des Haftungsrisikos und Schutz der Markenreputation.</li>
                </ul>
              </div>
            </div>
          </GradientCard>
        </div>
      </section>

      {/* Abschluss-Hinweise */}
      <section className="mt-12">
        <GradientCard>
          <p className="text-slate-700 leading-relaxed">
            <strong>Die Prüfung unserer PVD-Schichten ergab, dass sie biokompatibel sind und somit die Anforderungen für den medizinischen Einsatz erfüllen.</strong>
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            Die Zertifikate, welche die Biokompatibilität bestätigen, stehen im Bereich
            <Link to="/zertifizierung/zertifikate" className="text-blue-700 underline ml-1 font-semibold">Zertifikate</Link> zum Download bereit.
          </p>
        </GradientCard>
      </section>

     </Container>
  );
}

// Separates Bild-Element mit base-sicherem Pfad, damit Vite base berücksichtigt wird
function ZytotoxBild(){
  return (
    <div className="mt-4 mb-3 rounded-3xl border border-slate-200/60 shadow-sm bg-white w-full flex justify-center">
      <img
        src={assetUrl('assets/biokompatibilitaet.png')}
        alt="Zytotoxizität – Prüfung nach DIN EN ISO 10993-5"
        loading="lazy"
        className="block rounded-2xl"
      />
    </div>
  );
}
