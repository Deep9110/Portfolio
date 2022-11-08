import React from 'react'
import './Tech.css'
import Image1 from '../../image/html-image.svg'
import Image2 from '../../image/css-image.svg'
import Image3 from '../../image/tailwind-image.svg'
import Image4 from '../../image/javascript-image.svg'
import Image5 from '../../image/react-image.svg'
import Image6 from '../../image/git-image.svg'

const Tech = () => {
  return (
    <div className='tech'>
        <h1>Tech Stack</h1>
        <div className='skills'>
        <div className='skill'>
            <img src={Image1} alt="" />
            <h3>HTML</h3>
        </div>
        <div className='skill'>
            <img src={Image2} alt="" />
            <h3>CSS</h3>
        </div>
        <div className='skill'>
            <img src={Image3} alt="" />
            <h3>Tailwind CSS</h3>
        </div>
        <div className='skill'>
            <img src={Image4} alt="" />
            <h3>Javascript</h3>
        </div>
        <div className='skill'>
            <img src={Image5} alt="" />
            <h3>React Js</h3>
        </div>
        <div className='skill'>
            <img src={Image6} alt="" />
            <h3>Git</h3>
        </div>
        </div>
        
    </div>
  )
}

export default Tech