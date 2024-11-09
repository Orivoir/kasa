import React from 'react'

import styles from "./Name.module.scss"

export default function({children}) {

  const [firstName, lastName] = children.split(" ")

  return (
    <div>
      <p className={styles.Name}>{firstName}</p>
      <p className={styles.Name}>{lastName}</p>
    </div>
  )
}