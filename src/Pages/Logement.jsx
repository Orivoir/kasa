import React from 'react'
import { useLoaderData} from 'react-router-dom'
import Header from '../Header/Header'
import Slider from '../Logement/Slider/Slider'

export default function Logement() {

  const logement = useLoaderData()

  return (
    <>
    <Header />
    
    <Slider pictures={logement.pictures} title={logement.title} />
    </>
  )
}