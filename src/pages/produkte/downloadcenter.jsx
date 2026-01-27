import React from 'react'
import { Link } from 'react-router-dom'
import DownloadsList from '../../components/DownloadsList'

export default function Downloadcenter() {
  return (
    <DownloadsList
      title="Downloadcenter"
      intro={<>Willkommen im Downloadcenter von MediCoat Solutions. Hier finden Sie unsere Datenblätter zu den PVD-Schichten und sonstigen Dokumente wie z. B. AGBs. Die Zertifikate zur Biokompatibilität unserer PVD-Schichten und unseres QM-Systems finden Sie auf der Seite <Link to="/zertifizierung/zertifikate" className="text-blue-700 underline">Zertifikate</Link>.</>}
      splitByDataSheet={true}
      // exclude certificate files so they only appear on the Zertifikate page
      excludePattern={'zertifikat|certificate|certificat|cert|attest|zeugnis|bescheinigung|reach|zertifikat_'}
      showHeadingGradient={false}
      showCertificatesSection={false}
    />
  )
}
