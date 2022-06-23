import * as React from "react"
import "./ProductCard.css"
// import ProductGrid from "../ProductGrid/ProductGrid"
import { Link } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function ProductCard(props) {
   // true if the product card have been clicked on
   let description = props.showDescription ? "show" : ""; 
   // quantity={props.shoppingCart.length!=0 && props.shoppingCart.find((i) => i.itemId == product.id)!=undefined ? props.shoppingCart.find((i) => i.itemId == product.id).quantity : 0};
   const quantity = props.shoppingCart && props.shoppingCart.length > 0 && props.shoppingCart.find((item) => item.id == props.id)?.quantity || 0;
   return (
      <div className={`productcard ${description}`}>
         
         
         {/* <h1>Product #{props.id}</h1> */}
         <div className="imgs">
            <Link to={`/products/${props.id}`}><img src={props.pic} alt="" /></Link>
         </div>

         <div className="words">
            <div className="info">
               <p>{props.name}</p>
               <p className="rating">⭐️⭐️⭐️⭐️⭐️</p>
               <h5>${props.price?.toFixed(2)}</h5>
            </div>

            <div className="description">
               <p>{props.description}</p>
            </div>

            <div className="quantity-area">
               <div className="quantity">   
                  <div className="btns">
                     <button className="add" onClick={() => props.handleAddItemToCart(props.id)}>
                        <i className="material-icons">add</i>
                     </button>
                     <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.id)}>
                        <i className="material-icons">remove</i>
                     </button>  
                  </div>
               </div>
               <div id="number">
               <p id="productQuantity">{quantity != 0 ? quantity : ""}</p>
               {/* quantity={props.shoppingCart.length!=0 && props.shoppingCart.find((i) => i.itemId == product.id)!=undefined ? props.shoppingCart.find((i) => i.itemId == product.id).quantity : 0} */}
               </div>  
            </div>

         </div>
      </div>
   )
}