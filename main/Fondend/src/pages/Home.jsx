import React from 'react'
import TendingProduct from '../Componets/Tanding-Product/TendingProduct'
import Hero from '../Componets/Hero/Hero'
import LatestProduct from '../Componets/LatestProduct/LatestProduct'

const Home = () => {
  return (
    <div>
      <Hero title={"SHOP"} />
        <TendingProduct />
        <LatestProduct />
      
    </div>
  )
}

export default Home
