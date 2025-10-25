import React from 'react'
import DownloadsList from '../../components/DownloadsList'

export default function Zertifikate(){
  // filter pattern to match likely certificate filenames; adjust if your filenames differ
  const certPattern = 'zertifikat|certificate|certificat|cert|attest|zeugnis|certificate|bescheinigung'
  return (
    <DownloadsList
      title="Zertifikate"
      intro="Hier finden Sie unsere relevanten Zertifikate zum Download."
      includePattern={certPattern}
      splitByDataSheet={false}
      defaultItems={{
        dataSheets: null,
        others: [
          { title: 'Beispiel-Zertifikat (Fallback)', href: '/downloads/zertifikat-beispiel.pdf' }
        ]
      }}
    />
  )
}
