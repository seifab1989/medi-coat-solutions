import React, { useEffect, useState } from 'react'
import GradientBar from './GradientBar'

function formatSize(bytes) {
  if (!bytes || typeof bytes !== 'number') return ''
  if (bytes < 1024) return bytes + ' B'
  const kb = bytes / 1024
  if (kb < 1024) return kb.toFixed(1) + ' KB'
  return (kb / 1024).toFixed(1) + ' MB'
}

function beautifyFilename(filename) {
  const base = filename.replace(/\.pdf$/i, '')
  let name = base.replace(/^datenblatt[-_]/i, '')
  name = name.replace(/[-_]+/g, ' ')
  name = name.replace(/\b(tin)\b/i, 'TiN')
  name = name.replace(/\b(crn)\b/i, 'CrN')
  name = name.replace(/\b(zrn)\b/i, 'ZrN')
  name = name.replace(/\b(dlc)\b/i, 'DLC')
  name = name.replace(/\breach\b/i, 'REACH')
  name = name.replace(/datenschutzerklaerung/i, 'Datenschutzerklärung')
  name = name.replace(/anforderungen[-_ ]beschichtungsgut/i, 'Anforderungen an das Beschichtungsgut')
  name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return name
}

function DocLink({ title, desc, href, size, downloadLabel = 'PDF herunterladen' }) {
  return (
    <a href={href} className="block rounded-3xl border border-slate-200 bg-white p-5 hover:shadow-md transition" download>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          {desc && <p className="text-sm text-slate-600 mt-1">{desc}</p>}
          {size != null && <p className="text-xs text-slate-500 mt-1">{formatSize(size)}</p>}
        </div>
        <span className="text-xs text-blue-700 underline whitespace-nowrap">{downloadLabel}</span>
      </div>
    </a>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-12">
      <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
      <GradientBar />
      {children}
    </section>
  )
}

function CategoryHeading({ children }) {
  return (
    <div className="md:col-span-2 rounded-xl p-[2px] bg-gradient-to-r from-blue-800/20 via-blue-600/20 to-green-500/20">
      <div className="rounded-xl bg-white px-4 py-2"><h4 className="text-lg font-semibold text-black">{children}</h4></div>
    </div>
  )
}

export default function DownloadsList({
  title = 'Downloads',
  intro = '',
  includePattern = null, // string or null
  excludePattern = null, // string or null - files matching this will be excluded
  splitByDataSheet = true, // show data sheets separated from others
  defaultItems = null, // fallback array of { filename, size }
}) {
  const [files, setFiles] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/'
    let metaUrl = '/downloads/metadata.json'
    try {
      if (typeof window !== 'undefined' && window.location && window.location.origin) {
        const baseFixed = base.endsWith('/') ? base : base + '/'
        metaUrl = new URL('downloads/metadata.json', window.location.origin + baseFixed).href
      } else {
        metaUrl = (base.endsWith('/') ? base : base + '/') + 'downloads/metadata.json'
      }
    } catch (e) {
      metaUrl = (base.endsWith('/') ? base : base + '/') + 'downloads/metadata.json'
    }

    fetch(metaUrl)
      .then(r => { if (!r.ok) throw new Error('Metadata not found'); return r.json() })
      .then(data => {
        if (!mounted) return
        const items = Object.keys(data).map(fn => ({ filename: fn, size: data[fn] && data[fn].size ? data[fn].size : null }))
        items.sort((a, b) => {
          const aIs = /datenblatt/i.test(a.filename) ? 0 : 1
          const bIs = /datenblatt/i.test(b.filename) ? 0 : 1
          if (aIs !== bIs) return aIs - bIs
          return a.filename.localeCompare(b.filename, 'de')
        })
        setFiles(items)
      })
      .catch(err => { console.warn('Failed to load downloads metadata', err); if (mounted) setError(err.message || 'failed') })
    return () => { mounted = false }
  }, [])

  // apply include/exclude filters
  const includeRe = includePattern ? new RegExp(includePattern, 'i') : null
  const excludeRe = excludePattern ? new RegExp(excludePattern, 'i') : null
  const shown = files ? (
    files
      .filter(f => includeRe ? includeRe.test(f.filename) : true)
      .filter(f => excludeRe ? !excludeRe.test(f.filename) : true)
  ) : null

  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="main" aria-labelledby="downloads-title">
      <h2 id="downloads-title" className="text-3xl md:text-4xl font-semibold">{title}</h2>
  <GradientBar />
      {intro && <p className="mt-3 text-slate-600 max-w-3xl">{intro}</p>}

      <Section title="Dokumente zum Download">
        {shown === null && !error && (<div className="mt-6">Lade Dokumentliste…</div>)}
        {error && (<div className="mt-6 text-sm text-rose-600">Konnte Download-Liste nicht laden. Die statische Liste wird angezeigt.</div>)}

        {shown && splitByDataSheet && (
          <div className="grid md:grid-cols-2 gap-6">
            <CategoryHeading>Datenblätter</CategoryHeading>
            {shown.filter(f => /datenblatt/i.test(f.filename)).map(f => (
              <DocLink key={f.filename} title={beautifyFilename(f.filename)} href={`/downloads/${f.filename}`} size={f.size} />
            ))}
          </div>
        )}

        {shown && splitByDataSheet && (
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <CategoryHeading>Sonstige Dokumente</CategoryHeading>
            {shown.filter(f => !/datenblatt/i.test(f.filename)).map(f => (
              <DocLink key={f.filename} title={beautifyFilename(f.filename)} href={`/downloads/${f.filename}`} size={f.size} />
            ))}
          </div>
        )}

        {shown && !splitByDataSheet && (
          <div className="grid md:grid-cols-2 gap-6">
            {shown.map(f => (
              <DocLink key={f.filename} title={beautifyFilename(f.filename)} href={`/downloads/${f.filename}`} size={f.size} />
            ))}
          </div>
        )}

        {error && defaultItems && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <CategoryHeading>Datenblätter</CategoryHeading>
              {defaultItems.dataSheets && defaultItems.dataSheets.map((d, i) => (
                <DocLink key={i} title={d.title} desc={d.desc} href={d.href} />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <CategoryHeading>Sonstige Dokumente</CategoryHeading>
              {defaultItems.others && defaultItems.others.map((d, i) => (
                <DocLink key={i} title={d.title} desc={d.desc} href={d.href} />
              ))}
            </div>
          </>
        )}

      </Section>

      <p className="mt-10 text-slate-700">Alle Dokumente stehen Ihnen als PDF zum Download zur Verfügung.</p>
    </main>
  )
}
