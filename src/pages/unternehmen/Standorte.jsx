import React from "react";
import { MapPin, Building2, ShieldCheck } from "lucide-react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";

export default function Standorte() {
  return (
    <Container as="main">
      {/* Titel */}
      <h1 className="text-3xl md:text-4xl font-semibold">Standorte</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Unser zentraler Standort für Entwicklung, Beschichtung und Qualitätssicherung.
      </p>

      {/* Firmenadresse */}
      <section className="mt-10 grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">Unser Firmensitz</h2>
          <GradientBar />
          <p className="text-slate-700 mt-3 max-w-4xl">
            Der Hauptsitz unseres Unternehmens befindet sich in:
          </p>
          <address className="not-italic mt-3">
            <div className="flex items-start gap-3 text-slate-800 font-medium">
              <MapPin className="w-6 h-6 mt-0.5 opacity-70" />
              <div>
                Ludwig-Wolf-Straße 23<br />
                75249 Kieselbronn
              </div>
            </div>
          </address>
          <p className="text-slate-700 mt-4 max-w-4xl">
            Von hier aus steuern wir sämtliche Prozesse – von der Entwicklung über die Qualitätssicherung bis hin zur Kundenbetreuung.
          </p>
        </div>

        {/* Standortkarte / Kernfunktionen */}
        <div className="lg:col-span-5">
          <GradientCard>
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 mt-1 opacity-70" />
              <div>
                <h3 className="font-semibold">Kernfunktionen am Standort</h3>
                <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                  <li>Entwicklung & Prozessdesign</li>
                  <li>Beschichtung (PVD) & Validierung</li>
                  <li>Qualitätssicherung & Dokumentation</li>
                  <li>Kundenbetreuung & Projektmanagement</li>
                </ul>
              </div>
            </div>
          </GradientCard>
        </div>
      </section>

      {/* Qualität am Standort */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Qualität am Standort</h2>
        <GradientBar />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <GradientCard>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 mt-1 opacity-70" />
              <div>
                <h3 className="font-semibold">DIN EN ISO 13485</h3>
                <p className="text-sm text-slate-700 mt-2">
                  Alle Abläufe an unserem Standort sind nach <strong>DIN EN ISO 13485</strong> zertifiziert. Damit stellen wir sicher, dass unsere
                  Beschichtungsprozesse die hohen Anforderungen der Medizintechnik zuverlässig erfüllen.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard>
            <h3 className="font-semibold">Zentrale Lage, kurze Wege</h3>
            <p className="text-sm text-slate-700 mt-2">
              Der Standort Kieselbronn ermöglicht eine gute Erreichbarkeit innerhalb der Region Baden-Württemberg und bietet gleichzeitig die Nähe zu
              wichtigen Forschungs- und Industriepartnern. Dies unterstützt uns dabei, Kundenprojekte effizient umzusetzen und flexibel auf individuelle
              Anforderungen zu reagieren.
            </p>
          </GradientCard>
        </div>
      </section>
    </Container>
  );
}
