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
        Bewertung von Materialien und Schichten gemäß DIN EN ISO 10993.
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

      {/* Abschluss-Hinweise */}
      <section className="mt-12">
        <GradientCard>
          <p className="text-slate-700 leading-relaxed">
            <strong>Die Prüfung unserer PVD-Schichten ergab, dass sie biokompatibel sind und somit die Anforderungen für den medizinischen Einsatz erfüllen.</strong>
          </p>
          <p className="text-slate-700 leading-relaxed mt-3">
            Die Zertifikate, welche die Biokompatibilität bestätigen, stehen im Bereich
            <Link to="/zertifizierung/zertifikate" className="text-blue-700 underline ml-1">Zertifikate</Link> zum Download bereit.
          </p>
        </GradientCard>
      </section>
    </Container>
  );
}

// Separates Bild-Element mit base-sicherem Pfad, damit Vite base berücksichtigt wird
function ZytotoxBild(){
  return (
    <div className="aspect-[16/9] mt-4 mb-3 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white w-full">
      <img
        src={assetUrl('assets/biokompatibilitaet.png')}
        alt="Zytotoxizität – Prüfung nach DIN EN ISO 10993-5"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
