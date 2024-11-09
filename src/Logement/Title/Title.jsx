import React from 'react'

import styles from "./Title.module.scss"

export default function Title({
  title,
  location
}) {

  return (
    <section className={styles.Title}>
      <h2>{title}</h2>
      <p>{location}</p>
    </section>
  )
}