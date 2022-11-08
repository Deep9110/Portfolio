import React from 'react'
import Cart from '../cart/Cart'
import './Project.css'
const Project = () => {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='project'>
            <Cart />
        </div>
    </div>
  )
}

export default Project