import React from 'react'
import DownloadsList from '../../components/DownloadsList'

export default function Zertifikate(){
  // filter pattern to match likely certificate filenames; adjust if your filenames differ
  const certPattern = 'zertifikat|certificate|certificat|cert|attest|zeugnis|certificate|bescheinigung'
  return (
    <DownloadsList
      title="Zertifikate"
      intro="Hier stehen Ihnen unsere relevanten Zertifikate als PDF zum Download bereit."
      includePattern={certPattern}
      splitByDataSheet={false}
      showHeadingGradient={false}
      defaultItems={{
        dataSheets: null,
        others: [
          { title: 'Beispiel-Zertifikat (Fallback)', href: 'downloads/zertifikat-beispiel.pdf' }
        ]
      }}
    />
  )
}
