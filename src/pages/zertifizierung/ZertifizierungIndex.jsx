import React from 'react'
import { Link } from 'react-router-dom'
import GradientBar from '../../components/GradientBar'

export default function ZertifizierungIndex(){
  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="page-title">
      <h1 id="page-title" className="text-3xl md:text-4xl font-semibold">Zertifizierung & Nachweise</h1>
      <p className="text-slate-600 mt-3 max-w-3xl">Informationen zu Biokompatibilität, Qualitätsmanagement und unseren Zertifikaten.</p>

      <div className="space-y-8 mt-8">
        <section>
          <h2 className="text-xl font-semibold">Biokompatibilität</h2>
          <GradientBar />
          <p className="text-slate-600">Details: <Link to="/zertifizierung/biokompatibilitaet" className="text-blue-700 underline">zur Seite</Link></p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Qualitätsmanagement</h2>
          <GradientBar />
          <p className="text-slate-600">Details: <Link to="/zertifizierung/qualitaetsmanagement" className="text-blue-700 underline">zur Seite</Link></p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Zertifikate</h2>
          <GradientBar />
          <p className="text-slate-600">Details: <Link to="/zertifizierung/zertifikate" className="text-blue-700 underline">zur Seite</Link></p>
        </section>
      </div>
    </main>
  )
}
