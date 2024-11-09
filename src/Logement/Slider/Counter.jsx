import React from 'react'

import styles from "./Counter.module.scss"

export default function Counter({
  current,
  total
}) {

  return (
    <p className={styles.Counter}>{current}/{total}</p>
  )
}