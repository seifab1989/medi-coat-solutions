import React from 'react'
import DownloadsList from '../../components/DownloadsList'

export default function Downloadcenter() {
  return (
    <DownloadsList
      title="Downloadcenter"
      intro="Willkommen im Downloadcenter von MediCoat Solutions. Hier finden Sie aktuelle und relevante Dokumente."
      splitByDataSheet={true}
      // exclude certificate files so they only appear on the Zertifikate page
      excludePattern={'zertifikat|certificate|certificat|cert|attest|zeugnis|bescheinigung|reach|zertifikat_'}
      showHeadingGradient={false}
    />
  )
}
