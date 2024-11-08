import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Header from '../Header/Header'

export default function Home() {

  const logements = useLoaderData()

  console.log(logements)

  return (
    <>
    <Header />
    <ol>
      {logements.map(logement => (
        <li key={logement.id}>
          <Link to={`logement/${logement.id}`}>
            <h2>{logement.title}</h2>
            <img src={logement.cover} width="300" />
          </Link>
        </li>
      ))}
    </ol>
    </>
  )
}