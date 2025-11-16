import React, { useState } from 'react'
import Button from '../../components/Button'
import Container from '../../components/Container'
import GradientCard from '../../components/GradientCard'

export default function Formular(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState(false)

  function validate(){
    const errs = []
    if(!name.trim()) errs.push('Name ist erforderlich')
    if(!email.trim()) errs.push('E-Mail ist erforderlich')
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!re.test(email)) errs.push('E-Mail ist ungültig')
    }
    if(!message.trim()) errs.push('Nachricht ist erforderlich')
    if(!consent) errs.push('Bitte stimme der Speicherung deiner Daten zu')
    return errs
  }

  function onSubmit(e){
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if(errs.length === 0){
      // Simulierter Submit — in realem Projekt hier API-Aufruf
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
      setConsent(false)
    } else {
      setSuccess(false)
    }
  }

  return (
    <Container as="main" role="main" aria-labelledby="kontakt-form-title">
      <GradientCard className="max-w-xl mx-auto">
        <form onSubmit={onSubmit}>
          <h2 id="kontakt-form-title" className="text-3xl font-bold">Kontakt</h2>
          <p className="mt-2 text-slate-600">Schreiben Sie uns oder nutzen Sie das Formular unten — wir melden uns zeitnah bei Ihnen.</p>
          {errors.length > 0 && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">
              <ul className="list-disc pl-5">
                {errors.map((er, i) => <li key={i}>{er}</li>)}
              </ul>
            </div>
          )}
          {success && (
            <div className="mb-4 text-sm text-emerald-800 bg-emerald-50 p-3 rounded">Vielen Dank — deine Nachricht wurde (simuliert) gesendet.</div>
          )}

          <label className="block">
            <span className="text-sm font-medium">Name</span>
            <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium">E-Mail</span>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="mt-1 block w-full rounded border px-3 py-2" />
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium">Nachricht</span>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={6} className="mt-1 block w-full rounded border px-3 py-2"></textarea>
          </label>

          <label className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} />
            <span>Ich stimme der Speicherung meiner Daten zu.</span>
          </label>

          <div className="mt-6 flex items-center gap-4">
            <Button type="submit" className="px-5 py-2">Absenden</Button>
            <button type="button" onClick={() => { setName(''); setEmail(''); setMessage(''); setConsent(false); setErrors([]); setSuccess(false); }} className="px-4 py-2 rounded border">Zurücksetzen</button>
          </div>
        </form>
      </GradientCard>
    </Container>
  )
}
