import React from 'react'

import iconArrowDown from "./../../../images/icons/arrow_down.svg"

import styles from "./Icon.module.scss"

export default function Icon({onToggle, isOpen}) {

  return (
    <button
      className={`${styles.AccordionIcon} ${isOpen ? styles.Down: styles.Up}`}
      type='button'
      onClick={onToggle}>
      <img 
        width={32}
        src={iconArrowDown}
        alt={`icon clicquable pour ${isOpen ? "fermer": "ouvrir"}`} />
    </button>
  )
}