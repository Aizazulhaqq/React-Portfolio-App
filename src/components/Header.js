import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className='logo'>Portfolio</Link>
        <i className='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
