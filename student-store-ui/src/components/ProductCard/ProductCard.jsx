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
         <div className="words">
            <div className="info">
               <p>{props.name}</p>
               <p className="rating">⭐️⭐️⭐️⭐️⭐️</p>
               <h5>${props.price}</h5>
            </div>
            <div className="description">
               <p>{props.description}</p>
            </div>
            <div className="quantity">

            </div>
         </div>
      </div>
   )
}