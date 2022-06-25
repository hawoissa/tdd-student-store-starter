import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function App() {
  //STATE VARIABLES
  const [products, setProducts] = useState([]); //array of product objects
  const [isFetching, setIsFetching] = useState(false); //if app is fetching products
  const [error, setError] = useState(""); // use to display a message
  const [isOpen, setIsOpen] = useState(false); //if sidebar is open
  const [shoppingCart, setShoppingCart] = useState([]); //ASK
  const [checkingForm, setCheckingForm] = useState({name: "", email: ""});
  const [showDescription, setShowDesciption] = useState(false); // for  a expanding product
  const [searchWord, setSearchWord] = useState(""); //for searching for products
  const [allProducts, setAllProducts] = useState([]); 
  const [receipt, setReceipt] = useState([]);
  const [receiptError, setReceiptError] = useState("");

  // get data from api, use isFetching var to display loading, catch and show error
  const getData = async () => {
    setIsFetching(true);
    try {
      const { data } = await axios.get("http://localhost:3001/store/");  
      if (data.products.length > 0) {
        setProducts(data.products);
        setAllProducts(data.products);
        
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

  function handleAddItemToCart(productId) {
    const item = shoppingCart.find((product) => product.id === productId);
    if (item) {
      item.quantity = item.quantity + 1;
      const oldShoppingCart = shoppingCart.filter((item) => {
        return item.id != productId
      })
      setShoppingCart([...oldShoppingCart, {id: productId, quantity: item.quantity} ]);
      return;
    } else {
      const newItem = {
        id: productId,
        quantity: 1
      }
      setShoppingCart((cart) => [...cart, newItem]);
      return;
    }    
  }

  //handler to remove item from cart
  function handleRemoveItemFromCart(productId) {
    let findProduct = shoppingCart.find((item) => { return item.id === productId});
    if (findProduct && findProduct.quantity > 0) {
      let oldShoppingCart = [];
      let oldCount;
      shoppingCart.forEach((product) => {
        if (product.id !== productId) {
          oldShoppingCart.push(product);
        } else {
          oldCount = product.quantity;         
        }   
      }) 
      findProduct.quantity = oldCount - 1;
      if (findProduct.quantity == 0) {
        oldShoppingCart.filter((item) => {
          return findProduct.id != item.id
        });
        setShoppingCart([... oldShoppingCart]);
        return;
      } else {
        setShoppingCart([... oldShoppingCart, findProduct]);
      }
    } 
  }

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckingForm( {...checkingForm, [name]: value});
  }

  const handleOnSubmitCheckoutForm = async () => {
    let url = "http://localhost:3001/store/";
    try {
      const res = await axios.post(url, {user: {"name": checkingForm.name, "email": checkingForm.email}, shoppingCart: shoppingCart})
      .catch((error) => setReceiptError(error.message)); //setReceiptError(error.message)    
      setReceipt(res.data.purchase.newPurchase.receipt);
      setShoppingCart([]);
      console.log("before");
      console.log(checkingForm);
      setCheckingForm({name:"", email:""});
      console.log("after");
      console.log(checkingForm);
      setReceiptError("");
    } catch (error) {
      setReceiptError(error.message);
      //error.response.data.error.message
    }  
  }


  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} products={products} allProducts={allProducts}
      handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} error={error}
      receipt={receipt} setReceipt={setReceipt} receiptError={receiptError} setReceiptError={setReceiptError}
      checkingForm={checkingForm}/>
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
            <Route path="/*" element={<NotFound />}/> //fiz this part
          </Routes> 

        </main>       
        </BrowserRouter>
    </div>
  )
}

// axios.post(`${LOCAL_PATH}`, {user:checkoutForm, shoppingCart:shoppingCart})
// .then(function (response) {
//   console.log(response);
//   const receiptData = response.data.purchase.receipt;
//   setReceipt(receiptData);
//   setCheckoutForm({name:"", email:""});
//   setShoppingCart([]);
//   setError(null);
//   setOrderSent(true);
// })
// .catch(function (error) {
//   const errorData = error.response.data.error.message;
//   setError(errorData);
// })

  

// let url = "http://localhost:3001/store/";
// //const res = await axios.post(url, {user: {"name": checkingForm.name, "email": checkingForm.email}, shoppingCart: shoppingCart})
// axios.post(url, {user:{"name": checkingForm.name, "email": checkingForm.email}, shoppingCart:shoppingCart})
// .then(function (response) {
//   console.log(response);
//   setReceipt(res.data.purchase.newPurchase.receipt);
//   setShoppingCart([]);
//   setCheckingForm({name: "", email: ""});
//   console.log(checkingForm);
//   setReceiptError("");
// })
// .catch(function (errorD) {
//   setReceiptError(errorD.message);
// }) 