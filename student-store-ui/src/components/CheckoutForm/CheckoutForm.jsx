import * as React from "react"
import "./CheckoutFrom.css"
import pic2 from "../pictures/dollar.png"

export default function CheckoutForm(props) {
   
   return (
     <div className="checkout-form">
      <div className="content">
         <div className="payment-title"><h1>Payment Info <img src={pic2}/></h1></div>
         <div className="input" id="name">
            <p>Name</p>
            <input className="checkout-form-input" type="name" name="name"  id="name"
            placeholder="Student Name" onChange={(e) => props.handleOnCheckoutFormChange(e.target.name, e.target.value)}/>
         </div>
         <div className="input" id="email">
            <p>Email</p>
            <input className="checkout-form-input" type="email" name="email"  id="email"
            placeholder="student@codepath.org" onChange={(e) => props.handleOnCheckoutFormChange(e.target.name, e.target.value)}/>
         </div>
         <div className="checkout-button">
            <button id="checkout" onClick={(e) => props.handleOnSubmitCheckoutForm}>Checkout</button>
         </div>
     </div>
   </div>
   )
}