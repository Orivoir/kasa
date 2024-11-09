import React from 'react'

import styles from "./Tag.module.scss"

export default function Tag({name}) {

  return (
    <div className={styles.Tag}>
      <span>{name}</span>
    </div>
  )
}