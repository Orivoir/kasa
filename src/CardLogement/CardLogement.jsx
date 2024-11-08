import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./CardLogement.module.scss"

export default function CardLogement({
  title,
  cover,
  id
}) {

  return (
    <Link to={`/logement/${id}`}>
      <div className={styles.CardLogement}>
        <img className={styles.Media} src={cover} width={340} height={340} alt={`logement ${title}`} />

        <p className={styles.Text}>{title}</p>
      </div>
    </Link>
  )
}