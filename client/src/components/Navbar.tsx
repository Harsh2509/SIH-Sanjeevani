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
            <img src="/public/logo.png" alt="logo" height={50} onClick={() =>{
              navigate('/');
            }}/>
          </label>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#" onClick={() =>{
              navigate('/child_expert');
            }}>Contact Experts</a></li>
            <li><a href="#" onClick={()=>{
                  navigate('/login');
                  }}>Sign in</a></li>
            <li><a href="#">English 🌐</a></li>
          </ul>
        </nav>
  );
}
