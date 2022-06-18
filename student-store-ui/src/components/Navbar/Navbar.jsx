import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../logopic.png"
import social1 from "../pictures/facebook.png"
import social2 from "../pictures/instagram.png"
import social3 from "../pictures/twitter.png"
// import "./components/Logo/Logo"


export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="content">
        <div className="logo">
          <Link to="/">
            <img className="logopic" src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="Logo image" />
          </Link>
        </div>
        <div className="socials">
            <img src={social1} alt="" />
            <img src={social2} alt="" />
            <img src={social3} alt="" /> 
        </div>
        <div className="links">
          <ul className="link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
            <li><Link to="/#buynow">Buy Now</Link></li>
          </ul>
        </div>
    </div>
    </nav>
  )
}
