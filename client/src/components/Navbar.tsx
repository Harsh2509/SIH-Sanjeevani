//import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
          <ul className="nav-links">
              <img src="/public/logo.png" alt="logo" height={50}/>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>Pricing</li></a>
              <a href="#"><li>About Us</li></a>
              <a href="#"><li>Contact Us</li></a>
              <a href="#"><li>Sign in / Sign up</li></a>
              <a href="#"><li>English 🌐</li></a>
              <i className="fa-solid fa-magnifying-glass"></i>
          </ul>
      </nav>
    </div>
  )
}
