import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function Home(props) {
  
  return (
    <div className="home">
      <Hero />
      <Search products={props.products} setProducts={props.setProducts} 
          searchWord={props.searchWord} setSearchWord={props.setSearchWord}/>
      <ProductGrid {...props}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
