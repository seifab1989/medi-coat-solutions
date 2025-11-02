import React from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { FileText, Wrench, Download } from "lucide-react";
import Container from "../../components/Container";
import GradientBar from "../../components/GradientBar";
import GradientCard from "../../components/GradientCard";
import { assetUrl } from "../../utils/assetUrl";


export default function Herstellung() {
  return (
    <Container
      as="main"
      role="main"
      aria-labelledby="produkte-title"
    >
    
  {/* Zusatz-Inhalt: Erklärungen mit Bildplatzhaltern */}
  <section className="mt-0">
        <h2 className="text-3xl md:text-4xl font-semibold">Herstellung von PVD-Schichten</h2>
  <GradientBar />
        <p className="text-slate-700 leading-relaxed max-w-4xl">
          Die Herstellung von PVD-Schichten (Physical Vapor Deposition) ist ein Prozess, bei dem dünne Schichten von Material auf eine Oberfläche aufgebracht werden. Dieser Prozess findet nach dem Batch- / Chargenprinzip in einer Kammer unter Hochvakuum statt. Die Zykluszeit (gesamte Beschichtungsdauer; Door open-to-Door open) beträgt in der Regel zwischen 4 bis 6 Stunden. Es gibt verschiedene Methoden, um dies zu erreichen, darunter Lichtbogenverdampfen und Magnetron Sputtern. Hier ist eine einfache Erklärung der beiden Verfahren:
        </p>

        {/* Methoden im Card-Stil */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <GradientCard className="h-full">
            <h3 className="text-xl font-semibold">Lichtbogenverdampfen</h3>
            <div className="aspect-[4/3] mt-4 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
              <img
                src={assetUrl("assets/arc.jpg")}
                alt="Lichtbogenverdampfen (Arc)"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 mt-4">
              Beim Lichtbogenverdampfen wird ein starker elektrischer Lichtbogen verwendet, um das Material, das aufgetragen werden soll, zu verdampfen. Der Lichtbogen erzeugt hohe Temperaturen, die das Material in einen gasförmigen Zustand überführen. Dieses Gas kondensiert dann auf der Oberfläche des zu beschichtenden Objekts und bildet eine dünne Schicht. Dieses Verfahren ist besonders effektiv für Materialien, die hohe Temperaturen benötigen, um zu verdampfen.
            </p>
          </GradientCard>

          <GradientCard className="h-full">
            <h3 className="text-xl font-semibold">Magnetron Sputtern</h3>
            <div className="aspect-[4/3] mt-4 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
              <img
                src={assetUrl("assets/sputtern.jpg")}
                alt="Magnetron Sputtern"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 mt-4">
              Beim Magnetron Sputtern wird das Material durch Ionenbeschuss aus einer festen Quelle (Target) herausgelöst. Ein Magnetfeld wird verwendet, um die Ionen zu beschleunigen und auf das Target zu lenken. Die Ionen schlagen Atome aus dem Target heraus, die dann auf die Oberfläche des zu beschichtenden Objekts gelangen und dort eine dünne Schicht bilden. Dieses Verfahren ist besonders gut geeignet für die Beschichtung großer Flächen und ermöglicht eine gleichmäßige Schichtdicke.
            </p>
          </GradientCard>
        </div>
      </section>
    </Container>
  );
}
