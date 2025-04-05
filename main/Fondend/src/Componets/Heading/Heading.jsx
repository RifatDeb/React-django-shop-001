import React from 'react'
import './heading.scss'

const Heading = ({title}) => {
  return (
    <div className='style'>
      <p className='headings'> {title} </p> 
      <hr  />
    </div>
  )
}

export default Heading
