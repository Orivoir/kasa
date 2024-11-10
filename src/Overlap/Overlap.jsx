import React from 'react'

import styles from "./Overlap.module.scss"

export default function Overlap({
  image,
  title = null
}) {

  return (
    <figure className={styles.Overlap}>
      <img src={image} />

      {!!title && <p>{title}</p>}
    </figure>
  )
}