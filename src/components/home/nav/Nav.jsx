import React from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'
const Nav = () => {
  return (
    <>
    <div className='nav'>
        <li>
          <Link to="project" spy={true} smooth={true} offset={10} duration={500}>Projects</Link>
        </li>
        <li>
        <Link to="blog" spy={true} smooth={true} offset={25} duration={500}>Blog</Link>
          </li>
        <li><Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
    </div>
    </>
  )
}

export default Nav