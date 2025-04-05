import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
 <Link  to='/login'> 
 <button className='btns'> Sing Up </button>
 </Link>
  )
}

export default Button
