import React from 'react'
import { useLoaderData} from 'react-router-dom'
import Header from './Header/Header'

export default function Logement() {

  const logement = useLoaderData()

  console.log(logement)

  return (
    <>
    <Header />
    <h1>{logement.title}</h1>
    </>
  )
}