import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import GradientBar from '../../components/GradientBar'
import { COATINGS, STORAGE_KEY } from './coatings.data'
import { assetUrl } from '../../utils/assetUrl'

// Minimal local FrameCard and SpecLine to avoid shared/ui dependency
function FrameCard({ children, active }){
  if (active) {
    // Active state: match gradient frame used for callout panels site-wide
    return (
      <div className="rounded-3xl p-[2px] bg-gradient-to-r from-blue-800/30 via-blue-600/30 to-green-500/30 hover:shadow-md transition">
        <div className="bg-white rounded-3xl p-6">{children}</div>
      </div>
    )
  }
  // Inactive: simple white card with subtle border
  return <div className="bg-white rounded-3xl p-6 border border-slate-100">{children}</div>
}
function SpecLine({ label, value }){
  return <div className="flex justify-between text-sm text-slate-700"><span className="font-medium">{label}</span><span>{value}</span></div>
}

export default function Portfolio(){
  // Default immer TiN-mod (Index 0) beim Seitenaufruf
  const [activeIdx, setActiveIdx] = React.useState(0)
  const shownIdx = activeIdx
  const shown = COATINGS[shownIdx] ?? COATINGS[0]

  return (
    <Container as="main">
      <h1 className="text-3xl md:text-4xl font-semibold">Portfolio an PVD-Schichten</h1>
      <GradientBar />

      <section className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-3">
          <ul role="listbox" aria-label="PVD-Schichten" className="space-y-3">
            {COATINGS.map((c,i)=>{
              const isActive = i === activeIdx
              return (
                <li key={c.name}>
                  <FrameCard active={isActive}>
                    <button type="button" aria-current={i===activeIdx? "true": undefined} role="option" aria-selected={i===activeIdx}
                      aria-expanded={isActive} onClick={()=>{ setActiveIdx(i); try{localStorage.setItem(STORAGE_KEY,String(i));}catch{} }}
                      className="w-full text-left rounded-2xl px-2 py-1 transition">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-slate-900">{c.name}</span>
                        <span className="text-xs text-slate-500 whitespace-nowrap">{isActive? "Angezeigt" : "Details anzeigen"}</span>
                      </div>
                    </button>
                  </FrameCard>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <FrameCard>
            <h3 className="text-2xl md:text-3xl font-semibold">{shown.name}</h3>
            <GradientBar className="opacity-20" />
            <div className="mt-2 space-y-2">
              <SpecLine label="Farbe:" value={shown.color} />
              <SpecLine label="Härte:" value={shown.hardness} />
              <SpecLine label="Schichtdicke:" value={shown.thickness} />
              <SpecLine label="Korrosionsbeständigkeit:" value={shown.corrosion} />
            </div>
            <div className="mt-5">
              <div className="text-sm font-semibold text-slate-900 mb-2">Merkmale:</div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                {shown.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <div className="mt-4">
                {(() => {
                  const n = shown.name.toLowerCase();
                  let link = null;
                  if (n.includes('tin-mod')) {
                    link = { label: 'TiN-mod', href: assetUrl('downloads/datenblatt-tin-mod.pdf') };
                  } else if (n.includes('crn-mod')) {
                    link = { label: 'CrN-mod', href: assetUrl('downloads/datenblatt-crn-mod.pdf') };
                  } else if (n.includes('zrn')) {
                    link = { label: 'ZrN', href: assetUrl('downloads/datenblatt-zrn.pdf') };
                  } else if (n.includes('crn-mc')) {
                    link = { label: 'CrN‑MC', href: assetUrl('downloads/datenblatt-crn-mc.pdf') };
                  } else if (n.includes('dlc')) {
                    link = { label: 'DLC', href: assetUrl('downloads/datenblatt-dlc.pdf') };
                  }
                  return link ? (
                    <p className="text-sm">
                      <span className="font-semibold text-slate-900">Direkt zum Datenblatt</span>: 
                      {' '}
                      <a href={link.href} className="text-blue-700 underline font-semibold" target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </p>
                  ) : null;
                })()}
              </div>
            </div>
          </FrameCard>
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-3xl p-[2px] bg-gradient-to-r from-blue-800/30 via-blue-600/30 to-green-500/30 hover:shadow-md transition">
          <div className="bg-white rounded-3xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-slate-700">Bitte wählen Sie die passende PVD-Schicht aus und laden Sie das entsprechende <Link to="/produkte/downloadcenter" className="font-semibold text-blue-700 underline">Datenblatt</Link> herunter oder lassen Sie sich von uns beraten.</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
