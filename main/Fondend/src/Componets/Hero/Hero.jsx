import React from 'react'
import './hero.scss'
import img from '../../assets/hero.png'

const Hero = ({title}) => {
  return (
    <>
    <div className="hero">
        <h1 className="hero-title"> {title} </h1>
    </div>
       
    </>
  )
}

export default Hero
