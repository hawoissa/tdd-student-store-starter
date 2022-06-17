import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGrid from "../ProductGrid/ProductGrid"
import submitPic from "../pictures/search.png"
// import "./components/Hero/Hero"
// import "./components/ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      
      {/* <div className="subbar">
        <div className="input">
        <form action="">
          <input type="text" placeholder="Search.."/>
          <button type="submit"><img src={submitPic} className="button"/></button>
        </form>
        </div>
        <div className="category">
          <ul>
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
        </div>
      </div> */}
      <ProductGrid props={props}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
