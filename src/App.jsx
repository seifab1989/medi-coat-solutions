import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/unternehmen/About'
import Standorte from './pages/unternehmen/Standorte'
import Herstellung from './pages/produkte/Herstellung'
import Portfolio from './pages/produkte/portfolio'
import Dienstleistungen from './pages/produkte/dienstleistungen'
import DownloadcenterProducts from './pages/produkte/downloadcenter'
import Download from './pages/produkte/Download'
import Patientensicherheit from './pages/patientensicherheit/Patientensicherheit'
import Qualitaetsmanagement from './pages/zertifizierung/Qualitaetsmanagement'
import Biokompatibilitaet from './pages/zertifizierung/Biokompatibilitaet'
import Zertifikate from './pages/zertifizierung/Zertifikate'
import Umweltmanagement from './pages/nachhaltigkeit/umweltmanagement'
import SozialeVerantwortung from './pages/nachhaltigkeit/soziale-verantwortung'
import Konformitaet from './pages/Nachhaltigkeit/konformitaet'
import Messeauftritte from './pages/aktuelles/Messeauftritte'
import Pressemitteilungen from './pages/aktuelles/Pressemitteilungen'
import InnovationForschung from './pages/aktuelles/InnovationForschung'
import Blog from './pages/aktuelles/Blog'
import BlogPost from './pages/aktuelles/BlogPost'
import OffeneStellen from './pages/karriere/offene-stellen'
import Ausbildung from './pages/karriere/ausbildung'
import Arbeiten from './pages/karriere/arbeiten'
import Ansprechpartner from './pages/kontakt/Ansprechpartner'
import Formular from './pages/kontakt/Formular'
import KarteAnfahrt from './pages/kontakt/KarteAnfahrt'
import Demo from './pages/Demo'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'







export default function App(){
  return (
  <HashRouter>
      <ScrollToTop />
      <div className="backdrop-blur bg-white/60 sticky top-0 z-50">
      <section className="bg-gradient-to-r from-blue-900/10 via-blue-600/10 to-green-500/10 min-h-screen">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="unternehmen/about" element={<About/>} />
            <Route path="unternehmen/standorte" element={<Standorte/>} />
            <Route path="produkte/herstellung" element={<Herstellung/>} />
            <Route path="produkte/download" element={<Download/>} />
            <Route path="produkte/portfolio" element={<Portfolio/>} />
            <Route path="produkte/dienstleistungen" element={<Dienstleistungen/>} />
            <Route path="produkte/downloadcenter" element={<DownloadcenterProducts/>} />
            <Route path="patientensicherheit/patientensicherheit" element={<Patientensicherheit/>} />
            <Route path="zertifizierung/qualitaetsmanagement" element={<Qualitaetsmanagement/>} />
            <Route path="zertifizierung/biokompatibilitaet" element={<Biokompatibilitaet/>} />
            <Route path="zertifizierung/zertifikate" element={<Zertifikate/>} />
            <Route path="nachhaltigkeit/umweltmanagement" element={<Umweltmanagement/>} />
            <Route path="nachhaltigkeit/soziale-verantwortung" element={<SozialeVerantwortung/>} />
            <Route path="nachhaltigkeit/konformitaet" element={<Konformitaet/>} />
            <Route path="aktuelles/messeauftritte" element={<Messeauftritte/>} />
            <Route path="aktuelles/pressemitteilungen" element={<Pressemitteilungen/>} />
            <Route path="aktuelles/innovation-forschung" element={<InnovationForschung/>} />
            <Route path="aktuelles/blog" element={<Blog/>} />
            <Route path="aktuelles/blog/:id" element={<BlogPost/>} />
            <Route path="karriere/offene-stellen" element={<OffeneStellen/>} />
            <Route path="karriere/ausbildung" element={<Ausbildung/>} />
            <Route path="karriere/arbeiten" element={<Arbeiten/>} />
            <Route path="kontakt/ansprechpartner" element={<Ansprechpartner/>} />
            <Route path="kontakt/formular" element={<Formular/>} />
            <Route path="kontakt/karteanfahrt" element={<KarteAnfahrt/>} />          
            <Route path="demo" element={<Demo/>} />
            <Route path="impressum" element={<Impressum/>} />
            <Route path="datenschutz" element={<Datenschutz/>} />
            <Route path="agb" element={<AGB/>} />
          </Routes>
        </main>
        <Footer />
        </section>
      </div>
  </HashRouter>
  )
}
