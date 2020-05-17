import React from 'react'
import tableSymbolsStyles from './table-symbols.module.scss'

const NoteSymbol = ({ index, title, inkey = false }) => (
  <div
    className={`${tableSymbolsStyles.noteSymbol} ${
      inkey ? tableSymbolsStyles.inKey : ''
    }`}
    title={title}
  >
    <span>{index}</span>
  </div>
)

const DisparitySymbol = ({ inkey = false }) => (
  <div
    className={`${tableSymbolsStyles.disparitySymbol} ${
      inkey ? tableSymbolsStyles.inKey : ''
    }`}
  >
    <div className={tableSymbolsStyles.inner} />
  </div>
)

export { NoteSymbol, DisparitySymbol }
