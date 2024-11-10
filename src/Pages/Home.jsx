import React from 'react'
import {useLoaderData } from 'react-router-dom'
import Header from '../Header/Header'
import CardLogement from '../CardLogement/CardLogement'
import Overlap from "./../Overlap/Overlap"

import styles from "./Home.module.scss"

import BgHomeImage from "./../../images/bg/bg-home.jpg"


export default function Home() {

  const logements = useLoaderData()

  return (
    <>
    <Header />

    <Overlap title="Chez vous, partout et ailleurs" image={BgHomeImage} />

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