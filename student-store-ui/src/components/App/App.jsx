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
  const [shoppingCart, setShoppingCart] = useState([]); //ASK
  const [checkingForm, setCheckingForm] = useState(null);
  const [showDescription, setShowDesciption] = useState(false); // for  a expanding product
  const [searchWord, setSearchWord] = useState(""); //for searching for products

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

  // const res = products.find((product) => {
  //   return product.id === 17;
  // });
  // console.log("product" + res);

  //handler to add item to cart
  //setShoppingCart([. ..shoppingCartNew, newProduct])
  //let shoppingCartNew = props.shoppingCart.filter((e) => {
  // return e.id I== newProduct. id;
  function handleAddItemToCart(productId) {
    const item = {
      id: productId,
      quantity: 1
    }
    let findProduct = shoppingCart.find((item) => { return item.id === productId});
    if (shoppingCart.length != 0) {
      if (findProduct == null) {
        setShoppingCart([... shoppingCart, item])
      } else {
        let oldShoppingCart = shoppingCart.filter((product) => {
          return item.id !== productId;
        })
        let oldCount = item.quantity;
        item.quantity = oldCount++;
        setShoppingCart([... oldShoppingCart, item]) 
      }
    } else {
      console.log(item);
      setShoppingCart[item]
    }
  }

  //handler to remove item from cart
  function handleRemoveItemFromCart(productId) {
    let findProduct = shoppingCart.find((item) => { return item.id === productId});
    if (findProduct != null) {
      let oldShoppingCart = shoppingCart.filter((product) => {
        return item.id !== productId;
      })
      let oldCount = item.quantity;
      item.quantity = oldCount - 1;
      setShoppingCart([... oldShoppingCart, item]) 
    }
  }
  // }handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}

  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart}/>
        <main> 
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} 
            showDescription={showDescription} setShowDesciption={setShowDesciption}
            searchWord={searchWord} setSearchWord={setSearchWord}
            setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}
            handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/> } />
            <Route path="/products/:productId" element={<ProductDetail isFetching={isFetching}
            setIsFetching={setIsFetching} error={error} products={products}
            showDescription={showDescription} setShowDesciption={setShowDesciption}
            setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}
            handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/> } />
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

  // function handleAddItemToCart(productId) {
  //   const newItem = {
  //     id: productId,
  //     quantity: 1
  //   }
  //   //let findProduct = props.shoppingCart.find((item) => { return item.id === productId});
  //   if (props.shoppingCart === null) {
  //      if ((!props.shoppingCart.find ((item) => item.id === props.id))) {
  //       props.setShoppingCart([... shoppingCart, item])
  //     } else {
  //       let oldShoppingCart = props.shoppingCart.filter((product) => {
  //         return product.id !== productId;
  //       })
  //       let oldCount = newItem.quantity;
  //       newItem.quantity = oldCount++;
  //       props.setShoppingCart([... oldShoppingCart, newItem]) 
  //     }
  //   } else {
  //     console.log(newItem);
  //     props.setShoppingCart[newItem];
  //   }
  // }
