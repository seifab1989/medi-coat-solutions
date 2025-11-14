import React from "react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";

function About() {
  return (
    <Container as="main" role="main" aria-labelledby="about-title">
      <h2 id="about-title" className="text-3xl md:text-4xl font-semibold">
        Über uns
      </h2>

      <p className="mt-3 text-slate-600">
        MediCoat Solutions steht für präzise, reproduzierbare PVD-Beschichtungen
        für die Medizintechnik. Unsere Mission: Funktion und Patientensicherheit
        zusammenbringen – durch validierte Prozesse, Transparenz und
        partnerschaftliche Zusammenarbeit.
      </p>

      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Innovation trifft Präzision
          </h3>
          <GradientBar />
          <p className="text-slate-700 leading-relaxed">
            Unser Unternehmen wurde <strong>2025</strong> von{" "}
            <strong>Dr. Fabian Seifried</strong> gegründet – mit der Vision, die
            Medizintechnik durch modernste Beschichtungslösungen sicherer,
            effizienter und nachhaltiger zu machen.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Wir sind spezialisiert auf <strong>PVD-Schichten</strong>, die
            höchste Qualitäts- und Sicherheitsstandards erfüllen. Unsere Prozesse
            sind nach <strong>DIN EN ISO 13485</strong> zertifiziert. Mit unserem
            Fachwissen unterstützen wir Medizintechnikhersteller dabei, Produkte zu
            entwickeln, die den steigenden Anforderungen an Funktionalität,
            Haltbarkeit und Biokompatibilität gerecht werden.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
            <img
              src={assetUrl("assets/about.jpg")}
              alt="MediCoat Solutions – Über uns"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            PVD-Beschichtungsanlage der Firma Oerlikon Balzers zur Herstellung modernster PVD-Schichten für Medizintechnikanwendungen.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Erfahrung und Kompetenz
        </h3>
        <GradientBar />
        <p className="text-slate-700 leading-relaxed mt-3">
          Dr. Fabian Seifried bringt seine langjährige industrielle und wissenschaftliche
          Expertise in der Beschichtungs- und Werkstofftechnologie in das
          Unternehmen ein. Diese Kombination aus Forschungstiefe und
          Praxiserfahrung bildet das Fundament für unsere innovativen Lösungen und
          unser Verständnis für die besonderen Herausforderungen der
          Medizintechnik.
        </p>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Unser Anspruch</h3>
        <GradientBar />
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Qualität",
              text: "Zertifizierte Prozesse und konsequente Einhaltung internationaler Standards.",
            },
            {
              title: "Innovation",
              text: "Permanente Weiterentwicklung unserer Beschichtungstechnologien.",
            },
            {
              title: "Partnerschaft",
              text: "Enge Zusammenarbeit mit Kunden und Lieferanten für maßgeschneiderte Lösungen.",
            },
          ].map((item) => (
            <GradientCard key={item.title}>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm mt-2">{item.text}</p>
            </GradientCard>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl md:text-3xl font-semibold">Unser Ziel</h3>
        <GradientBar />
        <p className="text-slate-700 leading-relaxed mt-3">
          Wir wollen die Zukunft der Medizintechnik mitgestalten – durch
          zuverlässige, präzise und nachhaltige Beschichtungslösungen, die einen
          echten Mehrwert für Patienten und Hersteller schaffen.
        </p>
      </section>
    </Container>
  );
}

// 👇 Das ist der wichtige Teil
export default About;



