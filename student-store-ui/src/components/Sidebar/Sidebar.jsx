import * as React from "react"
import "./Sidebar.css"
import arrow from "../pictures/right-arrow.png"
import pic1 from "../pictures/shopping-cart.png"
import pic2 from "../pictures/dollar.png"
import pic3 from "../pictures/clipboard.png"

export default function Sidebar( ) {
  return (
    <section className="sidebar">
      
      {/* <div className="arrow">
        <img src={arrow} alt="" />
      </div> */}
      <div className="i">
        <img src={arrow} alt="" />
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
      </div>
    </section>
  )
}
