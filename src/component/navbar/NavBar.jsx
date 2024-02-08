import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import logoImage from '../img/Beige_Elegant_Wedding_Name_Tag-removebg-preview.png';

function NavBar() {
  return (
    <div className='nav'>
      <img src={logoImage} alt="Logo" />
      <NavLink className='link' activeClassName='active-link' to={"/contact"}>Contact Us</NavLink>
      <NavLink className='link' activeClassName='active-link' to={"/projects"}>Projects</NavLink>
      <NavLink className='link' activeClassName='active-link' to={"/skills"}>Skills</NavLink>
      <NavLink className='link' activeClassName='active-link' to={"/about"}>About</NavLink>
      <NavLink className='link' activeClassName='active-link' to={"/"}>Home</NavLink>
      
      
    </div>
  );
}

export default NavBar;
