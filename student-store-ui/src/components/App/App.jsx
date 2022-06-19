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
import NotFound from "../NotFound/NotFound";

export default function App() {
  //STATE VARIABLILEs
  const [products, setProducts] = useState([]); //array of product objects
  const [isFetching, setIsFetching] = useState(false); //if app is fetching products
  const [error, setError] = useState(""); // use to display a message
  const [isOpen, setIsOpen] = useState(false); //if sidebar is open
  // const [shoppingCart, setShoppingCart] = useState([]); //ASK
  // const [checkingForm, setCheckingForm] = useState(null);
  const [showDescription, setShowDesciption] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  // get data from api, use isFetching var to display loading, catch and show error
  const getData = async () => {
    setIsFetching(true);
    try {
      const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store");  
      if (data.products.length > 0) {
        setProducts(data.products);
      } 
    } catch (error) {
      setError("Failure");
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // to see if api is fetching, will display loading
  if (isFetching) {
    return <h1>Loading..</h1>;
  }

  // handler to see if sidebar is clicked 
  const handleOnToggle = () => setIsOpen(!isOpen);

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle}/>
        <main> 
          <Navbar />
          <Hero />
          <Search products={products} setProducts={setProducts} 
          searchWord={searchWord} setSearchWord={setSearchWord}/>  
          <Routes>
            <Route path="/" element={<Home products={products} 
            showDescription={showDescription} setShowDesciption={setShowDesciption}
            searchWord={searchWord} setSearchWord={setSearchWord}/>} />
            <Route path="/products/:productId" element={<ProductDetail isFetching={isFetching}
            setIsFetching={setIsFetching} error={error} products={products}
            showDescription={showDescription} setShowDesciption={setShowDesciption}/> } />
            <Route path="*" element={<NotFound />}/> //fiz this part
          </Routes> 

        </main>       
        </BrowserRouter>
    </div>
  )
}




  // const getData = async () => {
  //   const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store");  
  //   if (data.products.length > 0) {
  //     setProducts(data.products);
  //   } else {
  //     setError("Failure");
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
