import React from 'react'

import styles from "./Content.module.scss"

export default function Content({isOpen, children}) {

  return (
    <div className={`${styles.AccordionContent} ${isOpen ? styles.Open: ""}`}>
      {children}
    </div>
  )
}