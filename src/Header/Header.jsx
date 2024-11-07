import React from 'react'

import Logo from './Logo'
import Nav from './Nav'

import styles from "./Header.module.scss"

export default function Header() {

  return (
    <header className={styles.Header}>
      <Logo />
      <Nav />
    </header>
  )
}