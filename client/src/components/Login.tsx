import  { useState } from 'react'
import './Login.css'    

//import logo from '../assets/logo.svg'
import child_icon from '../assets/carbon_pedestrian-child.png'
import google_icon from '../assets/google.png'
import line from '../assets/line.png'
import outlook_icon from '../assets/outlook.png'
import apple_icon from '../assets/apple.png'

const Login = () => {

    const [action, setaction] = useState("Log In");

  return (
    <>
    <div className="page1">

        <div className='container1'>
            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder='Enter email' required/>
                </div>
                <div className="input">
                    <input type="password" placeholder='Enter password' required/>
                </div>
                {action==="Log In"?<div></div>:<div className="input">
                    <input type="password" placeholder='Confirm password' required/>
                </div>}
                <div className="cheking">
                        <input type="checkbox" name='remember'/>
                        <label htmlFor="remember">Remember me</label>
                        {action==="Sign Up"?<div></div>:<div className="forgot"><a href="/">Forgot password</a></div>}
                </div>
                <div className="submit-container">
                    <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={() => {setaction("Log In")}}>Log In</div>
                    <div className={action==="Log In" ? "submit gray" : "submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
                </div>
            </div>
            <div className="or">
                <img src={line} alt="" />
                <p> or </p>
                <img src={line} alt="" />
            </div>
            <div className="social">
            <p>Continue with</p>
                <div className="socie">
                        <img src={google_icon} alt="" />
                        <button>Google</button>
                </div>
                <div className="socie">
                        <img src={outlook_icon} alt="" />
                        <button>Outlook</button>
                </div>
                <div className="socie">
                        <img src={apple_icon} alt="" />
                        <button>Apple</button>
                </div>
                <span className='agree'>*Read <a href="/">Terms of Agreement</a> and <a href="/">Privacy Policy</a></span>
                <span>&#169;2023, Sanjeevani, Inc.All rights reserved. </span>
            </div>
        </div>
        <div className="container2">
            <div className="parent_div">
                <div className="child_div">
                    <img src={child_icon} alt="" />
                    <p>Are you a parent? Does your child have special needs? Sanjeevani can help you.</p>
                    <a href="/">Know more</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
