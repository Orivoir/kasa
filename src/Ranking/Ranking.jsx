import React from 'react'

import Star from "./../Star/Star"

import styles from "./Ranking.module.scss"

export default function Ranking({score = 0}) {

  const rank = [false, false, false, false, false]

  if(score < 0) {
    score = 0
  }

  for(let i = 0; i < score; i++) {
    rank[i] = true
  }

  console.log(rank)

  return (
    <ul className={styles.Ranking}>
      {rank.map((isFilled, index) => (
        <li key={index}>
          <Star isFilled={isFilled} />
        </li>
      ))}
    </ul>
  )
}