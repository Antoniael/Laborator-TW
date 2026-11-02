import { useState } from 'react'

export default function FormularDestinatie({ onAdd }) {
  const [oras, setOras] = useState('')
  const [tara, setTara] = useState('')
  const [zile, setZile] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const numarZile = Number(zile)

    if (!oras.trim() || !tara.trim() || isNaN(numarZile) || numarZile <= 0) {
      return
    }

    onAdd({
      id: crypto.randomUUID(),
      oras: oras.trim(),
      tara: tara.trim(),
      zile: numarZile,
      vizitat: false,
    })

    setOras('')
    setTara('')
    setZile('')
  }

  return (
    <form className="formular" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Oraș"
        value={oras}
        onChange={(e) => setOras(e.target.value)}
      />
      <input
        type="text"
        placeholder="Țară"
        value={tara}
        onChange={(e) => setTara(e.target.value)}
      />
      <input
        type="number"
        min="1"
        placeholder="Zile"
        value={zile}
        onChange={(e) => setZile(e.target.value)}
      />
      <button type="submit">Adaugă</button>
    </form>
  )
}

