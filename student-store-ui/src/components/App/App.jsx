import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import "./App.css"
import { useState } from "react"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import submitPic from "../pictures/search.png"

export default function App() {
  //STATE VARIABLILEs
  const [products, setProducts] = useState([]); //array of product objects
  const [isFetching, setIsFetching] = useState(false); //if app is fetching products
  const [error, setError] = useState(""); // use to display a message
  const [isOpen, setIsOpen] = useState(false); //if sidebar is open
  const [shoppingCart, setShoppingCart] = useState([]); //ASK
  const [checkingForm, setCheckingForm] = useState(null);

  //const [searchWord, setSearchWord] = useState("");

  //HANDLERS

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
  
  // const currentMenuItems = data.filter((item) => {
  //   return item.food_category === selectedCategory && item.restaurant === selectedRestaurant;
  // })


  return (
    <div className="app">
      <BrowserRouter>
        <main> 
          <Navbar />
          <Sidebar />  
          <Hero />
          <div className="subbar">
            <div className="input">
            <form action="">
              <input type="text" placeholder="Search.."/>
              <button type="submit"><img src={submitPic} className="button"/></button>
            </form>
            </div>
            <div className="category">
              <ul> 
                <li><button>All Categories</button></li>
                <li><button>Clothing</button></li>
                <li><button>Food</button></li>
                <li><button>Accessories</button></li>
                <li><button>Tech</button></li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home products={products}/>} />
          </Routes> 

        </main>       
        </BrowserRouter>
    </div>
  )
}
