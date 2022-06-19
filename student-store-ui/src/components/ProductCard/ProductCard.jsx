import * as React from "react"
import "./ProductCard.css"
// import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
   // true if the product card have been clicked on
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

            {/* onClick={() => props.handleAddItemToCart(props.product.id)}
            onClick={() => props.handleRemoveItemFromCart(props.product.id)} */}

            <div className="quantity-area">
               <div className="quantity">   
                  <div className="btns">
                     <button className="add">
                        <i className="material-icons">add</i>
                     </button>
                     <button className="remove">
                        <i className="material-icons">remove</i>
                     </button>  
                  </div>
               </div>
               <div className="number">
               {/* <p>{props.quantity != 0 ? props.quantity : ""}</p> */}
               <p>5</p> {/* <<<< PLACEHOLDER */}
               </div>  
            </div>


         </div>
      </div>
   )
}