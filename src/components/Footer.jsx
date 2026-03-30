import React from 'react'
import { Link } from 'react-router-dom'
import IovaraCoatLogo from './IovaraCoatLogo'

export default function Footer(){
  return (
  <footer className="mt-16 bg-gradient-to-r from-blue-900/0 via-blue-600/0 to-green-500/0 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-none w-40 overflow-visible">
          <IovaraCoatLogo className="block origin-left" style={{ transform: 'scale(1.5)', transformOrigin: 'left' }} />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center flex flex-col justify-center">
            <div className="font-semibold">IovaraCoat GmbH</div>
            <div className="text-slate-500 text-sm mt-1">© {new Date().getFullYear()} Alle Rechte vorbehalten</div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="text-sm text-slate-600">Kontakt: info@medineu.example</div>
          <div className="text-sm text-slate-600">
            <Link to="/impressum" className="underline mr-3">Impressum</Link>
            <Link to="/datenschutz" className="underline mr-3">Datenschutz</Link>
            <Link to="/agb" className="underline">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
