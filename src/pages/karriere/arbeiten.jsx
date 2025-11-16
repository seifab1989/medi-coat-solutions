import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import GradientCard from '../../components/GradientCard'

export default function Arbeiten() {

  return (
  <Container as="main" role="main" aria-labelledby="arbeiten-title">
      {/* Titel & Intro */}
      <h2 id="arbeiten-title" className="text-3xl md:text-4xl font-semibold">Arbeiten bei uns</h2>
      <p className="mt-3 text-slate-600">
        Bei MediCoat Solutions entwickeln und produzieren wir innovative PVD-Schichten für die Medizintechnik. Wir möchten durch maximale 
        Präzision und Qualität direkt zur Patientensicherheit und zur Verlässlichkeit medizinischer Produkte beitragen.
      </p>

      {/* Einleitender Abschnitt mit Text links, Visual rechts */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Was dich bei uns erwartet</h3>
          <GradientBar />
          <div className="text-slate-700 leading-relaxed space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              {[
                "Innovation: Wir arbeiten mit modernster Technik und entwickeln Prozesse ständig weiter.",
                "Qualität: Sorgfalt in jedem Arbeitsschritt ist unser Standard – weil in der Medizintechnik und PVD-Beschichtung jedes Detail zählt.",
                "Verantwortung: Unsere Arbeit hat direkten Einfluss auf die Gesundheit von Menschen. Dieses Bewusstsein treibt uns an.",
                "Mitarbeit in einem dynamischen, wachsenden Umfeld.",
                "Einblicke in die Anwendungen von PVD-Schichten für die Medizintechnik.",
                "Die Möglichkeit, aktiv an der Weiterentwicklung von Verfahren mitzuwirken.",
                "Ein Arbeitsumfeld, in dem Patientensicherheit und technische Exzellenz oberste Priorität haben.",
              ].map((it, i) => {
                const boldWords = [
                  "Innovation",
                  "Qualität",
                  "Verantwortung",
                  "PVD-Schichten",
                  "PVD-Beschichtung",
                  "Medizintechnik",
                  "technische Exzellenz",
                  "Mitarbeit",
                ];
                let text = it;
                boldWords.forEach(word => {
                  const regex = new RegExp(`(${word})`, "gi");
                  text = text.replace(regex, "<strong>$1</strong>");
                });
                return <li key={i} dangerouslySetInnerHTML={{ __html: text }} />;
              })}
            </ul>
          </div>
        </div>
  </section>

      {/* Warum es sich lohnt */}
      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Warum es sich lohnt</h3>
        <GradientBar />
        <p className="text-slate-700 leading-relaxed">
          Arbeiten bei uns bedeutet, Teil einer Branche zu sein, die Leben verändert. Deine Arbeit trägt dazu bei,
          medizinische Produkte sicherer, langlebiger und leistungsfähiger zu machen.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <GradientCard>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-slate-700 font-medium m-0">Jetzt Möglichkeiten entdecken:</p>
            <Link
              to="/karriere/offene-stellen"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
            >
              Offene Stellen
            </Link>
            <Link
              to="/karriere/ausbildung"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 text-white text-sm font-medium shadow whitespace-nowrap"
            >
              Ausbildung & Praktika
            </Link>
          </div>
        </GradientCard>
      </section>
    </Container>
  );
}
