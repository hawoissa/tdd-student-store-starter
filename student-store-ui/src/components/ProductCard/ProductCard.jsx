import * as React from "react"
import "./ProductCard.css"
// import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
   return (
      <div className="productcard">
         <div className="imgs">
            <Link to={`/products/${props.id}`}><img src={props.pic} alt="" /></Link>
         </div>
         <h3>{props.name}</h3>
         <h5>${props.price}</h5>
      </div>
   )
}