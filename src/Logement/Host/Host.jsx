import React from 'react'

import Name from './Name'
import Avatar from './Avatar'

import styles from "./Host.module.scss"

export default function Host({name, avatar}) {

  return (
    <section className={styles.Host}>
      <Name>{name}</Name>

      <Avatar url={avatar} name={name} />
    </section>
  )
}