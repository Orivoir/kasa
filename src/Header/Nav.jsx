import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./Nav.module.scss"

export default function Nav() {
  const location = useLocation()

  return (
    <nav className={styles.HeaderNav}>
      <ul className={styles.ListNav}>
        <li>
          <Link className={`${styles.Link} ${location.pathname === "/" ? styles.Active: ""}`} to="/">Accueil</Link>
        </li>

        <li>
          <Link className={`${styles.Link} ${location.pathname === "/about" ? styles.Active: ""}`} to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}