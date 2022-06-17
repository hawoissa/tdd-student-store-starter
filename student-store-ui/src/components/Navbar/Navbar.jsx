import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../logopic.png"
// import "./components/Logo/Logo"


export default function Navbar() {
  return (
    <nav className="navbar">
      
      {/* <div className="link">
        <Link to="/">
          <img className="logopic" src={Logo} alt="Logo image" width="50px" height="50px" />
        </Link>
      </div> */}
      <div className="links">
      <ul className="link">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
        <li><Link to="/#buynow">Buy Now</Link></li>
        </ul>
      </div>
    </nav>
  )
}
