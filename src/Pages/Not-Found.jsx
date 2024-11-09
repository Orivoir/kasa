import React from 'react'

import Header from '../Header/Header'
import { Link } from 'react-router-dom'

import styles from "./Not-Found.module.scss"

export default function NotFound() {

  return (
    <>
    <Header />

    <section className={styles.NotFound}>
      <h2>404</h2>

      <p>Oups! La page que vous avez demandez n'existe pas.</p>

      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
    </>
  )
}