import * as React from "react"
import "./ProductCard.css"
// import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
   let description = props.showDescription ? "show" : ""; 
   return (
      <div className={`productcard ${description}`}>
         <h1>Product #{props.id}</h1>
         <div className="imgs">
            <Link to={`/products/${props.id}`}><img src={props.pic} alt="" /></Link>
         </div>
         <h3>{props.name}</h3>
         <h5>${props.price}</h5>
         <p>{props.description}</p>
      </div>
   )
}