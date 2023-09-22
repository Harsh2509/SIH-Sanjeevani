//import React from 'react'
import { useNavigate } from "react-router-dom"
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <label className="logo">
            <img src="/public/logo.png" alt="logo" height={50}/>
          </label>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" onClick={()=>{
                  navigate('/login');
                  }}>SignIn / SignUp</a></li>
            <li><a href="#">English 🌐</a></li>
          </ul>
        </nav>
  );
}
