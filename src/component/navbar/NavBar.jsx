import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css' 

function NavBar() {
  return (
    <div className='nav'>
        <h1>NEHA</h1>
        <Link className='link' to={"/"}>Home</Link>
        <Link className='link' to={"/"}>Projects</Link>
        <Link className='link' to={"/"}>Contact Us</Link>
    </div>
  )
}

export default NavBar