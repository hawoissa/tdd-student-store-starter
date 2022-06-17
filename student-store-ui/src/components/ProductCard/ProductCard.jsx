import * as React from "react"
import "./ProductCard.css"
// import ProductGrid from "../ProductGrid/ProductGrid"

export default function ProductCard(props) {
   return (
      <div className="productcard">
         <div className="imgs">
            <img src={props.pic} alt="" />
         </div>
         <h3>{props.name}</h3>
         <h5>${props.price}</h5>
      </div>
   )
}