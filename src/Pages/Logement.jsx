import React from 'react'
import { useLoaderData} from 'react-router-dom'
import Header from '../Header/Header'

import Slider from '../Logement/Slider/Slider'
import Title from "./../Logement/Title/Title"
import Host from "./../Logement/Host/Host"
import Ranking from "./../Logement/Ranking/Ranking"
import Tag from "./../Logement/Tag/Tag"
import Accordion from "./../Accordion/Accordion"

import styles from "./Logement.module.scss"

export default function Logement() {

  const logement = useLoaderData()

  return (
    <>
    <Header />
    
    <Slider {...logement} />

    <article className={styles.LogementContainer}>
      <section className={styles.TitleAndHost}>
        <Title {...logement} />
        <Host avatar={logement.host.picture} name={logement.host.name} />
      </section>

      <section className={styles.TagListAndRanking}>
        <ul className={styles.TagList}>
        {logement.tags.map((tagname, index) => (
          <li key={index}>
            <Tag name={tagname} />
          </li>
        ))}
        </ul>
        <Ranking score={logement.rating} />
      </section>

      <section className={styles.AccordionsList}>
        <Accordion title="Description">{logement.description}</Accordion>
        <Accordion title="Equipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>
                <p>{equipment}</p>
              </li>
            ))}
          </ul>
        </Accordion>
      </section>
    </article>
    </>
  )
}