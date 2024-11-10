import React from 'react'
import Header from '../Header/Header'
import Accordion from "../Accordion/Accordion"

import styles from "./About.module.scss"
import Overlap from '../Overlap/Overlap'

import BgAboutImage from "./../../images/bg/bg-about.jpg"

export default function About() {

  return (
    <div className={styles.About}>
      <Header />

      <Overlap image={BgAboutImage} />
      
      <ul className={styles.AccordionList}>
        <li>
          <Accordion title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </Accordion>
        </li>

        <li>
          <Accordion title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation
            du voisinage entraînera une exclusion de notre plateforme.
          </Accordion>
        </li>

        <li>
          <Accordion title="Service">
            La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons a ce que chaque intereaction,
            que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
          </Accordion>
        </li>

        <li>
          <Accordion title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspondant aux critères
            de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
            que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. 
          </Accordion>
        </li>
      </ul>
    </div>
  )
}