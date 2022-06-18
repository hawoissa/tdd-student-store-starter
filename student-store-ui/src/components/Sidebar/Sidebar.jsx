import * as React from "react"
import "./Sidebar.css"
import arrow from "../pictures/arrow-right.png"
import pic1 from "../pictures/shoppingcart.png"
import pic2 from "../pictures/dollar.png"
import pic3 from "../pictures/clipboardwhite.png"

export default function Sidebar( ) {
  return (
    <section className="sidebar">
      <div className="content">
        <div className="arrow">
          <button><img src={arrow} alt="arrow"/></button>
        </div>
        <div className="i">
          <button><img src={pic1} alt="shopping cart" /></button>
          <button><img src={pic2} alt="money" /></button>
          <button><img src={pic3} alt="clipboard" /></button>
        </div>
      </div>
    </section>
  )
}
