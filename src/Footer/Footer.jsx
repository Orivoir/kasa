import React from 'react'
import logoFooter from "./../../images/logo-footer.svg"
import styles from "./Footer.module.scss"

export default function Footer() {

  return (
    <footer className={styles.Footer}>
      <img src={logoFooter} />

      <p className={styles.TextCopyright}>© 2020 Kasa, All rights reserved</p>
    </footer>
  )
}