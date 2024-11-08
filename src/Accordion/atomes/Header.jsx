import React from 'react'

import styles from "./Header.module.scss"
import Icon from './Icon'

export default function Header({
  title,
  onToggle,
  isOpen = false,
}) {

  return (
    <div className={styles.AccordionHeader}>
      <h3 className={styles.AccordionHeaderTitle}>{title}</h3>

      <Icon onToggle={onToggle} isOpen={isOpen} />
    </div>
  )
}