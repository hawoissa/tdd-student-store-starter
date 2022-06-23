import * as React from "react"
import "./ShoppingCart.css"
import pic1 from "../pictures/shoppingcart.png"
import { useState } from "react";

export default function ShoppingCart(props) {
   let show = props.shoppingCart.length > 0 ? "" : "hidden"; 
   return (
      <div className="shoppingcart">
         <div className="title">
            <h1>Shopping Cart <img src={pic1} alt="Pic" /></h1>
         </div>
         {props.shoppingCart.length > 0 ? <Cart shoppingCart={props.shoppingCart} products={props.products} 
         allProducts={props.allProducts} 
          /> : <EmptyCart />}
      </div>
   )
}

function EmptyCart(props) {
   return (
      <div className="emptyCart">
         <p>No items added to cart yet. Start shopping now!</p>
      </div>
   )
}

function Cart(props) {
   let totalAmount = 0;
   return (
      <div className="cart">
         <div className="list">
            <div className="top">
               <div className="name"><h4>Name</h4></div>
               <div><h4>Quantity</h4></div>
               <div><h4>Unit Price</h4></div>
               <div><h4>Cost</h4></div>
            </div>
            <div className="bottom">             
               { props.shoppingCart.map((item) => {
                  let found = props.allProducts.find((product) => {
                     return item.id == product.id;
                 });    
                 totalAmount += item.quantity * found.price;
                 return (<ProductRow key={found.id} product={found} shoppingCart={props.shoppingCart}
                  />)
               })}
            </div>
         </div>
         <div className="prices">
               <div className="subtotal">
                  <div><h5>Subtotal</h5></div>
                  <div><h5>${totalAmount.toFixed(2)}</h5></div>
               </div>
               <div className="taxes">
                  <div><h5>Taxes and Fees</h5></div>
                  <div><h5>${(totalAmount * 0.0875).toFixed(2)}</h5></div>
               </div>
               <div className="total">
                  <div><h5>Total</h5></div>
                  <div><h5>${(totalAmount * 1.0875).toFixed(2)}</h5></div>
               </div>
         </div>
      </div>
   )
}

function ProductRow(props) {
   
   let name = props.product.name;
   let quantity;
   props.shoppingCart.forEach((item) => {
    if (props.product.id == item.id) {
      quantity = item.quantity;
    }  
  })
   let cost = quantity * props.product.price;
   
   return (
      <div className="productRow">
         <div className="name"><p>{name}</p></div>
         <div className="quantity"><p>{quantity}</p></div>
         <div className="price"><p>${(props.product.price).toFixed(2)}</p></div>
         <div className="cost"><p>${(cost).toFixed(2)}</p></div>
      </div>
   )
}