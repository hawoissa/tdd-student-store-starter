import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import arrow1 from "../pictures/arrow-right.png"
import arrow2 from "../pictures/arrowleft.png"
import pic1 from "../pictures/shoppingcart.png"
import pic2 from "../pictures/dollar.png"
import pic3 from "../pictures/clipboardwhite.png"

export default function Sidebar(props) {

  let open = props.isOpen ? "show" : "notshow";
  
  return (
    <section className= "sidebar" >
      <div className={open}>
        <div className="content-closed" >
          <div className="arrow">
            <button onClick={() => props.handleOnToggle()}><img src={arrow1} alt="arrow" /></button>
          </div>
          <div className="i">
            <button onClick={() => props.handleOnToggle()}><img src={pic1} alt="shopping cart" /></button>
            <button onClick={() => props.handleOnToggle()}><img src={pic2} alt="money" /></button>
            <button onClick={() => props.handleOnToggle()}><img src={pic3} alt="clipboard" /></button>
          </div>
        </div>
      
        <div className="content-open" >
          <div className="button-close">
            <button onClick={()=> props.handleOnToggle()}><img src={arrow2} alt="arrow" /></button>
          </div>
          <div className="shoppingcart">
            <ShoppingCart shoppingCart={props.shoppingCart} products={props.products} allProducts={props.allProducts}/>
          </div>
          <div className="checkout">
            <CheckoutForm shoppingCart={props.shoppingCart} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}/>
          </div>
        </div>
      </div>
    </section>
  )
}
