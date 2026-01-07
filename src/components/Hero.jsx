import React from 'react'
import { Link } from 'react-router-dom'
import GradientBar from './GradientBar'

export default function Hero(){
  // Ensure base ends with a trailing slash so concatenations like base + 'assets/..' work
    // Respect Vite base path; ensure trailing slash for safe concatenation
    const rawBase = import.meta.env.BASE_URL || '/'
    const base = rawBase.endsWith('/') ? rawBase : rawBase + '/'

    // Removed debug fetch logic

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white/0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-widest">
                Dünne Funktionsschichten mit geringer Porosität
              </span>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
                <span className="inline-block bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  Zertifizierte Oberflächenveredelung für sichere Medizinprodukte.
                </span>
              </h1>
              <GradientBar height="h-1" className="my-6" />
              <p className="text-lg text-slate-600 max-w-2xl">
                Unsere PVD-Schichten schützen Ihre Produkte vor Verschleiß und Korrosion. Dank vollständiger Dokumentation und Rückverfolgbarkeit erfüllen Sie regulatorische Anforderungen einfacher – und erhöhen gleichzeitig die Sicherheit Ihrer Patienten.
              </p>
            </div>

            <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden relative">
                  <img
                    src={base + 'assets/hero_chirurgie.jpg'}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Silent fallback to a secondary local image if primary fails
                      e.currentTarget.onerror = null
                      e.currentTarget.src = base + 'assets/hero_locator.jpg'
                    }}
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 bg-white/0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Warum PVD-Schichten in der Medizintechnik?
            </h2>
            <GradientBar />
            <p className="mt-2 text-slate-600">
              PVD-Schichten verbessern die Funktion, Langlebigkeit und Sicherheit von Medizinprodukten.
            </p>
          </div>
          
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">🛡️</span>}
              title="Gesteigerte Patientensicherheit"
              points={["Geringere Partikelabgabe", "Beständigkeit gegen Sterilisation"]}
              to="/patientensicherheit/patientensicherheit"
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">⚗️</span>}
              title="Biokompatibilität"
              points={["Nachweise nach relevanten Normen (z. B. DIN EN ISO 10993-5)", "Glatte, leicht zu reinigende Oberflächen"]}
              to="/zertifizierung/biokompatibilitaet"
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">🏆</span>}
              title="DIN EN ISO 13485"
              points={["Lückenlose Dokumentation und Nachverfolgbarkeit", "Risiko- & Änderungsmanagement"]}
              to="/zertifizierung/zertifikate"
            />
            <AdvCard
              icon={<span className="w-[18px] h-[18px] inline-block">⚙️</span>}
              title="Vorteile von PVD-Schichten"
              points={[
                "Hohe Härte / Verschleißschutz",
                "Geringer Reibwert",
                "Korrosionsbeständigkeit",
                "Sterilisationsbeständig",
                "Biokompatibel und patientensicher"
              ]}
              to="/patientensicherheit/patientensicherheit"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function AdvCard({ icon, title, points, to }){
  return (
    <Link to={to} className="group block h-full" aria-label={`${title} – weitere Informationen`}>
      <div
        className="bg-white p-6 rounded-3xl hover:shadow-md transition h-full flex flex-col"
        style={{
          border: "2px solid transparent",
          borderRadius: "1.5rem",
          backgroundImage:
            "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          color: "#0f172a",
        }}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-none">{icon}</div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
        </div>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="flex-none select-none text-blue-500">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-blue-700 underline group-hover:no-underline">Weitere Informationen</div>
      </div>
    </Link>
  )
}
