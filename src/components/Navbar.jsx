import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MediCoatLogo from './MediCoatLogo'

export default function Navbar(){
  const [openMobile, setOpenMobile] = useState(false)
  const [UnternehmenOpen, setUnternehmenOpen] = useState(false)
  const [AktuellesOpen, setAktuellesOpen] = useState(false)
  const [ProdukteOpen, setProdukteOpen] = useState(false)
  const [KarriereOpen, setKarriereOpen] = useState(false)
  const [NachhaltigkeitOpen, setNachhaltigkeitOpen] = useState(false)
  const [ZertifizierungOpen, setZertifizierungOpen] = useState(false)
  const [KontaktOpen, setKontaktOpen] = useState(false)
  const UnternehmenRef = useRef(null)
  const AktuellesRef = useRef(null)
  const ProdukteRef = useRef(null)
  const KarriereRef = useRef(null)
  const NachhaltigkeitRef = useRef(null)
  const ZertifizierungRef = useRef(null)
  const KontaktRef = useRef(null)

  useEffect(() => {
    function onDocClick(e){
      if(UnternehmenRef.current && !UnternehmenRef.current.contains(e.target)){
        setUnternehmenOpen(false)
      }
      if (AktuellesRef.current && !AktuellesRef.current.contains(e.target)) setAktuellesOpen(false)
      if (ProdukteRef.current && !ProdukteRef.current.contains(e.target)) setProdukteOpen(false)
      if (KarriereRef.current && !KarriereRef.current.contains(e.target)) setKarriereOpen(false)
      if (NachhaltigkeitRef.current && !NachhaltigkeitRef.current.contains(e.target)) setNachhaltigkeitOpen(false)
      if (ZertifizierungRef.current && !ZertifizierungRef.current.contains(e.target)) setZertifizierungOpen(false)
      if (KontaktRef.current && !KontaktRef.current.contains(e.target)) setKontaktOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <header className="backdrop-blur bg-gradient-to-r from-blue-900/0 via-blue-600/0 to-green-500/0 backdrop-blur sticky top-0 z-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <MediCoatLogo />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-slate-700 items-center">
          <div className="relative" ref={UnternehmenRef}>
            <button
              onClick={() => setUnternehmenOpen(v => !v)}
              aria-expanded={UnternehmenOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Unternehmen ▾
            </button>
            {UnternehmenOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="unternehmen/team" onClick={() => setUnternehmenOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Team</Link>
                <Link to="unternehmen/about" onClick={() => setUnternehmenOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Über uns</Link>
                <Link to="unternehmen/UnternehmenIndex" onClick={() => setUnternehmenOpen(false)} className="block px-4 py-2 text-sm hover:bg-slate-50">Zertifizierung</Link>
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
              Produkte ▾
            </button>
            {ProdukteOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-56 py-2">
                <Link to="/produkte/portfolio" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Portfolio</Link>
                <Link to="/produkte/dienstleistungen" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Dienstleistungen</Link>
                <Link to="/produkte/downloadcenter" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setProdukteOpen(false)}>Downloadcenter</Link>
              </div>
            )}
          </div>

             <div className="relative">
                <Link to="Patientensicherheit/Patientensicherheit" className="flex items-center gap-2 hover:text-slate-900">
                PVD & Patientensicherheit ▾
                </Link>
              </div>

            <div className="relative" ref={ZertifizierungRef}>
            <button
              onClick={() => setZertifizierungOpen(v => !v)}
              aria-expanded={ZertifizierungOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Zertifizierung ▾
            </button>
            {ZertifizierungOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-56 py-2">
                <Link to="/zertifizierung/Qualitätsmanagement" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Qualitätsmanagement</Link>
                <Link to="/zertifizierung/Biokompatibilität" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Biokompatibilität</Link>
                <Link to="/zertifizierung/Zertifikate" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setZertifizierungOpen(false)}>Zertifikate</Link>
              </div>
            )}
          </div>

            <div className="relative" ref={NachhaltigkeitRef}>
            <button
              onClick={() => setNachhaltigkeitOpen(v => !v)}
              aria-expanded={NachhaltigkeitOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Nachhaltigkeit ▾
            </button>
            {NachhaltigkeitOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-56 py-2">
                <Link to="/nachhaltigkeit/konformitaet" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setNachhaltigkeitOpen(false)}>Konformität</Link>
                <Link to="/nachhaltigkeit/soziale-verantwortung" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setNachhaltigkeitOpen(false)}>Soziale Verantwortung</Link>
                <Link to="/nachhaltigkeit/umweltmanagement" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setNachhaltigkeitOpen(false)}>Umweltmanagement</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={AktuellesRef}>
            <button
              onClick={() => setAktuellesOpen(v => !v)}
              aria-expanded={AktuellesOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Aktuelles ▾
            </button>
            {AktuellesOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="aktuelles/Messeauftritte" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Messeauftritte</Link>
                <Link to="aktuelles/Pressemitteilungen" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Pressemitteilungen</Link>
                <Link to="aktuelles/Innovation-Forschung" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Innovation / Forschung</Link>
                <Link to="aktuelles/Blog" className="block px-4 py-2 hover:bg-slate-50" onClick={() => setAktuellesOpen(false)}>Blog</Link>                
              </div>
            )}
          </div>

          
          <div className="relative" ref={KarriereRef}>
            <button
              onClick={() => setKarriereOpen(v => !v)}
              aria-expanded={KarriereOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Karriere ▾
            </button>
            {KarriereOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-64 py-2">
                <Link to="/karriere/offene-stellen" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKarriereOpen(false)}>Offene Stellen</Link>
                <Link to="/karriere/ausbildung" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKarriereOpen(false)}>Ausbildung / Praktika</Link>
                <Link to="/karriere/arbeiten" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKarriereOpen(false)}>Arbeiten bei uns</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={KontaktRef}>
            <button
              onClick={() => setKontaktOpen(v => !v)}
              aria-expanded={KontaktOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 hover:text-slate-900"
            >
              Kontakt ▾
            </button>
            {KontaktOpen && (
              <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-72 py-2">
                <Link to="/kontakt/Ansprechpartner" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Direkter Ansprechpartner</Link>
                <Link to="/kontakt/Formular" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Kontaktformular</Link>
                <Link to="/kontakt/KarteAnfahrt" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setKontaktOpen(false)}>Standortkarte & Anfahrt</Link>
              </div>
            )}
          </div>

        </nav>

        <div className="hidden md:block">
          <Button to="/kontakt/formular" className="px-4 py-2">Beratung anfragen</Button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
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

      {/* Mobile menu */}
      {openMobile && (
        <div className="md:hidden bg-white/80 backdrop-blur border-t">
          <div className="px-4 py-3 space-y-2">
            <div>
              <div className="font-medium">Unternehmen</div>
              <div className="mt-2 flex flex-col pl-3">
                <Link to="unternehmen/team" onClick={() => setOpenMobile(false)} className="py-1">Team</Link>
                <Link to="unternehmen/about" onClick={() => setOpenMobile(false)} className="py-1">Über uns</Link>
                <Link to="unternehmen/UnternehmenIndex" onClick={() => setOpenMobile(false)} className="py-1">Zertifizierung</Link>
              </div>
            </div>

            <div>
              <button 
              className="w-full text-left px-2 py-2 rounded hover:bg-slate-50" 
              onClick={() => setProdukteOpen(v => !v)}
              >Produkte ▾</button>
              {ProdukteOpen && (
                <div className="pl-4">
                  <Link to="/produkte/portfolio" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Portfolio</Link>
                  <Link to="/produkte/dienstleistungen" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Dienstleistungen</Link>
                  <Link to="/produkte/downloadcenter" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setProdukteOpen(false); }}>Downloadcenter</Link>
                </div>
              )}
            </div>

               <div>
                 <Link to="/Patientensicherheit/Patientensicherheit" className="w-full block text-left px-2 py-2 rounded hover:bg-slate-50" onClick={() => { setOpenMobile(false); }}>
                  PVD & Patientensicherheit ▾
                 </Link>
               </div>

            <div>
              <button 
              className="w-full text-left px-2 py-2 rounded hover:bg-slate-50" 
              onClick={() => setZertifizierungsOpen(v => !v)}
              >Zertifizierungen ▾</button>
              {ZertifizierungsOpen && (
                <div className="pl-4">
                  <Link to="/zertifizierungen/Qualitätsmanagement" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setZertifizierungsOpen(false); }}>Qualitätsmanagement</Link>
                  <Link to="/zertifizierungen/Biokompatibilität" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setZertifizierungsOpen(false); }}>Biokompatibilität</Link>
                  <Link to="/zertifizierungen/Zertifikate" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setZertifizierungsOpen(false); }}>Zertifikate</Link>
                </div>
              )}
            </div>

              <div>
                <button
                  className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setNachhaltigkeitOpen(v => !v)}
                >Nachhaltigkeit ▾</button>
                {NachhaltigkeitOpen && (
                  <div className="pl-4">
                    <Link to="/nachhaltigkeit/konformitaet" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setNachhaltigkeitOpen(false); }}>Konformität</Link>
                    <Link to="/nachhaltigkeit/soziale-verantwortung" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setNachhaltigkeitOpen(false); }}>Soziale Verantwortung</Link>
                    <Link to="/nachhaltigkeit/umweltmanagement" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setNachhaltigkeitOpen(false); }}>Umweltmanagement</Link>
                  </div>
                )}
              </div>

            <div>
              <button
                className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
                onClick={() => setAktuellesOpen(v => !v)}
              >Aktuelles ▾</button>
              {AktuellesOpen && (
                <div className="pl-4">
                  <Link to="aktuelles/Messeauftritte" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Messeauftritte</Link>
                  <Link to="aktuelles/Pressemitteilungen" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Pressemitteilungen</Link>
                  <Link to="aktuelles/Innovation-Forschung" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Innovation / Forschung</Link>
                  <Link to="aktuelles/Blog" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setAktuellesOpen(false); }}>Blog</Link>
                </div>
              )}
            </div>

              <div>
                <button
                  className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setKarriereOpen(v => !v)}
                >
                  Karriere ▾
                </button>
                {KarriereOpen && (
                  <div className="pl-4">
                    <Link to="/karriere/offene-stellen" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKarriereOpen(false); }}>Offene Stellen</Link>
                    <Link to="/karriere/ausbildung" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKarriereOpen(false); }}>Ausbildung / Praktika</Link>
                    <Link to="/karriere/arbeiten" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKarriereOpen(false); }}>Arbeiten bei uns</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left px-2 py-2 rounded hover:bg-slate-50"
                  onClick={() => setKontaktOpen(v => !v)}
                >
                  Kontakt ▾
                </button>
                {KontaktOpen && (
                  <div className="pl-4">
                    <Link to="/kontakt/Ansprechpartner" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Direkter Ansprechpartner</Link>
                    <Link to="/kontakt/Formular" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Kontaktformular</Link>
                    <Link to="/kontakt/KarteAnfahrt" className="block px-2 py-2" onClick={() => { setOpenMobile(false); setKontaktOpen(false); }}>Standortkarte & Anfahrt</Link>
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
