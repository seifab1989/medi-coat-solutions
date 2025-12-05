import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'
import { assetUrl } from '../../utils/assetUrl'

export default function Patientensicherheit() {
  return (
    <Container
      as="main"
      className=""
      role="main"
      aria-labelledby="patientensicherheit-title"
    >
      {/* Titel & Intro im Stil von UeberUns */}
      <h2 id="patientensicherheit-title" className="text-3xl md:text-4xl font-semibold">
        PVD & Patientensicherheit
      </h2>
      <p className="mt-3 text-slate-600">
        Validierte Prozesse mit Risikoanalyse und statistischer Kontrolle (SPC). Nachweise zur
        Biokompatibilität gemäß relevanter Normen.
      </p>

      {/* Intro-Section */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Warum Patientensicherheit?</h3>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Medizinprodukte sind hohen Belastungen ausgesetzt: Korrosion, Verschleiß (z. B. Abrieb) und hygienische
            Risiken können die Patientensicherheit gefährden. PVD-Schichten können Risiken, die durch diese Belastungen entstehen,
            minimieren und tragen aktiv zur Patientensicherheit bei.
          </p>
        </div>
      </section>

      {/* Nutzenliste – typografisch wie UeberUns Absätze */}
      <section className="mt-12">
  <h3 className="text-2xl md:text-3xl font-semibold">Nutzen von PVD-Schichten für Medizinprodukte</h3>
        <GradientBar />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-4xl">
          <li>
            <span className="font-medium">
              <Link to="/zertifizierung/biokompatibilitaet" className="font-semibold underline text-blue-700">
                Biokompatibilität
              </Link>
              {' '}nach DIN EN ISO 10993:
            </span>
            {' '}PVD-Schichten verhindern allergische Reaktionen (z. B. Nickel-Sperrschichten).
          </li>
          <li>
            <span className="font-medium"><strong>Korrosionsschutz</strong>:</span> Kein Austreten von Metallionen in den Körper.
          </li>
          <li>
            <span className="font-medium"><strong>Hygiene</strong>:</span> Glatte, verschleißarme Oberflächen führen zu weniger Mikrorissen, geringerem
            Risiko von Keimanhaftungen.
          </li>
          <li>
            <span className="font-medium"><strong>Langlebigkeit</strong>:</span> Weniger Verschleiß bedeutet weniger Bruch- oder Ausfallrisiko während einer
            Behandlung.
          </li>
        </ul>
      </section>

      {/* Beispiele – Kartenstil angelehnt an UeberUns "Unser Anspruch" */}
      <section className="mt-12 grid md:grid-cols-2 gap-6">
        <GradientCard>
          <h4 className="font-semibold">Beispiel 1: Korrosionsbeständigkeit</h4>
          <div className="aspect-[16/9] mt-4 mb-3 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white">
            <img
              src={assetUrl('assets/korrosionsschutz.png')}
              alt="Korrosionsbeständigkeit – Vergleich"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <p className="text-xs text-slate-500 mb-2">
            Unbeschichteter vs. CrN-mod beschichteter Eisen-Prüfkörper, der mit Kupfersulfat (CuSO₄) beträufelt wurde.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Unbeschichteter und beschichteter Eisen-basierter Prüfkörper wird mit Kupfersulfat-Lösung (CuSO₄) beträufelt.</li>
            <li>
              Beim unbeschichteten Prüfkörper (links) kann das Eisen durch Kupfer ersetzt werden – punktuelle kupferfarbige
              Verfärbung.
            </li>
            <li>
              Der mit <strong>CrN-mod</strong> beschichtete Prüfkörper (rechts) zeigt keine punktuellen kupferfarbigen Verfärbungen,
              weil die CrN-mod-Schicht das Eisen schützt. Die CrN-mod-Schicht von MediCoat Solutions reagiert zudem nicht mit der
              Kupfersulfat-Lösung und ist somit beständig gegen Korrosion.
            </li>
          </ul>
        </GradientCard>

        <GradientCard>
          <h4 className="font-semibold">Beispiel 2: Hygiene und Langlebigkeit</h4>
          <div className="aspect-[16/9] mt-4 mb-3 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative bg-white">
            <img
              src={assetUrl('assets/verschleissschutz.png')}
              alt="Verschleißschutz – Vergleich"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <p className="text-xs text-slate-500 mb-2">
            Prüfkörper lokal mit PROMAT-Schleifvlies (K180) beansprucht – unbeschichtet vs. TiN-mod.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Die rechte Seite des Prüfkörpers ist der unbeschichtete und die linke Seite ist der TiN-mod beschichtete Bereich.</li>
            <li>Unbeschichteter und TiN-mod beschichteter Bereich des Prüfkörpers wurden mit einem PROMAT-Schleifvlies (K180) beansprucht.</li>
            <li>Unbeschichteter Bereich: deutliche Kratzer und Riefen – abrasiver Verschleiß.</li>
            <li>
              <strong>TiN-mod</strong> Beschichtung reduziert signifikant Kratzer / Riefen und verlängert so die Lebensdauer von Medizinprodukten.
            </li>
          </ul>
        </GradientCard>
      </section>
      
      {/* CTA */}
      <section className="mt-12">
        <GradientCard>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-900 font-medium m-0">
              Erfahren Sie, wie unsere PVD-Schichten Ihre Medizinprodukte sicherer machen.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
            >
              Kontaktieren Sie uns!
            </a>
          </div>
        </GradientCard>
      </section>
    </Container>
  );
}
