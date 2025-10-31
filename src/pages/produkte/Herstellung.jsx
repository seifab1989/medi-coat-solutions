import React from "react";
import { Link, useInRouterContext } from "react-router-dom";
import { FileText, Wrench, Download } from "lucide-react";


export default function Herstellung() {
  // Respect Vite base path; ensure trailing slash for safe concatenation
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : rawBase + "/";
  
  /** Card – robuste Variante ohne komplexe Inline-Styles */
  const Card = ({ children }) => (
    <div
      className="rounded-3xl p-[2px] bg-gradient-to-r from-blue-800/30 via-blue-600/30 to-green-500/30 hover:shadow-md transition h-full"
      role="region"
      aria-label="Karte"
    >
      <div className="bg-white rounded-3xl p-6 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
  
  return (
    <main
      className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      role="main"
      aria-labelledby="produkte-title"
    >
    
  {/* Zusatz-Inhalt: Erklärungen mit Bildplatzhaltern */}
  <section className="mt-0">
        <h2 className="text-3xl md:text-4xl font-semibold">Herstellung von PVD-Schichten</h2>
        <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
        <p className="text-slate-700 leading-relaxed max-w-4xl">
          Die Herstellung von PVD-Schichten (Physical Vapor Deposition) ist ein Prozess, bei dem dünne Schichten von Material auf eine Oberfläche aufgebracht werden. Dieser Prozess findet nach dem Batch- / Chargenprinzip in einer Kammer unter Hochvakuum statt. Die Zykluszeit (gesamte Beschichtungsdauer; Door open-to-Door open) beträgt in der Regel zwischen 4 bis 6 Stunden. Es gibt verschiedene Methoden, um dies zu erreichen, darunter Lichtbogenverdampfen und Magnetron Sputtern. Hier ist eine einfache Erklärung der beiden Verfahren:
        </p>

        {/* Methoden im Card-Stil */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Lichtbogenverdampfen</h3>
            <div className="aspect-[4/3] mt-4 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
              <img
                src={base + "assets/arc.jpg"}
                alt="Lichtbogenverdampfen (Arc)"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 mt-4">
              Beim Lichtbogenverdampfen wird ein starker elektrischer Lichtbogen verwendet, um das Material, das aufgetragen werden soll, zu verdampfen. Der Lichtbogen erzeugt hohe Temperaturen, die das Material in einen gasförmigen Zustand überführen. Dieses Gas kondensiert dann auf der Oberfläche des zu beschichtenden Objekts und bildet eine dünne Schicht. Dieses Verfahren ist besonders effektiv für Materialien, die hohe Temperaturen benötigen, um zu verdampfen.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">Magnetron Sputtern</h3>
            <div className="aspect-[4/3] mt-4 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
              <img
                src={base + "assets/sputtern.jpg"}
                alt="Magnetron Sputtern"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-700 mt-4">
              Beim Magnetron Sputtern wird das Material durch Ionenbeschuss aus einer festen Quelle (Target) herausgelöst. Ein Magnetfeld wird verwendet, um die Ionen zu beschleunigen und auf das Target zu lenken. Die Ionen schlagen Atome aus dem Target heraus, die dann auf die Oberfläche des zu beschichtenden Objekts gelangen und dort eine dünne Schicht bilden. Dieses Verfahren ist besonders gut geeignet für die Beschichtung großer Flächen und ermöglicht eine gleichmäßige Schichtdicke.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
