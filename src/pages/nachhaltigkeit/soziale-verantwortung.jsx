import React from 'react'

export default function SozialeVerantwortung() {
  const GradientBar = () => (
    <div className="h-3 bg-gradient-to-r from-blue-800 via-blue-600 to-green-500 opacity-30 rounded-full mt-3 mb-5" />
  );

  const GradientCard = ({ children }) => (
    <div
      className="bg-white p-6 rounded-3xl"
      style={{
        border: "4px solid transparent",
        borderRadius: "1.5rem",
        backgroundImage:
          "linear-gradient(#ffffff, #ffffff), linear-gradient(to right, rgba(30,58,138,0.3), rgba(37,99,235,0.3), rgba(34,197,94,0.3))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        color: "#000000",
      }}
    >
      {children}
    </div>
  );

  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="soziale-title">
      {/* Titel & Intro im Stil von UeberUns */}
      <h1 id="soziale-title" className="text-3xl md:text-4xl font-semibold mb-6">Soziale Verantwortung</h1>
      <div className="text-slate-700 leading-relaxed space-y-4">
        <p>Nachhaltigkeit umfasst für uns nicht nur ökologische, sondern auch gesellschaftliche Aspekte. Soziale Verantwortung verstehen wir als einen kontinuierlichen Prozess, den wir aktiv gestalten und stetig weiterentwickeln.</p>
      </div>

      {/* Einleitende Sektion ohne Bildplatzhalter */}
      <section className="mt-10">
        <h3 className="text-2xl md:text-3xl font-semibold">Verantwortung im Fokus</h3>
        <GradientBar />
        <div className="text-slate-700 leading-relaxed space-y-4">
          <p>Wir schaffen sichere Arbeitsbedingungen, setzen auf kontinuierliche Qualifizierung und achten auf Fairness in der gesamten Wertschöpfungskette.</p>
          <p>Als Unternehmen möchten wir unseren Beitrag zu einem fairen, respektvollen und transparenten Miteinander leisten.Dazu gehört, unseren Mitarbeitenden ein sicheres und wertschätzendes Arbeitsumfeld zu bieten. Wir setzen auf offene Kommunikation, klare Strukturen und faire Arbeitsbedingungen. Ebenso wichtig ist uns der <strong>partnerschaftliche Umgang</strong> mit Kunden und Zulieferern, der auf Vertrauen und Verlässlichkeit basiert.</p>
        </div>
      </section>

      {/* Handlungsfelder – Karten im Stil von "Unser Anspruch" */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Unsere Handlungsfelder</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[{
            title: "Arbeits- & Gesundheitsschutz",
            text: "Sichere, ergonomische Arbeitsplätze, Gefährdungsbeurteilungen, regelmäßige Unterweisungen.",
          },{
            title: "Weiterbildung & Entwicklung",
            text: "Strukturierte Einarbeitung, Schulungsprogramme und kontinuierliche Qualifizierung.",
          },{
            title: "Verantwortliche Lieferkette",
            text: "Partnerschaftlicher Umgang, Transparenz & Verlässlichkeit in der Zusammenarbeit.",
          }].map((item) => (
            <GradientCard key={item.title}>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm mt-2">{item.text}</p>
            </GradientCard>
          ))}
        </div>
      </section>

      {/* Langlebigkeit als sozialer Beitrag */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Langlebigkeit schafft Mehrwert</h3>
        <GradientBar />
        <div className="text-slate-700 leading-relaxed space-y-4">
          <p>Die hohe Langlebigkeit unserer PVD-Schichten trägt indirekt zur sozialen Verantwortung bei. Durch langlebigere Produkte wird der Ressourceneinsatz verringert und die Versorgung im Gesundheitswesen unterstützt.</p>
        </div>
      </section>

      {/* Konkrete Maßnahmen – Liste im UeberUns-Stil */}
      <section className="mt-12">
        <h3 className="text-xl md:text-2xl font-semibold">Konkrete Maßnahmen</h3>
        <GradientBar />
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-4xl">
          <li>Regelmäßige Sicherheitsunterweisungen und präventive Gesundheitsangebote.</li>
          <li>Jährliche Entwicklungsziele und individuelle Lernpfade für Mitarbeitende.</li>
          <li>Lieferantenkodex mit Fokus auf Fairness, Arbeitsschutz und Compliance.</li>
          <li>Kontinuierliche Verbesserungsprozesse (KVP) und Feedback-Schleifen.</li>
        </ul>
      </section>
    </main>
  );
}
