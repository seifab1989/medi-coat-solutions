import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import IovaraCoatLogo from './IovaraCoatLogo'

export default function Navbar(){
  const [openMobile, setOpenMobile] = useState(false)
  const [UnternehmenOpen, setUnternehmenOpen] = useState(false)
  const [AktuellesOpen, setAktuellesOpen] = useState(false)
  const [ProdukteOpen, setProdukteOpen] = useState(false)
  // Nachhaltigkeit entfernt
  const [ZertifizierungOpen, setZertifizierungOpen] = useState(false)
  const [KontaktOpen, setKontaktOpen] = useState(false)
  const UnternehmenRef = useRef(null)
  const AktuellesRef = useRef(null)
  const ProdukteRef = useRef(null)
  // Nachhaltigkeit entfernt
  const ZertifizierungRef = useRef(null)
  const KontaktRef = useRef(null)

// Breadcrumb Setup (liest aktuelle URL aus dem Router)
  const location = useLocation()
  const pathnamesRaw = location.pathname.split('/').filter(Boolean)
  // Breadcrumb: aufeinanderfolgende Duplikate (z. B. "patientensicherheit/patientensicherheit") entfernen
  const pathnames = pathnamesRaw
    // Gewünschte Ausblendungen aus Breadcrumb
    .filter(seg => seg.toLowerCase() !== 'offene-stellen')
    .reduce((acc, seg) => {
    if (acc.length === 0) return [seg]
    const prev = acc[acc.length - 1]
    if (String(prev).toLowerCase() === String(seg).toLowerCase()) return acc
    return [...acc, seg]
  }, [])
  // Einheitliches Mapping: URL-Segmente (immer lowercase) -> sichtbare Labels (mit Umlauten & korrekter Schreibweise)
  const labelMap = {
    // Root-Level
    'unternehmen': 'Unternehmen',
    'produkte': 'Produkte',
    'patientensicherheit': 'PVD & Patientensicherheit',
    'zertifizierung': 'Zertifizierung',
    'aktuelles': 'Aktuelles',
    'karriere': 'Karriere',
    'kontakt': 'Kontakt',

    // Unternehmen
    'about': 'Über uns',
    'standorte': 'Standorte',

    // Produkte
    'herstellung': 'Herstellung PVD-Schichten',
    'portfolio': 'Portfolio',
    'dienstleistungen': 'Dienstleistungen',
    'downloadcenter': 'Downloadcenter',

    // Zertifizierung
    'qualitaetsmanagement': 'Qualitätsmanagement',
    'biokompatibilitaet': 'Biokompatibilität',
    'zertifikate': 'Zertifikate',

    // Nachhaltigkeit als Unterpunkt Unternehmen
    'nachhaltigkeit': 'Nachhaltigkeit',

    // Aktuelles
    'messeauftritte': 'Messeauftritte',
    'pressemitteilungen': 'Pressemitteilungen',
    'innovation-forschung': 'Innovation / Forschung',
    'praxiswissen': 'Praxiswissen',

    // Karriere
    'ausbildung': 'Ausbildung / Praktika',
    'arbeiten': 'Arbeiten bei uns',

    // Kontakt
    'ansprechpartner': 'Direkter Ansprechpartner',
    'formular': 'Kontaktformular',
    'karteanfahrt': 'Standortkarte & Anfahrt',

    // Rechtliches
    'impressum': 'Impressum',
    'datenschutz': 'Datenschutz',
      'agb': 'AGB'
  }

  const toTitle = (seg) => {
    const key = seg.toLowerCase()
    return labelMap[key] || decodeURIComponent(seg).replace(/-/g, ' ')
  }
  const crumbs = pathnames.map((seg, idx) => ({name: toTitle(seg), to: '/' + pathnames.slice(0, idx + 1).join('/')}))


  useEffect(() => {
    function onDocClick(e){
      if(UnternehmenRef.current && !UnternehmenRef.current.contains(e.target)){
        setUnternehmenOpen(false)
      }
      if (AktuellesRef.current && !AktuellesRef.current.contains(e.target)) setAktuellesOpen(false)
      if (ProdukteRef.current && !ProdukteRef.current.contains(e.target)) setProdukteOpen(false)
      // Nachhaltigkeit entfernt
      if (ZertifizierungRef.current && !ZertifizierungRef.current.contains(e.target)) setZertifizierungOpen(false)
      if (KontaktRef.current && !KontaktRef.current.contains(e.target)) setKontaktOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  // Close mobile menu and submenus on route change to ensure navigation works reliably
  useEffect(() => {
    setOpenMobile(false)
    setUnternehmenOpen(false)
    setProdukteOpen(false)
    setZertifizierungOpen(false)
    setAktuellesOpen(false)
    setKontaktOpen(false)
  }, [location.pathname])

  return (
    <header className="relative backdrop-blur bg-gradient-to-r from-blue-900/0 via-blue-600/0 to-green-500/0 backdrop-blur sticky top-0 z-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
            <div className="w-40 overflow-visible">
              <IovaraCoatLogo className="block origin-left" style={{ transform: 'scale(3)', transformOrigin: 'left' }} />
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="mc-nav hidden lg:flex gap-6 text-slate-700 items-center lg:ml-[7rem]">
          <div className="relative" ref={UnternehmenRef}>
            <button
              onClick={() => setUnternehmenOpen(v => !v)}
              aria-expanded={UnternehmenOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Unternehmen
            </button>
                {UnternehmenOpen && (
                  <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="/unternehmen/about" onClick={() => setUnternehmenOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Über uns</Link>
                <Link to="/unternehmen/nachhaltigkeit" onClick={() => setUnternehmenOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Nachhaltigkeit</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={ProdukteRef}>
            <button
              onClick={() => setProdukteOpen(v => !v)}
              aria-expanded={ProdukteOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Produkte
            </button>
            {ProdukteOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg w-56 py-2">
                <Link to="/produkte/herstellung" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Herstellung PVD-Schichten</Link>
                <Link to="/produkte/portfolio" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Portfolio</Link>
                <Link to="/produkte/dienstleistungen" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Dienstleistungen</Link>
                <Link to="/produkte/downloadcenter" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Downloadcenter</Link>
              </div>
            )}
          </div>

             <div className="relative">
                <Link to="/patientensicherheit/patientensicherheit" className="flex items-center gap-2 hover:text-slate-900 whitespace-nowrap">
                  PVD & Patientensicherheit
                </Link>
              </div>

            <div className="relative" ref={ZertifizierungRef}>
            <button
              onClick={() => setZertifizierungOpen(v => !v)}
              aria-expanded={ZertifizierungOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Zertifizierung
            </button>
            {ZertifizierungOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg w-56 py-2">
                <Link to="/zertifizierung/qualitaetsmanagement" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Qualitätsmanagement</Link>
                <Link to="/zertifizierung/biokompatibilitaet" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Biokompatibilität</Link>
                <Link to="/zertifizierung/zertifikate" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Zertifikate</Link>
              </div>
            )}
          </div>

            {/* Nachhaltigkeit Menü entfernt */}

          <div className="relative" ref={AktuellesRef}>
            <button
              onClick={() => setAktuellesOpen(v => !v)}
              aria-expanded={AktuellesOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Aktuelles
            </button>
            {AktuellesOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                {/* Messeauftritte jetzt hier unter Aktuelles */}
                {/* Pressemitteilungen entfernt */}
                <Link to="/aktuelles/innovation-forschung" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Innovation / Forschung</Link>
                <Link to="/aktuelles/praxiswissen" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Praxiswissen</Link>
                <Link to="/aktuelles/messeauftritte" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Messeauftritte</Link>
              </div>
            )}
          </div>

          
          {/* Karriere Menü entfernt */}

          <div className="relative" ref={KontaktRef}>
            <button
              onClick={() => setKontaktOpen(v => !v)}
              aria-expanded={KontaktOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Kontaktmöglichkeiten
            </button>
            {KontaktOpen && (
              <div className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg w-72 py-2">
                <Link to="/kontakt/ansprechpartner" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Direkter Ansprechpartner</Link>
                <Link to="/kontakt/formular" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Kontaktformular</Link>
                <Link to="/kontakt/karteanfahrt" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Standortkarte & Anfahrt</Link>
              </div>
            )}
          </div>

        </nav>

        <div className="mc-cta hidden lg:block ml-6 lg:ml-auto shrink-0">
           <Button to="/kontakt/formular" className="px-3 py-1 text-sm whitespace-normal max-w-[140px] text-center font-bold" style={{fontWeight: 700}}>Beratung anfragen</Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpenMobile(v => !v)}
            aria-expanded={openMobile}
            aria-label="Menü öffnen"
            className="p-2 rounded-md bg-slate-100"
          >
            {openMobile ? '✕' : '☰'}
          </button>
        </div>
      </div>

        {/* Breadcrumb overlay in header */}
        {location.pathname !== '/' && !openMobile && (
          <nav aria-label="Breadcrumb" className="absolute inset-x-0 bottom-0 z-10 bg-transparent">
            <ol className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-slate-900">Startseite</Link>
              </li>

              {crumbs.map((c, idx) => (
                <li key={c.to} className="flex items-center gap-2">
                  <span aria-hidden>›</span>
                  {idx < crumbs.length - 1 ? (
                    <Link to={idx === 0 ? "/" : c.to} className="hover:text-slate-900">{c.name}</Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-slate-900">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

      {/* Mobile menu */}
      {openMobile && (
        <div className="lg:hidden bg-white/80 backdrop-blur border-t" onMouseDown={(e)=>e.stopPropagation()}>
          <div className="px-4 py-3 space-y-2">
            <div>
              <button 
                className="w-full text-left px-2 py-3 rounded hover:bg-slate-50 font-medium" 
                onClick={() => setUnternehmenOpen(v => !v)}
              >Unternehmen</button>
              {UnternehmenOpen && (
                <div className="mt-1 flex flex-col pl-4" onMouseDown={(e)=>e.stopPropagation()}>
                  <Link to="/unternehmen/about" onClick={() => { setOpenMobile(false); setUnternehmenOpen(false); }} className="block px-2 py-2 text-sm">Über uns</Link>
                  <Link to="/unternehmen/nachhaltigkeit" onClick={() => { setOpenMobile(false); setUnternehmenOpen(false); }} className="block px-2 py-2 text-sm">Nachhaltigkeit</Link>
                </div>
              )}
            </div>

            <div>
              <button 
              className="w-full text-left px-2 py-3 rounded hover:bg-slate-50" 
              onClick={() => setProdukteOpen(v => !v)}
              >Produkte</button>
              {ProdukteOpen && (
                <div className="pl-4" onMouseDown={(e)=>e.stopPropagation()}>
                  <Link to="/produkte/herstellung" className="block px-2 py-2 text-sm" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Herstellung PVD-Schichten</Link>
                  <Link to="/produkte/portfolio" className="block px-2 py-2 text-sm" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Portfolio</Link>
                  <Link to="/produkte/dienstleistungen" className="block px-2 py-2 text-sm" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Dienstleistungen</Link>
                  <Link to="/produkte/downloadcenter" className="block px-2 py-2 text-sm" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Downloadcenter</Link>
                </div>
              )}
            </div>

               <div>
                 <Link to="/patientensicherheit/patientensicherheit" className="w-full block text-left px-2 py-3 rounded hover:bg-slate-50" onClick={() => { setOpenMobile(false); }}>
                  PVD & Patientensicherheit
                 </Link>
               </div>

            <div>
              <button 
              className="w-full text-left px-2 py-3 rounded hover:bg-slate-50" 
              onClick={() => setZertifizierungOpen(v => !v)}
              >Zertifizierungen</button>
              {ZertifizierungOpen && (
                <div className="pl-4" onMouseDown={(e)=>e.stopPropagation()}>
                  <Link to="/zertifizierung/qualitaetsmanagement" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setZertifizierungOpen(false); }}>Qualitätsmanagement</Link>
                  <Link to="/zertifizierung/biokompatibilitaet" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setZertifizierungOpen(false); }}>Biokompatibilität</Link>
                  <Link to="/zertifizierung/zertifikate" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setZertifizierungOpen(false); }}>Zertifikate</Link>
                </div>
              )}
            </div>

              {/* Nachhaltigkeit Menü mobil entfernt */}

            <div>
              <button
                className="w-full text-left px-2 py-3 rounded hover:bg-slate-50"
                onClick={() => setAktuellesOpen(v => !v)}
              >Aktuelles</button>
              {AktuellesOpen && (
                <div className="pl-4" onMouseDown={(e)=>e.stopPropagation()}>
                    {/* Messeauftritte jetzt unter Aktuelles (mobile) */}
                  {/* Pressemitteilungen entfernt */}
                  <Link to="/aktuelles/innovation-forschung" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Innovation / Forschung</Link>
                  <Link to="/aktuelles/praxiswissen" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Praxiswissen</Link>
                  <Link to="/aktuelles/messeauftritte" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Messeauftritte</Link>
                </div>
              )}
            </div>

              {/* Karriere Menü mobil entfernt */}

              <div>
                <button
                  className="w-full text-left px-2 py-3 rounded hover:bg-slate-50"
                  onClick={() => setKontaktOpen(v => !v)}
                >
                  Kontaktmöglichkeiten
                </button>
                {KontaktOpen && (
                  <div className="pl-4" onMouseDown={(e)=>e.stopPropagation()}>
                    <Link to="/kontakt/ansprechpartner" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Direkter Ansprechpartner</Link>
                    <Link to="/kontakt/formular" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Kontaktformular</Link>
                    <Link to="/kontakt/karteanfahrt" className="block px-2 py-3 text-sm" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Standortkarte & Anfahrt</Link>
                  </div>
                )}
              </div>

            <div className="pt-2">
              <Link to="/kontakt/formular" onClick={() => setOpenMobile(false)}>
                <Button className="w-full">Beratung anfragen</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
