import React from 'react'
import logo from '../../../assets/logo.png';
import { Link } from 'react-router';
import './Navbar.css'
import contact from '../../../assets/contact.png'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
      <img  src={logo} alt="ogo" />
      <div className="contentofnav">
        <Link className="navcontent">Home</Link>
        <Link className="navcontent">About</Link>
        <Link className="navcontent">Portfolio</Link>
        <Link className="navcontent">Client</Link>
      </div>
      <button className="contactt"><img src={contact} alt="" />Contact
      </button>
    </div>
    </div>
  )
}

export default Navbar
