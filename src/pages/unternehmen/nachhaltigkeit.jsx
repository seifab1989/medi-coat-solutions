import React from 'react'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'
import { assetUrl } from '../../utils/assetUrl'

export default function Nachhaltigkeit() {
  return (
    <Container as="main" role="main" aria-labelledby="regulatorik-title">
      <h1 id="regulatorik-title" className="text-3xl md:text-4xl font-semibold">
        Nachhaltigkeit
      </h1>
      <p className="mt-3 text-slate-600">
        REACH, RoHS und medizintechnische Regularien erfüllen wir – belegt durch ein QM-System nach 
        DIN EN ISO 13485. Gleichzeitig übernehmen wir von der Entwicklung bis zu unseren Lieferanten Verantwortung für 
        Umwelt und Gesellschaft.
      </p>

      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Gesellschaftliche Verantwortung</h2>
          <GradientBar />
          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
            Unsere PVD-Schichten sind <strong>nickelfrei, Cr(VI)-frei, PFAS-frei und REACH-konform</strong>. Durch den bewussten Verzicht auf problematische Stoffe 
            wie Nickel und Chrom(VI) sind sie biokompatibel und umweltverträglich. In Kombination mit einem Qualitätsmanagementsystem 
            nach <strong>DIN EN ISO 13485</strong>, das unsere Prozesse konsequent auf <strong>Patientensicherheit</strong> und gesetzliche Vorgaben ausrichtet, schaffen 
            wir eine verlässliche Grundlage für regulatorische Sicherheit und Vertrauen in unsere PVD-Beschichtungen. Der Prozess kommt ohne 
            krebserzeugende oder umweltschädliche Chemikalien aus, erzeugt keine giftigen Abwässer und benötigt ausschließlich 
            elektrische Energie, die vollständig aus erneuerbaren Quellen bereitgestellt werden kann.
            </p>
            <p>
            Gleichzeitig übernehmen wir soziale Verantwortung, indem wir ein sicheres, faires und wertschätzendes Arbeitsumfeld fördern. 
            Mit Kunden und Lieferanten pflegen wir ein partnerschaftliches, transparentes und vertrauensvolles Miteinander.
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

      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Schwerpunkte</h3>
        <GradientBar />
        <div className="grid md:grid-cols-3 gap-6">
          <GradientCard borderWidth={2}>
            <h4 className="font-semibold">REACH &amp; Stoffverbote</h4>
            <p className="text-sm mt-2 text-slate-700">
              Nickel- &amp; PFAS-freie Schichtsysteme, Verzicht auf Chrom(VI) – Fokus auf Patientensicherheit und Umweltverträglichkeit.
            </p>
          </GradientCard>
          <GradientCard borderWidth={2}>
            <h4 className="font-semibold">Energie bewusst nutzen</h4>
            <p className="text-sm mt-2 text-slate-700">
              Elektrische Energie als einziger Prozess‑Input – perspektivisch zu 100% erneuerbar.
            </p>
          </GradientCard>
          <GradientCard borderWidth={2}>
            <h4 className="font-semibold">Verantwortliche Lieferkette</h4>
            <p className="text-sm mt-2 text-slate-700">
              Partnerschaftlicher Umgang, Transparenz & Verlässlichkeit in der Zusammenarbeit.
            </p>
          </GradientCard>
        </div>
      </section>
    </Container>
  )
}
