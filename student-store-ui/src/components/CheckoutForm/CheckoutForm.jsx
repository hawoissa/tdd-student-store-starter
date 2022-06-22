import * as React from "react"
import "./CheckoutFrom.css"
import pic2 from "../pictures/dollar.png"

export default function CheckoutForm(props) {
   return (
     <div className="checkoutform">
      <div className="content">
         <div className="payment-title"><h1>Payment Info <img src={pic2}/></h1></div>
         <div className="input" id="name">
            <p>Name</p>
            <input type="name" name="name" value="checkoutForm.name" id="name"
            placeholder="Student Name"/>
            {/* add on change handleOnCheckoutFormChange */}
         </div>
         <div className="input" id="email">
            <p>Email</p>
            <input type="email" name="email" value="checkoutForm.email" id="email"
            placeholder="student@codepath.org"/>
            {/* add on change handleOnCheckoutFormChange */}
         </div>
         <div className="checkout-button">
            <button id="checkout">Checkout</button>
         </div>
     </div>
   </div>
   )
}