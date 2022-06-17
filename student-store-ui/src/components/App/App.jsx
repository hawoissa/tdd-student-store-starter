import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import "./App.css"
import { useState } from "react"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import submitPic from "../pictures/search.png"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {
  //STATE VARIABLILEs
  const [products, setProducts] = useState([]); //array of product objects
  const [isFetching, setIsFetching] = useState(false); //if app is fetching products
  const [error, setError] = useState(""); // use to display a message
  const [isOpen, setIsOpen] = useState(false); //if sidebar is open
  const [shoppingCart, setShoppingCart] = useState([]); //ASK
  const [checkingForm, setCheckingForm] = useState(null);
  const [showDescription, setShowDesciption] = useState(false);

  //const [searchWord, setSearchWord] = useState("");

  //HANDLERS
  const handleOnToggle = () => {
    if (isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  // handleOnCheckoutFormChange
  // handleOnSubmitCheckoutForm

  const getData = async () => {
    const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store");  
    if (data.products.length > 0) {
      setProducts(data.products);
    } else {
      setError("Failure");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  // const filteredProducts = data.filter((products) => {
  //   return products.food_category === selectedCategory;
  // }) 

  // function updateProps() {
  //   products.map((product) => {
  //     if (product.category == /* */) {

  //     }
  //   })
  // }


  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar />
        <main> 
          <Navbar />
          <Hero />
          <Search products={products} setProducts={setProducts}/>  
          <Routes>
            <Route path="/" element={<Home products={products} 
            showDescription={showDescription}/>} />
            <Route path="/products/:productId" element={<ProductDetail products={products}/> } />
          </Routes> 

        </main>       
        </BrowserRouter>
    </div>
  )
}
