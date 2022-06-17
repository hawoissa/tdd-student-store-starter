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
      <ProductGrid props={props}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
