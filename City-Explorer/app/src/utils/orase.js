// src/utils/orase.js

// selectare (5.1)
export const getScumpe = (list) => list.filter((o) => o.pret > 400)

// agregare (5.1)
export const costTotal = (list) => list.reduce((total, o) => total + o.pret, 0)

// transformare, cu destructuring în parametri (5.1)
export const formatOras = ({ oras, tara, pret }) =>
  `${oras}, ${tara} - ${pret} euro (${pret > 400 ? 'scump' : 'accesibil'})`

// grupare, cu acumulator obiect și cheie calculată (5.1)
export const costPeTara = (list) =>
  list.reduce((acc, { tara, pret }) => ({ ...acc, [tara]: (acc[tara] ?? 0) + pret }), {})

// modificare fără stricarea listei inițiale (5.2)
export const scadePret = (list, id, reducere) =>
  list.map((o) => (o.id === id ? { ...o, pret: o.pret - reducere } : o))

export const adaugaOras = (list, oras) => [...list, oras]
export const stergeOras = (list, id) => list.filter((o) => o.id !== id)