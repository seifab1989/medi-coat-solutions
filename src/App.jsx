import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/unternehmen/About'
import Formular from './pages/kontakt/formular'
import Demo from './pages/Demo'
import Download from './pages/produkte/Download'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Team from './pages/unternehmen/Team'
import KarteAnfahrt from './pages/kontakt/KarteAnfahrt'
import ZertifizierungIndex from './pages/zertifizierung/ZertifizierungIndex'
import AktuellesIndex from './pages/aktuelles/AktuellesIndex'
import Blog from './pages/aktuelles/Blog'
import Messeauftritte from './pages/aktuelles/Messeauftritte'
import Pressemitteilungen from './pages/aktuelles/Pressemitteilungen'
import InnovationForschung from './pages/aktuelles/InnovationForschung'
import Portfolio from './pages/produkte/portfolio'
import Dienstleistungen from './pages/produkte/dienstleistungen'
import DownloadcenterProducts from './pages/produkte/downloadcenter'
import Arbeiten from './pages/karriere/arbeiten'
import Ausbildung from './pages/karriere/ausbildung'
import OffeneStellen from './pages/karriere/offene-stellen'
import Konformitaet from './pages/nachhaltigkeit/konformitaet'
import SozialeVerantwortung from './pages/nachhaltigkeit/soziale-verantwortung'
import Umweltmanagement from './pages/nachhaltigkeit/umweltmanagement'

export default function App(){
  return (
  <HashRouter>
      <div className="backdrop-blur bg-white/60 sticky top-0 z-50">
      <section className="bg-gradient-to-r from-blue-900/10 via-blue-600/10 to-green-500/10">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="unternehmen/about" element={<About/>} />
            <Route path="kontakt/Formular" element={<Formular/>} />
            <Route path="demo" element={<Demo/>} />
            <Route path="unternehmen/team" element={<Team/>} />
            <Route path="kontakt/KarteAnfahrt" element={<KarteAnfahrt/>} />
            <Route path="produkte/download" element={<Download/>} />
            <Route path="produkte/portfolio" element={<Portfolio/>} />
            <Route path="produkte/dienstleistungen" element={<Dienstleistungen/>} />
            <Route path="produkte/downloadcenter" element={<DownloadcenterProducts/>} />
            <Route path="unternehmen/zertifizierung/ZertifizierungIndex" element={<ZertifizierungIndex/>} />
            <Route path="aktuelles/AktuellesIndex" element={<AktuellesIndex/>} />
            <Route path="aktuelles/blog" element={<Blog/>} />
            <Route path="aktuelles/messeauftritte" element={<Messeauftritte/>} />
            <Route path="aktuelles/pressemitteilungen" element={<Pressemitteilungen/>} />
            <Route path="aktuelles/innovation-forschung" element={<InnovationForschung/>} />
            <Route path="nachhaltigkeit/konformitaet" element={<Konformitaet/>} />
            <Route path="nachhaltigkeit/soziale-verantwortung" element={<SozialeVerantwortung/>} />
            <Route path="nachhaltigkeit/umweltmanagement" element={<Umweltmanagement/>} />
            <Route path="karriere/arbeiten" element={<Arbeiten/>} />
            <Route path="karriere/ausbildung" element={<Ausbildung/>} />
            <Route path="karriere/offene-stellen" element={<OffeneStellen/>} />
            <Route path="impressum" element={<Impressum/>} />
            <Route path="datenschutz" element={<Datenschutz/>} />
          </Routes>
        </main>
        <Footer />
        </section>
      </div>
  </HashRouter>
  )
}
