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
            <input className="checkout-form-input" type="name" name="name"  id="name" value={props.checkingForm.name} 
            placeholder="Student Name" onChange={(e) => props.handleOnCheckoutFormChange(e.target.name, e.target.value)}/>
         </div>
         <div className="input" id="email">
            <p>Email</p>
            <input className="checkout-form-input" type="email" name="email"  id="email" value={props.checkingForm.email} 
            placeholder="student@codepath.org" onChange={(e) => props.handleOnCheckoutFormChange(e.target.name, e.target.value)}/>
         </div>
         <div className="checkout-button">
            <button id="checkout" onClick={(e) => props.handleOnSubmitCheckoutForm(e)}>Checkout</button>
            {props.receiptError ? <Error error={props.receiptError}/> : 
            props.receipt.length > 0 ? <Receipt receipt={props.receipt} 
            setShoppingCart={props.setShoppingCart} /> : <></>}
         </div>
     </div>
   </div>
   )
}

function Receipt(props) {
   // console.log(props.receipt);
   // function receiptMaker(str) {
   //    return (
   //       <p>{str}</p>
   //    )
   // }
   
   return (
      <div className="receipt">
         <div className="success">
            <h2>Success!</h2>
         </div>
         <h4>Receipt</h4>
         <div className="content">     
            <ul>
            { props.receipt.map((str) => {   
                 return (<li>{str}</li>)
            })}
            </ul>
         </div>
      </div>
   )
}

function Error(props) {
   console.log(props.error);
   return (
      <div className="error">
         <h2>Error</h2>
         <p>This error might be happening because: </p>
         <p>Blank name or email.</p>
         <p>or 0 items in cart.</p>
      </div>
   )
}