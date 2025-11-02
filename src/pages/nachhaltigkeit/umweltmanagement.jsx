import React from 'react'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'

export default function Umweltmanagement() {
  return (
    <Container
      as="main"
      role="main"
      aria-labelledby="umwelt-title"
    >
      
      {/* Titel & Intro im Stil von UeberUns */}
      <h1 id="umwelt-title" className="text-3xl md:text-4xl font-semibold">
        Umweltmanagement
      </h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Programm zur Reduktion von Energie- und Medienverbrauch sowie Recycling. Auch ohne formale Zertifizierung legen wir
        großen Wert auf einen verantwortungsvollen Umgang mit Umwelt und Ressourcen.
      </p>

      {/* Intro-Section ohne Bildplatzhalter */}
      <section className="mt-10">
  <h2 className="text-2xl md:text-3xl font-semibold">PVD – ökologisch im Vorteil</h2>
  <GradientBar />
        <p className="text-slate-700 leading-relaxed">
          Unsere eingesetzte PVD‑Technologie (Physical Vapor Deposition) kommt ohne krebserzeugende Stoffe wie Chrom(VI) und ohne
          umweltschädliche Prozesschemikalien aus. Es fallen keine giftigen Abwässer an, die entsorgt oder aufwendig behandelt
          werden müssten. Der Prozess benötigt ausschließlich elektrische Energie – diese kann vollständig aus erneuerbaren Quellen,
          etwa Solarstrom, bereitgestellt werden.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Damit ist PVD besonders umweltfreundlich und kann bei nachhaltiger Energieversorgung sogar klimaneutral betrieben
          werden. Für uns ist das ein wichtiger Beitrag, Medizintechnik langfristig ressourcenschonender zu gestalten.
        </p>
      </section>

      {/* Leitlinien / Prinzipien – Karten wie in UeberUns */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Unser Anspruch</h2>
        <GradientBar />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Vermeiden statt behandeln",
              text:
                "PVD‑Prozesse ohne giftige Abwässer und ohne Chrom(VI) oder vergleichbare Stoffe.",
            },
            {
              title: "Energie bewusst nutzen",
              text:
                "Elektrische Energie als einziger Prozess‑Input – perspektivisch zu 100% erneuerbar.",
            },
            {
              title: "Ressourcen schonen",
              text:
                "Langlebige Schichten und Recycling‑Konzepte für Medien und Verpackungen.",
            },
          ].map((item) => (
            <GradientCard key={item.title} borderWidth={4}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.text}</p>
            </GradientCard>
          ))}
        </div>
      </section>

      {/* Konkrete Maßnahmen – Liste wie typografische Abschnitte in UeberUns */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Konkrete Maßnahmen</h2>
        <GradientBar />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-4xl">
          <li>
            Verzicht auf Chrom(VI) und andere umweltschädliche Prozesschemikalien in der Schichtabscheidung.
          </li>
          <li>
            Keine Entstehung giftiger Abwässer; Medienkreisläufe werden minimiert und wo möglich geschlossen.
          </li>
          <li>
            Elektrische Energie als alleiniger Prozess‑Energieträger – aus erneuerbaren Quellen skalierbar.
          </li>
          <li>
            Schrittweise Reduktion von Energie‑ und Medienverbrauch sowie Ausbau von Recycling‑Quoten.
          </li>
        </ul>
      </section>
    </Container>
  );
}
