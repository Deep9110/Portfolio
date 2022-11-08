import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div id='contacts'>
        <h1>Contact Me</h1>

    <div className='contact' >
        <a href="https://www.linkedin.com/in/deepsundar-rout-52968b202/" target="_blank" className='btn'>
        <i class='bx bxl-linkedin' ></i>
    </a>
    <a href="http://github.com/Deep9110" target="_blank" className='btn'>
        <i class='bx bxl-github' ></i>
    </a>
    <a href="https://www.instagram.com/deepsundar_99/" target="_blank" className='btn'>
        <i class='bx bxl-instagram' ></i>
    </a>
    <a href="mailto: deepsundarrout@gmail.com" target="_blank" className='btn'>
        <i class='bx bx-envelope' ></i>
    </a>
    </div>
    </div>
  )
}

export default Contact