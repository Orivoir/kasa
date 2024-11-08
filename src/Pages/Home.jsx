import React from 'react'
import {useLoaderData } from 'react-router-dom'
import Header from '../Header/Header'
import CardLogement from '../CardLogement/CardLogement'

import styles from "./Home.module.scss"

export default function Home() {

  const logements = useLoaderData()

  return (
    <>
    <Header />

    <ul className={styles.ListLogements}>
      {logements.map(logement => (
        <li key={logement.id}>
          <CardLogement {...logement} />
        </li>
      ))}
    </ul>
    </>
  )
}